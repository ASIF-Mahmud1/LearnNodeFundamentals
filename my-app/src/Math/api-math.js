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

  // const create=()=>{
  //   const data = { username: 'example' };
  //   return   fetch('https://example.com/profile', {
  //     method: 'POST', // or 'PUT',
  //     mode: 'no-cors', // no-cors, *cors, same-origin

  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
   
  // }
/////////////////////////////////////////

const create = ( blog) => {
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




/////////////////////////////////////////
  export {
    create,
    read,
   
  }

  /*
  http://localhost:4000/listWords
   .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  */