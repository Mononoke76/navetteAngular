import { Component, OnInit } from '@angular/core';
import {TourneeInterface} from './../../shared/interfaces/tourneeinterface';

import * as moment  from 'moment';
import {ToastrService} from 'ngx-toastr';
import { ResaModel } from './../../shared/models/resa-model';
import { DataService } from './../../shared/services/data.service';


@Component({
  selector: 'app-tournee-view',
  templateUrl: './tournee-view.component.html',
  styleUrls: ['./tournee-view.component.scss']
})
export class TourneeViewComponent implements OnInit {

  
//définition d'une interface pour les tournées



  public date: moment.Moment;
  public tournees:Array<TourneeInterface>;  
  public now:moment.Moment=moment().add(1,'day');
  message:string;

  public constructor(private toastr: ToastrService, private resaModel: ResaModel,private data: DataService) {
    console.log('Constructeur de AppComponent!');
    
  }

  public ngOnInit(){
console.log('initialisation de AppComponent');
this.tournees=new Array<TourneeInterface>();
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
}
  