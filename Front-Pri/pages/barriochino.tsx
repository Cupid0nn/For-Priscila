import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa'; // Importar ícono de React Icons
import './pages.css'; // Hoja de estilos compartida

export default function BarrioChino() {
  return (
    <div className="main-container">
      <Head>
        <title>Barrio chino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">En el Barrio chino</h1>
      <div className="content">
        <div className="story-container">
          <p className="story-text">
          Cuando fuimos al barrio, me acuerdo que estabas hermosa con ese pelo cortito y de color azul 💙, esos lentesitos rosas 😎 y una remerita holgada. Compramos un dumpling de cerdo que estaba asqueroso 🤢 y unas sodas rosas 🥤, estaba lleno de gente 👫👬👭. Pero mi parte favorita fue sacarte fotos 📸 en la plaza de por ahí nomás, estabas hermosa como siempre 🌸.</p>
        </div>
        <div className="image-container">
          <Image src="/recuerdo6.jpg" alt="Barrio chino" width={500} height={400} />
        </div>
      </div>

      <div className="return-link-container">
        <Link href="/recuerdos" className="return-link">
          <FaArrowLeft className="return-link-icon" /> Volver
        </Link>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16583.321524476312!2d-58.46120268361323!3d-34.557115793950864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d3ea07df93%3A0x947b5150d5a5bda4!2sBarrio%20Chino%2C%20C1428%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e1!3m2!1ses-419!2sar!4v1735576598750!5m2!1ses-419!2sar"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
