import { Usuario } from "./Usuario";

export class Administrador extends Usuario
{
    private _token : number;

    constructor(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string)
        {
            super(user, password, nome, sobrenome, dataNascimento, endereco, telefone);
            this._token = Math.random()*100000;
        }

    public Administrar() : void
    {
        console.log("Administrando software");
    }

    public GetToken() : number
    {
        return this._token;
    }

    public VerificaCredenciaisAdministrador(user : string, password : string, token : number) : boolean
    {
        if(this._token == token)
        {
            return super.VerificaCredenciais(user, password);
        }
        else
        {
            return false;
        }
        
    }

}