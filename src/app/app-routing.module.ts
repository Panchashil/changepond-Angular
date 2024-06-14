import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirevtiveComponent } from './components/direvtive/direvtive.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UtfComponent } from './components/utf/utf.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { BreakFastComponent } from './components/break-fast/break-fast.component';
import { ProductDashboardComponent } from './crud/product-dashboard/product-dashboard.component';

const routes: Routes = [
 
  {path:"maindashboard",component:MainDashboardComponent,children:[
       //2.default routing 
  // {path:"",component:DatabindingComponent},

  // 3.redirect routing
  { 
    path:"",
    redirectTo:"databinding",
    pathMatch:"full"
  },
  //1.naming routing 
  {
    path:"databinding",
    component:DatabindingComponent
  },
  {
    path:"directives",
    component:DirevtiveComponent
  },
  {path:"breakfast",component:BreakFastComponent},
  {path:"empdetail",component:EmpDetailsComponent},
  {path:"productdash",component:ProductDashboardComponent},
  // 4. parameterize routing 
  {path:"empdetail/:id",component:EmpDetailsComponent},
  // child routing 
  {path:"angform",component:AngFormComponent,children:[
    {path:"",component:RtfComponent},
    {path:"rtf",component:RtfComponent},
    {path:"utdf",component:UtfComponent}
  ]},
  {path:"empdetail",component:EmpDetailsComponent},
  ]},

  // 6. wild card routing 
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
