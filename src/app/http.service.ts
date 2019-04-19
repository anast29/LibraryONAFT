import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    url = 'https://library.onaft.edu.ua/api';
    public responseCache = new Map();
    constructor(private httpClient: HttpClient) {
    }
    public getNews(): Observable<any> {
        // return this.httpClient.get(this.url + '/news');
        const newsCache = this.responseCache.get(this.url + '/news');
        if (newsCache) {
            return of(newsCache);
        }
        const response = this.httpClient.get<any>(this.url + '/news');
        response.subscribe(data => this.responseCache.set(this.url + '/news', data));
        return response;
    }

    public getBooks(): Observable<any> {
        //  return this.httpClient.get(this.url + '/books');
        const newsCache = this.responseCache.get(this.url + '/books');
        if (newsCache) {
            return of(newsCache);
        }
        const response = this.httpClient.get<any>(this.url + '/books');
        response.subscribe(data => this.responseCache.set(this.url + '/books', data));
        return response;
    }

    public getScientists(): Observable<any>  {
       // return this.httpClient.get(this.url + '/scientists');
        const newsCache = this.responseCache.get(this.url + '/scientists');
        if (newsCache) {
            return of(newsCache);
        }
        const response = this.httpClient.get<any>(this.url + '/scientists');
        response.subscribe(data => this.responseCache.set(this.url + '/scientists', data));
        return response;
    }

    public getPatentes() {
        return this.httpClient.get(this.url + '/patents');
    }

    public getExhibitions() {
        return this.httpClient.get(this.url + '/virtualexhibition');
    }
}
