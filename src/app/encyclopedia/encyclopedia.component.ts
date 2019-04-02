import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Scientists} from '../scientists';

@Component({
  selector: 'app-encyclopedia',
  templateUrl: './encyclopedia.component.html',
  styleUrls: ['./encyclopedia.component.css']
})
export class EncyclopediaComponent implements OnInit {

  constructor( private httpservice: HttpService) { }

  scientists: Scientists;
  ngOnInit() {
    this.httpservice.get('http://192.168.1.39:8000/patents/').subscribe((data: Scientists) => this.scientists = data);
  }

}
