import { Component } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { ContadorComponent } from '../../components/contador/contador.component';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [TablaComponent, ContadorComponent],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
    // estamos definiendo un tipo de dato
  titulo: string = 'Componente Persona';
  edad: number = 25;
 
  ocultar: boolean = true; 
  titulotabla: string = '';
  contador: number = 0;

  // estamos definiendo los valores
  users: { id: number; name: string; gender: string }[] = [
    { id: 0, name: 'Pepito', gender:'mascúlino' },
    { id: 1, name: 'Laura', gender:'femenino'  },
    { id: 2, name: 'Andrea', gender:'femenino'  },
    { id: 3, name: 'Andriana', gender:'femenino'  },
    { id: 4, name: 'Lina', gender:'femenino'  },
    { id: 5, name: 'Liz', gender:'femenino'  },
    { id: 6, name: 'Luz', gender:'femenino'  },
    { id: 7, name: 'Ana', gender:'femenino'  },
    { id: 8, name: 'Lucia', gender:'femenino'  },
    { id: 9, name: 'Lucinda', gender:'femenino'  },
    { id: 10, name: 'Luciana', gender:'femenino'  },
  ];

  recibirContador(numero: number){
    this.contador = numero; 
  }
}

