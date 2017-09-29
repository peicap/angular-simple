import { Component } from "@angular/core"

@Component({
    selector: "app-component",
    template: "<p><span class='box'>{{key}}</span></p>",
    styles: ['.box{background: whitesmoke; padding: 5px 10px; color: black; }']
})

export class AppComponent { 
    key: string = 'Sample Component'
}