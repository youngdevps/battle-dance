import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { VoteComponent } from './vote/vote.component';
import { CastingComponent } from './casting/casting.component';
import { ScoringComponent } from './scoring/scoring.component';


const routes: Routes = [
  {path: "authentification", component: AuthComponent},
  {path: "home", component: HomeComponent},
  {path: "moderateur", component: ModeratorComponent},
  {path: "vote", component: VoteComponent},
  {path: "casting", component: CastingComponent},
  {path: "score", component: ScoringComponent},
  {path: "", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
