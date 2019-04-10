import {Component, OnChanges, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Scientists} from '../scientists';
import {forEach} from '@angular/router/src/utils/collection';
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
    scientists: Scientists;
    img;
    name;
    birth_day;
    death_day;
    short_desc;
    bio;
    works;
    ngOnInit() {
        //  const size = 255,
        //     newsContent = $('.bottom-txt'),
        //     newsText = newsContent.text();
        // console.log(newsContent.text());
        // if (newsText.length > size) {
        //     newsContent.text(newsText.slice(0, size) + '...');
        // }
        this.httpservice.get('http://192.168.1.39:8000/scientists/').subscribe((data: Scientists) => this.scientists = data);
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



}
