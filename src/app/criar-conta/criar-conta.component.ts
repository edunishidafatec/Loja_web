import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
@Component({
  selector: 'app-criar-conta',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './criar-conta.component.html',
  styleUrl: './criar-conta.component.css'
})
export class CriarContaComponent {
  public mensagem: string = "";
  public obj: Cliente = new Cliente();

  public gravar(){
    localStorage.setItem("cliente", JSON.stringify(this.obj));
    // this.mensagem = "cadastro atualizado com sucesso!"; // Angular não está detectando esta mudança 
    // Por isso coloquei o alert
    alert("cadastro atualizado com sucesso!")
  }

  public carregar(){
    let json = localStorage.getItem("cliente");
    if(json==null){
      window.location.href="./seller-auth";
    } else {
      this.obj = JSON.parse(json);
    }
  }

  constructor(){
    this.carregar();
  }

}
