import { Component, OnInit } from '@angular/core';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public printer: Printer) {}
  ngOnInit() {

  }

  print() {
    this.printer.isAvailable().then((onSuccess: any) => {
    let content = document.getElementById('printer')?.innerHTML;
    let options: PrintOptions = {
    name: 'MyDocument',
    duplex: true,
    orientation: "portrait",
    monochrome: true
    };
    this.printer.print(content, options).then((value: any) => {
    console.log('value:', value);
    }, (error) => {
    console.log('eror:', error);
    });
    }, (err) => {
    console.log('err:', err);
    });
    }
}
