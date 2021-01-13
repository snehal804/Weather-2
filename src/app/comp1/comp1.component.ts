import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
   data:any;
   form: FormGroup | any ;
   showdetails:boolean=false
  error: any;

  constructor( private fb: FormBuilder,private ser:ServService  ) { }

  ngOnInit(){
    this.form = this.fb.group({
      cityname: ["",Validators.required]
    });
  }
  onsubmit(){
    this.showdetails=true;
   if(this.form.invalid){
     alert('City Name is required')
     return;
   }
    const cityname=this.form.value.cityname.trim().toLowerCase();
    const _res=localStorage.getItem(cityname)
    if(_res){
      this.data=JSON.parse(_res)
    }
    else{
    this.ser.getdata(cityname).subscribe(response=>{
         this.data=response;
         localStorage.setItem(cityname,JSON.stringify(response))
    },(error)=>{
      console.log(error)
      this.error= error;
      alert('Please Enter Valid City Name')
    })
  }
  }
 }
