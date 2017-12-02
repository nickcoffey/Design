import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InquiryService } from '../../services/inquiry.service';
import { MaterialService } from '../../services/material.service';
import { LaborService } from '../../services/labor.service';
import { EquipmentService } from '../../services/equipment.service';
import { BidService } from '../../services/bid.service';
import { AlertComponent } from '../alert/alert.component';
import { AuthService } from '../../services/auth.service';
import { FileUploader } from 'ng2-file-upload';
declare var $;

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  /** INQUIRY **/
  id: number = null;
  inquiry: any;
  createdDate: string = '';
  status: string = '';
  description: string = '';
  jobName: string = '';
  jobAddress: string = '';
  jobCity: string = '';
  jobState: string = '';
  jobZIP: number = null;
  /** BID **/
  margin: number = 0;
  bidPrice: number = 0;
  /** LABOR **/
  labors: any;
  labor: any;
  selectedLabors: SelectedLabor[] = [];
  laborHours: number = 0;
  laborID: number = null;
  totalLaborPrice: number = 0;
  /** EQUIPMENT **/
  equipments: any;
  equipment: any;
  equipmentID: number = null;
  equipmentNumOfIntervals: number = 0;
  equipmentInterval: number = null;
  equipmentIntervals: string[] = ['Day(s)','1 Week','2 Weeks','3 Weeks'];
  selectedEquipments: SelectedEquipment[] = [];
  totalEquipmentPrice: number = 0;
  /** MATERIALS **/
  materials: Material[];
  material: Material;
  materialID: number = null;
  linearFeet: number = 0;
  totalMaterialPrice: number = 0;
  selectedMaterials1: SelectedMaterial[] = [];
  /** FILES **/
  files: any;
  filesUrls: any[] = [];
  fileName: any;
  file: any;
  url: string;
  uploader: FileUploader;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private inquiryService: InquiryService,
    private materialService: MaterialService,
    private laborService: LaborService,
    private bidService: BidService,
    private equipmentService: EquipmentService,
    private authService: AuthService,
    private alert: AlertComponent
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.setupFileUploader();
    this.getInquiry();
    this.getMaterials();
    this.getLabor();
    this.getEquipment();
    this.getFiles();
  }

  /************************************ INQUIRY *********************************/
  getInquiry() {
    this.inquiryService.getInquiryById(this.id).subscribe((inquiry) => {
      this.inquiry = inquiry;
      this.status = inquiry[0].inquiryStatus;
    });
  }

  onReopen() {
    const updatedInquiry = {
      inquiryID: this.id,
      inquiryStatus: "PENDING",
      removeEndDate: false
    };
    this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe((data) => {
      if (data.success) {
        // console.log(data.msg);
        this.alert.displayAlert('Inquiry re-opened', 'success');
        this.ngOnInit();
      } else {
        console.log(data.msg);
      }
    });
  }

  onDecline() {
    const updatedInquiry = {
      inquiryID: this.id,
      inquiryStatus: "DECLINED",
      removeEndDate: false
    };
    this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe((data) => {
      if (data.success) {
        // console.log(data.msg);
        this.alert.displayAlert('Inquiry declined', 'success');
        this.ngOnInit();
      } else {
        console.log(data.msg);
      }
    });
  }

  acceptInquiry(updatedInquiry) {
    this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
      } else {
        console.log(data.msg);
      }
    });
  }

  onClickUpdateSite() {
    this.jobName = this.inquiry[0].jobName,
      this.jobAddress = this.inquiry[0].jobAddress,
      this.jobCity = this.inquiry[0].jobCity,
      this.jobState = this.inquiry[0].jobState,
      this.jobZIP = this.inquiry[0].jobZIP
  }

  onUpdateSite() {
    const updatedInquiry = {
      inquiryID: this.id,
      description: null,
      receivedDate: null,
      jobName: this.jobName,
      jobAddress: this.jobAddress,
      jobCity: this.jobCity,
      jobState: this.jobState,
      jobZIP: this.jobZIP
    }

    this.inquiryService.updateInquiry(updatedInquiry).subscribe((data) => {
      if (data.success) {
        // console.log(data.msg);
        this.getInquiry();
        $('#update-site-modal').modal('hide');
        this.alert.displayAlert('Job site updated', 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  clearSite() {
    this.jobName = '';
    this.jobAddress = '';
    this.jobCity = '';
    this.jobState = '';
    this.jobZIP = null;
  }

  clearDescription() {
    this.description = '';
  }

  onClickUpdate() {
    this.description = this.inquiry[0].description;
  }

  onUpdate() {
    let updatedInquiry = {
      inquiryID: this.id,
      description: this.description
    }

    this.inquiryService.updateInquiry(updatedInquiry).subscribe((data) => {
      if (data.success) {
        // console.log(data.msg);
        this.clearDescription();
        $('#update-modal').modal('hide');
        this.alert.displayAlert('Description updated', 'success');
      } else {
        console.log(data.msg);
      }
    });

    this.ngOnInit();
  }

  onDelete() {
    this.inquiryService.deleteInquiry(this.id).subscribe((data) => {
      if (data.success) {
        // console.log(data.msg);
        this.alert.displayAlert(data.msg, 'success');
        this.router.navigate(['/inquiries']);
      } else {
        console.log(data.msg);
      }
    });
  }

  /************************************ BID *********************************/
  onCreate() {
    const updatedInquiry = {
      inquiryID: this.id,
      inquiryStatus: "ACCEPTED",
      removeEndDate: false
    };
    const newBid = {
      inquiryID: this.id,
      bidPrice: (1 + (this.margin / 100)) * (this.totalMaterialPrice + this.totalLaborPrice + this.totalEquipmentPrice),
      margin: this.margin
    };

    this.createBid(newBid);
    this.acceptInquiry(updatedInquiry);
    this.createMaterials();
    this.createLabor();
    this.createEquipment();
    $('#create-bid-modal').modal('hide');
    this.onClear();
    this.router.navigate([`/bids`]);
  }

  createBid(newBid) {
    this.bidService.createBid(newBid).subscribe((data) => {
      if (data.success) {
        // console.log(data.msg);
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  /************************************ LABOR *********************************/
  getLabor() {
    this.laborService.getAllLabors().subscribe((labors) => {
      this.labors = labors.labors;
    });
  }

  createLabor() {
    this.selectedLabors.forEach((selectedLabor) => {
      this.bidService.createBidLabor(selectedLabor).subscribe((data) => {
        if (data.success) {
          console.log(data.msg);
        } else {
          console.log(data.msg);
        }
      });
    });
  }

  onAddLabor() {
    let selectedLabor = {
      roleID: this.labors[this.laborID].roleID,
      roleName: this.labors[this.laborID].roleName,
      roleWage: this.labors[this.laborID].roleWage,
      laborHours: this.laborHours
    };
    this.totalLaborPrice += (selectedLabor.roleWage * this.laborHours);
    this.selectedLabors.push(selectedLabor);
    this.labors.splice(this.laborID, 1);
    this.labor = null;
    this.laborHours = 0;
  }

  onRemoveLabor(labor, id) {
    this.totalLaborPrice -= (labor.laborHours * labor.roleWage);
    this.selectedLabors.splice(id, 1);
    this.labors.push(labor);
  }

  onChangeLabor(id) {
    this.laborID = id;
    // console.log(this.laborID);
  }

    /************************************ EQUIPMENT *********************************/
    getEquipment() {
      this.equipmentService.getAllEquipments().subscribe((equipments) => {
        this.equipments = equipments;
      });
    }
  
    createEquipment() {
      console.log(this.selectedEquipments);
      this.selectedEquipments.forEach((selectedEquipment) => {
        this.bidService.createBidEquipment(selectedEquipment).subscribe((data) => {
          if (data.success) {
            console.log(data.msg);
          } else {
            console.log(data.msg);
          }
        });
      });
    }
  
    onAddEquipment() {
      let selectedEquipment = {
        equipmentID: this.equipments[this.equipmentID].equipmentID,
        equipmentName: this.equipments[this.equipmentID].equipmentName,
        intervals: this.equipmentNumOfIntervals,
        pricePerDay: this.equipments[this.equipmentID].pricePerDay,
        DaysSelected: this.equipments[this.equipmentID].DaysSelected,
        pricePer1Week: this.equipments[this.equipmentID].pricePer1Week,
        WeekSelected1: this.equipments[this.equipmentID].WeekSelected1,
        pricePer2Week: this.equipments[this.equipmentID].pricePer2Week,
        WeekSelected2: this.equipments[this.equipmentID].WeekSelected2,
        pricePer3Week: this.equipments[this.equipmentID].pricePer3Week,
        WeekSelected3: this.equipments[this.equipmentID].WeekSelected3
      };
      if(this.equipmentInterval == 0) {
        this.totalEquipmentPrice += (selectedEquipment.pricePerDay * this.equipmentNumOfIntervals);
        selectedEquipment.DaysSelected = 1;
        selectedEquipment.WeekSelected1 = 0;
        selectedEquipment.WeekSelected2 = 0;
        selectedEquipment.WeekSelected3 = 0;
      } else if(this.equipmentInterval == 1) {
        this.totalEquipmentPrice += (selectedEquipment.pricePer1Week * this.equipmentNumOfIntervals);
        selectedEquipment.WeekSelected1 = 1;
        selectedEquipment.DaysSelected = 0;
        selectedEquipment.WeekSelected2 = 0;
        selectedEquipment.WeekSelected3 = 0;
      } else if(this.equipmentInterval == 2) {
        this.totalEquipmentPrice += (selectedEquipment.pricePer2Week * this.equipmentNumOfIntervals);
        selectedEquipment.WeekSelected2 = 1;
        selectedEquipment.DaysSelected = 0;
        selectedEquipment.WeekSelected1 = 0;
        selectedEquipment.WeekSelected3 = 0;
      } else if(this.equipmentInterval == 3) {
        this.totalEquipmentPrice += (selectedEquipment.pricePer3Week * this.equipmentNumOfIntervals);
        selectedEquipment.WeekSelected3 = 1;
        selectedEquipment.DaysSelected = 0;
        selectedEquipment.WeekSelected1 = 0;
        selectedEquipment.WeekSelected2 = 0;
      }

      this.selectedEquipments.push(selectedEquipment);
      this.equipments.splice(this.equipmentID, 1);
      this.equipment = null;
      this.equipmentNumOfIntervals = 0;
      console.log(this.selectedEquipments);
    }
  
    onRemoveEquipment(equipment, id) {
      if(equipment.DaysSelected == 1) {
        this.totalEquipmentPrice -= (equipment.pricePerDay * equipment.intervals);
      } else if(equipment.WeekSelected1 == 1) {
        this.totalEquipmentPrice -= (equipment.pricePer1Week * equipment.intervals);
      } else if(equipment.WeekSelected2 == 1) {
        this.totalEquipmentPrice -= (equipment.pricePer2Week * equipment.intervals);
      } else if(equipment.WeekSelected3 == 1) {
        this.totalEquipmentPrice -= (equipment.pricePer3Week * equipment.intervals);
      }
      this.selectedEquipments.splice(id, 1);
      this.equipments.push(equipment);
    }
  
    onChangeEquipment(id) {
      this.equipmentID = id;
      // console.log(this.equipmentID);
    }

    onChangeInterval(interval) {
      this.equipmentInterval = interval;
      // console.log(this.equipmentInterval);
    }

  /************************************ MATERIALS *********************************/
  getMaterials() {
    this.materialService.getAllMaterials().subscribe((materials) => {
      this.materials = materials.materials;
    });
  }

  createMaterials() {
    this.selectedMaterials1.forEach(selectedMaterial => {
      console.log(selectedMaterial);
      this.bidService.createBidMaterial(selectedMaterial).subscribe((data) => {
        if (data.success) {
          console.log(data.msg);
        } else {
          console.log(data.msg);
        }
      });
    });
  }

  onRemoveMaterial(material, id) {
    this.totalMaterialPrice -= ((material.pricePerUnit / material.linearFeetCoverage) * material.linearFeet);
    this.selectedMaterials1.splice(id, 1);
    this.materials.push(material);
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

  onChangeMaterial(id) {
    // console.log(id);
    this.materialID = id;
  }

  onClear() {
    this.selectedMaterials1.forEach(selectedMaterial => {
      this.materials.push(selectedMaterial);
    });
    this.selectedLabors.forEach((selectedLabor) => {
      this.labors.push(selectedLabor);
    });
    this.selectedEquipments.forEach((selectedEquipment) => {
      this.equipments.push(selectedEquipment);
    });
    this.selectedLabors = [];
    this.totalLaborPrice = 0;
    this.laborHours = 0;
    this.selectedEquipments = [];
    this.totalEquipmentPrice = 0;
    this.equipmentNumOfIntervals = 0;
    this.selectedMaterials1 = [];
    this.totalMaterialPrice = 0;
    this.margin = 0;

    //this.ngOnInit();
  }

  /************************************************* FILE FUNCTIONS *********************************************************/
  getFiles() {
    this.inquiryService.getInquiryFilesByID(this.id).subscribe((files) => {
      this.files = files;
      // console.log(this.files);
    });
  }

  setupFileUploader() {
    this.url = `/api/inquiries/${this.id}/upload`;
    // this.url = `http://localhost:3000/api/inquiries/${this.id}/upload`;
    this.authService.loadToken();
    let headers: any = [{ name: 'Authorization', value: this.authService.authToken }, { name: 'Content-Type', value: 'application/json' }];
    this.uploader = new FileUploader({ url: this.url });
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
      //this.readyItems.push(file);
      //console.log(file);
    }
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.ngOnInit();
      $('#upload-modal').modal('hide');
      if (JSON.parse(response).success == true) {
        this.alert.displayAlert(JSON.parse(response).msg, 'success');
      } else {
        this.alert.displayAlert(JSON.parse(response).msg, 'warning');
      }
      this.uploader.clearQueue();
    }
  }

  onClickDeleteFile(file) {
    this.file = file;
    $('#delete-file-modal').modal('show');
  }

  onDeleteFile() {
    let fileToRemove = {
      key: this.file.fileName
    };
    this.inquiryService.deleteInquiryFile(this.file.fileID, fileToRemove).subscribe((data) => {
      if (data.success) {
        // console.log(data.msg);
        this.getFiles();
        $('#delete-file-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    });
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
interface SelectedEquipment {
  equipmentID: number,
  equipmentName: String,
  intervals: number,
  pricePerDay: number,
  DaysSelected: number,
  pricePer1Week: number,
  WeekSelected1: number,
  pricePer2Week: number,
  WeekSelected2: number,
  pricePer3Week: number
  WeekSelected3: number
}
interface Material {
  materialID: number,
  materialName: String,
  pricePerUnit: number,
  linearFeetCoverage: number
}


/****************************************** UNUSED CODE *******************************************/
  // onAddMaterial(material, id){
  //   this.selectedMaterials.push(material);
  //   this.materials.splice(id, 1);
  // }

  // onSelectMaterial(material, id) {
  //   // console.log(material);
  //   this.material = material;
  //   this.materialID = id;
  // }

      // this.selectedMaterials.forEach(selectedMaterial => {
    //   console.log(selectedMaterial);
    //   this.bidService.createBidMaterial(selectedMaterial).subscribe((data) => {
    //     if(data.success){
    //       console.log(data.msg);
    //     } else{
    //       console.log(data.msg);
    //     }
    //   });
    // });

     // onRemoveMaterial(material, id){
  //   this.selectedMaterials.splice(id, 1);
  //   this.materials.push(material);
  // }

  // onClear(){
  //   this.selectedMaterials.forEach(selectedMaterial => {
  //     this.materials.push(selectedMaterial);
  //   });
  //   this.selectedMaterials = [];
  //   //this.ngOnInit();
  // }

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

    // totalCost:number = 0;
  // selectedMaterials:SelectedMaterial[] = [];