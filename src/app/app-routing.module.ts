import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form';
const routes : Routes =[
    {
    path:'callback',
    component: OktaCallbackComponent
    },
    {
        path:'customer-form',
        component:CustomerFormComponent
    },
    {
        path: '',
        component: AppComponent,
        canActivate: [OktaAuthGuard]
    }];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

    
