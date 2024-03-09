import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  subscribeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  carouselImages = [
    { src: '../../../assets/images/admin_tucshop.png', alt: 'Prise admin tucshop' },
    { src: '../../../assets/images/carousel_1.png', alt: 'Prise admin tucshop' },
    { src: '../../../assets/images/carousel_2.png', alt: 'Prise admin tucshop' },
    { src: '../../../assets/images/carousel_3.png', alt: 'Prise admin tucshop' },
    { src: '../../../assets/images/carousel_4.png', alt: 'Prise admin tucshop' },
  ]

  ngOnInit(): void {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    console.log('Submitted!', this.subscribeForm.value);
  }
}
