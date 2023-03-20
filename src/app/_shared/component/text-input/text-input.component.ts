import {Component, Input} from '@angular/core';
import {ControlContainer, FormGroupDirective,} from "@angular/forms";

@Component({
  selector: 'text-input',
  template: `
    <div>
      <label class="" [for]="name">{{label}}</label>
      <input
        class="w-full rounded-lg p-3 text-sm bg-gray-300"
        [id]="name"
        type="text"
        [formControlName]="name"
      />
    </div>
  `,
  styles: [],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class TextInputComponent {

  @Input() label: string = ''
  @Input() name: string = ''
  @Input() placeholder: string = ''

}
