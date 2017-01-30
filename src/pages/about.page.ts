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
  selector: 'rio-about-page',
  template: `
    <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
      <label>Character Name:</label>
      <input 
        type="text" 
        name="name" 
        #characterModel="ngModel" 
        [(ngModel)]="characterForm.name">
      <fieldset ngModelGroup="bioSummary">
        <label>Age:</label>
        <input 
          type="number" 
          name="age" 
          [(ngModel)]="characterForm.bioSummary.age">
        <label>Size:</label>
        <input 
          type="text" 
          name="size"
          [(ngModel)]="characterForm.bioSummary.size">
      </fieldset>
      
      <label>Skills:</label>
      <div *ngFor="let cs of characterForm.skills; let i = index;">
        <select 
          [value]="cs"
          (change)="onSelectSkill($event, i)">
          <option *ngFor="let skill of skills" [value]="skill">
            {{ skill }}
          </option>
        </select>
        <button type="button" (click)="removeSkill(i)">Remove</button>
      </div>
      <button type="button" (click)="addSkill()">Add skill</button>
      <div>
        <button 
          [disabled]="!(isFormValid$ | async)"
          type="submit">
          Save
        </button>
      </div>
    </form>
  `
})
export class RioAboutPage {

  @select(isFormValid) isFormValid$;
  @ViewChild(NgForm) ngForm: NgForm;

  characterForm;
  skills = ['', 'Knowledge Arcana', 'Climb', 'Perception', 'Investigation'];

  private formSubs;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    this.formSubs = this.ngRedux.select(state => state.form.character)
      .subscribe(characterForm => {
        console.log('LOGGIN FORM TICK');
        console.log(characterForm);
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
