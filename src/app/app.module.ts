import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap";
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2OrderModule, // importing the sorting package here
    Ng2SearchPipeModule, //including into imports
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
