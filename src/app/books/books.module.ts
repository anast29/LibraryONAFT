import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksComponent} from './books.component';
import {BooksRoutingModule} from './books-routing.module';

@NgModule({
    imports: [
      CommonModule,
      BooksRoutingModule
  ],
    declarations: [
    BooksComponent
  ]
})
export class BooksModule { }
