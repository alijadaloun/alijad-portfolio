import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class QuoteService {
  private fallbackQuotes =[
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "The best way to predict the future is to invent it. - Alan Kay"
  ];

  constructor(private http: HttpClient) { }
   getQuotes(): Observable< any> {
    
     return this.http.get<any>('http://api.quotable.io/quotes/random?limit=5').pipe(
        tap({
        next: (quotes) => console.log('🟢 Stream next:', quotes),
        error: (err) => console.log('🔴 Stream error:', err),
        complete: () => console.log('⚫ Stream complete')
      }),
      
      // Additional debugging for specific data
      tap(quotes => {
        console.group('📦 Quote Data Analysis');
        console.log('Total quotes:', quotes.length);
        console.table(quotes.map((q: any) => ({
          Author: q.author,
          'Content Length': q.content.length,
          Tags: q.tags?.join(', ')
        })));
        console.groupEnd();
      })      
    
    )
    

  }

}
