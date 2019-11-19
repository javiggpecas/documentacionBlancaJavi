import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

/**
 * Angular Form Compete and single example
 * <example-url>https://javiggpecas.github.io/documentacionBlancaJavi/#/angular-landing/form-components</example-url>
 */
@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  styleUrls: ['./form-components.component.scss']
})
export class FormComponentsComponent implements OnInit {

  /** Cancel and request form */
  public cancelAnRequestForm: FormGroup;
  /** Min date can be selected */
  public minDate = Date.now();
  // public minDate = '1568980850000';
  /** Max date can be selected */
  public maxDate = '1569672050000';
  /** Form confirm data */
  public confirmForm: FormGroup;
  /** Boolean  error sms if there are an error will be true */
  public errorSms = false;
  /** Var contains the subscriptions to unsubscribe on destroy */
  private subscriptions: Array<Subscription>;
  /** Form alias data */
  public aliasForm: FormGroup;

  // @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();

  /**
   * The "constructor" init the forms obtejct and the subscriptions
   * @param formBuilder Need to build Angular® Forms
   */
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

  /**
   * Init the proyect
   */
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

  /**
   * Filter the day selected
   */
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }

  /**
   * Check the type of the completed form TODO
   * @param type Type of the form recibed
   */
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

  /**
   * Redirect to index TODO
   */
  goToIndex() {
    alert('Ir al index');
    // this.submitForm.emit({
    //   form: this.aliasForm,
    //   formName: null
    // });
  }

  /**
   * Check if you have to show error
   * @param formControl Object of the angular form
   * @returns boolean if it's a valid form
   */
  showError(formControl: AbstractControl): boolean {
    return formControl.invalid && formControl.dirty;
  }

  /**
   * Return the estring with the error
   * @param formControl Object of the angular form
   * @returns string of the error to show
   */
  getError(formControl: AbstractControl): string {
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
