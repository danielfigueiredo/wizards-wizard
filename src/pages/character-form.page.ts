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
  putInArray,
  addIntoArray,
  removeFromArray,
  fetchRacesAndAlignments
} from '../actions/index';
import {
  isFormValidSelector,
  isRaceAlignmentValidSelector,
  isAgeValidSelector,
  isNameValidSelector,
  isSkillsValidSelector
} from '../selectors/character';
import {
  skills,
  races,
  alignments
} from '../mocks';
import 'rxjs/add/operator/debounceTime';
import {RioCharacterFormComponent} from
  '../components/form/character/character-form.component';
import {Observable} from 'rxjs';

@Component({
  template: require('./character-form.page.html'),
})
export class RioCharacterForm {

  private static FORM_NAME = 'character';
  private static SKILLS_FIELD = 'skills';
  private static SKILL_FIELD_PATH = [
    RioCharacterForm.FORM_NAME,
    RioCharacterForm.SKILLS_FIELD
  ];

  @select(isRaceAlignmentValidSelector)
  isRaceAlignmentValid$: Observable<boolean>;
  @select(isFormValidSelector)
  isFormValid$: Observable<boolean>;
  @select(isAgeValidSelector)
  isAgeValid$: Observable<boolean>;
  @select(isNameValidSelector)
  isNameValid$: Observable<boolean>;
  @select(isSkillsValidSelector)
  isSkillsValid$: Observable<boolean>;

  @ViewChild(RioCharacterFormComponent)
  characterFormComponent: RioCharacterFormComponent;

  characterForm;
  private formSubs;
  private skills = skills;
  private races = races;
  private alignments = alignments;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    this.ngRedux.dispatch(fetchRacesAndAlignments());
    this.formSubs = this.ngRedux.select(state => state.form.character)
      .subscribe(characterForm => {
        this.characterForm = characterForm;
      });
    this.characterFormComponent.ngForm.valueChanges.debounceTime(0)
      .subscribe(change =>
        this.ngRedux.dispatch(
          saveForm({
            value: change,
            path: [RioCharacterForm.FORM_NAME]
          })
        )
      );
  }

  ngOnDestroy() {
    this.formSubs.unsubscribe();
  }

  onSelectSkill({event, index}) {
    const skill = event.target.value;
    this.ngRedux.dispatch(
      putInArray({
        value: skill,
        index,
        path: RioCharacterForm.SKILL_FIELD_PATH
      })
    );
  }

  onSubmit(form) {
    // save on backend
  }

  addSkill() {
    this.ngRedux.dispatch(
      addIntoArray({
        path: RioCharacterForm.SKILL_FIELD_PATH,
        value: undefined
      })
    );
  }

  removeSkill(index) {
    this.ngRedux.dispatch(
      removeFromArray({
        index,
        path: RioCharacterForm.SKILL_FIELD_PATH
      })
    );
  }

}
