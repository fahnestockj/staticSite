---
title: "Abstraction in Software"
date: 2022-04-24T09:41:20-04:00
draft: true
showtoc: false
---

The goal of this post is to unpack [Cheng Lou's On the Spectrum of Abstraction Talk](https://www.youtube.com/watch?v=mVVNJKv9esE) given at React-Europe in 2016. 

The more I learn about the various competing javascript tools like frameworks, libraries, etc the more confused I am by how there isn't a set guide on *if you want A use B*. 
As a beginner most tools are entirely unclear on what their purpose is and why/how they help.
It also hurts that searching for comparisons between tools will only end in a sea of opinions with no clear answer.
Cheng Lou's take on abstraction has helped me clarify why comparisons like this are so difficult. As the goal of most tools is to make some form of abstraction. 

> "For software engineers the goal is not to create abstraction, abstraction is a means for us to achieve concrete use cases."

### Power
Power is the robustness or flexibility of the tool. This enables it to cover many concrete use cases. However the more powerful the tool is the more work is required to make it useful for specific use cases.

### Utility 
Utility is something which is immediately useful. It doesn't require previous understanding or a bunch of overhead to work.
React as a framework is not very **useful** however it's very **powerful**. 
When used by an engineer who can traverse down the levels of abstraction, some concrete use cases can be built and delivered as a product. 

![spectrumOfAbstraction](https://climapp.nyc3.digitaloceanspaces.com/OtherImages/spectrumOfAbstraction.jpg)

### The Cost of Abstraction
Unfortunately in order to traverse the levels of abstraction you pay a cost.
The ability to drill down through the abstraction to the concrete use cases costs energy and time. You need to learn the how the abstraction works, its patterns, rules, and implementations. 

Startups full of engineers aim to deliver a concrete product which requires no abstraction levels, it just works (and is hopefully useful!) For this they trade their time which costs the company **MONEY**.

The goal for software engineers to cover the most relevant green concrete implementations with the least amount of cost (traversal from the tool's nodes to the use case nodes.)

### Principle of Least Power 
This principle recommends using the least powerful tool for the desired use case. For example you probably don't want to go through the headaches of building a React project for a simple static site (like this one!) Instead a tool which lives closer to the desired use case should be used like [Hugo](https://gohugo.io/) the static site builder I use. This minimizes traversal of the levels of abstraction and therefore minimizes the cost. 

### Libraries vs Frameworks
 > "Libraries are me choosing nodes lower in the tree. Frameworks are me choose nodes higher in the tree where I might cover use cases you absolutely won't need. That's okay because someone will need them and we can all refer as a community to this single tool. And this is the purpose of a framework it's half social, half engineering."

Javascript has many micro modules from package managers like npm. So why not just cover a ton of use cases by installing a ton of packages.
Too many small use cases being abstracted at the lowest useful level creates another problem. If you just install a couple hundred npm packages and try to use all of them your software will become too dependent and tightly coupled to work with. Any breaking change from any update would cause a panic of trying to learn what the package does making the code unmaintainable, and slow to work with. 

> "Lots of problems in software engineering arise from a bad understanding of where we should be in the levels of abstraction."

More power enables more reuse and flexibility. However this comes at a cost of generalizing. As you go more abstract you lose situational-specific properties. Properties are the unique features you can have when your product is not overly general. For a Saas startup these are the main selling points of your product.

Abstractions reduce expressivity in a principled way. Restraining expressivity to offer something else.

Some examples:
* The map function enables parallelization by restricting the ability to access multiple elements in the list at the same time. 
* Redux enables a time traveling debugger by restricting mutability and state management

### Declarative vs Imperative 
The concept of declarative and imperative is often brought up in software. Something is considered declarative if you can declare something and have the details handled for you. Imperative on the other hand leaves you to fill in all the details. For example assembly language is very imperative, it enables some of the closest interaction with the hardware of the computer, but leaves a lot to be desired when you need to make anything complex happen. 
When something works declaratively you don't have to care how it works (it's powerful) but when it fails you're in much more trouble than you would be if you wrote it imperatively and can control the (useful) details. 

### DRY vs AHA Programming
DRY (don't repeat yourself) is a pretty self explanatory strategy for writing software. It enables you to definitively fix bugs since any changes you make spread everywhere. However it leads to quickly abstraction to some immediately useful abstractions which as the software grows can slow you down and add complexity due to not being powerful enough. AHA (avoid hasty abstractions) programming pushes you to avoid abstraction and repeat yourself at first. Then AHA! an abstraction may start to form once you have written the same thing one too many times. This short [blog post from Kent Dodds](https://kentcdodds.com/blog/aha-programming) highlights the different programming principles.

This ties back to my difficulties with comparing competing javascript libraries and frameworks. These tools are difficult to compare because most of them operate on different levels of abstraction. Comparing REST to GraphQL becomes apple and oranges because the amount of intended power and utility in the abstractions is different. GraphQL restricts freedoms in the way resources are fetched to offer customizable endpoints. Throughout abstraction similar terms are used to describe the same concept: Imperative or declarative, unopinionated or opinionated, power or utility. These terms try to describe whether the tool is trying to provide flexibility or value.
