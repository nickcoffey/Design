# Design
Source Code for Allied Waterproofing Web App

(CHANGES TO BE MADE)

1. Adding job name to top of inquiry, bid, and job
2. Adding job name to inquiries, bids, and jobs tables.
3. Pulling in bid price price to bid form
4. Allowing itemized list to be made for bid form

1. Make equipment, bid equipment, and job equipment tables

Equipment ID  | Equipment Name | Price Per Day | Price Per 1 Week | Price Per 2 Weeks | Price Per 3 Weeks
------------- | -------------- | ------------- | ---------------- | ----------------- | -----------------
3             | Lift           | 500           | 1250             | 2000              | 2500

2. Re-activate material and labor remove button in add pop-ups 




(FOR INPUT VALIDATION)

#f="ngForm"

required maxlength="40" #title="ngModel"

<div *ngIf="title.invalid" style="color:#ff0000">
              <div *ngIf="title.errors.required">
                *Title is required
              </div>
            </div>

[disabled]="f.invalid"

type="button" (click)="clearContactFields()"




(PAST NOTES)

https://stackoverflow.com/questions/32511789/looping-through-files-in-a-folder-node-js
Refer to this to loop through contents of a folder server-side in order to serve the tree to frontend as a JSON

Put status on material table to avoid making unwanted changes to past bids and jobs
Remove delete add edit to material instead