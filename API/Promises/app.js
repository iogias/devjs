//document.getElementById('get-all-data').addEventListener('click', loadData);

const posts = [
  { title: 'Post One', body: 'Body one' },
  { title: 'Post Two', body: 'Body two' },
  { title: 'Post Three', body: 'Body three' },
];

// ASYNC CALLBACK
function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error mas ...');
      }
    }, 2000);
  });
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

createPost({ title: 'Post Four', body: 'Body four' })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
