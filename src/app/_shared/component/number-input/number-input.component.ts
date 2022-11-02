import {Component, Input} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormGroupDirective,
  NG_VALUE_ACCESSOR, ValidationErrors,
  Validator
} from "@angular/forms";

@Component({
  selector: 'number-input',
  template: `
    <div>
      <label [for]="name">{{label}}</label>
      <input
        class="w-full rounded-lg border border-gray-200 p-3 text-sm"
        [id]="name"
        type="number"
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
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: NumberInputComponent
    }
  ]
})
export class NumberInputComponent implements ControlValueAccessor, Validator {
  @Input() label: string = ''
  @Input() name: string = ''
  @Input() placeholder: string = ''
  quantity = 0;
  touched = false;
  disabled = false;

  onChange = () => {
  };

  onTouched = () => {
  };

  writeValue(quantity: number) {
    this.quantity = quantity;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }


}
