import { Usuario } from "./Usuario";
import { Administrador } from "./Administrador";
import { Operador } from "./Operador";

export interface ICadastro
{
    CadastrarUsurario(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string) : Usuario;
    CadastrarAdministrador(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string) : Administrador;
    CadastrarOperador(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string) : Operador;
}