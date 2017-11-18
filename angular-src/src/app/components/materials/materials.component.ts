import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';
import { Subject } from 'rxjs/Rx';
declare var $;

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials: any;
  name: any;
  pricePerUnit: number;
  linearFeetCoverage: number;
  tempID: any;
  length: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  displayTable: Boolean = false;

  constructor(
    private materialService: MaterialService
  ) { }

  ngOnInit() {
    this.materialService.getAllMaterials().subscribe((materials) => {
      this.materials = materials.materials;
      this.length = this.materials.length;
      // this.setupDataTable();
    });
  }

  setupDataTable() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.dtTrigger.next();
    this.displayTable = true;
  }

  onClear(){
    this.tempID = null;
    this.name = null;
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
          this.ngOnInit();
          $('#update-modal').modal('hide');
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
        this.ngOnInit();
        $('#create-modal').modal('hide');
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
        this.ngOnInit();
        $('#update-modal').modal('hide');
      } else {
        console.log(data.msg);
      }
    });
  }
}
