import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryrecordsRoutingModule } from './inventoryrecords-routing.module';
import { AddtoinventoryComponent } from './addtoinventory/addtoinventory.component';
import { UpdateinventoryComponent } from './updateinventory/updateinventory.component';
import { InventoryhomeComponent } from './inventoryhome/inventoryhome.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowinventoryComponent } from './showinventory/showinventory.component';

@NgModule({
  declarations: [AddtoinventoryComponent, UpdateinventoryComponent, InventoryhomeComponent, ShowinventoryComponent],
  imports: [
    CommonModule,
    InventoryrecordsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class InventoryrecordsModule { }
