import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.scss']
})
export class JobInfoComponent implements OnInit {

  constructor() { }

  jobs = [{
    "avatar": "gayathri",
    "name": "Gayathri M",
    "time": "3 min ago",
    "skilllevel":"Epic Coder",
    "location":"Chennai, India",
    "designation":"Full Stack Developer",
    "worktype": "Fulltime",
    "salary": "$30 / hr",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...",
    "viewmore": true,
    "skills": ["HTML", "CSS", "JAVASCRIPT", "JAVA"],
    "likes": 256,
    "comments": 32,
    "views": 765
  },{
    "avatar": "mano",
    "name": "Manoj S",
    "time": "8 min ago",
    "skilllevel":"Epic Coder",
    "location":"Chennai, India",
    "designation":"Full Stack Developer",
    "worktype": "Fulltime",
    "salary": "$25 / hr",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...",
    "viewmore": true,
    "skills": ["HTML", "CSS", "JAVASCRIPT", "ANGULAR", "NODEJS"],
    "likes": 25,
    "comments": 2,
    "views": 1256
  },{
    "avatar": "akash",
    "name": "Akash D Souza",
    "time": "34 min ago",
    "skilllevel":"Epic Coder",
    "location":"Chennai, India",
    "designation":"Javasript Developer",
    "worktype": "Fulltime",
    "salary": "$25 / hr",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...",
    "viewmore": true,
    "skills": ["HTML", "CSS", "JAVASCRIPT", "EMBER"],
    "likes": 67,
    "comments": 12,
    "views": 1543
  }];
  
  ngOnInit() {
  }

}
