import {DaoInterface} from '../interfaces/daointerface';
import{ResaModel} from '../models/resa-model';
import {ResaService} from '../services/resa.service';




export class ResaDao implements DaoInterface<ResaModel>{

        private resas: Array<ResaModel> = new Array<ResaModel>();
        private resaService: ResaService = new ResaService();
        private resa: ResaModel;
      
        public constructor(resaModel: ResaModel) {
          this.resa = resaModel;
        }
      
        public find(id: number): ResaModel {
          const index: number = this.resas.findIndex(
            (obj: ResaModel) => {
              return obj.getId() === id;
            }
          );
          return index !== -1 ? this.resas[index] : null;
        }
      
        findAll(): void | ResaModel[] {
          return this.resas;
        }
      
        findBy(property: string, value: any): void | ResaModel[] {
        }
      
        public add(): ResaModel {
          this.resaService.getAll().then((resas) => {
            console.log("dao"+this.resa);
            resas.push(this.resa);
      
            this.resaService.persist(resas);
          });
          return this.resa;
        }
      
        update(): ResaModel {
          this.resas[this.resas.indexOf(this.resa)] = this.resa;
      
          this.resaService.persist(this.resas);
      
          return this.resa;
        }
        delete(): ResaModel {
          this.resas.splice(this.resas.indexOf(this.resa), 1);
      
          return this.resa;
        }
      
      
      }