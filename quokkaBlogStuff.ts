
const array1 = ['foo']
const array3 = array1
array1.push('bar')
const array2 = array1
console.log(array1)
console.log(array2 === array3)




const string2 = 'foo'



const obj1 = {
  foo: 'foo'
}
const obj2 = {
  foo: 'foo'
}

console.log(obj1 === obj2)
console.log(obj1.foo === obj2.foo)




const objstring1 = new String('stringing') 
console.log(objstring1)


const objectString1 = new String('foo')
const objectString2 = new String('foo')
//Reference equality
console.log(objectString1 === objectString2)
console.log(objectString1.valueOf() === objectString2.valueOf())

