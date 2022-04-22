import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'btn-modal',
  templateUrl: './btn-modal.component.html',
  styleUrls: ['../btn/btn.component.css']
})
export class BtnModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() label: string | undefined;
  @Input() class: string = 'btn-default';

}
