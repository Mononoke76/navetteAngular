import { Injectable } from '@angular/core';
import {ResaModel} from './../models/resa-model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ResaService {
  private resas: Array<ResaModel>;



  constructor() {
    console.log('Service done');
  }
// abus de language: getAll retourne des objets Json mais pas precidément un tableau d objet ResaModel 
//ms on a fais la modif ds _getALl pr qu il retourne vraiment un objet resaModel et pas juste un objetJson
  public getAll(): Promise<Array<ResaModel>> {
    if (this.resas) {
      console.log('resaservice::getAll::resas already loaded');
      return new Promise((resolve) => {
        resolve(this.resas);
      });
    } else {
      console.log('resaservice::getAll::load resas');
      return this._getAll();
    }
  }

  public persist(resas: Array<ResaModel>) {
    localStorage.setItem(
      'resas',
      JSON.stringify(
        resas
      )
    );
  }

  private _getAll(): Promise<Array<ResaModel>> {
    return new Promise((resolve) => {
      let resas = new Array<ResaModel>();
      const jsonData = localStorage.getItem('resas');
      console.log('Local storage'  + resas);
      if (jsonData) {
        resas = JSON.parse(jsonData).map((resa) =>{
          return(new ResaModel()).deserialize(resa);
         

        });
      }
      resolve(resas);
    });

  }
  
}



