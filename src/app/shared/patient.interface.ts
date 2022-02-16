import {MedicalRecord} from './medical-record.interface';

export interface Patient {
  birthday: string;
  cin: string;
  civilStatus: string;
  cnamId: number;
  email: string;
  firstName: string;
  gender: number;
  id: number;
  isEmailVerified: boolean;
  lastName: string;
  phoneNumber: string;
  role: string;
  socialStatus: string;
  medicalRecord: MedicalRecord;

}
