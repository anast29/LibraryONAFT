import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Exhibition} from '../../exhibition';
import {Books} from '../books';
import $ from 'jquery';
@Component({
    selector: 'app-exhibition',
    templateUrl: './exhibition.component.html',
    styleUrls: ['./exhibition.component.css']
})
export class ExhibitionComponent implements OnInit {

    exhibitions: Exhibition;

    constructor(private http: HttpService) {
    }

    ngOnInit() {
        this.http.getExhibitions().subscribe((data: Exhibition) => this.exhibitions = data);
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
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

}
