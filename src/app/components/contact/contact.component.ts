import { Component, inject, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../core/services/animation';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  private fb = inject(FormBuilder);
  animationService = inject(AnimationService);

  contactForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    service: ['', Validators.required],
    projectBrief: ['', [Validators.required, Validators.minLength(10)]]
  });

  currentYear = new Date().getFullYear();
  isSubmitted = signal(false);
  showSuccess = signal(false);

  services = [
    'Web & Mobile Development',
    'IT Consulting & Managed Services',
    'UI/UX & Graphic Design',
    'API & Integrations',
    'AI & Data Solutions',
    'Other'
  ];

  ngAfterViewInit() {
    this.animationService.observeElements('.animate-on-scroll');
  }

  onSubmit() {
    this.isSubmitted.set(true);
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      this.showSuccess.set(true);
      this.contactForm.reset();
      this.isSubmitted.set(false);
      
      // Hide success message after 5 seconds
      setTimeout(() => this.showSuccess.set(false), 5000);
    }
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
