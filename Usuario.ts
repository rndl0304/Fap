export class Usuario
{
    public static NumeroUsuarios : number = 0;
    protected _user : string;
    protected _password : string;
    protected _sobrenome : string;
    protected _dataNascimento : string;
    protected _endereco : string;
    protected _telefone : string;

    constructor(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string)
    {
        this._user = user;
        this._password = password;
        this._sobrenome = sobrenome;
        this._dataNascimento = dataNascimento;
        this._endereco = endereco;
        this._telefone = telefone;

        Usuario.NumeroUsuarios ++;
    }

    public VerificaCredenciais(user : string, password : string) : boolean
    {
        return this._user == user && this._password == password;
    }

    public AtualizaCadastro(endereco : string, telefone : string) : void
    {
        this._telefone = telefone;
        this._endereco = endereco;
    }

    public MostrarDados() : void
    {
        console.log(this);
    }
    
}