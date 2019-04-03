import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-up',
  templateUrl: './key-up.component.html',
  styleUrls: ['./key-up.component.css']
})
export class KeyUpComponent {

  values = '';

  onKey(event: KeyboardEvent) { //any) { // without type info
    this.values += event.key + ' | ';//event.target.value + ' | ';
  }

  onKeyInputBox(value: string) { //any) { // without type info
    this.values += value + ' | ';//event.target.value + ' | ';
  }
}
