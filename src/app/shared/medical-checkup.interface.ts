export interface MedicalCheckup {
  remarks: string;
  medicamentsIdList: [
    number
  ];
  additionalInformation: string;
  doctorId: number;
  patientId: number;
  namesOfChronicDiseases: [
    string
  ];
  controlDate: string;
}
