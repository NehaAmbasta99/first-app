import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
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
        path:'recipies',
        component:RecipesComponent
    },
    {
        path:'shopping',
        component:ShoppingListComponent
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

    
