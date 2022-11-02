import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
} from "@angular/forms";

@Component({
  selector: 'text-input',
  template: `
    <div>
      <label class="font-bold" [for]="name">{{label}}</label>
      <input
        class="w-full rounded-lg border border-gray-300 p-3 text-sm"
        [id]="name"
        type="text"
        [formControlName]="name"
      />
    </div>
  `,
  styles: [
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class TextInputComponent  {

@Input() label: string = ''
@Input() name: string = ''
@Input() placeholder: string = ''

}
