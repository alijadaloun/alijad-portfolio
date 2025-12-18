import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements AfterViewInit {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() description?: string;
  @Input() date?: string;
  @Input() extraInfo?: string;
  @Input() icon?: string;
  @Input() link?: string;
    constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.addMouseMoveListener();
  }

  addMouseMoveListener() {
    this.elementRef.nativeElement.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = this.elementRef.nativeElement.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      this.elementRef.nativeElement.style.setProperty('--mouse-x', `${x}%`);
      this.elementRef.nativeElement.style.setProperty('--mouse-y', `${y}%`);
    });
  }
}
