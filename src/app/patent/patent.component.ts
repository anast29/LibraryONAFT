import {Component, OnInit} from '@angular/core';
import $ from 'jquery';
import {HttpService} from '../http.service';
@Component({
    selector: 'app-patent',
    templateUrl: './patent.component.html',
    styleUrls: ['./patent.component.css']
})
export class PatentComponent implements OnInit {
    patents = ['1', '2', '3'];
    values = ['Hi', 'Hello', 'Goodbye'];

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.httpService.get('').subscribe()
    }

}
