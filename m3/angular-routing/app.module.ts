import { RouterModule, Routes } from '@angular/router';

...

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies',  component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailComponent }
];

...

@NgModule({
   ...
  imports: [
    ...,
    RouterModule.forRoot(routes)
    ...
  ],
  ...
})
