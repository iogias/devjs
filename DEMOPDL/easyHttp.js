/*
HTTP Request Library
*/

/*
HTTP Request Library
*/

class EasyHTTP {
  // GET HTTP Request
  async get(url) {
    const res = await fetch(url);
    const resdata = await res.json();
    return resdata;
  }

  // POST HTTP Request
  async post(url, head, body) {
    let myHeaders = new Headers();
    for (let [k, v] of Object.entries(head)) {
      myHeaders.append(`${k}`, `${v}`);
    }
    const res = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: myHeaders,
      body,
      redirect: 'follow',
    });
    const resdata = await res;
    return resdata;
  }

  // PUT HTTP Request
  async put(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    const resdata = await res.json();
    return resdata;
  }

  // DELETE HTTP Request
  async delete(url) {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    });
    const resdata = await res.json();
    return resdata;
  }
}

// class EasyHTTP {
//   // GET HTTP Request
//   get(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err));
//     });
//   }

//   // POST HTTP Request
//   post(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err));
//     });
//   }

//   // PUT HTTP Request
//   put(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(data),
//       })
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err));
//     });
//   }

//   // DELETE HTTP Request
//   delete(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'DELETE',
//         headers: { 'Content-type': 'application/json' },
//       })
//         .then(res => res.json())
//         .then(() => resolve('Resource Deleted'))
//         .catch(err => reject(err));
//     });
//   }
// }
