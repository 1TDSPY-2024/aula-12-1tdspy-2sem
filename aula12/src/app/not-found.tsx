import Image from "next/image";

export default function NotFound() {
    return(
        <div>
            <h1>404: Page Not Found</h1>
            <h2>Orecurso que você está tentando acessar não está disponível</h2>
            {/* <img src="/img/img-404.jpg" alt="Página de erro" /> */}
            {/* <Image src="/img/img-404.jpg" alt="Página de erro" width={200} height={200}/> */}
            <Image src="https://ecomspark.com/wp-content/uploads/2015/07/DOCTYPE-Declaration.gif" alt="Página de erro" width={200} height={200}/>
        </div>
    )
}