import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  sum = 0;
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
  
  ngOnInit() {  
    setInterval(() => {
     // document.getElementById('carouse-inner-blk').style.left = 160 + "px";
    }, 2000);
  }

  ngAfterViewInit(){
    var cards  = document.getElementById('carouse-inner-blk').children as HTMLCollectionOf<HTMLElement>;
      for(let i=0;i<this.cards.length;i++){
        i>0?cards[i].style.left = JSON.stringify(cards[i-1].offsetLeft + cards[i-1].offsetWidth + 15) + "px": 0;
        this.sum = this.sum + cards[i].offsetWidth; 
      }
      document.getElementById('carouse-inner-blk').style.width = this.sum + "px";
  }
  
}