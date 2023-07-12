import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './appcomponent/app.component';
import { HomeComponent } from './home/home.component';
import { MalgojService } from './malgoj.service';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';


const appRoutes: Routes =
[
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'Home',
  },

  {
    path: 'Home',
    component: HomeComponent,
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule.forRoot(appRoutes), // import routes
  ],
  providers: [MalgojService],
  bootstrap: [AppComponent]
})
export class AppModule { }
