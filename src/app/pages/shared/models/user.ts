export interface Patient {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: string;
  birthday?: string;
  cin?: string;
  gender?: number;
  phoneNumber?: string;
  cnamId?: number;
  civilStatus: string;
  socialStatus?: string;
}

export interface Doctor extends Patient {
  doctorNumber: number;
  grade: string;
  speciality: string;
  serviceHospital: string;
  officeLocalisation: string;
}

export interface Pharmacist extends Patient {
  pharmacyLocalisation: string;
}

export interface Technician extends Patient {
  officeLocalisation: string;
  officeType: string;
  workField: string;
}
