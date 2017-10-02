/*************************************************
 * Angular 2/4 App Routing
Path: /app/app.routing.ts
The app routing file defines the routes of the application, each route contains a path and associated component. The home route is secured by passing the AuthGuard to the canActivate property of the route.

***************************** */



import { Routes, RouterModule } from '@angular/router';

 import { HomeComponent } from './home/home.component';
  import { LoginComponent } from './login/login.component';
  import { RegisterComponent } from './register/register.component';
// import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [

  { path: '', component: HomeComponent 
                // , canActivate: [AuthGuard]
             },
             { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);