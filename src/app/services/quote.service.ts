import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, config, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class QuoteService {
  private fallbackQuotes =[

  ];

  constructor(private http: HttpClient) { }
   getQuotes(): Observable<any> {
    return this.http.get('https://programming-quotes-api-pi.vercel.app/quotes/random');

   }
  }
