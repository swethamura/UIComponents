import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TablelibComponent } from './tablelib.component';
import {MatTableModule} from '@angular/material/table';
import { CodedisplayComponent } from './codedisplay/codedisplay.component';


@NgModule({
  declarations: [TablelibComponent, CodedisplayComponent],
  imports: [
    BrowserModule,
    MatTableModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [TablelibComponent]
})
export class TablelibModule { }
