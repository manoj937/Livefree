import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cards = [
    {
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
    },{
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
    }
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
}