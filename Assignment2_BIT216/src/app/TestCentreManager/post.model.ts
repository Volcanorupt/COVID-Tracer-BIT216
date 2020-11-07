export interface Register{
  id:string;
  centreName: string;
  centreTel: string;
  centreAdd: string;
}

export interface Record{
  officerFullName: string;
  officerUsername: string;
  officerPassword: string;
}

export interface Generate {
  patientUsername: string;
  patientPassword: string;
  patientName: string;
  patientType: string;
  patientSymptoms: string;

}
