import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() upVoting = new EventEmitter<boolean>();
  @Output() downVoting = new EventEmitter<boolean>();

  upVotes(vote: boolean){
    this.upVoting.emit(vote);
  }

  downVotes(vote: boolean){
    this.downVoting.emit(vote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
