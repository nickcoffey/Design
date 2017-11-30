import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BidService } from '../../services/bid.service';
import { MaterialService } from '../../services/material.service';
import { JobService } from '../../services/job.service';
import { InquiryService } from '../../services/inquiry.service';
import { LaborService } from '../../services/labor.service';
import { CustomerService } from '../../services/customer.service';
import { forEach } from '@angular/router/src/utils/collection';
import { AlertComponent } from '../alert/alert.component';
import { AuthService } from '../../services/auth.service';
import { FileUploader } from 'ng2-file-upload';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
declare var $;

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  /** BID **/
  id: number = null;
  bid: any;
  bidPrice: number = null;
  bidStatus: string = '';
  createdDate: string = '';
  endDate: string = '';
  status: string = '';
  bidNotes: string = '';
  /** MATERIALS **/
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
  /** LABOR **/
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
  /** FILES **/
  files: any;
  filesUrls: any[] = [];
  fileName: any;
  file: any;
  url: string;
  uploader: FileUploader;
  /** CUSTOMER **/
  contacts: any;
  contactName: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bidService: BidService,
    private materialService: MaterialService,
    private jobService: JobService,
    private inquiryService: InquiryService,
    private laborService: LaborService,
    private authService: AuthService,
    private customerService: CustomerService,
    private alert: AlertComponent
  ) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.setupFileUploader();
    this.getBid();
    this.getBidMaterials();
    this.getBidLabors();
    this.getFiles();
  }

  /**************************************************** Bid **********************************************************************/
  getContacts(customerID) {
    this.customerService.getAllContacts(customerID).subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  getBid() {
    this.bidService.getBidById(this.id).subscribe((bid) => {
      this.bid = bid;
      this.status = bid[0].bidStatus;
      this.getContacts(this.bid[0].customerID);
    });
  }
  onClear() {
    this.bidPrice = 0;
    this.bidNotes = '';
  }

  onDecline() {
    const updatedBid = {
      bidID: this.id,
      bidStatus: "DECLINED"
    };
    this.bidService.updateBidStatus(updatedBid).subscribe((data) => {
      if (data.success) {
        // console.log(data.msg);
        this.alert.displayAlert('Bid declined', 'success');
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
        // console.log(data.msg);
        this.alert.displayAlert('Bid re-opened', 'success');
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
        // console.log(data.msg);
        this.bidService.updateBidStatus(updatedBid).subscribe((data) => {
          if (data.success) {
            // console.log(data.msg);
            this.alert.displayAlert('Job created', 'success');
            this.router.navigate(['/jobs']);
            // this.ngOnInit();
          } else {
            console.log(data.msg);
          }
        });
        // this.ngOnInit();
      } else {
        console.log(data.msg);
      }
    });
  }

  onDelete() {
    this.bidService.deleteBid(this.id).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        let updatedInquiry = {
          inquiryID: this.bid[0].inquiryID,
          inquiryStatus: "PENDING",
          removeEndDate: true
        };

        this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe((data) => {
          if (data.success) {
            // console.log(data.msg);
            this.alert.displayAlert('Bid deleted', 'success');
            this.router.navigate(['/bids']);
          } else {
            console.log(data.msg);
          }
        });
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
        // console.log(data.msg);
        this.onClear();
        this.getBid();
        $('#update-bid-modal').modal('hide');
        this.alert.displayAlert('Price updated', 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  onClickUpdateNotes() {
    this.bidNotes = this.bid[0].bidNotes;
  }

  onUpdateNotes() {
    let updatedBid = {
      bidID: this.id,
      bidPrice: null,
      bidStatus: null,
      createdDate: null,
      endDate: null,
      bidNotes: this.bidNotes
    };

    this.bidService.updateBid(updatedBid).subscribe((data) => {
      if (data.success) {
        // console.log(data.msg);
        this.onClear();
        this.getBid();
        $('#update-notes-modal').modal('hide');
        this.alert.displayAlert('Notes updated', 'success');
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
              // this.totalMaterialPriceTable += ((bidMaterial.pricePerUnit / bidMaterial.linearFeetCoverage) * bidMaterial.linearFeet);
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

    this.onClearBidMaterial();
    this.getBidMaterials();
    $('#create-material-modal').modal('hide');
    this.alert.displayAlert('Material added', 'success');
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
        this.alert.displayAlert('Material updated', 'success');
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
        this.alert.displayAlert('Material deleted', 'success');
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
              // this.totalLaborPriceTable += (bidLabor.roleWage * bidLabor.laborHours);
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
    this.alert.displayAlert('Labor added', 'success');
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
        this.alert.displayAlert('Labor updated', 'success');
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
        this.alert.displayAlert('Labor deleted', 'success');
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

  /************************************************* FILE FUNCTIONS *********************************************************/
  getFiles() {
    this.bidService.getBidFilesByID(this.id).subscribe((files) => {
      this.files = files;
      // console.log(this.files);
    });
  }

  setupFileUploader() {
    this.url = `/api/bids/${this.id}/upload`;
    // this.url = `http://localhost:3000/api/bids/${this.id}/upload`;
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
    this.bidService.deleteBidFile(this.file.fileID, fileToRemove).subscribe((data) => {
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

  /************************************************* FORM FUNCTIONS *********************************************************/

  onChangeContact(contactIndex) {
    this.contactName = this.contacts[contactIndex].contactName;
  }
  
  makeBidPDF() {
    var documentDefinition = {
      content: [
        {
          text: [
            {
              text: 'ALLIED WATERPROOFING CO., INC.\n',
              style: 'header'
            },
            {
              text: '5840 Mango Dr.\nSt.Louis, MO 63129\n',
              style: 'subheader'
            },
            {
              text: '\nPhone: ',
              style: 'paragraph',
              bold: true
            },
            {
              text: '314-776-6886\n',
              style: 'paragraph'
            },
            {
              text: 'Fax: ',
              style: 'paragraph',
              bold: true
            },
            {
              text: '314-892-1495\n',
              style: 'paragraph'
            },
            {
              text: 'www.AlliedWinc.com',
              style: 'paragraph'
            }
          ]
        },
        {
          columns: [
            {
              text: [
                {
                  text: '\nWBE\n',
                  style: 'logo'
                },
                {
                  text: 'Woman-Owned Business Enterprise\n State Of Missouri',
                  style: 'logoText'
                }
              ],
              margin: [-60, 0, 0, 0]
            },
            {
              text: [
                {
                  text: '\nUNION\n',
                  style: 'logo'
                },
                {
                  text: 'Bricklayers Local #1',
                  style: 'logoText'
                }
              ],
              margin: [0, 0, 0, 0]
            },
            {
              text: [
                {
                  text: '\nNWBOC\n',
                  style: 'logo'
                },
                {
                  text: 'WBE Certified',
                  style: 'logoText'
                }
              ],
              margin: [0, 0, -60, 0]
            }
          ]
        },
        {
          text: '\n'
        },
        {
          table: {
            widths: ['*'],
            body: [
              [{ text: '', fillColor: '#000000' }]
            ]
          }
        },
        {
          text: '\nProposal\n\n',
          style: 'header',
          bold: false
        },
        {
          table: {
            headerRows: 1,
            style: 'paragraph',
            widths: ['*', '*'],
            body: [
              [{ text: [{ text: 'Submitted to: ' }, { text: this.bid[0].customerName, bold: true }], fillColor: '#dedede' }, {text: [{ text: 'Date: '},{ text: this.getToday(), bold: true }],fillColor: '#dedede'}],
              [{text: [{text: 'Name: '}, {text: this.contactName, bold: true}]}, {text: [{text: 'Job Name: '}, {text: this.bid[0].jobName, bold: true}]}],
              [{text: [{text: 'Street: '}, {text: this.bid[0].customerAddress, bold: true}]}, {text: [{text: 'Street: '}, {text: this.bid[0].jobAddress, bold: true}]}],
              [{text: [{text: 'City: '}, {text: this.bid[0].customerCity, bold: true}]}, {text: [{text: 'City: '}, {text: this.bid[0].jobCity, bold: true}]}],
              [{text: [{text: 'State: '}, {text: this.bid[0].customerState, bold: true}]}, {text: [{text: 'State: '}, {text: this.bid[0].jobState, bold: true}]}]
            ]
          }
        },
        {
          text: '\nWe purpose to furnish all Labor, Material and Equipment necessary to perform the itemized scope listed in our proposal.\n',
          style: 'paragraph',
          alignment: 'left'
        },
        {
          text: '*Proposal valid for 90 days.',
          style: 'paragraph',
          alignment: 'left',
          bold: true
        }
      ],
      footer: function (currentPage, pageCount) {
        if (currentPage == pageCount)
          return {
            columns: [
              {
                stack: [
                  {
                    text: 'Accepted:',
                    style: 'paragraph',
                    bold: true,
                    margin: [-100, -40, 0, 0]
                  },
                  {
                    canvas: [
                      {
                        type: 'line',
                        x1: 125,
                        y1: 0,
                        x2: 300 - 10,
                        y2: 0,
                        lineWidth: 0.5
                      }
                    ]
                  },
                  {
                    text: 'Owner, Contractor, or Architect',
                    fontSize: 8,
                    margin: [140, 0, 0, 0]
                  },
                  {
                    text: 'By:',
                    style: 'paragraph',
                    bold: true,
                    margin: [0, 20, 135, 0]
                  },
                  {
                    canvas: [
                      {
                        type: 'line',
                        x1: 125,
                        y1: 0,
                        x2: 300 - 10,
                        y2: 0,
                        lineWidth: 0.5
                      }
                    ]
                  },
                  {
                    text: 'Name & Title',
                    fontSize: 8,
                    margin: [140, 0, 0, 0]
                  }
                ]
              },
              {
                stack: [
                  {
                    text: 'Submitted:',
                    style: 'paragraph',
                    bold: true,
                    margin: [0, -40, 200, 0]
                  },
                  {
                    text: 'Allied Waterproofing Co., Inc.',
                    fontSize: 12,
                    margin: [80, -15, 0, 0]
                  },
                  {
                    canvas: [
                      {
                        type: 'line',
                        x1: 75,
                        y1: 0,
                        x2: 250 - 10,
                        y2: 0,
                        lineWidth: 0.5
                      }
                    ]
                  },
                  {
                    text: 'By:',
                    style: 'paragraph',
                    bold: true,
                    margin: [0, 30, 240, 0]
                  },
                  {
                    text: 'Dottie Overy-Koch, Pres. WEB',
                    fontSize: 12,
                    margin: [80, -15, 0, 0]
                  },
                  {
                    canvas: [
                      {
                        type: 'line',
                        x1: 75,
                        y1: 0,
                        x2: 250 - 10,
                        y2: 0,
                        lineWidth: 0.5
                      }
                    ]
                  }
                ]
              }
            ]
          };
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
        },
        subheader: {
          fontSize: 14,
          bold: true,
          alignment: 'center',
        },
        logo: {
          fontSize: 22,
          bold: true,
          alignment: 'center'
        },
        logoText: {
          fontSize: 10,
          alignment: 'center'
        },
        paragraph: {
          fontSize: 12,
          alignment: 'center'
        }
      }

    }
    $('#create-form-modal').modal('hide');
    pdfMake.createPdf(documentDefinition).download();
  }

  getToday() {
    var today: any = new Date();
    var dd = today.getDate().toString();
    var mm = (today.getMonth() + 1).toString(); // January is 0
    var yyyy = today.getFullYear();
    if (parseInt(dd) < 10) {
      dd = '0' + dd;
    }
    if (parseInt(mm) < 10) {
      mm = '0' + mm;
    }
    return today = `${mm}/${dd}/${yyyy}`;
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