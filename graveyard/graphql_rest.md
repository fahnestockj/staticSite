---
title: "GraphQL and REST"
date: 2022-03-05T10:44:54-05:00
draft: false
showtoc: false
---

> ## What is REST?
Representation State Transfer an architectural style for APIs which aims to be lightweight, scalable, and flexible. RESTful API's follow this style by setting constraints like:
* clients and servers communicate resources with HTTP requests
* requests should be stateless meaning they only using the information on the request to determine the response
> ## What is GraphQL?
GraphQL is a widely used query language for APIs which treats the data as a graph of relationships rather than a more "linear" collection of data. 

### Example using the [JSON API Specification](https://jsonapi.org/)
Lets put together a basic blog app with the following mockup:

![post](https://climapp.nyc3.digitaloceanspaces.com/OtherImages/post.jpg)


Lets define a couple resource objects for this blog app. 
```js
  //post1 Resource Object
{
  id: 'post1',
  type: 'posts',
  attributes: {
    title: 'Lorem'
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  relationships: {
    user: {
      data: {
        id: 'user1',
        type: 'users'
      }
    }
  }
}

  //user1 Resource Object
{
  id: 'user1',
  type: 'users',
  attributes: {
    name: 'bot1'
  },
  relationships: {
    organization: {
      data: {
        id: 'organization1',
        type: 'organizations'
      }
    },
    posts: {
      data: [
        {
          id: 'post1',
          type: 'posts'
        }
      ]
    }
  }
}

  //organization1 Resource Object
{
  id: 'organization1',
  type: 'organizations',
  attributes: {
    title: 'BotFarm Inc',
    description: '©2022 Farm Bots at BotFarm 🤠',
    lotsOfData: {
      //a lot of data
    }
  },
  relationships: {
    users: {
      data: [
        {
          id: 'user1',
          type: 'users'
        }
      ]
    }
  }
}
```
In order to fetch the necessary info to display the page from the mockups all three resources need to be fetched individually.

```ts
//Restful endpoints
//api/v1/posts/post1
//api/v1/users/user1
//api/v1/organizations/organization1

const post1 = await fetch('/api/v1/posts/post1')
  .then(res => res.json())

const user1 = await fetch(`/api/v1/users/${post1.relationships.user.data.id}`)
  .then(res => res.json())

const organization1 = await fetch(`/api/v1/organizations/${user1.relationships.organization.data.id}`)
  .then(res => res.json())

  //now we can finally render the page
```
[^1]

Notice:
* the chain of requests needed on the frontend to fetch the required data 
  
* the waste of the fetched data which isn't displayed (organization1's lotsOfData property)

* the performance slowdown of waiting on each http request to complete before starting the next

These problems make it difficult to efficiently display data from multiple resources on one page.

### Introducing GraphQL
GraphQL remedies these problems by adding a layer of abstraction over traditional HTTP requests. With a fully fledged GraphQL schema only one api endpoint is needed to gather all the data you need. Requests are customized using the query language to tailor fit the data you need cutting away the bloat. The schema enforces types, and creates an interface layer between the frontend and backend.

Many graphQL tutorials push for [schema driven development](https://blog.logrocket.com/code-first-vs-schema-first-development-graphql/) which enables both frontend and backend development to happen asynchronously once the schema has been agreed upon. 

### Resolvers
GraphQL is able to offer the flexibility of querying individual properties of each resource by requiring you to write resolvers for each property. Here's the basic layout of a resolver:

```js
fieldName: (parent, args, context, info) => data;
//parent: allows you to access the value from return of the parent resources resolver

//context: shareable information across the current operation (usually authentication for reads and writes)
```

When you create a GraphQL query or mutation the server fulfills the request by calling all the related resolvers and only returning once the resolvers **resolve.** 

### Tradeoffs
 
 The primary issue for these resolvers is setting up effective caching. Since all requests are through POST normal HTTP caching isn't available. Through some [shenanigans](https://blog.logrocket.com/http-caching-graphql/) you can use GET, but it adds complexity. 

### Abstraction in Software

Abstraction in software lives on a spectrum between being useful and flexible. Generally frameworks tend towards being as flexible as possible while a package like dayJS tend towards being useful for a specific use case. React is an example of a very flexible framework which has spawned other frameworks just to enforce more opinionated useful features for example Vercel's NextJS. [Learn more about the spectrum here!](https://youtu.be/mVVNJKv9esE)

Relating this back to the API structures REST is a very flexible architecture which enforces minimal standards and focuses on remaining scalable. GraphQL enforces some very useful patterns like having a central typesafe schema and involving the relationships of resources in the fetching process. For these benefits it loses flexibility such as HTTP caching, and the required format of resolvers.


[^1]: Fetch is [soon to be a part of Nodejs](https://news.ycombinator.com/item?id=30161626) and the built in http module can no longer keep me up at night and ruin my technical interviews 🙏.