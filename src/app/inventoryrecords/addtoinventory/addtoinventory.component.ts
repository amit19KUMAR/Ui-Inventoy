import { Component, OnInit } from '@angular/core';
import { Record } from '../../record';
import { FormGroup, FormControl } from '@angular/forms';
import { RecordService } from '../../record.service';
import { User } from '../../user';
import { ResponceEntity } from '../../responseEntity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtoinventory',
  templateUrl: './addtoinventory.component.html',
  styleUrls: ['./addtoinventory.component.css']
})
export class AddtoinventoryComponent implements OnInit {

  record:Record = new Record
  response:string
  user:User

  responseEntity:ResponceEntity

  constructor(private recordService:RecordService, private router:Router) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem("userId"));
  }

  inventory = new FormGroup({
    productName: new FormControl(),
    vendor: new FormControl(),
    mrp: new FormControl(),
    batchNum: new FormControl(),
    batchDate: new FormControl(),
    quantity: new FormControl()
  })

  onSubmitDetails(){
    this.record.productName = this.inventory.controls['productName'].value;
    this.record.vendor = this.inventory.controls['vendor'].value;
    this.record.mrp = this.inventory.controls['mrp'].value;
    this.record.batchNum = this.inventory.controls['batchNum'].value;
    this.record.batchDate = this.inventory.controls['batchDate'].value;
    this.record.quantity = this.inventory.controls['quantity'].value;
    console.log(this.record.batchDate);
    this.recordService.forAddRecord(this.user.role,this.record).subscribe(
      data=>{
        this.responseEntity=data
        console.log(this.responseEntity);
        if(this.responseEntity.error==="false"){
          window.alert(this.responseEntity.message);
          this.router.navigate(["home"]);
        }
        else{
          window.alert(this.responseEntity.message);
        }
      }
    );
    
  }

}
