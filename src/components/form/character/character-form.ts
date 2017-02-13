import {
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import {NgForm} from '@angular/forms';
import {ICharacter} from '../../../store/types';

@Component({
  selector: 'rio-character-form',
  template: require('./character-form.html'),
})
export class RioCharacterForm {
  @ViewChild(NgForm) ngForm: NgForm;

  @Input() characterForm: ICharacter;
  @Input() races;
  @Input() skills;
  @Input() alignments;
  @Input() isFormValid;
  @Input() isRaceAlignmentValid;
  @Input() isAgeValid;
  @Input() isNameValid;
  @Input() isSkillsValid;

  @Output() addSkill = new EventEmitter();
  @Output() onSelectSkill = new EventEmitter();
  @Output() removeSkill = new EventEmitter();
  @Output() onSubmit = new EventEmitter();
  @Output() onReset = new EventEmitter();
  @Output() onCancel = new EventEmitter();

}
