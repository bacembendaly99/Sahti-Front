import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentification/authentication.service';
import {PasswordValidator} from '../shared/validators/passwordValidator';
import {SpecialityValidator} from '../shared/validators/spedialityValidator';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class NgxRegisterComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  forthForm: FormGroup;

  user: any = {
    'patient': {},
  };

  civilStatusItems = [
    {
      value: 'Married',
      name: 'married',
    }, {
      value: 'Single',
      name: 'single',
    }, {
      value: 'Widowed',
      name: 'widowed',
    }, {
      value: 'Dead',
      name: 'dead',
    },
  ];

  ShowDoctor = false;
  ShowPharmacian = false;
  ShowTechnician = false;

  errors = {
    usedEmailOrCIN: null,
    internalError: null,
    formDataError: null,
    success: null,
  };

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {

    this.ShowDoctor = false;
    this.ShowPharmacian = false;
    this.ShowTechnician = false;

    this.firstForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [
        Validators.required,
        Validators.email,
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(6),
      ]],
      repeatPassword: [null, [
        Validators.required,
        Validators.minLength(6),
      ]],
    }, {
      validators: PasswordValidator.passwordsMatch,
    });

    this.secondForm = this.formBuilder.group({
      cin: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern('[0-9]*'),
      ]],
      phoneNumber: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern('[0-9]*'),
      ]],
      birthday: [null, [
        Validators.required,
      ]],
      gender: [null, [
        Validators.required,
      ]],
    });

    this.thirdForm = this.formBuilder.group({
      cnamId: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern('[0-9]*'),
      ]],
      civilStatus: [null, [
        Validators.required,
      ]],
      socialStatus: [null, [
        Validators.required,
      ]],
    });

    this.forthForm = this.formBuilder.group({
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

  processUserData(user: any) {
    Object.assign(this.user.patient, user);
    this.errors = {
      usedEmailOrCIN: null,
      internalError: null,
      formDataError: null,
      success: null,
    };
    console.log('user', this.user);
  }

  processRoleData(role: any) {
    Object.assign(this.user, role);
    // console.log('user', this.user);
  }

  register(message) {
    if (message === 'register') {
      console.log('user', this.user);
      this.authService.register(this.user).subscribe(
        data => {
        },
        error => {
          console.log('error : ', error);
          if (error.error.message.includes('Cin'))
            this.errors['usedEmailOrCIN'] = error.error.message;
          else {
            if (error.status === 0 || (error.status >= 400 && error.status < 500))
              this.errors['internalError'] = error.error.message;
            if (error.status === 500)
              this.errors['formDataError'] = error.error.message;
            if (error.success)
              this.errors['success'] = true;
          }
        },
      );
    }
  }

  onFirstSubmit() {
    if (this.firstForm.invalid) return;
    this.processUserData(this.firstForm.value);
  }

  onSecondSubmit() {
    if (this.secondForm.invalid) return;
    this.processUserData(this.secondForm.value);
  }

  onThirdSubmit() {
    if (this.thirdForm.value.cnamId !== null || this.thirdForm.value.cnamId !== '') {
      this.thirdForm.value.cnamId = parseInt(this.thirdForm.value.cnamId, 10);
    }
    if (this.thirdForm.invalid) return;
    this.processUserData(this.thirdForm.value);
  }

  onForthSubmit() {
    let speciality;
    let user = {};
    if (this.forthForm.invalid) return;
    speciality = this.forthForm.value.specialityType;
    delete this.forthForm.value.specialityType;
    user = this.forthForm.value;
    for (const key in user) {
      if (user[key] === null) {
        delete user[key];
      }
    }
    switch (speciality) {
      case 'patient':
        this.processRoleData({});
        break;
      case 'doctor':
        this.processRoleData({
          'doctor': user,
        });
        break;
      case 'pharmacist':
        this.processRoleData({
          'pharmacist': user,
        });
        break;
      case 'technician':
        this.processRoleData({
          'technician': user,
        });
        break;
    }
    this.register('register');
  }

  get gender() {
    return this.secondForm.get('gender');
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
}
