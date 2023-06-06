import { Injectable } from "@nestjs/common";
import { ValidationArguments, registerDecorator, ValidatorConstraintInterface , ValidatorConstraint, ValidationOptions} from "class-validator";
import { UsuarioRepository } from "../usuario.respository";



@Injectable()
@ValidatorConstraint({async: true})
export class EmailEhUnicoValidator implements ValidatorConstraintInterface {

    constructor(private usuarioRepository: UsuarioRepository){

    }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const usuarioComEmailExsite = await this.usuarioRepository.existeComEmail(value);
        return !usuarioComEmailExsite;
    }

}


export const EmailEhUnico = (opcoesValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesValidacao,
            constraints: [],
            validator: EmailEhUnicoValidator
        });
    }
}