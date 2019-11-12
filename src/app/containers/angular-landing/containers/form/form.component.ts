import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public formExample: FormGroup;
  public user;
  public isClicked = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formExample = this.formBuilder.group({
      registeredOn: today,
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      dni: ['', [
        Validators.required,
        // Validators.pattern('^[0-9]*$')
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(6)
      ]],
      sexo: new FormControl('', Validators.required),
      photo: '',
      state: ''
    });
  }

  public register() {
    this.isClicked = true;
    this.user = this.formExample.value;
    console.log(this.user);
  }

  showError(formControl: AbstractControl) {
    return formControl.invalid && formControl.dirty;
  }

  public getError(formControl: AbstractControl): string {

    const formError = Object.keys(formControl.errors)[0];
    switch (formError) {
      case 'minlength':
        return 'Campo con menos caracteres de los necesarios';
      case 'pattern':
        return 'Campo con caracteres inválidos';
      case 'required':
        return 'Campo requerido';
      default:
        return 'Lo sentimos, se ha producido un error inesperado. Por favor, reintente más tarde.';
    }
  }
}
