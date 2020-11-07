import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./users/login/login.component";
import { RegisterComponent } from "./users/register/register.component";
import { UsersComponent } from "./users/users.component";

import { TcmHomeComponent } from './TestCentreManager/tcmHome/tcmHome.component';
import { RegisterTcComponent } from './TestCentreManager/registerTestCentre/reg-tc.component';
import { RecordToComponent } from './TestCentreManager/recordTestOfficer/record-to.component';
import { ManageStockComponent } from './TestCentreManager/manageKitStock/manageStockHome/manage-stock.component';
import { UpdateKitComponent } from './TestCentreManager/manageKitStock/updateKit/updatekit.component';
import { NewKitComponent } from './TestCentreManager/manageKitStock/newKit/newkit.component';
import { GenerateTestReportComponent } from './TestCentreManager/generateTestReport/generateTestReport.component';

import { TesterHomeComponent } from './tester/testerHome.component';
import { recordNewTestComponent } from './tester/recordNewTest/recordNewTest.component';
import { updateTestResultComponent } from './tester/updateTestResult/updateTestResult.component';

import { PatientComponent } from './patient/patient.component';
import { viewTestHistoryComponent } from './patient/viewTestHistory/viewTestHistory.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'tcmHome', component: TcmHomeComponent },
  { path: 'reg-tc', component: RegisterTcComponent },
  { path: 'record-to', component: RecordToComponent },
  { path: 'manage-stock', component: ManageStockComponent },
  { path: 'updateKit', component: UpdateKitComponent },
  { path: 'newKit', component: NewKitComponent },
  { path: 'generate-testReport', component: GenerateTestReportComponent },


  { path: 'testerHome', component: TesterHomeComponent },
  { path: 'rec-newTest', component: recordNewTestComponent },
  { path: 'update-testResult', component: updateTestResultComponent },


  { path: 'patient', component: PatientComponent },
  { path: 'view-testHistory', component: viewTestHistoryComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,

    TcmHomeComponent,
    RegisterTcComponent,
    RecordToComponent,
    ManageStockComponent,
    UpdateKitComponent,
    NewKitComponent,
    GenerateTestReportComponent,

    TesterHomeComponent,
    recordNewTestComponent,
    updateTestResultComponent,

    PatientComponent,
    viewTestHistoryComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    HttpClientModule,

    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,

    MatExpansionModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
