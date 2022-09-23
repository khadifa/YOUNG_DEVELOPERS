import { Police } from './../Police';
import { PoliceService } from './../services/police.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-police',
  templateUrl: './police.component.html',
  styleUrls: ['./police.component.css']
})
export class PoliceComponent implements OnInit {
  polices!: Police[]

  constructor(private policesev:PoliceService) { }

  ngOnInit(): void {
    this.getPolice();
  }

  getPolice(){
    this.policesev.getPolice().subscribe(response =>{
      console.log (response)
      this.polices=response
    })
  }

}
