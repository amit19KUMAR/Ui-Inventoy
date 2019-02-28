import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoggingService } from './logging.service';

const routes: Routes = [
  // {path:'home', component: HomepageComponent},
  {path:'home', loadChildren:'./inventoryrecords/inventoryrecords.module#InventoryrecordsModule',canActivate:[LoggingService]},
  // {path:'',component: AppComponent}
  {path:'login',component:LoginpageComponent},
  {path:'',component:LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
