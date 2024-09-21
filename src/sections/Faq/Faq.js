import React from "react";
import "./Faq.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <section
      className="faq-section pt-100 pb-70"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container">
        <SectionTitle subTitle="FAQ" title="Preguntas Frecuentes" />

        <div className="accordian-area">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  ¿Que requisitos debo reunir para someterme a una intervención
                  de Cirugía Estética o Reconstrucción?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul>
                    <li>
                      Estar seguro que desea realizarse dicha intervención.
                    </li>
                    <br></br>
                    <li>
                      Que los análisis de Laboratorio pre quirúrgicos se
                      encuentren dentro de parámetros normales.
                    </li>
                    <br></br>
                    <li>
                      Que la evaluación cardiológica (riesgo quirúrgico) sea
                      óptima.
                    </li>
                    <br></br>
                    <li>
                      Si usted sufre de alguna enfermedad, esta debe encontrase
                      controlada adecuadamente.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  ¿Que se puede esperar de la cirugía?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  La cirugía Estética o Reconstructiva puede realzar el aspecto
                  del paciente y mejorar la confianza en si mismo, antes de
                  decidir a someterse a una operación de cirugía debe pensar
                  claramente en sus expectativas y comentarlas con su cirujano.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  ¿Cuál es la mejor edad para someterse a una operación de
                  Cirugía Estética?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>Dependiendo del tipo de cirugía:</p>
                  <ul>
                    <li>
                      <strong>Cirugía de rejuvenecimiento:</strong>
                      <p>
                        Se debe evitar que las líneas de expresión (arrugas) se
                        marquen ya que podría no permitir resultados óptimos.
                      </p>
                    </li>
                    <li>
                      <strong>Cirugías de contorno corporal:</strong>
                      <p>
                        Es importante revisar el caso específico según el
                        paciente.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  ¿Qué riesgos puede tener la Cirugía Estética?
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul>
                    <li>
                      <p>
                        La cirugía estética, igual que cualquier otro tipo de
                        cirugía tiene riesgos inherentes (alergias, infecciones
                        de tejidos, hemorragias).
                      </p>
                    </li>
                    <li>
                      <p>
                        Sin embargo está demostrado que el porcentaje de
                        complicaciones generales es extremadamente bajo debido a
                        que normalmente requiere de una anestesia menos profunda
                        y que por lo general se realiza en pacientes sanos.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  ¿Como puedo escoger a mi cirujano?
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Es importante antes de realizarte una cirugía estética o de
                    cualquier tipo que verifiques que tu cirujano esté
                    calificado para estos procedimientos.
                  </p>
                  <p>Considera los siguientes aspectos:</p>
                  <ul>
                    <li>
                      <strong>Especialización:</strong> Asegúrate de que el
                      cirujano sea un especialista en cirugía plástica
                      reconstructiva y estética. Verifica que el título
                      profesional sea expedido por una universidad nacional o
                      extranjera. Esto puede confirmarse fácilmente en el
                      Colegio Médico del Perú.
                    </li>
                    <li>
                      <strong>Pertenencia a Sociedades Profesionales:</strong>{" "}
                      Verifica que el médico pertenezca a sociedades como la
                      Sociedad Peruana de Cirugía Plástica Estética y
                      Reconstructiva. Puedes comprobar esto con los diplomas
                      correspondientes.
                    </li>
                    <li>
                      <strong>Experiencia:</strong> Consulta en qué otros
                      lugares trabaja el médico para asegurarte de su
                      experiencia y reputación.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  ¿Su médico enseña en alguna Universidad?
                </button>
              </h2>
              <div
                id="collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                Esto no es indispensable, pero si es catedrático quiere decir que ha pasado por un proceso de selección riguroso ya que su médico está formando nuevos médicos.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSeven">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  ¿En qué lugar su médico realiza las consultas y cirugías?
                </button>
              </h2>
              <div
                id="collapseSeven"
                class="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                Debe ser una clínica establecida y contar con licencia de funcionamiento.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingEight">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  ¿Una vez terminada la Cirugía su médico estará para cuidarlo?
                </button>
              </h2>
              <div
                id="collapseEight"
                class="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                Toda Cirugía por más simple que sea puede tener riesgos básicos, si existe alguna complicación su médico debe estar cerca para cuidarlo y resolverla con rapidez, no es lo mismo estar al lado de su paciente que controlarlo desde otro lugar.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
