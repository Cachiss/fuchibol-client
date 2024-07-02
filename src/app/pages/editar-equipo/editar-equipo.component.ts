


import { Component,OnInit } from "@angular/core";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { ActivatedRoute,Route,Router } from "@angular/router";
import { Equipo } from "../../models/equipo";
import { EquipoModelService } from "../../service/equipo-model.service";

@Component({
  selector: 'app-editar-equipo',
  templateUrl: './editar-equipo.component.html',
  styleUrl: './editar-equipo.component.css'
})
export class EditarEquipoComponent implements OnInit{
  //propiedades:
  EditarequipoForm:FormGroup;
  enviado = false;
  categoriaEquipo: any=[
    'Visitante', 'Local'
  ];
  equipoData:Equipo[];


  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private equipoService: EquipoModelService,
    private actRoute:ActivatedRoute

  ){}

  ngOnInit(): void { 
    this.mainForm();
    let id=this.actRoute.snapshot.paramMap.get('id');
    this.getEquipo(id)

    this.EditarequipoForm= this.formBuilder.group({
      nombre: ['',[Validators.required]],
      categoria: ['',[Validators.required]],
      pais: ['',[Validators.required]],
      miembros: ['',[Validators.required]],
      
      
    });
  }

//metodo para generar el formulario
mainForm(){
  this.EditarequipoForm= this.formBuilder.group({
    nombre: ['',[Validators.required]],
    categoria: ['',[Validators.required]],
    pais: ['',[Validators.required]],
      miembros: ['',[Validators.required]],
      
  });
}

//metodo para asignar el equipo seleccionado por el usuario
actualizarEquipo(d){
  this.EditarequipoForm.get('categoria').setValue(d,{
    onlySelf:true
  });
}

//getter oara acceder a los controles del formulario
get myForm(){
  return this.EditarequipoForm.controls;
}

//METODOD PARA BUSCAR AL EMPELADO QUE VAMOS A MODIFIFACAR
getEquipo(id){
 this.equipoService.getEquipo(id)
   .subscribe((data) => {
     if (data) {
       this.EditarequipoForm.setValue({
         nombre: data['nombre'] || '',
         categoria: data['categoria'] || '',
         pais: data['pais'] || '',
         miembros: data['miembros'] || '', // Asegúrate de manejar esta propiedad adecuadamente
       });
     }
   });
}

//metodo para enviar el formulario
onSubmit(){
  this.enviado = true;
  if(!this.EditarequipoForm.valid){
    return false;
  }else{
    if(window.confirm('¿Estás seguro que lo deseas modificar?')){
      let id=this.actRoute.snapshot.paramMap.get('id');
      this.equipoService
      .updateEquipo(id,this.EditarequipoForm.value)
      .subscribe({
        complete:()=>{
          this.router.navigateByUrl('/listar-equipos');
          console.log('se actualizó correctamente');
        },
        error:(e)=>{
          console.log(e);
        }
      });
    }
  }
}


}
