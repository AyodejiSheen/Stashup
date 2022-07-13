import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-joined',
  templateUrl: './joined.component.html',
  styleUrls: ['./joined.component.css']
})
export class JoinedComponent implements OnInit {

  constructor(public _group:GroupService) { }

  public groupCode;

  ngOnInit(): void {
    // this._group.newgroupCode.subscribe(data => {
    //   this.groupCode = data;
    // })
  }

}
