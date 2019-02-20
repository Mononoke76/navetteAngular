import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {TourneeInterface} from './../../shared/interfaces/tourneeinterface';
import { DataService } from './../../shared/services/data.service';
import { ResaModel } from './../../shared/models/resa-model';
import { ResaDao } from './../../shared/models/resadao';
import {PaymentFormComponent} from './../../components/payment-form/payment-form.component';

import * as moment  from 'moment';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})

export class MyComponentComponent implements OnInit {
  @Input() tour: TourneeInterface;
  @Output() tourEvent: EventEmitter<TourneeInterface> = new EventEmitter<TourneeInterface>();

  public placeReservee: number=1;
  public isMin: boolean=true;
  public isMax: boolean=false;
  public pasDePlace:boolean=false;
  public ok:boolean=false;

  constructor(private data: DataService,public dialog: MatDialog) { }

  ngOnInit() {
    this._canResa(); 
  }

  public doOneLess(tour){
   if(!this.isMin){
      this.placeReservee = this.placeReservee-1;
      this.isMax=false;
      if(this.placeReservee==1)
      {
        this.isMin=true;
      }
    }
  }

  public increment(tour){
    if(tour.dispo >1){
      this.placeReservee += 1;
      this.isMin=false;
      if(this.placeReservee==tour.dispo){
        this.isMax=true;
      }
    }
  }

  public sendIt(tourResult: TourneeInterface): void{
    this.tour.dispo=tourResult.dispo-this.placeReservee;
    this._canResa();
    const resa :ResaModel=(new ResaModel())
    .deserialize({
      dateResa:moment(),
      tourDate:tourResult.hour,
      place: this.placeReservee
    });
    this.data.changeMessage(resa);
    this.placeReservee=1;
    // Persistence
    const dao: ResaDao = new ResaDao(resa);
    dao.add();
    console.log("ds app"+resa);
  }

  _canResa(){
    const now:moment.Moment=moment();
    if((this.tour.hour.isBefore(now, 'minutes') || this.tour.dispo===0)){
       this.pasDePlace=true;
       this.isMax=true;
       this.isMin=true;
    }else{
      this.pasDePlace=false;
    };
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PaymentFormComponent, {
      width: '400px',
      data: {place:this.placeReservee, prix: 8, ok:false, tour: this.tour}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.sendIt(result.tour);
    });
  }
}

