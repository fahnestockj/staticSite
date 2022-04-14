import fetch from 'node-fetch'

const main = async () => {
  const pain = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => data.json())
  console.log(pain)

  const pain2 = await fetch(`https://jsonplaceholder.typicode.com/todos/${pain.id}`)
    .then(data => data.json())
  console.log(pain2)
}

main()