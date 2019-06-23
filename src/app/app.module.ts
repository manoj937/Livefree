import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatCardModule, MatInputModule, MatButtonModule, MatSelectModule, MatSnackBarModule,
MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatMenuModule, MatRadioModule
} from '@angular/material';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './tiles/header/header.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProgrammersComponent } from './pages/programmers/programmers.component';
import { RecruitersComponent } from './pages/recruiters/recruiters.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { ProductsComponent } from './pages/products/products.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileInfoComponent } from './pages/home/profile-info/profile-info.component';
import { PostInfoComponent } from './pages/home/post-info/post-info.component';
import { JobInfoComponent } from './pages/home/job-info/job-info.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'programmers', component: ProgrammersComponent },
  { path: 'recruiters', component: RecruitersComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    ProgrammersComponent,
    RecruitersComponent,
    ClientsComponent,
    TeamsComponent,
    ProductsComponent,
    SettingsComponent,
    ProfileInfoComponent,
    PostInfoComponent,
    JobInfoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
