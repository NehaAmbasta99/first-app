import { Component, OnInit } from "@angular/core";
declare const STABLE_FEATURE: boolean;
declare const EXPERIMENTAL_FEATURE: boolean;
@Component({
    selector:'customer-form',
    templateUrl:'./customer-form.component.html',
    styleUrls:['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit{
    stableFeature: string;
    experimentalFeature: string;
    firstname="";
    submittedFirstName="";
    showData = false;
    constructor(){
        this.firstname = "Enter your name here";
    }
    ngOnInit() {
        this.stableFeature = STABLE_FEATURE ? 'Stable feature enabled' : 'Stable feature disabled';
        this.experimentalFeature = EXPERIMENTAL_FEATURE ? 'Experimental feature enabled' : 'Experimental feature disabled';
      }
    submitCustomerDetails(){
       if(this.firstname){
        this.showData = true;
        this.submittedFirstName = this.firstname;
       }else{
        this.showData = false;}
    }

    getColor(){
        return this.firstname =="Enter your name here"?'grey':'red';
    }
}