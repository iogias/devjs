document.getElementById('btn1').addEventListener('click', getText);
document.getElementById('btn2').addEventListener('click', getJSON);
document.getElementById('btn3').addEventListener('click', getAPI);

function getText() {
  fetch('data.txt')
    .then(res => res.text())
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

function getJSON() {
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.customers.forEach(function (customer) {
        output += `<li>${customer.id}</li>`;
        output += `<li>${customer.name}</li>`;
        output += `<li>${customer.email}</li>`;
        output += `<li>${customer.age}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getAPI() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}
