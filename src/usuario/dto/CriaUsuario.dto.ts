import {IsString, IsEmail, MinLength, IsNotEmpty} from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class CriaUsuarioDTO {
    
    @IsNotEmpty({
        message: 'O campo nome é obrigatório!'
    })
    nome: string;

    @IsEmail(undefined,{message: 'O e-mail informado é inválido!'})
    @EmailEhUnico({
        message: "Já existe um usuário com esse e-mail!"
    })
    email: string;

    @MinLength(6, {message: 'A senha precisa ter pelo menos 6 caracters'})
    senha: string;

}
