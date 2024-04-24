import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { LoginComponent } from '../login/login.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { RestritoComponent } from '../restrito/restrito.component';
import { GuardGuard } from '../guard.guard';
const restritoRoutes: Routes = [
    {
        path: 'restrito', component: RestritoComponent, canActivate: [GuardGuard],
        
        children: [
            { path: 'cadastro', component: CadastroProdutoComponent, canActivate: [GuardGuard] },
            { path: 'lista', component: ListaProdutoComponent, canActivate: [GuardGuard] },
            { path: 'editar/:id', component: AtualizaProdutoComponent, canActivate: [GuardGuard] }
        ]
    },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }
]
@NgModule({
    imports: [RouterModule.forRoot(restritoRoutes)],
    exports: [RouterModule]
})
export class RestritoRoutingModule { }
