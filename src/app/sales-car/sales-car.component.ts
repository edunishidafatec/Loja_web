import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';
import { Produto } from '../model/produto';
@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-car.component.html',
  styleUrl: './sales-car.component.css'
})
export class SalesCarComponent {
  public mensagem: string = "";
  public cesta: Cesta = new Cesta();

  constructor(){
    let json = localStorage.getItem("cesta");
    if(json!=null){
      this.cesta = JSON.parse(json);
    } else {
      this.mensagem = "Cesta vazia, adicione novos itens!";  
    } 
  }


public removerItem(obj:Item){
  this.cesta.itens = this.cesta.itens.filter(item => item != obj);  
  this.cesta.total = 0; //ATUALIZA O VALOR TOTAL DA CESTA
  for(let i=0; i<this.cesta.itens.length; i++){
    this.cesta.total= this.cesta.itens[i].valor+this.cesta.total;
  }
console.log(this.cesta);
  localStorage.setItem("cesta", JSON.stringify(this.cesta));    
}

public limparCesta(){
    localStorage.removeItem("cesta");
    this.cesta = new Cesta();
    this.mensagem = "Cesta vazia, adicione novos itens!";  
}
    

}
