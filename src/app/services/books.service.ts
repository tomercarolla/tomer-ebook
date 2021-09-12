import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  key = "AIzaSyB7TFZn6Na-zQvIl8yF4hVzs5VgLCKkIjE";

  constructor(private http: HttpClient) { }

  getBooks(queryField: string): Observable<any> {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=10&keyes&key=${this.key}`);
  }
}
