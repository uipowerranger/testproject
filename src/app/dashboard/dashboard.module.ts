
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxGaugeModule } from 'ngx-gauge';
import { OrdercountComponent } from './ordercount/ordercount.component';
import { UserscountComponent } from './userscount/userscount.component';
import { RevenucountComponent } from './revenucount/revenucount.component';
@NgModule({
  declarations: [MainComponent, OrdercountComponent, UserscountComponent, RevenucountComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    PerfectScrollbarModule,
    MatIconModule,
    NgApexchartsModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    NgxGaugeModule,
  ],
})
export class DashboardModule { }
