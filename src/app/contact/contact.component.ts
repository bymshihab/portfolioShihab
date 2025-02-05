import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  email = 'khaledshihab221@gmail.com';
  linkdin = 'https://www.linkedin.com/in/khaled-shihab-7b1b3b1b4/';
}
