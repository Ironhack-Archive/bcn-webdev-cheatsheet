import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

// import { environment } from '../../environments/environment';

@Injectable()
export class RestaurantService {

  private baseUrl = 'http://localhost:3000/restaurants';

  constructor(private httpClient: HttpClient) { }

  // options.withCredentials is always required
  // without it, the HttpClient service does not send cookies in a CORS context
  // cookies are required to keep a session in the Rest API

  getList(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}`, options)
      .toPromise();
  }

  // get() takes 2 arguments: url, options

  getOneById(id: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/${id}`, options)
      .toPromise();
  }

  // post() and put() take 3 arguments: url, data, options

  create(data): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}`, data, options)
      .toPromise();
  }

  // how to gain access to the full response object (headers, status code, etc...)
  // and then still resolve with the resposne body (json)

  getFoobar(): Promise<any> {
    const options = {
      withCredentials: true,
      observe: 'response'
    };
    return this.httpClient.get(`${this.baseUrl}/foobar`, options)
      .toPromise()
      .then((res: HttpResponse<Object>) => res.body);
  }
}
