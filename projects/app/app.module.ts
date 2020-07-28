import { MatButtonModule } from '@angular/material/button';
import { AreachartlibModule } from './../../../areachartlib/src/lib/areachartlib.module';
import { LinechartlibModule } from './../../../linechartlib/src/lib/linechartlib.module';
import { HoribarlibModule } from './../../../horibarlib/src/lib/horibarlib.module';
import { ProgresslibModule } from './../../../progresslib/src/lib/progresslib.module';
import { WeatherlibModule } from './../../../weatherlib/src/lib/weatherlib.module';
import { DashboardlibModule } from './../../../dashboardlib/src/lib/dashboardlib.module';
import { MenuModule } from './../../../menu/src/lib/menu.module';
import { TablelibModule } from './../../../tablelib/src/lib/tablelib.module';
import { SaleslibModule } from './../../../saleslib/src/lib/saleslib.module';
import { PielibModule } from './../../../pielib/src/lib/pielib.module';
import { StocklibModule } from './../../../stocklib/src/lib/stocklib.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StocklibModule,
    ProgresslibModule,
    PielibModule,
    LinechartlibModule,
    SaleslibModule,
    HoribarlibModule,
    TablelibModule,
    MenuModule,
    DashboardlibModule,
    WeatherlibModule,
    AreachartlibModule,
    MatToolbarModule,
    NgbModule,
    MatButtonModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
