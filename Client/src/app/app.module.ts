import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { MusicService } from './services/music.service';
import { HomeComponent } from './home/home.component';
import { SearchTracksComponent } from './search-tracks/search-tracks.component';
import { TrackViewComponent } from './track-view/track-view.component';
import { UserService } from './services/user.service';
import { ProfileComponent } from './profile/profile.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AddTrackComponent } from './add-track/add-track.component';
import { ArtistTracksComponent } from './artist-tracks/artist-tracks.component';
import { ExternalTracksComponent } from './external-tracks/external-tracks.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SearchTracksComponent,
    TrackViewComponent,
    ProfileComponent,
    FavouritesComponent,
    AddTrackComponent,
    ArtistTracksComponent,
    ExternalTracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule

  ],
  providers: [MusicService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
