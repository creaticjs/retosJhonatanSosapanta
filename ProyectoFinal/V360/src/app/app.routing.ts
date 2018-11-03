import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'about', component: AboutComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'services', component: ServicesComponent}
  
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})  

export class AppRoutingModule {}