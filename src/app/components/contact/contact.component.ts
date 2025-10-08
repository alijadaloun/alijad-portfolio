import { Component } from '@angular/core';
import { ContactCardComponent } from '../shared/contact-card/contact-card.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactCardComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
