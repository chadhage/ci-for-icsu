/* iCSU Smart CI - Conteúdo dos módulos de entrega de 30 minutos (Português do Brasil).
   Tradução de data.js. Estrutura idêntica a window.MODULES; correctIndex preservado.
   Carregado antes de i18n.js; exposto como window.MODULES_PT. */
window.MODULES_PT = {
"intro": {
  id: "intro",
  title: "Introdução à Melhoria Contínua",
  group: "Fundamentos",
  duration: "30 min",
  executiveSummary: "A Melhoria Contínua (MC) é a prática disciplinada de fazer pequenas mudanças baseadas em evidências em um sistema, em uma cadência repetível, de modo que capacidade, qualidade e velocidade se acumulem ao longo do tempo. Para os CSAs, é o modelo operacional que transforma a caça reativa a chamados em planejamento proativo de engajamento: observar o patrimônio Azure de um cliente, identificar a lacuna de maior impacto, executar um pequeno experimento (PDCA), medir o resultado e padronizar o que funcionou. A MC não é um projeto pontual — é o hábito que mantém revisões WAF, otimizações de custo, melhorias de confiabilidade e investimentos em capacitação se acumulando trimestre após trimestre.",
  whatYouGain: [
    "Compreender o ciclo PDCA e quando aplicá-lo a engajamentos com clientes",
    "Aprender a identificar a oportunidade de melhoria de maior impacto usando análise de Pareto e Ishikawa",
    "Medir a mudança e tomar decisões orientadas por dados sobre o que padronizar",
    "Reconhecer quando o treinamento é a intervenção correta em vez de executar um ciclo de MC",
    "Estruturar um modelo de engajamento contínuo em torno de uma cadência de MC de 6 semanas em vez de projetos pontuais"
  ],
  explanation: "<p>A <strong>Melhoria Contínua</strong> é um sistema de mudanças pequenas, deliberadas e medidas, com raízes no Sistema Toyota de Produção e formalizado por Deming. O motor canônico é o PDCA: <strong>Planejar</strong> (Plan) uma mudança voltada a uma lacuna específica, <strong>Executar</strong> (Do) em pequena escala, <strong>Verificar</strong> (Check) os dados, <strong>Agir</strong> (Act) padronizando ou descartando a mudança. A MC tem sucesso porque a linha de base de cada ciclo se torna o ponto de partida do ciclo seguinte, acumulando ganhos.</p><p>Os componentes-chave que fazem a MC funcionar são o <strong>Kaizen</strong> (preferência por muitas pequenas melhorias em vez de raras grandes melhorias), o <strong>trabalho padronizado</strong> (uma vez validada, uma mudança torna-se a nova linha de base), o <strong>Gemba</strong> (decisões tomadas onde o trabalho acontece, com dados reais) e o <strong>respeito pelas pessoas</strong> (as melhorias vêm da equipe que opera o sistema). Um CSA executando MC está conduzindo uma cadência que se repete, não entregando um projeto.</p><p>Quando a MC é a intervenção certa? Use-a quando o engajamento é contínuo, o cliente tem dados mensuráveis, a liderança financiará pequenos investimentos repetidos e o sistema é complexo o suficiente para que uma mudança radical seja arriscada. <strong>Não use a MC</strong> para incidentes de emergência reais (execute primeiro o comando de incidentes), prazos rígidos de conformidade (execute um projeto e depois mantenha com MC) ou workshops pontuais sem acompanhamento.</p><p>Uma distinção crítica: a MC pressupõe competência de base. Quando os dados mostram que os operadores não conseguem executar o trabalho padronizado, o <strong>treinamento é o pré-requisito</strong>, não um ciclo PDCA. Se o gráfico de controle mostra um processo totalmente fora dos limites de controle com formato estável, isso é um defeito de capacidade, não um defeito de processo. Capacite a equipe primeiro e depois aplique a MC sobre uma linha de base estável.</p>",
  csamExample: "<p>Um CSAM herda uma conta estratégica em que o modelo de engajamento anterior era apagar incêndios — aparecer quando os incidentes disparam, entregar uma apresentação de slides e seguir em frente. Após seis meses de esforço não estruturado, o volume de incidentes permanece inalterado e a conta corre risco de cancelamento. O CSAM redefine o engajamento em torno de uma cadência de MC de 6 semanas. Junto com o líder de plataforma do cliente, estabelecem a linha de base do volume de incidentes (312 Sev B/C por mês), executam um Pareto para identificar as 3 principais assinaturas e elaboram uma pequena hipótese para o primeiro ciclo (por exemplo, 'Adicionar um ponto de extremidade privado ao ACR reduzirá os incidentes de ImagePullBackOff'). Após medir e padronizar essa mudança, escolhem a próxima hipótese. Três ciclos depois, os incidentes caíram 54% e o cliente percebe valor de negócio mensurável. O modelo de engajamento do CSAM agora se acumula porque o resultado de cada ciclo é a linha de base do próximo.</p>",
  csaExample: "<p>Um CSA é designado para uma conta Tier-1 executando 40 microsserviços no AKS. Em vez de propor uma revisão abrangente de confiabilidade, o CSA enquadra o trabalho como uma cadência de MC: a cada 2 semanas, estabelecer a linha de base do Pareto de incidentes, escolher a principal assinatura, executar um experimento de 1 semana (por exemplo, adicionar redundância de zona a uma única carga de trabalho, habilitar limites de memória de pod, configurar o autoscale do CoreDNS), medir o resultado e padronizar em IaC. Após 6 meses, 14 mudanças direcionadas estão implementadas, o volume de incidentes caiu 68% e a equipe de SRE do cliente é dona da cadência. O CSA ainda revisa PRs e ajuda a elaborar hipóteses, mas o cliente conduz o ciclo de forma independente. O trabalho padronizado é versionado na organização GitHub do cliente; novos engenheiros se integram a partir dele, não a partir do coaching do CSA.</p>",
  recap: [
    "O PDCA é o ciclo central: Planejar uma pequena mudança, Executar em pequena escala, Verificar os dados, Agir padronizando ou descartando",
    "Os ganhos acumulados vêm de repetir o ciclo em uma cadência consistente — cada resultado torna-se a próxima linha de base",
    "Use Pareto, Ishikawa e 5 Porquês para identificar a lacuna de maior impacto antes de planejar a mudança",
    "A medição da linha de base é essencial — sem ela, a Verificação é opinião e a padronização é adivinhação",
    "A MC não é um projeto; é um modelo operacional. O sucesso é o cliente conduzindo o ciclo sem o CSA",
    "Quando os dados mostram que as pessoas não conseguem executar o trabalho padronizado, o treinamento é a intervenção, não um ciclo PDCA"
  ],
  questions: [
    {
      prompt: "O que significa PDCA?",
      options: ["Projeto de Processo, Avaliação de Capacidade.", "Planejar, Executar, Verificar, Agir.", "Priorizar, Desenvolver, Confirmar, Aprovar.", "Problema, Dados, Causa, Ação."],
      correctIndex: 1,
      explanation: "O <strong>PDCA</strong> é o ciclo de Deming: <strong>Planejar</strong> uma mudança em uma lacuna específica, <strong>Executar</strong> em pequena escala, <strong>Verificar</strong> os dados, <strong>Agir</strong> padronizando ou descartando. É o motor central da MC."
    },
    {
      prompt: "Qual é o objetivo principal da Melhoria Contínua?",
      options: ["Concluir um grande projeto de transformação por ano.", "Fazer pequenas mudanças baseadas em evidências em uma cadência repetível para que os ganhos se acumulem.", "Eliminar todos os problemas imediatamente ao descobri-los.", "Maximizar a utilização dos recursos de engenharia."],
      correctIndex: 1,
      explanation: "A MC alcança <strong>ganhos acumulados</strong> por meio de muitas mudanças pequenas, deliberadas e medidas — não de raras grandes mudanças. A linha de base de cada ciclo é o resultado do ciclo anterior."
    },
    {
      prompt: "Antes de poder executar a Verificação (Check) no PDCA, o que já deve existir?",
      options: ["Aprovação executiva e alocação de orçamento.", "Uma linha de base mensurável da fase de Planejamento.", "Uma lista de todas as causas possíveis do problema.", "Acordo sobre qual métrica otimizar."],
      correctIndex: 1,
      explanation: "Sem uma <strong>medição de linha de base</strong>, a fase de Verificação é opinião. Você precisa conhecer o estado atual com dados em que a equipe confie antes de aplicar uma mudança e medir a diferença."
    },
    {
      prompt: "Qual é o critério de saída do CSA para um engajamento de MC bem-sucedido?",
      options: ["O cliente concluiu três ciclos PDCA.", "Todas as recomendações da avaliação inicial foram implementadas.", "O cliente está conduzindo o ciclo sem o CSA.", "O cliente alcançou a maior melhoria possível."],
      correctIndex: 2,
      explanation: "Sucesso na MC significa que <strong>o cliente conduz a cadência de forma independente</strong>. O CSA orienta o ciclo; o sucesso é quando o cliente é dono dele e o CSA pode sair sem regressão."
    },
    {
      prompt: "Qual destes NÃO é um componente da Melhoria Contínua?",
      options: ["Trabalho padronizado que captura mudanças validadas.", "Uma transformação ou compra de ferramenta única.", "Caminhadas Gemba para observar o trabalho real.", "Respeito pelas pessoas que operam o sistema."],
      correctIndex: 1,
      explanation: "A MC <strong>não</strong> é uma transformação única, uma compra de ferramenta, uma certificação ou um modelo de slides. É uma cadência que se repete e produz ganhos duradouros por meio de mudanças pequenas e sistemáticas."
    }
  ]
}, "belts": {
  id: "belts",
  title: "Aprendizado, Faixas e Certificação",
  group: "Fundamentos",
  duration: "30 min",
  executiveSummary: "As certificações Lean e Six Sigma usam a metáfora das faixas das artes marciais — Branca, Amarela, Verde, Preta, Mestre Faixa Preta — para sinalizar a profundidade da capacidade de melhoria contínua, desde conhecer o vocabulário até projetar uma estratégia de MC para toda a organização. Para os CSAs, a escada de faixas é útil como roteiro pessoal de capacitação, como credencial reconhecida pelos clientes (especialmente em setores regulados) e como referencial de coaching para as equipes do cliente. O princípio-chave: trate cada faixa como a formalização de uma capacidade que você já deveria estar demonstrando em engajamentos reais — as credenciais seguem o trabalho, não o contrário.",
  whatYouGain: [
    "Compreender a escada de faixas, da Faixa Branca (vocabulário) à Mestre Faixa Preta (projeta a estratégia de MC)",
    "Saber qual faixa buscar em seguida com base na lacuna que você deve demonstrar, não na mais alta disponível",
    "Aprender a escolher o organismo certificador adequado (ASQ, IASSC, programas de consultoria) para sua base de clientes",
    "Ver como tratar o projeto de melhoria exigido como a própria credencial, não como um obstáculo ao trabalho real",
    "Usar a consciência das faixas para conduzir conversas com clientes e ajustar sua linguagem ao nível de expertise deles"
  ],
  explanation: "<p>A metáfora das faixas tem origem no Six Sigma, mas se aplica em todo o Lean, no STP e na prática de MC. Embora os padrões globais variem, os conceitos de nível são consistentes. A <strong>Faixa Branca</strong> (~8 horas) é a conscientização — compreender o vocabulário, reconhecer ferramentas (Pareto, Ishikawa, 5 Porquês, Kaizen), mas não executá-las. A <strong>Faixa Amarela</strong> (~20–40 horas) é o nível de praticante: participar de um evento Kaizen, executar 5 Porquês em um problema confirmado, contribuir para um Ishikawa. A <strong>Faixa Verde</strong> (~80–120 horas mais um projeto real) lidera projetos de melhoria de pequeno a médio porte de ponta a ponta, à vontade com DMAIC, estatística básica e mapeamento de processos.</p><p>A <strong>Faixa Preta</strong> (~160–200 horas mais vários projetos) lidera programas de melhoria multifuncionais com estatística profunda, pensamento lean avançado, gestão de mudanças e mentoria de Faixas Verdes. A <strong>Mestre Faixa Preta</strong> treina e certifica Faixas Pretas e projeta a estratégia de MC de uma organização. As escolhas de credencial importam: as faixas <strong>Lean</strong> enfatizam desperdício e fluxo; o <strong>Six Sigma</strong> enfatiza variação; o <strong>Lean Six Sigma</strong> é o currículo unificado que a maioria das empresas usa. O <strong>DMAIC</strong> melhora processos existentes; o <strong>DMADV / DFSS</strong> projeta novos.</p><p>Credenciais acreditadas (ASQ, IASSC) têm mais peso em setores regulados; faixas de consultoria costumam ser suficientes em tecnologia. O ponto de decisão crítico: <strong>não persiga faixas por elas mesmas</strong>. Um CSA com 5 faixas e nenhum resultado de engajamento validado é menos eficaz do que um com Faixa Verde e um histórico de vitórias mensuradas com clientes. Escolha a faixa que codifica a próxima capacidade de que você precisa — não a mais alta disponível.</p>",
  csamExample: "<p>Um CSAM atua no segmento de serviços financeiros, em que o Lean Six Sigma é uma expectativa básica. O CSAM conduziu muitas pequenas melhorias com clientes, mas não tem credenciais formais. Durante uma conversa de entrada com o escritório de programas de um banco da Fortune 500, perguntam-lhe: 'Que faixa você possui?'. O CSAM responde com honestidade: 'Não busquei certificação formal, mas liderei sete ciclos de melhoria mensurados com resultados como estes [mostra Pareto e variação de custo]. Pretendo buscar a Faixa Verde no 2º trimestre para formalizar essa capacidade.'. O banco valoriza a transparência e o trabalho demonstrado mais do que o distintivo; eles convidam o CSAM a projetar o engajamento. A Faixa Verde, quando obtida, torna-se evidência corroborativa do que o CSAM já comprovou em campo.</p>",
  csaExample: "<p>Um CSA que apoia um cliente da saúde vem usando Pareto e 5 Porquês de forma improvisada há 18 meses. Seu gestor sugere buscar uma Faixa Verde para formalizar o próximo nível — DMAIC, gráficos de controle, mapeamento de fluxo de valor. O CSA define um projeto real de cliente como seu trabalho de conclusão de Faixa Verde: um ciclo de 90 dias de otimização de Cosmos DB que reduziu o consumo de RU/s em 38% e economizou US$ 14 mil por mês. Eles escolhem a ASQ como organismo certificador (reconhecido na saúde), concluem o currículo de 100 horas ao longo de 12 semanas e apresentam o engajamento mensurado com o cliente como requisito de projeto. O CSA é aprovado; o cliente recebe melhorias validadas; a organização ganha mais um facilitador credenciado para programas corporativos de MC. Ao tratar a necessidade real do cliente como requisito de projeto, o CSA cria dois resultados a partir de um único engajamento.</p>",
  recap: [
    "A escada de faixas sinaliza a profundidade da capacidade de MC: Branca (vocabulário) até Mestre Faixa Preta (projeta a estratégia)",
    "Escolha a faixa que formaliza a próxima lacuna de capacidade que você deve demonstrar — não a mais alta disponível",
    "As credenciais de Faixa Verde e Preta exigem um projeto de melhoria real e mensurado; esse projeto é a credencial",
    "Escolha programas acreditados (ASQ, IASSC) para setores regulados; programas de consultoria são adequados em outros lugares",
    "Colecionar faixas sem resultados demonstrados com clientes é um passivo, não uma credencial",
    "Construa um mapa de faixas do lado do cliente para saber se está falando com uma Faixa Amarela, Verde ou Preta; ajuste a linguagem de acordo"
  ],
  questions: [
    {
      prompt: "O que a escada de faixas do Lean Six Sigma sinaliza principalmente sobre um praticante?",
      options: ["Anos de experiência como CSA na Microsoft.", "A profundidade da capacidade de melhoria contínua, de conhecer o vocabulário a liderar a estratégia de MC de toda a organização.", "Quantos engajamentos com clientes ele fechou no último trimestre.", "Sua avaliação interna de desempenho."],
      correctIndex: 1,
      explanation: "A escada de faixas é uma forma compartilhada de falar sobre <strong>quão profunda</strong> é a capacidade de MC — da Branca (vocabulário e conscientização) à Mestre Faixa Preta (projeta a estratégia de MC de uma organização). É um sinal de capacidade, não uma métrica de tempo de casa ou de desempenho."
    },
    {
      prompt: "Como um CSA deve decidir qual faixa buscar em seguida?",
      options: ["Sempre buscar a faixa mais alta que a organização financiar.", "Igualar a faixa que o líder de MC mais sênior do cliente possui.", "Escolher a faixa que formaliza a próxima lacuna de capacidade que ele deveria estar demonstrando em engajamentos reais.", "Buscar as faixas em ordem estrita, em uma cadência anual fixa, independentemente do trabalho."],
      correctIndex: 2,
      explanation: "A orientação é <strong>escolher a faixa que formaliza a próxima lacuna</strong> — não a mais alta disponível. Um CSA que nunca conduziu um Kaizen real deveria buscar a Amarela, não a Preta. As credenciais devem seguir o trabalho, não o contrário."
    },
    {
      prompt: "Para as certificações de Faixa Verde e Faixa Preta, qual é o &ldquo;ponto&rdquo; da certificação?",
      options: ["Ser aprovado no exame de múltipla escolha.", "Concluir as horas de treinamento em sala de aula exigidas.", "Entregar um projeto de melhoria real e mensurado — o projeto é a credencial e o exame é a formalidade.", "Ingressar na rede de ex-alunos do organismo certificador."],
      correctIndex: 2,
      explanation: "Os programas de Faixa Verde/Preta exigem um projeto de melhoria real com resultados mensurados. O conselho é escolher esse projeto a partir do <strong>trabalho real com o cliente</strong>, não de um caso artificial, para que o mesmo engajamento produza valor para o cliente e a credencial."
    },
    {
      prompt: "Qual é o antipadrão de &ldquo;colecionar faixas&rdquo; descrito no guia?",
      options: ["Possuir faixas de mais de um organismo de acreditação.", "Acumular faixas sem resultados de engajamento validados que as sustentem.", "Recertificar faixas todos os anos.", "Listar credenciais de faixa em manuais internos."],
      correctIndex: 1,
      explanation: "Um CSA com cinco faixas e nenhum resultado de engajamento validado é <strong>menos eficaz</strong> do que um com Faixa Verde e um histórico de vitórias mensuradas com clientes. A credencial é evidência corroborativa, não um substituto para o trabalho."
    },
    {
      prompt: "Como a Mestre Faixa Preta difere da Faixa Preta?",
      options: ["É o mesmo escopo, mas com um exame mais longo.", "É uma credencial exclusivamente de liderança, sem conteúdo técnico.", "Treina e certifica Faixas Pretas e projeta a estratégia de MC da organização — uma credencial de ensino tanto quanto de execução.", "É concedida automaticamente após cinco anos com Faixa Preta."],
      correctIndex: 2,
      explanation: "A Mestre Faixa Preta é rara e geralmente é detida pelo responsável por uma função de MC / excelência operacional. Ela <strong>treina e certifica Faixas Pretas</strong> e molda o design do programa de MC da organização."
    }
  ]
}, "ms-ci-cop": {
  id: "ms-ci-cop",
  title: "Melhoria Contínua na Microsoft",
  group: "Fundamentos",
  duration: "30 min",
  executiveSummary: "A Melhoria Contínua na Microsoft é o tecido conectivo entre a prática de CSA voltada ao cliente e os grupos de engenharia que constroem o Azure. Ela se manifesta como a Comunidade de Prática de MC do iCSU, os ciclos de feedback do WAF e do Advisor, os repositórios de playbooks de CSA e os rituais entre equipes que acumulam aprendizados por toda a organização. Para um CSA é tanto um recurso (capacitação, playbooks, pares) quanto uma responsabilidade (contribuir com os padrões que você valida, escalar problemas sistêmicos aos grupos de produto). Bem feita, a MC@MS transforma cada engajamento com o cliente tanto em um resultado para aquele cliente quanto em um ativo reutilizável para cada CSA que vier depois.",
  whatYouGain: [
    "Compreender como a MC@MS agrega aprendizados de milhares de CSAs e os realimenta aos grupos de produto do Azure",
    "Aprender a consumir playbooks existentes (WAF, Biblioteca de Playbooks de CSA, Azure Advisor) em vez de reinventar padrões de engajamento",
    "Saber como contribuir com padrões validados de volta à comunidade e vê-los se acumular por toda a organização",
    "Ver como o sinal de campo (Paretos de incidentes entre contas, bloqueadores de ACR) impulsiona melhorias em nível de produto",
    "Reconhecer o cenário de acreditação de faixas na Microsoft e escolher a ASQ como padrão para a certificação Lean Six Sigma"
  ],
  explanation: "<p>A MC@MS existe para resolver um problema de escala: um único CSA é dono de um punhado de contas, mas a Microsoft tem milhares de CSAs e dezenas de milhares de clientes. Sem uma prática de MC que agregue aprendizados, cada CSA redescobre os mesmos padrões, cada cliente revive os mesmos incidentes e os grupos de produto não ouvem o sinal com clareza suficiente para corrigir as causas-raiz. A MC@MS é o ciclo de feedback que transforma observações de campo em melhorias de produto.</p><p>O que distingue as estruturas da MC@MS é que elas são <strong>medidas, versionadas, com responsável e reutilizáveis</strong>. Cada padrão publicado carrega a evidência de que funcionou. Os playbooks evoluem ciclo a ciclo; versões antigas são depreciadas, não excluídas. Cada playbook tem um mantenedor nomeado e uma cadência de atualização. Os padrões são escritos para que o próximo CSA os aplique, não como anedotas. As principais superfícies incluem a Comunidade de Prática de MC do iCSU, o referencial de avaliação WAF, o Azure Advisor e o Defender for Cloud como linhas de base por conta, playbooks versionados de CSA / CSE / FastTrack, o currículo do MS Learn e canais estruturados de escalonamento do campo para o PG (bloqueadores de ACR, análise de assinaturas no ICM).</p><p>O ritmo de participação na comunidade é simples: consumir playbooks existentes antes de projetar um novo engajamento; executar PDCA em trabalho real com o cliente; documentar resultados mensurados; levar padrões à reunião mensal da CoP; deixar os pares revisarem e criticarem; mesclar padrões validados nas bibliotecas compartilhadas. Os CSAs tanto consomem quanto contribuem. Pular qualquer um dos lados quebra o ciclo. Quando a mesma causa-raiz aparece em mais de 3 contas, isso é uma conversa com o PG, não uma solução de contorno de um CSA. Use os canais de bloqueador de ACR ou de assinatura no ICM para escalar sinais sistêmicos de modo que a engenharia possa priorizar correções.</p>",
  csamExample: "<p>Um CSAM está preparando uma EBR para uma conta estratégica Tier-1 e quer estabelecer a linha de base da postura de confiabilidade e custo do cliente. Em vez de começar do zero, o CSAM consulta os recursos da MC@MS: o playbook de Confiabilidade do WAF (avaliação padrão, pontuação padronizada, estrutura comprovada de backlog de remediação), o painel de Pareto de incidentes entre contas (mostra se as assinaturas de incidentes desta conta correspondem aos padrões do setor) e o modelo de exportação do Azure Advisor (extração rápida de dados). O tempo de montagem cai de 2 dias para 3 horas. O readout é revisado por pares contra o trabalho padronizado de EBR da CoP antes da entrega. O CSAM então estrutura o engajamento de acompanhamento como um ciclo de MC de 6 semanas — escolher o principal achado de confiabilidade, executar uma pequena mudança, medir o resultado e padronizar na IaC do cliente. Após três ciclos, o cliente tem ganhos de confiabilidade mensuráveis e percebe valor acumulado.</p>",
  csaExample: "<p>Um CSA que conduz engajamentos de AKS percebe que as chaves de partição hierárquicas (HPK) do Cosmos DB reduzem o consumo de RU/s em 35–40% em três de suas contas. Em vez de manter o padrão como playbook pessoal, ele o documenta no Repositório de Design Azure do cliente com métricas de antes e depois, faz uma palestra-relâmpago de 5 minutos na reunião mensal da CoP e o submete à revisão por pares. Dois CSAs especialistas em Cosmos dão feedback; uma rodada de revisões; o padrão é mesclado ao playbook de CSA de Dados com um módulo IaC versionado. Seis meses depois, outros 6 CSAs aplicaram o mesmo padrão em suas contas. O experimento validado de um único CSA tornou-se trabalho padronizado que agora se acumula por toda a organização. Quando o CSA escala um problema sistêmico — 'contêineres Cosmos criados sem caminhos de partição indexados em 8 contas' — a evidência agregada vai para o grupo de produto; a experiência do portal é atualizada com um recomendador de indexação.</p>",
  recap: [
    "A MC@MS é o tecido conectivo entre os aprendizados de campo e as prioridades dos grupos de produto — transforma a observação de um CSA em melhoria para toda a organização",
    "Cada CSA consome playbooks existentes (WAF, Biblioteca de Playbooks de CSA, orientação do Advisor) antes de iniciar um novo engajamento",
    "Contribua com padrões validados de volta à CoP; deixe os pares revisarem; mescle nas bibliotecas compartilhadas; veja-os se acumular entre milhares de CSAs",
    "Quando a mesma causa-raiz aparece em mais de 3 contas, escale como sinal de campo (bloqueador de ACR ou assinatura no ICM) aos grupos de produto, não como solução de contorno de CSA",
    "A ASQ é o organismo de credenciamento de faixas padrão na Microsoft; o progresso nas faixas é acompanhado junto com a conclusão de projetos e a mentoria",
    "A própria MC@MS funciona com MC: os playbooks são versionados e atualizados a cada ciclo; padrões antigos são depreciados à medida que o Azure evolui"
  ],
  questions: [
    {
      prompt: "Qual é o objetivo principal da Melhoria Contínua na Microsoft (MC@MS)?",
      options: ["Substituir planos de engajamento específicos do cliente por um único modelo corporativo.", "Agregar aprendizados entre CSAs e fornecer um ciclo de feedback orientado por dados do campo para os grupos de produto.", "Certificar CSAs nos serviços do Azure.", "Fornecer um sistema centralizado de controle de horas para a prática de CSA."],
      correctIndex: 1,
      explanation: "A MC@MS é o tecido conectivo entre o campo e a engenharia. Ela <strong>agrega padrões</strong> para que o PG possa priorizar correções, codifica padrões de engajamento validados em playbooks compartilhados e transforma a observação de um CSA em melhoria em nível de produto."
    },
    {
      prompt: "O que distingue um playbook da MC@MS de um genérico &ldquo;wiki interno de dicas&rdquo;?",
      options: ["Os playbooks só são acessíveis a CSAs sêniores.", "Os playbooks são gerados automaticamente a partir da telemetria do Azure.", "Os playbooks são medidos, versionados, de propriedade de um mantenedor nomeado com cadência de atualização e escritos para serem reutilizáveis.", "Os playbooks são escritos exclusivamente pelos grupos de produto."],
      correctIndex: 2,
      explanation: "Cada padrão publicado carrega a <strong>evidência de que funcionou</strong>, evolui ciclo a ciclo, tem um responsável nomeado e é escrito para que o próximo CSA o aplique — não como anedota."
    },
    {
      prompt: "Um CSA identifica a mesma limitação de produto surgindo em três ou mais de suas contas. O que a MC@MS recomenda que ele faça?",
      options: ["Criar uma solução de contorno privada por conta e seguir em frente.", "Esperar até a próxima revisão trimestral para mencioná-la.", "Agregar a evidência como um Pareto entre contas e escalar pelo canal de bloqueador de ACR ou de assinatura no ICM para o PG.", "Abrir um incidente Sev A em cada assinatura afetada."],
      correctIndex: 2,
      explanation: "Quando a mesma causa-raiz aparece em várias contas, isso é uma <strong>conversa com o PG, não uma solução de contorno de CSA</strong>. Os canais de sinal do campo para o PG (rastreador de bloqueadores de ACR, análise de assinaturas no ICM) existem para transformar a evidência agregada em MC em nível de produto."
    },
    {
      prompt: "Qual organismo de credenciamento o programa Lean Six Sigma da Microsoft acompanha para o progresso de faixas?",
      options: ["IASSC (International Association for Six Sigma Certification).", "CSSC (Council for Six Sigma Certification).", "ASQ (American Society for Quality).", "Shingo Institute."],
      correctIndex: 2,
      explanation: "O programa Lean Six Sigma da Microsoft acompanha o <strong>progresso da certificação ASQ</strong> junto com a conclusão de projetos e a mentoria. A ASQ é o padrão ao definir uma faixa, embora outras organizações da Microsoft também possam aceitar IASSC ou CSSC — confirme com seu parceiro de RH antes de assumir o compromisso."
    },
    {
      prompt: "Qual é o antipadrão do &ldquo;gênio solitário&rdquo; na MC@MS?",
      options: ["Um CSA que escala todo problema diretamente ao PG sem tentar resolvê-lo primeiro.", "Um CSA que apenas consome playbooks, mas nunca contribui de volta.", "Um CSA que valida muitos padrões em suas contas, mas nunca os publica — forçando cada outro CSA a redescobrir as mesmas lições.", "Um CSA que trabalha sem um gestor ou revisor par."],
      correctIndex: 2,
      explanation: "A MC@MS é uma prática de muitos para muitos. O CSA gênio solitário valida 30 padrões e nunca os publica — <strong>a organização paga o custo de cada outro CSA redescobri-los</strong>. A contribuição é o preço de entrada para que o ciclo se acumule."
    }
  ]
},
"data-types": {
  id: "data-types",
  title: "Entendendo os Dados na MC",
  group: "Fundamentos",
  duration: "30 min",
  executiveSummary: "A Melhoria Contínua funciona com dados, mas nem todos os dados são do mesmo tipo — e usar o tipo errado produz decisões confiantes e equivocadas. Este módulo dá aos CSAs um vocabulário prático para quatro distinções de dados que aparecem em todo engajamento: empíricos vs. teóricos (realidade medida vs. expectativa modelada), qualitativos vs. quantitativos (descritivos vs. numéricos), contínuos vs. discretos (medidos em um contínuo vs. contados) e diretos vs. circunstanciais (evidência da própria coisa vs. um indicador correlacionado). Saber qual tipo de dado você tem indica qual ferramenta estatística é válida, que tamanho de amostra você precisa e quanto peso um achado pode suportar. A disciplina central: ancore toda decisão de MC em medição empírica e direta da métrica que importa, e trate modelos, indicadores e percepções como insumos que apontam o caminho — não como prova.",
  whatYouGain: [
    "Distinguir dados empíricos (medidos) de teóricos (modelados) e saber quando confiar em cada um",
    "Diferenciar dados quantitativos de qualitativos e transformar sinais qualitativos em algo mensurável",
    "Classificar dados como contínuos ou discretos e escolher o gráfico de controle e o tamanho de amostra adequados",
    "Separar evidência direta de um problema de indicadores circunstanciais e evitar a armadilha de tomar correlação por causalidade",
    "Escolher o tipo de dado certo para um CTQ para que sua linha de base, análise e fase de Controle permaneçam estatisticamente válidas"
  ],
  explanation: "<p>A Melhoria Contínua é tão boa quanto os dados que a alimentam. A armadilha não é a falta de dados — é usar o <strong>tipo errado</strong> de dado com a ferramenta errada e chegar a uma conclusão confiante, porém equivocada. Toda medição carrega quatro atributos ao mesmo tempo, e nomeá-los mantém sua análise honesta.</p><p><strong>Empírico vs. teórico.</strong> Dado empírico é obtido por observação, medição ou experimento — os valores reais que o sistema real produziu (quatro semanas de latência P95 registrada, a contagem real de incidentes no mês passado). Dado teórico é produzido por um modelo, suposição ou cálculo de primeiros princípios — os valores que um sistema <em>deveria</em> produzir (a latência prevista por um modelo de filas, uma estimativa de DPMO da curva normal, uma previsão de renovação). A teoria é valiosíssima para o planejamento, mas na MC você <strong>valida a teoria contra os empíricos</strong> e nunca padroniza uma mudança apenas com base em um modelo.</p><p><strong>Qualitativo vs. quantitativo.</strong> Dado quantitativo é numérico e mensurável (latência em ms, RU/s, custo, contagens) e suporta análise estatística. Dado qualitativo é descritivo ou categórico (transcrições de VOC, categorias de incidentes, temas de causa-raiz, percepção). O qualitativo não é de segunda classe: você o <strong>codifica em categorias nominais ou ordinais e o conta</strong>, transformando percepção em um Pareto de temas. Os dois funcionam juntos — o dado qualitativo diz <em>o que</em> medir; o quantitativo diz <em>quanto</em>.</p><p><strong>Contínuo vs. discreto.</strong> Dado contínuo pode assumir qualquer valor em um contínuo (latência, % de CPU, custo, temperatura) e é infinitamente divisível. Dado discreto é contado em unidades inteiras (número de incidentes, implantações com falha, defeitos por release) — você não pode ter 2,5 implantações com falha. A distinção é prática: dados contínuos usam gráficos I-MR ou X-barra/R e detectam uma mudança com relativamente poucas amostras; dados <strong>de atributo</strong> discretos usam gráficos p, np, c ou u e precisam de uma amostra muito maior para detectar a mesma mudança, porque cada resultado passa/falha carrega menos informação do que uma medição.</p><p><strong>Direto vs. circunstancial.</strong> Dado direto mede a própria métrica de interesse (a latência P95 real quando a latência é o CTQ). Dado circunstancial — indireto — mede um indicador correlacionado a partir do qual você raciocina (% de CPU, volume de chamados de suporte, logins no portal). A evidência circunstancial é excelente para formar hipóteses e triar onde olhar, mas uma correlação não é prova: <strong>correlação não é causalidade</strong>. Reúna a medição direta do CTQ antes de tratar uma causa como confirmada ou de padronizar uma correção.</p><p>Uma única métrica carrega todos os quatro atributos simultaneamente. 'Latência P95 medida em ms' é empírica, quantitativa, contínua e direta — tão confiável quanto um dado pode ser. 'Doze incidentes Sev-B marcados como rede neste trimestre' é empírico, a contagem é quantitativa e discreta, a marcação é qualitativa, e usar a contagem de incidentes para julgar confiabilidade é em parte circunstancial. Nomear os atributos diz exatamente quanto aquele número pode ser solicitado a provar.</p>",
  csamExample: "<p>Um CSAM está preparando uma EBR para uma conta estratégica e tem quatro insumos muito diferentes sobre a mesa: um tema qualitativo de VOC ('a equipe de plataforma sente que as implantações são arriscadas'), uma tendência quantitativa de consumo (gasto com AKS e ACR), um sinal circunstancial (logins no portal caíram 20% no mês passado) e uma previsão teórica de renovação projetando 12% de crescimento. Um readout mais fraco reagiria à previsão ou à queda de logins isoladamente. Em vez disso, o CSAM se ancora em dados <strong>empíricos e diretos</strong> — extrai o consumo real e o histórico de incidentes — e codifica as transcrições de VOC em categorias para que a preocupação dominante (confiança nas implantações) se torne um tema contado e quantificado em vez de uma anedota. A previsão é apresentada como um modelo a ser testado sob pressão, não como fato; a queda de logins é sinalizada como hipótese a investigar, não como conclusão. A conversa de renovação convence porque se apoia em realidade medida, e o único tema qualitativo que importava torna-se um CTQ mensurável para o próximo ciclo de MC.</p>",
  csaExample: "<p>Um CSA em um engajamento de confiabilidade de AKS ouve o cliente afirmar: 'Picos de CPU estão causando nossas violações de SLO de latência', apontando para um gráfico em que CPU e latência sobem juntas. A CPU é <strong>circunstancial</strong> — um indicador, não o CTQ. O CSA reúne dados <strong>diretos e empíricos</strong>: os percentis reais de latência P95/P99 (contínuos) e a contagem de releases que violam o SLO (discreta). Como a latência é contínua, um gráfico I-MR / X-barra-R com ~20–25 subgrupos basta para enxergar o padrão; como o resultado da implantação é dado de atributo, o CSA sabe que um gráfico p precisaria de uma amostra muito maior para confirmar uma mudança real. O gráfico de controle de latência mostra que as violações se agrupam após cold starts de scale-in — sem relação alguma com a CPU. O CSA rejeita a suposição teórica, corrige a causa real (warm pool / contagem mínima de réplicas) e padroniza em IaC. Tratar a correlação com a CPU como prova teria levado a equipe pelo caminho totalmente errado.</p>",
  recap: [
    "Toda métrica carrega quatro atributos ao mesmo tempo — empírico/teórico, qualitativo/quantitativo, contínuo/discreto, direto/circunstancial — nomeie-os para manter a análise honesta",
    "Dados empíricos (medidos) validam expectativas teóricas (modeladas); nunca padronize uma mudança apenas com base em um modelo",
    "Sinal qualitativo não é de segunda classe — codifique-o em categorias e conte-o para que a VOC impulsione um CTQ mensurável",
    "Dados contínuos usam gráficos I-MR / X-barra-R e precisam de menos amostras; dados de atributo discretos usam gráficos p/c/u e precisam de amostras muito maiores",
    "A medição direta do CTQ é prova; indicadores circunstanciais (CPU, chamados, logins) formam hipóteses — correlação não é causalidade",
    "Escolha o tipo de dado deliberadamente em Definir/Medir para que sua linha de base, gráfico e fase de Controle permaneçam estatisticamente válidos"
  ],
  questions: [
    {
      prompt: "Um CSA extrai quatro semanas de leituras reais de latência P95 do Azure Monitor para estabelecer a linha de base de um processo. Que tipo de dado é esse?",
      options: ["Teórico, porque percentis são estimativas estatísticas.", "Empírico, porque é medição observada do sistema real.", "Qualitativo, porque a latência descreve a experiência do usuário.", "Circunstancial, porque a latência é apenas um indicador de confiabilidade."],
      correctIndex: 1,
      explanation: "Dado <strong>empírico</strong> é obtido por observação ou medição do mundo real. Leituras reais de latência registradas são empíricas; um modelo que <em>prevê</em> latência seria teórico. Mesmo que um percentil seja um resumo calculado, ele é calculado a partir de medições observadas, então o dado é empírico."
    },
    {
      prompt: "Qual destas métricas é dado discreto (de atributo) em vez de contínuo?",
      options: ["Latência média de requisição em milissegundos.", "Percentual de utilização de CPU.", "O número de implantações com falha por release.", "Gasto mensal com Azure em dólares."],
      correctIndex: 2,
      explanation: "Dado discreto é contado em unidades inteiras — você não pode ter 2,5 implantações com falha. Latência, % de CPU e custo são <strong>contínuos</strong> (qualquer valor em um contínuo). A distinção orienta a escolha do gráfico: contagens usam gráficos p/c/u, enquanto valores contínuos usam I-MR ou X-barra/R."
    },
    {
      prompt: "As entrevistas de VOC de um cliente produzem dezenas de comentários em texto livre sobre a dor das implantações. Qual é a melhor forma de tornar esse dado qualitativo utilizável em uma linha de base de MC?",
      options: ["Descartá-lo, porque só dados numéricos pertencem a uma linha de base.", "Tratar cada comentário individual como sua própria causa-raiz separada.", "Codificar os comentários em categorias e contá-los para que o tema dominante possa ser quantificado.", "Encaminhá-lo ao grupo de produto sem análise adicional."],
      correctIndex: 2,
      explanation: "Dado qualitativo torna-se acionável quando é <strong>codificado em categorias e contado</strong> — transformando percepção em um Pareto de temas. O sinal qualitativo diz o que medir; quantificá-lo permite que ele impulsione um CTQ mensurável em vez de permanecer uma anedota."
    },
    {
      prompt: "Uma equipe afirma que picos de CPU são a causa-raiz das violações de latência, citando um gráfico em que CPU e latência sobem juntas. Antes de padronizar uma correção, o que um CSA deve fazer?",
      options: ["Aceitar — duas linhas correlacionadas em um gráfico são prova suficiente de causalidade.", "Reunir a medição direta do CTQ de latência para testar a hipótese, já que a CPU é evidência circunstancial.", "Aumentar os limites de CPU imediatamente e encerrar a investigação.", "Substituir as medições por um modelo teórico de filas."],
      correctIndex: 1,
      explanation: "A CPU é um indicador <strong>circunstancial</strong> (indireto), e uma correlação é uma hipótese, não uma prova. A medição direta da métrica que importa — o CTQ de latência — é necessária antes de tratar uma causa como confirmada. Correlação não é causalidade."
    },
    {
      prompt: "Por que dados de atributo (discretos) geralmente exigem uma amostra muito maior do que dados contínuos para detectar a mesma mudança de processo?",
      options: ["Porque dados de atributo não podem ser plotados em um gráfico de controle.", "Porque cada medição contínua carrega mais informação do que um único resultado passa/falha.", "Porque dados discretos são sempre teóricos em vez de empíricos.", "Porque dados contínuos são inerentemente qualitativos."],
      correctIndex: 1,
      explanation: "Cada medição contínua transmite mais informação do que um único resultado discreto passa/falha, então dados contínuos detectam uma mudança com menos amostras. Dados de atributo/contagem (proporção de defeituosos, contagens de defeitos) precisam de amostras substancialmente maiores para sensibilidade equivalente — uma consideração importante de tamanho de amostra ao escolher uma métrica."
    }
  ]
},
"convergent-divergent": {
  id: "convergent-divergent",
  title: "Pensamento Convergente vs Divergente",
  group: "Fundamentos",
  duration: "30 min",
  executiveSummary: "A Melhoria Contínua depende de dois modos de pensamento opostos usados na ordem certa: o pensamento divergente abre um problema gerando muitas causas, hipóteses e soluções possíveis, e o pensamento convergente o fecha usando evidências para selecionar a mais bem fundamentada. Um motivo frequente de fracasso dos ciclos de MC é colapsar esses dois modos em um só — saltar para uma conclusão antes de concluir a busca divergente e os dados. Quando uma equipe se fixa na primeira causa plausível, pode corrigir a coisa errada, o problema retorna e o ciclo é gasto sem um resultado em que alguém confie. Um limite importa: esta disciplina governa o trabalho de melhoria, não emergências ativas — quando a casa está em chamas, apague o fogo primeiro e procure a causa-raiz depois. Este módulo dá aos CSAs a disciplina de separar divergir de convergir, reconhecer os vieses por trás da convergência prematura e usar ferramentas de MC e tollgates para confirmar a evidência antes do compromisso.",
  whatYouGain: [
    "Definir pensamento divergente e convergente e saber quais atividades de MC pertencem a cada modo",
    "Separar a geração de ideias da avaliação no tempo para que boas opções não sejam descartadas cedo demais",
    "Reconhecer os vieses — ancoragem, confirmação, disponibilidade — que fazem as equipes saltarem para conclusões",
    "Rastrear como a convergência prematura produz ciclos de MC fracassados, problemas recorrentes e perda de credibilidade",
    "Usar Ishikawa, Pareto, 5 Porquês, tollgates do DMAIC e A3 para impor um ritmo deliberado de divergir-depois-convergir"
  ],
  explanation: "<p>Toda melhoria exige dois modos cognitivos opostos. O <strong>pensamento divergente</strong> é gerativo: você amplia deliberadamente o campo, produzindo muitas causas, hipóteses e soluções candidatas sem ainda julgá-las — um Ishikawa completo nos 6 Ms, um brainstorm sem filtros de contramedidas, várias explicações concorrentes para um defeito. O <strong>pensamento convergente</strong> é redutivo: você aplica dados, critérios e julgamento para estreitar esse campo até a resposta mais bem fundamentada — classificar causas com um Pareto, confirmar uma causa-raiz com 5 Porquês e medição direta, escolher uma contramedida por impacto e esforço. A boa MC precisa dos dois, e precisa deles <em>em sequência</em>.</p><p>Um erro comum é a <strong>convergência prematura</strong> — colapsar os dois modos em um, agarrando-se à primeira resposta plausível. Pode parecer eficiente ('é obviamente o banco de dados'), mas pula a busca divergente, de modo que a causa real talvez nunca venha à tona. Três vieses a impulsionam: <strong>ancoragem</strong> (a primeira ideia domina tudo o que segue), <strong>viés de confirmação</strong> (você então reúne apenas os dados que a apoiam, sentindo-se orientado por dados enquanto vê só parte do quadro) e a <strong>heurística da disponibilidade</strong> (a causa que você viu mais recentemente parece mais provável). O comportamento solução-primeiro — agir antes de a causa ser compreendida — é o mesmo erro um passo adiante: convergir para uma correção antes de ter convergido para uma causa.</p><p>Por que isso prejudica um ciclo de MC? Um ciclo PDCA ou DMAIC é tão bom quanto a causa que ele ataca. Convirja prematuramente e você executa o ciclo inteiro — planejar, construir, implantar, medir — contra a causa-raiz errada. A melhoria não mostra efeito ou regride, o problema reaparece e você gastou o tempo e o orçamento de um ciclo sem um resultado em que confie. Cada ciclo fracassado também corrói a confiança das partes interessadas que financia o próximo, então o custo é maior do que uma única tentativa desperdiçada. 'Ir devagar para ir rápido' se aplica aqui: uma passagem divergente deliberada geralmente custa menos do que um ciclo fracassado e a recorrência que se segue.</p><p>Um limite fica acima desta disciplina: ela governa a melhoria, não incidentes ativos. Quando a casa está em chamas — uma indisponibilidade ao vivo, um incidente com cliente fora do ar, um evento de segurança — o primeiro trabalho é apagar o fogo. Estabilize o sistema e restaure o serviço pelo comando de incidentes; este não é o momento de executar um Ishikawa ou debater a causa-raiz enquanto clientes são afetados. A análise divergir-depois-convergir vem depois, no post-mortem, onde você procura a causa-raiz e melhora o estado atual para que o mesmo incêndio seja menos provável de recomeçar. Reagir de imediato a uma emergência não é saltar para conclusões — a convergência prematura é um risco quando você está escolhendo o que melhorar, não quando está contendo o dano. Decidir em qual situação você está é a primeira decisão: conter primeiro, depois melhorar.</p><p>Os métodos de MC são construídos para impor a disciplina. <strong>Ishikawa</strong> e brainstorming são explicitamente divergentes — capture toda causa plausível antes de julgar qualquer uma. <strong>Pareto, 5 Porquês e teste de hipóteses</strong> são convergentes — use dados para eliminar candidatas até os poucos vitais. Os <strong>tollgates do DMAIC</strong> existem precisamente para bloquear a convergência prematura: você não pode sair de Analisar sem evidência para a causa-raiz. O <strong>A3</strong> estrutura uma passagem divergir-depois-convergir em uma página, e o <em>Duplo Diamante</em> do mundo do design nomeia a mesma alternância — divergir para explorar o problema, convergir para defini-lo, divergir para explorar soluções, convergir para entregar uma. O fio condutor se conecta à literacia de dados: divirja amplamente por sinais qualitativos e circunstanciais, mas convirja apenas em prova <strong>direta e empírica</strong> antes de se comprometer.</p>",
  csamExample: "<p>Uma renovação está vacilando e o primeiro instinto da equipe de conta é unânime: 'O cliente acha que somos caros demais — vamos oferecer um desconto.' Isso é convergência prematura. Em vez disso, o CSAM força uma passagem divergente sobre os fatores de cancelamento: temas de VOC de revisões recentes, a tendência de uso do produto, a percepção do suporte, a saúde do relacionamento executivo, o atrito na integração e a atividade da concorrência — tudo vai para o quadro antes de qualquer um ser julgado. Só então a equipe converge — usando dados — e a evidência aponta não para preço, mas para uma integração travada que deixou duas unidades de negócio nunca ativadas. Um desconto teria queimado margem e ainda assim perdido a renovação, porque respondia a uma causa que não era real. Ao separar gerar de avaliar, o CSAM gasta o ciclo corrigindo a ativação, a retenção se recupera e o próximo QBR se baseia em uma causa que os dados de fato sustentam.</p>",
  csaExample: "<p>Durante a fase Analisar de um DMAIC de confiabilidade, um SRE do cliente reage a um único pico de latência com 'É o banco de dados — vamos reindexar.' O CSA mantém a equipe primeiro no modo divergente, construindo um Ishikawa nos 6 Ms: cold starts de scale-in do AKS, throttling de RU do Cosmos, resolução de DNS, egresso de rede, tempestades de retry do lado do cliente e pausas de GC tornam-se todas causas candidatas. A equipe então converge com dados diretos e empíricos — correlacionando o gráfico de controle de latência com eventos de deploy e de escala — e descobre que as violações se agrupam após cold starts de scale-in, sem o banco de dados nunca ser implicado. Se tivessem saltado para a conclusão do banco de dados, teriam executado um ciclo inteiro reindexando um banco de dados saudável: sem melhoria, os picos reaparecem e a equipe de SRE perde a confiança no processo de MC. A passagem disciplinada de divergir-depois-convergir custou um dia extra e evitou um ciclo fracassado.</p>",
  recap: [
    "O pensamento divergente gera opções sem julgar; o pensamento convergente as estreita com evidências — use ambos, nessa ordem",
    "A convergência prematura (saltar para conclusões) é uma das principais causas de ciclos de MC fracassados: você corrige a coisa errada e o problema reaparece",
    "Quando a casa está em chamas, reaja primeiro: contenha o incidente e restaure o serviço, depois execute a análise divergir-depois-convergir para achar a causa-raiz e evitar repetições",
    "Nomeie os vieses por trás disso — ancoragem, viés de confirmação e a heurística da disponibilidade — para poder pegá-los na sala",
    "Um ciclo fracassado custa mais do que o trabalho desperdiçado: ele corrói a confiança das partes interessadas que financia o próximo ciclo",
    "As ferramentas de MC impõem o ritmo: Ishikawa e brainstorming divergem; Pareto, 5 Porquês e teste de hipóteses convergem; os tollgates do DMAIC controlam a passagem",
    "Divirja por todos os sinais, mas convirja apenas em prova direta e empírica da causa-raiz antes de comprometer uma contramedida"
  ],
  questions: [
    {
      prompt: "O que melhor descreve o pensamento divergente em um contexto de melhoria contínua?",
      options: ["Estreitar uma lista de causas até a única mais provável usando dados.", "Gerar uma ampla gama de causas, hipóteses ou soluções possíveis sem ainda julgá-las.", "Implementar a primeira solução razoável o mais rápido possível.", "Selecionar a contramedida com a melhor razão impacto/esforço."],
      correctIndex: 1,
      explanation: "O pensamento divergente é o modo <strong>gerativo</strong> — lance uma rede ampla (por exemplo, um Ishikawa completo nos 6 Ms) e adie o julgamento. Estreitar com dados é pensamento convergente; os dois funcionam melhor quando separados no tempo."
    },
    {
      prompt: "Por que saltar para conclusões (convergência prematura) é tão perigoso em um ciclo de MC?",
      options: ["Faz as sessões de brainstorming durarem mais do que o previsto.", "Compromete a equipe com uma causa ou solução antes de a evidência confirmá-la, então o ciclo muitas vezes corrige a coisa errada e o problema reaparece.", "Sempre viola o termo de abertura do projeto.", "Produz soluções candidatas demais para avaliar."],
      correctIndex: 1,
      explanation: "Convergir antes de concluir a busca divergente e a validação de dados significa agir sobre um palpite não verificado. A melhoria fracassa ou regride, o problema retorna e a confiança das partes interessadas que financia ciclos futuros se corrói."
    },
    {
      prompt: "Durante o Analisar do DMAIC, um engenheiro declara após um único pico de latência: 'É obviamente o banco de dados.' Qual é o próximo passo disciplinado?",
      options: ["Começar a reindexar o banco de dados imediatamente para poupar tempo.", "Gerar o conjunto completo de causas plausíveis (por exemplo, um Ishikawa nos 6 Ms) e depois convergir para a causa-raiz com dados e teste de hipóteses.", "Escalá-lo ao grupo de produto como um defeito confirmado de banco de dados.", "Encerrar Analisar e ir direto para Controlar."],
      correctIndex: 1,
      explanation: "Uma observação é circunstancial. Permaneça no modo divergente para fazer emergir todas as causas candidatas e depois convirja testando-as contra dados diretos e empíricos. Agir sobre o primeiro palpite arrisca um ciclo fracassado que reindexa um banco de dados que nunca foi a causa."
    },
    {
      prompt: "Uma equipe forma uma teoria inicial e depois reúne apenas a telemetria que a apoia, ignorando dados contraditórios. Que viés é esse?",
      options: ["Viés de ancoragem.", "Viés de confirmação.", "Heurística da disponibilidade.", "Viés de sobrevivência."],
      correctIndex: 1,
      explanation: "O <strong>viés de confirmação</strong> é buscar ou supervalorizar evidências que confirmam uma crença pré-existente. É uma forma primária de a convergência prematura se ocultar — a equipe se sente orientada por dados enquanto olha apenas para dados de apoio. (A ancoragem, supervalorizar a primeira informação, empurra as equipes na mesma direção.)"
    },
    {
      prompt: "Qual é a principal razão pela qual os métodos de MC separam a geração de ideias da avaliação e colocam tollgates entre as fases do DMAIC?",
      options: ["Para criar mais documentação para auditorias.", "Para evitar a convergência prematura forçando evidência suficiente antes de a equipe se comprometer com uma causa ou avançar de fase.", "Para desacelerar os projetos e torná-los mais caros.", "Para garantir que cada membro da equipe contribua com um número igual de ideias."],
      correctIndex: 1,
      explanation: "Os tollgates e o ritmo de divergir-depois-convergir existem para impedir que as equipes se fixem em uma resposta não verificada. Cada portão exige evidência suficiente para prosseguir — é assim que a MC 'vai devagar para ir rápido' e evita ciclos fracassados."
    }
  ]
},
"house-of-lean": {
  id: "house-of-lean",
  title: "A Casa do Lean",
  group: "Fundamentos",
  duration: "30 min",
  executiveSummary: "A Casa do Lean é o diagrama clássico do Sistema Toyota de Produção que mostra como as peças do Lean se encaixam como uma única estrutura: um objetivo no telhado, dois pilares que o sustentam, uma fundação estável embaixo e as pessoas no centro. O telhado é o objetivo — melhor qualidade, menor custo, menor lead time, com segurança e moral. Os dois pilares são o Just-in-Time (fluxo e puxado) e o Jidoka (qualidade incorporada). A fundação é estabilidade e padronização — trabalho padronizado, demanda nivelada e kaizen. Para os CSAs, a casa é o mapa que conecta todos os outros módulos desta série em um único sistema, e explica por que você não consegue fortalecer uma parte enquanto ignora a fundação sobre a qual ela se apoia.",
  whatYouGain: [
    "Ler a Casa do Lean como um sistema: o objetivo no telhado, os pilares Just-in-Time e Jidoka e a fundação estável e padronizada",
    "Mapear as ferramentas desta série na casa — trabalho padronizado e kaizen na fundação, takt e fluxo sob o JIT, andon e poka-yoke sob o Jidoka",
    "Explicar por que um pilar desmorona sem a fundação: as melhorias não se sustentam sem estabilidade e trabalho padronizado",
    "Usar o modelo para diagnosticar qual parte do sistema de um cliente está fraca e direcionar o esforço de MC para onde ele falta",
    "Colocar as pessoas e o respeito-pelas-pessoas no centro como o motor que de fato impulsiona a melhoria contínua"
  ],
  explanation: "<p>A <strong>Casa do Lean</strong> é um diagrama didático do Sistema Toyota de Produção. O sentido de desenhar o Lean como uma casa é que uma casa é uma única estrutura: o telhado precisa dos pilares, os pilares precisam da fundação, e uma fraqueza em qualquer lugar põe todo o edifício em risco. Você não pode adotar uma ferramenta isoladamente e esperar resultados Lean.</p><p><strong>O telhado é o objetivo.</strong> Ele declara para que o sistema serve: a mais alta qualidade, ao menor custo, no menor lead time, com segurança e moral incluídos. Tudo abaixo existe para entregar esse objetivo ao cliente &mdash; não para implantar ferramentas por elas mesmas.</p><p><strong>Os dois pilares sustentam o telhado.</strong> O primeiro pilar é o <strong>Just-in-Time (JIT)</strong>: produzir apenas o necessário, quando necessário, na quantidade necessária. O JIT trata de fluxo e puxado &mdash; fluxo contínuo, takt time ritmando o trabalho conforme a demanda e sistemas puxados como o Kanban que substituem o empurrado e a superprodução. O segundo pilar é o <strong>Jidoka</strong> (autonomação, ou 'automação com um toque humano'): incorporar a qualidade para que os defeitos nunca avancem. O Jidoka é a casa do cabo Andon (pare a linha diante de uma anormalidade) e do poka-yoke (à prova de erros). Ambos os pilares são necessários &mdash; fluxo sem qualidade incorporada apenas move defeitos mais rápido, e qualidade sem fluxo deixa o cliente esperando.</p><p><strong>A fundação a torna estável.</strong> Sob os pilares está a estabilidade e a padronização: o <strong>trabalho padronizado</strong> (o melhor método conhecido atualmente, e a linha de base contra a qual toda melhoria é medida), o <strong>heijunka</strong> (nivelar a demanda para que o sistema não seja sacudido por picos e vales) e o <strong>kaizen</strong> (melhoria contínua e incremental). Sem uma fundação estável, os pilares não têm nada de sólido onde se apoiar &mdash; você não pode executar JIT ou Jidoka confiáveis sobre o caos.</p><p><strong>As pessoas estão no centro.</strong> No meio da casa estão as pessoas e o trabalho em equipe, a melhoria contínua e a eliminação implacável do desperdício. Este é o motor: as ferramentas não melhoram um sistema, as pessoas que usam as ferramentas é que melhoram. O respeito pelas pessoas &mdash; confiar na linha de frente para detectar problemas, puxar o cabo e melhorar o próprio trabalho &mdash; é o que mantém toda a estrutura viva.</p><p>A casa também explica o sequenciamento. Você estabiliza e padroniza a fundação primeiro, depois constrói fluxo e qualidade incorporada por cima, tudo a serviço do objetivo do cliente no telhado. (Observação: referenciais escalados como o SAFe usam sua própria 'Casa do Lean' com rótulos diferentes &mdash; valor no telhado; pilares de respeito pelas pessoas, fluxo, inovação e melhoria implacável; liderança como fundação &mdash; mas a ideia é a mesma: uma única estrutura conectada, não uma caixa de ferramentas.)</p>",
  csamExample: "<p>Um CSAM herda um cliente que adotou ferramentas Lean de forma fragmentada &mdash; um quadro Kanban aqui, alguns portões de qualidade automatizados ali &mdash; mas os resultados não se sustentam. Usando a Casa do Lean, o CSAM diagnostica o problema na fundação: não há trabalho padronizado, então cada equipe faz a mesma tarefa de forma diferente e as melhorias não têm uma linha de base estável à qual se prender. O CSAM reformula o roteiro em torno da casa: primeiro estabilizar e padronizar (a fundação), depois fortalecer o fluxo (JIT) e a qualidade incorporada (Jidoka), tudo apontado para o objetivo declarado do cliente de menor lead time. A liderança finalmente entende por que ferramentas isoladas não estavam funcionando &mdash; estavam construindo pilares sobre areia &mdash; e financia primeiro o trabalho de fundação.</p>",
  csaExample: "<p>Um CSA usa a Casa do Lean para estruturar a evolução da engenharia de plataforma de um cliente. O objetivo no telhado é a própria meta do cliente: entregar funcionalidades mais rápido com menos incidentes. Sob o JIT, o CSA mapeia entrega contínua, fluxo baseado em trunk e limites de trabalho puxado. Sob o Jidoka, o CSA mapeia portões de qualidade automatizados, um cabo Andon digital que interrompe automaticamente um rollout ruim e políticas de poka-yoke que tornam as configurações incorretas impossíveis. Na fundação, o CSA estabelece o trabalho padronizado de infraestrutura como código e uma cadência de kaizen para retrospectivas. Desenhá-lo como uma única casa dá ao cliente um modelo mental compartilhado: cada iniciativa tem um lugar, e as dependências entre elas ficam óbvias.</p>",
  recap: [
    "A Casa do Lean é uma única estrutura conectada: um objetivo no telhado, dois pilares, uma fundação estável e pessoas no centro — não uma caixa de ferramentas com técnicas separadas",
    "O telhado é o objetivo: melhor qualidade, menor custo, menor lead time, com segurança e moral, entregue ao cliente",
    "Os dois pilares são o Just-in-Time (fluxo e puxado — takt, fluxo contínuo, Kanban) e o Jidoka (qualidade incorporada — Andon, poka-yoke); ambos são necessários",
    "A fundação é estabilidade e padronização: trabalho padronizado, heijunka (nivelamento) e kaizen — os pilares desmoronam sem ela",
    "Pessoas e respeito-pelas-pessoas ficam no centro como o motor da melhoria contínua; ferramentas não melhoram sistemas, pessoas melhoram",
    "Use a casa para sequenciar o trabalho — estabilizar a fundação primeiro, depois construir fluxo e qualidade incorporada — e para diagnosticar qual parte de um sistema está fraca"
  ],
  questions: [
    {
      prompt: "O que o telhado da Casa do Lean representa?",
      options: [
        "As ferramentas específicas que uma equipe adotou, como Kanban e 5S.",
        "O objetivo do sistema: melhor qualidade, menor custo e menor lead time entregues ao cliente.",
        "A equipe de liderança que patrocina o programa Lean.",
        "O orçamento alocado para a melhoria contínua."
      ],
      correctIndex: 1,
      explanation: "O telhado declara o <strong>objetivo</strong> &mdash; a mais alta qualidade, o menor custo, o menor lead time, com segurança e moral. Tudo abaixo do telhado existe para entregar esse objetivo ao cliente."
    },
    {
      prompt: "Quais são os dois pilares da Casa do Lean clássica (Toyota)?",
      options: [
        "5S e Trabalho Padronizado.",
        "Just-in-Time (fluxo e puxado) e Jidoka (qualidade incorporada).",
        "DMAIC e PDCA.",
        "Respeito pelas Pessoas e Liderança."
      ],
      correctIndex: 1,
      explanation: "Os dois pilares são o <strong>Just-in-Time</strong> (produzir apenas o necessário, quando necessário &mdash; fluxo e puxado) e o <strong>Jidoka</strong> (incorporar a qualidade para que os defeitos nunca avancem). Ambos são necessários para sustentar o telhado."
    },
    {
      prompt: "Qual conjunto de elementos forma a fundação da Casa do Lean?",
      options: [
        "Andon, poka-yoke e autoridade para parar a linha.",
        "Estabilidade e padronização: trabalho padronizado, heijunka (nivelamento) e kaizen.",
        "Takt time, fluxo contínuo e sistemas puxados.",
        "Mais alta qualidade, menor custo e menor lead time."
      ],
      correctIndex: 1,
      explanation: "A fundação é <strong>estabilidade e padronização</strong> &mdash; trabalho padronizado, demanda nivelada (heijunka) e kaizen. Sem uma fundação estável, os pilares JIT e Jidoka não têm nada de sólido onde se apoiar."
    },
    {
      prompt: "Por que o Lean é desenhado como uma casa em vez de uma lista de ferramentas?",
      options: [
        "Porque o diagrama é mais fácil de imprimir em uma única página.",
        "Porque é uma única estrutura conectada &mdash; o telhado precisa dos pilares e os pilares precisam da fundação, então uma fraqueza em qualquer lugar arrisca todo o sistema.",
        "Porque a Toyota exigia que todos os diagramas usassem metáforas de construção.",
        "Porque cada ferramenta pode ser adotada independentemente com o mesmo resultado."
      ],
      correctIndex: 1,
      explanation: "A casa mostra que o Lean é um <strong>sistema, não uma caixa de ferramentas</strong>. Você não pode executar JIT ou Jidoka confiáveis sobre uma fundação instável, e adotar uma ferramenta isoladamente não entrega resultados Lean."
    },
    {
      prompt: "Um cliente adotou Kanban e portões de qualidade automatizados, mas as melhorias não se sustentam, e não há trabalho padronizado. O que a Casa do Lean sugere?",
      options: [
        "Adicionar mais ferramentas aos pilares até os resultados melhorarem.",
        "Fortalecer a fundação primeiro &mdash; estabelecer trabalho padronizado e estabilidade &mdash; para que os pilares tenham uma base sólida onde se apoiar.",
        "Remover o quadro Kanban porque ele conflita com os portões de qualidade.",
        "Ir direto para a otimização do objetivo de custo no nível do telhado."
      ],
      correctIndex: 1,
      explanation: "Sem trabalho padronizado, as melhorias não têm uma linha de base estável à qual se prender &mdash; os pilares são construídos sobre areia. A casa diz para <strong>estabilizar e padronizar a fundação primeiro</strong>, depois construir fluxo e qualidade incorporada por cima."
    }
  ]
},
"dmaic": {
  id: "dmaic",
  title: "DMAIC",
  group: "Metodologias & Ciclos",
  duration: "30 min",
  executiveSummary: "DMAIC — Definir, Medir, Analisar, Melhorar, Controlar — é a metodologia Seis Sigma para corrigir processos com desempenho abaixo do esperado. Cada fase tem um tollgate; você não avança até que a evidência seja suficiente. A disciplina evita um erro de engenharia custoso: resolver o problema errado com confiança. Use o DMAIC quando o problema merecer semanas a meses de trabalho estruturado e orientado por dados.",
  whatYouGain: ["Entender quando usar DMAIC vs. ciclos mais rápidos como PDCA ou Kaizen", "Conduzir um projeto estruturado de cinco fases com tollgates que impedem saltar para soluções", "Usar dados para ancorar decisões e eliminar mudanças baseadas em opinião", "Montar uma fase de Controle que impede que os ganhos de melhoria regridam", "Aplicar o DMAIC a programas de confiabilidade, custo e capacidade"],
  explanation: "<p>O DMAIC fornece um referencial estruturado com cinco fases e tollgates. <strong>Definir</strong> alinha problema, escopo e meta mensurável usando termo de abertura do projeto, SIPOC e voz do cliente. <strong>Medir</strong> estabelece o desempenho de linha de base e valida o próprio sistema de medição. <strong>Analisar</strong> identifica causas-raiz por meio de Ishikawa, 5 Porquês e teste de hipóteses orientado por dados — não palpites. <strong>Melhorar</strong> pilota mudanças e compara o desempenho pós-mudança com a linha de base. <strong>Controlar</strong> sustenta o ganho por meio da padronização via infraestrutura como código, política, runbooks e monitoramento.</p><p>Cada tollgate impede a equipe de avançar sem evidência suficiente. Um gráfico de controle mostrando que os ganhos se sustentaram, um diagrama de Ishikawa com causas-raiz fundamentadas em dados e uma linha de base com mais de 4 semanas de medição defensável são exemplos de requisitos de tollgate. O antipadrão a evitar é o 'sprint DMAIC' — executar todas as cinco fases em uma semana sem portões reais. Isso é um Kaizen, não um DMAIC.</p><p>O DMAIC combina naturalmente com projetos de Faixa e grandes programas. Use-o quando processos existentes estão com desempenho insuficiente e a causa não está clara. Não use o DMAIC para projetar novos processos (use DMADV), correções no mesmo dia (use PDCA) ou mudança estratégica (use Hoshin Kanri). Durante um incidente ativo, estabilize e restaure o serviço primeiro; o DMAIC é para encontrar e remover a causa-raiz depois, não para apagar incêndios no momento.</p>",
  csamExample: "<p>Um CSAM apoiando a iniciativa de confiabilidade de um cliente usa o DMAIC para estruturar um programa de vários trimestres que reduz a taxa de incidentes de 8 por mês para 2 por mês. Durante Definir, o CSAM alinha a liderança do cliente em torno do termo de abertura: reduzir o MTTR e o volume de incidentes para aumentar a confiança do cliente e o consumo da plataforma. Medir estabelece uma taxa de incidentes e MTTR de linha de base a partir de 8 semanas de dados de produção. Analisar usa um gráfico de Pareto para mostrar que 60% dos incidentes vêm de uma única causa-raiz: o timeout de um único microsserviço. Melhorar pilota um padrão de circuit-breaker; a medição pós-piloto confirma a mudança. A fase de Controle codifica o padrão em todos os serviços similares via política e runbooks. O CSAM traduz o número de capacidade (taxa de incidentes pós-controle) em valor de negócio: 'A plataforma agora está estável o suficiente para sua equipe focar na velocidade de funcionalidades em vez de apagar incêndios.' O consumo cresce porque a velocidade da equipe de engenharia aumenta.</p>",
  csaExample: "<p>Um CSA lidera o DMAIC de confiabilidade de AKS de um cliente. Definir: eliminar incidentes de ImagePullBackOff. Medir: a linha de base mostra que ImagePullBackOff é 41% de todos os incidentes em um gráfico de Pareto. Analisar: a causa-raiz são tags de imagem mutáveis + acesso público ao ACR, permitindo imagens desatualizadas. Melhorar: implementar endpoint privado do ACR, impor tags imutáveis e gerenciar identidade via managed identity. Testar em um cluster; comparar a linha de base (41% dos incidentes) com o pós-mudança (0% de incidentes relacionados a ImagePullBackOff). Controlar: o Azure Policy nega tags mutáveis em todo o cluster; um runbook documenta o padrão. O CSA configura um gráfico de controle sobre o tipo de incidente no Azure Workbooks para sustentar a linha de base.</p>",
  recap: ["O DMAIC é para problemas de semanas a meses com causas-raiz não claras; use o PDCA para ciclos mais rápidos e o Kaizen para eventos no mesmo dia", "Os tollgates impedem que você salte para soluções antes de entender o problema por meio de dados", "Definir → Medir → Analisar → Melhorar → Controlar é a sequência rígida; cada fase tem entregáveis concretos", "A fase de Controle não é opcional; padronização e monitoramento sustentado evitam a regressão", "Use o DMAIC para certificar Faixas Verde e Preta, estruturar programas de confiabilidade do cliente e construir conhecimento de playbook pesquisável"],
  questions: [
    {
      prompt: "O que significa DMAIC?",
      options: ["Design, Medição, Análise, Implementação, Controle.", "Definir, Medir, Analisar, Melhorar, Controlar.", "Implantar, Monitorar, Avaliar, Melhorar, Corrigir.", "Decisão, Métricas, Avaliação, Implementação, Encerramento."],
      correctIndex: 1,
      explanation: "DMAIC significa <strong>Definir, Medir, Analisar, Melhorar, Controlar</strong> &mdash; cinco fases sequenciais, cada uma com um tollgate que impede o avanço sem evidência suficiente."
    },
    {
      prompt: "Qual é o propósito principal dos tollgates no DMAIC?",
      options: ["Agendar reuniões com as partes interessadas do projeto.", "Impedir saltar para soluções antes de o problema ser compreendido.", "Atribuir orçamento a cada fase do projeto.", "Documentar lições aprendidas nos limites de fase."],
      correctIndex: 1,
      explanation: "Os tollgates impedem um erro de engenharia custoso: <strong>resolver o problema errado com confiança</strong>. Cada portão garante que a evidência seja suficiente antes do início da próxima fase."
    },
    {
      prompt: "Quando você deve usar o DMAIC em vez do PDCA ou Kaizen?",
      options: ["Para qualquer correção rápida ou resolução de problema no mesmo dia.", "Quando o problema é significativo o bastante para merecer semanas a meses de trabalho estruturado.", "Para projetar processos totalmente novos que ainda não existem.", "Apenas quando você tem um candidato a certificação de projeto de Faixa Verde."],
      correctIndex: 1,
      explanation: "O DMAIC se encaixa em problemas grandes o suficiente para merecer semanas a meses de trabalho estruturado e orientado por dados. Para ciclos mais curtos use PDCA ou Kaizen; para o <strong>design de novos processos</strong> use DMADV."
    },
    {
      prompt: "O que acontece durante a fase de Controle do DMAIC?",
      options: ["A equipe identifica quais hipóteses testar em seguida.", "Os sistemas de medição são validados quanto à precisão.", "O ganho é padronizado e sustentado por meio de trabalho padronizado e monitoramento.", "As causas-raiz são identificadas e classificadas por impacto."],
      correctIndex: 2,
      explanation: "A fase de Controle <strong>sustenta o ganho</strong> por meio da padronização via IaC, Política, runbooks, painéis e alertas &mdash; para que as melhorias não regridam após o término do projeto."
    },
    {
      prompt: "Qual é um antipadrão a evitar na execução do DMAIC?",
      options: ["Coletar mais dados do que o absolutamente necessário durante Medir.", "Executar todas as cinco fases em uma semana sem tollgates significativos.", "Envolver o dono do processo cedo demais em Definir.", "Usar ferramentas estatísticas como teste de hipóteses em Analisar."],
      correctIndex: 1,
      explanation: "Executar todas as fases em uma semana sem portões reais não é DMAIC &mdash; é um <strong>evento Kaizen</strong>. O DMAIC exige que as fases tenham portões reais e evidência adequada por fase."
    }
  ]
}, "pdca": {
  id: "pdca",
  title: "PDCA / PDSA",
  group: "Metodologias & Ciclos",
  duration: "30 min",
  executiveSummary: "PDCA — Planejar, Fazer, Verificar, Agir — é o ciclo fundamental de melhoria: levante uma hipótese de mudança, experimente-a, meça o resultado e padronize ou aprenda. Deming depois o refinou para PDSA (Estudar em vez de Verificar) para enfatizar o aprendizado. O PDCA é a unidade atômica da melhoria contínua; cada mudança dentro do DMAIC, cada evento Kaizen e cada decisão de daily standup é um ciclo PDCA.",
  whatYouGain: ["Escrever hipóteses falseáveis antes de fazer qualquer mudança", "Conduzir pequenos experimentos com medição real em vez de mudanças por opinião", "Padronizar mudanças bem-sucedidas em trabalho padronizado via IaC ou runbooks", "Aprender com resultados negativos em vez de escondê-los", "Encadear PDCAs para melhoria composta ao longo de meses"],
  explanation: "<p>O PDCA é simples, mas exige disciplina. <strong>Planejar:</strong> escreva uma hipótese falseável: 'Se nós [mudança], então [métrica] vai mover de [linha de base] para [meta] dentro de [janela], porque [teoria].' Defina a medição: mesma fonte, mesma consulta, antes e depois. <strong>Fazer:</strong> faça a mudança pequena — escopo de piloto, cluster canário, uma equipe. Colete dados sem modificá-los; não escolha a dedo a janela de tempo depois do fato. <strong>Verificar / Estudar:</strong> compare o resultado real com a previsão. Moveu? Na direção esperada? Na magnitude esperada? <strong>Agir:</strong> escolha uma de três: padronizar via IaC ou política, adaptar (executar outro ciclo com uma variável alterada) ou abandonar e documentar o aprendizado.</p><p>A disciplina evita o pensamento solução-primeiro. A maioria das 'melhorias' são mudanças não controladas — sem hipótese, sem medida, sem padronização. O PDCA impõe o rigor científico mínimo. Resultados negativos são dados, não fracasso. Uma equipe que reverte um experimento fracassado e documenta o aprendizado aprendeu mais do que uma equipe que implanta cegamente toda mudança.</p><p>O PDCA escala: dentro de um único sprint, dentro de uma fase Melhorar do DMAIC (frequentemente de 3 a 5 PDCAs encadeados), dentro de um evento Kaizen (um PDCA por intervenção) e ao longo da cadência de melhoria diária de uma equipe. Encadear PDCAs torna a melhoria composta.</p>",
  csamExample: "<p>Um CSAM treina a equipe de SRE de um cliente para melhorar a disciplina de alertas. A equipe vinha ajustando os limiares de alerta semanalmente por um ano sem nenhuma melhoria medida de MTTR. O CSAM impõe a disciplina PDCA em cada mudança. Ciclo 1: Hipótese — 'Se reduzirmos o limiar de alerta de pico de 90% de CPU para 80%, captamos problemas de carga mais cedo e o MTTR cai 20%.' Janela de medição: 2 semanas. Resultado: o MTTR caiu 18%. Agir: padronizado. Ciclo 2: hipótese sobre um sinal diferente; o MTTR cai outros 15%. Ao longo de quatro ciclos, o MTTR caiu 31% e a equipe parou de oscilar. A restrição do CSAM — 'toda mudança precisa de uma hipótese e uma janela de medição de 2 semanas' — acelerou a melhoria ao impor disciplina científica.</p>",
  csaExample: "<p>Um CSA e um engenheiro do cliente conduzem um PDCA sobre ajuste de autoescala. Planejar: 'Se reduzirmos o limiar de scale-out de 80% de CPU para 65%, a latência P95 cai ≥20%, porque nos antecipamos à carga mais rápido.' Fazer: implantar em um node pool; coletar 2 semanas de dados de latência P95. Verificar: a P95 caiu 27%. Agir: padronizar a mudança de limiar via template de IaC em todos os node pools. O CSA segue com um PDCA de resultado negativo: ajuste de política de retry. Hipótese refutada — a vazão na verdade caiu. Agir: reverter em um dia e documentar que retry-com-backoff já saturava nessa carga de trabalho. Nenhuma implantação de um mês desperdiçada.</p>",
  recap: ["O PDCA impõe hipótese → experimento → medição → decisão em cada mudança", "O Planejar deve ser falseável; o Fazer deve ser pequeno; o Verificar deve ser honesto sobre resultados negativos", "Encadeie PDCAs dentro da fase Melhorar do DMAIC e no standup da equipe para melhoria diária", "Padronize vitórias via IaC, política ou runbooks; abandone fracassos e documente o aprendizado", "Uma reunião de PDCA não é um PDCA — a disciplina se aplica ao trabalho, não ao calendário"],
  questions: [
    {
      prompt: "Uma equipe diz &ldquo;melhoramos os alertas na última sexta &mdash; ajustamos os limiares.&rdquo; Um mês depois o MTTR não mudou. O que a disciplina PDCA teria evitado?",
      options: ["Teria impedido a equipe de mudar os limiares de alerta.", "Teria exigido uma hipótese antes da mudança, uma janela de medição depois e uma decisão de padronizar ou reverter.", "Teria feito a mudança acontecer mais rápido.", "Garante que toda a equipe usa as mesmas ferramentas de monitoramento."],
      correctIndex: 1,
      explanation: "O PDCA impõe a disciplina mínima em cada mudança. Sem uma <strong>hipótese, medição e decisão</strong>, as mudanças são experimentos invisíveis. O PDCA teria revelado que essa mudança não teve efeito."
    },
    {
      prompt: "Você está treinando uma equipe para reduzir a latência do cluster-autoscaler do AKS. O que a fase Planejar deve incluir?",
      options: ["Apenas a métrica que você quer melhorar; os detalhes emergem durante o Fazer.", "Uma hipótese falseável: &ldquo;Se nós [mudança], então [métrica] vai melhorar de [linha de base] para [meta] dentro de [janela], porque [teoria].&rdquo;", "Um compromisso de implantar a mudança em todos os clusters imediatamente quando os primeiros sinais parecerem bons.", "Uma pesquisa perguntando aos engenheiros se acham que a mudança vai funcionar."],
      correctIndex: 1,
      explanation: "O Planejar deve incluir uma <strong>hipótese falseável</strong> e uma métrica de sucesso. Isso evita o pensamento solução-primeiro e permite que o Verificar tome uma decisão sim/não honesta."
    },
    {
      prompt: "Um teste de política de retry mostra que a vazão caiu, não subiu. Qual é a decisão correta no Agir?",
      options: ["Ignorar o resultado porque ele conflita com a hipótese.", "Implantar a mudança em todos os sistemas e torcer para que a vazão melhore com a escala.", "Reverter a mudança e documentar o aprendizado de que essa abordagem não funciona como teorizado.", "Alegar que a medição estava errada e executar o teste de novo."],
      correctIndex: 2,
      explanation: "Resultados negativos são <strong>dados, não fracasso</strong>. Se a hipótese é refutada, reverta e documente. O aprendizado é valioso para ciclos futuros."
    },
    {
      prompt: "Uma equipe executou 6 ciclos PDCA em um trimestre. Cinco resultaram em melhorias padronizadas; um foi revertido. O que isso lhe diz?",
      options: ["A equipe está experimentando sem disciplina porque nem todas as mudanças tiveram sucesso.", "A equipe está praticando MC com honestidade científica &mdash; algumas mudanças funcionam, outras não, e todos os resultados informam o próximo ciclo.", "Eles deveriam parar de executar PDCA porque 83% não é alto o suficiente.", "Um ciclo fracassado prova que todo o programa está quebrado."],
      correctIndex: 1,
      explanation: "Uma taxa de sucesso mista é <strong>exatamente o que um bom PDCA parece</strong>. Uma taxa de sucesso de 100% sugeriria que as hipóteses eram seguras demais. A melhoria contínua se compõe a partir de cadeias de ciclos."
    },
    {
      prompt: "Um cliente diz: &ldquo;Estamos fazendo PDCA &mdash; adicionamos uma &lsquo;reunião de PDCA&rsquo; na sexta ao calendário.&rdquo; O que você deve esclarecer?",
      options: ["Perfeito &mdash; uma reunião na sexta garantirá disciplina consistente.", "O PDCA é um ciclo aplicado a mudanças específicas, não um formato de reunião. A disciplina é hipótese &rarr; experimento &rarr; medição &rarr; decisão.", "Reuniões de PDCA devem acontecer duas vezes por semana para melhorar a velocidade.", "O convite de calendário valida que a equipe está fazendo PDCA corretamente."],
      correctIndex: 1,
      explanation: "O PDCA não é uma reunião; é um <strong>ciclo aplicado a uma mudança</strong>. Um evento de calendário não tem sentido sem uma hipótese real, medição e decisão honesta sobre trabalho real."
    }
  ]
}, "a3": {
  id: "a3",
  title: "Pensamento A3",
  group: "Metodologias & Ciclos",
  duration: "30 min",
  executiveSummary: "A3 — batizado em homenagem ao papel de tamanho A3 (~28×43 cm) — é um relatório estruturado de uma página que captura todo o arco de um esforço de resolução de problemas: contexto, estado atual, objetivo, causa-raiz, contramedidas, plano e acompanhamento. A restrição física força clareza; o ato de redigir um A3 com um coach (o 'coach de A3') ensina raciocínio estruturado. O A3 é tanto uma ferramenta de pensamento quanto de comunicação.",
  whatYouGain: ["Criar relatórios de resolução de problemas de uma página que líderes ocupados de fato leem em cinco minutos", "Capturar o arco completo de pensamento em um formato durável que perdura por anos", "Usar a redação do A3 como mecanismo de coaching para ensinar raciocínio estruturado a engenheiros", "Substituir apresentações de 40 slides que ninguém relê por um único A3 pesquisável", "Padronizar o formato de resolução de problemas em sua organização ou conta de cliente"],
  explanation: "<p>O layout do A3 é disciplinado: <strong>Lado esquerdo (de cima para baixo):</strong> Contexto/antecedentes, Estado Atual (com dados/diagrama), Objetivo/Estado-Alvo. <strong>Lado direito (de cima para baixo):</strong> Análise de Causa-Raiz, Contramedidas (o que fazer), Plano de Implementação (quem/o quê/quando), Acompanhamento (como verificar, sustentar). Existem variantes — A3 de Proposta para novas iniciativas, A3 de Status para trabalho em andamento, A3 de Estratégia para o planejamento Hoshin Kanri.</p><p>Disciplina: uma página. Duas, se for absolutamente necessário; nunca três. Dados e visuais dominam; a prosa é mínima. A história deve ler da esquerda para a direita, de cima para baixo. O autor assina, o coach assina, o patrocinador assina. O antipadrão é o A3-como-slide: se o seu A3 cabe em uma apresentação de slides, não é um A3 — é um relatório de status usando o rótulo.</p><p>O A3 é um mecanismo de coaching. O autor + coach + revisão iterativa É o treinamento. As reescritas ensinam raciocínio estruturado. O A3 final vai para a base de conhecimento como referência permanente, não para um drive compartilhado que ninguém abre. Comparado com uma longa apresentação de slides que é apresentada uma vez e raramente reaberta, um A3 bem formado pode ser lido em alguns minutos e permanece útil como referência depois.</p>",
  csamExample: "<p>Um CSAM encerra um grande engajamento com cliente (migração de landing zone do Azure, programa de aceleração de consumo) como um A3. Contexto: a infraestrutura legada do cliente é cara e inflexível; impede a adoção de serviços modernos do Azure. Estado Atual: 40% das cargas de trabalho ainda on-premises, custos mensais de nuvem de US$ 180 mil, lead time de implantação de 6 semanas. Objetivo: migrar 60% das cargas de trabalho, reduzir o gasto mensal de nuvem em 25% e diminuir o lead time de implantação para 2 semanas em 6 meses. Causa-Raiz (via Ishikawa): atrasos de política de governança, IaC imatura, equipes sem familiaridade com padrões nativos do Azure. Contramedidas: estabelecer blueprints de landing zone, treinar equipes em IaC + governança do Azure, executar Kaizen no pipeline de implantação. Plano: o CSA lidera o design nas semanas 1–4, a equipe do cliente implementa nas semanas 5–16. Acompanhamento: o CSA revisa o progresso da migração e as métricas de consumo a cada 2 semanas; sucesso = metas atingidas e consumo acelerando. O A3 torna-se o contrato do engajamento e o artefato de conhecimento para futuras contas similares.</p>",
  csaExample: "<p>Um CSA conclui um Kaizen sobre incidentes de ImagePullBackOff em AKS e o documenta como um A3. Contexto: incidentes de produção custam ao cliente US$ 50 mil/trimestre em indisponibilidade. Estado Atual: o Pareto mostra que 41% dos incidentes são ImagePullBackOff; causa-raiz via 5 Porquês: tags de imagem mutáveis + endpoint público do ACR permitem puxar imagens desatualizadas/incorretas. Objetivo: eliminar incidentes de ImagePullBackOff em 6 semanas. Contramedidas: (1) impor tags imutáveis via Azure Policy, (2) criar endpoint privado do ACR, (3) conectar autenticação por managed identity. Plano: o CSA programa a Política, a equipe do cliente implementa; testar primeiro no cluster de dev. Acompanhamento: gráfico de controle sobre o tipo de incidente por 8 semanas após a mudança. O A3 é assinado pelo CSA, pelo engenheiro do cliente e pelo patrocinador; ele vai para o portfólio do CSA tanto como artefato de certificação quanto como referência futura ao orientar programas de confiabilidade similares.</p>",
  recap: ["O A3 é uma página: Contexto, Estado Atual, Objetivo, Causa-Raiz, Contramedidas, Plano, Acompanhamento", "A restrição de uma página força clareza e cria artefatos duráveis que perduram por anos", "Autor de A3 + coach + reescritas iterativas = treinamento de nível faixa em raciocínio estruturado", "Use o A3 para encerramentos de DMAIC, readouts de Kaizen, certificação de Faixa e proposição de programas", "Armazene A3s em uma base de conhecimento pesquisável, não em um drive compartilhado; equipes futuras os releem"],
  questions: [
    {
      prompt: "Quais são as sete seções de um A3 padrão de resolução de problemas, em ordem?",
      options: ["Introdução, Declaração do Problema, Análise, Solução, Cronograma, Revisão, Aprovação.", "Contexto, Estado Atual, Objetivo, Causa-Raiz, Contramedidas, Plano, Acompanhamento.", "Título, Resumo, Métodos, Resultados, Ações, Responsável, Assinatura.", "Abertura, Questão, Investigação, Correção, Teste, Encerramento, Notas."],
      correctIndex: 1,
      explanation: "O A3 captura todo o arco de resolução de problemas em uma página: onde começamos, onde estamos, aonde queremos chegar, por que a lacuna existe, o que fazer, o plano e como verificar &mdash; uma <strong>narrativa completa</strong>."
    },
    {
      prompt: "Por que a restrição de uma página de um A3 é uma força em vez de uma limitação?",
      options: ["É mais barato imprimir e distribuir para a equipe.", "Força declarações de problema afiadas e clareza &mdash; ninguém relê apresentações de 40 slides.", "Simplifica a entrega por e-mail e reduz o tamanho dos arquivos.", "Reduz o tempo de edição e acelera as aprovações."],
      correctIndex: 1,
      explanation: "A <strong>restrição</strong> física de uma página elimina o excesso, força a priorização e cria um artefato durável que equipes futuras releem. Clareza e reuso são o produto."
    },
    {
      prompt: "Qual é o papel de um coach de A3 no processo de desenvolvimento?",
      options: ["Escrever o A3 pelo autor para que o projeto avance mais rápido.", "Revisar e desafiar &mdash; as reescritas SÃO o treinamento, não o A3 final.", "Coletar dados dos membros da equipe e montá-los em slides.", "Obter assinaturas das partes interessadas e arquivar o documento."],
      correctIndex: 1,
      explanation: "O desenvolvimento do A3 é um <strong>mecanismo de coaching</strong>. O autor reescreve várias vezes sob orientação do mentor; o aprendizado acontece na iteração, não no documento final."
    },
    {
      prompt: "Quando o A3 é o artefato apropriado em vez de uma entrada rápida de runbook?",
      options: ["Para todo incidente, independentemente de severidade ou frequência.", "Para incidentes rotineiros e únicos &mdash; um A3 seria exagero ali.", "Para incidentes repetidos ou sistêmicos em que a causa-raiz e as contramedidas importam.", "Apenas para incidentes Sev A que causam impacto ao cliente."],
      correctIndex: 2,
      explanation: "Uma entrada de runbook de duas linhas resolve incidentes únicos. Um A3 com análise de causa-raiz é apropriado quando o incidente <strong>se repete</strong> ou revela lacunas sistêmicas."
    },
    {
      prompt: "Qual é um sinal de que um &ldquo;A3&rdquo; falhou como ferramenta de pensamento?",
      options: ["Tem espaço em branco e elementos visuais demais.", "Comprime-se perfeitamente em uma apresentação de PowerPoint de vários slides.", "É legível por um líder ocupado em cinco minutos.", "Documenta uma iniciativa fracassada com evidência refutadora."],
      correctIndex: 1,
      explanation: "Se o seu A3 cabe em uma apresentação de slides, não é um A3 &mdash; é um <strong>relatório de status usando o rótulo</strong>. O formato de uma página é o mecanismo que força o rigor de pensamento."
    }
  ]
}, "failed-hypothesis": {
  id: "failed-hypothesis",
  title: "Quando a Hipótese Falha: Recuperando o Ciclo",
  group: "Metodologias & Ciclos",
  duration: "30 min",
  executiveSummary: "A melhoria contínua é ciência aplicada: você usa os dados que já tem para formar uma hipótese falseável — 'se mudarmos X, a métrica Y vai melhorar por causa de [causa-raiz]' — e então a testa antes de se comprometer. Às vezes o teste refuta a hipótese, ou o próprio experimento se revela empiricamente falho. Nenhum dos dois é um fracasso do projeto; uma hipótese refutada é um achado, e barato quando capturado em escala de piloto por um tollgate. Este módulo explica como escrever e testar hipóteses de melhoria a partir dos dados disponíveis, como distinguir uma ideia genuinamente refutada de um teste inválido, como um praticante deve reagir — de forma transparente, sem torturar os dados — e, crucialmente, como restaurar o ciclo após uma tentativa fracassada voltando à fase cuja suposição quebrou em vez de abandonar o esforço.",
  whatYouGain: [
    "Escrever declarações de hipótese falseáveis e fundamentadas em dados, ligadas a uma causa-raiz confirmada e a um resultado mensurável",
    "Testar uma hipótese honestamente: critérios de sucesso pré-registrados, uma linha de base estável e uma verificação estatística real antes de escalar",
    "Distinguir uma hipótese realmente refutada (teste válido, ideia errada) de uma empiricamente falha (teste inválido, resultado inconclusivo)",
    "Reagir à evidência refutadora como um achado — relatá-la com transparência em vez de mover as traves ou fazer p-hacking de uma vitória",
    "Recuperar um ciclo fracassado voltando o DMAIC, DMADV ou PDCA à fase cuja suposição quebrou, depois refazendo a linha de base antes do próximo teste"
  ],
  explanation: "<p><strong>A MC é o método científico aplicado ao trabalho.</strong> Em vez de agir por opinião, você usa os dados que já tem &mdash; telemetria, a linha de base, um Pareto de defeitos, temas de VOC &mdash; para formar uma <strong>hipótese falseável</strong> e então testá-la. Uma boa hipótese de melhoria nomeia cinco coisas: a <em>mudança</em> (X), o <em>efeito previsto</em> em uma métrica específica (Y), a <em>justificativa</em> (a causa-raiz de Analisar que faz você acreditar que X impulsiona Y), o <em>efeito mínimo que importaria</em> e uma <strong>hipótese nula</strong> implícita ('a mudança não faz diferença'). 'Se adicionarmos um cache read-through, a latência P95 cai pelo menos 30% porque os cache misses são o custo dominante' é testável; 'o cache vai deixar as coisas mais rápidas' não é.</p><p><strong>Boa prática para testá-la.</strong> Antes de executar o experimento, pré-registre os critérios de sucesso, o nível de significância (&alpha;), o tamanho de amostra de uma análise de poder e o efeito mínimo significativo &mdash; para que você não possa mover as traves depois. Valide o sistema de medição e confirme que o processo está <strong>estável</strong> em um gráfico de controle primeiro; um teste em um processo fora de controle mede ruído. Depois <strong>pilote pequeno</strong> para que o fracasso seja barato e confirme o resultado com um teste estatístico (veja o módulo de p-valor) antes de escalar. Pré-comprometa um plano de rollback. É exatamente por isso que o DMAIC e o DMADV colocam tollgates entre as fases: o portão é onde uma hipótese fraca deve falhar &mdash; de forma barata, em escala de piloto, antes de um rollout completo.</p><p><strong>Duas formas de uma hipótese &lsquo;não confirmar.&rsquo;</strong> Elas exigem respostas opostas, então separe-as antes de concluir qualquer coisa. <strong>(1) Genuinamente refutada:</strong> o teste foi válido e a ideia simplesmente estava errada &mdash; a mudança não produziu melhoria (ou piorou). Aceite. O método funcionou exatamente como projetado; o tollgate apenas salvou você de escalar um fiasco. <strong>(2) Empiricamente falha:</strong> o <em>próprio teste</em> foi inválido, então o resultado é <strong>inconclusivo, não uma refutação</strong>. Falhas comuns: um confundidor (uma queda de tráfego durante a janela de teste), uma linha de base contaminada ou instável, uma amostra com poder insuficiente, erro de medição ou baixa <strong>fidelidade de implementação</strong> (o piloto nunca foi realmente executado como projetado). Execute verificações de validade &mdash; confiança no sistema de medição, estabilidade do processo, confundidores, poder, fidelidade &mdash; antes de decidir em qual caso você está. Um teste falho fala sobre o seu experimento, não sobre a sua ideia.</p><p><strong>Como um praticante deve reagir.</strong> Trate a evidência refutadora como dado, não como fracasso pessoal ou da equipe &mdash; a cultura deve ser <strong>sem culpados</strong> para que as pessoas tragam à tona resultados negativos em vez de escondê-los. Relate-os com transparência. <em>Não</em> torture os dados para fabricar uma vitória: nada de p-hacking, nada de HARKing (inventar uma nova hipótese depois de ver os dados e fingir que era o plano), nada de escolher a dedo o único subgrupo que parece bom, nada de mudar silenciosamente para um teste unicaudal ou afrouxar o limiar. Capture o aprendizado &mdash; um A3 que documenta a evidência refutadora é um ativo permanente que impede a organização de repetir o mesmo beco sem saída.</p><p><strong>Como restaurar o ciclo após uma tentativa fracassada.</strong> Volte à fase cuja suposição quebrou &mdash; não todo o caminho de volta ao início. No <strong>DMAIC</strong>, uma hipótese de Melhorar refutada geralmente significa que a causa-raiz de <strong>Analisar</strong> estava errada ou incompleta: volte a Analisar, redivirja sobre causas candidatas, repriorize com os dados e forme uma nova hipótese. Se a própria linha de base era o problema, volte a <strong>Medir</strong>; se o problema foi mal definido, volte a <strong>Definir</strong>. No <strong>DMADV</strong>, um design que falha em Verificar/Validar contra os CTQs envia você de volta a <strong>Design</strong> para iterar &mdash; a menos que a verificação mostre que os próprios requisitos estavam errados, o que envia você mais para montante. No <strong>PDCA</strong>, um Verificar fracassado significa que você <em>não</em> deve Agir/padronizar a mudança; você Ajusta e executa outro ciclo com uma hipótese revisada &mdash; o PDCA é iterativo por design, e um ciclo fracassado simplesmente alimenta o próximo Planejar. Em todos os casos: <strong>reverta o piloto</strong> para restaurar a linha de base (a mudança foi contida em escala de piloto precisamente para que você pudesse), reconfirme a estabilidade do processo, refaça a linha de base e documente o resultado negativo antes do próximo experimento. O ciclo não é quebrado por uma hipótese fracassada &mdash; ele está fazendo o seu trabalho.</p>",
  csamExample: "<p>A equipe de um cliente está convencida de que adicionar uma camada de cache vai cortar a latência P95 de uma API lenta em 30% e quer implantá-la em toda a plataforma. O CSAM insiste primeiro em um teste piloto e pré-registrado. Resultado do piloto: nenhuma mudança estatisticamente significativa (p = 0,6). O instinto da equipe é justificar &mdash; 'talvez ajude sob carga maior' &mdash; mas o CSAM interrompe o deslocamento das traves e trata a refutação como um achado: a causa-raiz de Analisar (cache misses) estava errada. O ciclo volta a Analisar, onde um novo Pareto e 5 Porquês revelam que o verdadeiro gargalo é um lock de serialização downstream, não os cache misses. Uma nova hipótese é formada e testada. O piloto fracassado custou um sprint em vez de um rollout em toda a plataforma de uma mudança que não fez nada, e o CSAM registra o resultado negativo para que nenhuma outra equipe o reexecute.</p>",
  csaExample: "<p>Em um DMAIC de confiabilidade, a hipótese da fase Melhorar de um CSA é 'dobrar a contagem de pods vai cortar a latência da fila em 25%.' O antes/depois parece uma vitória &mdash; até o CSA executar verificações de validade e descobrir que o teste é empiricamente falho: a janela posterior coincidiu com uma queda de tráfego de feriado (um confundidor), e o gráfico de controle mostra que o processo teve uma mudança de causa especial no meio do teste, então nunca foi estável. Isso é inconclusivo, não prova. Em vez de declarar uma falsa vitória, o CSA retorna a Medir, refaz a linha de base em uma janela estável com o confundidor controlado e reexecuta o experimento com um tamanho de amostra pré-calculado. O reteste mostra que o aumento de pods na verdade ajuda apenas marginalmente; a correção real é uma mudança de consumer-prefetch. Ao se recusar a registrar um resultado inválido, o CSA mantém honesta a evidência da fase Melhorar e sólida a decisão de rollout.</p>",
  recap: [
    "A MC é ciência aplicada: use os dados que você já tem para escrever uma hipótese falseável (a mudança X melhora a métrica Y por causa de [causa-raiz]), depois teste-a antes de se comprometer",
    "Uma hipótese refutada é um achado, não um fracasso — e barato quando um tollgate a captura em escala de piloto antes de um rollout completo",
    "Separe uma ideia genuinamente refutada (teste válido, hipótese errada — aceite) de um teste empiricamente falho (inválido — inconclusivo, então corrija o teste e reexecute)",
    "Reaja com transparência e sem culpados; nunca faça p-hacking, HARKing, escolha a dedo subgrupos ou mova as traves para fabricar uma vitória",
    "Recupere voltando à fase cuja suposição quebrou — DMAIC geralmente a Analisar, DMADV a Design, PDCA em outro ciclo Ajustar-e-tentar-de-novo",
    "Reverta o piloto, reconfirme a estabilidade, refaça a linha de base e documente o resultado negativo antes da próxima tentativa — o ciclo não está quebrado, está funcionando"
  ],
  questions: [
    {
      prompt: "Uma hipótese de melhoria é testada com um experimento válido e bem dimensionado e é claramente refutada. Como um praticante de MC deve encarar isso?",
      options: [
        "Como um fracasso do projeto que deve ser silenciosamente removido do relatório.",
        "Como um achado legítimo — o método científico funcionando como projetado — que evitou de forma barata escalar uma mudança que não funciona.",
        "Como motivo para reexecutar o teste repetidamente até que ele acabe passando do limiar.",
        "Como prova de que a melhoria contínua não se aplica a este processo."
      ],
      correctIndex: 1,
      explanation: "Uma hipótese refutada por um teste válido é um <strong>achado, não um fracasso</strong>. O tollgate cumpriu seu papel &mdash; capturou um fiasco em escala de piloto antes de um rollout completo custoso. O movimento honesto é aceitar a evidência e aprender com ela."
    },
    {
      prompt: "Qual é a diferença entre uma hipótese genuinamente refutada e uma cujo teste é empiricamente falho?",
      options: [
        "Não há diferença; ambas significam que a mudança deve ser abandonada.",
        "Uma hipótese refutada veio de um teste válido (a ideia estava errada); um teste empiricamente falho é inválido — inconclusivo — então você corrige o teste e reexecuta.",
        "Uma hipótese refutada significa que os dados foram falsificados; um teste falho significa que a equipe não tinha uma Faixa Preta.",
        "Um teste falho sempre prova o oposto da hipótese."
      ],
      correctIndex: 1,
      explanation: "Uma hipótese <strong>refutada</strong> vem de um teste <em>válido</em> &mdash; a ideia estava errada. Um teste <strong>empiricamente falho</strong> (confundidores, linha de base instável, amostra com poder insuficiente, baixa fidelidade de implementação) é <em>inválido</em>, então o resultado é <strong>inconclusivo</strong>, não uma refutação. Execute verificações de validade antes de concluir."
    },
    {
      prompt: "No DMAIC, uma hipótese piloto da fase Melhorar é refutada por um teste válido. A qual fase você mais comumente retorna?",
      options: [
        "Definir &mdash; reiniciar todo o projeto do zero.",
        "Analisar &mdash; a causa-raiz provavelmente estava errada ou incompleta, então redivirja sobre causas e forme uma nova hipótese.",
        "Controlar &mdash; padronizar a mudança de qualquer forma e monitorá-la.",
        "Nenhuma &mdash; abandonar o projeto, já que a hipótese falhou."
      ],
      correctIndex: 1,
      explanation: "Volte à fase cuja <strong>suposição quebrou</strong>. Uma hipótese de Melhorar refutada geralmente significa que a causa-raiz de <strong>Analisar</strong> estava errada &mdash; volte lá, repriorize as causas com dados e gere uma nova hipótese. Só volte a Medir ou Definir se a linha de base ou a definição do problema foi a falha."
    },
    {
      prompt: "Qual reação à evidência refutadora é um mau uso a evitar?",
      options: [
        "Relatar o resultado negativo com transparência e documentá-lo em um A3.",
        "Escolher a dedo o único subgrupo que parece bom, ou mudar para um teste unicaudal, para fabricar uma 'vitória.'",
        "Voltar a Analisar para formar uma nova hipótese melhor fundamentada.",
        "Reverter o piloto e reconfirmar a linha de base antes do próximo teste."
      ],
      correctIndex: 1,
      explanation: "Torturar os dados &mdash; p-hacking, HARKing, escolher a dedo subgrupos ou mover as traves &mdash; fabrica falsa confiança. As respostas disciplinadas (relato transparente, voltar atrás, reverter) são exatamente o que mantém o ciclo honesto."
    },
    {
      prompt: "Em um ciclo PDCA, o passo Verificar mostra que a mudança não produziu a melhoria esperada. O que você deve fazer?",
      options: [
        "Prosseguir para Agir e padronizar a mudança mesmo assim, já que você já a construiu.",
        "Não padronizá-la — Ajustar e executar outro ciclo PDCA com uma hipótese revisada, revertendo o piloto para restaurar a linha de base.",
        "Declarar o processo incapaz de melhoria e parar.",
        "Rotular os resultados do Verificar como sucesso para manter o ritmo."
      ],
      correctIndex: 1,
      explanation: "Um <strong>Verificar</strong> fracassado significa que você <em>não</em> deve Agir/padronizar. O PDCA é iterativo: <strong>Ajuste</strong> e execute outro ciclo com uma hipótese revisada, e reverta o piloto para restaurar a linha de base. Um ciclo fracassado simplesmente alimenta o próximo Planejar."
    }
  ]
},
"control-charts": {
  id: "control-charts",
  title: "Gráficos de Controle (CEP)",
  group: "Medição & Controle",
  duration: "30 min",
  executiveSummary: "Um gráfico de controle é um gráfico de série temporal de uma métrica de processo com limites de controle estatísticos (tipicamente ±3σ) para distinguir variação de causa comum (ruído — o processo é o que é) de variação de causa especial (sinal — algo mudou). O Controle Estatístico de Processo detecta desvios antes dos clientes e prova que os ganhos de melhoria se sustentaram.",
  whatYouGain: ["Distinguir um problema real de variação normal de processo", "Detectar desvio de processo cedo, antes de violações de SLO e impacto ao cliente", "Provar que os ganhos de Kaizen são sustentados com estatística, não afirmações", "Reduzir esforço desperdiçado reagindo a falsos alarmes e ruído", "Monitorar qualquer métrica de CTQ: latência, taxa de erro, custo, vazão, métricas de avaliação de IA"],
  explanation: "<p>Componentes do gráfico de controle: <strong>Linha Central (LC)</strong> = tipicamente a média ou mediana. <strong>Limites Superior/Inferior de Controle (LSC/LIC)</strong> = LC ± 3σ, onde σ é o desvio padrão dentro do subgrupo. <strong>Pontos</strong> = a métrica ao longo do tempo. Tipos comuns de gráfico: I-MR para valores individuais (ex.: custo por dia), X-R para médias de subgrupo (ex.: latência P95 por janela de 5 min), gráfico p para proporção de defeituosos (ex.: taxa de erro por implantação), gráfico c para contagens de defeitos por período.</p><p>Sinais de causa especial (regras de Western Electric / Nelson): (1) Um ponto fora de ±3σ, (2) 9 pontos consecutivos de um lado da LC, (3) 6 pontos consecutivos em tendência de alta ou baixa, (4) 14 pontos alternando alta/baixa, (5) 2 de 3 pontos consecutivos fora de ±2σ do mesmo lado. Qualquer regra disparando = investigar o processo; não ajuste configurações para variação de causa comum. Antipadrão: mover os limites de controle para 'absorver' a variação — isso destrói a capacidade de sinal da ferramenta.</p><p>Como usar: (1) Estabeleça uma linha de base estável de 20–25 subgrupos, investigando e removendo quaisquer causas especiais claras. (2) Calcule a LC e os limites. (3) Plote os dados contínuos sobre a linha de base travada; não recompute os limites a cada período. (4) Aplique as regras; investigue sinais. (5) Refaça a linha de base apenas após mudança deliberada de processo, documentada.</p>",
  csamExample: "<p>Um CSAM usa gráficos de controle em revisões de cliente QBR/EBR para demonstrar a saúde da conta. O CSA fornece um gráfico de controle dos custos de infraestrutura do cliente por mês: LC US$ 145 mil, LSC US$ 180 mil, LIC US$ 110 mil. Por 6 meses, o custo é estável dentro dos limites. Após um Kaizen para otimizar o gasto de RU do banco de dados, um gráfico de controle com linha de base refeita mostra LC US$ 110 mil, LSC US$ 130 mil. O CSAM diz ao CFO do cliente: 'Sua plataforma agora está estável no novo nível de custo mais baixo. Nove pontos consecutivos abaixo da linha central antiga provam estatisticamente que o ganho se sustentou.' A confiança da liderança no programa e o consumo da conta aumentam.</p>",
  csaExample: "<p>Um CSA configura um Azure Workbook com gráficos de controle para latência (P99) e taxa de erro. A linha de base é de 4 semanas de dados de produção. Latência P99 LC 312ms, LSC 410ms; gráfico p de taxa de erro LC 0,3%, LSC 1,2%. Após um Kaizen sobre latência de cauda (ajuste do pool de conexões), o CSA refaz a linha de base: P99 LC 187ms, LSC 245ms. O gráfico de controle é travado e exibido no painel de operações. Duas semanas depois, surge um pico: um ponto de dados dispara para 520ms (fora do LSC). O runbook do CSA é acionado: investigar aquela hora em busca de mudanças de infraestrutura. Causa-raiz encontrada: balanceador de carga mal configurado em uma região. Sem o gráfico de controle, o pico teria parecido ruído.</p>",
  recap: ["Os limites de controle separam sinal (causa especial) de ruído (causa comum) usando a matemática de ±3σ", "As regras de Western Electric detectam causas especiais; investigue-as em vez de ajustar o processo", "Estabeleça a linha de base com 20–25 subgrupos estáveis; trave os limites e só refaça a linha de base após mudança deliberada", "Use gráficos de controle na fase de Controle do DMAIC, no monitoramento contínuo de confiabilidade e em relatórios de QBR", "Os gráficos de controle provam que os ganhos de Kaizen se sustentaram, não que a conformidade teve sorte"],
  questions: [
    {
      prompt: "Qual é o propósito principal de desenhar limites de controle (tipicamente &plusmn;3&sigma;) em um gráfico de métrica de processo?",
      options: ["Definir metas de produção que a equipe deve atingir.", "Distinguir variação de causa comum de causa especial.", "Prever valores futuros da métrica com certeza estatística.", "Substituir o teste de hipóteses estatístico tradicional."],
      correctIndex: 1,
      explanation: "Os limites de controle separam ruído (causa comum &mdash; o processo é o que é) de sinal (causa especial &mdash; algo mudou). Isso evita reagir em excesso à <strong>variação</strong> normal."
    },
    {
      prompt: "Como você deve responder quando um único ponto da métrica cai fora do limite superior de controle?",
      options: ["Ajustar imediatamente as configurações do processo para trazê-lo de volta.", "Recomputar os limites de controle para acomodar o novo dado.", "Investigar uma causa especial conforme as regras de Western Electric.", "Apertar o SLO em 10% para evitar recorrência."],
      correctIndex: 2,
      explanation: "Um ponto fora de &plusmn;3&sigma; é um <strong>sinal de causa especial</strong> conforme as regras de Western Electric. Investigue a causa; não ajuste o processo por variação de causa comum."
    },
    {
      prompt: "Quando você deve recalcular e refazer a linha de base dos limites do gráfico de controle?",
      options: ["Toda semana para manter os limites atualizados com os dados mais recentes.", "Apenas após uma mudança de processo deliberada e documentada.", "Nunca, uma vez que a linha de base esteja estabelecida e travada.", "Sempre que a métrica parecer fora de controle ou preocupante."],
      correctIndex: 1,
      explanation: "Trave a linha de base em 20&ndash;25 subgrupos estáveis. Não recompute a cada período &mdash; isso destrói a capacidade de sinal. <strong>Refaça a linha de base apenas</strong> após mudança intencional de processo."
    },
    {
      prompt: "Que tipo de gráfico de controle você usaria para monitorar a latência P99 medida em intervalos de 5 minutos?",
      options: ["I-MR (individuais e amplitude móvel) para valores únicos.", "Gráfico p (proporção de defeituosos) para resultados passa/falha.", "Gráfico c (contagem de defeitos) para contagens de defeitos por período.", "X-R (médias de subgrupo e amplitude) para métricas agregadas."],
      correctIndex: 3,
      explanation: "A latência P99 por janela de 5 minutos é dado de subgrupo. O X-R plota a média e a amplitude de cada subgrupo &mdash; ideal para <strong>métricas de percentil</strong> ao longo de janelas de tempo."
    },
    {
      prompt: "O que indica uma sequência de nove pontos consecutivos abaixo da linha central?",
      options: ["O processo está melhorando e permanecerá melhorado automaticamente.", "Um sinal de causa especial conforme a regra 2 de Western Electric.", "Variação normal de causa comum; nenhuma ação necessária.", "Os limites de controle estão apertados demais e precisam ser alargados."],
      correctIndex: 1,
      explanation: "Nove pontos consecutivos de um lado da linha central é um <strong>sinal de causa especial</strong> (regra 2 de Western Electric). Em um contexto de Kaizen, isso confirma estatisticamente o ganho sustentado."
    }
  ]
}, "process-capability": {
  id: "process-capability",
  title: "Capacidade de Processo (Cp, Cpk)",
  group: "Medição & Controle",
  duration: "30 min",
  executiveSummary: "A capacidade de processo quantifica quão bem um processo estável atende seus limites de especificação. Cp é a capacidade potencial; Cpk é a capacidade real considerando a centralização. Convenção: Cpk ≥ 1,33 = capaz; ≥ 1,67 = altamente capaz; ≥ 2,0 = Seis Sigma. Um Cpk baixo em um processo dentro da especificação é um alerta precoce: a conformidade é sorte, não capacidade.",
  whatYouGain: ["Distinguir entre 'atingir o SLO no trimestre passado' e 'ser capaz de atingir o SLO'", "Usar o Cpk para prever se o SLO vai se sustentar à medida que a carga cresce ou a variação aumenta", "Saber quanta folga um serviço tem: é Cpk 0,33 (em risco) ou 1,67 (confortável)?", "Identificar se deve reduzir a variação (σ) ou centrar a média (μ) para melhorar a capacidade", "Traduzir números de capacidade em afirmações de risco em linguagem de negócio para a liderança"],
  explanation: "<p><strong>Cp</strong> = (LSE − LIE) / 6σ mede a capacidade potencial supondo que o processo esteja centrado. <strong>Cpk</strong> = mín((LSE − μ)/3σ, (μ − LIE)/3σ) mede a capacidade real considerando se a média está descentralizada. Convenção: Cpk &lt; 1,0 = não capaz (defeitos esperados na operação normal), 1,0–1,33 = marginalmente capaz, 1,33–1,67 = capaz (meta padrão), 1,67–2,0 = altamente capaz, ≥ 2,0 = Seis Sigma (~3,4 defeitos por milhão de oportunidades com deslocamento).</p><p>Pré-requisitos: (1) Processo estável — confirme via gráfico de controle que causas especiais foram removidas. (2) Distribuição normal — ou transforme via Box-Cox; métricas de cauda pesada como latência frequentemente precisam de capacidade baseada em percentis ou métodos não paramétricos. (3) CTQ definido com limites de especificação superior/inferior. Exemplo real: o cliente afirmou 'atingimos nosso SLO de latência P99.' Análise de capacidade: μ = 178ms, σ = 22ms, LSE = 200ms, Cpk = 0,33. Não capaz — a conformidade recente é sorte. Três meses depois, um aumento rotineiro de carga empurrou a P99 para além de 200ms; o Cpk havia previsto isso.</p><p>Alavancas de melhoria: Cpk baixo porque o Cp é baixo? Reduza a variação (melhoria de processo). Cpk baixo porque a média está descentralizada? Centre o processo para longe da especificação mais próxima. Ambas as alavancas entregam ganho real de capacidade.</p>",
  csamExample: "<p>Um CSAM revisa a saúde trimestral da plataforma com o CTO de um cliente. Uma métrica: tempo de resposta P99 da API. Estado atual: P99 = 178ms, limite de especificação (SLO) = 200ms. O CSAM apresenta Cpk = 0,33: 'Vocês estão atingindo o SLO agora, mas não são realmente capazes. Seu desvio padrão de 22ms é grande demais em relação ao seu buffer de 22ms. À medida que a carga do cliente cresce, vocês vão violar.' O CTO se surpreende — a equipe achava que estava saudável. O plano de melhoria do CSA (otimizar consultas quentes, adicionar cache) visa reduzir σ para 10ms e recentrar para 150ms, Cpk projetado = 1,67. O CSAM liga isso ao negócio: 'Com maior capacidade, sua plataforma sustenta o desempenho à medida que vocês escalam o consumo com aquele cliente corporativo.'</p>",
  csaExample: "<p>Um CSA calcula o Cpk no tempo de execução de uma Azure Function App. Linha de base estável (gráfico de controle verificado): μ = 850ms, σ = 120ms, limite de especificação (SLO) = 1000ms. Cpk = (1000 − 850) / (3 × 120) = 0,42. Não capaz. Análise: uma única consulta de banco de dados no caminho quente consome 700ms em média, com alta variância. Contramedida: adicionar cache de resultado de consulta. Pós-melhoria: μ = 320ms, σ = 40ms, Cpk = 2,27 (altamente capaz). O CSA trava um novo gráfico de controle na linha de base melhorada e configura um alerta se o Cpk tender abaixo de 1,67, como aviso precoce antes da violação de SLO.</p>",
  recap: ["O Cpk mede a capacidade real; o Cp mede a potencial. Ambos exigem um processo estável", "Cpk < 1,0 = não capaz. Cpk ≥ 1,33 é a meta padrão; ≥ 2,0 é Seis Sigma", "Cpk baixo porque σ é alto? Reduza a variação. Porque μ está descentralizada? Centre a média", "A capacidade é um indicador antecedente: Cpk 0,33 com desempenho dentro da especificação prevê violação futura", "Calcule o Cpk em Controlar do DMAIC, revisões trimestrais de saúde e discussões de projeto de SLO"],
  questions: [
    {
      prompt: "O que o Cpk mede que o Cp não mede?",
      options: ["Variação de longo prazo em vez de variação de curto prazo.", "A centralização do processo &mdash; a capacidade real considerando se a média está no meio entre os limites de especificação.", "O número total de oportunidades por milhão.", "Pontuações de satisfação do cliente contra a especificação."],
      correctIndex: 1,
      explanation: "Cp = (LSE &minus; LIE) / 6&sigma; supõe que o processo está centrado. O <strong>Cpk</strong> = mín((LSE &minus; &mu;)/3&sigma;, (&mu; &minus; LIE)/3&sigma;) penaliza processos descentralizados, então reflete a capacidade do mundo real."
    },
    {
      prompt: "Um cliente diz &ldquo;atingimos nosso SLO de latência P99 no trimestre passado.&rdquo; A análise de capacidade mostra Cpk = 0,33. O que isso lhe diz?",
      options: ["O SLO está sendo atingido com bastante folga.", "O processo não é capaz &mdash; a conformidade recente é sorte e as violações são previsíveis à medida que a carga cresce.", "O Cpk não se aplica a métricas de latência.", "O cliente deve apertar a especificação imediatamente."],
      correctIndex: 1,
      explanation: "Cpk &lt; 1,0 significa que o processo <strong>não é capaz</strong>. Atingir a especificação é sorte, não capacidade. O trabalho do CSA é traduzir o número em &ldquo;problema à frente&rdquo; antes que o próximo aumento de carga cause uma violação."
    },
    {
      prompt: "Qual valor de Cpk de regra prática é a meta padrão para &ldquo;capaz&rdquo;?",
      options: ["Cpk &ge; 0,5", "Cpk &ge; 1,0", "Cpk &ge; 1,33", "Cpk &ge; 3,0"],
      correctIndex: 2,
      explanation: "A convenção é <strong>Cpk &ge; 1,33 = capaz</strong>; &ge; 1,67 = altamente capaz; &ge; 2,0 é a meta Seis Sigma (~3,4 defeitos por milhão de oportunidades com deslocamento)."
    },
    {
      prompt: "Qual é o pré-requisito chave para que um cálculo de Cpk seja significativo?",
      options: ["A equipe deve ter ao menos um membro Faixa Preta.", "O processo deve ser estável &mdash; um gráfico de controle sob controle é necessário primeiro.", "O conjunto de dados deve ter ao menos 1.000 observações.", "O cliente deve ter solicitado explicitamente um número de Cpk."],
      correctIndex: 1,
      explanation: "A capacidade de um <strong>processo fora de controle não tem significado</strong>. Você precisa de um processo estável (via gráficos de controle) e limites de especificação de CTQ definidos antes de o Cpk ter qualquer sinal."
    },
    {
      prompt: "O Cpk está baixo porque a variação é ampla e a média fica perto de um limite de especificação. Para quais duas alavancas de melhoria isso aponta?",
      options: ["Contratar mais engenheiros e executar mais testes.", "Reduzir a variação (&sigma;) e centrar a média (&mu;).", "Afrouxar a especificação e aceitar a variação.", "Aumentar o tamanho da amostra e recalcular."],
      correctIndex: 1,
      explanation: "Os ganhos de Cpk vêm de duas alavancas: <strong>reduzir a variação</strong> (melhoria de processo, &sigma; mais estreito) e <strong>centrar a média</strong> (afastar &mu; do limite de especificação mais próximo). Ambas entregam ganho real de capacidade."
    }
  ]
},
"p-value": {
  id: "p-value",
  title: "O p-valor: Sinal vs Ruído",
  group: "Medição & Controle",
  duration: "30 min",
  executiveSummary: "Um p-valor é a probabilidade de ver um resultado pelo menos tão extremo quanto o observado, se a hipótese nula (nenhum efeito real) fosse verdadeira. É o teste de evidência padrão para distinguir uma melhoria genuína de variação aleatória. Na MC, ele vive nas fases Analisar e Melhorar: antes de você afirmar que uma mudança funcionou, o p-valor pergunta 'isso poderia ser apenas ruído?' Bem usado, é o portão de pensamento convergente que impede uma equipe de declarar vitória sobre um resultado que é, na verdade, acaso. Mal usado — p-hacking, confundi-lo com importância ou ler 'nenhuma diferença' em um p alto — produz falsa confiança. Este módulo cobre o que significa, como é calculado, onde se encaixa, como é mal utilizado e como evitar as armadilhas.",
  whatYouGain: [
    "Declarar com precisão o que um p-valor é — e o que não é — para que você nunca o confunda com a probabilidade de a nula ser verdadeira",
    "Calcular um do início ao fim: enunciar hipóteses, escolher o teste certo, calcular a estatística, ler a probabilidade de cauda, comparar com alfa",
    "Posicionar o p-valor em Analisar e Melhorar do DMAIC como o portão de evidência que separa uma melhoria real de ruído",
    "Reconhecer o mau uso — p-hacking, parada opcional, significância estatística vs prática, aceitar a nula — quando o vir",
    "Aplicar as salvaguardas: pré-registrar o teste, dimensionar a amostra, relatar tamanho de efeito e intervalos de confiança, corrigir para comparações múltiplas"
  ],
  explanation: "<p><strong>O que é.</strong> Um p-valor responde a uma única pergunta estreita: <em>se realmente não houvesse efeito (a hipótese nula, H<sub>0</sub>, é verdadeira), quão provável é que a amostragem aleatória sozinha produzisse um resultado pelo menos tão extremo quanto o que observei?</em> Um p-valor pequeno significa que os dados seriam surpreendentes sob 'nenhum efeito', então você tem evidência contra a nula. Um limiar comum (o nível de significância, &alpha;) é 0,05. <strong>O que não é:</strong> um p-valor <em>não</em> é a probabilidade de a nula ser verdadeira, não é a probabilidade de o seu resultado ter acontecido por acaso e não é uma medida de quão grande ou importante é o efeito. p = 0,03 não significa '97% de chance de a melhoria ser real.'</p><p><strong>Como calculá-lo.</strong> A mecânica é sempre os mesmos cinco passos: (1) Enuncie a nula (ex.: 'a latência média após a mudança é igual à média antes') e a alternativa. (2) Escolha o teste que corresponde aos seus dados e pergunta &mdash; um <strong>teste t de duas amostras</strong> para comparar duas médias, um <strong>teste z de duas proporções</strong> ou <strong>qui-quadrado</strong> para comparar taxas de defeito/aprovação, <strong>ANOVA</strong> para mais de dois grupos ou um teste não paramétrico (Mann-Whitney) quando os dados são assimétricos. (3) Calcule a estatística de teste a partir da amostra (para um teste t, aproximadamente a diferença de médias dividida pelo seu erro padrão). (4) Encontre o p-valor: a área na(s) cauda(s) da distribuição dessa estatística além do valor observado &mdash; na prática você o lê em software (scipy.stats do Python, R, Minitab, até uma planilha) em vez de à mão. (5) Compare com &alpha;: se p &le; &alpha;, rejeite a nula; se p &gt; &alpha;, você tem evidência insuficiente para rejeitá-la.</p><p><strong>Por que importa para a MC.</strong> A melhoria contínua está cheia de comparações antes/depois, e todo processo tem variação natural. Sem um teste, uma equipe verá 'incidentes caíram de 8 para 6' e declarará vitória &mdash; quando 6 pode ser uma flutuação comum. O p-valor é o <strong>portão de pensamento convergente</strong>: ele força evidência antes do compromisso e protege contra a convergência prematura. Em <strong>Analisar</strong> do DMAIC, ele confirma que um fator X suspeito está realmente associado ao resultado Y, não por coincidência. Em <strong>Melhorar</strong>, confirma que a mudança piloto de fato moveu a métrica além do que o ruído poderia explicar. É a versão formal de 'ir devagar para ir rápido.'</p><p><strong>Onde, quando e como usá-lo.</strong> Use-o quando tiver variação e precisar distinguir sinal de ruído, e quando as suposições de dados do teste escolhido forem razoavelmente atendidas. Decida &alpha; <em>e</em> o tamanho da amostra <em>antes</em> de coletar dados (uma análise de poder diz quantas observações você precisa para detectar um efeito que lhe importaria). Combine o p-valor com um <strong>gráfico de controle</strong> (o processo está ao menos estável?) e sempre o relate junto a um <strong>tamanho de efeito e intervalo de confiança</strong> para que a audiência veja tanto 'é real?' quanto 'é grande o suficiente para importar?'</p><p><strong>Como é mal utilizado.</strong> (1) <strong>p-hacking / pesca:</strong> fatiar os dados em muitos subgrupos ou testar muitas métricas até algo cair abaixo de 0,05 e relatar só isso. (2) <strong>Parada opcional:</strong> espiar o resultado corrente e parar no momento em que p cai abaixo de 0,05 &mdash; isso fabrica falsos positivos. (3) <strong>Significância estatística vs prática:</strong> com uma amostra enorme, uma mudança trivial de 2&nbsp;ms de latência pode ser 'significativa', mas sem sentido; inversamente, uma melhoria real pode não atingir 0,05 em uma amostra minúscula. (4) <strong>Aceitar a nula:</strong> ler p &gt; 0,05 como 'provado que não há diferença' &mdash; ausência de evidência não é evidência de ausência. (5) <strong>Má interpretação:</strong> tratar p como a probabilidade de o resultado ser acaso, ou mudar para um teste unicaudal só para passar raspando do limiar. (6) <strong>Ignorar suposições:</strong> rodar um teste t em dados fortemente assimétricos ou em um processo instável.</p><p><strong>Como evitar o mau uso.</strong> Pré-registre a hipótese, o teste, &alpha; e o tamanho da amostra antes de olhar os dados. Defina o efeito mínimo que de fato importaria para o negócio e relate o <strong>tamanho de efeito e o intervalo de confiança</strong>, não apenas o p-valor. Dimensione a amostra com uma análise de poder e não pare cedo. Quando testar muitos fatores de uma vez, <strong>corrija para comparações múltiplas</strong> (ex.: Bonferroni). Verifique as suposições do teste e use uma alternativa não paramétrica quando elas falharem. Formule um p-valor alto como 'evidência insuficiente de uma diferença', nunca 'prova de nenhuma diferença'. E replique ou confirme um resultado importante antes de apostar o roteiro nele.</p>",
  csamExample: "<p>O líder de operações de um cliente relata orgulhosamente que um novo processo de triagem cortou os incidentes mensais de 8 para 6 &mdash; 'uma melhoria de 25%' &mdash; e quer implantá-lo em todo lugar. O CSAM pisa no freio: com apenas um mês de dados e variância mês a mês historicamente alta, um teste de duas amostras sobre o histórico disponível dá p = 0,18. Isso não é evidência de uma mudança real; 6 cabe confortavelmente dentro do ruído normal. O CSAM reformula: 'Isto pode estar funcionando, mas ainda não conseguimos distingui-lo de um bom mês. Vamos manter a mudança, coletar mais três meses e observá-la em um gráfico de controle antes de comprometer a organização com ela.' Isso evita a convergência prematura &mdash; declarar vitória sobre o acaso &mdash; e protege a credibilidade da próxima recomendação respaldada por evidência.</p>",
  csaExample: "<p>Um CSA pilota uma mudança de cache em uma Azure Function e roda um teste t de duas amostras no tempo de resposta: antes &mu; = 850&nbsp;ms (n = 4.000), depois &mu; = 320&nbsp;ms (n = 4.000), p &lt; 0,001. A melhoria é real, não ruído &mdash; e o CSA também relata o tamanho de efeito: uma redução de 62% com um intervalo de confiança de 95% de aproximadamente 510&ndash;550&nbsp;ms, então é tanto estatística quanto praticamente significativa. Em um segundo ajuste, o teste retorna p = 0,04, mas a média cai apenas 3&nbsp;ms em uma amostra de 500.000 chamadas. O CSA explicitamente não reivindica vitória: 'Estatisticamente detectável, praticamente irrelevante.' Ao pré-decidir o tamanho da amostra e o efeito mínimo significativo, e recusando-se a fazer p-hacking em dezenas de submétricas, o CSA mantém honesta a evidência da fase Melhorar.</p>",
  recap: [
    "Um p-valor é a probabilidade de um resultado pelo menos tão extremo quanto o observado se a nula (nenhum efeito) fosse verdadeira — não a probabilidade de a nula ser verdadeira, e não uma medida de tamanho de efeito",
    "Calcule-o em cinco passos: enuncie as hipóteses, escolha o teste certo, calcule a estatística, leia a probabilidade de cauda, compare com alfa (comumente 0,05)",
    "Na MC, é o portão de evidência em Analisar e Melhorar do DMAIC — separa uma melhoria genuína da variação comum e evita a convergência prematura",
    "Mau uso comum: p-hacking, parada opcional, confundir significância estatística com prática e ler 'nenhuma diferença' de um p-valor alto",
    "Evite o mau uso: pré-registre o teste e o tamanho da amostra, relate tamanho de efeito e intervalos de confiança, corrija para comparações múltiplas, verifique as suposições e combine com um gráfico de controle",
    "Sempre responda a duas perguntas, não uma: 'É real?' (p-valor) e 'É grande o suficiente para importar?' (tamanho de efeito)"
  ],
  questions: [
    {
      prompt: "O que um p-valor realmente representa?",
      options: [
        "A probabilidade de a hipótese nula ser verdadeira.",
        "A probabilidade de observar um resultado pelo menos tão extremo quanto o visto, supondo que a hipótese nula seja verdadeira.",
        "A probabilidade de a melhoria ser real e valer a pena implantar.",
        "O tamanho do efeito que a mudança produziu."
      ],
      correctIndex: 1,
      explanation: "Um p-valor é a probabilidade de dados <strong>pelo menos tão extremos</strong> quanto os observados <em>se a nula fosse verdadeira</em>. Não é a probabilidade de a nula ser verdadeira, não é a chance de o resultado ser acaso e não é uma medida de quão grande é o efeito."
    },
    {
      prompt: "Em um projeto DMAIC, onde o p-valor mais naturalmente se encaixa?",
      options: [
        "Em Definir, para escrever a declaração do problema.",
        "Em Analisar e Melhorar, para confirmar que um fator está realmente relacionado ao resultado e que uma mudança moveu a métrica além do ruído.",
        "Em Controlar, como a única ferramenta de monitoramento contínuo.",
        "Não tem papel na MC; é puramente acadêmico."
      ],
      correctIndex: 1,
      explanation: "O p-valor é o <strong>portão de evidência</strong> em Analisar (X está realmente associado a Y?) e Melhorar (a mudança superou a variação aleatória?). É o passo de pensamento convergente que impede uma equipe de declarar vitória sobre ruído."
    },
    {
      prompt: "Um teste em 500.000 requisições mostra uma redução de latência de 3 ms com p = 0,04. Qual é a interpretação correta?",
      options: [
        "Uma vitória clara &mdash; p &lt; 0,05, então implante em todo lugar imediatamente.",
        "Estatisticamente detectável, mas praticamente irrelevante; significância não é o mesmo que importância.",
        "O teste é inválido porque a amostra é grande demais.",
        "O p-valor prova que o efeito de 3 ms está exatamente correto."
      ],
      correctIndex: 1,
      explanation: "Com uma amostra muito grande, um efeito trivial pode passar do limiar &alpha;. Esta é a armadilha da <strong>significância estatística vs prática</strong>: sempre relate o tamanho de efeito e julgue a mudança contra uma diferença mínima significativa."
    },
    {
      prompt: "Qual destes é um mau uso clássico de p-valores?",
      options: [
        "Decidir alfa e o tamanho da amostra antes de coletar dados.",
        "Testar muitos subgrupos ou métricas até um cair abaixo de 0,05 e relatar apenas esse (p-hacking).",
        "Relatar um intervalo de confiança junto ao p-valor.",
        "Corrigir para comparações múltiplas ao rodar muitos testes."
      ],
      correctIndex: 1,
      explanation: "O <strong>p-hacking</strong> (e a parada opcional &mdash; espiar e parar quando p cai abaixo de 0,05) fabrica falsos positivos. As outras opções são exatamente as salvaguardas que evitam o mau uso."
    },
    {
      prompt: "Uma comparação retorna p = 0,18. Qual é a conclusão correta?",
      options: [
        "Prova que não há diferença entre os dois grupos.",
        "Há evidência insuficiente para rejeitar a nula; você ainda não consegue distinguir o efeito do ruído.",
        "A melhoria tem 18% de probabilidade de ser real.",
        "Você deve mudar para um teste unicaudal para passar abaixo de 0,05."
      ],
      correctIndex: 1,
      explanation: "Um p-valor alto significa <strong>evidência insuficiente de uma diferença</strong> &mdash; ausência de evidência não é evidência de ausência. Não prova igualdade, e recorrer a um teste unicaudal para forçar significância é, em si, mau uso."
    }
  ]
},
"value": {
  id: "value",
  title: "Valor",
  group: "Definição de Valor & Qualidade",
  duration: "30 min",
  executiveSummary: "Valor é tudo aquilo que o cliente está disposto a financiar — declarado nos termos dele, não nos do CSA. Toda atividade em um engajamento é de agregação de valor (VA), não agregação de valor necessária (NNVA) ou puro desperdício (NVA). Definir o valor com precisão é o movimento que separa engajamentos que se justificam na renovação daqueles que produzem movimento sem resultado.",
  whatYouGain: [
    "Conversas de renovação fundamentadas em resultados medidos do cliente em vez de registros de atividade",
    "Um referencial para dizer 'não' a pedidos de baixo valor sem prejudicar relacionamentos",
    "A capacidade de justificar as horas do CSA à liderança por resultados, não por esforço",
    "Uma forma estruturada de encontrar e eliminar os 40% do tempo de agenda que são puro desperdício",
    "Clareza de engajamento: otimizações de custo justificadas por impacto real no negócio do cliente"
  ],
  explanation: "<p>A agenda de um CSA se enche de trabalho de baixo valor — reuniões de status recorrentes, pilotos exploratórios que nunca entram em produção, apresentações reescritas para novos stakeholders. Sem uma lente de valor explícita, o engajamento parece ocupado e não produz nada que o cliente defenda na renovação. Com uma lente de valor, toda atividade é questionada contra 'o cliente pagaria por isso se fosse cobrado?'</p><p>O valor tem três enquadramentos úteis: <strong>Definido pelo cliente</strong> (valor é aquilo pelo qual o cliente pagaria; se ele não vê nem mede, não é valor para ele); <strong>Moldado por resultado, não por entrega</strong> ('Entregamos a avaliação WAF' é uma entrega; 'Reduzimos a indisponibilidade não planejada em 40% ao longo de 90 dias' é um resultado); e os <strong>três baldes do Lean</strong>: a agregação de valor (VA) transforma o serviço de um modo pelo qual o cliente pagaria; a não agregação de valor (NVA) é puro desperdício a eliminar; a não agregação de valor necessária (NNVA) é exigida por conformidade ou contrato, mas não cria valor diretamente — minimize-a, não a elimine.</p><p>Um engajamento saudável é majoritariamente VA, com NNVA deliberadamente pequeno, e elimina NVA continuamente. A maioria dos engajamentos que descarrilham é pesada em NVA sem ninguém notar. Durante uma auditoria, um CSA típico descobre 38% de VA, 22% de NNVA, 40% de NVA. Esses 40% de NVA — reuniões redundantes, apresentações duplicadas, reexplicar a mesma arquitetura a novos stakeholders — são a oportunidade de recuperação.</p>",
  csamExample: "<p><strong>Cenário CSAM:</strong> Você está gerenciando a renovação de uma conta estratégica. Em vez de começar com um resumo de atividades ('entregamos 47 achados WAF, realizamos 12 syncs de arquitetura, produzimos 8 apresentações'), você começa com valor na linguagem do cliente: 'Reduzimos os incidentes Sev B de 312/mês para 84/mês (melhoria de 73%), cortamos o gasto de AKS de US$ 4,20 para US$ 2,85 por 1 milhão de transações e ganhamos 30 pontos de segurança no Defender — movendo a organização de 58 para 88 no modelo de maturidade de CSA.' Você criou um painel trimestral que acompanha esses resultados, ligou cada atividade de engajamento a uma dessas métricas e classificou 40% das atividades do trimestre anterior como NVA, que você eliminou. A conversa de renovação agora está ancorada em impacto de negócio, não em esforço.</p>",
  csaExample: "<p><strong>Cenário CSA:</strong> Seu cliente pede um hackathon de 3 dias sobre o Azure AI Foundry. Parece divertido, mas a espinha de valor do seu engajamento é 'confiabilidade da API de checkout (P95 < 400ms) e custo de AKS (≤ US$ 2,85/1M txns).' O hackathon de IA não se mapeia a nenhum dos dois. Você reformula: 'Isto é valor de alto potencial, mas não se encaixa na declaração de valor do engajamento atual. Vamos adicioná-lo ao escopo do próximo trimestre se seu patrocinador de negócio concordar, ou executá-lo como um engajamento FastTrack separado.' Resultado: o hackathon acontece no trimestre seguinte com patrocínio adequado e uma meta de valor definida; ambos os engajamentos permanecem coerentes em valor, e você protegeu o sprint de 90 dias focado nos resultados que o cliente está pagando agora.</p>",
  recap: [
    "Valor é definido pelo cliente e moldado por resultado — medido na moeda do cliente (US$ economizados, indisponibilidade evitada, time-to-market, pontos de secure-score), nunca em atividade do CSA",
    "Classifique todas as atividades em VA (agregação de valor), NNVA (não agregação de valor necessária) e NVA (puro desperdício) — a maioria dos engajamentos é 40% NVA e pode recuperar esse tempo imediatamente",
    "Marque cada atividade com um vínculo de valor mensurável — se você não consegue traçar a linha da atividade até um resultado do cliente, a atividade é suspeita",
    "Na entrada, pergunte ao cliente: 'Se formos cortados pela metade em 12 meses, o que você lutaria para manter?' Essa resposta é a espinha de valor do engajamento",
    "Relate o valor na EBR/QBR em um slide, nos termos do cliente, sem métricas de atividade do CSA — esse slide vale mais para a renovação do que 30 slides de atividade"
  ],
  questions: [
    {
      prompt: "Quem define o valor em um engajamento Lean?",
      options: [
        "O CSA, com base na excelência técnica.",
        "O cliente — nos termos dele (receita, indisponibilidade, US$ economizados, time-to-market, engenheiros desbloqueados).",
        "A liderança da Microsoft, com base em prioridades estratégicas.",
        "A equipe de conta, com base em metas de consumo."
      ],
      correctIndex: 1,
      explanation: "Valor é sempre declarado no <strong>vocabulário do cliente</strong>. Se o cliente não o vê, não ouve falar dele ou não o mede, não é valor para ele — independentemente de quão virtuosa a atividade pareça internamente."
    },
    {
      prompt: "Quais são os três baldes do Lean para classificar atividades?",
      options: [
        "Prioridade Alta, Média, Baixa.",
        "Agregação de valor (VA), Não agregação de valor (NVA) e Não agregação de valor necessária (NNVA).",
        "Estratégico, Tático, Operacional.",
        "Planejar, Fazer, Verificar."
      ],
      correctIndex: 1,
      explanation: "A VA transforma o produto de um modo pelo qual o cliente pagaria; a <strong>NVA é puro desperdício</strong> a eliminar; a NNVA (ex.: evidência de SOC 2) é exigida, mas não cria valor diretamente — minimize-a."
    },
    {
      prompt: "Um CSA classifica os últimos 90 dias como 38% VA, 22% NNVA, 40% NVA. O que isso sinaliza?",
      options: [
        "O engajamento está saudável porque mais de um terço é VA.",
        "Os 40% de NVA são a oportunidade de recuperação — consolide reuniões, elimine apresentações duplicadas, automatize o resto.",
        "O CSA deve solicitar mais orçamento para absorver o overhead.",
        "A NNVA deve ser reduzida a zero antes de qualquer outra coisa."
      ],
      correctIndex: 1,
      explanation: "Um engajamento saudável é majoritariamente VA com NNVA deliberadamente pequeno. <strong>Os 40% de NVA são a oportunidade</strong>; é onde o tempo de agenda pode ser recuperado e redirecionado para trabalho de agregação de valor que o cliente defenderá na renovação."
    },
    {
      prompt: "Como o valor deve ser medido?",
      options: [
        "Pelo número de reuniões assistidas e tickets fechados.",
        "Na moeda do cliente — US$ economizados, indisponibilidade evitada, horas-engenheiro desbloqueadas, time-to-market encurtado, secure-score ganho.",
        "Pelo total de horas do CSA faturadas à conta.",
        "Pelo número de slides produzidos para a QBR."
      ],
      correctIndex: 1,
      explanation: "Atividade não é valor. Meça na <strong>moeda do cliente</strong>: impacto em US$, minutos de indisponibilidade evitados, RU/s recuperados, delta de NSAT. \"Horas entregues\" e \"apresentações produzidas\" são insumos, não resultados."
    },
    {
      prompt: "O CFO de um cliente usa um painel de gastos no Power BI que o CSA construiu para aprovar US$ 1,2 mi em modernização. Esse painel é VA, NVA ou NNVA?",
      options: [
        "NVA — relatório que não muda nada diretamente.",
        "NNVA de alto valor — exigida para a decisão, mas não transforma o produto diretamente, e claramente a montante do valor financiado.",
        "VA apenas se for automatizado.",
        "Puro overhead que deveria ser eliminado."
      ],
      correctIndex: 1,
      explanation: "O pensamento de valor é <strong>sensível ao contexto</strong>. Um painel que leva a US$ 1,2 mi de modernização financiada não é desperdício, mesmo que não transforme um serviço diretamente. O painel é o meio; o financiamento é o valor."
    }
  ]
},
"voc": {
  id: "voc",
  title: "Voz do Cliente (VOC)",
  group: "Definição de Valor & Qualidade",
  duration: "30 min",
  executiveSummary: "A Voz do Cliente (VOC) é a captura estruturada do que os clientes de fato precisam, expressa nas palavras deles, e a tradução dessas necessidades em requisitos mensuráveis (CTQs). Sem VOC, as equipes otimizam o que é conveniente medir em vez do que os clientes valorizam — o que desperdiça esforço de engenharia e desorienta as prioridades do engajamento.",
  whatYouGain: [
    "Alinhamento sobre o que de fato importa para o cliente, não o que a equipe supõe importar",
    "Descoberta de expectativas não ditas (requisitos 'básicos' de Kano) antes que virem escalonamentos",
    "Identificação de encantadores — capacidades que impulsionam desproporcionalmente renovação e satisfação",
    "Um referencial para atualizar as prioridades do cliente em uma cadência, capturando o desvio antes que a estratégia de engajamento fique obsoleta",
    "Prevenção da superengenharia de funcionalidades às quais os clientes são indiferentes"
  ],
  explanation: "<p>Uma equipe de SRE melhorou a latência P50 por 8 meses. Entrevistas de VOC com consumidores downstream revelaram que eles só se importavam com P99 e TTFB. Oito meses de trabalho real e mensurável foram irrelevantes para a necessidade real. <strong>Engenheiros otimizam o que é mensurável; o que é mensurável raramente é o que os clientes valorizam. A VOC fecha essa lacuna.</strong></p><p>A VOC tem três estágios: <strong>Capturar</strong> (declarações do cliente nas palavras dele, citações verbatim, observações), <strong>Traduzir</strong> (agrupar citações em declarações de necessidade) e <strong>Especificar</strong> (converter necessidades em especificações mensuráveis via CTQs). Fontes de captura incluem entrevistas e observações diretas (maior fidelidade), tickets de suporte e comentários de NPS (gratuitos, com perda), telemetria (o que os clientes fazem, não apenas dizem) e surrogados internos como a equipe de conta (úteis, mas enviesados).</p><p><strong>Formas de coletar VOC.</strong> Escolha o instrumento pela pergunta que você precisa responder e triangule entre vários &mdash; cada um carrega um viés diferente. <strong>Entrevistas estruturadas</strong> e <strong>observação contextual (Gemba)</strong> dão a maior fidelidade e fazem emergir necessidades não ditas, mas custam tempo e alcançam poucas pessoas. <strong>Pesquisas</strong> escalam: o NPS mede lealdade e advocacia, o CSAT mede satisfação com uma interação específica e o CES (Customer Effort Score) mede o quão difícil foi realizar algo &mdash; escolha aquele que corresponde à decisão. <strong>Tickets de suporte, escalonamentos e verbatins de NPS</strong> são gratuitos e contínuos, mas com perda e enviesados para os que reclamam. <strong>Telemetria e dados comportamentais</strong> mostram o que os clientes de fato fazem em vez do que dizem &mdash; os dois frequentemente discordam. <strong>Entrevistas de ganho/perda e de cancelamento</strong> expõem as necessidades que impulsionaram uma decisão de compra ou de saída. <strong>Surrogados internos</strong> (a equipe de conta) são convenientes, mas enviesados &mdash; use-os para formar hipóteses, depois confirme diretamente com o cliente. A disciplina: nunca confie em uma única fonte e dê mais peso ao sinal direto e empírico do que a alegações de segunda mão ou autorrelatadas.</p><p>O modelo Kano fornece um enquadramento útil: requisitos <strong>Básicos / Obrigatórios</strong> são expectativas não ditas — os clientes os esperam; a ausência mata a satisfação; a presença é invisível. Requisitos <strong>de Desempenho / Lineares</strong> escalam a satisfação com o desempenho (mais é melhor). Requisitos <strong>Encantadores / de Empolgação</strong> os clientes não sabem pedir; a presença cria lealdade. A VOC protege contra uma falha comum de engajamento: entregar excelência técnica de que o cliente não precisava.</p><p><strong>Incorporando a VOC à melhoria contínua.</strong> A VOC é a porta de entrada do ciclo de MC. Em <strong>Definir</strong>, ela estabelece o problema e os CTQs que se tornam sua linha de base e critérios de sucesso; em <strong>Medir</strong> e <strong>Analisar</strong>, ela o mantém ancorado à métrica que o cliente de fato valoriza; em <strong>Verificar</strong>, você valida a melhoria contra a VOC original em vez de um proxy interno; e você <strong>atualiza a VOC em uma cadência</strong> (trimestral é um padrão sensato) porque as necessidades derivam e o CTQ de ontem fica obsoleto silenciosamente. Passe as declarações capturadas por um Pareto de temas codificados para decidir qual necessidade abordar primeiro, depois converta o tema do topo em um CTQ SMART para que o próximo ciclo PDCA melhore algo que o cliente realmente sentirá.</p>",
  csamExample: "<p><strong>Cenário CSAM:</strong> Durante revisões trimestrais de negócio, você conduz breves entrevistas de VOC com os patrocinadores de negócio do cliente (CFO, CTO, VP de produto). Você faz perguntas abertas como 'Conte-me sobre sua maior frustração com nosso engajamento atual' e 'O que você adicionaria ao roteiro do próximo trimestre se o orçamento não fosse uma restrição?' As respostas são categorizadas como Básico (ex.: 'os logs devem persistir 90 dias'), Desempenho (ex.: 'a latência de checkout importa') ou Encantador (ex.: 'dev local reproduzível com um clique'). O encantador que custou 2 semanas para implementar moveu a taxa de renovação 18 pontos na coorte que o usou. Você compartilha esse achado com o executivo de conta e o CSM, ancorando a próxima expansão de contrato nessas prioridades validadas pelo cliente, em vez de suposições internas do roteiro da Microsoft.</p>",
  csaExample: "<p><strong>Cenário CSA:</strong> Durante a fase Definir de um projeto DMAIC, você conduz entrevistas de VOC com as equipes de SRE e de aplicação do cliente. Você observa o fluxo de triagem de incidentes deles e pergunta 'Qual é a métrica que o convenceria de que o problema de confiabilidade está resolvido?' Você captura verbatim: 'Latência P99 abaixo de 400ms no pico.' Você também descobre que eles monitoram tanto o Azure Monitor quanto uma stack de observabilidade legada on-premises — a VOC revela que o requisito 'os logs devem persistir 90 dias' não estava na arquitetura do Azure. Você traduz essas capturas em CTQs: P99 ≤ 400ms (janelas de 5 min, últimos 7 dias); ≥ 99,95% de taxa de sucesso (28 dias móveis); retenção de logs por 90 dias com capacidade de busca. Esses CTQs tornam-se os critérios de sucesso do termo de abertura do projeto e a definição de SLO.</p>",
  recap: [
    "A VOC captura o que os clientes precisam nas próprias palavras deles — não o que a equipe hipotetiza; perguntas abertas e observação direta funcionam melhor do que pesquisas",
    "Traduza a VOC em três categorias de Kano: Básico (expectativas não ditas que matam a satisfação se ausentes), Desempenho (mais é melhor) e Encantador (cria lealdade desproporcional)",
    "Atualize a VOC em uma cadência (trimestral recomendado) — as necessidades do cliente evoluem; suposições não documentadas decaem e direcionam a otimização para o que costumava importar",
    "Use a VOC para ancorar a tradução de CTQ — converta declarações de necessidade em requisitos de especificação SMART que se tornam CTQs, termos de abertura e SLOs",
    "A VOC evita a superengenharia — equipes que otimizam o que conseguem medir sem VOC entregam funcionalidades que os clientes não valorizam"
  ],
  questions: [
    {
      prompt: "Uma equipe de SRE melhorou a latência P50 por 8 meses. Entrevistas de VOC revelam que os consumidores downstream só se importam com P99 e TTFB. O que isso ensina sobre a VOC?",
      options: [
        "Melhorias de P50 são sempre esforço desperdiçado.",
        "Sem VOC, as equipes otimizam o que é conveniente medir em vez do que os clientes valorizam — 8 meses de trabalho real foram irrelevantes para a necessidade real.",
        "O trabalho de P99 deve sempre começar antes do trabalho de P50.",
        "A equipe de SRE deveria ter recusado o projeto."
      ],
      correctIndex: 1,
      explanation: "Engenheiros otimizam o que é mensurável; o que é mensurável raramente é o que os clientes valorizam. <strong>A VOC fecha essa lacuna</strong> — sem ela, a excelência técnica e o valor para o cliente se distanciam."
    },
    {
      prompt: "Quais são os três estágios de um esforço de VOC?",
      options: [
        "Pesquisar, Analisar, Relatar.",
        "Capturar (citações verbatim), Traduzir (em declarações de necessidade), Especificar (em CTQs com métricas).",
        "Planejar, Fazer, Verificar.",
        "Detectar, Triar, Mitigar."
      ],
      correctIndex: 1,
      explanation: "A VOC vai de <strong>Capturar → Traduzir → Especificar</strong>. Citações verbatim preservam a nuance, declarações de necessidade agrupam temas e os CTQs convertem necessidades em especificações mensuráveis com metas."
    },
    {
      prompt: "No modelo Kano, o que é um requisito \"Básico / Obrigatório\"?",
      options: [
        "Uma melhoria que os clientes pedem ativamente e adoram.",
        "Algo que os clientes esperam — a ausência mata a satisfação, mas a presença é invisível (tida como certa).",
        "Um encantador opcional que a equipe pode adicionar quando a capacidade permitir.",
        "Um item regulatório relevante apenas em auditorias."
      ],
      correctIndex: 1,
      explanation: "Requisitos <strong>Básicos / Obrigatórios</strong> são expectativas não ditas — como \"os logs devem persistir 90 dias para auditoria.\" A ausência deles quebra a confiança; a presença não rende crédito. A VOC é a forma de fazê-los emergir."
    },
    {
      prompt: "Qual é a forma recomendada de capturar a VOC?",
      options: [
        "Uma pesquisa de múltipla escolha de 4 perguntas projetada por engenheiros.",
        "Perguntas abertas (\"Conte-me sobre seu último dia ruim com X\"), observe além de perguntar e capture citações verbatim.",
        "Uma amostra de entrevista apenas com a liderança.",
        "Use apenas tickets de suporte e pule o contato direto."
      ],
      correctIndex: 1,
      explanation: "<strong>Perguntas abertas e observação direta</strong> com captura verbatim. Uma pesquisa projetada por engenheiros captura as hipóteses da equipe, não a voz do cliente — esse é o antipadrão a evitar."
    },
    {
      prompt: "Por que a VOC deve ser atualizada em uma cadência em vez de tratada como evento único?",
      options: [
        "Porque regulações exigem entrevistas trimestrais com clientes.",
        "As necessidades do cliente evoluem e suposições não documentadas decaem; uma VOC obsoleta direciona a otimização para o que costumava importar.",
        "Porque as equipes de métricas exigem entrada de dados recorrente.",
        "Porque o modelo Kano se reinicia a cada trimestre."
      ],
      correctIndex: 1,
      explanation: "<strong>As necessidades do cliente evoluem.</strong> O encantador de ontem vira o básico de hoje; a dor de hoje vira o problema resolvido de amanhã. Uma VOC recorrente mantém o engajamento mirado no que importa agora."
    }
  ]
},
"ctq": {
  id: "ctq",
  title: "Crítico para a Qualidade (CTQ)",
  group: "Definição de Valor & Qualidade",
  duration: "30 min",
  executiveSummary: "As árvores Crítico para a Qualidade (CTQ) traduzem necessidades qualitativas do cliente vindas da VOC em especificações específicas, mensuráveis e atingíveis com metas e limites. Um CTQ tem três elementos: uma necessidade, um driver (a dimensão dessa necessidade) e um requisito (meta + limites de especificação). Sem CTQs, as necessidades do cliente permanecem vagas demais para engenheirar contra elas ou medir progresso.",
  whatYouGain: [
    "Conversão de expectativas difusas do cliente em contratos testáveis e mensuráveis",
    "Limites de especificação (LSE, LIE) para análise de capacidade de processo e gráficos de controle",
    "Alinhamento entre a linguagem do cliente e as métricas de engenharia — nada de 'rápido' ou 'confiável', apenas P99 ≤ 800ms ou ≥ 99,95% de disponibilidade",
    "Documentação de SLO/SLA que espelha a árvore de CTQ, reduzindo duplicação e desvio",
    "Um referencial para testes de aceitação que reflete o que o cliente de fato valoriza, não a conveniência de engenharia"
  ],
  explanation: "<p>A expectativa de um cliente de que 'a API deve ser rápida' não lhe diz nada. Um CTQ a converte: dimensão = tempo de resposta; meta = P99 ≤ 800ms; limites de especificação = 0 a 800ms; janela de medição = janelas de 5 min nos últimos 7 dias. Antes do CTQ: 18 meses de discordância sobre o que 'rápido' significa. Depois: um número, um painel e um SLO.</p><p>Uma árvore de CTQ tem três níveis: <strong>Necessidade</strong> ('Checkout rápido'), <strong>Driver</strong> (a dimensão dessa necessidade: tempo de resposta, taxa de retry, etc.) e <strong>Requisito</strong> (uma especificação: P99 ≤ 800ms em janelas de 5 min). Bons requisitos de CTQ são Específicos (dimensão única), Mensuráveis (dados já coletados ou coletáveis), Atingíveis (comprovadamente possíveis), Relevantes para o cliente (mover isto move a satisfação), Temporais (em qual janela?) e Limitados (tanto LSE quanto LIE, ou um com justificativa declarada).</p><p>Os CTQs vêm em par com o trabalho de capacidade de processo — eles são os limites de especificação que o cálculo de Cpk usa. Os CTQs tornam-se os critérios de sucesso em termos de abertura de projeto, as métricas para a fase Medir do DMAIC, as especificações para gráficos de controle e o contrato para a transferência. A disciplina de escrever CTQs é o momento em que expectativas difusas se tornam contratos testáveis e a ponte entre Definir e Medir no DMAIC.</p>",
  csamExample: "<p><strong>Cenário CSAM:</strong> A liderança de produto do cliente quer 'melhor time-to-market.' Em vez de partir para um discurso de modernização, você pede um CTQ. A conversa: 'Qual é a diferença mensurável que você gostaria de ver?' Resposta: 'Lead time abaixo de 1 dia P90; taxa de falha de mudança abaixo de 5%.' Você documenta o CTQ no termo de abertura do engajamento: duas dimensões (lead time e CFR), duas metas, duas janelas de medição (P90, 90 dias móveis) e a fonte de dados (métricas de CI/CD). Esse CTQ torna-se o critério de sucesso do trimestre — e a história que você conta na renovação: 'O lead time caiu de 7 dias para 18 horas; o CFR caiu de 18% para 3%.' O CFO entende o que entregar mais rápido significa para a receita.</p>",
  csaExample: "<p><strong>Cenário CSA:</strong> A equipe do seu cliente precisa de 'consultas Cosmos confiáveis.' Você constrói uma árvore de CTQ: Necessidade = consultas confiáveis; Driver = consumo de RU P99 por consulta; Requisito = ≤ 12 RU P99, medido a partir de telemetria em nível de consulta ao longo de 24 horas móveis. Durante a fase Medir, você estabelece a linha de base do estado atual (P99 é 34 RU), define os limites do gráfico de controle (LSC = 12, LIC = 0) e o usa para avaliar o redesenho da chave de partição: sucesso significa P99 ≤ 12 RU em estado estável. O CTQ também é o teste de aceitação para a mudança de código — sem deploy sem o deslocamento da linha de base para o requisito.</p>",
  recap: [
    "O CTQ é a ponte entre Definir (VOC) e Medir (DMAIC) — converte necessidades do cliente em especificações mensuráveis com metas e limites",
    "Três níveis: Necessidade (o que o cliente quer) → Driver (dimensão) → Requisito (meta + LSE/LIE + janela de medição)",
    "Escreva CTQs com o cliente e a equipe de engenharia juntos — especificações escritas por engenheiros frequentemente definem metas mais apertadas do que a verdadeira necessidade do cliente, desperdiçando capacidade",
    "Os CTQs tornam-se SLOs, critérios de aceitação, limites de gráfico de controle e métricas de sucesso do projeto — use a mesma especificação em todos os documentos para reduzir o desvio",
    "Valide as traduções de CTQ com o cliente — leia a especificação de volta; confirme que ela captura a necessidade original; itere se a tradução perdeu o sentido"
  ],
  questions: [
    {
      prompt: "Quais são os três níveis de uma árvore de CTQ?",
      options: [
        "Necessidade, Driver e Requisito.",
        "Definir, Medir e Controlar.",
        "Especificação, Linha de Base e Meta.",
        "Cliente, Engenharia e Operações."
      ],
      correctIndex: 0,
      explanation: "Uma árvore de CTQ tem três níveis: <strong>Necessidade</strong> (o que o cliente quer), <strong>Driver</strong> (dimensões dessa necessidade) e <strong>Requisito</strong> (meta + limites de especificação). Essa estrutura transforma expectativas do cliente em contratos testáveis."
    },
    {
      prompt: "Em qual fase do DMAIC os CTQs são principalmente desenvolvidos?",
      options: [
        "Fase Medir.",
        "Fase Definir.",
        "Fase Analisar.",
        "Fase Controlar."
      ],
      correctIndex: 1,
      explanation: "Os CTQs são desenvolvidos na <strong>fase Definir</strong>, traduzindo a Voz do Cliente e declarações de problema em especificações mensuráveis que guiam o resto do projeto."
    },
    {
      prompt: "O que SMART significa ao escrever um requisito de CTQ?",
      options: [
        "Stakeholder, Medição, Atingível, Relevante, Tempestivo.",
        "Específico, Mensurável, Atingível, Relevante, Temporal.",
        "Serviço, Métricas, Aceitável, Resultado, Direcionado.",
        "Stakeholder, Aprovado-por-gestor, Auditável, Realista, Rastreado."
      ],
      correctIndex: 1,
      explanation: "CTQs <strong>SMART</strong> são Específicos, Mensuráveis, Atingíveis, Relevantes e Temporais. Cada propriedade torna o requisito acionável."
    },
    {
      prompt: "Qual antipadrão você deve evitar ao definir CTQs?",
      options: [
        "Definir múltiplos drivers por necessidade.",
        "Incluir tanto LSE quanto LIE nos requisitos.",
        "Escrever limites especificados por engenheiros mais apertados do que a verdadeira necessidade do cliente.",
        "Mudar CTQs durante a fase Medir."
      ],
      correctIndex: 2,
      explanation: "O CTQ escrito por engenheiro acima da necessidade do cliente é o antipadrão chave. Por exemplo, definir P99 ≤ 50 ms quando o cliente aceitaria 500 ms <strong>desperdiça capacidade</strong> e desalinha o projeto da realidade."
    },
    {
      prompt: "Como os CTQs se relacionam com a análise de capacidade de processo?",
      options: [
        "Os CTQs são insumos que definem quais processos analisar.",
        "Os CTQs tornam-se os limites de especificação usados nos cálculos de Cpk.",
        "Os CTQs só são usados após a análise de capacidade estar completa.",
        "Os CTQs substituem inteiramente a necessidade de análise de capacidade."
      ],
      correctIndex: 1,
      explanation: "Os CTQs vêm em par com o trabalho de capacidade de processo — eles são os <strong>limites de especificação</strong> (LSE e LIE) que o cálculo de Cp/Cpk usa para avaliar a adequação do processo."
    }
  ]
},
"copq": {
  id: "copq",
  title: "Custo da Má Qualidade (COPQ)",
  group: "Definição de Valor & Qualidade",
  duration: "30 min",
  executiveSummary: "O Custo da Má Qualidade (COPQ) quantifica o que defeitos, retrabalho, escapes e prevenção perdida custam ao negócio — dividido em quatro baldes: falha interna, falha externa, avaliação e prevenção. Uma faixa comumente citada coloca o COPQ em organizações que não o medem em cerca de 15–40% do gasto total. Para CSAs, calcular o COPQ é uma das formas mais eficazes de financiar o trabalho de MC — uma vez que a liderança vê o custo da baixa qualidade, o investimento em prevenção fica mais fácil de justificar.",
  whatYouGain: [
    "Quantificação do custo atual de não melhorar — geralmente muito maior do que o custo de melhorar",
    "Um caso de negócio que inverte o enquadramento de 'MC é um custo' para 'má qualidade é um custo maior'",
    "Justificativa para o gasto em prevenção (treinamento, automação, revisões de design, suítes de teste) que de outra forma parece overhead",
    "Visibilidade do retrabalho escondido em roteiros como ciclos de 'v2', 'remediação' ou 'estabilização'",
    "Alinhamento entre finanças e engenharia sobre os mesmos números — tornando as decisões de investimento orientadas por dados"
  ],
  explanation: "<p>Programas de MC morrem quando a liderança os vê como custos, não investimentos. O COPQ inverte o enquadramento. <strong>Uma faixa comumente citada coloca o COPQ em organizações que não o medem em 15–40% do gasto total — um custo não financiado da baixa qualidade.</strong> O CFO de um cliente bloqueou mais 'investimento em DevOps.' O CSA calculou o COPQ a partir de horas de incidente, retrabalho de defeitos que escaparam e créditos a clientes ao longo de 12 meses: US$ 4,7 mi, ou 22% do gasto da plataforma. O CFO financiou um programa de prevenção de US$ 600 mil no trimestre seguinte. No fim do ano, o COPQ caiu para US$ 1,9 mi. Líquido: US$ 2,2 mi.</p><p>O COPQ tem quatro baldes tradicionais: <strong>Falha interna</strong> (retrabalho, refugo, builds falhos, deploys revertidos); <strong>Falha externa</strong> (defeitos encontrados pelo cliente, incidentes, créditos de SLA, cancelamento — o balde mais caro por defeito); <strong>Avaliação</strong> (inspeção de QA, teste manual, auditorias); <strong>Prevenção</strong> (treinamento, revisões de design, automação — o balde mais barato por dólar de COPQ reduzido). A progressão de uma organização que amadurece: externa → interna → avaliação → prevenção.</p><p>Para estimar o COPQ: escolha uma janela de 12 meses, quantifique cada balde em horas de engenharia e impacto em US$, some e expresse como % do gasto total, depois ligue metas de redução a projetos DMAIC ou Kaizen específicos. Uma faixa defensável supera a falsa precisão — relate o COPQ ±20% e faça verificação de sensibilidade das suposições.</p>",
  csamExample: "<p><strong>Cenário CSAM:</strong> Durante uma conversa de renovação, o CFO do cliente pergunta 'Por que deveríamos renovar com vocês em vez de contratar equipe interna?' Em vez de um discurso sobre expertise em Azure, você começa com o COPQ. Você mostra: antes do engajamento, o COPQ era 28% do gasto da plataforma (incidentes, apagar incêndios, retrabalho); após 6 meses do seu trabalho de Kaizen e confiabilidade, o COPQ é 11% do gasto. Economia líquida: US$ 2,1 mi anualizados, alcançada evitando os incidentes que costumavam queimar 40% do tempo de SRE. Você financiou um programa de prevenção de US$ 300 mil (automação, runbooks, revisões de design) e recuperou US$ 2,1 mi em custos de apagar incêndios. O CFO aprova a renovação. A conversa não foi sobre esforço; foi sobre o tamanho do imposto oculto que você eliminou.</p>",
  csaExample: "<p><strong>Cenário CSA:</strong> Seu cliente tem 87 deploys do Cosmos revertidos por ano, cada um custando 6 horas-engenheiro para investigar e remediar. Você calcula o COPQ: 87 × 6 h × US$ 150/h (taxa onerada) = US$ 78 mil/mês em custo de falha interna. Você adiciona a vazão de funcionalidades perdida (desenvolvedores trocando de contexto para apagar incêndios) e o dano à percepção do cliente. Total de falha interna: US$ 220 mil/ano. Você propõe um portão pré-merge que roda os testes de integração específicos do Cosmos antes de permitir a promoção — custo do investimento: US$ 40 mil para o harness de teste + automação. Resultado do ano 1: reversões caem 78% (19/ano), o COPQ de falha interna cai para US$ 50 mil. Retorno: 2 meses. Você quantificou o caso de negócio em termos que a liderança de engenharia do cliente entende: redução de COPQ.</p>",
  recap: [
    "O COPQ captura quatro baldes: Falha interna (retrabalho, builds falhos, reversões), Falha externa (incidentes, créditos de SLA, cancelamento), Avaliação (QA, teste, auditorias) e Prevenção (automação, treinamento, revisões de design)",
    "A falha externa é a mais cara por defeito; a Prevenção é a alavanca mais barata por dólar de COPQ reduzido — a progressão da organização que amadurece vai da esquerda para a direita",
    "Use o COPQ para financiar programas de MC e Kaizen — uma vez que a liderança vê o COPQ como uma grande parcela do gasto, um programa de prevenção fica mais fácil de justificar",
    "Expresse o COPQ como percentual do gasto total para portabilidade e comparação entre equipes; uma faixa defensável supera a falsa precisão",
    "Ligue metas de redução de COPQ a projetos específicos — cada esforço DMAIC ou Kaizen deve reivindicar uma parte da redução de COPQ para manter o foco no impacto de negócio"
  ],
  questions: [
    {
      prompt: "Quais são os quatro baldes tradicionais que compõem o COPQ?",
      options: [
        "Mão de obra, Materiais, Overhead, Lucro.",
        "Falha interna, Falha externa, Avaliação, Prevenção.",
        "Design, Construir, Testar, Implantar.",
        "Retrabalho, Falhas, Auditorias, Automação."
      ],
      correctIndex: 1,
      explanation: "O COPQ captura <strong>todos os custos</strong> da má qualidade: retrabalho interno, defeitos encontrados pelo cliente, inspeção/teste e trabalho de prevenção para evitar defeitos."
    },
    {
      prompt: "Qual balde do COPQ é tipicamente o mais caro por defeito?",
      options: [
        "Prevenção (treinamento, automação, revisões de design).",
        "Avaliação (inspeção, teste manual, auditorias).",
        "Falha interna (retrabalho, deploys revertidos).",
        "Falha externa (incidentes, créditos de SLA, cancelamento)."
      ],
      correctIndex: 3,
      explanation: "Defeitos encontrados pelo cliente — resposta a incidentes, créditos de SLA e cancelamento — são os mais caros. A <strong>Prevenção</strong> é a alavanca mais barata por dólar de COPQ reduzido."
    },
    {
      prompt: "Qual é o papel mais eficaz do COPQ ao propor um novo programa de MC ou Kaizen?",
      options: [
        "Mostrar à liderança quanto o programa vai custar.",
        "Documentar a linha de base de qualidade atual para auditoria.",
        "Justificar o programa como um investimento que reduz custos ocultos maiores.",
        "Substituir os processos tradicionais de orçamento."
      ],
      correctIndex: 2,
      explanation: "O COPQ inverte o enquadramento de \"MC é um custo\" para \"má qualidade é um custo maior.\" Mostrar o COPQ em 15–40% do gasto não medido justifica o <strong>investimento em prevenção</strong>."
    },
    {
      prompt: "Qual destes itens NÃO deve ser incluído em um cálculo de COPQ?",
      options: [
        "Deploys revertidos e retrabalho de emergência.",
        "Horas de incidente e mão de obra de apagar incêndios.",
        "Cancelamento de receita estimado por saídas de clientes relacionadas à qualidade.",
        "Salários normais de engenharia para trabalho de desenvolvimento de funcionalidades."
      ],
      correctIndex: 3,
      explanation: "O COPQ inclui retrabalho relacionado a defeitos e escalonamentos. NÃO inclui o custo base do <strong>trabalho de agregação de valor</strong> — apenas custos de desperdício e falha."
    },
    {
      prompt: "Por que expressar o COPQ como percentual do gasto total é mais útil do que relatar um valor absoluto em dólares?",
      options: [
        "Percentuais são mais simples de calcular sem um parceiro de finanças.",
        "Torna o COPQ portável e comparável entre equipes de tamanhos diferentes.",
        "Reduz o número absoluto relatado à liderança.",
        "Está em conformidade com normas contábeis e requisitos de auditoria."
      ],
      correctIndex: 1,
      explanation: "Um COPQ de US$ 2 mi é difícil de contextualizar sem o gasto total. Expressá-lo como percentual (22% vs. 5%) torna o <strong>verdadeiro impacto de negócio</strong> visível e comparável."
    }
  ]
},
"waste": {
  id: "waste",
  title: "8 Tipos de Desperdício",
  group: "Definição de Valor & Qualidade",
  duration: "30 min",
  executiveSummary: "Os 8 Desperdícios (DOWNTIME — Defeitos, Superprodução, Espera, Talento não utilizado, Transporte, Inventário, Movimento, Processamento extra) são a lista de verificação 360° do Lean para identificar atividade que não agrega valor em qualquer sistema. Para CSAs, os 8 Desperdícios se traduzem com clareza para o estate do Azure: RUs superprovisionados, VMs ociosas, ambientes obsoletos, stacks de observabilidade redundantes, egresso de dados desnecessário, engenheiros presos em trabalho repetitivo, loops lentos de resposta a incidentes e portões de aprovação redundantes. Use os 8 Desperdícios como uma caminhada estruturada durante otimizações de custo, revisões de confiabilidade e avaliações de modernização — cada categoria faz emergir uma classe diferente de oportunidade.",
  whatYouGain: [
    "Um referencial 360° estruturado para otimização de custo que vai além do rightsizing de VMs até Inventário, Processamento extra e Transporte",
    "Identificação de desperdício de processo (Espera, Movimento) que explica por que o MTTR é lento e os incidentes escalam",
    "Descoberta de Talento não utilizado — o desperdício mais caro — e a oportunidade de realocar engenheiros do trabalho repetitivo para o trabalho de roteiro",
    "Uma lente diagnóstica para casos de negócio de modernização (desperdício do estado atual vs. estado-alvo) que ressoa com líderes financeiros",
    "Uma caminhada baseada em cadência (trimestral) que captura o recrescimento do desperdício antes que ele se componha em problemas maiores"
  ],
  explanation: "<p>Engajamentos de otimização de custo frequentemente olham para apenas um desperdício — <strong>Superprodução</strong> (rightsizing) — e perdem o quadro maior. Um CSA foi solicitado a encontrar US$ 200 mil/ano em economia. O rightsizing encontrou US$ 90 mil. Uma caminhada estruturada dos 8 Desperdícios encontrou outros US$ 260 mil: 14 assinaturas ociosas (Inventário), 7 stacks de observabilidade redundantes (Processamento extra), US$ 40 mil/mês de egresso de dados entre regiões (Transporte) e 3 FTEs gastando 60% do tempo em trabalho repetitivo (Talento não utilizado). A lente de desperdício destravou 3× o pedido original.</p><p>O mnemônico DOWNTIME: <strong>D — Defeitos</strong> (incidentes, deploys falhos, reversões); <strong>O — Superprodução</strong> (RUs superprovisionados, VMs ociosas, planos de App Service superdimensionados); <strong>W — Espera</strong> (pipelines esperando aprovação manual, engenheiros esperando acesso); <strong>N — Talento não utilizado</strong> (engenheiros sêniores rodando tarefas manuais, cientistas de dados bloqueados por trabalho repetitivo); <strong>T — Transporte</strong> (egresso de dados entre regiões, cópias redundantes de dados); <strong>I — Inventário</strong> (ambientes obsoletos, discos órfãos, assinaturas não usadas); <strong>M — Movimento</strong> (troca de contexto entre 6 portais para triagem de incidentes); <strong>E — Processamento extra</strong> (pipelines de aprovação tripla, stacks de observabilidade duplicadas).</p><p>Use os 8 Desperdícios como uma caminhada estruturada: escolha o escopo, percorra cada desperdício em ordem com fontes de evidência (Azure Resource Graph, Cost Management, App Insights), quantifique cada achado, classifique os achados por Pareto, ligue cada um a uma hipótese, rode PDCA nos 3–5 principais e recaminhe trimestralmente.</p>",
  csamExample: "<p><strong>Cenário CSAM:</strong> Durante a QBR, você apresenta um caso de negócio de otimização de custo usando os 8 Desperdícios como cabeçalhos de seção. Cada seção tem 2–3 achados com impacto em US$ ou horas: Superprodução (US$ 8,4 mil/mês de Cosmos subutilizado), Espera (18 dias-eng bloqueados em portões de aprovação), Inventário (US$ 6,2 mil/mês de assinaturas obsoletas), Processamento extra (US$ 4,8 mil/mês de observabilidade duplicada), Transporte (US$ 11 mil/mês de egresso entre regiões), Movimento (MTTR +40% por triagem de incidentes em 5 portais). O CFO do cliente disse: 'Esta é a primeira análise de custo que vejo que parece completa em vez de uma lista de tamanhos de VM.' O referencial dos 8 Desperdícios fez o convencimento. Você prioriza os 3 principais desperdícios para a execução do próximo trimestre — o resto vai para um backlog que o cliente é dono.</p>",
  csaExample: "<p><strong>Cenário CSA:</strong> Durante um post-mortem de confiabilidade de um incidente Sev A, você estende a causa-raiz técnica (health probe agressiva demais) com o desperdício de processo ao redor. Defeitos: 22% dos deploys de AKS revertidos por configurações incorretas de probe. Espera: pipelines em média 4h esperando aprovação manual de segurança; a resposta a incidentes teve em média 3h de atrasos de transferência entre turnos de plantão. Movimento: a triagem exigia saltar entre 5 portais + 3 painéis; o MTTR era 6× a meta. Você usa os 8 Desperdícios para fazer emergir não apenas a correção técnica imediata (configuração da probe) mas também as categorias Espera e Movimento que transformaram um defeito menor em uma grande indisponibilidade. O incidente torna-se o gatilho para melhorias de processo: automação da aprovação de segurança para dev/test, um único workbook de triagem de incidentes e templates de runbook — toda redução de Espera e Movimento.</p>",
  recap: [
    "Os 8 Desperdícios (DOWNTIME) são uma lista de verificação 360° — a maioria dos engajamentos olha para 1–2 desperdícios e perde o resto; uma caminhada estruturada pelos 8 tipicamente faz emergir 3× a oportunidade",
    "Quantifique cada achado em US$ ou horas antes de classificar por Pareto; 5 desperdícios bem quantificados impulsionam a ação; 80 desperdícios não classificados paralisam o engajamento",
    "Defeitos e Espera explicam problemas de confiabilidade; Superprodução e Inventário impulsionam custo; Movimento e Processamento extra explicam resposta lenta a incidentes; Talento não utilizado é a maior alavanca para conversas de capacitação",
    "Use os 8 Desperdícios para estruturar casos de negócio de modernização (desperdício do estado atual vs. estado-alvo) — CFOs entendem redução de desperdício melhor do que jargões 'cloud-native'",
    "Recaminhe trimestralmente — o desperdício recresce; uma cadência captura novas instâncias antes que se componham; a mesma caminhada também é sua validação PDCA de que eliminações anteriores se sustentaram"
  ],
  questions: [
    {
      prompt: "O que o mnemônico DOWNTIME representa?",
      options: [
        "Defeitos, Operações, Carga de trabalho, Rede, Tempo, Inventário, Dinheiro, Energia.",
        "Defeitos, Superprodução, Espera, Talento não utilizado, Transporte, Inventário, Movimento, Processamento extra.",
        "Entrega, Resultados, Fluxo de trabalho, Notificações, Tickets, Problemas, Métricas, Erros.",
        "Detecção, Observação, Estados de espera, Notas, Triagem, Incidentes, Mitigação, Escalonamento."
      ],
      correctIndex: 1,
      explanation: "<strong>D</strong>efeitos, <strong>O</strong> (superprodução), <strong>W</strong> (espera), <strong>N</strong> (talento não utilizado), <strong>T</strong>ransporte, <strong>I</strong>nventário, <strong>M</strong>ovimento, <strong>E</strong> (processamento extra). Cada categoria faz emergir uma classe diferente de oportunidade."
    },
    {
      prompt: "RU/s do Cosmos superprovisionados, VMs ociosas e planos de App Service superdimensionados são exemplos de qual desperdício?",
      options: [
        "Defeitos.",
        "Superprodução — produzir mais capacidade do que o necessário.",
        "Movimento.",
        "Inventário."
      ],
      correctIndex: 1,
      explanation: "A <strong>Superprodução</strong> é produzir mais do que a demanda pede. Engajamentos de rightsizing tipicamente miram esse desperdício — mas é só 1 de 8, e por isso o rightsizing puro perde oportunidades maiores."
    },
    {
      prompt: "Um CSA foi solicitado a encontrar US$ 200 mil/ano em economia. O rightsizing encontrou US$ 90 mil. Uma caminhada estruturada dos 8 Desperdícios encontrou outros US$ 260 mil (assinaturas ociosas, observabilidade redundante, egresso, trabalho repetitivo). Qual é a lição?",
      options: [
        "O rightsizing sempre perde a maior parte da economia.",
        "Olhar para apenas um desperdício (Superprodução) perde Inventário, Processamento extra, Transporte e Talento não utilizado — uma passagem estruturada pelos oito desperdícios faz emergir economia que uma visão de desperdício único perde.",
        "O CSA deveria ter feito uma avaliação WAF em vez disso.",
        "O cliente deveria ter pedido US$ 500 mil desde o início."
      ],
      correctIndex: 1,
      explanation: "A maioria dos engajamentos olha para <strong>um ou dois desperdícios</strong> e perde o resto. A lente dos 8 Desperdícios fornece uma caminhada estruturada 360° — cada categoria tipicamente faz emergir uma oportunidade diferente."
    },
    {
      prompt: "Engenheiros girando entre Jira, GitHub, Teams e Azure DevOps para rastrear um item de trabalho é um exemplo de qual desperdício?",
      options: [
        "Transporte (movimento de coisas).",
        "Movimento (movimento desnecessário de pessoas / troca de contexto).",
        "Defeitos.",
        "Inventário."
      ],
      correctIndex: 1,
      explanation: "O <strong>Movimento</strong> é o movimento desnecessário de <em>pessoas</em>: troca de contexto entre portais ou ferramentas. O Transporte, em contraste, é o movimento desnecessário de <em>coisas</em> (egresso de dados, envio de logs)."
    },
    {
      prompt: "Qual é o antipadrão a evitar ao usar os 8 Desperdícios?",
      options: [
        "Ligar cada achado a uma hipótese específica.",
        "Quantificar cada achado em US$ ou horas.",
        "Tratar a caça ao desperdício como \"encontrar o máximo possível\" — uma lista de 80 desperdícios não é acionável.",
        "Classificar os achados por Pareto antes de agir."
      ],
      correctIndex: 2,
      explanation: "Uma lista de 80 desperdícios paralisa a ação. <strong>5 desperdícios bem quantificados e bem classificados por Pareto impulsionam a mudança.</strong> Os 8 Desperdícios são uma caminhada estruturada, não um exercício de brainstorm-tudo."
    }
  ]
},
"sipoc": {
  id: "sipoc",
  title: "SIPOC",
  group: "Mapeamento & Análise de Processos",
  duration: "30 min",
  executiveSummary: "SIPOC — Fornecedores (Suppliers), Insumos (Inputs), Processo (Process), Saídas (Outputs), Clientes (Customers) — é um mapa de processo de alto nível e de uma página que força a equipe a concordar sobre escopo e fronteiras antes de aprofundar nos detalhes. A maioria dos esforços de melhoria que travam falha não por má análise, mas por escopo ambíguo. O SIPOC fixa o escopo em uma única página que todos podem ler e aprovar.",
  whatYouGain: [
    "Alinhar patrocinadores, engenheiros e clientes sobre o que 'este processo' realmente significa",
    "Fazer emergir fornecedores ocultos e clientes downstream ignorados pela declaração original do problema",
    "Ancorar a fase Definir do DMAIC e o trabalho preparatório para eventos Kaizen",
    "Fornecer a lista de insumos para um mapa de fluxo de valor e a lista de saídas para um exercício de VOC"
  ],
  explanation: "<p>O SIPOC é um diagrama de cinco colunas: Fornecedores (quem fornece os insumos), Insumos (o que o processo consome), Processo (5–7 passos de mais alto nível), Saídas (o que o processo produz) e Clientes (quem recebe as saídas).</p><p>A coluna Processo é a restrição chave: 5–7 passos no máximo. Mais de 7 significa nível baixo demais; menos de 5 geralmente significa passos ocultos. Cada saída deve ter um cliente; cada insumo deve ter um fornecedor — sem órfãos. Fornecedores e clientes podem ser equipes internas, clientes externos ou sistemas.</p><p>Para construir um SIPOC: defina o gatilho de início e o estado de conclusão primeiro (fronteiras), use post-its para os 5–7 passos do processo, depois identifique saídas e seus clientes, depois insumos e fornecedores. Percorra-o de trás para frente com a equipe — leia C → O → P → I → S em voz alta — para que lacunas e discordâncias emerjam rápido. O SIPOC torna-se a referência de escopo para o resto do projeto.</p>",
  csamExample: "<p>Um CSAM está integrando um novo cliente para um engajamento de consumo do Azure. O cliente diz que quer um 'projeto de melhoria de implantação', mas quatro equipes (dev, segurança, DBA, rede) têm visões diferentes do que 'implantação' significa. Em 60 minutos com essas quatro equipes em um quadro branco, o CSAM constrói um SIPOC. A coluna Processo lista Construir → Testar → Escanear → Aprovar → Implantar. Os fornecedores incluem equipes de portões de segurança upstream e DBAs. Os clientes são equipes de QA e consumidores de API. De repente a equipe vê que existem 3 fornecedores ocultos e que metade do lead time vive em transferências para essas equipes. O escopo se redefine em uma hora em vez de derivar por seis meses.</p>",
  csaExample: "<p>Um CSA está liderando uma modernização de confiabilidade para um cliente rodando AKS no Azure. O SIPOC do cliente para o processo de implantação revela que os Fornecedores incluem o Azure Container Registry, o Key Vault e um sistema de Fleet Management. O Processo inclui: Commit → Construir → Push para o ACR → Implantar em Staging → Health Check → Implantar em Prod. A ausência de um passo de Escanear ou Política na coluna Processo expõe uma lacuna de governança — escaneamento de segredos e admission control não fazem parte do fluxo. Adicionar esses passos torna-se uma mudança de IaC, e o SIPOC torna-se a estrela-guia do engajamento de modernização.</p>",
  recap: [
    "O SIPOC força o acordo sobre fronteiras de escopo antes de aprofundar nos detalhes",
    "A coluna Processo deve ter 5–7 passos no máximo; mais significa granular demais",
    "Cada saída tem um cliente; cada insumo tem um fornecedor — sem órfãos permitidos",
    "Construa o SIPOC em 60 minutos com as pessoas que fazem o trabalho",
    "O SIPOC ancora o Definir do DMAIC, o trabalho preparatório de Kaizen e o escopo de novos engajamentos"
  ],
  questions: [
    {
      prompt: "O que SIPOC significa?",
      options: [
        "Sources, Items, Procedure, Owners, Customers.",
        "Fornecedores (Suppliers), Insumos (Inputs), Processo (Process), Saídas (Outputs), Clientes (Customers).",
        "Sponsors, Issues, Plan, Outcomes, Controls.",
        "Stakeholders, Inputs, Phases, Outputs, Constraints."
      ],
      correctIndex: 1,
      explanation: "SIPOC — <strong>Fornecedores, Insumos, Processo, Saídas, Clientes</strong> — lê-se da esquerda para a direita e é o primeiro artefato construído quando uma equipe ainda não consegue concordar sobre o que está melhorando."
    },
    {
      prompt: "Quantos passos a coluna Processo deve conter?",
      options: [
        "1 a 3, para manter as coisas simples.",
        "5 a 7 no máximo — mais significa nível baixo demais, menos geralmente significa passos ocultos.",
        "Exatamente 10, um por fase.",
        "Quantos forem necessários para capturar cada detalhe."
      ],
      correctIndex: 1,
      explanation: "A <strong>regra de 5–7 passos</strong> mantém o SIPOC na altitude certa. Mais passos pertencem a um mapa de fluxo de valor ou mapa de processo detalhado; menos geralmente ocultam transferências importantes."
    },
    {
      prompt: "Qual é o principal modo de falha que o SIPOC evita?",
      options: [
        "Aprovações lentas da liderança.",
        "Esforços de melhoria que travam causados por escopo ambíguo.",
        "Cobertura insuficiente de automação.",
        "Esgotamento de engenharia por reuniões em excesso."
      ],
      correctIndex: 1,
      explanation: "A maioria dos esforços de melhoria que travam falha não por má análise, mas por <strong>escopo ambíguo</strong>. O SIPOC fixa o escopo em uma única página que todos podem ler e aprovar."
    },
    {
      prompt: "Ao facilitar um SIPOC, o que você deve fazer ANTES de desenhar os passos do processo?",
      options: [
        "Listar cada fornecedor e cliente possível.",
        "Definir o gatilho de início e o estado de conclusão — as fronteiras — primeiro.",
        "Fazer a liderança pré-aprovar os passos.",
        "Escolher uma ferramenta de software para capturar o diagrama."
      ],
      correctIndex: 1,
      explanation: "<strong>Fronteiras primeiro.</strong> Escreva o evento gatilho e o critério de sucesso acima do quadro antes de colocar os passos em post-its. Sem fronteiras explícitas, a coluna do processo deriva e o SIPOC perde o foco."
    },
    {
      prompt: "Quando o SIPOC é a ferramenta errada para usar?",
      options: [
        "Fase Definir do DMAIC.",
        "Trabalho preparatório para um evento Kaizen.",
        "Um VSM detalhado já existe e a equipe concorda sobre o escopo — o SIPOC seria duplicativo.",
        "Resolver disputas de escopo entre equipes."
      ],
      correctIndex: 2,
      explanation: "Não use o SIPOC quando um VSM detalhado já existe e o escopo está acordado, quando o trabalho é genuinamente de um passo só, ou quando ele se torna um <strong>substituto para de fato percorrer o processo</strong> (Gemba)."
    }
  ]
}, "value-stream": {
  id: "value-stream",
  title: "Mapeamento de Fluxo de Valor",
  group: "Mapeamento & Análise de Processos",
  duration: "30 min",
  executiveSummary: "Um fluxo de valor mapeia o fluxo de trabalho ponta a ponta da solicitação do cliente até o valor entregue, tornando visíveis como dados o tempo de processo, o lead time, as transferências, as esperas e o retrabalho. Quando os sintomas de um cliente — releases lentos, MTTR alto de incidentes, SLAs perdidos, custo descontrolado — são causados por problemas de fluxo entre equipes, o VSM é o diagnóstico que revela onde o tempo é gasto versus onde é esperado.",
  whatYouGain: [
    "Ver onde o tempo é de fato gasto versus onde é esperado em transferências e filas",
    "Calcular a razão de agregação de valor (trabalho ativo / tempo total), geralmente um chocante percentual de um dígito",
    "Identificar cadeias silenciosas de retrabalho por meio de métricas de percentual completo-e-correto",
    "Projetar fluxos de estado futuro que mesclam passos, automatizam portões e reduzem WIP",
    "Sequenciar o trabalho de melhoria em ondas que se compõem ao longo de trimestres"
  ],
  explanation: "<p>Um fluxo de valor captura três camadas: fluxo de processo (a sequência de passos), fluxo de informação (como cada passo aprende o que fazer via tickets, aprovações, chats) e métricas de linha do tempo. O mapa mostra o tempo de processo (PT, trabalho ativo) versus o lead time (LT, relógio de parede incluindo esperas). A razão PT/LT é a razão de agregação de valor — a fração do tempo ponta a ponta gasta em trabalho de agregação de valor real.</p><p>Métricas-chave incluem o Lead Time (relógio de parede da solicitação à entrega), o Tempo de Processo (soma das durações de trabalho ativo), a Razão de Agregação de Valor (PT/LT, frequentemente horrivelmente baixa), o % Completo &amp; Correto (%C/A, fração que passa em cada transferência sem retrabalho) e o %C/A Acumulado (o produto entre todas as transferências, que faz emergir o retrabalho silencioso). Alto WIP (trabalho em progresso) em qualquer estágio alonga o lead time pela Lei de Little.</p><p>O fluxo de trabalho: defina o fluxo de valor com precisão, percorra o processo real com as pessoas que fazem o trabalho (não a documentação), capture dados em cada passo, desenhe o estado atual em uma única página, identifique o desperdício usando o referencial dos 8 Desperdícios, calcule a razão de agregação de valor, projete o estado futuro remodelando o fluxo em vez de otimizar passos individuais, quantifique a lacuna e planeje a melhoria em 2–4 ondas de PDCA.</p>",
  csamExample: "<p>O cliente de um CSAM está em 'transformação DevOps' há 8 meses sem melhoria mensurável na frequência de implantação. O CSAM conduz um workshop de VSM de 2 dias e descobre que, de 6 horas de tempo de deploy ponta a ponta, 5 horas são Espera em dois portões de aprovação manual e um escaneamento de segurança enfileirado. O cliente havia otimizado a 1 hora de trabalho ativo de build. O VSM tornou a lacuna visível: remover uma aprovação, automatizar o portão de segurança, agrupar os runners de escaneamento. O ponta a ponta cai para 75 minutos. O VSM ancorou o engajamento no trabalho certo.</p>",
  csaExample: "<p>Um CSA está avaliando o pipeline de release cloud-native de um cliente para AKS. O VSM revela que o código passa por 18% de retrabalho no estágio de teste de integração devido à instabilidade de configuração de ambiente. O %C/A Acumulado entre quatro transferências é 18% × 73% × 91% × 85% = 10% — significando que 90% dos releases sofrem ao menos um retorno. O CSA identifica que a lacuna de %C/A está na estabilidade do ambiente de teste e nas cotas de recursos do Azure que causam CrashLoopBackOff nos canários. A remediação visa a consistência da IaC e reservas de cota, não atualizações de ferramentas.</p>",
  recap: [
    "O VSM expõe onde o tempo é esperado, não apenas onde é gasto",
    "A razão de agregação de valor (PT/LT) é o número-manchete que a liderança lembra",
    "O % Completo &amp; Correto revela cadeias silenciosas de retrabalho nas transferências",
    "Use o VSM para fluxos multiequipe; use Pareto + Ishikawa para problemas de sistema único",
    "O VSM é um artefato de trabalho; remapeie após cada ciclo PDCA para validar o progresso"
  ],
  questions: [
    {
      prompt: "Um cliente está há 8 meses em uma &ldquo;transformação DevOps&rdquo; sem melhoria mensurável na frequência de implantação. O tempo de deploy ponta a ponta é de 6 horas. Qual é a provável contribuição do VSM?",
      options: [
        "Recomendar uma nova ferramenta de implantação para substituir a atual.",
        "Tornar visível que a maior parte das 6 horas é gasta em Espera por aprovações e escaneamentos enfileirados — não em trabalho ativo.",
        "Sugerir contratar mais engenheiros para paralelizar o trabalho.",
        "Refatorar a arquitetura da aplicação em microsserviços."
      ],
      correctIndex: 1,
      explanation: "O VSM expõe <strong>onde o tempo é esperado vs. gasto</strong>. Os clientes frequentemente otimizam o trabalho ativo (ex.: a 1 hora de build) enquanto ignoram as 5 horas de espera que dominam o lead time ponta a ponta."
    },
    {
      prompt: "O que é a razão de agregação de valor?",
      options: [
        "Os dólares economizados por hora de CSA.",
        "Tempo de Processo / Lead Time — a fração do tempo ponta a ponta gasta em trabalho ativo de agregação de valor.",
        "O número de aprovadores dividido pelo número de passos.",
        "O tempo de ciclo multiplicado pelo WIP."
      ],
      correctIndex: 1,
      explanation: "<strong>Razão de agregação de valor = PT / LT</strong>. Em fluxos não melhorados é frequentemente um horrível percentual de um dígito. É o número-manchete que a liderança lembra de um VSM."
    },
    {
      prompt: "O que é o %C/A (Percentual Completo e Correto) e por que importa?",
      options: [
        "O percentual de automação do processo; valores altos significam menos desperdício.",
        "A fração de trabalho que passa em cada transferência sem retrabalho; multiplicada entre todas as transferências (%C/A Acumulado) faz emergir cadeias silenciosas de retrabalho.",
        "A taxa de aprovação em auditoria de conformidade; exigida apenas para setores regulados.",
        "O percentual de engenheiros que comparecem ao workshop."
      ],
      correctIndex: 1,
      explanation: "O %C/A mede o <strong>vazamento de retrabalho em cada transferência</strong>. O %C/A Acumulado (o produto entre todas as transferências) tipicamente revela enorme retrabalho oculto que nenhuma equipe isolada é dona — um insight clássico de VSM."
    },
    {
      prompt: "Quando o VSM é a ferramenta ERRADA para recorrer?",
      options: [
        "Avaliações de DevOps com sintomas ponta a ponta.",
        "Um engajamento &ldquo;Cosmos está lento&rdquo; em que o problema é uma chave de partição quente dentro de um único sistema — use Pareto + Ishikawa em vez disso.",
        "Otimização do fluxo de onboarding de tenant entre múltiplas equipes.",
        "Casos de negócio de modernização que precisam de um &ldquo;porquê&rdquo; crível."
      ],
      correctIndex: 1,
      explanation: "O VSM é para <strong>fluxos multiequipe / multissistema</strong>. Para problemas de sistema único, recorra a Pareto + Ishikawa. Puxar reflexivamente o VSM para o problema errado desperdiça a credibilidade da ferramenta."
    },
    {
      prompt: "Qual é o antipadrão chave a evitar ao conduzir um workshop de VSM?",
      options: [
        "Desenhar o estado atual antes do estado futuro.",
        "Produzir um pôster do tamanho de uma parede que você nunca mais olha — o VSM deve ser um artefato de trabalho durante o engajamento.",
        "Incluir os donos do processo na caminhada.",
        "Calcular a razão de agregação de valor."
      ],
      correctIndex: 1,
      explanation: "Um VSM é um <strong>artefato de trabalho</strong>, não um pôster de uma vez só. Se ele não estiver aberto durante as próximas 6 semanas de engajamento para guiar ciclos PDCA e decisões, o workshop não pegou."
    }
  ]
}, "pareto-chart": {
  id: "pareto-chart",
  title: "Gráfico de Pareto",
  group: "Mapeamento & Análise de Processos",
  duration: "30 min",
  executiveSummary: "Um gráfico de Pareto classifica categorias em ordem decrescente por impacto (contagem de incidentes, indisponibilidade, US$, RU/s consumidos) e sobrepõe uma linha de percentual acumulado para que os 'poucos vitais' que impulsionam ~80% do impacto fiquem imediatamente visíveis. É a ferramenta de priorização que os CSAs usam para preparação de EBR/QBR, revisões de WAF, otimização de custo e triagem de escalonamento — pondere por impacto de negócio, não por frequência bruta.",
  whatYouGain: [
    "Classificar problemas por impacto de negócio, não por contagem, para que as horas do CSA recaiam sobre os poucos vitais",
    "Ponderar o impacto de incidentes por minutos de indisponibilidade ou US$ em risco, não por frequência",
    "Identificar quais serviços, SKUs ou códigos de erro do Azure impulsionam a maioria do gasto ou da falha",
    "Visualizar o princípio 80/20 para que a liderança veja onde o esforço deve ir",
    "Remedir após a remediação para validar o trabalho e detectar problemas emergentes"
  ],
  explanation: "<p>Um gráfico de Pareto é um gráfico de barras ordenado em ordem decrescente com uma linha de percentual acumulado sobreposta. O eixo X mostra categorias — assinaturas de incidentes, códigos de erro, tipos de recurso, cargas de trabalho de clientes, classificações de causa-raiz, regiões do Azure ou SKUs. O eixo Y esquerdo mostra o impacto medido (contagem de tickets, minutos de indisponibilidade, RU/s consumidos, gasto em US$, mensagens descartadas, deploys falhos). O eixo Y direito mostra o percentual acumulado (0–100%). As barras são ordenadas decrescentemente; a linha acumulada mostra onde os poucos vitais alcançam ~80% do impacto total.</p><p>A unidade de medida importa mais do que o gráfico. Contar tickets pondera uma falha de 5 minutos igual a uma indisponibilidade de 6 horas. Os CSAs devem ponderar por impacto de negócio: minutos de indisponibilidade, US$ em risco, severidade relatada pelo cliente. Um Pareto por contagem de incidentes pode mostrar 'Liveness probes instáveis' como a barra do topo; um Pareto por minutos de indisponibilidade pode mostrar 'Indisponibilidade regional' como o verdadeiro impulsionador — dados diferentes, prioridades de ação diferentes.</p><p>Fluxo de trabalho: enquadre a pergunta com precisão, escolha a fonte de dados certa (Kusto, Cost Management, Resource Health), escolha a unidade de medida e a declare no gráfico, defina categorias de forma consistente, agregue ao longo de 30–90 dias, ordene decrescentemente e calcule o % acumulado, identifique as poucas barras vitais à esquerda da linha de 80%, conduza o engajamento sobre essas barras e remeça 30–90 dias depois para validar e detectar novos padrões.</p>",
  csamExample: "<p>Um CSAM gerenciando uma conta de varejo Tier-1 extrai 90 dias de tickets do ICM para o estate de AKS do cliente e constrói um Pareto. Por contagem de incidentes, 'Liveness probes instáveis' domina. Por minutos de indisponibilidade, 'ImagePullBackOff' e 'Falhas de resolução do CoreDNS' respondem por 71% do impacto de SLA. O CSAM para de reagir caso a caso e conduz uma única revisão de arquitetura cobrindo endpoint privado do ACR + managed identity do kubelet e ajuste do autoscaler do CoreDNS. O volume de ICM para esse cliente cai 60% no trimestre seguinte.</p>",
  csaExample: "<p>Um CSA está ajudando um cliente com otimização de custo do Azure. Um Pareto de gasto por tipo de recurso mostra que clusters AKS consomem 35% do gasto mensal, seguidos por planos de App Service (22%) e bancos de dados SQL (18%). Mas a linha de 80% cruza após apenas duas barras. O CSA foca no rightsizing de cluster: converter 12 nós Standard_D4s_v3 para a SKU Automatic com requisições de recurso de pod adequadas reduz o gasto mensal de cluster em 35%. Os tipos de recurso restantes esperam o próximo ciclo. O Pareto tornou os poucos vitais visíveis; o cliente viu uma queda de 12% no custo mensal a partir de esforço focado.</p>",
  recap: [
    "Pondere categorias por impacto de negócio (indisponibilidade, US$, severidade), não por contagem bruta",
    "As poucas barras vitais à esquerda da linha de 80% recebem o foco do engajamento",
    "Um Pareto por contagem difere de um Pareto por indisponibilidade ou gasto — escolha a métrica certa",
    "Paretos de uma vez só são pôsteres; remeça 30–90 dias depois para validar e detectar novos padrões",
    "O Pareto identifica 'qual corrigir primeiro'; o Ishikawa aprofunda 'por que aconteceu'"
  ],
  questions: [
    {
      prompt: "Um cliente tem 4.200 alertas do Azure Advisor. Como você deve construir o Pareto para priorizar o esforço do CSA?",
      options: [
        "Classificar os alertas na ordem em que aparecem na lista do Advisor.",
        "Classificar os alertas apenas por nível de severidade, sem considerar o impacto de negócio.",
        "Classificar por impacto de negócio ponderado (US$ em risco, minutos de indisponibilidade, ganho de secure-score) para que os poucos alertas de alto impacto recebam o foco.",
        "Tratar todos os alertas igualmente e trabalhá-los aleatoriamente."
      ],
      correctIndex: 2,
      explanation: "A contagem bruta de alertas é enganosa. Um Pareto útil pondera por <strong>impacto de negócio</strong>, não por frequência. Um rightsizing de US$ 50 mil/mês importa mais do que 200 pequenos ajustes de hardening."
    },
    {
      prompt: "Dois Paretos: um classificado por frequência de incidentes, outro por minutos de indisponibilidade. Por que a versão ponderada por indisponibilidade é mais útil?",
      options: [
        "Porque a contagem de incidentes é sempre errada e nunca deve ser usada.",
        "Porque o Pareto ponderado por indisponibilidade revela quais falhas realmente impactam o SLA, não quais ocorrem com mais frequência.",
        "Porque a indisponibilidade é sempre mais importante que a frequência.",
        "Porque a versão por indisponibilidade requer menos dados."
      ],
      correctIndex: 1,
      explanation: "Frequência e impacto são dimensões diferentes. O <strong>Pareto ponderado por indisponibilidade</strong> mostra quais falhas impulsionam o risco de SLA. Uma indisponibilidade rara mas catastrófica pode importar mais do que 200 falhas breves."
    },
    {
      prompt: "Um cliente lhe entrega 87 achados de WAF para analisar. Sobre o que você deve resistir?",
      options: [
        "Aceitar todos os 87 achados e tratá-los igualmente no Pareto.",
        "Ponderar os achados por severidade &times; raio de explosão &times; impacto de negócio antes de plotar, para que os poucos vitais que impulsionam 80% do risco fiquem visíveis.",
        "Recusar usar o Pareto porque ele simplifica demais achados complexos.",
        "Recomendar analisar os achados um de cada vez em vez de plotar."
      ],
      correctIndex: 1,
      explanation: "Um Pareto de 87 achados é uma lista plana disfarçada de priorização. <strong>Pondere cada achado</strong> antes de plotar para transformar 87 itens em poucos achados vitais que justificam um engajamento focado."
    },
    {
      prompt: "Um colega diz que um Pareto de custo de serviço deve estar errado porque os custos mensais ainda estão em tendência de alta. O que você deve explicar?",
      options: [
        "O Pareto está definitivamente errado se os custos estão em tendência de alta.",
        "Um Pareto é um instantâneo em um ponto no tempo. Use um gráfico de tendência para tendências; use o Pareto para identificar quais serviços valem a pena otimizar.",
        "O crescimento de custo prova que não existe forma de Pareto nos dados.",
        "Reconstruir o gráfico semanalmente para capturar a tendência de alta."
      ],
      correctIndex: 1,
      explanation: "Um Pareto é um <strong>instantâneo do impacto categórico em um momento</strong>, não uma série temporal. Para tendências, use um gráfico de tendência. Para priorizar, use o Pareto. Ferramentas diferentes, perguntas diferentes."
    },
    {
      prompt: "Após completar um Kaizen guiado por Pareto, como você valida o sucesso?",
      options: [
        "Verificar que todos os 87 achados foram fechados.",
        "Reexecutar a mesma consulta de Pareto 30–90 dias depois para ver se as barras do topo encolheram e novos padrões emergem.",
        "Contar quantos membros da equipe participaram da remediação.",
        "Medir o total de horas do CSA e comparar com a estimativa original."
      ],
      correctIndex: 1,
      explanation: "A validação é <strong>remedição</strong>. Reexecute a mesma consulta pós-remediação. Se as barras do topo encolhem e a curva achata mais cedo, o trabalho está validado. Pareto → engajamento → remedir é o padrão repetível."
    }
  ]
}, "ishikawa": {
  id: "ishikawa",
  title: "Diagrama de Ishikawa",
  group: "Mapeamento & Análise de Processos",
  duration: "30 min",
  executiveSummary: "Um diagrama de Ishikawa (espinha de peixe ou causa-e-efeito) é uma ferramenta estruturada de brainstorming que mapeia causas potenciais de um único problema em categorias nomeadas — tipicamente os 6Ms: Mão de obra, Máquina, Método, Material, Medição, Meio ambiente. Ele força amplitude antes de profundidade e faz emergir causas fora de qualquer domínio único, prevenindo fixação prematura na primeira hipótese.",
  whatYouGain: [
    "Explorar causas sistematicamente entre pessoas, serviço, processo, configuração, observabilidade e demanda",
    "Impedir que equipes de engenharia se fixem em 'o código é a causa' e percam lacunas de processo ou habilidades",
    "Fazer emergir causas em múltiplos domínios que a análise de disciplina única perde",
    "Gerar listas de hipóteses que se priorizam com Pareto e se aprofundam com 5 Porquês",
    "Documentar todo o espaço de busca para incidentes similares futuros"
  ],
  explanation: "<p>Um Ishikawa é uma estrutura visual: uma espinha horizontal apontando para a declaração do problema à direita, espinhas ramificando — uma por categoria de causa potencial, sub-espinhas para causas específicas, sub-sub-espinhas para fatores contribuintes. Os 6Ms são o conjunto canônico de categorias: Mão de obra (pessoas, habilidades, rotação de plantão), Máquina (serviço Azure, SDK, runtime), Método (processo, consultas, fluxo de implantação), Material (configuração, dados, IaC, dependências), Medição (observabilidade, alertas, SLOs), Meio ambiente (demanda, hora do dia, eventos externos).</p><p>Propriedade-chave: o Ishikawa é divergente (gera causas candidatas) mas não convergente (não escolhe a causa). Após preencher o diagrama, as equipes devem usar evidências — logs, traces, métricas, telemetria — para confirmar quais ramos importam. A saída do Ishikawa é uma lista de hipóteses.</p><p>Fluxo de trabalho: declare o problema com precisão (evite 'lento'; use 'a latência P95 da API de Checkout excede 800ms entre 09:00–11:00 UTC em dias úteis'), escolha o conjunto de categorias (6Ms é o padrão), reúna participantes multifuncionais, faça brainstorm de 4–8 causas por categoria, aprofunde 1–2 níveis, agrupe e priorize as 3–5 mais consistentes com o sintoma, defina um teste para cada hipótese, execute os testes, confirme as causas e converta em ações.</p>",
  csamExample: "<p>Um CSAM está facilitando um postmortem sobre um incidente de Cosmos DB em que o cliente relata 'o Cosmos está nos throttling'. A engenharia passou 3 semanas ajustando consultas. O Ishikawa mapeia todo o espaço de busca: Mão de obra (único especialista de Cosmos de férias), Máquina (SDK cliente sem honrar o retry-after), Método (design de chave de partição quente), Material (sem autoscale), Medição (sem alerta na tendência de 429), Meio ambiente (pico de demanda 5x por uma campanha de marketing). A equipe descobre que a correção real é o redesenho da chave de partição + autoscale, mais lacunas sistêmicas (cobertura de especialista, configuração de SDK, padrões de alerta). Os engenheiros sozinhos nunca teriam visto a maioria dessas causas.</p>",
  csaExample: "<p>Um CSA está liderando uma revisão de confiabilidade de WAF para um cliente com falhas recorrentes de implantação de App Service. Os ramos do Ishikawa revelam: Mão de obra (equipe de plantão não informada sobre o novo padrão de rollout), Máquina (SKU do plano de App Service no limite durante o pico), Método (deploys sobrepõem-se a janelas de tráfego de pico), Material (configuração de warm-up de slot ausente), Medição (sem alerta em falhas de warm-up de slot), Meio ambiente (e-mail de marketing enviado antes da indisponibilidade, gerando pico de tráfego). O Ishikawa do CSA impede a equipe de reflexivamente aumentar a SKU e em vez disso conduz quatro pequenas mudanças entre quatro Ms.</p>",
  recap: [
    "O Ishikawa força a exploração sistemática entre 6 categorias antes de aprofundar",
    "A saída é uma lista de hipóteses; a evidência confirma quais ramos importam",
    "Sempre reúna equipes multifuncionais para evitar fixação de disciplina única",
    "Cada candidato requer um teste; candidatos não testáveis são ruído não falseável",
    "Combine o Ishikawa com Pareto (qual priorizar) e 5 Porquês (por que aconteceu)"
  ],
  questions: [
    {
      prompt: "Sua equipe está investigando consultas lentas de Azure SQL. A engenharia suspeita de índices, o DBA suspeita do schema, o líder de plataforma suspeita do dimensionamento. Qual é o valor primário de um diagrama de Ishikawa aqui?",
      options: [
        "Ele toma a decisão final sobre qual fator é a verdadeira causa-raiz.",
        "Ele força a equipe a explorar causas entre todas as categorias antes de se fixar em uma.",
        "Ele mede qual hipótese gera a melhoria mais rápida de consulta.",
        "Ele elimina todas as causas de baixa probabilidade imediatamente."
      ],
      correctIndex: 1,
      explanation: "Um Ishikawa é uma ferramenta <strong>divergente</strong> que amplia o espaço de busca antes de estreitá-lo. Ele impede a fixação na primeira hipótese ao forçar a exploração sistemática entre categorias. Ele gera hipóteses; os dados as confirmam depois."
    },
    {
      prompt: "Quando um Ishikawa é mais valioso durante um postmortem?",
      options: [
        "Apenas quando a causa do incidente já é conhecida e você precisa documentá-la.",
        "Quando um sintoma tem múltiplas causas plausíveis em domínios diferentes e a equipe arrisca comprometimento prematuro.",
        "Como substituto para escrever a linha do tempo e o impacto do incidente.",
        "Apenas se a equipe tiver mais de 10 engenheiros disponíveis para comparecer."
      ],
      correctIndex: 1,
      explanation: "O Ishikawa brilha quando <strong>múltiplos domínios</strong> estão envolvidos. Ele garante que a equipe percorra cada categoria — Mão de obra, Máquina, Método, Material, Medição, Meio ambiente — em vez de recorrer à teoria predileta da voz mais alta."
    },
    {
      prompt: "Um cliente diz que o diagrama de Ishikawa é a entrega para a correção recente de 429 do Cosmos DB. O que você deve esclarecer?",
      options: [
        "O diagrama é a saída final e nenhuma ação adicional é necessária.",
        "O Ishikawa gerou hipóteses; as entregas reais são a causa-raiz testada, a correção implementada e o antes/depois medido.",
        "Eles devem repetir o Ishikawa semanalmente para garantir que a causa permaneça corrigida.",
        "O diagrama deveria ter incluído aprovação de orçamento da liderança."
      ],
      correctIndex: 1,
      explanation: "Um Ishikawa é uma ferramenta de <strong>geração de hipóteses</strong>, não uma ferramenta de decisão. As entregas reais são as hipóteses testadas, as mudanças implementadas e as medições de antes/depois que validam a correção."
    },
    {
      prompt: "Um colega insiste que a única categoria a explorar é &ldquo;Método&rdquo; para uma investigação de falha de implantação. O que você deve fazer primeiro?",
      options: [
        "Concordar e começar a aprofundar em Método com 5 Porquês.",
        "Conduzir a equipe por cada categoria restante antes de aprofundar em qualquer ramo único.",
        "Pedir à engenharia para testar a hipótese de Método imediatamente.",
        "Remodelar a declaração do problema porque está vaga demais."
      ],
      correctIndex: 1,
      explanation: "O Ishikawa é uma ferramenta de <strong>desfixação</strong>. A equipe deve percorrer Mão de obra, Máquina, Método, Material, Medição e Meio ambiente antes de aprofundar. A amplitude primeiro expõe causas que disciplinas únicas perdem."
    },
    {
      prompt: "Qual afirmação melhor captura o que NÃO fazer com um Ishikawa?",
      options: [
        "Não usá-lo com equipes multifuncionais porque elas discordam demais.",
        "Não tratá-lo como ferramenta de decisão — use o Pareto para escolher entre os achados a financiar.",
        "Não incluir mais de três categorias porque o diagrama fica complexo demais.",
        "Não referenciá-lo em postmortems porque leva tempo demais para explicar."
      ],
      correctIndex: 1,
      explanation: "O Ishikawa gera <strong>candidatos</strong>, não decisões. Para escolher qual achado financiar, use Pareto-por-impacto-ponderado. O Ishikawa responde 'quais são as causas possíveis?'; o Pareto responde 'qual corrigir primeiro?'"
    }
  ]
}, "5-whys": {
  id: "5-whys",
  title: "5 Porquês",
  group: "Mapeamento & Análise de Processos",
  duration: "30 min",
  executiveSummary: "Os 5 Porquês são uma técnica iterativa de causa-raiz: pegue um problema confirmado e pergunte 'por quê?' repetidamente até a cadeia alcançar uma causa sistêmica (uma mudança em IaC, política, runbook, treinamento ou design organizacional) em vez de um sintoma ou ação individual. Usados em postmortems e escalonamentos, eles disciplinam as equipes a afastar-se de culpar indivíduos e ir em direção a corrigir o sistema.",
  whatYouGain: [
    "Alcançar causas sistêmicas que você de fato pode mudar em IaC, política ou processo",
    "Parar de culpar indivíduos ('o engenheiro cometeu um erro') e corrigir o sistema que permitiu o erro",
    "Converter incidentes recorrentes em incidentes de uma vez só abordando causas-raiz, não de superfície",
    "Documentar toda a cadeia de causas para incidentes similares futuros",
    "Impedir que o mesmo postmortem se repita no próximo trimestre"
  ],
  explanation: "<p>Os 5 Porquês são um aprofundamento linear: comece com uma declaração de problema (uma observação confirmada, não especulação), depois pergunte iterativamente 'por quê?' até que a resposta seja uma propriedade acionável do sistema. Eles rodam depois que o problema imediato é contido — durante um incidente ao vivo você restaura o serviço primeiro, depois usa os 5 Porquês no postmortem para alcançar a causa sistêmica. O número 5 é aproximado — às vezes 3 bastam, às vezes 7 são necessários. Pare quando a resposta for algo que você possa mudar: automação ausente, falta de trabalho padrão, sem treinamento, desalinhamento de incentivos, capacidade não financiada ou redesenho organizacional.</p><p>Disciplina-chave: cada 'por quê' deve ser respaldado por evidências. Logs, traces, configurações, ADRs, entrevistas. A especulação se propaga; um 'por quê' não verificado no passo 2 desencaminha os passos 3–5. As causas são frequentemente multicausais; encadeie cada contribuinte separadamente. Um padrão útil: Ishikawa → escolher os 2–3 principais ramos → 5 Porquês em cada → combinar no plano de ação.</p><p>Mova de culpa para design: em vez de 'Por que o engenheiro fez push da tag errada?' pergunte 'Por que o sistema permitiu que a tag errada chegasse à produção?' A resposta terminal deve ter formato de sistema, não de pessoa. Fluxo de trabalho: confirme a declaração do problema, combine com Ishikawa quando causas multidomínio forem prováveis, exija evidência para cada passo, fique atento à terminação prematura (ainda descrevendo a ação de uma pessoa, não uma propriedade do sistema), fique atento à abstração descontrolada (pare na mudança mais concreta que você pode fazer), encadeie por causa e converta a resposta terminal em uma ação de PDCA.</p>",
  csamExample: "<p>O cliente de um CSAM relatou um Sev B: 'Um engenheiro rotacionou manualmente uma chave do Cosmos e quebrou a produção.' Parar em 'não rotacione chaves manualmente' produz treinamento inútil. Cinco porquês mais fundo: a managed identity não estava habilitada → os módulos de IaC não a suportavam → o backlog da equipe de plataforma estava 6 meses atrasado → sem capacidade financiada de engenharia de plataforma → a liderança trata a plataforma como overhead. A ação não foi uma atualização de runbook — foi uma decisão de financiamento organizacional para engenharia de plataforma. O coaching do CSA levou o cliente a financiar capacidade de plataforma, não apenas controles processuais.</p>",
  csaExample: "<p>Um CSA está liderando um postmortem em um incidente Sev B de App Service. A equipe diz 'o alerta não disparou.' 5 Porquês: o alerta não disparou → nenhum configurado para canários → canários adicionados depois que a política de alerta foi escrita → a política não foi atualizada → sem disciplina de dono-de-processo na atualização da política. A ação é atualizar a política de alerta para reconhecer canários, com um cronograma de atualização trimestral. O trabalho padrão para manutenção de alertas torna-se a mudança de sistema, não combate a incêndios reativo.</p>",
  recap: [
    "Os 5 Porquês alcançam causas sistêmicas, não sintomas ou culpa",
    "Cada passo requer evidência; a especulação contamina a cadeia",
    "A resposta terminal deve ser uma propriedade acionável do sistema (política, trabalho padrão, estrutura organizacional)",
    "Evite a terminação prematura — se a resposta ainda soa como a ação de uma pessoa, continue perguntando",
    "Encadeie por causa; causas reais são geralmente multicausais"
  ],
  questions: [
    {
      prompt: "Qual é o benefício primário de usar os 5 Porquês em vez de parar na primeira causa plausível?",
      options: [
        "Encontrar sintomas mais rápido e resolver incidentes mais depressa.",
        "Mudar o sistema, não o indivíduo; alcançar causas sistêmicas sobre as quais você de fato pode agir.",
        "Documentar quem foi o culpado durante o incidente.",
        "Acelerar postmortems pulando a investigação detalhada."
      ],
      correctIndex: 1,
      explanation: "Os 5 Porquês aprofundam até <strong>causas sistêmicas</strong> que podem ser mudadas via IaC, política ou processo — não ações individuais. Isso previne recorrência em vez de repetir o mesmo incidente."
    },
    {
      prompt: "Quantas vezes você deve perguntar iterativamente &ldquo;por quê&rdquo; ao usar os 5 Porquês?",
      options: [
        "Sempre exatamente cinco vezes, nem mais nem menos.",
        "Quantas forem necessárias até alcançar uma propriedade acionável do sistema.",
        "Nunca mais de três vezes para manter o postmortem curto.",
        "Apenas durante incidentes críticos, não nos rotineiros."
      ],
      correctIndex: 1,
      explanation: "O número 5 é aproximado. Pare quando a resposta for uma <strong>propriedade acionável do sistema</strong> como 'sem trabalho padrão' ou 'capacidade não financiada' — não em uma contagem arbitrária."
    },
    {
      prompt: "Qual resposta terminal representa uma verdadeira causa-raiz nos 5 Porquês?",
      options: [
        "O engenheiro cometeu um erro durante a implantação.",
        "O alerta não disparou quando o limite foi ultrapassado.",
        "Não existe trabalho padrão para atualizar o alerta de canário quando os SLOs mudam.",
        "O código continha um bug sutil no parser."
      ],
      correctIndex: 2,
      explanation: "A resposta terminal deve ser uma <strong>mudança de sistema</strong> que você de fato pode fazer — por meio de IaC, política, processo ou financiamento. Culpa pessoal não é uma causa-raiz."
    },
    {
      prompt: "Qual exigência os 5 Porquês colocam sobre cada resposta na cadeia?",
      options: [
        "Ela deve ser plausível e acordada pela equipe.",
        "Cada passo deve ser respaldado por evidência: logs, traces, configurações ou entrevistas.",
        "Ela deve referenciar postmortems anteriores sobre problemas similares.",
        "Ela deve identificar uma pessoa responsável pela falha."
      ],
      correctIndex: 1,
      explanation: "Cada porquê deve ser sustentado por <strong>evidência</strong>. Respostas não verificadas propagam erro pela cadeia, desencaminhando os passos restantes e contaminando toda a análise."
    },
    {
      prompt: "Qual é o melhor momento para executar os 5 Porquês em um postmortem?",
      options: [
        "Em tempo real durante a resposta ativa ao incidente enquanto as emoções estão frescas.",
        "Depois que o incidente é resolvido, quando dados completos estão disponíveis.",
        "Antes de qualquer log ser coletado, para evitar viés de confirmação.",
        "Semanas depois, após a equipe ter passado para outro trabalho."
      ],
      correctIndex: 1,
      explanation: "Os 5 Porquês requerem <strong>evidência</strong> em cada passo. Executá-los durante a triagem ativa com dados incompletos contamina a cadeia com especulação."
    }
  ]
}, "6-ms": {
  id: "6-ms",
  title: "6Ms",
  group: "Mapeamento & Análise de Processos",
  duration: "30 min",
  executiveSummary: "Os 6Ms — Mão de obra, Máquina, Método, Material, Medição, Meio ambiente — são o conjunto canônico de categorias para estruturar diagramas de Ishikawa e disciplinar a análise de causa-raiz. Eles forçam a busca de causas além de código e configuração, para dentro de pessoas, processo, telemetria e demanda. Um problema que vive em apenas um M é raro; respostas realistas geralmente envolvem 3+ Ms.",
  whatYouGain: [
    "Expandir a busca de causas além de código e configuração, para dentro de pessoas, processo, observabilidade e demanda",
    "Impedir a fixação de disciplina única (engenheiros culpam a config; SREs culpam o processo; o plantão culpa a telemetria)",
    "Fazer emergir causas inter-categorias que contribuem simultaneamente",
    "Pontuar cada M como primário, contribuinte ou não-contribuinte para focar o esforço",
    "Criar um vocabulário compartilhado entre conversas de CSA, cliente e PG"
  ],
  explanation: "<p>Os 6Ms — Mão de obra, Máquina, Método, Material, Medição, Meio ambiente — são o andaime para a exploração sistemática de causas. No vocabulário de nuvem/CSA: Mão de obra = pessoas, habilidades, rotação de plantão; Máquina = serviço Azure, SDK, runtime, tier, SKU; Método = processo, consultas, estratégia de chave de partição, fluxo de implantação, padrão de rollout; Material = configuração, segredos, IaC, versões de imagem, manifestos de contêiner, configurações de RU/s, NSGs, dependências; Medição = observabilidade, alertas, SLOs, dashboards, taxas de amostragem, retenção; Meio ambiente = padrões de tráfego, hora do dia, picos regionais, campanhas de marketing, rajadas upstream, feriados, mudanças de comportamento do cliente.</p><p>Use os 6Ms como uma checklist durante postmortems, revisões de WAF e avaliações de confiabilidade. Percorra cada M, mesmo que a resposta seja 'sem contribuinte aqui, a evidência X confirma'. A disciplina importa mais do que o volume. Após a evidência, pontue cada M como primário, contribuinte ou não-contribuinte. Direcione o esforço aos primários; remedie causas contribuintes oportunisticamente; documente as não-contribuintes como descartadas. Alguns praticantes adicionam Management (Gestão) como um 7º M para causas organizacionais/de financiamento/estratégia — para o trabalho de CSA, é frequentemente onde os 5 Porquês terminam.</p><p>Traduza o vocabulário para a audiência. 'Mão de obra' funciona internamente, mas pode soar datado. Prefira 'Pessoas &amp; Habilidades'. Use qualquer vocabulário com que a sala vá se engajar.</p>",
  csamExample: "<p>Um CSAM está orientando a equipe de SRE de um cliente em análise de incidentes. A equipe inicialmente recorreu a 'o alerta estava mal configurado' (Método). O CSAM percorre os 6Ms: Mão de obra (os limites de alerta são de uma equipe, ou o alerta está órfão?), Máquina (a instrumentação do serviço está correta para a carga de trabalho?), Método (o runbook de escalonamento está atrelado ao alerta?), Material (os segredos são rotacionados, as credenciais estão frescas?), Medição (qual é a taxa de amostragem? Traces lentos são filtrados?), Meio ambiente (qual é o padrão típico de tráfego? Esse incidente foi incomum?). A equipe descobriu que todos os 6 Ms tinham contribuintes: a posse do alerta era pouco clara (Mão de obra), a instrumentação não amostrava o percentil certo (Medição) e o padrão de tráfego estava anômalo (Meio ambiente). Corrigir apenas o Método teria perdido as lacunas sistêmicas.</p>",
  csaExample: "<p>Um CSA está liderando uma avaliação de confiabilidade de WAF para a infraestrutura AKS de um cliente. A equipe temia que o cluster estivesse 'sub-dimensionado' (Máquina). Percorrendo os 6Ms: Mão de obra (há profundidade de plantão para AKS ou um único especialista?), Máquina (os nós estão bem dimensionados para a carga, ou superprovisionados?), Método (há pod disruption budgets? A estratégia de implantação é canário ou rolling?), Material (quais são as requisições de recurso de pod? São razoáveis?), Medição (há um dashboard de utilização de nó? Há alerta em 70% de capacidade?), Meio ambiente (o tráfego dispara nos fins de semana? Há jobs em lote que comprimem recursos?). A equipe encontrou que as requisições de pod estavam altas demais (Material), o plantão era um único especialista que estava de férias (Mão de obra) e não havia alerta em limites de capacidade (Medição). Redimensionar os nós sozinho teria perdido todos os três problemas de sistema.</p>",
  recap: [
    "Os 6Ms forçam a busca de causas além de código e configuração, para dentro de todos os domínios",
    "Percorra cada M, mesmo que a resposta seja 'sem contribuinte — a evidência confirma'",
    "Pontue cada M como primário, contribuinte ou não-contribuinte; foque o esforço nos primários",
    "Problemas realistas têm 3+ Ms; problemas de M único são raros",
    "Combine os 6Ms (amplitude) com os 5 Porquês (profundidade por M)"
  ],
  questions: [
    {
      prompt: "O que os 6Ms representam na análise estruturada de causa-raiz?",
      options: [
        "Manufatura, Materiais, Marketing, Métodos, Management, Money.",
        "Mão de obra, Máquina, Método, Material, Medição, Meio ambiente.",
        "Métricas, Modelos, Mecanização, Manutenção, Mentalidade, Motivação.",
        "Mercado, Money, Mentalidade, Manutenção, Maturidade, Momentum."
      ],
      correctIndex: 1,
      explanation: "Os 6Ms forçam a busca de causas além de <strong>código e configuração</strong> — cobrindo pessoas/habilidades, serviço/runtime, processo/lógica, config/dados, observabilidade/SLOs e demanda/ambiente."
    },
    {
      prompt: "Por que o referencial dos 6Ms é mais eficaz do que a análise de disciplina única?",
      options: [
        "Ele leva menos tempo e reduz a necessidade de reuniões.",
        "Ele impede a fixação de disciplina única e faz emergir causas inter-categorias.",
        "Ele simplifica a documentação e reduz o retrabalho.",
        "Ele substitui a investigação detalhada por uma checklist."
      ],
      correctIndex: 1,
      explanation: "Sem uma checklist de categorias, engenheiros culpam a config, SREs culpam o processo, o plantão culpa a telemetria. Os 6Ms dão a cada revisor o mesmo <strong>estímulo</strong>, fazendo emergir causas de múltiplas categorias."
    },
    {
      prompt: "No exemplo de throttling 429 do Cosmos, quais três Ms foram contribuintes primários?",
      options: [
        "Mão de obra, Máquina, Meio ambiente.",
        "Método, Medição, Material.",
        "Método, Material, Meio ambiente.",
        "Mão de obra, Medição, Meio ambiente."
      ],
      correctIndex: 2,
      explanation: "Partição quente (Método), RU/s manual sem autoscale (Material) e pico EMEA mais campanha de marketing (Meio ambiente) foram primários. Outros Ms eram contribuintes, mas remediados <strong>oportunisticamente</strong>."
    },
    {
      prompt: "Quando NÃO é apropriado usar o referencial dos 6Ms?",
      options: [
        "Durante postmortems rotineiros com a equipe de engenharia.",
        "Quando a causa é um problema de plataforma conhecido confirmado pelo Service Health.",
        "Durante revisões de confiabilidade de WAF com o cliente.",
        "No seu primeiro engajamento com um novo cliente."
      ],
      correctIndex: 1,
      explanation: "Os 6Ms são para exploração ampla. Se a causa é um <strong>problema de plataforma conhecido</strong> confirmado pelo Service Health, o referencial é overhead desnecessário."
    },
    {
      prompt: "&ldquo;Um engenheiro deixou uma VM ligada durante um feriado.&rdquo; Qual 6M representa a causa-raiz sistêmica, não a culpa?",
      options: [
        "Mão de obra — o descuido do engenheiro.",
        "Medição — sem alerta de orçamento em 80% do gasto.",
        "Meio ambiente — o timing inesperado do feriado.",
        "Material — as configurações de retenção da VM."
      ],
      correctIndex: 1,
      explanation: "Culpar o engenheiro não é uma causa-raiz. A causa sistêmica é a ausência de um alerta. A disciplina de <strong>Medição</strong> revela lacunas evitáveis."
    }
  ]
}, "fmea": {
  id: "fmea",
  title: "FMEA",
  group: "Mapeamento & Análise de Processos",
  duration: "30 min",
  executiveSummary: "A FMEA — Análise de Modos e Efeitos de Falha (Failure Mode and Effects Analysis) — antecipa sistematicamente como um processo ou sistema pode falhar, pontua cada modo de falha em Severidade × Ocorrência × Detecção para produzir um Número de Prioridade de Risco (RPN) e impulsiona mitigações nos itens de maior RPN primeiro. É um 'o que poderia dar errado?' estruturado para avaliação de risco pré-implantação e governança de sistemas de IA.",
  whatYouGain: [
    "Antecipar falhas antes que aconteçam, não após postmortems",
    "Pontuar falhas por Severidade (quão ruim), Ocorrência (com que frequência), Detecção (quão bem controlada)",
    "Priorizar mitigações por RPN (número de prioridade de risco), focando nos piores riscos primeiro",
    "Identificar modos de falha que os controles atuais não detectam",
    "Criar um documento de risco vivo que viaja com o sistema e se atualiza após incidentes"
  ],
  explanation: "<p>A FMEA documenta sistematicamente modos de falha, efeitos, causas e controles atuais para cada função em um sistema. Para cada modo: avalie a Severidade (1–10, onde 10 é catastrófico), a Ocorrência (1–10, quão provável), a Detecção (1–10, onde 10 é 'não vai detectar'), depois calcule o RPN = S × O × D (1–1000). Ordene por RPN e aborde os modos de maior RPN primeiro. Variantes: FMEA de Processo (manufatura/processos, mapeia para fluxos de engenharia), FMEA de Design (produto pré-lançamento), FMEA de Sistema (riscos em nível de arquitetura entre serviços).</p><p>Prática-chave: concorde sobre as escalas de 1–10 antes de começar. Caso contrário, as equipes queimam 80% do workshop debatendo se algo é 7 ou 8. Antipadrão a evitar: a FMEA de uma vez só que é entregue com o projeto e nunca se atualiza. O modelo de risco decai; incidentes devem disparar uma atualização da FMEA para capturar modos recém-descobertos.</p><p>Fluxo de trabalho: escolha o escopo (um processo, sistema ou recurso), monte uma equipe multifuncional, faça brainstorm de modos de falha (use Ishikawa / 6Ms para exaustividade), para cada modo capture efeito, causa, controles atuais, depois pontue S, O, D e calcule o RPN. Atribua ações e repontue após a mitigação. O RPN deve cair. Faça dele um documento vivo atualizado em incidentes, releases e mudanças de arquitetura.</p>",
  csamExample: "<p>Um CSAM está conduzindo uma FMEA com um cliente antes do primeiro exercício de failover multirregião. Achado de maior RPN: rotação de segredos na região de DR (S=9, O=4, D=9, RPN=324). Os controles atuais (rotação manual pré-exercício) têm baixa detecção. A equipe pré-rotaciona e testa antes do exercício; o exercício tem sucesso. O RPN pós-ação cai para 18 (via automação). Sem a FMEA, o failover teria falhado pelo motivo mais constrangedor na frente da liderança.</p>",
  csaExample: "<p>Um CSA está conduzindo uma FMEA na arquitetura de Cosmos DB de um cliente antes de um lançamento em produção. Modos de falha identificados: chave de partição quente (S=8, O=6, D=8, RPN=384), timeout de rede por connection pooling (S=7, O=3, D=6, RPN=126), corrupção de dados por bug de aplicação (S=10, O=2, D=4, RPN=80). O maior RPN é o design de chave de partição. A equipe implementa validação de chave de partição na IaC (reduzindo O para 1 pós-implementação). Modos secundários (timeout, corrupção de dados) recebem controles detectivos (alertas, log de auditoria) em vez de prevenção. A FMEA classificou o esforço pelo risco real.</p>",
  recap: [
    "A FMEA antecipa falhas antes que incidentes aconteçam",
    "RPN = Severidade × Ocorrência × Detecção; classifique por RPN para priorizar",
    "Estabeleça as escalas de pontuação de 1–10 antes de começar — debater uma única nota mata a produtividade",
    "A FMEA é um documento vivo; atualize após incidentes e mudanças de arquitetura",
    "Combine com Poka-Yoke — cada modo de maior RPN torna-se um alvo de à prova de erros"
  ],
  questions: [
    {
      prompt: "O que RPN significa na FMEA?",
      options: [
        "Risk Planning Number (Número de Planejamento de Risco).",
        "Risk Priority Number (Número de Prioridade de Risco).",
        "Ranked Priority Number (Número de Prioridade Classificado).",
        "Risk Process Notation (Notação de Processo de Risco)."
      ],
      correctIndex: 1,
      explanation: "<strong>Risk Priority Number</strong> (RPN, Número de Prioridade de Risco) é Severidade &times; Ocorrência &times; Detecção, produzindo uma nota que prioriza quais modos de falha abordar primeiro."
    },
    {
      prompt: "Como o RPN é calculado?",
      options: [
        "Severidade + Ocorrência + Detecção.",
        "Severidade &minus; Ocorrência + Detecção.",
        "Severidade &times; Ocorrência &times; Detecção.",
        "(Severidade &times; Ocorrência) &divide; Detecção."
      ],
      correctIndex: 2,
      explanation: "RPN = <strong>Severidade &times; Ocorrência &times; Detecção</strong>. A multiplicação significa que uma única dimensão na pior nota impulsiona um RPN alto, focando a atenção nos modos mais consequentes."
    },
    {
      prompt: "O que você deve estabelecer ANTES de iniciar um workshop de FMEA?",
      options: [
        "Uma lista de cada modo de falha concebível.",
        "Escalas de pontuação de 1–10 pré-acordadas para Severidade, Ocorrência e Detecção.",
        "O orçamento para mitigar os itens de maior RPN.",
        "Dois anos de dados históricos de incidentes."
      ],
      correctIndex: 1,
      explanation: "As equipes devem concordar sobre as <strong>escalas de 1–10</strong> antes do brainstorm. Caso contrário, o workshop é gasto debatendo se algo é 7 ou 8 em vez de analisar o risco."
    },
    {
      prompt: "Quais são as três variantes principais da FMEA?",
      options: [
        "Hardware, Software e Processo.",
        "Design, Sistema e Arquitetura.",
        "Processo, Design e Sistema.",
        "Preventiva, Detectiva e Corretiva."
      ],
      correctIndex: 2,
      explanation: "As variantes são <strong>FMEA de Processo</strong> (manufatura/processos), <strong>FMEA de Design</strong> (produto pré-lançamento) e <strong>FMEA de Sistema</strong> (riscos em nível de arquitetura entre serviços)."
    },
    {
      prompt: "Qual é o antipadrão chave a evitar na gestão de FMEA?",
      options: [
        "Pontuar um modo de falha como Severidade 10 quando deveria ser 9.",
        "Criar um documento de FMEA de uma vez só que nunca mais é atualizado.",
        "Envolver pessoas demais no workshop.",
        "Abordar os itens de menor RPN primeiro para criar impulso."
      ],
      correctIndex: 1,
      explanation: "A <strong>FMEA de uma vez só</strong> é entregue com o projeto e nunca se atualiza. Modelos de risco decaem; a FMEA deve ser um documento vivo atualizado após incidentes e mudanças de arquitetura."
    }
  ]
}, "5s": {
  id: "5s",
  title: "5S: Organização Visual do Local de Trabalho",
  group: "Ambiente, Fluxo & Padronização",
  duration: "30 min",
  executiveSummary: "5S — Senso de Utilização (Sort), Senso de Ordenação (Set in order), Senso de Limpeza (Shine), Senso de Padronização (Standardize), Senso de Disciplina (Sustain) — é um método para organizar patrimônios de engenharia a fim de eliminar o desperdício de procurar, identificar errado e recriar artefatos. Aplicado a repositórios, assinaturas, dashboards e runbooks, ele recupera horas de engenharia de outro modo perdidas em patrimônios não mantidos. A disciplina está na sequência: pule o Utilização e você organiza lixo; pule o Padronização e o Disciplina falha. Trate o 5S como trabalho trimestral recorrente, não uma limpeza pontual.",
  whatYouGain: [
    "Eliminar recursos órfãos e reduzir o desperdício de busca/identificação aplicando uma sequência de cinco passos a patrimônios de engenharia",
    "Usar o 5S para organizar repositórios, assinaturas, dashboards, runbooks e canais de ChatOps — recuperando horas perdidas com a desorganização",
    "Embutir convenção no seu patrimônio para que a organização permaneça consistente sem esforço manual constante",
    "Treinar sua equipe no antipadrão: limpezas pontuais falham; o Disciplina é o que faz a ordem grudar"
  ],
  explanation: "<p><strong>O 5S é a disciplina do local de trabalho visual nascida no chão de fábrica da Toyota, agora aplicada a patrimônios de engenharia.</strong> Repositórios, assinaturas e dashboards desorganizados vazam tempo invisivelmente: engenheiros fazem fork em vez de encontrar o módulo canônico; improvisam incidentes porque não acham o runbook; constroem dashboards redundantes porque não acham o existente.</p><p>Os cinco passos formam uma sequência:</p><ul><li><strong>Utilização (Seiri):</strong> Identifique o que é necessário; remova o que não é. Corte com firmeza. Arquive o que pode ser necessário; delete o resto.</li><li><strong>Ordenação (Seiton):</strong> Coloque o que é necessário em um lugar conhecido e convencional. Defina convenções de pasta, tag e nomenclatura.</li><li><strong>Limpeza (Seiso):</strong> Limpe continuamente. Linters automatizados, bots de dependência, auditorias de custo agendadas, verificações de links quebrados.</li><li><strong>Padronização (Seiketsu):</strong> Codifique a convenção em templates, Policy, templates de repositório ou packs de dashboard.</li><li><strong>Disciplina (Shitsuke):</strong> Torne a ordem auto-mantida para que não decaia. Atribua um dono nomeado para cada patrimônio; execute uma auditoria agendada em cadência fixa (ex.: trimestral) contra uma checklist curta e explícita extraída do passo Padronização; publique uma única métrica de drift em um dashboard (recursos órfãos, assinaturas sem tag, módulos duplicados) e a revise em uma reunião recorrente existente em vez de uma nova. Onde possível, substitua auditorias manuais por verificações automatizadas que falham um build ou abrem um ticket quando a convenção é quebrada, para que a sustentação seja imposta por mecanismo, não por memória. Trate uma métrica de drift em alta como o gatilho para um re-Utilização curto, não um motivo para começar do zero.</li></ul><p>O antipadrão: uma limpeza pontual de \"Sábado do 5S\" sem Padronização e Disciplina. A bagunça retorna dentro de um trimestre. O 5S real é trabalho recorrente, não um projeto.</p>",
  csamExample: "<p>Um CSAM herda um cliente 90 dias após o início do engajamento. O patrimônio de assinaturas tem 1.400 recursos; o cliente não consegue dar conta de 380 deles. Não há tags, posse clara e a alocação de custo está se tornando política. O CSAM propõe um varrição de 5S de 3 semanas: identificar e taguear ou aposentar recursos órfãos, estabelecer uma convenção de nomenclatura e um padrão de tagueamento, adicionar um dashboard de auditoria trimestral e atribuir um dono. Na semana 3, todos os 380 estão tagueados a uma equipe, aposentados ou transferidos. As discussões de alocação de custo desaparecem; a automação de auditoria recorrente mantém a contagem abaixo de 20. O CSAM usa o resultado do 5S para construir confiança: \"Encontramos US$ 94 mil/ano de desperdício e fizemos a limpeza grudar\", prova crível de valor que abre portas para trabalhos mais profundos.</p>",
  csaExample: "<p>Um CSA trabalha com a equipe de plataforma de um cliente em uma modernização de AKS. O monorepo de IaC tem 142 módulos; a equipe desperdiça horas procurando o canônico vs. clones desatualizados. O CSA lidera um 5S no repositório: a equipe faz Utilização, identifica 38 módulos verdadeiramente canônicos vs. 104 clones e arquiva os clones. Fazem Ordenação estabelecendo uma convenção de nomenclatura e hierarquia de pastas. Fazem Limpeza adicionando um gate de CI que detecta e sinaliza automaticamente lógica de módulo duplicada. Fazem Padronização criando um template de repositório que novos projetos herdam; todo módulo novo vai para o repositório canônico por padrão. Fazem Disciplina com uma métrica de auditoria mensal. O tempo de ciclo de PR no repositório de IaC cai 40%. O template de repositório padronizado impede drift futuro.</p>",
  recap: [
    "O 5S é uma sequência de cinco passos aplicada a patrimônios de engenharia; a sequência importa — pule o Utilização ou o Padronização e a disciplina quebra.",
    "Os cinco S: Utilização (remover lixo), Ordenação (posicionamento convencional), Limpeza (automatizar manutenção), Padronização (codificar), Disciplina (cadência de auditoria).",
    "Use o 5S para organizar repositórios, assinaturas, dashboards, bibliotecas de runbook, canais de ChatOps e bibliotecas de prompt de agente.",
    "O antipadrão é a limpeza pontual sem Disciplina; a bagunça retorna dentro de um trimestre. O 5S real é trabalho recorrente.",
    "Bem-feito, o 5S recupera horas de engenharia de outro modo perdidas em procurar e recriar artefatos."
  ],
  questions: [
    {
      prompt: "Quais são os cinco passos do 5S na ordem correta?",
      options: [
        "Organizar, Limpar, Definir, Auditar, Atualizar",
        "Utilização, Ordenação, Limpeza, Padronização, Disciplina",
        "Ordenação, Utilização, Limpeza, Disciplina, Padronização",
        "Limpar, Organizar, Verificar, Codificar, Manter"
      ],
      correctIndex: 1,
      explanation: "A sequência importa. Utilização remove o que não é necessário, Ordenação coloca o resto em ordem convencional, Limpeza automatiza a manutenção, Padronização codifica a convenção e Disciplina cria a <strong>cadência de auditoria</strong>."
    },
    {
      prompt: "Por que a sequência dos passos do 5S é crítica em vez de uma checklist flexível?",
      options: [
        "Cada passo depende dos passos anteriores estarem completos; pular a sequência quebra a disciplina.",
        "A ordem não importa &mdash; o mesmo resultado ocorre de qualquer forma.",
        "Ela acelera o processo e encurta a linha do tempo geral.",
        "Ela existe apenas por razões de branding."
      ],
      correctIndex: 0,
      explanation: "Pule o Utilização e você organiza lixo; pule o Padronização e o Disciplina colapsa. A <strong>sequência</strong> é o mecanismo que funciona."
    },
    {
      prompt: "Qual é o antipadrão mais comum que impede o 5S de entregar resultados duradouros?",
      options: [
        "Ciclos de limpeza mensais que são frequentes demais.",
        "Auditorias trimestrais que não incluem novos membros da equipe.",
        "Uma limpeza pontual (ex.: um &ldquo;Sábado do 5S&rdquo;) sem a fase de Disciplina.",
        "Documentação insuficiente das decisões de limpeza."
      ],
      correctIndex: 2,
      explanation: "Uma limpeza pontual sem <strong>Padronização e Disciplina</strong> retorna a bagunça dentro de um trimestre. O método requer cadência de auditoria recorrente para manter a ordem."
    },
    {
      prompt: "Qual superfície de engenharia é um alvo adequado para a metodologia 5S?",
      options: [
        "Arranjos pessoais de mesa de desenvolvedores individuais.",
        "Monorepos de IaC, patrimônios de assinatura, dashboards e bibliotecas de runbook.",
        "Caixas de e-mail pessoais e sistemas de anotações.",
        "Planilhas usadas para rastreamento manual de projetos."
      ],
      correctIndex: 1,
      explanation: "O 5S se aplica em qualquer lugar onde artefatos de engenharia vivem &mdash; repositórios, assinaturas, dashboards, runbooks. Essas superfícies vazam <strong>desperdício</strong> invisível quando desorganizadas."
    },
    {
      prompt: "Após completar uma varrição de 5S em um repositório, qual passo é mais crítico para sustentar os resultados?",
      options: [
        "Documentar todas as mudanças em uma wiki ou manual.",
        "Notificar toda a equipe em uma reunião obrigatória.",
        "Criar uma métrica e cadência de auditoria como parte do Disciplina.",
        "Realizar uma celebração para reconhecer o esforço de limpeza."
      ],
      correctIndex: 2,
      explanation: "Disciplina é o quinto S &mdash; sem um dono nomeado, cadência de auditoria e uma <strong>métrica em um dashboard</strong>, a entropia retorna. A cadência de auditoria é o que faz a ordem durar."
    }
  ]
}, "standard-work": {
  id: "standard-work",
  title: "Trabalho Padrão: A Linha de Base para a Melhoria",
  group: "Ambiente, Fluxo & Padronização",
  duration: "30 min",
  executiveSummary: "O Trabalho Padrão é a melhor forma atualmente conhecida de executar uma tarefa — documentada, ensinada e seguida até que um ciclo PDCA prove uma forma melhor. Sem um padrão, você não consegue dizer se uma mudança melhorou ou apenas variou. Para os CSAs, o trabalho padrão é como os ganhos de Kaizen e DMAIC são codificados em módulos de IaC, Policy, runbooks, templates e prompts de agente. O padrão não é estático; é um artefato vivo, com dono, versionado e explicitamente projetado para ser substituído pela sua versão melhor.",
  whatYouGain: [
    "Estabelecer uma linha de base mensurável contra a qual a melhoria é comprovada — a variação não pode ser gerenciada ou melhorada sem um padrão para comparar",
    "Reduzir variação e defeitos codificando o procedimento melhor conhecido em IaC, Policy e runbooks que todos seguem",
    "Acelerar a integração dando aos novos engenheiros um procedimento comprovado em vez de pedir que o reinventem",
    "Embutir salvaguardas de poka-yoke diretamente no padrão para que erros se tornem impossíveis ou imediatamente detectados"
  ],
  explanation: "<p><strong>O Trabalho Padrão é a melhor forma atualmente conhecida de executar uma tarefa.</strong> Ele tem três componentes na formulação da Toyota:</p><ul><li><strong>Takt time:</strong> O ritmo da demanda (ex.: um deploy a cada 8 horas).</li><li><strong>Sequência de trabalho:</strong> O procedimento passo a passo na ordem exigida.</li><li><strong>WIP padrão:</strong> Os itens ou estado necessários para executar o procedimento sem atritos (ex.: 2 ambientes de staging aquecidos).</li></ul><p>Em engenharia, o trabalho padrão assume formas como módulos de IaC com defaults travados, atribuições de Azure Policy, templates de runbook, payloads de ChatOps, templates de repositório e prompts de agente versionados com baselines avaliados. A palavra &quot;padrão&quot; aqui significa a melhor variante atualmente conhecida, não a palavra final. Cada PR que atualiza o padrão é um ciclo PDCA tornado permanente.</p><p><strong>Como estabelecer trabalho padrão:</strong> Não o escreva do zero; observe seus melhores engenheiros fazendo o trabalho bem, documente a variante com o melhor resultado medido, pilote-a, treine todos e planeje a cadência de atualização. O antipadrão é a pasta de padrões que ninguém abre — padrões devem viver onde o trabalho acontece: no módulo de IaC, no pipeline, na IDE, no payload de ChatOps, não em uma página de wiki.</p>",
  csamExample: "<p>O cliente de um CSAM tem 8 engenheiros implantando clusters AKS; cada um faz de um jeito. Os incidentes de upgrade variam muito (1,5 a 6 horas de MTTR) e a equipe culpa a complexidade. O CSAM propõe: observar o procedimento do melhor engenheiro, documentá-lo como um workflow de ChatOps + playbook de pré-verificação, pilotar com duas equipes e estender a todos. Em um trimestre, o MTTR de upgrade é de 38 minutos quase constante. O CSAM enquadrou para a liderança: \"Não adicionamos pessoas nem recursos — fizemos do bom procedimento o procedimento de todos.\" Essa história é valor de alta credibilidade: consistência e velocidade a partir de conhecimento capturado.</p>",
  csaExample: "<p>O cliente de um CSA tem um módulo de IaC de Cosmos DB usado por 12 equipes. Três meses de trabalho de DMAIC provam que chaves de partição hierárquicas + autoscale + ajuste de índice + upgrade de SDK previnem erros 429. O CSA codifica os quatro em um novo módulo padrão com defaults travados. Novos contêineres herdam o padrão; os antigos recebem um script de migração. O WIP padrão agora inclui \"tempo de aquecimento do autoscale\" na definição de takt. O módulo é versionado e vai para o catálogo padrão da plataforma. Um ano depois, um 5 Porquês descobre uma melhor abordagem de ajuste; o CSA atualiza o módulo em um PR, as equipes puxam a nova versão e o padrão evolui sem ninguém ficar para trás.</p>",
  recap: [
    "O Trabalho Padrão é a linha de base para medição — sem um padrão, a melhoria é invisível e a variação não pode ser gerenciada.",
    "Três componentes: Takt time (ritmo da demanda), Sequência de trabalho (os passos) e WIP padrão (itens necessários para executar sem atritos).",
    "Estabeleça observando seus melhores engenheiros, documentando a melhor variante, pilotando, treinando e planejando a cadência de atualização.",
    "Padrões devem viver onde o trabalho acontece — em módulos de IaC, pipelines, Policy, payloads de ChatOps — não em uma wiki separada.",
    "Um padrão é a melhor forma atualmente conhecida, não a palavra final. Atualize via ciclos PDCA; cada PR que atualiza é um ciclo tornado permanente."
  ],
  questions: [
    {
      prompt: "Por que o trabalho padrão é essencial como uma linha de base para a melhoria?",
      options: [
        "Ele impõe conformidade com a política corporativa.",
        "Sem um padrão, você não consegue dizer se uma mudança de fato melhorou ou apenas variou.",
        "Ele elimina a necessidade de runbooks e integração.",
        "Ele trava as melhores práticas permanentemente."
      ],
      correctIndex: 1,
      explanation: "A melhoria requer um <strong>comparador</strong>. Sem um padrão, cada engenheiro reinventa o procedimento, a variação explode e não há linha de base para medir a mudança."
    },
    {
      prompt: "Quais são os três componentes do trabalho padrão na formulação da Toyota?",
      options: [
        "Documentação, Treinamento, Auditoria.",
        "Takt time, Sequência de trabalho, WIP padrão.",
        "Definir, Medir, Controlar.",
        "Política, Processo, Procedimento."
      ],
      correctIndex: 1,
      explanation: "<strong>Takt</strong> (ritmo da demanda), <strong>Sequência de trabalho</strong> (o procedimento passo a passo) e <strong>WIP padrão</strong> (itens / estado necessários para executar o procedimento sem atritos)."
    },
    {
      prompt: "Ao estabelecer trabalho padrão, por onde você deve começar?",
      options: [
        "Escrever o padrão do zero com base nas melhores práticas do setor.",
        "Observar as variações atuais e documentar o que seus melhores engenheiros fazem bem; escolher a variante com o melhor resultado medido.",
        "Comprar um padrão comercial de uma consultoria.",
        "Fazer a liderança definir o padrão de cima para baixo."
      ],
      correctIndex: 1,
      explanation: "Não escreva do zero &mdash; <strong>observe e codifique a melhor variante conhecida</strong>. Padrões construídos a partir da prática real sobrevivem ao contato com o trabalho; padrões escritos no vácuo morrem em campo."
    },
    {
      prompt: "Onde o trabalho padrão deve viver para de fato ser seguido?",
      options: [
        "Em uma pasta na sala da equipe.",
        "Em uma página de wiki que ninguém abre.",
        "Onde o trabalho acontece &mdash; no módulo de IaC, no pipeline, na IDE, no payload de ChatOps.",
        "Em um curso de treinamento anual."
      ],
      correctIndex: 2,
      explanation: "O antipadrão é a <strong>pasta de padrões que ninguém abre</strong>. Padrões devem estar embutidos onde o trabalho acontece &mdash; defaults de IaC, templates de pipeline, Policy, runbooks &mdash; não em um documento separado."
    },
    {
      prompt: "O trabalho padrão deve mudar alguma vez?",
      options: [
        "Não &mdash; uma vez padronizado, o padrão é travado permanentemente.",
        "Sim &mdash; um padrão é um artefato vivo, com dono e versionado, substituído por uma versão melhor por meio de um ciclo PDCA.",
        "Apenas a cada 5 anos durante revisões maiores.",
        "Apenas se a liderança aprovar por escrito."
      ],
      correctIndex: 1,
      explanation: "Um padrão é a <strong>melhor forma atualmente conhecida</strong>, não a palavra final. Cada PR que atualiza o padrão é um ciclo PDCA tornado permanente. Sem uma cadência de atualização, o padrão se ossifica."
    }
  ]
}, "gemba": {
  id: "gemba",
  title: "Gemba Walk: Observe Onde o Trabalho de Fato Acontece",
  group: "Ambiente, Fluxo & Padronização",
  duration: "30 min",
  executiveSummary: "Gemba significa 'o lugar real' — ir onde o trabalho acontece, observá-lo diretamente e fazer perguntas respeitosas em vez de confiar em relatórios, dashboards ou boatos. O gemba revela atritos silenciosos e contornos que as métricas diluem. Para os CSAs, os gemba walks ancoram as fases Medir e Analisar do DMAIC, preparam o trabalho prévio de Kaizen e validam se as narrativas da equipe correspondem à realidade observada. Uma observação de 5 minutos frequentemente supera uma auditoria de 50 páginas.",
  whatYouGain: [
    "Descobrir atritos silenciosos e contornos não documentados que dashboards e relatórios sistematicamente perdem",
    "Construir credibilidade de CSA com os engenheiros do cliente vendo a realidade deles em primeira mão, não confiando em resumos",
    "Validar ou invalidar as autonarrativas da equipe — \"nós implantamos diariamente\" frequentemente esconde uma média de 11 dias ocultada pela forma como a métrica é relatada",
    "Fazer emergir padrões não documentados (bons e ruins) que são os procedimentos reais que a equipe segue"
  ],
  explanation: "<p><strong>Gemba é uma observação estruturada do trabalho à medida que acontece.</strong> Não é uma auditoria, não é um interrogatório, não é uma reunião de status. Princípios do gemba, adaptados de Taiichi Ohno:</p><ul><li><strong>Vá ver:</strong> Esteja física ou virtualmente presente onde o trabalho acontece.</li><li><strong>Pergunte por quê:</strong> Curioso, respeitoso, repetido (a disciplina dos 5 Porquês se aplica aqui).</li><li><strong>Mostre respeito:</strong> Os praticantes sabem coisas que você não sabe. Escute primeiro.</li></ul><p>Superfícies de engenharia que contam como gemba: o repositório e a IDE durante uma tarefa de desenvolvimento, o build e o deploy enquanto rodam, o canal de ChatOps durante um incidente, o standup enquanto acontece, observações de plantão, telemetria de uso do cliente. O que o gemba <em>não</em> é: uma revisão de dashboard, uma reunião de status, um walkthrough resumido em slides, ou \"gemba executivo\" — uma visita de 30 minutos com uma comitiva de 6 pessoas onde ninguém trabalha naturalmente.</p><p><strong>Como fazer um gemba walk:</strong> Escolha um propósito (\"entender o lead time de deploy\"), agende com o consentimento da equipe, leve um caderno e deixe o laptop, observe um ciclo completo em silêncio, depois faça perguntas abertas. Registre verbatim onde for útil. Sintetize fora do local. Reporte de volta para a equipe primeiro, antes da liderança. O atrito que você faz emergir torna-se o trabalho prévio para Kaizen ou o diagnóstico para uma fase Medir.</p>",
  csamExample: "<p>O cliente de um CSAM afirma \"nós implantamos diariamente.\" O CSA acompanha o processo de implantação por três dias. Os builds de fato rodam diariamente; mas as promoções para produção acontecem a cada 11 dias em média, barradas por um comitê de aprovação de mudanças (CAB) semanal. A métrica que a equipe mostrou à liderança era exata e enganosa. O gemba walk do CSA reformulou o programa: o gargalo não é a velocidade de desenvolvimento — é a governança de mudança. A reunião do CAB tornou-se o alvo de intervenção do CSA, não o pipeline de CI. Esse enquadramento nunca teria emergido de um dashboard.</p>",
  csaExample: "<p>Um CSA está diagnosticando churn de pods AKS no cluster de produção de um cliente. Dashboards mostram reinícios ocasionais; a equipe de plantão diz \"provavelmente são blips de rede.\" O CSA senta com o plantão por um turno de 4 horas e assiste ao canal de incidentes em tempo real. Vê: cada reinício é seguido por 4 passos manuais de coleta de contexto (achar os logs do pod, verificar o nó, verificar o namespace de rede, verificar o DNS). Cada passo leva 5–10 minutos. O CSA propõe um workbook que coleta automaticamente todos os quatro com um único link. A adoção pelo plantão é imediata; o esforço manual cai 40%. O gemba revelou um procedimento não documentado; a correção ficou clara assim que o trabalho ficou visível.</p>",
  recap: [
    "Gemba significa 'o lugar real' — observe onde o trabalho acontece, pergunte por quê com respeito, mostre respeito pelo que os praticantes sabem.",
    "O gemba faz emergir atritos silenciosos e contornos que as métricas diluem e os relatórios resumem até sumir.",
    "Especialmente valioso nas fases Medir e Analisar do DMAIC e no trabalho prévio de Kaizen — ancora o diagnóstico na realidade, não na narrativa relatada.",
    "Vá pequeno: convide-se com consentimento, leve um caderno, assista em silêncio primeiro, depois pergunte. Reporte de volta para a equipe antes da liderança.",
    "O antipadrão: 'gemba executivo' — uma visita de comitiva grande onde ninguém trabalha naturalmente. O gemba genuíno é pequeno e agendado com consentimento."
  ],
  questions: [
    {
      prompt: "O que &ldquo;gemba&rdquo; significa?",
      options: [
        "Uma reunião agendada de revisão gerencial.",
        "O lugar real onde o trabalho acontece.",
        "Um processo formal de auditoria ou inspeção.",
        "Uma discussão retrospectiva de eventos passados."
      ],
      correctIndex: 1,
      explanation: "<strong>Gemba</strong> é japonês para &ldquo;o lugar real.&rdquo; Significa ir onde o trabalho é feito, observá-lo diretamente e fazer perguntas respeitosas &mdash; não confiar em dashboards ou boatos."
    },
    {
      prompt: "Quais são os três princípios de Ohno de um gemba walk?",
      options: [
        "Escutar, Aprender, Liderar.",
        "Planejar, Observar, Reportar.",
        "Vá ver, Pergunte por quê, Mostre respeito.",
        "Achar fatos, Analisar dados, Recomendar ação."
      ],
      correctIndex: 2,
      explanation: "Os três princípios são <strong>Vá ver, Pergunte por quê, Mostre respeito</strong> &mdash; vá onde o trabalho acontece, pergunte por quê repetidamente e respeite que os praticantes sabem coisas que o observador não sabe."
    },
    {
      prompt: "O que o gemba NÃO é?",
      options: [
        "Uma forma de descobrir contornos não documentados.",
        "Uma auditoria conduzida com o consentimento da equipe.",
        "Uma visita de 30 minutos com uma comitiva executiva de 6 pessoas que perturba o trabalho sendo observado.",
        "Uma observação do processo real de resposta a incidentes."
      ],
      correctIndex: 2,
      explanation: "Gemba NÃO é &ldquo;gemba executivo&rdquo; &mdash; uma <strong>visita de comitiva grande</strong> onde ninguém trabalha naturalmente. O gemba genuíno é pequeno, agendado com consentimento e conduzido com um caderno, não um laptop."
    },
    {
      prompt: "O que um gemba walk faz emergir que dashboards e relatórios tipicamente perdem?",
      options: [
        "Tendências de alto nível e métricas agregadas.",
        "Atrito silencioso e contornos não documentados.",
        "Documentação formal de processo e padrões.",
        "Dados históricos de linha de base de meses passados."
      ],
      correctIndex: 1,
      explanation: "Os gemba walks fazem emergir <strong>atrito silencioso</strong> &mdash; contornos que todos usam mas ninguém documenta, passos manuais que as métricas diluem na média. Dashboards mentem por omissão; o gemba revela a textura."
    },
    {
      prompt: "Em quais fases do DMAIC o gemba walk é especialmente valioso?",
      options: [
        "Definir e Melhorar apenas.",
        "Medir e Analisar.",
        "Controlar e Melhorar.",
        "Todas as fases igualmente."
      ],
      correctIndex: 1,
      explanation: "O gemba é especialmente valioso em <strong>Medir e Analisar</strong> para ancorar a linha de base na realidade, validar ou invalidar narrativas da equipe e descobrir o que os relatórios sistematicamente perdem."
    }
  ]
}, "poka-yoke": {
  id: "poka-yoke",
  title: "Poka-Yoke: Projete Sistemas Para Que Erros Sejam Impossíveis",
  group: "Ambiente, Fluxo & Padronização",
  duration: "30 min",
  executiveSummary: "Poka-Yoke significa 'à prova de erros' — projetar sistemas e processos para que erros sejam impossíveis ou, na falta disso, imediatamente detectados. A prevenção (o erro torna-se impossível) supera a detecção (o erro é pego no momento). Para os CSAs, o poka-yoke é como você faz os ganhos de MC grudarem: a mudança não pode ser desfeita, a má configuração não pode ser implantada, o segredo não pode ser commitado. Treinamento e lembretes tendem a falhar em escala; a prevenção durável vem do mecanismo. Combine com FMEA e Trabalho Padrão para identificar onde aplicar o poka-yoke e qual comportamento impor.",
  whatYouGain: [
    "Fazer os ganhos de MC grudarem projetando sistemas onde erros são impossíveis — trave o recurso de prod, negue a config ruim, bloqueie o commit do segredo",
    "Remover a dependência de treinamento, checklists e atenção humana em escala — o mecanismo supera o memorando todas as vezes",
    "Sustentar melhorias de Kaizen e DMAIC removendo o caminho de regressão — a mudança torna-se estrutura, não disciplina",
    "Aplicar poka-yokes nativos do Azure: Policy (modo deny), RBAC (privilégio mínimo), validação de schema, gates de CI, locks de recurso, managed identity"
  ],
  explanation: "<p><strong>O Poka-Yoke tem duas classes:</strong></p><ul><li><strong>Prevenção:</strong> O erro é física ou logicamente impossível. A Policy nega a ação. O recurso não pode ser deletado. A tag não pode ser não-imutável.</li><li><strong>Detecção:</strong> O erro é imediatamente, visivelmente sinalizado no momento em que acontece. A validação de schema rejeita config malformada. O pre-commit hook bloqueia o segredo.</li></ul><p>Os três níveis de controle de Shingo: <strong>Aviso</strong> (operador alertado em um dashboard), <strong>Desligamento/recusa</strong> (sistema recusa a ação), <strong>Autocorretivo</strong> (sistema corrige e prossegue). A recusa é mais difícil de projetar do que um aviso, mas impede que o erro ocorra.</p><p><strong>Poka-yokes comuns no Azure/engenharia:</strong> Azure Policy (modos deny/audit), RBAC com escopo de privilégio mínimo, validação de schema, pre-commit hooks (escaneamento de segredos, lint), gates de pipeline, locks de recurso (CanNotDelete/ReadOnly), managed identity, infraestrutura imutável, sistemas de tipos e lints.</p><p><strong>Como projetar:</strong> Identifique o erro (a partir de FMEA, postmortems, quase-acidentes), escolha a classe (prevenção &gt; detecção), escolha o nível (recusa &gt; aviso), coloque-o o mais próximo da fonte do erro (pre-commit &gt; CI &gt; runtime &gt; auditoria). Teste o próprio poka-yoke. Padronize em IaC, Policy ou ferramentas compartilhadas. Monitore por bypass — algumas equipes vão contornar; detecte isso.</p>",
  csamExample: "<p>O cliente de um CSAM deletou um banco de dados de produção três vezes em 18 meses apesar do treinamento. O CSAM propõe um mecanismo de poka-yoke: a Policy atribui `cannot_be_deleted = true` a cada recurso de prod; os runners de CI bloqueiam a flag `--no-prompt`; uma solicitação de delete agora requer aprovações que a equipe sabe enfileirar. O treinamento sozinho falhou em escala; o mecanismo funciona. Zero recorrências nos 24 meses seguintes. O CSAM enquadrou para a liderança: \"Memorandos não vencem mecanismo. Removemos a capacidade de cometer o erro.\"</p>",
  csaExample: "<p>O registro de imagens do cliente de um CSA é público, arriscando uma vulnerabilidade de cadeia de suprimentos. O CSA propõe: a Azure Policy nega endpoints públicos no ACR, impõe managed identity para pulls de pods e bloqueia tags de imagem mutáveis. O RBAC limita permissões de delete a break-glass apenas. O pre-commit hook bloqueia a tag `latest` em Helm charts. Um desenvolvedor tentando o velho padrão inseguro agora bate em recusa em múltiplas camadas — o erro torna-se impossível antes de chegar ao runtime. Padronizado no módulo de IaC para que cada novo ACR herde os poka-yokes.</p>",
  recap: [
    "Poka-yokes de prevenção tornam o erro impossível; poka-yokes de detecção o pegam imediatamente. A prevenção é preferida quando viável.",
    "Coloque poka-yokes próximos à fonte do erro: pre-commit supera CI, que supera runtime, que supera auditoria post-hoc.",
    "Recusa (sistema recusa a ação) é mais forte que aviso (sistema alerta). O mecanismo supera treinamento, checklist e memorando em escala.",
    "Poka-yokes comuns do Azure: Policy (modo deny), RBAC (privilégio mínimo), validação de schema, pre-commit hooks, gates de CI, locks de recurso, managed identity.",
    "Qualquer erro que aconteceu duas vezes deveria ter um poka-yoke; modos de alta severidade (os raros mordem mais forte) especialmente precisam deles."
  ],
  questions: [
    {
      prompt: "Quais são as duas classes de poka-yoke conforme a distinção original de Shingo?",
      options: [
        "Manual e Automatizado.",
        "Prevenção (erro física/logicamente impossível) e Detecção (erro pego no momento em que acontece).",
        "Hardware e Software.",
        "Pre-commit e Pós-deploy."
      ],
      correctIndex: 1,
      explanation: "A prevenção torna o erro <strong>impossível</strong> (a Policy nega a ação); a detecção o pega no momento em que acontece (a validação de schema rejeita config malformada). A prevenção é preferida quando viável."
    },
    {
      prompt: "O banco de dados de prod de um cliente foi deletado três vezes em 18 meses apesar do treinamento. Qual é o próximo passo certo?",
      options: [
        "Adicionar uma quarta rodada de treinamento e uma checklist.",
        "Aplicar um mecanismo: lock de recurso (CanNotDelete), Policy deny e bloquear --no-prompt nos runners de CI.",
        "Documentar o problema em uma wiki e seguir em frente.",
        "Emitir um memorando enérgico da liderança."
      ],
      correctIndex: 1,
      explanation: "Treinamento e lembretes falham em escala. O princípio do poka-yoke é &ldquo;<strong>memorandos não vencem mecanismo</strong>.&rdquo; Trave o recurso e negue a ação na política &mdash; a deleção torna-se impossível."
    },
    {
      prompt: "Qual é geralmente o nível de controle mais forte para um poka-yoke?",
      options: [
        "Aviso &mdash; alertar o operador em um dashboard.",
        "Desligamento / recusa &mdash; o sistema recusa a ação.",
        "Autocorretivo &mdash; corrigir silenciosamente e prosseguir.",
        "Auditoria &mdash; registrar a ação para revisão posterior."
      ],
      correctIndex: 1,
      explanation: "A recusa é mais difícil de projetar do que um aviso, mas impede que o erro ocorra. <strong>Recusa &gt; Aviso</strong> na hierarquia de controle de Shingo."
    },
    {
      prompt: "Onde você deve colocar um poka-yoke para efeito máximo?",
      options: [
        "O mais downstream possível para evitar bloquear desenvolvedores.",
        "O mais próximo da fonte do erro &mdash; pre-commit supera CI; CI supera runtime; runtime supera auditoria.",
        "Apenas em produção, nunca em ambientes de dev ou test.",
        "Onde for mais fácil implementar, independentemente da fonte."
      ],
      correctIndex: 1,
      explanation: "Pegue erros o mais próximo possível da fonte. Um <strong>pre-commit hook</strong> supera um gate de CI, que supera uma verificação de runtime, que supera auditoria post-hoc. Quanto mais cedo, mais barato."
    },
    {
      prompt: "Qual é o antipadrão chave a evitar ao projetar poka-yoke?",
      options: [
        "Usar Azure Policy em modo deny para recursos de prod.",
        "Tratar &ldquo;treinamento mais uma checklist&rdquo; como um poka-yoke quando apenas um mecanismo qualifica.",
        "Travar o RBAC para privilégio mínimo.",
        "Usar managed identity em vez de segredos no código."
      ],
      correctIndex: 1,
      explanation: "Treinamento não é poka-yoke; <strong>apenas o mecanismo é</strong>. Uma checklist que depende da atenção humana vai falhar em escala &mdash; é precisamente o que o poka-yoke existe para remover."
    }
  ]
}, "andon-cord": {
  id: "andon-cord",
  title: "Andon Cord: Pare a Linha, Corrija a Fonte",
  group: "Ambiente, Fluxo & Padronização",
  duration: "30 min",
  executiveSummary: "O Andon cord é o mecanismo do Sistema Toyota de Produção que permite a qualquer trabalhador parar a linha no momento em que uma anormalidade aparece, para que a equipe se concentre no problema em sua fonte em vez de passar um defeito adiante. É o jidoka na prática — construir qualidade recusando-se a continuar quando algo está errado. Para os CSAs, o Andon cord é o reflexo de 'casa pegando fogo' transformado em sistema: quando uma implantação está falhando ou um defeito está escapando, o primeiro movimento é parar a linha e contê-lo, depois rodar a análise de causa-raiz. Só funciona onde puxar a corda é seguro, esperado e sem culpa.",
  whatYouGain: [
    "Construir o reflexo de parar a linha e conter um problema primeiro, antes que ele se propague adiante até os clientes",
    "Tornar anormalidades visíveis no instante em que ocorrem em vez de descobri-las em um postmortem",
    "Separar a resposta imediata de parar-e-concentrar do trabalho mais lento de causa-raiz que previne repetições",
    "Criar uma cultura sem culpa onde puxar a corda é recompensado, não punido, para que problemas apareçam cedo",
    "Aplicar mecanismos de Andon nativos do Azure: gates automatizados de rollout, auto-pausa de canário, alertas de orçamento de erro e autoridade de parar a entrega"
  ],
  explanation: "<p>O <strong>Andon cord</strong> (do japonês <em>andon</em>, uma lanterna de papel usada como sinal) é uma corda ou botão físico em uma linha de montagem da Toyota. Quando um operador detecta um defeito ou uma condição anormal, ele o puxa. Um sinal se acende, um supervisor vem ajudar e, se o problema não for resolvido dentro do takt time, a linha para. A ideia radical é que se confia em um único trabalhador da linha de frente para deter uma linha de produção inteira em vez de deixar um defeito conhecido avançar.</p><p>Esta é a face operante do <strong>jidoka</strong>&mdash;autonomação, ou &lsquo;automação com um toque humano.&rsquo; O princípio é <strong>construir qualidade</strong> parando no momento em que algo está errado, em vez de inspecioná-lo depois. Parar não é falha; é o sistema funcionando como projetado. Deixar um defeito passar para manter a linha em movimento é a verdadeira falha, porque o custo de corrigir um problema cresce quanto mais adiante ele viaja.</p><p>O Andon cord mapeia diretamente sobre a disciplina de conter-primeiro: <strong>parar a linha é o mesmo instinto de &lsquo;apagar o fogo primeiro.&rsquo;</strong> Quando algo está ativamente dando errado, o trabalho imediato é deter e conter o dano&mdash;não debater a causa-raiz enquanto defeitos continuam escapando. Puxar a corda é uma reação deliberada e treinada a uma anormalidade, não convergência prematura. O trabalho estruturado de divergir-e-convergir da causa-raiz vem <em>depois</em> que a linha está estável, na concentração e no postmortem, onde a equipe encontra a causa sistêmica e melhora o estado atual para que a mesma parada seja menos provável da próxima vez.</p><p>Para que o mecanismo funcione, três condições devem valer: puxar a corda deve ser <strong>seguro</strong> (sem culpa&mdash;nenhuma punição por uma parada de boa-fé), <strong>esperado</strong> (todos são empoderados e treinados para puxá-la) e <strong>responsivo</strong> (um puxão dispara ajuda imediata, não um dar de ombros). Onde parar a linha é implicitamente punido, as pessoas param de puxar a corda, os defeitos fluem adiante e o sinal apaga.</p><p><strong>Andon no Azure e na engenharia:</strong> um canário falho que auto-pausa um rollout progressivo, um anel de implantação que para na falha de health-gate, um alerta de queima de orçamento de erro que aciona o plantão, rollback automatizado em um smoke test falho e autoridade explícita de &lsquo;parar a entrega&rsquo; para qualquer engenheiro que veja um release dando errado. O equivalente digital de puxar a corda é deter o rollout e se concentrar&mdash;depois escrever o postmortem sem culpa.</p>",
  csamExample: "<p>Um CSAM nota que os engenheiros do cliente rotineiramente empurram implantações mesmo quando as métricas de canário parecem ruins, porque deter um release é tratado como falha pessoal. Defeitos chegam à produção e os mesmos incidentes se repetem. O CSAM introduz um modelo Andon: análise de canário automatizada auto-pausa qualquer rollout progressivo quando as taxas de erro ultrapassam um limite, e qualquer engenheiro está explicitamente autorizado a deter um release sem buscar aprovação. Criticamente, o CSAM trabalha com a liderança para tornar as paradas sem culpa&mdash;uma linha parada é celebrada como um defeito contido, não um atraso causado. Em um trimestre, problemas aparecem durante o rollout em vez de em incidentes de cliente, e os postmortems mudam de culpar indivíduos para corrigir o sistema.</p>",
  csaExample: "<p>Um CSA está endurecendo o pipeline de implantação AKS de um cliente. Hoje uma imagem ruim pode chegar a todas as réplicas antes de alguém notar. O CSA implementa um Andon cord digital: um rollout progressivo com health probes e um gate automatizado que para e faz rollback no momento em que os orçamentos de erro queimam, mais um alerta que aciona o plantão no instante em que o gate dispara. O plantão tem autoridade documentada de parar a entrega para congelar o pipeline. Quando o gate dispara, a equipe se concentra para restaurar o serviço primeiro; a análise de causa-raiz de divergir-e-convergir acontece depois em um postmortem sem culpa, e a correção é padronizada de volta no pipeline para que aquele modo de falha auto-pare da próxima vez.</p>",
  recap: [
    "O Andon cord empodera qualquer trabalhador a parar a linha no instante em que uma anormalidade aparece, para que defeitos sejam contidos na fonte em vez de passar adiante",
    "É o jidoka em ação: construir qualidade parando quando algo está errado, em vez de inspecionar defeitos depois",
    "Parar a linha é o mesmo instinto de 'apagar o fogo primeiro'\u2014conter imediatamente, depois fazer a análise de causa-raiz no postmortem",
    "A corda só funciona onde puxá-la é seguro (sem culpa), esperado (todos são empoderados) e responsivo (um puxão dispara ajuda)",
    "Andon nativo do Azure: auto-pausa de canário, rollouts com health-gate, rollback automatizado, alertas de orçamento de erro e autoridade explícita de parar a entrega"
  ],
  questions: [
    {
      prompt: "Qual é o propósito central do Andon cord no Sistema Toyota de Produção?",
      options: [
        "Rastrear quantas unidades cada operador completa por turno.",
        "Permitir que qualquer trabalhador pare a linha no momento em que uma anormalidade aparece, para que o problema seja corrigido em sua fonte.",
        "Sinalizar pausas agendadas e trocas de turno no chão de fábrica.",
        "Classificar operadores por quão raramente eles param a produção."
      ],
      correctIndex: 1,
      explanation: "O Andon cord confia em um único trabalhador da linha de frente para <strong>parar a linha</strong> quando vê um defeito, para que a equipe se concentre no problema na fonte em vez de deixá-lo fluir adiante, onde custa mais para corrigir."
    },
    {
      prompt: "O Andon cord é a face operante de qual princípio Lean?",
      options: [
        "Takt time &mdash; ritmar a produção à demanda do cliente.",
        "Jidoka &mdash; construir qualidade parando quando algo está errado.",
        "Heijunka &mdash; nivelar o cronograma de produção.",
        "Muda &mdash; eliminar os sete desperdícios."
      ],
      correctIndex: 1,
      explanation: "O Andon é <strong>jidoka</strong> (autonomação) na prática: <strong>construir qualidade</strong> detendo no momento em que uma anormalidade aparece, em vez de inspecionar defeitos depois."
    },
    {
      prompt: "Como o Andon cord se relaciona com a disciplina de 'apagar o fogo primeiro' / conter-primeiro?",
      options: [
        "Ele substitui a análise de causa-raiz inteiramente &mdash; uma vez que você para a linha, nenhuma investigação adicional é necessária.",
        "Parar a linha é a reação imediata de conter-primeiro; o trabalho de divergir-e-convergir da causa-raiz acontece depois na concentração e no postmortem.",
        "Significa que você deve rodar um Ishikawa completo antes de decidir se para a linha.",
        "Aplica-se apenas a trabalho de melhoria planejado, nunca a incidentes ao vivo."
      ],
      correctIndex: 1,
      explanation: "Puxar a corda é o mesmo instinto de apagar o fogo primeiro: <strong>conter imediatamente</strong>, depois encontrar a causa-raiz. Reagir a uma anormalidade é uma resposta treinada, não convergência prematura."
    },
    {
      prompt: "Qual condição é essencial para um sistema Andon de fato funcionar?",
      options: [
        "Apenas supervisores seniores devem ter permissão de parar a linha.",
        "Puxar a corda deve ser seguro e sem culpa, para que as pessoas façam os problemas aparecerem em vez de escondê-los.",
        "As paradas devem ser registradas e contadas contra a avaliação de desempenho do operador.",
        "A linha só deve parar no fim de um turno para evitar interrupção."
      ],
      correctIndex: 1,
      explanation: "Se parar a linha é punido, as pessoas param de puxar a corda e os defeitos fluem adiante. Uma cultura <strong>sem culpa</strong>, empoderada e responsiva é o que mantém o sinal vivo."
    },
    {
      prompt: "Qual é um bom equivalente digital de um Andon cord em um pipeline de implantação do Azure?",
      options: [
        "Um relatório semanal resumindo quantas implantações falharam.",
        "Um health gate automatizado que auto-pausa ou faz rollback de um rollout progressivo e aciona o plantão no instante em que os orçamentos de erro queimam.",
        "Uma política que proíbe engenheiros de jamais deter um release depois que ele começa.",
        "Uma reunião manual de aprovação agendada para o dia depois de o rollout completar."
      ],
      correctIndex: 1,
      explanation: "Um rollout com health-gate/canário que <strong>auto-pausa ou faz rollback</strong> e imediatamente aciona o plantão é o Andon cord digital: ele para a linha ao primeiro sinal de uma anormalidade e dispara uma concentração imediata."
    }
  ]
}, "takt-time": {
  id: "takt-time",
  title: "Takt Time: O Ritmo Ditado pela Demanda",
  group: "Ambiente, Fluxo & Padronização",
  duration: "30 min",
  executiveSummary: "Takt time é a taxa na qual um processo deve produzir para atender à demanda do cliente: takt = tempo disponível / demanda do cliente. Se a demanda é de 480 requisições por dia de 8 horas, o takt é de 1 minuto por requisição. Tempo de ciclo mais lento que o takt = demanda não atendida e filas crescentes. Tempo de ciclo mais rápido que o takt = desperdício de superprodução, a menos que seja ritmado para baixo. Para os CSAs, o takt se aplica à cadência de deploy, resposta a alertas, ritmo de triagem de incidentes, throughput de requisições e taxa de invocação de agentes de IA. Use o takt para dimensionar capacidade, definir SLOs, projetar Trabalho Padrão e detectar superprodução.",
  whatYouGain: [
    "Dimensionar capacidade de forma inteligente combinando o tempo de ciclo ao takt — nem subprovisionando (filas crescem) nem superprovisionando (desperdício acumula)",
    "Definir SLOs e cadência de deploy que se alinham à demanda real, não a suposições ou pico-do-pico",
    "Detectar superprodução como desperdício — tempo de ciclo significativamente menor que o takt significa produzir mais rápido que a demanda, um custo oculto",
    "Balancear os passos do processo dentro de ~10% do takt para eliminar passos gargalo que restringem todo o fluxo"
  ],
  explanation: "<p><strong>Fórmula do takt time:</strong> takt = tempo de produção disponível / demanda do cliente.</p><p>Três medidas relacionadas frequentemente confundidas:</p><ul><li><strong>Takt time:</strong> O ritmo ditado pela demanda que o processo deve igualar.</li><li><strong>Tempo de ciclo:</strong> Tempo real por unidade produzida (médio).</li><li><strong>Lead time:</strong> Tempo ponta a ponta por unidade, incluindo filas.</li></ul><p><strong>Casos:</strong> Tempo de ciclo &gt; takt = subcapacidade; filas crescem; demanda não atendida. Tempo de ciclo = takt = balanceado; fluxo suave em ritmo sustentável. Tempo de ciclo &lt; takt = sobrecapacidade; superprodução a menos que seja ritmado para baixo (a disciplina do Heijunka).</p><p><strong>Balanceamento de linha:</strong> Os tempos de passos individuais devem cair dentro de aproximadamente ±10% do takt. Um processo de 4 passos onde um passo leva 2× o takt é o gargalo e limita todo o fluxo, independentemente dos outros passos. Para engenharia, calcule o takt contra uma definição defensável de janela ocupada (hora de pico para planejamento de capacidade, diária para regime permanente), não pico-do-pico; você vai superprovisionar permanentemente se dimensionar pelo pico absoluto.</p>",
  csamExample: "<p>O parque de builds de CI do cliente de um CSAM \"parece lento.\" O CSAM calcula o takt: 800 builds por dia de 8 horas = 36 segundos por build. Tempo de ciclo medido: 4 minutos. O diagnóstico é claro: a capacidade é insuficiente, então o enfileiramento é inevitável. O CSAM propõe adicionar 6 runners. O tempo de ciclo cai para 32 segundos; a demanda é atendida sem superprovisionamento. O diagnóstico (capacidade, não instabilidade) havia escapado à equipe por um trimestre porque eles nunca calcularam o takt. O caso de negócio para a compra do hardware torna-se óbvio: \"Estamos 7× acima do takt.\"</p>",
  csaExample: "<p>Um CSA está ajustando o HPA (Horizontal Pod Autoscaler) do AKS para um microsserviço de um cliente. A demanda de pico é de 12 requisições/segundo. A capacidade por pod é de 18 req/s. Takt = 1 pod atende à demanda com 50% de folga. Configurações de HPA: escalar para cima em 70% de utilização (12,6 req/s), escalar para baixo em 30%. O cliente anteriormente dimensionava para 5 pods \"só por segurança.\" O ajuste baseado em takt do CSA: 1 pod base + 1 buffer = 2 pods durante o pico. Redução de custo de 60%. Matemática padrão aplicada; desperdício invisível exposto.</p>",
  recap: [
    "Takt time = tempo disponível / demanda do cliente. É o ritmo ditado pela demanda que o processo deve igualar para evitar filas.",
    "Tempo de ciclo mais lento que o takt = subcapacidade e filas crescentes. Tempo de ciclo mais rápido que o takt = desperdício de superprodução.",
    "Dimensione a capacidade para igualar o takt, não o pico-do-pico. Use uma definição defensável de janela ocupada (hora de pico, não pico absoluto).",
    "Balanceie os passos do processo dentro de ~10% do takt. Um passo em 2× o takt torna-se o gargalo independentemente dos outros passos.",
    "Para engenharia: aplique o takt ao dimensionamento de runners de CI, configuração de HPA, contagem de consumidores de Service Bus, equipe de resposta a incidentes e capacidade de inferência de agentes de IA."
  ],
  questions: [
    {
      prompt: "Qual é a fórmula do takt time?",
      options: [
        "Tempo disponível &divide; demanda do cliente.",
        "Demanda do cliente &times; tempo de ciclo.",
        "Custo total &divide; throughput.",
        "Tempo de processo + tempo de fila."
      ],
      correctIndex: 0,
      explanation: "<strong>Takt = tempo disponível / demanda do cliente.</strong> Se a demanda é de 480 requisições por dia de 8 horas, o takt é de 1 minuto por requisição. É o ritmo ditado pela demanda que o processo deve igualar."
    },
    {
      prompt: "Um parque de builds de CI processa 800 builds por dia de 8 horas com um ciclo medido de 4 minutos por build. O que a matemática mostra?",
      options: [
        "O parque está dimensionado corretamente porque os builds estão completando.",
        "O takt é de 36 segundos; o ciclo é de 4 minutos &mdash; o parque não consegue de forma alguma atender à demanda e o enfileiramento é inevitável.",
        "A equipe deve otimizar a velocidade individual de build, não a capacidade.",
        "O ciclo ser maior que o takt está ok porque os builds são assíncronos."
      ],
      correctIndex: 1,
      explanation: "Takt = 8h / 800 = 36s; ciclo = 240s. <strong>Ciclo &gt; takt</strong> significa subcapacidade e filas crescentes. Adicionar runners até o ciclo cair abaixo do takt é a correção &mdash; não otimizar builds individuais."
    },
    {
      prompt: "O tempo de ciclo é significativamente menor que o takt. O que isso indica?",
      options: [
        "A equipe está indo muito bem &mdash; este é o objetivo.",
        "Sobrecapacidade &mdash; o processo arrisca desperdício de superprodução a menos que seja ritmado para baixo.",
        "O cálculo do takt está errado.",
        "Os clientes estão prestes a reclamar de serviço lento."
      ],
      correctIndex: 1,
      explanation: "Ciclo &lt; takt = <strong>sobrecapacidade / superprodução</strong>. Produzir mais rápido que a demanda cria desperdício de inventário a menos que deliberadamente ritmado para baixo (a disciplina do Heijunka). Mais rápido nem sempre é melhor."
    },
    {
      prompt: "Quão rigorosamente os passos individuais devem ser balanceados em relação ao takt?",
      options: [
        "Cada passo pode levar qualquer duração; apenas o ciclo total importa.",
        "Dentro de aproximadamente &plusmn;10% do takt &mdash; um passo em 2&times; o takt torna-se o gargalo independentemente dos outros.",
        "Cada passo deve levar exatamente 1 segundo.",
        "Os passos devem ser 5&times; o takt para permitir margem de segurança."
      ],
      correctIndex: 1,
      explanation: "O balanceamento de linha visa tempos de passos dentro de <strong>~10% do takt</strong>. Um processo de 4 passos onde um passo leva 2&times; o takt é o gargalo e limita todo o fluxo."
    },
    {
      prompt: "Qual é o antipadrão a evitar ao calcular o takt para planejamento de capacidade?",
      options: [
        "Usar telemetria real para medir a demanda.",
        "Calcular o takt contra a demanda de pico-do-pico, o que superprovisiona permanentemente.",
        "Remedir o takt quando a demanda muda.",
        "Comparar o takt ao tempo de ciclo atual."
      ],
      correctIndex: 1,
      explanation: "Dimensionar pelo pico absoluto desperdiça dinheiro; dimensionar pela média perde o pico. Use uma <strong>definição defensável de janela ocupada</strong> (hora de pico para planejamento de capacidade, diária para regime permanente) em vez de pico-do-pico."
    }
  ]
}, "heijunka": {
  id: "heijunka",
  title: "Heijunka: Nivelando a Demanda Irregular",
  group: "Ambiente, Fluxo & Padronização",
  duration: "30 min",
  executiveSummary: "Takt time é o ritmo ditado pela demanda que um processo deve igualar (takt = tempo disponível / demanda do cliente). Quando a demanda é irregular — picos e vales — o takt exigido oscila com ela, e essa irregularidade é o mura, um dos três inimigos do Lean junto com o muri (sobrecarga) e o muda (desperdício). Heijunka é a disciplina de nivelamento: suavizar o trabalho para que o processo rode em um ritmo estável e sustentável em vez de ser sacudido por picos e vales. Para a MC, o nivelamento importa porque você não consegue padronizar, melhorar ou dimensionar capacidade de forma confiável sobre um fluxo extremamente irregular. Este módulo recapitula o takt, explica por que o takt irregular mina a MC e cobre as técnicas — nivelamento heijunka, nivelamento de carga baseado em fila, buffering, capacidade elástica, limites de pull/WIP, redução de tamanho de lote e modelagem de demanda — usadas para mitigá-lo.",
  whatYouGain: [
    "Conectar o takt time ao mura: ver como a demanda irregular faz o ritmo exigido oscilar e desestabiliza todo o processo",
    "Explicar por que o takt irregular bloqueia a MC — trabalho padrão, dimensionamento de capacidade e melhoria todos precisam de uma linha de base estável",
    "Aplicar técnicas de nivelamento: heijunka por volume e por mix, nivelamento de carga baseado em fila, buffers e capacidade elástica",
    "Usar sistemas de pull, limites de WIP e redução de tamanho de lote (SMED) para suavizar o fluxo interno, não apenas a demanda externa",
    "Modelar a demanda na fonte — agendamento, escalonamento, rate limiting — para que os picos sejam espalhados antes de atingir o processo"
  ],
  explanation: "<p><strong>Recapitulação rápida do takt.</strong> Takt time é a taxa na qual um processo deve produzir para atender à demanda: takt = tempo disponível / demanda do cliente. Se a demanda é estável, o takt é estável e você pode dimensionar capacidade e projetar trabalho padrão em torno dele. O problema é que a demanda real raramente é estável&mdash;ela chega em rajadas. Quando a demanda oscila, o takt <em>exigido</em> oscila com ela, e o processo fica alternadamente sobrecarregado e ocioso.</p><p><strong>Takt irregular é mura.</strong> O Lean nomeia três inimigos: <strong>muda</strong> (desperdício), <strong>muri</strong> (sobrecarga) e <strong>mura</strong> (irregularidade). Eles estão ligados: o mura é frequentemente a causa-raiz. Um padrão de chegada irregular força <strong>muri</strong> durante os picos (pessoas e sistemas sobrecarregados além dos limites sustentáveis, causando erros, incidentes e esgotamento) e <strong>muda</strong> durante os vales (capacidade ociosa pela qual você ainda está pagando). Dimensionar para o pico desperdiça dinheiro; dimensionar para a média deixa trabalho cair no chão. Você não vence esse trade-off só dimensionando&mdash;você tem que atacar a própria irregularidade.</p><p><strong>Por que importa para a MC.</strong> O nivelamento é trabalho de fundação na Casa do Lean. O <strong>trabalho padrão</strong> assume um ritmo repetível; se cada hora parece diferente, não há método estável para padronizar ou melhorar. Gráficos de capabilidade e controle assumem um processo estável; um fluxo irregular está cheio de oscilações de causa-especial que afogam o sinal. E os ganhos de melhoria não se sustentam em um processo que solavanca&mdash;o próximo pico os apaga. Suavizar o fluxo também torna os problemas visíveis: quando o trabalho se move em uma cadência estável, uma anormalidade se destaca em vez de se esconder dentro do caos de um pico. Nivele primeiro, depois padronize, depois melhore.</p><p><strong>Técnicas para mitigar o takt irregular.</strong></p><ul><li><strong>Heijunka (nivelamento de produção):</strong> nivele deliberadamente o cronograma por <em>volume</em> (libere trabalho em incrementos pequenos e regulares em vez de grandes lotes) e por <em>mix</em> (intercale tipos de produto ou requisição em vez de rodar um tipo até a exaustão). A ferramenta clássica é a <em>caixa heijunka</em>, que ritma o trabalho liberado em fatias de tempo fixas.</li><li><strong>Nivelamento de carga baseado em fila:</strong> coloque um buffer (uma fila) entre o produtor irregular e o consumidor para que o consumidor puxe em um takt estável enquanto a fila absorve as rajadas. No Azure este é o padrão Queue-Based Load Leveling&mdash;Service Bus ou Storage Queues alimentando consumidores, frequentemente com workers escalados por KEDA.</li><li><strong>Buffers estratégicos:</strong> pequenos buffers intencionais de capacidade, tempo ou inventário colocados onde protegem o fluxo&mdash;não inventário inchado em todo lugar, mas uma almofada dimensionada contra a variação normal.</li><li><strong>Capacidade elástica / flexível:</strong> siga a demanda com autoscaling (HPA, KEDA, serverless) e equipe multitreinada e flexível que pode se deslocar para onde está a carga.</li><li><strong>Sistemas de pull e limites de WIP:</strong> o Kanban limita o trabalho em progresso para que o sistema não possa ser inundado mais rápido do que consegue fluir, o que suaviza o takt interno.</li><li><strong>Redução de tamanho de lote (SMED):</strong> reduzir o custo de changeover permite rodar lotes menores e mais frequentes&mdash;o pré-requisito que torna o nivelamento de volume prático.</li><li><strong>Modelagem de demanda:</strong> espalhe os picos na fonte&mdash;escalone ou aplique jitter aos jobs agendados em vez de dispará-los todos na virada da hora, use sistemas de agendamento e aplique rate limiting ou throttling para que uma rajada seja medida em um fluxo estável.</li></ul><p>O objetivo de todas elas é o mesmo: converter um sinal de demanda irregular em um nivelado contra o qual o processo possa rodar em um ritmo sustentável e melhorável.</p>",
  csamExample: "<p>O cliente de um CSAM roda centenas de jobs em lote que todos disparam na virada de cada hora. O resultado é mura de manual: um pico punitivo que sobrecarrega a plataforma (muri&mdash;throttling, jobs falhos, engenheiros acionados) seguido por 50 minutos de capacidade quase ociosa e superprovisionada (muda). O instinto da equipe é comprar mais compute para sobreviver ao pico. O CSAM reformula como um problema de nivelamento, não de capacidade: escalonar o cronograma de jobs ao longo da hora, rotear o trabalho por uma fila para que os workers puxem em um takt estável e deixar o KEDA escalar consumidores para a carga suavizada. A demanda de pico cai, os incidentes durante o pico cessam e o cliente corta a capacidade provisionada. O CSAM amarra à MC: 'Uma vez que o fluxo está nivelado, seu trabalho de confiabilidade finalmente tem um processo estável para se apoiar.'</p>",
  csaExample: "<p>Um CSA está endurecendo o pipeline de ingestão de eventos de um cliente que desaba sob tráfego em rajadas. Hoje os produtores escrevem diretamente no serviço de processamento, então cada rajada vira uma sobrecarga. O CSA implementa nivelamento de carga baseado em fila: os produtores publicam em uma fila do Service Bus, e consumidores escalados por KEDA a drenam em uma taxa estável, transformando um padrão de chegada irregular em um takt nivelado que os consumidores conseguem sustentar. O CSA adiciona limites de WIP para que o sistema não possa ser inundado, aplica jitter aos triggers de cron upstream para que não disparem mais simultaneamente e define limites de autoscale dimensionados para a carga suavizada em vez do pico bruto. O fluxo estabiliza, o gráfico de controle da latência de processamento se estreita e o trabalho padrão para o pipeline finalmente se torna significativo.</p>",
  recap: [
    "O takt oscila quando a demanda é irregular; essa irregularidade é o mura, que impulsiona o muri (sobrecarga nos picos) e o muda (desperdício nos vales)",
    "Você não consegue corrigir o takt irregular só dimensionando — dimensionar para o pico desperdiça dinheiro, dimensionar para a média deixa trabalho cair; você deve atacar a irregularidade",
    "O nivelamento é trabalho de fundação da MC: trabalho padrão, gráficos de controle e melhoria durável todos precisam de um fluxo estável e nivelado",
    "O heijunka nivela por volume (incrementos pequenos e regulares) e por mix (intercalar tipos); a caixa heijunka ritma o trabalho liberado",
    "Kit de mitigação: nivelamento de carga baseado em fila, buffers estratégicos, capacidade elástica (HPA/KEDA), limites de pull/WIP, redução de tamanho de lote (SMED) e modelagem de demanda",
    "Nivele primeiro, depois padronize, depois melhore — suavizar o fluxo também torna anormalidades visíveis em vez de escondê-las no pico"
  ],
  questions: [
    {
      prompt: "Demanda irregular e em rajadas que faz o takt exigido oscilar para cima e para baixo é um exemplo de qual problema Lean?",
      options: [
        "Muda (desperdício).",
        "Mura (irregularidade).",
        "Muri (sobrecarga).",
        "Kaizen (melhoria)."
      ],
      correctIndex: 1,
      explanation: "Fluxo irregular é <strong>mura</strong>. É frequentemente a causa-raiz que então produz <strong>muri</strong> (sobrecarga durante picos) e <strong>muda</strong> (desperdício ocioso durante vales). O heijunka ataca o mura diretamente."
    },
    {
      prompt: "Qual é a ideia central do heijunka (nivelamento de produção)?",
      options: [
        "Sempre rodar o maior lote possível de um tipo antes de trocar.",
        "Suavizar o trabalho nivelando volume (incrementos pequenos e regulares) e mix (intercalar tipos) para que o processo rode em ritmo estável.",
        "Dimensionar capacidade para o pico absoluto para que picos nunca sobrecarreguem o sistema.",
        "Eliminar todos os buffers para que os problemas apareçam imediatamente."
      ],
      correctIndex: 1,
      explanation: "O heijunka nivela por <strong>volume</strong> (libere trabalho em incrementos pequenos e regulares) e por <strong>mix</strong> (intercale tipos em vez de rodar um até a exaustão), convertendo um sinal de demanda recortado em um ritmo estável e sustentável."
    },
    {
      prompt: "Produtores enviam tráfego em rajadas que sobrecarrega um serviço de processamento. Qual técnica transforma essa chegada irregular em um takt estável?",
      options: [
        "Remover todas as filas para que as mensagens sejam processadas no instante em que chegam.",
        "Nivelamento de carga baseado em fila&mdash;armazenar rajadas em uma fila para que os consumidores puxem em uma taxa estável.",
        "Dimensionar os consumidores para a rajada de pico e deixá-los rodando.",
        "Disparar todos os jobs upstream no mesmo momento para agrupar o trabalho."
      ],
      correctIndex: 1,
      explanation: "O <strong>nivelamento de carga baseado em fila</strong> coloca um buffer (ex.: Service Bus) entre produtores irregulares e consumidores, para que os consumidores a drenem em um takt estável enquanto a fila absorve as rajadas&mdash;frequentemente com workers escalados por KEDA."
    },
    {
      prompt: "Por que o takt irregular mina a melhoria contínua?",
      options: [
        "Ele torna o processo rápido demais para medir.",
        "Trabalho padrão, gráficos de controle e melhorias duráveis todos precisam de uma linha de base estável; um fluxo que solavanca não tem ritmo estável para padronizar ou manter ganhos.",
        "Ele sempre reduz a demanda do cliente ao longo do tempo.",
        "Importa apenas para manufatura, nunca para software."
      ],
      correctIndex: 1,
      explanation: "O nivelamento é <strong>trabalho de fundação</strong>. Se cada hora parece diferente não há método repetível para padronizar, oscilações de causa-especial afogam o sinal do gráfico de controle e o próximo pico apaga seus ganhos. Nivele primeiro, depois padronize, depois melhore."
    },
    {
      prompt: "Qual destas é uma técnica de modelagem de demanda para suavizar picos na fonte?",
      options: [
        "Disparar todos os jobs agendados simultaneamente na virada da hora.",
        "Escalonar ou aplicar jitter aos jobs agendados e aplicar rate limiting para que uma rajada seja medida em um fluxo estável.",
        "Remover o autoscaling para que a capacidade permaneça fixa.",
        "Aumentar os tamanhos de lote para processar mais de uma vez."
      ],
      correctIndex: 1,
      explanation: "A <strong>modelagem de demanda</strong> espalha os picos antes que atinjam o processo&mdash;escalone/aplique jitter aos cronogramas em vez de disparar na hora, use sistemas de agendamento e aplique rate limiting ou throttling para medir uma rajada em um fluxo nivelado."
    }
  ]
}, "one-piece-flow": {
  id: "one-piece-flow",
  title: "Fluxo de Peça Única vs Processamento em Lote",
  group: "Ambiente, Fluxo & Padronização",
  duration: "30 min",
  executiveSummary: "O processamento em lote agrupa muitas unidades e as move por um processo como um bloco: faça o passo um no lote inteiro, depois o passo dois no lote inteiro, e assim por diante. O fluxo de peça única (também chamado de peça única ou fluxo contínuo) move uma única unidade pelos passos de cada vez — idealmente um tamanho de lote de um. O lote parece eficiente porque espalha os custos fixos de setup e changeover por muitas unidades, mas esconde grandes custos: lead times longos, montanhas de trabalho em progresso e defeitos que não são descobertos até um lote inteiro chegar a um passo posterior. O fluxo de peça única troca alguma eficiência de setup por loops de feedback muito mais curtos, menos WIP e problemas que aparecem imediatamente. Para a melhoria contínua isso importa porque o fluxo é o que torna os problemas visíveis e o feedback rápido — duas pré-condições para melhorar de todo. Este módulo contrasta os dois, explica quando cada um é apropriado e mostra como mover um processo em direção ao fluxo sem ignorar os custos de setup que justificaram o lote em primeiro lugar.",
  whatYouGain: [
    "Definir processamento em lote e fluxo de peça única, e explicar o ideal do tamanho de lote de um",
    "Ver os custos ocultos do lote: lead time longo, alto WIP e defeitos descobertos tarde, depois que um lote inteiro é afetado",
    "Explicar por que o fluxo acelera a MC — loops de feedback mais curtos fazem os problemas aparecerem imediatamente em vez de enterrá-los em um lote",
    "Saber quando o lote ainda é a escolha certa, e como o custo de changeover/transação (SMED) impulsiona o tamanho econômico de lote",
    "Aplicar passos práticos para mover em direção ao fluxo: encolher o tamanho de lote, reduzir o tempo de setup, balancear passos e limitar o WIP"
  ],
  explanation: "<p><strong>Duas formas de mover o trabalho.</strong> O <em>processamento em lote</em> agrupa unidades e as move por um processo como um bloco&mdash;toda unidade recebe o passo um, depois toda unidade recebe o passo dois, e assim por diante. O <em>fluxo de peça única</em> (peça única ou fluxo contínuo) move uma unidade pelos passos de cada vez, idealmente com um tamanho de lote de um. A diferença soa pequena mas muda a economia de todo o processo.</p><p><strong>Por que o lote parece eficiente.</strong> Os lotes amortizam custos fixos. Se um passo tem um setup custoso&mdash;um changeover de máquina, uma criação de ambiente, uma troca de contexto, uma cerimônia de aprovação&mdash;fazê-lo uma vez para cinquenta unidades em vez de cinquenta vezes parece uma vitória clara. Essa economia é real, e é por isso que os tamanhos de lote crescem: cada changeover ou transferência tem um custo de transação, e grandes lotes espalham esse custo fino.</p><p><strong>O custo oculto do lote.</strong> Grandes lotes carregam três penalidades que não aparecem em um número de eficiência por passo. O <strong>lead time</strong> incha: uma unidade terminada cedo no passo um ainda espera o resto do lote antes de poder se mover, então nada completa até o lote inteiro estar pronto. O <strong>trabalho em progresso</strong> se acumula entre os passos&mdash;inventário que prende dinheiro, espaço e atenção. E os <strong>defeitos se escondem</strong>: se o passo um introduz um erro, você só descobre quando o lote chega a um passo de inspeção posterior, momento em que o lote inteiro está afetado. Quanto maior o lote, mais tarde e mais cara a descoberta.</p><p><strong>Por que o fluxo de peça única ajuda a melhoria contínua.</strong> O fluxo encurta o loop entre causa e feedback. Quando as unidades se movem uma de cada vez, um defeito no passo um é pego no passo dois&mdash;uma unidade ruim, não cinquenta. Os problemas tornam-se visíveis imediatamente em vez de enterrados dentro de um lote, o que é a pré-condição para corrigi-los. O WIP cai, então o lead time cai com ele (Lei de Little: lead time = WIP / throughput). Lead time mais curto significa que você aprende mais rápido, e aprender mais rápido é o que a melhoria contínua é. O fluxo não apenas entrega mais cedo; ele expõe os problemas dos quais o trabalho de melhoria se alimenta.</p><p><strong>O lote nem sempre está errado.</strong> O fluxo de peça única é o ideal, não uma lei. Quando o custo de changeover ou transação é genuinamente alto e não pode ser reduzido, um lote maior pode ser a escolha econômica certa&mdash;o clássico trade-off entre custo de manutenção (que favorece lotes pequenos) e custo de setup (que favorece os grandes). O movimento Lean, porém, é atacar o custo de setup em vez de aceitar grandes lotes: o <strong>SMED</strong> (single-minute exchange of die) reduz o tempo de changeover para que lotes menores se tornem acessíveis. Baixe o custo de troca e o tamanho econômico de lote encolhe em direção a um.</p><p><strong>Como mover em direção ao fluxo.</strong></p><ul><li><strong>Encolha o lote:</strong> corte o tamanho de lote em passos deliberados e observe o lead time e a qualidade responderem&mdash;não espere por um redesenho perfeito de tamanho de lote de um.</li><li><strong>Reduza o changeover (SMED):</strong> torne os setups mais rápidos e baratos para que lotes pequenos parem de ser caros.</li><li><strong>Balanceie os passos:</strong> o fluxo trava no passo mais lento; nivele os tempos de ciclo para que as unidades não se acumulem na frente de um gargalo.</li><li><strong>Limite o WIP:</strong> limite o trabalho entre passos (kanban) para que o processo puxe uma unidade de cada vez em vez de empurrar lotes.</li><li><strong>Conecte os passos:</strong> encurte a distância e o atraso entre operações para que uma unidade terminada se mova imediatamente para o próximo passo.</li></ul>",
  csamExample: "<p>O cliente de um CSAM migra cargas de trabalho em grandes lotes trimestrais: cinquenta aplicações são avaliadas, depois todas as cinquenta são remediadas, depois todas as cinquenta têm cutover em um fim de semana. A abordagem de lote parece eficiente&mdash;a ferramenta é configurada uma vez&mdash;mas esconde risco. Nada está de fato 'pronto' por meses, problemas encontrados durante o cutover se aplicam ao lote inteiro de uma vez, e uma falha de design descoberta tarde significa retocar todas as cinquenta. O CSAM reformula como um problema de fluxo: mover aplicações uma (ou algumas) de cada vez por avaliar &rarr; remediar &rarr; cutover, completando cada uma antes de iniciar a próxima onda. Agora a primeira app está no ar em semanas em vez de um trimestre, as lições da app um melhoram as apps dois a cinquenta, e um padrão ruim é pego em uma única carga de trabalho em vez de cinquenta. O CSAM amarra de volta à MC: 'Lotes pequenos nos dão um loop de feedback&mdash;cada migração ensina a próxima, e o cliente vê valor continuamente em vez de tudo no final.'</p>",
  csaExample: "<p>Um CSA está ajudando uma equipe que entrega mudanças em releases grandes e infrequentes&mdash;dezenas de mudanças mescladas agrupadas em uma implantação big-bang a cada poucas semanas. É processamento em lote: o setup (o release) é caro, então o fazem raramente e enchem cada um. O custo está oculto no lead time e no risco&mdash;uma mudança escrita no dia um espera semanas para ser entregue, e quando o release quebra, dezenas de mudanças são suspeitas de uma vez, tornando a causa-raiz lenta. O CSA move a equipe em direção ao fluxo de peça única com CI/CD: cada mudança flui por build, test e deploy por conta própria, atrás de feature flags, para que uma única mudança chegue à produção em horas. Defeitos são isolados a uma mudança em vez de um lote, o tempo-de-detecção cai e o rollback é simples. Para tornar os lotes pequenos acessíveis, o CSA investe em trabalho ao estilo SMED&mdash;automatizando o pipeline de implantação para que o 'custo de changeover' de um release caia em direção a zero. O gráfico de controle do lead time de implantação se estreita, e a equipe melhora em um loop estável e rápido.</p>",
  recap: [
    "O processamento em lote move unidades como um bloco por cada passo; o fluxo de peça única move uma única unidade de cada vez—o ideal do tamanho de lote de um",
    "O lote amortiza o custo de setup/changeover, e é por isso que os lotes crescem—mas esconde lead time longo, alto WIP e descoberta tardia de defeitos",
    "Em um lote, um defeito em um passo inicial não é encontrado até um passo posterior, então o lote inteiro é afetado antes de alguém saber",
    "O fluxo de peça única encurta o loop de feedback: defeitos aparecem em uma unidade, WIP e lead time caem (Lei de Little), e os problemas tornam-se visíveis",
    "O fluxo é uma pré-condição da MC—feedback rápido e problemas visíveis são do que o trabalho de melhoria depende",
    "O lote nem sempre está errado; quando o custo de setup é alto, ataque-o com SMED para encolher o tamanho econômico de lote, depois limite o WIP e balanceie os passos para mover em direção ao fluxo"
  ],
  questions: [
    {
      prompt: "Qual é a diferença definidora entre processamento em lote e fluxo de peça única?",
      options: [
        "O fluxo de peça única usa lotes maiores para ser mais eficiente.",
        "O processamento em lote move um grupo de unidades por cada passo como um bloco, enquanto o fluxo de peça única move uma única unidade pelos passos de cada vez.",
        "O processamento em lote não tem custo de setup, enquanto o fluxo de peça única tem.",
        "O fluxo de peça única se aplica apenas à manufatura, não ao trabalho de conhecimento."
      ],
      correctIndex: 1,
      explanation: "O <strong>processamento em lote</strong> completa um passo para um grupo inteiro antes de o grupo seguir; o <strong>fluxo de peça única</strong> move uma única unidade pelos passos&mdash;idealmente um tamanho de lote de um&mdash;para que as unidades não esperem pelo resto de um lote."
    },
    {
      prompt: "Um passo introduz um defeito no início de um lote de 50 unidades, mas a inspeção acontece apenas no passo final. Qual é a consequência do lote grande?",
      options: [
        "O defeito é pego imediatamente na primeira unidade.",
        "Todas as 50 unidades são afetadas antes de o defeito ser descoberto, tornando a detecção tardia e o retrabalho caro.",
        "O defeito desaparece porque o lote tira a média dos erros.",
        "O tamanho de lote não tem efeito sobre quando os defeitos são encontrados."
      ],
      correctIndex: 1,
      explanation: "Em um lote, um defeito introduzido cedo não é descoberto até o lote chegar a um passo de inspeção posterior&mdash;a essa altura o <strong>lote inteiro está afetado</strong>. Lotes menores (em direção ao fluxo de peça única) pegam o problema em uma unidade, não cinquenta."
    },
    {
      prompt: "Por que o fluxo de peça única acelera a melhoria contínua?",
      options: [
        "Ele elimina a necessidade de medir o processo.",
        "Ele encurta o loop de feedback—defeitos aparecem imediatamente em uma única unidade e os problemas tornam-se visíveis em vez de enterrados em um lote.",
        "Ele garante que defeitos nunca ocorram.",
        "Ele aumenta o trabalho em progresso para haver mais a melhorar."
      ],
      correctIndex: 1,
      explanation: "O fluxo estreita o loop entre causa e feedback: um problema aparece em uma unidade no próximo passo, WIP e lead time caem (Lei de Little), e anormalidades tornam-se visíveis&mdash;as pré-condições das quais o trabalho de melhoria depende."
    },
    {
      prompt: "O custo de setup/changeover de um passo é genuinamente alto. Qual é a resposta Lean, em vez de simplesmente aceitar lotes grandes?",
      options: [
        "Aumentar o tamanho de lote indefinidamente para amortizar o setup.",
        "Reduzir o próprio custo de changeover (ex.: SMED) para que lotes menores se tornem econômicos.",
        "Parar de medir o lead time.",
        "Eliminar todos os passos de inspeção."
      ],
      correctIndex: 1,
      explanation: "O trade-off entre custo de setup (favorece lotes grandes) e custo de manutenção (favorece pequenos) define o tamanho econômico de lote. O movimento Lean é <strong>atacar o custo de setup com SMED</strong> para que o tamanho econômico de lote encolha em direção a um."
    },
    {
      prompt: "De acordo com a Lei de Little, o que acontece com o lead time à medida que o fluxo de peça única reduz o trabalho em progresso a um throughput estável?",
      options: [
        "O lead time aumenta proporcionalmente.",
        "O lead time diminui proporcionalmente—menos WIP no mesmo throughput significa lead time mais curto.",
        "O lead time não é afetado pelo WIP.",
        "O throughput deve dobrar para o lead time mudar."
      ],
      correctIndex: 1,
      explanation: "Lei de Little: lead time = WIP / throughput. Mantendo o throughput estável, <strong>cortar o WIP corta o lead time proporcionalmente</strong>&mdash;que é exatamente o que mover de lotes grandes para fluxo de peça única faz."
    }
  ]
}, "supermarket": {
  id: "supermarket",
  title: "Supermercados: Inventário Controlado para Pull",
  group: "Ambiente, Fluxo & Padronização",
  duration: "30 min",
  executiveSummary: "Um supermercado no Lean é um estoque de inventário deliberadamente dimensionado e controlado, colocado entre dois processos para rodar um sistema de pull quando o fluxo contínuo de peça única não é possível. A ideia vem de como um supermercado de varejo funciona: o cliente pega o que precisa da prateleira, e essa retirada é o sinal para repor exatamente o que foi retirado—nada mais. O processo downstream retira do supermercado; a lacuna que ele deixa (um sinal kanban) diz ao processo upstream para repor apenas aquela quantidade. Isso desacopla dois processos que rodam em taxas diferentes ou não podem ser fisicamente ligados, ao mesmo tempo em que limita o inventário e impede o upstream de superproduzir em um lote grande e descontrolado. O fluxo de peça única é sempre o ideal; um supermercado é o segundo-melhor controle para os lugares onde você ainda não consegue fluir. A habilidade está em saber onde um supermercado vale a pena e onde ele apenas esconde desperdício que você deveria eliminar.",
  whatYouGain: [
    "Explicar o que é um supermercado Lean e como a reposição disparada por retirada (pull kanban) funciona",
    "Conectar supermercados ao fluxo de peça única e à evitação de lotes—um estoque limitado que desacopla processos sem licenciar superprodução",
    "Decidir entre fluxo contínuo, uma fila FIFO e um supermercado para uma dada transferência",
    "Identificar onde supermercados são uma melhor prática: cadências diferentes, lotes inevitáveis, demanda downstream variada",
    "Reconhecer onde evitá-los: quando o fluxo verdadeiro é alcançável, para itens pontuais ou que mudam rápido, ou quando mascaram um problema que você deveria corrigir"
  ],
  explanation: "<p><strong>O que é um supermercado.</strong> Um supermercado é um estoque de inventário controlado e deliberadamente dimensionado situado entre um processo upstream (fornecedor) e um processo downstream (consumidor). Taiichi Ohno emprestou a ideia das mercearias americanas: os compradores pegam o que precisam da prateleira, e os funcionários repõem apenas o que foi removido. Em um supermercado Lean o processo <em>downstream</em> é o cliente&mdash;ele retira o que precisa, e o espaço vazio que deixa torna-se um sinal <strong>kanban</strong> dizendo ao processo <em>upstream</em> para fazer exatamente o suficiente para repô-lo. A produção é puxada pelo consumo real, não empurrada por uma previsão.</p><p><strong>Por que existe: pull sem fluxo contínuo.</strong> O ideal Lean é o fluxo de peça única&mdash;unidades se movendo uma de cada vez sem inventário entre os passos. Mas às vezes você não consegue conectar dois passos em fluxo contínuo: eles rodam em tempos de ciclo muito diferentes, ficam distantes, compartilham um recurso ou o passo upstream deve rodar em lotes (um changeover longo, uma máquina compartilhada, um build lento). Um supermercado é a segunda-melhor opção. Ele deixa os dois processos rodarem desacoplados em seu próprio ritmo natural enquanto um buffer limitado absorve a diferença&mdash;e crucialmente, o limite e o sinal de reposição impedem o upstream de superproduzir.</p><p><strong>Como ele evita lotes e superprodução.</strong> Uma pilha descontrolada de WIP convida o pior desperdício Lean&mdash;superprodução&mdash;porque o upstream simplesmente continua empurrando. Um supermercado é diferente: ele tem um teto. Quando a prateleira está cheia, os sinais kanban param, então o upstream para. O upstream repõe em pequenas quantidades casadas com o que foi de fato retirado, o que mantém os lotes pequenos e limitados em vez de grandes e especulativos. O supermercado converte 'faça o máximo que puder' em 'reponha apenas o que o cliente levou.'</p><p><strong>Supermercado vs fila FIFO vs fluxo.</strong> Três opções para uma transferência, em ordem de preferência: <strong>(1) Fluxo contínuo</strong>&mdash;conecte os passos para que uma unidade passe direto; use isso sempre que puder. <strong>(2) Fila FIFO</strong>&mdash;uma linha sequenciada e limitada onde os itens fluem primeiro-a-entrar-primeiro-a-sair; use-a quando você não consegue conectar totalmente os passos mas o downstream consome na mesma ordem em que o upstream produz. <strong>(3) Supermercado</strong>&mdash;um estoque do qual o downstream escolhe; use-o quando o downstream retira de forma imprevisível ou seleciona entre vários tipos de item, de modo que uma sequência estrita não funcione. Recorra à opção mais simples que se encaixa; um supermercado é um compromisso deliberado, não o objetivo.</p><p><strong>Onde supermercados são uma melhor prática.</strong></p><ul><li>Entre processos com <strong>cadências diferentes</strong> ou tempos de ciclo que não podem ser balanceados em fluxo direto.</li><li>Após um passo upstream que <strong>deve fazer lote</strong>&mdash;um changeover longo, um recurso compartilhado ou monopólio, um build ou passo de bake lento.</li><li>Quando o downstream <strong>retira um mix variado</strong> de itens padrão e repetíveis e precisa deles disponíveis sob demanda.</li><li>Para <strong>desacoplar um upstream não confiável ou distante</strong> ao mesmo tempo em que limita o inventário e mantém um sinal de pull claro.</li></ul><p><strong>Onde evitá-los.</strong></p><ul><li>Quando o <strong>fluxo contínuo é alcançável</strong>&mdash;um supermercado adiciona inventário, custo e espaço, e esconde problemas atrás de um buffer. Não institucionalize um estoque que você poderia eliminar.</li><li>Para <strong>itens pontuais, customizados ou raramente demandados</strong>&mdash;você não consegue repor um estoque de coisas que nunca são reencomendadas; use make-to-order ou uma fila FIFO.</li><li>Para <strong>itens perecíveis ou que mudam rápido</strong> (ou caros de manter), onde o estoque parado fica obsoleto ou custoso antes de ser puxado.</li><li>Quando o supermercado se torna uma <strong>muleta</strong> que mascara a não confiabilidade do upstream, changeovers longos ou problemas de qualidade que você deveria estar corrigindo&mdash;o buffer deve encolher ao longo do tempo, não crescer.</li></ul><p><strong>A mentalidade de MC.</strong> Um supermercado é inventário controlado com um teto: melhor que um lote descontrolado, pior que o fluxo verdadeiro. Use-o onde o fluxo ainda não é possível, dimensione-o tão pequeno quanto o processo permitir e trate seu tamanho como uma métrica a reduzir. Cada redução no supermercado expõe a próxima restrição a corrigir&mdash;movendo o sistema um passo mais perto do fluxo de peça única.</p>",
  csamExample: "<p>O cliente de um CSAM precisa de ambientes de projeto sob demanda, mas provisionar um novo leva horas, então as equipes ou esperam (atraso) ou alguém cria um grande lote de ambientes antecipadamente que em sua maioria ficam ociosos (superprodução e custo). O CSAM introduz um supermercado: um pequeno pool limitado de ambientes padrão pré-provisionados. Quando uma equipe retira um, essa retirada dispara automação para provisionar uma única reposição&mdash;pull, não um lote especulativo. O pool desacopla o provisionamento lento da demanda rápida e em rajadas enquanto um limite rígido mantém o custo ocioso limitado. O CSAM é explícito sobre os limites: para um ambiente sob medida, pontual e com requisitos especiais não há nada a repor, então isso permanece make-to-order; e à medida que a automação de provisionamento fica mais rápida, o pool deve encolher em direção a zero. 'O pool pré-provisionado é uma ponte,' o CSAM explica, 'limitado hoje porque o provisionamento é lento&mdash;nosso trabalho é torná-lo rápido o suficiente para que precisemos de menos na prateleira.'</p>",
  csaExample: "<p>Um CSA está projetando uma plataforma de implantação onde construir uma imagem golden endurecida é lento, mas as implantações precisam de imagens imediatamente. Construir sob demanda trava as implantações; pré-construir cada imagem possível em massa desperdiça armazenamento e entrega artefatos obsoletos. O CSA configura um supermercado de imagens base pré-assadas para o punhado de configurações padrão e frequentemente usadas: quando uma implantação consome uma, um pipeline reconstrói apenas aquela imagem para repor a prateleira&mdash;um pull disparado por retirada que mantém os lotes pequenos e o estoque limitado. O mesmo padrão sustenta um pool quente de nós de contêiner pré-puxados que desacopla cold starts lentos da demanda rápida de scale-up. O CSA sinaliza onde não usá-lo: imagens raramente usadas ou que mudam rapidamente não devem ser estocadas&mdash;elas ficam obsoletas&mdash;então essas são construídas sob encomenda; e onde o autoscaling consegue genuinamente acompanhar a partir do zero, um pool quente permanente é apenas custo. O alvo de controle é o tamanho do pool: encolha-o à medida que os tempos de build e startup melhoram, movendo a plataforma em direção ao fluxo.</p>",
  recap: [
    "Um supermercado é um estoque deliberadamente dimensionado e limitado entre dois processos; o downstream retira e a lacuna sinaliza ao upstream para repor exatamente o que foi levado (pull kanban)",
    "Ele existe para rodar um sistema de pull onde o fluxo contínuo de peça única não é possível—desacoplando processos com cadências diferentes, distância ou lotes inevitáveis",
    "O limite e o sinal de reposição impedem a superprodução: o upstream repõe apenas o que foi consumido, mantendo os lotes pequenos e limitados",
    "Prefira a opção mais simples que se encaixa: fluxo contínuo primeiro, depois uma fila FIFO, depois um supermercado—o supermercado é um compromisso, não o objetivo",
    "Melhor prática entre passos de cadência diferente, após um passo que deve fazer lote, e quando o downstream puxa um mix variado de itens padrão sob demanda",
    "Evite quando o fluxo verdadeiro é alcançável, para itens pontuais ou que mudam rápido, ou quando ele mascara problemas do upstream—dimensione-o pequeno e reduza-o ao longo do tempo"
  ],
  questions: [
    {
      prompt: "O que é um supermercado Lean?",
      options: [
        "Uma pilha descontrolada de trabalho em progresso entre dois passos.",
        "Um estoque de inventário deliberadamente dimensionado e limitado do qual um processo downstream retira, sinalizando ao upstream para repor exatamente o que foi levado.",
        "Uma previsão que diz ao processo upstream quanto empurrar para o downstream.",
        "Uma área de armazenamento onde produtos acabados são mantidos até um lote trimestral ser entregue."
      ],
      correctIndex: 1,
      explanation: "Um supermercado é um <strong>estoque controlado e limitado</strong> entre processos. O downstream retira o que precisa e o espaço vazio torna-se um sinal kanban dizendo ao upstream para repor apenas aquela quantidade&mdash;pull, não push."
    },
    {
      prompt: "Por que você usaria um supermercado em vez de conectar dois passos em fluxo contínuo de peça única?",
      options: [
        "Porque inventário é sempre preferível ao fluxo.",
        "Porque os passos não podem ser ligados em fluxo contínuo—tempos de ciclo diferentes, distância, um recurso compartilhado ou um passo upstream que deve fazer lote.",
        "Porque supermercados eliminam a necessidade de um sinal de pull.",
        "Porque ele deixa o upstream produzir o quanto quiser."
      ],
      correctIndex: 1,
      explanation: "O fluxo de peça única é o ideal, mas quando os passos rodam em cadências diferentes, ficam distantes, compartilham um recurso ou devem fazer lote, você não consegue conectá-los diretamente. Um supermercado é o <strong>segundo-melhor controle</strong>: ele os desacopla enquanto limita o inventário e mantém um sinal de pull."
    },
    {
      prompt: "Como um supermercado ajuda a evitar lotes e superprodução?",
      options: [
        "Ele remove todos os limites para que o upstream possa construir antecipadamente.",
        "Ele tem um teto—quando a prateleira está cheia os sinais kanban param, então o upstream repõe apenas o que foi retirado, em pequenas quantidades limitadas.",
        "Ele exige que o downstream pegue todo o estoque de uma vez.",
        "Ele substitui sinais de pull por uma previsão de produção mensal."
      ],
      correctIndex: 1,
      explanation: "Diferentemente de uma pilha de WIP descontrolada, um supermercado é <strong>limitado</strong>. Uma prateleira cheia para o sinal de reposição, então o upstream para; ele repõe apenas o que foi consumido, mantendo os lotes pequenos em vez de grandes e especulativos."
    },
    {
      prompt: "Uma transferência não pode ser totalmente conectada em fluxo contínuo, mas o downstream consome itens na mesma ordem em que o upstream os produz. Qual opção é preferida em vez de um supermercado?",
      options: [
        "Um supermercado maior com mais tipos de item.",
        "Uma fila FIFO—uma linha sequenciada e limitada que preserva a ordem primeiro-a-entrar-primeiro-a-sair.",
        "Um buffer sem limite.",
        "Um release em lote mensal."
      ],
      correctIndex: 1,
      explanation: "Quando a sequência é preservada, uma <strong>fila FIFO</strong> é mais simples que um supermercado: uma linha limitada, primeiro-a-entrar-primeiro-a-sair. Recorra à opção mais simples que se encaixa&mdash;fluxo, depois FIFO, depois um supermercado para quando o downstream retira de forma imprevisível ou escolhe entre tipos de item."
    },
    {
      prompt: "Qual situação é uma má escolha para um supermercado?",
      options: [
        "Dois processos padrão e repetíveis rodando em cadências diferentes.",
        "Itens pontuais e customizados que nunca são reencomendados, ou itens que mudam rápido e ficam obsoletos antes de serem puxados.",
        "Um passo upstream com um changeover longo que deve rodar em lotes.",
        "Um processo downstream que retira um mix variado de itens padrão sob demanda."
      ],
      correctIndex: 1,
      explanation: "Você não consegue repor um estoque de itens que nunca são reencomendados, e itens perecíveis ou que mudam rápido ficam obsoletos na prateleira. Esses exigem <strong>make-to-order ou uma fila FIFO</strong>. Evite também supermercados quando o fluxo contínuo verdadeiro é alcançável ou quando o buffer apenas mascara um problema a corrigir."
    }
  ]
}, "pull-vs-push": {
  id: "pull-vs-push",
  title: "Pull vs Push: Deixando a Demanda Conduzir o Trabalho",
  group: "Ambiente, Fluxo & Padronização",
  duration: "30 min",
  executiveSummary: "Push e pull são duas formas opostas de decidir quando o trabalho começa. Em um sistema de push, o trabalho é liberado de acordo com uma previsão ou um cronograma—faça agora porque o plano manda, e envie para o downstream esteja ou não o próximo passo pronto. Em um sistema de pull, o trabalho começa apenas quando o passo downstream (em última instância o cliente) sinaliza que precisa de mais—nada é produzido até que haja demanda real para consumi-lo. O push tende a superproduzir, acumular trabalho em progresso e esconder problemas dentro do inventário que cria; o pull limita o trabalho à demanda real, mantém o WIP baixo e torna os problemas visíveis. Para a melhoria contínua essa distinção é central: um sistema de pull encurta o lead time, expõe gargalos e cria o loop de feedback rápido do qual a melhoria depende. Este módulo explica ambos os sistemas, por que o pull geralmente é preferido, os sinais que o conduzem e os poucos casos em que uma quantidade medida de push ainda é a escolha certa.",
  whatYouGain: [
    "Definir push e pull com precisão—o que dispara o início do trabalho em cada sistema",
    "Explicar por que o push superproduz e cresce o WIP enquanto o pull limita o trabalho à demanda real",
    "Conectar o pull à MC: lead time mais curto, gargalos visíveis e loops de feedback mais rápidos",
    "Reconhecer os sinais de pull (kanban, supermercados, limites de WIP) que fazem o pull funcionar na prática",
    "Saber onde uma quantidade medida de push ainda se encaixa—lead times longos, capacidade prevista e demanda estável e previsível"
  ],
  explanation: "<p><strong>A diferença central: o que inicia o trabalho.</strong> Push e pull respondem a uma pergunta de forma diferente&mdash;<em>quando um passo começa a trabalhar?</em> Em um sistema de <strong>push</strong>, um passo começa porque um cronograma ou previsão mandou: produza esta quantidade até esta data e entregue ao próximo passo, pronto ou não. Em um sistema de <strong>pull</strong>, um passo começa apenas quando o passo <em>downstream</em> sinaliza que consumiu algo e precisa de uma reposição. O trabalho é puxado pelo processo pela demanda real em vez de ser empurrado por um plano.</p><p><strong>Por que o push causa problemas.</strong> O push é conduzido por uma previsão, e previsões nunca estão exatamente certas. Quando os passos upstream produzem conforme o plano independentemente do que o downstream consegue absorver, o descompasso vira <strong>inventário</strong>: trabalho em progresso se acumulando entre os passos. Esse inventário é o pior desperdício Lean&mdash;<strong>superprodução</strong>&mdash;e traz seus próprios custos: lead time mais longo (uma unidade espera atrás de tudo já enfileirado), dinheiro e espaço presos e defeitos ocultos (um problema introduzido no upstream fica não detectado dentro da pilha até alguém finalmente trabalhá-lo). O push mantém cada passo ocupado localmente enquanto o sistema como um todo desacelera e fica cego aos próprios problemas.</p><p><strong>Por que o pull ajuda.</strong> Um sistema de pull limita a quantidade de trabalho no sistema ao que o downstream de fato quer. Como nada começa sem um sinal downstream, o WIP permanece baixo&mdash;e pela Lei de Little (lead time = WIP / throughput), WIP baixo significa lead time curto. O pull também torna os problemas <em>visíveis</em>: quando um passo downstream para de puxar, toda a linha para, então um gargalo ou um defeito aparece imediatamente em vez de ser enterrado sob inventário. Essa visibilidade mais o loop de feedback curto é exatamente o que a melhoria contínua precisa&mdash;você vê a restrição, a corrige e vê o resultado rapidamente.</p><p><strong>Como o pull funciona na prática.</strong> O pull é implementado com sinais explícitos: <ul><li><strong>Kanban</strong>&mdash;um cartão ou sinal que autoriza o passo upstream a produzir ou mover uma unidade; sem cartão, sem trabalho.</li><li><strong>Supermercados</strong>&mdash;um estoque limitado do qual o downstream retira; a lacuna deixada para trás é o sinal de reposição.</li><li><strong>Limites de WIP</strong>&mdash;um teto rígido sobre quanto trabalho pode ficar em um estágio; um estágio cheio bloqueia o upstream de começar mais.</li></ul>Todos os três impõem a mesma regra: o upstream só pode agir em resposta ao consumo real do downstream.</p><p><strong>Pull não é o mesmo que fluxo de peça única.</strong> O fluxo contínuo de peça única é o ideal&mdash;unidades se movem direto sem inventário algum. O pull é como você roda um processo quando não consegue alcançar o fluxo puro: ele ainda permite buffers pequenos e limitados (supermercados), mas os controla com sinais de demanda para que nunca cresçam em inventário de push descontrolado. Fluxo primeiro; onde você não consegue fluir, pull.</p><p><strong>Onde uma quantidade medida de push ainda se encaixa.</strong> O pull é o padrão, mas não é absoluto. O push (conduzido por previsão) pode ser a escolha certa quando: o lead time total para fazer algo é mais longo do que o cliente está disposto a esperar, então você deve começar antes de o pedido existir; a demanda é altamente sazonal e você constrói antecipadamente para nivelar a capacidade; um item pontual ou primeiro-de-seu-tipo não tem demanda repetida para puxar; ou você está pré-posicionando capacidade (não trabalho acabado) contra um evento conhecido. O padrão maduro geralmente é um híbrido&mdash;push até um ponto de desacoplamento estratégico, depois pull dali até o cliente&mdash;dimensionando qualquer buffer conduzido por previsão deliberadamente e encolhendo-o à medida que os lead times melhoram.</p>",
  csamExample: "<p>O cliente de um CSAM roda seu programa de modernização em um modelo de push: um plano anual atribui dezenas de cargas de trabalho a serem migradas em um cronograma fixo, e as equipes iniciam cada uma porque o plano manda&mdash;independentemente de a plataforma receptora, as revisões de segurança ou os donos downstream estarem prontos. O resultado é uma pilha de migrações pela metade presas esperando dependências: muito movimento, pouca conclusão e problemas descobertos tarde. O CSAM reformula como push vs pull. Em vez de liberar trabalho pelo calendário, a equipe puxa: uma nova migração começa apenas quando a equipe de plataforma tem capacidade de aceitá-la e a anterior está de fato pronta, com um limite de WIP limitando quantas podem estar em andamento. Agora o trabalho é puxado pela prontidão real, migrações acabadas de fato aterrissam e travamentos tornam-se visíveis imediatamente em vez de se esconderem em um backlog. O CSAM amarra à MC: 'O pull limita o que começamos ao que conseguimos terminar&mdash;então vemos o gargalo real e o melhoramos, em vez de começar mais e torcer.'</p>",
  csaExample: "<p>Um CSA está ajudando uma equipe de dados cujo pipeline roda em push: cada sistema de origem despeja seu extrato completo em um cronograma fixo na camada de processamento, esteja ou não os processadores em dia. Em dias pesados a camada de processamento fica soterrada sob um backlog (superprodução, latência longa, engenheiros acionados); a pilha esconde qual estágio é de fato a restrição. O CSA o converte para pull: os produtores escrevem em uma fila, e os consumidores puxam trabalho apenas à medida que terminam o item anterior, com um limite de WIP para que o sistema não possa ser inundado e autoscaling dimensionado para a taxa estável de pull em vez do despejo bruto. Backlogs param de se formar, a latência ponta a ponta cai à medida que o WIP cai (Lei de Little) e o estágio gargalo torna-se óbvio no dashboard. O CSA nota a exceção: para uma agregação noturna genuinamente de lead longo e previsível a equipe ainda pré-computa antes da demanda&mdash;um push deliberado e limitado&mdash;mas tudo downstream daquele ponto é puxado.</p>",
  recap: [
    "O push inicia o trabalho a partir de uma previsão ou cronograma e o envia downstream pronto ou não; o pull inicia o trabalho apenas quando um sinal downstream mostra demanda real",
    "O push tende a superproduzir—o WIP se acumula entre os passos, alongando o lead time, prendendo dinheiro e escondendo defeitos dentro do inventário",
    "O pull limita o trabalho à demanda real: WIP baixo significa lead time curto (Lei de Little), e travamentos aparecem imediatamente em vez de serem enterrados",
    "O pull é implementado com sinais explícitos—cartões kanban, supermercados e limites de WIP—onde o upstream age apenas sobre o consumo real do downstream",
    "O pull é um habilitador da MC: gargalos visíveis mais um loop de feedback rápido são do que o trabalho de melhoria depende; fluxo primeiro, depois pull onde você não consegue fluir",
    "Um push medido ainda se encaixa quando o lead time excede a espera que o cliente tolera, para construção antecipada sazonal ou itens pontuais—frequentemente um híbrido: push até um ponto de desacoplamento, pull dali"
  ],
  questions: [
    {
      prompt: "Qual é a diferença fundamental entre um sistema de push e um de pull?",
      options: [
        "O push usa lotes menores que o pull.",
        "No push, o trabalho começa a partir de uma previsão ou cronograma; no pull, o trabalho começa apenas quando um passo downstream sinaliza demanda real.",
        "O pull requer mais inventário que o push.",
        "O push não tem defeitos, enquanto o pull tem."
      ],
      correctIndex: 1,
      explanation: "A distinção é sobre <strong>o que dispara o início do trabalho</strong>. O push libera trabalho conforme um plano/previsão e o envia downstream independentemente da prontidão; o pull inicia o trabalho apenas em resposta a um sinal de demanda downstream."
    },
    {
      prompt: "Por que um sistema de push tende a criar desperdício?",
      options: [
        "Ele nunca mantém os passos upstream ocupados.",
        "Produzir conforme uma previsão independentemente da prontidão downstream causa superprodução—o WIP se acumula, o lead time cresce e os defeitos se escondem dentro do inventário.",
        "Ele limita o trabalho em progresso de forma agressiva demais.",
        "Ele torna os problemas visíveis demais para ignorar."
      ],
      correctIndex: 1,
      explanation: "O push é conduzido por previsão, e o descompasso com a demanda real vira <strong>superprodução</strong>&mdash;o pior desperdício Lean. O WIP resultante alonga o lead time, prende dinheiro e espaço e esconde defeitos até muito mais tarde."
    },
    {
      prompt: "Como um sistema de pull encurta o lead time?",
      options: [
        "Aumentando o throughput independentemente do WIP.",
        "Limitando o WIP à demanda real—WIP menor a um dado throughput significa lead time mais curto (Lei de Little).",
        "Removendo o cliente do processo.",
        "Produzindo antes da demanda para construir um buffer."
      ],
      correctIndex: 1,
      explanation: "O pull limita o trabalho no sistema ao que o downstream puxa, mantendo o WIP baixo. Pela Lei de Little (lead time = WIP / throughput), WIP menor ao mesmo throughput <strong>encurta o lead time</strong>."
    },
    {
      prompt: "Qual destes é um mecanismo usado para implementar um sistema de pull?",
      options: [
        "Uma previsão de produção trimestral empurrada para cada passo.",
        "Sinais kanban, supermercados e limites de WIP—onde o upstream age apenas sobre o consumo real do downstream.",
        "Liberar todo o trabalho no início do período.",
        "Remover todo buffer para que os passos nunca coordenem."
      ],
      correctIndex: 1,
      explanation: "O pull é imposto com sinais explícitos: cartões <strong>kanban</strong> que autorizam uma unidade de trabalho, <strong>supermercados</strong> cujas lacunas sinalizam reposição e <strong>limites de WIP</strong> que bloqueiam o upstream quando um estágio está cheio."
    },
    {
      prompt: "Quando uma quantidade medida de push ainda é apropriada?",
      options: [
        "Sempre que você quiser manter cada passo localmente ocupado.",
        "Quando o lead time total excede a espera que o cliente tolera, para construção antecipada sazonal ou itens pontuais—frequentemente como um híbrido que empurra até um ponto de desacoplamento e puxa dali.",
        "Sempre, porque o push é mais simples que o pull.",
        "Nunca—o push está sempre errado sob qualquer condição."
      ],
      correctIndex: 1,
      explanation: "O pull é o padrão, não um absoluto. O <strong>push</strong> conduzido por previsão se encaixa quando você deve começar antes de um pedido existir (lead time longo), para nivelar a demanda sazonal ou para itens pontuais&mdash;comumente um híbrido: push até um ponto de desacoplamento estratégico, depois pull até o cliente."
    }
  ]
}, "limit-wip": {
  id: "limit-wip",
  title: "Limitando o WIP: Limitar o Trabalho para Acelerar o Fluxo",
  group: "Ambiente, Fluxo & Padronização",
  duration: "30 min",
  executiveSummary: "Trabalho em progresso (WIP) é tudo o que foi iniciado mas ainda não terminado—tickets em andamento, cargas de trabalho parcialmente migradas, funcionalidades codificadas mas não liberadas. Limitar o WIP significa limitar deliberadamente quantas coisas podem estar em progresso de uma vez, para que uma equipe termine o trabalho antes de começar mais. Parece contraintuitivo—começar menos para entregar mais—mas é um dos movimentos de maior alavancagem no Lean. Pela Lei de Little, o lead time é igual ao WIP dividido pelo throughput, então para uma dada capacidade, menos WIP significa entrega mais rápida. WIP alto não é ocupação inofensiva; é superprodução disfarçada, e arrasta espera, troca de contexto e defeitos ocultos consigo. Limitar o WIP é também o mecanismo que torna o pull real, empurra um processo em direção ao fluxo de peça única e ajuda uma equipe a manter o ritmo que o takt time exige. Este módulo explica o que são limites de WIP, por que limitar o trabalho reduz desperdício e encurta o lead time, como a ideia se conecta ao takt time, push vs pull e fluxo de peça única, e como definir e usar limites na prática.",
  whatYouGain: [
    "Definir WIP e explicar por que limitar o trabalho iniciado de fato acelera a entrega",
    "Usar a Lei de Little (lead time = WIP / throughput) para conectar WIP à velocidade",
    "Nomear os desperdícios que o WIP alto cria—superprodução, espera, troca de contexto e defeitos ocultos",
    "Conectar limites de WIP ao pull, ao fluxo de peça única e à manutenção do ritmo do takt time",
    "Definir limites de WIP práticos e saber o que fazer quando um limite é atingido—parar de começar e convergir para terminar"
  ],
  explanation: "<p><strong>O que é WIP e o que significa limitá-lo.</strong> Trabalho em progresso é tudo o que uma equipe <em>iniciou mas não terminou</em>&mdash;uma migração pela metade, uma funcionalidade codificada mas não liberada, um ticket parado em &ldquo;em progresso.&rdquo; Um <strong>limite de WIP</strong> é um teto explícito sobre quantos itens podem estar em um dado estado de uma vez. Quando o teto é atingido, a regra é simples: você não pode começar nada novo até que algo termine e libere um espaço. A promessa contraintuitiva do Lean é que <em>começar menos faz você terminar mais</em>.</p><p><strong>Por que limitar o WIP acelera a entrega: a Lei de Little.</strong> Isto não é um slogan; é aritmética. A <strong>Lei de Little</strong> afirma que lead time médio = WIP médio &divide; throughput médio. Para uma equipe com capacidade aproximadamente fixa (throughput), a única forma de encurtar o lead time é reduzir o WIP. Dobrar o número de coisas em andamento não dobra a saída&mdash;a saída é determinada pela capacidade&mdash;apenas dobra quanto tempo cada item espera. Cortar o WIP pela metade, com o mesmo throughput, corta aproximadamente o lead time pela metade. É por isso que quarenta itens iniciados-mas-não-terminados entregam valor muito mais lentamente do que uns poucos disciplinados trabalhados até a conclusão.</p><p><strong>WIP alto é desperdício disfarçado.</strong> Trabalho não terminado parece produtivo&mdash;todos estão ocupados&mdash;mas é <strong>superprodução</strong>, o pior desperdício Lean, usando uma máscara amigável. Ele arrasta os outros desperdícios consigo: <strong>espera</strong> (itens ficam em filas entre os passos), <strong>movimento e troca de contexto</strong> (as pessoas fazem malabarismo com muitos itens abertos e pagam um imposto cada vez que trocam), <strong>inventário</strong> (dinheiro, capacidade e atenção presos em coisas que não estão prontas) e <strong>defeitos ocultos</strong> (um problema introduzido cedo fica não descoberto dentro da pilha até alguém finalmente trabalhar o item, quando a causa já esfriou). Quanto mais você começa, mais de tudo isso você acumula.</p><p><strong>Limites de WIP tornam o pull real.</strong> Um limite de WIP é o mecanismo concreto de um sistema de <strong>pull</strong>. Quando um estágio está cheio até seu limite, ele para de puxar do upstream&mdash;então o upstream para de produzir&mdash;e o trabalho é puxado pelo processo pela capacidade disponível em vez de ser empurrado por um cronograma. Remova o limite e você volta ao push: cada passo produz conforme o plano, o WIP infla e o sistema fica cego ao próprio gargalo. O limite é o que converte &ldquo;produza quando mandado&rdquo; em &ldquo;produza quando há espaço.&rdquo;</p><p><strong>A ligação com fluxo de peça única e takt time.</strong> O <strong>fluxo de peça única</strong> é simplesmente o caso extremo de um limite de WIP&mdash;um limite de <em>um</em>&mdash;onde um único item se move por todo o processo antes de o próximo começar. Você raramente alcança um limite verdadeiro de um, mas cada redução no WIP o move em direção a esse ideal de fluxo suave de item único e para longe do lote. O <strong>takt time</strong> define o ritmo que o cliente demanda (tempo disponível &divide; demanda); limitar o WIP é como uma equipe de fato <em>mantém</em> esse ritmo, porque um processo sobrecarregado soterrado em WIP não consegue entregar em um ritmo estável&mdash;ele oscila entre enchentes e secas. WIP baixo e estável é o que permite que a saída acompanhe o takt em vez de oscilar em torno dele.</p><p><strong>Como definir e usar limites.</strong> Comece perto da carga típica atual e aperte deliberadamente&mdash;um ponto de partida comum é cerca de um ou dois itens por pessoa ou par, depois reduza até o fluxo ficar suave mas a equipe não ficar ociosa. O comportamento decisivo é o que acontece <em>quando um limite é atingido</em>: não comece trabalho novo&mdash;<strong>pare e convirja</strong> para o item bloqueado ou mais antigo até ele se mover. Esse momento é um presente para a melhoria contínua: o limite força o gargalo para o aberto em vez de deixá-lo se esconder sob um backlog, então a equipe consegue ver a restrição, corrigi-la e observar o lead time responder. Limitar o WIP não desacelera uma equipe&mdash;troca a ilusão de ocupação pela realidade do trabalho terminado e entrega à MC um sinal claro e rápido para melhorar.</p>",
  csamExample: "<p>Um CSAM percebe que a equipe de plataforma de seu cliente está perpetuamente ocupada, mas raramente <em>termina</em> alguma coisa: a qualquer momento quinze ou vinte iniciativas estão &ldquo;em progresso&rdquo;&mdash;migrações, mudanças de governança, revisões de custo&mdash;e quase nenhuma chega ao pronto. Os executivos estão frustrados que um ano de esforço mostra pouco valor entregue. O CSAM reformula o problema como WIP, não esforço. Em vez de pedir que a equipe trabalhe mais, ele introduz um limite de WIP: não mais que um punhado de iniciativas ativas de uma vez, e nada novo começa até que uma termine. A equipe resiste no início&mdash;começar parece progresso&mdash;mas dentro de dois ciclos as iniciativas concluídas começam a aterrissar porque a atenção está concentrada em vez de espalhada. O CSAM conecta à MC e à Lei de Little: 'Seu throughput é fixado pela capacidade; a única alavanca que você controla é quanto você começa. Limite o WIP e o lead time cai&mdash;e o limite torna seu gargalo real visível para que possamos melhorá-lo.' Resultados terminados, não tickets abertos, tornam-se a medida do progresso.</p>",
  csaExample: "<p>Um CSA está orientando uma equipe de entrega cujo quadro rotineiramente mantém três ou quatro vezes mais tickets &ldquo;em progresso&rdquo; do que há engenheiros&mdash;todos têm várias coisas abertas, trocando de contexto o dia todo, e o cycle time de qualquer ticket único se estende por semanas porque cada um espera atrás dos outros. O CSA introduz limites de WIP por coluna na ferramenta de acompanhamento e uma regra que a equipe concorda: quando uma coluna está em seu limite, você não puxa nada novo&mdash;você ajuda a terminar o que já está lá. A primeira semana é desconfortável; engenheiros acostumados a pegar trabalho novo em vez disso formam pares para empurrar itens travados pela revisão de código e teste. O cycle time cai à medida que o WIP cai (Lei de Little em ação), o backlog perpétuo de revisão se esvazia, e a coluna que insiste em atingir seu limite&mdash;teste&mdash;revela-se a restrição verdadeira, que a equipe então automatiza. O CSA enquadra o resultado: 'Limitar o WIP não nos fez fazer menos&mdash;nos fez terminar mais, e apontou uma lanterna direto para o gargalo. Essa visibilidade é o loop de feedback no qual a MC funciona.'</p>",
  recap: [
    "WIP é o trabalho que foi iniciado mas não terminado; um limite de WIP limita quantos itens podem estar em progresso e bloqueia o início de trabalho novo até que algo termine",
    "A Lei de Little (lead time = WIP / throughput) significa que, com capacidade fixa, reduzir o WIP é a alavanca direta para encurtar o lead time",
    "WIP alto é superprodução disfarçada—ele arrasta espera, troca de contexto, inventário preso e defeitos ocultos consigo",
    "Limites de WIP são o mecanismo concreto do pull: um estágio cheio para de puxar do upstream, então o trabalho é puxado pela capacidade em vez de empurrado por um cronograma",
    "O fluxo de peça única é um limite de WIP de um; o takt time define o ritmo da demanda, e WIP baixo e estável é o que permite a uma equipe de fato manter esse ritmo",
    "Quando um limite é atingido, pare e convirja para o item mais antigo ou bloqueado—isso expõe o gargalo, dando à MC o feedback rápido e visível do qual ela depende"
  ],
  questions: [
    {
      prompt: "O que significa limitar o WIP?",
      options: [
        "Contratar mais pessoas para que mais trabalho possa ser iniciado de uma vez.",
        "Limitar quantos itens podem estar em progresso de uma vez, e não começar trabalho novo até que algo termine.",
        "Remover todos os prazos do trabalho da equipe.",
        "Aumentar os tamanhos de lote para que menos transferências sejam necessárias."
      ],
      correctIndex: 1,
      explanation: "Um limite de WIP é um teto explícito sobre itens em progresso. Quando o teto é atingido, nenhum trabalho novo começa até que algo termine e libere um espaço&mdash;<strong>começar menos para terminar mais</strong>."
    },
    {
      prompt: "Segundo a Lei de Little, como reduzir o WIP afeta o lead time com throughput fixo?",
      options: [
        "Não tem efeito; o lead time depende apenas do tamanho da equipe.",
        "Aumenta o lead time porque menos coisas estão sendo trabalhadas.",
        "Encurta o lead time—lead time = WIP / throughput, então menos WIP com o mesmo throughput significa entrega mais rápida.",
        "Aumenta o throughput sem mudar o lead time."
      ],
      correctIndex: 2,
      explanation: "<strong>Lei de Little</strong>: lead time = WIP &divide; throughput. Com o throughput fixado pela capacidade, reduzir o WIP é a forma direta de <strong>encurtar o lead time</strong>."
    },
    {
      prompt: "Por que o WIP alto é considerado uma forma de desperdício?",
      options: [
        "Porque trabalho não terminado é superprodução disfarçada—adiciona espera, troca de contexto, inventário preso e defeitos ocultos.",
        "Porque sempre significa que a equipe está com pessoal insuficiente.",
        "Porque garante que o produto será entregue atrasado por contrato.",
        "Porque remove a necessidade de quaisquer sinais de pull."
      ],
      correctIndex: 0,
      explanation: "Muito trabalho iniciado-mas-não-terminado parece produtivo mas é <strong>superprodução</strong>, o pior desperdício Lean. Ele arrasta espera, troca de contexto, inventário e defeitos ocultos consigo."
    },
    {
      prompt: "Como os limites de WIP se relacionam com o pull e o fluxo de peça única?",
      options: [
        "Não têm nada a ver com o pull; só importam para a previsão.",
        "Um limite de WIP é o mecanismo do pull—um estágio cheio para de puxar do upstream—e o fluxo de peça única é simplesmente um limite de WIP de um.",
        "Eles convertem um sistema de pull de volta em um sistema de push.",
        "Eles exigem abandonar o takt time por completo."
      ],
      correctIndex: 1,
      explanation: "Um limite de WIP torna o <strong>pull</strong> concreto: um estágio em seu limite para de puxar do upstream. O <strong>fluxo de peça única</strong> é o caso extremo&mdash;um limite de WIP de um item por vez."
    },
    {
      prompt: "O que uma equipe deve fazer quando um estágio atinge seu limite de WIP?",
      options: [
        "Começar trabalho adicional em outro lugar para se manter ocupada.",
        "Elevar o limite imediatamente para que o trabalho possa continuar fluindo.",
        "Parar de começar trabalho novo e convergir para o item bloqueado ou mais antigo para terminá-lo—expondo o gargalo para melhoria.",
        "Ignorar o limite até o fim do sprint."
      ],
      correctIndex: 2,
      explanation: "Atingir o limite é o sinal para <strong>parar e convergir</strong>: termine o que está lá antes de começar mais. Isso força o gargalo para o aberto&mdash;exatamente o feedback visível e rápido que a melhoria contínua precisa."
    }
  ]
}, "kaizen": {
  id: "kaizen",
  title: "Kaizen: Eventos de Melhoria Focada que Entregam em Dias",
  group: "Ambiente, Fluxo & Padronização",
  duration: "30 min",
  executiveSummary: "Kaizen—'mudança para melhor'—é um evento de melhoria focado e com tempo limitado conduzido pelas pessoas que fazem o trabalho. Um evento Kaizen de 3–5 dias reúne uma equipe multifuncional que escopa, analisa e implementa uma mudança específica de ponta a ponta antes do fim da semana. Especialmente poderoso quando o ceticismo do cliente é alto e uma vitória visível e medida é necessária para reconstruir o momento. Use Kaizen para comprimir vitórias de modernização, melhorias de confiabilidade, otimizações de custo e saltos de capacitação em eventos com participação do cliente e dados rígidos de antes/depois. Respeite os limites do Kaizen: ele funciona para execução de soluções conhecidas em dias, não para o design de sistemas complexos que precisam de meses.",
  whatYouGain: [
    "Quebrar programas de transformação travados entregando uma melhoria real e medida em 5 dias em vez de torcer para um roadmap de 5 meses aterrissar",
    "Reconstruir a confiança e o momento do cliente após programas fracassados—nada recupera credibilidade como uma vitória visível demonstrada à liderança no dia 5",
    "Comprimir ciclos PDCA para problemas de alta prioridade de semanas para dias, com código/config funcional entregue antes de a equipe se dispersar",
    "Construir o músculo de MC da equipe do cliente através da participação—Kaizen é ensinado fazendo, não com slides"
  ],
  explanation: "<p><strong>Kaizen é tanto uma filosofia quanto um formato.</strong></p><p><strong>Filosofia:</strong> A melhoria pequena e contínua compõe mais rápido que a mudança grande e rara. As pessoas que fazem o trabalho projetam a melhoria. Padronize o que funciona; o padrão torna-se a linha de base para o próximo Kaizen. Problemas são tesouros—a visibilidade é uma virtude.</p><p><strong>Formato: Um workshop com tempo limitado de 3–5 dias.</strong> Uma equipe multifuncional (6–10 pessoas) se reúne diariamente usando Pareto, Ishikawa, 5 Porquês, mapeamento de fluxo de valor e os 8 Desperdícios para escopar, analisar, implementar e validar a mudança até o fim da semana, apresentando à liderança com dados de antes/depois.</p><p><strong>Fases padrão:</strong> Pré-trabalho (escopar, acordar a métrica, coletar linha de base, garantir agendas). Dia 1—Entender (percorra o processo, construa o VSM, Ishikawa + 5 Porquês). Dia 2—Analisar (causas de Pareto, projete o estado futuro). Dia 3—Implementar (faça a mudança em sistemas reais, PRs de IaC, atualizações de runbook). Dia 4—Validar (meça o novo estado, itere, padronize). Dia 5—Sustentar & reportar (defina cadência, faça a transferência, apresente resultados com dados de antes/depois).</p><p><strong>Inegociáveis:</strong> Equipe multifuncional com agendas liberadas. Autoridade de decisão na sala (ou a uma mensagem de distância). Métrica de linha de base predefinida e meta de sucesso. Algo real é entregue até o dia 5. A linha de base e a nova medição usam a mesma fonte de dados (comparação justa).</p>",
  csamExample: "<p>Um CSAM herda um cliente 7 meses dentro de uma \"transformação DevOps\" sem vitórias visíveis. O CTO está abertamente cético quanto a mais horas de CSA. O CSAM propõe: um Kaizen de 5 dias em um único fluxo de valor—o lead time de implantação do serviço de checkout. Pré-trabalho: coletar 90 dias de dados de deploy. Dia 1: o mapa de fluxo de valor revela lead time de 6 horas; 80 min em portões manuais, 4 min na correção real. Dia 2: projetar um runbook unificado de deploy de checkout + comando ChatOps `\\/deploy`. Dia 3: entregar. Dia 4: medir em 10 deploys reais—75 minutos de ponta a ponta, 4x/dia em vez de 2x/semana. Dia 5: demonstrar ao CTO com métrica ao vivo. O CTO financia os próximos 4 Kaizens na hora. Uma semana de mudança validada abre o que 7 meses de planejamento não conseguiram.</p>",
  csaExample: "<p>O cliente de um CSA tem um contêiner Cosmos DB lançando 412 erros-429 por dia, limitando o throughput. Pré-trabalho: 90 dias de telemetria. Dia 1: Pareto + Ishikawa + 5 Porquês identifica chave de partição hierárquica (HPK) + autoscale + upgrade de SDK + ajuste de índice como a correção. Dia 2: projetar a mudança (migração HPK, atualização de SDK, trava do módulo IaC). Dia 3: implementar em prod; implantar o upgrade de SDK nos serviços; aquecimento do autoscale. Dia 4: medir contra a linha de base do dia 1—38.000 RU/s → 9.200 RU/s; 429s → 0; custo mensal US$ 11.400 → US$ 2.800. Dia 5: readout; padronizar o módulo IaC; agendar mais 6 Kaizens em contêineres adjacentes. Uma única semana de execução torna-se o padrão repetível do cliente.</p>",
  recap: [
    "O Kaizen entrega uma melhoria funcional em 5 dias; é um formato de execução, não um compressor mágico de cronograma—respeite seus limites.",
    "Pré-trabalho e autoridade de decisão são inegociáveis; sem uma linha de base predefinida, você não pode declarar vitória no final.",
    "Fases de cinco dias: Entender (dia 1), Analisar (dia 2), Implementar (dia 3), Validar (dia 4), Sustentar & reportar (dia 5).",
    "Use o Kaizen quando o diagnóstico existe e a correção pode ser entregue em dias; evite-o para problemas de design que precisam de meses de arquitetura.",
    "Meça antes/depois com a mesma consulta; padronize via IaC, Policy, runbooks; agende o próximo Kaizen antes de o dia 5 terminar."
  ],
  questions: [
    {
      prompt: "Um cliente está há 8 meses em uma &ldquo;transformação digital&rdquo; sem melhorias entregues. Qual é o valor estratégico de rodar um Kaizen agora?",
      options: [
        "Estende o cronograma do programa de transformação para que mais planejamento possa ocorrer.",
        "Entrega uma melhoria medida e funcional em 5 dias, reconstruindo a confiança do cliente e justificando mais engajamento.",
        "Produz um documento de estratégia abrangente que alinha todos os stakeholders.",
        "Elimina a necessidade de fazer qualquer outro trabalho de melhoria."
      ],
      correctIndex: 1,
      explanation: "Um Kaizen quebra o ciclo de transformação travada entregando resultados <strong>reais e medidos</strong> em dias. A vitória visível &mdash; muitas vezes demonstrada à liderança no dia 5 &mdash; reconstrói o momento mais rápido que qualquer roadmap."
    },
    {
      prompt: "Qual é um requisito inegociável para o sucesso do Kaizen?",
      options: [
        "O CEO do cliente deve participar de todos os cinco dias.",
        "Os membros da equipe multifuncional têm agendas liberadas, e a autoridade de decisão está presente na sala.",
        "Todos os 47 engenheiros do departamento devem participar para que todos sejam treinados.",
        "O código deve ser entregue até o dia 2 com os dias 3&ndash;5 reservados para outras atividades."
      ],
      correctIndex: 1,
      explanation: "O Kaizen depende do <strong>comprometimento total dos participantes</strong> e de alguém na sala com autoridade para aprovar mudanças. Equipes com participação parcial falham porque a troca de contexto mata o foco."
    },
    {
      prompt: "No dia 2, a equipe projeta uma mudança que requer aprovação de ferramenta de um comitê que se reúne em 4 semanas. O que você deve fazer?",
      options: [
        "Reprojetar a melhoria para evitar o custo da ferramenta para que a equipe possa entregá-la até o dia 5.",
        "Pausar o Kaizen e reagendá-lo após o comitê de orçamento se reunir.",
        "Se o tomador de decisão necessário não está na sala (ou a uma mensagem de distância), o escopo foi mal enquadrado &mdash; reenquadre para o que a autoridade atual pode aprovar em 5 dias.",
        "Fazer a equipe implementar uma solução parcial e comprometer-se com a mudança completa depois."
      ],
      correctIndex: 2,
      explanation: "O requisito de <strong>autoridade de decisão</strong> é inegociável. Um Kaizen que termina com &ldquo;precisaremos de aprovação no próximo mês&rdquo; é uma reunião de planejamento, não um Kaizen."
    },
    {
      prompt: "O pré-trabalho para um Kaizen revela que a equipe não definiu uma métrica de linha de base ou meta de sucesso. Como você deve proceder?",
      options: [
        "Iniciar o evento mesmo assim e definir a métrica no dia 1 durante a abertura.",
        "Voltar e travar uma linha de base específica e mensurável e uma meta antes do dia 1.",
        "Pular o pré-trabalho e usar o tempo do workshop para fazer brainstorm de possíveis métricas.",
        "Focar em melhorias de processo em vez disso, já que métricas de confiabilidade são difíceis de definir."
      ],
      correctIndex: 1,
      explanation: "Um Kaizen sem uma <strong>linha de base e métrica de sucesso</strong> predefinidas não pode declarar vitória no final. O pré-trabalho deve travar isso; protege a credibilidade do evento."
    },
    {
      prompt: "Um cliente pede um Kaizen para &ldquo;redesenhar nossa topologia de banco de dados ativo-ativo multirregião.&rdquo; O trabalho genuinamente precisa de meses de design. Esse é o escopo certo?",
      options: [
        "Sim, porque o Kaizen comprime qualquer cronograma em 5 dias.",
        "Sim, desde que você o estenda para 10 dias em vez de 5.",
        "Não &mdash; o Kaizen só funciona quando o diagnóstico existe e a correção pode ser entregue em dias. Respeite os limites do formato.",
        "Sim, mas apenas se todos os arquitetos sêniores participarem em tempo integral."
      ],
      correctIndex: 2,
      explanation: "O Kaizen é um <strong>formato para execução</strong>, não um compressor mágico de cronograma. Para trabalho que genuinamente precisa de meses de arquitetura, o Kaizen falhará."
    }
  ]
}, "kanban": {
  id: "kanban",
  title: "Kanban: Controle de Fluxo para Trabalho Contínuo",
  group: "Ambiente, Fluxo & Padronização",
  duration: "30 min",
  executiveSummary: "Kanban—'quadro de sinais'—é um sistema de fluxo de trabalho visual que limita o trabalho em progresso (WIP) para expor gargalos e puxar o trabalho por um fluxo de valor em ritmo sustentável. Pela Lei de Little, o lead time escala com o WIP; reduza o WIP pela metade e você reduz o lead time pela metade com o mesmo throughput. Para CSAs, o Kanban é o complemento operacional de Pareto/Ishikawa/Kaizen: esses identificam o trabalho certo; o Kanban o faz fluir até o pronto. Use o Kanban para gerenciar ciclos de MC, filas de resposta a incidentes, backlogs de modernização, pipelines de onboarding de clientes e seu próprio backlog de engajamento. As mecânicas principais—visualizar, limitar o WIP, gerenciar o fluxo, tornar as políticas explícitas, evoluir—aplicam-se igualmente a equipes de SRE de 4 pessoas e organizações de plataforma de 40 pessoas.",
  whatYouGain: [
    "Cortar o lead time pela metade sem adicionar pessoas—limites de WIP forçam o foco e eliminam o desperdício de troca de contexto; a Lei de Little torna essa matemática visível",
    "Expor gargalos imediatamente—WIP envelhecendo é o indicador antecipado de problemas; corrija a restrição antes que ela se propague",
    "Terminar o que você começa—uma Definição de Pronto-para-Começar e de Pronto explícita impede que trabalho pela metade se acumule e envenene o backlog",
    "Rodar ciclos de MC, resposta a incidentes e fluxos de modernização com métricas visíveis de throughput e lead time"
  ],
  explanation: "<p><strong>Seis práticas centrais (David Anderson):</strong></p><ul><li><strong>Visualizar:</strong> Cada item é um cartão em um quadro. As colunas representam estágios. Nada é invisível.</li><li><strong>Limitar o WIP:</strong> Cada coluna tem um máximo. Quando cheia, o upstream para ou o downstream termina. Esta é a disciplina que funciona.</li><li><strong>Gerenciar o fluxo:</strong> Observe o lead time e o throughput, não a utilização. Alta utilização esconde gargalos.</li><li><strong>Tornar as políticas explícitas:</strong> O que significa \"Pronto\"? O que é \"Pronto-para-Começar\"? Escreva no quadro.</li><li><strong>Implementar loops de feedback:</strong> Standup diário, reunião de reabastecimento, revisão de entrega de serviço, revisão de risco, revisão de estratégia.</li><li><strong>Melhorar colaborativamente:</strong> Mude o quadro com base em dados; isto é PDCA aplicado ao próprio quadro.</li></ul><p><strong>Mecânicas centrais:</strong> Pull (o downstream puxa quando a capacidade abre; o upstream não pode empurrar). Raias (por tipo ou área de serviço). Classes de serviço (Padrão, Expedito, Data-fixa, Intangível). Métricas: Lead time (submetido a entregue), Cycle time (iniciado a entregue), Throughput (entregue por período), WIP envelhecendo (há quanto tempo os itens atuais estão em progresso). O Diagrama de Fluxo Cumulativo visualiza o lead time e o WIP de relance.</p><p><strong>A Lei de Little</strong> é a matemática por trás dos limites de WIP. Para um sistema estável, lead time médio = WIP médio &divide; throughput médio (LT = WIP / throughput). O throughput é determinado pela capacidade real de entrega e é difícil de elevar rapidamente; o WIP é algo que você controla diretamente. Então quando o throughput se mantém estável, cortar o WIP corta o lead time proporcionalmente&mdash;reduza pela metade os itens em progresso e o item médio é entregue em cerca de metade do tempo. É por isso que limitar o WIP, em vez de adicionar pessoas, é muitas vezes a forma mais rápida de encurtar o lead time. A lei vale em média para um sistema estável ao longo do tempo, não para qualquer item único.</p><p><strong>Como usar:</strong> Mapeie o fluxo de trabalho real como colunas (não invente estágios; reflita a realidade). Defina limites de WIP iniciais (regra prática: WIP ≈ tamanho da equipe para Em Andamento). Defina Pronto-para-Começar e Pronto por coluna. Faça cerimônias curtas (standup diário, reabastecimento semanal). Acompanhe e exponha o envelhecimento. Respeite os limites quando dói—é quando eles estão funcionando.</p>",
  csamExample: "<p>O cliente de um CSAM tem 14 iniciativas da equipe de plataforma em andamento entre 5 engenheiros; nada foi entregue em 11 semanas. O CSAM introduz um Kanban simples de 3 colunas (Pronto-para-Começar → Em Andamento → Pronto) com um limite de WIP de 5 em Em Andamento. Dentro de 2 semanas, 4 iniciativas terminaram. Dentro de 6 semanas, 11 foram entregues. A equipe não adicionou capacidade; o foco dela mudou. O CSAM também trouxe visibilidade à reunião de reabastecimento: itens puxados pelo impacto de Pareto, não pela pressão de stakeholders. O quartil superior de iniciativas por valor conduziu 80% do throughput.</p>",
  csaExample: "<p>O cliente de um CSA roda a resposta a incidentes em um grande cluster AKS. O canal de incidentes é um caos: alertas chegam em enxurrada, o on-call troca de contexto entre triagem/atribuição/remediação/postmortem sem fila visível. O CSA propõe um Kanban (Triagem → Atribuído → Depurando → Correção → Validação → Fechado) com limites de WIP: Atribuído ≤ 8, Depurando ≤ 5, Correção ≤ 3. O quadro é fixado no canal. Dentro de uma semana, incidentes envelhecendo ficam visíveis como gargalo: 3 presos em Atribuído por 4+ horas. Causa raiz: a atribuição exigia disponibilidade do gerente de on-call. Nova política: o gerente de on-call cuida da revisão de Atribuído a cada 30 min. O lead time normalizou para 2 horas. O quadro não adicionou capacidade; ele expôs a restrição + forçou uma mudança de política que a corrigiu.</p>",
  recap: [
    "O Kanban expõe gargalos através de limites de WIP—quando uma coluna enche, o upstream para ou o downstream termina; a restrição torna-se visível.",
    "Lei de Little: o lead time escala com o WIP. Reduza o WIP pela metade e você reduz o lead time pela metade com o mesmo throughput—o foco vence a capacidade.",
    "Visualize o trabalho, limite o WIP por coluna (regra prática: WIP ≈ tamanho da equipe), defina Pronto-para-Começar e Pronto, faça cerimônias de feedback, melhore via dados.",
    "WIP envelhecendo é o indicador antecipado—itens envelhecendo além do cycle time esperado destacam travamentos; corrija o travamento, não a métrica de envelhecimento.",
    "Respeite os limites de WIP quando o calendário fica desconfortável; é quando eles estão fazendo seu trabalho—forçando tradeoffs visíveis em vez de sobrecarga invisível."
  ],
  questions: [
    {
      prompt: "Uma equipe tem 14 iniciativas em andamento entre 5 engenheiros; nada foi entregue em 11 semanas. Você define um limite de WIP de 5 na coluna Em Andamento. Qual é o mecanismo fundamental que deve melhorar o throughput?",
      options: [
        "A equipe ganha visibilidade do backlog, então a motivação aumenta.",
        "Limitar o WIP força a equipe a terminar o trabalho em vez de trocar de contexto &mdash; reduzindo o lead time e aumentando o throughput real.",
        "Os engenheiros trabalharão mais rápido porque veem o quadro durante os standups.",
        "O quadro prioriza automaticamente qual trabalho é mais importante."
      ],
      correctIndex: 1,
      explanation: "Pela Lei de Little, o lead time escala com o WIP. Um <strong>limite de WIP</strong> remove a contenção e força o foco. A equipe não trabalha mais duro &mdash; ela termina o que começa, então o throughput melhora."
    },
    {
      prompt: "Uma equipe propõe seis colunas para um quadro de incidentes. Qual abordagem está correta?",
      options: [
        "Todos os seis estágios, porque são todos importantes.",
        "Apenas os estágios que representam transferências e gargalos reais no fluxo de trabalho.",
        "Apenas Aberto e Fechado, para manter o quadro simples.",
        "Cinco estágios, excluindo &ldquo;esperando input do cliente&rdquo; porque isso é externo."
      ],
      correctIndex: 1,
      explanation: "As colunas mapeiam <strong>estágios reais do fluxo de trabalho</strong>, não cada variação de status. &ldquo;Esperando o cliente&rdquo; pertence a uma raia de Bloqueado &mdash; não é trabalho ativo. Colunas extras escondem problemas de fluxo em vez de expô-los."
    },
    {
      prompt: "Um VP pede para empurrar um 5º item para uma coluna Em Andamento com um limite de WIP de 4. Qual é a resposta correta?",
      options: [
        "Quebrar o limite de WIP desta vez porque o pedido do VP é urgente.",
        "Adicionar silenciosamente o novo trabalho a uma raia &ldquo;Expedita&rdquo; separada fora do limite de WIP.",
        "Trazer o conflito à tona no quadro, tornar o tradeoff explícito e deixar o VP escolher o que pausar ou parar.",
        "Rejeitar o pedido do VP porque a política do Kanban o proíbe."
      ],
      correctIndex: 2,
      explanation: "O propósito do limite de WIP é <strong>forçar um tradeoff visível</strong>. Quando o VP vê a lista real do trabalho atual, ele muitas vezes escolhe diferente do que escolheria se o conflito fosse invisível."
    },
    {
      prompt: "Um cliente pergunta como decidir quais dos 40 apps de modernização puxar para o pipeline. Qual é a resposta certa?",
      options: [
        "O Kanban decide a prioridade automaticamente com base na complexidade do app.",
        "Use Pareto para classificar as aplicações por valor de negócio, depois use o Kanban para fazê-las fluir pelo pipeline de migração.",
        "Puxe as aplicações na ordem em que foram solicitadas, sem priorização.",
        "O quadro Kanban substitui a necessidade de qualquer outra ferramenta de planejamento."
      ],
      correctIndex: 1,
      explanation: "O Kanban é um <strong>motor de execução</strong>, não um motor de decisão. O Pareto responde &ldquo;o quê&rdquo;; o Kanban responde &ldquo;como o movemos.&rdquo;"
    },
    {
      prompt: "Um quadro mostra uma contagem crescente de cartões envelhecendo além do cycle time esperado, mesmo que a equipe se sinta &ldquo;tão ocupada quanto sempre.&rdquo; O que isso indica?",
      options: [
        "A equipe precisa contratar mais engenheiros.",
        "O limite de WIP está baixo demais e deve ser elevado.",
        "Algo está bloqueando o trabalho ou causando travamentos; WIP envelhecendo é um indicador antecipado de problemas que precisa de investigação.",
        "A métrica de cycle time não é confiável; mude para utilização."
      ],
      correctIndex: 2,
      explanation: "WIP envelhecendo é o <strong>indicador antecipado</strong>. Alta utilização pode esconder gargalos &mdash; esperando aprovações, dependências ou habilidades. O envelhecimento é o sinal para parar e investigar, não para elevar o WIP."
    }
  ]
}, "hoshin-kanri": {
  id: "hoshin-kanri",
  title: "Hoshin Kanri (Matriz X)",
  group: "Estratégia & Governança",
  duration: "30 min",
  executiveSummary: "Hoshin Kanri (Desdobramento de Políticas) traduz um pequeno número de objetivos estratégicos em projetos de melhoria anuais e trimestrais em cascata com propriedade explícita e progresso mensurável em todos os níveis. A icônica Matriz X conecta objetivos de longo prazo, avanços anuais, projetos de melhoria e KPIs/responsáveis em uma única página, substituindo iniciativas dispersas por uma narrativa estratégica coerente.",
  whatYouGain: [
    "Estreitar o portfólio: substituir dezenas de iniciativas dispersas por 3–5 avanços estratégicos",
    "Alinhamento em cascata: rastrear cada projeto do nível C até o nível de equipe com propriedade explícita",
    "Substituir o teatro de planejamento: transformar a estratégia anual em uma disciplina de revisão trimestral viva",
    "Travar a responsabilização: atribuir um responsável e um KPI a cada objetivo em cada nível",
    "Focar o portfólio: um conjunto curto e classificado de avanços impede que as equipes espalhem o esforço entre iniciativas demais"
  ],
  explanation: "<p>Hoshin Kanri é a disciplina de traduzir objetivos estratégicos de ruptura em projetos de melhoria em cascata com progresso mensurável em todos os níveis. A maioria dos programas de MC acumula iniciativas sem coerência; o Hoshin impõe uma.</p><p>A <strong>Matriz X</strong> é o artefato icônico — um diamante de uma página ligando quatro quadrantes: objetivos de longo prazo (visão de 3–5 anos), objetivos de avanço anuais, projetos de melhoria de alta prioridade (DMAIC, Kaizen, programas) e KPIs com responsáveis. Marcas de correlação (●, ○) mostram qual projeto apoia qual objetivo, de propriedade de quem.</p><p>A <strong>cascata</strong> tem quatro camadas típicas: Empresa (objetivos de longo prazo de 3–5 anos), Divisão/UN (Matriz X anual + avanços), Equipe (gráficos bowler trimestrais + A3s) e Indivíduo (compromissos de projeto mensais). O <strong>processo de Catchball</strong> é a negociação iterativa que alinha os níveis — os objetivos são trabalhados para cima e para baixo na organização, não ditados. Ele roda em rodadas: um líder propõe um objetivo e uma meta; a equipe receptora responde com uma avaliação de viabilidade — o que seria necessário, o que isso deslocaria, qual meta é realista e qual apoio ou recursos eles precisam. O líder ajusta o objetivo, o provisionamento de recursos, ou ambos, e o devolve. As rodadas continuam até que a meta e o plano para atingi-la sejam ambos acordados, de modo que o responsável aceite um compromisso que ajudou a moldar em vez de um imposto a ele. A convergência é alcançada quando cada objetivo tem um responsável que concorda que a meta é alcançável com os recursos alocados; a discordância persistente é um sinal para reescopar o objetivo ou tirá-lo do ciclo.</p><p><strong>Operações trimestrais:</strong> Cada equipe mantém um gráfico Bowler — uma tabela simples mostrando planejado vs. real por mês para cada KPI, com status vermelho/verde. KPIs vermelhos recebem atenção; KPIs vermelhos sem um plano escalam. A renovação anual dispara outra rodada de Catchball e reset.</p><p><strong>Quando usá-lo:</strong> O Hoshin é certo para organizações maduras em MC onde a liderança quer MC estratégica, não correções táticas dispersas. Pule-o para programas em estágio inicial — estabeleça a disciplina do PDCA e rode alguns Kaizens primeiro. O Hoshin formaliza o que já está acontecendo; ele não o impulsiona do zero.</p>",
  csamExample: "<p>Um CSAM descobre que a organização de plataforma de um cliente tem 47 iniciativas de melhoria ativas. Nenhuma está ligada a um resultado mensurável do cliente ou às metas de negócio declaradas do cliente (confiabilidade, redução de custo, onboarding mais rápido). O CSAM facilita uma sessão de Hoshin que cascateia a intenção estratégica do cliente em 3 objetivos de avanço anuais: 99,95% de confiabilidade nos top-10 serviços, redução de 25% no gasto com nuvem e tempo de onboarding de 4 semanas para 1. As 47 iniciativas são remapeadas: 18 apoiam um dos 3 avanços; 29 são pausadas ou eliminadas. O CSAM então usa a Matriz X nas revisões trimestrais de negócio para mostrar ao cliente seu progresso estratégico e alinhar futuras melhorias de serviço aos resultados dele.</p>",
  csaExample: "<p>Um CSA está projetando um programa de confiabilidade Azure de 12 meses para um cliente. Em vez de começar com um backlog de 12 projetos DMAIC isolados (correções de logging, padrões de circuit breaker, ensaios de DR), o CSA facilita o Hoshin para definir: Objetivo de longo prazo = confiabilidade líder do setor. Avanço anual = 99,95% de uptime nos top-10 serviços. Os projetos de apoio incluem: 6 DMAIC (causa raiz nas principais assinaturas de incidentes), 3 Kaizen (redução de toil de SRE), 1 programa (redundância de zona AKS + Azure Backup). A Matriz X liga cada projeto DMAIC ao KPI (% de uptime) e atribui um DRI por projeto. Os gráficos bowler trimestrais mostram quais projetos estão no prazo (verde) ou atrasando (vermelho); projetos vermelhos disparam escalonamento por capacidade de engenharia ou dependências bloqueadas. Resultado de fim de ano: 8 dos 10 principais serviços atingem a meta de 99,95.</p>",
  recap: [
    "Hoshin Kanri traduz 3–5 objetivos estratégicos em projetos de melhoria em cascata com propriedade explícita",
    "A Matriz X (uma página) liga visão de longo prazo, avanços anuais, projetos e KPIs com marcas de correlação",
    "Catchball é a negociação iterativa de objetivos para cima e para baixo na organização — não ditadura de cima para baixo",
    "Gráficos bowler (planejado vs. real mensal por KPI) são o dashboard operacional; KPIs vermelhos disparam escalonamento",
    "Use o Hoshin para organizações maduras em MC que buscam foco estratégico; pule-o para programas em estágio inicial",
    "A renovação anual reinicia o Catchball; revisões trimestrais defendem o foco contra a proliferação de iniciativas"
  ],
  questions: [
    {
      prompt: "O que a Matriz X conecta no Hoshin Kanri?",
      options: [
        "Orçamento, cronograma, recursos e restrições.",
        "Objetivos de longo prazo, avanços anuais, projetos de melhoria e KPIs com responsáveis.",
        "Metas departamentais, alvos de equipe, tarefas individuais e avaliações de desempenho.",
        "Dados históricos, linha de base atual, metas de melhoria e previsão."
      ],
      correctIndex: 1,
      explanation: "A Matriz X é um diamante de uma página ligando <strong>objetivos de longo prazo (norte), avanços anuais (sul), projetos prioritários (oeste) e KPIs / responsáveis (leste)</strong>, com marcas de correlação mostrando qual projeto apoia qual objetivo."
    },
    {
      prompt: "Quantos objetivos de longo prazo um plano Hoshin deve tipicamente conter?",
      options: [
        "10 a 15 para garantir cobertura abrangente.",
        "25 a 30 para uma abordagem de portfólio.",
        "3 a 5 para impor foco em vez de portfólio.",
        "1 a 2 para simplificar a tomada de decisão."
      ],
      correctIndex: 2,
      explanation: "O Hoshin limita os objetivos estratégicos a <strong>3–5 por ciclo</strong> — foco em vez de portfólio. Objetivos demais tornam a estratégia incoerente."
    },
    {
      prompt: "O que é o processo de catchball no Hoshin Kanri?",
      options: [
        "Slogans de marketing para a estratégia.",
        "A negociação iterativa de objetivos para cima e para baixo na organização até que o alinhamento seja alcançado.",
        "A reunião final de aprovação onde a liderança assina o plano.",
        "A fase de implementação onde as equipes executam seus projetos atribuídos."
      ],
      correctIndex: 1,
      explanation: "Catchball é o <strong>processo de negociação</strong> — objetivos propostos para baixo, preocupações de viabilidade retornadas para cima, iterando até alinhar. A cascata não é ditadura de cima para baixo."
    },
    {
      prompt: "O que é o gráfico bowler no Hoshin Kanri?",
      options: [
        "Um gráfico mostrando rotação de equipe e escalas de plantão.",
        "Uma tabela simples acompanhando o desempenho planejado vs. real por mês para cada KPI.",
        "Uma classificação de funcionários por avaliações de desempenho.",
        "Uma visualização da alocação de recursos entre projetos."
      ],
      correctIndex: 1,
      explanation: "O <strong>gráfico bowler</strong> é uma tabela por KPI de planejado vs. real a cada mês com status vermelho/verde. É o dashboard operacional do Hoshin, atualizado nas revisões trimestrais."
    },
    {
      prompt: "Quando o Hoshin Kanri é a abordagem certa a usar?",
      options: [
        "Quando você está nos estágios iniciais de estabelecer a disciplina de MC.",
        "Quando um cliente maduro quer MC estratégica ligada a resultados mensuráveis — não iniciativas táticas dispersas.",
        "Ao implantar um único projeto de melhoria para uma equipe.",
        "Quando você precisa responder rapidamente a problemas operacionais urgentes."
      ],
      correctIndex: 1,
      explanation: "<strong>O Hoshin é para programas de MC maduros</strong> onde a liderança quer foco estratégico. Programas em estágio inicial devem estabelecer a disciplina do PDCA e rodar alguns Kaizens primeiro; o Hoshin formaliza o que já está acontecendo."
    }
  ]
}, "project-charter": {
  id: "project-charter",
  title: "Termo de Abertura do Projeto",
  group: "Estratégia & Governança",
  duration: "30 min",
  executiveSummary: "Um Termo de Abertura do Projeto é um documento de autorização de uma página que alinha patrocinador, líder, escopo, métrica de sucesso, cronograma e equipe antes de o trabalho de melhoria começar. Ele impede o desvio de escopo travando a declaração do problema, o objetivo e os limites com a assinatura do patrocinador — convertendo intenção ambígua em um contrato defensável.",
  whatYouGain: [
    "Parar o aumento de escopo: declaração de problema explícita e escopo travado defendem contra pedidos de 'já que estamos aqui'",
    "Alinhar o compromisso do patrocinador: a assinatura converte uma lista de desejos em autorização vinculante",
    "Nomear a equipe e o tempo: alocações percentuais realistas impedem projetos com recursos insuficientes",
    "Definir o sucesso antecipadamente: metas mensuráveis ligadas ao CTQ impedem 'melhoria' vaga",
    "Reutilizar o termo de abertura como o entregável da fase Definir do DMAIC — sem cerimônia extra"
  ],
  explanation: "<p>Um Termo de Abertura do Projeto é um contrato de uma página que autoriza um projeto de melhoria e alinha seu patrocinador, líder, escopo, métrica de sucesso, cronograma e equipe antes de o trabalho começar. A falha mais comum em projetos de melhoria é o desvio de escopo — \"já que estamos aqui, podemos também...?\"; o termo de abertura é a resposta institucional.</p><p><strong>Seções padrão:</strong> Declaração do problema (o que está errado, onde, desde quando, magnitude), Caso de negócio (por que importa agora, valor em $ ou estratégico, ligação ao COPQ), Objetivo (específico, mensurável, com prazo), No escopo (o que está incluído, ligado ao SIPOC), Fora do escopo (exclusões explícitas — pelo menos 3), Equipe (líder, patrocinador, membros, %tempo, consultores), Marcos/tollgates (datas de Definir-Medir-Analisar-Melhorar-Controlar), Riscos &amp; dependências (top 3–5, responsável pela mitigação) e Assinaturas (patrocinador, líder, dono do processo).</p><p><strong>Como escrevê-lo:</strong> Comece com a declaração do problema (específica, sem soluções). Esboce o caso de negócio (ligue a dólares ou objetivo estratégico). Defina o objetivo (SMART, extraído do CTQ se disponível). Liste o escopo e as exclusões explícitas (as exclusões são tão importantes quanto as inclusões). Nomeie a equipe e o compromisso de tempo realista. Defina marcos com datas de tollgate. Liste os principais riscos com responsáveis pela mitigação. Obtenha as assinaturas — sem elas o termo de abertura é uma lista de desejos.</p><p><strong>Antipadrão:</strong> nomear uma solução na declaração do problema (ex.: \"Implantar ArgoCD para melhorar os deploys\"). Isso prejulga a fase Analisar. Reformule como o problema (\"O tempo médio de implantação é de 47 min vs. meta de 10 min\") e deixe o DMAIC encontrar a contramedida certa.</p><p><strong>Quando pulá-lo:</strong> Termos de abertura são exagero para correções no mesmo dia e ciclos PDCA isolados por um único engenheiro. Use-os para a fase Definir do DMAIC, pré-trabalho de Kaizen (3+ dias), projetos entre equipes e certificação de Faixa.</p>",
  csamExample: "<p>Um CSAM está escopando um engajamento de melhoria de 12 semanas com a equipe de plataforma de pagamentos de um cliente. A equipe tem três líderes diferentes e três expectativas diferentes do que 'checkout mais rápido' significa. Em vez de 6 semanas de retrabalho, o CSAM insiste em um workshop de redação do termo de abertura: alinhamento do patrocinador, declaração do problema (LT de checkout atual = 387 seg vs. meta de 90 seg, 4 deploys/semana vs. meta de 8/dia), caso de negócio (US$ 600 mil/trimestre em carrinhos abandonados), objetivo (LT ≤90 min, 4 deploys/dia, 90 dias), escopo (fluxo de checkout + CI/CD, não a integração com o processador de pagamentos) e compromisso da equipe (líder + 2 engenheiros a 50% cada). As assinaturas travam todos. O próprio exercício do termo de abertura resolve as três expectativas diferentes; as próximas 4 semanas entregam o projeto real. O CSAM então usa o termo de abertura na QBR de 90 dias para mostrar o progresso contra o objetivo acordado e o caso de negócio.</p>",
  csaExample: "<p>Um CSA está definindo um projeto DMAIC para corrigir falhas ImagePullBackOff que causam 41% dos incidentes AKS do cliente. Declaração do problema: 'A assinatura ImagePullBackOff = 41% dos incidentes, 18 ocorrências/semana, custando US$ 85 mil/mês em resposta a incidentes.' Caso de negócio: 'Correção ligada ao objetivo de confiabilidade do Hoshin; zero desta assinatura = ganho de disponibilidade não planejada.' Objetivo: 'Zero assinatura ImagePullBackOff, 90 dias.' Escopo: 'Falhas de auth do registro, problemas de manifesto de imagem, limites de quota.' Fora do escopo: 'Outras assinaturas de falha de pod (projetos separados), varredura de imagem.' Equipe: 'Líder SRE (100%), engenheiro de plataforma (50%), CSA (consultivo).' Marcos: Definir (semana 1), Medir (semana 3), Analisar (semana 6), Melhorar (semana 10), Controlar (semana 12). Risco: 'Capacidade da equipe de registro — responsável pela mitigação = líder SRE.' Termo de abertura assinado pelo VP de plataforma, líder SRE e CTO. A revisão trimestral mostra 8 semanas até zero incidentes; a fase Controlar estabelece monitoramento e runbook.</p>",
  recap: [
    "O Termo de Abertura do Projeto é um contrato de uma página que autoriza um projeto e trava o compromisso do patrocinador com assinaturas",
    "Seções padrão: declaração do problema, caso de negócio, objetivo (SMART), escopo, fora-do-escopo explícito, equipe, marcos, riscos",
    "Antipadrão: nomear uma solução na declaração do problema — deixe a fase Analisar do DMAIC descobrir a contramedida certa",
    "Itens explícitos de fora-do-escopo são tão importantes quanto as inclusões — eles defendem contra o aumento de escopo meses depois",
    "Use termos de abertura para a fase Definir do DMAIC, pré-trabalho de Kaizen, projetos entre equipes e projetos de certificação de Faixa",
    "Sem a assinatura do patrocinador o termo de abertura é uma lista de desejos — as assinaturas convertem intenção em compromisso vinculante"
  ],
  questions: [
    {
      prompt: "Qual é a falha mais comum em projetos de melhoria que um Termo de Abertura do Projeto previne?",
      options: [
        "Orçamento insuficiente para o projeto.",
        "Desvio de escopo — pedidos de \"já que estamos aqui, podemos também...\".",
        "Aprovação lenta da liderança.",
        "Falta de talento técnico na equipe."
      ],
      correctIndex: 1,
      explanation: "O termo de abertura força declaração do problema, objetivo e escopo explícitos <em>antes</em> de o trabalho começar e trava o compromisso do patrocinador com uma assinatura. É a resposta ao <strong>desvio de escopo</strong> depois."
    },
    {
      prompt: "Qual item é essencial incluir no termo de abertura — mesmo que a equipe queira pulá-lo?",
      options: [
        "Diretrizes de marca e templates de slides.",
        "Itens explícitos de Fora-do-Escopo (pelo menos três).",
        "Uma linha do tempo histórica de cada tentativa anterior.",
        "Endereços de e-mail de cada stakeholder individual."
      ],
      correctIndex: 1,
      explanation: "As <strong>exclusões explícitas são tão importantes quanto as inclusões</strong>. Elas impedem o aumento de escopo de \"já que estamos aqui\" e tornam os limites aplicáveis meses depois quando novos pedidos chegam."
    },
    {
      prompt: "Qual é um antipadrão ao escrever a declaração do problema em um termo de abertura?",
      options: [
        "Declarar a magnitude (tamanho, frequência, quando começou).",
        "Ligar o caso de negócio ao COPQ.",
        "Nomear a solução na declaração do problema — ex.: \"Implantar ArgoCD para melhorar os deploys.\"",
        "Ligar o objetivo a um CTQ."
      ],
      correctIndex: 2,
      explanation: "Nomear uma solução <strong>prejulga a fase Analisar</strong>. Reformule como o problema (\"os deploys demoram muito — média de 47 min vs. meta de 10 min\") e deixe o DMAIC encontrar a contramedida certa."
    },
    {
      prompt: "Quando um Termo de Abertura do Projeto é tipicamente exagero?",
      options: [
        "Fase Definir do DMAIC.",
        "Eventos Kaizen com duração de 3+ dias.",
        "Uma correção no mesmo dia ou um ciclo PDCA isolado por um único engenheiro.",
        "Projetos de certificação de Faixa (Verde/Preta)."
      ],
      correctIndex: 2,
      explanation: "Termos de abertura são obrigatórios para DMAIC, pré-trabalho de Kaizen e projetos entre equipes. São <strong>exagero para correções no mesmo dia</strong> e ciclos PDCA solo — a cerimônia deve corresponder à escala."
    },
    {
      prompt: "Por que as assinaturas (patrocinador, líder, dono do processo) importam em um termo de abertura?",
      options: [
        "Elas satisfazem um requisito de auditoria de conformidade.",
        "Sem elas o termo de abertura é uma lista de desejos — as assinaturas travam o compromisso do patrocinador e desbloqueiam a equipe para gastar ciclos.",
        "São necessárias para publicar na intranet da empresa.",
        "Elas provam que a equipe leu o documento."
      ],
      correctIndex: 1,
      explanation: "As assinaturas convertem um rascunho em um <strong>compromisso</strong>. O patrocinador concorda em remover bloqueios; o líder é dono da entrega; o dono do processo aceita o processo controlado. Sem isso, o termo de abertura é decoração."
    }
  ]
}
};
