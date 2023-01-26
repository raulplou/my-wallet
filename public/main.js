"use strict";
(self["webpackChunkTarjetaCredito"] = self["webpackChunkTarjetaCredito"] || []).push([["main"],{

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_crear_tarjeta_crear_tarjeta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/crear-tarjeta/crear-tarjeta.component */ 8801);
/* harmony import */ var _components_listar_tarjeta_listar_tarjeta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/listar-tarjeta/listar-tarjeta.component */ 3823);



class AppComponent {
  constructor() {
    this.title = 'TarjetaCredito';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 12,
  vars: 0,
  consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-lg-8", "offset-lg-2"], [1, "card"], [1, "card-body"], [1, "titulo"], [1, "row", "mt-4"], [1, "col-lg-6"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "TARJETA DE CREDITO");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-crear-tarjeta");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-listar-tarjeta");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_components_crear_tarjeta_crear_tarjeta_component__WEBPACK_IMPORTED_MODULE_0__.CrearTarjetaComponent, _components_listar_tarjeta_listar_tarjeta_component__WEBPACK_IMPORTED_MODULE_1__.ListarTarjetaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _components_crear_tarjeta_crear_tarjeta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/crear-tarjeta/crear-tarjeta.component */ 8801);
/* harmony import */ var _components_listar_tarjeta_listar_tarjeta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/listar-tarjeta/listar-tarjeta.component */ 3823);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/app */ 9150);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);

















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.FirestoreModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_10__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_10__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase)), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getFirestore)()), (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__.getStorage)())]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_crear_tarjeta_crear_tarjeta_component__WEBPACK_IMPORTED_MODULE_1__.CrearTarjetaComponent, _components_listar_tarjeta_listar_tarjeta_component__WEBPACK_IMPORTED_MODULE_2__.ListarTarjetaComponent],
    imports: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.FirestoreModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_10__.FirebaseAppModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.FirestoreModule, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__.StorageModule]
  });
})();

/***/ }),

