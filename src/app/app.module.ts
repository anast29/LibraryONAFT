import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {EncyclopediaComponent} from './encyclopedia/encyclopedia.component';
import {BooksComponent} from './books/books.component';
import {PhotoComponent} from './photo/photo.component';
import {PatentComponent} from './patent/patent.component';
import {JubileeComponent} from './jubilee/jubilee.component';
import {ExhibitionComponent} from './exhibition/exhibition.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const rout: Routes = [
    {path: '', component: HomeComponent},
    {path: 'encyclopedia_of_scientists', component: EncyclopediaComponent},
    {path: 'books', component: BooksComponent},
    {path: 'patent', component: PatentComponent},
    {path: 'jubilee', component: JubileeComponent},
    {path: 'exhibition', component: ExhibitionComponent},
    {path: 'photo', component: PhotoComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        EncyclopediaComponent,
        BooksComponent,
        PhotoComponent,
        PatentComponent,
        JubileeComponent,
        ExhibitionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(rout)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
