import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {

  public cancelAnRequestForm: FormGroup;
  public minDate = Date.now();
  // public minDate = '1568980850000';
  // public maxDate = '1569672050000';
  public confirmForm: FormGroup;
  public errorSms = false;

  constructor(private formBuilder: FormBuilder) {
    this.confirmForm = this.formBuilder.group({
      code: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(4)])
    });
  }

  ngOnInit() {
    // RADIO BUTTON
    this.cancelAnRequestForm = new FormGroup({
      indAnulacion: new FormControl('', Validators.required),
      indRenovacion: new FormControl('', Validators.required)
    });
    // tslint:disable-next-line:no-string-literal
    this.cancelAnRequestForm.controls['indAnulacion'].valueChanges.subscribe(value => {
      alert(value);
    });

  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }

}
