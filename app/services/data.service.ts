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


    data =
        {
            ASSORTIMENT: [{
                category: "DRANKEN",
                products: [{
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj  sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj  sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                }
                ]
            }, {
                category: "BROODJES",
                products: [{
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                }
                ]
            }, {
                category: "SALADE",
                products: [{
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                }
                ]
            }, {
                category: "BROODJES",
                products: [{
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                },
                {
                    name: "Rood fruit - Avocado Smoothie sdlfjs fjdsl fjsdflk sdjlfj ",
                    price: 0.79,
                    kcal: 37,
                    thumbnailURL: "https://images.unsplash.com/photo-1534409707960-668dbea5c35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6c33f19565164ed8d45b37b62820d7&auto=format&fit=crop&w=100&q=100"
                }
                ]
            }]
        }
}