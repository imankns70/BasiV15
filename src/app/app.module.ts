import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren:()=> import('./admin/admin.module').then(m=> m.AdminModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
