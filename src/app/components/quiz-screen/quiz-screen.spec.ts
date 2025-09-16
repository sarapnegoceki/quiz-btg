import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScreen } from './quiz-screen';

describe('QuizScreen', () => {
  let component: QuizScreen;
  let fixture: ComponentFixture<QuizScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
