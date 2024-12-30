import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import './recuerdos.css'; // Importar la hoja de estilos

export default function Recuerdos() {
  return (
    <div className="main-container">
      <Head>
        <title>Recuerdos con Priscila</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-5xl font-extrabold mb-8">Nuestros Recuerdos</h1>

      <div className="image-container">
        <p>Nuestra Primera Cita</p>
        <Link href="/primercita">
          <Image src="/recuerdo1.jpg" alt="Recuerdo 1" width={250} height={200} />
        </Link>
      </div>
      <div className="image-container">
        <p>Una salida Juntos</p>
        <Link href="salida">
          <Image src="/recuerdo2.jpg" alt="Recuerdo 2" width={250} height={200} />
        </Link>
      </div>
      <div className="image-container">
        <p>Celebrando Nuestro Aniversario</p>
        <Link href="/aniversario">
          <Image src="/recuerdo3.jpg" alt="Recuerdo 3" width={250} height={200} />
        </Link>
      </div>
      <div className="image-container">
        <p>Despues del Colegio</p>
        <Link href="/colegio">
          <Image src="/recuerdo4.jpg" alt="Recuerdo 4" width={250} height={200} />
        </Link>
      </div>
      <div className="image-container">
        <p>Siempre vas a ser mi Enanita Hermosa</p>
        <Link href="/mienanita">
          <Image src="/recuerdo5.jpg" alt="Recuerdo 5" width={250} height={200} />
        </Link>
      </div>
      <div className="image-container">
        <p>De cuando Fuimos Al barrio chino</p>
        <Link href="/barriochino">
          <Image src="/recuerdo6.jpg" alt="Recuerdo 5"  width={250} height={200} />
        </Link>
      </div>
      <div className="image-container">
        <p>Cuando te aburrias y nos dibujabas</p>
        <Link href="dibujos">
          <Image src="/recuerdo7.jpg" alt="Recuerdo 5"  width={250} height={200} />
        </Link>
      </div>
      <div className="image-container">
        <p>Cuando nos Escapamos a comprar un cafe gratis</p>
        <Link href="/cafegratis">
          <Image src="/recuerdo8.jpg" alt="Recuerdo 5"  width={250} height={200} />
        </Link>
      </div>

      <div className="return-link-container">
        <Link href="/" className="return-link">
          Volver a la Página Principal
        </Link>
      </div>
      
    </div>
  );
}
