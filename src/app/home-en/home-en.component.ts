import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {News} from '../news';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-home-en',
  templateUrl: './home-en.component.html',
  styleUrls: ['./home-en.component.css']
})
export class HomeEnComponent implements OnInit {
    news: News;
    constructor(private http: HttpService) {
    }

  ngOnInit() {
      $('.collapse').on('shown.bs.collapse', function () {
          $(this).parent().find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up').delay(200).fadeIn(500);
      }).on('hidden.bs.collapse', function () {
          $(this).parent().find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down').delay(200).fadeIn(500);
      });
      this.http.getNews().subscribe((data: News) => this.news = data);
  }

}
