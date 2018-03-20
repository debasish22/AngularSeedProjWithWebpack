import {Component} from '@angular/core'

@Component({
  selector:"myapp",
  templateUrl:'app/app.component.html',
  styleUrls:['app/app.component.css']
  
})

export class AppComponent{ 
  
  projectName:string;
  constructor()
  {
     this.projectName="Hello World !!";
  }
}