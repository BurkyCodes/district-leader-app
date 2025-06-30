import { Routes } from '@angular/router';
import { PrincipalLandingComponent } from './features/district-leader/principal-landing/principal-landing.component';
import { NotFoundComponent } from './features/district-leader/not-found/not-found.component';
export const routes: Routes = [
    {
        path:'',
        component:PrincipalLandingComponent
    },
    {
        path:"school/:schoolId",
        loadComponent:() =>
             import('./features/district-leader/school-page/school-page.component').then(
                m => m.SchoolPageComponent)
    },
    {
        path:"about",
        loadComponent:() =>
            import('./features/district-leader/about/about.component').then(
                m => m.AboutComponent)
    },
    {
        path:"contact",
        loadComponent:() => 
            import('./features/district-leader/contact/contact.component').then(
                 m => m.ContactComponent
            )
    },
    {
        path:"**",
        component:NotFoundComponent
    }
];
