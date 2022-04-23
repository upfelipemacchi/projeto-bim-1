import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }

    @Input() titulo: string = 'Título';
    @Input() cancelarLink: string = '../';

}
