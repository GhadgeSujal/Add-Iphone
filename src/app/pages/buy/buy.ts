import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

type ColorOption = {
  label: string;
  value: string;
  img: string;
};

@Component({
  selector: 'app-buy',
  imports: [ReactiveFormsModule, NgIf, NgFor],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ],
  templateUrl: './buy.html',
  styleUrl: './buy.scss',
})
export class Buy {
  private fb = inject(FormBuilder);

colorOptions: ColorOption[] = [
  { label: 'Dark-Blue', value: 'Blue', img: 'assets/gallery/iphone-blue.png' },
  { label: 'Orange', value: 'Orange', img: 'assets/gallery/iphone-orange.png' },
  { label: 'White', value: 'White', img: 'assets/gallery/iphone-white.png' },
  // { label: 'Dark-Blue', value: 'Blue', img: 'assets/gallery/iphone-blue.png' },
  // { label: 'Orange', value: 'Orange', img: 'assets/gallery/iphone-orange.png' },
  // { label: 'White', value: 'White', img: 'assets/gallery/iphone-white.png' },
];


  submitted = false;
  sending = false;
  sent = false;
  
form = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(2)]],
  email: ['', [Validators.required, Validators.email]],
  color: ['Blue', [Validators.required]],
});


  get selectedImage(): string {
  const val = this.form.value.color ?? 'Blue';
  return this.colorOptions.find((c) => c.value === val)?.img ?? this.colorOptions[0]!.img;
}


  submit(): void {
    this.submitted = true;
    this.sent = false;
    if (this.form.invalid || this.sending) return;

    this.sending = true;

    // fake delay for demo
    window.setTimeout(() => {
      this.sending = false;
      this.sent = true;
      alert('Pre‑order Submitted!');

      this.form.reset({ color: 'Blue' });
      this.submitted = false;

      window.setTimeout(() => (this.sent = false), 2500);
    }, 900);
  }
}
