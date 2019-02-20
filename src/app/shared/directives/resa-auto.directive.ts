import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import {TourneeInterface} from '../interfaces/tourneeinterface';
import * as  moment from 'moment';


@Directive({
  selector: '[appResaAuto]'
})
export class ResaAutoDirective implements OnInit{
  @Input('appResaAuto')  tournee:TourneeInterface; 
  

  private backgroundColor:string = '#eaeaea';
  private cursor: string='not-allowed'
  
  constructor(private element: ElementRef, private render : Renderer2) {
    
  }

  ngOnInit(){
    const today:moment.Moment=moment();
    if (this.tournee.hour.isBefore(today, 'minutes'))
{
  this.render.setStyle(this.element.nativeElement, 'background-color',this.backgroundColor );
  this.render.setStyle(this.element.nativeElement, 'cursor',this.cursor );
  this.render.addClass(this.element.nativeElement,'disabled');

}else {
  if(this.tournee.dispo===0){
    this.render.setStyle(this.element.nativeElement, 'background-color', this.backgroundColor );
    this.render.addClass(this.element.nativeElement,'disabled');
    this.render.setStyle(this.element.nativeElement, 'cursor',this.cursor );
    
  
  }
}
  }

}
