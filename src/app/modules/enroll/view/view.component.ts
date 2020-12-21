import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnrollService } from 'src/app/http-services/enroll.service';
import { enroll } from 'src/app/signature/enroll';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  enroll:enroll = {id:'',name:'', active:false,dateOfBirth:''}
  enroleeId:string = ''
  constructor(private route:ActivatedRoute,private router:Router,private enrollService :EnrollService) { 

    this.enroleeId = this.route.snapshot.params.id;

  }

  ngOnInit(): void {
    this.getEnrolleeById()
  }

  getEnrolleeById()
  {
    this.enrollService.getEnrollee(this.enroleeId).subscribe((res:any)=>{
  
      this.enroll = res;
  
    },(err:any)=>{
  
    })
  }
  onCancel = () =>{
    this.router.navigate(['/dashboard/enroll/list'])
  }
}
