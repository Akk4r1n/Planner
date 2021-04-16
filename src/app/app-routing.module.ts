import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FileComponent } from './components/file/file.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "board", component: BoardComponent },
  { path: "file", component: FileComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
