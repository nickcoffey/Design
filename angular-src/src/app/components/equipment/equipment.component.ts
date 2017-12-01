import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { AlertComponent } from '../alert/alert.component';
import { EquipmentService } from '../../services/equipment.service';
declare var $;

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments: any;
  equipmentID: number = null;
  equipmentName: string = '';
  pricePerDay: number = null;
  pricePer1Week: number = null;
  pricePer2Week: number = null;
  pricePer3Week: number = null;

  constructor(
    private equipmentService: EquipmentService,
    private alert: AlertComponent
  ) { }

  ngOnInit() {
    this.getEquipment();
  }

  getEquipment() {
    this.equipmentService.getAllEquipments().subscribe((equipments) => {
      this.equipments = equipments;
    });
  }

  onClear() {
    this.equipmentID = null;
    this.equipmentName = '';
    this.pricePerDay = null;
    this.pricePer1Week = null;
    this.pricePer2Week = null;
    this.pricePer3Week = null;
  }

  onCreate() {
    let newEquipment = {
      equipmentName: this.equipmentName,
      pricePerDay: this.pricePerDay,
      pricePer1Week: this.pricePer1Week,
      pricePer2Week: this.pricePer2Week,
      pricePer3Week: this.pricePer3Week
    }

    this.equipmentService.createEquipment(newEquipment).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.onClear();
        this.getEquipment();
        $('#create-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  onClickUpdate(equipment) {
    this.equipmentID = equipment.equipmentID;
    this.equipmentName = equipment.equipmentName;
    this.pricePerDay = equipment.pricePerDay;
    this.pricePer1Week = equipment.pricePer1Week;
    this.pricePer2Week = equipment.pricePer2Week;
    this.pricePer3Week = equipment.pricePer3Week;
  }

  onUpdate() {
    let updatedEquipment = {
      equipmentID: this.equipmentID,
      equipmentName: this.equipmentName,
      pricePerDay: this.pricePerDay,
      pricePer1Week: this.pricePer1Week,
      pricePer2Week: this.pricePer2Week,
      pricePer3Week: this.pricePer3Week
    }
    this.equipmentService.updateEquipment(updatedEquipment).subscribe(
      (data) => {
        if (data.success) {
          console.log(data.msg);
          this.onClear();
          this.getEquipment();
          $('#update-modal').modal('hide');
          this.alert.displayAlert(data.msg, 'success');
        } else {
          console.log(data.msg);
        }
      });
  }

  onDelete() {
    this.equipmentService.deleteEquipment(this.equipmentID).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.onClear();
        this.getEquipment();
        $('#update-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    });
  }
}
