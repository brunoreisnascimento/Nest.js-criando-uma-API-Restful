import { Controller, Get, Post, Body } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";



@Controller("/produto")
export class ProdutoController{
   
    constructor(private produtoRepository: ProdutoRepository){
        
    }

    @Post()
    async criaUsuario(@Body() dadosDoUsuario){
        this.produtoRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    }

    @Get()
    async listaUsuarios(){
        return this.produtoRepository.listar();
    }



}