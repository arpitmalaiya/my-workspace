import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'lib-my-lib',
  templateUrl: './my-lib.component.html',
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  myForm : FormGroup | undefined

  @Output() catchInput = new EventEmitter<string>;
  @Input() userHeading ;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username : new FormControl('')
    })

    this.myForm.get("username").valueChanges.subscribe(changes =>{
      this.catchInput.emit(changes);
      console.log(changes);
      
    })
  }

}
