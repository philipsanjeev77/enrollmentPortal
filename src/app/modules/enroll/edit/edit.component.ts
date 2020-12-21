import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router'
import { EnrollService } from 'src/app/http-services/enroll.service';
import { AppConstant } from 'src/app/locales/app-constants';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  enrollEditFrm: FormGroup;
  id:string;
  dateOfBirth:string=''
  submitted:boolean;

  constructor(private formBuilder:FormBuilder,private route:ActivatedRoute,private router:Router,private enrollService :EnrollService) { 

      this.id = this.route.snapshot.params.id;

    }

  ngOnInit(): void {
    this.createForm()
    if(this.id)
    {
      this.getEnrolleeById()
    }
  }

  
  createForm = ()=>{
    this.enrollEditFrm = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      active:['',[
        Validators.required
      ]]
    })
  }

  get f(){ return this.enrollEditFrm.controls};

  onCancel =()=>{
    this.router.navigate(['/dashboard/enroll/list'])
  }

  getEnrolleeById()
  {
    this.enrollService.getEnrollee(this.id).subscribe((res:any)=>{
  
      this.dateOfBirth = res.dateOfBirth
     this.enrollEditFrm.patchValue(res)
  
    },(err:any)=>{
  
    })
  }

  onSubmit =() =>{
    this.submitted =true;
    if(this.enrollEditFrm.invalid)
    {
      return false;
    }
    let activeValue =  (/true/i).test(this.f.active.value) 
    this.enrollService.updateEnrollee(this.id,this.f.name.value,activeValue, this.dateOfBirth).subscribe((res:any)=>{

      alert("Enrollee updated successfully")

      this.submitted =false;
    },(err:any)=>{

    })
    
  }

}
