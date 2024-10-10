
import { RouterModule, Routes } from '@angular/router';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HomeComponent } from './home/home.component';
import { SalesCarComponent } from './sales-car/sales-car.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { BuscaComponent } from './busca/busca.component';
import { DetalheComponent } from './detalhe/detalhe.component';
// E nesse arquivo que vc faz as rotas e as paradas
export const routes: Routes = [
    {
     path:'',
     component: HomeComponent
    },
    {
     path:'home',
     component: HomeComponent
    },
    {
        path:'seller-auth',
        component: SellerAuthComponent
    },
    {
        path:'sales-car',
        component: SalesCarComponent
    },
    {
        path:'criar-conta',
        component: CriarContaComponent
    },
    {path:"esqueci", component:EsqueciComponent},
    {path:"busca", component:BuscaComponent},
    {path:"detalhe", component:DetalheComponent},

];

