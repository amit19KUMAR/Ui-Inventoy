import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryhomeComponent } from './inventoryhome/inventoryhome.component';
import { AddtoinventoryComponent } from './addtoinventory/addtoinventory.component';
import { UpdateinventoryComponent } from './updateinventory/updateinventory.component';
import { ShowinventoryComponent } from './showinventory/showinventory.component';
import { AuthguardService } from '../authguard.service';

const routes: Routes = [
  { path:'', component:InventoryhomeComponent },
  { path:'addInventory', component:AddtoinventoryComponent },
  { path:'updateInventory', component:UpdateinventoryComponent},
  { path:'showInventory' , component:ShowinventoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryrecordsRoutingModule { }
