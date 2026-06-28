(function () {
  const storageKey = "valmore-language";
  const languages = {
    es: { code: "ES", flag: "🇦🇷", label: "Español" },
    en: { code: "EN", flag: "🇺🇸", label: "English" },
    zh: { code: "中文", flag: "🇨🇳", label: "中文" }
  };

  const dictionary = {
    en: {
      "Experiencias": "Experiences",
      "Experiencias web": "Web experiences",
      "Experiencias Valmoré": "Valmoré Experiences",
      "¿Qué comemos hoy?": "What are we eating tonight?",
      "Caso Valmorè 001": "Valmorè Case 001",
      "Vinos": "Wines",
      "Valmoré Origine": "Valmoré Origine",
      "Valmoré Alliance": "Valmoré Alliance",
      "Valmoré AEVUM": "Valmoré AEVUM",
      "Catas": "Tastings",
      "Experiencia para equipos": "Team experience",
      "Contacto": "Contact",
      "Home": "Home",
      "Volver al inicio": "Back to home",
      "Volver al home": "Back home",
      "Ver vinos": "View wines",
      "Contactanos": "Contact us",
      "Contáctanos": "Contact us",

      "Hogar · Conversación · Experiencia": "Home · Conversation · Experience",
      "Una noche para conectar": "A night to connect",
      "Origine": "Origine",
      "Origine Malbec": "Origine Malbec",
      "Una copa, una historia y una excusa elegante para apagar el ruido, sentarse cerca y dejar que la conversación empiece.": "A glass, a story and an elegant excuse to turn down the noise, sit closer and let the conversation begin.",
      "Cosecha": "Vintage",
      "Alcohol": "Alcohol",
      "Origen": "Origin",
      "Crianza": "Aging",
      "Valle de Uco": "Uco Valley",
      "Valle de Uco, Mendoza": "Uco Valley, Mendoza",
      "Roble francés": "French oak",
      "Viví la experiencia": "Live the experience",
      "Ficha Técnica": "Technical Sheet",
      "Ficha técnica": "Technical sheet",
      "Clima de origen": "Origin weather",
      "No es solo una cata": "It is not just a tasting",
      "Es una excusa para volver a mirarse a la cara.": "It is an excuse to look at each other again.",
      "La copa acompaña. Lo importante es la mesa: una pregunta, una receta, un juego o una historia que abre conversación.": "The glass accompanies. What matters is the table: a question, a recipe, a game or a story that opens conversation.",
      "Hogar": "Home",
      "Una noche lista": "A ready-made night",
      "Experiencias simples para vivir desde el celular o llevar a la Smart TV mientras se comparte una copa.": "Simple experiences to enjoy from your phone or bring to the Smart TV while sharing a glass.",
      "Vinculos": "Bonds",
      "Conversar mejor": "Better conversations",
      "Actividades que ayudan a bajar el ruido, jugar, cocinar, descubrir y abrir temas que normalmente quedan pendientes.": "Activities that help lower the noise, play, cook, discover and open topics that usually stay pending.",
      "Escala": "Scale",
      "Comunidad viva": "Living community",
      "Casos, catas, ruletas y futuras experiencias para equipos, bodegas invitadas y encuentros que puedan viajar.": "Cases, tastings, roulettes and future experiences for teams, invited wineries and gatherings that can travel.",
      "Un Malbec de": "A Malbec with",
      "carácter singular": "singular character",
      "Varietal": "Varietal",
      "Malbec 100%": "100% Malbec",
      "2ª semana de marzo, 2023": "2nd week of March, 2023",
      "Viñedo": "Vineyard",
      "Manual con tijeras, cajas de 15 kg": "Hand-picked with shears, 15 kg boxes",
      "Roble francés, breve paso": "French oak, brief aging",
      "Producción limitada": "Limited production",
      "Las uvas ingresan al tanque de acero inoxidable bajo frío para una gran extracción de precursores de aromas y color. Fermentación a 24-26°C durante diez días, luego separada de sus hollejos para preservar la fruta. Un breve paso por barricas de roble francés aporta la complejidad justa.": "The grapes enter stainless steel tanks under cold conditions to extract aroma and color precursors. Fermentation takes place at 24-26°C for ten days, then the wine is separated from the skins to preserve fruit expression. A brief passage through French oak barrels adds just the right complexity.",
      "Notas de Cata": "Tasting Notes",
      "Notas de cata": "Tasting notes",
      "La experiencia": "The experience",
      "en copa": "in the glass",
      "Intenso color violáceo con destellos rojos brillantes que aportan vivacidad. Cada sorbo revela capas: la fruta, la flor, y la madera en perfecto equilibrio.": "An intense violet color with bright red flashes that bring vitality. Each sip reveals layers: fruit, flowers and oak in perfect balance.",
      "TEMPERATURA DE SERVICIO: 14°C - 16°C": "SERVING TEMPERATURE: 14°C - 16°C",
      "Vista": "Appearance",
      "Aroma": "Aroma",
      "Nariz": "Nose",
      "Boca": "Palate",
      "Color violáceo intenso con destellos rojos de gran vivacidad y limpieza.": "Intense violet color with vivid, clean red highlights.",
      "Ciruelas frescas, notas florales de violetas y un sutil toque de roble que aporta complejidad.": "Fresh plums, violet floral notes and a subtle oak touch that adds complexity.",
      "Taninos suaves y redondeados, volumen elegante y una agradable persistencia. Moderno y de gran frescura.": "Soft, rounded tannins, elegant volume and pleasant persistence. Modern and remarkably fresh.",
      "Del": "From",
      "a su mesa": "to your table",
      "El Valle de Uco, en el corazón de Mendoza, es reconocido como uno de los terruños más prestigiosos del mundo para el Malbec. La altura, la amplitud térmica y los suelos pedregosos crean condiciones únicas para una fruta de expresión intensa y estructura refinada.": "The Uco Valley, in the heart of Mendoza, is recognized as one of the world’s most prestigious terroirs for Malbec. Altitude, thermal range and stony soils create unique conditions for intense fruit and refined structure.",
      "Región": "Region",
      "País": "Country",
      "Argentina": "Argentina",
      "Marca": "Brand",
      "Tipo": "Type",
      "Manual · 2023": "Hand-picked · 2023",

      "Armemos una noche": "Let’s create a night",
      "con historia": "with a story",
      "Armemos una noche con historia": "Let’s create a night with a story",
      "Pedí una muestra, proponé una bodega o conversemos una experiencia para tu casa, tu equipo o tu comunidad.": "Ask for a sample, propose a winery or let’s talk about an experience for your home, team or community.",
      "No completar este campo:": "Do not complete this field:",
      "Quiero consultar por": "I want to ask about",
      "Quiero comprar y vivir la experiencia en casa": "I want to buy and live the experience at home",
      "Tengo una bodega y quiero sumarme a Valmore": "I have a winery and want to join Valmore",
      "Quiero una experiencia para empresa o grupo": "I want an experience for a company or group",
      "Iniciar Conversación": "Start Conversation",
      "Una copa, una historia y una excusa elegante para volver a conversar.": "A glass, a story and an elegant excuse to talk again.",
      "Explorar": "Explore",
      "¿Querés sumar tu bodega?": "Want to add your winery?",
      "Beber con moderación. Prohibida la venta de alcohol a menores de 18 años.": "Drink responsibly. Alcohol sales to people under 18 are prohibited.",
      "Valmoré promueve experiencias responsables para mayores de edad.": "Valmoré promotes responsible experiences for adults.",
      "© 2025 Valmoré · Argentina": "© 2025 Valmoré · Argentina",

      "Bodegas que quieren jugar": "Wineries ready to play",
      "Experiencias colaborativas": "Collaborative experiences",
      "Valmore": "Valmore",
      "¿Tenés una bodega o una idea para sumar? Buscamos etiquetas que quieran convertirse en juego, historia y encuentro.": "Do you have a winery or an idea to add? We are looking for labels that want to become a game, a story and a gathering.",
      "Convocatoria abierta": "Open call",
      "Abierto": "Open",
      "Colaboración": "Collaboration",

      "Sobremesas que se alargan": "Dessert tables that linger",
      "Mendoza · Malbec dulce": "Mendoza · Sweet Malbec",
      "Alliance Malbec Dulce": "Alliance Sweet Malbec",
      "Fruta madura y final suave para postres simples, charlas largas y ese momento donde nadie quiere levantarse de la mesa.": "Ripe fruit and a smooth finish for simple desserts, long conversations and that moment when nobody wants to leave the table.",
      "No disponible": "Not available",
      "Próximamente": "Coming soon",
      "Dulce": "Sweet",
      "Mendoza": "Mendoza",
      "Perfil joven": "Young profile",
      "Cenas con carácter": "Dinners with character",
      "Mendoza · Cabernet Sauvignon": "Mendoza · Cabernet Sauvignon",
      "AEVUM Cabernet Sauvignon": "AEVUM Cabernet Sauvignon",
      "Estructura, especias y final persistente para platos intensos, equipos chicos y conversaciones que piden otra vuelta.": "Structure, spice and a persistent finish for intense dishes, small teams and conversations that ask for another round.",
      "Un Cabernet profundo para carnes, quesos y conversaciones con más tiempo. La copa acompaña sin apurar la noche.": "A deep Cabernet for meats, cheeses and conversations with more time. The glass accompanies without rushing the night.",
      "Selección especial": "Special selection",

      "Ruleta Valmorè": "Valmorè Roulette",
      "Elegí la cena en 1 giro": "Choose dinner in 1 spin",
      "¿Qué experiencia cocinamos esta noche?": "What experience are we cooking tonight?",
      "¿Qué cocinamos hoy?": "What are we cooking today?",
      "Girás, descubrís una receta y la acompañás con una copa de Valmorè.": "Spin, discover a recipe and pair it with a glass of Valmorè.",
      "Mirá las opciones": "See the options",
      "Girá la ruleta": "Spin the roulette",
      "Abrí la receta": "Open the recipe",
      "Girar ahora": "Spin now",
      "Girando...": "Spinning...",
      "Ver opciones": "View options",
      "Ocultar opciones": "Hide options",
      "Tocá una vez. La ruleta elige por vos y te muestra la receta.": "Tap once. The roulette chooses for you and shows the recipe.",
      "Opciones posibles": "Possible options",
      "Si preferís mantener la sorpresa, podés dejar esta lista cerrada.": "If you prefer to keep the surprise, you can leave this list closed.",
      "Todavía no giraste. Cuando salga una opción, vas a ver el plato recomendado acá.": "You have not spun yet. When an option comes up, you will see the recommended dish here.",
      "La ruleta está eligiendo plato, ritmo y excusa para conversar...": "The roulette is choosing a dish, a rhythm and an excuse to talk...",
      "La ruleta eligió por vos": "The roulette chose for you",
      "Resultado de la noche": "Tonight’s result",
      "Receta desbloqueada": "Recipe unlocked",
      "Mini misión Valmorè": "Mini Valmorè mission",
      "Juego de mesa": "Table game",
      "Tiempo": "Time",
      "Dificultad": "Difficulty",
      "Maridaje": "Pairing",
      "Valmorè Origine Malbec 2023": "Valmorè Origine Malbec 2023",
      "Ver receta completa": "See full recipe",
      "Girar nuevamente": "Spin again",
      "Ingredientes": "Ingredients",
      "Preparación paso a paso": "Step-by-step preparation",
      "Recomendación de maridaje": "Pairing recommendation",
      "Volver a la ruleta": "Back to the roulette",

      "Salmón con puré rústico": "Salmon with rustic mash",
      "Una cena elegante, simple y lista en menos de 40 minutos.": "An elegant, simple dinner ready in under 40 minutes.",
      "40 minutos": "40 minutes",
      "Fácil": "Easy",
      "2 filetes de salmón": "2 salmon fillets",
      "4 papas medianas": "4 medium potatoes",
      "1 cucharada de manteca": "1 tablespoon butter",
      "Aceite de oliva": "Olive oil",
      "Ralladura de limón": "Lemon zest",
      "Sal, pimienta y hierbas frescas": "Salt, pepper and fresh herbs",
      "Herví las papas con sal hasta que estén tiernas.": "Boil the potatoes with salt until tender.",
      "Pisalas de forma rústica con manteca, aceite de oliva y pimienta.": "Mash them roughly with butter, olive oil and pepper.",
      "Sellá el salmón en sartén caliente, primero del lado de la piel.": "Sear the salmon in a hot pan, skin side first.",
      "Terminá con ralladura de limón y hierbas frescas.": "Finish with lemon zest and fresh herbs.",
      "Serví el salmón sobre el puré y acompañá con una copa de Malbec.": "Serve the salmon over the mash and pair with a glass of Malbec.",
      "Cada persona cuenta una buena noticia de la semana antes del primer brindis.": "Each person shares good news from the week before the first toast.",

      "Brie fundido con pan tostado": "Melted brie with toasted bread",
      "El clásico que parece sofisticado y se prepara en minutos.": "The classic that looks sophisticated and takes minutes.",
      "15 minutos": "15 minutes",
      "Muy fácil": "Very easy",
      "1 queso brie pequeño": "1 small brie cheese",
      "Pan de campo o baguette": "Country bread or baguette",
      "Miel": "Honey",
      "Nueces tostadas": "Toasted walnuts",
      "Romero fresco": "Fresh rosemary",
      "Pimienta negra": "Black pepper",
      "Colocá el brie en una fuente chica apta para horno.": "Place the brie in a small ovenproof dish.",
      "Sumá miel, nueces, romero y pimienta.": "Add honey, walnuts, rosemary and pepper.",
      "Horneá hasta que el centro esté cremoso.": "Bake until the center is creamy.",
      "Tostá el pan en rodajas finas.": "Toast thin slices of bread.",
      "Serví caliente para compartir al centro de la mesa.": "Serve warm in the center of the table.",
      "Modo picada: alguien propone una pregunta inesperada y nadie puede responder con una sola palabra.": "Appetizer mode: someone asks an unexpected question and nobody can answer with just one word.",

      "Pastas con camarones": "Pasta with shrimp",
      "Una combinación perfecta entre cocina italiana y sabores del mar.": "A perfect combination of Italian cooking and flavors from the sea.",
      "30 minutos": "30 minutes",
      "Media": "Medium",
      "250 g de pasta larga": "250 g long pasta",
      "300 g de camarones limpios": "300 g cleaned shrimp",
      "2 dientes de ajo": "2 garlic cloves",
      "Tomates cherry": "Cherry tomatoes",
      "Perejil fresco": "Fresh parsley",
      "Sal y pimienta": "Salt and pepper",
      "Cociná la pasta al dente y reservá un poco de agua de cocción.": "Cook the pasta al dente and reserve some cooking water.",
      "Salteá ajo en aceite de oliva sin quemarlo.": "Sauté garlic in olive oil without burning it.",
      "Sumá los camarones y cociná apenas hasta que cambien de color.": "Add the shrimp and cook just until they change color.",
      "Agregá tomates cherry y la pasta.": "Add cherry tomatoes and pasta.",
      "Terminá con perejil, pimienta y un toque del agua reservada.": "Finish with parsley, pepper and a splash of reserved water.",
      "Elegí una canción para cocinar. Si la mesa aprueba, se convierte en himno de la noche.": "Choose a song to cook to. If the table approves, it becomes the anthem of the night.",

      "Carne al vino con papines": "Beef in wine with baby potatoes",
      "Una experiencia cálida para una noche larga de conversación.": "A warm experience for a long night of conversation.",
      "60 minutos": "60 minutes",
      "Alta": "High",
      "600 g de carne para cocción lenta": "600 g slow-cooking beef",
      "1 copa de Malbec": "1 glass of Malbec",
      "Papines": "Baby potatoes",
      "Cebolla": "Onion",
      "Zanahoria": "Carrot",
      "Caldo": "Stock",
      "Laurel, sal y pimienta": "Bay leaf, salt and pepper",
      "Sellá la carne en una olla pesada hasta dorar.": "Sear the beef in a heavy pot until browned.",
      "Agregá cebolla y zanahoria picadas.": "Add chopped onion and carrot.",
      "Desglasá con vino y dejá evaporar el alcohol.": "Deglaze with wine and let the alcohol evaporate.",
      "Sumá caldo, laurel y cociná lento hasta tiernizar.": "Add stock and bay leaf, then cook slowly until tender.",
      "Horneá o herví los papines y serví con la salsa reducida.": "Bake or boil the baby potatoes and serve with the reduced sauce.",
      "Cena larga: cada copa habilita una historia que nadie de la mesa conozca todavía.": "Long dinner: each glass unlocks a story nobody at the table has heard yet.",

      "Risotto de hongos": "Mushroom risotto",
      "Cremoso, elegante y sorprendentemente fácil de preparar.": "Creamy, elegant and surprisingly easy to prepare.",
      "45 minutos": "45 minutes",
      "300 g de arroz carnaroli o arborio": "300 g carnaroli or arborio rice",
      "Hongos frescos": "Fresh mushrooms",
      "Caldo caliente": "Hot stock",
      "Manteca": "Butter",
      "Queso parmesano": "Parmesan cheese",
      "Salteá los hongos y reservalos.": "Sauté the mushrooms and reserve.",
      "Transparentá cebolla picada con un poco de manteca.": "Soften chopped onion with a little butter.",
      "Agregá el arroz y nacaralo durante un minuto.": "Add the rice and toast it for one minute.",
      "Incorporá caldo caliente de a poco, revolviendo.": "Add hot stock little by little, stirring.",
      "Terminá con hongos, manteca, parmesano y pimienta.": "Finish with mushrooms, butter, parmesan and pepper.",
      "Ronda cremosa: cada persona nombra una idea que quiere cocinar este año, literal o simbólicamente.": "Creamy round: each person names an idea they want to cook this year, literally or symbolically.",
      "Serví Valmorè Origine Malbec 2023 apenas refrescado. Su fruta roja y estructura acompañan la receta sin tapar la conversación.": "Serve Valmorè Origine Malbec 2023 slightly chilled. Its red fruit and structure support the recipe without covering the conversation.",

      "Experiencia web en preparación": "Web experience in preparation",
      "Caso Valmorè 001 - Próximamente": "Valmorè Case 001 - Coming Soon",
      "Un misterio interactivo para jugar desde casa, conversar entre pistas y convertir la copa en una excusa para investigar juntos.": "An interactive mystery to play from home, talk between clues and turn the glass into an excuse to investigate together.",
      "Avisame cuando esté listo": "Let me know when it is ready",
      "Experiencias Valmoré - En preparación": "Valmoré Experiences - In Preparation",
      "Estamos preparando nuevas formas de compartir una copa, una historia y una conversación desde casa.": "We are preparing new ways to share a glass, a story and a conversation from home.",
      "Origen Valmoré - En preparación": "Valmoré Origin - In Preparation",
      "Origen en preparación": "Origin in preparation",
      "Pronto vamos a contar el recorrido de la copa: tierra, altura, tiempo y personas detrás de cada encuentro.": "Soon we will tell the journey behind the glass: land, altitude, time and the people behind each gathering.",
      "Mensaje recibido": "Message received",
      "Gracias por tu consulta": "Thank you for your inquiry",
      "Recibimos tu mensaje y vamos a responderte a la brevedad para seguir pensando esa experiencia juntos.": "We received your message and will reply shortly so we can keep shaping that experience together.",
      "Volver a Valmoré": "Back to Valmoré",

      "Catas para empresas": "Corporate tastings",
      "Una experiencia para que el equipo vuelva a conversar.": "An experience for teams to talk again.",
      "Diseñamos encuentros con vino, dinámica guiada y conversación real: menos presentación corporativa, más mesa compartida.": "We design gatherings with wine, guided dynamics and real conversation: less corporate presentation, more shared table.",
      "Consultar experiencia": "Ask about the experience",
      "Ver formatos": "See formats",
      "Una copa como excusa para abrir ideas, acuerdos y momentos de equipo.": "A glass as an excuse to open ideas, agreements and team moments.",
      "Qué ofrecemos": "What we offer",
      "Cata, conversación y pertenencia.": "Tasting, conversation and belonging.",
      "Cata guiada": "Guided tasting",
      "Una introducción simple al vino, sin tecnicismos innecesarios, para que todos puedan participar.": "A simple introduction to wine, without unnecessary technicalities, so everyone can participate.",
      "Dinámica de equipo": "Team dynamic",
      "Preguntas y consignas pensadas para romper automatismos y abrir conversaciones valiosas.": "Questions and prompts designed to break autopilot and open valuable conversations.",
      "Ritual compartido": "Shared ritual",
      "Un momento cuidado para celebrar cierres, lanzamientos, onboarding o reuniones de liderazgo.": "A thoughtful moment to celebrate closings, launches, onboarding or leadership meetings.",
      "Formato flexible": "Flexible format",
      "La experiencia puede adaptarse para equipos internos, clientes especiales o encuentros de marca.": "The experience can adapt to internal teams, special clients or brand gatherings.",
      "Cómo funciona": "How it works",
      "Simple para contratar, memorable para vivir.": "Simple to book, memorable to live.",
      "Definimos el objetivo del encuentro: integración, celebración, creatividad, liderazgo o vínculo con clientes.": "We define the gathering’s objective: integration, celebration, creativity, leadership or client bonding.",
      "Armamos una propuesta de cata con duración, cantidad de participantes y tono de la experiencia.": "We build a tasting proposal with duration, number of participants and tone of the experience.",
      "Preparamos el guion de conversación y los momentos clave para que la actividad tenga ritmo.": "We prepare the conversation script and key moments so the activity has rhythm.",
      "Cerramos con una invitación a seguir conversando: ideas, acuerdos o próximos encuentros.": "We close with an invitation to keep talking: ideas, agreements or next gatherings.",
      "Para empresas y equipos": "For companies and teams",
      "Si querés unir a un equipo, agasajar clientes o crear una noche distinta dentro de tu organización, usamos el mismo canal de contacto para entender tu caso y armar la propuesta.": "If you want to bring a team together, host clients or create a different night inside your organization, we use the same contact channel to understand your case and build the proposal.",
      "Quiero consultar": "I want to inquire",

      "Email de contacto": "Contact email",
      "Teléfono / WhatsApp": "Phone / WhatsApp",
      "Nombre": "Name",
      "Mensaje": "Message"
    },
    zh: {
      "Experiencias": "体验",
      "Experiencias web": "线上体验",
      "Experiencias Valmoré": "Valmoré 体验",
      "¿Qué comemos hoy?": "今晚吃什么？",
      "Caso Valmorè 001": "Valmorè 案件 001",
      "Vinos": "葡萄酒",
      "Valmoré Origine": "Valmoré Origine",
      "Valmoré Alliance": "Valmoré Alliance",
      "Valmoré AEVUM": "Valmoré AEVUM",
      "Catas": "品鉴",
      "Experiencia para equipos": "团队体验",
      "Contacto": "联系",
      "Home": "首页",
      "Volver al inicio": "返回首页",
      "Volver al home": "返回首页",
      "Ver vinos": "查看葡萄酒",
      "Contactanos": "联系我们",
      "Contáctanos": "联系我们",

      "Hogar · Conversación · Experiencia": "家 · 对话 · 体验",
      "Una noche para conectar": "一个重新连接的夜晚",
      "Origine": "Origine",
      "Origine Malbec": "Origine 马尔贝克",
      "Una copa, una historia y una excusa elegante para apagar el ruido, sentarse cerca y dejar que la conversación empiece.": "一杯酒，一个故事，一个优雅的理由：关掉噪音，坐近一点，让对话开始。",
      "Cosecha": "年份",
      "Alcohol": "酒精度",
      "Origen": "产地",
      "Crianza": "陈酿",
      "Valle de Uco": "乌科谷",
      "Valle de Uco, Mendoza": "门多萨乌科谷",
      "Roble francés": "法国橡木",
      "Viví la experiencia": "体验这一晚",
      "Ficha Técnica": "技术资料",
      "Ficha técnica": "技术资料",
      "Clima de origen": "产地天气",
      "No es solo una cata": "这不只是一场品鉴",
      "Es una excusa para volver a mirarse a la cara.": "这是一个重新面对面交流的理由。",
      "La copa acompaña. Lo importante es la mesa: una pregunta, una receta, un juego o una historia que abre conversación.": "酒杯只是陪伴。真正重要的是餐桌：一个问题、一道菜、一个游戏或一个能打开对话的故事。",
      "Hogar": "家庭",
      "Una noche lista": "准备好的一晚",
      "Experiencias simples para vivir desde el celular o llevar a la Smart TV mientras se comparte una copa.": "简单的体验，可以在手机上进行，也可以投到智能电视上，一边分享一杯酒。",
      "Vinculos": "联结",
      "Conversar mejor": "更好地对话",
      "Actividades que ayudan a bajar el ruido, jugar, cocinar, descubrir y abrir temas que normalmente quedan pendientes.": "这些活动帮助降低噪音，一起玩、一起做饭、一起发现，并开启平常被搁置的话题。",
      "Escala": "规模",
      "Comunidad viva": "活跃社区",
      "Casos, catas, ruletas y futuras experiencias para equipos, bodegas invitadas y encuentros que puedan viajar.": "案件、品鉴、转盘，以及面向团队、受邀酒庄和可复制聚会的未来体验。",
      "Un Malbec de": "一款拥有",
      "carácter singular": "独特个性的马尔贝克",
      "Varietal": "葡萄品种",
      "Malbec 100%": "100% 马尔贝克",
      "2ª semana de marzo, 2023": "2023 年 3 月第二周",
      "Viñedo": "葡萄园",
      "Manual con tijeras, cajas de 15 kg": "手工剪采，15 公斤箱装",
      "Roble francés, breve paso": "短暂法国橡木陈酿",
      "Producción limitada": "限量生产",
      "Las uvas ingresan al tanque de acero inoxidable bajo frío para una gran extracción de precursores de aromas y color. Fermentación a 24-26°C durante diez días, luego separada de sus hollejos para preservar la fruta. Un breve paso por barricas de roble francés aporta la complejidad justa.": "葡萄在低温条件下进入不锈钢罐，以萃取香气与色泽前体。发酵温度为 24-26°C，持续十天，随后与果皮分离以保留果香。短暂经过法国橡木桶，带来恰到好处的复杂度。",
      "Notas de Cata": "品鉴笔记",
      "Notas de cata": "品鉴笔记",
      "La experiencia": "杯中的",
      "en copa": "体验",
      "Intenso color violáceo con destellos rojos brillantes que aportan vivacidad. Cada sorbo revela capas: la fruta, la flor, y la madera en perfecto equilibrio.": "浓郁紫色，带明亮红色闪光，充满活力。每一口都呈现层次：果香、花香与橡木达到平衡。",
      "TEMPERATURA DE SERVICIO: 14°C - 16°C": "建议侍酒温度：14°C - 16°C",
      "Vista": "外观",
      "Aroma": "香气",
      "Nariz": "闻香",
      "Boca": "口感",
      "Color violáceo intenso con destellos rojos de gran vivacidad y limpieza.": "浓郁紫色，带鲜活而清澈的红色光泽。",
      "Ciruelas frescas, notas florales de violetas y un sutil toque de roble que aporta complejidad.": "新鲜李子、紫罗兰花香，以及带来复杂度的细腻橡木气息。",
      "Taninos suaves y redondeados, volumen elegante y una agradable persistencia. Moderno y de gran frescura.": "单宁柔和圆润，酒体优雅，余味愉悦持久。现代而清新。",
      "Del": "从",
      "a su mesa": "到你的餐桌",
      "El Valle de Uco, en el corazón de Mendoza, es reconocido como uno de los terruños más prestigiosos del mundo para el Malbec. La altura, la amplitud térmica y los suelos pedregosos crean condiciones únicas para una fruta de expresión intensa y estructura refinada.": "位于门多萨核心地带的乌科谷，被认为是世界上最适合马尔贝克的顶级风土之一。海拔、昼夜温差与砾石土壤，造就了浓郁果香与精致结构。",
      "Región": "产区",
      "País": "国家",
      "Argentina": "阿根廷",
      "Marca": "品牌",
      "Tipo": "类型",
      "Manual · 2023": "手工采收 · 2023",

      "Armemos una noche": "一起设计一个",
      "con historia": "有故事的夜晚",
      "Armemos una noche con historia": "一起设计一个有故事的夜晚",
      "Pedí una muestra, proponé una bodega o conversemos una experiencia para tu casa, tu equipo o tu comunidad.": "申请样品、推荐酒庄，或和我们聊聊适合你家、团队或社群的体验。",
      "No completar este campo:": "请勿填写此字段：",
      "Quiero consultar por": "我想咨询",
      "Quiero comprar y vivir la experiencia en casa": "我想购买并在家体验",
      "Tengo una bodega y quiero sumarme a Valmore": "我有酒庄，想加入 Valmore",
      "Quiero una experiencia para empresa o grupo": "我想为公司或团体定制体验",
      "Iniciar Conversación": "开始对话",
      "Una copa, una historia y una excusa elegante para volver a conversar.": "一杯酒，一个故事，一个重新对话的优雅理由。",
      "Explorar": "探索",
      "¿Querés sumar tu bodega?": "想加入你的酒庄吗？",
      "Beber con moderación. Prohibida la venta de alcohol a menores de 18 años.": "请适量饮酒。禁止向 18 岁以下人士销售酒精。",
      "Valmoré promueve experiencias responsables para mayores de edad.": "Valmoré 倡导面向成年人的负责任体验。",
      "© 2025 Valmoré · Argentina": "© 2025 Valmoré · 阿根廷",

      "Bodegas que quieren jugar": "想一起创造体验的酒庄",
      "Experiencias colaborativas": "合作体验",
      "Valmore": "Valmore",
      "¿Tenés una bodega o una idea para sumar? Buscamos etiquetas que quieran convertirse en juego, historia y encuentro.": "你有酒庄或想法吗？我们寻找愿意把酒标变成游戏、故事与相聚体验的伙伴。",
      "Convocatoria abierta": "开放合作",
      "Abierto": "开放",
      "Colaboración": "合作",
      "Sobremesas que se alargan": "延长的餐后时光",
      "Mendoza · Malbec dulce": "门多萨 · 甜型马尔贝克",
      "Alliance Malbec Dulce": "Alliance 甜型马尔贝克",
      "Fruta madura y final suave para postres simples, charlas largas y ese momento donde nadie quiere levantarse de la mesa.": "成熟果香与柔和收尾，适合简单甜点、长谈，以及无人愿意离席的时刻。",
      "No disponible": "暂不可用",
      "Próximamente": "即将推出",
      "Dulce": "甜型",
      "Mendoza": "门多萨",
      "Perfil joven": "年轻风格",
      "Cenas con carácter": "有个性的晚餐",
      "Mendoza · Cabernet Sauvignon": "门多萨 · 赤霞珠",
      "AEVUM Cabernet Sauvignon": "AEVUM 赤霞珠",
      "Estructura, especias y final persistente para platos intensos, equipos chicos y conversaciones que piden otra vuelta.": "结构、香料与持久余味，适合浓郁菜肴、小团队和需要继续聊下去的对话。",
      "Un Cabernet profundo para carnes, quesos y conversaciones con más tiempo. La copa acompaña sin apurar la noche.": "一款深邃的赤霞珠，适合肉类、奶酪和更从容的对话。酒杯陪伴夜晚，而不催促它结束。",
      "Selección especial": "特别精选",

      "Ruleta Valmorè": "Valmorè 美食转盘",
      "Elegí la cena en 1 giro": "一转决定晚餐",
      "¿Qué experiencia cocinamos esta noche?": "今晚我们烹饪什么体验？",
      "¿Qué cocinamos hoy?": "今天吃什么？",
      "Girás, descubrís una receta y la acompañás con una copa de Valmorè.": "转一下，发现一道菜，并用一杯 Valmorè 搭配。",
      "Mirá las opciones": "查看选项",
      "Girá la ruleta": "转动转盘",
      "Abrí la receta": "打开食谱",
      "Girar ahora": "现在转动",
      "Girando...": "正在转动……",
      "Ver opciones": "查看选项",
      "Ocultar opciones": "隐藏选项",
      "Tocá una vez. La ruleta elige por vos y te muestra la receta.": "点击一次。转盘会替你选择并显示食谱。",
      "Opciones posibles": "可能选项",
      "Si preferís mantener la sorpresa, podés dejar esta lista cerrada.": "如果你想保留惊喜，可以保持列表关闭。",
      "Todavía no giraste. Cuando salga una opción, vas a ver el plato recomendado acá.": "你还没有转动。结果出来后，推荐菜会显示在这里。",
      "La ruleta está eligiendo plato, ritmo y excusa para conversar...": "转盘正在选择菜品、节奏和对话的理由……",
      "La ruleta eligió por vos": "转盘为你选择了",
      "Resultado de la noche": "今晚结果",
      "Receta desbloqueada": "食谱已解锁",
      "Mini misión Valmorè": "Valmorè 小任务",
      "Juego de mesa": "餐桌小游戏",
      "Tiempo": "时间",
      "Dificultad": "难度",
      "Maridaje": "配餐",
      "Valmorè Origine Malbec 2023": "Valmorè Origine 马尔贝克 2023",
      "Ver receta completa": "查看完整食谱",
      "Girar nuevamente": "再转一次",
      "Ingredientes": "食材",
      "Preparación paso a paso": "分步做法",
      "Recomendación de maridaje": "配餐建议",
      "Volver a la ruleta": "返回转盘",

      "Salmón con puré rústico": "三文鱼配乡村土豆泥",
      "Una cena elegante, simple y lista en menos de 40 minutos.": "优雅、简单，40 分钟内完成的一餐。",
      "40 minutos": "40 分钟",
      "Fácil": "简单",
      "2 filetes de salmón": "2 片三文鱼",
      "4 papas medianas": "4 个中等土豆",
      "1 cucharada de manteca": "1 汤匙黄油",
      "Aceite de oliva": "橄榄油",
      "Ralladura de limón": "柠檬皮屑",
      "Sal, pimienta y hierbas frescas": "盐、胡椒和新鲜香草",
      "Herví las papas con sal hasta que estén tiernas.": "将土豆加盐煮至软。",
      "Pisalas de forma rústica con manteca, aceite de oliva y pimienta.": "加入黄油、橄榄油和胡椒，压成乡村风土豆泥。",
      "Sellá el salmón en sartén caliente, primero del lado de la piel.": "热锅煎三文鱼，先煎带皮面。",
      "Terminá con ralladura de limón y hierbas frescas.": "最后加入柠檬皮屑和新鲜香草。",
      "Serví el salmón sobre el puré y acompañá con una copa de Malbec.": "把三文鱼放在土豆泥上，搭配一杯马尔贝克。",
      "Cada persona cuenta una buena noticia de la semana antes del primer brindis.": "第一次举杯前，每个人分享本周的一件好事。",
      "Brie fundido con pan tostado": "融化布里奶酪配烤面包",
      "El clásico que parece sofisticado y se prepara en minutos.": "看起来高级，却几分钟就能完成的经典。",
      "15 minutos": "15 分钟",
      "Muy fácil": "非常简单",
      "1 queso brie pequeño": "1 个小布里奶酪",
      "Pan de campo o baguette": "乡村面包或法棍",
      "Miel": "蜂蜜",
      "Nueces tostadas": "烤核桃",
      "Romero fresco": "新鲜迷迭香",
      "Pimienta negra": "黑胡椒",
      "Colocá el brie en una fuente chica apta para horno.": "将布里奶酪放入小烤盘。",
      "Sumá miel, nueces, romero y pimienta.": "加入蜂蜜、核桃、迷迭香和胡椒。",
      "Horneá hasta que el centro esté cremoso.": "烤至中心柔滑。",
      "Tostá el pan en rodajas finas.": "将面包切薄片烤香。",
      "Serví caliente para compartir al centro de la mesa.": "趁热放在桌中央分享。",
      "Modo picada: alguien propone una pregunta inesperada y nadie puede responder con una sola palabra.": "小食模式：有人提出一个意外问题，任何人都不能只用一个词回答。",
      "Pastas con camarones": "虾仁意面",
      "Una combinación perfecta entre cocina italiana y sabores del mar.": "意大利料理与海味的完美组合。",
      "30 minutos": "30 分钟",
      "Media": "中等",
      "250 g de pasta larga": "250 克长意面",
      "300 g de camarones limpios": "300 克去壳虾仁",
      "2 dientes de ajo": "2 瓣大蒜",
      "Tomates cherry": "樱桃番茄",
      "Perejil fresco": "新鲜欧芹",
      "Sal y pimienta": "盐和胡椒",
      "Cociná la pasta al dente y reservá un poco de agua de cocción.": "将意面煮至弹牙，保留一些煮面水。",
      "Salteá ajo en aceite de oliva sin quemarlo.": "用橄榄油炒蒜，避免炒焦。",
      "Sumá los camarones y cociná apenas hasta que cambien de color.": "加入虾仁，炒至变色即可。",
      "Agregá tomates cherry y la pasta.": "加入樱桃番茄和意面。",
      "Terminá con perejil, pimienta y un toque del agua reservada.": "最后加入欧芹、胡椒和少许煮面水。",
      "Elegí una canción para cocinar. Si la mesa aprueba, se convierte en himno de la noche.": "选一首做饭歌。如果餐桌认可，它就是今晚的主题曲。",
      "Carne al vino con papines": "红酒炖牛肉配小土豆",
      "Una experiencia cálida para una noche larga de conversación.": "适合长夜对话的温暖体验。",
      "60 minutos": "60 分钟",
      "Alta": "较高",
      "600 g de carne para cocción lenta": "600 克适合慢炖的牛肉",
      "1 copa de Malbec": "1 杯马尔贝克",
      "Papines": "小土豆",
      "Cebolla": "洋葱",
      "Zanahoria": "胡萝卜",
      "Caldo": "高汤",
      "Laurel, sal y pimienta": "月桂叶、盐和胡椒",
      "Sellá la carne en una olla pesada hasta dorar.": "在厚锅中将牛肉煎至上色。",
      "Agregá cebolla y zanahoria picadas.": "加入切碎的洋葱和胡萝卜。",
      "Desglasá con vino y dejá evaporar el alcohol.": "倒入葡萄酒化开锅底，让酒精挥发。",
      "Sumá caldo, laurel y cociná lento hasta tiernizar.": "加入高汤和月桂叶，慢炖至软嫩。",
      "Horneá o herví los papines y serví con la salsa reducida.": "烤或煮小土豆，与浓缩酱汁一起上桌。",
      "Cena larga: cada copa habilita una historia que nadie de la mesa conozca todavía.": "长晚餐：每一杯酒开启一个餐桌上还没人听过的故事。",
      "Risotto de hongos": "蘑菇烩饭",
      "Cremoso, elegante y sorprendentemente fácil de preparar.": "柔滑、优雅，而且出乎意料地容易做。",
      "45 minutos": "45 分钟",
      "300 g de arroz carnaroli o arborio": "300 克 Carnaroli 或 Arborio 米",
      "Hongos frescos": "新鲜蘑菇",
      "Caldo caliente": "热高汤",
      "Manteca": "黄油",
      "Queso parmesano": "帕玛森奶酪",
      "Salteá los hongos y reservalos.": "炒蘑菇并备用。",
      "Transparentá cebolla picada con un poco de manteca.": "用少量黄油炒软洋葱碎。",
      "Agregá el arroz y nacaralo durante un minuto.": "加入米并翻炒一分钟。",
      "Incorporá caldo caliente de a poco, revolviendo.": "分次加入热高汤并搅拌。",
      "Terminá con hongos, manteca, parmesano y pimienta.": "最后加入蘑菇、黄油、帕玛森和胡椒。",
      "Ronda cremosa: cada persona nombra una idea que quiere cocinar este año, literal o simbólicamente.": "柔滑回合：每个人说出今年想“烹饪”的一个想法，可以是真实的，也可以是象征性的。",
      "Serví Valmorè Origine Malbec 2023 apenas refrescado. Su fruta roja y estructura acompañan la receta sin tapar la conversación.": "将 Valmorè Origine 马尔贝克 2023 略微冰镇后饮用。它的红果香与结构能陪伴菜品，而不掩盖对话。",

      "Experiencia web en preparación": "线上体验准备中",
      "Caso Valmorè 001 - Próximamente": "Valmorè 案件 001 - 即将推出",
      "Un misterio interactivo para jugar desde casa, conversar entre pistas y convertir la copa en una excusa para investigar juntos.": "一个可以在家玩的互动谜案，在线索之间对话，让一杯酒成为一起调查的理由。",
      "Avisame cuando esté listo": "准备好时通知我",
      "Experiencias Valmoré - En preparación": "Valmoré 体验 - 准备中",
      "Estamos preparando nuevas formas de compartir una copa, una historia y una conversación desde casa.": "我们正在准备新的方式，让你在家分享一杯酒、一个故事和一场对话。",
      "Origen Valmoré - En preparación": "Valmoré 起源 - 准备中",
      "Origen en preparación": "起源内容准备中",
      "Pronto vamos a contar el recorrido de la copa: tierra, altura, tiempo y personas detrás de cada encuentro.": "我们很快会讲述这杯酒背后的旅程：土地、海拔、时间，以及每次相聚背后的人。",
      "Mensaje recibido": "消息已收到",
      "Gracias por tu consulta": "感谢你的咨询",
      "Recibimos tu mensaje y vamos a responderte a la brevedad para seguir pensando esa experiencia juntos.": "我们已收到你的消息，会尽快回复，一起继续设计这次体验。",
      "Volver a Valmoré": "返回 Valmoré",

      "Catas para empresas": "企业品鉴",
      "Una experiencia para que el equipo vuelva a conversar.": "让团队重新开始对话的体验。",
      "Diseñamos encuentros con vino, dinámica guiada y conversación real: menos presentación corporativa, más mesa compartida.": "我们设计有葡萄酒、引导式互动与真实对话的聚会：少一点企业演示，多一点共享餐桌。",
      "Consultar experiencia": "咨询体验",
      "Ver formatos": "查看形式",
      "Una copa como excusa para abrir ideas, acuerdos y momentos de equipo.": "用一杯酒作为理由，开启想法、共识与团队时刻。",
      "Qué ofrecemos": "我们提供什么",
      "Cata, conversación y pertenencia.": "品鉴、对话与归属感。",
      "Cata guiada": "引导式品鉴",
      "Una introducción simple al vino, sin tecnicismos innecesarios, para que todos puedan participar.": "用简单方式介绍葡萄酒，避免不必要术语，让每个人都能参与。",
      "Dinámica de equipo": "团队互动",
      "Preguntas y consignas pensadas para romper automatismos y abrir conversaciones valiosas.": "问题与任务旨在打破惯性，开启有价值的对话。",
      "Ritual compartido": "共同仪式",
      "Un momento cuidado para celebrar cierres, lanzamientos, onboarding o reuniones de liderazgo.": "一个精心设计的时刻，用来庆祝收尾、发布、入职或领导力会议。",
      "Formato flexible": "灵活形式",
      "La experiencia puede adaptarse para equipos internos, clientes especiales o encuentros de marca.": "体验可适配内部团队、重要客户或品牌聚会。",
      "Cómo funciona": "如何进行",
      "Simple para contratar, memorable para vivir.": "预订简单，体验难忘。",
      "Definimos el objetivo del encuentro: integración, celebración, creatividad, liderazgo o vínculo con clientes.": "我们先定义聚会目标：融合、庆祝、创造力、领导力或客户关系。",
      "Armamos una propuesta de cata con duración, cantidad de participantes y tono de la experiencia.": "我们制定品鉴方案，包括时长、人数和体验氛围。",
      "Preparamos el guion de conversación y los momentos clave para que la actividad tenga ritmo.": "我们准备对话脚本和关键时刻，让活动有节奏。",
      "Cerramos con una invitación a seguir conversando: ideas, acuerdos o próximos encuentros.": "最后邀请大家继续对话：想法、共识或下一次相聚。",
      "Para empresas y equipos": "面向企业与团队",
      "Si querés unir a un equipo, agasajar clientes o crear una noche distinta dentro de tu organización, usamos el mismo canal de contacto para entender tu caso y armar la propuesta.": "如果你想凝聚团队、招待客户，或在组织中创造一个不同的夜晚，我们会通过同一个联系渠道了解你的需求并制定方案。",
      "Quiero consultar": "我想咨询",

      "Email de contacto": "联系邮箱",
      "Teléfono / WhatsApp": "电话 / WhatsApp",
      "Nombre": "姓名",
      "Mensaje": "留言"
    }
  };

  function detectLanguage() {
    const saved = localStorage.getItem(storageKey);
    if (saved && languages[saved]) return saved;
    const preset = document.documentElement.dataset.language;
    if (preset && languages[preset]) return preset;
    const timeZone = (Intl.DateTimeFormat().resolvedOptions().timeZone || "").toLowerCase();
    if (timeZone.includes("buenos_aires") || timeZone.includes("argentina")) return "es";
    const browserLanguage = ((navigator.languages && navigator.languages[0]) || navigator.language || "").toLowerCase();
    if (browserLanguage.startsWith("zh")) return "zh";
    if (browserLanguage.startsWith("en")) return "en";
    return "es";
  }

  let currentLanguage = detectLanguage();
  let applying = false;
  const nodeOriginals = new WeakMap();
  const attrOriginals = new WeakMap();
  const translatableAttrs = ["placeholder", "aria-label", "title", "alt", "value"];
  const dataAttrs = [
    "title", "meta", "line", "desc", "status", "cosecha", "alcohol", "origen",
    "crianza", "weatherPlace", "ctaLabel"
  ];

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function translateValue(value, language) {
    const clean = normalize(value);
    if (!clean || language === "es") return value;
    return dictionary[language][clean] || value;
  }

  function preserveWhitespace(original, translated) {
    const prefix = (original.match(/^\s*/) || [""])[0];
    const suffix = (original.match(/\s*$/) || [""])[0];
    return prefix + translated + suffix;
  }

  function translateTextNode(node, language) {
    const original = nodeOriginals.get(node) || node.nodeValue;
    if (!nodeOriginals.has(node)) nodeOriginals.set(node, original);
    const clean = normalize(original);
    if (!clean) return;
    const next = language === "es" ? original : dictionary[language][clean];
    if (next) {
      const translated = preserveWhitespace(original, next);
      if (node.nodeValue !== translated) node.nodeValue = translated;
    }
  }

  function translateAttributes(element, language) {
    translatableAttrs.forEach((attr) => {
      if (!element.hasAttribute(attr)) return;
      let store = attrOriginals.get(element);
      if (!store) {
        store = {};
        attrOriginals.set(element, store);
      }
      if (!store[attr]) store[attr] = element.getAttribute(attr);
      const original = store[attr];
      const next = language === "es" ? original : translateValue(original, language);
      if (element.getAttribute(attr) !== next) element.setAttribute(attr, next);
    });

    dataAttrs.forEach((name) => {
      const attr = "data-" + name.replace(/[A-Z]/g, (letter) => "-" + letter.toLowerCase());
      if (!element.hasAttribute(attr)) return;
      let store = attrOriginals.get(element);
      if (!store) {
        store = {};
        attrOriginals.set(element, store);
      }
      if (!store[attr]) store[attr] = element.getAttribute(attr);
      const original = store[attr];
      const next = language === "es" ? original : translateValue(original, language);
      if (element.getAttribute(attr) !== next) element.setAttribute(attr, next);
    });
  }

  function shouldSkip(element) {
    return ["SCRIPT", "STYLE", "NOSCRIPT"].includes(element.nodeName) || element.closest("[data-no-i18n]");
  }

  function translateTree(root, language) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || shouldSkip(parent)) return NodeFilter.FILTER_REJECT;
        return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => translateTextNode(node, language));

    const elements = root.nodeType === 1 ? [root, ...root.querySelectorAll("*")] : [...document.querySelectorAll("*")];
    elements.forEach((element) => {
      if (!shouldSkip(element)) translateAttributes(element, language);
    });
  }

  function translateFillBlocks(language) {
    document.querySelectorAll("[data-fill-text]").forEach((element) => {
      if (["heroWineTitle", "heroWineDesc"].includes(element.id)) return;
      if (!element.dataset.i18nFillOriginal) {
        element.dataset.i18nFillOriginal = normalize(element.getAttribute("data-fill-text") || element.textContent);
      }
      const original = element.dataset.i18nFillOriginal;
      const next = language === "es" ? original : translateValue(original, language);
      if (next && normalize(element.textContent) !== next) element.textContent = next;
    });
  }

  function refreshDynamicContent(language) {
    const activeSlide = document.querySelector(".vino-slide.active");
    if (activeSlide) {
      const sync = [
        ["heroWineTitle", "title"],
        ["heroWineMeta", "meta"],
        ["heroWineLine", "line"],
        ["heroWineDesc", "desc"],
        ["heroWineStatus", "status"],
        ["heroSpecCosecha", "cosecha"],
        ["heroSpecAlcohol", "alcohol"],
        ["heroSpecOrigen", "origen"],
        ["heroSpecCrianza", "crianza"],
        ["heroFichaLink", "ctaLabel"]
      ];
      sync.forEach(([id, key]) => {
        const target = document.getElementById(id);
        if (!target) return;
        const value = activeSlide.dataset[key] || "";
        if (target.tagName === "A") target.textContent = value;
        else target.textContent = value;
      });
      const weatherPlace = document.getElementById("weatherPlace");
      if (weatherPlace && activeSlide.dataset.weatherPlace) weatherPlace.textContent = activeSlide.dataset.weatherPlace;
    }

    translateTree(document.querySelector("[data-roulette-result]") || document.getElementById("result"), language);
    translateTree(document.querySelector(".detail"), language);
  }

  function applyLanguage(language) {
    if (!languages[language]) language = "es";
    currentLanguage = language;
    localStorage.setItem(storageKey, language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : language;
    document.documentElement.dataset.language = language;

    applying = true;
    translateTree(document.body, language);
    translateFillBlocks(language);
    refreshDynamicContent(language);
    updateSwitcher(language);
    applying = false;
    document.documentElement.classList.remove("i18n-pending");
    document.documentElement.classList.add("i18n-ready");
  }

  function updateSwitcher(language) {
    document.querySelectorAll("[data-language-current]").forEach((button) => {
      button.innerHTML = `<span class="language-flag">${languages[language].flag}</span><span class="language-code">${languages[language].code}</span>`;
      button.setAttribute("aria-label", `Idioma: ${languages[language].label}`);
    });
    document.querySelectorAll("[data-language-option]").forEach((button) => {
      const selected = button.dataset.languageOption === language;
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  function createSwitcher() {
    const wrap = document.createElement("li");
    wrap.className = "language-switcher";
    wrap.setAttribute("data-no-i18n", "");
    wrap.innerHTML = `
      <button class="language-current" type="button" data-language-current aria-haspopup="true" aria-expanded="false"></button>
      <div class="language-menu" role="menu">
        ${Object.entries(languages).map(([key, language]) => `
          <button class="language-option" type="button" role="menuitem" data-language-option="${key}">
            <span class="language-flag">${language.flag}</span>
            <span>${language.label}</span>
          </button>
        `).join("")}
      </div>
    `;

    const current = wrap.querySelector("[data-language-current]");
    current.addEventListener("click", () => {
      const open = wrap.classList.toggle("is-open");
      current.setAttribute("aria-expanded", String(open));
    });

    wrap.querySelectorAll("[data-language-option]").forEach((button) => {
      button.addEventListener("click", () => {
        wrap.classList.remove("is-open");
        current.setAttribute("aria-expanded", "false");
        applyLanguage(button.dataset.languageOption);
      });
    });

    document.addEventListener("click", (event) => {
      if (!wrap.contains(event.target)) {
        wrap.classList.remove("is-open");
        current.setAttribute("aria-expanded", "false");
      }
    });

    return wrap;
  }

  function mountSwitcher() {
    if (document.querySelector(".language-switcher")) return;
    const navList = document.querySelector("#mainNavLinks") || document.querySelector("nav ul");
    if (navList) {
      const contactItem = [...navList.children].find((item) => normalize(item.textContent).includes("Contacto"));
      const switcher = createSwitcher();
      if (contactItem) contactItem.insertAdjacentElement("afterend", switcher);
      else navList.appendChild(switcher);
      return;
    }

    const nav = document.querySelector("nav");
    if (nav) {
      const holder = document.createElement("div");
      holder.className = "language-switcher language-switcher-inline";
      holder.setAttribute("data-no-i18n", "");
      const switcher = createSwitcher();
      holder.innerHTML = switcher.innerHTML;
      holder.querySelector("[data-language-current]").addEventListener("click", () => {
        const open = holder.classList.toggle("is-open");
        holder.querySelector("[data-language-current]").setAttribute("aria-expanded", String(open));
      });
      holder.querySelectorAll("[data-language-option]").forEach((button) => {
        button.addEventListener("click", () => {
          holder.classList.remove("is-open");
          applyLanguage(button.dataset.languageOption);
        });
      });
      nav.appendChild(holder);
    }
  }

  function init() {
    mountSwitcher();
    applyLanguage(currentLanguage);

    const observer = new MutationObserver((mutations) => {
      if (applying || currentLanguage === "es") return;
      applying = true;
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 || node.nodeType === 3) translateTree(node, currentLanguage);
        });
        if (mutation.type === "characterData") translateTextNode(mutation.target, currentLanguage);
      });
      refreshDynamicContent(currentLanguage);
      applying = false;
    });
    [document.getElementById("result"), document.querySelector("[data-roulette-result]"), document.querySelector(".detail")]
      .filter(Boolean)
      .forEach((target) => observer.observe(target, { childList: true, subtree: true, characterData: true }));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.ValmoreI18n = {
    getLanguage: () => currentLanguage,
    applyLanguage,
    translateElement(element) {
      if (!element) return;
      applying = true;
      translateTree(element, currentLanguage);
      translateFillBlocks(currentLanguage);
      applying = false;
    }
  };
})();
