import {
  async,
  inject,
  TestBed,
} from '@angular/core/testing';
import {RioContainer} from './container.component';
import {RioUiModule} from '../ui/ui.module';
import {configureTests} from '../../tests.configure';

describe('Component: Container', () => {
  let fixture;

  beforeEach(done => {
    const configure = (testBed: TestBed) => {
      testBed.configureTestingModule({
        imports: [RioUiModule],
      });
    };

    configureTests(configure).then(testBed => {
      fixture = testBed.createComponent(RioContainer);
      fixture.detectChanges();
      done();
    });
  });

  it('should set default size', async(inject([], () => {
    fixture.whenStable().then(() => {
      expect(fixture.componentInstance.size).toBe(1);
    });
  })));

  it('should set center', async(inject([], () => {
    fixture.whenStable().then(() => {
      expect(fixture.componentInstance.center).toBe(false);
    });
  })));

  it('should have the correct max-width',
    async(inject([], () => {
      fixture.whenStable().then(() => {
        const compiled = fixture.debugElement.nativeElement;
        const allMaxWidthClasses =
          ['max-width-1', 'max-width-2', 'max-width-3', 'max-width-4'];
        const size_class = [
          {
            size: 1,
            class: 'max-width-1',
          },
          {
            size: 2,
            class: 'max-width-2',
          },
          {
            size: 3,
            class: 'max-width-3',
          },
          {
            size: 4,
            class: 'max-width-4',
          },
        ];

        size_class.map(item => {
          fixture.componentInstance.size = item.size;
          fixture.detectChanges();
          expect(compiled.querySelector('div')
            .getAttribute('class').split(' ')).toContain(item.class);
          allMaxWidthClasses.filter(bg_class => bg_class !== item.class)
            .map(bg_class_excluded => {
              expect(compiled.querySelector('div')
                .getAttribute('class').split(' '))
                .not.toContain(bg_class_excluded);
            });
        });
      });
    })
  ));

  it('should have class mx-auto only when center is true', () => {
    async(inject([], () => {
      fixture.whenStable().then(() => {
        const compiled = fixture.debugElement.nativeElement;
        fixture.componentInstance.center = true;
        fixture.detectChanges();
        expect(compiled.querySelector('div')
          .getAttribute('class').split(' ')).toContain('mx-auto');
        fixture.componentInstance.center = false;
        fixture.detectChanges();
        expect(compiled.querySelector('div')
          .getAttribute('class').split(' ')).not.toContain('mx-auto');
      });
    }));
  });
});
