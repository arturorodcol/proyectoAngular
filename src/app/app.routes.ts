import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { VerClientesComponent } from './pages/clientes/ver-clientes/ver-clientes.component';
import { AgregarClientesComponent } from './pages/clientes/agregar-clientes/agregar-clientes.component';

export const routes: Routes = [
    
    //solo me renderiza un pedazo
    //http://localhost:4200/
    //http://     localhost:    4200         /servicios
    //protocolo    dominio     puertolocal   phat
    //path... recibe el titulo de mi pagina y el componente que quiero que se renderice
    {
        path: '',
        title: 'Inicio',
        component: InicioComponent,
    },
    {
        path: 'servicios',
        title: 'Servicios',
        component: ServiciosComponent,
    },
    {
        path: 'acercade',
        title: 'Quienes Somos',
        component: AcercaDeComponent,
    },
    {
        path: 'contactos',
        title: 'contactos',
        component: ContactoComponent,
    },
    {
        path: 'clientes',
        title: 'Clientes Potenciales',
        component: VerClientesComponent,
    },
    {
        path: 'add-clientes',
        title: 'Agregar Clientes',
        component: AgregarClientesComponent,
    },

];