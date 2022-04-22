import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() label: string | undefined;
  @Input() class: string = 'btn-default';

}
