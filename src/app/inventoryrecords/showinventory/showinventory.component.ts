import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../record.service';
import { Record } from '../../record';

@Component({
  selector: 'app-showinventory',
  templateUrl: './showinventory.component.html',
  styleUrls: ['./showinventory.component.css']
})
export class ShowinventoryComponent implements OnInit {

  records:Record[]
  constructor(private record:RecordService) { }

  ngOnInit() {
    this.onShow();
  }

  onShow(){
    this.record.forLoad().subscribe(data => this.records=data);
  }

}
