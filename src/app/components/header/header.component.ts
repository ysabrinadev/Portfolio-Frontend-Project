import { Component } from '@angular/core';

@Component({
  selector: 'app-header', //gera a tag html (reutizável)
  standalone: true,
  imports: [], //armazena todas as dependências (imports)
  templateUrl: './header.component.html', //puxa a estrutura html desse componente em específico
  styleUrl: './header.component.scss' //puxa a estrutura do css desse componente em específico
})

export class HeaderComponent {

}
