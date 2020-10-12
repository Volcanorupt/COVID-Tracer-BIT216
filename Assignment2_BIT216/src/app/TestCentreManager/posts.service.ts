import {Register} from './post.model';
import {Record} from './post.model';
import {Generate} from './post.model';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class PostsService {

 private registers: Register[]= [];

  getRegisters(){
    return this.registers;
  }

  addRegister(centreName: string, centreTel: string, centreAdd: string){
    const register: Register = {centreName:centreName, centreTel:centreTel, centreAdd:centreAdd };
    this.registers.push(register);
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  private records: Record[]=[];

  getRecords(){
    return this.records;
  }

  addRecord(officerFullName: string, officerUsername: string, officerPassword: string) {
      const record: Record = {officerFullName:officerFullName, officerUsername:officerUsername, officerPassword:officerPassword };
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

  private generates: Generate[]=[];

  getGenerate(){
    return this.generates;
  }

  addGenerate(patientUsername: string, patientPassword: string, patientName: string, patientType: string, patientSymptoms: string){
    const generate: Generate = {patientUsername:patientUsername,patientPassword:patientPassword,patientName:patientName,
      patientType:patientType,patientSymptoms:patientSymptoms};
      this.generates.push(generate);
  }

}
