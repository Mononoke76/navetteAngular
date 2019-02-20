import { Component, OnInit, ViewChild } from '@angular/core';
import { ResaService } from './../../shared/services/resa.service';
import { ResaModel } from 'src/app/shared/models/resa-model';
import { DataService } from './../../shared/services/data.service';
import { MatSort} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-component-tab',
  templateUrl: './component-tab.component.html',
  styleUrls: ['./component-tab.component.scss']
})
export class ComponentTabComponent implements OnInit {
  private resas: Array<ResaModel> ;
  private resaService: ResaService;
  private resa: ResaModel;
  displayedColumns: string[] = ['dateTournee', 'heureTournee', 'placeReservee'];
  //@ViewChild(MatSort) sort: MatSort;

  public message:ResaModel;
  
  constructor(private data: DataService) {
    this.resaService=new ResaService();
   }

  ngOnInit() {
    this.resaService.getAll().then((resas) =>
      {
        this.resas=resas;
    
        });
        this.data.currentMessage.subscribe((resa:ResaModel) =>{
          
          if(resa!==null){
            
            this.resas.push(resa);
          }
        });
        
      }

      

  }

 
    
    
  


