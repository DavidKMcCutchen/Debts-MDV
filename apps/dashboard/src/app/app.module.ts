import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebtsComponent } from './debts/debts.component';
import { DebtsListComponent } from './debts/debts-list/debts-list.component';
import { DebtsDetailsComponent } from './debts/debts-details/debts-details.component';
import { MaterialModule } from '@debts/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@debts/core-data';
import { CoreStateModule } from '@debts/core-state';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, DebtsComponent, DebtsListComponent, DebtsDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

