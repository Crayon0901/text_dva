import request from '../utils/request';

export function query() {
  return request('https://api.douban.com/v2/book/1220562',{
  	method: 'GET',
	mode:'cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    }});
}
