import Image from 'next/image';

export default function NotFound() {
    return(
        <div>  
            <h1>404: Page Not Found</h1>
            <h2>O recurso que você está tentando acessar não foi encontrado</h2>
            {/* <figure>
            <Image src="/img/img-404.jpg" alt="Página Erro" width={500} height={500}/>
            </figure> */}
            <Image src="https://ecomspark.com/wp-content/uploads/2015/07/DOCTYPE-Declaration.gif" alt="Página de Erro" width={200} height={50} placeholder="blur" blurDataURL="/blur"></Image>
        </div>
    )
}