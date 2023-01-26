import { FirestoreModule } from "@angular/fire/firestore";
import { ToastrModule } from "ngx-toastr";
import { AppComponent } from "./app.component";
import { CrearTarjetaComponent } from "./components/crear-tarjeta/crear-tarjeta.component";
import { ListarTarjetaComponent } from "./components/listar-tarjeta/listar-tarjeta.component";
import { environment } from "src/environments/environment";
import { NgModule } from "@angular/core";
import { provideFirebaseApp, getApp, initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { getStorage, provideStorage } from "@angular/fire/storage";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragScrollModule } from "ngx-drag-scroll";

@NgModule({
  declarations: [AppComponent, CrearTarjetaComponent, ListarTarjetaComponent],
  imports: [
    FirestoreModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragScrollModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
