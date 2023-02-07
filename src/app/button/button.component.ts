import {Component} from '@angular/core';
@Component({
    selector:'custom-btn',
    templateUrl:'./button.component.html',
    styleUrls:['./button.component.css']
})
export class ButtonComponent{
    success:boolean;
    btnName="";
        constructor(){
            this.btnName="Submit";
            this.success=true;
    }
    submit(){
       return this.success = true;
    }
}