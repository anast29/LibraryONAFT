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
        this.httpService.get('//library.onaft.edu.ua/api/patents/').subscribe((data: Patent) => this.patents = data);
        if (window.pageYOffset > document.body.scrollTop) {
            document.getElementById('aside').style.top = '0';
        }
        const h_hght = 80; // высота шапки
        const h_mrg = 0;     // отступ когда шапка уже не видна
        $(function() {
            $(window).scroll(function() {
                const top = $(this).scrollTop();
                const elem = $('#aside');
                if (top + h_mrg < h_hght) {
                    elem.css('top', (h_hght - top));
                } else {
                    elem.css('top', h_mrg);
                }
            });
        });
    }

    openNav() {
        document.getElementById('aside').style.width = '250px';
    }

       closeNav() {
        document.getElementById('aside').style.width = '0';
    }

}
