import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {PhotoComponent} from './photo/photo.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {ErrorComponent} from './error/error.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import { BioComponent } from './bio/bio.component';
import { HomeEnComponent } from './home-en/home-en.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'encyclopedia_of_scientists', loadChildren: './encyclopedia/encyclopedia.module#EncyclopediaModule'},
    {path: 'books', loadChildren: './books/books.module#BooksModule'},
    {path: 'patent', loadChildren: './patent/patent.module#PatentModule'},
    {path: 'jubilee', loadChildren: './jubilee/jubilee.module#JubileeModule'},
    {path: 'exhibition', loadChildren: './exhibition/exhibition.module#ExhibitionModule'},
    {path: 'bio', component: BioComponent},
    {path: '404', component: ErrorComponent},
    {path: '**', redirectTo: '404'}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PhotoComponent,
        HomeComponent,
        ErrorComponent,
        BioComponent,
        HomeEnComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled'
        }),
        NgxPageScrollCoreModule.forRoot({duration: 1000}),
        NgxPageScrollModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
