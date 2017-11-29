# Design
Source Code for Allied Waterproofing Web App

/***********************CHANGES TO BE MADE***********************/
-Add notes per bid and job
-Add location and name fields for job
-Re-activate material and labor remove button in add pop-ups 
/***********************CHANGES TO BE MADE***********************/



/**********************FOR INPUT VALIDATION********************/
#f="ngForm"

required maxlength="40" #title="ngModel"

<div *ngIf="title.invalid" style="color:#ff0000">
              <div *ngIf="title.errors.required">
                *Title is required
              </div>
            </div>

[disabled]="f.invalid"

type="button" (click)="clearContactFields()"
/**********************FOR INPUT VALIDATION********************/


https://stackoverflow.com/questions/32511789/looping-through-files-in-a-folder-node-js
Refer to this to loop through contents of a folder server-side in order to serve the tree to frontend as a JSON

Put status on material table to avoid making unwanted changes to past bids and jobs
Remove delete add edit to material instead