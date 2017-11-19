import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BidService } from '../../services/bid.service';
import { MaterialService } from '../../services/material.service';
import { JobService } from '../../services/job.service';
import { InquiryService } from '../../services/inquiry.service';
import { LaborService } from '../../services/labor.service';
declare var $;

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  /** Bid **/
  id: any;
  bid: any;
  bidPrice: any;
  bidStatus: any;
  createdDate: any;
  endDate: any;
  status: any;
  /** Materials **/
  bidMaterials: any;
  material: any;
  materialID: number;
  linearFeet: number = 0;
  pricePerUnit: number = 0;
  materialName: any;
  linearFeetCoverage: number = 0;
  totalMaterialPrice: number = 0;
  totalMaterialPriceTable: number = 0;
  materials: any;
  selectedMaterials1: SelectedMaterial[] = [];
  bidMaterialID: number;
  materialIndex: any;
  /** Labor **/
  labors: any;
  bidLabors: any;
  laborIndex: any;
  wage: number;
  hours: number;
  roleName: any;
  laborID: any;
  selectedLabors: SelectedLabor[] = [];
  totalLaborPrice: number;
  totalLaborPriceTable: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bidService: BidService,
    private materialService: MaterialService,
    private jobService: JobService,
    private inquiryService: InquiryService,
    private laborService: LaborService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getBid();
    this.getBidMaterials();
    this.getBidLabors();
  }

  /**************************************************** Bid **********************************************************************/
  getBid() {
    this.bidService.getBidById(this.id).subscribe((bid) => {
      this.bid = bid;
      this.status = bid[0].bidStatus;
    });
  }
  onClear() {
    this.bidPrice = 0;
  }

  onCreate() {
    const newJob = {
      bidID: this.id,
      createdDate: this.createdDate
    };
    const updatedBid = {
      bidID: this.id,
      bidStatus: "ACCEPTED"
    };

    this.jobService.createJob(newJob).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.ngOnInit();
      } else {
        console.log(data.msg);
      }
    });
    this.bidService.updateBidStatus(updatedBid).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.ngOnInit();
      } else {
        console.log(data.msg);
      }
    });

    this.router.navigate(['/jobs']);
  }

  onDelete() {
    this.bidService.deleteBid(this.id).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
      } else {
        console.log(data.msg);
      }
    });

    let updatedInquiry = {
      inquiryID: this.bid[0].inquiryID,
      inquiryStatus: "PENDING",
      removeEndDate: true
    };

    this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.router.navigate(['/bids']);
      } else {
        console.log(data.msg);
      }
    });
  }

  onClickUpdateBid(){
    this.bidPrice = this.bid[0].bidPrice;
  }

  onUpdate() {
    let updatedBid = {
      bidID: this.id,
      bidPrice: this.bidPrice,
      bidStatus: this.bidStatus,
      createdDate: this.createdDate,
      endDate: this.endDate
    }

    this.bidService.updateBid(updatedBid).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
      } else {
        console.log(data.msg);
      }
    });
    this.onClear();

    this.ngOnInit();
  }

  /**************************************************** Bid Materials **********************************************************************/
  getBidMaterials() {
    this.totalMaterialPriceTable = 0;
    this.bidService.getBidMaterialsById(this.id).subscribe((bidMaterials) => {
      this.bidMaterials = bidMaterials;

      this.materialService.getAllMaterials().subscribe((materials) => {
        this.materials = materials.materials;

        for (let i = 0; i < this.materials.length; i++) {
          for (let k = 0; k < this.bidMaterials.length; k++) {
            if (this.materials[i].materialID == this.bidMaterials[k].materialID) {
              this.materials.splice(i, 1);
              this.totalMaterialPriceTable += ((this.bidMaterials[k].pricePerUnit / this.bidMaterials[k].linearFeetCoverage) * this.bidMaterials[k].linearFeet);
            }
          }
        }
      });
    });
  }

  /********** CREATE START **********/
  onCreateMaterial() {
    this.selectedMaterials1.forEach(selectedMaterial => {
      this.bidService.createBidMaterialById(this.id, selectedMaterial).subscribe((data) => {
        if (data.success) {
          console.log(data.msg);
        } else {
          console.log(data.msg);
        }
      });
    });

    $('#create-material-modal').modal('hide');
    this.getBidMaterials();
  }

  onSelectMaterial(material, id) {
    this.material = material;
    this.materialID = id;
  }

  onChangeMaterial(id) {
    this.materialID = id;
  }

  onAddMaterial() {
    let selectedMaterial = {
      materialID: this.materials[this.materialID].materialID,
      materialName: this.materials[this.materialID].materialName,
      pricePerUnit: this.materials[this.materialID].pricePerUnit,
      linearFeetCoverage: this.materials[this.materialID].linearFeetCoverage,
      linearFeet: this.linearFeet
    };
    this.totalMaterialPrice += (selectedMaterial.pricePerUnit / selectedMaterial.linearFeetCoverage * this.linearFeet);
    this.selectedMaterials1.push(selectedMaterial);
    this.materials.splice(this.materialID, 1);
    this.material = null;
    this.linearFeet = 0;
  }

  onRemoveMaterial(material, id) {
    this.totalMaterialPrice -= ((material.pricePerUnit / material.linearFeetCoverage) * material.linearFeet);
    this.selectedMaterials1.splice(id, 1);
    this.materials.push(material);
  }
  /********** CREATE END **********/

  onUpdateBidMaterial() {
    let updatedBidMaterial = {
      bidID: this.id,
      materialID: this.bidMaterialID,
      linearFeet: this.linearFeet,
      pricePerUnit: this.pricePerUnit,
      linearFeetCoverage: this.linearFeetCoverage
    };

    this.bidService.updateBidMaterial(updatedBidMaterial).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getBidMaterials();
        $('#update-material-modal').modal('hide');
      } else {
        console.log(data.msg);
      }
    });
  }

  onClearBidMaterial() {
    this.selectedMaterials1.forEach(selectedMaterial => {
      this.materials.push(selectedMaterial);
    });
    this.selectedMaterials1 = [];
    this.linearFeet = null;
    this.pricePerUnit = null;
    this.linearFeetCoverage = null;
  }

  onClickUpdateBidMaterial(materialID, materialIndex) {
    this.bidMaterialID = materialID;
    this.materialIndex = materialIndex;
    this.linearFeet = this.bidMaterials[materialIndex].linearFeet;
    this.pricePerUnit = this.bidMaterials[materialIndex].pricePerUnit;
    this.linearFeetCoverage = this.bidMaterials[materialIndex].linearFeetCoverage;
    this.materialName = this.bidMaterials[materialIndex].materialName;
  }

  onDeleteBidMaterial() {
    let bidMaterial = {
      materialID: this.bidMaterialID,
      bidID: this.id
    }

    console.log(bidMaterial);
    this.bidService.deleteBidMaterial(bidMaterial).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getBidMaterials();
        $('#update-material-modal').modal('hide');
      } else {
        console.log(data.msg);
      }
    });
  }

  /**************************************************** Bid Labor **********************************************************************/
  getBidLabors() {
    this.totalLaborPriceTable = 0;
    this.bidService.getBidLaborsById(this.id).subscribe((bidLabors) => {
      this.bidLabors = bidLabors;

      this.laborService.getAllLabors().subscribe((labors) => {
        this.labors = labors.labors;

        for (let i = 0; i < this.labors.length; i++) {
          for (let k = 0; k < this.bidLabors.length; k++) {
            if (this.labors[i].roleID == this.bidLabors[k].roleID) {
              this.labors.splice(i, 1);
              this.totalLaborPriceTable += (bidLabors[k].roleWage * bidLabors[k].laborHours);
            }
          }
        }
      });
    });
  }
  /********** CREATE START **********/
  onCreateBidLabor() {
    this.selectedLabors.forEach((selectedLabor) => {
      this.bidService.createBidLabor(selectedLabor).subscribe((data) => {
        if (data.success) {
          console.log(data.msg);
        } else {
          console.log(data.msg);
        }
      });
    });

    $('#create-labor-modal').modal('hide');
    this.getBidLabors();
  }

  onAddLabor() {
    let selectedLabor = {
      roleID: this.labors[this.laborID].roleID,
      roleName: this.labors[this.laborID].roleName,
      roleWage: this.labors[this.laborID].roleWage,
      laborHours: this.hours
    };
    this.totalLaborPrice += (selectedLabor.roleWage * this.hours);
    this.selectedLabors.push(selectedLabor);
    this.labors.splice(this.laborID, 1);
    this.hours = 0;
  }

  onRemoveLabor(labor, id) {
    this.totalLaborPrice -= (labor.laborHours * labor.roleWage);
    this.selectedLabors.splice(id, 1);
    this.labors.push(labor);
  }

  onChangeLabor(id) {
    this.laborID = id;
  }
  /********** CREATE END **********/

  onClickUpdateBidLabor(laborIndex) {
    this.laborIndex = laborIndex;
    this.wage = this.bidLabors[laborIndex].roleWage;
    this.hours = this.bidLabors[laborIndex].laborHours;
    this.roleName = this.bidLabors[laborIndex].roleName;
  }

  onUpdateBidLabor() {
    let updatedBidLabor = {
      laborID: this.bidLabors[this.laborIndex].laborID,
      roleWage: this.wage,
      laborHours: this.hours
    };

    this.bidService.updateBidLabor(updatedBidLabor).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.onClearBidLabor();
        this.getBidLabors();
        $('#update-labor-modal').modal('hide');
      } else {
        console.log(data.msg);
      }
    });
  }

  onDeleteBidLabor() {
    this.bidService.deleteBidLabor(this.bidLabors[this.laborIndex].laborID).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getBidLabors();
        $('#update-labor-modal').modal('hide');
      } else {
        console.log(data.msg);
      }
    });
  }

  onClearBidLabor() {
    this.laborIndex = null;
    this.wage = null;
    this.hours = null;
    this.roleName = null;
    this.selectedLabors.forEach((selectedLabor) => {
      this.labors.push(selectedLabor);
    });
    this.selectedLabors = [];
    this.totalLaborPrice = 0;
  }
}

interface SelectedMaterial {
  materialID: number,
  materialName: String,
  linearFeet: number,
  pricePerUnit: number,
  linearFeetCoverage: number
}
interface SelectedLabor {
  roleID: number,
  roleName: String,
  roleWage: number,
  laborHours: number
}

/*********************************************************** Unused code **************************************************************/
// onAddMaterial() {
//   let selectedMaterial = {
//     materialID: this.material.materialID,
//     materialName: this.material.materialName,
//     pricePerLinearFoot: this.material.pricePerLinearFoot,
//     linearFeet: this.linearFeet
//   };
//   this.totalMaterialPrice += (selectedMaterial.pricePerLinearFoot * this.linearFeet);
//   this.selectedMaterials1.push(selectedMaterial);
//   this.materials.splice(this.materialID, 1);
//   this.material = null;
//   this.linearFeet = 0;
// }

// onAddMaterial(material, id){
//   this.selectedMaterials.push(material);
//   this.materials.splice(id, 1);
// }