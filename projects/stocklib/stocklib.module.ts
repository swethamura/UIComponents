import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { StocklibComponent } from './stocklib.component';
import {FormsModule} from '@angular/forms';
import { CodedisplayComponent } from './codedisplay/codedisplay.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [StocklibComponent, CodedisplayComponent],
  imports: [
    FormsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [StocklibComponent]
})
export class StocklibModule { }
