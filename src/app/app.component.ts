import { Component, OnInit, ɵConsole } from '@angular/core';
import {TourneeInterface} from './shared/interfaces/tourneeinterface';
import { DefaultRouteReuseStrategy } from '@angular/router/src/route_reuse_strategy';
import { forEach } from '@angular/router/src/utils/collection';
import * as moment  from 'moment';
import {ToastrService} from 'ngx-toastr';
import { ResaModel } from './shared/models/resa-model';
import { ResaDao } from './shared/models/resadao';
import { DataService } from './shared/services/data.service';

//définition d'une interface pour les tournées

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{

  public title: string=  "navette Ste -Stex";
  /*public date: moment.Moment;
  public tournees:Array<TourneeInterface>;  
 */ public now:moment.Moment=moment().add(1,'day');/*
  message:string;

  public constructor(private toastr: ToastrService, private resaModel: ResaModel,private data: DataService) {
    console.log('Constructeur de AppComponent!');
    this.tournees=new Array<TourneeInterface>();
  }
*/
  public ngOnInit(){}
  /*
console.log('initialisation de AppComponent');
this.tournees.push(
  {hour: this.now.clone().hour(8).minute(0),am:true,dispo:0}  
);
this.tournees.push(
  {hour:this.now.clone().hour(11).minute(0),am:true,dispo:8}
);
this.tournees.push(
   {hour:this.now.clone().hour(14).minute(0),am:false,dispo:6}

);
this.tournees.push( 
  {hour:this.now.clone().hour(17).minute(0), am:false,dispo:8});

}
  
/*  private _checkFor(): boolean{
    return this.tournees.filter((tournee) =>tournee.isClicked).length ?true : false;

  }**/

 /* private _canDoResa(tournee): boolean{
    const now:moment.Moment=moment();
    
    return !(tournee.hour.isBefore(this.now, 'minutes') || tournee.dispo===0)
  }*/

  /* public doResa(tournee:TourneeInterface):void{

//this.tournees.map(tournee => tournee.isClicked==true).length)
if(this._canDoResa(tournee)){
   this.dispoBefore=tournee.dispo;
    } else{
    console.log('Desole, on ne peut pas réserver');
    this.toastr.error(
      'Désolé mais la réservation n\'est pas disponible pour cette tournee.'+ tournee.hour.format('HH:mm'), 'Erreur'
    );
  }
}
  */

  
//$event correspond à la tournee selectionnee
  public receiveUpdate($event):void{}
} 
    
    
   
   /* this.toastr.success(
      'Votre réservation de' +places+'places a bien été prise en compte.', 'Merci'
    );*/
   /* const resa: ResaModel = new ResaModel()
      .setDateResa(moment())
      .setTourDate($event.hour)
      .setPlace(places);
    // Persistence
    console.log("avant dao"+ resa)
    const dao: ResaDao = new ResaDao(resa);
    dao.add();
    console.log("ds app"+resa);
    
  }*/


 /* mesResas():void{
    this.list=true;

  }*/

 

 

