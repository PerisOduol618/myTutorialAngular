import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";

  httpHeaders = new HttpHeaders({ 'content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  getAllTutorial(): Observable<any> {
    return this.http.get(this.baseurl + '/api/peris',
    { headers: this.httpHeaders })
  }

  getOneTutorial(id): Observable<any> {
    return this.http.get(this.baseurl + '/api/tutorial/tutorial-id/' + id + '/',
    { headers: this.httpHeaders })
  }

  updateTutorial(tutorial): Observable<any> {
    const body = {image: tutorial.image, title: tutorial.title, description: tutorial.description, content: tutorial.content, link: tutorial.link, published: tutorial.published, date_created: tutorial.date_created, date_updated: tutorial.date_updated};
    return this.http.put(this.baseurl + '/api/tutorial/tutorial-id/' + tutorial.id + '/', body,
    { headers: this.httpHeaders });
  }


  createTutorial(tutorial): Observable<any> {
    const body = {image: tutorial.image, title: tutorial.title, description: tutorial.description, content: tutorial.content, link: tutorial.link, published: tutorial.published, date_created: tutorial.date_created, date_updated: tutorial.date_updated};
    return this.http.post(this.baseurl + '/api/peris' , body,
    { headers: this.httpHeaders });
  }

  deleteTutorial(id): Observable<any> {
    return this.http.delete(this.baseurl + '/api/tutorial/tutorial-id/' + id + '/',
    { headers: this.httpHeaders });
  }
}




