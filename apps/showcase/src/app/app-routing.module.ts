import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ApiDemoComponent } from './components/api-demo/api-demo.component';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { OldStyleGuideComponent } from './components/old-style-guide/old-style-guide.component';
import { SelectLanguageComponent } from './example-pages/select-language/select-language.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'error-handler', component: ErrorHandlerComponent},
  { path:'api-demo',component: ApiDemoComponent},
  { path:'error-handler',component: ErrorHandlerComponent},
  { path:'not-found',component: PageNotFoundComponent},
  { path:'old-style-guide',component: OldStyleGuideComponent},
  { path:'select-language',component: SelectLanguageComponent},
  { path:'**',redirectTo:'/not-found' }
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
