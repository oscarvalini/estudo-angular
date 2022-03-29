export interface Palavra {
    id?: number,
    idDicionario: number
    texto: string;
    definicao: string;
    definicao_extra?: string; 
}