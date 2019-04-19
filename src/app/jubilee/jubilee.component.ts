import {Component, OnInit} from '@angular/core';
import {Scientists} from '../scientists';
import {HttpService} from '../http.service';

@Component({
    selector: 'app-jubilee',
    templateUrl: './jubilee.component.html',
    styleUrls: ['./jubilee.component.css']
})
export class JubileeComponent implements OnInit {
    scientists: Scientists[] = [];

    constructor(private httpservice: HttpService) {
    }

    ngOnInit() {
        this.httpservice.getScientists().subscribe((data: Scientists[]) => this.scientists = data);

    }

    searchDate(date) {
        const TODAY = new Date();
        const NEW_DATE = TODAY.getFullYear() - Number(date);
        return NEW_DATE;
    }

}
