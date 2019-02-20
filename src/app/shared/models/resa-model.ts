import {ResaInterface} from '../interfaces/resainterface';
import * as moment from 'moment';
import { ResaService } from '../services/resa.service';
import { Injectable } from '@angular/core';



@Injectable()
export class ResaModel {
            private id?: number;

    /**
         * Date de la réservation
         * @var moment.Moment
         */
        private dateResa : moment.Moment;

        /**
         * Date de la tournee et heure
         * @var moment.Moment
         */
        private tourDate: moment.Moment;
        
        /**
         * Nombre d eplaces réservées
         */
        private place : number;

        public constructor(){};

        public getId(){
            return this.id;
        }

        public setDateResa(date: moment.Moment): ResaModel{
            this.dateResa=date;
            return this;
        }
        public setTourDate(date: moment.Moment): ResaModel{
            this.tourDate=date;
            return this;
        }
        public setPlace(place:number): ResaModel{
            this.place=place;
            return this;
        }

        public getDateResa(): moment.Moment{
            return this.dateResa;
        }
        public getTourDate(): moment.Moment{
            return this.tourDate;
        }
        public getPlace(): number{
            return this.place;
        }

        public deserialize(datas:any){
           this.dateResa=(moment(datas.dateResa));
           this.tourDate=(moment(datas.tourDate));
           this.place=(datas.place);
           return this;
        }
            

}
