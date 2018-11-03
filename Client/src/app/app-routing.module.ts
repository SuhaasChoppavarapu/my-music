import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SearchTracksComponent } from './search-tracks/search-tracks.component';
import { TrackViewComponent } from './track-view/track-view.component';
import { ProfileComponent } from './profile/profile.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AddTrackComponent } from './add-track/add-track.component';
import { ArtistTracksComponent } from './artist-tracks/artist-tracks.component';
import { ExternalTracksComponent } from './external-tracks/external-tracks.component';

//all the routes
const routes: Routes =[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'user/home', component:HomeComponent },
  { path: 'artist/home', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'searchTracks/:searchKey', component:SearchTracksComponent },
  { path: 'track/:mbid', component:TrackViewComponent },
  { path: 'user/favorites', component:FavouritesComponent },
  { path: 'user/externalTracks', component:ExternalTracksComponent },
  { path: 'artist/profile', component:ProfileComponent},
  { path: 'artist/addTrack', component:AddTrackComponent},
  { path: 'artist/myTracks', component:ArtistTracksComponent},
  { path: 'user/profile', component:ProfileComponent}
]

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
