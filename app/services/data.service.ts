import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from "lodash";

@Injectable()
export class DataService {

    itemDetail = [];
    private serverUrl = "http://52.211.44.71:5555/api/v1/getassortiment";
    applicationData;

    constructor(private http: HttpClient) { }

    getData() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers, params: ({}) });
    }

    getItemDetail(item) {
        this.itemDetail = item;
        console.dir(this.applicationData);
    }

    productDetail() {
        return this.itemDetail
    }

    createRequestHeader() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json",
        });
        return headers;
    }
}