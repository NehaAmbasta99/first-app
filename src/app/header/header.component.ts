import { Component } from "@angular/core";

@Component({
    selector:'custom-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{
    title="";
    constructor(){
        this.title="Header";
    }
}