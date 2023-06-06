import { Get, Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository {

    private produtos = [];

   async salvar(produto){
        this.produtos.push(produto);
        console.log(this.produtos);
        
    }

    async listar(){
        return this.produtos;
    }
   
}