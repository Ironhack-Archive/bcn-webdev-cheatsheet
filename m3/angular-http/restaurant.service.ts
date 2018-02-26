import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

// import { environment } from '../../environments/environment';

@Injectable()
export class MyService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getList(): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/restaurants`)
      .toPromise();
  }

  getOneById(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/restaurants/${id}`)
      .toPromise();
  }

  // how to gain access to the full response object (headers, status code, etc...)
  // and then still resolve with the resposne body (json)

  getFoobar(): Promise<any> {
    const options = {
      observe: 'response'
    };
    return this.httpClient.get(`${this.baseUrl}/restaurants`, options)
      .toPromise()
      .then((res: HttpResponse<Object>) => res.body);
  }
}
