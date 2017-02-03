import { Component } from '@angular/core';

@Component({
  selector: 'rio-header',
  styles: [require('./header.css')],
  template: `
    <header class="bg-teal p2 mb3 app-header">
      <div class="app-container flex items-center justify-center">
        <img src="../../assets/wizard-icon.svg"
          alt="Wizards Wizard"
          class="inline-block logo"
          height="1em">
        <h1 class="inline-block my0 title">Wizards Wizard</h1>
      </div>
    </header>
  `
})
export class RioHeader {};
