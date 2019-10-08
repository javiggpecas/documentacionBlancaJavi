import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-form-1',
  templateUrl: './reactive-form-1.component.html',
  styleUrls: ['./reactive-form-1.component.scss']
})
export class ReactiveForm1Component implements OnInit {
  private subscriptions: Array<Subscription>;
  public aliasForm: FormGroup;

  // @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
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
