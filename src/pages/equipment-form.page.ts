import {
  Component,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  NgRedux,
  select
} from 'ng2-redux';
import { Observable } from 'rxjs';
import { RioFormGroup } from '../components';
import {
  saveForm
} from '../actions';
import {
  IAppState,
  IEquipment
} from '../store/types';

@Component({
  template: require('./equipment-form.page.html'),
})
export class RioEquipmentForm {
  equipmentForm: IEquipment;
  private formSub;
  private static FORM_NAME: 'equipment';
  @ViewChild(NgForm) ngForm: NgForm;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    this.formSub = this.ngRedux.select(state => state.form.equipment)
      .subscribe(form => {
        this.equipmentForm = form;
      });
    this.ngForm.valueChanges.debounceTime(0)
      .subscribe(change =>
        this.ngRedux.dispatch(
          saveForm({
            value: change,
            path: ['equipment']
          })
        )
      );
  }

  ngOnDestroy() {
    this.formSub.unsubscribe();
  }
}
