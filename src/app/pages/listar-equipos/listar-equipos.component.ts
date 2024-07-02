import { Component,OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Equipo } from '../../models/equipo';
import { EquipoModelService } from '../../service/equipo-model.service';
@Component({
  selector: 'app-listar-equipos',
  templateUrl: './listar-equipos.component.html',
  styleUrl: './listar-equipos.component.css'
})
export class ListarEquiposComponent implements OnInit{
   //propiedades
   equipos:any=[];
   constructor(private equipoService:EquipoModelService) { 
     this.getEquipos();
   }
   ngOnInit(): void {
       
   }
 
   //metodo para ontener los equipos
   getEquipos(){
     this.equipoService.getEquipos()
     .subscribe((data)=>{
       this.equipos=data;
     })
   }
   //metodo para eliminar al equipo
   eliminarEquipo(equipo,index){
     if(window.confirm('¿Estas seguro que lo deseas eliminar?')){
       this.equipoService.deleteEquipo(equipo._id)
       .subscribe((data)=>{
         this.equipos.splice(index,1);
       })
     }
   }
 
  
 

}
