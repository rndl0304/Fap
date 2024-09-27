import { Usuario } from "./Usuario";
import { Administrador } from "./Administrador";
import { Operador } from "./Operador";
import { ICadastro } from "./ICadastro";
import { ILogin } from "./ILogin";

class Sistema implements ICadastro, ILogin
{
    public Logar(userObj : Usuario, user : string, password : string) : void
    {
        if (userObj.VerificaCredenciais(user, password))
        {
            console.log("Usuario Logado!");
        }
        else
        {
            console.log("Credenciais erradas!");
        }
    }

    public LogarAdm(userObj : Administrador, user : string, password : string, token : number) : void
    {
        if ( userObj.VerificaCredenciaisAdministrador(user, password, token))
        {
            console.log("Administrador Logado!");
        }
        else
        {
            console.log("Credenciais erradas!");
        }
    }

    public CadastrarUsurario(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string) : Usuario
        {
            return new Usuario(user,password,nome,sobrenome,dataNascimento,endereco,telefone);
        }

    public CadastrarAdministrador(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string) : Administrador
        {
            return new Administrador(user,password,nome,sobrenome,dataNascimento,endereco,telefone);
        }

    public CadastrarOperador(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string) : Operador
        {
            return new Operador(user,password,nome,sobrenome,dataNascimento,endereco,telefone);
        }

    public Atualizar(userObj : Usuario, endereco : string, telefone : string) : void
    {
        userObj.AtualizaCadastro(endereco, telefone);
    }
}


let sistema = new Sistema();

let user1 = sistema.CadastrarUsurario("rndl", "12345", "Rafael", "Nunes", "03/04/1991", "Local B", "23346256");
let adm1 = sistema.CadastrarAdministrador("rndl1", "123456", "Ze", "Neto", "04/06/1995", "Local A", "235556");
let operador1 = sistema.CadastrarOperador("asfg", "123456", "abel", "guilhermino", "01/01/1990", "Local C", "212346");

user1.MostrarDados();
adm1.MostrarDados();
operador1.MostrarDados();

sistema.Logar(user1, "rndl", "12345");
sistema.Logar(adm1, "rndl1", "123456");
sistema.Logar(adm1, "rndl1", "12345");
sistema.LogarAdm(adm1, "rndl1", "123456", adm1.GetToken());

sistema.Atualizar(user1, "Local D", "111111");

user1.MostrarDados();

operador1.Operar();
adm1.Administrar();

