import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testData: string[] = []
ngOnInit(){
  for(let i=1;i<5;i++){
    this.testData.push("New Item is:"+i);
  }
}
}
