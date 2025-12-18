// contact.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitStatus: 'success' | 'error' | '' = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Initialize EmailJS with your public key
    emailjs.init("6gu8lbmkKXzfjVCW3");
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitStatus = '';

      try {
        const templateParams = {
          name: `${this.contactForm.value.firstName} ${this.contactForm.value.lastName}`,
          email: this.contactForm.value.email,
          message: this.contactForm.value.message,
          to_name: 'Your Name'
        };

        await emailjs.send(
          'service_6zvxb8r',
          'template_gti5etq',
          templateParams
        );

        this.submitStatus = 'success';
        this.contactForm.reset();
      } catch (error) {
        console.error('Email failed:', error);
        this.submitStatus = 'error';
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.markAsTouched();
    });
  }

  get firstName() { return this.contactForm.get('firstName'); }
  get lastName() { return this.contactForm.get('lastName'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}