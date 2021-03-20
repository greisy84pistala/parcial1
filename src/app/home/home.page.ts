import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  nombre=null;
  apellido=null;
  celular=null;
  email=null;

usuarios=[];

constructor(public alertController: AlertController) {}
  

  guardarDatos(){
    //agregando datos a la base de datos en memoria
        
        this.usuarios.push({
          nombre:this.nombre,
          apellido:this.apellido,
          celular:this.celular,
          email:this.email,
        })
        
        //limpiando datos
        this.nombre="";
        this.apellido="";
        this.celular="";
        this.email="";
        
      }
      eliminarDatos(l){
        this.usuarios.splice(l);
      }
    
      async editarDatos(l) {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Editar',
          
          inputs: [
            {
              name: 'nombre_',
              type: 'text',
              value: this.usuarios[l].nombre,
              
            },
            {
              name: 'apellido_',
              type: 'text',
              value: this.usuarios[l].apellido,
            },
            {
              name: 'celular_',
              type: 'text',
              value: this.usuarios[l].celular,
            },
            {
              name: 'email_',
              type: 'text',
              value: this.usuarios[l].email,
            },
          ],
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancelar',
              cssClass: 'dark',
              handler: () => {
                console.log('Confirm Cancelar');
              }
            }, {
              text: 'Guardar',
              handler: data => {
                this.usuarios[l].nombre=data.nombre_;
                this.usuarios[l].nombre=data.apellido_;
                this.usuarios[l].nombre=data.celular_;
                this.usuarios[l].nombre=data.email_;
              }
            }
          ]
        });
    
        await alert.present();
      }
}

