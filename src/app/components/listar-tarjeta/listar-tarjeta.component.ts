import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { TarjetaCredito } from "src/app/models/TarjetaCredito";
import { TarjetaService } from "src/app/services/tarjeta.service";

@Component({
  selector: "app-listar-tarjeta",
  templateUrl: "./listar-tarjeta.component.html",
  styleUrls: ["./listar-tarjeta.component.css"],
})
export class ListarTarjetaComponent implements OnInit {
  listTarjetas: TarjetaCredito[] = [];

  constructor(
    private _tarjetaService: TarjetaService,
    private toastr: ToastrService
  ) {
    this._tarjetaService.reloadTarjetas$.subscribe(() => {
      this.obtenerTarjetas();
    });
  }

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas() {
    this._tarjetaService.obtenerTarjetas().then((res) => {
      console.log("res", res);
      this.listTarjetas = res;
      // doc.forEach((element: any) => {
      //   this.listTarjetas.push({
      //     id: element.payload.doc.id,
      //     ...element.payload.doc.data()
      //   });
      // });
      console.log(this.listTarjetas);
    });
  }

  eliminarTarjeta(id: any) {
    this._tarjetaService
      .eliminarTarjeta(id)
      .then(() => {
        this.toastr.success(
          "La Tarjeta fue eliminada con exito!",
          "Registro Eliminado"
        );
        this._tarjetaService.reloadTarjetas$.next();
      })
      .catch((error) => {
        this.toastr.error("Opss.. ocurrio un error", "Error");
        console.log(error);
      });
  }

  editarTarjeta(tarjeta: TarjetaCredito) {
    this._tarjetaService.addTarjetaEdit(tarjeta);
  }

  onWheel(event: WheelEvent): void {
    if (event.deltaY > 0) this.scrollToRight();
    else this.scrollToLeft();
  }

  scrollToLeft(): void {
    document.getElementById("tarjetas")!.scrollLeft += 400;
  }

  scrollToRight(): void {
    document.getElementById("tarjetas")!.scrollLeft -= 400;
  }
}
