import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Exemplo de Boyler-Plate",
  description: "Generated by create next app",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  colorScheme: "light"
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  // const rotas = useRouter();

  // //Criando uma lista de rotas;
  // const rotasSemFooterHead = ['/not-found','/produto'];
  // console.log("ROTA ATUAL : " + rotas.pathname);
  // const rotaAtual = rotasSemFooterHead.includes(rotas.pathname);

  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
          {children}
        <Rodape />
       </body>
    </html>
  );
}
