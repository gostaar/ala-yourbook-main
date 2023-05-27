import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { environment } from '../environments/environment';
import { books } from '../config/book.mock';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }
  getBooks() : any{
    //this.httpClient.get(environment.apiUrl)
    return books
  }
}
