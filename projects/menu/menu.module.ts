import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { CodedisplayComponent } from './codedisplay/codedisplay.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [MenuComponent, CodedisplayComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,MatToolbarModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
