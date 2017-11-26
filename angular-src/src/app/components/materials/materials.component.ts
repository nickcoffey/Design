import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';
import { Subject } from 'rxjs/Rx';
import { AlertComponent } from '../alert/alert.component';
declare var $;

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials: any;
  name: string = '';
  pricePerUnit: number = null;
  linearFeetCoverage: number = null;
  tempID: number = null;
  length: number = null;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  displayTable: Boolean = false;

  constructor(
    private materialService: MaterialService,
    private alert: AlertComponent
  ) { }

  ngOnInit() {
    this.getMaterials();
    // this.setupDataTable();
  }

  getMaterials() {
    this.materialService.getAllMaterials().subscribe((materials) => {
      this.materials = materials.materials;
      this.length = this.materials.length;
    });
  }

  setupDataTable() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.dtTrigger.next();
    this.displayTable = true;
  }

  onClear() {
    this.tempID = null;
    this.name = '';
    this.pricePerUnit = null;
    this.linearFeetCoverage = null;
  }

  onClickUpdate(materialID, name, pricePerUnit, linearFeetCoverage) {
    this.tempID = materialID;
    this.name = name;
    this.pricePerUnit = pricePerUnit;
    this.linearFeetCoverage = linearFeetCoverage;
  }

  onUpdate() {
    let updateMaterial = {
      materialID: this.tempID,
      materialName: this.name,
      pricePerUnit: this.pricePerUnit,
      linearFeetCoverage: this.linearFeetCoverage
    }
    this.materialService.updateMaterial(updateMaterial).subscribe(
      (data) => {
        if (data.success) {
          console.log(data.msg);
          this.onClear();
          this.getMaterials();
          $('#update-modal').modal('hide');
          this.alert.displayAlert(data.msg, 'success');
        } else {
          console.log(data.msg);
        }
      });
  }

  onCreate() {
    let newMaterial = {
      materialName: this.name,
      pricePerUnit: this.pricePerUnit,
      linearFeetCoverage: this.linearFeetCoverage
    }

    this.materialService.createMaterial(newMaterial).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.onClear();
        this.getMaterials();
        $('#create-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  onDeleteClick(materialID) {
    this.tempID = materialID;
  }

  onDelete() {
    this.materialService.deleteMaterial(this.tempID).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.onClear();
        this.getMaterials();
        $('#update-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    });
  }
}
