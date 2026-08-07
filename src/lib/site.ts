export const site = {
  name: "Uni Contabilidade Digital",
  tagline: "A contabilidade vai além dos números.",
  phone: "(27) 99272-3832",
  whatsapp:
    "https://wa.me/5527992723832?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Uni%20e%20quero%20falar%20com%20um%20especialista.",
  email: "financeiro@uniservicos.com",
  instagram: "https://www.instagram.com/uni_contabilidade",
  facebook: "https://www.facebook.com/brunoafonsoservicos",
  address:
    "Rua Moema, 25, Sala 1802, Ed. The Point — Divino Espírito Santo, Vila Velha - ES, 29107-250",
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Por que a Uni", href: "#por-que-a-uni" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export const stats = [
  { value: 200, suffix: "+", label: "empresas atendidas" },
  { value: 98, suffix: "%", label: "de clientes satisfeitos" },
  { value: 10, suffix: "+", label: "anos de experiência" },
  { value: 15, suffix: "min", label: "tempo médio de resposta" },
] as const;

export const services = [
  {
    icon: "rocket",
    title: "Abertura de empresa",
    description:
      "Do CNPJ ao alvará, cuidamos de todo o processo para você começar a operar rápido — MEI, ME, LTDA ou qualquer outro formato, sem dor de cabeça.",
    highlights: ["Análise do melhor regime", "Registro em todos os órgãos", "Acompanhamento completo"],
    featured: true,
  },
  {
    icon: "calculator",
    title: "Contabilidade mensal",
    description:
      "Balanços, guias, declarações e obrigações sempre em dia, com relatórios claros sobre a saúde financeira do seu negócio.",
    highlights: ["Obrigações em dia", "Relatórios mensais", "Balanços e demonstrativos"],
    featured: false,
  },
  {
    icon: "trending-down",
    title: "Planejamento tributário",
    description:
      "Estudo completo do seu enquadramento para pagar apenas o imposto necessário — dentro da lei, sem sustos.",
    highlights: ["Revisão de enquadramento", "Economia recorrente", "Simulação entre regimes"],
    featured: false,
  },
  {
    icon: "users",
    title: "Departamento pessoal",
    description:
      "Folha de pagamento, pró-labore, admissões, férias e eSocial gerenciados de ponta a ponta pela nossa equipe.",
    highlights: ["Folha e encargos", "eSocial sem pendências", "Admissões e férias"],
    featured: false,
  },
  {
    icon: "repeat",
    title: "Troca de contador",
    description:
      "Migre para a Uni sem burocracia: nós solicitamos os documentos ao contador anterior e assumimos tudo. Você não para nem um dia.",
    highlights: ["Migração assistida", "Zero interrupção", "Conferência de pendências"],
    featured: false,
  },
  {
    icon: "line-chart",
    title: "Consultoria financeira",
    description:
      "Vamos além dos números: apoio estratégico para precificação, fluxo de caixa e decisões de crescimento sustentável.",
    highlights: ["Visão de futuro", "Decisões com dados", "Fluxo de caixa claro"],
    featured: false,
  },
] as const;

export const steps = [
  {
    title: "Diagnóstico gratuito",
    description:
      "Você conversa com um especialista de verdade pelo WhatsApp, conta o momento do seu negócio e recebe uma análise inicial sem pagar nada.",
  },
  {
    title: "Proposta sob medida",
    description:
      "Nada de plano engessado: montamos um escopo com o que a sua empresa realmente precisa, com preço transparente.",
  },
  {
    title: "Migração sem fricção",
    description:
      "Abrindo empresa ou trocando de contador, a gente assume a burocracia inteira — documentos, órgãos e prazos.",
  },
  {
    title: "Rotina em dia",
    description:
      "Impostos, folha e obrigações sempre em ordem, com relatórios claros e um contador a uma mensagem de distância.",
  },
] as const;

export const differentials = [
  {
    icon: "message-circle",
    title: "Contador no WhatsApp",
    description:
      "Sem protocolo, sem fila de e-mail. Você fala direto com quem cuida da sua empresa e recebe resposta em minutos.",
  },
  {
    icon: "cpu",
    title: "Tecnologia + gente",
    description:
      "Automatizamos o repetitivo para dedicar tempo humano ao que importa: entender e orientar o seu negócio.",
  },
  {
    icon: "shield-check",
    title: "Compliance sem susto",
    description:
      "Monitoramos prazos e obrigações continuamente para você nunca ser pego de surpresa por multa ou pendência.",
  },
  {
    icon: "wallet",
    title: "Preço transparente",
    description:
      "Mensalidade justa e previsível, definida pelo escopo do serviço. Sem taxa escondida, sem surpresa no boleto.",
  },
] as const;

