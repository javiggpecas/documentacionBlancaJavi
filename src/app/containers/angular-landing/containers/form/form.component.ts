import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';

/**
 * Angular Form example
 * <example-url>https://javiggpecas.github.io/documentacionBlancaJavi/#/angular-landing/form</example-url>
 */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  /** Form data */
  public formExample: FormGroup;
  /** The user segistred in the form */
  public user;
  /** Boolean contains if the form was clicked */
  public isClicked = false;

  /**
   * The "constructor"
   *
   * @param formBuilder Need to build Angular® Forms
   */
  constructor(private formBuilder: FormBuilder) { }

  /**
   * On app inicialized and init
   */
  ngOnInit() {
    this.buildForm();
  }

  /**
   * Init the form
   */
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

  /**
   * Register the form on clicked in the sumbit
   */
  public register() {
    this.isClicked = true;
    this.user = this.formExample.value;
    console.log(this.user);
  }

  /**
   * If the are an error in the form
   * @param formControl Object of the angular form
   * @returns boolean if it's a valid form
   */
  showError(formControl: AbstractControl): boolean {
    return formControl.invalid && formControl.dirty;
  }

  /**
   * Obtains the error text
   * @param formControl Object of the angular form
   * @returns The error text to show
   */
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
