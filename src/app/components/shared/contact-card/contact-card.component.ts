import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  @Input() title!: string; 
  @Input() link!: string;
  @Input() icon!: string;
  navigateToLink() {
    if (!this.link) return;
    // Open http(s) links in a new tab, leave mailto: and tel: to default behavior
    if (this.link.startsWith('http')) {
      window.open(this.link, '_blank', 'noopener,noreferrer');
    } else {
      // For mailto: and tel:, set location.href to trigger the client
      window.location.href = this.link;
    }
  }
}
