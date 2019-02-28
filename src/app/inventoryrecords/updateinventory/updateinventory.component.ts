import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../record.service';
import { Record } from '../../record';
import { User } from '../../user';
import { FormGroup, FormControl } from '@angular/forms';
import { ResponceEntity } from '../../responseEntity';

@Component({
  selector: 'app-updateinventory',
  templateUrl: './updateinventory.component.html',
  styleUrls: ['./updateinventory.component.css']
})
export class UpdateinventoryComponent implements OnInit {

  records:Record[]
  constructor(private record:RecordService) { }

  user:User
  responce:string
  ur:Record
  updatedRecord= new Record();
  resp:boolean=false
  responseEntity:ResponceEntity

  updateData:Record = new Record();

  updateInventory = new FormGroup({
    productName:new FormControl(),
    vendor:new FormControl(),
    mrp:new FormControl(),
    batchNum:new FormControl(),
    batchDate:new FormControl(),
    quantity:new FormControl(),
  })
  

  ngOnInit() {
    this.onLoad();
    
  }

  onAccept(productId:number){
    this.user=JSON.parse(localStorage.getItem("userId"));
    this.record.forAccept(this.user.userName,productId).subscribe(data=>this.responce=data);
    window.alert("Inventory Approved");
    window.location.reload();
  }

  onLoad()
  {
    this.record.onLoadPendingRecords().subscribe(data=>{
      this.responseEntity=data
      this.records=this.responseEntity.body
    })
  }

  onEdit(rec:Record){
    this.ur=rec
    console.log(this.ur)
    // sessionStorage.setItem("ur",JSON.stringify(this.ur));
    this.resp=true;
  }

  onEditData(){
    this.user=JSON.parse(localStorage.getItem("userId"));
    console.log(this.ur);
    this.updatedRecord=this.ur;
    console.log(this.updatedRecord);

    this.record.forUpdate(this.user.role,this.updatedRecord).subscribe(
      data=>{this.responseEntity=data
        console.log(this.responseEntity)

        if(this.user.role==="Department Manager"){
          if(this.responseEntity.error=="false"){
            window.alert("Updated Data Sent For Approval")
          }
          else{
            window.alert(this.responseEntity.message);
          }
        }else if(this.user.role==="Store Manager"){
          if(this.responseEntity.error=="false"){
            window.alert("Data Updated Successfully..")
          }
          else{
            window.alert(this.responseEntity.message);
          }
        }
      }
    )
    window.location.reload();
  }
  
  checkRole(){
    this.user=JSON.parse(localStorage.getItem("userId"));
    if(this.user.role==="Department Manager"){
      return false;
    }
    else if(this.user.role==="Store Manager"){
      return true;
    }
  }

  onDelete(productId:number){
    this.record.forDelete(productId).subscribe(data=>
    {
      this.responseEntity=data;
      if(this.responseEntity.error==="false"){
        window.alert("Record "+productId+ " Deleted Successfully");
        window.location.reload();
      }
      else{
        window.alert(this.responseEntity.message);
      }
    })
  }
}
