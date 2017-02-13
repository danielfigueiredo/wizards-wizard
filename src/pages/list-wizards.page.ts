import {
  Component
} from '@angular/core';
import {archivedCharactersSelector} from '../selectors/form';
import {
  select,
  NgRedux
} from 'ng2-redux';
import {Observable} from 'rxjs';
import {ICharacter} from '../store/types';
import {
  saveForm,
  removeArchivedForm,
  resetForm
} from '../actions/index';
import {RioCharacterPage} from './character-form.page';
import {IAppState} from '../store/store';
import {
  Router
} from '@angular/router';

@Component({
  template: `
    <div *ngFor="let character of archivedCharacters$ | async; let i = index;">
      {{ character.name }} -  
      <button (click)="editCharacter(character, i)">Edit</button>
      <button (click)="removeCharacter(i)">Remove</button>
    </div>
    <button (click)="newCharacter()">Create new Wizard</button>
  `
})
export class RioListWizardsPage {
  @select(archivedCharactersSelector)
  archivedCharacters$: Observable<ICharacter[]>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private router: Router
  ) {}

  editCharacter(character: ICharacter, index: number) {
    this.ngRedux.dispatch(saveForm({
      path: [RioCharacterPage.FORM_NAME],
      value: character
    }));
    this.router.navigateByUrl(`/character?index=${index}`);
  }

  removeCharacter(index: number) {
    this.ngRedux.dispatch(removeArchivedForm({
      path: [RioCharacterPage.FORM_NAME],
      index
    }));
  }

  newCharacter() {
    this.ngRedux.dispatch(resetForm({
      path: [RioCharacterPage.FORM_NAME]
    }));
    this.router.navigateByUrl('/character');
  }
}
