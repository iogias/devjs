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
  async post(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    const resdata = await res.json();
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
