import { Usuario } from "./Usuario";

export class Operador extends Usuario
{
    constructor(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string)
        {
            super(user, password, nome, sobrenome, dataNascimento, endereco, telefone);
        }

    public Operar() : void
    {
        console.log("Operando Sistema");
    }
}