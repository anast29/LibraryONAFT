import {Component, OnInit} from '@angular/core';
import $ from 'jquery';
import {HttpService} from '../http.service';
import {News} from '../news';

declare var $: $;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    news: News;
    constructor(private http: HttpService) {
    }

    ngOnInit() {
        $('.collapse').on('shown.bs.collapse', function () {
            $(this).parent().find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up').delay(200).fadeIn(500);
        }).on('hidden.bs.collapse', function () {
            $(this).parent().find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down').delay(200).fadeIn(500);
        });
        this.http.get('//library.onaft.edu.ua/api/news').subscribe((data: News) => this.news = data);
    }

}
