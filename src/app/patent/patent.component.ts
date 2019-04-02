import {Component, OnInit} from '@angular/core';
import $ from 'jquery';
import {HttpService} from '../http.service';
import {HttpClient} from '@angular/common/http';
import {Patent} from '../patent';
@Component({
    selector: 'app-patent',
    templateUrl: './patent.component.html',
    styleUrls: ['./patent.component.css'],
    providers: [HttpService]
})
export class PatentComponent implements OnInit {

    // patents: Patent[] = [];
    patents: Patent;
    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.httpService.get('http://192.168.1.39:8000/patents/').subscribe((data: Patent) => this.patents = data);
    }

}
