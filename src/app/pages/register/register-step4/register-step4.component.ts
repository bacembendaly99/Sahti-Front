import { Component, OnInit } from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';


@Component({
  selector: 'ngx-register-step4',
  templateUrl: './register-step4.component.html',
  styleUrls: ['./register-step4.component.scss'],
})
export class RegisterStep4Component extends NbRegisterComponent implements OnInit {
  selectedOption: Number;
  ShowDoctor = false;
  ShowPharmacian = false;
  ShowTechnician = false;
  ngOnInit(): void {
    this.ShowDoctor = false;
    this.ShowPharmacian = false;
    this.ShowTechnician = false;
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
