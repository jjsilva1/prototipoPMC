import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent,
    ProductoAddComponent,
    ProductoDetailComponent,
    ProductoEditComponent,
    PublicacionAddComponent,
    PostVentaComponent,
    ContactanosComponent,
    PostContactoComponent,
    LoginComponent,
    RegistroComponent,
    PostRegistroComponent,
    PublicacionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
