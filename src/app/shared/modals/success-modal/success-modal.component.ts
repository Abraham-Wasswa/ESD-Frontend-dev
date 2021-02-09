import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent implements OnInit {
  @Input() public modalHeaderText: string | undefined;
  @Input() public modalBodyText: string | undefined;
  @Input() public okButtonText: string | undefined;
  @Output() public redirectOnOK = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public emitEvent = () => {
    this.redirectOnOK.emit();
  }

}
