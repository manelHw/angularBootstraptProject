import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  shotsData: Object[];

  constructor() {
    this.shotsData = [
      {

        icon: "../assets/icon.ico" ,
        shot_id: "8556",
        name: "shot1",
        timestamp:"1/16/2018 1:30:0"

      },
      {
        icon: "../assets/icon.ico" ,
        shot_id: "12054",
        name: "shot2",
        timestamp: "1/16/2018 1:16:0"
      },
      {
        icon: "../assets/icon.ico" ,
        shot_id: "952",
        name: "shot3",
        timestamp: "1/18/2018 1:33:0"
      },
      {
        icon: "../assets/icon.ico" ,
        shot_id: "9000",
        name: "shot4",
        timestamp: "1/16/2018 1:96:0"
      },
      {
        icon: "../assets/icon.ico" ,
        shot_id: "12054",
        name: "shot5",
        timestamp: "1/16/2018 3:16:0"
      },
      {
        icon: "../assets/icon.ico" ,
        shot_id: "12054",
        name: "shot6",
        timestamp: "1/16/2018 1:16:0"
      },
      {
        icon: "../assets/icon.ico" ,
        shot_id: "12054",
        name: "shot1",
        timestamp: "1/16/2018 1:16:0"
      },
      {
        icon: "../assets/icon.ico" ,
        shot_id: "12054",
        name: "shot1",
        timestamp: "1/16/2018 1:16:0"
      },
      {
        icon: "../assets/icon.ico" ,
        shot_id: "12054",
        name: "shot1",
        timestamp: "1/16/2018 1:16:0"
      },
      {
        icon: "../assets/icon.ico" ,
        shot_id: "12054",
        name: "shot1",
        timestamp: "1/16/2018 1:16:0"
      },
      {
        icon: "../assets/icon.ico" ,
        shot_id: "12054",
        name: "shot1",
        timestamp: "1/16/2018 1:16:0"
      },
      {
        icon: "../assets/icon.ico" ,
        shot_id: "12054",
        name: "shot1",
        timestamp: "1/16/2018 1:16:0"
      }
    ];
  }

  

  ngOnInit() {
  }

}
