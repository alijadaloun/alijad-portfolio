import { Component } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-quote-bar',
  standalone: true,
  imports: [],
  templateUrl: './quote-bar.component.html',
  styleUrl: './quote-bar.component.css'
})
export class QuoteBarComponent {
    quotes: string[] = [];
  currentQuote: string = 'Loading inspiring quotes...';
  private currentIndex = 0;
  private subscription: Subscription = new Subscription();
  constructor(private quoteService: QuoteService) {}
  ngOnInit() {
    this.loadQuotes();
  }
   loadQuotes() {
    this.quoteService.getQuotes().subscribe({
      next: (data: any) => {
        if (Array.isArray(data)) {
          this.quotes = data.map((item: any) => 
            item.content && item.author ? `${item.content} - ${item.author}` : item.content || item
          );
        }
        
        if (this.quotes.length > 0) {
          this.currentQuote = this.quotes[0];
          this.startRotation();
          
        }
      },
      error: (error) => {
        console.error('Error loading quotes:', error);
        this.quotes = [
          "The only way to do great work is to love what you do. - Steve Jobs",
          "Innovation distinguishes between a leader and a follower. - Steve Jobs"
        ];
        this.currentQuote = this.quotes[0];
        this.startRotation();
      }
    });
  }
    startRotation() {
    // Change quote every 8 seconds
    this.subscription = interval(8000).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.quotes.length;
      this.currentQuote = this.quotes[this.currentIndex];
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}