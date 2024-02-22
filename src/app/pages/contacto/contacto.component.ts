import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  //nuevo elemento
  contactoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    mensaje: new FormControl('Mensaje por defecto'),
  })
  //función (sin usar ReactiveFormsModule); 
  //permite cambios en el formulario desde consola
  enviarContacto() {
    debugger;
    console.log('Mi formulario', this.contactoForm.value);
  }

}
