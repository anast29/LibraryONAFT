import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Patent} from '../patent';
@Component({
    selector: 'app-patent',
    templateUrl: './patent.component.html',
    styleUrls: ['./patent.component.css'],
    providers: [HttpService]
})
export class PatentComponent implements OnInit {
    // patents: Patent;
    constructor(private httpService: HttpService) {
    }

    public patents: Patent[] = [];

    static openNav() {
        document.getElementById('aside').style.width = '250px';
    }

    static closeNav() {
        document.getElementById('aside').style.width = '0';
    }

    ngOnInit() {
        this.httpService.getPatentes().subscribe((data: Patent[]) => this.patents = data);
        if (window.pageYOffset > document.body.scrollTop) {
            document.getElementById('aside').style.top = '0';
        }
    }

}
