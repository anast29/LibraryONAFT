import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Books} from '../books';
import $ from 'jquery';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    books: Books;

    constructor(private http: HttpService) {
    }

    ngOnInit() {
        $(function () {
            $(window).scroll(function () {
                const winTop = $(window).scrollTop();
                if (winTop >= 1000) {
                    $('.arrow-up').css({'opacity': '1', 'position': 'fixed'});
                } else {
                    $('.arrow-up').css({'opacity': '0'});
                }
            });
        });
        this.http.get('//library.onaft.edu.ua/api/books/').subscribe((data: Books) => this.books = data);
    }
    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
