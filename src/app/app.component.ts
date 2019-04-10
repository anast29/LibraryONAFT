import {Component, OnInit} from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LibraryONAFT';
  ngOnInit(): void {
      $(function() {
          $(window).scroll(function() {
              const winTop = $(window).scrollTop();
              if (winTop >= 100) {
                  $('header').addClass('sticky-header');
              } else {
                  $('header').removeClass('sticky-header');
              }
          });
      });
  }
}
