import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductoAddComponent } from './components/producto-add.component';
import { ProductoDetailComponent } from './components/producto-detail.component';
import { ProductoEditComponent } from './components/producto-edit.component';
import { PublicacionAddComponent } from './components/publicacion-add.component';
import { PostVentaComponent } from './components/postVenta.component';
import { ContactanosComponent } from './components/contactanos.component';
import { PostContactoComponent } from './components/postContacto.component';
import { LoginComponent } from './components/login.component';
import { RegistroComponent } from './components/registro.component';
import { PostRegistroComponent } from './components/postRegistro.component';
import { PublicacionListComponent } from './components/publicacion-list.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'productos', component: ProductosListComponent},
	{path: 'crear-producto', component: ProductoAddComponent},
	{path: 'producto/:id', component: ProductoDetailComponent},
	{path: 'editar-producto/:id', component: ProductoEditComponent},
	{path: 'crear-publicacion', component: PublicacionAddComponent},
	{path: 'postVenta', component: PostVentaComponent},
	{path: 'contactanos', component: ContactanosComponent},
	{path: 'postContacto', component: PostContactoComponent},
	{path: 'login', component: LoginComponent},
	{path: 'registro', component: RegistroComponent},
	{path: 'postRegistro', component: PostRegistroComponent},
	{path: 'blogs', component: PublicacionListComponent},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);