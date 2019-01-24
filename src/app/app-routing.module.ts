import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
            
  exports: [RouterModule],
})
export class AppRoutingModule { }
