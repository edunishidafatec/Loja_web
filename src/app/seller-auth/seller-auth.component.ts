import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
  public mensagem: String = "";
  public obj : Cliente = new Cliente();
  public fazerLogin(){
    if(this.obj.email=='norton.glaser@fatec.sp.gov.br' &&
        this.obj.senha=='123456'){
          localStorage.setItem("cliente", JSON.stringify(this.obj));
          window.location.href="./seller-auth";
    } else {
      this.mensagem = "email ou senha ivalidos !!!";
      localStorage.removeItem("cliente");
    }  
  }
  public novoCadastro(){
    localStorage.setItem("cliente", JSON.stringify(this.obj));
    window.location.href="./criar-conta";
  }
}
