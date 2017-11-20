import { Component, OnInit } from '@angular/core';
import { LaborService } from '../../services/labor.service';
import { Subject } from 'rxjs/Rx';
declare var $;

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.css']
})
export class LaborComponent implements OnInit {

  labors: any;
  roleName: string = '';
  roleWage: number = null;
  roleID: number = null;

  constructor(
    private laborService: LaborService
  ) { }

  ngOnInit() {
    this.getLabor();
  }

  getLabor() {
    this.laborService.getAllLabors().subscribe((labors) => {
      this.labors = labors.labors;
    });
  }

  onClear() {
    this.roleID = null;
    this.roleName = '';
    this.roleWage = null;
  }

  onCreate() {
    let newLabor = {
      roleName: this.roleName,
      roleWage: this.roleWage
    }

    this.laborService.createLabor(newLabor).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.onClear();
        this.getLabor();
        $('#create-modal').modal('hide');
      } else {
        console.log(data.msg);
      }
    });
  }

  onClickUpdate(roleID, roleName, roleWage) {
    this.roleID = roleID;
    this.roleName = roleName;
    this.roleWage = roleWage;
  }

  onUpdate() {
    let updatedLabor = {
      roleID: this.roleID,
      roleName: this.roleName,
      roleWage: this.roleWage
    }
    this.laborService.updateLabor(updatedLabor).subscribe(
      (data) => {
        if (data.success) {
          console.log(data.msg);
          this.onClear();
          this.getLabor();
          $('#update-modal').modal('hide');
        } else {
          console.log(data.msg);
        }
      });
  }

  onDelete() {
    this.laborService.deleteLabor(this.roleID).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.onClear();
        this.getLabor();
        $('#update-modal').modal('hide');
      } else {
        console.log(data.msg);
      }
    });
  }
}
