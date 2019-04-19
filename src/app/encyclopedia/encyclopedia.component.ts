import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Scientists} from '../scientists';
import $ from 'jquery';

@Component({
    selector: 'app-encyclopedia',
    templateUrl: './encyclopedia.component.html',
    styleUrls: ['./encyclopedia.component.css']
})
export class EncyclopediaComponent implements OnInit {

    constructor(private httpservice: HttpService) {
    }

    letters = ['А', 'Б', 'В', 'Г', 'Д', 'Ж', 'З', 'І', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'Ф', 'Х', 'Ч', 'Ш', 'Я'];
    scientists: Scientists[] = [];
    img;
    name;
    birth_day;
    death_day;
    short_desc;
    bio;
    works;

    ngOnInit() {
        this.httpservice.getScientists().subscribe((data: Scientists[]) => this.scientists = data);
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

    viewBio() {
        $('.letter_card').css({'display': 'none'});
        $('.bio').css({'display': 'flex'});
        $('.vertical').css({'display': 'none'});
        $('.breadcrumb-list').css({'display': 'none'});
        $('.breadcrumb-bio').css({'display': 'flex'});
    }

    returnPage() {
        $('.letter_card').css({'display': 'flex'});
        $('.bio').css({'display': 'none'});
        $('.vertical').css({'display': 'flex'});
        $('.breadcrumb-list').css({'display': 'flex'});
        $('.breadcrumb-bio').css({'display': 'none'});
    }

    addSubstr(text) {
        if (text.length >= 144) {
            text = text.substring(0, 144);
            const lastIndex = text.lastIndexOf(' ');       // позиция последнего пробела
            text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
        }
        return text;


    }

    openNav() {
        document.getElementById('aside').style.width = '50px';
    }

    closeNav() {
        document.getElementById('aside').style.width = '0';
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


}
