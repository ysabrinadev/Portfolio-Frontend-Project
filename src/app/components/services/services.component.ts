import { Component } from '@angular/core';
import { IServicesList } from '../../interfaces/IServicesList';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  // Variáveis
  public servicesList: IServicesList[] = [
    {
      title: "UI Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque in quos hic architecto minus beatae, illum modi obcaecati doloribus eligendi cupiditate rem possimus, officia commodi voluptates consectetur asperiores impedit?",
    },
    {
      title: "Frontend Developer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque in quos hic architecto minus beatae, illum modi obcaecati doloribus eligendi cupiditate rem possimus, officia commodi voluptates consectetur asperiores impedit?",
    },
    {
      title: "Backend Developer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque in quos hic architecto minus beatae, illum modi obcaecati doloribus eligendi cupiditate rem possimus, officia commodi voluptates consectetur asperiores impedit?",
    },
    {
      title: "Data Analyses",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque in quos hic architecto minus beatae, illum modi obcaecati doloribus eligendi cupiditate rem possimus, officia commodi voluptates consectetur asperiores impedit?",
    },

  ];

}
