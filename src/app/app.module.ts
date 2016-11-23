import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { SbModule } from 'ng-storyblok';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    FilterComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    SbModule.forRoot({
      accessToken: 'OH0oX1DqfxxfhitN5qciJAtt'
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: OverviewComponent
      },
      {
        path: ':id',
        component: DetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
