import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

import texture from '../../assets/icons/box-textura.svg'

import bannerEstrategia from '../../assets/imgs/estrategia.png'
import boxEstrategia01 from '../../assets/imgs/box-info-estrategia01.png'
import boxEstrategia02 from '../../assets/imgs/box-info-estrategia02.png'
import boxEstrategia03 from '../../assets/imgs/box-info-estrategia03.png'
import boxEstrategia04 from '../../assets/imgs/box-info-estrategia04.png'
import boxEstrategia05 from '../../assets/imgs/box-info-estrategia05.png'

import paineis01 from '../../assets/imgs/Paineis01.png'
import paineis02 from '../../assets/imgs/Paineis02.png'

import sala01 from '../../assets/imgs/sala01.png'
import time from '../../assets/imgs/time.png'
import atleta from '../../assets/imgs/atleta.png'

import sala02 from '../../assets/imgs/sala02.png'
import sala03 from '../../assets/imgs/sala03.png'

import thumb from '../../assets/imgs/thumb.png'
import { Share } from "../../components/Share/Share"

export const ECG = () => {
   return (
      <>
         <Header />

         <main className="mainECGArea">
            <div className="banner-ecg f">
               <div className="banner-ecg-area">
                  <img src={texture} alt="Textura" />
               </div>
            </div>

            <div className="banner-ecg-img">
               <img src={bannerEstrategia} alt="Banner Estrategia" />
            </div>

            <div className="ecgArea">
               <span className="ecg-title">
                  <p>YDUQS / Canal / Página</p>
                  <p className="mt-1">Estratégia e compromisos</p>
               </span>

            </div>

            <section className="ecg-text mt-5">
               <p>
                  A Yduqs busca sempre melhorar o engajamento e a comunicação com todos os stakeholders. Nosso compromisso é integrar a sustentabilidade em todas as nossas atividades para fortalecer nosso legado no setor educacional - nos pilares ambiental, social, governança e econômico -, trabalhando com ética e transparência para o desenvolvimento sustentável.
               </p>

               <p>
                  Somos signatários do Pacto Global da Organização das Nações Unidas (ONU) e do Instituto Ethos, desde junho de 2021, direcionadores que promovem o engajamento dos stakeholders internos e externos e colaboram para disseminar as boas práticas do grupo.
               </p>

               <section className="ecg-values">
                  <img src={boxEstrategia01} alt="" />
                  <img src={boxEstrategia02} alt="" />
                  <img src={boxEstrategia03} alt="" />
                  <img src={boxEstrategia04} alt="" />
                  <img src={boxEstrategia05} alt="" />
               </section>
            </section>

            <section className="nossos-compromissos">
               <span className="ns-title text-light-blue bold">
                  <p>Nossos Compromissos</p>
               </span>

               <div className="ns-paineis">
                  <img src={paineis01} alt="Paineis solares 01" />
                  <img src={paineis02} alt="Paineis solares 02" />
               </div>

               <section className="ns-ambiental-area">

                  <div className="ns-ambiental">
                     <span className="ns-ambiental-title text-light-blue">
                        <p>Ambiental</p>
                     </span>

                     <p>
                        Com práticas de gestão ambiental atualizadas e aderentes às legislações e normas pertinentes, as unidades da Yduqs buscam reduzir os impactos de suas atividades sobre o meio ambiente, com foco na economia de recursos naturais, energéticos e materiais. Diretrizes estratégicas orientam esse trabalho, que inclui ações de ecoeficiência, coleta seletiva e redução da geração de resíduos.
                     </p>

                     <div className="ns-ambiental-desc">
                        <span>
                           <p>
                              Sabemos que as mudanças climáticas são um desafio global e fazemos a nossa parte para uma agenda positiva nesse tema. Em 2020, lançamos a nossa primeira usina fotovoltaica, com capacidade de gerar 2.280 MWh por ano, que evitará a emissão de mais de 1500t de CO2 equivalente nos próximos 10 anos.  Estamos comprometidos em conhecer nossas emissões atmosféricas e identificar as novas oportunidades para redução.
                           </p>

                           <p>

                              Por meio de um canal único, o Programa Repartir, recursos tecnológicos e materiais que estejam sendo subutilizados poderão ser alocados em outras dependências que realmente precisem deles. O programa se integra ao conceito de Economia Circular.
                           </p>
                        </span>

                        <img src={sala01} alt="Sala 01" />
                     </div>
                  </div>

               </section>

               <section className="ns-social-area">
                  <div className="ns-social">
                     <span className="ns-social-title text-light-blue">
                        <p>Social</p>
                     </span>

                     <div className="ns-social-imgs">
                        <img src={time} alt="Time" />
                        <img src={atleta} alt="Atleta" />
                     </div>

                     <span className="ns-social-desc">
                        <p>
                           A Yduqs atua no fortalecimento do pilar social há mais de 50 anos. A expansão e a diversificação das instituições de ensino superior nos permitem alcançar alunos em todas as classes sociais, com variados objetivos de vida e expectativas em relação ao ensino acadêmico.
                        </p>

                        <p>
                           Encontramos soluções que possibilitam um aprendizado de qualidade individualizado e presente em todas as regiões geográficas, em municípios com grande variedade de infraestrutura. Nosso maior ativo é o nosso time de docentes e colaboradores, comprometidos e engajados com o modelo de negócio e com a cultura organizacional da Companhia.
                        </p>

                        <p>
                           Educar para transformar é o nome do programa que organiza as ações de responsabilidade social corporativa (RSC) da Companhia. Com projetos distribuídos em cinco pilares - Esporte, Escola, Cidadania, Cultura e Inovação & Empreendedorismo -, o programa trabalha para beneficiar as instituições sociais parceiras e para gerar participação de alunos, docentes e colaboradores administrativos.
                        </p>

                        <p>
                           Em 2021, para potencializar todo o trabalho voltado para responsabilidade social e ações ao longo desses 50 anos, criamos o Instituto Yduqs, que conta com diversos projetos, parcerias e captação de recursos externos.
                        </p>

                        <p>
                           Acesse e conheça mais sobre o Instituto Yduqs
                        </p>
                     </span>

                  </div>
               </section>

               <section className="ns-governanca-area">

                  <div className="ns-governanca">
                     <div className="ns-governanca-img">
                        <img src={ sala02 } alt="Sala 02" />
                        <img src={ sala03 } alt="Sala 03" />
                     </div>

                     <div className="ns-governanca-desc">
                        <span className="ns-governanca-title text-light-blue">
                           <p>Governaça</p>
                        </span>

                        <p>
                           A  governança corporativa é um dos pilares da estratégia e do posicionamento da Yduqs no mercado de ensino superior. Qualidade, excelência na gestão, integridade empresarial e manutenção da conformidade e da ética seguem como compromissos da Companhia em seu trabalho de ampliar o acesso à educação de qualidade.
                        </p>

                        <p>
                           O aprimoramento da governança e do Compliance tem sido um movimento constante desde 2007, quando a então Estácio Participações passou a ser listada no Novo Mercado da B3. Em 2021, foi criado o Comitê ESG, com representantes de todos os pilares, dedicado a estudar as principais pautas relacionadas ao impacto social, ambiental e de governança da Yduqs e fazer recomendações à Diretoria.
                        </p>
                        
                        <p>
                           Acesse mais informações sobre nossa governança.
                        </p>
                     </div>

                  </div>


               </section>

            </section>

            <section className="indices-area">

               <div className="indices">
                  <span className="indices-title text-light-blue bold">
                     <p>Indíces e Ratings ESC</p>
                  </span>

                  <div className="indices-imgs">
                     <img src={ thumb } alt="Thumb" />
                     <img src={ thumb } alt="Thumb" />
                     <img src={ thumb } alt="Thumb" />
                     <img src={ thumb } alt="Thumb" />
                  </div>
                  <Share />
               </div>
            </section>

         </main>

         <Footer />
      </>
   )
}