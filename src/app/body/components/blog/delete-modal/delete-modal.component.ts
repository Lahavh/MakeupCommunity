import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less'],
  providers: [NgbActiveModal]
})
export class DeleteModalComponent implements OnInit {

  @Input()
  public isActive;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onDeletePost() {
  }

  onCancel() {
    this.isActive = false;
  }
}