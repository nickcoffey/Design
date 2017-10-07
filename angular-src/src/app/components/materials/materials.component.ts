import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials:any;
  name:any;
  tempID:any;
  length:any;

  constructor(
    private materialService:MaterialService
  ) { }

  ngOnInit() {
    this.materialService.getAllMaterials().subscribe((materials) => {
      this.materials = materials.materials;
      this.length = this.materials.length;
    });
  }

  onCreate(){
    const newMaterial = {
      materialName: this.name
    }

    this.materialService.createMaterial(newMaterial).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
        this.ngOnInit();
      } else{
        console.log(data.msg);
      }
    });
  }

  onDeleteClick(materialID){
    this.tempID = materialID;
  }

  onDelete(){
    this.materialService.deleteMaterial(this.tempID).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
        this.ngOnInit();
      } else{
        console.log(data.msg);
      }
    });
  }
}
