import { Component, OnInit } from '@angular/core';
import {BooksService} from "../services/books.service";
import {Book} from "../models/book.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  booksList;
  errorMessage!: 'No Books founded';

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
  }

  searchBooks(book: string) {
    this.booksService.getBooks(book).subscribe(
      (data) => {
        this.booksList = data.items;
        console.log(this.booksList);
        console.log(data);
      },
      (error: any) => {
        this.errorMessage = error;
      }
    )
  }

}
