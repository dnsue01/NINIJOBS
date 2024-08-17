import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { JobsGridComponent } from './components/jobs-grid/jobs-grid.component';
import { CompanyComponent } from './pages/company/company.component';
import { JobCardComponent } from './components/job-card/job-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SearchbarComponent,
    JobsGridComponent,
    CompanyComponent,
    JobCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
