import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
@Output() notify:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

onClick():void{
  console.log("hii");
  this.notify.emit("message from Child");
}
}
