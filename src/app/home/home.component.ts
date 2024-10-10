import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public mensagem: string = "conheça as nossas promoções";
  public lista: Produto[] = [
    {codigo:1, nome:"Pamonha", descritivo:"Este é o produto feito de milho que deu origem a loja SeuPamonha. O produto é feito com os melhores ingredientes",
      valor:10.00, quantidade:10, keywords:"Pamonha"},
    {codigo:2, nome:"Bolo de milho", descritivo:"Bolo macio e saboroso feito a base de milho",
    valor:15.00, quantidade:10, keywords:"Bolo de milho"},
    {codigo:3, nome:"Suco de milho 200ml", descritivo:"Suco de milho com leite",
    valor:7.00, quantidade:10, keywords:"Suco de milho 200ml"},
    {codigo:4, nome:"Garrafa suco de milho", descritivo:"Garrafa de 500ml de suco de milho",
    valor:20.00, quantidade:5, keywords:"Garrafa suco de milho"},
    {codigo:5, nome:"Suco de milho caixinha 200ml", descritivo:"Suco de milho em caixa",
    valor:5.00, quantidade:10, keywords:"Suco de milho caixinha 200ml"},
    {codigo:6, nome:"Canjica de milho", descritivo:"Canjica feito de milho, sobremesa tipica em festa juninas",
    valor:10.00, quantidade:10, keywords:"Canjica de milho"}
  ];

  public verDetalhe(item:Produto){
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href = "./detalhe";  
  }

  public adicionarItem(obj:Produto){
    let json = localStorage.getItem("cesta");
    let jsonCliente = localStorage.getItem("cliente");
    let cesta: Cesta = new Cesta();
    let item: Item = new Item();
    if(json==null){      //CESTA NAO EXISTE     
        item.codigo=obj.codigo;
        item.produto=obj;
        item.quantidade=1;
        item.valor= obj.valor;          
        cesta.codigo = 1;
        cesta.total = obj.valor;
        cesta.itens.push(item);          
        if(jsonCliente!=null) cesta.cliente = JSON.parse(jsonCliente);          
    } else {  //CESTA EXISTE
      let achou = false;
      cesta = JSON.parse(json);
      for(let i=0; i<cesta.itens.length; i++){
        if(cesta.itens[i].codigo==obj.codigo){  //ITEM JA EXISTE
          cesta.itens[i].quantidade = cesta.itens[i].quantidade + 1;
          cesta.itens[i].valor =  cesta.itens[i].quantidade * cesta.itens[i].produto.valor;
          achou = true;
          break;
        }            
      }
      if(!achou){  //ITEM NAO EXISTE
        item.codigo=obj.codigo;
        item.produto=obj;
        item.quantidade=1;
        item.valor= obj.valor;    
        cesta.itens.push(item);      
      }
    }

    cesta.total = 0; //ATUALIZA O VALOR TOTAL DA CESTA
    for(let i=0; i<cesta.itens.length; i++){
      cesta.total= cesta.itens[i].valor + cesta.total;
    }

    localStorage.setItem("cesta", JSON.stringify(cesta));
    window.location.href = "./sales-car";
}

}

