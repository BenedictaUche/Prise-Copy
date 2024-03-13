import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as Hammer from 'hammerjs';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() images: { src: string; alt: string }[] = [];
  currentSlide = 0;
  interval: any;

  @ViewChild('dotsContainer', { static: false }) dotsContainer!: ElementRef;
  @ViewChild('carouselContainer', { static: false }) carouselContainer!: ElementRef;

  constructor(private renderer: Renderer2) {}

  initializeSwipe(): void {
    const element = this.carouselContainer.nativeElement;
    const mc = new Hammer(element);

    mc.on('swipeleft', () => {
      this.nextSlide();
    });

    mc.on('swiperight', () => {
      this.prevSlide();
    });
  }

  // ngAfterViewInit(): void {
  //   this.createDots();
  //   this.initializeSwipe();
  // }

  ngOnInit(): void {
    this.showSlides(this.currentSlide);
    this.startCarousel();
  }

  ngAfterViewInit(): void {
    this.createDots();
    this.initializeSwipe();
  }

  startCarousel(): void {
    this.interval = setInterval(() => {
      this.showSlides(this.currentSlide + 1);
    }, 2000);
  }

  stopCarousel(): void {
    clearInterval(this.interval);
  }

  resumeCarousel(): void {
    this.startCarousel();
  }

  nextSlide(): void {
    this.showSlides(this.currentSlide + 1);
    this.stopCarousel();
  }

  prevSlide(): void {
    this.showSlides(this.currentSlide - 1);
    this.stopCarousel();
  }

  showSlides(index: number): void {
    const slides = document.getElementsByClassName('carousel-item') as HTMLCollectionOf<HTMLElement>;

    if (index >= slides.length) {
      this.currentSlide = 0;
    } else if (index < 0) {
      this.currentSlide = slides.length - 1;
    } else {
      this.currentSlide = index;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[this.currentSlide].style.display = 'block';
    this.updateDots();
  }

  createDots(): void {
    const dotsContainer = this.dotsContainer.nativeElement;
    for (let i = 0; i < this.images.length; i++) {
      const dot = this.renderer.createElement('div');
      this.renderer.addClass(dot, 'dot');
      this.renderer.appendChild(dotsContainer, dot);
    }
    this.updateDots();
  }

  updateDots(): void {
    const dots = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }

    dots[this.currentSlide].classList.add('active');
  }
}
