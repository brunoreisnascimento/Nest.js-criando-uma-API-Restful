import {IsString, IsEmail, MinLength, IsNotEmpty, IsOptional} from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class AtualizaUsuarioDTO {
    
    @IsNotEmpty({message: 'O campo nome é obrigatório!'})
    @IsOptional()
    nome: string;

    @IsEmail(undefined,{message: 'O e-mail informado é inválido!'})
    @EmailEhUnico({message: "Já existe um usuário com esse e-mail!"})
    @IsOptional()
    email: string;

    @MinLength(6, {message: 'A senha precisa ter pelo menos 6 caracters'})
    @IsOptional()
    senha: string;

}
