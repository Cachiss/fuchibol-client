import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EquipoModelService } from '../../service/equipo-model.service';

@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html',
  styleUrls: ['./agregar-equipo.component.css']
})
export class AgregarEquipoComponent implements OnInit {

  equipoForm: FormGroup;
  enviado = false;
  categoriaEquipo: any = ['Local', 'Visitante'];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private equipoService: EquipoModelService
  ) {
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm() {
    this.equipoForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      miembros: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
    });
  }

  actualizarCategoria(categoria: string) {
    this.equipoForm.get('categoria').setValue(categoria, { onlySelf: true });
  }

  get myForm() {
    return this.equipoForm.controls;
  }

  onSubmit() {
    this.enviado = true;
    if (!this.equipoForm.valid) {
      return false;
    } else {
      console.log(this.equipoForm.value);
      return this.equipoService.agregarEquipo({
        name: this.equipoForm.value.nombre,
        country: this.equipoForm.value.pais,
        members: this.equipoForm.value.miembros,
        category: this.equipoForm.value.categoria
      }).subscribe({
        complete: () => {
          console.log('El equipo se ha agregado correctamente');
          this.ngZone.run(() => this.router.navigateByUrl('/listar-equipos'));
        },
        error: (error) => {
          console.log('Error al agregar equipo:', error);
        }
      });
    }
  }
}
