import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WizzardComponent } from './layout/wizzard/wizzard.component';
import { AdressComponent } from './Components/adress/adress.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './layout/buttons/buttons.component';
import { TabsComponent } from './layout/tabs/tabs.component';
import { AnimationComponent } from './layout/animation/animation.component';
import { FeaturesComponent } from './layout/features/features.component';
import { GeneralInfoComponent } from './Components/general-info/general-info.component';
import { CommentsComponent } from './Components/comments/comments.component';
import { FinishWizardComponent } from './Components/finish-wizard/finish-wizard.component';
import { WizardTabsComponent } from './Components/wizard-tabs/wizard-tabs.component';
import { HomeComponent } from './layout/home/home.component';
import { ProgressbarComponent } from './Components/progressbar/progressbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'wizzard', redirectTo: 'wizzard/adress' },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'wizzard/adress', component: AdressComponent },
  { path: 'wizzard/info', component: GeneralInfoComponent },
  { path: 'wizzard/comments', component: CommentsComponent },
  { path: 'wizzard/finish', component: FinishWizardComponent },




];

@NgModule({
  declarations: [
    AppComponent,
    WizzardComponent,
    AdressComponent,
    NavbarComponent,
    ButtonsComponent,
    TabsComponent,
    AnimationComponent,
    FeaturesComponent,
    GeneralInfoComponent,
    CommentsComponent,
    FinishWizardComponent,
    WizardTabsComponent,
    HomeComponent,
    ProgressbarComponent,

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), SidebarModule.forRoot(), NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
