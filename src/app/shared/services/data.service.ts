import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResaModel } from './../models/resa-model';

@Injectable({
    providedIn:'root'
})
export class DataService {
    private messageSource : BehaviorSubject<ResaModel>;
    public currentMessage;


 

  constructor() {
    this.messageSource = new BehaviorSubject<ResaModel>(null);
    this.currentMessage = this.messageSource.asObservable();
   }

  public changeMessage(resa: ResaModel):void {
    this.messageSource.next(resa);
  }

}