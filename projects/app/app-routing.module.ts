import { AreachartlibComponent } from './../../../areachartlib/src/lib/areachartlib.component';
import { AreachartlibModule } from './../../../areachartlib/src/lib/areachartlib.module';
import { ProgresslibComponent } from './../../../progresslib/src/lib/progresslib.component';
import { StocklibComponent } from './../../../stocklib/src/lib/stocklib.component';
import { AppComponent } from './app.component';
import { PielibComponent } from './../../../pielib/src/lib/pielib.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoribarlibComponent } from 'projects/horibarlib/src/public-api';
import { SaleslibComponent } from 'projects/saleslib/src/public-api';
import { MenuComponent } from 'projects/menu/src/public-api';
import { DashboardlibComponent } from 'projects/dashboardlib/src/public-api';
import { TablelibComponent } from 'projects/tablelib/src/public-api';
import { WeatherlibComponent } from 'projects/weatherlib/src/public-api';
import { LinechartlibComponent } from 'projects/linechartlib/src/public-api';

const routes: Routes = [
  {path : '', redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:AppComponent},
  {path:'piechart',component:PielibComponent},
  {path:'horibarchart',component:HoribarlibComponent},
  {path:'stock',component:StocklibComponent},
  {path:'sales',component:SaleslibComponent},
  {path:'linechart',component:LinechartlibComponent},
  {path:'menu',component:MenuComponent},
  {path:'dashboard',component:DashboardlibComponent},
  {path:'table',component:TablelibComponent},
  {path:'weather',component:WeatherlibComponent},
  {path:'progress',component:ProgresslibComponent},
  {path:'areachart',component:AreachartlibComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
