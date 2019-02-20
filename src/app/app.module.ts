import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { MomentPipe } from './shared/pipes/moment-pipe.pipe';
import { ResaAutoDirective } from './shared/directives/resa-auto.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ResaService } from './shared/services/resa.service';
import { ResaModel } from './shared/models/resa-model';
import { ComponentTabComponent } from './components/component-tab/component-tab.component';
import { IhmModule } from './shared/modules/ihm/ihm.module';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TourneeViewComponent } from './components/tournee-view/tournee-view.component';
  


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MomentPipe,
    ResaAutoDirective,
    ComponentTabComponent,
    PaymentFormComponent,
    TourneeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IhmModule,
    BrowserAnimationsModule, // required animations module     
    ToastrModule.forRoot(
      {
        timeOut:3000,
        positionClass:'toast-bottom-right',
        preventDuplicates:true
      }
    ) // ToastrModule added   ],
  ],
  entryComponents: [PaymentFormComponent],
  providers: [ResaService,
  ResaModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
