import React from "react";
import "./Symptoms.scss";
import IconList from "../../components/IconList/IconList";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import iconOne from "../../assets/symptoms/rinoplastia.jpg";
import iconTwo from "../../assets/symptoms/levantamientocejas.jpg";
import iconThree from "../../assets/symptoms/parpados.webp";
import iconFour from "../../assets/symptoms/Lifting.jpeg";
import iconFive from "../../assets/symptoms/Liftingendos.avif";
import iconSix from "../../assets/symptoms/menton.webp";
import iconSeven from "../../assets/symptoms/bola.jpg";
import iconEight from "../../assets/symptoms/papada.jpg";
import iconNine from "../../assets/symptoms/Peeling.jpg";
import iconTen from "../../assets/symptoms/cicatriz.jpg";
import iconEleven from "../../assets/symptoms/Otoplastia.jpg";
import iconTwelve from "../../assets/symptoms/Liposuccion.png";
import iconThirteen from "../../assets/symptoms/lipo.avif"
import iconFourteen from "../../assets/symptoms/Reduccion.jpg"
import iconFifteen from "../../assets/symptoms/levantamiento.jpg"; // Ejemplo, cambia el nombre del archivo y la extensión según corresponda
import iconSixteen from "../../assets/symptoms/abdomen.jpg"; // Ejemplo
import iconSeventeen from "../../assets/symptoms/cabello.png"; // Ejemplo
import iconEighteen from "../../assets/symptoms/manejo.jpg"; // Ejemplo
import iconNineteen from "../../assets/symptoms/protesis.jpg"; // Ejemplo
import iconTwenty from "../../assets/symptoms/Otoplastia.webp";
import iconTwentyOne from "../../assets/symptoms/accidente.jpg";
 