/***/ 8801:
/*!*********************************************************************!*\
  !*** ./src/app/components/crear-tarjeta/crear-tarjeta.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearTarjetaComponent": () => (/* binding */ CrearTarjetaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_tarjeta_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/tarjeta.service */ 4532);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function CrearTarjetaComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21)(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class CrearTarjetaComponent {
  constructor(fb, _tarjetaService, toastr) {
    this.fb = fb;
    this._tarjetaService = _tarjetaService;
    this.toastr = toastr;
    this.loading = false;
    this.titulo = 'Agregar Tarjeta';
    this.form = this.fb.group({
      titular: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      numeroTarjeta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(16)]],
      fechaExpiracion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(5)]],
      cvv: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(3)]]
    });
  }
  ngOnInit() {
    this._tarjetaService.getTarjetaEdit().subscribe(data => {
      this.id = data.id;
      this.titulo = 'Editar Tarjeta';
      this.form.patchValue({
        titular: data.titular,
        numeroTarjeta: data.numeroTarjeta,
        fechaExpiracion: data.fechaExpiracion,
        cvv: data.cvv
      });
    });
  }
  guardarTarjeta() {
    if (this.id === undefined) {
      // Creamos una nueva tarjeta
      this.agregarTarjeta();
    } else {
      // Editamos una nueva tarjeta
      this.editarTarjeta(this.id);
    }
  }
  editarTarjeta(id) {
    const TARJETA = {
      id: id,
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvv: this.form.value.cvv,
      fechaActualizacion: new Date()
    };
    this.loading = true;
    this._tarjetaService.editarTarjeta(id, TARJETA).then(() => {
      this.loading = false;
      this.titulo = 'Agregar Tarjeta';
      this.form.reset();
      this.id = undefined;
      this.toastr.info('La Tarjeta fue actualizada con exito!', 'Registro Actualizado');
      this._tarjetaService.reloadTarjetas$.next();
    }, error => {
      console.log(error);
    });
  }
  agregarTarjeta() {
    const TARJETA = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvv: this.form.value.cvv,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    };
    this.loading = true;
    this._tarjetaService.guardarTarjeta(TARJETA).then(() => {
      this.loading = false;
      console.log('tarjeta registrado');
      this.toastr.success('La tarjeta fue registrada con exito!', 'Tarjeta registrada');
      this.form.reset();
      this._tarjetaService.reloadTarjetas$.next();
    }).catch(error => {
      this.loading = false;
      this.toastr.error('Opps.. ocurrio un error', 'Error');
      console.log(error);
    });
  }
}
CrearTarjetaComponent.ɵfac = function CrearTarjetaComponent_Factory(t) {
  return new (t || CrearTarjetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tarjeta_service__WEBPACK_IMPORTED_MODULE_0__.TarjetaService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService));
};
CrearTarjetaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CrearTarjetaComponent,
  selectors: [["app-crear-tarjeta"]],
  decls: 30,
  vars: 22,
  consts: [[1, "card"], [1, "card-body"], [1, "titulo", "mb-3"], ["class", "spinner-border float-end", "role", "status", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "input-group", "input-group-lg", "mb-3"], [1, "input-group-text"], [1, "fas", "fa-user-circle"], ["type", "text", "formControlName", "titular", "placeholder", "Titular", 1, "form-control"], [1, "fas", "fa-credit-card"], ["type", "text", "formControlName", "numeroTarjeta", "maxlength", "16", "placeholder", "Numero Tarjeta", 1, "form-control"], [1, "row"], [1, "col-lg-7"], [1, "fas", "fa-calendar-alt"], ["type", "text", "formControlName", "fechaExpiracion", "maxlength", "5", "placeholder", "MM/YY", 1, "form-control"], [1, "col-lg-5"], [1, "fas", "fa-key"], ["type", "password", "formControlName", "cvv", "maxlength", "3", "placeholder", "CVV", 1, "form-control"], [1, "d-grid", "gap-2"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", 3, "disabled"], [1, "fas", "fa-database"], ["role", "status", 1, "spinner-border", "float-end"], [1, "visually-hidden"]],
  template: function CrearTarjetaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "uppercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CrearTarjetaComponent_div_5_Template, 3, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CrearTarjetaComponent_Template_form_ngSubmit_6_listener() {
        return ctx.guardarTarjeta();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "div", 5)(18, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15)(22, "div", 5)(23, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18)(27, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " \u00A0Aceptar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 20, ctx.titulo), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("green-icon", (tmp_3_0 = ctx.form.get("titular")) == null ? null : tmp_3_0.valid)("red-icon", ((tmp_4_0 = ctx.form.get("titular")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.form.get("titular")) == null ? null : tmp_4_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("green-icon", (tmp_5_0 = ctx.form.get("numeroTarjeta")) == null ? null : tmp_5_0.valid)("red-icon", ((tmp_6_0 = ctx.form.get("numeroTarjeta")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.form.get("numeroTarjeta")) == null ? null : tmp_6_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("green-icon", (tmp_7_0 = ctx.form.get("fechaExpiracion")) == null ? null : tmp_7_0.valid)("red-icon", ((tmp_8_0 = ctx.form.get("fechaExpiracion")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.form.get("fechaExpiracion")) == null ? null : tmp_8_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("green-icon", (tmp_9_0 = ctx.form.get("cvv")) == null ? null : tmp_9_0.valid)("red-icon", ((tmp_10_0 = ctx.form.get("cvv")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.form.get("cvv")) == null ? null : tmp_10_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.UpperCasePipe],
  styles: [".green-icon[_ngcontent-%COMP%] {\n    color: #198754;\n}\n\n.red-icon[_ngcontent-%COMP%] {\n    color: #dc3545;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n    height: 1.5rem;\n    width: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jcmVhci10YXJqZXRhL2NyZWFyLXRhcmpldGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JlZW4taWNvbiB7XG4gICAgY29sb3I6ICMxOTg3NTQ7XG59XG5cbi5yZWQtaWNvbiB7XG4gICAgY29sb3I6ICNkYzM1NDU7XG59XG5cbi5zcGlubmVyLWJvcmRlciB7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgd2lkdGg6IDEuNXJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3823:
/*!***********************************************************************!*\
  !*** ./src/app/components/listar-tarjeta/listar-tarjeta.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarTarjetaComponent": () => (/* binding */ ListarTarjetaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_tarjeta_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/tarjeta.service */ 4532);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function ListarTarjetaComponent_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td")(8, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListarTarjetaComponent_tr_6_Template_i_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const tarjeta_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.editarTarjeta(tarjeta_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListarTarjetaComponent_tr_6_Template_i_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const tarjeta_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.eliminarTarjeta(tarjeta_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tarjeta_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tarjeta_r1.titular);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tarjeta_r1.numeroTarjeta);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tarjeta_r1.fechaExpiracion);
  }
}
class ListarTarjetaComponent {
  constructor(_tarjetaService, toastr) {
    this._tarjetaService = _tarjetaService;
    this.toastr = toastr;
    this.listTarjetas = [];
    this._tarjetaService.reloadTarjetas$.subscribe(() => {
      this.obtenerTarjetas();
    });
  }
  ngOnInit() {
    this.obtenerTarjetas();
  }
  obtenerTarjetas() {
    this._tarjetaService.obtenerTarjetas().then(res => {
      console.log('res', res);
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
  eliminarTarjeta(id) {
    this._tarjetaService.eliminarTarjeta(id).then(() => {
      this.toastr.success('La Tarjeta fue eliminada con exito!', 'Registro Eliminado');
      this._tarjetaService.reloadTarjetas$.next();
    }).catch(error => {
      this.toastr.error('Opss.. ocurrio un error', 'Error');
      console.log(error);
    });
  }
  editarTarjeta(tarjeta) {
    this._tarjetaService.addTarjetaEdit(tarjeta);
  }
}
ListarTarjetaComponent.ɵfac = function ListarTarjetaComponent_Factory(t) {
  return new (t || ListarTarjetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tarjeta_service__WEBPACK_IMPORTED_MODULE_0__.TarjetaService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService));
};
ListarTarjetaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ListarTarjetaComponent,
  selectors: [["app-listar-tarjeta"]],
  decls: 7,
  vars: 1,
  consts: [[1, "card"], [1, "card-body"], [1, "titulo"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "far", "fa-edit", "text-info", 3, "click"], [1, "far", "fa-trash-alt", "text-danger", 3, "click"]],
  template: function ListarTarjetaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "LISTAR TARJETA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 3)(5, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListarTarjetaComponent_tr_6_Template, 10, 3, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listTarjetas);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  styles: [".far[_ngcontent-%COMP%] {\n    cursor: pointer;\n    margin-right: 7px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9saXN0YXItdGFyamV0YS9saXN0YXItdGFyamV0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi5mYXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4532:
/*!*********************************************!*\
  !*** ./src/app/services/tarjeta.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TarjetaService": () => (/* binding */ TarjetaService)
/* harmony export */ });
/* harmony import */ var C_Users_Hugo_Downloads_TarjetaCredito_firebase_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class TarjetaService {
  constructor(firestore) {
    this.firestore = firestore;
    this.tarjeta$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.reloadTarjetas$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.tarjetaConverter = {
      toFirestore: tarjeta => {
        return {
          id: tarjeta['id'],
          titular: tarjeta['titular'],
          numeroTarjeta: tarjeta['numeroTarjeta'],
          cvv: tarjeta['cvv'],
          fechaCreacion: tarjeta['fechaCreacion'],
          fechaActualizacion: tarjeta['fechaActualizacion'],
          fechaExpiracion: tarjeta['fechaExpiracion']
        };
      },
      fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        const tarjeta = {
          id: data['id'],
          titular: data['titular'],
          numeroTarjeta: data['numeroTarjeta'],
          cvv: data['cvv'],
          fechaCreacion: data['fechaCreacion'],
          fechaActualizacion: data['fechaActualizacion'],
          fechaExpiracion: data['fechaExpiracion']
        };
        return tarjeta;
      }
    };
    this.dbRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.firestore, 'tarjetas');
  }
  guardarTarjeta(tarjeta) {
    // return this.firestore.collection('tarjetas').add(tarjeta);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(this.dbRef, tarjeta).then(res => {
      const tarjetaRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.firestore, `tarjetas/${res.id}`);
      return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)(tarjetaRef, {
        ...tarjeta,
        id: res.id
      });
    });
  }
  obtenerTarjetas() {
    var _this = this;
    return (0,C_Users_Hugo_Downloads_TarjetaCredito_firebase_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // return this.firestore.collection('tarjetas', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
      const data = [];
      const queryData = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(_this.dbRef));
      queryData.forEach(doc => {
        const tarjetaDoc = _this.tarjetaConverter.fromFirestore(doc, {});
        data.push(tarjetaDoc);
      });
      return data;
    })();
  }
  eliminarTarjeta(id) {
    // return this.firestore.collection('tarjetas').doc(id).delete();
    console.log('id', id);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.deleteDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.firestore, 'tarjetas', id));
  }
  editarTarjeta(id, tarjeta) {
    // return this.firestore.collection('tarjetas').doc(id).update(tarjeta);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.firestore, 'tarjetas', id), tarjeta);
  }
  addTarjetaEdit(tarjeta) {
    this.tarjeta$.next(tarjeta);
  }
  getTarjetaEdit() {
    return this.tarjeta$.asObservable();
  }
}
TarjetaService.ɵfac = function TarjetaService_Factory(t) {
  return new (t || TarjetaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore));
};
TarjetaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TarjetaService,
  factory: TarjetaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC-fkih-RSY0huCHrw1wyjHFzcbR_Dg3r4",
    authDomain: "virtual-wallet-46135.firebaseapp.com",
    projectId: "virtual-wallet-46135",
    storageBucket: "virtual-wallet-46135.appspot.com",
    messagingSenderId: "165677638590",
    appId: "1:165677638590:web:b0068fd3fff961c4780fef"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map