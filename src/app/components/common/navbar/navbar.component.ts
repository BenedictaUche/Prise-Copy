import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  scrollToAboutPrise() {
    const aboutPriseElement = document.getElementById('about-prise');
    if (aboutPriseElement) {
      aboutPriseElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
