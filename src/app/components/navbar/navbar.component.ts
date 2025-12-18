import { Component, NgModule } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { ExperienceComponent } from "../experience/experience.component";
import { EducationComponent } from "../education/education.component";
import { ContactComponent } from "../contact/contact.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from "../shared/card/card.component";
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    links = [
    { path: '/home', label: 'Home' },
    { path: '/education', label: 'Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
    { path: '/projects', label: 'Projects' },
    { path: 'skills', label: 'Skills' },
  ];
    isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

}
