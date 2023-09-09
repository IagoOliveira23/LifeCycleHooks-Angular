import { Component, OnInit, DoCheck, AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterViewChecked, AfterViewInit{

  quantidade:number = 0

  constructor(){}
  
  adicionar(){
    this.quantidade += 1
  }

  descrementar(){
    this.quantidade -= 1
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentCheked");
    
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
    
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit");
    
  }
  
  ngDoCheck(): void {
    console.log("DoCheck");
    
  }
  ngOnInit(): void {
    console.log("OnInit");
    
  }

}
