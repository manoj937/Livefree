import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions-info',
  templateUrl: './suggestions-info.component.html',
  styleUrls: ['./suggestions-info.component.scss']
})
export class SuggestionsInfoComponent implements OnInit {

  constructor() { }

  suggestions = [{
    "name": "Gayathri M",
    "avatar": "gayathri",
    "designation": "Full Stack Developer"
  },{
    "name": "Mirnalini R",
    "avatar": "mirnalini",
    "designation": "Graphic Designer"
  },{
    "name": "Mathu",
    "avatar": "mathu",
    "designation": "Software Engineer"
  },{
    "name": "Karthikeyan J",
    "avatar": "karthi",
    "designation": "Software Developer"
  },{
    "name": "Gowtham S",
    "avatar": "gowtham",
    "designation": "Java Developer"
  }];

  ngOnInit() {
  }

}
