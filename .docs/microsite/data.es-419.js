/* iCSU Smart CI - Contenido de los módulos de entrega de 30 minutos (Español de Latinoamérica / es-419).
   Traducción de data.js. Estructura idéntica a window.MODULES; correctIndex preservado.
   Cargado antes de i18n.js; expuesto como window.MODULES_ES. */
window.MODULES_ES = {
"intro": {
  id: "intro",
  title: "Introducción a la Mejora Continua",
  group: "Fundamentos",
  duration: "30 min",
  executiveSummary: "La Mejora Continua (MC) es la práctica disciplinada de realizar cambios pequeños y basados en evidencia sobre un sistema, con una cadencia repetible, de modo que la capacidad, la calidad y la velocidad se potencien con el tiempo. Para los CSA es el modelo operativo que transforma la persecución reactiva de tickets en una planificación proactiva del compromiso: observar el patrimonio de Azure de un cliente, identificar la brecha de mayor impacto, ejecutar un pequeño experimento (PDCA), medir el resultado y estandarizar lo que funcionó. La MC no es un proyecto puntual: es el hábito que mantiene compuestas, trimestre tras trimestre, las revisiones de WAF, las optimizaciones de costos, las mejoras de confiabilidad y las inversiones en capacitación.",
  whatYouGain: [
    "Comprender el ciclo PDCA y cuándo aplicarlo a los compromisos con clientes",
    "Aprender a identificar la oportunidad de mejora de mayor impacto usando análisis de Pareto e Ishikawa",
    "Medir el cambio y tomar decisiones basadas en datos sobre qué estandarizar",
    "Reconocer cuándo la capacitación es la intervención correcta en lugar de ejecutar un ciclo de MC",
    "Estructurar un modelo de compromiso continuo en torno a una cadencia de MC de 6 semanas en lugar de proyectos puntuales"
  ],
  explanation: "<p>La <strong>Mejora Continua</strong> es un sistema de cambios pequeños, deliberados y medidos, arraigado en el Sistema de Producción de Toyota y formalizado por Deming. El motor canónico es PDCA: <strong>Planificar</strong> (Plan) un cambio dirigido a una brecha específica, <strong>Hacer</strong> (Do) ese cambio a pequeña escala, <strong>Verificar</strong> (Check) los datos, <strong>Actuar</strong> (Act) estandarizando o descartando el cambio. La MC tiene éxito porque la línea base de cada ciclo se convierte en el punto de partida del siguiente, potenciando las ganancias.</p><p>Los componentes clave que hacen funcionar a la MC son <strong>Kaizen</strong> (preferencia por muchas mejoras pequeñas en lugar de pocas grandes), el <strong>trabajo estándar</strong> (una vez validado, un cambio se convierte en la nueva línea base), <strong>Gemba</strong> (las decisiones se toman donde ocurre el trabajo, con datos reales) y el <strong>respeto por las personas</strong> (las mejoras provienen del equipo que opera el sistema). Un CSA que ejecuta MC está ejecutando una cadencia repetitiva, no entregando un proyecto.</p><p>¿Cuándo es la MC la intervención correcta? Úsala cuando el compromiso es continuo, el cliente tiene datos medibles, el liderazgo financiará pequeñas inversiones repetidas y el sistema es lo suficientemente complejo como para que un cambio radical sea arriesgado. <strong>No uses la MC</strong> para verdaderos incidentes de emergencia (ejecuta primero el mando de incidentes), plazos de cumplimiento estrictos (ejecuta un proyecto y luego mantenlo con MC) ni talleres puntuales sin seguimiento.</p><p>Una distinción crítica: la MC presupone una competencia de base. Cuando los datos muestran que los operadores no pueden ejecutar el trabajo estándar, <strong>la capacitación es el prerrequisito</strong>, no un ciclo PDCA. Si el gráfico de control muestra un proceso que se ubica enteramente fuera de los límites de control con una forma estable, eso es un defecto de capacidad, no un defecto de proceso. Capacita primero al equipo y luego aplica la MC sobre una línea base estable.</p>",
  csamExample: "<p>Un CSAM hereda una cuenta estratégica donde el modelo de compromiso anterior era apagar incendios: aparecer cuando los incidentes se disparan, entregar una presentación de diapositivas y seguir adelante. Tras seis meses de esfuerzo no estructurado, el volumen de incidentes no ha cambiado y la cuenta está en riesgo de abandono. El CSAM reinicia el compromiso en torno a una cadencia de MC de 6 semanas. Junto con el líder de plataforma del cliente, establecen la línea base del volumen de incidentes (312 Sev B/C por mes), ejecutan un Pareto para identificar las 3 firmas principales y diseñan una pequeña hipótesis para el primer ciclo (p. ej., «Agregar un punto de conexión privado a ACR reducirá los incidentes de ImagePullBackOff»). Tras medir y estandarizar ese cambio, eligen la siguiente hipótesis. Tres ciclos después, los incidentes han bajado un 54% y el cliente percibe un valor de negocio medible. El modelo de compromiso del CSAM ahora se potencia porque el resultado de cada ciclo es la línea base del siguiente.</p>",
  csaExample: "<p>Un CSA es asignado a una cuenta de Nivel 1 que ejecuta 40 microservicios en AKS. En lugar de proponer una revisión integral de la confiabilidad, el CSA lo plantea como una cadencia de MC: cada 2 semanas, establecer la línea base del Pareto de incidentes, elegir la firma principal, ejecutar un experimento de 1 semana (p. ej., agregar redundancia de zona a una sola carga de trabajo, habilitar límites de memoria de pods, configurar el autoescalado de CoreDNS), medir el resultado y estandarizar en IaC. Después de 6 meses, hay 14 cambios específicos implementados, el volumen de incidentes ha bajado un 68% y el equipo de SRE del cliente es dueño de la cadencia. El CSA todavía revisa los PR y ayuda a diseñar hipótesis, pero el cliente ejecuta el bucle de forma independiente. El trabajo estándar se versiona en la organización de GitHub del cliente; los nuevos ingenieros se incorporan contra él, no contra la asesoría del CSA.</p>",
  recap: [
    "PDCA es el bucle central: Planificar un cambio pequeño, Hacerlo a pequeña escala, Verificar los datos, Actuar estandarizando o descartando",
    "Las ganancias compuestas provienen de repetir el ciclo con una cadencia consistente: cada resultado se convierte en la siguiente línea base",
    "Usa Pareto, Ishikawa y los 5 Porqués para identificar la brecha de mayor impacto antes de planificar el cambio",
    "La medición de la línea base es esencial: sin ella, el Verificar es una opinión y la estandarización es una conjetura",
    "La MC no es un proyecto; es un modelo operativo. El éxito es que el cliente ejecute el bucle sin el CSA",
    "Cuando los datos muestran que las personas no pueden ejecutar el trabajo estándar, la intervención es la capacitación, no un ciclo PDCA"
  ],
  questions: [
    {
      prompt: "¿Qué significa PDCA?",
      options: ["Diseño de Proceso, Evaluación de Capacidad.", "Planificar, Hacer, Verificar, Actuar.", "Priorizar, Desarrollar, Confirmar, Aprobar.", "Problema, Datos, Causa, Acción."],
      correctIndex: 1,
      explanation: "<strong>PDCA</strong> es el bucle de Deming: <strong>Planificar</strong> un cambio en una brecha específica, <strong>Hacerlo</strong> a pequeña escala, <strong>Verificar</strong> los datos, <strong>Actuar</strong> estandarizando o descartando. Es el motor central de la MC."
    },
    {
      prompt: "¿Cuál es el objetivo principal de la Mejora Continua?",
      options: ["Completar un gran proyecto de transformación por año.", "Realizar cambios pequeños y basados en evidencia con una cadencia repetible para que las ganancias se potencien.", "Eliminar todos los problemas de inmediato al descubrirlos.", "Maximizar la utilización de los recursos de ingeniería."],
      correctIndex: 1,
      explanation: "La MC logra <strong>ganancias compuestas</strong> mediante muchos cambios pequeños, deliberados y medidos, no mediante pocos cambios grandes. La línea base de cada ciclo es el resultado del ciclo anterior."
    },
    {
      prompt: "Antes de poder ejecutar el Verificar en PDCA, ¿qué debe existir ya?",
      options: ["Aprobación ejecutiva y asignación de presupuesto.", "Una línea base medible de la fase de Planificar.", "Una lista de todas las posibles causas del problema.", "Acuerdo sobre qué métrica optimizar."],
      correctIndex: 1,
      explanation: "Sin una <strong>medición de línea base</strong>, la fase de Verificar es una opinión. Debes conocer el estado actual con datos en los que el equipo confíe antes de aplicar un cambio y medir la diferencia."
    },
    {
      prompt: "¿Cuál es el criterio de salida del CSA para un compromiso de MC exitoso?",
      options: ["El cliente ha completado tres ciclos PDCA.", "Se han implementado todas las recomendaciones de la evaluación inicial.", "El cliente ejecuta el bucle sin el CSA.", "El cliente ha logrado la mayor mejora posible."],
      correctIndex: 2,
      explanation: "El éxito en la MC significa que <strong>el cliente ejecuta la cadencia de forma independiente</strong>. El CSA asesora el bucle; el éxito llega cuando el cliente es dueño de él y el CSA puede retirarse sin que haya regresión."
    },
    {
      prompt: "¿Cuál de estos NO es un componente de la Mejora Continua?",
      options: ["El trabajo estándar que captura los cambios validados.", "Una transformación puntual o la compra de una herramienta.", "Las caminatas Gemba para observar el trabajo real.", "El respeto por las personas que operan el sistema."],
      correctIndex: 1,
      explanation: "La MC <strong>no</strong> es una transformación puntual, una compra de herramientas, una certificación ni una plantilla de diapositivas. Es una cadencia repetitiva que produce ganancias duraderas mediante cambios pequeños y sistemáticos."
    }
  ]
},
"belts": {
  id: "belts",
  title: "Aprendizaje, Cinturones y Certificación",
  group: "Fundamentos",
  duration: "30 min",
  executiveSummary: "Las certificaciones de Lean y Six Sigma usan una metáfora de cinturones de artes marciales —Blanco, Amarillo, Verde, Negro, Maestro Cinturón Negro— para señalar la profundidad de la capacidad de mejora continua, desde conocer el vocabulario hasta diseñar la estrategia de MC de toda la organización. Para los CSA la escalera de cinturones es útil como hoja de ruta personal de capacitación, como una credencial que los clientes reconocen (especialmente en industrias reguladas) y como un marco de asesoría para los equipos de los clientes. El principio clave: tratar cada cinturón como la formalización de una capacidad que ya deberías estar demostrando en compromisos reales; las credenciales van detrás del trabajo, no al revés.",
  whatYouGain: [
    "Comprender la escalera de cinturones desde el Cinturón Blanco (vocabulario) hasta el Maestro Cinturón Negro (diseña la estrategia de MC)",
    "Saber qué cinturón perseguir a continuación según la brecha que debas demostrar, no el más alto disponible",
    "Aprender a elegir el organismo certificador adecuado (ASQ, IASSC, programas de consultoría) para tu base de clientes",
    "Ver cómo tratar el proyecto de mejora requerido como la credencial en sí, no como un obstáculo para el trabajo real",
    "Usar el conocimiento de los cinturones para enmarcar las conversaciones con los clientes y ajustar tu lenguaje a su nivel de experiencia"
  ],
  explanation: "<p>La metáfora del cinturón se origina en Six Sigma, pero se aplica a lo largo de Lean, TPS y la práctica de MC. Si bien los estándares globales varían, los conceptos de nivel son consistentes. El <strong>Cinturón Blanco</strong> (~8 horas) es conciencia: comprender el vocabulario, reconocer las herramientas (Pareto, Ishikawa, los 5 Porqués, Kaizen), pero no ejecutarlas. El <strong>Cinturón Amarillo</strong> (~20–40 horas) es de nivel practicante: participar en un evento Kaizen, ejecutar los 5 Porqués sobre un problema confirmado, contribuir a un Ishikawa. El <strong>Cinturón Verde</strong> (~80–120 horas más un proyecto real) lidera proyectos de mejora de pequeña a mediana escala de principio a fin, cómodo con DMAIC, estadística básica y mapeo de procesos.</p><p>El <strong>Cinturón Negro</strong> (~160–200 horas más múltiples proyectos) lidera programas de mejora multifuncionales con estadística profunda, pensamiento lean avanzado, gestión del cambio y mentoría de Cinturones Verdes. El <strong>Maestro Cinturón Negro</strong> capacita y certifica a los Cinturones Negros y diseña la estrategia de MC de una organización. Las opciones de credencial importan: los cinturones <strong>Lean</strong> enfatizan el desperdicio y el flujo; <strong>Six Sigma</strong> enfatiza la variación; <strong>Lean Six Sigma</strong> es el plan de estudios combinado que usan la mayoría de las empresas. <strong>DMAIC</strong> mejora procesos existentes; <strong>DMADV / DFSS</strong> diseña procesos nuevos.</p><p>Las credenciales acreditadas (ASQ, IASSC) tienen más peso en industrias reguladas; los cinturones de consultoría suelen ser adecuados en el sector tecnológico. El punto de decisión crítico: <strong>no persigas cinturones por sí mismos</strong>. Un CSA con 5 cinturones y sin resultados de compromiso validados es menos eficaz que uno con un Cinturón Verde y un historial de victorias medibles con clientes. Elige el cinturón que codifique la próxima capacidad que necesitas, no el más alto disponible.</p>",
  csamExample: "<p>Un CSAM trabaja en el sector de servicios financieros, donde Lean Six Sigma es una expectativa de base. El CSAM ha ejecutado muchas mejoras pequeñas con clientes pero carece de credenciales formales. Durante una conversación de incorporación con la oficina de programas de un banco Fortune 500, le preguntan: «¿Qué cinturón tienes?». El CSAM responde con honestidad: «No he buscado una certificación formal, pero he liderado siete ciclos de mejora medidos con resultados como estos [muestra el Pareto y la variación de costos]. Planeo obtener el Cinturón Verde en el segundo trimestre para formalizar esa capacidad». El banco valora más la transparencia y el trabajo demostrado que la insignia; invitan al CSAM a diseñar el compromiso. El Cinturón Verde, cuando se obtenga, se convertirá en evidencia que corrobora lo que el CSAM ya ha demostrado en el campo.</p>",
  csaExample: "<p>Un CSA que da soporte a un cliente del sector salud ha estado usando Pareto y los 5 Porqués de forma ad hoc durante 18 meses. Su gerente le sugiere buscar un Cinturón Verde para formalizar el siguiente nivel: DMAIC, gráficos de control, mapeo del flujo de valor. El CSA define un proyecto real con un cliente como su proyecto final de Cinturón Verde: un ciclo de optimización de Cosmos DB de 90 días que redujo el consumo de RU/s en un 38% y ahorró 14.000 USD por mes. Elige a ASQ como organismo certificador (reconocido en el sector salud), completa el plan de estudios de 100 horas durante 12 semanas y presenta el compromiso medido con el cliente como su requisito de proyecto. El CSA aprueba; el cliente recibe mejoras validadas; la organización gana otro facilitador acreditado para los programas de MC empresariales. Al tratar la necesidad real del cliente como el requisito del proyecto, el CSA crea dos resultados a partir de un solo compromiso.</p>",
  recap: [
    "La escalera de cinturones señala la profundidad de la capacidad de MC: Blanco (vocabulario) hasta Maestro Negro (diseña la estrategia)",
    "Elige el cinturón que formaliza la próxima brecha de capacidad que debes demostrar, no el más alto disponible",
    "Las credenciales de Cinturón Verde y Negro requieren un proyecto de mejora real y medido; ese proyecto es la credencial",
    "Elige programas acreditados (ASQ, IASSC) para industrias reguladas; los programas de consultoría son adecuados en otros casos",
    "Coleccionar cinturones sin resultados demostrados con clientes es un pasivo, no una credencial",
    "Construye un mapa de cinturones del lado del cliente para saber si hablas con un Amarillo, un Verde o un Negro; ajusta el lenguaje en consecuencia"
  ],
  questions: [
    {
      prompt: "¿Qué señala principalmente la escalera de cinturones de Lean Six Sigma sobre un practicante?",
      options: ["Años de experiencia como CSA en Microsoft.", "La profundidad de la capacidad de mejora continua, desde conocer el vocabulario hasta liderar la estrategia de MC de toda la organización.", "Cuántos compromisos con clientes ha cerrado en el último trimestre.", "Su calificación de desempeño interno."],
      correctIndex: 1,
      explanation: "La escalera de cinturones es una forma compartida de hablar sobre <strong>cuán profunda</strong> es la capacidad de MC, desde Blanco (vocabulario y conciencia) hasta Maestro Negro (diseña la estrategia de MC de una organización). Es una señal de capacidad, no una métrica de antigüedad o desempeño."
    },
    {
      prompt: "¿Cómo debería decidir un CSA qué cinturón perseguir a continuación?",
      options: ["Perseguir siempre el cinturón más alto que la organización financie.", "Igualar el cinturón que tenga el líder de MC más sénior del cliente.", "Elegir el cinturón que formaliza la próxima brecha de capacidad que debería estar demostrando en compromisos reales.", "Perseguir los cinturones en orden estricto con una cadencia anual fija, sin importar el trabajo."],
      correctIndex: 2,
      explanation: "La orientación es <strong>elegir el cinturón que formaliza la próxima brecha</strong>, no el más alto disponible. Un CSA que nunca ha ejecutado un Kaizen real debería buscar el Amarillo, no el Negro. Las credenciales deben ir detrás del trabajo, no al revés."
    },
    {
      prompt: "Para las certificaciones de Cinturón Verde y Cinturón Negro, ¿cuál es el &ldquo;sentido&rdquo; de la certificación?",
      options: ["Aprobar el examen de opción múltiple.", "Completar las horas requeridas de capacitación en aula.", "Entregar un proyecto de mejora real y medido: el proyecto es la credencial y el examen es la formalidad.", "Unirse a la red de exalumnos del organismo certificador."],
      correctIndex: 2,
      explanation: "Los programas de Cinturón Verde/Negro requieren un proyecto de mejora real con resultados medidos. El consejo es elegir ese proyecto del <strong>trabajo real con clientes</strong>, no de un caso artificial, para que el mismo compromiso produzca tanto valor para el cliente como la credencial."
    },
    {
      prompt: "¿Cuál es el antipatrón de &ldquo;coleccionar cinturones&rdquo; descrito en la guía?",
      options: ["Tener cinturones de más de un organismo de acreditación.", "Acumular cinturones sin resultados de compromiso validados que los respalden.", "Recertificar los cinturones cada año.", "Listar las credenciales de cinturón en los manuales internos."],
      correctIndex: 1,
      explanation: "Un CSA con cinco cinturones y sin resultados de compromiso validados es <strong>menos eficaz</strong> que uno con un Cinturón Verde y un historial de victorias medibles con clientes. La credencial es evidencia que corrobora, no un sustituto del trabajo."
    },
    {
      prompt: "¿En qué se diferencia el Maestro Cinturón Negro del Cinturón Negro?",
      options: ["Es el mismo alcance pero con un examen más largo.", "Es una credencial exclusivamente de liderazgo sin contenido técnico.", "Capacita y certifica a los Cinturones Negros y diseña la estrategia de MC de la organización: una credencial de enseñanza tanto como de ejecución.", "Se otorga automáticamente tras tener el Cinturón Negro durante cinco años."],
      correctIndex: 2,
      explanation: "El Maestro Cinturón Negro es poco común y normalmente lo posee el responsable de una función de MC / excelencia operativa. Ellos <strong>capacitan y certifican a los Cinturones Negros</strong> y dan forma al diseño del programa de MC de la organización."
    }
  ]
},
"ms-ci-cop": {
  id: "ms-ci-cop",
  title: "Mejora Continua @ Microsoft",
  group: "Fundamentos",
  duration: "30 min",
  executiveSummary: "La Mejora Continua en Microsoft es el tejido conectivo entre la práctica de los CSA de cara al cliente y los grupos de ingeniería que construyen Azure. Se manifiesta como la Comunidad de Práctica de MC de iCSU, los bucles de retroalimentación de WAF y Advisor, los repositorios de manuales de los CSA y los rituales entre equipos que potencian los aprendizajes en toda la organización. Para un CSA es tanto un recurso (capacitación, manuales, pares) como una responsabilidad (contribuir con los patrones que validas, escalar los problemas sistémicos a los grupos de producto). Bien ejecutada, la MC@MS convierte cada compromiso con un cliente en un resultado para ese cliente y, a la vez, en un activo reutilizable para cada CSA que venga después.",
  whatYouGain: [
    "Comprender cómo la MC@MS agrega los aprendizajes de miles de CSA y los retroalimenta a los grupos de producto de Azure",
    "Aprender a consumir manuales existentes (WAF, Biblioteca de Manuales de CSA, Azure Advisor) en lugar de reinventar patrones de compromiso",
    "Saber cómo contribuir con patrones validados de vuelta a la comunidad y observar cómo se potencian en toda la organización",
    "Ver cómo la señal del campo (Paretos de incidentes entre cuentas, bloqueadores de ACR) impulsa mejoras a nivel de producto",
    "Reconocer el panorama de acreditación de cinturones en Microsoft y elegir a ASQ como opción predeterminada para la certificación Lean Six Sigma"
  ],
  explanation: "<p>La MC@MS existe para resolver un problema de escala: un solo CSA es dueño de un puñado de cuentas, pero Microsoft tiene miles de CSA y decenas de miles de clientes. Sin una práctica de MC que agregue los aprendizajes, cada CSA redescubre los mismos patrones, cada cliente revive los mismos incidentes y los grupos de producto no escuchan la señal con la claridad suficiente para corregir las causas raíz. La MC@MS es el bucle de retroalimentación que convierte las observaciones del campo en mejoras de producto.</p><p>Lo que distingue a las estructuras de la MC@MS es que son <strong>medidas, versionadas, con dueño y reutilizables</strong>. Cada patrón publicado lleva la evidencia de que funcionó. Los manuales evolucionan ciclo tras ciclo; las versiones antiguas se descontinúan, no se eliminan. Cada manual tiene un responsable de mantenimiento designado y una cadencia de actualización. Los patrones se escriben para que el siguiente CSA los aplique, no como anécdotas. Las superficies principales incluyen la Comunidad de Práctica de MC de iCSU, el marco de evaluación WAF, Azure Advisor y Defender for Cloud como líneas base por cuenta, los manuales versionados de CSA / CSE / FastTrack, el plan de estudios de MS Learn y los canales estructurados de escalamiento de campo a PG (bloqueadores de ACR, análisis de firmas de ICM).</p><p>El ritmo de participación en la comunidad es sencillo: consumir los manuales existentes antes de diseñar un nuevo compromiso; ejecutar PDCA sobre trabajo real con clientes; documentar los resultados medidos; llevar los patrones a la llamada mensual de la CoP; dejar que los pares revisen y critiquen; fusionar los patrones validados en bibliotecas compartidas. Los CSA tanto consumen como contribuyen. Omitir cualquiera de los dos lados rompe el bucle. Cuando la misma causa raíz aparece en 3 o más cuentas, eso es una conversación con el PG, no una solución alternativa de un CSA. Usa los canales de bloqueadores de ACR o de firmas de ICM para escalar las señales sistémicas de modo que ingeniería pueda priorizar las correcciones.</p>",
  csamExample: "<p>Un CSAM está preparando una EBR para una cuenta estratégica de Nivel 1 y quiere establecer la línea base de la postura de confiabilidad y costos del cliente. En lugar de empezar desde cero, el CSAM consulta los recursos de la MC@MS: el manual de Confiabilidad de WAF (evaluación estándar, puntuación estandarizada, estructura probada del backlog de remediación), el panel de Pareto de incidentes entre cuentas (muestra si las firmas de incidentes de esta cuenta coinciden con los patrones de la industria) y la plantilla de exportación de Azure Advisor (extracción rápida de datos). El tiempo de ensamblaje baja de 2 días a 3 horas. La presentación es revisada por pares contra el trabajo estándar de EBR de la CoP antes de la entrega. Luego el CSAM estructura el compromiso de seguimiento como un ciclo de MC de 6 semanas: elegir el principal hallazgo de confiabilidad, ejecutar un cambio pequeño, medir el resultado y estandarizar en la IaC del cliente. Después de tres ciclos, el cliente tiene ganancias de confiabilidad medibles y percibe un valor compuesto.</p>",
  csaExample: "<p>Un CSA que ejecuta compromisos de AKS nota que las claves de partición jerárquica (HPK) de Cosmos DB reducen el consumo de RU/s en un 35–40% en tres de sus cuentas. En lugar de mantener el patrón como un manual personal, lo documenta en el Repositorio de Diseño de Azure del cliente con métricas de antes y después, da una charla relámpago de 5 minutos en la reunión mensual de la CoP y lo envía para revisión por pares. Dos CSA del dominio de Cosmos dan retroalimentación; una ronda de revisiones; se fusiona en el manual de CSA de Datos con un módulo de IaC versionado. Seis meses después, otros 6 CSA han aplicado el mismo patrón a sus cuentas. El experimento validado de un solo CSA se convirtió en trabajo estándar que ahora se potencia en toda la organización. Cuando el CSA escala un problema sistémico —«Contenedores de Cosmos creados sin rutas de partición indexadas en 8 cuentas»—, la evidencia agregada va al grupo de producto; la experiencia del portal se actualiza con un recomendador de indexación.</p>",
  recap: [
    "La MC@MS es el tejido conectivo entre los aprendizajes del campo y las prioridades de los grupos de producto: convierte la observación de un CSA en una mejora para toda la organización",
    "Cada CSA consume los manuales existentes (WAF, Biblioteca de Manuales de CSA, guía de Advisor) antes de iniciar un nuevo compromiso",
    "Contribuye con patrones validados de vuelta a la CoP; deja que los pares los revisen; fusiónalos en bibliotecas compartidas; observa cómo se potencian en miles de CSA",
    "Cuando la misma causa raíz aparece en 3 o más cuentas, escálala como una señal del campo (bloqueador de ACR o firma de ICM) a los grupos de producto, no como una solución alternativa de un CSA",
    "ASQ es el organismo predeterminado de acreditación de cinturones en Microsoft; el progreso de los cinturones se monitorea junto con la graduación de proyectos y la mentoría",
    "La MC@MS misma funciona con MC: los manuales se versionan y se actualizan en cada ciclo; los patrones antiguos se descontinúan a medida que Azure evoluciona"
  ],
  questions: [
    {
      prompt: "¿Cuál es el propósito principal de la Mejora Continua en Microsoft (MC@MS)?",
      options: ["Reemplazar los planes de compromiso específicos de cada cliente con una única plantilla corporativa.", "Agregar los aprendizajes de los CSA y proporcionar un bucle de retroalimentación basado en datos desde el campo hacia los grupos de producto.", "Certificar a los CSA en los servicios de Azure.", "Proporcionar un sistema centralizado de registro de tiempo para la práctica de los CSA."],
      correctIndex: 1,
      explanation: "La MC@MS es el tejido conectivo entre el campo y la ingeniería. <strong>Agrega patrones</strong> para que el PG pueda priorizar las correcciones, codifica los patrones de compromiso validados en manuales compartidos y convierte la observación de un CSA en una mejora a nivel de producto."
    },
    {
      prompt: "¿Qué distingue a un manual de la MC@MS de una &ldquo;wiki interna de consejos&rdquo; genérica?",
      options: ["Los manuales solo son accesibles para los CSA sénior.", "Los manuales se generan automáticamente a partir de la telemetría de Azure.", "Los manuales son medidos, versionados, con un responsable de mantenimiento designado y una cadencia de actualización, y están escritos para ser reutilizables.", "Los manuales son escritos exclusivamente por los grupos de producto."],
      correctIndex: 2,
      explanation: "Cada patrón publicado lleva la <strong>evidencia de que funcionó</strong>, evoluciona ciclo tras ciclo, tiene un dueño designado y está escrito para que el siguiente CSA lo aplique, no como una anécdota."
    },
    {
      prompt: "Un CSA detecta que la misma limitación de producto aparece en tres o más de sus cuentas. ¿Qué recomienda la MC@MS que haga?",
      options: ["Construir una solución alternativa privada por cuenta y seguir adelante.", "Esperar hasta la próxima revisión trimestral para mencionarlo.", "Agregar la evidencia como un Pareto entre cuentas y escalarla a través del canal de bloqueadores de ACR o de firmas de ICM hacia el PG.", "Registrar un incidente Sev A en cada suscripción afectada."],
      correctIndex: 2,
      explanation: "Cuando la misma causa raíz aparece en múltiples cuentas, eso es una <strong>conversación con el PG, no una solución alternativa de un CSA</strong>. Los canales de señal de campo a PG (rastreador de bloqueadores de ACR, análisis de firmas de ICM) existen para convertir la evidencia agregada en MC a nivel de producto."
    },
    {
      prompt: "¿Qué organismo de acreditación monitorea el programa Lean Six Sigma de Microsoft para el progreso de los cinturones?",
      options: ["IASSC (International Association for Six Sigma Certification).", "CSSC (Council for Six Sigma Certification).", "ASQ (American Society for Quality).", "Shingo Institute."],
      correctIndex: 2,
      explanation: "El programa Lean Six Sigma de Microsoft monitorea el <strong>progreso de la certificación de ASQ</strong> junto con la graduación de proyectos y la mentoría. ASQ es la opción predeterminada al definir un cinturón, aunque otras organizaciones de Microsoft también pueden aceptar IASSC o CSSC; confírmalo con tu socio de negocios de RR. HH. antes de comprometerte."
    },
    {
      prompt: "¿Cuál es el antipatrón del &ldquo;genio solitario&rdquo; en la MC@MS?",
      options: ["Un CSA que escala cada problema directamente al PG sin intentar resolverlo primero.", "Un CSA que solo consume manuales pero nunca contribuye de vuelta.", "Un CSA que valida muchos patrones en sus cuentas pero nunca los publica, obligando a todos los demás CSA a redescubrir las mismas lecciones.", "Un CSA que trabaja sin un gerente o un revisor par."],
      correctIndex: 2,
      explanation: "La MC@MS es una práctica de muchos a muchos. El CSA genio solitario valida 30 patrones y nunca los publica: <strong>la organización paga el costo de que todos los demás CSA los redescubran</strong>. La contribución es la cuota de entrada para que el bucle se potencie."
    }
  ]
},
"data-types": {
  id: "data-types",
  title: "Comprender los Datos en la MC",
  group: "Fundamentos",
  duration: "30 min",
  executiveSummary: "La Mejora Continua funciona con datos, pero no todos los datos son del mismo tipo, y usar el tipo equivocado produce decisiones seguras pero erróneas. Este módulo da a los CSA un vocabulario práctico para cuatro distinciones de datos que aparecen en cada compromiso: empírico vs. teórico (realidad medida vs. expectativa modelada), cualitativo vs. cuantitativo (descriptivo vs. numérico), continuo vs. discreto (medido sobre un continuo vs. contado) y directo vs. circunstancial (evidencia de la cosa misma vs. un sustituto correlacionado). Saber qué tipo de datos tienes te dice qué herramienta estadística es válida, cuán grande debe ser tu muestra y cuánto peso puede soportar un hallazgo. La disciplina central: anclar cada decisión de MC en una medición empírica y directa de la métrica que importa, y tratar los modelos, los sustitutos y el sentimiento como insumos que te señalan hacia ella, no como prueba.",
  whatYouGain: [
    "Distinguir los datos empíricos (medidos) de los teóricos (modelados) y saber cuándo se puede confiar en cada uno",
    "Diferenciar los datos cuantitativos de los cualitativos, y convertir la señal cualitativa en algo que puedas medir",
    "Clasificar los datos como continuos o discretos y elegir el gráfico de control y el tamaño de muestra que correspondan",
    "Separar la evidencia directa de un problema de los sustitutos circunstanciales, y evitar las trampas de la correlación como causalidad",
    "Elegir el tipo de datos correcto para un CTQ de modo que tu línea base, análisis y fase de Control sigan siendo estadísticamente válidos"
  ],
  explanation: "<p>La Mejora Continua es tan buena como los datos que la alimentan. La trampa no son los datos faltantes: es usar el <strong>tipo equivocado</strong> de datos con la herramienta equivocada y llegar a una conclusión segura pero errónea. Cada medición lleva cuatro atributos a la vez, y nombrarlos mantiene honesto tu análisis.</p><p><strong>Empírico vs. teórico.</strong> Los datos empíricos se obtienen por observación, medición o experimento: los valores reales que produjo el sistema real (cuatro semanas de latencia P95 registrada, el conteo real de incidentes del mes pasado). Los datos teóricos los produce un modelo, una suposición o un cálculo de primeros principios: los valores que un sistema <em>debería</em> producir (la latencia predicha por un modelo de colas, una estimación de DPMO de una curva normal, un pronóstico de renovación). La teoría es invaluable para planificar, pero en la MC <strong>validas la teoría contra los datos empíricos</strong> y nunca estandarizas un cambio basándote solo en un modelo.</p><p><strong>Cualitativo vs. cuantitativo.</strong> Los datos cuantitativos son numéricos y medibles (latencia en ms, RU/s, costo, conteos) y admiten análisis estadístico. Los datos cualitativos son descriptivos o categóricos (testimonios literales de VOC, categorías de incidentes, temas de causa raíz, sentimiento). Lo cualitativo no es de segunda categoría: lo <strong>codificas en categorías nominales u ordinales y lo cuentas</strong>, convirtiendo el sentimiento en un Pareto de temas. Los dos trabajan juntos: los datos cualitativos te dicen <em>qué</em> medir; los cuantitativos te dicen <em>cuánto</em>.</p><p><strong>Continuo vs. discreto.</strong> Los datos continuos pueden tomar cualquier valor sobre un continuo (latencia, % de CPU, costo, temperatura) y son infinitamente divisibles. Los datos discretos se cuentan en unidades enteras (número de incidentes, implementaciones fallidas, defectos por versión): no puedes tener 2,5 implementaciones fallidas. La distinción es práctica: los datos continuos usan gráficos I-MR o X-bar/R y detectan un cambio con relativamente pocas muestras; los datos discretos de <strong>atributo</strong> usan gráficos p-, np-, c- o u- y necesitan una muestra mucho más grande para detectar el mismo cambio, porque cada resultado de pasa/falla lleva menos información que una medición.</p><p><strong>Directo vs. circunstancial.</strong> Los datos directos miden la métrica de interés en sí (la latencia P95 real cuando la latencia es el CTQ). Los datos circunstanciales —indirectos— miden un sustituto correlacionado a partir del cual razonas (% de CPU, volumen de tickets de soporte, inicios de sesión en el portal). La evidencia circunstancial es excelente para formar hipótesis y triar dónde mirar, pero una correlación no es prueba: <strong>la correlación no es causalidad</strong>. Reúne la medición directa del CTQ antes de tratar una causa como confirmada o de estandarizar una corrección.</p><p>Una sola métrica lleva los cuatro atributos simultáneamente. «Latencia P95 medida en ms» es empírica, cuantitativa, continua y directa: tan confiable como los datos pueden serlo. «Doce incidentes Sev-B etiquetados como redes este trimestre» es empírico, el conteo es cuantitativo y discreto, la etiqueta es cualitativa, y usar el conteo de incidentes para juzgar la confiabilidad es en parte circunstancial. Nombrar los atributos te dice exactamente cuánto se le puede pedir a ese número que demuestre.</p>",
  csamExample: "<p>Un CSAM está preparando una EBR para una cuenta estratégica y tiene sobre la mesa cuatro insumos muy diferentes: un tema cualitativo de VOC («el equipo de plataforma siente que las implementaciones son riesgosas»), una tendencia cuantitativa de consumo (gasto en AKS y ACR), una señal circunstancial (los inicios de sesión en el portal cayeron un 20% el mes pasado) y un pronóstico teórico de renovación que proyecta un crecimiento del 12%. Una presentación más débil reaccionaría al pronóstico o a la caída de inicios de sesión de forma aislada. En cambio, el CSAM se ancla en datos <strong>empíricos y directos</strong> —extrae el consumo real y el historial de incidentes— y codifica los testimonios literales de VOC en categorías de modo que la preocupación dominante (la confianza en las implementaciones) se convierta en un tema contado y cuantificado en lugar de una anécdota. El pronóstico se presenta como un modelo a poner a prueba, no como un hecho; la caída de inicios de sesión se marca como una hipótesis a investigar, no como una conclusión. La conversación de renovación tiene éxito porque descansa sobre una realidad medida, y el único tema cualitativo que importaba se convierte en un CTQ medible para el siguiente ciclo de MC.</p>",
  csaExample: "<p>Un CSA en un compromiso de confiabilidad de AKS escucha al cliente afirmar: «Los picos de CPU están causando nuestras infracciones del SLO de latencia», señalando un gráfico donde la CPU y la latencia suben juntas. La CPU es <strong>circunstancial</strong>: un sustituto, no el CTQ. El CSA reúne datos <strong>directos y empíricos</strong>: los percentiles de latencia P95/P99 reales (continuos) y el conteo de versiones que infringen el SLO (discreto). Como la latencia es continua, un gráfico I-MR / X-bar-R sobre ~20–25 subgrupos basta para ver el patrón; como el resultado de la implementación es un dato de atributo, el CSA sabe que un gráfico p- necesitaría una muestra mucho mayor para confirmar un cambio real. El gráfico de control de latencia muestra que las infracciones se agrupan tras los arranques en frío del reducción de escala, no con la CPU en absoluto. El CSA rechaza la suposición teórica, corrige la causa real (grupo precalentado / conteo mínimo de réplicas) y la estandariza en IaC. Tratar la correlación de la CPU como prueba habría llevado al equipo por el camino completamente equivocado.</p>",
  recap: [
    "Cada métrica lleva cuatro atributos a la vez —empírico/teórico, cualitativo/cuantitativo, continuo/discreto, directo/circunstancial—; nómbralos para mantener honesto el análisis",
    "Los datos empíricos (medidos) validan las expectativas teóricas (modeladas); nunca estandarices un cambio basándote solo en un modelo",
    "La señal cualitativa no es de segunda categoría: codifícala en categorías y cuéntala para que la VOC impulse un CTQ medible",
    "Los datos continuos usan gráficos I-MR / X-bar-R y necesitan menos muestras; los datos discretos de atributo usan gráficos p-/c-/u- y necesitan muestras mucho mayores",
    "La medición directa del CTQ es prueba; los sustitutos circunstanciales (CPU, tickets, inicios de sesión) forman hipótesis; la correlación no es causalidad",
    "Elige el tipo de datos de forma deliberada en Definir/Medir para que tu línea base, gráfico y fase de Control sigan siendo estadísticamente válidos"
  ],
  questions: [
    {
      prompt: "Un CSA extrae cuatro semanas de lecturas reales de latencia P95 de Azure Monitor para establecer la línea base de un proceso. ¿Qué tipo de datos es este?",
      options: ["Teórico, porque los percentiles son estimaciones estadísticas.", "Empírico, porque es una medición observada del sistema real.", "Cualitativo, porque la latencia describe la experiencia del usuario.", "Circunstancial, porque la latencia es solo un sustituto de la confiabilidad."],
      correctIndex: 1,
      explanation: "Los datos <strong>empíricos</strong> se obtienen por observación o medición del mundo real. Las lecturas reales de latencia registrada son empíricas; un modelo que <em>predice</em> la latencia sería teórico. Aunque un percentil es un resumen calculado, se calcula a partir de mediciones observadas, por lo que los datos son empíricos."
    },
    {
      prompt: "¿Cuál de estas métricas es un dato discreto (de atributo) en lugar de continuo?",
      options: ["La latencia promedio de las solicitudes en milisegundos.", "El porcentaje de utilización de la CPU.", "El número de implementaciones fallidas por versión.", "El gasto mensual en Azure en dólares."],
      correctIndex: 2,
      explanation: "Los datos discretos se cuentan en unidades enteras: no puedes tener 2,5 implementaciones fallidas. La latencia, el % de CPU y el costo son <strong>continuos</strong> (cualquier valor sobre un continuo). La distinción determina la elección del gráfico: los conteos usan gráficos p-/c-/u-, mientras que los valores continuos usan I-MR o X-bar/R."
    },
    {
      prompt: "Las entrevistas de VOC de un cliente producen docenas de comentarios de texto libre sobre el dolor de las implementaciones. ¿Cuál es la mejor manera de hacer que estos datos cualitativos sean utilizables en una línea base de MC?",
      options: ["Descartarlos, porque solo los datos numéricos pertenecen a una línea base.", "Tratar cada comentario individual como su propia causa raíz separada.", "Codificar los comentarios en categorías y contarlos para que el tema dominante pueda cuantificarse.", "Reenviarlos al grupo de producto sin más análisis."],
      correctIndex: 2,
      explanation: "Los datos cualitativos se vuelven accionables cuando se <strong>codifican en categorías y se cuentan</strong>, convirtiendo el sentimiento en un Pareto de temas. La señal cualitativa te dice qué medir; cuantificarla le permite impulsar un CTQ medible en lugar de quedarse como una anécdota."
    },
    {
      prompt: "Un equipo afirma que los picos de CPU son la causa raíz de las infracciones de latencia, citando un gráfico donde la CPU y la latencia suben ambas. Antes de estandarizar una corrección, ¿qué debería hacer un CSA?",
      options: ["Aceptarlo: dos líneas correlacionadas en un gráfico son prueba suficiente de causalidad.", "Reunir la medición directa del CTQ de latencia para probar la hipótesis, ya que la CPU es evidencia circunstancial.", "Aumentar los límites de la CPU de inmediato y cerrar la investigación.", "Reemplazar las mediciones con un modelo teórico de colas."],
      correctIndex: 1,
      explanation: "La CPU es un sustituto <strong>circunstancial</strong> (indirecto), y una correlación es una hipótesis, no una prueba. Se requiere la medición directa de la métrica que importa —el CTQ de latencia— antes de tratar una causa como confirmada. La correlación no es causalidad."
    },
    {
      prompt: "¿Por qué los datos de atributo (discretos) generalmente requieren una muestra mucho mayor que los datos continuos para detectar el mismo cambio de proceso?",
      options: ["Porque los datos de atributo no pueden graficarse en un gráfico de control.", "Porque cada medición continua lleva más información que un único resultado de pasa/falla.", "Porque los datos discretos siempre son teóricos en lugar de empíricos.", "Porque los datos continuos son inherentemente cualitativos."],
      correctIndex: 1,
      explanation: "Cada medición continua transmite más información que un único resultado discreto de pasa/falla, por lo que los datos continuos detectan un cambio con menos muestras. Los datos de atributo/conteo (proporción de defectuosos, conteos de defectos) necesitan muestras sustancialmente mayores para una sensibilidad equivalente: una consideración importante de tamaño de muestra al elegir una métrica."
    }
  ]
},
"convergent-divergent": {
  id: "convergent-divergent",
  title: "Pensamiento Convergente vs. Divergente",
  group: "Fundamentos",
  duration: "30 min",
  executiveSummary: "La Mejora Continua depende de dos modos de pensamiento opuestos usados en el orden correcto: el pensamiento divergente abre un problema generando muchas posibles causas, hipótesis y soluciones, y el pensamiento convergente lo cierra usando evidencia para seleccionar la mejor respaldada. Una razón frecuente por la que fallan los ciclos de MC es colapsar estos dos modos en uno solo: saltar a una conclusión antes de que la búsqueda divergente y los datos estén completos. Cuando un equipo se ancla en la primera causa plausible, puede corregir lo equivocado, el problema regresa y el ciclo se gasta sin un resultado en el que nadie confíe. Importa un límite: esta disciplina rige el trabajo de mejora, no las emergencias activas; cuando la casa está en llamas, apaga primero el fuego y busca la causa raíz después. Este módulo da a los CSA la disciplina para separar divergir de converger, reconocer los sesgos detrás de la convergencia prematura y usar las herramientas de MC y los puntos de control para confirmar la evidencia antes de comprometerse.",
  whatYouGain: [
    "Definir el pensamiento divergente y convergente y saber qué actividades de MC pertenecen a cada modo",
    "Separar en el tiempo la generación de ideas de la evaluación para que las buenas opciones no se descarten demasiado pronto",
    "Reconocer los sesgos —anclaje, confirmación, disponibilidad— que hacen que los equipos salten a conclusiones",
    "Rastrear cómo la convergencia prematura produce ciclos de MC fallidos, problemas recurrentes y pérdida de credibilidad",
    "Usar Ishikawa, Pareto, los 5 Porqués, los puntos de control de DMAIC y el A3 para imponer un ritmo deliberado de divergir-luego-converger"
  ],
  explanation: "<p>Toda mejora requiere dos modos cognitivos opuestos. El <strong>pensamiento divergente</strong> es generativo: amplías deliberadamente el campo, produciendo muchas causas, hipótesis y soluciones candidatas sin juzgarlas todavía: un Ishikawa completo a través de las 6 M, una lluvia de ideas sin filtrar de contramedidas, varias explicaciones en competencia para un defecto. El <strong>pensamiento convergente</strong> es reductivo: aplicas datos, criterios y juicio para reducir ese campo a la respuesta mejor respaldada: clasificar las causas con un Pareto, confirmar una causa raíz con los 5 Porqués y la medición directa, elegir una contramedida según el impacto y el esfuerzo. La buena MC necesita ambos, y los necesita <em>en secuencia</em>.</p><p>Un error común es la <strong>convergencia prematura</strong>: colapsar los dos modos en uno aferrándose a la primera respuesta plausible. Puede sentirse eficiente («es obviamente la base de datos»), pero omite la búsqueda divergente, por lo que la causa real puede que nunca salga a la superficie. Tres sesgos la impulsan: el <strong>anclaje</strong> (la primera idea domina todo lo que sigue), el <strong>sesgo de confirmación</strong> (entonces solo reúnes los datos que la respaldan, sintiéndote guiado por los datos mientras ves solo parte del panorama) y la <strong>heurística de disponibilidad</strong> (la causa que viste más recientemente se siente más probable). El comportamiento de solución primero —actuar antes de comprender la causa— es el mismo error un paso más adelante: converger en una corrección antes de haber convergido en una causa.</p><p>¿Por qué socava esto un ciclo de MC? Un bucle PDCA o DMAIC es tan bueno como la causa a la que apunta. Converge prematuramente y ejecutarás todo el bucle —planificar, construir, implementar, medir— contra la causa raíz equivocada. La mejora no muestra ningún efecto o retrocede, el problema reaparece y has gastado el tiempo y el presupuesto de un ciclo sin un resultado en el que confíes. Cada ciclo fallido también erosiona la confianza de las partes interesadas que financia el siguiente, por lo que el costo es más que un solo intento desperdiciado. «Ir despacio para ir rápido» se aplica aquí: una búsqueda divergente deliberada suele costar menos que un ciclo fallido y la recurrencia que le sigue.</p><p>Un límite se sitúa por encima de esta disciplina: rige la mejora, no los incidentes activos. Cuando la casa está en llamas —una interrupción en vivo, un incidente de cliente caído, un evento de seguridad— el primer trabajo es apagar el fuego. Estabiliza el sistema y restaura el servicio mediante el mando de incidentes; este no es el momento de ejecutar un Ishikawa ni de debatir la causa raíz mientras los clientes están afectados. El análisis de divergir-luego-converger viene después, en la autopsia, donde buscas la causa raíz y mejoras el estado actual para que sea menos probable que el mismo fuego vuelva a iniciarse. Reaccionar de inmediato ante una emergencia no es saltar a conclusiones: la convergencia prematura es un riesgo cuando eliges qué mejorar, no cuando contienes el daño. Decidir en qué situación te encuentras es la primera decisión: contener primero, luego mejorar.</p><p>Los métodos de MC están construidos para imponer la disciplina. El <strong>Ishikawa</strong> y la lluvia de ideas son explícitamente divergentes: captura toda causa plausible antes de juzgar ninguna. El <strong>Pareto, los 5 Porqués y la prueba de hipótesis</strong> son convergentes: usa datos para eliminar candidatos hasta llegar a los pocos vitales. Los <strong>puntos de control de DMAIC</strong> existen precisamente para bloquear la convergencia prematura: no puedes salir de Analizar sin evidencia de la causa raíz. El <strong>A3</strong> estructura una pasada de divergir-luego-converger en una sola página, y el <em>Doble Diamante</em> del mundo del diseño nombra la misma alternancia: divergir para explorar el problema, converger para definirlo, divergir para explorar soluciones, converger para entregar una. El hilo conductor se conecta con la alfabetización de datos: diverge ampliamente a través de la señal cualitativa y circunstancial, pero converge solo en una prueba <strong>directa y empírica</strong> antes de comprometerte.</p>",
  csamExample: "<p>Una renovación se tambalea y el primer instinto del equipo de cuenta es unánime: «El cliente cree que somos demasiado caros; ofrezcamos un descuento». Eso es convergencia prematura. El CSAM fuerza en cambio una pasada divergente sobre los impulsores del abandono: los temas de VOC de las revisiones recientes, la tendencia de uso del producto, el sentimiento de soporte, la salud de la relación ejecutiva, la fricción de la incorporación y la actividad de la competencia, todo va al tablero antes de juzgar ninguno de ellos. Solo entonces el equipo converge —usando datos— y la evidencia apunta no al precio sino a una incorporación estancada que dejó dos unidades de negocio nunca activadas. Un descuento habría quemado margen y aun así habría perdido la renovación, porque respondía a una causa que no era real. Al separar generar de evaluar, el CSAM gasta el ciclo corrigiendo la activación, la retención se recupera y la siguiente QBR se fundamenta en una causa que los datos realmente respaldan.</p>",
  csaExample: "<p>Durante la fase de Analizar de un DMAIC de confiabilidad, un SRE del cliente reacciona ante un solo pico de latencia con «Es la base de datos; reindexemos». El CSA mantiene al equipo primero en modo divergente, construyendo un Ishikawa a través de las 6 M: los arranques en frío del reducción de escala de AKS, la limitación de RU de Cosmos, la resolución de DNS, la salida de red, las tormentas de reintentos del lado del cliente y las pausas de GC se convierten todas en causas candidatas. Luego el equipo converge con datos directos y empíricos —correlacionando el gráfico de control de latencia contra los eventos de implementación y de escalado— y descubre que las infracciones se agrupan tras los arranques en frío del reducción de escala, sin que la base de datos esté implicada en ningún momento. Si hubieran saltado a la conclusión de la base de datos, habrían ejecutado un ciclo completo reindexando una base de datos sana: ninguna mejora, los picos reaparecen y el equipo de SRE pierde la confianza en el proceso de MC. La pasada disciplinada de divergir-luego-converger costó un día extra y evitó un ciclo fallido.</p>",
  recap: [
    "El pensamiento divergente genera opciones sin juzgar; el pensamiento convergente las reduce con evidencia: usa ambos, en ese orden",
    "La convergencia prematura (saltar a conclusiones) es una causa principal de ciclos de MC fallidos: corriges lo equivocado y el problema reaparece",
    "Cuando la casa está en llamas, reacciona primero: contén el incidente y restaura el servicio, luego ejecuta el análisis de divergir-luego-converger para encontrar la causa raíz y prevenir repeticiones",
    "Nombra los sesgos detrás de ella —anclaje, sesgo de confirmación y heurística de disponibilidad— para poder detectarlos en la sala",
    "Un ciclo fallido cuesta más que el trabajo desperdiciado: erosiona la confianza de las partes interesadas que financia el siguiente ciclo",
    "Las herramientas de MC imponen el ritmo: Ishikawa y la lluvia de ideas divergen; Pareto, los 5 Porqués y la prueba de hipótesis convergen; los puntos de control de DMAIC lo regulan",
    "Diverge a través de toda la señal, pero converge solo en una prueba directa y empírica de la causa raíz antes de comprometer una contramedida"
  ],
  questions: [
    {
      prompt: "¿Qué describe mejor el pensamiento divergente en un contexto de mejora continua?",
      options: ["Reducir una lista de causas a la única más probable usando datos.", "Generar una amplia gama de posibles causas, hipótesis o soluciones sin juzgarlas todavía.", "Implementar la primera solución razonable lo más rápido posible.", "Seleccionar la contramedida con la mejor relación impacto-esfuerzo."],
      correctIndex: 1,
      explanation: "El pensamiento divergente es el modo <strong>generativo</strong>: lanza una red amplia (por ejemplo, un Ishikawa completo a través de las 6 M) y aplaza el juicio. Reducir con datos es pensamiento convergente; los dos funcionan mejor cuando se separan en el tiempo."
    },
    {
      prompt: "¿Por qué es tan peligroso saltar a conclusiones (convergencia prematura) en un ciclo de MC?",
      options: ["Hace que las sesiones de lluvia de ideas duren más de lo programado.", "Compromete al equipo con una causa o solución antes de que la evidencia la confirme, por lo que el ciclo a menudo corrige lo equivocado y el problema reaparece.", "Siempre viola el acta del proyecto.", "Produce demasiadas soluciones candidatas para evaluar."],
      correctIndex: 1,
      explanation: "Converger antes de que la búsqueda divergente y la validación de datos estén completas significa actuar sobre una conjetura no verificada. La mejora falla o retrocede, el problema regresa y la confianza de las partes interesadas que financia los ciclos futuros se erosiona."
    },
    {
      prompt: "Durante la fase de Analizar de DMAIC, un ingeniero declara tras un solo pico de latencia: «Es obviamente la base de datos». ¿Cuál es el siguiente paso disciplinado?",
      options: ["Comenzar a reindexar la base de datos de inmediato para ahorrar tiempo.", "Generar el conjunto completo de causas plausibles (p. ej., un Ishikawa a través de las 6 M), luego converger en la causa raíz con datos y prueba de hipótesis.", "Escalarlo al grupo de producto como un defecto confirmado de la base de datos.", "Cerrar Analizar y pasar directamente a Controlar."],
      correctIndex: 1,
      explanation: "Una sola observación es circunstancial. Permanece en modo divergente para hacer aflorar todas las causas candidatas, luego converge probándolas contra datos directos y empíricos. Actuar sobre la primera conjetura arriesga un ciclo fallido que reindexa una base de datos que nunca fue la causa."
    },
    {
      prompt: "Un equipo forma una teoría temprana y luego reúne solo la telemetría que la respalda, ignorando los datos contradictorios. ¿Qué sesgo es este?",
      options: ["Sesgo de anclaje.", "Sesgo de confirmación.", "Heurística de disponibilidad.", "Sesgo de supervivencia."],
      correctIndex: 1,
      explanation: "El <strong>sesgo de confirmación</strong> consiste en buscar o sobreponderar la evidencia que confirma una creencia preexistente. Es una forma principal en que la convergencia prematura se oculta: el equipo se siente guiado por los datos mientras mira solo los datos que lo respaldan. (El anclaje, depender en exceso de la primera información, empuja a los equipos en la misma dirección)."
    },
    {
      prompt: "¿Cuál es la razón principal por la que los métodos de MC separan la generación de ideas de la evaluación y colocan puntos de control entre las fases de DMAIC?",
      options: ["Para crear más documentación para las auditorías.", "Para prevenir la convergencia prematura forzando suficiente evidencia antes de que el equipo se comprometa con una causa o avance de fase.", "Para ralentizar los proyectos de modo que cuesten más.", "Para asegurar que cada miembro del equipo aporte un número igual de ideas."],
      correctIndex: 1,
      explanation: "Los puntos de control y el ritmo de divergir-luego-converger existen para impedir que los equipos se aferren a una respuesta no verificada. Cada punto de control requiere suficiente evidencia para proceder: así es como la MC «va despacio para ir rápido» y evita los ciclos fallidos."
    }
  ]
},
"house-of-lean": {
  id: "house-of-lean",
  title: "La Casa de Lean",
  group: "Fundamentos",
  duration: "30 min",
  executiveSummary: "La Casa de Lean es el clásico diagrama del Sistema de Producción de Toyota que muestra cómo las piezas de Lean encajan entre sí como una sola estructura: una meta en el techo, dos pilares que la sostienen, una base estable debajo y las personas en el centro. El techo es la meta: la mejor calidad, el menor costo, el menor tiempo de entrega, con seguridad y moral. Los dos pilares son Just-in-Time (flujo y jalar) y Jidoka (calidad incorporada). La base es la estabilidad y la estandarización: trabajo estandarizado, demanda nivelada y kaizen. Para los CSA, la casa es el mapa que conecta todos los demás módulos de esta serie en un solo sistema, y explica por qué no se puede fortalecer una parte mientras se ignora la base sobre la que descansa.",
  whatYouGain: [
    "Leer la Casa de Lean como un sistema: la meta en el techo, los pilares de Just-in-Time y Jidoka, y la base estable y estandarizada",
    "Ubicar las herramientas de esta serie dentro de la casa: trabajo estandarizado y kaizen en la base, takt y flujo bajo JIT, andon y poka-yoke bajo Jidoka",
    "Explicar por qué un pilar se derrumba sin la base: las mejoras no se sostienen sin estabilidad ni trabajo estandarizado",
    "Usar el modelo para diagnosticar qué parte del sistema de un cliente es débil y dirigir el esfuerzo de CI hacia donde falta",
    "Colocar a las personas y el respeto por las personas en el centro como el motor que realmente impulsa la mejora continua"
  ],
  explanation: "<p>La <strong>Casa de Lean</strong> es un diagrama de enseñanza del Sistema de Producción de Toyota. El sentido de dibujar Lean como una casa es que una casa es una sola estructura: el techo necesita los pilares, los pilares necesitan la base, y una debilidad en cualquier lugar pone en riesgo todo el edificio. No se puede adoptar una herramienta de forma aislada y esperar resultados Lean.</p><p><strong>El techo es la meta.</strong> Declara para qué sirve el sistema: la mayor calidad, al menor costo, en el menor tiempo de entrega, con seguridad y moral incluidas. Todo lo que está debajo existe para entregar esa meta al cliente&mdash;no para desplegar herramientas por sí mismas.</p><p><strong>Los dos pilares sostienen el techo.</strong> El primer pilar es <strong>Just-in-Time (JIT)</strong>: producir solo lo que se necesita, cuando se necesita, en la cantidad que se necesita. JIT se trata de flujo y jalar&mdash;flujo continuo, takt time que marca el ritmo del trabajo según la demanda, y sistemas de jalar como Kanban que reemplazan el empujar y la sobreproducción. El segundo pilar es <strong>Jidoka</strong> (autonomación, o &lsquo;automatización con un toque humano&rsquo;): incorporar la calidad para que los defectos nunca avancen aguas abajo. Jidoka es el hogar del cable Andon (detener la línea ante una anomalía) y del poka-yoke (a prueba de errores). Ambos pilares son necesarios&mdash;el flujo sin calidad incorporada solo mueve los defectos más rápido, y la calidad sin flujo deja al cliente esperando.</p><p><strong>La base lo hace estable.</strong> Debajo de los pilares se encuentra la estabilidad y la estandarización: el <strong>trabajo estandarizado</strong> (el mejor método conocido actualmente, y la línea base contra la que se mide cada mejora), el <strong>heijunka</strong> (nivelar la demanda para que el sistema no sea sacudido por picos y valles), y el <strong>kaizen</strong> (mejora continua e incremental). Sin una base estable, los pilares no tienen nada sólido sobre lo cual descansar&mdash;no se puede ejecutar JIT ni Jidoka confiables sobre el caos.</p><p><strong>Las personas están en el centro.</strong> En medio de la casa están las personas y el trabajo en equipo, la mejora continua y la eliminación implacable del desperdicio. Este es el motor: las herramientas no mejoran un sistema, lo hacen las personas que las usan. El respeto por las personas&mdash;confiar en la primera línea para detectar problemas, jalar el cable y mejorar su propio trabajo&mdash;es lo que mantiene viva toda la estructura.</p><p>La casa también explica la secuencia. Primero se estabiliza y estandariza la base, luego se construye el flujo y la calidad incorporada encima, todo al servicio de la meta del cliente en el techo. (Nota: los marcos a escala como SAFe usan su propia &lsquo;Casa de Lean&rsquo; con etiquetas diferentes&mdash;el valor en el techo; pilares de respeto por las personas, flujo, innovación y mejora implacable; el liderazgo como base&mdash;pero la idea es la misma: una sola estructura conectada, no una caja de herramientas.)</p>",
  csamExample: "<p>Un CSAM hereda un cliente que ha adoptado herramientas Lean de forma fragmentada&mdash;un tablero Kanban aquí, algunas puertas de calidad automatizadas allá&mdash;pero los resultados no se sostienen. Usando la Casa de Lean, el CSAM diagnostica el problema en la base: no hay trabajo estandarizado, por lo que cada equipo hace la misma tarea de manera diferente y las mejoras no tienen una línea base estable a la cual aferrarse. El CSAM reformula la hoja de ruta en torno a la casa: primero estabilizar y estandarizar (la base), luego fortalecer el flujo (JIT) y la calidad incorporada (Jidoka), todo apuntando a la meta declarada del cliente de un menor tiempo de entrega. El liderazgo finalmente comprende por qué las herramientas aisladas no funcionaban&mdash;estaban construyendo pilares sobre arena&mdash;y financia primero el trabajo de la base.</p>",
  csaExample: "<p>Un CSA usa la Casa de Lean para estructurar la mejora de ingeniería de plataforma de un cliente. La meta en el techo es el propio objetivo del cliente: entregar funcionalidades más rápido con menos incidentes. Bajo JIT, el CSA mapea entrega continua, flujo basado en trunk y límites de trabajo basados en jalar. Bajo Jidoka, el CSA mapea puertas de calidad automatizadas, un cable Andon digital que detiene automáticamente un despliegue defectuoso, y políticas de poka-yoke que hacen imposibles las configuraciones incorrectas. En la base, el CSA establece el trabajo estandarizado de infraestructura como código y una cadencia de kaizen para las retrospectivas. Dibujarlo como una sola casa le da al cliente un modelo mental compartido: cada iniciativa tiene un lugar, y las dependencias entre ellas son evidentes.</p>",
  recap: [
    "La Casa de Lean es una sola estructura conectada: una meta en el techo, dos pilares, una base estable y las personas en el centro—no una caja de herramientas con técnicas separadas",
    "El techo es la meta: la mejor calidad, el menor costo, el menor tiempo de entrega, con seguridad y moral, entregada al cliente",
    "Los dos pilares son Just-in-Time (flujo y jalar—takt, flujo continuo, Kanban) y Jidoka (calidad incorporada—Andon, poka-yoke); ambos son necesarios",
    "La base es la estabilidad y la estandarización: trabajo estandarizado, heijunka (nivelación) y kaizen—los pilares se derrumban sin ella",
    "Las personas y el respeto por las personas están en el centro como el motor de la mejora continua; las herramientas no mejoran los sistemas, lo hacen las personas",
    "Usa la casa para secuenciar el trabajo—estabilizar primero la base, luego construir flujo y calidad incorporada—y para diagnosticar qué parte de un sistema es débil"
  ],
  questions: [
    {
      prompt: "¿Qué representa el techo de la Casa de Lean?",
      options: [
        "Las herramientas específicas que un equipo ha adoptado, como Kanban y 5S.",
        "La meta del sistema: la mejor calidad, el menor costo y el menor tiempo de entrega entregados al cliente.",
        "El equipo de liderazgo que patrocina el programa Lean.",
        "El presupuesto asignado a la mejora continua."
      ],
      correctIndex: 1,
      explanation: "El techo declara la <strong>meta</strong>&mdash;la mayor calidad, el menor costo, el menor tiempo de entrega, con seguridad y moral. Todo lo que está debajo del techo existe para entregar esa meta al cliente."
    },
    {
      prompt: "¿Cuáles son los dos pilares de la clásica Casa de Lean (de Toyota)?",
      options: [
        "5S y Trabajo Estandarizado.",
        "Just-in-Time (flujo y jalar) y Jidoka (calidad incorporada).",
        "DMAIC y PDCA.",
        "Respeto por las Personas y Liderazgo."
      ],
      correctIndex: 1,
      explanation: "Los dos pilares son <strong>Just-in-Time</strong> (producir solo lo necesario, cuando se necesita&mdash;flujo y jalar) y <strong>Jidoka</strong> (incorporar la calidad para que los defectos nunca avancen aguas abajo). Ambos son necesarios para sostener el techo."
    },
    {
      prompt: "¿Qué conjunto de elementos forma la base de la Casa de Lean?",
      options: [
        "Andon, poka-yoke y la autoridad para detener la línea.",
        "Estabilidad y estandarización: trabajo estandarizado, heijunka (nivelación) y kaizen.",
        "Takt time, flujo continuo y sistemas de jalar.",
        "La mayor calidad, el menor costo y el menor tiempo de entrega."
      ],
      correctIndex: 1,
      explanation: "La base es la <strong>estabilidad y la estandarización</strong>&mdash;trabajo estandarizado, demanda nivelada (heijunka) y kaizen. Sin una base estable, los pilares de JIT y Jidoka no tienen nada sólido sobre lo cual descansar."
    },
    {
      prompt: "¿Por qué Lean se dibuja como una casa en lugar de una lista de herramientas?",
      options: [
        "Porque el diagrama es más fácil de imprimir en una sola página.",
        "Porque es una sola estructura conectada&mdash;el techo necesita los pilares y los pilares necesitan la base, por lo que una debilidad en cualquier lugar pone en riesgo todo el sistema.",
        "Porque Toyota exigía que todos los diagramas usaran metáforas de construcción.",
        "Porque cada herramienta puede adoptarse de forma independiente con el mismo resultado."
      ],
      correctIndex: 1,
      explanation: "La casa muestra que Lean es un <strong>sistema, no una caja de herramientas</strong>. No se puede ejecutar JIT ni Jidoka confiables sobre una base inestable, y adoptar una herramienta de forma aislada no produce resultados Lean."
    },
    {
      prompt: "Un cliente ha adoptado Kanban y puertas de calidad automatizadas, pero las mejoras no se sostienen, y no hay trabajo estandarizado. ¿Qué sugiere la Casa de Lean?",
      options: [
        "Agregar más herramientas a los pilares hasta que los resultados mejoren.",
        "Fortalecer primero la base&mdash;establecer trabajo estandarizado y estabilidad&mdash;para que los pilares tengan una base sólida sobre la cual descansar.",
        "Eliminar el tablero Kanban porque entra en conflicto con las puertas de calidad.",
        "Pasar directamente a optimizar la meta de costo a nivel del techo."
      ],
      correctIndex: 1,
      explanation: "Sin trabajo estandarizado, las mejoras no tienen una línea base estable a la cual aferrarse&mdash;los pilares están construidos sobre arena. La casa dice <strong>estabilizar y estandarizar primero la base</strong>, luego construir flujo y calidad incorporada encima."
    }
  ]
},
"dmaic": {
  id: "dmaic",
  title: "DMAIC",
  group: "Metodologías & Ciclos",
  duration: "30 min",
  executiveSummary: "DMAIC—Definir, Medir, Analizar, Mejorar, Controlar—es la metodología Six Sigma para arreglar procesos de bajo rendimiento. Cada fase tiene una puerta de control (tollgate); no se avanza hasta que la evidencia sea suficiente. La disciplina previene un costoso error de ingeniería: resolver con confianza el problema equivocado. Usa DMAIC cuando el problema amerita semanas o meses de trabajo estructurado y basado en datos.",
  whatYouGain: ["Comprender cuándo usar DMAIC frente a ciclos más rápidos como PDCA o Kaizen", "Ejecutar un proyecto estructurado de cinco fases con puertas de control que evitan saltar a las soluciones", "Usar datos para anclar las decisiones y eliminar los cambios impulsados por opiniones", "Configurar una fase de Control que mantenga las ganancias de la mejora sin retroceder", "Aplicar DMAIC a programas de confiabilidad, costo y capacidad"],
  explanation: "<p>DMAIC proporciona un marco estructurado con cinco fases y puertas de control. <strong>Definir</strong> alinea el problema, el alcance y una meta medible usando el acta de proyecto (project charter), SIPOC y la voz del cliente. <strong>Medir</strong> establece el rendimiento de línea base y valida el sistema de medición en sí mismo. <strong>Analizar</strong> identifica las causas raíz mediante Ishikawa, 5 Por qué y pruebas de hipótesis basadas en datos—no en suposiciones. <strong>Mejorar</strong> pilotea los cambios y compara el rendimiento posterior al cambio con la línea base. <strong>Controlar</strong> sostiene la ganancia mediante la estandarización a través de infraestructura como código, política, runbooks y monitoreo.</p><p>Cada puerta de control evita que el equipo avance sin suficiente evidencia. Un gráfico de control que muestre que las ganancias se sostuvieron, un diagrama de Ishikawa con causas raíz fundamentadas en datos, y una línea base con 4+ semanas de medición defendible son ejemplos de requisitos de las puertas de control. El antipatrón a evitar es el 'sprint DMAIC'—ejecutar las cinco fases en una semana sin puertas reales. Eso es un Kaizen, no un DMAIC.</p><p>DMAIC se combina naturalmente con proyectos de Belt y programas grandes. Úsalo cuando los procesos existentes tienen bajo rendimiento y la causa no está clara. No uses DMAIC para diseñar nuevos procesos (usa DMADV), arreglos del mismo día (usa PDCA), o cambio estratégico (usa Hoshin Kanri). Durante un incidente activo, estabiliza y restablece el servicio primero; DMAIC es para encontrar y eliminar la causa raíz después, no para apagar incendios en el momento.</p>",
  csamExample: "<p>Un CSAM que apoya la iniciativa de confiabilidad de un cliente usa DMAIC para estructurar un programa de varios trimestres que reduce la tasa de incidentes de 8 por mes a 2 por mes. Durante Definir, el CSAM alinea al liderazgo del cliente sobre el acta: reducir el MTTR y el volumen de incidentes para mejorar la confianza del cliente y el consumo de la plataforma. Medir establece una tasa de incidentes de línea base y el MTTR a partir de 8 semanas de datos de producción. Analizar usa un gráfico de Pareto para mostrar que el 60% de los incidentes provienen de una sola causa raíz: el timeout de un solo microservicio. Mejorar pilotea un patrón de circuit-breaker; la medición posterior al piloto confirma el cambio. La fase de Control codifica el patrón en todos los servicios similares mediante política y runbooks. El CSAM traduce el número de capacidad (la tasa de incidentes posterior al control) en valor de negocio: 'La plataforma ahora es lo suficientemente estable como para que tu equipo se enfoque en la velocidad de funcionalidades en lugar de apagar incendios.' El consumo crece porque la velocidad del equipo de ingeniería aumenta.</p>",
  csaExample: "<p>Un CSA lidera un DMAIC de confiabilidad de AKS de un cliente. Definir: eliminar los incidentes de ImagePullBackOff. Medir: la línea base muestra que ImagePullBackOff es el 41% de todos los incidentes en un gráfico de Pareto. Analizar: la causa raíz son las etiquetas de imagen mutables + el acceso público a ACR, lo que permite imágenes obsoletas. Mejorar: implementar un endpoint privado de ACR, exigir etiquetas inmutables y gestionar la identidad mediante managed identity. Probar en un clúster; Comparar la línea base (41% de los incidentes) con el post-cambio (0% de incidentes relacionados con ImagePullBackOff). Controlar: Azure Policy deniega las etiquetas mutables en todo el clúster; un runbook documenta el estándar. El CSA configura un gráfico de control sobre el tipo de incidente en Azure Workbooks para sostener la línea base.</p>",
  recap: ["DMAIC es para problemas de semanas a meses con causas raíz poco claras; usa PDCA para ciclos más rápidos y Kaizen para eventos del mismo día", "Las puertas de control te impiden saltar a las soluciones antes de comprender el problema mediante datos", "Definir → Medir → Analizar → Mejorar → Controlar es la secuencia rígida; cada fase tiene entregables concretos", "La fase de Control no es opcional; la estandarización y el monitoreo sostenido previenen el retroceso", "Usa DMAIC para certificar Green y Black Belts, estructurar programas de confiabilidad de clientes y construir conocimiento de playbook que se pueda buscar"],
  questions: [
    {
      prompt: "¿Qué significa DMAIC?",
      options: ["Diseñar, Medición, Análisis, Implementación, Control.", "Definir, Medir, Analizar, Mejorar, Controlar.", "Desplegar, Monitorear, Evaluar, Mejorar, Corregir.", "Decisión, Métricas, Evaluación, Implementación, Cierre."],
      correctIndex: 1,
      explanation: "DMAIC significa <strong>Definir, Medir, Analizar, Mejorar, Controlar</strong> &mdash; cinco fases secuenciales, cada una con una puerta de control que impide avanzar sin suficiente evidencia."
    },
    {
      prompt: "¿Cuál es el propósito principal de las puertas de control en DMAIC?",
      options: ["Programar reuniones con los interesados del proyecto.", "Evitar saltar a las soluciones antes de comprender el problema.", "Asignar presupuesto a cada fase del proyecto.", "Documentar las lecciones aprendidas en los límites de cada fase."],
      correctIndex: 1,
      explanation: "Las puertas de control detienen un costoso error de ingeniería: <strong>resolver con confianza el problema equivocado</strong>. Cada puerta asegura que la evidencia sea suficiente antes de que comience la siguiente fase."
    },
    {
      prompt: "¿Cuándo deberías usar DMAIC en lugar de PDCA o Kaizen?",
      options: ["Para cualquier arreglo rápido o resolución de problemas del mismo día.", "Cuando el problema es lo suficientemente significativo como para ameritar semanas o meses de trabajo estructurado.", "Para diseñar procesos completamente nuevos que aún no existen.", "Solo cuando tienes un candidato a certificación de proyecto Green Belt."],
      correctIndex: 1,
      explanation: "DMAIC se ajusta a problemas lo suficientemente grandes como para ameritar semanas o meses de trabajo estructurado y basado en datos. Para ciclos más cortos usa PDCA o Kaizen; para el <strong>diseño de nuevos procesos</strong> usa DMADV."
    },
    {
      prompt: "¿Qué sucede durante la fase de Control de DMAIC?",
      options: ["El equipo identifica qué hipótesis probar a continuación.", "Se validan los sistemas de medición para verificar su exactitud.", "La ganancia se estandariza y se sostiene mediante trabajo estandarizado y monitoreo.", "Se identifican y clasifican las causas raíz según su impacto."],
      correctIndex: 2,
      explanation: "La fase de Control <strong>sostiene la ganancia</strong> mediante la estandarización a través de IaC, Política, runbooks, paneles y alertas &mdash; para que las mejoras no retrocedan después de que termine el proyecto."
    },
    {
      prompt: "¿Cuál es un antipatrón a evitar en la ejecución de DMAIC?",
      options: ["Recopilar más datos de los absolutamente necesarios durante Medir.", "Ejecutar las cinco fases en una semana sin puertas de control significativas.", "Involucrar al dueño del proceso demasiado pronto en Definir.", "Usar herramientas estadísticas como las pruebas de hipótesis en Analizar."],
      correctIndex: 1,
      explanation: "Ejecutar todas las fases en una semana sin puertas reales no es DMAIC &mdash; es un <strong>evento Kaizen</strong>. DMAIC requiere que las fases tengan puertas reales y evidencia adecuada por fase."
    }
  ]
}, "pdca": {
  id: "pdca",
  title: "PDCA / PDSA",
  group: "Metodologías & Ciclos",
  duration: "30 min",
  executiveSummary: "PDCA—Plan, Do, Check, Act (Planear, Hacer, Verificar, Actuar)—es el ciclo de mejora fundamental: plantear como hipótesis un cambio, probarlo, medir el resultado, y estandarizar o aprender. Deming lo refinó luego a PDSA (Study, Estudiar, en lugar de Check, Verificar) para enfatizar el aprendizaje. PDCA es la unidad atómica de la mejora continua; cada cambio dentro de DMAIC, cada evento Kaizen y cada decisión del standup diario es un ciclo PDCA.",
  whatYouGain: ["Escribir hipótesis falsables antes de hacer cualquier cambio", "Ejecutar pequeños experimentos con medición real en lugar de cambios por opinión", "Estandarizar los cambios exitosos en trabajo estandarizado mediante IaC o runbooks", "Aprender de los resultados negativos en lugar de ocultarlos", "Encadenar PDCAs para una mejora acumulativa a lo largo de los meses"],
  explanation: "<p>PDCA es simple pero requiere disciplina. <strong>Plan (Planear):</strong> Escribe una hipótesis falsable: 'Si [cambiamos], entonces [la métrica] se moverá de [línea base] a [meta] dentro de [ventana], porque [teoría].' Define la medición: misma fuente, misma consulta, antes y después. <strong>Do (Hacer):</strong> Haz el cambio pequeño—alcance piloto, clúster canary, un equipo. Recopila los datos sin modificar; no selecciones la ventana de tiempo a posteriori. <strong>Check / Study (Verificar / Estudiar):</strong> Compara el resultado real con la predicción. ¿Se movió? ¿En la dirección esperada? ¿En la magnitud esperada? <strong>Act (Actuar):</strong> Elige una de tres opciones: estandarizar mediante IaC o política, adaptar (ejecutar otro ciclo con una variable cambiada), o abandonar y documentar el aprendizaje.</p><p>La disciplina previene el pensamiento centrado en la solución. La mayoría de las 'mejoras' son cambios no controlados—sin hipótesis, sin medición, sin estandarización. PDCA fuerza un rigor científico mínimo. Los resultados negativos son datos, no fracaso. Un equipo que revierte un experimento fallido y documenta el aprendizaje ha aprendido más que un equipo que despliega ciegamente cada cambio.</p><p>PDCA escala: dentro de un solo sprint, dentro de una fase de Mejorar de DMAIC (a menudo de 3 a 5 PDCAs encadenados), dentro de un evento Kaizen (un PDCA por intervención), y a través de la cadencia de mejora diaria de un equipo. Encadenar PDCAs hace que la mejora se acumule.</p>",
  csamExample: "<p>Un CSAM entrena al equipo de SRE de un cliente para mejorar la disciplina de alertas. El equipo había ajustado los umbrales de alerta semanalmente durante un año sin ninguna mejora medida en el MTTR. El CSAM impone la disciplina PDCA en cada cambio. Ciclo 1: Hipótesis—'Si bajamos el umbral de alerta de pico del 90% de CPU al 80%, detectamos los problemas de carga antes y el MTTR baja un 20%.' Ventana de medición: 2 semanas. Resultado: el MTTR bajó un 18%. Actuar: estandarizado. Ciclo 2: Hipótesis sobre una señal diferente; el MTTR baja otro 15%. A lo largo de cuatro ciclos, el MTTR cayó un 31% y el equipo dejó de dar bandazos. La restricción del CSAM—'cada cambio necesita una hipótesis y una ventana de medición de 2 semanas'—aceleró la mejora al forzar la disciplina científica.</p>",
  csaExample: "<p>Un CSA y un ingeniero del cliente ejecutan un PDCA sobre el ajuste del autoescalado. Plan: 'Si bajamos el umbral de escalado hacia afuera del 80% de CPU al 65%, la latencia P95 baja ≥20%, porque nos adelantamos más rápido a la carga.' Do: desplegar en un solo node pool; recopilar 2 semanas de datos de latencia P95. Check: la P95 bajó un 27%. Act: estandarizar el cambio de umbral mediante una plantilla de IaC en todos los node pools. El CSA hace seguimiento con un PDCA de resultado negativo: ajuste de la política de reintentos. Hipótesis no confirmada—el rendimiento (throughput) en realidad bajó. Act: revertir en un día y documentar que el reintento con backoff ya estaba saturado en esta carga de trabajo. Sin un despliegue de un mes desperdiciado.</p>",
  recap: ["PDCA impone hipótesis → experimento → medición → decisión en cada cambio", "El Plan debe ser falsable; el Do debe ser pequeño; el Check debe ser honesto sobre los resultados negativos", "Encadena PDCAs dentro de la fase de Mejorar de DMAIC y en el standup del equipo para la mejora diaria", "Estandariza los aciertos mediante IaC, política o runbooks; abandona los fracasos y documenta el aprendizaje", "Una reunión de PDCA no es un PDCA—la disciplina se aplica al trabajo, no al calendario"],
  questions: [
    {
      prompt: "Un equipo dice &ldquo;mejoramos las alertas el viernes pasado &mdash; ajustamos los umbrales.&rdquo; Un mes después el MTTR no ha cambiado. ¿Qué habría prevenido la disciplina PDCA?",
      options: ["Habría impedido que el equipo cambiara alguna vez los umbrales de alerta.", "Habría requerido una hipótesis antes del cambio, una ventana de medición después, y una decisión de estandarizar o revertir.", "Habría hecho que el cambio ocurriera más rápido.", "Asegura que todo el equipo use las mismas herramientas de monitoreo."],
      correctIndex: 1,
      explanation: "PDCA impone una disciplina mínima en cada cambio. Sin una <strong>hipótesis, medición y decisión</strong>, los cambios son experimentos invisibles. PDCA habría revelado que este cambio no tuvo ningún efecto."
    },
    {
      prompt: "Estás entrenando a un equipo para reducir la latencia del cluster-autoscaler de AKS. ¿Qué debe incluir la fase de Plan?",
      options: ["Solo la métrica que quieres mejorar; los detalles surgen durante el Do.", "Una hipótesis falsable: &ldquo;Si [cambiamos], entonces [la métrica] mejorará de [línea base] a [meta] dentro de [ventana], porque [teoría].&rdquo;", "Un compromiso de desplegar el cambio en todos los clústeres de inmediato cuando las primeras señales se vean bien.", "Una encuesta que pregunte a los ingenieros si creen que el cambio funcionará."],
      correctIndex: 1,
      explanation: "El Plan debe incluir una <strong>hipótesis falsable</strong> y una métrica de éxito. Esto previene el pensamiento centrado en la solución y permite que el Check tome una decisión honesta de sí/no."
    },
    {
      prompt: "Una prueba de política de reintentos muestra que el rendimiento bajó, en lugar de subir. ¿Cuál es la decisión correcta de Act?",
      options: ["Ignorar el resultado porque contradice la hipótesis.", "Desplegar el cambio en todos los sistemas y esperar que el rendimiento mejore con la escala.", "Revertir el cambio y documentar el aprendizaje de que este enfoque no funciona como se teorizó.", "Afirmar que la medición estuvo mal y ejecutar la prueba de nuevo."],
      correctIndex: 2,
      explanation: "Los resultados negativos son <strong>datos, no fracaso</strong>. Si la hipótesis no se confirma, revierte y documenta. El aprendizaje es valioso para ciclos futuros."
    },
    {
      prompt: "Un equipo ejecutó 6 ciclos PDCA en un trimestre. Cinco resultaron en mejoras estandarizadas; uno se revirtió. ¿Qué te dice esto?",
      options: ["El equipo está experimentando sin disciplina porque no todos los cambios tuvieron éxito.", "El equipo está practicando CI con honestidad científica &mdash; algunos cambios funcionan, otros no, y todos los resultados informan el siguiente ciclo.", "Deberían dejar de ejecutar PDCA porque el 83% no es suficientemente alto.", "Un ciclo fallido prueba que todo el programa está roto."],
      correctIndex: 1,
      explanation: "Una tasa de éxito mixta es <strong>exactamente como se ve un buen PDCA</strong>. Una tasa de éxito del 100% sugeriría que las hipótesis eran demasiado seguras. La mejora continua se acumula a partir de cadenas de ciclos."
    },
    {
      prompt: "Un cliente dice: &ldquo;Estamos haciendo PDCA &mdash; agregamos una &lsquo;reunión PDCA&rsquo; los viernes al calendario.&rdquo; ¿Qué deberías aclarar?",
      options: ["Perfecto &mdash; una reunión los viernes asegurará una disciplina constante.", "PDCA es un ciclo aplicado a cambios específicos, no un formato de reunión. La disciplina es hipótesis &rarr; experimento &rarr; medición &rarr; decisión.", "Las reuniones de PDCA deberían realizarse dos veces por semana para mejorar la velocidad.", "La invitación del calendario valida que el equipo está haciendo PDCA correctamente."],
      correctIndex: 1,
      explanation: "PDCA no es una reunión; es un <strong>ciclo aplicado a un cambio</strong>. Un evento de calendario carece de sentido sin una hipótesis real, medición y una decisión honesta sobre trabajo real."
    }
  ]
}, "a3": {
  id: "a3",
  title: "Pensamiento A3",
  group: "Metodologías & Ciclos",
  duration: "30 min",
  executiveSummary: "A3—llamado así por el papel de tamaño A3 (~28×43 cm)—es un informe estructurado de una sola página que captura todo el arco de un esfuerzo de resolución de problemas: antecedentes, estado actual, meta, causa raíz, contramedidas, plan y seguimiento. La restricción física fuerza la claridad; el acto de redactar un A3 con un coach (el 'coach de A3') enseña el razonamiento estructurado. El A3 es a la vez una herramienta de pensamiento y una herramienta de comunicación.",
  whatYouGain: ["Crear informes de resolución de problemas de una sola página que los líderes ocupados realmente leen en cinco minutos", "Capturar el arco completo del pensamiento en un formato duradero que perdura por años", "Usar la redacción del A3 como mecanismo de coaching para enseñar el razonamiento estructurado a los ingenieros", "Reemplazar presentaciones de 40 diapositivas que nadie vuelve a leer con un solo A3 que se puede buscar", "Estandarizar la forma de resolución de problemas en toda tu organización o cuenta de cliente"],
  explanation: "<p>El diseño del A3 es disciplinado: <strong>Lado izquierdo (de arriba abajo):</strong> Antecedentes/contexto, Estado Actual (con datos/diagrama), Meta/Estado Objetivo. <strong>Lado derecho (de arriba abajo):</strong> Análisis de Causa Raíz, Contramedidas (qué hacer), Plan de Implementación (quién/qué/cuándo), Seguimiento (cómo verificar, sostener). Existen variantes—A3 de Propuesta para nuevas iniciativas, A3 de Estado para trabajo en curso, A3 de Estrategia para la planificación de Hoshin Kanri.</p><p>Disciplina: Una página. Dos si es absolutamente necesario; nunca tres. Los datos y las imágenes dominan; la prosa es mínima. La historia debe leerse de izquierda a derecha, de arriba abajo. El autor firma, el coach firma, el patrocinador firma. El antipatrón es el A3-como-diapositiva: si tu A3 cabe en una presentación de diapositivas, no es un A3—es un informe de estado disfrazado con la etiqueta.</p><p>El A3 es un mecanismo de coaching. El autor + coach + revisión iterativa ES la capacitación. Las reescrituras enseñan el razonamiento estructurado. El A3 final va a la base de conocimiento como una referencia permanente, no a una unidad compartida que nadie abre. Comparado con una larga presentación de diapositivas que se presenta una vez y rara vez se vuelve a abrir, un A3 bien formado puede leerse en unos pocos minutos y sigue siendo útil como referencia después.</p>",
  csamExample: "<p>Un CSAM cierra un compromiso importante con un cliente (migración de landing zone de Azure, programa de aceleración de consumo) como un A3. Antecedentes: la infraestructura heredada del cliente es costosa e inflexible; impide la adopción de servicios modernos de Azure. Estado Actual: el 40% de las cargas de trabajo siguen on-premises, los costos mensuales de la nube son de $180K, el tiempo de entrega de despliegues es de 6 semanas. Meta: migrar el 60% de las cargas de trabajo, reducir el gasto mensual en la nube un 25%, reducir el tiempo de entrega de despliegues a 2 semanas dentro de 6 meses. Causa Raíz (mediante Ishikawa): retrasos en la política de gobernanza, IaC inmadura, equipos no familiarizados con los patrones nativos de Azure. Contramedidas: establecer blueprints de landing zone, capacitar a los equipos en IaC + gobernanza de Azure, ejecutar Kaizen en el pipeline de despliegue. Plan: el CSA lidera el diseño en las semanas 1–4, el equipo del cliente implementa en las semanas 5–16. Seguimiento: el CSA revisa el progreso de la migración y las métricas de consumo cada 2 semanas; éxito = las métricas objetivo se cumplen y el consumo se acelera. El A3 se convierte en el contrato del compromiso y en el artefacto de conocimiento para futuras cuentas similares.</p>",
  csaExample: "<p>Un CSA completa un Kaizen sobre los incidentes de ImagePullBackOff de AKS y lo documenta como un A3. Antecedentes: los incidentes de producción le cuestan al cliente $50K/trimestre en tiempo de inactividad. Estado Actual: el Pareto muestra que el 41% de los incidentes son ImagePullBackOff; la causa raíz mediante 5 Por qué: las etiquetas de imagen mutables + el endpoint público de ACR permiten extraer imágenes obsoletas/incorrectas. Meta: eliminar los incidentes de ImagePullBackOff dentro de 6 semanas. Contramedidas: (1) exigir etiquetas inmutables mediante Azure Policy, (2) crear un endpoint privado de ACR, (3) conectar la autenticación con managed identity. Plan: el CSA programa la Política, el equipo del cliente implementa; probar primero en el clúster de dev. Seguimiento: gráfico de control sobre el tipo de incidente durante 8 semanas después del cambio. El A3 está firmado por el CSA, el ingeniero del cliente y el patrocinador; va al portafolio del CSA como artefacto de certificación y como referencia futura al entrenar programas de confiabilidad similares.</p>",
  recap: ["El A3 es de una página: Antecedentes, Estado Actual, Meta, Causa Raíz, Contramedidas, Plan, Seguimiento", "La restricción de una página fuerza la claridad y crea artefactos duraderos que perduran por años", "Autor del A3 + coach + reescrituras iterativas = capacitación de nivel belt en razonamiento estructurado", "Usa el A3 para cierres de DMAIC, presentaciones de Kaizen, certificación de Belt y para proponer programas", "Almacena los A3 en una base de conocimiento que se pueda buscar, no en una unidad compartida; los equipos futuros los vuelven a leer"],
  questions: [
    {
      prompt: "¿Cuáles son las siete secciones de un A3 estándar de resolución de problemas, en orden?",
      options: ["Introducción, Planteamiento del Problema, Análisis, Solución, Cronograma, Revisión, Aprobación.", "Antecedentes, Estado Actual, Meta, Causa Raíz, Contramedidas, Plan, Seguimiento.", "Título, Resumen, Métodos, Resultados, Acciones, Responsable, Firma.", "Apertura, Asunto, Investigación, Arreglo, Prueba, Cierre, Notas."],
      correctIndex: 1,
      explanation: "El A3 captura todo el arco de la resolución de problemas en una sola página: dónde empezamos, dónde estamos, a dónde queremos ir, por qué existe la brecha, qué hacer, el plan y cómo verificar &mdash; una <strong>narrativa completa</strong>."
    },
    {
      prompt: "¿Por qué la restricción de una página de un A3 es una fortaleza en lugar de una limitación?",
      options: ["Es más barato de imprimir y distribuir al equipo.", "Fuerza planteamientos de problema precisos y claridad &mdash; nadie vuelve a leer presentaciones de 40 diapositivas.", "Simplifica el envío por correo electrónico y reduce el tamaño de los archivos.", "Reduce el tiempo de edición y acelera las aprobaciones."],
      correctIndex: 1,
      explanation: "La <strong>restricción</strong> física de una página elimina el relleno, fuerza la priorización y crea un artefacto duradero que los equipos futuros vuelven a leer. La claridad y la reutilización son el producto."
    },
    {
      prompt: "¿Cuál es el rol de un coach de A3 en el proceso de desarrollo?",
      options: ["Escribir el A3 por el autor para que el proyecto avance más rápido.", "Revisar y desafiar &mdash; las reescrituras SON la capacitación, no el A3 final.", "Recopilar datos de los miembros del equipo y ensamblarlos en diapositivas.", "Obtener las firmas de los interesados y archivar el documento."],
      correctIndex: 1,
      explanation: "El desarrollo del A3 es un <strong>mecanismo de coaching</strong>. El autor reescribe varias veces bajo la guía del mentor; el aprendizaje ocurre en la iteración, no en el documento final."
    },
    {
      prompt: "¿Cuándo es el A3 el artefacto apropiado en lugar de una entrada rápida en un runbook?",
      options: ["Para cada incidente, sin importar su severidad o frecuencia.", "Para incidentes rutinarios de una sola vez &mdash; ahí un A3 es excesivo.", "Para incidentes repetidos o sistémicos donde la causa raíz y las contramedidas importan.", "Solo para incidentes Sev A que causan impacto al cliente."],
      correctIndex: 2,
      explanation: "Una entrada de dos líneas en un runbook maneja los incidentes de una sola vez. Un A3 con análisis de causa raíz es apropiado cuando el incidente <strong>se repite</strong> o revela brechas sistémicas."
    },
    {
      prompt: "¿Cuál es una señal de que un &ldquo;A3&rdquo; ha fracasado como herramienta de pensamiento?",
      options: ["Tiene demasiado espacio en blanco y elementos visuales.", "Se comprime ordenadamente en una presentación de PowerPoint de varias diapositivas.", "Un líder ocupado puede leerlo en cinco minutos.", "Documenta una iniciativa fallida con evidencia que la desmiente."],
      correctIndex: 1,
      explanation: "Si tu A3 cabe en una presentación de diapositivas, no es un A3 &mdash; es un <strong>informe de estado disfrazado con la etiqueta</strong>. El formato de una sola página es el mecanismo que fuerza el rigor del pensamiento."
    }
  ]
}, "failed-hypothesis": {
  id: "failed-hypothesis",
  title: "Cuando la Hipótesis Falla: Recuperar el Ciclo",
  group: "Metodologías & Ciclos",
  duration: "30 min",
  executiveSummary: "La mejora continua es ciencia aplicada: usas los datos que ya tienes para formar una hipótesis falsable—'si cambiamos X, la métrica Y mejorará porque [causa raíz]'—y luego la pruebas antes de comprometerte. A veces la prueba refuta la hipótesis, o el experimento en sí resulta estar empíricamente defectuoso. Ninguno de los dos es un fracaso del proyecto; una hipótesis refutada es un hallazgo, y uno barato cuando se detecta a escala piloto mediante una puerta de control. Este módulo explica cómo escribir y probar hipótesis de mejora a partir de los datos disponibles, cómo distinguir una idea genuinamente refutada de una prueba inválida, cómo debe reaccionar un practicante—de forma transparente, sin torturar los datos—y, de manera crucial, cómo restaurar el ciclo después de un intento fallido volviendo a la fase cuyo supuesto se rompió en lugar de abandonar el esfuerzo.",
  whatYouGain: [
    "Escribir declaraciones de hipótesis falsables y fundamentadas en datos, ligadas a una causa raíz confirmada y a un resultado medible",
    "Probar una hipótesis con honestidad: criterios de éxito preregistrados, una línea base estable y una verificación estadística real antes de escalar",
    "Distinguir una hipótesis verdaderamente refutada (prueba válida, idea equivocada) de una empíricamente defectuosa (prueba inválida, resultado no concluyente)",
    "Reaccionar a la evidencia que desmiente como un hallazgo—reportarla de forma transparente en lugar de mover los postes o hacer p-hacking de una victoria",
    "Recuperar un ciclo fallido volviendo en DMAIC, DMADV o PDCA a la fase cuyo supuesto se rompió, y luego re-establecer la línea base antes de la siguiente prueba"
  ],
  explanation: "<p><strong>CI es el método científico aplicado al trabajo.</strong> En lugar de actuar por opinión, usas los datos que ya tienes&mdash;telemetría, la línea base, un Pareto de defectos, temas de VOC&mdash;para formar una <strong>hipótesis falsable</strong> y luego probarla. Una buena hipótesis de mejora nombra cinco cosas: el <em>cambio</em> (X), el <em>efecto predicho</em> sobre una métrica específica (Y), la <em>justificación</em> (la causa raíz de Analizar que te hace creer que X impulsa Y), el <em>efecto mínimo que importaría</em>, y una <strong>hipótesis nula</strong> implícita ('el cambio no hace ninguna diferencia'). 'Si agregamos una caché de lectura directa, la latencia P95 bajará al menos un 30% porque los fallos de caché son el costo dominante' es comprobable; 'la caché hará las cosas más rápidas' no lo es.</p><p><strong>Mejor práctica para probarla.</strong> Antes de ejecutar el experimento, preregistra los criterios de éxito, el nivel de significancia (&alpha;), el tamaño de muestra a partir de un análisis de potencia, y el efecto mínimo significativo&mdash;para que no puedas mover los postes después. Valida el sistema de medición y confirma que el proceso es <strong>estable</strong> en un gráfico de control primero; una prueba sobre un proceso fuera de control mide ruido. Luego <strong>pilotea en pequeño</strong> para que el fracaso sea barato, y confirma el resultado con una prueba estadística (ver el módulo de p-value) antes de escalar. Comprométete de antemano con un plan de rollback. Esta es exactamente la razón por la que DMAIC y DMADV ponen puertas de control entre las fases: la puerta es donde se supone que una hipótesis débil debe fallar&mdash;de forma barata, a escala piloto, antes de un despliegue completo.</p><p><strong>Dos formas en que una hipótesis puede &lsquo;no confirmarse.&rsquo;</strong> Estas exigen respuestas opuestas, así que sepáralas antes de concluir nada. <strong>(1) Genuinamente refutada:</strong> la prueba fue válida y la idea simplemente estaba equivocada&mdash;el cambio no produjo ninguna mejora (o empeoró las cosas). Acéptalo. El método funcionó exactamente como fue diseñado; la puerta de control simplemente te salvó de escalar algo inútil. <strong>(2) Empíricamente defectuosa:</strong> la <em>prueba en sí</em> fue inválida, así que el resultado es <strong>no concluyente, no una refutación</strong>. Defectos comunes: un factor de confusión (una caída del tráfico durante la ventana de prueba), una línea base contaminada o inestable, una muestra con potencia insuficiente, error de medición, o baja <strong>fidelidad de implementación</strong> (el piloto nunca se ejecutó realmente como se diseñó). Ejecuta verificaciones de validez&mdash;confianza en el sistema de medición, estabilidad del proceso, factores de confusión, potencia, fidelidad&mdash;antes de decidir en qué caso estás. Una prueba defectuosa te dice algo sobre tu experimento, no sobre tu idea.</p><p><strong>Cómo debe reaccionar un practicante.</strong> Trata la evidencia que desmiente como datos, no como un fracaso personal o del equipo&mdash;la cultura debe ser <strong>sin culpas</strong> para que las personas saquen a la luz los resultados negativos en lugar de ocultarlos. Repórtalo de forma transparente. <em>No</em> tortures los datos para fabricar una victoria: nada de p-hacking, nada de HARKing (inventar una nueva hipótesis después de ver los datos y pretender que ese era el plan), nada de seleccionar el único subgrupo que se ve bien, nada de cambiar discretamente a una prueba de una cola o relajar el umbral. Captura el aprendizaje&mdash;un A3 que documenta la evidencia que desmiente es un activo permanente que evita que la organización repita el mismo callejón sin salida.</p><p><strong>Cómo restaurar el ciclo después de un intento fallido.</strong> Vuelve a la fase cuyo supuesto se rompió&mdash;no hasta el inicio. En <strong>DMAIC</strong>, una hipótesis de Mejorar refutada usualmente significa que la causa raíz de <strong>Analizar</strong> estaba equivocada o incompleta: regresa a Analizar, vuelve a divergir sobre las causas candidatas, vuelve a priorizar con los datos, y forma una nueva hipótesis. Si la línea base en sí era el problema, regresa a <strong>Medir</strong>; si el problema se definió mal, regresa a <strong>Definir</strong>. En <strong>DMADV</strong>, un diseño que falla en Verificar/Validar contra los CTQ te envía de vuelta a <strong>Diseñar</strong> para iterar&mdash;a menos que la verificación muestre que los requisitos mismos estaban equivocados, lo que te envía más aguas arriba. En <strong>PDCA</strong>, un Check fallido significa que <em>no</em> debes Actuar/estandarizar el cambio; Ajustas y ejecutas otro ciclo con una hipótesis revisada&mdash;PDCA es iterativo por diseño, y un ciclo fallido simplemente alimenta el siguiente Plan. En todos los casos: <strong>revierte el piloto</strong> para restaurar la línea base (el cambio se contuvo a escala piloto precisamente para que pudieras hacerlo), vuelve a confirmar la estabilidad del proceso, vuelve a establecer la línea base, y documenta el resultado negativo antes del siguiente experimento. El ciclo no se rompe por una hipótesis fallida&mdash;está haciendo su trabajo.</p>",
  csamExample: "<p>El equipo de un cliente está convencido de que agregar una capa de caché reducirá la latencia P95 de una API lenta en un 30%, y quiere desplegarla en toda la plataforma. El CSAM insiste primero en una prueba piloteada y preregistrada. El resultado del piloto: ningún cambio estadísticamente significativo (p = 0.6). El instinto del equipo es darle un giro&mdash;'tal vez ayude bajo mayor carga'&mdash;pero el CSAM detiene el movimiento de postes y trata la no confirmación como un hallazgo: la causa raíz de Analizar (los fallos de caché) estaba equivocada. El ciclo vuelve a Analizar, donde un nuevo Pareto y 5 Por qué revelan que el verdadero cuello de botella es un lock de serialización aguas abajo, no los fallos de caché. Se forma y se prueba una nueva hipótesis. El piloto fallido costó un sprint en lugar de un despliegue en toda la plataforma de un cambio que no hizo nada, y el CSAM registra el resultado negativo para que ningún otro equipo lo vuelva a ejecutar.</p>",
  csaExample: "<p>En un DMAIC de confiabilidad, la hipótesis de la fase de Mejorar de un CSA es 'duplicar el número de pods reducirá la latencia de la cola en un 25%.' El antes/después parece una victoria&mdash;hasta que el CSA ejecuta verificaciones de validez y descubre que la prueba está empíricamente defectuosa: la ventana posterior coincidió con una caída de tráfico por feriado (un factor de confusión), y el gráfico de control muestra que el proceso tuvo un cambio de causa especial a mitad de la prueba, por lo que nunca fue estable. Esto es no concluyente, no una prueba. En lugar de declarar una falsa victoria, el CSA regresa a Medir, vuelve a establecer la línea base sobre una ventana estable con el factor de confusión controlado, y vuelve a ejecutar el experimento con un tamaño de muestra precalculado. La nueva prueba muestra que el aumento de pods en realidad ayuda solo marginalmente; el verdadero arreglo es un cambio de prefetch del consumidor. Al negarse a dar por buena un resultado inválido, el CSA mantiene honesta la evidencia de la fase de Mejorar y sólida la decisión de despliegue.</p>",
  recap: [
    "CI es ciencia aplicada: usa los datos que ya tienes para escribir una hipótesis falsable (el cambio X mejora la métrica Y porque [causa raíz]), luego pruébala antes de comprometerte",
    "Una hipótesis refutada es un hallazgo, no un fracaso—y uno barato cuando una puerta de control la detecta a escala piloto antes de un despliegue completo",
    "Separa una idea genuinamente refutada (prueba válida, hipótesis equivocada—acéptala) de una prueba empíricamente defectuosa (inválida—no concluyente, así que arregla la prueba y vuelve a ejecutar)",
    "Reacciona de forma transparente y sin culpas; nunca hagas p-hacking, HARKing, selección de subgrupos, ni muevas los postes para fabricar una victoria",
    "Recupérate volviendo a la fase cuyo supuesto se rompió—DMAIC usualmente a Analizar, DMADV a Diseñar, PDCA hacia otro ciclo de Ajustar-y-reintentar",
    "Revierte el piloto, vuelve a confirmar la estabilidad, vuelve a establecer la línea base, y documenta el resultado negativo antes del siguiente intento—el ciclo no está roto, está funcionando"
  ],
  questions: [
    {
      prompt: "Una hipótesis de mejora se prueba con un experimento válido y bien potenciado, y queda claramente refutada. ¿Cómo debe verlo un practicante de CI?",
      options: [
        "Como un fracaso del proyecto que debería eliminarse discretamente del informe.",
        "Como un hallazgo legítimo—el método científico funcionando como fue diseñado—que evitó de forma barata escalar un cambio que no funciona.",
        "Como una razón para volver a ejecutar la prueba repetidamente hasta que eventualmente supere el umbral.",
        "Como una prueba de que la mejora continua no aplica a este proceso."
      ],
      correctIndex: 1,
      explanation: "Una hipótesis refutada a partir de una prueba válida es un <strong>hallazgo, no un fracaso</strong>. La puerta de control hizo su trabajo&mdash;detectó algo inútil a escala piloto antes de un costoso despliegue completo. Lo honesto es aceptar la evidencia y aprender de ella."
    },
    {
      prompt: "¿Cuál es la diferencia entre una hipótesis que está genuinamente refutada y una cuya prueba está empíricamente defectuosa?",
      options: [
        "No hay diferencia; ambas significan que el cambio debe abandonarse.",
        "Una hipótesis refutada provino de una prueba válida (la idea estaba equivocada); una prueba empíricamente defectuosa es inválida—no concluyente—así que arreglas la prueba y vuelves a ejecutar.",
        "Una hipótesis refutada significa que los datos fueron falsificados; una prueba defectuosa significa que el equipo carecía de un Black Belt.",
        "Una prueba defectuosa siempre prueba lo opuesto de la hipótesis."
      ],
      correctIndex: 1,
      explanation: "Una hipótesis <strong>refutada</strong> proviene de una prueba <em>válida</em>&mdash;la idea estaba equivocada. Una prueba <strong>empíricamente defectuosa</strong> (factores de confusión, línea base inestable, muestra con potencia insuficiente, baja fidelidad de implementación) es <em>inválida</em>, así que el resultado es <strong>no concluyente</strong>, no una refutación. Ejecuta verificaciones de validez antes de concluir."
    },
    {
      prompt: "En DMAIC, una hipótesis piloteada de la fase de Mejorar es refutada por una prueba válida. ¿A qué fase regresas con mayor frecuencia?",
      options: [
        "Definir&mdash;reiniciar todo el proyecto desde cero.",
        "Analizar&mdash;la causa raíz probablemente estaba equivocada o incompleta, así que vuelve a divergir sobre las causas y forma una nueva hipótesis.",
        "Controlar&mdash;estandarizar el cambio de todos modos y monitorearlo.",
        "Ninguna&mdash;abandonar el proyecto, ya que la hipótesis falló."
      ],
      correctIndex: 1,
      explanation: "Vuelve a la fase cuyo <strong>supuesto se rompió</strong>. Una hipótesis de Mejorar refutada usualmente significa que la causa raíz de <strong>Analizar</strong> estaba equivocada&mdash;regresa allí, vuelve a priorizar las causas con datos, y genera una nueva hipótesis. Solo vuelve a Medir o Definir si la línea base o la definición del problema fue el defecto."
    },
    {
      prompt: "¿Cuál reacción a la evidencia que desmiente es un mal uso a evitar?",
      options: [
        "Reportar el resultado negativo de forma transparente y documentarlo en un A3.",
        "Seleccionar el único subgrupo que se ve bien, o cambiar a una prueba de una cola, para fabricar una 'victoria.'",
        "Volver a Analizar para formar una nueva hipótesis mejor fundamentada.",
        "Revertir el piloto y volver a confirmar la línea base antes de la siguiente prueba."
      ],
      correctIndex: 1,
      explanation: "Torturar los datos&mdash;p-hacking, HARKing, seleccionar subgrupos, o mover los postes&mdash;fabrica una falsa confianza. Las respuestas disciplinadas (reporte transparente, volver atrás, revertir) son exactamente lo que mantiene honesto el ciclo."
    },
    {
      prompt: "En un ciclo PDCA, el paso de Check muestra que el cambio no produjo la mejora esperada. ¿Qué debes hacer?",
      options: [
        "Proceder a Act y estandarizar el cambio de todos modos, ya que ya lo construiste.",
        "No lo estandarices—Ajusta y ejecuta otro ciclo PDCA con una hipótesis revisada, revirtiendo el piloto para restaurar la línea base.",
        "Declarar el proceso incapaz de mejorar y detenerte.",
        "Reetiquetar los resultados del Check como un éxito para mantener el impulso."
      ],
      correctIndex: 1,
      explanation: "Un <strong>Check</strong> fallido significa que <em>no</em> debes Actuar/estandarizar. PDCA es iterativo: <strong>Ajusta</strong> y ejecuta otro ciclo con una hipótesis revisada, y revierte el piloto para restaurar la línea base. Un ciclo fallido simplemente alimenta el siguiente Plan."
    }
  ]
},
"control-charts": {
  id: "control-charts",
  title: "Gráficos de Control (SPC)",
  group: "Medición & Control",
  duration: "30 min",
  executiveSummary: "Un gráfico de control es una representación de serie temporal de una métrica de proceso con límites de control estadísticos (típicamente ±3σ) para distinguir la variación por causa común (ruido: el proceso es lo que es) de la variación por causa especial (señal: algo ha cambiado). El Control Estadístico de Procesos detecta la desviación antes que los clientes y demuestra que las mejoras se mantuvieron.",
  whatYouGain: ["Distinguir entre un problema real y la variación normal del proceso", "Detectar tempranamente la desviación del proceso, antes de incumplir el SLO y afectar al cliente", "Demostrar con estadística, no con afirmaciones, que las mejoras de Kaizen se mantienen", "Reducir el esfuerzo desperdiciado al reaccionar ante falsas alarmas y ruido", "Monitorear cualquier métrica CTQ: latencia, tasa de errores, costo, rendimiento, métricas de evaluación de IA"],
  explanation: "<p>Componentes de un gráfico de control: <strong>Línea Central (CL)</strong> = típicamente la media o la mediana. <strong>Límites de Control Superior/Inferior (UCL/LCL)</strong> = CL ± 3σ, donde σ es la desviación estándar dentro del subgrupo. <strong>Puntos</strong> = la métrica a lo largo del tiempo. Tipos comunes de gráficos: I-MR para valores individuales (p. ej., costo por día), X-R para medias de subgrupos (p. ej., latencia P95 por ventana de 5 min), gráfico p para proporción de defectuosos (p. ej., tasa de errores por despliegue), gráfico c para conteos de defectos por período.</p><p>Señales de causa especial (reglas de Western Electric / Nelson): (1) Un punto fuera de ±3σ, (2) 9 puntos consecutivos en un mismo lado de la CL, (3) 6 puntos consecutivos con tendencia ascendente o descendente, (4) 14 puntos alternando arriba/abajo, (5) 2 de 3 puntos consecutivos fuera de ±2σ del mismo lado. Cualquier regla que se active = investigue el proceso; no ajuste la configuración por variación de causa común. Antipatrón: mover los límites de control para 'absorber' la variación, lo que destruye la capacidad de señalización de la herramienta.</p><p>Cómo usarlo: (1) Establezca una línea base estable de 20–25 subgrupos, investigando y eliminando cualquier causa especial evidente. (2) Calcule la CL y los límites. (3) Grafique los datos continuos sobre la línea base fijada; no recalcule los límites en cada período. (4) Aplique las reglas; investigue las señales. (5) Vuelva a establecer la línea base solo después de un cambio deliberado y documentado del proceso.</p>",
  csamExample: "<p>Un CSAM usa gráficos de control en las revisiones QBR/EBR con el cliente para demostrar la salud de la cuenta. El CSA proporciona un gráfico de control de los costos de infraestructura del cliente por mes: CL $145K, UCL $180K, LCL $110K. Durante 6 meses, el costo es estable dentro de los límites. Tras un Kaizen para optimizar el gasto en RU/s de la base de datos, un gráfico de control con nueva línea base muestra CL $110K, UCL $130K. El CSAM le dice al CFO del cliente: 'Su plataforma ahora es estable en el nuevo nivel de costo más bajo. Nueve puntos consecutivos por debajo de la línea central anterior demuestran estadísticamente que la mejora se mantuvo.' Aumenta la confianza del liderazgo en el programa y el consumo de la cuenta.</p>",
  csaExample: "<p>Un CSA configura un Azure Workbook con gráficos de control para la latencia (P99) y la tasa de errores. La línea base son 4 semanas de datos de producción. Latencia P99: CL 312ms, UCL 410ms; gráfico p de tasa de errores: CL 0.3%, UCL 1.2%. Tras un Kaizen sobre la latencia de cola (ajuste del pool de conexiones), el CSA vuelve a establecer la línea base: P99 CL 187ms, UCL 245ms. El gráfico de control se fija y se muestra en el tablero de operaciones. Dos semanas después, aparece un pico: un punto de datos se dispara a 520ms (fuera del UCL). El runbook del CSA se activa: investigar esa hora en busca de cambios de infraestructura. Causa raíz encontrada: un balanceador de carga mal configurado en una región. Sin el gráfico de control, el pico habría parecido ruido.</p>",
  recap: ["Los límites de control separan la señal (causa especial) del ruido (causa común) usando la matemática de ±3σ", "Las reglas de Western Electric detectan causas especiales; investíguelas en lugar de ajustar el proceso", "Establezca la línea base con 20–25 subgrupos estables; fije los límites y vuelva a establecer la línea base solo tras un cambio deliberado", "Use gráficos de control en la fase de Control de DMAIC, en el monitoreo continuo de confiabilidad y en los informes QBR", "Los gráficos de control demuestran que las mejoras de Kaizen se mantuvieron, no que el cumplimiento fue cuestión de suerte"],
  questions: [
    {
      prompt: "¿Cuál es el propósito principal de trazar límites de control (típicamente &plusmn;3&sigma;) en un gráfico de métrica de proceso?",
      options: ["Establecer metas de producción que el equipo debe cumplir.", "Distinguir la variación por causa común de la causa especial.", "Predecir valores futuros de la métrica con certeza estadística.", "Reemplazar las pruebas de hipótesis estadísticas tradicionales."],
      correctIndex: 1,
      explanation: "Los límites de control separan el ruido (causa común &mdash; el proceso es lo que es) de la señal (causa especial &mdash; algo ha cambiado). Esto evita reaccionar de forma exagerada ante la <strong>variación</strong> normal."
    },
    {
      prompt: "¿Cómo debe responder cuando un único punto de la métrica cae fuera del límite de control superior?",
      options: ["Ajustar de inmediato la configuración del proceso para devolverlo a su sitio.", "Recalcular los límites de control para acomodar el nuevo dato.", "Investigar una causa especial según las reglas de Western Electric.", "Endurecer el SLO en un 10% para evitar que se repita."],
      correctIndex: 2,
      explanation: "Un punto fuera de &plusmn;3&sigma; es una <strong>señal de causa especial</strong> según las reglas de Western Electric. Investigue la causa; no ajuste el proceso por variación de causa común."
    },
    {
      prompt: "¿Cuándo debe recalcular y restablecer la línea base de los límites del gráfico de control?",
      options: ["Cada semana, para mantener los límites actualizados con los datos más recientes.", "Solo después de un cambio de proceso deliberado y documentado.", "Nunca, una vez que la línea base está establecida y fijada.", "Siempre que la métrica parezca fuera de control o preocupante."],
      correctIndex: 1,
      explanation: "Fije la línea base con 20&ndash;25 subgrupos estables. No recalcule en cada período &mdash; eso destruye la capacidad de señalización. <strong>Vuelva a establecer la línea base solo</strong> tras un cambio de proceso intencional."
    },
    {
      prompt: "¿Qué tipo de gráfico de control usaría para monitorear la latencia P99 medida en intervalos de 5 minutos?",
      options: ["I-MR (individuales y rango móvil) para valores únicos.", "Gráfico p (proporción de defectuosos) para resultados de aprobado/reprobado.", "Gráfico c (conteo de defectos) para conteos de defectos por período.", "X-R (medias de subgrupos y rango) para métricas agregadas."],
      correctIndex: 3,
      explanation: "La latencia P99 por ventana de 5 minutos son datos de subgrupo. X-R grafica la media y el rango de cada subgrupo &mdash; ideal para <strong>métricas de percentil</strong> a lo largo de ventanas de tiempo."
    },
    {
      prompt: "¿Qué indica una racha de nueve puntos consecutivos por debajo de la línea central?",
      options: ["El proceso está mejorando y se mantendrá mejorado automáticamente.", "Una señal de causa especial según la regla 2 de Western Electric.", "Variación normal de causa común; no se requiere acción.", "Los límites de control son demasiado estrechos y necesitan ampliarse."],
      correctIndex: 1,
      explanation: "Nueve puntos consecutivos en un mismo lado de la línea central es una <strong>señal de causa especial</strong> (regla 2 de Western Electric). En un contexto de Kaizen, esto confirma estadísticamente que la mejora se mantuvo."
    }
  ]
},
"process-capability": {
  id: "process-capability",
  title: "Capacidad de Proceso (Cp, Cpk)",
  group: "Medición & Control",
  duration: "30 min",
  executiveSummary: "La capacidad de proceso cuantifica qué tan bien un proceso estable cumple sus límites de especificación. Cp es la capacidad potencial; Cpk es la capacidad real considerando el centrado. Convención: Cpk ≥ 1.33 = capaz; ≥ 1.67 = altamente capaz; ≥ 2.0 = Six Sigma. Un Cpk bajo en un proceso dentro de especificación es una alerta temprana: el cumplimiento es suerte, no capacidad.",
  whatYouGain: ["Distinguir entre 'haber cumplido el SLO el trimestre pasado' y 'ser capaz de cumplir el SLO'", "Usar Cpk para predecir si el SLO se mantendrá a medida que crece la carga o aumenta la variación", "Saber cuánto margen tiene un servicio: ¿Es Cpk 0.33 (en riesgo) o 1.67 (cómodo)?", "Identificar si se debe reducir la variación (σ) o centrar la media (μ) para mejorar la capacidad", "Traducir los números de capacidad en declaraciones de riesgo en lenguaje de negocio para el liderazgo"],
  explanation: "<p><strong>Cp</strong> = (USL − LSL) / 6σ mide la capacidad potencial asumiendo que el proceso está centrado. <strong>Cpk</strong> = min((USL − μ)/3σ, (μ − LSL)/3σ) mide la capacidad real considerando si la media se sitúa descentrada. Convención: Cpk &lt; 1.0 = no capaz (se esperan defectos en operación normal), 1.0–1.33 = marginalmente capaz, 1.33–1.67 = capaz (objetivo estándar), 1.67–2.0 = altamente capaz, ≥ 2.0 = Six Sigma (~3.4 defectos por millón de oportunidades con desplazamiento).</p><p>Requisitos previos: (1) Proceso estable: confirme mediante un gráfico de control que se han eliminado las causas especiales. (2) Distribución normal, o transfórmela con Box-Cox; las métricas de cola pesada como la latencia a menudo necesitan capacidad basada en percentiles o métodos no paramétricos. (3) CTQ definido con límites de especificación superior/inferior. Ejemplo real: un cliente afirmó 'cumplimos nuestro SLO de latencia P99'. Análisis de capacidad: μ = 178ms, σ = 22ms, USL = 200ms, Cpk = 0.33. No capaz: el cumplimiento reciente es suerte. Tres meses después, un aumento rutinario de carga empujó la P99 más allá de 200ms; el Cpk lo había predicho.</p><p>Palancas de mejora: ¿Cpk bajo porque Cp es bajo? Reduzca la variación (mejora de proceso). ¿Cpk bajo porque la media está descentrada? Centre el proceso alejándolo de la especificación más cercana. Ambas palancas entregan una ganancia real de capacidad.</p>",
  csamExample: "<p>Un CSAM revisa trimestralmente la salud de la plataforma con el CTO de un cliente. Una métrica: el tiempo de respuesta P99 de la API. Estado actual: P99 = 178ms, límite de especificación (SLO) = 200ms. El CSAM presenta Cpk = 0.33: 'Está cumpliendo el SLO ahora, pero en realidad no es capaz. Su desviación estándar de 22ms es demasiado grande respecto a su margen de 22ms. A medida que crezca la carga del cliente, lo incumplirá.' El CTO se sorprende: el equipo creía que estaban sanos. El plan de mejora del CSA (optimizar consultas críticas, agregar caché) busca reducir σ a 10ms y recentrar a 150ms, con un Cpk proyectado de 1.67. El CSAM lo vincula al negocio: 'Con mayor capacidad, su plataforma sostiene el rendimiento a medida que escala el consumo con ese cliente empresarial.'</p>",
  csaExample: "<p>Un CSA calcula el Cpk del tiempo de ejecución de una Azure Function App. Línea base estable (verificada con gráfico de control): μ = 850ms, σ = 120ms, límite de especificación (SLO) = 1000ms. Cpk = (1000 − 850) / (3 × 120) = 0.42. No capaz. Análisis: una única consulta de base de datos en la ruta crítica consume 700ms en promedio, con alta varianza. Contramedida: agregar caché de resultados de consulta. Tras la mejora: μ = 320ms, σ = 40ms, Cpk = 2.27 (altamente capaz). El CSA fija un nuevo gráfico de control en la línea base mejorada y configura una alerta si el Cpk tiende por debajo de 1.67, como advertencia temprana antes de incumplir el SLO.</p>",
  recap: ["Cpk mide la capacidad real; Cp mide la potencial. Ambos requieren un proceso estable", "Cpk < 1.0 = no capaz. Cpk ≥ 1.33 es el objetivo estándar; ≥ 2.0 es Six Sigma", "¿Cpk bajo porque σ es alta? Reduzca la variación. ¿Porque μ está descentrada? Centre la media", "La capacidad es un indicador adelantado: Cpk 0.33 con rendimiento dentro de especificación predice un incumplimiento futuro", "Calcule el Cpk en la fase de Control de DMAIC, en revisiones trimestrales de salud y en discusiones de diseño de SLO"],
  questions: [
    {
      prompt: "¿Qué mide Cpk que Cp no mide?",
      options: ["La variación a largo plazo en lugar de la variación a corto plazo.", "El centrado del proceso &mdash; la capacidad real que considera si la media se sitúa a mitad de camino entre los límites de especificación.", "El número total de oportunidades por millón.", "Los puntajes de satisfacción del cliente frente a la especificación."],
      correctIndex: 1,
      explanation: "Cp = (USL &minus; LSL) / 6&sigma; asume que el proceso está centrado. <strong>Cpk</strong> = min((USL &minus; &mu;)/3&sigma;, (&mu; &minus; LSL)/3&sigma;) penaliza los procesos descentrados, por lo que refleja la capacidad del mundo real."
    },
    {
      prompt: "Un cliente dice &ldquo;cumplimos nuestro SLO de latencia P99 el trimestre pasado&rdquo;. El análisis de capacidad muestra Cpk = 0.33. ¿Qué le dice esto?",
      options: ["El SLO se está logrando con mucho margen.", "El proceso no es capaz &mdash; el cumplimiento reciente es suerte y los incumplimientos son predecibles a medida que crece la carga.", "Cpk no aplica a las métricas de latencia.", "El cliente debería endurecer la especificación de inmediato."],
      correctIndex: 1,
      explanation: "Cpk &lt; 1.0 significa que el proceso <strong>no es capaz</strong>. Cumplir la especificación es suerte, no capacidad. El trabajo del CSA es traducir el número en &ldquo;problemas por delante&rdquo; antes de que el siguiente aumento de carga cause un incumplimiento."
    },
    {
      prompt: "¿Qué valor de Cpk como regla general es el objetivo estándar para &ldquo;capaz&rdquo;?",
      options: ["Cpk &ge; 0.5", "Cpk &ge; 1.0", "Cpk &ge; 1.33", "Cpk &ge; 3.0"],
      correctIndex: 2,
      explanation: "La convención es <strong>Cpk &ge; 1.33 = capaz</strong>; &ge; 1.67 = altamente capaz; &ge; 2.0 es el objetivo Six Sigma (~3.4 defectos por millón de oportunidades con desplazamiento)."
    },
    {
      prompt: "¿Cuál es el requisito previo clave para que un cálculo de Cpk sea significativo?",
      options: ["El equipo debe tener al menos un miembro Black Belt.", "El proceso debe ser estable &mdash; primero se requiere un gráfico de control bajo control.", "El conjunto de datos debe tener al menos 1,000 observaciones.", "El cliente debe haber solicitado explícitamente un número de Cpk."],
      correctIndex: 1,
      explanation: "La capacidad de un <strong>proceso fuera de control no tiene sentido</strong>. Necesita un proceso estable (mediante gráficos de control) y límites de especificación CTQ definidos antes de que el Cpk tenga alguna señal."
    },
    {
      prompt: "El Cpk es bajo porque la variación es amplia y la media se sitúa cerca de un límite de especificación. ¿A qué dos palancas de mejora apunta esto?",
      options: ["Contratar más ingenieros y ejecutar más pruebas.", "Reducir la variación (&sigma;) y centrar la media (&mu;).", "Relajar la especificación y aceptar la variación.", "Aumentar el tamaño de la muestra y recalcular."],
      correctIndex: 1,
      explanation: "Las ganancias de Cpk provienen de dos palancas: <strong>reducir la variación</strong> (mejora de proceso, estrechar &sigma;) y <strong>centrar la media</strong> (alejar &mu; del límite de especificación más cercano). Ambas entregan una ganancia real de capacidad."
    }
  ]
},
"p-value": {
  id: "p-value",
  title: "El p-value (valor p): Señal vs Ruido",
  group: "Medición & Control",
  duration: "30 min",
  executiveSummary: "Un p-value (valor p) es la probabilidad de ver un resultado al menos tan extremo como el que usted observó, si la hipótesis nula (sin efecto real) fuera verdadera. Es la prueba de evidencia estándar para distinguir una mejora genuina de la variación aleatoria. En CI vive en las fases de Análisis y Mejora: antes de afirmar que un cambio funcionó, el p-value pregunta 'esta diferencia, ¿podría ser solo ruido?'. Bien usado, es la compuerta de pensamiento convergente que impide que un equipo cante victoria sobre un resultado que en realidad es azar. Mal usado —p-hacking, confundirlo con importancia, o leer 'sin diferencia' en un p alto— produce falsa confianza. Este módulo cubre qué significa, cómo se calcula, dónde corresponde, cómo se usa mal y cómo evitar las trampas.",
  whatYouGain: [
    "Enunciar con precisión qué es un p-value —y qué no es— para que nunca lo confunda con la probabilidad de que la hipótesis nula sea verdadera",
    "Calcular uno de principio a fin: plantear hipótesis, elegir la prueba correcta, calcular el estadístico, leer la probabilidad de cola, comparar con alfa",
    "Ubicar el p-value en Análisis y Mejora de DMAIC como la compuerta de evidencia que separa una mejora real del ruido",
    "Reconocer el mal uso —p-hacking, detención opcional, significancia estadística vs práctica, aceptar la hipótesis nula— cuando lo vea",
    "Aplicar las salvaguardas: preregistrar la prueba, dimensionar la muestra, reportar el tamaño del efecto y los intervalos de confianza, corregir por comparaciones múltiples"
  ],
  explanation: "<p><strong>Qué es.</strong> Un p-value responde una pregunta muy específica: <em>si realmente no hubiera efecto (la hipótesis nula, H<sub>0</sub>, es verdadera), ¿qué tan probable es que solo el muestreo aleatorio produzca un resultado al menos tan extremo como el que observé?</em> Un p-value pequeño significa que los datos serían sorprendentes bajo 'sin efecto', por lo que usted tiene evidencia en contra de la hipótesis nula. Un umbral común (el nivel de significancia, &alpha;) es 0.05. <strong>Qué no es:</strong> un p-value <em>no</em> es la probabilidad de que la hipótesis nula sea verdadera, ni la probabilidad de que su resultado haya ocurrido por azar, ni una medida de qué tan grande o importante es el efecto. p = 0.03 no significa '97% de probabilidad de que la mejora sea real'.</p><p><strong>Cómo calcularlo.</strong> La mecánica es siempre los mismos cinco pasos: (1) Plantee la hipótesis nula (p. ej., 'la latencia media después del cambio es igual a la media anterior') y la alternativa. (2) Elija la prueba que corresponda a sus datos y su pregunta&mdash;una <strong>prueba t de dos muestras</strong> para comparar dos medias, una <strong>prueba z de dos proporciones</strong> o <strong>chi-cuadrada</strong> para comparar tasas de defectos/aprobación, <strong>ANOVA</strong> para más de dos grupos, o una prueba no paramétrica (Mann-Whitney) cuando los datos están sesgados. (3) Calcule el estadístico de prueba a partir de la muestra (para una prueba t, aproximadamente la diferencia de medias dividida por su error estándar). (4) Encuentre el p-value: el área en la(s) cola(s) de la distribución de ese estadístico más allá del valor que observó&mdash;en la práctica lo lee de un software (scipy.stats de Python, R, Minitab, incluso una hoja de cálculo) en lugar de a mano. (5) Compare con &alpha;: si p &le; &alpha;, rechace la hipótesis nula; si p &gt; &alpha;, tiene evidencia insuficiente para rechazarla.</p><p><strong>Por qué importa para CI.</strong> La mejora continua está llena de comparaciones de antes/después, y todo proceso tiene variación natural. Sin una prueba, un equipo verá 'los incidentes bajaron de 8 a 6' y cantará victoria&mdash;cuando 6 podría ser una fluctuación ordinaria. El p-value es la <strong>compuerta de pensamiento convergente</strong>: obliga a tener evidencia antes del compromiso y protege contra la convergencia prematura. En <strong>Análisis</strong> de DMAIC confirma que un factor X sospechado está realmente asociado con el resultado Y, no por coincidencia. En <strong>Mejora</strong> confirma que el cambio piloto realmente movió la métrica más allá de lo que el ruido podría explicar. Es la versión formal de 'ir despacio para ir rápido'.</p><p><strong>Dónde, cuándo y cómo usarlo.</strong> Úselo cuando tenga variación y necesite distinguir la señal del ruido, y cuando los supuestos de datos de la prueba elegida se cumplan razonablemente. Decida &alpha; <em>y</em> el tamaño de la muestra <em>antes</em> de recopilar datos (un análisis de potencia le dice cuántas observaciones necesita para detectar un efecto que le importaría). Combine el p-value con un <strong>gráfico de control</strong> (¿el proceso es siquiera estable?) y siempre repórtelo junto con un <strong>tamaño del efecto y un intervalo de confianza</strong> para que la audiencia vea ambas cosas: '¿es real?' y '¿es lo suficientemente grande como para importar?'.</p><p><strong>Cómo se usa mal.</strong> (1) <strong>p-hacking / pesca:</strong> dividir los datos en muchos subgrupos o probar muchas métricas hasta que algo caiga por debajo de 0.05, y reportar solo eso. (2) <strong>Detención opcional:</strong> espiar el resultado en curso y detenerse en el momento en que p baja de 0.05&mdash;esto fabrica falsos positivos. (3) <strong>Significancia estadística vs práctica:</strong> con una muestra enorme, un cambio trivial de latencia de 2&nbsp;ms puede ser 'significativo' pero carente de sentido; a la inversa, una mejora real puede no alcanzar 0.05 en una muestra diminuta. (4) <strong>Aceptar la hipótesis nula:</strong> leer p &gt; 0.05 como 'se probó que no hay diferencia'&mdash;la ausencia de evidencia no es evidencia de ausencia. (5) <strong>Mala interpretación:</strong> tratar p como la probabilidad de que el resultado sea una casualidad, o cambiar a una prueba de una cola solo para colarse por debajo del umbral. (6) <strong>Ignorar los supuestos:</strong> ejecutar una prueba t sobre datos muy sesgados o un proceso inestable.</p><p><strong>Cómo evitar el mal uso.</strong> Preregistre la hipótesis, la prueba, &alpha; y el tamaño de la muestra antes de mirar los datos. Defina el efecto mínimo que realmente importaría al negocio, y reporte el <strong>tamaño del efecto y el intervalo de confianza</strong>, no solo el p-value. Dimensione la muestra con un análisis de potencia y no se detenga antes de tiempo. Cuando pruebe muchos factores a la vez, <strong>corrija por comparaciones múltiples</strong> (p. ej., Bonferroni). Verifique los supuestos de la prueba y use una alternativa no paramétrica cuando fallen. Exprese un p-value alto como 'evidencia insuficiente de una diferencia', nunca 'prueba de que no hay diferencia'. Y replique o confirme un resultado importante antes de apostar la hoja de ruta a él.</p>",
  csamExample: "<p>El líder de operaciones de un cliente informa con orgullo que un nuevo proceso de triaje redujo los incidentes mensuales de 8 a 6 &mdash;'una mejora del 25%'&mdash; y quiere desplegarlo en todas partes. El CSAM pone freno: con solo un mes de datos y una varianza históricamente alta de mes a mes, una prueba de dos muestras sobre el historial disponible da p = 0.18. Eso no es evidencia de un cambio real; 6 se ubica cómodamente dentro del ruido normal. El CSAM lo replantea: 'Esto podría estar funcionando, pero todavía no podemos distinguirlo de un buen mes. Mantengamos el cambio, recopilemos tres meses más y observémoslo en un gráfico de control antes de comprometer a la organización con él.' Esto evita la convergencia prematura &mdash;cantar victoria sobre el azar&mdash; y protege la credibilidad de la siguiente recomendación respaldada por evidencia.</p>",
  csaExample: "<p>Un CSA pone a prueba un cambio de caché en una Azure Function y ejecuta una prueba t de dos muestras sobre el tiempo de respuesta: antes &mu; = 850&nbsp;ms (n = 4,000), después &mu; = 320&nbsp;ms (n = 4,000), p &lt; 0.001. La mejora es real, no ruido&mdash;y el CSA reporta también el tamaño del efecto: una reducción del 62% con un intervalo de confianza del 95% de aproximadamente 510&ndash;550&nbsp;ms, por lo que es estadística y prácticamente significativa. En un segundo ajuste, la prueba devuelve p = 0.04 pero la media baja solo 3&nbsp;ms en una muestra de 500,000 llamadas. El CSA explícitamente no reclama una victoria: 'Estadísticamente detectable, prácticamente irrelevante'. Al predecidir el tamaño de la muestra y el efecto mínimo significativo, y al negarse a hacer p-hacking entre decenas de submétricas, el CSA mantiene honesta la evidencia de la fase de Mejora.</p>",
  recap: [
    "Un p-value es la probabilidad de un resultado al menos tan extremo como el observado si la hipótesis nula (sin efecto) fuera verdadera, no la probabilidad de que la hipótesis nula sea verdadera, ni una medida del tamaño del efecto",
    "Calcúlelo en cinco pasos: plantee hipótesis, elija la prueba correcta, calcule el estadístico, lea la probabilidad de cola, compare con alfa (comúnmente 0.05)",
    "En CI es la compuerta de evidencia en Análisis y Mejora de DMAIC: separa una mejora genuina de la variación ordinaria y evita la convergencia prematura",
    "Mal uso común: p-hacking, detención opcional, confundir significancia estadística con práctica, y leer 'sin diferencia' de un p-value alto",
    "Evite el mal uso: preregistre la prueba y el tamaño de la muestra, reporte el tamaño del efecto y los intervalos de confianza, corrija por comparaciones múltiples, verifique los supuestos y combínelo con un gráfico de control",
    "Responda siempre dos preguntas, no una: '¿Es real?' (p-value) y '¿Es lo suficientemente grande como para importar?' (tamaño del efecto)"
  ],
  questions: [
    {
      prompt: "¿Qué representa realmente un p-value?",
      options: [
        "La probabilidad de que la hipótesis nula sea verdadera.",
        "La probabilidad de observar un resultado al menos tan extremo como el visto, asumiendo que la hipótesis nula es verdadera.",
        "La probabilidad de que la mejora sea real y valga la pena desplegarla.",
        "El tamaño del efecto que produjo el cambio."
      ],
      correctIndex: 1,
      explanation: "Un p-value es la probabilidad de datos <strong>al menos tan extremos</strong> como los observados <em>si la hipótesis nula fuera verdadera</em>. No es la probabilidad de que la hipótesis nula sea verdadera, ni la probabilidad de que el resultado sea una casualidad, ni una medida de qué tan grande es el efecto."
    },
    {
      prompt: "En un proyecto DMAIC, ¿dónde corresponde más naturalmente el p-value?",
      options: [
        "En Definir, para redactar el enunciado del problema.",
        "En Análisis y Mejora, para confirmar que un factor está realmente relacionado con el resultado y que un cambio movió la métrica más allá del ruido.",
        "En Control, como única herramienta para el monitoreo continuo.",
        "No tiene ningún rol en CI; es puramente académico."
      ],
      correctIndex: 1,
      explanation: "El p-value es la <strong>compuerta de evidencia</strong> en Análisis (¿X está realmente asociado con Y?) y Mejora (¿el cambio superó la variación aleatoria?). Es el paso de pensamiento convergente que impide que un equipo cante victoria sobre el ruido."
    },
    {
      prompt: "Una prueba sobre 500,000 solicitudes muestra una reducción de latencia de 3 ms con p = 0.04. ¿Cuál es la interpretación correcta?",
      options: [
        "Una victoria clara &mdash; p &lt; 0.05, así que despliéguelo en todas partes de inmediato.",
        "Estadísticamente detectable pero prácticamente irrelevante; la significancia no es lo mismo que la importancia.",
        "La prueba es inválida porque la muestra es demasiado grande.",
        "El p-value prueba que el efecto de 3 ms es exactamente correcto."
      ],
      correctIndex: 1,
      explanation: "Con una muestra muy grande, un efecto trivial puede superar el umbral de &alpha;. Esta es la trampa de la <strong>significancia estadística vs práctica</strong>: reporte siempre el tamaño del efecto y juzgue el cambio frente a una diferencia mínima significativa."
    },
    {
      prompt: "¿Cuál de estos es un mal uso clásico de los p-values?",
      options: [
        "Decidir alfa y el tamaño de la muestra antes de recopilar datos.",
        "Probar muchos subgrupos o métricas hasta que uno caiga por debajo de 0.05 y reportar solo ese (p-hacking).",
        "Reportar un intervalo de confianza junto con el p-value.",
        "Corregir por comparaciones múltiples al ejecutar muchas pruebas."
      ],
      correctIndex: 1,
      explanation: "El <strong>p-hacking</strong> (y la detención opcional&mdash;espiar y detenerse cuando p baja de 0.05) fabrica falsos positivos. Las otras opciones son justamente las salvaguardas que evitan el mal uso."
    },
    {
      prompt: "Una comparación devuelve p = 0.18. ¿Cuál es la conclusión correcta?",
      options: [
        "Prueba que no hay diferencia entre los dos grupos.",
        "Hay evidencia insuficiente para rechazar la hipótesis nula; todavía no puede distinguir el efecto del ruido.",
        "La mejora tiene un 18% de probabilidad de ser real.",
        "Debería cambiar a una prueba de una cola para bajar de 0.05."
      ],
      correctIndex: 1,
      explanation: "Un p-value alto significa <strong>evidencia insuficiente de una diferencia</strong>&mdash;la ausencia de evidencia no es evidencia de ausencia. No prueba la igualdad, y recurrir a una prueba de una cola para forzar la significancia es en sí mismo un mal uso."
    }
  ]
},
"value": {
  id: "value",
  title: "Valor",
  group: "Definición de Valor & Calidad",
  duration: "30 min",
  executiveSummary: "El valor es cualquier cosa que el cliente esté dispuesto a financiar, expresado en sus términos, no en los del CSA. Toda actividad de un compromiso es de valor agregado (VA), no-valor-agregado necesario (NNVA), o desperdicio puro (NVA). Definir el valor con precisión es la jugada que separa los compromisos que se justifican a sí mismos en la renovación de aquellos que producen movimiento sin resultado.",
  whatYouGain: [
    "Conversaciones de renovación fundamentadas en resultados medidos del cliente en lugar de registros de actividad",
    "Un marco para decir 'no' a solicitudes de bajo valor sin dañar las relaciones",
    "La capacidad de justificar las horas del CSA ante el liderazgo mediante resultados, no esfuerzo",
    "Una forma estructurada de encontrar y eliminar el 40% del tiempo de calendario que es desperdicio puro",
    "Claridad del compromiso: optimizaciones de costo justificadas por un impacto de negocio real para el cliente"
  ],
  explanation: "<p>El calendario de un CSA se llena solo de trabajo de bajo valor: reuniones de estado recurrentes, pilotos exploratorios que nunca se lanzan, presentaciones reescritas para nuevos interesados. Sin un lente de valor explícito, el compromiso parece ocupado y no produce nada que el cliente vaya a defender en la renovación. Con un lente de valor, toda actividad se cuestiona frente a '¿qué pagaría el cliente por esto si se le facturara?'.</p><p>El valor tiene tres encuadres útiles: <strong>Definido por el cliente</strong> (el valor es lo que el cliente pagaría; si no lo ve ni lo mide, no es valor para él); <strong>Con forma de resultado, no de salida</strong> ('Entregamos la evaluación WAF' es una salida; 'Reducimos el tiempo de inactividad no planificado en un 40% durante 90 días' es un resultado); y <strong>los tres cubos de Lean</strong>: Valor agregado (VA) transforma el servicio de una manera por la que el cliente pagaría; No-valor-agregado (NVA) es desperdicio puro a eliminar; No-valor-agregado necesario (NNVA) lo exige el cumplimiento o el contrato pero no crea valor directamente: minimícelo, no lo elimine.</p><p>Un compromiso sano es mayormente VA, con un NNVA deliberadamente pequeño, y elimina NVA continuamente. La mayoría de los compromisos que se descarrilan están cargados de NVA sin que nadie lo note. Durante una auditoría, un CSA típico descubre 38% VA, 22% NNVA, 40% NVA. Ese 40% de NVA &mdash;reuniones redundantes, presentaciones duplicadas, reexplicar la misma arquitectura a nuevos interesados&mdash; es la oportunidad de recuperación.</p>",
  csamExample: "<p><strong>Escenario CSAM:</strong> Usted gestiona la renovación de una cuenta estratégica. En lugar de comenzar con un resumen de actividades ('entregamos 47 hallazgos WAF, realizamos 12 sincronizaciones de arquitectura, produjimos 8 presentaciones'), comienza con el valor en el lenguaje del cliente: 'Redujimos los incidentes Sev B de 312/mes a 84/mes (mejora del 73%), recortamos el gasto de AKS de $4.20 a $2.85 por 1M de transacciones, y ganamos 30 puntos de seguridad de Defender, llevando a la organización de 58 a 88 en el modelo de madurez del CSA.' Usted creó un tablero trimestral que rastrea estos resultados, vinculó cada actividad del compromiso a una de estas métricas, y clasificó el 40% de las actividades del trimestre anterior como NVA, que eliminó. La conversación de renovación ahora está anclada en el impacto de negocio, no en el esfuerzo.</p>",
  csaExample: "<p><strong>Escenario CSA:</strong> Su cliente pide un hackathon de 3 días sobre Azure AI Foundry. Suena divertido, pero la columna de valor de su compromiso es 'confiabilidad de la API de checkout (P95 < 400ms) y costo de AKS (≤ $2.85/1M txns)'. El hackathon de IA no se mapea a ninguno de los dos. Usted lo replantea: 'Esto tiene un valor potencial alto, pero no encaja en el enunciado de valor del compromiso actual. Agreguémoslo al alcance del próximo trimestre si su patrocinador de negocio está de acuerdo, o ejecutémoslo como un compromiso FastTrack separado.' Resultado: el hackathon ocurre el siguiente trimestre con el patrocinio adecuado y una meta de valor definida; ambos compromisos se mantienen coherentes en valor, y usted ha protegido el sprint de 90 días enfocado en los resultados por los que el cliente está pagando ahora.</p>",
  recap: [
    "El valor lo define el cliente y tiene forma de resultado, medido en la moneda del cliente ($ ahorrados, tiempo de inactividad evitado, time-to-market, puntos de secure-score), nunca en la actividad del CSA",
    "Clasifique todas las actividades en VA (valor agregado), NNVA (no-valor-agregado necesario) y NVA (desperdicio puro): la mayoría de los compromisos son 40% NVA y pueden recuperar ese tiempo de inmediato",
    "Etiquete cada actividad con un vínculo de valor medible: si no puede trazar la línea desde la actividad hasta un resultado del cliente, la actividad es sospechosa",
    "En la admisión, pregunte al cliente: 'Si nos recortan a la mitad en 12 meses, ¿qué pelearía por conservar?'. Esa respuesta es la columna de valor del compromiso",
    "Reporte el valor en el EBR/QBR en una sola diapositiva, en los términos del cliente, sin métricas de actividad del CSA: esta diapositiva vale más para la renovación que 30 diapositivas de actividad"
  ],
  questions: [
    {
      prompt: "¿Quién define el valor en un compromiso Lean?",
      options: [
        "El CSA, con base en la excelencia técnica.",
        "El cliente — en sus propios términos (ingresos, tiempo de inactividad, $ ahorrados, time-to-market, ingenieros desbloqueados).",
        "El liderazgo de Microsoft, con base en prioridades estratégicas.",
        "El equipo de cuenta, con base en metas de consumo."
      ],
      correctIndex: 1,
      explanation: "El valor siempre se enuncia en <strong>el vocabulario del cliente</strong>. Si el cliente no lo ve, no se entera ni lo mide, no es valor para él, sin importar cuán virtuosa se sienta la actividad internamente."
    },
    {
      prompt: "¿Cuáles son los tres cubos de Lean para clasificar actividades?",
      options: [
        "Prioridad Alta, Media, Baja.",
        "Valor agregado (VA), No-valor-agregado (NVA) y No-valor-agregado necesario (NNVA).",
        "Estratégico, Táctico, Operativo.",
        "Planificar, Hacer, Verificar."
      ],
      correctIndex: 1,
      explanation: "VA transforma el producto de una manera por la que el cliente pagaría; <strong>NVA es desperdicio puro</strong> a eliminar; NNVA (p. ej., evidencia de SOC 2) es requerido pero no crea valor directamente: minimícelo."
    },
    {
      prompt: "Un CSA clasifica los últimos 90 días como 38% VA, 22% NNVA, 40% NVA. ¿Qué señala esto?",
      options: [
        "El compromiso es sano porque más de un tercio es VA.",
        "El 40% de NVA es la oportunidad de recuperación — consolide reuniones, elimine presentaciones duplicadas, automatice el resto.",
        "El CSA debería solicitar más presupuesto para absorber la sobrecarga.",
        "El NNVA debe reducirse a cero antes que cualquier otra cosa."
      ],
      correctIndex: 1,
      explanation: "Un compromiso sano es mayormente VA con un NNVA deliberadamente pequeño. <strong>El 40% de NVA es la oportunidad</strong>; ahí es donde se puede recuperar tiempo de calendario y redirigirlo a trabajo de valor agregado que el cliente defenderá en la renovación."
    },
    {
      prompt: "¿Cómo se debe medir el valor?",
      options: [
        "Por la cantidad de reuniones asistidas y tickets cerrados.",
        "En la moneda del cliente — $ ahorrados, tiempo de inactividad evitado, horas-ingeniero desbloqueadas, time-to-market acortado, secure-score ganado.",
        "Por el total de horas del CSA facturadas a la cuenta.",
        "Por la cantidad de diapositivas producidas para el QBR."
      ],
      correctIndex: 1,
      explanation: "La actividad no es valor. Mida en <strong>la moneda del cliente</strong>: impacto en $, minutos de inactividad evitados, RU/s recuperadas, delta de NSAT. \"Horas entregadas\" y \"presentaciones producidas\" son insumos, no resultados."
    },
    {
      prompt: "El CFO de un cliente usa un tablero de gasto de Power BI que construyó el CSA para aprobar $1.2M en modernización. ¿Es este tablero VA, NVA o NNVA?",
      options: [
        "NVA — un reporte que no cambia nada directamente.",
        "NNVA de alto valor — requerido para la decisión pero sin transformar directamente el producto, y claramente previo al valor financiado.",
        "VA solo si está automatizado.",
        "Sobrecarga pura que debería eliminarse."
      ],
      correctIndex: 1,
      explanation: "El pensamiento de valor es <strong>sensible al contexto</strong>. Un tablero que conduce a $1.2M de modernización financiada no es desperdicio aunque no transforme directamente un servicio. El tablero es el medio; el financiamiento es el valor."
    }
  ]
},
"voc": {
  id: "voc",
  title: "Voz del Cliente (VOC)",
  group: "Definición de Valor & Calidad",
  duration: "30 min",
  executiveSummary: "La Voz del Cliente (VOC) es la captura estructurada de lo que los clientes realmente necesitan, expresado en sus propias palabras, y la traducción de esas necesidades en requisitos medibles (CTQs). Sin VOC, los equipos optimizan lo que es conveniente medir en lugar de lo que los clientes valoran, lo que desperdicia esfuerzo de ingeniería y desvía las prioridades del compromiso.",
  whatYouGain: [
    "Alineación sobre lo que realmente le importa al cliente, no sobre lo que el equipo supone que importa",
    "Descubrimiento de expectativas no expresadas (requisitos 'básicos' de Kano) antes de que se conviertan en escalaciones",
    "Identificación de deleitadores: capacidades que impulsan desproporcionadamente la renovación y la satisfacción",
    "Un marco para refrescar las prioridades del cliente con cadencia, detectando la deriva antes de que la estrategia del compromiso se vuelva obsoleta",
    "Prevención de la sobreingeniería de funciones ante las que los clientes son indiferentes"
  ],
  explanation: "<p>Un equipo de SRE mejoró la latencia P50 durante 8 meses. Las entrevistas de VOC con los consumidores aguas abajo revelaron que solo les importaban la P99 y el TTFB. Ocho meses de trabajo real y medible fueron irrelevantes para la necesidad real. <strong>Los ingenieros optimizan lo que es medible; lo que es medible rara vez es lo que los clientes valoran. La VOC cierra esa brecha.</strong></p><p>La VOC tiene tres etapas: <strong>Capturar</strong> (declaraciones del cliente en sus palabras, citas textuales, observaciones), <strong>Traducir</strong> (agrupar las citas en enunciados de necesidad) y <strong>Especificar</strong> (convertir las necesidades en especificaciones medibles mediante CTQs). Las fuentes de captura incluyen entrevistas y observaciones directas (mayor fidelidad), tickets de soporte y comentarios de NPS (gratuitos, con pérdidas), telemetría (lo que los clientes hacen, no solo lo que dicen) y sustitutos internos como el equipo de cuenta (útiles pero sesgados).</p><p><strong>Formas de recopilar VOC.</strong> Elija el instrumento según la pregunta que necesite responder, y triangule entre varios&mdash;cada uno conlleva un sesgo distinto. Las <strong>entrevistas estructuradas</strong> y la <strong>observación contextual (Gemba)</strong> dan la mayor fidelidad y revelan necesidades no expresadas, pero cuestan tiempo y alcanzan a pocas personas. Las <strong>encuestas</strong> escalan: NPS mide lealtad y promoción, CSAT mide la satisfacción con una interacción específica, y CES (Customer Effort Score) mide qué tan difícil fue lograr algo&mdash;elija la que corresponda a la decisión. Los <strong>tickets de soporte, escalaciones y comentarios textuales de NPS</strong> son gratuitos y continuos pero con pérdidas y sesgados hacia los que se quejan. La <strong>telemetría y los datos de comportamiento</strong> muestran lo que los clientes realmente hacen en lugar de lo que dicen&mdash;las dos cosas a menudo no coinciden. Las <strong>entrevistas de ganados/perdidos y de abandono</strong> exponen las necesidades que impulsaron una decisión de compra o de salida. Los <strong>sustitutos internos</strong> (el equipo de cuenta) son convenientes pero sesgados&mdash;úselos para formar hipótesis, luego confírmelas directamente con el cliente. La disciplina: nunca dependa de una sola fuente, y pondere la señal directa y empírica por encima de las afirmaciones de segunda mano o autorreportadas.</p><p>El modelo Kano ofrece un encuadre útil: los requisitos <strong>Básicos / Imprescindibles</strong> son expectativas no expresadas: los clientes los esperan; su ausencia mata la satisfacción; su presencia es invisible. Los requisitos de <strong>Desempeño / Lineales</strong> escalan la satisfacción con el desempeño (más es mejor). Los requisitos <strong>Deleitadores / de Entusiasmo</strong> los clientes no saben pedirlos; su presencia crea lealtad. La VOC protege contra una falla común del compromiso: entregar excelencia técnica que el cliente no necesitaba.</p><p><strong>Incorporar la VOC a la mejora continua.</strong> La VOC es la puerta de entrada del ciclo de CI. En <strong>Definir</strong> establece el problema y los CTQs que se vuelven su línea base y criterios de éxito; en <strong>Medir</strong> y <strong>Analizar</strong> lo mantiene anclado a la métrica que el cliente realmente valora; en <strong>Verificar</strong> usted valida la mejora frente a la VOC original en lugar de un sustituto interno; y usted <strong>refresca la VOC con cadencia</strong> (trimestral es un valor predeterminado sensato) porque las necesidades cambian y el CTQ de ayer queda obsoleto en silencio. Pase las declaraciones capturadas por un Pareto de temas codificados para decidir qué necesidad abordar primero, luego convierta el tema principal en un CTQ SMART para que el siguiente ciclo PDCA mejore algo que el cliente realmente sentirá.</p>",
  csamExample: "<p><strong>Escenario CSAM:</strong> Durante las revisiones de negocio trimestrales, usted realiza breves entrevistas de VOC con los patrocinadores de negocio del cliente (CFO, CTO, VP de producto). Hace preguntas abiertas como 'Cuénteme sobre su mayor frustración con nuestro compromiso actual' y '¿Qué agregaría a la hoja de ruta del próximo trimestre si el presupuesto no fuera una restricción?'. Las respuestas se categorizan como Básico (p. ej., 'los logs deben persistir 90 días'), Desempeño (p. ej., 'la latencia de checkout importa') o Deleitador (p. ej., 'entorno de desarrollo local reproducible con un clic'). El deleitador que costó 2 semanas de implementación movió la tasa de renovación 18 puntos en la cohorte que lo usó. Usted comparte este hallazgo con el ejecutivo de cuenta y el CSM, anclando la próxima expansión de contrato en estas prioridades validadas por el cliente en lugar de en supuestos internos de la hoja de ruta de Microsoft.</p>",
  csaExample: "<p><strong>Escenario CSA:</strong> Durante la fase de Definir de un proyecto DMAIC, usted ejecuta entrevistas de VOC con los equipos de SRE y de aplicación del cliente. Observa su flujo de triaje de incidentes y pregunta '¿Cuál es la métrica que lo convencería de que el problema de confiabilidad está resuelto?'. Captura textualmente: 'Latencia P99 por debajo de 400ms durante el pico'. También descubre que monitorean tanto Azure Monitor como un stack de observabilidad heredado on-premises: la VOC revela que el requisito 'los logs deben persistir 90 días' no estaba en la arquitectura de Azure. Usted traduce estas capturas en CTQs: P99 ≤ 400ms (ventanas de 5 min, últimos 7 días); ≥ 99.95% de tasa de éxito (28 días móviles); retención de logs de 90 días con capacidad de búsqueda. Estos CTQs se convierten en los criterios de éxito del project charter y en la definición del SLO.</p>",
  recap: [
    "La VOC captura lo que los clientes necesitan en sus propias palabras, no lo que el equipo hipotetiza; las preguntas abiertas y la observación directa funcionan mejor que las encuestas",
    "Traduzca la VOC en tres categorías de Kano: Básico (expectativas no expresadas que matan la satisfacción si faltan), Desempeño (más es mejor) y Deleitador (crea lealtad desproporcionada)",
    "Refresque la VOC con cadencia (trimestral recomendado): las necesidades del cliente evolucionan; los supuestos no documentados se deterioran e impulsan la optimización hacia lo que solía importar",
    "Use la VOC para anclar la traducción de CTQ: convierta los enunciados de necesidad en requisitos de especificación SMART que se conviertan en CTQs, project charters y SLOs",
    "La VOC evita la sobreingeniería: los equipos que optimizan lo que pueden medir sin VOC entregan funciones que los clientes no valoran"
  ],
  questions: [
    {
      prompt: "Un equipo de SRE ha mejorado la latencia P50 durante 8 meses. Las entrevistas de VOC revelan que los consumidores aguas abajo solo se preocupan por la P99 y el TTFB. ¿Qué enseña esto sobre la VOC?",
      options: [
        "Las mejoras de P50 siempre son esfuerzo desperdiciado.",
        "Sin VOC, los equipos optimizan lo que es conveniente medir en lugar de lo que los clientes valoran — 8 meses de trabajo real fueron irrelevantes para la necesidad real.",
        "El trabajo de P99 siempre debe comenzar antes que el de P50.",
        "El equipo de SRE debería haber rechazado el proyecto."
      ],
      correctIndex: 1,
      explanation: "Los ingenieros optimizan lo que es medible; lo que es medible rara vez es lo que los clientes valoran. <strong>La VOC cierra esa brecha</strong> — sin ella, la excelencia técnica y el valor para el cliente se distancian."
    },
    {
      prompt: "¿Cuáles son las tres etapas de un esfuerzo de VOC?",
      options: [
        "Encuestar, Analizar, Reportar.",
        "Capturar (citas textuales), Traducir (a enunciados de necesidad), Especificar (a CTQs con métricas).",
        "Planificar, Hacer, Verificar.",
        "Detectar, Triar, Mitigar."
      ],
      correctIndex: 1,
      explanation: "La VOC avanza de <strong>Capturar → Traducir → Especificar</strong>. Las citas textuales preservan el matiz, los enunciados de necesidad agrupan los temas, y los CTQs convierten las necesidades en especificaciones medibles con metas."
    },
    {
      prompt: "En el modelo Kano, ¿qué es un requisito \"Básico / Imprescindible\"?",
      options: [
        "Una mejora que los clientes solicitan activamente y aman.",
        "Algo que los clientes esperan — su ausencia mata la satisfacción, pero su presencia es invisible (se da por sentada).",
        "Un deleitador opcional que el equipo puede agregar cuando la capacidad lo permita.",
        "Un elemento regulatorio relevante solo en auditorías."
      ],
      correctIndex: 1,
      explanation: "Los requisitos <strong>Básicos / Imprescindibles</strong> son expectativas no expresadas — como \"los logs deben persistir 90 días para auditoría\". Su ausencia rompe la confianza; su presencia no gana crédito. La VOC es la forma de revelarlos."
    },
    {
      prompt: "¿Cuál es la forma recomendada de capturar la VOC?",
      options: [
        "Una encuesta de opción múltiple de 4 preguntas diseñada por ingenieros.",
        "Preguntas abiertas (\"Cuénteme sobre su último mal día con X\"), observar además de preguntar, y capturar citas textuales.",
        "Una muestra de entrevistas solo con el liderazgo.",
        "Usar solo tickets de soporte y omitir el contacto directo."
      ],
      correctIndex: 1,
      explanation: "<strong>Preguntas abiertas y observación directa</strong> con captura textual. Una encuesta diseñada por ingenieros captura las hipótesis del equipo, no la voz del cliente — ese es el antipatrón a evitar."
    },
    {
      prompt: "¿Por qué se debe refrescar la VOC con cadencia en lugar de tratarla como algo de una sola vez?",
      options: [
        "Porque las regulaciones exigen entrevistas trimestrales con los clientes.",
        "Las necesidades del cliente evolucionan y los supuestos no documentados se deterioran; una VOC obsoleta impulsa la optimización hacia lo que solía importar.",
        "Porque los equipos de métricas exigen entrada de datos recurrente.",
        "Porque el modelo Kano se reinicia cada trimestre."
      ],
      correctIndex: 1,
      explanation: "<strong>Las necesidades del cliente evolucionan.</strong> El deleitador de ayer se convierte en el básico de hoy; el dolor de hoy se convierte en el problema resuelto de mañana. Una VOC recurrente mantiene el compromiso apuntado a lo que importa ahora."
    }
  ]
},
"ctq": {
  id: "ctq",
  title: "Crítico para la Calidad (CTQ)",
  group: "Definición de Valor & Calidad",
  duration: "30 min",
  executiveSummary: "Los árboles de Crítico para la Calidad (CTQ) traducen las necesidades cualitativas del cliente provenientes del VOC en especificaciones concretas, medibles y alcanzables, con metas y límites. Un CTQ tiene tres elementos: una necesidad, un driver (la dimensión de esa necesidad) y un requisito (meta + límites de especificación). Sin CTQ, las necesidades del cliente quedan demasiado vagas como para diseñar en función de ellas o medir el progreso.",
  whatYouGain: [
    "Conversión de expectativas difusas del cliente en contratos verificables y medibles",
    "Límites de especificación (USL, LSL) para análisis de capacidad de proceso y gráficos de control",
    "Alineación entre el lenguaje del cliente y las métricas de ingeniería: nada de 'rápido' o 'confiable', solo P99 ≤ 800ms o ≥ 99,95% de disponibilidad",
    "Documentación de SLO/SLA que refleja el árbol CTQ, reduciendo la duplicación y la deriva",
    "Un marco para pruebas de aceptación que refleja lo que el cliente realmente valora, no la conveniencia de ingeniería"
  ],
  explanation: "<p>La expectativa de un cliente de que 'la API debe ser rápida' no te dice nada. Un CTQ la convierte: dimensión = tiempo de respuesta; meta = P99 ≤ 800ms; límites de especificación = 0 a 800ms; ventana de medición = ventanas de 5 min durante los últimos 7 días. Antes del CTQ: 18 meses de desacuerdo sobre qué significa 'rápido'. Después: un número, un tablero y un SLO.</p><p>Un árbol CTQ tiene tres niveles: <strong>Necesidad</strong> ('Checkout rápido'), <strong>Driver</strong> (la dimensión de esa necesidad: tiempo de respuesta, tasa de reintentos, etc.) y <strong>Requisito</strong> (una especificación: P99 ≤ 800ms en ventanas de 5 min). Los buenos requisitos CTQ son Específicos (una sola dimensión), Medibles (datos ya recopilados o recopilables), Alcanzables (probadamente posibles), Relevantes para el cliente (mover esto mueve la satisfacción), Acotados en el tiempo (¿en qué ventana?) y Acotados (tanto USL como LSL, o uno con una justificación declarada).</p><p>Los CTQ vienen emparejados con el trabajo de capacidad de proceso: son los límites de especificación que usa el cálculo de Cpk. Los CTQ se convierten en los criterios de éxito de los chárter de proyecto, las métricas de la fase Measure de DMAIC, las especificaciones de los gráficos de control y el contrato del traspaso. La disciplina de redactar CTQ es el momento en que las expectativas difusas se vuelven contratos verificables y el puente entre Define y Measure en DMAIC.</p>",
  csamExample: "<p><strong>Escenario CSAM:</strong> El liderazgo de producto del cliente quiere un 'mejor time-to-market'. En lugar de lanzarte a una propuesta de modernización, pides un CTQ. La conversación: '¿Cuál es la diferencia medible que te gustaría ver?' Respuesta: 'Lead time por debajo de 1 día P90; tasa de fallas en cambios por debajo de 5%.' Documentas el CTQ en el chárter del compromiso: dos dimensiones (lead time y CFR), dos metas, dos ventanas de medición (P90, 90 días móviles) y la fuente de datos (métricas de CI/CD). Este CTQ se convierte en el criterio de éxito del trimestre, y en la historia que cuentas en la renovación: 'El lead time bajó de 7 días a 18 horas; el CFR cayó de 18% a 3%.' El CFO entiende lo que significa entregar más rápido para los ingresos.</p>",
  csaExample: "<p><strong>Escenario CSA:</strong> El equipo de tu cliente necesita 'consultas de Cosmos confiables'. Construyes un árbol CTQ: Necesidad = consultas confiables; Driver = consumo de RU P99 por consulta; Requisito = ≤ 12 RU P99, medido a partir de la telemetría a nivel de consulta durante 24 horas móviles. Durante la fase Measure, estableces la línea base del estado actual (P99 es 34 RU), fijas los límites del gráfico de control (UCL = 12, LCL = 0) y lo usas para evaluar el rediseño de la clave de partición: éxito significa P99 ≤ 12 RU en estado estable. El CTQ es además la prueba de aceptación del cambio de código: no hay despliegue sin el desplazamiento de la línea base hacia el requisito.</p>",
  recap: [
    "El CTQ es el puente entre Define (VOC) y Measure (DMAIC): convierte las necesidades del cliente en especificaciones medibles con metas y límites",
    "Tres niveles: Necesidad (lo que el cliente quiere) → Driver (dimensión) → Requisito (meta + USL/LSL + ventana de medición)",
    "Redacta los CTQ junto con el cliente y el equipo de ingeniería: las especificaciones redactadas por ingeniería suelen fijar metas más estrictas que la necesidad real del cliente, desperdiciando capacidad",
    "Los CTQ se convierten en SLO, criterios de aceptación, límites de gráficos de control y métricas de éxito del proyecto: usa la misma especificación en todos los documentos para reducir la deriva",
    "Valida las traducciones de CTQ con el cliente: lee la especificación de vuelta; confirma que captura la necesidad original; itera si la traducción perdió significado"
  ],
  questions: [
    {
      prompt: "¿Cuáles son los tres niveles de un árbol CTQ?",
      options: [
        "Necesidad, Driver y Requisito.",
        "Define, Measure y Control.",
        "Especificación, Línea base y Meta.",
        "Cliente, Ingeniería y Operaciones."
      ],
      correctIndex: 0,
      explanation: "Un árbol CTQ tiene tres niveles: <strong>Necesidad</strong> (lo que el cliente quiere), <strong>Driver</strong> (dimensiones de esa necesidad) y <strong>Requisito</strong> (meta + límites de especificación). Esta estructura convierte las expectativas del cliente en contratos verificables."
    },
    {
      prompt: "¿En qué fase de DMAIC se desarrollan principalmente los CTQ?",
      options: [
        "Fase Measure.",
        "Fase Define.",
        "Fase Analyze.",
        "Fase Control."
      ],
      correctIndex: 1,
      explanation: "Los CTQ se desarrollan en la <strong>fase Define</strong>, traduciendo la Voz del Cliente y los enunciados del problema en especificaciones medibles que guían el resto del proyecto."
    },
    {
      prompt: "¿Qué significa SMART al redactar un requisito CTQ?",
      options: [
        "Stakeholder, Measurement, Achievable, Relevant, Timely.",
        "Específico, Medible, Alcanzable, Relevante, Acotado en el tiempo.",
        "Service, Metrics, Acceptable, Result, Targeted.",
        "Stakeholder, Aprobado por el gerente, Auditable, Realista, Rastreado."
      ],
      correctIndex: 1,
      explanation: "Los CTQ <strong>SMART</strong> son Específicos, Medibles, Alcanzables, Relevantes y Acotados en el tiempo. Cada propiedad hace que el requisito sea accionable."
    },
    {
      prompt: "¿Qué antipatrón debes evitar al fijar CTQ?",
      options: [
        "Definir múltiples drivers por necesidad.",
        "Incluir tanto USL como LSL en los requisitos.",
        "Redactar límites especificados por ingeniería más estrictos que la necesidad real del cliente.",
        "Cambiar los CTQ durante la fase Measure."
      ],
      correctIndex: 2,
      explanation: "El CTQ redactado por ingeniería por encima de la necesidad del cliente es el antipatrón clave. Por ejemplo, fijar P99 ≤ 50 ms cuando el cliente aceptaría 500 ms <strong>desperdicia capacidad</strong> y desalinea el proyecto de la realidad."
    },
    {
      prompt: "¿Cómo se relacionan los CTQ con el análisis de capacidad de proceso?",
      options: [
        "Los CTQ son insumos que definen qué procesos analizar.",
        "Los CTQ se convierten en los límites de especificación usados en los cálculos de Cpk.",
        "Los CTQ solo se usan después de completar el análisis de capacidad.",
        "Los CTQ reemplazan por completo la necesidad de análisis de capacidad."
      ],
      correctIndex: 1,
      explanation: "Los CTQ vienen emparejados con el trabajo de capacidad de proceso: son los <strong>límites de especificación</strong> (USL y LSL) que usa el cálculo de Cp/Cpk para evaluar el ajuste del proceso."
    }
  ]
},
"copq": {
  id: "copq",
  title: "Costo de la Mala Calidad (COPQ)",
  group: "Definición de Valor & Calidad",
  duration: "30 min",
  executiveSummary: "El Costo de la Mala Calidad (COPQ) cuantifica lo que los defectos, el retrabajo, las fugas y la prevención omitida le cuestan al negocio, dividido en cuatro categorías: falla interna, falla externa, evaluación y prevención. Un rango citado con frecuencia ubica el COPQ en organizaciones que no lo miden en aproximadamente 15–40% del gasto total. Para los CSA, calcular el COPQ es una de las formas más efectivas de financiar el trabajo de CI: una vez que el liderazgo ve el costo de la baja calidad, la inversión en prevención es más fácil de justificar.",
  whatYouGain: [
    "Cuantificación del costo actual de no mejorar, usualmente mucho mayor que el costo de mejorar",
    "Un caso de negocio que invierte el encuadre de 'la CI es un costo' a 'la mala calidad es un costo mayor'",
    "Justificación del gasto en prevención (capacitación, automatización, revisiones de diseño, suites de pruebas) que de otro modo parece sobrecarga",
    "Visibilidad del retrabajo oculto en las hojas de ruta como ciclos de 'v2', 'remediación' o 'estabilización'",
    "Alineación entre finanzas e ingeniería sobre los mismos números, haciendo que las decisiones de inversión se basen en datos"
  ],
  explanation: "<p>Los programas de CI mueren cuando el liderazgo los ve como costos, no como inversiones. El COPQ invierte el encuadre. <strong>Un rango citado con frecuencia ubica el COPQ en organizaciones que no lo miden en 15–40% del gasto total: un costo no financiado de la baja calidad.</strong> El CFO de un cliente bloqueó más 'inversión en DevOps'. El CSA calculó el COPQ a partir de horas de incidentes, retrabajo por defectos fugados y créditos a clientes durante 12 meses: $4,7M, o 22% del gasto de plataforma. El CFO financió un programa de prevención de $600K el trimestre siguiente. Al cierre del año el COPQ cayó a $1,9M. Neto: $2,2M.</p><p>El COPQ tiene cuatro categorías tradicionales: <strong>Falla interna</strong> (retrabajo, desperdicio, builds fallidos, despliegues revertidos); <strong>Falla externa</strong> (defectos hallados por el cliente, incidentes, créditos de SLA, abandono; la categoría más cara por defecto); <strong>Evaluación</strong> (inspección de QA, pruebas manuales, auditorías); <strong>Prevención</strong> (capacitación, revisiones de diseño, automatización; la categoría más barata por cada dólar de COPQ reducido). La progresión de una organización que madura: externa → interna → evaluación → prevención.</p><p>Para estimar el COPQ: elige una ventana de 12 meses, cuantifica cada categoría en horas de ingeniería e impacto en $, suma y exprésalo como % del gasto total, luego vincula las metas de reducción a proyectos específicos de DMAIC o Kaizen. Un rango defendible supera a la falsa precisión: reporta el COPQ ±20% y haz análisis de sensibilidad de los supuestos.</p>",
  csamExample: "<p><strong>Escenario CSAM:</strong> Durante una conversación de renovación, el CFO del cliente pregunta '¿Por qué deberíamos renovar contigo en lugar de contratar personal interno?' En lugar de una propuesta sobre experiencia en Azure, abres con el COPQ. Muestras: antes del compromiso, el COPQ era 28% del gasto de plataforma (incidentes, apagar incendios, retrabajo); después de 6 meses de tu trabajo de Kaizen y confiabilidad, el COPQ es 11% del gasto. Ahorro neto: $2,1M anualizados, logrados al prevenir los incidentes que solían consumir el 40% del tiempo de SRE. Financiaste un programa de prevención de $300K (automatización, runbooks, revisiones de diseño) y recuperaste $2,1M en costos de apagar incendios. El CFO aprueba la renovación. La conversación no fue sobre esfuerzo; fue sobre el tamaño del impuesto oculto que eliminaste.</p>",
  csaExample: "<p><strong>Escenario CSA:</strong> Tu cliente tiene 87 despliegues de Cosmos revertidos por año, cada uno con un costo de 6 horas-ingeniero para investigar y remediar. Calculas el COPQ: 87 × 6 hr × $150/hr (tarifa cargada) = $78K/mes en costo de falla interna. Sumas el throughput de features perdido (desarrolladores cambiando de contexto para apagar incendios) y el daño a la percepción del cliente. Falla interna total: $220K/año. Propones una compuerta pre-merge que ejecuta las pruebas de integración específicas de Cosmos antes de permitir la promoción: costo de inversión de $40K para el arnés de pruebas + automatización. Resultado del año 1: las reversiones bajan 78% (19/año), el COPQ de falla interna baja a $50K. Recuperación: 2 meses. Has cuantificado el caso de negocio en términos que el liderazgo de ingeniería del cliente entiende: reducción de COPQ.</p>",
  recap: [
    "El COPQ captura cuatro categorías: Falla interna (retrabajo, builds fallidos, reversiones), Falla externa (incidentes, créditos de SLA, abandono), Evaluación (QA, pruebas, auditorías) y Prevención (automatización, capacitación, revisiones de diseño)",
    "La falla externa es la más cara por defecto; la Prevención es la palanca más barata por cada dólar de COPQ reducido: la progresión de la organización que madura se mueve de izquierda a derecha",
    "Usa el COPQ para financiar programas de CI y Kaizen: una vez que el liderazgo ve el COPQ como una gran parte del gasto, un programa de prevención es más fácil de justificar",
    "Expresa el COPQ como un porcentaje del gasto total para facilitar la portabilidad y la comparación entre equipos; un rango defendible supera a la falsa precisión",
    "Vincula las metas de reducción de COPQ a proyectos específicos: cada esfuerzo de DMAIC o Kaizen debería reclamar una parte de la reducción del COPQ para mantenerse enfocado en el impacto al negocio"
  ],
  questions: [
    {
      prompt: "¿Cuáles son las cuatro categorías tradicionales que componen el COPQ?",
      options: [
        "Mano de obra, Materiales, Gastos generales, Utilidad.",
        "Falla interna, Falla externa, Evaluación, Prevención.",
        "Diseño, Construcción, Prueba, Despliegue.",
        "Retrabajo, Fallas, Auditorías, Automatización."
      ],
      correctIndex: 1,
      explanation: "El COPQ captura <strong>todos los costos</strong> de la mala calidad: retrabajo interno, defectos hallados por el cliente, inspección/pruebas y trabajo de prevención para evitar defectos."
    },
    {
      prompt: "¿Cuál categoría del COPQ es típicamente la más cara por defecto?",
      options: [
        "Prevención (capacitación, automatización, revisiones de diseño).",
        "Evaluación (inspección, pruebas manuales, auditorías).",
        "Falla interna (retrabajo, despliegues revertidos).",
        "Falla externa (incidentes, créditos de SLA, abandono)."
      ],
      correctIndex: 3,
      explanation: "Los defectos hallados por el cliente —respuesta a incidentes, créditos de SLA y abandono— son los más caros. La <strong>Prevención</strong> es la palanca más barata por cada dólar de COPQ reducido."
    },
    {
      prompt: "¿Cuál es el rol más efectivo del COPQ al proponer un nuevo programa de CI o Kaizen?",
      options: [
        "Mostrarle al liderazgo cuánto costará el programa.",
        "Documentar la línea base de calidad actual para auditoría.",
        "Justificar el programa como una inversión que reduce costos ocultos mayores.",
        "Reemplazar los procesos tradicionales de presupuesto."
      ],
      correctIndex: 2,
      explanation: "El COPQ invierte el encuadre de \"la CI es un costo\" a \"la mala calidad es un costo mayor\". Mostrar el COPQ en 15–40% del gasto no medido justifica la <strong>inversión en prevención</strong>."
    },
    {
      prompt: "¿Cuál de estos elementos NO debería incluirse en un cálculo de COPQ?",
      options: [
        "Despliegues revertidos y retrabajo de emergencia.",
        "Horas de incidentes y mano de obra de apagar incendios.",
        "Abandono de ingresos estimado por salidas de clientes relacionadas con la calidad.",
        "Salarios normales de ingeniería para el trabajo de desarrollo de features."
      ],
      correctIndex: 3,
      explanation: "El COPQ incluye el retrabajo y las escalaciones relacionadas con defectos. NO incluye el costo base del <strong>trabajo que agrega valor</strong>: solo los costos de desperdicio y falla."
    },
    {
      prompt: "¿Por qué expresar el COPQ como un porcentaje del gasto total es más útil que reportar un monto absoluto en dólares?",
      options: [
        "Los porcentajes son más simples de calcular sin un socio de finanzas.",
        "Hace que el COPQ sea portable y comparable entre equipos de distinto tamaño.",
        "Reduce el número absoluto reportado al liderazgo.",
        "Cumple con las normas contables y los requisitos de auditoría."
      ],
      correctIndex: 1,
      explanation: "Un COPQ de $2M es difícil de contextualizar sin el gasto total. Expresarlo como un porcentaje (22% vs. 5%) hace visible y comparable el <strong>verdadero impacto al negocio</strong>."
    }
  ]
},
"waste": {
  id: "waste",
  title: "8 Tipos de Desperdicio",
  group: "Definición de Valor & Calidad",
  duration: "30 min",
  executiveSummary: "Los 8 Desperdicios (DOWNTIME—Defectos, Sobreproducción, Espera, Talento no utilizado, Transporte, Inventario, Movimiento, Sobreprocesamiento) son la lista de verificación 360° de Lean para detectar actividad que no agrega valor en cualquier sistema. Para los CSA, los 8 Desperdicios se traducen limpiamente al patrimonio de Azure: RU sobreaprovisionados, VMs ociosas, entornos obsoletos, stacks de observabilidad redundantes, egreso de datos innecesario, ingenieros atrapados en tareas tediosas, ciclos lentos de respuesta a incidentes y compuertas de aprobación redundantes. Usa los 8 Desperdicios como un recorrido estructurado durante optimizaciones de costos, revisiones de confiabilidad y evaluaciones de modernización: cada categoría revela una clase distinta de oportunidad.",
  whatYouGain: [
    "Un marco estructurado 360° para optimización de costos que va más allá del rightsizing de VMs hacia Inventario, Sobreprocesamiento y Transporte",
    "Identificación del desperdicio de proceso (Espera, Movimiento) que explica por qué el MTTR es lento y los incidentes escalan",
    "Descubrimiento del Talento no utilizado —el desperdicio más caro— y la oportunidad de reasignar ingenieros de tareas tediosas al trabajo de hoja de ruta",
    "Un lente de diagnóstico para casos de negocio de modernización (desperdicio del estado actual vs. estado objetivo) que resuena con los líderes financieros",
    "Un recorrido basado en cadencia (trimestral) que detecta el rebrote del desperdicio antes de que se acumule en problemas mayores"
  ],
  explanation: "<p>Los compromisos de optimización de costos a menudo miran solo un desperdicio —<strong>Sobreproducción</strong> (rightsizing)— y se pierden el panorama mayor. A un CSA se le pidió encontrar $200K/año en ahorros. El rightsizing halló $90K. Un recorrido estructurado de los 8 Desperdicios halló otros $260K: 14 suscripciones ociosas (Inventario), 7 stacks de observabilidad redundantes (Sobreprocesamiento), $40K/mes de egreso de datos entre regiones (Transporte) y 3 FTE que gastan el 60% de su tiempo en tareas tediosas (Talento no utilizado). El lente del desperdicio desbloqueó 3× el pedido original.</p><p>El mnemónico DOWNTIME: <strong>D—Defectos</strong> (incidentes, despliegues fallidos, reversiones); <strong>O—Sobreproducción</strong> (RU sobreaprovisionados, VMs ociosas, planes de App Service sobredimensionados); <strong>W—Espera</strong> (pipelines esperando aprobación manual, ingenieros esperando acceso); <strong>N—Talento no utilizado</strong> (ingenieros senior ejecutando tareas manuales, científicos de datos bloqueados por tareas tediosas); <strong>T—Transporte</strong> (egreso de datos entre regiones, copias de datos redundantes); <strong>I—Inventario</strong> (entornos obsoletos, discos huérfanos, suscripciones sin usar); <strong>M—Movimiento</strong> (cambio de contexto entre 6 portales para el triage de incidentes); <strong>E—Sobreprocesamiento</strong> (pipelines de triple aprobación, stacks de observabilidad duplicados).</p><p>Usa los 8 Desperdicios como un recorrido estructurado: elige el alcance, recorre cada desperdicio en orden con fuentes de evidencia (Azure Resource Graph, Cost Management, App Insights), cuantifica cada hallazgo, ordénalos por Pareto, vincula cada uno a una hipótesis, ejecuta PDCA sobre los 3–5 principales y vuelve a recorrer trimestralmente.</p>",
  csamExample: "<p><strong>Escenario CSAM:</strong> Durante el QBR, presentas un caso de negocio de optimización de costos usando los 8 Desperdicios como encabezados de sección. Cada sección tiene 2–3 hallazgos con impacto en $ u horas: Sobreproducción ($8,4K/mes de Cosmos subutilizado), Espera (18 días-ingeniero bloqueados en compuertas de aprobación), Inventario ($6,2K/mes de suscripciones obsoletas), Sobreprocesamiento ($4,8K/mes de observabilidad duplicada), Transporte ($11K/mes de egreso entre regiones), Movimiento (MTTR +40% por triage de incidentes en 5 portales). El CFO del cliente dijo: 'Este es el primer análisis de costos que veo que se siente completo en lugar de una lista de tamaños de VM.' El marco de los 8 Desperdicios hizo el convencimiento. Priorizas los 3 desperdicios principales para la ejecución del próximo trimestre; el resto va a un backlog que el cliente posee.</p>",
  csaExample: "<p><strong>Escenario CSA:</strong> Durante un postmortem de confiabilidad de un incidente Sev A, extiendes la causa raíz técnica (sonda de salud demasiado agresiva) con el desperdicio de proceso circundante. Defectos: 22% de los despliegues de AKS revertidos por mala configuración de sondas. Espera: los pipelines promedian 4h esperando aprobación de seguridad manual; la respuesta a incidentes promedió 3h de retrasos de traspaso entre turnos de guardia. Movimiento: el triage requería saltar entre 5 portales + 3 tableros; el MTTR era 6× la meta. Usas los 8 Desperdicios para revelar no solo la corrección técnica inmediata (configuración de sondas) sino también las categorías de Espera y Movimiento que convirtieron un defecto menor en una interrupción mayor. El incidente se convierte en el disparador de mejoras de proceso: automatización de la aprobación de seguridad para dev/test, un único workbook de triage de incidentes y plantillas de runbook, todo reducción de Espera y Movimiento.</p>",
  recap: [
    "Los 8 Desperdicios (DOWNTIME) son una lista de verificación 360°: la mayoría de los compromisos miran 1–2 desperdicios y se pierden el resto; un recorrido estructurado por los 8 típicamente revela 3× la oportunidad",
    "Cuantifica cada hallazgo en $ u horas antes de ordenarlo por Pareto; 5 desperdicios bien cuantificados impulsan la acción; 80 desperdicios sin ordenar paralizan el compromiso",
    "Los Defectos y la Espera explican los problemas de confiabilidad; la Sobreproducción y el Inventario impulsan el costo; el Movimiento y el Sobreprocesamiento explican la respuesta lenta a incidentes; el Talento no utilizado es el de mayor apalancamiento para las conversaciones de desarrollo de habilidades",
    "Usa los 8 Desperdicios para estructurar casos de negocio de modernización (desperdicio del estado actual vs. estado objetivo): los CFO entienden la reducción de desperdicio mejor que las palabras de moda 'cloud-native'",
    "Vuelve a recorrer trimestralmente: el desperdicio rebrota; una cadencia detecta nuevas instancias antes de que se acumulen; el mismo recorrido es también tu validación PDCA de que las eliminaciones previas se mantuvieron"
  ],
  questions: [
    {
      prompt: "¿Qué representa el mnemónico DOWNTIME?",
      options: [
        "Defectos, Operaciones, Carga de trabajo, Red, Tiempo, Inventario, Dinero, Energía.",
        "Defectos, Sobreproducción, Espera, Talento no utilizado, Transporte, Inventario, Movimiento, Sobreprocesamiento.",
        "Entrega, Resultados, Flujo de trabajo, Notificaciones, Tickets, Problemas, Métricas, Errores.",
        "Detección, Observación, Estados de espera, Notas, Triage, Incidentes, Mitigación, Escalación."
      ],
      correctIndex: 1,
      explanation: "<strong>D</strong>efectos, <strong>O</strong>verproduction (Sobreproducción), <strong>W</strong>aiting (Espera), <strong>N</strong>on-utilized talent (Talento no utilizado), <strong>T</strong>ransporte, <strong>I</strong>nventario, <strong>M</strong>ovimiento, <strong>E</strong>xtra-processing (Sobreprocesamiento). Cada categoría revela una clase distinta de oportunidad."
    },
    {
      prompt: "RU/s de Cosmos sobreaprovisionados, VMs ociosas y planes de App Service sobredimensionados son ejemplos de cuál desperdicio?",
      options: [
        "Defectos.",
        "Sobreproducción: producir más capacidad de la necesaria.",
        "Movimiento.",
        "Inventario."
      ],
      correctIndex: 1,
      explanation: "La <strong>Sobreproducción</strong> es producir más de lo que demanda exige. Los compromisos de rightsizing típicamente apuntan a este desperdicio, pero es solo 1 de 8, por lo que el rightsizing puro se pierde oportunidades mayores."
    },
    {
      prompt: "A un CSA se le pidió encontrar $200K/año en ahorros. El rightsizing halló $90K. Un recorrido estructurado de los 8 Desperdicios halló otros $260K (suscripciones ociosas, observabilidad redundante, egreso, tareas tediosas). ¿Cuál es la lección?",
      options: [
        "El rightsizing siempre se pierde la mayoría de los ahorros.",
        "Mirar solo un desperdicio (Sobreproducción) se pierde Inventario, Sobreprocesamiento, Transporte y Talento no utilizado: un recorrido estructurado por los ocho desperdicios revela ahorros que una vista de un solo desperdicio se pierde.",
        "El CSA debería haber hecho una evaluación WAF en su lugar.",
        "El cliente debería haber pedido $500K desde el principio."
      ],
      correctIndex: 1,
      explanation: "La mayoría de los compromisos miran <strong>uno o dos desperdicios</strong> y se pierden el resto. El lente de los 8 Desperdicios provee un recorrido estructurado 360°: cada categoría típicamente revela una oportunidad distinta."
    },
    {
      prompt: "Ingenieros girando entre Jira, GitHub, Teams y Azure DevOps para rastrear un solo work item es un ejemplo de cuál desperdicio?",
      options: [
        "Transporte (movimiento de cosas).",
        "Movimiento (movimiento innecesario de personas / cambio de contexto).",
        "Defectos.",
        "Inventario."
      ],
      correctIndex: 1,
      explanation: "El <strong>Movimiento</strong> es el movimiento innecesario de <em>personas</em>: cambio de contexto entre portales o herramientas. El Transporte, en cambio, es el movimiento innecesario de <em>cosas</em> (egreso de datos, envío de logs)."
    },
    {
      prompt: "¿Cuál es el antipatrón a evitar al usar los 8 Desperdicios?",
      options: [
        "Vincular cada hallazgo a una hipótesis específica.",
        "Cuantificar cada hallazgo en $ u horas.",
        "Tratar la caza de desperdicios como \"encontrar tantos como sea posible\": una lista de 80 desperdicios no es accionable.",
        "Ordenar los hallazgos por Pareto antes de actuar."
      ],
      correctIndex: 2,
      explanation: "Una lista de 80 desperdicios paraliza la acción. <strong>5 desperdicios bien cuantificados y bien ordenados por Pareto impulsan el cambio.</strong> Los 8 Desperdicios son un recorrido estructurado, no un ejercicio de generar ideas sobre todo."
    }
  ]
},
"sipoc": {
  id: "sipoc",
  title: "SIPOC",
  group: "Mapeo & Análisis de Procesos",
  duration: "30 min",
  executiveSummary: "SIPOC—Suppliers, Inputs, Process, Outputs, Customers (Proveedores, Entradas, Proceso, Salidas, Clientes)—es un mapa de proceso de alto nivel de una sola página que obliga al equipo a ponerse de acuerdo sobre el alcance y los límites antes de profundizar en el detalle. La mayoría de los esfuerzos de mejora estancados fallan no por un mal análisis sino por un alcance ambiguo. SIPOC fija el alcance en una sola página que todos pueden leer y aprobar.",
  whatYouGain: [
    "Alinear a patrocinadores, ingenieros y clientes sobre lo que 'este proceso' realmente significa",
    "Revelar proveedores ocultos y clientes posteriores ignorados por el enunciado original del problema",
    "Anclar la fase Define de DMAIC y el trabajo previo para los eventos Kaizen",
    "Proveer la lista de entradas para un mapa de cadena de valor y la lista de salidas para un ejercicio de VOC"
  ],
  explanation: "<p>SIPOC es un diagrama de cinco columnas: Suppliers (quién provee las entradas), Inputs (qué consume el proceso), Process (5–7 pasos del nivel más alto), Outputs (qué produce el proceso) y Customers (quién recibe las salidas).</p><p>La columna Process es la restricción clave: 5–7 pasos como máximo. Más de 7 significa demasiado bajo nivel; menos de 5 usualmente significa pasos ocultos. Cada salida debe tener un cliente; cada entrada debe tener un proveedor: nada de huérfanos. Los proveedores y clientes pueden ser equipos internos, clientes externos o sistemas.</p><p>Para construir un SIPOC: define primero el disparador de inicio y el estado de finalización (los límites), pon en notas adhesivas los 5–7 pasos del proceso, luego identifica las salidas y sus clientes, después las entradas y los proveedores. Recórrelo hacia atrás con el equipo —lee C → O → P → I → S en voz alta— para que las brechas y los desacuerdos salgan a la luz rápidamente. El SIPOC se convierte en la referencia de alcance para el resto del proyecto.</p>",
  csamExample: "<p>Un CSAM está incorporando a un nuevo cliente para un compromiso de consumo de Azure. El cliente dice que quiere un 'proyecto de mejora de despliegue', pero cuatro equipos (dev, seguridad, DBA, red) tienen visiones distintas de lo que significa 'despliegue'. En 60 minutos con esos cuatro equipos en una pizarra, el CSAM construye un SIPOC. La columna Process lista Build → Test → Scan → Approve → Deploy. Los proveedores incluyen equipos de compuertas de seguridad upstream y DBAs. Los clientes son equipos de QA y consumidores de API. De repente el equipo ve que existen 3 proveedores ocultos y que la mitad del lead time vive en los traspasos a esos equipos. El alcance se reinicia en una hora en lugar de derivar durante seis meses.</p>",
  csaExample: "<p>Un CSA está liderando una modernización de confiabilidad para un cliente que ejecuta AKS en Azure. El SIPOC del cliente para su proceso de despliegue revela que los proveedores incluyen Azure Container Registry, Key Vault y un sistema de Fleet Management. El proceso incluye: Commit → Build → Push a ACR → Deploy a Staging → Health Check → Deploy a Prod. La ausencia de un paso de Scan o Policy en la columna Process expone una brecha de gobernanza: el escaneo de secretos y el control de admisión no son parte del flujo. Agregar esos pasos se convierte en un cambio de IaC, y el SIPOC se convierte en la estrella polar del compromiso de modernización.</p>",
  recap: [
    "SIPOC obliga a acordar los límites del alcance antes de profundizar en el detalle",
    "La columna Process debe tener 5–7 pasos como máximo; más significa demasiado granular",
    "Cada salida tiene un cliente; cada entrada tiene un proveedor: no se permiten huérfanos",
    "Construye el SIPOC en 60 minutos con las personas que hacen el trabajo",
    "SIPOC ancla el Define de DMAIC, el trabajo previo de Kaizen y la definición de alcance de nuevos compromisos"
  ],
  questions: [
    {
      prompt: "¿Qué significa SIPOC?",
      options: [
        "Sources, Items, Procedure, Owners, Customers.",
        "Suppliers, Inputs, Process, Outputs, Customers.",
        "Sponsors, Issues, Plan, Outcomes, Controls.",
        "Stakeholders, Inputs, Phases, Outputs, Constraints."
      ],
      correctIndex: 1,
      explanation: "SIPOC — <strong>Suppliers, Inputs, Process, Outputs, Customers</strong> — se lee de izquierda a derecha y es el primer artefacto que se construye cuando un equipo aún no puede ponerse de acuerdo sobre qué está mejorando."
    },
    {
      prompt: "¿Cuántos pasos debe contener la columna Process?",
      options: [
        "1 a 3, para mantener las cosas simples.",
        "5 a 7 como máximo: más significa demasiado bajo nivel, menos usualmente significa pasos ocultos.",
        "Exactamente 10, uno por fase.",
        "Tantos como sean necesarios para capturar cada detalle."
      ],
      correctIndex: 1,
      explanation: "La <strong>regla de 5–7 pasos</strong> mantiene el SIPOC a la altitud correcta. Más pasos pertenecen a un mapa de cadena de valor o un mapa de proceso detallado; menos usualmente ocultan traspasos importantes."
    },
    {
      prompt: "¿Cuál es el modo de falla principal que SIPOC previene?",
      options: [
        "Aprobaciones lentas por parte del liderazgo.",
        "Esfuerzos de mejora estancados causados por un alcance ambiguo.",
        "Cobertura insuficiente de automatización.",
        "Agotamiento de ingeniería por demasiadas reuniones."
      ],
      correctIndex: 1,
      explanation: "La mayoría de los esfuerzos de mejora estancados fallan no por un mal análisis sino por un <strong>alcance ambiguo</strong>. SIPOC fija el alcance en una sola página que todos pueden leer y aprobar."
    },
    {
      prompt: "Al facilitar un SIPOC, ¿qué deberías hacer ANTES de dibujar los pasos del proceso?",
      options: [
        "Listar cada posible proveedor y cliente.",
        "Definir el disparador de inicio y el estado de finalización —los límites— primero.",
        "Hacer que el liderazgo apruebe los pasos por adelantado.",
        "Elegir una herramienta de software para capturar el diagrama."
      ],
      correctIndex: 1,
      explanation: "<strong>Los límites primero.</strong> Escribe el evento disparador y el criterio de éxito sobre el tablero antes de poner los pasos en notas adhesivas. Sin límites explícitos, la columna del proceso deriva y el SIPOC pierde el foco."
    },
    {
      prompt: "¿Cuándo es SIPOC la herramienta equivocada para usar?",
      options: [
        "Fase Define de DMAIC.",
        "Trabajo previo para un evento Kaizen.",
        "Ya existe un VSM detallado y el equipo está de acuerdo sobre el alcance: SIPOC sería redundante.",
        "Resolver disputas de alcance entre equipos."
      ],
      correctIndex: 2,
      explanation: "No uses SIPOC cuando ya existe un VSM detallado y el alcance está acordado, cuando el trabajo es genuinamente de un solo paso, o cuando se convierte en un <strong>sustituto de recorrer realmente el proceso</strong> (Gemba)."
    }
  ]
}, "value-stream": {
  id: "value-stream",
  title: "Mapeo de Cadena de Valor",
  group: "Mapeo & Análisis de Procesos",
  duration: "30 min",
  executiveSummary: "Una value stream mapea el flujo de trabajo de extremo a extremo desde la solicitud del cliente hasta el valor entregado, haciendo visibles como datos el tiempo de proceso, el lead time, los traspasos, las esperas y el retrabajo. Cuando los síntomas de un cliente —lanzamientos lentos, alto MTTR de incidentes, SLAs incumplidos, costo desbocado— son causados por problemas de flujo entre equipos, el VSM es el diagnóstico que revela dónde se gasta el tiempo versus dónde se espera.",
  whatYouGain: [
    "Ver dónde se gasta realmente el tiempo versus dónde se espera en traspasos y colas",
    "Calcular la razón de valor agregado (trabajo activo / tiempo total), usualmente un porcentaje de un solo dígito impactante",
    "Identificar cadenas de retrabajo silencioso a través de métricas de porcentaje-completo-y-preciso",
    "Diseñar flujos de estado futuro que fusionen pasos, automaticen compuertas y reduzcan el WIP",
    "Secuenciar el trabajo de mejora en olas que se acumulan a lo largo de los trimestres"
  ],
  explanation: "<p>Una value stream captura tres capas: flujo de proceso (la secuencia de pasos), flujo de información (cómo cada paso se entera de qué hacer mediante tickets, aprobaciones, chats) y métricas de línea de tiempo. El mapa muestra el tiempo de proceso (PT, trabajo activo) versus el lead time (LT, tiempo de reloj de pared incluyendo esperas). La razón PT/LT es la razón de valor agregado: la fracción del tiempo de extremo a extremo dedicada a trabajo que realmente agrega valor.</p><p>Las métricas clave incluyen el Lead Time (tiempo de reloj de pared desde la solicitud hasta la entrega), el Process Time (suma de las duraciones de trabajo activo), la Razón de valor agregado (PT/LT, a menudo horriblemente baja), el % Completo &amp; Preciso (%C/A, la fracción que pasa cada traspaso sin retrabajo) y el %C/A acumulado (el producto a lo largo de todos los traspasos, que revela el retrabajo silencioso). Un WIP alto (trabajo en progreso) en cualquier etapa alarga el lead time según la Ley de Little.</p><p>El flujo de trabajo: define la value stream con precisión, recorre el proceso real con las personas que hacen el trabajo (no la documentación), captura datos en cada paso, dibuja el estado actual en una sola página, identifica el desperdicio usando el marco de los 8 Desperdicios, calcula la razón de valor agregado, diseña el estado futuro remodelando el flujo en lugar de optimizar pasos individuales, cuantifica la brecha y planifica la mejora en 2–4 olas de PDCA.</p>",
  csamExample: "<p>El cliente de un CSAM ha estado en 'transformación DevOps' durante 8 meses sin mejora medible en la frecuencia de despliegue. El CSAM ejecuta un taller de VSM de 2 días y descubre que de las 6 horas de tiempo de despliegue de extremo a extremo, 5 horas son Espera en dos compuertas de aprobación manual y un escaneo de seguridad en cola. El cliente había optimizado la 1 hora de trabajo de build activo. El VSM hizo visible la brecha: eliminar una aprobación, automatizar la compuerta de seguridad, agrupar los runners de escaneo. El extremo a extremo baja a 75 minutos. El VSM ancló el compromiso en el trabajo correcto.</p>",
  csaExample: "<p>Un CSA está evaluando el pipeline de lanzamiento cloud-native de un cliente para AKS. El VSM revela que el código sufre 18% de retrabajo en la etapa de pruebas de integración debido a la inestabilidad de la configuración del entorno. El %C/A acumulado a lo largo de cuatro traspasos es 18% × 73% × 91% × 85% = 10%, lo que significa que el 90% de los lanzamientos experimentan al menos un rebote. El CSA identifica que la brecha de %C/A está en la estabilidad del entorno de pruebas y en las cuotas de recursos de Azure que causan CrashLoopBackOff en los canaries. La remediación apunta a la consistencia de IaC y a las reservas de cuota, no a las actualizaciones de herramientas.</p>",
  recap: [
    "El VSM expone dónde se espera el tiempo, no solo dónde se gasta",
    "La razón de valor agregado (PT/LT) es el número titular que el liderazgo recuerda",
    "El % Completo &amp; Preciso revela cadenas de retrabajo silencioso en los traspasos",
    "Usa el VSM para flujos de múltiples equipos; usa Pareto + Ishikawa para problemas de un solo sistema",
    "El VSM es un artefacto de trabajo; vuelve a mapear después de cada ciclo PDCA para validar el progreso"
  ],
  questions: [
    {
      prompt: "Un cliente lleva 8 meses en una &ldquo;transformación DevOps&rdquo; sin mejora medible en la frecuencia de despliegue. El tiempo de despliegue de extremo a extremo es de 6 horas. ¿Cuál es la contribución probable del VSM?",
      options: [
        "Recomendar una nueva herramienta de despliegue para reemplazar la actual.",
        "Hacer visible que la mayor parte de las 6 horas se gasta en Espera de aprobaciones y escaneos en cola, no en trabajo activo.",
        "Sugerir contratar más ingenieros para paralelizar el trabajo.",
        "Refactorizar la arquitectura de la aplicación en microservicios."
      ],
      correctIndex: 1,
      explanation: "El VSM expone <strong>dónde se espera el tiempo vs. dónde se gasta</strong>. Los clientes a menudo optimizan el trabajo activo (p. ej., la 1 hora de build) mientras ignoran las 5 horas de espera que dominan el lead time de extremo a extremo."
    },
    {
      prompt: "¿Qué es la razón de valor agregado?",
      options: [
        "Los dólares ahorrados por hora de CSA.",
        "Process Time / Lead Time: la fracción del tiempo de extremo a extremo dedicada a trabajo activo que agrega valor.",
        "El número de aprobadores dividido por el número de pasos.",
        "El tiempo de ciclo multiplicado por el WIP."
      ],
      correctIndex: 1,
      explanation: "<strong>Razón de valor agregado = PT / LT</strong>. En cadenas no mejoradas a menudo es un porcentaje de un solo dígito horrible. Es el número titular que el liderazgo recuerda de un VSM."
    },
    {
      prompt: "¿Qué es el %C/A (Porcentaje Completo y Preciso) y por qué importa?",
      options: [
        "El porcentaje de automatización del proceso; los valores altos significan menos desperdicio.",
        "La fracción de trabajo que pasa cada traspaso sin retrabajo; multiplicada a lo largo de todos los traspasos (%C/A acumulado) revela cadenas de retrabajo silencioso.",
        "La tasa de aprobación de auditoría de cumplimiento; requerida solo para industrias reguladas.",
        "El porcentaje de ingenieros que asisten al taller."
      ],
      correctIndex: 1,
      explanation: "El %C/A mide la <strong>fuga de retrabajo en cada traspaso</strong>. El %C/A acumulado (el producto a lo largo de todos los traspasos) típicamente revela un enorme retrabajo oculto que ningún equipo individual posee: una visión clásica del VSM."
    },
    {
      prompt: "¿Cuándo es el VSM la herramienta EQUIVOCADA a la que recurrir?",
      options: [
        "Evaluaciones de DevOps con síntomas de extremo a extremo.",
        "Un compromiso de &ldquo;Cosmos está lento&rdquo; donde el problema es una clave de partición caliente dentro de un solo sistema: usa Pareto + Ishikawa en su lugar.",
        "Optimización del flujo de incorporación de tenants entre múltiples equipos.",
        "Casos de negocio de modernización que necesitan un &ldquo;por qué\" creíble."
      ],
      correctIndex: 1,
      explanation: "El VSM es para <strong>flujos de múltiples equipos / múltiples sistemas</strong>. Para problemas de un solo sistema, recurre a Pareto + Ishikawa. Sacar reflexivamente el VSM para el problema equivocado desperdicia la credibilidad de la herramienta."
    },
    {
      prompt: "¿Cuál es el antipatrón clave a evitar al ejecutar un taller de VSM?",
      options: [
        "Dibujar el estado actual antes del estado futuro.",
        "Producir un póster del tamaño de una pared que nunca vuelves a mirar: el VSM debe ser un artefacto de trabajo durante el compromiso.",
        "Incluir a los dueños del proceso en el recorrido.",
        "Calcular la razón de valor agregado."
      ],
      correctIndex: 1,
      explanation: "Un VSM es un <strong>artefacto de trabajo</strong>, no un póster de una sola vez. Si no está abierto durante las próximas 6 semanas del compromiso para guiar los ciclos PDCA y las decisiones, el taller no aterrizó."
    }
  ]
},
"pareto-chart": {
  id: "pareto-chart",
  title: "Diagrama de Pareto",
  group: "Mapeo & Análisis de Procesos",
  duration: "30 min",
  executiveSummary: "Un diagrama de Pareto ordena las categorías en orden descendente por impacto (cantidad de incidentes, tiempo de inactividad, $, RU/s consumidos) y superpone una línea de porcentaje acumulado para que los 'pocos vitales' que generan ~80% del impacto sean visibles de inmediato. Es la herramienta de priorización que los CSA usan para preparar EBR/QBR, revisiones de WAF, optimización de costos y triaje de escalamientos: pondera por impacto al negocio, no por frecuencia bruta.",
  whatYouGain: [
    "Ordenar problemas por impacto al negocio, no por cantidad, para que las horas del CSA caigan en los pocos vitales",
    "Ponderar el impacto de incidentes por minutos de inactividad o $ en riesgo, no por frecuencia",
    "Identificar qué servicios de Azure, SKU o códigos de error generan la mayoría del gasto o las fallas",
    "Visualizar el principio 80/20 para que el liderazgo vea hacia dónde debe ir el esfuerzo",
    "Volver a medir después de la remediación para validar el trabajo y detectar problemas emergentes"
  ],
  explanation: "<p>Un diagrama de Pareto es un gráfico de barras ordenado en orden descendente con una línea de porcentaje acumulado superpuesta. El eje X muestra categorías: firmas de incidentes, códigos de error, tipos de recurso, cargas de trabajo del cliente, clasificaciones de causa raíz, regiones de Azure o SKU. El eje Y izquierdo muestra el impacto medido (cantidad de tickets, minutos de inactividad, RU/s consumidos, gasto en $, mensajes descartados, despliegues fallidos). El eje Y derecho muestra el porcentaje acumulado (0–100%). Las barras se ordenan de forma descendente; la línea acumulada muestra dónde las pocas categorías vitales alcanzan ~80% del impacto total.</p><p>La unidad de medida importa más que el gráfico. Contar tickets pondera igual una falla de 5 minutos que una interrupción de 6 horas. Los CSA deben ponderar por impacto al negocio: minutos de inactividad, $ en riesgo, severidad reportada por el cliente. Un Pareto por cantidad de incidentes puede mostrar 'Sondas de liveness inestables' como la barra principal; un Pareto por minutos de inactividad puede mostrar 'Interrupción regional' como el verdadero detonante: distintos datos, distintas prioridades de acción.</p><p>Flujo de trabajo: plantea la pregunta con precisión, elige la fuente de datos correcta (Kusto, Cost Management, Resource Health), elige la unidad de medida y decláralla en el gráfico, define categorías de forma consistente, agrega durante 30–90 días, ordena de forma descendente y calcula el % acumulado, identifica las pocas barras vitales a la izquierda de la línea del 80%, impulsa el compromiso sobre esas barras, y vuelve a medir 30–90 días después para validar y detectar nuevos patrones.</p>",
  csamExample: "<p>Un CSAM que gestiona una cuenta minorista Tier-1 extrae 90 días de tickets de ICM para el entorno de AKS del cliente y construye un Pareto. Por cantidad de incidentes, 'Sondas de liveness inestables' domina. Por minutos de inactividad, 'ImagePullBackOff' y 'Fallas de resolución de CoreDNS' representan el 71% del impacto al SLA. El CSAM deja de reaccionar caso por caso e impulsa una única revisión de arquitectura que cubre el endpoint privado de ACR + la identidad administrada de kubelet y el ajuste del autoescalador de CoreDNS. El volumen de ICM de ese cliente cae 60% el trimestre siguiente.</p>",
  csaExample: "<p>Un CSA está ayudando a un cliente con la optimización de costos de Azure. Un Pareto del gasto por tipo de recurso muestra que los clústeres de AKS consumen el 35% del gasto mensual, seguidos por los planes de App Service (22%) y las bases de datos SQL (18%). Pero la línea del 80% se cruza después de solo dos barras. El CSA se enfoca en el rightsizing del clúster: convertir 12 nodos Standard_D4s_v3 a SKU Automatic con solicitudes de recursos de pod adecuadas reduce el gasto mensual del clúster en 35%. Los tipos de recurso restantes esperan al siguiente ciclo. El Pareto hizo visibles los pocos vitales; el cliente vio una caída del 12% en el costo mensual gracias a un esfuerzo enfocado.</p>",
  recap: [
    "Pondera las categorías por impacto al negocio (inactividad, $, severidad), no por cantidad bruta",
    "Las pocas barras vitales a la izquierda de la línea del 80% reciben el foco del compromiso",
    "Un Pareto por cantidad difiere de un Pareto por inactividad o gasto: elige la métrica correcta",
    "Los Pareto de una sola vez son afiches; vuelve a medir 30–90 días después para validar y detectar nuevos patrones",
    "El Pareto identifica 'qué arreglar primero'; Ishikawa profundiza en 'por qué ocurrió'"
  ],
  questions: [
    {
      prompt: "Un cliente tiene 4,200 alertas de Azure Advisor. ¿Cómo deberías construir el Pareto para priorizar el esfuerzo del CSA?",
      options: [
        "Ordenar las alertas en el orden en que aparecen en la lista de Advisor.",
        "Ordenar las alertas solo por nivel de severidad, sin considerar el impacto al negocio.",
        "Ordenar por impacto al negocio ponderado ($ en riesgo, minutos de inactividad, ganancia de secure-score) para que las pocas alertas vitales de alto impacto reciban el foco.",
        "Tratar todas las alertas por igual y trabajarlas al azar."
      ],
      correctIndex: 2,
      explanation: "La cantidad bruta de alertas es engañosa. Un Pareto útil pondera por <strong>impacto al negocio</strong>, no por frecuencia. Un rightsizing de $50K/mes importa más que 200 ajustes menores de endurecimiento."
    },
    {
      prompt: "Dos Pareto: uno ordenado por frecuencia de incidentes, otro por minutos de inactividad. ¿Por qué la versión ponderada por inactividad es más útil?",
      options: [
        "Porque la cantidad de incidentes siempre está mal y nunca debería usarse.",
        "Porque el Pareto ponderado por inactividad revela qué fallas realmente impactan el SLA, no cuáles ocurren con más frecuencia.",
        "Porque la inactividad siempre es más importante que la frecuencia.",
        "Porque la versión por inactividad requiere menos datos."
      ],
      correctIndex: 1,
      explanation: "La frecuencia y el impacto son dimensiones distintas. El <strong>Pareto ponderado por inactividad</strong> muestra qué fallas generan riesgo al SLA. Una interrupción rara pero catastrófica puede importar más que 200 fallas breves."
    },
    {
      prompt: "Un cliente te entrega 87 hallazgos de WAF para analizar. ¿Sobre qué deberías objetar?",
      options: [
        "Aceptar los 87 hallazgos y tratarlos por igual en el Pareto.",
        "Ponderar los hallazgos por severidad &times; radio de impacto &times; impacto al negocio antes de graficar, para que sean visibles los pocos vitales que generan el 80% del riesgo.",
        "Negarse a usar Pareto porque simplifica en exceso hallazgos complejos.",
        "Recomendar analizar los hallazgos de uno en uno en lugar de graficar."
      ],
      correctIndex: 1,
      explanation: "Un Pareto de 87 hallazgos es una lista plana disfrazada de priorización. <strong>Pondera cada hallazgo</strong> antes de graficar para transformar 87 elementos en unos pocos hallazgos vitales que justifiquen un compromiso enfocado."
    },
    {
      prompt: "Un compañero dice que un Pareto de costo por servicio debe estar mal porque los costos mensuales siguen subiendo. ¿Qué deberías explicar?",
      options: [
        "El Pareto definitivamente está mal si los costos tienden al alza.",
        "Un Pareto es una instantánea en un momento dado. Usa un gráfico de corridas para tendencias; usa el Pareto para identificar qué servicios vale la pena optimizar.",
        "El crecimiento del costo prueba que no existe forma de Pareto en los datos.",
        "Reconstruir el gráfico semanalmente para capturar la tendencia al alza."
      ],
      correctIndex: 1,
      explanation: "Un Pareto es una <strong>instantánea del impacto categórico en un momento</strong>, no una serie de tiempo. Para tendencias, usa un gráfico de corridas. Para priorizar, usa Pareto. Distintas herramientas, distintas preguntas."
    },
    {
      prompt: "Después de completar un Kaizen guiado por Pareto, ¿cómo validas el éxito?",
      options: [
        "Verificar que los 87 hallazgos hayan sido cerrados.",
        "Volver a ejecutar la misma consulta de Pareto 30–90 días después para ver si las barras superiores se redujeron y emergen nuevos patrones.",
        "Contar cuántos miembros del equipo participaron en la remediación.",
        "Medir el total de horas del CSA y compararlo con el estimado original."
      ],
      correctIndex: 1,
      explanation: "La validación es la <strong>re-medición</strong>. Vuelve a ejecutar la misma consulta tras la remediación. Si las barras superiores se reducen y la curva se aplana antes, el trabajo queda validado. Pareto → compromiso → re-medición es el patrón repetible."
    }
  ]
},
"ishikawa": {
  id: "ishikawa",
  title: "Diagrama de Ishikawa",
  group: "Mapeo & Análisis de Procesos",
  duration: "30 min",
  executiveSummary: "Un diagrama de Ishikawa (espina de pescado o causa-efecto) es una herramienta de lluvia de ideas estructurada que mapea las posibles causas de un único problema en categorías nombradas, típicamente las 6 M: Mano de obra, Maquinaria, Método, Material, Medición y Medio ambiente. Obliga a explorar en amplitud antes que en profundidad y revela causas fuera de cualquier dominio único, evitando la fijación prematura en la primera hipótesis.",
  whatYouGain: [
    "Explorar causas de forma sistemática a través de personas, servicio, proceso, configuración, observabilidad y demanda",
    "Evitar que los equipos de ingeniería se fijen en que 'el código es la causa' y pasen por alto brechas de proceso o de habilidades",
    "Revelar causas en múltiples dominios que el análisis de una sola disciplina pasa por alto",
    "Generar listas de hipótesis que se priorizan con Pareto y se profundizan con los 5 Porqués",
    "Documentar todo el espacio de búsqueda para futuros incidentes similares"
  ],
  explanation: "<p>Un Ishikawa es una estructura visual: una espina horizontal que apunta al enunciado del problema a la derecha, con espinas que se ramifican (una por cada categoría de causa potencial), sub-espinas para causas específicas y sub-sub-espinas para factores contribuyentes. Las 6 M son el conjunto de categorías canónico: Mano de obra (personas, habilidades, rotación de guardia), Maquinaria (servicio de Azure, SDK, runtime), Método (proceso, consultas, flujo de despliegue), Material (configuración, datos, IaC, dependencias), Medición (observabilidad, alertas, SLO), Medio ambiente (demanda, hora del día, eventos externos).</p><p>Propiedad clave: el Ishikawa es divergente (genera causas candidatas) pero no convergente (no elige la causa). Después de llenar el diagrama, los equipos deben usar evidencia (logs, trazas, métricas, telemetría) para confirmar qué ramas importan. La salida del Ishikawa es una lista de hipótesis.</p><p>Flujo de trabajo: enuncia el problema con precisión (evita 'lento'; usa 'La latencia P95 de la API de Checkout supera los 800ms durante las 09:00–11:00 UTC en días hábiles'), elige el conjunto de categorías (las 6 M es el predeterminado), reúne participantes multifuncionales, haz lluvia de ideas de 4–8 causas por categoría, profundiza 1–2 niveles, agrupa y prioriza las 3–5 más consistentes con el síntoma, define una prueba para cada hipótesis, ejecuta las pruebas, confirma las causas y conviértelas en acciones.</p>",
  csamExample: "<p>Un CSAM está facilitando un postmortem sobre un incidente de Cosmos DB donde el cliente reporta 'Cosmos nos está limitando'. Ingeniería ha pasado 3 semanas ajustando consultas. El Ishikawa mapea todo el espacio de búsqueda: Mano de obra (un único SME de Cosmos de vacaciones), Maquinaria (SDK cliente que no honra retry-after), Método (diseño de clave de partición con punto caliente), Material (sin autoescalado), Medición (sin alertas sobre la tendencia de 429), Medio ambiente (pico de demanda 5x por una campaña de marketing). El equipo descubre que la solución real es el rediseño de la clave de partición + autoescalado, además de brechas sistémicas (cobertura de SME, configuración del SDK, estándares de alertas). Los ingenieros por sí solos nunca habrían visto la mayoría de esas causas.</p>",
  csaExample: "<p>Un CSA lidera una revisión de confiabilidad de WAF para un cliente con fallas recurrentes de despliegue en App Service. Las ramas del Ishikawa revelan: Mano de obra (el equipo de guardia no fue informado del nuevo patrón de despliegue), Maquinaria (el SKU del plan de App Service al límite de capacidad durante el pico), Método (los despliegues se superponen con las ventanas de tráfico pico), Material (falta la configuración de calentamiento de slot), Medición (sin alerta sobre fallas de calentamiento de slot), Medio ambiente (un correo de marketing salió antes de la interrupción, disparando el tráfico). El Ishikawa del CSA evita que el equipo aumente reflexivamente el SKU y, en cambio, impulsa cuatro pequeños cambios en cuatro M.</p>",
  recap: [
    "El Ishikawa obliga a una exploración sistemática en 6 categorías antes de profundizar",
    "La salida es una lista de hipótesis; la evidencia confirma qué ramas importan",
    "Reúne siempre equipos multifuncionales para evitar la fijación de una sola disciplina",
    "Cada candidato requiere una prueba; los candidatos no comprobables son ruido infalsificable",
    "Combina el Ishikawa con Pareto (qué priorizar) y los 5 Porqués (por qué ocurrió)"
  ],
  questions: [
    {
      prompt: "Tu equipo está investigando consultas lentas de Azure SQL. Ingeniería sospecha de los índices, el DBA sospecha del esquema, el líder de plataforma sospecha del dimensionamiento. ¿Cuál es el valor principal de un diagrama de Ishikawa aquí?",
      options: [
        "Toma la decisión final sobre qué factor es la verdadera causa raíz.",
        "Obliga al equipo a explorar causas en todas las categorías antes de fijarse en una.",
        "Mide qué hipótesis genera la mejora más rápida de las consultas.",
        "Elimina de inmediato todas las causas de baja probabilidad."
      ],
      correctIndex: 1,
      explanation: "Un Ishikawa es una herramienta <strong>divergente</strong> que amplía el espacio de búsqueda antes de reducirlo. Evita fijarse en la primera hipótesis al forzar una exploración sistemática entre categorías. Genera hipótesis; los datos las confirman después."
    },
    {
      prompt: "¿Cuándo es más valioso un Ishikawa durante un postmortem?",
      options: [
        "Solo cuando la causa del incidente ya se conoce y necesitas documentarla.",
        "Cuando un síntoma tiene múltiples causas plausibles en distintos dominios y el equipo corre el riesgo de comprometerse prematuramente.",
        "Como reemplazo de escribir la línea de tiempo del incidente y su impacto.",
        "Solo si el equipo tiene más de 10 ingenieros disponibles para asistir."
      ],
      correctIndex: 1,
      explanation: "El Ishikawa brilla cuando hay <strong>múltiples dominios</strong> involucrados. Asegura que el equipo recorra cada categoría —Mano de obra, Maquinaria, Método, Material, Medición, Medio ambiente— en lugar de optar por la teoría preferida de la voz más fuerte."
    },
    {
      prompt: "Un cliente dice que el diagrama de Ishikawa es el entregable de su reciente corrección de 429 en Cosmos DB. ¿Qué deberías aclarar?",
      options: [
        "El diagrama es el resultado final y no se necesita ninguna otra acción.",
        "El Ishikawa generó hipótesis; los entregables reales son la causa raíz comprobada, la corrección implementada y la medición de antes/después.",
        "Deberían repetir el Ishikawa semanalmente para asegurar que la causa permanezca corregida.",
        "El diagrama debería haber incluido la aprobación de presupuesto del liderazgo."
      ],
      correctIndex: 1,
      explanation: "Un Ishikawa es una herramienta de <strong>generación de hipótesis</strong>, no de decisión. Los entregables reales son las hipótesis comprobadas, los cambios implementados y las mediciones de antes/después que validan la corrección."
    },
    {
      prompt: "Un compañero insiste en que la única categoría a explorar es &ldquo;Método&rdquo; para una investigación de falla de despliegue. ¿Qué deberías hacer primero?",
      options: [
        "Estar de acuerdo y empezar a profundizar en Método con los 5 Porqués.",
        "Guiar al equipo por cada categoría restante antes de profundizar en cualquier rama individual.",
        "Pedir a ingeniería que pruebe la hipótesis de Método de inmediato.",
        "Reformular el enunciado del problema porque es demasiado vago."
      ],
      correctIndex: 1,
      explanation: "El Ishikawa es una herramienta de <strong>des-fijación</strong>. El equipo debe recorrer Mano de obra, Maquinaria, Método, Material, Medición y Medio ambiente antes de profundizar. La amplitud primero expone causas que las disciplinas individuales pasan por alto."
    },
    {
      prompt: "¿Qué enunciado captura mejor lo que NO se debe hacer con un Ishikawa?",
      options: [
        "No lo uses con equipos multifuncionales porque discrepan demasiado.",
        "No lo trates como herramienta de decisión: usa Pareto para elegir entre los hallazgos a financiar.",
        "No incluyas más de tres categorías porque el diagrama se vuelve demasiado complejo.",
        "No lo referencies en postmortems porque toma demasiado tiempo explicarlo."
      ],
      correctIndex: 1,
      explanation: "El Ishikawa genera <strong>candidatos</strong>, no decisiones. Para elegir qué hallazgo financiar, usa Pareto por impacto ponderado. El Ishikawa responde '¿cuáles son las posibles causas?'; el Pareto responde '¿cuál arreglar primero?'"
    }
  ]
},
"5-whys": {
  id: "5-whys",
  title: "5 Porqués",
  group: "Mapeo & Análisis de Procesos",
  duration: "30 min",
  executiveSummary: "Los 5 Porqués son una técnica iterativa de causa raíz: toma un problema confirmado y pregunta '¿por qué?' repetidamente hasta que la cadena llegue a una causa sistémica (un cambio en IaC, política, runbook, capacitación o diseño organizacional) en lugar de un síntoma o una acción individual. Usada en postmortems y escalamientos, disciplina a los equipos para alejarse de culpar a las personas y dirigirse a corregir el sistema.",
  whatYouGain: [
    "Llegar a causas sistémicas que realmente puedes cambiar en IaC, política o proceso",
    "Dejar de culpar a las personas ('el ingeniero cometió un error') y corregir el sistema que permitió el error",
    "Convertir incidentes recurrentes en incidentes únicos al abordar las causas raíz, no las superficiales",
    "Documentar toda la cadena de causas para futuros incidentes similares",
    "Evitar que el mismo postmortem se repita el próximo trimestre"
  ],
  explanation: "<p>Los 5 Porqués son una profundización lineal: comienza con un enunciado del problema (una observación confirmada, no especulación) y luego pregunta iterativamente '¿por qué?' hasta que la respuesta sea una propiedad accionable del sistema. Se ejecuta después de que el problema inmediato esté contenido: durante un incidente en vivo restauras el servicio primero, luego usas los 5 Porqués en el postmortem para llegar a la causa sistémica. El número 5 es aproximado: a veces 3 bastan, a veces se necesitan 7. Detente cuando la respuesta sea algo que puedas cambiar: automatización faltante, falta de trabajo estándar, sin capacitación, desalineación de incentivos, capacidad sin financiar o rediseño organizacional.</p><p>Disciplina clave: cada 'por qué' debe estar respaldado por evidencia. Logs, trazas, configuraciones, ADR, entrevistas. La especulación se propaga; un 'por qué' no verificado en el paso 2 desorienta los pasos 3–5. Las causas suelen ser multicausales; encadena cada contribuyente por separado. Un patrón útil: Ishikawa → elegir las 2–3 ramas principales → 5 Porqués en cada una → combinar en el plan de acción.</p><p>Pasa de la culpa al diseño: en lugar de '¿Por qué el ingeniero subió la etiqueta incorrecta?' pregunta '¿Por qué el sistema permitió que la etiqueta incorrecta llegara a producción?' La respuesta terminal debe tener forma de sistema, no de persona. Flujo de trabajo: confirma el enunciado del problema, combina con Ishikawa cuando sean probables causas multidominio, exige evidencia en cada paso, vigila la terminación prematura (cuando aún describes la acción de una persona, no una propiedad del sistema), vigila la abstracción desbocada (detente en el cambio más concreto que puedas hacer), encadena por causa y convierte la respuesta terminal en una acción de PDCA.</p>",
  csamExample: "<p>El cliente de un CSAM reportó un Sev B: 'Un ingeniero rotó manualmente una clave de Cosmos y rompió producción'. Detenerse en 'no rotar claves manualmente' produce una capacitación inútil. Cinco porqués más profundo: la identidad administrada no estaba habilitada → los módulos de IaC no la soportaban → el backlog del equipo de plataforma estaba 6 meses atrasado → no había capacidad financiada de ingeniería de plataforma → el liderazgo trata la plataforma como un gasto general. La acción no fue actualizar un runbook, fue una decisión de financiamiento organizacional para ingeniería de plataforma. El coaching del CSA empujó al cliente a financiar la capacidad de plataforma, no solo controles procedimentales.</p>",
  csaExample: "<p>Un CSA lidera un postmortem sobre un incidente Sev B en App Service. El equipo dice 'la alerta no se disparó'. 5 Porqués: la alerta no se disparó → ninguna estaba configurada para canarios → los canarios se añadieron después de que se escribió la política de alertas → la política no se actualizó → no hay disciplina de propietario de proceso sobre la actualización de políticas. La acción es actualizar la política de alertas para que reconozca canarios, con un cronograma de actualización trimestral. El trabajo estándar para el mantenimiento de alertas se convierte en el cambio del sistema, no en apagar incendios de forma reactiva.</p>",
  recap: [
    "Los 5 Porqués llegan a causas sistémicas, no a síntomas ni a culpas",
    "Cada paso requiere evidencia; la especulación contamina la cadena",
    "La respuesta terminal debe ser una propiedad accionable del sistema (política, trabajo estándar, estructura organizacional)",
    "Evita la terminación prematura: si la respuesta aún suena como la acción de una persona, sigue preguntando",
    "Encadena por causa; las causas reales suelen ser multicausales"
  ],
  questions: [
    {
      prompt: "¿Cuál es el principal beneficio de usar los 5 Porqués en lugar de detenerse en la primera causa plausible?",
      options: [
        "Encontrar síntomas más rápido y resolver incidentes con mayor rapidez.",
        "Cambiar el sistema, no al individuo; llegar a causas sistémicas sobre las que realmente puedes actuar.",
        "Documentar quién tuvo la culpa durante el incidente.",
        "Acelerar los postmortems saltándose la investigación detallada."
      ],
      correctIndex: 1,
      explanation: "Los 5 Porqués profundizan hasta <strong>causas sistémicas</strong> que pueden cambiarse mediante IaC, política o proceso, no acciones individuales. Esto evita la recurrencia en lugar de repetir el mismo incidente."
    },
    {
      prompt: "¿Cuántas veces deberías preguntar &ldquo;por qué&rdquo; de forma iterativa al usar los 5 Porqués?",
      options: [
        "Siempre exactamente cinco veces, ni más ni menos.",
        "Tantas como sean necesarias hasta llegar a una propiedad accionable del sistema.",
        "Nunca más de tres veces para mantener el postmortem corto.",
        "Solo durante incidentes críticos, no en los rutinarios."
      ],
      correctIndex: 1,
      explanation: "El número 5 es aproximado. Detente cuando la respuesta sea una <strong>propiedad accionable del sistema</strong> como 'no hay trabajo estándar' o 'capacidad sin financiar', no en un conteo arbitrario."
    },
    {
      prompt: "¿Cuál respuesta terminal representa una verdadera causa raíz en los 5 Porqués?",
      options: [
        "El ingeniero cometió un error durante el despliegue.",
        "La alerta no se disparó cuando se superó el umbral.",
        "No existe trabajo estándar para actualizar las alertas de canarios cuando cambian los SLO.",
        "El código contenía un error sutil en el parser."
      ],
      correctIndex: 2,
      explanation: "La respuesta terminal debe ser un <strong>cambio del sistema</strong> que realmente puedas hacer, mediante IaC, política, proceso o financiamiento. La culpa personal no es una causa raíz."
    },
    {
      prompt: "¿Qué requisito imponen los 5 Porqués a cada respuesta de la cadena?",
      options: [
        "Debe ser plausible y acordada por el equipo.",
        "Cada paso debe estar respaldado por evidencia: logs, trazas, configuraciones o entrevistas.",
        "Debe referenciar postmortems previos sobre problemas similares.",
        "Debe identificar a una persona responsable de la falla."
      ],
      correctIndex: 1,
      explanation: "Cada porqué debe estar respaldado por <strong>evidencia</strong>. Las respuestas no verificadas propagan el error a lo largo de la cadena, desorientando los pasos restantes y contaminando todo el análisis."
    },
    {
      prompt: "¿Cuál es el mejor momento para ejecutar los 5 Porqués en un postmortem?",
      options: [
        "En tiempo real durante la respuesta activa al incidente, mientras las emociones están a flor de piel.",
        "Después de que el incidente esté resuelto, cuando hay datos completos disponibles.",
        "Antes de recopilar cualquier log, para evitar el sesgo de confirmación.",
        "Semanas después, cuando el equipo ya avanzó a otro trabajo."
      ],
      correctIndex: 1,
      explanation: "Los 5 Porqués requieren <strong>evidencia</strong> en cada paso. Ejecutarlos durante el triaje activo con datos incompletos contamina la cadena con especulación."
    }
  ]
},
"6-ms": {
  id: "6-ms",
  title: "6 M",
  group: "Mapeo & Análisis de Procesos",
  duration: "30 min",
  executiveSummary: "Las 6 M —Mano de obra, Maquinaria, Método, Material, Medición y Medio ambiente— son el conjunto de categorías canónico para estructurar diagramas de Ishikawa y disciplinar el análisis de causa raíz. Obligan a que la búsqueda de causas trascienda el código y la configuración hacia las personas, el proceso, la telemetría y la demanda. Un problema que vive en una sola M es raro; las respuestas realistas suelen involucrar 3 o más M.",
  whatYouGain: [
    "Expandir la búsqueda de causas más allá del código y la configuración hacia las personas, el proceso, la observabilidad y la demanda",
    "Evitar la fijación de una sola disciplina (los ingenieros culpan a la configuración; los SRE culpan al proceso; la guardia culpa a la telemetría)",
    "Revelar causas multicategoría que contribuyen de forma simultánea",
    "Calificar cada M como primaria, contribuyente o no contribuyente para enfocar el esfuerzo",
    "Crear un vocabulario compartido entre el CSA, el cliente y las conversaciones con PG"
  ],
  explanation: "<p>Las 6 M —Mano de obra, Maquinaria, Método, Material, Medición y Medio ambiente— son el andamiaje para una exploración sistemática de causas. En el vocabulario de la nube/CSA: Mano de obra = personas, habilidades, rotación de guardia; Maquinaria = servicio de Azure, SDK, runtime, nivel, SKU; Método = proceso, consultas, estrategia de clave de partición, flujo de despliegue, patrón de rollout; Material = configuración, secretos, IaC, versiones de imagen, manifiestos de contenedor, ajustes de RU/s, NSG, dependencias; Medición = observabilidad, alertas, SLO, dashboards, tasas de muestreo, retención; Medio ambiente = patrones de tráfico, hora del día, picos regionales, campañas de marketing, ráfagas aguas arriba, días feriados, cambios en el comportamiento del cliente.</p><p>Usa las 6 M como lista de verificación durante postmortems, revisiones de WAF y evaluaciones de confiabilidad. Recorre cada M, incluso si la respuesta es 'sin contribuyente aquí, la evidencia X lo confirma'. La disciplina importa más que el volumen. Tras la evidencia, califica cada M como primaria, contribuyente o no contribuyente. Dirige el esfuerzo a las primarias; remedia las causas contribuyentes de forma oportunista; documenta las no contribuyentes como descartadas. Algunos practicantes agregan Manejo (Management) como una 7.ª M para causas organizacionales/de financiamiento/estrategia; para el trabajo del CSA, suele ser allí donde terminan los 5 Porqués.</p><p>Traduce el vocabulario a la audiencia. 'Mano de obra' está bien internamente pero puede leerse con connotación de género. Prefiere 'Personas &amp; Habilidades'. Usa el vocabulario con el que la sala vaya a comprometerse.</p>",
  csamExample: "<p>Un CSAM está orientando al equipo de SRE de un cliente sobre análisis de incidentes. El equipo inicialmente optó por 'la alerta estaba mal configurada' (Método). El CSAM recorre las 6 M: Mano de obra (¿los umbrales de alerta son propiedad de un equipo o las alertas están huérfanas?), Maquinaria (¿la instrumentación del servicio es correcta para la carga de trabajo?), Método (¿el runbook de escalamiento está vinculado a la alerta?), Material (¿se rotan los secretos, las credenciales están vigentes?), Medición (¿cuál es la tasa de muestreo? ¿Se filtran las trazas lentas?), Medio ambiente (¿cuál es el patrón de tráfico típico? ¿Este incidente fue inusual?). El equipo descubrió que las 6 M tenían contribuyentes: la propiedad de la alerta no estaba clara (Mano de obra), la instrumentación no muestreaba el percentil correcto (Medición) y el patrón de tráfico era anómalo (Medio ambiente). Corregir solo el Método habría pasado por alto las brechas sistémicas.</p>",
  csaExample: "<p>Un CSA lidera una evaluación de confiabilidad de WAF para la infraestructura de AKS de un cliente. El equipo temía que el clúster estuviera 'falto de recursos' (Maquinaria). Recorriendo las 6 M: Mano de obra (¿hay profundidad de guardia para AKS o un único SME?), Maquinaria (¿los nodos están bien dimensionados para la carga de trabajo o están sobreaprovisionados?), Método (¿hay presupuestos de interrupción de pods? ¿La estrategia de despliegue es canario o rolling?), Material (¿cuáles son las solicitudes de recursos de los pods? ¿Son razonables?), Medición (¿hay un dashboard de utilización de nodos? ¿Hay alertas al 70% de capacidad?), Medio ambiente (¿el tráfico se dispara los fines de semana? ¿Hay trabajos por lotes que comprimen los recursos?). El equipo encontró que las solicitudes de pods estaban configuradas demasiado altas (Material), la guardia era un único SME que estaba de vacaciones (Mano de obra) y no existían alertas en los umbrales de capacidad (Medición). Solo redimensionar los nodos habría pasado por alto los tres problemas del sistema.</p>",
  recap: [
    "Las 6 M obligan a que la búsqueda de causas trascienda el código y la configuración hacia todos los dominios",
    "Recorre cada M, incluso si la respuesta es 'sin contribuyente: la evidencia lo confirma'",
    "Califica cada M como primaria, contribuyente o no contribuyente; enfoca el esfuerzo en las primarias",
    "Los problemas realistas tienen 3 o más M; los problemas de una sola M son raros",
    "Combina las 6 M (amplitud) con los 5 Porqués (profundidad por M)"
  ],
  questions: [
    {
      prompt: "¿Qué representan las 6 M en el análisis estructurado de causa raíz?",
      options: [
        "Manufactura, Materiales, Marketing, Métodos, Manejo, Money (dinero).",
        "Mano de obra, Maquinaria, Método, Material, Medición, Medio ambiente.",
        "Métricas, Modelos, Mecanización, Mantenimiento, Mentalidad, Motivación.",
        "Mercado, Money (dinero), Mentalidad, Mantenimiento, Madurez, Momentum."
      ],
      correctIndex: 1,
      explanation: "Las 6 M obligan a que la búsqueda de causas trascienda el <strong>código y la configuración</strong>: cubre personas/habilidades, servicio/runtime, proceso/lógica, configuración/datos, observabilidad/SLO y demanda/entorno."
    },
    {
      prompt: "¿Por qué el marco de las 6 M es más efectivo que el análisis de una sola disciplina?",
      options: [
        "Toma menos tiempo y reduce la necesidad de reuniones.",
        "Evita la fijación de una sola disciplina y revela causas multicategoría.",
        "Simplifica la documentación y reduce el retrabajo.",
        "Reemplaza la investigación detallada con una lista de verificación."
      ],
      correctIndex: 1,
      explanation: "Sin una lista de verificación de categorías, los ingenieros culpan a la configuración, los SRE culpan al proceso, la guardia culpa a la telemetría. Las 6 M dan a cada revisor el mismo <strong>estímulo</strong>, revelando causas multicategoría."
    },
    {
      prompt: "En el ejemplo de limitación 429 de Cosmos, ¿cuáles tres M fueron contribuyentes primarias?",
      options: [
        "Mano de obra, Maquinaria, Medio ambiente.",
        "Método, Medición, Material.",
        "Método, Material, Medio ambiente.",
        "Mano de obra, Medición, Medio ambiente."
      ],
      correctIndex: 2,
      explanation: "Partición caliente (Método), RU/s manuales sin autoescalado (Material) y el pico de EMEA más la campaña de marketing (Medio ambiente) fueron primarias. Las otras M fueron contribuyentes pero se remediaron de forma <strong>oportunista</strong>."
    },
    {
      prompt: "¿Cuándo NO es apropiado usar el marco de las 6 M?",
      options: [
        "Durante postmortems rutinarios con el equipo de ingeniería.",
        "Cuando la causa es un problema de plataforma conocido confirmado por Service Health.",
        "Durante revisiones de confiabilidad de WAF con el cliente.",
        "En tu primera interacción con un cliente nuevo."
      ],
      correctIndex: 1,
      explanation: "Las 6 M son para una exploración amplia. Si la causa es un <strong>problema de plataforma conocido</strong> confirmado por Service Health, el marco es un sobrecosto innecesario."
    },
    {
      prompt: "&ldquo;Un ingeniero dejó una VM encendida durante un feriado.&rdquo; ¿Cuál de las 6 M representa la causa raíz sistémica, no la culpa?",
      options: [
        "Mano de obra: el descuido del ingeniero.",
        "Medición: sin alerta de presupuesto al 80% del gasto.",
        "Medio ambiente: el momento inesperado del feriado.",
        "Material: los ajustes de retención de la VM."
      ],
      correctIndex: 1,
      explanation: "Culpar al ingeniero no es una causa raíz. La causa sistémica es la ausencia de una alerta. La disciplina de <strong>Medición</strong> revela brechas prevenibles."
    }
  ]
},
"fmea": {
  id: "fmea",
  title: "FMEA",
  group: "Mapeo & Análisis de Procesos",
  duration: "30 min",
  executiveSummary: "El FMEA —Failure Mode and Effects Analysis (Análisis de Modos y Efectos de Falla)— anticipa de forma sistemática cómo un proceso o sistema puede fallar, califica cada modo de falla en Severidad × Ocurrencia × Detección para producir un Número de Prioridad de Riesgo (RPN), e impulsa las mitigaciones sobre los elementos de mayor RPN primero. Es un '¿qué podría salir mal?' estructurado para la evaluación de riesgos previa al despliegue y la gobernanza de sistemas de IA.",
  whatYouGain: [
    "Anticipar fallas antes de que ocurran, no después de los postmortems",
    "Calificar las fallas por Severidad (qué tan grave), Ocurrencia (qué tan frecuente), Detección (qué tan bien controlada)",
    "Priorizar las mitigaciones por RPN (número de prioridad de riesgo), enfocándose primero en los peores riesgos",
    "Identificar modos de falla que los controles actuales no detectan",
    "Crear un documento de riesgo vivo que viaja con el sistema y se actualiza después de los incidentes"
  ],
  explanation: "<p>El FMEA documenta sistemáticamente los modos de falla, efectos, causas y controles actuales para cada función de un sistema. Para cada modo: califica Severidad (1–10, donde 10 es catastrófico), Ocurrencia (1–10, qué tan probable), Detección (1–10, donde 10 es 'no la detectará'), luego calcula RPN = S × O × D (1–1000). Ordena por RPN y aborda primero los modos de mayor RPN. Variantes: FMEA de Proceso (manufactura/procesos, se mapea a flujos de ingeniería), FMEA de Diseño (producto previo al lanzamiento), FMEA de Sistema (riesgos a nivel de arquitectura entre servicios).</p><p>Práctica clave: acuerden las escalas de 1–10 antes de empezar. De lo contrario, los equipos consumen el 80% del taller debatiendo si algo es un 7 o un 8. Antipatrón a evitar: el FMEA de una sola vez que se entrega con el proyecto y nunca se actualiza. El modelo de riesgo se degrada; los incidentes deberían disparar una actualización del FMEA para capturar modos recién descubiertos.</p><p>Flujo de trabajo: elige el alcance (un proceso, sistema o funcionalidad), forma un equipo multifuncional, haz lluvia de ideas de modos de falla (usa Ishikawa / 6 M para exhaustividad), para cada modo captura el efecto, la causa y los controles actuales, luego califica S, O, D y calcula el RPN. Asigna acciones y vuelve a calificar tras la mitigación. El RPN debería bajar. Conviértelo en un documento vivo que se actualice con incidentes, lanzamientos y cambios de arquitectura.</p>",
  csamExample: "<p>Un CSAM ejecuta un FMEA con un cliente antes de su primer ejercicio de failover multirregión. Hallazgo de mayor RPN: la rotación de secretos en la región de DR (S=9, O=4, D=9, RPN=324). Los controles actuales (rotación manual previa al ejercicio) tienen baja detección. El equipo pre-rota y prueba antes del ejercicio; el ejercicio tiene éxito. El RPN posterior a la acción baja a 18 (mediante automatización). Sin el FMEA, el failover habría fallado por la razón más vergonzosa frente al liderazgo.</p>",
  csaExample: "<p>Un CSA ejecuta un FMEA sobre la arquitectura de Cosmos DB de un cliente antes de un lanzamiento a producción. Modos de falla identificados: clave de partición caliente (S=8, O=6, D=8, RPN=384), timeout de red por agrupamiento de conexiones (S=7, O=3, D=6, RPN=126), corrupción de datos por un error de la aplicación (S=10, O=2, D=4, RPN=80). El mayor RPN es el diseño de la clave de partición. El equipo implementa validación de la clave de partición en IaC (reduciendo O a 1 tras la implementación). Los modos secundarios (timeout, corrupción de datos) reciben controles detectivos (alertas, registro de auditoría) en lugar de prevención. El FMEA ordenó el esfuerzo por el riesgo real.</p>",
  recap: [
    "El FMEA anticipa las fallas antes de que ocurran los incidentes",
    "RPN = Severidad × Ocurrencia × Detección; ordena por RPN para priorizar",
    "Establece las escalas de calificación de 1–10 antes de empezar: debatir una sola calificación mata la productividad",
    "El FMEA es un documento vivo; actualízalo tras incidentes y cambios de arquitectura",
    "Combínalo con Poka-Yoke: cada modo de mayor RPN se convierte en un objetivo de a prueba de errores"
  ],
  questions: [
    {
      prompt: "¿Qué significa RPN en FMEA?",
      options: [
        "Risk Planning Number (Número de Planificación de Riesgo).",
        "Risk Priority Number (Número de Prioridad de Riesgo).",
        "Ranked Priority Number (Número de Prioridad Clasificado).",
        "Risk Process Notation (Notación de Proceso de Riesgo)."
      ],
      correctIndex: 1,
      explanation: "El <strong>Número de Prioridad de Riesgo</strong> (RPN) es Severidad &times; Ocurrencia &times; Detección, produciendo una puntuación que prioriza qué modos de falla abordar primero."
    },
    {
      prompt: "¿Cómo se calcula el RPN?",
      options: [
        "Severidad + Ocurrencia + Detección.",
        "Severidad &minus; Ocurrencia + Detección.",
        "Severidad &times; Ocurrencia &times; Detección.",
        "(Severidad &times; Ocurrencia) &divide; Detección."
      ],
      correctIndex: 2,
      explanation: "RPN = <strong>Severidad &times; Ocurrencia &times; Detección</strong>. La multiplicación significa que una sola dimensión en la peor calificación genera un RPN alto, enfocando la atención en los modos más consecuentes."
    },
    {
      prompt: "¿Qué deberías establecer ANTES de iniciar un taller de FMEA?",
      options: [
        "Una lista de todos los modos de falla concebibles.",
        "Escalas de calificación de 1–10 preacordadas para Severidad, Ocurrencia y Detección.",
        "El presupuesto para mitigar los elementos de mayor RPN.",
        "Dos años de datos históricos de incidentes."
      ],
      correctIndex: 1,
      explanation: "Los equipos deben acordar las <strong>escalas de 1–10</strong> antes de la lluvia de ideas. De lo contrario, el taller se consume debatiendo si algo es un 7 o un 8 en lugar de analizar el riesgo."
    },
    {
      prompt: "¿Cuáles son las tres variantes principales del FMEA?",
      options: [
        "Hardware, Software y Proceso.",
        "Diseño, Sistema y Arquitectura.",
        "Proceso, Diseño y Sistema.",
        "Preventivo, Detectivo y Correctivo."
      ],
      correctIndex: 2,
      explanation: "Las variantes son <strong>FMEA de Proceso</strong> (manufactura/procesos), <strong>FMEA de Diseño</strong> (producto previo al lanzamiento) y <strong>FMEA de Sistema</strong> (riesgos a nivel de arquitectura entre servicios)."
    },
    {
      prompt: "¿Cuál es el antipatrón clave a evitar en la gestión del FMEA?",
      options: [
        "Calificar un modo de falla como Severidad 10 cuando debería ser 9.",
        "Crear un documento de FMEA de una sola vez que nunca se vuelve a actualizar.",
        "Involucrar a demasiadas personas en el taller.",
        "Abordar primero los elementos de menor RPN para generar impulso."
      ],
      correctIndex: 1,
      explanation: "El <strong>FMEA de una sola vez</strong> se entrega con el proyecto y nunca se actualiza. Los modelos de riesgo se degradan; el FMEA debe ser un documento vivo que se actualice tras incidentes y cambios de arquitectura."
    }
  ]
},
"5s": {
  id: "5s",
  title: "5S: Organización Visual del Lugar de Trabajo",
  group: "Lugar de Trabajo, Flujo & Estandarización",
  duration: "30 min",
  executiveSummary: "5S—Seiri (clasificar), Seiton (ordenar), Seiso (limpiar), Seiketsu (estandarizar), Shitsuke (sostener)—es un método para organizar los entornos de ingeniería y eliminar el desperdicio de buscar, identificar erróneamente y volver a crear artefactos. Aplicado a repositorios, suscripciones, tableros y runbooks, recupera horas de ingeniería que de otro modo se pierden en entornos sin mantenimiento. La disciplina está en la secuencia: si te saltas Seiri organizas basura; si te saltas Seiketsu, Shitsuke falla. Trata 5S como un trabajo recurrente trimestral, no como una limpieza única.",
  whatYouGain: [
    "Elimina recursos huérfanos y reduce el desperdicio de búsqueda e identificación aplicando una secuencia de cinco pasos a los entornos de ingeniería",
    "Usa 5S para organizar repositorios, suscripciones, tableros, runbooks y canales de ChatOps—recuperando horas perdidas por la desorganización",
    "Incorpora convenciones en tu entorno para que la organización se mantenga consistente sin esfuerzo manual constante",
    "Capacita a tu equipo sobre el antipatrón: las limpiezas únicas fallan; Shitsuke (sostener) es lo que hace que el orden perdure"
  ],
  explanation: "<p><strong>5S es la disciplina del lugar de trabajo visual nacida en la planta de Toyota, ahora aplicada a los entornos de ingeniería.</strong> Los repositorios, suscripciones y tableros desorganizados filtran tiempo de forma invisible: los ingenieros bifurcan en lugar de encontrar el módulo canónico; improvisan durante los incidentes porque no encuentran el runbook; construyen tableros redundantes porque no encuentran el que ya existe.</p><p>Los cinco pasos forman una secuencia:</p><ul><li><strong>Seiri (clasificar):</strong> Identifica lo necesario; elimina lo que no lo es. Corta con firmeza. Archiva lo que podría necesitarse; elimina el resto.</li><li><strong>Seiton (ordenar):</strong> Coloca lo necesario en un lugar conocido y convencional. Define convenciones de carpetas, etiquetas y nomenclatura.</li><li><strong>Seiso (limpiar):</strong> Limpia continuamente. Linters automatizados, bots de dependencias, auditorías de costos programadas, verificaciones de enlaces rotos.</li><li><strong>Seiketsu (estandarizar):</strong> Codifica la convención en plantillas, Policy, plantillas de repositorio o paquetes de tableros.</li><li><strong>Shitsuke (sostener):</strong> Haz que el orden se mantenga por sí mismo para que no se deteriore. Asigna un responsable con nombre para cada entorno; ejecuta una auditoría programada con una cadencia fija (por ejemplo, trimestral) contra una lista de verificación corta y explícita derivada del paso de estandarización; publica una única métrica de deriva en un tablero (recursos huérfanos, suscripciones sin etiquetar, módulos duplicados) y revísala en una reunión recurrente existente en lugar de una nueva. Donde sea posible, reemplaza las auditorías manuales con verificaciones automatizadas que fallen una compilación o abran un ticket cuando se rompa la convención, de modo que el sostenimiento se imponga por mecanismo, no por memoria. Trata una métrica de deriva en aumento como el disparador de un breve re-Seiri, no como una razón para empezar de cero.</li></ul><p>El antipatrón: una limpieza única tipo \"sábado de 5S\" sin Seiketsu ni Shitsuke. El desorden regresa en un trimestre. El 5S real es trabajo recurrente, no un proyecto.</p>",
  csamExample: "<p>Un CSAM hereda un cliente a 90 días de iniciada la relación. El entorno de suscripciones tiene 1.400 recursos; el cliente no puede dar cuenta de 380 de ellos. No hay etiquetas, ni propiedad clara, y la asignación de costos se está volviendo política. El CSAM propone un barrido de 5S de 3 semanas: identificar y etiquetar o retirar recursos huérfanos, establecer una convención de nomenclatura y un estándar de etiquetado, agregar un tablero de auditoría trimestral y asignar un responsable. Para la semana 3, los 380 están etiquetados a un equipo, retirados o transferidos. Las discusiones sobre asignación de costos desaparecen; la automatización de auditoría recurrente mantiene el conteo por debajo de 20. El CSAM usa el resultado de 5S para construir confianza: \"Encontramos $94K/año de desperdicio e hicimos que la limpieza perdurara\", una prueba de valor creíble que abre puertas a un trabajo más profundo.</p>",
  csaExample: "<p>Un CSA trabaja con el equipo de plataforma de un cliente en una modernización de AKS. El monorepo de IaC tiene 142 módulos; el equipo desperdicia horas buscando el canónico frente a clones obsoletos. El CSA lidera un 5S sobre el repositorio: el equipo aplica Seiri, identifica 38 módulos verdaderamente canónicos frente a 104 clones, y archiva los clones. Aplican Seiton estableciendo una convención de nomenclatura y una jerarquía de carpetas. Aplican Seiso agregando una compuerta de CI que detecta y marca automáticamente la lógica de módulos duplicados. Aplican Seiketsu creando una plantilla de repositorio que los nuevos proyectos heredan; cada módulo nuevo va al repositorio canónico de forma predeterminada. Aplican Shitsuke con una métrica de auditoría mensual. El tiempo de ciclo de los PR en el repositorio de IaC cae un 40%. La plantilla de repositorio estandarizada previene la deriva futura.</p>",
  recap: [
    "5S es una secuencia de cinco pasos aplicada a los entornos de ingeniería; la secuencia importa—si te saltas Seiri o Seiketsu, la disciplina se rompe.",
    "Las cinco S: Seiri (eliminar basura), Seiton (ubicación convencional), Seiso (automatizar el mantenimiento), Seiketsu (codificar), Shitsuke (cadencia de auditoría).",
    "Usa 5S para organizar repositorios, suscripciones, tableros, bibliotecas de runbooks, canales de ChatOps y bibliotecas de prompts de agentes.",
    "El antipatrón es la limpieza única sin Shitsuke; el desorden regresa en un trimestre. El 5S real es trabajo recurrente.",
    "Bien hecho, 5S recupera horas de ingeniería que de otro modo se perderían en buscar y volver a crear artefactos."
  ],
  questions: [
    {
      prompt: "¿Cuáles son los cinco pasos de 5S en el orden correcto?",
      options: [
        "Organizar, Limpiar, Definir, Auditar, Refrescar",
        "Seiri (clasificar), Seiton (ordenar), Seiso (limpiar), Seiketsu (estandarizar), Shitsuke (sostener)",
        "Seiton (ordenar), Seiri (clasificar), Seiso (limpiar), Shitsuke (sostener), Seiketsu (estandarizar)",
        "Limpiar, Organizar, Verificar, Codificar, Mantener"
      ],
      correctIndex: 1,
      explanation: "La secuencia importa. Seiri elimina lo que no se necesita, Seiton coloca el resto en orden convencional, Seiso automatiza el mantenimiento, Seiketsu codifica la convención, y Shitsuke crea la <strong>cadencia de auditoría</strong>."
    },
    {
      prompt: "¿Por qué la secuencia de los pasos de 5S es crítica en lugar de una lista de verificación flexible?",
      options: [
        "Cada paso depende de que los pasos anteriores estén completos; saltarse la secuencia rompe la disciplina.",
        "El orden no importa &mdash; el mismo resultado ocurre de cualquier manera.",
        "Acelera el proceso y acorta el cronograma general.",
        "Existe solo por razones de marca."
      ],
      correctIndex: 0,
      explanation: "Si te saltas Seiri organizas basura; si te saltas Seiketsu, Shitsuke colapsa. La <strong>secuencia</strong> es el mecanismo que funciona."
    },
    {
      prompt: "¿Cuál es el antipatrón más común que impide que 5S entregue resultados duraderos?",
      options: [
        "Ciclos de limpieza mensuales que son demasiado frecuentes.",
        "Auditorías trimestrales que no incluyen a los nuevos miembros del equipo.",
        "Una limpieza única (por ejemplo, un &ldquo;sábado de 5S&rdquo;) sin fase de Shitsuke (sostener).",
        "Documentación insuficiente de las decisiones de limpieza."
      ],
      correctIndex: 2,
      explanation: "Una limpieza única sin <strong>Seiketsu (estandarizar) ni Shitsuke (sostener)</strong> devuelve el desorden en un trimestre. El método requiere una cadencia de auditoría recurrente para mantener el orden."
    },
    {
      prompt: "¿Qué superficie de ingeniería es un objetivo apropiado para la metodología 5S?",
      options: [
        "Los arreglos personales de los escritorios de desarrolladores individuales.",
        "Monorepos de IaC, entornos de suscripciones, tableros y bibliotecas de runbooks.",
        "Bandejas de entrada de correo personal y sistemas de toma de notas.",
        "Hojas de cálculo usadas para el seguimiento manual de proyectos."
      ],
      correctIndex: 1,
      explanation: "5S se aplica en cualquier lugar donde vivan los artefactos de ingeniería &mdash; repositorios, suscripciones, tableros, runbooks. Estas superficies filtran <strong>desperdicio</strong> invisible cuando están desorganizadas."
    },
    {
      prompt: "Después de completar un barrido de 5S sobre un repositorio, ¿qué paso es más crítico para sostener los resultados?",
      options: [
        "Documentar todos los cambios en una wiki o manual.",
        "Notificar a todo el equipo en una reunión obligatoria.",
        "Crear una métrica y una cadencia de auditoría como parte de Shitsuke (sostener).",
        "Celebrar para reconocer el esfuerzo de limpieza."
      ],
      correctIndex: 2,
      explanation: "Shitsuke (sostener) es la quinta S &mdash; sin un responsable con nombre, una cadencia de auditoría y una <strong>métrica en un tablero</strong>, la entropía regresa. La cadencia de auditoría es lo que hace que el orden perdure."
    }
  ]
},

"standard-work": {
  id: "standard-work",
  title: "Trabajo Estándar: La Línea Base para la Mejora",
  group: "Lugar de Trabajo, Flujo & Estandarización",
  duration: "30 min",
  executiveSummary: "El trabajo estándar es la mejor forma conocida actualmente de realizar una tarea—documentada, enseñada y seguida hasta que un ciclo PDCA demuestre una forma mejor. Sin un estándar, no puedes saber si un cambio mejoró algo o solo varió. Para los CSA, el trabajo estándar es cómo se codifican las mejoras de Kaizen y DMAIC en módulos de IaC, Policy, runbooks, plantillas y prompts de agentes. El estándar no es estático; es un artefacto vivo, con dueño, versionado y diseñado explícitamente para ser reemplazado por su mejor versión.",
  whatYouGain: [
    "Establece una línea base medible contra la cual se demuestra la mejora—la variación no puede gestionarse ni mejorarse sin un estándar con el cual compararla",
    "Reduce la variación y los defectos codificando el procedimiento mejor conocido en IaC, Policy y runbooks que todos siguen",
    "Acelera la incorporación dando a los nuevos ingenieros un procedimiento probado en lugar de pedirles que lo reinventen",
    "Incorpora salvaguardas poka-yoke directamente en el estándar para que los errores se vuelvan imposibles o se detecten de inmediato"
  ],
  explanation: "<p><strong>El trabajo estándar es la mejor forma conocida actualmente de realizar una tarea.</strong> Tiene tres componentes según la formulación de Toyota:</p><ul><li><strong>Takt time:</strong> El ritmo de la demanda (por ejemplo, un despliegue cada 8 horas).</li><li><strong>Secuencia de trabajo:</strong> El procedimiento paso a paso en el orden requerido.</li><li><strong>WIP estándar:</strong> Los elementos o el estado requeridos para realizar el procedimiento sin contratiempos (por ejemplo, 2 entornos de staging precalentados).</li></ul><p>En ingeniería, el trabajo estándar toma formas como módulos de IaC con valores predeterminados bloqueados, asignaciones de Azure Policy, plantillas de runbook, payloads de ChatOps, plantillas de repositorio y prompts de agentes versionados con líneas base evaluadas. La palabra &quot;estándar&quot; aquí significa la mejor variante conocida actualmente, no la última palabra. Cada PR que actualiza el estándar es un ciclo PDCA hecho permanente.</p><p><strong>Cómo establecer el trabajo estándar:</strong> No lo escribas desde cero; observa a tus mejores ingenieros haciendo el trabajo bien, documenta la variante con el mejor resultado medido, piloteala, capacita a todos y planifica la cadencia de actualización. El antipatrón es la carpeta de estándares que nadie abre—los estándares deben vivir donde ocurre el trabajo: en el módulo de IaC, el pipeline, el IDE, el payload de ChatOps, no en una página wiki.</p>",
  csamExample: "<p>El cliente de un CSAM tiene 8 ingenieros desplegando clústeres de AKS; cada uno lo hace de manera diferente. Los incidentes de actualización varían ampliamente (1,5 a 6 horas de MTTR) y el equipo culpa a la complejidad. El CSAM propone: observar el procedimiento del mejor ingeniero, documentarlo como un flujo de trabajo de ChatOps + playbook de verificación previa, pilotear con dos equipos y desplegar a todos. En un trimestre, el MTTR de actualización es de 38 minutos casi constante. El CSAM lo presentó al liderazgo: \"No agregamos personas ni recursos—hicimos que el buen procedimiento fuera el procedimiento de todos.\" Esa historia es valor de alta credibilidad: consistencia y velocidad a partir del conocimiento capturado.</p>",
  csaExample: "<p>El cliente de un CSA tiene un módulo de IaC de Cosmos DB usado por 12 equipos. Tres meses de trabajo DMAIC demuestran que las claves de partición jerárquicas + autoescalado + ajuste de índices + actualización del SDK previenen los errores 429. El CSA codifica los cuatro en un nuevo módulo estándar con valores predeterminados bloqueados. Los contenedores nuevos heredan el patrón; los antiguos reciben un script de migración. El WIP estándar ahora incluye el \"tiempo de calentamiento del autoescalado\" en la definición de takt. El módulo está versionado y entra en el catálogo estándar de la plataforma. Un año después, un análisis de los 5 Por Qué descubre un mejor enfoque de ajuste; el CSA actualiza el módulo en un PR, los equipos extraen la nueva versión, y el estándar evoluciona sin que nadie quede atrás.</p>",
  recap: [
    "El trabajo estándar es la línea base para la medición—sin un estándar, la mejora es invisible y la variación no puede gestionarse.",
    "Tres componentes: Takt time (ritmo de la demanda), Secuencia de trabajo (los pasos) y WIP estándar (elementos necesarios para ejecutar sin contratiempos).",
    "Establécelo observando a tus mejores ingenieros, documentando la mejor variante, piloteando, capacitando y planificando la cadencia de actualización.",
    "Los estándares deben vivir donde ocurre el trabajo—en módulos de IaC, pipelines, Policy, payloads de ChatOps—no en una wiki separada.",
    "Un estándar es la mejor forma conocida actualmente, no la última palabra. Actualízalo mediante ciclos PDCA; cada PR que lo actualiza es un ciclo hecho permanente."
  ],
  questions: [
    {
      prompt: "¿Por qué es esencial el trabajo estándar como línea base para la mejora?",
      options: [
        "Impone el cumplimiento de la política corporativa.",
        "Sin un estándar, no puedes saber si un cambio realmente mejoró algo o solo varió.",
        "Elimina la necesidad de runbooks e incorporación.",
        "Fija las mejores prácticas de forma permanente."
      ],
      correctIndex: 1,
      explanation: "La mejora requiere un <strong>comparador</strong>. Sin un estándar, cada ingeniero reinventa el procedimiento, la variación se dispara y no hay una línea base contra la cual medir el cambio."
    },
    {
      prompt: "¿Cuáles son los tres componentes del trabajo estándar en la formulación de Toyota?",
      options: [
        "Documentación, Capacitación, Auditoría.",
        "Takt time, Secuencia de trabajo, WIP estándar.",
        "Definir, Medir, Controlar.",
        "Policy, Proceso, Procedimiento."
      ],
      correctIndex: 1,
      explanation: "<strong>Takt</strong> (ritmo de la demanda), <strong>Secuencia de trabajo</strong> (el procedimiento paso a paso) y <strong>WIP estándar</strong> (elementos / estado requeridos para realizar el procedimiento sin contratiempos)."
    },
    {
      prompt: "Al establecer el trabajo estándar, ¿por dónde deberías empezar?",
      options: [
        "Escribir el estándar desde cero basándote en las mejores prácticas de la industria.",
        "Observar las variaciones actuales y documentar lo que tus mejores ingenieros hacen bien; elige la variante con el mejor resultado medido.",
        "Comprar un estándar comercial a una consultora.",
        "Hacer que el liderazgo defina el estándar de arriba hacia abajo."
      ],
      correctIndex: 1,
      explanation: "No escribas desde cero &mdash; <strong>observa y codifica la mejor variante conocida</strong>. Los estándares construidos a partir de la práctica real sobreviven al contacto con el trabajo; los estándares escritos en el vacío mueren en el campo."
    },
    {
      prompt: "¿Dónde debe vivir el trabajo estándar para que realmente se siga?",
      options: [
        "En una carpeta en la sala del equipo.",
        "En una página wiki que nadie abre.",
        "Donde ocurre el trabajo &mdash; en el módulo de IaC, el pipeline, el IDE, el payload de ChatOps.",
        "En un curso de capacitación anual."
      ],
      correctIndex: 2,
      explanation: "El antipatrón es la <strong>carpeta de estándares que nadie abre</strong>. Los estándares deben incorporarse donde ocurre el trabajo &mdash; valores predeterminados de IaC, plantillas de pipeline, Policy, runbooks &mdash; no en un documento separado."
    },
    {
      prompt: "¿Debería cambiar alguna vez el trabajo estándar?",
      options: [
        "No &mdash; una vez estandarizado, el estándar queda bloqueado permanentemente.",
        "Sí &mdash; un estándar es un artefacto vivo, con dueño y versionado, reemplazado por una mejor versión mediante un ciclo PDCA.",
        "Solo cada 5 años durante las revisiones mayores.",
        "Solo si el liderazgo lo aprueba por escrito."
      ],
      correctIndex: 1,
      explanation: "Un estándar es la <strong>mejor forma conocida actualmente</strong>, no la última palabra. Cada PR que actualiza el estándar es un ciclo PDCA hecho permanente. Sin una cadencia de actualización, el estándar se osifica."
    }
  ]
},

"gemba": {
  id: "gemba",
  title: "Caminata Gemba: Observa Donde Realmente Ocurre el Trabajo",
  group: "Lugar de Trabajo, Flujo & Estandarización",
  duration: "30 min",
  executiveSummary: "Gemba significa 'el lugar real'—ir adonde ocurre el trabajo, observarlo directamente y hacer preguntas respetuosas en lugar de apoyarse en reportes, tableros o rumores. El gemba revela la fricción silenciosa y las soluciones improvisadas que las métricas promedian y ocultan. Para los CSA, las caminatas gemba anclan las fases de Medir y Analizar de DMAIC, preparan el trabajo previo de Kaizen y validan si las narrativas del equipo coinciden con la realidad observada. Una observación de 5 minutos a menudo supera una auditoría de 50 páginas.",
  whatYouGain: [
    "Descubre la fricción silenciosa y las soluciones improvisadas no documentadas que los tableros y reportes pasan por alto sistemáticamente",
    "Construye credibilidad del CSA con los ingenieros del cliente al ver su realidad de primera mano, sin apoyarte en resúmenes",
    "Valida o invalida las autonarrativas del equipo—\"desplegamos a diario\" a menudo oculta un promedio de 11 días disimulado por la forma en que se reporta la métrica",
    "Saca a la luz estándares no documentados (buenos y malos) que son los procedimientos reales que el equipo sigue"
  ],
  explanation: "<p><strong>Gemba es una observación estructurada del trabajo tal como ocurre.</strong> No es una auditoría, ni un interrogatorio, ni una reunión de estado. Principios del gemba, adaptados de Taiichi Ohno:</p><ul><li><strong>Ve a ver:</strong> Estar presente física o virtualmente donde ocurre el trabajo.</li><li><strong>Pregunta por qué:</strong> Con curiosidad, respeto y de forma repetida (aquí aplica la disciplina de los 5 Por Qué).</li><li><strong>Muestra respeto:</strong> Los practicantes saben cosas que tú no. Escucha primero.</li></ul><p>Superficies de ingeniería que cuentan como gemba: el repositorio y el IDE durante una tarea de desarrollo, la compilación y el despliegue mientras se ejecutan, el canal de ChatOps durante un incidente, el standup mientras ocurre, las observaciones de guardia, la telemetría de uso del cliente. Lo que el gemba <em>no</em> es: una revisión de tablero, una reunión de estado, un recorrido resumido en diapositivas, o \"gemba ejecutivo\"—una visita de 30 minutos con un séquito de 6 personas donde nadie trabaja de forma natural.</p><p><strong>Cómo hacer una caminata gemba:</strong> Elige un propósito (\"entender el tiempo de entrega del despliegue\"), agéndala con el consentimiento del equipo, lleva un cuaderno y deja la computadora, observa un ciclo completo en silencio, luego haz preguntas abiertas. Registra textualmente donde sea útil. Sintetiza fuera del sitio. Reporta primero al equipo, antes que al liderazgo. La fricción que saques a la luz se convierte en el trabajo previo de Kaizen o el diagnóstico de una fase de Medir.</p>",
  csamExample: "<p>El cliente de un CSAM afirma \"desplegamos a diario\". El CSA acompaña el proceso de despliegue durante tres días. Las compilaciones sí se ejecutan a diario; pero las promociones a producción ocurren cada 11 días en promedio, restringidas por un comité asesor de cambios (CAB) semanal. La métrica que el equipo mostró al liderazgo era precisa y engañosa. La caminata gemba del CSA reencuadró el programa: el cuello de botella no es la velocidad de desarrollo—es la gobernanza del cambio. La reunión del CAB se convirtió en el objetivo de intervención del CSA, no el pipeline de CI. Este encuadre nunca habría surgido de un tablero.</p>",
  csaExample: "<p>Un CSA está diagnosticando la rotación de pods de AKS en el clúster de producción de un cliente. Los tableros muestran reinicios ocasionales; el equipo de guardia dice \"probablemente sean fallos de red\". El CSA se sienta con el equipo de guardia durante un turno de 4 horas y observa el canal de incidentes en tiempo real. Ve: cada reinicio es seguido por 4 pasos manuales de recopilación de contexto (encontrar los logs del pod, revisar el nodo, revisar el namespace de red, revisar DNS). Cada paso toma de 5 a 10 minutos. El CSA propone un workbook que recopila automáticamente los cuatro con un solo enlace. La adopción por parte del equipo de guardia es inmediata; el trabajo manual tedioso cae un 40%. El gemba reveló un procedimiento no documentado; la solución fue clara una vez que el trabajo se hizo visible.</p>",
  recap: [
    "Gemba significa 'el lugar real'—observa donde ocurre el trabajo, pregunta por qué con respeto, muestra respeto por lo que saben los practicantes.",
    "El gemba saca a la luz la fricción silenciosa y las soluciones improvisadas que las métricas promedian y los reportes resumen hasta hacer desaparecer.",
    "Especialmente valioso en las fases de Medir y Analizar de DMAIC y en el trabajo previo de Kaizen—ancla el diagnóstico en la realidad, no en la narrativa reportada.",
    "Ve en pequeño: invítate a ti mismo con consentimiento, lleva un cuaderno, observa en silencio primero, luego pregunta. Reporta al equipo antes que al liderazgo.",
    "El antipatrón: el 'gemba ejecutivo'—una visita con gran séquito donde nadie trabaja de forma natural. El gemba genuino es pequeño y agendado con consentimiento."
  ],
  questions: [
    {
      prompt: "¿Qué significa &ldquo;gemba&rdquo;?",
      options: [
        "Una reunión de revisión de gestión programada.",
        "El lugar real donde ocurre el trabajo.",
        "Un proceso formal de auditoría o inspección.",
        "Una discusión retrospectiva de eventos pasados."
      ],
      correctIndex: 1,
      explanation: "<strong>Gemba</strong> es japonés para &ldquo;el lugar real.&rdquo; Significa ir adonde se realiza el trabajo, observarlo directamente y hacer preguntas respetuosas &mdash; no apoyarse en tableros ni rumores."
    },
    {
      prompt: "¿Cuáles son los tres principios de Ohno para una caminata gemba?",
      options: [
        "Escuchar, Aprender, Liderar.",
        "Planificar, Observar, Reportar.",
        "Ve a ver, Pregunta por qué, Muestra respeto.",
        "Encontrar hechos, Analizar datos, Recomendar acción."
      ],
      correctIndex: 2,
      explanation: "Los tres principios son <strong>Ve a ver, Pregunta por qué, Muestra respeto</strong> &mdash; ve adonde ocurre el trabajo, pregunta por qué repetidamente y respeta que los practicantes saben cosas que el observador no."
    },
    {
      prompt: "¿Qué NO es el gemba?",
      options: [
        "Una forma de descubrir soluciones improvisadas no documentadas.",
        "Una auditoría realizada con el consentimiento del equipo.",
        "Una visita de 30 minutos con un séquito ejecutivo de 6 personas que interrumpe el trabajo que se observa.",
        "Una observación del proceso real de respuesta a incidentes."
      ],
      correctIndex: 2,
      explanation: "El gemba NO es el &ldquo;gemba ejecutivo&rdquo; &mdash; una <strong>visita con gran séquito</strong> donde nadie trabaja de forma natural. El gemba genuino es pequeño, agendado con consentimiento y realizado con un cuaderno, no con una computadora."
    },
    {
      prompt: "¿Qué saca a la luz una caminata gemba que los tableros y reportes típicamente pasan por alto?",
      options: [
        "Tendencias de alto nivel y métricas agregadas.",
        "Fricción silenciosa y soluciones improvisadas no documentadas.",
        "Documentación formal de procesos y estándares.",
        "Datos de línea base históricos de meses anteriores."
      ],
      correctIndex: 1,
      explanation: "Las caminatas gemba sacan a la luz la <strong>fricción silenciosa</strong> &mdash; soluciones improvisadas que todos usan pero nadie documenta, pasos manuales que las métricas promedian y ocultan. Los tableros mienten por omisión; el gemba revela la textura."
    },
    {
      prompt: "¿En qué fases de DMAIC es especialmente valiosa la caminata gemba?",
      options: [
        "Solo Definir y Mejorar.",
        "Medir y Analizar.",
        "Controlar y Mejorar.",
        "Todas las fases por igual."
      ],
      correctIndex: 1,
      explanation: "El gemba es especialmente valioso en <strong>Medir y Analizar</strong> para anclar la línea base en la realidad, validar o invalidar las narrativas del equipo y descubrir lo que los reportes pasan por alto sistemáticamente."
    }
  ]
},

"poka-yoke": {
  id: "poka-yoke",
  title: "Poka-Yoke: Diseña Sistemas Para Que los Errores Sean Imposibles",
  group: "Lugar de Trabajo, Flujo & Estandarización",
  duration: "30 min",
  executiveSummary: "Poka-Yoke significa 'a prueba de errores'—diseñar sistemas y procesos para que los errores sean imposibles o, en su defecto, se detecten de inmediato. La prevención (el error se vuelve imposible) supera a la detección (el error se atrapa en el momento). Para los CSA, poka-yoke es cómo haces que las mejoras de CI perduren: el cambio no puede deshacerse, la configuración incorrecta no puede desplegarse, el secreto no puede confirmarse. La capacitación y los recordatorios tienden a fallar a escala; la prevención duradera proviene del mecanismo. Combínalo con FMEA y trabajo estándar para identificar dónde aplicar poka-yoke y qué comportamiento imponer.",
  whatYouGain: [
    "Haz que las mejoras de CI perduren diseñando sistemas donde los errores sean imposibles—bloquea el recurso de producción, deniega la configuración incorrecta, impide la confirmación del secreto",
    "Elimina la dependencia de la capacitación, las listas de verificación y la atención humana a escala—el mecanismo supera al memorándum cada vez",
    "Sostén las mejoras de Kaizen y DMAIC eliminando la ruta de regresión—el cambio se convierte en estructura, no en disciplina",
    "Aplica poka-yokes nativos de Azure: Policy (modo deny), RBAC (privilegio mínimo), validación de esquemas, compuertas de CI, bloqueos de recursos, identidad administrada"
  ],
  explanation: "<p><strong>Poka-Yoke tiene dos clases:</strong></p><ul><li><strong>Prevención:</strong> El error es física o lógicamente imposible. Policy deniega la acción. El recurso no puede eliminarse. La etiqueta no puede ser no inmutable.</li><li><strong>Detección:</strong> El error se marca de inmediato y de forma visible en el momento en que ocurre. La validación de esquemas rechaza una configuración malformada. Un hook de pre-commit bloquea el secreto.</li></ul><p>Los tres niveles de control de Shingo: <strong>Advertencia</strong> (se alerta al operador en un tablero), <strong>Apagado/rechazo</strong> (el sistema rechaza la acción), <strong>Autocorrección</strong> (el sistema corrige y continúa). El rechazo es más difícil de diseñar que una advertencia, pero impide que el error ocurra.</p><p><strong>Poka-yokes comunes en Azure/ingeniería:</strong> Azure Policy (modos deny/audit), RBAC con alcance de privilegio mínimo, validación de esquemas, hooks de pre-commit (escaneo de secretos, lint), compuertas de pipeline, bloqueos de recursos (CanNotDelete/ReadOnly), identidad administrada, infraestructura inmutable, sistemas de tipos y lints.</p><p><strong>Cómo diseñar:</strong> Identifica el error (a partir de FMEA, post-mortems, cuasi-errores), elige la clase (prevención &gt; detección), elige el nivel (rechazo &gt; advertencia), colócalo lo más cerca posible de la fuente del error (pre-commit &gt; CI &gt; tiempo de ejecución &gt; auditoría). Prueba el propio poka-yoke. Estandarízalo en IaC, Policy o herramientas compartidas. Monitorea por elusión—algunos equipos buscarán rodearlo; detéctalo.</p>",
  csamExample: "<p>El cliente de un CSAM ha eliminado una base de datos de producción tres veces en 18 meses a pesar de la capacitación. El CSAM propone un mecanismo poka-yoke: Policy asigna `cannot_be_deleted = true` a cada recurso de producción; los runners de CI bloquean la bandera `--no-prompt`; una solicitud de eliminación ahora requiere aprobaciones que el equipo sabe que debe encolar. La capacitación por sí sola falló a escala; el mecanismo funciona. Cero recurrencias en los siguientes 24 meses. El CSAM lo presentó al liderazgo: \"Los memorándums no pueden vencer al mecanismo. Eliminamos la capacidad de cometer el error.\"</p>",
  csaExample: "<p>El registro de imágenes del cliente de un CSA es público, lo que arriesga una vulnerabilidad de la cadena de suministro. El CSA propone: Azure Policy deniega los endpoints públicos en ACR, impone la identidad administrada para las extracciones de pods y bloquea las etiquetas de imágenes mutables. RBAC limita los permisos de eliminación solo al acceso de emergencia (break-glass). Un hook de pre-commit bloquea la etiqueta `latest` en los charts de Helm. Un desarrollador que intente el viejo patrón inseguro ahora encuentra rechazo en múltiples capas—el error se vuelve imposible antes de llegar al tiempo de ejecución. Estandarizado en el módulo de IaC para que cada nuevo ACR herede los poka-yokes.</p>",
  recap: [
    "Los poka-yokes de prevención hacen que el error sea imposible; los poka-yokes de detección lo atrapan de inmediato. Se prefiere la prevención cuando es factible.",
    "Coloca los poka-yokes cerca de la fuente del error: pre-commit supera a CI, que supera al tiempo de ejecución, que supera a la auditoría posterior.",
    "El rechazo (el sistema rechaza la acción) es más fuerte que la advertencia (el sistema alerta). El mecanismo supera a la capacitación, la lista de verificación y el memorándum a escala.",
    "Poka-yokes comunes de Azure: Policy (modo deny), RBAC (privilegio mínimo), validación de esquemas, hooks de pre-commit, compuertas de CI, bloqueos de recursos, identidad administrada.",
    "Cualquier error que haya ocurrido dos veces debería tener un poka-yoke; los modos de alta severidad (los raros muerden más fuerte) especialmente los necesitan."
  ],
  questions: [
    {
      prompt: "¿Cuáles son las dos clases de poka-yoke según la distinción original de Shingo?",
      options: [
        "Manual y Automatizado.",
        "Prevención (el error es física/lógicamente imposible) y Detección (el error se atrapa en el momento en que ocurre).",
        "Hardware y Software.",
        "Pre-commit y Post-despliegue."
      ],
      correctIndex: 1,
      explanation: "La prevención hace que el error sea <strong>imposible</strong> (Policy deniega la acción); la detección lo atrapa en el momento en que ocurre (la validación de esquemas rechaza una configuración malformada). Se prefiere la prevención cuando es factible."
    },
    {
      prompt: "La base de datos de producción de un cliente ha sido eliminada tres veces en 18 meses a pesar de la capacitación. ¿Cuál es el siguiente paso correcto?",
      options: [
        "Agregar una cuarta ronda de capacitación y una lista de verificación.",
        "Aplicar un mecanismo: bloqueo de recurso (CanNotDelete), Policy deny y bloquear --no-prompt en los runners de CI.",
        "Documentar el problema en una wiki y seguir adelante.",
        "Emitir un memorándum contundente del liderazgo."
      ],
      correctIndex: 1,
      explanation: "La capacitación y los recordatorios fallan a escala. El principio de poka-yoke es &ldquo;<strong>los memorándums no pueden vencer al mecanismo</strong>.&rdquo; Bloquea el recurso y deniega la acción en la política &mdash; la eliminación se vuelve imposible."
    },
    {
      prompt: "¿Cuál es generalmente el nivel de control más fuerte para un poka-yoke?",
      options: [
        "Advertencia &mdash; alertar al operador en un tablero.",
        "Apagado / rechazo &mdash; el sistema rechaza la acción.",
        "Autocorrección &mdash; corregir silenciosamente y continuar.",
        "Auditoría &mdash; registrar la acción para revisión posterior."
      ],
      correctIndex: 1,
      explanation: "El rechazo es más difícil de diseñar que una advertencia, pero impide que el error ocurra. <strong>Rechazo &gt; Advertencia</strong> en la jerarquía de control de Shingo."
    },
    {
      prompt: "¿Dónde deberías colocar un poka-yoke para obtener el máximo efecto?",
      options: [
        "Lo más río abajo posible para evitar bloquear a los desarrolladores.",
        "Lo más cerca posible de la fuente del error &mdash; pre-commit supera a CI; CI supera al tiempo de ejecución; el tiempo de ejecución supera a la auditoría.",
        "Solo en producción, nunca en entornos de desarrollo o prueba.",
        "Donde sea más fácil de implementar, sin importar la fuente."
      ],
      correctIndex: 1,
      explanation: "Atrapa los errores lo más cerca posible de la fuente. Un <strong>hook de pre-commit</strong> supera a una compuerta de CI, que supera a una verificación en tiempo de ejecución, que supera a la auditoría posterior. Cuanto más temprano, más barato."
    },
    {
      prompt: "¿Cuál es el antipatrón clave a evitar al diseñar poka-yoke?",
      options: [
        "Usar Azure Policy en modo deny para los recursos de producción.",
        "Tratar la &ldquo;capacitación más una lista de verificación&rdquo; como un poka-yoke cuando solo un mecanismo califica.",
        "Restringir RBAC al privilegio mínimo.",
        "Usar identidad administrada en lugar de secretos en el código."
      ],
      correctIndex: 1,
      explanation: "La capacitación no es poka-yoke; <strong>solo el mecanismo lo es</strong>. Una lista de verificación que depende de la atención humana fallará a escala &mdash; eso es precisamente lo que el poka-yoke existe para eliminar."
    }
  ]
},

"andon-cord": {
  id: "andon-cord",
  title: "Cordón Andon: Detén la Línea, Corrige la Fuente",
  group: "Lugar de Trabajo, Flujo & Estandarización",
  duration: "30 min",
  executiveSummary: "El cordón Andon es el mecanismo del Sistema de Producción Toyota que permite a cualquier trabajador detener la línea en el momento en que aparece una anomalía, para que el equipo enjambre el problema en su fuente en lugar de pasar un defecto río abajo. Es jidoka en la práctica—construye la calidad desde el origen al negarse a continuar cuando algo está mal. Para los CSA, el cordón Andon es el reflejo de 'la casa en llamas' convertido en sistema: cuando un despliegue está fallando o un defecto está escapando, el primer movimiento es detener la línea y contenerlo, luego ejecutar el análisis de causa raíz después. Solo funciona donde tirar del cordón es seguro, esperado y sin culpa.",
  whatYouGain: [
    "Construye el reflejo de detener la línea y contener un problema primero, antes de que se propague río abajo hacia los clientes",
    "Haz que las anomalías sean visibles en el instante en que ocurren en lugar de descubrirlas en un post-mortem",
    "Separa la respuesta inmediata de detener y enjambrar del trabajo más lento de causa raíz que previene las repeticiones",
    "Crea una cultura sin culpa donde tirar del cordón se recompensa, no se castiga, para que los problemas salgan a la luz temprano",
    "Aplica mecanismos Andon nativos de Azure: compuertas de despliegue automatizadas, auto-pausa de canary, alertas de presupuesto de error y autoridad de detención de envío"
  ],
  explanation: "<p>El <strong>cordón Andon</strong> (del japonés <em>andon</em>, una linterna de papel usada como señal) es un cordón o botón físico en una línea de ensamblaje de Toyota. Cuando un operador detecta un defecto o una condición anormal, tira de él. Se enciende una señal, un supervisor viene a ayudar y, si el problema no se resuelve dentro del takt time, la línea se detiene. La idea radical es que se confía en un solo trabajador de primera línea para detener toda una línea de producción en lugar de dejar que un defecto conocido avance.</p><p>Esta es la cara operativa de <strong>jidoka</strong>&mdash;autonomación, o &lsquo;automatización con un toque humano.&rsquo; El principio es <strong>construir la calidad desde el origen</strong> deteniéndose en el momento en que algo está mal, en lugar de inspeccionarlo después. Detenerse no es un fracaso; es el sistema funcionando como fue diseñado. Dejar pasar un defecto para mantener la línea en movimiento es el verdadero fracaso, porque el costo de corregir un problema crece cuanto más río abajo viaja.</p><p>El cordón Andon se mapea directamente sobre la disciplina de contener primero: <strong>detener la línea es el mismo instinto que &lsquo;apagar el fuego primero.&rsquo;</strong> Cuando algo está saliendo mal activamente, el trabajo inmediato es detener y contener el daño&mdash;no debatir la causa raíz mientras los defectos siguen escapando. Tirar del cordón es una reacción deliberada y entrenada a una anomalía, no una convergencia prematura. El trabajo estructurado de causa raíz de divergir-luego-converger viene <em>después</em> de que la línea esté estable, en el enjambre y el post-mortem, donde el equipo encuentra la causa sistémica y mejora el estado actual para que esa misma detención sea menos probable la próxima vez.</p><p>Para que el mecanismo funcione, deben cumplirse tres condiciones: tirar del cordón debe ser <strong>seguro</strong> (sin culpa&mdash;sin castigo por una detención de buena fe), <strong>esperado</strong> (todos están facultados y capacitados para tirar de él) y <strong>receptivo</strong> (una tirada desencadena ayuda inmediata, no un encogimiento de hombros). Donde detener la línea se castiga implícitamente, la gente deja de tirar del cordón, los defectos fluyen río abajo y la señal se apaga.</p><p><strong>Andon en Azure e ingeniería:</strong> un canary que falla y auto-pausa un despliegue progresivo, un anillo de despliegue que se detiene ante una falla de compuerta de salud, una alerta de consumo del presupuesto de error que avisa a la guardia, una reversión automatizada ante una prueba de humo fallida, y autoridad explícita de &lsquo;detención de envío&rsquo; para cualquier ingeniero que vea un lanzamiento saliendo mal. El equivalente digital de tirar del cordón es detener el despliegue y enjambrar&mdash;luego escribir el post-mortem sin culpa.</p>",
  csamExample: "<p>Un CSAM nota que los ingenieros del cliente rutinariamente fuerzan los despliegues incluso cuando las métricas del canary se ven mal, porque detener un lanzamiento se trata como un fracaso personal. Los defectos llegan a producción y los mismos incidentes se repiten. El CSAM introduce un modelo Andon: el análisis automatizado de canary auto-pausa cualquier despliegue progresivo cuando las tasas de error superan un umbral, y cualquier ingeniero está explícitamente autorizado a detener un lanzamiento sin buscar aprobación. De manera crítica, el CSAM trabaja con el liderazgo para que las tiradas sean sin culpa&mdash;una línea detenida se celebra como un defecto contenido, no como un retraso causado. En un trimestre, los problemas salen a la luz durante el despliegue en lugar de en los incidentes del cliente, y los post-mortems pasan de culpar a individuos a corregir el sistema.</p>",
  csaExample: "<p>Un CSA está fortaleciendo el pipeline de despliegue de AKS de un cliente. Hoy, una imagen defectuosa puede desplegarse a todas las réplicas antes de que alguien lo note. El CSA implementa un cordón Andon digital: un despliegue progresivo con sondas de salud y una compuerta automatizada que se detiene y revierte en el momento en que se consume el presupuesto de error, más una alerta que avisa a la guardia en el instante en que la compuerta se activa. La guardia tiene autoridad documentada de detención de envío para congelar el pipeline. Cuando la compuerta se dispara, el equipo enjambra para restaurar el servicio primero; el análisis de causa raíz de divergir-luego-converger ocurre después en un post-mortem sin culpa, y la corrección se estandariza de vuelta en el pipeline para que ese modo de falla se auto-detenga la próxima vez.</p>",
  recap: [
    "El cordón Andon faculta a cualquier trabajador a detener la línea en el instante en que aparece una anomalía, para que los defectos se contengan en la fuente en lugar de pasar río abajo",
    "Es jidoka en acción: construye la calidad desde el origen deteniéndote cuando algo está mal, en lugar de inspeccionar los defectos después",
    "Detener la línea es el mismo instinto que 'apagar el fuego primero'\u2014contén de inmediato, luego haz el análisis de causa raíz en el post-mortem",
    "El cordón solo funciona donde tirar de él es seguro (sin culpa), esperado (todos están facultados) y receptivo (una tirada desencadena ayuda)",
    "Andon nativo de Azure: auto-pausa de canary, despliegues con compuertas de salud, reversión automatizada, alertas de presupuesto de error y autoridad explícita de detención de envío"
  ],
  questions: [
    {
      prompt: "¿Cuál es el propósito central del cordón Andon en el Sistema de Producción Toyota?",
      options: [
        "Rastrear cuántas unidades completa cada operador por turno.",
        "Permitir que cualquier trabajador detenga la línea en el momento en que aparece una anomalía, para que el problema se corrija en su fuente.",
        "Señalar los descansos programados y los cambios de turno en la planta.",
        "Clasificar a los operadores según con qué poca frecuencia detienen la producción."
      ],
      correctIndex: 1,
      explanation: "El cordón Andon confía en un solo trabajador de primera línea para <strong>detener la línea</strong> cuando ve un defecto, para que el equipo enjambre el problema en la fuente en lugar de dejarlo fluir río abajo donde cuesta más corregirlo."
    },
    {
      prompt: "El cordón Andon es la cara operativa de qué principio Lean?",
      options: [
        "Takt time &mdash; acompasar la producción a la demanda del cliente.",
        "Jidoka &mdash; construir la calidad desde el origen deteniéndose cuando algo está mal.",
        "Heijunka &mdash; nivelar el cronograma de producción.",
        "Muda &mdash; eliminar los siete desperdicios."
      ],
      correctIndex: 1,
      explanation: "Andon es <strong>jidoka</strong> (autonomación) en la práctica: <strong>construir la calidad desde el origen</strong> deteniéndose en el momento en que aparece una anomalía, en lugar de inspeccionar los defectos después."
    },
    {
      prompt: "¿Cómo se relaciona el cordón Andon con la disciplina de 'apagar el fuego primero' / contener primero?",
      options: [
        "Reemplaza el análisis de causa raíz por completo &mdash; una vez que detienes la línea, no se necesita más investigación.",
        "Detener la línea es la reacción inmediata de contener primero; el trabajo de causa raíz de divergir-luego-converger ocurre después en el enjambre y el post-mortem.",
        "Significa que deberías ejecutar un Ishikawa completo antes de decidir si detener la línea.",
        "Aplica solo al trabajo de mejora planificado, nunca a los incidentes en vivo."
      ],
      correctIndex: 1,
      explanation: "Tirar del cordón es el mismo instinto que apagar el fuego primero: <strong>contén de inmediato</strong>, luego encuentra la causa raíz después. Reaccionar a una anomalía es una respuesta entrenada, no una convergencia prematura."
    },
    {
      prompt: "¿Qué condición es esencial para que un sistema Andon realmente funcione?",
      options: [
        "Solo los supervisores senior deberían poder detener la línea.",
        "Tirar del cordón debe ser seguro y sin culpa, para que la gente saque los problemas a la luz en lugar de ocultarlos.",
        "Las detenciones deberían registrarse y contabilizarse en contra de la evaluación de desempeño del operador.",
        "La línea solo debería detenerse al final de un turno para evitar interrupciones."
      ],
      correctIndex: 1,
      explanation: "Si detener la línea se castiga, la gente deja de tirar del cordón y los defectos fluyen río abajo. Una cultura <strong>sin culpa</strong>, facultada y receptiva es lo que mantiene viva la señal."
    },
    {
      prompt: "¿Cuál es un buen equivalente digital de un cordón Andon en un pipeline de despliegue de Azure?",
      options: [
        "Un reporte semanal que resume cuántos despliegues fallaron.",
        "Una compuerta de salud automatizada que auto-pausa o revierte un despliegue progresivo y avisa a la guardia en el instante en que se consume el presupuesto de error.",
        "Una política que prohíbe a los ingenieros detener un lanzamiento una vez que comienza.",
        "Una reunión manual de aprobación programada para el día después de que el despliegue se complete."
      ],
      correctIndex: 1,
      explanation: "Un despliegue con compuertas de canary/salud que <strong>auto-pausa o revierte</strong> y avisa de inmediato a la guardia es el cordón Andon digital: detiene la línea ante la primera señal de una anomalía y desencadena un enjambre inmediato."
    }
  ]
},
"takt-time": {
  id: "takt-time",
  title: "Tiempo Takt: El Ritmo Marcado por la Demanda",
  group: "Lugar de Trabajo, Flujo & Estandarización",
  duration: "30 min",
  executiveSummary: "El tiempo takt es la tasa a la que un proceso debe producir para satisfacer la demanda del cliente: takt = tiempo disponible / demanda del cliente. Si la demanda es de 480 solicitudes por día de 8 horas, el takt es de 1 minuto por solicitud. Un tiempo de ciclo más lento que el takt = demanda insatisfecha y colas crecientes. Un tiempo de ciclo más rápido que el takt = desperdicio por sobreproducción, salvo que se reduzca el ritmo. Para los CSA, el takt aplica a la cadencia de despliegue, la respuesta a alertas, el ritmo de triaje de incidentes, el rendimiento de solicitudes y la tasa de invocación de agentes de IA. Usa el takt para dimensionar capacidad, fijar SLO, diseñar Trabajo Estándar y detectar sobreproducción.",
  whatYouGain: [
    "Dimensiona la capacidad de forma inteligente igualando el tiempo de ciclo al takt: ni subaprovisionando (las colas crecen) ni sobreaprovisionando (se acumula desperdicio)",
    "Fija SLO y cadencia de despliegue alineados a la demanda real, no a conjeturas ni al pico de los picos",
    "Detecta la sobreproducción como desperdicio: un tiempo de ciclo significativamente menor que el takt significa producir más rápido que la demanda, un costo oculto",
    "Balancea los pasos del proceso dentro de ~10% del takt para eliminar los pasos cuello de botella que limitan todo el flujo"
  ],
  explanation: "<p><strong>Fórmula del tiempo takt:</strong> takt = tiempo de producción disponible / demanda del cliente.</p><p>Tres medidas relacionadas que suelen confundirse:</p><ul><li><strong>Tiempo takt:</strong> El ritmo marcado por la demanda que el proceso debe igualar.</li><li><strong>Tiempo de ciclo:</strong> Tiempo real por unidad producida (promediado).</li><li><strong>Tiempo de entrega (lead time):</strong> Tiempo de extremo a extremo por unidad, incluyendo las colas.</li></ul><p><strong>Casos:</strong> Tiempo de ciclo &gt; takt = capacidad insuficiente; las colas crecen; demanda insatisfecha. Tiempo de ciclo = takt = balanceado; flujo fluido a un ritmo sostenible. Tiempo de ciclo &lt; takt = capacidad excesiva; sobreproducción salvo que se reduzca el ritmo (la disciplina del Heijunka).</p><p><strong>Balanceo de línea:</strong> Los tiempos de cada paso deben caer dentro de aproximadamente ±10% del takt. Un proceso de 4 pasos donde un paso toma 2× el takt es el cuello de botella y limita todo el flujo, sin importar los demás pasos. Para ingeniería, calcula el takt contra una definición defendible de ventana ocupada (hora pico para planificación de capacidad, diaria para estado estacionario), no el pico de los picos; sobreaprovisionarás de forma permanente si dimensionas al pico absoluto.</p>",
  csamExample: "<p>El parque de compilación de CI del cliente de un CSAM \"se siente lento\". El CSAM calcula el takt: 800 compilaciones por día de 8 horas = 36 segundos por compilación. Tiempo de ciclo medido: 4 minutos. El diagnóstico es claro: la capacidad es insuficiente, así que las colas son inevitables. El CSAM propone agregar 6 ejecutores (runners). El tiempo de ciclo cae a 32 segundos; la demanda se satisface sin sobreaprovisionar. El diagnóstico (capacidad, no inestabilidad) había eludido al equipo durante un trimestre porque nunca calcularon el takt. La justificación de negocio para la compra de hardware se vuelve obvia: \"Estamos 7× por encima del takt\".</p>",
  csaExample: "<p>Un CSA está ajustando el HPA de AKS (Horizontal Pod Autoscaler) para el microservicio de un cliente. La demanda pico es de 12 solicitudes/segundo. La capacidad por pod es de 18 sol/s. Takt = 1 pod maneja la demanda con un 50% de margen. Configuración del HPA: escalar hacia arriba al 70% de utilización (12.6 sol/s), escalar hacia abajo al 30%. El cliente antes dimensionaba para 5 pods \"solo por si acaso\". El ajuste basado en takt del CSA: 1 pod de base + 1 de reserva = 2 pods durante el pico. Reducción de costos del 60%. Matemática estándar aplicada; desperdicio invisible expuesto.</p>",
  recap: [
    "Tiempo takt = tiempo disponible / demanda del cliente. Es el ritmo marcado por la demanda que el proceso debe igualar para evitar colas.",
    "Tiempo de ciclo más lento que el takt = capacidad insuficiente y colas crecientes. Tiempo de ciclo más rápido que el takt = desperdicio por sobreproducción.",
    "Dimensiona la capacidad para igualar el takt, no el pico de los picos. Usa una definición defendible de ventana ocupada (hora pico, no el pico absoluto).",
    "Balancea los pasos del proceso dentro de ~10% del takt. Un paso a 2× el takt se convierte en el cuello de botella sin importar los demás pasos.",
    "Para ingeniería: aplica el takt al dimensionamiento de ejecutores de CI, la configuración del HPA, el número de consumidores de Service Bus, la dotación de respuesta a incidentes y la capacidad de inferencia de agentes de IA."
  ],
  questions: [
    {
      prompt: "¿Cuál es la fórmula del tiempo takt?",
      options: [
        "Tiempo disponible &divide; demanda del cliente.",
        "Demanda del cliente &times; tiempo de ciclo.",
        "Costo total &divide; rendimiento.",
        "Tiempo de proceso + tiempo de cola."
      ],
      correctIndex: 0,
      explanation: "<strong>Takt = tiempo disponible / demanda del cliente.</strong> Si la demanda es de 480 solicitudes por día de 8 horas, el takt es de 1 minuto por solicitud. Es el ritmo marcado por la demanda que el proceso debe igualar."
    },
    {
      prompt: "Un parque de compilación de CI procesa 800 compilaciones por día de 8 horas con un ciclo medido de 4 minutos por compilación. ¿Qué muestra la matemática?",
      options: [
        "El parque está bien dimensionado porque las compilaciones se completan.",
        "El takt es de 36 segundos; el ciclo es de 4 minutos &mdash; el parque no puede satisfacer la demanda de ningún modo y las colas son inevitables.",
        "El equipo debería optimizar la velocidad de cada compilación, no la capacidad.",
        "Que el ciclo sea más largo que el takt está bien porque las compilaciones son asíncronas."
      ],
      correctIndex: 1,
      explanation: "Takt = 8h / 800 = 36s; ciclo = 240s. <strong>Ciclo &gt; takt</strong> significa capacidad insuficiente y colas crecientes. Agregar ejecutores hasta que el ciclo caiga por debajo del takt es la solución &mdash; no optimizar compilaciones individuales."
    },
    {
      prompt: "El tiempo de ciclo es significativamente menor que el takt. ¿Qué indica esto?",
      options: [
        "El equipo lo está haciendo genial &mdash; esta es la meta.",
        "Capacidad excesiva &mdash; el proceso corre el riesgo de desperdicio por sobreproducción salvo que se reduzca el ritmo.",
        "El cálculo del takt está mal.",
        "Los clientes están a punto de quejarse por el servicio lento."
      ],
      correctIndex: 1,
      explanation: "Ciclo &lt; takt = <strong>capacidad excesiva / sobreproducción</strong>. Producir más rápido que la demanda crea desperdicio de inventario salvo que se reduzca el ritmo deliberadamente (la disciplina del Heijunka). Más rápido no siempre es mejor."
    },
    {
      prompt: "¿Qué tan ajustadamente deben balancearse los pasos individuales respecto al takt?",
      options: [
        "Cada paso puede tomar cualquier duración; solo importa el ciclo total.",
        "Dentro de aproximadamente &plusmn;10% del takt &mdash; un paso a 2&times; el takt se convierte en el cuello de botella sin importar los demás.",
        "Cada paso debe tomar exactamente 1 segundo.",
        "Los pasos deben ser 5&times; el takt para permitir un margen de seguridad."
      ],
      correctIndex: 1,
      explanation: "El balanceo de línea busca tiempos de paso dentro de <strong>~10% del takt</strong>. Un proceso de 4 pasos donde un paso toma 2&times; el takt es el cuello de botella y limita todo el flujo."
    },
    {
      prompt: "¿Cuál es el antipatrón a evitar al calcular el takt para la planificación de capacidad?",
      options: [
        "Usar telemetría real para medir la demanda.",
        "Calcular el takt contra el pico de los picos de la demanda, lo que sobreaprovisiona de forma permanente.",
        "Volver a medir el takt cuando la demanda cambia.",
        "Comparar el takt con el tiempo de ciclo actual."
      ],
      correctIndex: 1,
      explanation: "Dimensionar al pico absoluto malgasta dinero; dimensionar al promedio no alcanza el pico. Usa una <strong>definición defendible de ventana ocupada</strong> (hora pico para planificación de capacidad, diaria para estado estacionario) en lugar del pico de los picos."
    }
  ]
},

"heijunka": {
  id: "heijunka",
  title: "Heijunka: Nivelar la Demanda Irregular",
  group: "Lugar de Trabajo, Flujo & Estandarización",
  duration: "30 min",
  executiveSummary: "El tiempo takt es el ritmo marcado por la demanda que un proceso debe igualar (takt = tiempo disponible / demanda del cliente). Cuando la demanda es desigual &mdash;picos y valles&mdash; el takt requerido oscila con ella, y esa irregularidad es mura, uno de los tres enemigos del Lean junto con muri (sobrecarga) y muda (desperdicio). Heijunka es la disciplina de nivelar: suavizar el trabajo para que el proceso corra a un ritmo estable y sostenible en lugar de ser zarandeado por picos y valles. Para la CI, nivelar importa porque no se puede estandarizar, mejorar ni dimensionar capacidad de forma confiable sobre un flujo salvajemente desigual. Este módulo repasa el takt, explica por qué un takt desigual socava la mejora y cubre las técnicas &mdash;nivelación heijunka, nivelación de carga basada en colas, amortiguadores (buffers), capacidad elástica, pull/límites de WIP, reducción del tamaño de lote y modelado de la demanda&mdash; usadas para mitigarla.",
  whatYouGain: [
    "Conecta el tiempo takt con la mura: ve cómo la demanda desigual hace oscilar el ritmo requerido y desestabiliza todo el proceso",
    "Explica por qué un takt desigual bloquea la CI: el trabajo estándar, el dimensionamiento de capacidad y la mejora necesitan una base estable",
    "Aplica técnicas de nivelación: heijunka por volumen y por mezcla, nivelación de carga basada en colas, amortiguadores y capacidad elástica",
    "Usa sistemas pull, límites de WIP y reducción del tamaño de lote (SMED) para suavizar el flujo interno, no solo la demanda externa",
    "Modela la demanda en el origen &mdash;programación, escalonamiento, limitación de tasa&mdash; para que los picos se distribuyan antes de golpear el proceso"
  ],
  explanation: "<p><strong>Repaso rápido del takt.</strong> El tiempo takt es la tasa a la que un proceso debe producir para satisfacer la demanda: takt = tiempo disponible / demanda del cliente. Si la demanda es estable, el takt es estable y puedes dimensionar capacidad y diseñar trabajo estándar a su alrededor. El problema es que la demanda real rara vez es estable&mdash;llega en ráfagas. Cuando la demanda oscila, el takt <em>requerido</em> oscila con ella, y el proceso queda alternadamente abrumado y ocioso.</p><p><strong>Un takt desigual es mura.</strong> El Lean nombra tres enemigos: <strong>muda</strong> (desperdicio), <strong>muri</strong> (sobrecarga) y <strong>mura</strong> (irregularidad). Están vinculados: la mura suele ser la causa raíz. Un patrón de llegada desigual fuerza <strong>muri</strong> durante los picos (personas y sistemas sobrecargados más allá de límites sostenibles, causando errores, incidentes y agotamiento) y <strong>muda</strong> durante los valles (capacidad ociosa que sigues pagando). Dimensionar al pico malgasta dinero; dimensionar al promedio deja trabajo sin atender. No puedes ganar este compromiso solo dimensionando&mdash;tienes que atacar la irregularidad en sí.</p><p><strong>Por qué le importa a la CI.</strong> Nivelar es trabajo de cimiento en la Casa del Lean. El <strong>trabajo estándar</strong> supone un ritmo repetible; si cada hora luce distinta, no hay método estable que estandarizar ni contra el cual mejorar. Los gráficos de capacidad y de control suponen un proceso estable; un flujo desigual está lleno de oscilaciones de causa especial que ahogan la señal. Y las ganancias de mejora no se sostienen sobre un proceso que se sacude&mdash;el siguiente pico las borra. Suavizar el flujo también hace visibles los problemas: cuando el trabajo se mueve a una cadencia estable, una anomalía resalta en lugar de ocultarse dentro del caos de un pico. Nivela primero, luego estandariza, luego mejora.</p><p><strong>Técnicas para mitigar un takt desigual.</strong></p><ul><li><strong>Heijunka (nivelación de producción):</strong> nivela deliberadamente el cronograma por <em>volumen</em> (libera trabajo en incrementos pequeños y regulares en lugar de grandes lotes) y por <em>mezcla</em> (intercala tipos de producto o solicitud en lugar de correr un tipo hasta agotarlo). La herramienta clásica es la <em>caja heijunka</em>, que marca el ritmo del trabajo liberado en franjas de tiempo fijas.</li><li><strong>Nivelación de carga basada en colas:</strong> coloca un amortiguador (una cola) entre el productor con picos y el consumidor para que el consumidor jale a un takt estable mientras la cola absorbe las ráfagas. En Azure esto es el patrón de Nivelación de Carga Basada en Colas&mdash;Service Bus o Storage Queues alimentando consumidores, a menudo con trabajadores escalados por KEDA.</li><li><strong>Amortiguadores estratégicos:</strong> amortiguadores pequeños e intencionales de capacidad, tiempo o inventario colocados donde protegen el flujo&mdash;no inventario inflado por todas partes, sino un colchón dimensionado contra la variación normal.</li><li><strong>Capacidad elástica / flexible:</strong> sigue la demanda con autoescalado (HPA, KEDA, serverless) y personal flexible con capacitación cruzada que puede desplazarse a donde está la carga.</li><li><strong>Sistemas pull y límites de WIP:</strong> Kanban limita el trabajo en progreso para que el sistema no pueda inundarse más rápido de lo que puede fluir, lo que suaviza el takt interno.</li><li><strong>Reducción del tamaño de lote (SMED):</strong> reducir el costo de cambio permite correr lotes más pequeños y frecuentes&mdash;el prerequisito que hace práctica la nivelación por volumen.</li><li><strong>Modelado de la demanda:</strong> distribuye los picos en el origen&mdash;escalona o introduce variación (jitter) en los trabajos programados en lugar de dispararlos todos a la hora en punto, usa sistemas de citas/programación y aplica limitación de tasa o estrangulamiento para que una ráfaga se dosifique en un flujo estable.</li></ul><p>La meta de todas ellas es la misma: convertir una señal de demanda dentada en una nivelada contra la cual el proceso pueda correr a un ritmo sostenible y mejorable.</p>",
  csamExample: "<p>El cliente de un CSAM corre cientos de trabajos por lotes que se disparan todos al inicio de cada hora. El resultado es mura de manual: un pico castigador que sobrecarga la plataforma (muri&mdash;estrangulamiento, trabajos fallidos, ingenieros despertados) seguido de 50 minutos de capacidad casi ociosa y sobreaprovisionada (muda). El instinto del equipo es comprar más cómputo para sobrevivir al pico. El CSAM lo replantea como un problema de nivelación, no de capacidad: escalonar el cronograma de trabajos a lo largo de la hora, enrutar el trabajo a través de una cola para que los trabajadores jalen a un takt estable, y dejar que KEDA escale los consumidores según la carga suavizada. La demanda pico cae, los incidentes durante el pico ceden, y el cliente recorta capacidad aprovisionada. El CSAM lo conecta con la CI: 'Una vez que el flujo está nivelado, tu trabajo de confiabilidad finalmente tiene un proceso estable sobre el cual apoyarse'.</p>",
  csaExample: "<p>Un CSA está reforzando la canalización de ingesta de eventos de un cliente que se dobla bajo tráfico en ráfagas. Hoy los productores escriben directamente al servicio de procesamiento, así que cada ráfaga se vuelve una sobrecarga. El CSA implementa nivelación de carga basada en colas: los productores publican en una cola de Service Bus, y los consumidores escalados por KEDA la vacían a una tasa estable, convirtiendo un patrón de llegada con picos en un takt nivelado que los consumidores pueden sostener. El CSA agrega límites de WIP para que el sistema no pueda inundarse, introduce variación (jitter) en los disparadores cron de aguas arriba para que ya no se disparen simultáneamente, y fija límites de autoescalado dimensionados a la carga suavizada en lugar del pico crudo. El flujo se estabiliza, el gráfico de control de la latencia de procesamiento se estrecha, y el trabajo estándar para la canalización finalmente cobra sentido.</p>",
  recap: [
    "El takt oscila cuando la demanda es desigual; esa irregularidad es mura, que impulsa muri (sobrecarga en los picos) y muda (desperdicio en los valles)",
    "No puedes arreglar un takt desigual solo dimensionando&mdash;dimensionar al pico malgasta dinero, dimensionar al promedio deja trabajo sin atender; debes atacar la irregularidad",
    "Nivelar es trabajo de cimiento de la CI: el trabajo estándar, los gráficos de control y la mejora duradera necesitan un flujo estable y nivelado",
    "Heijunka nivela por volumen (incrementos pequeños y regulares) y por mezcla (intercalar tipos); la caja heijunka marca el ritmo del trabajo liberado",
    "Caja de herramientas de mitigación: nivelación de carga basada en colas, amortiguadores estratégicos, capacidad elástica (HPA/KEDA), pull/límites de WIP, reducción del tamaño de lote (SMED) y modelado de la demanda",
    "Nivela primero, luego estandariza, luego mejora&mdash;suavizar el flujo también hace visibles las anomalías en lugar de ocultarlas en el pico"
  ],
  questions: [
    {
      prompt: "Una demanda desigual y a saltos que hace oscilar el takt requerido hacia arriba y hacia abajo es un ejemplo de ¿cuál problema del Lean?",
      options: [
        "Muda (desperdicio).",
        "Mura (irregularidad).",
        "Muri (sobrecarga).",
        "Kaizen (mejora)."
      ],
      correctIndex: 1,
      explanation: "El flujo desigual es <strong>mura</strong>. Suele ser la causa raíz que luego produce <strong>muri</strong> (sobrecarga durante los picos) y <strong>muda</strong> (desperdicio ocioso durante los valles). Heijunka ataca la mura directamente."
    },
    {
      prompt: "¿Cuál es la idea central del heijunka (nivelación de producción)?",
      options: [
        "Correr siempre el lote más grande posible de un tipo antes de cambiar.",
        "Suavizar el trabajo nivelando el volumen (incrementos pequeños y regulares) y la mezcla (intercalando tipos) para que el proceso corra a un ritmo estable.",
        "Dimensionar la capacidad al pico absoluto para que los picos nunca abrumen el sistema.",
        "Eliminar todos los amortiguadores para que los problemas afloren de inmediato."
      ],
      correctIndex: 1,
      explanation: "Heijunka nivela por <strong>volumen</strong> (libera trabajo en incrementos pequeños y regulares) y por <strong>mezcla</strong> (intercala tipos en lugar de correr uno hasta agotarlo), convirtiendo una señal de demanda dentada en un ritmo estable y sostenible."
    },
    {
      prompt: "Los productores envían tráfico en ráfagas que abruma un servicio de procesamiento. ¿Qué técnica convierte esa llegada con picos en un takt estable?",
      options: [
        "Eliminar todas las colas para que los mensajes se procesen en el instante en que llegan.",
        "Nivelación de carga basada en colas&mdash;amortiguar las ráfagas en una cola para que los consumidores jalen a una tasa estable.",
        "Dimensionar los consumidores al pico de la ráfaga y dejarlos corriendo.",
        "Disparar todos los trabajos de aguas arriba en el mismo momento para agrupar el trabajo."
      ],
      correctIndex: 1,
      explanation: "La <strong>nivelación de carga basada en colas</strong> coloca un amortiguador (p. ej., Service Bus) entre productores con picos y consumidores, para que los consumidores la vacíen a un takt estable mientras la cola absorbe las ráfagas&mdash;a menudo con trabajadores escalados por KEDA."
    },
    {
      prompt: "¿Por qué un takt desigual socava la mejora continua?",
      options: [
        "Hace que el proceso sea demasiado rápido de medir.",
        "El trabajo estándar, los gráficos de control y las mejoras duraderas necesitan una base estable; un flujo a sacudidas no tiene un ritmo estable que estandarizar ni contra el cual sostener ganancias.",
        "Siempre reduce la demanda del cliente con el tiempo.",
        "Solo importa para la manufactura, nunca para el software."
      ],
      correctIndex: 1,
      explanation: "Nivelar es <strong>trabajo de cimiento</strong>. Si cada hora luce distinta no hay método repetible que estandarizar, las oscilaciones de causa especial ahogan la señal del gráfico de control, y el siguiente pico borra tus ganancias. Nivela primero, luego estandariza, luego mejora."
    },
    {
      prompt: "¿Cuál de estas es una técnica de modelado de la demanda para suavizar los picos en el origen?",
      options: [
        "Disparar todos los trabajos programados simultáneamente al inicio de la hora.",
        "Escalonar o introducir variación (jitter) en los trabajos programados y aplicar limitación de tasa para que una ráfaga se dosifique en un flujo estable.",
        "Eliminar el autoescalado para que la capacidad quede fija.",
        "Aumentar los tamaños de lote para procesar más de una vez."
      ],
      correctIndex: 1,
      explanation: "El <strong>modelado de la demanda</strong> distribuye los picos antes de que golpeen el proceso&mdash;escalona/introduce variación en los cronogramas en lugar de disparar a la hora en punto, usa sistemas de programación y aplica limitación de tasa o estrangulamiento para dosificar una ráfaga en un flujo nivelado."
    }
  ]
},

"one-piece-flow": {
  id: "one-piece-flow",
  title: "Flujo de una Sola Pieza vs Procesamiento por Lotes",
  group: "Lugar de Trabajo, Flujo & Estandarización",
  duration: "30 min",
  executiveSummary: "El procesamiento por lotes agrupa muchas unidades y las mueve a través de un proceso como un bloque: haz el paso uno a todo el lote, luego el paso dos a todo el lote, y así sucesivamente. El flujo de una sola pieza (también llamado flujo de pieza única o continuo) mueve una sola unidad a través de los pasos a la vez&mdash;idealmente un tamaño de lote de uno. Los lotes se sienten eficientes porque distribuyen los costos fijos de preparación y cambio entre muchas unidades, pero ocultan grandes costos: tiempos de entrega largos, montañas de trabajo en progreso, y defectos que no se descubren hasta que un lote entero llega a un paso posterior. El flujo de una sola pieza canjea algo de eficiencia de preparación por ciclos de retroalimentación mucho más cortos, menos WIP, y problemas que afloran de inmediato. Para la mejora continua esto importa porque el flujo es lo que hace visibles los problemas y rápida la retroalimentación&mdash;dos precondiciones para mejorar siquiera. Este módulo contrasta ambos, explica cuándo cada uno es apropiado, y muestra cómo mover un proceso hacia el flujo sin ignorar los costos de preparación que justificaron los lotes en primer lugar.",
  whatYouGain: [
    "Define el procesamiento por lotes y el flujo de una sola pieza (pieza única), y explica el ideal del tamaño de lote de uno",
    "Ve los costos ocultos de los lotes: tiempo de entrega largo, WIP alto, y defectos descubiertos tarde, después de que un lote entero queda afectado",
    "Explica por qué el flujo acelera la CI&mdash;ciclos de retroalimentación más cortos hacen aflorar los problemas de inmediato en lugar de sepultarlos en un lote",
    "Conoce cuándo los lotes siguen siendo la decisión correcta, y cómo el costo de cambio/transacción (SMED) determina el tamaño de lote económico",
    "Aplica pasos prácticos para moverte hacia el flujo: reducir el tamaño de lote, reducir el tiempo de preparación, balancear los pasos y limitar el WIP"
  ],
  explanation: "<p><strong>Dos formas de mover el trabajo.</strong> El <em>procesamiento por lotes</em> agrupa unidades y las mueve a través de un proceso como un bloque&mdash;cada unidad recibe el paso uno, luego cada unidad recibe el paso dos, y así sucesivamente. El <em>flujo de una sola pieza</em> (pieza única o flujo continuo) mueve una unidad a través de los pasos a la vez, idealmente con un tamaño de lote de uno. La diferencia suena pequeña pero cambia la economía de todo el proceso.</p><p><strong>Por qué los lotes se sienten eficientes.</strong> Los lotes amortizan los costos fijos. Si un paso tiene una preparación costosa&mdash;un cambio de máquina, el arranque de un entorno, un cambio de contexto, una ceremonia de aprobación&mdash;hacerla una vez para cincuenta unidades en lugar de cincuenta veces parece una victoria clara. Ese ahorro es real, y es por eso que los tamaños de lote crecen: cada cambio o traspaso tiene un costo de transacción, y los lotes grandes distribuyen ese costo de forma diluida.</p><p><strong>El costo oculto de los lotes.</strong> Los lotes grandes cargan tres penalizaciones que no aparecen en un número de eficiencia por paso. El <strong>tiempo de entrega</strong> se infla: una unidad terminada temprano en el paso uno igual espera al resto del lote antes de poder avanzar, así que nada se completa hasta que el lote entero esté listo. El <strong>trabajo en progreso</strong> se acumula entre pasos&mdash;inventario que inmoviliza efectivo, espacio y atención. Y los <strong>defectos se ocultan</strong>: si el paso uno introduce un error, no te enteras hasta que el lote llega a un paso de inspección posterior, momento en el cual el lote entero está afectado. Cuanto más grande el lote, más tardío y costoso el descubrimiento.</p><p><strong>Por qué el flujo de una sola pieza ayuda a la mejora continua.</strong> El flujo acorta el bucle entre la causa y la retroalimentación. Cuando las unidades se mueven de a una, un defecto en el paso uno se atrapa en el paso dos&mdash;una unidad mala, no cincuenta. Los problemas se vuelven visibles de inmediato en lugar de quedar sepultados dentro de un lote, lo cual es la precondición para arreglarlos. El WIP cae, así que el tiempo de entrega cae con él (Ley de Little: tiempo de entrega = WIP / rendimiento). Un tiempo de entrega más corto significa que aprendes más rápido, y aprender más rápido es lo que es la mejora continua. El flujo no solo entrega antes; expone los problemas de los que se alimenta el trabajo de mejora.</p><p><strong>Los lotes no siempre están mal.</strong> El flujo de una sola pieza es el ideal, no una ley. Cuando el costo de cambio o transacción es genuinamente alto y no puede reducirse, un lote más grande puede ser la elección económica correcta&mdash;el clásico compromiso entre el costo de mantención (que favorece lotes pequeños) y el costo de preparación (que favorece los grandes). La jugada Lean, sin embargo, es atacar el costo de preparación en lugar de aceptar lotes grandes: <strong>SMED</strong> (cambio de troquel en un minuto) reduce el tiempo de cambio para que los lotes pequeños se vuelvan asequibles. Baja el costo de cambiar y el tamaño de lote económico se encoge hacia uno.</p><p><strong>Cómo moverte hacia el flujo.</strong></p><ul><li><strong>Reduce el lote:</strong> recorta el tamaño de lote en pasos deliberados y observa cómo responden el tiempo de entrega y la calidad&mdash;no esperes a un rediseño perfecto de tamaño de lote de uno.</li><li><strong>Reduce el cambio (SMED):</strong> haz las preparaciones más rápidas y baratas para que los lotes pequeños dejen de ser costosos.</li><li><strong>Balancea los pasos:</strong> el flujo se atasca en el paso más lento; nivela los tiempos de ciclo para que las unidades no se acumulen frente a un cuello de botella.</li><li><strong>Limita el WIP:</strong> pon un tope al trabajo entre pasos (kanban) para que el proceso jale una unidad a la vez en lugar de empujar lotes.</li><li><strong>Conecta los pasos:</strong> acorta la distancia y el retraso entre operaciones para que una unidad terminada pase de inmediato al siguiente paso.</li></ul>",
  csamExample: "<p>El cliente de un CSAM migra cargas de trabajo en grandes lotes trimestrales: cincuenta aplicaciones se evalúan, luego las cincuenta se remedian, luego las cincuenta se conmutan en un solo fin de semana. El enfoque por lotes se siente eficiente&mdash;las herramientas se preparan una vez&mdash;pero oculta riesgo. Nada está realmente 'listo' durante meses, los problemas hallados durante la conmutación aplican a todo el lote a la vez, y una falla de diseño descubierta tarde significa volver a tocar las cincuenta. El CSAM lo replantea como un problema de flujo: mover las aplicaciones de a una (o unas pocas) a través de evaluar &rarr; remediar &rarr; conmutar, completando cada una antes de empezar la siguiente oleada. Ahora la primera aplicación está en vivo en semanas en lugar de un trimestre, las lecciones de la aplicación uno mejoran las aplicaciones dos a cincuenta, y un patrón malo se atrapa en una sola carga de trabajo en lugar de cincuenta. El CSAM lo conecta de vuelta con la CI: 'Los lotes pequeños nos dan un ciclo de retroalimentación&mdash;cada migración enseña a la siguiente, y el cliente ve valor de forma continua en lugar de todo al final'.</p>",
  csaExample: "<p>Un CSA está ayudando a un equipo que despacha cambios en lanzamientos grandes e infrecuentes&mdash;docenas de cambios fusionados agrupados en un despliegue de gran golpe (big-bang) cada pocas semanas. Es procesamiento por lotes: la preparación (el lanzamiento) es costosa, así que lo hacen rara vez y atiborran cada uno. El costo está oculto en el tiempo de entrega y el riesgo&mdash;un cambio escrito el día uno espera semanas para despacharse, y cuando el lanzamiento se rompe, docenas de cambios quedan bajo sospecha a la vez, volviendo lenta la causa raíz. El CSA mueve al equipo hacia el flujo de una sola pieza con CI/CD: cada cambio fluye a través de compilar, probar y desplegar por sí solo, detrás de banderas de características (feature flags), para que un solo cambio llegue a producción en horas. Los defectos quedan aislados a un cambio en lugar de un lote, el tiempo de detección cae, y la reversión es simple. Para hacer asequibles los lotes pequeños, el CSA invierte en trabajo estilo SMED&mdash;automatizando la canalización de despliegue para que el 'costo de cambio' de un lanzamiento caiga hacia cero. El gráfico de control del tiempo de entrega de despliegue se estrecha, y el equipo mejora sobre un bucle estable y rápido.</p>",
  recap: [
    "El procesamiento por lotes mueve las unidades como un bloque a través de cada paso; el flujo de una sola pieza mueve una sola unidad a la vez&mdash;el ideal del tamaño de lote de uno",
    "Los lotes amortizan el costo de preparación/cambio, por eso crecen&mdash;pero ocultan un tiempo de entrega largo, WIP alto, y descubrimiento tardío de defectos",
    "En un lote, un defecto en un paso temprano no se encuentra hasta un paso posterior, así que el lote entero queda afectado antes de que nadie lo sepa",
    "El flujo de una sola pieza acorta el ciclo de retroalimentación: los defectos afloran en una unidad, el WIP y el tiempo de entrega caen (Ley de Little), y los problemas se vuelven visibles",
    "El flujo es una precondición de la CI&mdash;la retroalimentación rápida y los problemas visibles son de lo que depende el trabajo de mejora",
    "Los lotes no siempre están mal; cuando el costo de preparación es alto, atácalo con SMED para reducir el tamaño de lote económico, luego limita el WIP y balancea los pasos para moverte hacia el flujo"
  ],
  questions: [
    {
      prompt: "¿Cuál es la diferencia definitoria entre el procesamiento por lotes y el flujo de una sola pieza?",
      options: [
        "El flujo de una sola pieza usa lotes más grandes para ser más eficiente.",
        "El procesamiento por lotes mueve un grupo de unidades a través de cada paso como un bloque, mientras que el flujo de una sola pieza mueve una sola unidad a través de los pasos a la vez.",
        "El procesamiento por lotes no tiene costo de preparación, mientras que el flujo de una sola pieza sí.",
        "El flujo de una sola pieza solo aplica a la manufactura, no al trabajo del conocimiento."
      ],
      correctIndex: 1,
      explanation: "El <strong>procesamiento por lotes</strong> completa un paso para todo un grupo antes de que el grupo avance; el <strong>flujo de una sola pieza</strong> mueve una sola unidad a través de los pasos&mdash;idealmente un tamaño de lote de uno&mdash;para que las unidades no esperen al resto de un lote."
    },
    {
      prompt: "Un paso introduce un defecto al inicio de un lote de 50 unidades, pero la inspección ocurre solo en el paso final. ¿Cuál es la consecuencia del lote grande?",
      options: [
        "El defecto se atrapa de inmediato en la primera unidad.",
        "Las 50 unidades quedan afectadas antes de que se descubra el defecto, volviendo la detección tardía y el reproceso costoso.",
        "El defecto desaparece porque los lotes promedian los errores.",
        "El tamaño de lote no tiene efecto sobre cuándo se encuentran los defectos."
      ],
      correctIndex: 1,
      explanation: "En un lote, un defecto introducido temprano no se descubre hasta que el lote llega a un paso de inspección posterior&mdash;para entonces el <strong>lote entero está afectado</strong>. Lotes más pequeños (hacia el flujo de una sola pieza) atrapan el problema en una unidad, no en cincuenta."
    },
    {
      prompt: "¿Por qué el flujo de una sola pieza acelera la mejora continua?",
      options: [
        "Elimina la necesidad de medir el proceso.",
        "Acorta el ciclo de retroalimentación&mdash;los defectos afloran de inmediato en una sola unidad y los problemas se vuelven visibles en lugar de quedar sepultados en un lote.",
        "Garantiza que los defectos nunca ocurran.",
        "Aumenta el trabajo en progreso para que haya más que mejorar."
      ],
      correctIndex: 1,
      explanation: "El flujo estrecha el bucle entre causa y retroalimentación: un problema aparece en una unidad en el siguiente paso, el WIP y el tiempo de entrega caen (Ley de Little), y las anomalías se vuelven visibles&mdash;las precondiciones de las que depende el trabajo de mejora."
    },
    {
      prompt: "El costo de preparación/cambio de un paso es genuinamente alto. ¿Cuál es la respuesta Lean, en lugar de simplemente aceptar lotes grandes?",
      options: [
        "Aumentar el tamaño de lote indefinidamente para amortizar la preparación.",
        "Reducir el costo de cambio en sí (p. ej., SMED) para que los lotes más pequeños se vuelvan económicos.",
        "Dejar de medir el tiempo de entrega.",
        "Eliminar todos los pasos de inspección."
      ],
      correctIndex: 1,
      explanation: "El compromiso entre el costo de preparación (favorece lotes grandes) y el costo de mantención (favorece los pequeños) determina el tamaño de lote económico. La jugada Lean es <strong>atacar el costo de preparación con SMED</strong> para que el tamaño de lote económico se encoja hacia uno."
    },
    {
      prompt: "Según la Ley de Little, ¿qué le pasa al tiempo de entrega a medida que el flujo de una sola pieza reduce el trabajo en progreso a un rendimiento estable?",
      options: [
        "El tiempo de entrega aumenta proporcionalmente.",
        "El tiempo de entrega disminuye proporcionalmente&mdash;menos WIP al mismo rendimiento significa un tiempo de entrega más corto.",
        "El tiempo de entrega no se ve afectado por el WIP.",
        "El rendimiento debe duplicarse para que el tiempo de entrega cambie."
      ],
      correctIndex: 1,
      explanation: "Ley de Little: tiempo de entrega = WIP / rendimiento. Manteniendo el rendimiento estable, <strong>recortar el WIP recorta el tiempo de entrega proporcionalmente</strong>&mdash;que es exactamente lo que hace pasar de lotes grandes al flujo de una sola pieza."
    }
  ]
},

"supermarket": {
  id: "supermarket",
  title: "Supermercados: Inventario Controlado para Pull",
  group: "Lugar de Trabajo, Flujo & Estandarización",
  duration: "30 min",
  executiveSummary: "Un supermercado en Lean es un almacén de inventario deliberadamente dimensionado y controlado, colocado entre dos procesos para correr un sistema pull cuando el flujo continuo de una sola pieza no es posible. La idea viene de cómo funciona un supermercado minorista: el cliente toma lo que necesita del estante, y ese retiro es la señal para reabastecer exactamente lo que se tomó&mdash;nada más. El proceso de aguas abajo retira del supermercado; el hueco que deja (una señal kanban) le dice al proceso de aguas arriba que reabastezca justo esa cantidad. Esto desacopla dos procesos que corren a tasas distintas o no pueden enlazarse físicamente, a la vez que pone un tope al inventario y evita que el de aguas arriba sobreproduzca hacia un lote grande e incontrolado. El flujo de una sola pieza siempre es el ideal; un supermercado es el siguiente mejor control para los lugares donde aún no puedes fluir. La habilidad está en saber dónde un supermercado gana su lugar y dónde solo oculta desperdicio que deberías eliminar.",
  whatYouGain: [
    "Explica qué es un supermercado Lean y cómo funciona el reabastecimiento disparado por retiro (pull kanban)",
    "Conecta los supermercados con el flujo de una sola pieza y la evitación de lotes&mdash;un almacén con tope que desacopla procesos sin autorizar la sobreproducción",
    "Decide entre flujo continuo, un carril FIFO y un supermercado para un traspaso dado",
    "Identifica dónde los supermercados son una buena práctica: cadencias distintas, lotes inevitables, demanda variada de aguas abajo",
    "Reconoce dónde evitarlos: cuando el flujo verdadero es alcanzable, para artículos únicos o de cambio rápido, o cuando enmascaran un problema que deberías arreglar"
  ],
  explanation: "<p><strong>Qué es un supermercado.</strong> Un supermercado es un almacén de inventario controlado y deliberadamente dimensionado que se ubica entre un proceso de aguas arriba (proveedor) y un proceso de aguas abajo (consumidor). Taiichi Ohno tomó prestada la idea de los supermercados estadounidenses: los compradores toman lo que necesitan del estante, y el personal reabastece solo lo que se retiró. En un supermercado Lean el proceso de <em>aguas abajo</em> es el cliente&mdash;retira lo que necesita, y el espacio vacío que deja se convierte en una señal <strong>kanban</strong> que le dice al proceso de <em>aguas arriba</em> que produzca justo lo suficiente para reabastecerlo. La producción es jalada por el consumo real, no empujada por un pronóstico.</p><p><strong>Por qué existe: pull sin flujo continuo.</strong> El ideal Lean es el flujo de una sola pieza&mdash;unidades moviéndose de a una sin inventario entre pasos. Pero a veces no puedes conectar dos pasos en flujo continuo: corren a tiempos de ciclo muy distintos, están lejos uno del otro, comparten un recurso, o el paso de aguas arriba debe correr en lotes (un cambio largo, una máquina compartida, una compilación lenta). Un supermercado es la siguiente mejor opción. Deja que los dos procesos corran desacoplados a su propio ritmo natural mientras un amortiguador con tope absorbe la diferencia&mdash;y, crucialmente, el tope y la señal de reabastecimiento impiden que el de aguas arriba sobreproduzca.</p><p><strong>Cómo evita los lotes y la sobreproducción.</strong> Una pila incontrolada de WIP invita al peor desperdicio Lean&mdash;la sobreproducción&mdash;porque el de aguas arriba simplemente sigue empujando. Un supermercado es distinto: tiene un techo. Cuando el estante está lleno, las señales kanban se detienen, así que el de aguas arriba se detiene. El de aguas arriba reabastece en cantidades pequeñas igualadas a lo que realmente se retiró, lo que mantiene los lotes pequeños y acotados en lugar de grandes y especulativos. El supermercado convierte 'haz tanto como puedas' en 'reemplaza solo lo que el cliente tomó'.</p><p><strong>Supermercado vs carril FIFO vs flujo.</strong> Tres opciones para un traspaso, en orden de preferencia: <strong>(1) Flujo continuo</strong>&mdash;conecta los pasos para que una unidad pase directo; úsalo siempre que puedas. <strong>(2) Carril FIFO</strong>&mdash;una línea secuenciada y con tope donde los artículos fluyen primero en entrar, primero en salir; úsalo cuando no puedas conectar del todo los pasos pero el de aguas abajo consume en el mismo orden en que el de aguas arriba produce. <strong>(3) Supermercado</strong>&mdash;un almacén surtido del que el de aguas abajo elige; úsalo cuando el de aguas abajo retira de forma impredecible o selecciona entre varios tipos de artículo, de modo que una secuencia estricta no funciona. Recurre a la opción más simple que encaje; un supermercado es un compromiso deliberado, no la meta.</p><p><strong>Dónde los supermercados son una buena práctica.</strong></p><ul><li>Entre procesos con <strong>cadencias distintas</strong> o tiempos de ciclo que no pueden balancearse en flujo directo.</li><li>Después de un paso de aguas arriba que <strong>debe agrupar en lotes</strong>&mdash;un cambio largo, un recurso compartido o monopólico, un paso de compilación o cocción lento.</li><li>Cuando el de aguas abajo <strong>retira una mezcla variada</strong> de artículos estándar y repetibles y los necesita disponibles bajo demanda.</li><li>Para <strong>desacoplar un aguas arriba poco confiable o distante</strong> mientras sigues poniendo tope al inventario y manteniendo una señal pull clara.</li></ul><p><strong>Dónde evitarlos.</strong></p><ul><li>Cuando el <strong>flujo continuo es alcanzable</strong>&mdash;un supermercado agrega inventario, costo y espacio, y oculta problemas detrás de un amortiguador. No institucionalices un almacén que podrías eliminar.</li><li>Para <strong>artículos únicos, a medida o rara vez demandados</strong>&mdash;no puedes reabastecer un almacén de cosas que nunca se vuelven a pedir; usa hecho a pedido o un carril FIFO.</li><li>Para <strong>artículos perecederos o de cambio rápido</strong> (o costosos de mantener), donde el stock en pie se vuelve obsoleto o costoso antes de ser jalado.</li><li>Cuando el supermercado se vuelve una <strong>muleta</strong> que enmascara la poca confiabilidad de aguas arriba, cambios largos o problemas de calidad que deberías estar arreglando&mdash;el amortiguador debería encogerse con el tiempo, no crecer.</li></ul><p><strong>La mentalidad de CI.</strong> Un supermercado es inventario controlado con un techo: mejor que un lote incontrolado, peor que el flujo verdadero. Úsalo donde el flujo aún no es posible, dimensiónalo tan pequeño como el proceso lo permita, y trata su tamaño como una métrica a reducir. Cada reducción en el supermercado expone la siguiente restricción a arreglar&mdash;moviendo el sistema un paso más cerca del flujo de una sola pieza.</p>",
  csamExample: "<p>El cliente de un CSAM necesita entornos de proyecto bajo demanda, pero aprovisionar uno nuevo toma horas, así que los equipos o esperan (retraso) o alguien levanta un gran lote de entornos por adelantado que en su mayoría quedan ociosos (sobreproducción y costo). El CSAM introduce un supermercado: un grupo pequeño y con tope de entornos estándar preaprovisionados. Cuando un equipo retira uno, ese retiro dispara la automatización para aprovisionar un solo reemplazo&mdash;pull, no un lote especulativo. El grupo desacopla el aprovisionamiento lento de la demanda rápida y en ráfagas mientras un tope rígido mantiene acotado el costo ocioso. El CSAM es explícito sobre los límites: para un entorno único y a medida con requisitos especiales no hay nada que reabastecer, así que eso queda como hecho a pedido; y a medida que la automatización de aprovisionamiento se vuelve más rápida, el grupo debería encogerse hacia cero. 'El grupo preaprovisionado es un puente', explica el CSAM, 'con tope hoy porque el aprovisionamiento es lento&mdash;nuestro trabajo es hacerlo lo bastante rápido como para necesitar menos en el estante'.</p>",
  csaExample: "<p>Un CSA está diseñando una plataforma de despliegue donde construir una imagen dorada (golden image) endurecida es lento, pero los despliegues necesitan imágenes de inmediato. Construir bajo demanda atasca los despliegues; preconstruir cada imagen posible en masa malgasta almacenamiento y despacha artefactos obsoletos. El CSA monta un supermercado de imágenes base prehorneadas para el puñado de configuraciones estándar y de uso frecuente: cuando un despliegue consume una, una canalización reconstruye justo esa imagen para reabastecer el estante&mdash;un pull disparado por retiro que mantiene los lotes pequeños y el stock acotado. El mismo patrón respalda un grupo tibio (warm pool) de nodos de contenedor pre-descargados que desacopla los arranques en frío lentos de la demanda de escalado rápido. El CSA señala dónde no usarlo: las imágenes poco usadas o que cambian rápido no deberían tenerse en stock&mdash;se vuelven obsoletas&mdash;así que esas se construyen a pedido; y donde el autoescalado puede genuinamente mantener el ritmo desde cero, un grupo tibio permanente es solo costo. El objetivo de control es el tamaño del grupo: encógelo a medida que mejoran los tiempos de construcción y arranque, moviendo la plataforma hacia el flujo.</p>",
  recap: [
    "Un supermercado es un almacén deliberadamente dimensionado y con tope entre dos procesos; el de aguas abajo retira y el hueco le señala al de aguas arriba que reabastezca exactamente lo que se tomó (pull kanban)",
    "Existe para correr un sistema pull donde el flujo continuo de una sola pieza no es posible&mdash;desacoplando procesos con cadencias distintas, distancia o lotes inevitables",
    "El tope y la señal de reabastecimiento previenen la sobreproducción: el de aguas arriba reemplaza solo lo que se consumió, manteniendo los lotes pequeños y acotados",
    "Prefiere la opción más simple que encaje: primero flujo continuo, luego un carril FIFO, luego un supermercado&mdash;el supermercado es un compromiso, no la meta",
    "Buena práctica entre pasos de cadencia distinta, después de un paso que debe agrupar en lotes, y cuando el de aguas abajo jala una mezcla variada de artículos estándar bajo demanda",
    "Evítalo cuando el flujo verdadero es alcanzable, para artículos únicos o de cambio rápido, o cuando enmascara problemas de aguas arriba&mdash;dimensiónalo pequeño y redúcelo con el tiempo"
  ],
  questions: [
    {
      prompt: "¿Qué es un supermercado Lean?",
      options: [
        "Una pila incontrolada de trabajo en progreso entre dos pasos.",
        "Un almacén de inventario deliberadamente dimensionado y con tope del que un proceso de aguas abajo retira, señalando al de aguas arriba que reabastezca exactamente lo que se tomó.",
        "Un pronóstico que le dice al proceso de aguas arriba cuánto empujar hacia aguas abajo.",
        "Un área de almacenamiento donde los productos terminados se guardan hasta que se despacha un lote trimestral."
      ],
      correctIndex: 1,
      explanation: "Un supermercado es un <strong>almacén controlado y con tope</strong> entre procesos. El de aguas abajo retira lo que necesita y el espacio vacío se convierte en una señal kanban que le dice al de aguas arriba que reabastezca justo esa cantidad&mdash;pull, no push."
    },
    {
      prompt: "¿Por qué usarías un supermercado en lugar de conectar dos pasos en flujo continuo de una sola pieza?",
      options: [
        "Porque el inventario siempre es preferible al flujo.",
        "Porque los pasos no pueden enlazarse en flujo continuo&mdash;tiempos de ciclo distintos, distancia, un recurso compartido, o un paso de aguas arriba que debe agrupar en lotes.",
        "Porque los supermercados eliminan la necesidad de una señal pull.",
        "Porque deja que el de aguas arriba produzca tanto como quiera."
      ],
      correctIndex: 1,
      explanation: "El flujo de una sola pieza es el ideal, pero cuando los pasos corren a cadencias distintas, están lejos, comparten un recurso o deben agrupar en lotes, no puedes conectarlos directamente. Un supermercado es el <strong>siguiente mejor control</strong>: los desacopla mientras pone tope al inventario y mantiene una señal pull."
    },
    {
      prompt: "¿Cómo ayuda un supermercado a evitar los lotes y la sobreproducción?",
      options: [
        "Quita todos los límites para que el de aguas arriba pueda construir por adelantado.",
        "Tiene un techo&mdash;cuando el estante está lleno las señales kanban se detienen, así que el de aguas arriba reabastece solo lo que se retiró, en cantidades pequeñas y acotadas.",
        "Exige que el de aguas abajo tome todo el stock de una vez.",
        "Reemplaza las señales pull con un pronóstico de producción mensual."
      ],
      correctIndex: 1,
      explanation: "A diferencia de una pila incontrolada de WIP, un supermercado tiene <strong>tope</strong>. Un estante lleno detiene la señal de reabastecimiento, así que el de aguas arriba se detiene; reemplaza solo lo que se consumió, manteniendo los lotes pequeños en lugar de grandes y especulativos."
    },
    {
      prompt: "Un traspaso no puede conectarse del todo en flujo continuo, pero el de aguas abajo consume los artículos en el mismo orden en que el de aguas arriba los produce. ¿Cuál opción se prefiere sobre un supermercado?",
      options: [
        "Un supermercado más grande con más tipos de artículo.",
        "Un carril FIFO&mdash;una línea secuenciada y con tope que preserva el orden primero en entrar, primero en salir.",
        "Un amortiguador sin tope.",
        "Un lanzamiento por lotes mensual."
      ],
      correctIndex: 1,
      explanation: "Cuando se preserva la secuencia, un <strong>carril FIFO</strong> es más simple que un supermercado: una línea con tope, primero en entrar, primero en salir. Recurre a la opción más simple que encaje&mdash;flujo, luego FIFO, luego un supermercado para cuando el de aguas abajo retira de forma impredecible o elige entre tipos de artículo."
    },
    {
      prompt: "¿Cuál situación es un mal encaje para un supermercado?",
      options: [
        "Dos procesos estándar y repetibles corriendo a cadencias distintas.",
        "Artículos únicos y a medida que nunca se vuelven a pedir, o artículos de cambio rápido que se vuelven obsoletos antes de ser jalados.",
        "Un paso de aguas arriba con un cambio largo que debe correr en lotes.",
        "Un proceso de aguas abajo que retira una mezcla variada de artículos estándar bajo demanda."
      ],
      correctIndex: 1,
      explanation: "No puedes reabastecer un stock de artículos que nunca se vuelven a pedir, y los artículos perecederos o de cambio rápido se vuelven obsoletos en el estante. Esos requieren <strong>hecho a pedido o un carril FIFO</strong>. También evita los supermercados cuando el flujo continuo verdadero es alcanzable o cuando el amortiguador solo enmascara un problema que arreglar."
    }
  ]
},

"pull-vs-push": {
  id: "pull-vs-push",
  title: "Pull vs Push: Dejar que la Demanda Impulse el Trabajo",
  group: "Lugar de Trabajo, Flujo & Estandarización",
  duration: "30 min",
  executiveSummary: "Push y pull son dos formas opuestas de decidir cuándo empieza el trabajo. En un sistema push (empujar), el trabajo se libera según un pronóstico o un cronograma&mdash;hazlo ahora porque el plan lo dice, y envíalo aguas abajo esté o no listo el siguiente paso. En un sistema pull (jalar), el trabajo empieza solo cuando el paso de aguas abajo (en última instancia el cliente) señala que necesita más&mdash;nada se produce hasta que hay demanda real que lo consuma. El push tiende a sobreproducir, acumular trabajo en progreso y ocultar problemas dentro del inventario que crea; el pull pone tope al trabajo según la demanda real, mantiene bajo el WIP, y hace visibles los problemas. Para la mejora continua esta distinción es central: un sistema pull acorta el tiempo de entrega, expone los cuellos de botella, y crea el ciclo de retroalimentación rápida del que depende la mejora. Este módulo explica ambos sistemas, por qué el pull suele preferirse, las señales que lo impulsan, y los pocos casos donde una dosis medida de push sigue siendo la decisión correcta.",
  whatYouGain: [
    "Define push y pull con precisión&mdash;qué dispara el inicio del trabajo en cada sistema",
    "Explica por qué el push sobreproduce y hace crecer el WIP mientras el pull pone tope al trabajo según la demanda real",
    "Conecta el pull con la CI: tiempo de entrega más corto, cuellos de botella visibles, y ciclos de retroalimentación más rápidos",
    "Reconoce las señales pull (kanban, supermercados, límites de WIP) que hacen funcionar el pull en la práctica",
    "Conoce dónde una dosis medida de push aún encaja&mdash;tiempos de entrega largos, capacidad pronosticada, y demanda estable y predecible"
  ],
  explanation: "<p><strong>La diferencia central: qué inicia el trabajo.</strong> Push y pull responden de forma distinta a una pregunta&mdash;<em>¿cuándo empieza a trabajar un paso?</em> En un sistema <strong>push</strong>, un paso empieza porque un cronograma o pronóstico se lo dijo: produce esta cantidad para esta fecha y entrégala al siguiente paso, esté listo o no. En un sistema <strong>pull</strong>, un paso empieza solo cuando el paso de <em>aguas abajo</em> señala que ha consumido algo y necesita un reemplazo. El trabajo es jalado a través del proceso por la demanda real en lugar de ser empujado por un plan.</p><p><strong>Por qué el push causa problemas.</strong> El push es impulsado por un pronóstico, y los pronósticos nunca son exactamente correctos. Cuando los pasos de aguas arriba producen según el plan sin importar lo que aguas abajo pueda absorber, el desajuste se convierte en <strong>inventario</strong>: trabajo en progreso acumulándose entre pasos. Ese inventario es el peor desperdicio Lean&mdash;la <strong>sobreproducción</strong>&mdash;y trae sus propios costos: tiempo de entrega más largo (una unidad espera detrás de todo lo ya encolado), efectivo y espacio inmovilizados, y defectos ocultos (un problema introducido aguas arriba queda sin detectar dentro de la pila hasta que alguien finalmente lo trabaja). El push mantiene cada paso ocupado localmente mientras el sistema en su conjunto se ralentiza y se vuelve ciego a sus propios problemas.</p><p><strong>Por qué el pull ayuda.</strong> Un sistema pull pone tope a la cantidad de trabajo en el sistema según lo que aguas abajo realmente quiere. Como nada empieza sin una señal de aguas abajo, el WIP se mantiene bajo&mdash;y por la Ley de Little (tiempo de entrega = WIP / rendimiento), un WIP bajo significa un tiempo de entrega corto. El pull también hace <em>visibles</em> los problemas: cuando un paso de aguas abajo deja de jalar, toda la línea se detiene, así que un cuello de botella o un defecto aflora de inmediato en lugar de quedar sepultado bajo inventario. Esa visibilidad, sumada al ciclo de retroalimentación corto, es exactamente lo que la mejora continua necesita&mdash;ves la restricción, la arreglas, y ves el resultado rápidamente.</p><p><strong>Cómo funciona el pull en la práctica.</strong> El pull se implementa con señales explícitas: <ul><li><strong>Kanban</strong>&mdash;una tarjeta o señal que autoriza al paso de aguas arriba a producir o mover una unidad; sin tarjeta, sin trabajo.</li><li><strong>Supermercados</strong>&mdash;un almacén con tope del que el de aguas abajo retira; el hueco que queda es la señal de reabastecimiento.</li><li><strong>Límites de WIP</strong>&mdash;un tope rígido a cuánto trabajo puede haber en una etapa; una etapa llena bloquea que aguas arriba empiece más.</li></ul>Las tres imponen la misma regla: aguas arriba solo puede actuar en respuesta al consumo real de aguas abajo.</p><p><strong>El pull no es lo mismo que el flujo de una sola pieza.</strong> El flujo continuo de una sola pieza es el ideal&mdash;las unidades pasan directo sin inventario alguno. El pull es cómo corres un proceso cuando no puedes lograr flujo puro: aún permite amortiguadores pequeños y con tope (supermercados), pero los controla con señales de demanda para que nunca crezcan hacia inventario push incontrolado. Flujo primero; donde no puedas fluir, pull.</p><p><strong>Dónde una dosis medida de push aún encaja.</strong> El pull es el valor por defecto, pero no es absoluto. El push (impulsado por pronóstico) puede ser la decisión correcta cuando: el tiempo de entrega total para hacer algo es más largo de lo que el cliente está dispuesto a esperar, así que debes empezar antes de que el pedido exista; la demanda es muy estacional y construyes por adelantado para nivelar la capacidad; un artículo único o primero de su tipo no tiene demanda repetida contra la cual jalar; o estás preposicionando capacidad (no trabajo terminado) frente a un evento conocido. El patrón maduro suele ser un híbrido&mdash;empujar hasta un punto de desacople estratégico, luego jalar desde ahí hacia el cliente&mdash;dimensionando cualquier amortiguador impulsado por pronóstico deliberadamente y encogiéndolo a medida que mejoran los tiempos de entrega.</p>",
  csamExample: "<p>El cliente de un CSAM corre su programa de modernización con un modelo push: un plan anual asigna docenas de cargas de trabajo a migrarse en un cronograma fijo, y los equipos empiezan cada una porque el plan lo dice&mdash;sin importar si la plataforma receptora, las revisiones de seguridad o los dueños de aguas abajo están listos. El resultado es una pila de migraciones a medio terminar atascadas esperando dependencias: mucho movimiento, poca finalización, y problemas descubiertos tarde. El CSAM lo replantea como push vs pull. En lugar de liberar trabajo por el calendario, el equipo jala: una nueva migración empieza solo cuando el equipo de plataforma tiene capacidad para aceptarla y la anterior está realmente terminada, con un límite de WIP que pone tope a cuántas pueden estar en curso. Ahora el trabajo es jalado por la disponibilidad real, las migraciones terminadas realmente aterrizan, y los atascos se vuelven visibles de inmediato en lugar de ocultarse en un backlog. El CSAM lo conecta con la CI: 'El pull pone tope a lo que empezamos según lo que podemos terminar&mdash;así vemos el cuello de botella real y lo mejoramos, en lugar de empezar más y esperar'.</p>",
  csaExample: "<p>Un CSA está ayudando a un equipo de datos cuya canalización corre con push: cada sistema fuente vuelca su extracción completa en un cronograma fijo hacia la capa de procesamiento, estén o no al día los procesadores. En días pesados la capa de procesamiento queda sepultada bajo un backlog (sobreproducción, latencia larga, ingenieros despertados); la pila oculta cuál etapa es en realidad la restricción. El CSA lo convierte a pull: los productores escriben a una cola, y los consumidores jalan trabajo solo a medida que terminan el ítem anterior, con un límite de WIP para que el sistema no pueda inundarse y el autoescalado dimensionado a la tasa de jalado estable en lugar del volcado crudo. Los backlogs dejan de formarse, la latencia de extremo a extremo cae a medida que cae el WIP (Ley de Little), y la etapa cuello de botella se vuelve obvia en el tablero. El CSA anota la excepción: para una agregación nocturna genuinamente de tiempo de entrega largo y predecible, el equipo aún precalcula por adelantado de la demanda&mdash;un push deliberado y acotado&mdash;pero todo lo que está aguas abajo de ese punto se jala.</p>",
  recap: [
    "El push inicia el trabajo desde un pronóstico o cronograma y lo envía aguas abajo esté o no listo; el pull inicia el trabajo solo cuando una señal de aguas abajo muestra demanda real",
    "El push tiende a sobreproducir&mdash;el WIP se acumula entre pasos, alargando el tiempo de entrega, inmovilizando efectivo, y ocultando defectos dentro del inventario",
    "El pull pone tope al trabajo según la demanda real: un WIP bajo significa un tiempo de entrega corto (Ley de Little), y los atascos afloran de inmediato en lugar de quedar sepultados",
    "El pull se implementa con señales explícitas&mdash;tarjetas kanban, supermercados y límites de WIP&mdash;donde aguas arriba actúa solo según el consumo real de aguas abajo",
    "El pull es un habilitador de la CI: los cuellos de botella visibles más un ciclo de retroalimentación rápida son de lo que depende el trabajo de mejora; flujo primero, luego pull donde no puedas fluir",
    "Un push medido aún encaja cuando el tiempo de entrega excede la espera que el cliente tolerará, para construir por adelantado por estacionalidad, o para artículos únicos&mdash;a menudo un híbrido: empujar hasta un punto de desacople, jalar desde ahí"
  ],
  questions: [
    {
      prompt: "¿Cuál es la diferencia fundamental entre un sistema push y uno pull?",
      options: [
        "El push usa lotes más pequeños que el pull.",
        "En push, el trabajo empieza desde un pronóstico o cronograma; en pull, el trabajo empieza solo cuando un paso de aguas abajo señala demanda real.",
        "El pull requiere más inventario que el push.",
        "El push no tiene defectos, mientras que el pull sí."
      ],
      correctIndex: 1,
      explanation: "La distinción es sobre <strong>qué dispara el inicio del trabajo</strong>. El push libera trabajo según un plan/pronóstico y lo envía aguas abajo sin importar la disponibilidad; el pull inicia el trabajo solo en respuesta a una señal de demanda de aguas abajo."
    },
    {
      prompt: "¿Por qué un sistema push tiende a crear desperdicio?",
      options: [
        "Nunca mantiene ocupados los pasos de aguas arriba.",
        "Producir según un pronóstico sin importar la disponibilidad de aguas abajo causa sobreproducción&mdash;el WIP se acumula, el tiempo de entrega crece, y los defectos se ocultan dentro del inventario.",
        "Pone tope al trabajo en progreso de forma demasiado agresiva.",
        "Hace que los problemas sean demasiado visibles para ignorarlos."
      ],
      correctIndex: 1,
      explanation: "El push es impulsado por pronóstico, y el desajuste con la demanda real se convierte en <strong>sobreproducción</strong>&mdash;el peor desperdicio Lean. El WIP resultante alarga el tiempo de entrega, inmoviliza efectivo y espacio, y oculta defectos hasta mucho después."
    },
    {
      prompt: "¿Cómo acorta el tiempo de entrega un sistema pull?",
      options: [
        "Aumentando el rendimiento sin importar el WIP.",
        "Poniendo tope al WIP según la demanda real&mdash;un WIP más bajo a un rendimiento dado significa un tiempo de entrega más corto (Ley de Little).",
        "Quitando al cliente del proceso.",
        "Produciendo por adelantado de la demanda para construir un amortiguador."
      ],
      correctIndex: 1,
      explanation: "El pull pone tope al trabajo en el sistema según lo que aguas abajo jala, manteniendo bajo el WIP. Por la Ley de Little (tiempo de entrega = WIP / rendimiento), un WIP más bajo al mismo rendimiento <strong>acorta el tiempo de entrega</strong>."
    },
    {
      prompt: "¿Cuál de estos es un mecanismo usado para implementar un sistema pull?",
      options: [
        "Un pronóstico de producción trimestral empujado a cada paso.",
        "Señales kanban, supermercados y límites de WIP&mdash;donde aguas arriba actúa solo según el consumo real de aguas abajo.",
        "Liberar todo el trabajo al inicio del período.",
        "Quitar todos los amortiguadores para que los pasos nunca se coordinen."
      ],
      correctIndex: 1,
      explanation: "El pull se impone con señales explícitas: tarjetas <strong>kanban</strong> que autorizan una unidad de trabajo, <strong>supermercados</strong> cuyos huecos señalan reabastecimiento, y <strong>límites de WIP</strong> que bloquean aguas arriba cuando una etapa está llena."
    },
    {
      prompt: "¿Cuándo sigue siendo apropiada una dosis medida de push?",
      options: [
        "Siempre que quieras mantener ocupado localmente cada paso.",
        "Cuando el tiempo de entrega total excede la espera que el cliente tolerará, para construir por adelantado por estacionalidad, o para artículos únicos&mdash;a menudo como un híbrido que empuja hasta un punto de desacople y jala desde ahí.",
        "Siempre, porque el push es más simple que el pull.",
        "Nunca&mdash;el push siempre está mal bajo cualquier condición."
      ],
      correctIndex: 1,
      explanation: "El pull es el valor por defecto, no un absoluto. El <strong>push</strong> impulsado por pronóstico encaja cuando debes empezar antes de que exista un pedido (tiempo de entrega largo), para nivelar la demanda estacional, o para artículos únicos&mdash;comúnmente un híbrido: empujar hasta un punto de desacople estratégico, luego jalar hacia el cliente."
    }
  ]
},
"limit-wip": {
  id: "limit-wip",
  title: "Limitar el WIP: Acotar el Trabajo para Acelerar el Flujo",
  group: "Lugar de Trabajo, Flujo & Estandarización",
  duration: "30 min",
  executiveSummary: "El trabajo en proceso (WIP) es todo lo que se ha comenzado pero aún no se ha terminado&mdash;tickets en curso, cargas de trabajo migradas a medias, funciones programadas pero no publicadas. Limitar el WIP significa acotar deliberadamente cuántas cosas pueden estar en proceso a la vez, de modo que un equipo termine el trabajo antes de comenzar más. Se siente al revés&mdash;comenzar menos para entregar más&mdash;y, sin embargo, es uno de los movimientos de mayor apalancamiento en Lean. Según la Ley de Little, el tiempo de entrega es igual al WIP dividido por el rendimiento, así que para una capacidad dada, menos WIP significa entrega más rápida. Un WIP alto no es una ocupación inofensiva; es sobreproducción disfrazada, y arrastra consigo esperas, cambios de contexto y defectos ocultos. Limitar el WIP también es el mecanismo que hace real el sistema pull, empuja a un proceso hacia el flujo de una sola pieza y ayuda a un equipo a mantener el ritmo que exige el takt time. Este módulo explica qué son los límites de WIP, por qué acotar el trabajo reduce el desperdicio y acorta el tiempo de entrega, cómo se conecta la idea con el takt time, push vs pull y el flujo de una sola pieza, y cómo establecer y usar límites en la práctica.",
  whatYouGain: [
    "Definir el WIP y explicar por qué acotar el trabajo iniciado en realidad acelera la entrega",
    "Usar la Ley de Little (tiempo de entrega = WIP / rendimiento) para conectar el WIP con la velocidad",
    "Nombrar los desperdicios que crea un WIP alto—sobreproducción, espera, cambios de contexto y defectos ocultos",
    "Conectar los límites de WIP con el sistema pull, el flujo de una sola pieza y el mantenimiento del ritmo del takt time",
    "Establecer límites de WIP prácticos y saber qué hacer cuando se alcanza un límite—dejar de comenzar y enjambrar para terminar"
  ],
  explanation: "<p><strong>Qué es el WIP y qué significa limitarlo.</strong> El trabajo en proceso es todo lo que un equipo ha <em>comenzado pero no terminado</em>&mdash;una migración a medias, una función programada pero no publicada, un ticket estacionado en &ldquo;en proceso.&rdquo; Un <strong>límite de WIP</strong> es un tope explícito sobre cuántos elementos pueden estar en un estado dado a la vez. Cuando se alcanza el tope, la regla es simple: no puedes comenzar nada nuevo hasta que algo termine y libere un espacio. La promesa contraintuitiva de Lean es que <em>comenzar menos te hace terminar más</em>.</p><p><strong>Por qué acotar el WIP acelera la entrega: la Ley de Little.</strong> Esto no es un eslogan; es aritmética. La <strong>Ley de Little</strong> establece que el tiempo de entrega promedio = WIP promedio &divide; rendimiento promedio. Para un equipo con capacidad (rendimiento) más o menos fija, la única forma de acortar el tiempo de entrega es reducir el WIP. Duplicar la cantidad de cosas en curso no duplica la producción&mdash;la producción la fija la capacidad&mdash;simplemente duplica cuánto espera cada elemento. Reducir el WIP a la mitad, con el mismo rendimiento, reduce aproximadamente a la mitad el tiempo de entrega. Por eso cuarenta elementos comenzados pero sin terminar entregan valor mucho más lentamente que unos pocos disciplinados trabajados hasta su finalización.</p><p><strong>Un WIP alto es desperdicio disfrazado.</strong> El trabajo sin terminar se siente productivo&mdash;todos están ocupados&mdash;pero es <strong>sobreproducción</strong>, el peor desperdicio de Lean, con una máscara amigable. Arrastra consigo los demás desperdicios: <strong>espera</strong> (los elementos se quedan en colas entre pasos), <strong>movimiento y cambios de contexto</strong> (las personas hacen malabares con muchos elementos abiertos y pagan un impuesto cada vez que cambian), <strong>inventario</strong> (efectivo, capacidad y atención atados en cosas que no están terminadas) y <strong>defectos ocultos</strong> (un problema introducido temprano queda sin descubrir dentro de la pila hasta que alguien finalmente trabaja el elemento, momento en el cual la causa ya está fría). Cuanto más comienzas, más de todo esto acumulas.</p><p><strong>Los límites de WIP hacen real el sistema pull.</strong> Un límite de WIP es el mecanismo concreto de un sistema <strong>pull</strong>. Cuando una etapa está llena hasta su límite, deja de jalar de aguas arriba&mdash;así que aguas arriba deja de producir&mdash;y el trabajo es arrastrado a través del proceso por la capacidad disponible en lugar de ser empujado por un cronograma. Quita el límite y vuelves a push: cada paso produce según el plan, el WIP se dispara, y el sistema queda ciego a su propio cuello de botella. El límite es lo que convierte &ldquo;producir cuando se ordena&rdquo; en &ldquo;producir cuando hay espacio.&rdquo;</p><p><strong>El vínculo con el flujo de una sola pieza y el takt time.</strong> El <strong>flujo de una sola pieza</strong> es simplemente el caso extremo de un límite de WIP&mdash;un límite de <em>uno</em>&mdash;donde un solo elemento se mueve a través de todo el proceso antes de que comience el siguiente. Rara vez alcanzas un verdadero límite de uno, pero cada reducción del WIP te acerca a ese ideal de flujo suave de un solo elemento y te aleja del procesamiento por lotes. El <strong>takt time</strong> fija el ritmo que el cliente demanda (tiempo disponible &divide; demanda); limitar el WIP es como un equipo realmente <em>mantiene</em> ese ritmo, porque un proceso sobrecargado y sepultado en WIP no puede entregar a un ritmo constante&mdash;da tumbos entre inundaciones y sequías. Un WIP bajo y estable es lo que permite que la producción coincida con el takt en lugar de oscilar a su alrededor.</p><p><strong>Cómo establecer y usar límites.</strong> Comienza cerca de la carga típica actual y ajusta deliberadamente&mdash;un punto de partida común es aproximadamente uno o dos elementos por persona o pareja, y luego bájalo hasta que el flujo sea suave pero el equipo no quede sin trabajo. El comportamiento decisivo es lo que ocurre <em>cuando se alcanza un límite</em>: no comiences trabajo nuevo&mdash;<strong>detente y enjambra</strong> el elemento bloqueado o más antiguo hasta que avance. Ese momento es un regalo para la mejora continua: el límite obliga al cuello de botella a salir a la luz en lugar de dejarlo esconderse bajo un backlog, de modo que el equipo pueda ver la restricción, corregirla y observar cómo responde el tiempo de entrega. Acotar el WIP no frena a un equipo&mdash;cambia la ilusión de estar ocupado por la realidad del trabajo terminado, y le entrega a la CI una señal clara y rápida para mejorar.</p>",
  csamExample: "<p>Un CSAM nota que el equipo de plataforma de su cliente está perpetuamente ocupado pero rara vez <em>termina</em> algo: en cualquier momento quince o veinte iniciativas están &ldquo;en proceso&rdquo;&mdash;migraciones, cambios de gobernanza, revisiones de costos&mdash;y casi ninguna llega a estar terminada. Los ejecutivos están frustrados porque un año de esfuerzo muestra poco valor entregado. El CSAM replantea el problema como WIP, no como esfuerzo. En lugar de pedirle al equipo que trabaje más duro, introduce un límite de WIP: no más de un puñado de iniciativas activas a la vez, y nada nuevo comienza hasta que una termine. El equipo se resiste al principio&mdash;comenzar se siente como progreso&mdash;pero dentro de dos ciclos las iniciativas completadas empiezan a aterrizar porque la atención está concentrada en lugar de dispersa. El CSAM lo conecta con la CI y la Ley de Little: 'Tu rendimiento está fijado por la capacidad; la única palanca que controlas es cuánto comienzas. Acota el WIP y el tiempo de entrega baja&mdash;y el límite hace visible tu cuello de botella real para que podamos mejorarlo.' Los resultados terminados, no los tickets abiertos, se convierten en la medida del progreso.</p>",
  csaExample: "<p>Un CSA está asesorando a un equipo de entrega cuyo tablero rutinariamente sostiene tres o cuatro veces más tickets &ldquo;en proceso&rdquo; que ingenieros hay&mdash;todos tienen varias cosas abiertas, cambiando de contexto todo el día, y el tiempo de ciclo de cualquier ticket individual se estira por semanas porque cada uno espera detrás de los demás. El CSA introduce límites de WIP por columna en la herramienta de seguimiento y una regla que el equipo acuerda: cuando una columna está en su límite, no jalas nada nuevo&mdash;ayudas a terminar lo que ya está ahí. La primera semana es incómoda; los ingenieros acostumbrados a tomar trabajo nuevo en su lugar se emparejan para empujar los elementos atascados a través de la revisión de código y las pruebas. El tiempo de ciclo cae a medida que cae el WIP (la Ley de Little en acción), el backlog perpetuo de revisión se drena, y la columna que sigue alcanzando su límite&mdash;las pruebas&mdash;resulta ser la verdadera restricción, que el equipo luego automatiza. El CSA enmarca el resultado: 'Limitar el WIP no nos hizo hacer menos&mdash;nos hizo terminar más, y apuntó una linterna directamente al cuello de botella. Esa visibilidad es el bucle de retroalimentación con el que funciona la CI.'</p>",
  recap: [
    "El WIP es el trabajo que se ha comenzado pero no terminado; un límite de WIP acota cuántos elementos pueden estar en proceso y bloquea el inicio de trabajo nuevo hasta que algo termine",
    "La Ley de Little (tiempo de entrega = WIP / rendimiento) significa que, a capacidad fija, reducir el WIP es la palanca directa para acortar el tiempo de entrega",
    "Un WIP alto es sobreproducción disfrazada—arrastra consigo esperas, cambios de contexto, inventario atado y defectos ocultos",
    "Los límites de WIP son el mecanismo concreto del sistema pull: una etapa llena deja de jalar de aguas arriba, así que el trabajo es arrastrado por la capacidad en lugar de empujado por un cronograma",
    "El flujo de una sola pieza es un límite de WIP de uno; el takt time fija el ritmo de la demanda, y un WIP bajo y estable es lo que permite a un equipo realmente mantener ese ritmo",
    "Cuando se alcanza un límite, detente y enjambra el elemento más antiguo o bloqueado—esto expone el cuello de botella, dándole a la CI la retroalimentación rápida y visible de la que depende"
  ],
  questions: [
    {
      prompt: "¿Qué significa limitar el WIP?",
      options: [
        "Contratar más personas para poder comenzar más trabajo a la vez.",
        "Acotar cuántos elementos pueden estar en proceso a la vez, y no comenzar trabajo nuevo hasta que algo termine.",
        "Eliminar todos los plazos del trabajo del equipo.",
        "Aumentar el tamaño de los lotes para que se necesiten menos transferencias."
      ],
      correctIndex: 1,
      explanation: "Un límite de WIP es un tope explícito sobre los elementos en proceso. Cuando se alcanza el tope, no comienza trabajo nuevo hasta que algo termine y libere un espacio&mdash;<strong>comenzar menos para terminar más</strong>."
    },
    {
      prompt: "Según la Ley de Little, ¿cómo afecta reducir el WIP al tiempo de entrega con un rendimiento fijo?",
      options: [
        "No tiene efecto; el tiempo de entrega depende solo del tamaño del equipo.",
        "Aumenta el tiempo de entrega porque se están trabajando menos cosas.",
        "Acorta el tiempo de entrega—tiempo de entrega = WIP / rendimiento, así que menos WIP con el mismo rendimiento significa entrega más rápida.",
        "Aumenta el rendimiento sin cambiar el tiempo de entrega."
      ],
      correctIndex: 2,
      explanation: "<strong>Ley de Little</strong>: tiempo de entrega = WIP &divide; rendimiento. Con el rendimiento fijado por la capacidad, reducir el WIP es la forma directa de <strong>acortar el tiempo de entrega</strong>."
    },
    {
      prompt: "¿Por qué se considera un WIP alto una forma de desperdicio?",
      options: [
        "Porque el trabajo sin terminar es sobreproducción disfrazada—agrega espera, cambios de contexto, inventario atado y defectos ocultos.",
        "Porque siempre significa que el equipo tiene poco personal.",
        "Porque garantiza que el producto se entregará tarde por contrato.",
        "Porque elimina la necesidad de cualquier señal de pull."
      ],
      correctIndex: 0,
      explanation: "Mucho trabajo comenzado pero sin terminar se siente productivo pero es <strong>sobreproducción</strong>, el peor desperdicio de Lean. Arrastra consigo espera, cambios de contexto, inventario y defectos ocultos."
    },
    {
      prompt: "¿Cómo se relacionan los límites de WIP con el sistema pull y el flujo de una sola pieza?",
      options: [
        "No tienen nada que ver con el pull; solo importan para la previsión.",
        "Un límite de WIP es el mecanismo del pull—una etapa llena deja de jalar de aguas arriba—y el flujo de una sola pieza es simplemente un límite de WIP de uno.",
        "Convierten un sistema pull de vuelta en un sistema push.",
        "Requieren abandonar el takt time por completo."
      ],
      correctIndex: 1,
      explanation: "Un límite de WIP hace concreto el <strong>pull</strong>: una etapa en su límite deja de jalar de aguas arriba. El <strong>flujo de una sola pieza</strong> es el caso extremo&mdash;un límite de WIP de un elemento a la vez."
    },
    {
      prompt: "¿Qué debe hacer un equipo cuando una etapa alcanza su límite de WIP?",
      options: [
        "Comenzar trabajo adicional en otro lugar para mantenerse ocupado.",
        "Subir el límite de inmediato para que el trabajo pueda seguir entrando.",
        "Dejar de comenzar trabajo nuevo y enjambrar el elemento bloqueado o más antiguo para terminarlo—exponiendo el cuello de botella para mejorarlo.",
        "Ignorar el límite hasta el final del sprint."
      ],
      correctIndex: 2,
      explanation: "Alcanzar el límite es la señal para <strong>detenerse y enjambrar</strong>: terminar lo que está ahí antes de comenzar más. Esto obliga al cuello de botella a salir a la luz&mdash;exactamente la retroalimentación visible y rápida que necesita la mejora continua."
    }
  ]
},

"kaizen": {
  id: "kaizen",
  title: "Kaizen: Eventos de Mejora Enfocada que Entregan en Días",
  group: "Lugar de Trabajo, Flujo & Estandarización",
  duration: "30 min",
  executiveSummary: "Kaizen—'cambio para mejor'—es un evento de mejora enfocado y acotado en el tiempo, ejecutado por las personas que hacen el trabajo. Un evento Kaizen de 3 a 5 días reúne a un equipo multifuncional que define el alcance, analiza e implementa un cambio específico de principio a fin antes de que termine la semana. Es especialmente poderoso cuando el escepticismo del cliente es alto y se necesita una victoria visible y medida para reconstruir el impulso. Usa Kaizen para comprimir victorias de modernización, mejoras de confiabilidad, optimizaciones de costos y saltos de capacitación en eventos con asistencia del cliente y datos contundentes de antes/después. Respeta los límites de Kaizen: funciona para la ejecución de soluciones conocidas en días, no para el diseño de sistemas complejos que necesitan meses.",
  whatYouGain: [
    "Romper programas de transformación estancados al entregar una mejora real y medida en 5 días en lugar de esperar que una hoja de ruta de 5 meses aterrice",
    "Reconstruir la confianza y el impulso del cliente después de programas fallidos—nada recupera la credibilidad como una victoria visible demostrada al liderazgo el día 5",
    "Comprimir ciclos PDCA para problemas de alta prioridad de semanas a días, con código/configuración funcional entregado antes de que el equipo se disperse",
    "Desarrollar el músculo de CI del equipo del cliente a través de la participación—Kaizen se enseña haciendo, no con presentaciones de diapositivas"
  ],
  explanation: "<p><strong>Kaizen es a la vez una filosofía y un formato.</strong></p><p><strong>Filosofía:</strong> La mejora pequeña y continua se acumula más rápido que el cambio grande y poco frecuente. Las personas que hacen el trabajo diseñan la mejora. Estandariza lo que funciona; el estándar se convierte en la línea base para el próximo Kaizen. Los problemas son tesoros—la visibilidad es una virtud.</p><p><strong>Formato: Un taller acotado en el tiempo de 3 a 5 días.</strong> Un equipo multifuncional (6 a 10 personas) se reúne a diario usando Pareto, Ishikawa, 5 Por qués, mapeo del flujo de valor y los 8 Desperdicios para definir el alcance, analizar, implementar y validar el cambio antes de que termine la semana, presentando al liderazgo con datos de antes/después.</p><p><strong>Fases estándar:</strong> Trabajo previo (definir alcance, acordar métrica, recolectar línea base, asegurar calendarios). Día 1—Entender (recorrer el proceso, construir el VSM, Ishikawa + 5 Por qués). Día 2—Analizar (causas con Pareto, diseñar el estado futuro). Día 3—Implementar (hacer el cambio en sistemas reales, PRs de IaC, actualizaciones de runbook). Día 4—Validar (medir el nuevo estado, iterar, estandarizar). Día 5—Sostener e informar (definir cadencia, transferencia, presentar resultados con datos de antes/después).</p><p><strong>Innegociables:</strong> Equipo multifuncional con los calendarios despejados. Autoridad de decisión en la sala (o a un mensaje de distancia). Métrica de línea base predefinida y objetivo de éxito. Algo real se entrega para el día 5. La línea base y la nueva medición usan la misma fuente de datos (manzanas con manzanas).</p>",
  csamExample: "<p>Un CSAM hereda un cliente a 7 meses de una \"transformación DevOps\" sin victorias visibles. El CTO se muestra abiertamente escéptico sobre más horas de CSA. El CSAM propone: un Kaizen de 5 días sobre un solo flujo de valor—el tiempo de entrega de despliegue del servicio de checkout. Trabajo previo: recolectar 90 días de datos de despliegue. Día 1: el mapa del flujo de valor revela un tiempo de entrega de 6 horas; 80 min en compuertas manuales, 4 min en la corrección real. Día 2: diseñar un runbook unificado de despliegue de checkout + un comando ChatOps `\\/deploy`. Día 3: entregarlo. Día 4: medir en 10 despliegues reales—75 minutos de principio a fin, 4 veces al día en lugar de 2 veces por semana. Día 5: demostración al CTO con métrica en vivo. El CTO financia los próximos 4 Kaizens en el acto. Una semana de cambio validado abre lo que 7 meses de planificación no pudieron.</p>",
  csaExample: "<p>El cliente de un CSA tiene un contenedor de Cosmos DB que arroja 412 errores 429 por día, limitando el rendimiento. Trabajo previo: 90 días de telemetría. Día 1: Pareto + Ishikawa + 5 Por qués identifican como solución la clave de partición jerárquica (HPK) + autoscale + actualización del SDK + ajuste de índices. Día 2: diseñar el cambio (migración de HPK, actualización del SDK, bloqueo del módulo de IaC). Día 3: implementar en producción; desplegar la actualización del SDK en todos los servicios; calentamiento del autoscale. Día 4: medir contra la línea base del día 1—38,000 RU/s → 9,200 RU/s; 429s → 0; costo mensual $11,400 → $2,800. Día 5: lectura de resultados; estandarizar el módulo de IaC; agendar 6 Kaizens más en contenedores adyacentes. Una sola semana de ejecución se convierte en el patrón repetible del cliente.</p>",
  recap: [
    "Kaizen entrega una mejora funcional en 5 días; es un formato de ejecución, no un compresor mágico de cronogramas—respeta sus límites.",
    "El trabajo previo y la autoridad de decisión son innegociables; sin una línea base predefinida, no puedes declarar victoria al final.",
    "Fases de cinco días: Entender (día 1), Analizar (día 2), Implementar (día 3), Validar (día 4), Sostener e informar (día 5).",
    "Usa Kaizen cuando el diagnóstico existe y la solución puede entregarse en días; evítalo para problemas de diseño que necesitan meses de arquitectura.",
    "Mide antes/después con la misma consulta; estandariza vía IaC, Policy, runbooks; agenda el próximo Kaizen antes de que termine el día 5."
  ],
  questions: [
    {
      prompt: "Un cliente lleva 8 meses en una &ldquo;transformación digital&rdquo; sin mejoras entregadas. ¿Cuál es el valor estratégico de ejecutar un Kaizen ahora?",
      options: [
        "Extiende el cronograma del programa de transformación para que pueda ocurrir más planificación.",
        "Entrega una mejora medida y funcional en 5 días, reconstruyendo la confianza del cliente y justificando un mayor compromiso.",
        "Produce un documento de estrategia integral que alinea a todas las partes interesadas.",
        "Elimina la necesidad de hacer cualquier otro trabajo de mejora."
      ],
      correctIndex: 1,
      explanation: "Un Kaizen rompe el ciclo de la transformación estancada al entregar <strong>resultados medidos</strong> y reales en días. La victoria visible &mdash; a menudo demostrada al liderazgo el día 5 &mdash; reconstruye el impulso más rápido que cualquier hoja de ruta."
    },
    {
      prompt: "¿Cuál es un requisito innegociable para el éxito de Kaizen?",
      options: [
        "El CEO del cliente debe asistir los cinco días.",
        "Los miembros del equipo multifuncional tienen los calendarios despejados, y la autoridad de decisión está presente en la sala.",
        "Los 47 ingenieros del departamento deberían asistir para que todos se capaciten.",
        "El código debe entregarse para el día 2 con los días 3 a 5 reservados para otras actividades."
      ],
      correctIndex: 1,
      explanation: "Kaizen depende del <strong>compromiso total de los participantes</strong> y de alguien en la sala con autoridad para aprobar cambios. Los equipos que asisten a medias fracasan porque el cambio de contexto mata el enfoque."
    },
    {
      prompt: "El día 2, el equipo diseña un cambio que requiere la aprobación de herramientas de un comité que se reúne en 4 semanas. ¿Qué debes hacer?",
      options: [
        "Rediseñar la mejora para evitar el costo de las herramientas de modo que el equipo pueda entregarla para el día 5.",
        "Pausar el Kaizen y reprogramarlo después de que se reúna el comité de presupuesto.",
        "Si quien toma la decisión requerida no está en la sala (o a un mensaje de distancia), el alcance fue mal enmarcado &mdash; replantea hacia lo que la autoridad actual pueda aprobar en 5 días.",
        "Hacer que el equipo implemente una solución parcial y comprometerse al cambio completo más tarde."
      ],
      correctIndex: 2,
      explanation: "El requisito de <strong>autoridad de decisión</strong> es innegociable. Un Kaizen que termina con &ldquo;necesitaremos aprobación el próximo mes&rdquo; es una reunión de planificación, no un Kaizen."
    },
    {
      prompt: "El trabajo previo de un Kaizen revela que el equipo no ha definido una métrica de línea base ni un objetivo de éxito. ¿Cómo deberías proceder?",
      options: [
        "Iniciar el evento de todos modos y definir la métrica el día 1 durante el arranque.",
        "Regresar y fijar una línea base específica y medible y un objetivo antes del día 1.",
        "Saltarte el trabajo previo y usar el tiempo del taller para hacer una lluvia de ideas de posibles métricas.",
        "Enfocarte en mejoras de proceso en su lugar, ya que las métricas de confiabilidad son difíciles de definir."
      ],
      correctIndex: 1,
      explanation: "Un Kaizen sin una <strong>línea base y métrica de éxito</strong> predefinidas no puede declarar victoria al final. El trabajo previo debe fijar esto; protege la credibilidad del evento."
    },
    {
      prompt: "Un cliente pide un Kaizen sobre &ldquo;rediseñar nuestra topología de base de datos activo-activo multirregión.&rdquo; El trabajo genuinamente necesita meses de diseño. ¿Es este el alcance correcto?",
      options: [
        "Sí, porque Kaizen comprime cualquier cronograma en 5 días.",
        "Sí, siempre que lo extiendas a 10 días en lugar de 5.",
        "No &mdash; Kaizen solo funciona cuando el diagnóstico existe y la solución puede entregarse en días. Respeta los límites del formato.",
        "Sí, pero solo si todos los arquitectos senior asisten a tiempo completo."
      ],
      correctIndex: 2,
      explanation: "Kaizen es un <strong>formato para la ejecución</strong>, no un compresor mágico de cronogramas. Para un trabajo que genuinamente necesita meses de arquitectura, Kaizen fracasará."
    }
  ]
},

"kanban": {
  id: "kanban",
  title: "Kanban: Control de Flujo para el Trabajo Continuo",
  group: "Lugar de Trabajo, Flujo & Estandarización",
  duration: "30 min",
  executiveSummary: "Kanban—'tablero de señales'—es un sistema visual de flujo de trabajo que limita el trabajo en proceso (WIP) para exponer los cuellos de botella y jalar el trabajo a través de un flujo de valor a un ritmo sostenible. Según la Ley de Little, el tiempo de entrega escala con el WIP; reduce el WIP a la mitad y reduces el tiempo de entrega a la mitad con el mismo rendimiento. Para los CSA, Kanban es el complemento operativo de Pareto/Ishikawa/Kaizen: estos identifican el trabajo correcto; Kanban lo hace fluir hasta estar terminado. Usa Kanban para gestionar ciclos de CI, colas de respuesta a incidentes, backlogs de modernización, canalizaciones de onboarding de clientes y tu propio backlog de compromisos. Las mecánicas principales—visualizar, limitar el WIP, gestionar el flujo, hacer explícitas las políticas, evolucionar—aplican por igual a equipos SRE de 4 personas y a organizaciones de plataforma de 40 personas.",
  whatYouGain: [
    "Reducir el tiempo de entrega a la mitad sin agregar personas—los límites de WIP fuerzan el enfoque y eliminan el desperdicio del cambio de contexto; la Ley de Little hace visible esta matemática",
    "Exponer los cuellos de botella de inmediato—el envejecimiento del WIP es el indicador líder de problemas; corrige la restricción antes de que se desborde en cascada",
    "Terminar lo que comienzas—una Definición de Listo y de Terminado explícita evita que el trabajo a medias se acumule y envenene el backlog",
    "Ejecutar ciclos de CI, respuesta a incidentes y flujos de modernización con métricas visibles de rendimiento y tiempo de entrega"
  ],
  explanation: "<p><strong>Seis prácticas centrales (David Anderson):</strong></p><ul><li><strong>Visualizar:</strong> Cada elemento es una tarjeta en un tablero. Las columnas representan etapas. Nada es invisible.</li><li><strong>Limitar el WIP:</strong> Cada columna tiene un máximo. Cuando está llena, aguas arriba se detiene o aguas abajo termina. Esta es la disciplina que funciona.</li><li><strong>Gestionar el flujo:</strong> Observa el tiempo de entrega y el rendimiento, no la utilización. Una utilización alta esconde los cuellos de botella.</li><li><strong>Hacer explícitas las políticas:</strong> ¿Qué significa \"Terminado\"? ¿Qué es \"Listo\"? Escríbelo en el tablero.</li><li><strong>Implementar bucles de retroalimentación:</strong> Reunión diaria de pie, reunión de reabastecimiento, revisión de entrega del servicio, revisión de riesgos, revisión de estrategia.</li><li><strong>Mejorar colaborativamente:</strong> Cambia el tablero con base en datos; esto es PDCA aplicado al tablero mismo.</li></ul><p><strong>Mecánicas centrales:</strong> Pull (aguas abajo jala cuando se abre capacidad; aguas arriba no puede empujar). Carriles (swim lanes) (por tipo o área de servicio). Clases de servicio (Estándar, Expedito, Fecha-fija, Intangible). Métricas: Tiempo de entrega (de enviado a entregado), Tiempo de ciclo (de comenzado a entregado), Rendimiento (entregado por periodo), Envejecimiento del WIP (cuánto tiempo llevan en proceso los elementos actuales). El Diagrama de Flujo Acumulado visualiza el tiempo de entrega y el WIP de un vistazo.</p><p>La <strong>Ley de Little</strong> es la matemática detrás de los límites de WIP. Para un sistema estable, el tiempo de entrega promedio = WIP promedio &divide; rendimiento promedio (TE = WIP / rendimiento). El rendimiento está fijado por la capacidad de entrega real y es difícil de aumentar rápidamente; el WIP es algo que controlas directamente. Así que cuando el rendimiento se mantiene estable, reducir el WIP reduce el tiempo de entrega proporcionalmente&mdash;reduce a la mitad los elementos en proceso y el elemento promedio se entrega en aproximadamente la mitad del tiempo. Por eso limitar el WIP, en lugar de agregar personas, suele ser la forma más rápida de acortar el tiempo de entrega. La ley se cumple en promedio para un sistema estable a lo largo del tiempo, no para un elemento individual.</p><p><strong>Cómo usarlo:</strong> Mapea el flujo de trabajo real como columnas (no inventes etapas; refleja la realidad). Establece límites de WIP iniciales (regla práctica: WIP ≈ tamaño del equipo para Haciendo). Define Listo y Terminado por columna. Realiza ceremonias cortas (reunión diaria de pie, reabastecimiento semanal). Da seguimiento y haz visible el envejecimiento. Respeta los límites cuando duele—ahí es cuando están funcionando.</p>",
  csamExample: "<p>El cliente de un CSAM tiene 14 iniciativas del equipo de plataforma en curso entre 5 ingenieros; nada se entregó en 11 semanas. El CSAM introduce un Kanban simple de 3 columnas (Listo → Haciendo → Terminado) con un límite de WIP de 5 en Haciendo. Dentro de 2 semanas, 4 iniciativas terminaron. Dentro de 6 semanas, 11 se entregaron. El equipo no agregó capacidad; su enfoque lo hizo. El CSAM también dio visibilidad a la reunión de reabastecimiento: los elementos se jalan por impacto según Pareto, no por presión de las partes interesadas. El cuartil superior de iniciativas por valor impulsó el 80% del rendimiento.</p>",
  csaExample: "<p>El cliente de un CSA ejecuta respuesta a incidentes en un gran clúster de AKS. El canal de incidentes es un caos: las alertas inundan, la persona de guardia cambia de contexto entre triaje/asignar/remediar/postmortem sin una cola visible. El CSA propone un Kanban (Triaje → Asignado → Depuración → Corrección → Validación → Cerrado) con límites de WIP: Asignado ≤ 8, Depuración ≤ 5, Corrección ≤ 3. El tablero se fija en el canal. Dentro de una semana, los incidentes envejecidos se ven como cuello de botella: 3 atascados en Asignado por más de 4 horas. Causa raíz: la asignación requería la disponibilidad del gerente de guardia. Nueva política: el gerente de guardia atiende la revisión de Asignado cada 30 min. El tiempo de entrega se normalizó a 2 horas. El tablero no agregó capacidad; expuso la restricción + forzó un cambio de política que la corrigió.</p>",
  recap: [
    "Kanban expone los cuellos de botella a través de los límites de WIP—cuando una columna se llena, aguas arriba se detiene o aguas abajo termina; la restricción se vuelve visible.",
    "Ley de Little: el tiempo de entrega escala con el WIP. Reduce el WIP a la mitad y reduces el tiempo de entrega a la mitad con el mismo rendimiento—el enfoque vence a la capacidad.",
    "Visualiza el trabajo, limita el WIP por columna (regla práctica: WIP ≈ tamaño del equipo), define Listo y Terminado, realiza ceremonias de retroalimentación, mejora mediante datos.",
    "El envejecimiento del WIP es el indicador líder—los elementos que envejecen más allá del tiempo de ciclo esperado resaltan los estancamientos; corrige el estancamiento, no la métrica de envejecimiento.",
    "Respeta los límites de WIP cuando el calendario se vuelve incómodo; ahí es cuando están haciendo su trabajo—forzando compensaciones visibles en lugar de una sobrecarga invisible."
  ],
  questions: [
    {
      prompt: "Un equipo tiene 14 iniciativas en curso entre 5 ingenieros; nada se ha entregado en 11 semanas. Estableces un límite de WIP de 5 en la columna Haciendo. ¿Cuál es el mecanismo fundamental que debería mejorar el rendimiento?",
      options: [
        "El equipo gana visibilidad del backlog, así que aumenta la motivación.",
        "Limitar el WIP obliga al equipo a terminar el trabajo en lugar de cambiar de contexto &mdash; reduciendo el tiempo de entrega y aumentando el rendimiento real.",
        "Los ingenieros trabajarán más rápido porque ven el tablero durante las reuniones de pie.",
        "El tablero prioriza automáticamente qué trabajo es más importante."
      ],
      correctIndex: 1,
      explanation: "Según la Ley de Little, el tiempo de entrega escala con el WIP. Un <strong>límite de WIP</strong> elimina la contención y fuerza el enfoque. El equipo no trabaja más duro &mdash; termina lo que comienza, así que el rendimiento mejora."
    },
    {
      prompt: "Un equipo propone seis columnas para un tablero de incidentes. ¿Qué enfoque es correcto?",
      options: [
        "Las seis etapas, porque todas son importantes.",
        "Solo las etapas que representan transferencias y cuellos de botella reales en el flujo de trabajo.",
        "Solo Abierto y Cerrado, para mantener el tablero simple.",
        "Cinco etapas, excluyendo &ldquo;esperando entrada del cliente&rdquo; porque eso es externo."
      ],
      correctIndex: 1,
      explanation: "Las columnas se mapean a <strong>etapas reales del flujo de trabajo</strong>, no a cada variación de estado. &ldquo;Esperando al cliente&rdquo; pertenece a un carril de Bloqueado &mdash; no es trabajo activo. Las columnas extra esconden los problemas de flujo en lugar de exponerlos."
    },
    {
      prompt: "Un VP pide empujar un 5.º elemento a una columna Haciendo con un límite de WIP de 4. ¿Cuál es la respuesta correcta?",
      options: [
        "Romper el límite de WIP esta única vez porque la solicitud del VP es urgente.",
        "Agregar silenciosamente el trabajo nuevo a un carril &ldquo;Expedito&rdquo; separado fuera del límite de WIP.",
        "Sacar a la luz el conflicto en el tablero, hacer explícita la compensación y dejar que el VP elija qué pausar o detener.",
        "Rechazar la solicitud del VP porque la política de Kanban lo prohíbe."
      ],
      correctIndex: 2,
      explanation: "El propósito del límite de WIP es <strong>forzar una compensación visible</strong>. Cuando el VP ve la lista real del trabajo actual, a menudo elige diferente a como lo haría si el conflicto fuera invisible."
    },
    {
      prompt: "Un cliente pregunta cómo decidir cuál de 40 aplicaciones de modernización jalar a la canalización. ¿Cuál es la respuesta correcta?",
      options: [
        "Kanban decide la prioridad automáticamente con base en la complejidad de la aplicación.",
        "Usa Pareto para clasificar las aplicaciones por valor de negocio, luego usa Kanban para hacerlas fluir a través de la canalización de migración.",
        "Jalar las aplicaciones en el orden en que fueron solicitadas, sin priorización.",
        "El tablero Kanban reemplaza la necesidad de cualquier otra herramienta de planificación."
      ],
      correctIndex: 1,
      explanation: "Kanban es un <strong>motor de ejecución</strong>, no un motor de decisión. Pareto responde &ldquo;qué&rdquo;; Kanban responde &ldquo;cómo lo movemos.&rdquo;"
    },
    {
      prompt: "Un tablero muestra un conteo creciente de tarjetas que envejecen más allá del tiempo de ciclo esperado, aunque el equipo se siente &ldquo;igual de ocupado que siempre.&rdquo; ¿Qué indica esto?",
      options: [
        "El equipo necesita contratar más ingenieros.",
        "El límite de WIP es demasiado bajo y debería subirse.",
        "Algo está bloqueando el trabajo o causando estancamientos; el envejecimiento del WIP es un indicador líder de problemas que necesita investigación.",
        "La métrica de tiempo de ciclo no es confiable; cambia a la utilización."
      ],
      correctIndex: 2,
      explanation: "El envejecimiento del WIP es el <strong>indicador líder</strong>. Una utilización alta puede esconder cuellos de botella &mdash; esperas por aprobaciones, dependencias o habilidades. El envejecimiento es la señal para detenerse e investigar, no para subir el WIP."
    }
  ]
},
"hoshin-kanri": {
  id: "hoshin-kanri",
  title: "Hoshin Kanri (X-Matrix)",
  group: "Estrategia & Gobernanza",
  duration: "30 min",
  executiveSummary: "Hoshin Kanri (Despliegue de Políticas) traduce un pequeño número de objetivos estratégicos en proyectos de mejora anuales y trimestrales en cascada con propiedad explícita y progreso medible en cada nivel. La distintiva X-Matrix conecta objetivos de largo plazo, avances anuales (breakthroughs), proyectos de mejora y KPIs/responsables en una sola página, reemplazando iniciativas dispersas por una narrativa estratégica coherente.",
  whatYouGain: [
    "Acotar el portafolio: reemplazar docenas de iniciativas dispersas con 3 a 5 avances estratégicos",
    "Alineación en cascada: rastrear cada proyecto desde el nivel C hasta el nivel de equipo con propiedad explícita",
    "Reemplazar el teatro de la planificación: transformar la estrategia anual en una disciplina viva de revisión trimestral",
    "Fijar la rendición de cuentas: asignar un responsable y un KPI a cada objetivo en cada nivel",
    "Enfocar el portafolio: un conjunto corto y clasificado de avances evita que los equipos dispersen el esfuerzo en demasiadas iniciativas"
  ],
  explanation: "<p>Hoshin Kanri es la disciplina de traducir objetivos estratégicos de avance (breakthrough) en proyectos de mejora en cascada con progreso medible en cada nivel. La mayoría de los programas de CI acumulan iniciativas sin coherencia; Hoshin impone una.</p><p>La <strong>X-Matrix</strong> es el artefacto distintivo — un diamante de una página que vincula cuatro cuadrantes: objetivos de largo plazo (visión de 3 a 5 años), objetivos de avance anuales, proyectos de mejora de máxima prioridad (DMAIC, Kaizen, programas) y KPIs con responsables que rinden cuentas. Las marcas de correlación (●, ○) muestran qué proyecto apoya qué objetivo y quién es el responsable.</p><p>La <strong>cascada</strong> tiene cuatro capas típicas: Empresa (objetivos de largo plazo de 3 a 5 años), División/UN (X-Matrix anual + avances), Equipo (gráficos bowler trimestrales + A3s) e Individual (compromisos mensuales de proyecto). El <strong>proceso de Catchball</strong> es la negociación iterativa que alinea los niveles — los objetivos se trabajan hacia arriba y hacia abajo en la organización, no se dictan. Se ejecuta en rondas: un líder propone un objetivo y una meta; el equipo receptor responde con una evaluación de viabilidad — qué se necesitaría, qué desplazaría, qué meta es realista, y qué apoyo o recursos necesitan. El líder ajusta el objetivo, los recursos, o ambos, y se lo devuelve. Las rondas continúan hasta que tanto la meta como el plan para alcanzarla quedan acordados, de modo que el responsable acepta un compromiso que ayudó a moldear en lugar de uno impuesto. La convergencia se alcanza cuando cada objetivo tiene un responsable que está de acuerdo en que la meta es alcanzable con los recursos asignados; el desacuerdo persistente es una señal para replantear el objetivo o sacarlo del ciclo.</p><p><strong>Operaciones trimestrales:</strong> Cada equipo mantiene un gráfico Bowler — una tabla simple que muestra lo planeado vs. lo real por mes para cada KPI, con estado rojo/verde. Los KPIs en rojo reciben atención; los KPIs en rojo sin un plan escalan. La actualización anual desencadena otra ronda de Catchball y reinicio.</p><p><strong>Cuándo usarlo:</strong> Hoshin es adecuado para organizaciones maduras en CI donde el liderazgo quiere CI estratégico, no correcciones tácticas dispersas. Sáltalo en programas de etapa temprana — establece primero la disciplina PDCA y ejecuta algunos Kaizens. Hoshin formaliza lo que ya está sucediendo; no lo arranca de cero.</p>",
  csamExample: "<p>Un CSAM descubre que la organización de plataforma de un cliente tiene 47 iniciativas de mejora activas. Ninguna está atada a un resultado medible para el cliente ni a las metas de negocio declaradas del cliente (confiabilidad, reducción de costos, onboarding más rápido). El CSAM facilita una sesión de Hoshin que traduce en cascada la intención estratégica del cliente en 3 objetivos de avance anuales: 99.95% de confiabilidad en los 10 principales servicios, 25% de reducción del gasto en la nube, y tiempo de onboarding de 4 semanas a 1. Las 47 iniciativas se re-mapean: 18 apoyan uno de los 3 avances; 29 se pausan o se eliminan. El CSAM luego usa la X-Matrix en las revisiones trimestrales de negocio para mostrarle al cliente su progreso estratégico y alinear futuras mejoras de servicio con sus resultados.</p>",
  csaExample: "<p>Un CSA está diseñando un programa de confiabilidad de Azure de 12 meses para un cliente. En lugar de comenzar con un backlog de 12 proyectos DMAIC aislados (correcciones de registro, patrones de circuit breaker, ensayos de DR), el CSA facilita Hoshin para definir: Objetivo de largo plazo = confiabilidad líder en la industria. Avance anual = 99.95% de disponibilidad en los 10 principales servicios. Los proyectos de apoyo incluyen: 6 DMAIC (causa raíz en las principales firmas de incidentes), 3 Kaizen (reducción del trabajo tedioso de SRE), 1 programa (redundancia de zona de AKS + Azure Backup). La X-Matrix vincula cada proyecto DMAIC con el KPI (% de disponibilidad) y asigna un DRI por proyecto. Los gráficos bowler trimestrales muestran qué proyectos están en camino (verde) o retrasándose (rojo); los proyectos en rojo desencadenan escalamiento por capacidad de ingeniería o dependencias bloqueadas. Resultado de fin de año: 8 de los 10 principales servicios alcanzan la meta de 99.95.</p>",
  recap: [
    "Hoshin Kanri traduce 3 a 5 objetivos estratégicos en proyectos de mejora en cascada con propiedad explícita",
    "La X-Matrix (una página) vincula la visión de largo plazo, los avances anuales, los proyectos y los KPIs con marcas de correlación",
    "Catchball es la negociación iterativa de objetivos hacia arriba y hacia abajo en la organización — no un dictado de arriba hacia abajo",
    "Los gráficos bowler (lo planeado vs. lo real mensual por KPI) son el tablero operativo; los KPIs en rojo desencadenan escalamiento",
    "Usa Hoshin para organizaciones de CI maduras que buscan enfoque estratégico; sáltalo en programas de etapa temprana",
    "La actualización anual reinicia Catchball; las revisiones trimestrales defienden el enfoque contra la proliferación de iniciativas"
  ],
  questions: [
    {
      prompt: "¿Qué vincula la X-Matrix en Hoshin Kanri?",
      options: [
        "Presupuesto, cronograma, recursos y restricciones.",
        "Objetivos de largo plazo, avances anuales, proyectos de mejora y KPIs con responsables.",
        "Metas departamentales, objetivos de equipo, tareas individuales y calificaciones de desempeño.",
        "Datos históricos, línea base actual, metas de mejora y pronóstico."
      ],
      correctIndex: 1,
      explanation: "La X-Matrix es un diamante de una página que vincula <strong>objetivos de largo plazo (norte), avances anuales (sur), proyectos prioritarios (oeste) y KPIs / responsables (este)</strong>, con marcas de correlación que muestran qué proyecto apoya qué objetivo."
    },
    {
      prompt: "¿Cuántos objetivos de largo plazo debería tener típicamente un plan de Hoshin?",
      options: [
        "De 10 a 15 para asegurar una cobertura integral.",
        "De 25 a 30 para un enfoque de portafolio.",
        "De 3 a 5 para imponer el enfoque sobre el portafolio.",
        "De 1 a 2 para simplificar la toma de decisiones."
      ],
      correctIndex: 2,
      explanation: "Hoshin limita los objetivos estratégicos a <strong>3 a 5 por ciclo</strong> — enfoque sobre portafolio. Demasiados objetivos hacen que la estrategia sea incoherente."
    },
    {
      prompt: "¿Qué es el proceso de catchball en Hoshin Kanri?",
      options: [
        "Eslóganes de marketing para la estrategia.",
        "La negociación iterativa de objetivos hacia arriba y hacia abajo en la organización hasta alcanzar la alineación.",
        "La reunión de aprobación final donde el liderazgo firma el plan.",
        "La fase de implementación donde los equipos ejecutan sus proyectos asignados."
      ],
      correctIndex: 1,
      explanation: "Catchball es el <strong>proceso de negociación</strong> — objetivos propuestos hacia abajo, preocupaciones de viabilidad devueltas hacia arriba, iterando hasta alinear. La cascada no es un dictado de arriba hacia abajo."
    },
    {
      prompt: "¿Qué es el gráfico bowler en Hoshin Kanri?",
      options: [
        "Un gráfico que muestra la rotación del equipo y los horarios de guardia.",
        "Una tabla simple que da seguimiento a lo planeado vs. el desempeño real por mes para cada KPI.",
        "Una clasificación de empleados por calificaciones de desempeño.",
        "Una visualización de la asignación de recursos entre proyectos."
      ],
      correctIndex: 1,
      explanation: "El <strong>gráfico bowler</strong> es una tabla por KPI de lo planeado vs. lo real cada mes con estado rojo/verde. Es el tablero operativo de Hoshin, actualizado en las revisiones trimestrales."
    },
    {
      prompt: "¿Cuándo es Hoshin Kanri el enfoque correcto a usar?",
      options: [
        "Cuando estás en las etapas tempranas de establecer la disciplina de CI.",
        "Cuando un cliente maduro quiere CI estratégico atado a resultados medibles — no iniciativas tácticas dispersas.",
        "Cuando despliegas un solo proyecto de mejora a un equipo.",
        "Cuando necesitas responder rápidamente a problemas operativos urgentes."
      ],
      correctIndex: 1,
      explanation: "<strong>Hoshin es para programas de CI maduros</strong> donde el liderazgo quiere enfoque estratégico. Los programas de etapa temprana deberían establecer la disciplina PDCA y ejecutar primero algunos Kaizens; Hoshin formaliza lo que ya está sucediendo."
    }
  ]
},

"project-charter": {
  id: "project-charter",
  title: "Acta de Proyecto (Project Charter)",
  group: "Estrategia & Gobernanza",
  duration: "30 min",
  executiveSummary: "Un acta de proyecto (project charter) es un documento de autorización de una página que alinea al patrocinador, al líder, el alcance, la métrica de éxito, el cronograma y el equipo antes de que comience el trabajo de mejora. Previene la deriva del alcance al fijar el enunciado del problema, la meta y los límites con la firma del patrocinador — convirtiendo una intención ambigua en un contrato defendible.",
  whatYouGain: [
    "Detener la expansión del alcance: un enunciado del problema explícito y un alcance fijado defienden contra las solicitudes de 'ya que estamos aquí'",
    "Alinear el compromiso del patrocinador: la firma convierte una lista de deseos en una autorización vinculante",
    "Nombrar al equipo y el tiempo: asignaciones porcentuales realistas previenen proyectos con recursos insuficientes",
    "Definir el éxito por adelantado: metas medibles atadas al CTQ previenen una 'mejora' vaga",
    "Reutilizar el acta como el entregable de la fase Definir de DMAIC — sin ceremonia adicional"
  ],
  explanation: "<p>Un acta de proyecto (project charter) es un contrato de una página que autoriza un proyecto de mejora y alinea a su patrocinador, líder, alcance, métrica de éxito, cronograma y equipo antes de que comience el trabajo. La falla más común de los proyectos de mejora es la deriva del alcance — \"ya que estamos ahí, ¿podemos también...?\"; el acta es la respuesta institucional.</p><p><strong>Secciones estándar:</strong> Enunciado del problema (qué está mal, dónde, desde cuándo, magnitud), Caso de negocio (por qué importa ahora, valor en $ o estratégico, vínculo con COPQ), Meta (específica, medible, acotada en el tiempo), En alcance (qué se incluye, atado al SIPOC), Fuera de alcance (exclusiones explícitas — al menos 3), Equipo (líder, patrocinador, miembros, % de tiempo, asesores), Hitos/compuertas (fechas de Definir-Medir-Analizar-Mejorar-Controlar), Riesgos &amp; dependencias (los 3 a 5 principales, responsable de mitigación) y Firmas (patrocinador, líder, dueño del proceso).</p><p><strong>Cómo escribirla:</strong> Comienza con el enunciado del problema (específico, sin soluciones). Redacta el caso de negocio (átalo a dólares o a un objetivo estratégico). Establece la meta (SMART, extraída del CTQ si está disponible). Lista el alcance y las exclusiones explícitas (las exclusiones son tan importantes como las inclusiones). Nombra al equipo y un compromiso de tiempo realista. Establece hitos con fechas de compuerta. Lista los riesgos principales con responsables de mitigación. Consigue las firmas — sin ellas el acta es una lista de deseos.</p><p><strong>Antipatrón:</strong> nombrar una solución en el enunciado del problema (p. ej., \"Desplegar ArgoCD para mejorar los despliegues\"). Esto prejuzga la fase Analizar. Replantéalo como el problema (\"El tiempo medio de despliegue es 47 min vs. la meta de 10 min\") y deja que DMAIC encuentre la contramedida correcta.</p><p><strong>Cuándo omitirla:</strong> Las actas son excesivas para correcciones del mismo día y ciclos PDCA independientes de un solo ingeniero. Úsalas para la fase Definir de DMAIC, el trabajo previo de Kaizen (3+ días), proyectos entre equipos y la certificación de Belt.</p>",
  csamExample: "<p>Un CSAM está definiendo el alcance de un compromiso de mejora de 12 semanas con el equipo de plataforma de pagos de un cliente. El equipo tiene tres líderes diferentes y tres expectativas diferentes de lo que significa 'checkout más rápido'. En lugar de 6 semanas de retrabajo, el CSAM insiste en un taller de redacción del acta: alineación del patrocinador, enunciado del problema (TE actual de checkout = 387 seg vs. meta de 90 seg, 4 despliegues/semana vs. meta de 8/día), caso de negocio ($600K/trimestre en carritos abandonados), meta (TE ≤90 min, 4 despliegues/día, 90 días), alcance (flujo de checkout + CI/CD, no la integración del procesador de pagos) y compromiso del equipo (líder + 2 ingenieros al 50% cada uno). Las firmas fijan a todos. El ejercicio del acta en sí mismo resuelve las tres expectativas diferentes; las siguientes 4 semanas entregan el proyecto real. El CSAM luego usa el acta en el QBR de 90 días para mostrar el progreso contra la meta acordada y el caso de negocio.</p>",
  csaExample: "<p>Un CSA está definiendo un proyecto DMAIC para corregir las fallas de ImagePullBackOff que causan el 41% de los incidentes de AKS del cliente. Enunciado del problema: 'La firma ImagePullBackOff = 41% de los incidentes, 18 ocurrencias/semana, costando $85K/mes en respuesta a incidentes.' Caso de negocio: 'Corrección vinculada al objetivo de confiabilidad de Hoshin; cero de esta firma = ganancia de disponibilidad no planeada.' Meta: 'Cero firmas de ImagePullBackOff, 90 días.' Alcance: 'Fallas de autenticación del registro, problemas de manifiesto de imagen, límites de cuota.' Fuera de alcance: 'Otras firmas de falla de pods (proyectos separados), escaneo de imágenes.' Equipo: 'Líder SRE (100%), Ingeniero de plataforma (50%), CSA (asesoría).' Hitos: Definir (semana 1), Medir (semana 3), Analizar (semana 6), Mejorar (semana 10), Controlar (semana 12). Riesgo: 'Capacidad del equipo de registro — responsable de mitigación = líder SRE.' Acta firmada por el VP de plataforma, el líder SRE y el CTO. La revisión trimestral muestra 8 semanas hasta cero incidentes; la fase Controlar establece monitoreo y runbook.</p>",
  recap: [
    "El acta de proyecto es un contrato de una página que autoriza un proyecto y fija el compromiso del patrocinador con firmas",
    "Secciones estándar: enunciado del problema, caso de negocio, meta (SMART), alcance, fuera de alcance explícito, equipo, hitos, riesgos",
    "Antipatrón: nombrar una solución en el enunciado del problema — deja que la fase Analizar de DMAIC descubra la contramedida correcta",
    "Los elementos fuera de alcance explícitos son tan importantes como las inclusiones — defienden contra la expansión del alcance meses después",
    "Usa actas para la fase Definir de DMAIC, el trabajo previo de Kaizen, proyectos entre equipos y proyectos de certificación de Belt",
    "Sin la firma del patrocinador el acta es una lista de deseos — las firmas convierten la intención en un compromiso vinculante"
  ],
  questions: [
    {
      prompt: "¿Cuál es la falla más común de los proyectos de mejora que previene un acta de proyecto?",
      options: [
        "Presupuesto insuficiente para el proyecto.",
        "Deriva del alcance — solicitudes de \"ya que estamos ahí, ¿podemos también...\".",
        "Aprobación lenta del liderazgo.",
        "Falta de talento técnico en el equipo."
      ],
      correctIndex: 1,
      explanation: "El acta obliga a un enunciado del problema, una meta y un alcance explícitos <em>antes</em> de que comience el trabajo y fija el compromiso del patrocinador con una firma. Es la respuesta a la <strong>deriva del alcance</strong> posterior."
    },
    {
      prompt: "¿Qué elemento es esencial incluir en el acta — incluso si el equipo quiere omitirlo?",
      options: [
        "Lineamientos de marca y plantillas de diapositivas.",
        "Elementos Fuera de Alcance explícitos (al menos tres).",
        "Una línea de tiempo histórica de cada intento previo.",
        "Las direcciones de correo de cada parte interesada individual."
      ],
      correctIndex: 1,
      explanation: "Las <strong>exclusiones explícitas son tan importantes como las inclusiones</strong>. Previenen la expansión del alcance de \"ya que estamos aquí\" y hacen que los límites sean exigibles meses después cuando llegan nuevas solicitudes."
    },
    {
      prompt: "¿Cuál es un antipatrón al escribir el enunciado del problema en un acta?",
      options: [
        "Indicar la magnitud (tamaño, frecuencia, cuándo comenzó).",
        "Vincular el caso de negocio con el COPQ.",
        "Nombrar la solución en el enunciado del problema — p. ej., \"Desplegar ArgoCD para mejorar los despliegues.\"",
        "Atar la meta a un CTQ."
      ],
      correctIndex: 2,
      explanation: "Nombrar una solución <strong>prejuzga la fase Analizar</strong>. Replantéalo como el problema (\"los despliegues tardan demasiado — media de 47 min vs. meta de 10 min\") y deja que DMAIC encuentre la contramedida correcta."
    },
    {
      prompt: "¿Cuándo es típicamente excesiva un acta de proyecto?",
      options: [
        "La fase Definir de DMAIC.",
        "Eventos Kaizen que duran 3+ días.",
        "Una corrección del mismo día o un ciclo PDCA independiente de un solo ingeniero.",
        "Proyectos de certificación de Belt (Green/Black)."
      ],
      correctIndex: 2,
      explanation: "Las actas son obligatorias para DMAIC, el trabajo previo de Kaizen y los proyectos entre equipos. Son <strong>excesivas para correcciones del mismo día</strong> y ciclos PDCA en solitario — la ceremonia debe coincidir con la escala."
    },
    {
      prompt: "¿Por qué importan las firmas (patrocinador, líder, dueño del proceso) en un acta?",
      options: [
        "Satisfacen un requisito de auditoría de cumplimiento.",
        "Sin ellas el acta es una lista de deseos — las firmas fijan el compromiso del patrocinador y desbloquean al equipo para invertir ciclos.",
        "Se necesitan para publicar en la intranet de la empresa.",
        "Prueban que el equipo leyó el documento."
      ],
      correctIndex: 1,
      explanation: "Las firmas convierten un borrador en un <strong>compromiso</strong>. El patrocinador acepta despejar bloqueos; el líder es dueño de la entrega; el dueño del proceso acepta el proceso controlado. Sin estas, el acta es decoración."
    }
  ]
},
};
