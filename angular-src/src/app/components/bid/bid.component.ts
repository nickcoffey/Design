import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BidService } from '../../services/bid.service';
import { MaterialService } from '../../services/material.service';
import { JobService } from '../../services/job.service';
import { InquiryService } from '../../services/inquiry.service';
import { LaborService } from '../../services/labor.service';
import { forEach } from '@angular/router/src/utils/collection';
declare var $;

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  /** Bid **/
  id: number = null;
  bid: any;
  bidPrice: number = null;
  bidStatus: string = '';
  createdDate: string = '';
  endDate: string = '';
  status: string = '';
  /** Materials **/
  bidMaterials: any;
  material: any;
  materialID: number = null;
  linearFeet: number = 0;
  pricePerUnit: number = 0;
  materialName: string = '';
  linearFeetCoverage: number = 0;
  totalMaterialPrice: number = 0;
  totalMaterialPriceTable: number = 0;
  materials: any;
  selectedMaterials1: SelectedMaterial[] = [];
  bidMaterialID: number = null;
  materialIndex: number = null;
  /** Labor **/
  labors: any = [];
  laborsLoop: any = [];
  bidLabors: any;
  laborIndex: number = null;
  wage: number = 0;
  hours: number = 0;
  roleName: string = '';
  laborID: number = null;
  selectedLabors: SelectedLabor[] = [];
  totalLaborPrice: number = 0;
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

  onDecline() {
    const updatedBid = {
      bidID: this.id,
      bidStatus: "DECLINED"
    };
    this.bidService.updateBidStatus(updatedBid).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.ngOnInit();
      } else {
        console.log(data.msg);
      }
    });
  }

  onReopen() {
    const updatedBid = {
      bidID: this.id,
      bidStatus: "PENDING"
    };
    this.bidService.updateBidStatus(updatedBid).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.ngOnInit();
      } else {
        console.log(data.msg);
      }
    });
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

  onClickUpdateBid() {
    this.bidPrice = Math.round(this.bid[0].bidPrice);
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
        this.onClear();
        this.getBid();
        $('#update-bid-modal').modal('hide');
      } else {
        console.log(data.msg);
      }
    });
  }

  /**************************************************** Bid Materials **********************************************************************/
  getBidMaterials() {
    this.totalMaterialPriceTable = 0;
    this.bidService.getBidMaterialsById(this.id).subscribe((bidMaterials) => {
      this.bidMaterials = bidMaterials;
      for (let k = 0; k < this.bidMaterials.length; k++) {
        this.totalMaterialPriceTable += ((this.bidMaterials[k].pricePerUnit / this.bidMaterials[k].linearFeetCoverage) * this.bidMaterials[k].linearFeet);
      }

      this.materialService.getAllMaterials().subscribe((materials) => {
        this.materials = materials.materials;
        this.bidMaterials.forEach(bidMaterial => {
          this.materials.forEach((material, i) => {
            if (material.materialID == bidMaterial.materialID) {
              this.materials.splice(i, 1);
              this.totalMaterialPriceTable += ((bidMaterial.pricePerUnit / bidMaterial.linearFeetCoverage) * bidMaterial.linearFeet);
            }
          });
        });
        // for (let i = 0; i < this.materials.length; i++) {
        //   for (let k = 0; k < this.bidMaterials.length; k++) {
        //     if (this.materials[i].materialID == this.bidMaterials[k].materialID) {
        //       this.materials.splice(i, 1);
        //       this.totalMaterialPriceTable += ((this.bidMaterials[k].pricePerUnit / this.bidMaterials[k].linearFeetCoverage) * this.bidMaterials[k].linearFeet);
        //     }
        //   }
        // }
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
    this.onClearBidMaterial();
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

  clearMaterialUpdate() {
    this.linearFeet = 0;
    this.pricePerUnit = 0;
    this.linearFeetCoverage = 0;
  }

  onClearBidMaterial() {
    this.selectedMaterials1.forEach(selectedMaterial => {
      this.materials.push(selectedMaterial);
    });
    this.selectedMaterials1 = [];
    this.linearFeet = 0;
    this.pricePerUnit = 0;
    this.linearFeetCoverage = 0;
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
    this.labors = [];
    this.bidService.getBidLaborsById(this.id).subscribe((bidLabors) => {
      this.bidLabors = bidLabors;
      for (let k = 0; k < this.bidLabors.length; k++) {
        this.totalLaborPriceTable += (this.bidLabors[k].roleWage * this.bidLabors[k].laborHours);
      }

      this.laborService.getAllLabors().subscribe((labors) => {
        this.labors = labors.labors;
        let index = null;
        this.bidLabors.forEach(bidLabor => {
          this.labors.forEach((labor, i) => {
            if (labor.roleID == bidLabor.roleID) {
              this.totalLaborPriceTable += (bidLabor.roleWage * bidLabor.laborHours);
              this.labors.splice(i, 1);
            }
          })
        });
        // for (let i = 0; i < this.laborsLoop.length; i++) {
        //   for (let k = 0; k < this.bidLabors.length; k++) {
        //     if (this.laborsLoop[i].roleID == this.bidLabors[k].roleID) {
        //       this.totalLaborPriceTable += (this.bidLabors[k].roleWage * this.bidLabors[k].laborHours);
        //       this.labors.splice(i, 1);
        //     }
        //   }
        // }
      });
    });
  }

  /********** CREATE START **********/
  onCreateBidLabor() {
    this.selectedLabors.forEach((selectedLabor) => {
      this.bidService.createBidLaborById(this.id, selectedLabor).subscribe((data) => {
        if (data.success) {
          console.log(data.msg);
        } else {
          console.log(data.msg);
        }
      });
    });

    this.getBidLabors();
    this.onClearBidLabor();
    $('#create-labor-modal').modal('hide');
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

  onClearLaborUpdate() {
    this.wage = 0;
    this.hours = 0;
  }

  onClearBidLabor() {
    this.laborIndex = null;
    this.wage = 0;
    this.hours = 0;
    this.roleName = '';
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