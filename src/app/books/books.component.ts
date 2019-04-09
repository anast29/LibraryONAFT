import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Books} from '../books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Books;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('http://192.168.1.39:8000/books/').subscribe((data: Books) => this.books = data);
  }
}
