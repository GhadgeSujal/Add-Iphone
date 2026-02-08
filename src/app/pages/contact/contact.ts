import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private fb = inject(FormBuilder);

  sending = false;
  sent = false;
  submitted = false;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  send(): void {
    this.submitted = true;
    this.sent = false;

    if (this.form.invalid || this.sending) return;

    this.sending = true;

    // Fake delay
    window.setTimeout(() => {
      this.sending = false;
      this.sent = true;
      alert('Email Sent!');

      // Reset form for nice UX
      this.form.reset();
      this.submitted = false;

      window.setTimeout(() => (this.sent = false), 2500);
    }, 900);
  }
}
