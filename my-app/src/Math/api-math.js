const read = () => {
  return fetch('http://localhost:5000', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log("Ere")
      console.log(err)
    })
}


const create = (blog) => {
  console.log(blog)
  return fetch('http://localhost:5000', {
    method: 'POST',
    // mode: 'no-cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blog),
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err)
    })
}
export {
  create,
  read,

}

