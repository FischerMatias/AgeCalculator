import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IServiceCountry} from '../shared/service.interface';
import 'rxjs/add/operator/map';


@Injectable()
export class CountryDataService {
  private _http: Http;
  private url = 'http://restcountries.eu/rest/v2/all';

  constructor(http: Http) {
    this._http = http;
  }

  private buildOptions(): RequestOptions{
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }


  public GetAll(): Observable<IServiceCountry[]> {
      return this._http.get(this.url).map((r: Response) => r.json());
  }

}
