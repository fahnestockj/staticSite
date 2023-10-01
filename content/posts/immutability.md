---
title: "Immutability and React!"
date: 2022-02-12T10:02:24-05:00
draft: false
showtoc: false
---
## What is it
 Mutability in Javascript refers to the ability to change the state of an object after its creation. 

In Javascript some examples of immutable objects are language primitives. As the lowest atomic level of the language, primitives are immutable which allows easy comparison between values.

For example string primitives cannot be modified after they're created.
```js
const string1 = 'foo'
string1.concat('bar')
console.log(string1) //foo
```
`string1` is not actually modified by its method, instead the method returns a new string with the concatenation complete.

This is in contrast with Arrays which are a mutable.
```js
const array1 = ['foo']
array1.push('bar')
console.log(array1) //['foo','bar']
```
Here the method modifies the original object rather than creating a new one.

So why are there so many packages and frameworks trying to enforce **immutability** into objects and arrays? (Redux, Immer, Immutable.js). And why should we enforce immutability if mutable objects are an essential part of Javascript?

### Reference vs Value equality in Javascript
```js
const obj1 = {
  foo: 'foo'
}
const obj2 = {
  foo: 'foo'
}

console.log(obj1 === obj2) //false
console.log(obj1.foo === obj2.foo) //true
```

Strings in Javascript are immutable allowing for easy comparison of equality. Objects on the other hand are mutable with many properties to compare making checking equality more complicated.

The strict equality operator `===` performs an efficient shallow comparison which can compare primitives easily, but won't try to dig into the properties of an object. Instead when applied to objects it only compares the reference of the object. 

Objects and Arrays are the only built in mutable objects in Javascript and both are compared by reference when used with a shallow equality operator.

A deep equality check (value equality) for mutable objects and arrays require digging to the values within the object which can be a complex and inefficient operation. To solve this problem packages like Immer and Immutable.js have been written to enforce immutable data structures. These packages use optimization techniques like [structural sharing](https://youtu.be/I7IdS-PbEgI) to cut down on the inefficiency of creating copies of the objects.

## React and Immutability

The main benefits of React come from some sophisticated change detection to only update the DOM when it has to. React is unopinionated about whether you use mutable or immutable data however it can be better optimized using immutable data. 
React offers a `PureComponent` along with a `shouldComponentUpdate()` method which can be easily implemented with immutable data to greatly increase performance. 

Pure components implement the `shouldComponentUpdate()` method with a shallow prop and state comparison to decide whether to re-render the component. This shallow comparison is all that's needed to decide whether the data has changed since the immutable data will have a new reference if it changed. 

```js
 shouldComponentUpdate: function(nextProps, nextState){
   return shallowCompare(this, nextProps, nextState)
 }

 function shallowCompare(instance, nextProps, nextState){
   return (nextProps === instance.props && nextState === instance.state)
 }
```


Clearly for React immutability is a net positive as in many ways it matches the way the framework thinks. Immutability **can** help keep an application architecture simple and make it easier to reason about however one size doesn't fit all. There's some hype surrounding immutability which is dangerous as it can introduce complexity if misused. It's important to consider some [contrary views as well](https://desalasworks.com/article/immutability-in-javascript-a-contrarian-view/) and consider if it's worth the tradeoffs.


