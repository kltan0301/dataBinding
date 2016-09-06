import { Component,
         EventEmitter
        } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <div class="propChild">
      <label>Child Input:</label>
      <input type="text" (keyup)="onChange(myInput.value)" #myInput>
      <p>My sibling\'s input is: {{siblingInput}}</p>
    </div>
  `,
  inputs: ['siblingInput'],
  outputs: ['myOutput']
})
export class Child1 {
  myOutput = new EventEmitter<string> ();

  onChange(value:string){
    this.myOutput.emit(value);
  }

}
