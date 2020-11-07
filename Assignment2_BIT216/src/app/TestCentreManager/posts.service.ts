//import { Record } from './post.model';
import { Generate } from './post.model';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class PostsService {

  /*  private registers: Register[] = [];
    private registersUpdated = new Subject<Register[]>();
  
    constructor(private http: HttpClient) { }
  
    getRegisters() {
      this.http.get<{ message: string, registers: any }>('http://localhost:3000/api/posts')
        .pipe(map((postData) => {
          return postData.registers.map(register => {
            return {
              centreName: register.centreName,
              centreTel: register.centreTel,
              centreAdd: register.centreAdd,
              id: register._id
            };
          });
        }))
  
        .subscribe((transformedRegisters) => {
          this.registers = transformedRegisters;
          this.registersUpdated.next([...this.registers]);
        })
    }
  
    getRegistersUpdateListener() {
      return this.registersUpdated.asObservable();
    }
  
    addRegister(centreName: string, centreTel: string, centreAdd: string) {
      const register: Register = { id: null, centreName: centreName, centreTel: centreTel, centreAdd: centreAdd };
      this.http
        .post<{ message: string, registerId: string }>('http://localhost:3000/api/posts', register)
        .subscribe((responseData) => {
          const id = responseData.registerId;
          register.id = id;
          this.registers.push(register);
          this.registersUpdated.next([...this.registers]);
        });
    }
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  private records: Record[] = [];

  getRecords() {
    return this.records;
  }

  addRecord(officerFullName: string, officerUsername: string, officerPassword: string) {
    const record: Record = { officerFullName: officerFullName, officerUsername: officerUsername, officerPassword: officerPassword };
    this.records.push(record);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /*private manages: Manage[]=[];

  getManages(){
    return this.manages;
  }

  addManage(kitName: string, numStock: string) {
      const manage: Manage = {kitName:kitName, numStock:numStock };
      this.manages.push(manage);
  }
*/
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  private generates: Generate[] = [];

  getGenerate() {
    return this.generates;
  }

  addGenerate(patientUsername: string, patientPassword: string, patientName: string, patientType: string, patientSymptoms: string) {
    const generate: Generate = {
      patientUsername: patientUsername, patientPassword: patientPassword, patientName: patientName,
      patientType: patientType, patientSymptoms: patientSymptoms
    };
    this.generates.push(generate);
  }

}
