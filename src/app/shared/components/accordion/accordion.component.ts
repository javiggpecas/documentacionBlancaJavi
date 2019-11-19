import { Component, Input } from '@angular/core';

/**
 * Accordion container to insert components in a accordion
 * @example
 *
 * <app-accordion [title]="'Datepicker'" [description]="'Funcionamiento datepicker'">
 *  <ng-container class="accordion-body">
 *  </ng-container>
 * </app-accordion>
 */
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent {

  /** Title to show in the accordion */
  @Input() title: string;
  /** Description to show in the accordion */
  @Input() description: string;

  /**
   * The "constructor"
   */
  constructor() { }

}
