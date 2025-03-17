import {useState} from 'react'
import './App.css';

function Profile({ urlSanrio, nomSan, info }) {
   const [flipped,setFlipped] = useState(false);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={urlSanrio} alt={nomSan} className="card-image" />
          <h2>{nomSan}</h2>
        </div>
        <div className="card-back">
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
}


export default function Gallery() {
  return (
    <>
      <h4 className="title">Algunas Razas De Gatos</h4>
      <div className="gallery">

      <Profile
        urlSanrio={"calico.jpg"}
        nomSan={"Gatos Calicos"}
        info={"Un gato calicó hace referencia a un tipo de pelaje de todo gato doméstico, en la que consiste de patrones tricolores, por lo general, de pelaje blanco en gran parte de su cuerpo, con parches de pelaje anaranjado y negro."}
      /> 
      <Profile
        urlSanrio={"esfinge.webp"}
        nomSan={"Gatos Esfinges"}
        info={"El sphynx o gato esfinge es una raza de gato originaria de Canadá. La característica más llamativa de esta raza es la aparente ausencia de pelaje y su aspecto delgado y esbelto."}
      />
      <Profile
        urlSanrio={"siames.jpg"}
        nomSan={"Gatos Siamés"}
        info={"El siamés es una raza de gato. Dentro de dicha raza se distinguen dos variedades: por un lado el siamés moderno, y por otro el siamés tradicional o Thai. del bosque."}
      />
       <Profile
        urlSanrio={"persa.webp"}
        nomSan={"Gatos Persas"}
        info={"El persa es una raza de gato caracterizada por tener una cara ancha y plana y un gran abundante pelaje de variados colores. Son considerados comúnmente como gatos aristocráticos."}
      />
      <Profile
        urlSanrio={"ragdoll.jpg"}
        nomSan={"Gatos Ragdoll"}
        info={"El ragdoll es una raza de gato originaria de los Estados Unidos. Su morfología es grande y pesada, y presenta un pelaje semilargo y suave y sedoso.​ Son mejor conocidos por su temperamento dócil y plácido y su naturaleza afectuosa."}
      />
      <Profile
        urlSanrio={"bosque.jpg"}
        nomSan={"Gatos Norwegian Forest"}
        info={"El gato de bosque de Noruega es una raza de gato endémica de los países escandinavos. Actualmente tiene gran popularidad como felino doméstico en hogares de toda Europa."}
      />
     </div>
    </>
  );

}
