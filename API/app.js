document.getElementById('get-all-data').addEventListener('click', loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'data.json', true);

  //   xhr.onprogress = function () {
  //     console.log('Loading ...');
  //   };

  xhr.onload = function () {
    if (this.status === 200) {
      let response = JSON.parse(this.responseText);
      let output = '';
      response.customers.forEach(customer => {
        output += `
       <ul>
       <li>${customer.id}</li>
       <li>${customer.name}</li>
       <li>${customer.email}</li>
       <li>${customer.age}</li>
       </ul>
       `;
      });
      document.getElementById('output').innerHTML = output;
    }
  };
  xhr.onerror = function () {
    console.log('Request error ...');
  };
  xhr.send();
}

const posts = [
  { title: 'Post One', body: 'Body one' },
  { title: 'Post Two', body: 'Body two' },
  { title: 'Post Three', body: 'Body three' },
];

// ASYNC CALLBACK
function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title} : ${post.body}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post Four', body: 'Body four' }, getPosts);
