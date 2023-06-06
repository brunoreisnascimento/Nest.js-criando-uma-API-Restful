import {IsString, IsEmail, MinLength, IsNotEmpty} from "class-validator";

export class CriaUsuarioDTO {
    
    @IsNotEmpty({
        message: 'O campo nome é obrigatório!'
    })
    nome: string;

    @IsEmail(undefined,{message: 'O e-mail informado é inválido!'})
    email: string;

    @MinLength(6, {message: 'A senha precisa ter pelo menos 6 caracters'})
    senha: string;

}
