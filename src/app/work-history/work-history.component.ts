import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {

  jobs:any[]=[{
    company:"Evokes llc",
    location:"Mason OH",
    tenure:"2017-2021",
    description:"CNIM certified Surgical Neurophysiologist"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
