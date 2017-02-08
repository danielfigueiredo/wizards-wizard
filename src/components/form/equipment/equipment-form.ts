import {
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import {NgForm} from '@angular/forms';
import {IEquipment} from '../../../store/types';

@Component({
  selector: 'rio-equipment-form',
  template: require('./equipment-form.html'),
})
export class RioEquipmentForm {
  @ViewChild(NgForm) ngForm: NgForm;

  @Input() equipmentForm: IEquipment;

  @Output() onSubmit = new EventEmitter();
  @Output() onReset = new EventEmitter();
}
