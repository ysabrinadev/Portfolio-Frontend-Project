import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { IntroductionComponent } from '../../components/introduction/introduction.component';
import { EducationsComponent } from '../../components/educations/educations.component';
import { ServicesComponent } from '../../components/services/services.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, IntroductionComponent, EducationsComponent, ServicesComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}


