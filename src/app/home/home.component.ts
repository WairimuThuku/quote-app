// import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1,'Lulu','The smallest application really,is better than the GRANDEST INTENTION ','Robin Sharma',new Date(20212, 1, 7) ),
    new Quotes(2,'Lael', 'To every woman determined to abandon what was and bold enough to discover what could still become . . . this one is for us', 'Sarah Jakes Roberts' ,new Date(2022, 1, 7)),
    new Quotes(3,'Jahsiri','Life is lived on the edge ','Will Smith',new Date(2022, 1, 7) ),

    
  ];
  toggleDetails(index:any){
  this.quotes[index].showQuote=!this.quotes[index].showQuote;
  }

 


completeQuote(isComplete:any,index:number){
if(isComplete){
  let toDelete=confirm(`It will delete quote posted by ${this.quotes[index].name}`)
  if (toDelete){
  this.quotes.splice(index,1);
  }
}
}

addNewQuote(quotes:Quotes){
  let quoteLength=this.quotes.length;
  quotes.index=quoteLength+1;
  quotes.posted=new Date(quotes.posted);
  this.quotes.push(quotes);
}


  constructor() { }

  ngOnInit(): void {

  }

}
