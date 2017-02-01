import {
  Component,
  ViewChild
} from '@angular/core';
import {IAppState} from '../store/store';
import {
  NgRedux,
  select
} from 'ng2-redux';
import {
  saveForm,
  addSkill,
  selectSkill,
  removeSkill
} from '../actions/index';
import {isFormValid} from '../selectors/character';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'rio-character-form',
  template: require('./character-form.page.html'),
  styles: [require('./character-form.page.css')],
})
export class RioCharacterForm {

  @select(isFormValid) isFormValid$;
  @ViewChild(NgForm) ngForm: NgForm;

  characterForm;
  skills = ['', 'Knowledge Arcana', 'Climb', 'Perception', 'Investigation'];
  alignments = ['Lawful Good', 'Lawful Neutral', 'Lawful Evil',
  'Neutral Good', 'Neutral', 'Neutral Evil',
  'Chaotic Good', 'Chaotic Neutral', 'Chaotic Evil'];
  races = ['Elf', 'Human', 'Tiefling'];

  private formSubs;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    this.formSubs = this.ngRedux.select(state => state.form.character)
      .subscribe(characterForm => {
        this.characterForm = characterForm;
      });
    this.ngForm.valueChanges.debounceTime(0).subscribe(change => this.ngRedux.dispatch(saveForm(change)));
  }

  ngOnDestroy() {
    this.formSubs.unsubscribe();
  }

  onSelectSkill(event, index) {
    const skill = event.target.value;
    this.ngRedux.dispatch(selectSkill(skill, index));
  }

  onSubmit(form) {
    // save on backend
  }

  addSkill() {
    this.ngRedux.dispatch(addSkill());
  }

  removeSkill(index) {
    this.ngRedux.dispatch(removeSkill(index));
  }

}
