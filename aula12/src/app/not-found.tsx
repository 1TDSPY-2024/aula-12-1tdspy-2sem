import Image from "next/image";

export default function NotFound(){
    return(
        <div>
            <h1>404: Page not found</h1>
            <h2>O recurso que você está tentando acessar não está disponível.</h2>
            
            <Image src="/img/img-404.jpg" alt="pagina de erro" width={200} height={200} 
            placeholder="blur" blurDataURL="/blur.jpg"></Image>
            <Image src="https://ecomspark.com/wp-content/uploads/2015/07/DOCTYPE-Declaration.gif" alt="pagina de erro 2" width={200} height={200}></Image> 
        </div>
    )
}