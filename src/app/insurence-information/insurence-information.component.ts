
import { PoliceService } from './../services/police.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurence-information',
  templateUrl: './insurence-information.component.html',
  styleUrls: ['./insurence-information.component.css']
})
export class InsurenceInformationComponent implements OnInit {


  constructor(private policeServ:PoliceService) { }

  ngOnInit(): void {
    // this.getPolice();
  }


  // getPolice(){
  //   this.policeServ.getPolice().subscribe(response =>{
  //     this.police=response;

  //   },err => console.log(err)
  //   )
  // }

}
