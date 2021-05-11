import { Injectable }                                             from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError }        from 'rxjs/operators';

class HttpClientOptions {
    body?: any;
    headers?: HttpHeaders;
    observe?: 'body' | 'events' | 'response';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
}

@Injectable()
export class ApiService {

    constructor(
        private http: HttpClient
    ) { }

    /**
     * Create a new request with dynamic method, params, body, headers, observer
     * @param {string} method
     * @param {string} url
     * @param {object} options
     */
    request<T>(
        method: 'GET' | 'POST' | 'DELETE' | 'HEAD' | 'PUT' | 'PATCH' | 'OPTIONS',
        url: string,
        options: { body?: any, headers?: object, observe?: 'body' | 'events' | 'response', params?: object, responseType?: 'arraybuffer' | 'blob' | 'json' | 'text' } = {}
    ): Observable<T> {

        let httpClientOptions = new HttpClientOptions();
        httpClientOptions.body = options.body;
        httpClientOptions.headers = this.headersManager(options.headers);
        httpClientOptions.params = this.paramsManager(options.params);
        httpClientOptions.observe = options.observe || 'body';
        httpClientOptions.responseType = options.responseType;

        return this.http.request(method, url, httpClientOptions).pipe(
            map(res => this.handleSuccess(res)),
            catchError(err => this.handleError(err))
        );
    }

    /**
     * Return response
     * @param {any} response
     */
    private handleSuccess(response: any) {
        return response;
    }

    /**
     * Return error
     * @param {HttpErrorResponse} err
     */
    private handleError(err: HttpErrorResponse) {
        return throwError(err);
    }

    /**
     * Add dynamically params
     * @param {object} data
     */
    private paramsManager(data: object): HttpParams {
        // Initialize Params object
        let queryParams = new HttpParams();
        // Begin assigning parameters
        for (let key in data) {
            queryParams = queryParams.append(key, data[key]);
        }
        return queryParams;
    }

    /**
     * Add dynamically headers
     * @param {object} data
     */
    private headersManager(data: object): HttpHeaders {
        // Initialize Headers object
        let headers = new HttpHeaders();
        // Begin assigning headers
        for (let key in data) {
            headers = headers.set(key, data[key]);
        }
        return headers;
    }

}


