import Image from "next/image";

export default function NotFound(){
    return(
        <div>
            <h1>404: Page Not Found</h1>
            <h2>O recurso que você está tentando acessar não está disponível.</h2>
            {/* {Trabalhar com imagens em tags img no NEXT não é uma boa prática
            <img src="/img/img-404.jpg" alt="" />} */}
            {/* {<Image src="/img/img-404.jpg" alt="página de erro" width={200} height={50} placeholder="blur" blurDataURL="/blur.jpg" layout="responsive"/>} */}
            <Image src="https://ecomspark.com/wp-content/uploads/2015/07/DOCTYPE-Declaration.gif
 " alt="página de erro" width={200} height={50} placeholder="blur" blurDataURL="/blur.jpg" layout="responsive"></Image>
        </div>
    )
}