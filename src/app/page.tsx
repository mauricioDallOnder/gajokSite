'use client';
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
          subtitle={"Inscrições abertas!"}
        />
        
        <div id='sobre-nós-and-contato-section'>
        <HomeInfoSection
          mission="Nossa missão é promover o desenvolvimento físico, mental e espiritual de nossos alunos através da prática do Taekwondo. Buscamos criar um ambiente acolhedor e inspirador, onde os valores do respeito, cortesia, integridade, disciplina, autocontrole e determinação sejam cultivados. Nosso compromisso é capacitar nossos alunos a se tornarem não apenas atletas habilidosos, mas também cidadãos exemplares, contribuindo para a comunidade e vivendo vidas equilibradas."
          vision="Nossa visão é ser reconhecida como a academia de Taekwondo de referência na nossa região, conhecida por sua excelência no treinamento esportivo e no desenvolvimento pessoal. Sonhamos em formar campeões não apenas nos tatames, mas na vida, produzindo indivíduos que enfrentem desafios com confiança, ética e resiliência. Almejamos expandir nossa influência e inspirar a próxima geração de praticantes de Taekwondo a abraçar seus potenciais máximos."
          values={[
            "Respeito: Respeitamos todos os membros da nossa academia, independentemente de sua idade, nível de habilidade ou origem. O respeito é a base de todas as nossas interações.",
            "Disciplina: A disciplina é a chave para o progresso no Taekwondo e na vida. Incentivamos a autodisciplina, o compromisso com a prática e a busca constante pela melhoria.",
            "Autocontrole: Ensinamos o controle emocional e físico como uma habilidade essencial. Aprender a controlar impulsos e reações é tão importante quanto aprender técnicas de luta.",
            "Determinação: Acreditamos que a determinação é o que impulsiona o sucesso. Encorajamos nossos alunos a enfrentarem desafios de cabeça erguida, mesmo quando as coisas ficam difíceis.",
            "Comunidade: Valorizamos a formação de uma comunidade unida e de apoio. Através do Taekwondo, construímos laços fortes entre os membros da nossa academia e contribuímos positivamente para a nossa sociedade.",
            "Excelência: Buscamos a excelência em todos os aspectos do nosso treinamento, desde a técnica até o ensino. Estamos comprometidos em ser os melhores que podemos ser."
          ]}
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
