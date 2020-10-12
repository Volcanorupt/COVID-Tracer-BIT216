import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from "./login/login.component";

import { TcmHomeComponent } from './TestCentreManager/tcmHome/tcmHome.component';
import { RegisterTcComponent } from './TestCentreManager/registerTestCentre/reg-tc.component';
import { RecordToComponent } from './TestCentreManager/recordTestOfficer/record-to.component';
import { ManageStockComponent } from './TestCentreManager/manageKitStock/manageStockHome/manage-stock.component';
import { UpdateKitComponent } from './TestCentreManager/manageKitStock/updateKit/updatekit.component';
import { NewKitComponent } from './TestCentreManager/manageKitStock/newKit/newkit.component';
import { PostListComponent } from './TestCentreManager/post-list/post-list.component';
import { GenerateTestReportComponent } from './TestCentreManager/generateTestReport/generateTestReport.component';

import { TesterHomeComponent } from './tester/testerHome.component';
import { recordNewTestComponent } from './tester/recordNewTest/recordNewTest.component';
import { updateTestResultComponent } from './tester/updateTestResult/updateTestResult.component';

import { PatientComponent } from './patient/patient.component';
import { viewTestHistoryComponent } from './patient/viewTestHistory/viewTestHistory.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},

  {path: 'tcmHome', component: TcmHomeComponent},
  {path: 'reg-tc', component: RegisterTcComponent},
  {path: 'record-to', component: RecordToComponent},
  {path: 'manage-stock', component: ManageStockComponent},
  {path: 'updateKit', component: UpdateKitComponent},
  {path: 'newKit', component: NewKitComponent},
  {path: 'list', component: PostListComponent},
  {path: 'generate-testReport', component: GenerateTestReportComponent},


  {path: 'testerHome', component: TesterHomeComponent},
  {path: 'rec-newTest', component: recordNewTestComponent},
  {path: 'update-testResult', component: updateTestResultComponent},


  {path: 'patient', component: PatientComponent},
  {path: 'view-testHistory', component: viewTestHistoryComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,

    TcmHomeComponent,
    RegisterTcComponent,
    RecordToComponent,
    ManageStockComponent,
    UpdateKitComponent,
    NewKitComponent,
    PostListComponent,
    GenerateTestReportComponent,

    TesterHomeComponent,
    recordNewTestComponent,
    updateTestResultComponent,

    PatientComponent,
    viewTestHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,

    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,

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
