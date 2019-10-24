import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  styleUrls: ['./form-components.component.scss']
})
export class FormComponentsComponent implements OnInit {

  public cancelAnRequestForm: FormGroup;
  public minDate = Date.now();
  // public minDate = '1568980850000';
  // public maxDate = '1569672050000';
  public confirmForm: FormGroup;
  public errorSms = false;
  private subscriptions: Array<Subscription>;
  public aliasForm: FormGroup;

  // @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.confirmForm = this.formBuilder.group({
      code: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(4)])
    });

    this.subscriptions = [];

    this.aliasForm = this.formBuilder.group({
      alias: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
          Validators.pattern('^(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
        ]
      ],
      neverAgain: [false]
    });

    this.subscriptions.push(
      this.aliasForm.controls.neverAgain.valueChanges.subscribe(
        () => {
          if (this.aliasForm.controls.neverAgain.value) {
            this.aliasForm.controls.alias.disable();
          } else {
            this.aliasForm.controls.alias.enable();
          }
        }),
    );
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

  sendForm(type: string) {
    // if (type === 'setAlias') {
    //   this.submitForm.emit({
    //     form: this.aliasForm,
    //     formName: 'alias'
    //   });
    // }
    // if (type === 'neverAgain') {
    //   this.submitForm.emit({
    //     form: this.aliasForm,
    //     formName: 'neverShowAliasAgain'
    //   });
    // }
    if (type === 'setAlias') {
      alert('setAlias');
    }
    if (type === 'neverAgain') {
      alert('neverAgain');
    }
  }

  goToIndex() {
    alert('Ir al index');
    // this.submitForm.emit({
    //   form: this.aliasForm,
    //   formName: null
    // });
  }

  showError(formControl: AbstractControl) {
    return formControl.invalid && formControl.dirty;
  }

  getError(formControl: AbstractControl) {
    const formError = Object.keys(formControl.errors)[0];
    switch (formError) {
      case 'minlength':
        return 'Campo con menos caracteres de los necesarios';
      case 'maxlength':
        return 'Campo con más caracteres de los necesarios';
      case 'pattern':
        return 'Campo con caracteres inválidos';
      case 'required':
        return 'Campo requerido';
      default:
        return 'Lo sentimos, se ha producido un error inesperado. Por favor, reintente más tarde.';
    }
  }

}
