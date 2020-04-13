/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author Harish Chand
 * @license MIT
 *
 */

class EasyHTTP {
  // Make http GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make http POST request

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make http PUT request

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make http DELETE request

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'delete',
        headers: { 'Content-type': 'application/json' },
      })
        .then(res => res.json())
        .then(data => resolve('Resource Deleted'))
        .catch(err => reject(err));
    });
  }
}
