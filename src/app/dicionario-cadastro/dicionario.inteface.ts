import { Palavra } from "./palavra.interface";

export interface Dicionario {
    codigo: number;
    nome: string;
    corBotao: string;
    corBotaoFonte: string;
    corTitulo: string;
    corIcone: string;
    palavras: Palavra[]
}