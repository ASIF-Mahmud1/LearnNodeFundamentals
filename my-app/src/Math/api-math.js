const read =() => {
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

  export {
   // create,
    read,
   
  }

  /*
  http://localhost:4000/listWords
  */