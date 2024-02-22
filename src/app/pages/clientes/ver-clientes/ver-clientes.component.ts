import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../../core/interfaces/cliente';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ver-clientes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ver-clientes.component.html',
  styleUrl: './ver-clientes.component.css'
})
export class VerClientesComponent implements OnInit {

  misClientes: Cliente[] = [];
  mostrar: boolean = false;

  ngOnInit(): void {
    this.misClientes.push({
      id: 1,
      nombre: 'Pepito',
      direccion: 'Calle 0 No 00 00',
      telefono: '3213213213',
      email: 'correo1@prueba.com',
      tipoDocumento: 'cedula de ciudadania',
      numeroDocumento: '123123123',
      estado: true,
    },
    {
      id: 2,
      nombre: 'Lupita',
      direccion: 'Calle 0 No 00 00',
      telefono: '3223213213',
      email: 'correo2@prueba.com',
      tipoDocumento: 'cedula de ciudadania',
      numeroDocumento: '122223123',
      estado: true,
    },
    {
      id: 3,
      nombre: 'Pepita',
      direccion: 'Calle 0 No 00 00',
      telefono: '3313213213',
      email: 'correo3@prueba.com',
      tipoDocumento: 'cedula de ciudadania',
      numeroDocumento: '123323123',
      estado: false,
    }
    );

    //Iteración de clientes (imprimir en consola y iyecto dependencias y llamar componentes)
    this.misClientes.forEach((cliente) => {
      console.log("Mis Clientes:", cliente);
    }
    )
  }

  @Input() tituloMisClientes: string = 'Tabla TS Mis clientes';

  eliminarCliente(idCliente: number): void {

    // array                          //for que hace filtro
    this.misClientes = this.misClientes.filter(
      (cliente) => cliente.id !== idCliente
    );
    this.misClientes.slice(idCliente,1)
    console.log('Eliminar', this.misClientes);
  }

  // addCliente = new FormGroup ({
  //   id: new FormControl(this.misClientes.length+1,),
  //   nombre: new FormControl('', Validators.required),
  //   direccion: new FormControl('', [Validators.required]),
  //   telefono: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.email, Validators.required]),
  //   tipoDocumento: new FormControl('', [Validators.required]),
  //   numeroDocumento: new FormControl('', [Validators.required]),
  //   estado: new FormControl(false,[Validators.required]),
  // });

  // enviarContacto(){
  //   console.log('Enviar', this.addCliente.value);
  // }
  // showagregarclientes({
  //   this.mostrar.
  // }
  // )
}
