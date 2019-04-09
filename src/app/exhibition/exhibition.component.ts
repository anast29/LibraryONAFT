import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Exhibition} from '../../exhibition';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.css']
})
export class ExhibitionComponent implements OnInit {

  exhibitions: Exhibition;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('http://192.168.1.39:8000/virtualexhibition/').subscribe((data: Exhibition) => this.exhibitions = data);
  }

}
