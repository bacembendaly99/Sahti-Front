import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NbRegisterComponent} from '@nebular/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentification/authentication.service';
import {Router} from '@angular/router';
import {SpecialityValidator} from '../../shared/validators/spedialityValidator';


@Component({
  selector: 'ngx-register-step4',
  templateUrl: './register-step4.component.html',
  styleUrls: ['./register-step4.component.scss'],
})
export class RegisterStep4Component implements OnInit {
  selectedOption: Number;
  ShowDoctor = false;
  ShowPharmacian = false;
  ShowTechnician = false;
  registerForm4: FormGroup;
  @Output() sendUserData = new EventEmitter();
  @Output() registerUser = new EventEmitter();

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.ShowDoctor = false;
    this.ShowPharmacian = false;
    this.ShowTechnician = false;
    this.registerForm4 = this.formBuilder.group({
        specialityType: [null, [
          Validators.required,
        ]],
        doctorNumber: [null, []],
        grade: [null, []],
        speciality: [null, []],
        serviceHospital: [null, []],
        officeLocalisation: [null, []],
        pharmacyLocalisation: [null, []],
        officeType: [null, []],
        workField: [null, []],
      },
      {
        validators: SpecialityValidator.verifySpecialityFields,
      });
  }

  ChangeOption(Num) {
    switch (Num) {
      case 1:
        this.ShowDoctor = false;
        this.ShowPharmacian = false;
        this.ShowTechnician = false;
        break;
      case 2:
        this.ShowDoctor = true;
        this.ShowPharmacian = false;
        this.ShowTechnician = false;
        break;
      case 3:
        this.ShowPharmacian = true;
        this.ShowDoctor = false;
        this.ShowTechnician = false;
        break;
      case 4:
        this.ShowTechnician = true;
        this.ShowPharmacian = false;
        this.ShowDoctor = false;
        break;

    }
  }

  sendUserDataToParent(user: any) {
    this.sendUserData.emit(user);
  }


  onSubmit() {
    let speciality;
    let user = {};
    if (this.registerForm4.invalid) return;
    speciality = this.registerForm4.value.specialityType;
    delete this.registerForm4.value.specialityType;
    user = this.registerForm4.value;
    for (const key in user) {
      if (user[key] === null) {
        delete user[key];
      }
    }
    switch (speciality) {
      case 'patient':
        this.sendUserDataToParent({});
        break;
      case 'doctor':
        this.sendUserDataToParent({
            'doctor': user,
          });
        break;
      case 'pharmacist':
        this.sendUserDataToParent({
          'pharmacist': user,
        });
        break;
      case 'technician':
        this.sendUserDataToParent({
          'technician': user,
        });
        break;
    }
    this.registerUser.emit('register');
  }

  get specialityType() {
    return this.registerForm4.get('specialityType');
  }
}
