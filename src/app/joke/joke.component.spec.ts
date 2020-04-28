import { ComponentFixture, TestBed } from "@angular/core/testing"
import { JokeComponent } from './joke.component'
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JokeService } from './joke.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';





describe('JokeComponent', ()=>{

  let fixture:ComponentFixture<JokeComponent>;
  let debugElement:DebugElement;
  let component:JokeComponent;
  let jokeService: JokeService;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations:[JokeComponent],
      providers:[JokeService]
    })
    fixture = TestBed.createComponent(JokeComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    jokeService = TestBed.get(JokeService)
  })

  it('should be created', ()=>{
     expect(component).toBeTruthy();
  })

  it('should have joke text of "FAKE JOKE"', ()=> {
    spyOn(jokeService, 'getJoke')
    .and.returnValue(of({joke:'FAKE JOKE'}))
  
    fixture.detectChanges()

    let jokeText = debugElement.query(By.css('.joke-text')).nativeElement;

    expect(jokeText.textContent).toEqual('FAKE JOKE');


  })

})