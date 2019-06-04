import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Exhibition} from '../../exhibition';
import * as $ from 'jquery';
@Component({
    selector: 'app-exhibition',
    templateUrl: './exhibition.component.html',
    styleUrls: ['./exhibition.component.css']
})
export class ExhibitionComponent implements OnInit {

    constructor(private http: HttpService) {
    }

    exhibitions: Exhibition;

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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

}
