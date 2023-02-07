import { Component } from "@angular/core";

@Component({
    selector:'warning-alert',
    templateUrl:'./WarningAlert.component.html'
})
export class WarningAlertComponent{
    isAnAlert = false;
    checkIsDisabled(){
        this.isAnAlert = !this.isAnAlert;
    }
}