import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
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


}