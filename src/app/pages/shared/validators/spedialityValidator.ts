import {AbstractControl, ValidationErrors} from '@angular/forms';

export class SpecialityValidator {
  static verifySpecialityFeilds(control: AbstractControl): ValidationErrors {
    const doctorNumber = control.get('doctorNumber').value;
    const grade = control.get('grade').value;
    const speciality = control.get('speciality').value;
    const serviceHospital = control.get('serviceHospital').value;
    const officeLocalisation = control.get('officeLocalisation').value;
    const pharmacyLocalisation = control.get('pharmacyLocalisation').value;
    const officeType = control.get('officeType').value;
    const workField = control.get('workField').value;
    if (control.get('specialityType').value === 'patient') return null;
    if (control.get('specialityType').value === 'doctor') {
      let errors = {};
      if (isNaN(doctorNumber)) errors['doctorNumberNaN'] = 'doctor number must be a number!';
      if (doctorNumber == null || doctorNumber === '') {
        errors['doctorNumberNull'] = 'doctor number is required!';
        console.log(' doctor number is null');
      }
      if (grade == null || grade === '') errors['gradeNull'] = 'doctor grade is required!';
      if (speciality == null || speciality === '') errors['specialityNull'] = 'doctor speciality is required!';
      if (serviceHospital == null || serviceHospital === '') errors['serviceHospitalNull'] = 'doctor service hospital is required!';
      if (officeLocalisation == null || officeLocalisation === '') errors['officeLocalisationNull'] = 'doctor office localisation is required!';
      if (errors !== {}) return errors;
      return null;
    }
    if (control.get('specialityType').value === 'pharmacist') {
    }
    if (control.get('specialityType').value === 'technician') {
    }
  }
}
