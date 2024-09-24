import Image from "next/image"
export default function NotFound() {
  return (
    <div>
        <h1>404: Page Not Found</h1>
        <h2>O recurso que você está tentando acessar não está disponivel</h2>
      <Image src="/img/img-404.jpg" alt="Imagem de erro" width={1000} height={100} layout="responsive"/>
    </div>
  )
}