const Symptoms = () => {
  const symptomsData = [
    {
      icon: iconOne,
      title: "Rinoplastia",
      description: "Cirugía ambulatoria para corregir desviaciones nasales y mejorar la respiración, usando sedación y anestesia local. Recuperación en una semana con posible hematomas e hinchazón temporal.",
    },
    {
      icon: iconTwo,
      title: "Levantamiento de cola de Ceja",
      description: "Tener cola de Ceja puede causar cansancio y problemas de visión. Esta técnica usa dos incisiones pequeñas ocultas para reposicionar las cejas, mejorando la expresión y la visión. La cirugía es ambulatoria con recuperación inmediata.",
    },
    {
      icon: iconThree,
      title: "Cirugia de parpados",
      description: "Corrige exceso de piel en párpados superiores y bolsas en inferiores. Se realiza con anestesia local, a menudo en una sola sesión. Los hematomas duran aproximadamente una semana. Mejora la expresión y rejuvenece la mirada.",
    },
    {
      icon: iconFour,
      title: "Lifting",
      description: "Procedimiento suave o más intenso según el paciente. Se realiza con sedación y anestesia local, con un día de hospitalización y diez días de reposo. Puede haber hinchazón y hematomas leves durante los primeros días.",
    },
    {
      icon: iconFive,
      title: "Lifting endoscopico frontal",
      description:
        "Utiliza para eliminar arrugas frontales, del entrecejo y reposicionar la ceja sin incisiones grandes. Con pequeñas incisiones casi imperceptibles, la recuperación es rápida, y el paciente puede reincorporarse en dos días.",
    },
    {
        icon: iconSix,
        title: "Menton",
        description:
          "Se coloca una protesis de silicón sólido para mejorar la proyección del mentón. Procedimiento ambulatorio con anestesia local, con reincorporación a la vida cotidiana al día siguiente.",
      },
      {
        icon: iconSeven,
        title: "Bola de bichat",
        description:
          "Se extrae la grasa interna de las mejillas mediante pequeños cortes en la boca, reduciendo su prominencia. Se realiza con anestesia local y es ambulatoria, permitiendo la reincorporación a las actividades al día siguiente.",
      },
      {
        icon: iconEight,
        title: "Lipo de papada",
        description:
          "Se realiza una aspiración para eliminar la grasa acumulada debajo del mentón. Es una cirugía ambulatoria con un período de descanso de tres días.",
      },
      {
        icon: iconNine,
        title: "Peeling",
        description:
          "Procedimiento que nos permite atenuar e incluso desaparecer cicatrices y manchas en cara, consiste en un pulido superficial que retira las imperfecciones de la piel.",
      },
      {
        icon: iconTen,
        title: "Plastia de cicatriz",
        description:
          "Se realiza en aquellas personas que tienen cicatrices en el rostro y/o cuerpo, pueden ser corregidas mediante técnicas modernas. ",
      },
      {
        icon: iconEleven,
        title: "Otoplastia",
        description:
          "Hay personas que presentan prominencia en los pabellones auriculares tanto en tamaño como en curvatura, todo esto se puede corregir bajo anestesia local y con cirugía ambulatoria.",
      }
  ]
  const corporal = [
        {
          icon: iconTwelve,
          title: "Lipoescultura",
          description: "Técnica para eliminar grasa del abdomen, cintura, caderas, muslos, espalda, brazos y piernas. Requiere un día de hospitalización y tres días de descanso, con uso de faja compresiva durante un mes.",
        },
        {
            icon: iconThirteen,
            title: "Lipo sectorizada",
            description: "Procedimiento ambulatorio para eliminar grasa de zonas específicas del cuerpo. No requiere hospitalización, con retorno inmediato a las actividades y uso de faja durante una semana post-cirugía.",
          },
          {
            icon: iconFourteen,
            title: "Reducción mamaria",
            description: "Reducción del volumen mamario para aliviar molestias y dolor, con hospitalización de un día y reposo de tres días.",
          },
          {
            icon: iconFifteen,
            title: "Levantamiento de mama",
            description: "Corrección de la caída de las mamas con diversos métodos, consultando al cirujano plástico para el más adecuado.",
          },
          {
            icon: iconSixteen,
            title: "Abdominoplastia",
            description: "Eliminación del exceso de piel y grasa abdominal, con formación de un nuevo ombligo, requiriendo un día de hospitalización y una semana de reposo.",
          },
          {
            icon: iconSeventeen,
            title: "Implante de cabello",
            description: "Restauración del cabello en el cuero cabelludo con técnicas modernas para tratar la calvicie.",
          },
          {
            icon: iconEighteen,
            title: "Manejo integral de obesidad",
            description: "Tratamiento de la obesidad con enfoque nutricional, endocrinológico y quirúrgico, adaptado a las necesidades individuales",
          }
  ]
  const reconstructiva = [
    {
        icon: iconNineteen,
        title: "Reconstruccion mamaria Post cancer",
        description: "Corrección de secuelas tras tratamientos agresivos por cáncer de mama, utilizando prótesis o tejidos propios. Consulta a tu médico para determinar la técnica adecuada.",
      },
      {
        icon: iconTwenty,
        title: "Otoplastia reconstructiva",
        description: "Reconstrucción del pabellón auricular ausente o dañado desde el nacimiento o por accidentes, ayudando a los pacientes a reintegrarse a su vida cotidiana.",
      },
      {
        icon: iconTwentyOne,
        title: "Reconstrucciones por accidentes",
        description: "Restauración de lesiones incapacitantes tras un accidente mediante técnicas avanzadas, mejorando la calidad de vida de los pacientes.",
      }
  ]
  ;

  return (
    <section className="symptoms-section section-common pt-100 pb-70" data-aos="fade-up" data-aos-duration="2000">
      <div className="container backback">
  
        {/* Cirugía Facial */}
        <div className="separator"></div>
        <SectionTitle
          subTitle="Cirugías"
          title="Cirugía Facial"
          description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
        <div className="row facial-surgeries">
          {symptomsData.map((singleSymptoms) => (
            <IconList
              icon={singleSymptoms.icon}
              title={singleSymptoms.title}
              description={singleSymptoms.description}
            />
          ))}
        </div>
        <div className="backback1">
        {/* Cirugía Corporal */}
        <div className="separator"></div>
        <SectionTitle
          subTitle="Cirugías"
          title="Cirugía Corporal"
          description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
        <div className="row corporal-surgeries">
          {corporal.map((singleSymptoms) => (
            <IconList
              icon={singleSymptoms.icon}
              title={singleSymptoms.title}
              description={singleSymptoms.description}
            />
          ))}
        </div>
        </div>
        
        <div className="backback2">
        {/* Cirugía Reconstructiva */}
        <div className="separator"></div>
        <SectionTitle
          subTitle="Cirugías"
          title="Cirugía Reconstructiva"
          description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
        <div className="row reconstructive-surgeries">
          {reconstructiva.map((singleSymptoms) => (
            <IconList
              icon={singleSymptoms.icon}
              title={singleSymptoms.title}
              description={singleSymptoms.description}
            />
          ))}
        </div>
        </div>
  
      </div>
    </section>
  );
  
};

export default Symptoms;
