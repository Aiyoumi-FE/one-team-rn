/*
 * fetch的3个公共方法(待完善)
 * send(method, url, data, callback)
 * post(url, data, callback)
 * get(url, data, callback)
 * add by wzy on 2018/03/14
 */
import React, {Component} from 'react';

class FetchUtils extends React.Component {
  static send(method, url, data, callback) {
    let request;
    if (method === 'get') {
      request = new Request(url, {
        method: 'GET',
        headers: ({
          'Content-Type': 'application/json'
        })
      });
    } else if (method === 'post') {
      request = new Request(url, {
        method: 'POST',
        headers: ({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(data)
      });
    }
    fetch(request).then((jsonData) => {
        callback(jsonData);
      }).catch((error) => {
        alert(error);
      });
  }
  static post(url, data, callback){
    this.send('post', url, data, callback);
  }
  static get(url, data, callback){
    this.send('get', url, data, callback);
  }
}

module.exports = FetchUtils;