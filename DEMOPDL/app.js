const btnControl = document.querySelector('.btn-control');
const url =
  'http://localhost/pdl-tangerang-kab/public_html/wspdl-tangerang-kab/api/server';
const http = new EasyHTTP();
const ui = new UI();
let uri = window.location.pathname;

loadEventListener();

function loadEventListener() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTokens);

  btnControl.addEventListener('click', function (e) {
    e.preventDefault();
    let idx = this.getAttribute('id');
    if (idx == 'btn-login') {
      const userid = document.getElementById('userid').value;
      const passwd = document.getElementById('password').value;
      const head = getHeaders({
        data: {
          userid,
          passwd,
        },
      });
      const body = getBody({
        method: 'login',
        data: {
          userid,
          passwd,
        },
      });
      // console.log(body);
      postLogin(url, head, body);
    } else if (idx === 'btn-nopd') {
      const token = document.getElementById('token').value;
      const npwpd = document.getElementById('npwpd').value;
      const tahun = document.getElementById('tahun').value;
      const params = {
        token,
        npwpd,
        tahun,
        method: 'get_nopd',
      };
      getNopd(url, params);
    }
  });
}

function postLogin(url, head, body) {
  http
    .post(url, head, body)
    .then(data => {
      // const { code, params } = data.result;
      // if (code !== 0) {
      //   ui.showAlert('Userid atau password tidak sesuai', 'danger');
      // } else {
      //   const { token, npwpd } = params.data;
      //   const saveMe = [token, npwpd];
      //   storeTokens(saveMe);
      //   window.location.pathname = '/DEMOPDL/dashboard.html';
      // }
      console.log(data);
    })
    .catch(err => {
      ui.showAlert('Terjadi kesalahan pada server', 'danger');
      console.log(err);
    });
}

function getNopd(url, params) {
  http
    .post(url, params)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      // ui.showAlert('Terjadi kesalahan pada server', 'danger');
      console.log(err);
    });
}

function getTokens() {
  let tokens;
  if (localStorage.getItem('tokens') === null) {
    tokens = [];
  } else {
    tokens = JSON.parse(localStorage.getItem('tokens'));
  }
  tokens.forEach(function (token) {
    if (uri === '/DEMOPDL/dashboard.html') {
      let tokenInput = document.getElementById('token');
      let npwpdInput = document.getElementById('npwpd');
      tokenInput.value = token[0];
      npwpdInput.value = token[1];
    }
  });
}

function storeTokens(token) {
  clearStoreTasks();
  let tokens;
  if (localStorage.getItem('tokens') === null) {
    tokens = [];
  } else {
    tokens = JSON.parse(localStorage.getItem('tokens'));
  }
  tokens.push(token);
  localStorage.setItem('tokens', JSON.stringify(tokens));
}

function clearStoreTasks() {
  localStorage.clear();
}

function getHeaders(dt) {
  let atime = new Date().getTime();
  let xtime = atime.toString().slice(0, 10);
  let inttime = eval(xtime) + 25200;

  let user = dt.data['userid']; //get_var('username');
  let pwd = dt.data['passwd']; //get_var('password');
  let key = pwd;
  let hash = CryptoJS.HmacSHA256(user + '&' + inttime, key);
  let base64 = hash.toString(CryptoJS.enc.Base64);

  const head = {
    userid: user,
    signature: base64,
    key: inttime,
  };
  return head;
}

function getBody(dt) {
  // let atime = new Date().getTime();
  // let xtime = atime.toString().slice(0, 10);
  // let inttime = eval(xtime) + 25200;

  // let user = dt.data['userid']; //get_var('username');
  // let pwd = dt.data['passwd']; //get_var('password');
  // let key = pwd;
  // let hash = CryptoJS.HmacSHA256(user + '&' + inttime, key);
  // let base64 = hash.toString(CryptoJS.enc.Base64);

  // const headers = {
  //   headers: {
  //     userid: user,
  //     signature: base64,
  //     key: inttime,
  //   },
  // };

  const par = {
    jsonrpc: '2.0',
    method: dt.method,
    params: [
      {
        data: [dt.data],
      },
    ],
    id: 1,
  };
  return JSON.stringify(par);
}
