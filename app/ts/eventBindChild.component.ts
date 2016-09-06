import { Component,
         EventEmitter
        } from '@angular/core';

@Component({
  selector: 'event-child',
  template: `
    <div class="propChild">
      <label>Child Input:</label>
      <input type="text" #childInput (keyup)="onChange(childInput.value)" >
    </div>
  `,
  outputs: ['childChanged']
})
export class EventChild {
  childChanged = new EventEmitter<string> ();

  onChange(value:string){
    this.childChanged.emit(value);
  }

}
