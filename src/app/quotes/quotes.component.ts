import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote ("Be yourself; everyone else is already taken.", "Oscar Wilde", "Margaret Langa", 0, 0, new Date(2020, 3, 12)),
    new Quote ("Be the change that you wish to see in the world.", " Mahatma Gandhi", "Margaret Langa", 0, 0, new Date(2020, 3, 12)),
    new Quote ("No one can make you feel inferior without your consent.", "Eleanor Roosevelt", "Margaret Langa", 0, 0, new Date(2020, 3, 12)),
    new Quote ("Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Gandhi", "Margaret Langa", 0, 0, new Date(2020, 3, 12))
  ]
  addNewQuote(quote){
    this.quotes.push(quote);
  }
  toggler(index){
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }

  addUpVote(upVoting, index){
    if (upVoting) {
      this.quotes[index].upVote += 1;
    }
  }

  addDownVote(downVoting, index){
    if (downVoting) {
      this.quotes[index].downVote += 1;
    }
  }
  highlightFunc(index){
    let d: number;
    d = this.quotes.reduce((acc, quote) => acc = acc > quote.upVote ? acc : quote.upVote, 0);
    if (this.quotes[index].upVote === d && this.quotes[index].upVote > 0) {
      return d;
    } else {
      return d;
    }
  }
  constructor() { }

  ngOnInit(): void {

  }

}
