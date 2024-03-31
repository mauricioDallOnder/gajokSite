'use client'
import { useEffect } from "react";
import Footer from "./components/Footer";
import HeaderFixed from "./components/HeaderFixed";

import { HomeBannerSection } from "./components/HomeBanner";
import HomeInfoSection from "./components/HomeInfoSection";
import SchoolTrainingModalities from "./components/SchoolTrainingModalities/SchoolTrainingModalities";
import React from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []); // O array vazio garante que o efeito será aplicado uma única vez
  return (
    <main style={{ overflow: "hidden" }}>
      <div>
        <HeaderFixed />
     
        <HomeBannerSection
        
          title={"Faça parte de nossa família!"}
          subtitle={"Incrições abertas!"}
        />
        
        <div id='sobre-nós-and-contato-section'>
        <HomeInfoSection
          description="Bem-vindo à Gajok, o seu centro de excelência em taekwondo! Com uma 
          tradição de fomentar disciplina, resiliência e excelência, 
          nossa escola se dedica a ensinar a arte do taekwondo em um ambiente acolhedor e motivador. 
          Nossos programas são desenhados para atender alunos de todas as idades e níveis de habilidade, 
          do iniciante ao avançado, proporcionando uma jornada completa de desenvolvimento físico, mental e espiritual. 
          Com uma equipe de instrutores altamente qualificados, oferecemos treinamento de qualidade que não só aprimora 
          suas habilidades marciais, mas também promove valores essenciais como respeito, integridade e perseverança. 
          Junte-se a nós para descobrir seu potencial, superar desafios e fazer parte de nossa crescente família. 
          Aqui, cada chute e cada movimento é um passo em direção à superação pessoal. Venha viver a transformação com a Gajok!"
          address="R. Mal. Floriano, 96 - Pio X, Caxias do Sul - RS, 95020-370"
          googleMapsUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.113325064205!2d-51.18662592397065!3d-29.161332590889998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea3614e37ab3f%3A0x9b875cf13bcdea2d!2sGAJOK%20Centro%20de%20Treinamento!5e0!3m2!1spt-BR!2sbr!4v1711735725639!5m2!1spt-BR!2sbr"
          phone={"54 99265-7367"}
          email={"wtfrafaeltkd@gmail.com"}
        />
        </div>
        <div id='modalidades-de-treino-section'>
        <SchoolTrainingModalities />
        </div>
        <Footer/>
      </div>
    </main>
  );
}
