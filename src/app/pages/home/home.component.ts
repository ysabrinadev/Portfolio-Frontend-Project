import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { IntroductionComponent } from '../../components/introduction/introduction.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, IntroductionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}


