import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { LoginComponent } from '../login/login.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { RestritoComponent } from '../restrito/restrito.component';
const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'restrito', component: RestritoComponent,
        children: [
            { path: 'cadastro', component: CadastroProdutoComponent },
            { path: 'lista', component: ListaProdutoComponent },
            { path: 'atualiza/:id', component: AtualizaProdutoComponent }
        ]
    },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RestritoRoutingModule { }
