import { Component, OnInit } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [PersonaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
// implemente esta nueva funcionalidad 
// nombre variables arriba
//funciones abajo 
export class InicioComponent implements OnInit {
  nombre: string ='';
  //me ejecuto cada vez que cargo el componente 
  ngOnInit(): void {
    this.nombre = 'Mi nombre acá';
  }

  //funcion mostrar modal
  mostrarModal(): void {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question",
      width: '25em',
    });
  }
}
