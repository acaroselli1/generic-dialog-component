import { Component, OnInit } from '@angular/core';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  jokeText: string;
  loading: boolean;

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.getNextJoke();
  }

  getNextJoke(){
    this.loading = true;
    this.jokeService.getJoke().subscribe(joke => {
      this.jokeText = joke.joke;
      this.loading = false;
    })
  }

}
