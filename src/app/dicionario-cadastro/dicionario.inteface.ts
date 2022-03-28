import { Palavra } from "./palavra.interface";

export interface Dicionario {
    codigo: Number;
    nome: String;
    corBotao: String;
    corBotaoFonte: String;
    corTitulo: String;
    corIcone: String;
    palavras: Palavra[]
}