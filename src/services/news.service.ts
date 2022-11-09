import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  getTopHeadLines(){
  return this.http.get ('https://newsapi.org/v2/everything?q=tesla&from=2022-10-08&sortBy=publishedAt&apiKey=88c76ba60f76469f8a8bd29347d66fa8s');
return
}
}