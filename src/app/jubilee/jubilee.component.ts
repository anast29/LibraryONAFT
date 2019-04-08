import {Component, OnInit} from '@angular/core';
import {Scientists} from '../scientists';
import {HttpService} from '../http.service';

@Component({
    selector: 'app-jubilee',
    templateUrl: './jubilee.component.html',
    styleUrls: ['./jubilee.component.css']
})
export class JubileeComponent implements OnInit {
    scientists: Scientists;

    constructor(private httpservice: HttpService) {
    }

    ngOnInit() {
        this.httpservice.get('http://192.168.1.39:8000/scientists/').subscribe((data: Scientists) => this.scientists = data);

    }

    searchDate(date) {
        const TODAY = new Date();
        const NEW_DATE = TODAY.getFullYear() - Number(date);
        console.log(NEW_DATE);
        return NEW_DATE;
    }

}
