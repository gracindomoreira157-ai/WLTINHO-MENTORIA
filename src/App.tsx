/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Award, 
  MessageSquare, 
  ArrowRight, 
  Star,
  ShieldCheck,
  Zap,
  ShoppingBag,
  BarChart3,
  ChevronRight
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-ml-yellow/95 backdrop-blur-sm border-b border-yellow-400 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <ShoppingBag className="text-ml-blue w-8 h-8" />
          <span className="font-extrabold text-xl tracking-tight text-ml-blue">ELTINHO <span className="font-light">MENTORIA</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-ml-blue">
          <a href="#sobre" className="hover:opacity-70 transition-opacity">Sobre</a>
          <a href="#metodo" className="hover:opacity-70 transition-opacity">Método</a>
          <a href="#depoimentos" className="hover:opacity-70 transition-opacity">Depoimentos</a>
          <button className="bg-ml-blue text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md">
            Quero Vender Mais
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-ml-yellow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-1 rounded-full text-ml-blue font-bold text-sm mb-6 border border-white/50">
            <Zap className="w-4 h-4 fill-ml-blue" />
            <span>MENTORIA EXCLUSIVA MERCADO LIVRE</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-ml-blue leading-[0.9] mb-6">
            DOMINE O <br />
            <span className="text-white drop-shadow-sm">MERCADO LIVRE</span> <br />
            COM O ELTINHO.
          </h1>
          <p className="text-xl text-ml-blue/80 max-w-lg mb-8 font-medium leading-relaxed">
            Saia do amadorismo e construa um negócio sólido no maior marketplace da América Latina. Estratégias validadas no campo de batalha.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-ml-blue text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl">
              COMEÇAR AGORA <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 px-4 py-2">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-ml-yellow" alt="Aluno" referrerPolicy="no-referrer" />
                ))}
              </div>
              <div className="text-sm font-bold text-ml-blue">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-ml-blue" />
                  <span>4.9/5</span>
                </div>
                <span>+500 Alunos</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-ml-yellow via-transparent to-transparent z-10" />
          <img 
            src="https://vivendonainternet.com/eltinho.png" 
            alt="Eltinho Mentor" 
            className="relative z-0 w-full max-w-2xl mx-auto drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/4 -left-4 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 hidden sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <TrendingUp className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Vendas Hoje</p>
                <p className="text-xl font-black text-ml-blue">R$ 12.450,00</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/4 -right-4 z-20 bg-ml-blue p-4 rounded-2xl shadow-2xl hidden sm:block"
          >
            <div className="flex items-center gap-3">
              <Award className="text-ml-yellow w-8 h-8" />
              <div>
                <p className="text-xs text-white/70 font-bold uppercase tracking-wider">Status</p>
                <p className="text-lg font-black text-ml-yellow italic">MERCADO LÍDER PLATINUM</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <div className="bg-white py-12 border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { label: "Vendas Totais", value: "R$ 5M+" },
          { label: "Alunos", value: "500+" },
          { label: "Anos de Experiência", value: "8+" },
          { label: "Contas Platinum", value: "12" },
        ].map((stat, i) => (
          <div key={i}>
            <p className="text-3xl font-black text-ml-blue mb-1">{stat.value}</p>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Benefits = () => (
  <section id="metodo" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-ml-blue mb-4">O QUE VOCÊ VAI DOMINAR</h2>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium">
          Esqueça as teorias baratas. Aqui você aprende o que realmente funciona para escalar sua operação no Mercado Livre.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Zap className="w-8 h-8 text-ml-yellow" />,
            title: "Algoritmo Revelado",
            desc: "Entenda como o algoritmo do Mercado Livre funciona e como posicionar seus produtos na primeira página."
          },
          {
            icon: <BarChart3 className="w-8 h-8 text-ml-yellow" />,
            title: "Escala de Vendas",
            desc: "Aprenda a identificar produtos vencedores e como escalar sua operação sem perder a margem de lucro."
          },
          {
            icon: <ShieldCheck className="w-8 h-8 text-ml-yellow" />,
            title: "Blindagem de Conta",
            desc: "Como manter sua reputação sempre no verde e evitar suspensões que podem destruir seu negócio."
          },
          {
            icon: <Users className="w-8 h-8 text-ml-yellow" />,
            title: "Networking VIP",
            desc: "Acesso a um grupo exclusivo de vendedores que faturam alto e compartilham fornecedores."
          },
          {
            icon: <MessageSquare className="w-8 h-8 text-ml-yellow" />,
            title: "Suporte Individual",
            desc: "Tire suas dúvidas diretamente com quem já trilhou o caminho e conhece os atalhos."
          },
          {
            icon: <CheckCircle2 className="w-8 h-8 text-ml-yellow" />,
            title: "Checklist de Ouro",
            desc: "Passo a passo detalhado para cada etapa da sua jornada, do cadastro ao pós-venda."
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="bg-ml-blue w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              {item.icon}
            </div>
            <h3 className="text-xl font-black text-ml-blue mb-3">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-ml-yellow rounded-full blur-3xl opacity-20" />
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-ml-yellow">
             <img 
              src="https://vivendonainternet.com/eltinho.png" 
              alt="Eltinho" 
              className="w-full bg-ml-yellow/10"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-black text-ml-blue mb-6">QUEM É O ELTINHO?</h2>
          <div className="space-y-6 text-gray-600 font-medium text-lg leading-relaxed">
            <p>
              Com mais de 8 anos de experiência no Mercado Livre, Eltinho não é apenas um "professor", mas um vendedor ativo que gerencia múltiplas contas Platinum.
            </p>
            <p>
              Depois de faturar milhões e ajudar centenas de pessoas a saírem do zero, ele decidiu abrir sua caixa preta e revelar as estratégias que os grandes players usam para dominar o mercado.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Especialista em Full e Flex",
                "Consultor Certificado de Marketplaces",
                "Mentor de mais de 500 empreendedores",
                "Faturamento comprovado de 7 dígitos"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-ml-blue font-bold">
                  <CheckCircle2 className="text-ml-yellow w-6 h-6 fill-ml-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 bg-ml-blue relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-ml-yellow rounded-full blur-[120px] opacity-20 -mr-48 -mt-48" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-ml-light-blue rounded-full blur-[120px] opacity-20 -ml-48 -mb-48" />
    
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
        PRONTO PARA VIRAR O JOGO NO <span className="text-ml-yellow">MERCADO LIVRE?</span>
      </h2>
      <p className="text-xl text-white/80 mb-12 font-medium">
        As vagas para a mentoria são limitadas para garantir a qualidade do acompanhamento. Não perca a chance de aprender com quem faz na prática.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="bg-ml-yellow text-ml-blue px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform">
          QUERO MINHA VAGA AGORA
        </button>
        <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all">
          FALAR COM SUPORTE
        </button>
      </div>
      <p className="mt-8 text-white/50 text-sm font-bold flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4" /> COMPRA 100% SEGURA • ACESSO IMEDIATO
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-12">
        <div className="flex items-center gap-2">
          <ShoppingBag className="text-ml-yellow w-8 h-8" />
          <span className="font-extrabold text-2xl tracking-tight">ELTINHO <span className="font-light text-ml-yellow">MENTORIA</span></span>
        </div>
        <div className="flex gap-8 font-bold text-white/60">
          <a href="#" className="hover:text-ml-yellow transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-ml-yellow transition-colors">Privacidade</a>
          <a href="#" className="hover:text-ml-yellow transition-colors">Contato</a>
        </div>
      </div>
      <div className="text-center text-white/40 text-sm font-medium">
        <p>© {new Date().getFullYear()} Eltinho Mentoria. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs">Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-ml-yellow selection:text-ml-blue">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
