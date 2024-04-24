import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../produto.service';
@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent {
  public produtos: Produto[] = [];
  public produto: Produto = new Produto(0, "", "", "", 0);
  constructor(private _produtoService: ProdutoService,
    private router: Router,
    private _loginService: LoginService) { }
  ngOnInit(): void {
    this.listarProdutos();
    this._loginService.setMostraMenu(false);
  }
  listarProdutos(): void {
    this._produtoService.getProdutos()
      .subscribe(
        retornaProduto => {
          this.produtos = retornaProduto.map(
            item => {
              return new Produto(
                item.id,
                item.produto,
                item.descricao,
                item.foto,
                item.preco
              );
            }
          )
        }
      )
  }
  excluir(id: number) {
    this._produtoService.removerProduto(id).subscribe(
      vaga => {
        this.listarProdutos();
      },
      err => { console.log("erro ao Excluir") }
    );
    // window.location.href = "/restrito/lista";
    this.router.navigate(["/restrito/lista"]);
  }
}