import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {EncyclopediaComponent} from './encyclopedia/encyclopedia.component'
import {PhotoComponent} from './photo/photo.component';
import {PatentComponent} from './patent/patent.component';
import {JubileeComponent} from './jubilee/jubilee.component';
import {ExhibitionComponent} from './exhibition/exhibition.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { ErrorComponent } from './error/error.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {BooksModule} from './books/books.module';
import {BooksRoutingModule} from './books/books-routing.module';

const routes: Routes = [
    {path: '', loadChildren: './home/home.module#HomeModule'},
    {path: 'encyclopedia_of_scientists', loadChildren: './encyclopedia/encyclopedia.module#EncyclopediaModule'},
    {path: 'books', loadChildren: './books/books.module#BooksModule'},
    {path: 'patent', loadChildren: './patent/patent.module#PatentModule'},
    {path: 'jubilee', loadChildren: './jubilee/jubilee.module#JubileeModel'},
    {path: 'exhibition', loadChildren: './exhibition/exhibition.module#ExhibitionModule'},
    // {path: 'photo', component: PhotoComponent},
    {path: '404', component: ErrorComponent},
    {path: '**', redirectTo: '404'}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PhotoComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
        NgxPageScrollCoreModule.forRoot({duration: 1000}),
        NgxPageScrollModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
