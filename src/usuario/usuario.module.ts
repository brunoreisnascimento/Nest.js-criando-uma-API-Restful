import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.respository";
import { EmailEhUnicoValidator } from "./validacao/email-eh-unico.validator";

    
    @Module({
       controllers:[UsuarioController],
       providers:[UsuarioRepository, EmailEhUnicoValidator]
    })

export class UsuarioModule {}
