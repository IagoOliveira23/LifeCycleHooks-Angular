import { Component, OnInit, AfterContentInit, DoCheck, AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck,AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit{

  quantidade:number = 0

  constructor(){}

 
  
  adicionar(){
    this.quantidade += 1
  }

  descrementar(){
    this.quantidade -= 1
  }

  //checked -> content -> view

   //quando o primeiro conteudo é iniciado
   ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }
  
  //depois da inicialização da view
  ngAfterViewInit(): void {
    console.log("AfterViewInit");
    
  }

  //após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log("AfterContentCheked");
    
  }

  //após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
    
  }
  
  ngDoCheck(): void {
    console.log("DoCheck");
    
  }
  ngOnInit(): void {
    console.log("OnInit");
    
  }

}
