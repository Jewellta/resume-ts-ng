import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  schools: any []=[
    {
      school: "max technical",
      location:"fields ertle",
      time:"2021",
      description:"fullstackbootcamp"
    },
    {
      school:"UC",
      location:"cincinnati",
      time:"2012",
      description:"bachelors"
    }
  ]
technologies:string[]=["git", "github", "c#", "java", "postman", "html", "css", "angular", "javascript", "sql"
]
  constructor() { }

  ngOnInit(): void {
  }

}
