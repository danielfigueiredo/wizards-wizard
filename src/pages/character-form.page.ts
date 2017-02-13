import {
  Component,
  ViewChild
} from '@angular/core';
import {IAppState} from '../store/types';
import {
  NgRedux,
  select
} from 'ng2-redux';
import {
  saveForm,
  resetForm,
  putInArray,
  addIntoArray,
  removeFromArray,
  fetchRacesAndAlignments,
  archiveForm
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
import {RioCharacterForm} from '../components';
import {Observable} from 'rxjs';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

@Component({
  template: require('./character-form.page.html'),
})
export class RioCharacterPage {

  public static FORM_NAME = 'character';
  private static SKILLS_FIELD = 'skills';
  private static SKILL_FIELD_PATH = [
    RioCharacterPage.FORM_NAME,
    RioCharacterPage.SKILLS_FIELD
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

  @ViewChild(RioCharacterForm)
  formComponent: RioCharacterForm;

  characterForm;
  private formSubs;
  private skills = skills;
  private races = races;
  private alignments = alignments;
  private editIndex;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.ngRedux.dispatch(fetchRacesAndAlignments());
    this.formSubs = this.ngRedux.select(state => state.form.character)
      .subscribe(characterForm => {
        this.characterForm = characterForm;
      });
    this.formComponent.ngForm.valueChanges.debounceTime(0)
      .subscribe(change =>
        this.ngRedux.dispatch(
          saveForm({
            path: [RioCharacterPage.FORM_NAME],
            value: change
          })
        )
      );
    this.activatedRoute.queryParams.subscribe(params => {
      const index = params['index'];
      if (index) {
        this.editIndex = parseInt(index, 10);
      }
    });
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
        path: RioCharacterPage.SKILL_FIELD_PATH
      })
    );
  }

  onSubmit() {
    this.ngRedux.dispatch(archiveForm({
      path: [RioCharacterPage.FORM_NAME],
      index: this.editIndex
    }));
    this.router.navigateByUrl('/');
  }

  onReset() {
    this.ngRedux.dispatch(
      resetForm({ path: [RioCharacterPage.FORM_NAME] })
    );
  }

  addSkill() {
    this.ngRedux.dispatch(
      addIntoArray({
        path: RioCharacterPage.SKILL_FIELD_PATH,
        value: undefined
      })
    );
  }

  removeSkill(index) {
    this.ngRedux.dispatch(
      removeFromArray({
        index,
        path: RioCharacterPage.SKILL_FIELD_PATH
      })
    );
  }

  onCancel() {
    this.router.navigateByUrl('/');
  }

}
