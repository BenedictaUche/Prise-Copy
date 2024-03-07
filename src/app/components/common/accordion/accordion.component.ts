import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() title!: string;
  @Input() isOpen = false;

  toggleAccordion(): void {
    this.isOpen = !this.isOpen;
  }
}
