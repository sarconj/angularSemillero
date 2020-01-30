import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InicioSesionService } from '../../services/inicio-sesion/inicio-sesion.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {
  inicioSesionForm: FormGroup;
  nombre = 'Sergio';

  constructor(private service: InicioSesionService) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.inicioSesionForm = new FormGroup({
      nombreUsuario: new FormControl('Sergio Arcon J',[Validators.required, Validators.minLength(2)]),
      clave: new FormControl(null, Validators.required)
    });
  }

  enviarFormulario() {
    console.log(this.inicioSesionForm.value);
    this.service.iniciarSesion(this.inicioSesionForm.value).subscribe(
      datos =>
        console.log('datos: ', datos)
      , error =>
        console.error()
      , () =>
        console.log('complete')
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

}
