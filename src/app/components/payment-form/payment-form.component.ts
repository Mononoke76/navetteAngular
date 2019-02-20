import { Component, OnInit, Inject } from '@angular/core';
import * as moment  from 'moment';
import { FormGroup, FormBuilder, Validators,  AbstractControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CbValidator } from './../../shared/validators/cb-validator';
import { TourneeInterface } from 'src/app/shared/interfaces/tourneeinterface';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  public moiS: Array<string>=new Array<string>();
  public annees: Array<string> = new Array<string>();
  public paymentForm: FormGroup;
  public prixTotal:number;
  public validationMessages: any;
  constructor(
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<PaymentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { place:number, prix: number, ok: boolean, tour: TourneeInterface}
  ) {}

  public get numeroCB(): AbstractControl {
    return this.paymentForm.controls.numeroCB;
  }

  ngOnInit() {
    this.moiS.push('Jan','Fév','Mar','Avr','Mai','Jui','Jui','Aou','Sep','Oct','Nov','Déc');
    let currentYear: moment.Moment = moment();
    

  
    for(var i=0; i<=3; i++){
      var annee=currentYear.clone().add(i,'year').format('YYYY');
      this.annees.push(annee);
      console.log(annee);
    }
     // Définition des messages d'erreur
     this.validationMessages = {
      numeroCB: [
          {
            type: 'required',
            message: 'Le numéro de carte est obligatoire' },
          {
            type: 'minlength',
            message: 'Le numéro de carte est constitué de 16 caractères'
          },
          {
            type: 'maxlength',
            message: 'Le numéro de carte ne peut dépasser 16 caractères'
          },
          {
            type: 'pattern',
            message: 'Le numéro de carte ne peut contenir que des chiffres.'},
          {
            type: 'isValid',
            message: 'Ce numéro semble ne pas être valide'
          }
        ],};
    //Creation d'un formulaire via service formbuilder
    this.paymentForm=this.formBuilder.group({
      numeroCB:['',
        Validators.compose([
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
          CbValidator.isValid({ 'isValid': false })
          //'^[0-9]*$'
        ])
      ],
      crypto:['',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
          Validators.pattern('[0-9]*$')
        
        ])
      ],
      month:[
        '',
        Validators.required
      ],
      year:[
        '',
        Validators.required
      ]
    });
    
    
  }

  onNoClick(): void {
    //this.data.ok=false;
    this.dialogRef.close();
  }

  calculerPrix(): number{
     this.prixTotal =this.data.prix*this.data.place;
    return this.prixTotal;
  }

  paiementOk():void {
   // this.data.ok=true;
    this.dialogRef.close(this.data);
    
  }
}

    




