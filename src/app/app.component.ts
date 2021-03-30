import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume';
  name:string="Tyler Jewell";
  address:string="123 way";
  phone:string="513";
  email:string="@gmail"
  job:string="Full Stack C# .NET Software Developer"
  pp:string="Professional Profile"
  proffesional:string="An innate lover of technology with a strong sense of responsibility combined with teamwork from a background in fast paced highly accurate work.  Previous work in a bleeding edge small field that required constant learning and flexibility with a focus on problem solving"

  showPersonal=null;

  blueButtonStyle:string="btn btn-primary";
  redButtonStyle:string="btn btn-danger";
  buttonStyle:string=this.blueButtonStyle

changeButton():void{
  this.buttonStyle=this.redButtonStyle
}

  togglePersonal():void{
    this.showPersonal=true;
  }



  constructor(
    private usrsvc: UserService
  ){
    this.usrsvc.list().subscribe(
      users =>{console.log(users);},
      err => {console.error(err);}
    );
  }
}

