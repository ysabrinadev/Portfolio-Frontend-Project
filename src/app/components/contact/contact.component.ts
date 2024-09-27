import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUserForm } from '../../interfaces/IUserForm';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {

  //Injeção de Dependência
  constructor(private formBuilder: FormBuilder) {

  };

  //HTML Form Inputs
  public contactForm = this.formBuilder.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    phoneNumber: [null, [Validators.required]],
    subject: [null, [Validators.required]],
    message: [null, [Validators.required]]
  });

  //Função para enviar os dados do formulário
  public submite() {
    const body: IUserForm = {
      name: this.contactForm.get('name')?.value,
      email: this.contactForm.get('email')?.value,
      phoneNumber: this.contactForm.get('phoneNumber')?.value,
      subject: this.contactForm.get('subject')?.value,
      message: this.contactForm.get('message')?.value,
    };

    if (this.contactForm.valid) {
      //Exibe somente os dados a serem enviados para a API
      console.log('Body data: ', body);

      //Exibe todos os dados do formulário
      console.log('Form data: ', this.contactForm.controls);
    }
    else {
      console.log('Fill in all required fields.')
    }
  };
}
