import { NextResponse } from "next/server";
import {promises as fs} from "fs";

const dados = [
    {id: 1, nome: "Mouse", preco: 100.0, qtd: 3 },
    {id: 2, nome: "Monitor", preco: 760.5, qtd: 1 },
    {id: 3, nome: "Headset", preco: 250.0, qtd: 2 },
    {id: 4, nome: "Teclado", preco: 1.0, qtd: 1 },
    {id: 5, nome: "Cabo LAN", preco: 5.0, qtd: 5 }
]

export async function GET(){
   const file = await fs.readFile(process.cwd() + "/src/data/base.json", 'utf-8');
   // fazer o parseamento dos dados para JSON (dados vem como string)
   const dados = JSON.parse(file);
   return NextResponse.json(dados);
}