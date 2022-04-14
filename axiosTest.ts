import axios from 'axios'

const main = async () => {
  const pain = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.data)

  console.log(pain)
}

main()
