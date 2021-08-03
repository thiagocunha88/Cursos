import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import{SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678910);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12378945610);
gerente.cadastrarSenha("123");

const cliente = new Cliente ("Lais", 78945612310, "456");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
console.log(gerenteEstaLogado, diretorEstaLogado);
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "4567");

console.log(clienteEstaLogado);