// Avaliações reais de clientes publicadas no Google (nota 5,0 — 53 avaliações)
export const testimonials = [
  {
    name: "Laura Capucho Moulin Nicoletti",
    role: "Avaliação no Google",
    quote:
      "Expresso minha sincera admiração pelo trabalho de vocês. Empresa competente, ética, atenciosa, resultado do profissionalismo, transparência e comprometimento com o serviço prestado. Recomendo!",
  },
  {
    name: "Wesley Marinho",
    role: "Avaliação no Google",
    quote:
      "A Uni Contabilidade é sempre um nível acima. Temos o Bruno como nosso contador do físico e jurídico, que sempre está ao nosso lado para evitar qualquer surpresa e sempre atento aos prazos.",
  },
  {
    name: "José Ricardo Rossi",
    role: "Avaliação no Google",
    quote:
      "Realmente posso dizer que são excelentes profissionais. Se preocupam com nossas empresas, buscando trazer soluções de forma simples e extrema qualidade. Obrigado, Uni Contabilidade Digital.",
  },
  {
    name: "Natan França",
    role: "Avaliação no Google",
    quote:
      "Atendimento muito bom, se preocupam em realmente fazer um bom trabalho e nos ajudar a encontrar a melhor solução. Se tivesse como colocar 10 estrelas, eu colocava!",
  },
  {
    name: "Cristiane",
    role: "Avaliação no Google",
    quote:
      "Minha experiência foi incrível, fui super bem atendida, profissional altamente qualificado.",
  },
  {
    name: "Cassio Capucho Peçanha",
    role: "Avaliação no Google",
    quote:
      "A Uni é excelente! Sempre apresenta as melhores alternativas para o problema. O atendimento online simplifica muito o dia a dia.",
  },
  {
    name: "Raquel de Oliveira Bonfim",
    role: "Avaliação no Google",
    quote:
      "Excelente comprometimento com cada cliente. Tratando com individualidade cada um.",
  },
  {
    name: "Hugo Capucho",
    role: "Avaliação no Google",
    quote: "Excelente atendimento, com qualidade e preço justo!",
  },
] as const;

export const faq = [
  {
    question: "Como funciona uma contabilidade digital?",
    answer:
      "Toda a troca de documentos, assinaturas e comunicação acontece online — pelo WhatsApp e por plataformas seguras. Você resolve tudo sem sair da sua empresa, com a mesma segurança jurídica de um escritório tradicional e muito mais agilidade.",
  },
  {
    question: "A Uni atende empresas de fora do Espírito Santo?",
    answer:
      "Sim! Por sermos 100% digitais, atendemos empresas de todo o Brasil. A legislação contábil é federal, e nossa equipe acompanha as particularidades estaduais e municipais de cada cliente.",
  },
  {
    question: "Quanto custa o serviço?",
    answer:
      "A mensalidade depende do porte, do regime tributário e do volume de movimentação da sua empresa. Por isso fazemos um diagnóstico gratuito antes de qualquer proposta — assim você paga pelo que realmente precisa.",
  },
  {
    question: "Trocar de contador dá trabalho?",
    answer:
      "Para você, não. Com uma procuração simples, nossa equipe solicita toda a documentação ao contador anterior, confere pendências e assume a rotina. Sua operação não para em nenhum momento.",
  },
  {
    question: "Quero abrir minha primeira empresa. Por onde começo?",
    answer:
      "Comece pelo diagnóstico gratuito: entendemos sua atividade, indicamos o formato ideal (MEI, ME, LTDA…) e o regime tributário mais econômico. Depois cuidamos de todo o registro para você.",
  },
  {
    question: "Vou ter suporte de um contador de verdade?",
    answer:
      "Sempre. Tecnologia aqui serve para agilizar processos, não para substituir atendimento. Quem responde suas dúvidas é um contador que conhece a sua empresa pelo nome.",
  },
] as const;
