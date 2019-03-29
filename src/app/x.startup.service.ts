import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

declare var require: any;
const { map, toPromise } = require('rxjs/operators');

@Injectable()
export class XStartupService {

    private _startupData: any;

    constructor(private http: HttpClient) { }

    load(): Promise<any> {

        this._startupData = null;

        return this.http
            .get('https://reqres.in/api/users?page=2')
            .toPromise()
            .then((data: any) => this._startupData = data)
            .catch((err: any) => Promise.resolve());
    }

    get startupData(): any {
        return this._startupData;
    }
}
