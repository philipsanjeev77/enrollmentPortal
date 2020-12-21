import { Component, OnInit } from '@angular/core';
import { EnrollService } from 'src/app/http-services/enroll.service';
import { enroll } from 'src/app/signature/enroll';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  enroll:enroll[]=[]
  constructor(private enrollService:EnrollService) { }

  ngOnInit(): void {
    this.getEnrolles()
  }

  getEnrolles()
  {
    this.enrollService.getEnrollees().subscribe((res:any)=>{
  
      console.log(res)
      this.enroll = res
  
    },(err:any)=>{
  
    })
  }

  setStatus = (status:boolean) =>{
    return status ? '<i class="fa fa-check-circle" aria-hidden="true"></i>': '<i class="fa fa-times-circle"></i>'
  } 

}
