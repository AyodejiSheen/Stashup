import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-groupcode',
  templateUrl: './groupcode.component.html',
  styleUrls: ['./groupcode.component.css']
})
export class GroupcodeComponent implements OnInit {

  constructor(public _group:GroupService) { }

  public groupCode;

  ngOnInit(): void {
    this.groupCode = this._group.newgroupCode
  }

}
