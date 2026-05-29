const temas = {

tema11:[

{
question:"¿Cuál fue el principal objetivo de ARPA durante su creación?",
options:[
"Crear páginas web",
"Desarrollar tecnología avanzada para defensa",
"Implementar Ethernet",
"Crear el modelo OSI"
],
answer:1,
explanation:"ARPA fue creada por el Departamento de Defensa de EE.UU. para desarrollar tecnologías avanzadas relacionadas con defensa y comunicaciones para que se utilizaran en universidades y laboratorios de investigación."
},
{
  "question": "Selecciona los tres componentes que se combinan para realizar el cálculo del CHECKSUM en la capa de transporte:",
  "options": [
    "Header TCP completo",
    "Datos de la aplicación",
    "Pseudo-header con información IP",
    "Preámbulo de la trama de enlace de datos",
    "Dirección física de los switches intermediarios"
  ],
  "answer": [1, 2, 3],
  "explanation": "Para garantizar la integridad del segmento, el Checksum valida conjuntamente todo el Header TCP, los datos adjuntos y el pseudo-header con datos de la capa IP."
},


{
  "question": "¿Cuál es el orden lógico y correcto que sigue la capa de transporte para finalizar la creación de un segmento TCP?",
  "options": [
    "Primero se arma el header, luego se calcula el checksum (usando el header, datos y pseudo-header IP) y finalmente se guarda ese checksum dentro del header TCP.",
    "Primero se calcula el checksum a ciegas, después se genera el header y al final se descartan los datos de la aplicación.",
    "Primero se envía el segmento a la red, luego se calcula el checksum y el destino se encarga de armar el header.",
    "Se calcula el checksum utilizando únicamente las direcciones MAC antes de que existan el header o los datos."
  ],
  "answer": 1,
  "explanation": "El orden es estricto y crucial: primero se debe estructurar todo el encabezado TCP, ya que este campo es parte del cálculo. Con el header listo y los datos, se calcula el checksum y ese resultado matemático se guarda en el espacio reservado dentro del propio header TCP, consolidando el segmento (Header + Datos)."
},

{
question:"¿Qué evento histórico impulsó indirectamente la creación de ARPA?",
options:[
"La caída del muro de Berlín",
"El nacimiento de Ethernet",
"El lanzamiento del Sputnik",
"La creación de NSFNET"
],
answer:2,
explanation:"ARPA surge en el contexto de la Guerra Fría después del lanzamiento del Sputnik soviético, para garantizar que Estados Unidos mantuviera una ventaja tecnológica insuperable y no volviera a sufrir una sorpresa estratégica. Esto impulsó el desarrollo de tecnologías avanzadas de comunicación e investigación que posteriormente darían origen a ARPANET y al Internet moderno."
},

{
question:"¿Cuál fue la principal contribución de Joseph Carl Licklider?",
options:[
"Crear IPv6",
"Desarrollar switches",
"Impulsar la idea de una red global de computadoras",
"Desarrollar NAT"
],
answer:2,
explanation:"Licklider fue pionero en la idea de conectar computadoras en red global."
},

{
question:"¿Qué significa IPTO?",
options:[
"Internet Protocol Transfer Office",
"Information Processing Techniques Office",
"Internal Packet Technology Office",
"Internet Processing Technical Organization"
],
answer:1,
explanation:"IPTO fue una oficina dentro de ARPA dedicada a tecnologías de comunicación entre computadoras."
},

{
question:"¿Cuál fue una característica importante de ARPANET?",
options:[
"Fue diseñada inicialmente para videojuegos",
"Fue creada para investigación",
"Usaba IPv6",
"Fue creada por Cisco"
],
answer:1,
explanation:"ARPANET fue creada principalmente para investigación."
},

{
question:"¿En qué década se desarrolló ARPANET?",
options:[
"1950s",
"1960s",
"1970s",
"1980s"
],
answer:1,
explanation:"ARPANET se desarrolló durante la década de los 60."
},

{
question:"¿Qué ocurrió en 1969 relacionado con ARPANET?",
options:[
"Desapareció NSFNET",
"Comenzó TCP/IP",
"Se conectaron los primeros nodos",
"Se creó Ethernet"
],
answer:2,
explanation:"En 1969 ARPANET inicia operaciones con sus primeros nodos."
},

{
question:"¿Cuáles fueron nodos iniciales de ARPANET? (4 respuestas)",
options:[
"UCLA",
"Stanford",
"UC Santa Barbara",
"University of Utah",
"New York"
],
answer:[0,1,2,3],
multiple:true,
explanation:"Los primeros cuatro nodos de ARPANET fueron UCLA, Stanford, UC Santa Barbara y University of Utah."
},

{
question:"¿Cuál es la principal función de TCP/IP?",
options:[
"Crear circuitos físicos",
"Permitir comunicación entre redes diferentes",
"Crear direcciones MAC",
"Dividir switches"
],
answer:1,
explanation:"TCP/IP permite comunicación entre diferentes redes."
},

{
question:"¿Quiénes desarrollaron TCP/IP? (2 respuestas)",
options:[
"Robert Kahn",
"Vinton Cerf",
"Joseph Licklider",
"Robert Metcalfe"
],
answer:[0,1],
multiple:true,
explanation:"Robert Kahn y Vinton Cerf desarrollaron TCP/IP."
},

{
question:"¿Qué ocurrió en 1983?",
options:[
"Nació IPv6",
"TCP/IP se convierte en estándar de ARPANET",
"Desaparece Internet",
"Se crea Ethernet"
],
answer:1,
explanation:"1983 marca el nacimiento del Internet moderno con TCP/IP como estándar."
},

{
question:"¿Qué red reemplazó a ARPANET?",
options:[
"Ethernet",
"NSFNET",
"DECNET",
"SNA"
],
answer:1,
explanation:"NSFNET reemplazó a ARPANET."
},

{
question:"¿Qué función cumplía NSFNET?",
options:[
"Crear routers",
"Servir como backbone",
"Administrar VLAN",
"Controlar DNS"
],
answer:1,
explanation:"NSFNET funcionó como backbone principal."
},

{
question:"¿Qué característica NO pertenece a NSFNET?",
options:[
"Conectaba universidades",
"Era comercial desde el inicio",
"Funcionó como backbone",
"Permitió el surgimiento de ISP"
],
answer:1,
explanation:"NSFNET no era comercial inicialmente."
},

{
question:"¿Qué significa backbone de Internet?",
options:[
"Servidor principal",
"Switch central",
"Red principal de alta velocidad",
"Modelo OSI"
],
answer:2,
explanation:"El backbone es la columna vertebral de Internet."
},

{
question:"¿Qué se conecta al backbone?",
options:[
"Solo ISP",
"Solo switches",
"Redes regionales y campus",
"Solo redes domésticas"
],
answer:2,
explanation:"El backbone conecta redes regionales y de campus."
},

{
question:"¿Qué ocurrió en 1995 relacionado con Internet?",
options:[
"TCP/IP desaparece",
"NSFNET deja de ser backbone principal",
"ARPANET inicia",
"OSI reemplaza TCP/IP"
],
answer:1,
explanation:"En 1995 surgen backbones privados y NSFNET deja de ser principal."
},

{
question:"¿Qué es Internet?",
options:[
"Un navegador",
"Una página web",
"Una red global interconectada",
"Un protocolo"
],
answer:2,
explanation:"Internet es una red global formada por múltiples redes."
},

{
question:"¿Qué es un ISP?",
options:[
"Empresa que proporciona acceso a Internet",
"Tipo de switch",
"Protocolo",
"Servidor web"
],
answer:0,
explanation:"ISP proporciona acceso a Internet."
},

{
question:"¿Cuál es una característica de una red doméstica?",
options:[
"Muchos edificios",
"Uso de routers domésticos",
"Backbone propio",
"Datacenter"
],
answer:1,
explanation:"Las redes domésticas suelen usar routers domésticos."
},

{
question:"¿Qué tecnología utiliza línea telefónica?",
options:[
"Cable",
"ADSL",
"Ethernet",
"Fibra"
],
answer:1,
explanation:"ADSL utiliza infraestructura telefónica."
},

{
question:"¿Cuál suele ser más rápido?",
options:[
"ADSL",
"Cable"
],
answer:1,
explanation:"Cable suele ofrecer más velocidad que ADSL."
},

{
question:"¿Qué función realiza un router doméstico? (3 respuestas)",
options:[
"Conectar dispositivos",
"Asignar IP mediante DHCP",
"Permitir salida a Internet",
"Crear backbone"
],
answer:[0,1,2],
multiple:true,
explanation:"El router conecta dispositivos, asigna IP y conecta a Internet."
},

{
question:"¿Qué significa SOHO?",
options:[
"Small Office Home Office",
"Simple Open Host Organization",
"Shared Office Host Operation",
"Secure Office Home Option"
],
answer:0,
explanation:"SOHO significa Small Office/Home Office."
},

{
question:"¿Qué estándar utiliza Ethernet?",
options:[
"IEEE 802.11",
"IEEE 802.3",
"IEEE 802.1Q",
"IEEE 802.5"
],
answer:1,
explanation:"Ethernet utiliza el estándar IEEE 802.3 para definir cómo se transmiten los datos a través de redes cableadas."
},

{
question:"¿Cuál es una característica de circuit switching?",
options:[
"Rutas dinámicas",
"Camino dedicado",
"Recursos compartidos",
"Paquetes independientes"
],
answer:1,
explanation:"Circuit switching usa caminos dedicados."
},

{
question:"¿Qué tecnología usa tradicionalmente conmutación por circuitos?",
options:[
"Internet",
"PSTN",
"Ethernet",
"TCP/IP"
],
answer:1,
explanation:"La telefonía PSTN utiliza circuit switching."
},

{
question:"¿Cuáles son desventajas de circuit switching? (3 respuestas)",
options:[
"Recursos dedicados",
"Poca flexibilidad",
"Usuarios limitados",
"Uso eficiente"
],
answer:[0,1,2],
multiple:true,
explanation:"Circuit switching desperdicia recursos y limita usuarios."
},

{
question:"¿Qué caracteriza a packet switching?",
options:[
"Canal dedicado",
"Camino fijo",
"Rutas dinámicas",
"Conexión física permanente"
],
answer:2,
explanation:"Packet switching utiliza rutas dinámicas."
},

{
question:"¿Qué contiene un paquete? (4 respuestas)",
options:[
"IP origen",
"IP destino",
"Datos",
"Encabezado",
"Fuente de poder"
],
answer:[0,1,2,3],
multiple:true,
explanation:"Los paquetes contienen encabezado, datos y direcciones."
},

{
question:"¿Qué ocurre al final del packet switching?",
options:[
"Se destruyen datos",
"Se reensamblan paquetes",
"Se elimina IP",
"Se apaga la red"
],
answer:1,
explanation:"Los paquetes se reconstruyen al final."
},

{
question:"¿Qué utiliza Internet actualmente?",
options:[
"Circuit switching",
"Packet switching",
"Canales dedicados",
"PSTN"
],
answer:1,
explanation:"Internet usa packet switching mediante TCP/IP."
},

{
question:"¿Cuál es función de un modelo de red?",
options:[
"Crear routers",
"Describir funciones de capas",
"Asignar VLAN",
"Crear direcciones MAC"
],
answer:1,
explanation:"Los modelos describen funciones e interacción entre capas."
},

{
question:"¿Por qué existen las capas en redes? (3 respuestas)",
options:[
"Facilitar diseño",
"Detectar fallas",
"Compatibilidad",
"Reducir electricidad"
],
answer:[0,1,2],
multiple:true,
explanation:"Las capas simplifican diseño, compatibilidad y troubleshooting."
},

{
question:"¿Cuál es un modelo propietario?",
options:[
"TCP/IP",
"OSI",
"DECNET",
"IPv4"
],
answer:2,
explanation:"DECNET fue un modelo propietario."
},

{
question:"¿Por qué TCP/IP ganó sobre OSI?",
options:[
"Era más complejo",
"Ya funcionaba en la práctica",
"No tenía capas",
"OSI era más rápido"
],
answer:1,
explanation:"TCP/IP ya funcionaba en ARPANET y podía implementarse en diferentes fabricantes, mientras que OSI apareció después como modelo teórico."
},

{
question:"¿Cuál es una diferencia correcta entre TCP/IP y OSI?",
options:[
"OSI funciona en Internet",
"TCP/IP es práctico y OSI teórico",
"OSI salió primero",
"TCP/IP no tiene capas"
],
answer:1,
explanation:"TCP/IP fue implementado en redes reales como ARPANET mientras que OSI fue desarrollado principalmente como modelo de referencia para estandarización."
},

{
question:"¿Qué problema presentaba OSI?",
options:[
"Falta de teoría",
"Implementación compleja",
"No tenía capas",
"No podía explicar redes"
],
answer:1,
explanation:"OSI era muy completo teóricamente, pero su implementación práctica era compleja comparada con TCP/IP."
},

{
question:"¿Qué es un host?",
options:[
"Dispositivo conectado a red",
"Backbone",
"Switch",
"Cable"
],
answer:0,
explanation:"Host es cualquier dispositivo conectado a una red que puede enviar o recibir información."
},

{
question:"¿Qué tipo de comunicación es uno a todos?",
options:[
"Unicast",
"Broadcast",
"Multicast",
"Anycast"
],
answer:1,
explanation:"Broadcast significa uno a todos los dispositivos dentro de la misma red."
},

{
question:"¿Cuál es diferencia correcta entre Internet y Web?",
options:[
"Son lo mismo",
"Internet es infraestructura y Web es servicio",
"Web reemplazó Internet",
"Internet usa solo HTTP"
],
answer:1,
explanation:"Internet es la infraestructura global de redes y la Web es un servicio que funciona sobre ella usando HTTP/HTTPS."
},

{
question:"¿Qué características pertenecen a la conmutación por circuitos? (Elige 3)",
options:[
"Camino dedicado",
"Recursos no compartidos",
"Requiere establecer conexión previa",
"Utiliza múltiples comunicaciones simultáneas"
],
answer:[0,1,2],
multiple:true,
explanation:"La conmutación por circuitos establece un camino dedicado antes de iniciar la comunicación. Los recursos quedan reservados exclusivamente para esa conexión y no son compartidos con otros usuarios."
},

{
question:"¿Cuáles son desventajas de la conmutación por circuitos? (Elige 3)",
options:[
"Desperdicio de ancho de banda",
"Hay retraso inicial",
"Si no hay circuitos disponibles no hay comunicación",
"Es muy barato"
],
answer:[0,1,2],
multiple:true,
explanation:"Circuit switching desperdicia ancho de banda, presenta retraso inicial y depende de la disponibilidad de circuitos."
},

{
question:"¿Cuál es el funcionamiento de la conmutación por paquetes? (Elige 3)",
options:[
"Se divide el mensaje",
"Los paquetes pueden tomar rutas diferentes",
"Los paquetes pueden llegar desordenados",
"Al final no se ordenan"
],
answer:[0,1,2],
multiple:true,
explanation:"Packet switching divide la información en paquetes que pueden viajar por rutas diferentes y llegar desordenados, pero protocolos como TCP permiten reordenarlos."
},

{
question:"¿Cuáles son modelos propietarios de red? (Elige 3)",
options:[
"IBM-SNA",
"Xerox-XNS",
"Digital-DECNET",
"TCP/IP"
],
answer:[0,1,2],
multiple:true,
explanation:"IBM-SNA, Xerox-XNS y DECNET eran modelos propietarios controlados por empresas específicas. TCP/IP no es propietario porque evolucionó como estándar abierto."
},

{
question:"¿En qué año apareció oficialmente el modelo OSI?",
options:[
"1984",
"1985",
"1986",
"1987"
],
answer:0,
explanation:"El modelo OSI fue publicado oficialmente por la ISO en 1984 como estándar de referencia para comunicaciones de red."
},

{
question:"¿Por qué los modelos propietarios representaban un problema en las redes antiguas?",
options:[
"Porque utilizaban demasiados cables",
"Porque solo funcionaban con tecnologías y equipos del mismo fabricante",
"Porque no utilizaban protocolos",
"Porque eran inalámbricos"
],
answer:1,
explanation:"Los modelos propietarios limitaban la interoperabilidad porque normalmente solo funcionaban correctamente con equipos del mismo fabricante."
},

{
question:"¿Cuál fue una ventaja importante de packet switching frente a circuit switching?",
options:[
"Necesita circuitos dedicados",
"Utiliza mejor los recursos de red",
"Requiere menos routers",
"No divide la información"
],
answer:1,
explanation:"Packet switching comparte recursos entre múltiples comunicaciones y aprovecha mejor el ancho de banda disponible."
},

{
question:"¿Por qué TCP/IP fue considerado un estándar abierto?",
options:[
"Porque pertenecía exclusivamente a Cisco",
"Porque podía ser implementado por cualquier fabricante",
"Porque solo funcionaba en universidades",
"Porque utilizaba circuit switching"
],
answer:1,
explanation:"TCP/IP podía implementarse en múltiples sistemas y fabricantes diferentes, permitiendo interoperabilidad global."
},

{
question:"¿Cuál es una diferencia importante entre circuit switching y packet switching?",
options:[
"Packet switching usa recursos compartidos",
"Circuit switching divide mensajes en paquetes",
"Packet switching necesita un circuito fijo",
"Ambos usan caminos dedicados"
],
answer:0,
explanation:"Packet switching utiliza recursos compartidos y rutas dinámicas, mientras que circuit switching utiliza caminos dedicados."
},

{
question:"¿Por qué OSI no logró dominar Internet aunque fuera un estándar internacional?",
options:[
"Porque no tenía capas",
"Porque TCP/IP ya funcionaba en implementaciones reales",
"Porque OSI era propietario",
"Porque OSI utilizaba switches"
],
answer:1,
explanation:"TCP/IP ya estaba implementado en ARPANET y otras redes reales antes de la publicación oficial de OSI."
},

{
question:"¿Qué ventaja proporcionó el uso de capas en los modelos de red?",
options:[
"Reducir electricidad",
"Eliminar routers",
"Dividir funciones para facilitar diseño y troubleshooting",
"Evitar direcciones IP"
],
answer:2,
explanation:"Las capas permiten separar funciones específicas, facilitando diseño, compatibilidad y resolución de problemas."
},

{
question:"¿Qué característica describe mejor a Internet moderno?",
options:[
"Red única centralizada",
"Conjunto de redes interconectadas usando TCP/IP",
"Solo redes universitarias",
"Conmutación exclusivamente por circuitos"
],
answer:1,
explanation:"Internet moderno es una red global formada por múltiples redes interconectadas mediante TCP/IP."
},

{
question:"¿Qué ocurre si un paquete se pierde en packet switching?",
options:[
"La red completa deja de funcionar",
"Los datos no pueden recuperarse jamás",
"Protocolos como TCP pueden solicitar retransmisión",
"Se destruye la dirección IP"
],
answer:2,
explanation:"TCP detecta pérdida de paquetes y solicita retransmisión para garantizar entrega confiable."
},

{
question:"¿Cuál fue una función importante de ARPANET?",
options:[
"Conectar investigadores y universidades",
"Crear VLANs",
"Implementar IPv6",
"Reemplazar Ethernet"
],
answer:0,
explanation:"ARPANET permitió compartir recursos e información entre universidades y centros de investigación."
},

{
question:"¿Por qué backbone es considerado la columna vertebral de Internet?",
options:[
"Porque almacena páginas web",
"Porque conecta grandes redes mediante enlaces de alta velocidad",
"Porque reemplaza routers",
"Porque utiliza únicamente fibra óptica"
],
answer:1,
explanation:"El backbone conecta grandes redes e ISP mediante enlaces de alta velocidad capaces de transportar enormes cantidades de tráfico."
}

],

tema12:[

{
question:"¿Qué característica define mejor una red Peer-to-Peer?",

options:[

"Existe un servidor central",

"Todos los dispositivos pueden actuar como cliente o servidor",

"Solo los switches comparten recursos",

"Necesita Active Directory"

],

answer:1,

explanation:"En una red Peer-to-Peer no existe un servidor centralizado. Todos los dispositivos pueden compartir recursos o solicitarlos dependiendo de la situación. Un mismo equipo puede actuar como servidor al compartir archivos y luego como cliente al acceder a recursos de otro dispositivo. Esto hace que P2P sea simple y económica, pero menos segura y menos escalable."

},

{
question:"¿Por qué una red P2P suele ser menos segura?",

options:[

"Porque usa Ethernet",

"Porque no tiene administración centralizada",

"Porque utiliza switches",

"Porque usa Wi-Fi"

],

answer:1,

explanation:"Las redes P2P no poseen administración centralizada, lo que dificulta controlar permisos, usuarios y políticas de seguridad. Cada dispositivo administra sus propios recursos, aumentando el riesgo de accesos no autorizados."

},

{
question:"Aunque exista un switch en una red P2P, ¿por qué sigue siendo Peer-to-Peer?",

options:[

"Porque el switch funciona como servidor",

"Porque el switch solo interconecta dispositivos",

"Porque Ethernet obliga a usar P2P",

"Porque el switch administra usuarios"

],

answer:1,

explanation:"El switch únicamente actúa como intermediario para enviar tramas entre dispositivos. No proporciona administración centralizada ni cambia el modelo lógico de la red. Por eso la red sigue siendo Peer-to-Peer."

},

{
question:"¿Qué característica pertenece a una red Cliente-Servidor?",

options:[

"No existe servidor",

"Todos tienen el mismo rol",

"Existe administración centralizada",

"Todos comparten recursos libremente"

],

answer:2,

explanation:"En cliente-servidor existen servidores dedicados que proporcionan servicios y administración centralizada. Esto mejora seguridad, escalabilidad y control de usuarios."

},

{
question:"¿Por qué cliente-servidor es más escalable que P2P?",

options:[

"Porque tiene menos dispositivos",

"Porque centraliza servicios y administración",

"Porque usa Token Ring",

"Porque elimina routers"

],

answer:1,

explanation:"Cliente-servidor permite administrar usuarios, recursos y servicios desde sistemas centralizados. Esto facilita agregar más usuarios y dispositivos sin perder control o rendimiento."

},

{
question:"Una empresa crece de 20 a 800 usuarios y la red sigue funcionando eficientemente. ¿Qué característica demuestra?",

options:[

"QoS",

"Tolerancia a fallas",

"Escalabilidad",

"Latencia"

],

answer:2,

explanation:"Escalabilidad significa que la red puede crecer agregando usuarios, dispositivos o servicios sin afectar significativamente el rendimiento."

},

{
question:"Una red continúa funcionando aunque falle un enlace principal gracias a rutas alternativas. ¿Qué característica describe mejor el escenario?",

options:[

"Escalabilidad",

"QoS",

"Tolerancia a fallas",

"Congestión"

],

answer:2,

explanation:"La tolerancia a fallas permite que la red continúe operando incluso cuando ocurre una falla física o lógica. Esto normalmente se logra usando redundancia y rutas alternativas."

},

{
question:"¿Qué relación existe entre redundancia y tolerancia a fallas?",

options:[

"Son tecnologías incompatibles",

"La redundancia ayuda a lograr tolerancia a fallas",

"La tolerancia elimina redundancia",

"No tienen relación"

],

answer:1,

explanation:"La redundancia consiste en tener dispositivos, enlaces o rutas adicionales. Gracias a ello, si un componente falla, otro puede asumir la operación y mantener el servicio funcionando."

},

{
question:"¿Cuál es el propósito principal de QoS?",

options:[

"Eliminar switches",

"Priorizar tráfico importante",

"Reducir número de usuarios",

"Crear VLAN"

],

answer:1,

explanation:"QoS (Quality of Service) permite priorizar tráfico sensible al tiempo como voz y video para reducir problemas de latencia, jitter y pérdida de paquetes."

},

{
question:"¿Por qué VoIP es sensible al tiempo?",

options:[

"Porque usa demasiados bits",

"Porque necesita llegar rápido y ordenado",

"Porque utiliza circuit switching",

"Porque requiere Token Ring"

],

answer:1,

explanation:"La voz en tiempo real necesita que los paquetes lleguen rápidamente y en orden correcto. Si existen retrasos o variaciones, la conversación se escucha cortada, robotizada o con eco."

},

{
question:"¿Qué problema describe variaciones en el tiempo de llegada de paquetes?",

options:[

"Latencia",

"Jitter",

"Escalabilidad",

"Redundancia"

],

answer:1,

explanation:"Jitter ocurre cuando los paquetes llegan con tiempos variables. En VoIP esto provoca audio entrecortado o robotizado."

},

{
question:"¿Qué problema representa el tiempo total que tarda un paquete en viajar?",

options:[

"QoS",

"Jitter",

"Latencia",

"Redundancia"

],

answer:2,

explanation:"Latencia es el tiempo que tarda un paquete en viajar desde origen hasta destino. Altas latencias afectan especialmente aplicaciones en tiempo real."

},

{
question:"¿Qué ocurre durante congestión en la red?",

options:[

"La red tiene poco tráfico",

"Existe más tráfico del que la red puede manejar",

"QoS desaparece",

"Se eliminan routers"

],

answer:1,

explanation:"La congestión ocurre cuando existe más tráfico del que la infraestructura puede manejar. Esto produce retrasos, lentitud y pérdida de paquetes."

},

{
question:"¿Qué tecnología utiliza Ethernet?",

options:[

"IEEE 802.11",

"IEEE 802.3",

"IEEE 802.1Q",

"IEEE 802.5"

],

answer:1,

explanation:"Ethernet utiliza el estándar IEEE 802.3 para redes cableadas LAN."

},

{
question:"¿Qué dispositivo se usa normalmente en Ethernet para conectar hosts?",

options:[

"Firewall",

"Switch",

"IDS",

"VPN"

],

answer:1,

explanation:"Los switches son fundamentales en Ethernet porque permiten interconectar dispositivos dentro de una LAN."

},

{
question:"¿Qué método utilizaba Token Ring para transmitir?",

options:[

"CSMA/CD",

"Token",

"Broadcast",

"QoS"

],

answer:1,

explanation:"Token Ring utilizaba un token o permiso de transmisión. Solo el dispositivo que poseía el token podía transmitir datos."

},

{
question:"¿Cuál es una característica de WLAN?",

options:[

"Usa únicamente cable UTP",

"Utiliza IEEE 802.11",

"Usa Token Ring",

"Necesita PPP"

],

answer:1,

explanation:"WLAN utiliza Wi-Fi y el estándar IEEE 802.11 para comunicación inalámbrica."

},

{
question:"¿Cuál tecnología pertenece normalmente a WAN?",

options:[

"MPLS",

"Ethernet",

"Token Ring",

"CSMA/CD"

],

answer:0,

explanation:"MPLS es una tecnología WAN utilizada para interconectar redes a grandes distancias."

},

{
question:"¿Qué característica define mejor una WAN?",

options:[

"Comunicación a corta distancia",

"Conecta únicamente switches",

"Interconecta LAN y WLAN a grandes distancias",

"Solo funciona con Wi-Fi"

],

answer:2,

explanation:"WAN permite comunicación entre redes geográficamente separadas como sucursales, ciudades o países."

},

{
question:"¿Qué significa bps?",

options:[

"Bytes per second",

"Bits per switch",

"Bits por segundo",

"Backbone packet service"

],

answer:2,

explanation:"bps significa bits por segundo y mide la cantidad de bits transmitidos en un segundo."

},

{
question:"¿Qué representa un bit?",

options:[

"Unidad máxima de almacenamiento",

"Unidad mínima de información",

"Tipo de paquete",

"Velocidad de transmisión"

],

answer:1,

explanation:"El bit es la unidad mínima de información digital y puede representar un 0 o un 1."

},

{
question:"Una llamada VoIP presenta eco y retrasos. ¿Qué problema probablemente existe?",

options:[

"Escalabilidad",

"Latencia",

"Redundancia",

"Token Ring"

],

answer:1,

explanation:"La latencia alta provoca retrasos perceptibles en aplicaciones en tiempo real como VoIP."

},

{
question:"Una red tiene dos enlaces redundantes y uno falla sin interrumpir el servicio. ¿Qué ventaja demuestra?",

options:[

"QoS",

"Tolerancia a fallas",

"Jitter",

"Congestión"

],

answer:1,

explanation:"La tolerancia a fallas permite mantener el servicio usando enlaces alternativos cuando ocurre una falla."

},

{
question:"¿Cuál es una ventaja importante de QoS?",

options:[

"Eliminar tráfico",

"Priorizar voz y video",

"Reducir switches",

"Eliminar WAN"

],

answer:1,

explanation:"QoS prioriza tráfico sensible al tiempo para mejorar calidad de llamadas y videoconferencias."

},

{
question:"¿Qué dispositivo ayuda a proteger la red contra accesos no autorizados?",

options:[

"Switch",

"Firewall",

"Hub",

"Token"

],

answer:1,

explanation:"Los firewalls filtran tráfico y ayudan a proteger redes contra accesos no autorizados."

},

{
question:"¿Cuál es función de IDS/IPS?",

options:[

"Crear VLAN",

"Detectar o prevenir ataques",

"Convertir bits",

"Asignar IP"

],

answer:1,

explanation:"IDS detecta ataques y IPS puede bloquearlos automáticamente."

},

{
question:"¿Qué hace una VPN?",

options:[

"Elimina Internet",

"Protege comunicaciones mediante túneles seguros",

"Reemplaza switches",

"Convierte WLAN en LAN"

],

answer:1,

explanation:"VPN crea túneles cifrados para proteger información transmitida a través de redes públicas."

},

{
question:"¿Qué característica describe mejor una red confiable?",

options:[

"Solo rápida",

"Solo segura",

"Tolerante a fallas, escalable y segura",

"Solo inalámbrica"

],

answer:2,

explanation:"Una red moderna confiable debe ser segura, escalable, tolerante a fallas y capaz de manejar tráfico crítico mediante QoS."

},

{
question:"¿Qué problema ocurre cuando algunos paquetes nunca llegan al destino?",

options:[

"Jitter",

"Latencia",

"Pérdida de paquetes",

"Escalabilidad"

],

answer:2,

explanation:"La pérdida de paquetes ocurre cuando algunos paquetes desaparecen durante la transmisión, afectando aplicaciones críticas."

},

{
question:"¿Qué tecnología WAN es considerada obsoleta pero fue muy utilizada?",

options:[

"Frame Relay",

"Ethernet",

"Wi-Fi",

"CSMA/CD"

],

answer:0,

explanation:"Frame Relay fue ampliamente utilizada en WAN antes de tecnologías modernas como MPLS."

},

{
question:"¿Qué estándar utiliza Ethernet?",

options:[

"IEEE 802.11",

"IEEE 802.3",

"IEEE 802.1Q",

"IEEE 802.5"

],

answer:1,

explanation:"Ethernet utiliza el estándar IEEE 802.3 para redes LAN cableadas. Este estándar define aspectos como transmisión de datos, formato de tramas y acceso al medio. IEEE 802.11 pertenece a Wi-Fi y no a Ethernet."

},

{
question:"¿Qué método de acceso al medio utiliza Ethernet tradicionalmente?",

options:[

"Token Passing",

"CSMA/CD",

"PPP",

"MPLS"

],

answer:1,

explanation:"Ethernet tradicional utilizaba CSMA/CD (Carrier Sense Multiple Access with Collision Detection). Los dispositivos verificaban si el medio estaba libre antes de transmitir y detectaban colisiones cuando dos equipos transmitían simultáneamente."

},

{
question:"¿Qué significa CSMA/CD?",

options:[

"Carrier Sense Multiple Access with Collision Detection",

"Central Switch Management Access Data",

"Collision Switch Multiple Access Device",

"Carrier Signal Managed Access Detection"

],

answer:0,

explanation:"CSMA/CD significa Carrier Sense Multiple Access with Collision Detection. Era utilizado principalmente en Ethernet half-duplex para controlar acceso al medio y manejar colisiones."

},

{
question:"¿Por qué CSMA/CD perdió importancia en redes modernas?",

options:[

"Porque Ethernet desapareció",

"Porque los switches modernos reducen colisiones",

"Porque Wi-Fi reemplazó LAN",

"Porque MPLS lo eliminó"

],

answer:1,

explanation:"Los switches modernos crean dominios de colisión separados y utilizan full-duplex, eliminando prácticamente las colisiones. Por eso CSMA/CD ya casi no se utiliza en redes Ethernet modernas."

},

{
question:"¿Cuál tecnología WAN es utilizada ampliamente por proveedores para transportar tráfico empresarial?",

options:[

"MPLS",

"Token Ring",

"CSMA/CD",

"UTP"

],

answer:0,

explanation:"MPLS (Multiprotocol Label Switching) es una tecnología WAN muy utilizada por proveedores de servicios para transportar tráfico empresarial con eficiencia y priorización."

},

{
question:"¿Cuál tecnología WAN es considerada antigua pero fue muy utilizada antes de MPLS?",

options:[

"Ethernet",

"Frame Relay",

"Wi-Fi",

"Token Ring"

],

answer:1,

explanation:"Frame Relay fue una tecnología WAN ampliamente utilizada antes de la popularización de MPLS. Actualmente es considerada obsoleta."

},

{
question:"¿Qué protocolo WAN se utiliza comúnmente para conexiones punto a punto?",

options:[

"PPP",

"IDS",

"802.11",

"CSMA/CD"

],

answer:0,

explanation:"PPP (Point-to-Point Protocol) se utiliza para conexiones WAN punto a punto y proporciona autenticación y encapsulación."

},

{
question:"¿Qué tecnología WAN utilizaba celdas pequeñas de tamaño fijo para transmitir información?",

options:[

"ATM",

"MPLS",

"Ethernet",

"Token Ring"

],

answer:0,

explanation:"ATM (Asynchronous Transfer Mode) transmitía información usando pequeñas celdas de tamaño fijo, buscando mejorar eficiencia y calidad de servicio."

},

{
question:"¿Cuál característica describe mejor una red confiable?",

options:[

"Solo alta velocidad",

"Solo redundancia",

"Escalabilidad, seguridad, QoS y tolerancia a fallas",

"Solo Wi-Fi"

],

answer:2,

explanation:"Una red confiable moderna debe integrar múltiples características: seguridad para proteger datos, QoS para priorizar tráfico crítico, escalabilidad para crecer sin degradación y tolerancia a fallas para mantener operación continua."

},

{
question:"Una empresa implementa enlaces redundantes, QoS para VoIP y firewalls perimetrales. ¿Qué objetivo principal busca?",

options:[

"Reducir switches",

"Construir una red confiable",

"Eliminar WAN",

"Usar únicamente WLAN"

],

answer:1,

explanation:"La combinación de redundancia, QoS y seguridad forma parte del diseño de una red confiable capaz de soportar fallas, priorizar tráfico crítico y proteger información."

},

{
question:"¿Cuáles son dispositivos o tecnologías de seguridad? (Elige 4)",

options:[

"Firewall",

"IDS",

"IPS",

"VPN",

"CSMA/CD"

],

answer:[0,1,2,3],

multiple:true,

explanation:"Firewall, IDS, IPS y VPN son tecnologías utilizadas para proteger redes. Firewall filtra tráfico, IDS detecta ataques, IPS puede prevenirlos y VPN protege comunicaciones mediante túneles cifrados."

},

{
question:"¿Cuál es diferencia principal entre IDS e IPS?",

options:[

"IDS detecta y IPS puede bloquear ataques",

"IPS detecta y IDS elimina routers",

"IDS reemplaza firewall",

"IPS funciona únicamente en WLAN"

],

answer:0,

explanation:"IDS (Intrusion Detection System) detecta actividades sospechosas y genera alertas. IPS (Intrusion Prevention System) además puede actuar automáticamente para bloquear ataques."

},

{
question:"¿Qué ventaja ofrece una VPN?",

options:[

"Eliminar QoS",

"Crear túneles seguros sobre redes públicas",

"Eliminar necesidad de routers",

"Reemplazar Ethernet"

],

answer:1,

explanation:"VPN permite transmitir información de forma segura usando túneles cifrados sobre redes públicas como Internet."

},

{
question:"¿Qué escenario representa mejor escalabilidad?",

options:[

"La red soporta 500 nuevos usuarios sin degradación importante",

"Un enlace falla y existe respaldo",

"Los paquetes llegan desordenados",

"Existe pérdida de paquetes"

],

answer:0,

explanation:"Escalabilidad significa que la red puede crecer agregando usuarios, dispositivos o servicios manteniendo rendimiento aceptable."

},

{
question:"¿Qué escenario representa mejor tolerancia a fallas?",

options:[

"La red aumenta velocidad",

"QoS prioriza voz",

"El tráfico toma una ruta alternativa tras una falla",

"Se agregan más switches"

],

answer:2,

explanation:"La tolerancia a fallas permite mantener el servicio activo incluso cuando ocurre una falla física o lógica gracias a redundancia y rutas alternativas."

},

{
question:"¿Qué relación tiene QoS con congestión?",

options:[

"QoS elimina Internet",

"QoS ayuda a priorizar tráfico importante durante congestión",

"Congestión mejora QoS",

"QoS solo funciona en LAN"

],

answer:1,

explanation:"Durante congestión existe más tráfico del que la red puede manejar. QoS ayuda priorizando tráfico crítico como voz y video para reducir impacto."

},

{
question:"Una llamada VoIP presenta voz robotizada debido a variaciones en el tiempo de llegada de paquetes. ¿Qué problema ocurre?",

options:[

"Escalabilidad",

"Jitter",

"Redundancia",

"Frame Relay"

],

answer:1,

explanation:"Jitter ocurre cuando los paquetes llegan con tiempos variables. En VoIP esto provoca audio robotizado o entrecortado."

},

{
question:"¿Qué problema afecta más directamente aplicaciones en tiempo real como videollamadas y VoIP?",

options:[

"Latencia",

"Escalabilidad",

"Topología",

"Ethernet"

],

answer:0,

explanation:"La latencia alta genera retrasos perceptibles en aplicaciones sensibles al tiempo como videollamadas y telefonía IP."

},

{
question:"¿Por qué QoS es importante en telefonía IP?",

options:[

"Porque elimina switches",

"Porque da prioridad al tráfico de voz",

"Porque reduce usuarios",

"Porque convierte WAN en LAN"

],

answer:1,

explanation:"La voz necesita transmisión rápida y constante. QoS prioriza paquetes de voz para evitar retrasos, jitter y pérdida de paquetes."

},

{
question:"¿Cuál tecnología está asociada principalmente con WLAN?",

options:[

"IEEE 802.11",

"IEEE 802.3",

"MPLS",

"ATM"

],

answer:0,

explanation:"IEEE 802.11 define estándares para redes inalámbricas WLAN basadas en Wi-Fi."
}

],

tema13:[

{
question:"¿Qué elemento NO pertenece a los componentes principales de una red empresarial?",
options:[
"Dispositivos finales",
"Dispositivos intermedios",
"Medios de transmisión",
"Sistemas operativos"
],
answer:3,
explanation:"Los componentes principales de una red empresarial son los dispositivos finales, dispositivos intermedios y medios de transmisión. Los sistemas operativos pueden existir dentro de los dispositivos, pero no son considerados uno de los componentes estructurales principales de la red."
},

{
question:"¿Qué característica define a un dispositivo final en una red?",
options:[
"Transporta paquetes entre redes",
"Genera o recibe datos",
"Bloquea tráfico según políticas",
"Regenera señales"
],
answer:1,
explanation:"Los dispositivos finales son los equipos donde se originan o reciben los datos. Son los hosts o endpoints que participan directamente en la comunicación de la red."
},

{
question:"¿Cuál de los siguientes es un dispositivo intermedio?",
options:[
"Laptop",
"Servidor",
"Switch",
"Impresora"
],
answer:2,
explanation:"El switch es un dispositivo intermedio porque se encarga de transportar y controlar el tráfico de red entre dispositivos."
},

{
question:"¿Qué componente permite físicamente que un dispositivo final se conecte a la red?",
options:[
"Firewall",
"WLC",
"NIC",
"Patch panel"
],
answer:2,
explanation:"La NIC (Network Interface Card) permite que el dispositivo final pueda conectarse y comunicarse dentro de la red."
},

{
question:"¿Qué afirmación sobre la NIC es correcta?",
options:[
"Solo funciona con fibra óptica",
"No utiliza el modelo TCP/IP",
"Puede ser cableada o inalámbrica",
"Únicamente existe en servidores"
],
answer:2,
explanation:"Las NIC pueden ser Ethernet o inalámbricas y están diseñadas para trabajar con el modelo TCP/IP."
},

{
question:"¿Qué función principal tiene un servidor?",
options:[
"Interconectar redes",
"Bloquear tráfico",
"Proporcionar servicios y recursos",
"Convertir señales eléctricas en ópticas"
],
answer:2,
explanation:"Los servidores proporcionan servicios y recursos a otros dispositivos finales llamados clientes."
},

{
question:"¿Qué ejemplo representa un servicio de servidor?",
options:[
"DHCP",
"Switching",
"Routing",
"Spanning Tree"
],
answer:0,
explanation:"DHCP es un servicio proporcionado por servidores para asignar direcciones IP automáticamente."
},

{
question:"¿Qué característica tienen los dispositivos intermedios?",
options:[
"Generan videos y páginas web",
"Solo funcionan en LAN",
"No generan datos, transportan tráfico",
"Solo utilizan direcciones MAC"
],
answer:2,
explanation:"Los dispositivos intermedios no generan información; solamente transportan, controlan y dirigen el tráfico."
},

{
question:"¿Qué función realiza un router?",
options:[
"Crear redes inalámbricas",
"Interconectar redes diferentes",
"Asignar direcciones MAC",
"Convertir fibra a cobre"
],
answer:1,
explanation:"El router se encarga de conectar redes distintas y transferir paquetes entre ellas."
},

{
question:"¿Qué utiliza un router para decidir por dónde enviar un paquete?",
options:[
"Direcciones MAC",
"SSID",
"Tabla de rutas",
"Canales inalámbricos"
],
answer:2,
explanation:"Los routers analizan tablas de rutas para determinar la mejor ruta hacia el destino."
},

{
question:"¿Qué identificador analiza principalmente un router?",
options:[
"Direcciones físicas",
"Direcciones lógicas IP",
"Nombres DNS",
"Puertos RJ45"
],
answer:1,
explanation:"Los routers trabajan analizando direcciones lógicas IP para tomar decisiones de enrutamiento."
},

{
question:"¿Qué dispositivo representa el primer punto de conexión de dispositivos finales cableados?",
options:[
"Firewall",
"Access Point",
"Switch",
"WLC"
],
answer:2,
explanation:"El switch es el primer punto de conexión de los dispositivos finales dentro de una red LAN cableada."
},

{
question:"¿Qué utilizan los switches para enviar tráfico dentro de una LAN?",
options:[
"Direcciones IP",
"Direcciones MAC",
"DNS",
"Frecuencias"
],
answer:1,
explanation:"Los switches utilizan direcciones MAC para identificar dispositivos dentro de la LAN."
},

{
question:"¿Qué característica tiene un switch de configuración fija?",
options:[
"Permite agregar módulos",
"No puede expandirse",
"Utiliza solo fibra",
"Funciona como router"
],
answer:1,
explanation:"Un switch fijo tiene una cantidad determinada de puertos y no se puede ampliar."
},

{
question:"¿Qué ventaja principal tiene un switch modular?",
options:[
"Menor costo",
"No necesita energía",
"Escalabilidad y alto rendimiento",
"Solo trabaja con cobre"
],
answer:2,
explanation:"Los switches modulares permiten agregar tarjetas y aumentar capacidad y rendimiento."
},

{
question:"¿Qué característica define a un switch stackable?",
options:[
"Solo funciona en nube",
"Permite unir varios switches físicos en uno lógico",
"Trabaja únicamente con fibra",
"Solo tiene 8 puertos"
],
answer:1,
explanation:"Los switches stackables permiten administrar varios switches físicos como un solo switch lógico."
},

{
question:"¿Qué ventaja ofrece un switch stackable?",
options:[
"Reduce velocidad",
"Elimina redundancia",
"Aumenta capacidad y redundancia",
"Impide crecimiento"
],
answer:2,
explanation:"El stacking mejora la escalabilidad y la redundancia de la red."
},

{
question:"¿Qué característica tiene un switch administrado desde la nube?",
options:[
"Solo puede configurarse localmente",
"Se administra mediante Internet",
"No requiere IP",
"Solo usa puertos seriales"
],
answer:1,
explanation:"Los switches cloud como Meraki permiten administración remota y centralizada."
},

{
question:"¿Qué representa un switch lógico?",
options:[
"Un switch dañado",
"Una división virtual mediante VLAN",
"Un switch sin puertos",
"Un AP inalámbrico"
],
answer:1,
explanation:"Un switch lógico puede representar divisiones virtuales dentro de un switch físico utilizando VLAN."
},

{
question:"¿Qué es un transceiver?",
options:[
"Un software de seguridad",
"Un dispositivo que adapta medios de transmisión",
"Un servidor DNS",
"Una tabla de rutas"
],
answer:1,
explanation:"El transceiver permite adaptar el puerto del dispositivo para trabajar con cobre o fibra."
},

{
question:"¿Qué tipo de transceiver utiliza luz para transmitir datos?",
options:[
"RJ45",
"UTP",
"SFP",
"PoE"
],
answer:2,
explanation:"Los transceivers SFP trabajan normalmente con fibra óptica y transmisión mediante luz."
},

{
question:"¿Qué ventaja principal tiene la fibra óptica sobre el cobre?",
options:[
"Menor velocidad",
"Mayor interferencia",
"Mayor distancia y capacidad",
"Menor seguridad"
],
answer:2,
explanation:"La fibra permite transmitir a largas distancias y manejar grandes cantidades de tráfico."
},

{
question:"¿Qué limitación importante tienen los cables UTP?",
options:[
"No utilizan electricidad",
"Máximo aproximado de 100 metros",
"No funcionan en switches",
"Solo sirven para teléfonos"
],
answer:1,
explanation:"Los cables de par trenzado tienen limitaciones de distancia cercanas a 100 metros."
},

{
question:"¿Qué dispositivo permite conexión inalámbrica a la red?",
options:[
"Router",
"Firewall",
"Access Point",
"Hub"
],
answer:2,
explanation:"El Access Point permite que dispositivos inalámbricos accedan a la red mediante WiFi."
},

{
question:"¿Qué estándar utiliza principalmente un Access Point?",
options:[
"802.3",
"802.11",
"PPP",
"MPLS"
],
answer:1,
explanation:"Los AP trabajan con los estándares inalámbricos IEEE 802.11."
},

{
question:"¿Qué estándar está relacionado con Ethernet?",
options:[
"802.11",
"802.3",
"802.1X",
"802.15"
],
answer:1,
explanation:"802.3 es el estándar relacionado con Ethernet y redes cableadas."
},

{
question:"¿Qué frecuencia utiliza el estándar 802.11a?",
options:[
"2.4 GHz",
"5 GHz",
"900 MHz",
"60 GHz"
],
answer:1,
explanation:"802.11a trabaja en la banda de 5 GHz."
},

{
question:"¿Qué frecuencia proporciona mayor alcance?",
options:[
"5 GHz",
"2.4 GHz",
"60 GHz",
"40 GHz"
],
answer:1,
explanation:"2.4 GHz ofrece mayor alcance aunque menor capacidad."
},

{
question:"¿Qué frecuencia proporciona mayor capacidad y velocidad?",
options:[
"2.4 GHz",
"900 MHz",
"5 GHz",
"Bluetooth"
],
answer:2,
explanation:"Las frecuencias más altas como 5 GHz permiten transmitir más información."
},

{
question:"¿Qué problema existe normalmente en 2.4 GHz?",
options:[
"Menor compatibilidad",
"Interferencia",
"No transmite datos",
"No funciona con WiFi"
],
answer:1,
explanation:"2.4 GHz suele sufrir interferencias con Bluetooth, microondas y dispositivos IoT."
},

{
question:"¿Qué significa capacidad en redes inalámbricas?",
options:[
"Cantidad de usuarios",
"Cantidad de datos transmitidos por segundo",
"Cantidad de antenas",
"Cantidad de routers"
],
answer:1,
explanation:"Capacidad representa la velocidad o cantidad de datos transmitidos por segundo."
},

{
question:"¿Qué administra un WLC?",
options:[
"Routers",
"Servidores",
"Múltiples Access Points",
"Firewalls"
],
answer:2,
explanation:"El Wireless LAN Controller permite administrar múltiples AP desde un punto central."
},

{
question:"¿Qué ventaja ofrece un WLC?",
options:[
"Eliminar WiFi",
"Administración centralizada",
"Reducir cobertura",
"Eliminar usuarios"
],
answer:1,
explanation:"El WLC simplifica la configuración y monitoreo centralizado de la red inalámbrica."
},

{
question:"¿Qué dispositivo se enfoca principalmente en seguridad?",
options:[
"Switch",
"Firewall",
"Hub",
"Repeater"
],
answer:1,
explanation:"El firewall monitorea, permite y bloquea tráfico según políticas de seguridad."
},

{
question:"¿Qué realiza un firewall cuando detecta tráfico prohibido?",
options:[
"Aumenta velocidad",
"Reenvía el tráfico",
"Descarta o bloquea tráfico",
"Apaga el switch"
],
answer:2,
explanation:"El firewall analiza políticas y puede bloquear tráfico no autorizado."
},

{
question:"¿Por qué un firewall dedicado es mejor que un router realizando seguridad básica?",
options:[
"Porque tiene menos funciones",
"Porque está especializado en seguridad avanzada",
"Porque no usa CPU",
"Porque elimina el routing"
],
answer:1,
explanation:"Los firewalls tienen capacidades avanzadas como inspección profunda y prevención de intrusiones."
},

{
question:"¿Qué riesgo tiene un dispositivo todo en uno empresarial?",
options:[
"Mayor escalabilidad",
"Punto único de falla",
"Más redundancia",
"Mayor modularidad"
],
answer:1,
explanation:"Si falla un dispositivo multifunción, todas sus funciones se ven afectadas."
},

{
question:"¿Qué característica tienen las redes modernas respecto a seguridad?",
options:[
"Todo el tráfico pasa por un solo firewall",
"El tráfico está descentralizado",
"No usan Internet",
"No existen amenazas"
],
answer:1,
explanation:"Actualmente el tráfico entra y sale por múltiples puntos, complicando la seguridad."
},

{
question:"¿Qué problema pueden representar los trabajadores remotos?",
options:[
"Mayor redundancia",
"Mayor velocidad Ethernet",
"Introducción de malware a la red corporativa",
"Eliminación de firewalls"
],
answer:2,
explanation:"Los usuarios remotos pueden infectarse y luego introducir amenazas a la red empresarial."
},

{
question:"¿Qué plataforma protege principalmente navegación web?",
options:[
"ESA",
"WSA",
"AMP",
"ISE"
],
answer:1,
explanation:"WSA (Web Security Appliance) protege contra amenazas relacionadas con navegación web."
},

{
question:"¿Qué plataforma protege principalmente correo electrónico?",
options:[
"AMP",
"ESA",
"WLC",
"Meraki"
],
answer:1,
explanation:"ESA se especializa en protección contra amenazas presentes en correos electrónicos."
},

{
question:"¿Qué significa NGFW?",
options:[
"New Gateway Firewall",
"Next-Generation Firewall",
"Network Global Firewall",
"Next Generic Firewall"
],
answer:1,
explanation:"NGFW significa Next-Generation Firewall y ofrece seguridad avanzada."
},

{
question:"¿Qué tecnología puede bloquear aplicaciones como YouTube o Facebook?",
options:[
"Hub",
"NGFW",
"Patch panel",
"Repeater"
],
answer:1,
explanation:"Los firewalls de nueva generación pueden inspeccionar aplicaciones específicas."
},

{
question:"¿Qué función realiza AMP?",
options:[
"Administrar AP",
"Proteger contra malware",
"Convertir señales",
"Asignar VLAN"
],
answer:1,
explanation:"AMP protege dispositivos finales frente a malware y comportamientos sospechosos."
},

{
question:"¿Qué solución controla acceso a la red según políticas de dispositivos?",
options:[
"ISE",
"WSA",
"ESA",
"STP"
],
answer:0,
explanation:"ISE permite controlar acceso basado en seguridad y cumplimiento."
},

{
question:"¿Qué dispositivo normalmente tiene muchos puertos de la misma tecnología?",
options:[
"Router",
"Firewall",
"Switch",
"WLC"
],
answer:2,
explanation:"Los switches poseen muchos puertos Ethernet similares."
},

{
question:"¿Qué característica tienen normalmente los routers?",
options:[
"Muchos puertos iguales",
"Pocos puertos y tecnologías variadas",
"Solo trabajan inalámbricamente",
"No usan tablas"
],
answer:1,
explanation:"Los routers suelen tener menos puertos y soportar distintas tecnologías."
},

{
question:"¿Qué medio transmite mediante luz?",
options:[
"UTP",
"Coaxial",
"Fibra óptica",
"RJ45"
],
answer:2,
explanation:"La fibra óptica transmite información usando pulsos de luz."
},

{
question:"¿Qué medio es inmune a muchas interferencias eléctricas?",
options:[
"UTP",
"Coaxial",
"Fibra óptica",
"Bluetooth"
],
answer:2,
explanation:"La fibra óptica no sufre interferencias eléctricas como muchos medios de cobre."
},

{
question:"¿Qué función realizan los dispositivos intermedios respecto a señales?",
options:[
"Las destruyen",
"Las regeneran y retransmiten",
"Las convierten en audio",
"No trabajan con señales"
],
answer:1,
explanation:"Los dispositivos intermedios regeneran señales debilitadas para mantener comunicación estable."
},


{
question:"¿Qué afirmaciones son correctas respecto a las soluciones inalámbricas? (Elige 2)",
options:[
"A mayor frecuencia disponemos de un canal más angosto para transportar información",
"A mayor frecuencia disponemos de un canal más amplio para transportar información",
"A mayor frecuencia la señal tiene mayor alcance",
"A mayor frecuencia la señal tiene menor alcance"
],
answer:[1,3],
multiple:true,
explanation:"Las frecuencias altas como 5 GHz permiten canales más amplios y mayor capacidad de transmisión, pero su alcance es menor porque la señal se atenúa más rápido y atraviesa peor los obstáculos. Las frecuencias bajas como 2.4 GHz tienen mayor alcance pero menor capacidad."
},

{
question:"Los routers tienen pocos puertos que generalmente utilizan tecnologías diferentes.",
options:[
"Verdadero",
"Falso"
],
answer:0,
explanation:"Los routers normalmente poseen pocos puertos comparados con un switch, pero soportan múltiples tecnologías y tipos de conexión como Ethernet, fibra, seriales o WAN."
},

{
question:"¿Cuáles son actualmente requerimientos de los endpoints para comunicarse en una red? (Elige 3)",
options:[
"Deben tener tarjetas NIC",
"Deben trabajar con el modelo TCP/IP",
"Deben tener direcciones únicas",
"Deben trabajar con el protocolo Ethernet",
"Deben utilizar cables de fibra óptica",
"Deben conectarse a un router",
"Deben utilizar cables de par trenzado"
],
answer:[0,1,2],
multiple:true,
explanation:"Los endpoints necesitan una NIC para conectarse, utilizar TCP/IP para comunicarse y contar con identificadores únicos como direcciones IP y MAC. No necesariamente deben usar fibra, Ethernet o conectarse directamente a un router."
},

{
question:"¿Qué afirmación es correcta respecto a una red de computadoras?",
options:[
"Una computadora conectada a otra computadora es considerada una red de computadoras",
"Una red de computadoras solo se puede construir con un switch",
"Una red de computadoras solo se puede construir con un router",
"Una red de computadoras tiene que tener un firewall, un router y un switch",
"Ninguna de las anteriores"
],
answer:0,
explanation:"Una red existe cuando dos o más dispositivos pueden comunicarse entre sí. Incluso dos computadoras conectadas directamente ya forman una red básica."
},

{
question:"¿Cuáles son funciones de los dispositivos intermedios? (Elige 6)",
options:[
"Integran a la red a los dispositivos finales",
"Se encargan de enviar los datos de un punto a otro en la red",
"Interconectan diferentes redes",
"Regeneran y retransmiten los datos",
"Priorizan y deniegan flujos de datos",
"Se comunican con otros dispositivos intermedios para notificación de eventos",
"Generalmente son los dispositivos que generan los datos en la red",
"Se encargan de enviar los datos a los routers y switches"
],
answer:[0,1,2,3,4,5],
multiple:true,
explanation:"Los dispositivos intermedios controlan, transportan, regeneran, priorizan y administran el tráfico dentro de la red. No son normalmente quienes generan la información; esa función corresponde a los dispositivos finales."
},

{
question:"¿Cuáles de los siguientes son dispositivos intermedios? (Elige 4)",
options:[
"Switch",
"Router",
"Firewall",
"Access Point",
"Servidor",
"PC"
],
answer:[0,1,2,3],
multiple:true,
explanation:"Switches, routers, firewalls y access points son dispositivos intermedios porque transportan, controlan o protegen el tráfico de red."
},

{
question:"¿Qué funciones realizan los dispositivos intermedios? (Elige 3)",
options:[
"Transportan y generan datos",
"Integran dispositivos finales a la red",
"Envían datos de un punto a otro",
"Interconectan redes"
],
answer:[1,2,3],
multiple:true,
explanation:"Los dispositivos intermedios integran hosts a la red, envían tráfico y conectan redes diferentes. Normalmente no generan datos; eso lo hacen los dispositivos finales."
},

{
question:"¿Qué caracteriza a un switch modular?",
options:[
"Tiene puertos fijos sin posibilidad de expansión",
"Puede agregar módulos para aumentar capacidad y rendimiento",
"Solo trabaja con Wi-Fi",
"No puede utilizar fibra óptica"
],
answer:1,
explanation:"Los switches modulares permiten agregar tarjetas o módulos adicionales, aumentando capacidad, escalabilidad y rendimiento. Por eso suelen utilizarse como núcleo o core empresarial."
},

{
question:"¿Por qué los switches modulares suelen utilizarse en el núcleo de la red?",
options:[
"Porque manejan poco tráfico",
"Porque son económicos",
"Porque soportan alto tráfico y alta capacidad",
"Porque reemplazan routers"
],
answer:2,
explanation:"Los switches modulares se utilizan en el core debido a su gran capacidad de procesamiento, escalabilidad y soporte para enormes cantidades de tráfico."
},

{
question:"¿Qué característica tiene un switch administrado en nube?",
options:[
"Solo puede administrarse localmente",
"Se configura y monitorea mediante Internet",
"No necesita dirección IP",
"Solo funciona con fibra óptica"
],
answer:1,
explanation:"Los switches administrados en nube permiten configuración, monitoreo y administración remota mediante plataformas en Internet."
},

{
question:"¿Qué significa SFP?",
options:[
"Simple Fiber Port",
"Small Form-factor Pluggable",
"Secure Fiber Protocol",
"Standard Fast Port"
],
answer:1,
explanation:"SFP significa Small Form-factor Pluggable y es un tipo de transceiver modular muy utilizado en redes modernas."
},

{
question:"¿Qué ventaja ofrecen normalmente los módulos SFP?",
options:[
"Menor velocidad",
"Mayor velocidad y flexibilidad",
"No utilizan fibra",
"Solo funcionan en routers domésticos"
],
answer:1,
explanation:"Los módulos SFP permiten utilizar diferentes tipos de fibra o cobre y soportan altas velocidades de transmisión."
},

{
question:"¿Qué es un estándar en redes?",
options:[
"Un dispositivo de seguridad",
"Un conjunto de reglas y especificaciones para comunicación",
"Un tipo de router",
"Un protocolo propietario"
],
answer:1,
explanation:"Un estándar define reglas y especificaciones que permiten que diferentes dispositivos y fabricantes puedan comunicarse correctamente."
},

{
question:"¿Qué dispositivos son considerados dispositivos finales? (Elige 3)",
options:[
"PC",
"Teléfonos",
"Servidores",
"Switches",
"Routers"
],
answer:[0,1,2],
multiple:true,
explanation:"Los dispositivos finales generan o reciben información. PCs, teléfonos y servidores son ejemplos de endpoints."
},

{
question:"¿Qué estándar WiFi opera en 2.4 GHz y fue uno de los primeros ampliamente utilizados?",
options:[
"802.11a",
"802.11b",
"802.11ac",
"802.11ax"
],
answer:1,
explanation:"802.11b opera en 2.4 GHz y fue uno de los primeros estándares WiFi ampliamente adoptados."
},

{
question:"¿Qué estándar inalámbrico trabaja principalmente en 5 GHz?",
options:[
"802.11a",
"802.11b",
"802.11g",
"802.11n"
],
answer:0,
explanation:"802.11a trabaja en la banda de 5 GHz ofreciendo mayor capacidad pero menor alcance."
},

{
question:"¿Qué estándar inalámbrico puede trabajar tanto en 2.4 GHz como en 5 GHz?",
options:[
"802.11g",
"802.11n",
"802.11b",
"802.11a"
],
answer:1,
explanation:"802.11n puede operar en ambas bandas, mejorando velocidad y flexibilidad."
},

{
question:"¿Qué medios inalámbricos utilizan el espectro electromagnético? (Elige 4)",
options:[
"WiFi",
"Microondas",
"Antenas",
"Satélites",
"UTP"
],
answer:[0,1,2,3],
multiple:true,
explanation:"Los medios inalámbricos utilizan el espectro electromagnético para transmitir información sin cables físicos."
},

{
question:"¿Qué suele generar interferencia en la banda de 2.4 GHz? (Elige 4)",
options:[
"WiFi",
"Bluetooth",
"Microondas",
"Dispositivos IoT",
"Fibra óptica"
],
answer:[0,1,2,3],
multiple:true,
explanation:"La banda 2.4 GHz es muy utilizada por múltiples tecnologías, provocando interferencias frecuentes."
},

{
question:"¿Qué diferencia importante existe entre SFP y SFP+?",
options:[
"SFP+ normalmente soporta mayores velocidades",
"SFP utiliza únicamente cobre",
"SFP+ solo funciona en routers",
"No existe diferencia"
],
answer:0,
explanation:"SFP+ es una evolución de SFP diseñada para soportar velocidades mayores, comúnmente 10 Gbps o superiores dependiendo de la implementación."
},

{
question:"¿Qué velocidad suele asociarse comúnmente con SFP+?",
options:[
"10 Mbps",
"100 Mbps",
"1 Gbps",
"10 Gbps"
],
answer:3,
explanation:"SFP+ es ampliamente utilizado para enlaces de 10 Gigabit Ethernet en redes empresariales y data centers."
},

{
question:"¿Por qué SFP+ es importante en redes empresariales modernas?",
options:[
"Porque reduce capacidad",
"Porque permite enlaces de alta velocidad",
"Porque elimina switches",
"Porque reemplaza routers"
],
answer:1,
explanation:"SFP+ permite manejar enormes cantidades de tráfico a altas velocidades, siendo fundamental en núcleos empresariales y data centers."
},

{
question:"Una empresa desea máxima velocidad inalámbrica aunque el alcance sea menor. ¿Qué frecuencia sería mejor?",
options:[
"2.4 GHz",
"5 GHz",
"900 MHz",
"Bluetooth"
],
answer:1,
explanation:"5 GHz proporciona mayor capacidad y velocidad, aunque con menor alcance que 2.4 GHz."
},

{
question:"¿Qué sucede si un servidor alcanza su límite de recursos?",
options:[
"Mejora rendimiento",
"Se vuelve router",
"Disminuye rendimiento",
"Apaga switches"
],
answer:2,
explanation:"Cuando un servidor alcanza límites de CPU o memoria, el rendimiento disminuye."
},

{
question:"¿Por qué Netflix utiliza múltiples servidores?",
options:[
"Porque un servidor no puede escalar indefinidamente",
"Porque no existen routers",
"Porque Ethernet falla",
"Porque WiFi es lento"
],
answer:0,
explanation:"Servicios masivos requieren múltiples servidores distribuidos para escalabilidad y rendimiento."
}

],


tema14:[

{
question:"¿Qué es una red LAN?",
options:[
"Consiste en un conjunto de dispositivos interconectados dentro de una zona limitada o pequeña",
"Consisten en dispositivos interconectados a distancias considerables",
"Es una red donde los dispositivos se encuentran interconectados a través de medios inalámbricos",
"Es una red que consiste en la conexión de 2 dispositivos"
],
answer:0,
explanation:"Una LAN (Local Area Network) conecta dispositivos dentro de una zona limitada como una casa, oficina o edificio. Generalmente ofrece altas velocidades y baja latencia."
},



{
question:"¿Qué característica del diseño jerárquico organiza la red en capas donde cada dispositivo tiene una función específica?",
options:[
"Resiliencia",
"Flexibilidad",
"Jerarquía",
"QoS"
],
answer:2,
explanation:"La jerarquía divide la red en capas organizadas donde cada dispositivo tiene una función específica. Esto simplifica administración, crecimiento y troubleshooting."
},

{
question:"¿Qué característica permite que la red crezca sin afectar su rendimiento?",
options:[
"Convergencia",
"Escalabilidad",
"Broadcast",
"Latencia"
],
answer:1,
explanation:"La escalabilidad permite que la red crezca o añada servicios sin afectar el funcionamiento ni perder rendimiento."
},

{
question:"¿Qué característica permite que la red continúe funcionando después de una falla?",
options:[
"QoS",
"Resiliencia",
"VLAN",
"Broadcast"
],
answer:1,
explanation:"La resiliencia es la capacidad de recuperarse o adaptarse después de una falla manteniéndose disponible."
},

{
question:"¿Qué característica permite realizar cambios o ampliaciones sin afectar toda la red?",
options:[
"Flexibilidad",
"Routing",
"PoE",
"Backbone"
],
answer:0,
explanation:"La flexibilidad permite modificar o ampliar partes de la red sin afectar toda la infraestructura."
},

{
question:"¿Qué significa redundancia en redes?",
options:[
"Eliminar dispositivos",
"Existencia de enlaces o dispositivos adicionales",
"Reducir velocidad",
"Eliminar routing"
],
answer:1,
explanation:"La redundancia significa tener caminos o equipos adicionales para mantener operación si ocurre una falla."
},

{
question:"¿Qué permite la redundancia?",
options:[
"Reducir disponibilidad",
"Tolerancia a fallas",
"Eliminar switches",
"Eliminar routing"
],
answer:1,
explanation:"La redundancia proporciona caminos alternos permitiendo tolerancia a fallas y mayor disponibilidad."
},

{
question:"¿Qué es convergencia en redes?",
options:[
"Tiempo que tarda la red en recuperarse después de una falla",
"Cantidad de VLAN",
"Cantidad de routers",
"Capacidad de PoE"
],
answer:0,
explanation:"La convergencia representa qué tan rápido la red se recupera después de una falla."
},

{
question:"¿Qué relación es correcta?",
options:[
"QoS → VLAN → Broadcast",
"Redundancia → tolerancia a fallas → resiliencia",
"ACL → convergencia → PoE",
"Backbone → broadcast → colisión"
],
answer:1,
explanation:"La redundancia proporciona caminos alternos, permitiendo tolerancia a fallas y resiliencia."
},

{
question:"¿Qué dispositivos se conectan normalmente en la capa de acceso? (Elige 4)",
options:[
"Computadoras",
"Laptops",
"Impresoras",
"Teléfonos IP",
"Routers WAN",
"Servidores Core"
],
answer:[0,1,2,3],
multiple:true,
explanation:"La capa de acceso conecta dispositivos finales como PCs, laptops, impresoras y teléfonos IP."
},

{
question:"¿Qué funciones se realizan normalmente en la capa de acceso? (Elige 4)",
options:[
"Seguridad de puerto",
"PoE",
"VLAN",
"Acceso a usuarios",
"Backbone principal",
"Routing WAN"
],
answer:[0,1,2,3],
multiple:true,
explanation:"La capa de acceso conecta usuarios y normalmente implementa VLAN, PoE y seguridad de puerto."
},

{
question:"¿Qué dispositivos suelen encontrarse en la capa de distribución? (Elige 2)",
options:[
"Switches capa 3",
"Routers",
"Impresoras",
"Teléfonos IP"
],
answer:[0,1],
multiple:true,
explanation:"La distribución suele utilizar switches capa 3 y routers para aplicar políticas y routing."
},

{
question:"¿Qué funciones se realizan normalmente en distribución? (Elige 4)",
options:[
"Routing",
"Inter-VLAN routing",
"ACL",
"Redundancia",
"Conectar usuarios finales",
"PoE"
],
answer:[0,1,2,3],
multiple:true,
explanation:"La capa de distribución aplica políticas, routing y redundancia."
},

{
question:"¿Qué significa QoS?",
options:[
"Priorizar tráfico en la red",
"Eliminar VLAN",
"Bloquear switches",
"Reducir redundancia"
],
answer:0,
explanation:"QoS (Quality of Service) prioriza ciertos tipos de tráfico para evitar interrupciones."
},

{
question:"¿Cuál tráfico debe tener mayor prioridad según QoS?",
options:[
"Descargas",
"Datos",
"Video",
"Voz"
],
answer:3,
explanation:"La voz debe tener máxima prioridad porque es sensible a retrasos y cortes."
},

{
question:"¿Cuál es el orden correcto de prioridad QoS?",
options:[
"Datos > voz > video",
"Video > voz > datos",
"Voz > video > datos",
"Video > datos > voz"
],
answer:2,
explanation:"En QoS normalmente se prioriza primero voz, luego video y al final datos."
},

{
question:"¿Qué es un dominio de broadcast?",
options:[
"Conjunto de dispositivos que reciben mensajes broadcast",
"Conjunto de routers WAN",
"Conjunto de enlaces de fibra",
"Conjunto de switches núcleo"
],
answer:0,
explanation:"Un dominio de broadcast incluye todos los dispositivos que reciben mensajes enviados a todos."
},

{
question:"¿Qué afirmación es correcta respecto a VLANs?",
options:[
"Un broadcast de VLAN 10 puede llegar siempre a VLAN 20",
"Las VLAN eliminan routing",
"Un broadcast de VLAN 10 NO llega a VLAN 20",
"Las VLAN eliminan switches"
],
answer:2,
explanation:"Las VLAN segmentan la red, evitando que broadcasts se propaguen entre VLAN distintas."
},

{
question:"¿Qué es un dominio de colisión?",
options:[
"Área donde pueden ocurrir colisiones",
"Área de routing",
"Área de backbone",
"Área WAN"
],
answer:0,
explanation:"Un dominio de colisión es el área donde dos dispositivos podrían transmitir al mismo tiempo."
},

{
question:"¿Qué ocurre con switches modernos respecto a colisiones?",
options:[
"Cada switch elimina Internet",
"Cada puerto es un dominio de colisión",
"Todos los puertos son un solo dominio",
"Los switches aumentan colisiones"
],
answer:1,
explanation:"En switches modernos cada puerto representa un dominio de colisión independiente."
},

{
question:"¿Cuál es la función principal del núcleo?",
options:[
"Conectar usuarios finales",
"Transportar datos rápidamente",
"Aplicar ACL",
"Configurar PoE"
],
answer:1,
explanation:"El núcleo se enfoca en transporte rápido de datos, baja latencia y alta disponibilidad."
},

{
question:"¿Qué características tiene normalmente el núcleo? (Elige 4)",
options:[
"Baja latencia",
"Redundancia",
"Tolerancia a fallas",
"Convergencia rápida",
"Conectar impresoras",
"PoE"
],
answer:[0,1,2,3],
multiple:true,
explanation:"El núcleo está diseñado para máxima velocidad, disponibilidad y recuperación rápida."
},

{
question:"¿Qué significa backbone?",
options:[
"Parte central que transporta mayor tráfico",
"Conjunto de impresoras",
"Tipo de VLAN",
"Switch doméstico"
],
answer:0,
explanation:"El backbone corresponde a la parte principal de transporte de tráfico en la red."
},

{
question:"¿Dónde es más crítica la alta disponibilidad?",
options:[
"Acceso",
"Núcleo",
"Impresoras",
"Usuarios"
],
answer:1,
explanation:"Aunque existe en todas las capas, en el núcleo es crítica porque transporta el tráfico principal."
},

{
question:"¿Qué conexiones suelen existir en el núcleo? (Elige 4)",
options:[
"Data Center",
"Servicios de red",
"Internet",
"WAN",
"PCs domésticas"
],
answer:[0,1,2,3],
multiple:true,
explanation:"El núcleo suele conectar data centers, servicios, WAN e Internet."
},

{
question:"¿Qué característica tiene el diseño Collapsed Core?",
options:[
"Elimina acceso",
"Combina núcleo y distribución",
"Elimina routing",
"Solo usa hubs"
],
answer:1,
explanation:"Collapsed Core combina las funciones de distribución y núcleo en una sola capa."
},

{
question:"¿Dónde suele utilizarse un diseño de 2 capas?",
options:[
"Redes pequeñas y medianas",
"Solo proveedores ISP",
"Solo redes WAN",
"Solo data centers"
],
answer:0,
explanation:"El diseño de núcleo colapsado suele utilizarse en empresas pequeñas y medianas."
},

{
question:"¿Qué ventajas tiene el diseño de núcleo colapsado? (Elige 3)",
options:[
"Menor costo",
"Menos equipos",
"Diseño simple",
"Mayor complejidad"
],
answer:[0,1,2],
multiple:true,
explanation:"El collapsed core reduce costos y simplifica el diseño."
},

{
question:"¿Qué muestra un diagrama físico?",
options:[
"Direcciones IP",
"VLAN",
"Dispositivos, cables y racks",
"ACL"
],
answer:2,
explanation:"El diagrama físico muestra conexiones físicas, racks, puertos y cableado."
},

{
question:"¿Qué muestra un diagrama lógico?",
options:[
"Cables físicos",
"Racks",
"Direcciones IP, VLAN y routing",
"Patch panels"
],
answer:2,
explanation:"El diagrama lógico representa funcionamiento lógico de la red."
},

{
question:"¿Qué topología conecta únicamente 2 dispositivos?",
options:[
"Mesh",
"Estrella",
"Punto a punto",
"Híbrida"
],
answer:2,
explanation:"Punto a punto conecta directamente dos dispositivos."
},

{
question:"¿Qué característica tiene la topología estrella?",
options:[
"No utiliza switch central",
"Todos conectan directamente a todos",
"Utiliza un switch central",
"Solo funciona en WAN"
],
answer:2,
explanation:"En estrella los dispositivos se conectan a un equipo central normalmente un switch."
},

{
question:"¿Qué desventaja tiene estrella?",
options:[
"No es escalable",
"Si falla el switch central puede fallar la red",
"No utiliza switches",
"No permite VLAN"
],
answer:1,
explanation:"El switch central representa un posible punto único de falla."
},

{
question:"¿Qué características tiene Mesh? (Elige 3)",
options:[
"Múltiples caminos",
"Alta redundancia",
"Alta disponibilidad",
"Menor costo"
],
answer:[0,1,2],
multiple:true,
explanation:"Mesh proporciona múltiples rutas redundantes y alta disponibilidad."
},

{
question:"¿Qué desventaja tiene Mesh?",
options:[
"No tiene redundancia",
"No tiene switches",
"Es costosa",
"No funciona en LAN"
],
answer:2,
explanation:"Las topologías mesh requieren muchos enlaces y equipos, aumentando costo."
},

{
question:"¿Qué característica tiene Mesh parcial?",
options:[
"Todos conectados con todos",
"No existe redundancia",
"No todos conectados entre sí",
"Solo funciona en WAN"
],
answer:2,
explanation:"En mesh parcial algunos dispositivos tienen redundancia pero no todos conectan entre sí."
},

{
question:"¿Qué es una topología híbrida?",
options:[
"Topología con solo routers",
"Combinación de topologías",
"Conexión de 2 PCs",
"Tipo de VLAN"
],
answer:1,
explanation:"La híbrida mezcla diferentes topologías como estrella y mesh parcial."
},

{
question:"¿Qué combinación suele existir en empresas reales?",
options:[
"Punto a punto + bus",
"Estrella + mesh parcial",
"Solo mesh total",
"Solo anillo"
],
answer:1,
explanation:"Las empresas modernas normalmente utilizan diseños híbridos."
},

{
question:"¿Qué afirmación es correcta sobre LAN y WAN?",
options:[
"WAN normalmente es más rápida",
"LAN normalmente es más rápida",
"Tienen misma latencia",
"WAN tiene menos equipos"
],
answer:1,
explanation:"LAN suele ser más rápida porque opera en distancias cortas y con menos equipos intermedios."
},

{
question:"¿Por qué WAN suele tener mayor latencia?",
options:[
"Porque tiene menos dispositivos",
"Porque usa largas distancias y más equipos intermedios",
"Porque elimina routing",
"Porque utiliza PoE"
],
answer:1,
explanation:"WAN atraviesa grandes distancias y múltiples dispositivos intermedios aumentando latencia."
},

{
question:"Una empresa necesita que si falla un switch capa 3 del núcleo otro continúe realizando routing automáticamente. ¿Qué característica busca implementar?",
options:[
"Broadcast",
"QoS",
"Alta disponibilidad y tolerancia a fallas",
"PoE"
],
answer:2,
explanation:"La alta disponibilidad y tolerancia a fallas permiten que otro dispositivo continúe operando si ocurre una falla."
},

{
question:"Una empresa desea evitar cortes en llamadas VoIP durante descargas grandes. ¿Qué tecnología debe implementar?",
options:[
"VLAN",
"QoS",
"PoE",
"Broadcast"
],
answer:1,
explanation:"QoS prioriza tráfico sensible como voz sobre descargas y datos."
},




{
question:"¿Qué es una red WAN?",
options:[
"Es una red conformada por un conjunto de dispositivos interconectados dentro de una zona limitada o pequeña",
"Es una red conformada por un conjunto de dispositivos interconectados a distancias considerables",
"Es una red conformada por un conjunto de dispositivos interconectados a través de medios inalámbricos",
"Es una red conformada por 2 dispositivos interconectados"
],
answer:1,
explanation:"WAN (Wide Area Network) conecta redes y dispositivos a grandes distancias geográficas como ciudades, países o continentes."
},

{
question:"Generalmente las velocidades de las redes WAN son mayores a las velocidades encontradas en las redes LAN.",
options:[
"Falso",
"Verdadero"
],
answer:0,
explanation:"Las LAN normalmente poseen velocidades mucho mayores que las WAN debido a que operan en distancias cortas y con infraestructura controlada."
},

{
question:"¿Qué característica simplifica la operación, administración e implementación de la red?",
options:[
"Jerarquía",
"Modularidad",
"Resiliencia",
"Flexibilidad"
],
answer:0,
explanation:"La jerarquía divide la red en capas organizadas, facilitando administración, troubleshooting y crecimiento."
},

{
question:"¿Qué característica permite que nuevos servicios puedan añadirse sin afectar al usuario final?",
options:[
"Jerarquía",
"Modularidad",
"Resiliencia",
"Flexibilidad"
],
answer:1,
explanation:"La modularidad divide la red en módulos independientes permitiendo agregar servicios sin afectar toda la infraestructura."
},

{
question:"Ocurre una falla de un switch, sin embargo la red sigue operando sin afectar al usuario final.",
options:[
"Jerarquía",
"Modularidad",
"Resiliencia",
"Flexibilidad"
],
answer:2,
explanation:"La resiliencia permite que la red continúe funcionando aun cuando ocurre una falla."
},

{
question:"¿Qué característica permite utilizar todos los recursos de la red?",
options:[
"Jerarquía",
"Modularidad",
"Resiliencia",
"Flexibilidad"
],
answer:3,
explanation:"La flexibilidad permite aprovechar recursos y adaptarse fácilmente a nuevas necesidades."
},

{
question:"¿Cuáles son los niveles del modelo jerárquico de 3 capas? (Elige 3)",
options:[
"Acceso",
"Núcleo",
"Distribución",
"Internet",
"Servicios",
"Nube",
"Núcleo colapsado"
],
answer:[0,1,2],
multiple:true,
explanation:"El modelo jerárquico clásico está formado por Acceso, Distribución y Núcleo."
},

{
question:"¿En qué capa se conectan los dispositivos finales?",
options:[
"Acceso",
"Núcleo",
"Distribución",
"Internet",
"Servicios",
"Nube",
"Núcleo colapsado"
],
answer:0,
explanation:"La capa de acceso es donde se conectan PCs, teléfonos IP y otros dispositivos finales."
},

{
question:"¿En qué capa se aplican normalmente políticas de seguridad de puerto?",
options:[
"Acceso",
"Núcleo",
"Distribución",
"Internet",
"Servicios",
"Nube",
"Núcleo colapsado"
],
answer:0,
explanation:"Las políticas de seguridad de puerto suelen configurarse en la capa de acceso porque ahí se conectan los usuarios."
},

{
question:"¿En qué capa se encuentran switches, hubs y access points?",
options:[
"Acceso",
"Núcleo",
"Distribución",
"Internet",
"Servicios",
"Nube",
"Núcleo colapsado"
],
answer:0,
explanation:"La capa de acceso contiene dispositivos que conectan directamente a los usuarios finales."
},

{
question:"¿En qué capa se intenta realizar principalmente tareas de enrutamiento dedicado?",
options:[
"Acceso",
"Núcleo",
"Distribución",
"Internet",
"Servicios",
"Nube",
"Núcleo colapsado"
],
answer:1,
explanation:"La capa núcleo busca transportar tráfico rápidamente realizando principalmente routing eficiente."
},

{
question:"¿En qué capa suele utilizarse PoE?",
options:[
"Acceso",
"Núcleo",
"Distribución",
"Internet",
"Servicios",
"Nube",
"Núcleo colapsado"
],
answer:0,
explanation:"PoE normalmente se implementa en switches de acceso para alimentar teléfonos IP y access points."
},

{
question:"¿Qué capa es considerada el backbone de la red?",
options:[
"Acceso",
"Núcleo",
"Distribución",
"Internet",
"Servicios",
"Nube"
],
answer:1,
explanation:"La capa núcleo es el backbone debido a que conecta las partes principales de la red a alta velocidad."
},

{
question:"¿Qué capas forman el núcleo colapsado? (Elige 2)",
options:[
"Acceso",
"Núcleo",
"Distribución",
"Internet",
"Servicios",
"Nube",
"Núcleo colapsado"
],
answer:[1,2],
multiple:true,
explanation:"El núcleo colapsado combina las funciones de distribución y núcleo en una sola capa."
},

{
question:"¿Qué capa concentra conexiones provenientes de switches de distribución?",
options:[
"Acceso",
"Núcleo",
"Distribución",
"Internet",
"Servicios",
"Nube",
"Núcleo colapsado"
],
answer:1,
explanation:"El núcleo concentra conexiones de alta velocidad provenientes de distribución."
},

{
question:"¿En qué capa suelen encontrarse los switches más robustos?",
options:[
"Acceso",
"Núcleo",
"Distribución",
"Internet",
"Servicios",
"Nube"
],
answer:1,
explanation:"Los switches más potentes normalmente se ubican en el núcleo debido al enorme tráfico que manejan."
},

{
question:"¿En qué capa suelen implementarse políticas de QoS?",
options:[
"Acceso",
"Núcleo",
"Distribución",
"Internet",
"Servicios",
"Nube"
],
answer:2,
explanation:"La capa de distribución suele aplicar políticas QoS y filtrado antes de enviar tráfico al núcleo."
},

{
question:"¿Qué capa representa normalmente el límite de dominios broadcast y colisión?",
options:[
"Acceso",
"Núcleo",
"Distribución",
"Internet",
"Servicios",
"Nube"
],
answer:2,
explanation:"La distribución separa dominios broadcast mediante routing y segmentación."
},

{
question:"¿A qué topología corresponde la afirmación: 'Si este dispositivo falla, todos los demás fallarán'?",
options:[
"Mesh",
"Híbrida",
"Punto a punto",
"Estrella"
],
answer:3,
explanation:"En topología estrella existe un dispositivo central. Si falla, toda la red queda afectada."
},

{
question:"¿Qué topología es utilizada comúnmente en redes LAN modernas?",
options:[
"Mesh",
"Híbrida",
"Punto a punto",
"Estrella"
],
answer:3,
explanation:"Las LAN modernas generalmente utilizan topología estrella usando switches centrales."
},

{
question:"¿Qué capa proporciona conectividad de alta velocidad entre dispositivos?",
options:[
"Acceso",
"Núcleo",
"Distribución",
"Internet",
"Servicios",
"Nube",
"Núcleo colapsado"
],
answer:1,
explanation:"La capa núcleo proporciona conectividad de muy alta velocidad y funciona como el backbone principal de la red. Su objetivo es transportar tráfico rápidamente entre diferentes partes de la infraestructura con máxima disponibilidad y rendimiento. Aunque la capa de distribución también maneja tráfico importante y aplica políticas como QoS o ACL, la conectividad de alta velocidad dedicada normalmente se asocia al núcleo."
},

{
question:"¿Qué topología ofrece la mayor disponibilidad?",
options:[
"Mesh",
"Híbrida",
"Punto a punto",
"Estrella"
],
answer:0,
explanation:"Mesh proporciona múltiples rutas redundantes aumentando disponibilidad y tolerancia a fallas."
},

{
question:"¿Qué afirmaciones son correctas en una red LAN diseñada en 3 niveles? (Elige 3)",
options:[
"El diseño utiliza una topología Mesh entre Acceso y Distribución",
"Los teléfonos IP se conectan directamente a la capa de acceso",
"El diseño utiliza una topología Mesh parcial entre Acceso y Distribución",
"El diseño utiliza una topología Mesh parcial entre Distribución y Núcleo",
"Los teléfonos IP se conectan directamente a la capa de Distribución"
],
answer:[1,2,3],
multiple:true,
explanation:"En diseños jerárquicos los teléfonos IP se conectan en acceso y normalmente existe redundancia parcial entre capas."
},

{
question:"¿Qué afirmaciones son correctas en una red LAN diseñada en 2 niveles? (Elige 2)",
options:[
"El diseño utiliza una topología Mesh entre Acceso y Núcleo",
"Las computadoras y teléfonos se conectan directamente a la capa de Acceso",
"El diseño utiliza una topología Mesh entre Acceso y Distribución",
"El diseño utiliza una topología Mesh parcial entre Acceso y Núcleo colapsado"
],
answer:[1,3],
multiple:true,
explanation:"En un diseño de núcleo colapsado los dispositivos finales siguen conectándose a acceso y normalmente existe redundancia parcial hacia el núcleo colapsado."
}

],



tema15:[

{
question:"¿Cuántas capas tiene el modelo OSI?",
options:[
"4",
"5",
"7",
"8"
],
answer:2,
explanation:"El modelo OSI tiene 7 capas. Cada capa cumple funciones específicas para organizar la comunicación en la red desde las aplicaciones del usuario hasta la transmisión física de bits."
},

{
question:"¿Qué es un modelo de red?",
options:[
"Un tipo de cable",
"Un conjunto de routers",
"Un conjunto de reglas y funciones separadas en capas",
"Un protocolo propietario"
],
answer:2,
explanation:"Un modelo de red organiza la comunicación mediante capas. Cada capa realiza funciones específicas y se comunica con capas adyacentes y equivalentes."
},

{
question:"¿Cuál es el orden correcto de las capas OSI desde la aplicación hasta la física?",
options:[
"Aplicación, Presentación, Sesión, Transporte, Red, Enlace, Física",
"Aplicación, Sesión, Presentación, Red, Transporte, Enlace, Física",
"Aplicación, Transporte, Sesión, Red, Enlace, Física, Presentación",
"Aplicación, Red, Transporte, Sesión, Enlace, Física, Presentación"
],
answer:0,
explanation:"El modelo OSI sigue el orden: Aplicación, Presentación, Sesión, Transporte, Red, Enlace de datos y Física."
},

{
question:"¿Qué afirmaciones son correctas sobre las capas superiores del modelo OSI? (Elige 4)",
options:[
"Están más cerca del usuario",
"Se enfocan en aplicaciones y datos",
"Se preocupan por cómo viajan físicamente los bits",
"Interpretan y comprenden datos",
"Incluyen Aplicación, Presentación y Sesión",
"Trabajan principalmente con señales eléctricas"
],
answer:[0,1,3,4],
multiple:true,
explanation:"Las capas superiores trabajan cerca del usuario y manejan aplicaciones, sesiones y formato de datos. No trabajan directamente con transmisión física."
},

{
question:"¿Qué capas forman parte de las capas superiores del modelo OSI? (Elige 3)",
options:[
"Aplicación",
"Presentación",
"Sesión",
"Red",
"Enlace de datos",
"Física"
],
answer:[0,1,2],
multiple:true,
explanation:"Las capas superiores son Aplicación, Presentación y Sesión. Estas manejan interacción con el usuario y tratamiento lógico de la información."
},

{
question:"¿Qué afirmación es correcta respecto a la capa de aplicación?",
options:[
"Es la capa más cercana al usuario",
"Es la encargada de señales eléctricas",
"Se encarga del direccionamiento IP",
"Se encarga del direccionamiento MAC"
],
answer:0,
explanation:"La capa de aplicación es la más cercana al usuario y funciona como interfaz entre las aplicaciones y la red."
},

{
question:"¿Qué función tiene la capa de aplicación?",
options:[
"Convertir bits en señales",
"Proveer servicios a las aplicaciones del usuario",
"Realizar routing",
"Asignar direcciones MAC"
],
answer:1,
explanation:"La capa de aplicación proporciona servicios de red a programas como navegadores, correo o aplicaciones de mensajería."
},

{
question:"¿Qué afirmación es correcta?",
options:[
"La aplicación del usuario es el protocolo",
"La aplicación del usuario utiliza protocolos de la capa de aplicación",
"HTTP es un navegador web",
"DNS es una tarjeta de red"
],
answer:1,
explanation:"La aplicación del usuario no es el protocolo. Por ejemplo, Chrome usa HTTP/HTTPS para comunicarse."
},

{
question:"¿Qué protocolos pertenecen a la capa de aplicación? (Elige 5)",
options:[
"HTTP",
"HTTPS",
"DNS",
"SMTP",
"FTP",
"Ethernet",
"IP"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"HTTP, HTTPS, DNS, SMTP y FTP son protocolos de capa de aplicación. Ethernet pertenece a capa 2 e IP a capa 3."
},

{
question:"¿Qué protocolo traduce nombres de dominio a direcciones IP?",
options:[
"FTP",
"HTTP",
"DNS",
"SMTP"
],
answer:2,
explanation:"DNS traduce nombres como google.com a direcciones IP para que los dispositivos puedan encontrar servidores en la red."
},

{
question:"¿Qué protocolo se utiliza normalmente para páginas web?",
options:[
"SMTP",
"HTTP",
"POP3",
"TFTP"
],
answer:1,
explanation:"HTTP se utiliza para transferencia de páginas web."
},

{
question:"¿Qué protocolo proporciona navegación web segura?",
options:[
"HTTP",
"FTP",
"HTTPS",
"Telnet"
],
answer:2,
explanation:"HTTPS agrega cifrado TLS/SSL para proteger la comunicación web."
},

{
question:"¿Qué protocolo se utiliza para transferencia de archivos? (Elige 2)",
options:[
"FTP",
"TFTP",
"DNS",
"POP3"
],
answer:[0,1],
multiple:true,
explanation:"FTP y TFTP son protocolos de transferencia de archivos. FTP es más completo y TFTP es más simple."
},

{
question:"¿Qué protocolo se utiliza para enviar correos electrónicos?",
options:[
"POP3",
"SMTP",
"DNS",
"HTTPS"
],
answer:1,
explanation:"SMTP se utiliza para envío de correos electrónicos."
},

{
question:"¿Qué protocolo se utiliza normalmente para recibir correos electrónicos?",
options:[
"SMTP",
"FTP",
"POP3",
"HTTP"
],
answer:2,
explanation:"POP3 se utiliza para recepción de correos electrónicos."
},

{
question:"¿Qué protocolo permite acceso remoto inseguro en texto plano?",
options:[
"SSH",
"HTTPS",
"Telnet",
"DNS"
],
answer:2,
explanation:"Telnet permite acceso remoto pero transmite información sin cifrado."
},

{
question:"¿Qué protocolo proporciona acceso remoto cifrado y seguro?",
options:[
"FTP",
"SSH",
"HTTP",
"TFTP"
],
answer:1,
explanation:"SSH establece conexiones cifradas para administración remota segura."
},

{
question:"Relaciona correctamente protocolo y puerto. (Elige 5)",
options:[
"HTTP → 80",
"HTTPS → 443",
"DNS → 53",
"SSH → 22",
"FTP → 21",
"SMTP → 110",
"POP3 → 25"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"HTTP usa 80, HTTPS 443, DNS 53, SSH 22 y FTP 21. SMTP usa 25 y POP3 usa 110."
},

{
question:"Una empresa desea administrar routers remotamente de manera segura y cifrada. ¿Qué protocolo debe utilizar?",
options:[
"Telnet",
"HTTP",
"SSH",
"TFTP"
],
answer:2,
explanation:"SSH cifra la comunicación y protege credenciales y comandos durante la administración remota."
},

{
question:"Un usuario abre Google Chrome y accede a una página HTTPS. ¿Qué capas superiores participan principalmente? (Elige 3)",
options:[
"Aplicación",
"Presentación",
"Sesión",
"Física",
"Enlace"
],
answer:[0,1,2],
multiple:true,
explanation:"La capa de aplicación maneja HTTP/HTTPS, presentación maneja formato/cifrado y sesión mantiene la comunicación."
},

{
question:"¿Qué afirmaciones son correctas sobre los dispositivos origen y destino? (Elige 3)",
options:[
"Deben utilizar el mismo modelo de red",
"Deben interpretar correctamente los datos entre capas",
"Deben usar las mismas reglas de comunicación",
"No necesitan protocolos",
"Solo necesitan direcciones MAC"
],
answer:[0,1,2],
multiple:true,
explanation:"Para comunicarse correctamente, origen y destino deben utilizar reglas y modelos compatibles para interpretar datos entre capas."
},

{
question:"¿Qué afirmación describe mejor la función general de las capas OSI?",
options:[
"Separar funciones para organizar la comunicación",
"Eliminar protocolos",
"Evitar el uso de routers",
"Convertir IP en MAC"
],
answer:0,
explanation:"El modelo OSI divide funciones en capas para facilitar diseño, compatibilidad y troubleshooting."
},

{
question:"¿Cuál es la función principal de la capa de presentación?",
options:[
"Realizar routing",
"Dar formato y estructura a los datos",
"Transmitir bits por el cable",
"Asignar direcciones IP"
],
answer:1,
explanation:"La capa de presentación se encarga de traducir, estructurar y dar formato a los datos para que el dispositivo receptor pueda interpretarlos correctamente."
},

{
question:"¿Qué funciones pertenecen a la capa de presentación? (Elige 4)",
options:[
"Formato de datos",
"Compresión",
"Encriptación",
"Traducción de datos",
"Enrutamiento",
"Control de acceso al medio"
],
answer:[0,1,2,3],
multiple:true,
explanation:"La capa de presentación trabaja con formato, traducción, compresión y cifrado de datos. No realiza routing ni control de acceso al medio."
},

{
question:"¿Qué ocurre cuando la capa de presentación convierte texto ASCII en bits?",
options:[
"Se realiza direccionamiento IP",
"Los datos adquieren un formato interpretable por el receptor",
"Se genera una dirección MAC",
"Se crea una tabla de rutas"
],
answer:1,
explanation:"La capa de presentación convierte información en formatos estándar entendibles por otros dispositivos, como ASCII y posteriormente binario."
},

{
question:"Supongamos que un usuario escribe “Hola”. ¿Qué capa convierte las letras en representación ASCII y posteriormente en bits?",
options:[
"Aplicación",
"Presentación",
"Sesión",
"Red"
],
answer:1,
explanation:"La capa de presentación toma los datos generados por la aplicación y les da formato estándar para que puedan interpretarse correctamente."
},

{
question:"¿Qué significa MIME en la capa de presentación?",
options:[
"Un algoritmo de routing",
"Un formato para estructurar y representar datos",
"Un protocolo de switching",
"Un tipo de dirección MAC"
],
answer:1,
explanation:"MIME define cómo representar distintos tipos de datos como texto, imágenes o archivos para que puedan interpretarse correctamente."
},

{
question:"¿Qué afirmaciones son correctas respecto a MIME? (Elige 3)",
options:[
"Define formato de datos",
"Permite representar texto e imágenes",
"Se relaciona con la estructura de los datos",
"Realiza routing dinámico",
"Disminuye el TTL"
],
answer:[0,1,2],
multiple:true,
explanation:"MIME define cómo estructurar y representar distintos tipos de información. No realiza funciones de capa de red."
},

{
question:"¿Qué función realiza la encriptación en la capa de presentación?",
options:[
"Reduce el tamaño del archivo",
"Convierte texto a ASCII",
"Protege la información antes de enviarla",
"Realiza switching"
],
answer:2,
explanation:"La encriptación protege los datos convirtiéndolos en información ilegible para usuarios no autorizados."
},

{
question:"¿Qué afirmaciones son correctas sobre SSL y TLS? (Elige 4)",
options:[
"SSL es una versión antigua",
"TLS es una versión más moderna y segura",
"Ambos cifran datos",
"Ambos proporcionan confidencialidad",
"Ambos son protocolos de routing",
"TLS reemplazó a Ethernet"
],
answer:[0,1,2,3],
multiple:true,
explanation:"SSL y TLS son protocolos de seguridad que cifran la comunicación. TLS es la evolución moderna y más segura de SSL."
},

{
question:"¿Qué protocolo es considerado actualmente más seguro y moderno que SSL?",
options:[
"FTP",
"HTTP",
"TLS",
"Telnet"
],
answer:2,
explanation:"TLS es la evolución moderna de SSL y actualmente se utiliza ampliamente para proteger comunicaciones."
},

{
question:"¿Cuál es la principal finalidad de SSL/TLS?",
options:[
"Asignar direcciones IP",
"Cifrar y proteger datos",
"Realizar switching",
"Controlar acceso al medio"
],
answer:1,
explanation:"SSL/TLS proporcionan cifrado y confidencialidad para proteger la información transmitida."
},

{
question:"Una empresa desea proteger las credenciales y datos transmitidos entre un navegador y un servidor web. ¿Qué tecnologías debería utilizar?",
options:[
"HTTP y Telnet",
"SSL/TLS",
"CSMA/CD",
"Frame Relay"
],
answer:1,
explanation:"SSL/TLS cifran la comunicación y protegen información sensible durante la transmisión."
},

{
question:"¿Qué afirmaciones describen correctamente la compresión en la capa de presentación? (Elige 3)",
options:[
"Reduce el tamaño de los datos",
"Elimina información redundante",
"Permite transmitir más rápido",
"Genera direcciones MAC",
"Calcula rutas"
],
answer:[0,1,2],
multiple:true,
explanation:"La compresión reduce datos repetidos para disminuir el tamaño y optimizar la transmisión."
},

{
question:"¿Qué formatos son ejemplos comunes de compresión?",
options:[
"ZIP y JPEG",
"HTTP y HTTPS",
"OSPF y RIP",
"IPv4 e IPv6"
],
answer:0,
explanation:"ZIP y JPEG utilizan técnicas de compresión para reducir el tamaño de archivos e imágenes."
},

{
question:"¿Qué capa OSI se relaciona principalmente con cifrado, formato y compresión de datos?",
options:[
"Aplicación",
"Presentación",
"Transporte",
"Enlace"
],
answer:1,
explanation:"La capa de presentación se especializa en representación, traducción, cifrado y compresión de información."
},

{
question:"¿Qué afirmación es correcta respecto a SSL y TLS?",
options:[
"SSL es más moderno que TLS",
"TLS es más seguro y actual",
"TLS funciona en capa física",
"SSL asigna direcciones IP"
],
answer:1,
explanation:"TLS reemplazó progresivamente a SSL debido a mejoras de seguridad y cifrado."
},

{
question:"Un administrador captura tráfico HTTPS y observa que los datos son ilegibles. ¿Qué función de la capa de presentación está observando?",
options:[
"Compresión",
"Encriptación",
"Direccionamiento",
"Control de flujo"
],
answer:1,
explanation:"La capa de presentación cifra los datos usando SSL/TLS para proteger la información."
},

{
question:"¿Qué afirmaciones son correctas sobre la capa de presentación? (Elige 5)",
options:[
"Da formato a los datos",
"Realiza traducción de información",
"Puede cifrar información",
"Puede comprimir datos",
"Permite interpretación correcta entre dispositivos",
"Realiza routing dinámico",
"Gestiona tablas MAC"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"La capa de presentación trabaja con representación y protección lógica de los datos. No realiza funciones de switching o routing."
},

{
question:"¿Qué sucede después de que la capa de presentación convierte texto ASCII a binario?",
options:[
"Los datos quedan listos para continuar el proceso de encapsulación",
"Se genera una tabla ARP",
"Se crea una VLAN",
"Se asigna una dirección MAC"
],
answer:0,
explanation:"Después de formatear los datos, estos continúan bajando por las capas para ser encapsulados y transmitidos."
},

{
question:"¿Qué afirmación describe mejor la relación entre aplicación y presentación?",
options:[
"La capa de aplicación genera datos y la capa de presentación los traduce y estructura",
"La capa de presentación genera direcciones IP",
"La capa de aplicación realiza cifrado físico",
"La capa de presentación controla switches"
],
answer:0,
explanation:"La aplicación produce información y la capa de presentación la convierte a formatos interpretables y seguros."
},

{
question:"¿Cuál es la función principal de la capa de sesión?",
options:[
"Asignar direcciones IP",
"Establecer, administrar y finalizar sesiones",
"Transmitir bits",
"Realizar switching"
],
answer:1,
explanation:"La capa de sesión administra las conversaciones lógicas entre dispositivos. Se encarga de iniciar, mantener y finalizar sesiones de comunicación."
},

{
question:"¿Qué es una sesión en redes?",
options:[
"Un cable de red",
"Una conexión lógica entre dispositivos que intercambian datos",
"Un tipo de dirección IP",
"Un protocolo físico"
],
answer:1,
explanation:"Una sesión representa una comunicación lógica entre dispositivos mientras intercambian información."
},

{
question:"¿Qué funciones pertenecen a la capa de sesión? (Elige 3)",
options:[
"Establecer sesión",
"Mantener sesión",
"Finalizar sesión",
"Asignar MAC",
"Realizar routing",
"Transmitir bits"
],
answer:[0,1,2],
multiple:true,
explanation:"La capa de sesión controla el ciclo completo de la comunicación lógica: inicio, mantenimiento y finalización."
},

{
question:"¿Por qué la capa de sesión mantiene separadas las comunicaciones?",
options:[
"Para aumentar el voltaje",
"Para evitar que los datos de distintas conversaciones se mezclen",
"Para asignar direcciones MAC",
"Para crear VLANs"
],
answer:1,
explanation:"Cada comunicación mantiene su propia sesión lógica, evitando mezclar información entre múltiples usuarios o dispositivos."
},

{
question:"Tres PCs se conectan simultáneamente a un mismo servidor web. ¿Qué afirmación es correcta?",
options:[
"Todas utilizan la misma sesión",
"Cada PC mantiene una sesión independiente",
"El servidor solo acepta una sesión",
"Las sesiones funcionan únicamente en capa física"
],
answer:1,
explanation:"Cada dispositivo mantiene una sesión independiente identificada mediante IP, puertos y contexto de comunicación."
},

{
question:"¿Qué elementos ayudan a distinguir diferentes sesiones? (Elige 3)",
options:[
"Dirección IP",
"Puerto",
"Sesión",
"Color del cable",
"Voltaje",
"TTL físico"
],
answer:[0,1,2],
multiple:true,
explanation:"Las comunicaciones se distinguen usando dirección IP, puertos y contexto de sesión."
},

{
question:"¿Qué protocolo se utiliza para establecer, mantener y cerrar sesiones dentro de una red?",
options:[
"NetBIOS",
"Ethernet",
"ICMP",
"ARP"
],
answer:0,
explanation:"NetBIOS se relaciona con administración de sesiones y comunicación entre dispositivos."
},

{
question:"¿Qué tecnología permite comunicación entre procesos en diferentes equipos manteniendo la sesión activa?",
options:[
"RPC",
"FTP",
"CSMA/CD",
"DNS"
],
answer:0,
explanation:"RPC (Remote Procedure Call) permite comunicación entre procesos remotos manteniendo la sesión durante la operación."
},

{
question:"¿Qué representan los sockets en redes?",
options:[
"Direcciones MAC",
"Puntos de comunicación usando IP y puerto",
"Tipos de cable",
"Tablas de routing"
],
answer:1,
explanation:"Los sockets representan extremos de comunicación usando dirección IP y número de puerto."
},

{
question:"¿Qué afirmaciones son correctas sobre los sockets? (Elige 3)",
options:[
"Usan dirección IP",
"Usan puertos",
"Permiten mantener comunicación cliente-servidor",
"Asignan VLANs",
"Disminuyen TTL"
],
answer:[0,1,2],
multiple:true,
explanation:"Los sockets identifican conexiones usando IP y puertos para mantener sesiones entre dispositivos."
},

{
question:"¿Qué capas forman parte de las capas superiores? (Elige 3)",
options:[
"Aplicación",
"Presentación",
"Sesión",
"Red",
"Enlace",
"Física"
],
answer:[0,1,2],
multiple:true,
explanation:"Las capas superiores manejan aplicaciones, sesiones y representación lógica de datos."
},

{
question:"¿Qué capas forman parte de las capas inferiores? (Elige 4)",
options:[
"Transporte",
"Red",
"Enlace de datos",
"Física",
"Aplicación",
"Sesión"
],
answer:[0,1,2,3],
multiple:true,
explanation:"Las capas inferiores trabajan con transporte y transmisión de información a través de la red."
},

{
question:"¿Qué afirmación describe mejor la capa de transporte?",
options:[
"Se encarga únicamente de señales eléctricas",
"Proporciona comunicación extremo a extremo",
"Realiza switching de capa 2",
"Administra tablas MAC"
],
answer:1,
explanation:"La capa de transporte proporciona comunicación End-to-End entre dispositivos y procesos."
},

{
question:"¿Qué significa comunicación End-to-End?",
options:[
"Comunicación entre switches",
"Comunicación completa entre procesos origen y destino",
"Comunicación física por cable",
"Comunicación entre routers únicamente"
],
answer:1,
explanation:"End-to-End se refiere a toda la comunicación entre procesos desde origen hasta destino."
},

{
question:"¿Qué función tiene la multiplexación?",
options:[
"Eliminar direcciones IP",
"Permitir que múltiples aplicaciones compartan la red simultáneamente",
"Apagar sesiones",
"Crear señales eléctricas"
],
answer:1,
explanation:"La multiplexación permite que varias aplicaciones utilicen simultáneamente la misma conexión usando puertos para diferenciarlas."
},

{
question:"¿Qué afirmaciones son correctas sobre multiplexación? (Elige 4)",
options:[
"Permite múltiples comunicaciones simultáneas",
"Utiliza números de puerto",
"Permite compartir el medio de transmisión",
"Identifica procesos distintos",
"Elimina direcciones IP",
"Reemplaza TCP"
],
answer:[0,1,2,3],
multiple:true,
explanation:"La multiplexación permite que diferentes procesos viajen simultáneamente usando puertos para identificarlos."
},

{
question:"¿Qué es la demultiplexación?",
options:[
"Separar y entregar datos a la aplicación correcta usando puertos",
"Eliminar paquetes IP",
"Crear tablas MAC",
"Reducir el TTL"
],
answer:0,
explanation:"La demultiplexación ocurre en el receptor y utiliza puertos para entregar datos al proceso correcto."
},

{
question:"¿Qué capa utiliza números de puerto para identificar procesos?",
options:[
"Red",
"Enlace",
"Transporte",
"Física"
],
answer:2,
explanation:"La capa de transporte utiliza puertos para identificar aplicaciones y procesos específicos."
},

{
question:"¿Qué ejemplos representan procesos que pueden ejecutarse simultáneamente? (Elige 3)",
options:[
"Navegación web",
"Correo electrónico",
"Transferencia de archivos",
"Voltaje eléctrico",
"Direccionamiento MAC"
],
answer:[0,1,2],
multiple:true,
explanation:"La capa de transporte permite múltiples procesos simultáneos mediante multiplexación."
},

{
question:"¿Qué afirmación describe correctamente la relación entre sesión y transporte?",
options:[
"La capa de sesión mantiene la comunicación y transporte dirige datos usando puertos",
"La capa de sesión realiza routing",
"La capa de transporte administra tablas MAC",
"La capa de sesión transmite bits"
],
answer:0,
explanation:"La capa de sesión mantiene conversaciones activas mientras transporte usa puertos para entregar datos al proceso correcto."
},

{
question:"Una PC navega por internet mientras descarga archivos y recibe correos simultáneamente. ¿Qué característica de la capa de transporte permite esto?",
options:[
"ARP",
"Multiplexación",
"TTL",
"CRC"
],
answer:1,
explanation:"La multiplexación permite que varios procesos y aplicaciones compartan la misma red simultáneamente."
},

{
question:"Un servidor recibe tráfico web, FTP y correo al mismo tiempo. ¿Cómo identifica cada comunicación?",
options:[
"Usando únicamente direcciones MAC",
"Usando puertos y procesos",
"Usando color del cable",
"Usando VLANs"
],
answer:1,
explanation:"La capa de transporte utiliza números de puerto para distinguir y dirigir datos a la aplicación correcta."
},

{
question:"¿Qué sucede durante la demultiplexación en el destino?",
options:[
"Los datos son separados y entregados al proceso correcto",
"Se asignan direcciones MAC",
"Se generan señales eléctricas",
"Se elimina el routing"
],
answer:0,
explanation:"La demultiplexación separa cada flujo utilizando puertos para reconstruir la comunicación correcta."
},

{
question:"¿Qué afirmaciones describen correctamente la multiplexación en la capa de transporte? (Elige 5)",
options:[
"Permite múltiples flujos simultáneos",
"Usa números de puerto",
"Los datos son segmentados",
"Cada segmento puede tener número de secuencia",
"Permite compartir la misma red",
"Elimina direcciones IP",
"Reemplaza el direccionamiento MAC"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"La multiplexación ocurre en la capa de transporte. Los datos de diferentes procesos se segmentan y etiquetan con puertos y números de secuencia para que múltiples comunicaciones compartan simultáneamente la red sin mezclarse."
},

{
question:"¿Qué afirmación describe mejor la diferencia entre multiplexación e intercalado?",
options:[
"Son exactamente lo mismo",
"Multiplexación permite múltiples procesos y el intercalado describe cómo se envían",
"Intercalado elimina puertos",
"Multiplexación solo ocurre en routers"
],
answer:1,
explanation:"Multiplexación significa permitir múltiples flujos simultáneos usando puertos y segmentación. El intercalado es simplemente el orden en que los segmentos son enviados."
},

{
question:"Un host tiene tráfico FTP y Web al mismo tiempo. ¿Qué realiza primero la capa de transporte antes de la multiplexación? (Elige 4)",
options:[
"Segmentar datos",
"Asignar puertos",
"Asignar números de secuencia",
"Preparar flujos independientes",
"Agregar direcciones MAC",
"Calcular rutas"
],
answer:[0,1,2,3],
multiple:true,
explanation:"La capa de transporte primero segmenta los datos, asigna puertos y números de secuencia y deja preparados múltiples flujos independientes antes de enviarlos."
},

{
question:"¿Qué representa la “pelota” en el ejemplo del texto?",
options:[
"Una dirección IP",
"Los datos del proceso o aplicación",
"Un router",
"Una tabla MAC"
],
answer:1,
explanation:"La “pelota” representa los datos generados por una aplicación o proceso, como FTP o Web."
},

{
question:"¿Qué información agrega la capa de transporte a cada segmento? (Elige 2)",
options:[
"Número de secuencia",
"Puerto",
"MAC destino",
"TTL"
],
answer:[0,1],
multiple:true,
explanation:"La capa de transporte agrega números de secuencia y puertos para identificar y ordenar correctamente los datos."
},

{
question:"¿Qué afirmaciones son correctas respecto al orden de envío y orden lógico? (Elige 3)",
options:[
"El orden lógico depende de los números de secuencia",
"El orden de envío puede ir intercalado",
"TCP reconstruye usando secuencia",
"Los segmentos deben enviarse siempre en orden",
"El orden físico elimina la multiplexación"
],
answer:[0,1,2],
multiple:true,
explanation:"TCP mantiene el orden lógico usando números de secuencia aunque los segmentos viajen intercalados por la red."
},

{
question:"¿Qué capa agrega las direcciones IP al segmento?",
options:[
"Aplicación",
"Transporte",
"Red",
"Enlace"
],
answer:2,
explanation:"La capa de red agrega el encabezado IP con IP origen, IP destino y protocolo."
},

{
question:"¿Qué capa agrega las direcciones MAC?",
options:[
"Transporte",
"Red",
"Enlace de datos",
"Sesión"
],
answer:2,
explanation:"La capa de enlace encapsula el paquete IP en una trama agregando MAC origen y destino."
},

{
question:"¿Qué sucede en la capa física?",
options:[
"Se agregan puertos",
"Se agregan IPs",
"Todo se convierte en bits y señales",
"Se realiza routing"
],
answer:2,
explanation:"La capa física convierte toda la información en bits y señales eléctricas, ópticas o inalámbricas."
},

{
question:"¿Qué afirmaciones son correctas respecto a los routers durante el viaje por la red? (Elige 3)",
options:[
"Revisan capa de red",
"Deciden rutas",
"Vuelven a encapsular",
"Usan puertos TCP para switching",
"Trabajan únicamente con ASCII"
],
answer:[0,1,2],
multiple:true,
explanation:"Los routers trabajan principalmente en capa 3. Revisan IP, deciden rutas y vuelven a encapsular para reenviar."
},

{
question:"¿Qué ocurre durante la demultiplexación?",
options:[
"Los datos se destruyen",
"Los segmentos son separados por puerto y entregados al proceso correcto",
"Las MAC se convierten en IP",
"El TTL aumenta"
],
answer:1,
explanation:"La demultiplexación ocurre en el destino. Usa puertos y números de secuencia para separar y reconstruir correctamente los datos."
},

{
question:"¿Qué utiliza TCP para reconstruir correctamente los datos?",
options:[
"Voltaje",
"Número de secuencia",
"Color del cable",
"TTL"
],
answer:1,
explanation:"TCP usa números de secuencia para ordenar correctamente los segmentos aunque lleguen intercalados."
},

{
question:"¿Qué afirmaciones describen correctamente el flujo entre capas? (Elige 5)",
options:[
"Transporte segmenta y etiqueta",
"Red agrega IP",
"Enlace agrega MAC",
"Física transmite bits",
"Destino desmultiplexa y reconstruye",
"Aplicación agrega MAC"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"Cada capa cumple funciones específicas durante el proceso de encapsulación y transmisión."
},

{
question:"¿Qué afirmación es correcta sobre los segmentos de distintos procesos?",
options:[
"Viajan juntos pero siguen identificados",
"Pierden su puerto",
"Se convierten en MAC",
"Se destruyen en capa de red"
],
answer:0,
explanation:"Aunque múltiples segmentos viajen simultáneamente, cada uno mantiene su identificación mediante puertos y secuencia."
},

{
question:"Un usuario descarga archivos FTP mientras navega en internet. ¿Qué permite que ambas comunicaciones compartan la red al mismo tiempo?",
options:[
"CSMA/CD",
"Multiplexación",
"ARP",
"TTL"
],
answer:1,
explanation:"La multiplexación permite múltiples flujos independientes simultáneos sobre la misma infraestructura de red."
},

{
question:"¿Qué capa recibe el paquete IP y lo convierte en trama?",
options:[
"Red",
"Enlace",
"Física",
"Aplicación"
],
answer:1,
explanation:"La capa de enlace recibe el paquete IP y lo encapsula en una trama agregando direcciones MAC."
},

{
question:"¿Qué afirmaciones son correctas sobre el envío intercalado? (Elige 3)",
options:[
"No existe un orden obligatorio fijo",
"Depende de buffers y procesos activos",
"Los segmentos pueden alternarse",
"Elimina números de secuencia",
"Solo ocurre con FTP"
],
answer:[0,1,2],
multiple:true,
explanation:"Los segmentos pueden enviarse intercalados dependiendo de procesos activos, buffers y sistema operativo."
},

{
question:"¿Qué sucede cuando los datos llegan al destino? (Elige 4)",
options:[
"La capa física recibe bits",
"La capa de enlace quita MAC",
"La capa de red revisa IP",
"La capa de transporte desmultiplexa",
"La capa física asigna puertos"
],
answer:[0,1,2,3],
multiple:true,
explanation:"En el destino ocurre desencapsulación progresiva hasta llegar a la capa de transporte donde se reconstruyen los datos."
},

{
question:"¿Qué afirmación describe correctamente la función de TCP en este escenario?",
options:[
"TCP organiza, reordena y reconstruye datos",
"TCP asigna direcciones MAC",
"TCP transmite señales eléctricas",
"TCP elimina sesiones"
],
answer:0,
explanation:"TCP garantiza orden lógico usando secuencia y reconstrucción de segmentos para entregar correctamente los datos."
},

{
question:"¿Qué afirmación representa mejor la idea completa del proceso?",
options:[
"Los datos se segmentan, etiquetan, viajan y luego se reconstruyen correctamente",
"Las MAC controlan aplicaciones",
"Las IP reemplazan los puertos",
"La capa física administra sesiones"
],
answer:0,
explanation:"La comunicación completa implica segmentación, multiplexación, encapsulación, transmisión, demultiplexación y reconstrucción final de los datos."
},
{
question:"¿Cuál es el flujo correcto de encapsulación en el emisor?",
options:[
"Aplicación → Transporte → Red → Enlace → Física",
"Aplicación → Red → Transporte → Física → Enlace",
"Física → Enlace → Red → Transporte → Aplicación",
"Aplicación → Transporte → Enlace → Red → Física"
],
answer:0,
explanation:"En el emisor, los datos bajan por las capas OSI: Aplicación genera datos, Transporte crea segmentos, Red agrega IP, Enlace crea tramas y Física transmite bits."
},

{
question:"¿Cuál es el flujo correcto en el receptor?",
options:[
"Aplicación → Transporte → Red → Enlace → Física",
"Física → Enlace → Red → Transporte → Aplicación",
"Red → Física → Transporte → Aplicación",
"Física → Red → Enlace → Transporte"
],
answer:1,
explanation:"En el receptor ocurre desencapsulación: Física recibe bits, Enlace procesa tramas, Red procesa IP, Transporte reconstruye datos y Aplicación los utiliza."
},

{
question:"¿Qué genera inicialmente la capa de aplicación? (Elige 4)",
options:[
"Texto",
"Video",
"HTTP",
"Aplicaciones web",
"Direcciones MAC",
"TTL"
],
answer:[0,1,2,3],
multiple:true,
explanation:"Todo inicia en aplicación. Aquí se generan los datos reales que viajarán por la red, como texto, video, aplicaciones y tráfico HTTP."
},

{
question:"¿Qué recibe inicialmente la capa de transporte?",
options:[
"Bits",
"Tramas",
"Payload de la capa de aplicación",
"Direcciones MAC"
],
answer:2,
explanation:"La capa de transporte recibe los datos generados por la capa de aplicación; a esto se le conoce como payload."
},

{
question:"¿Qué campos forman parte del header TCP? (Elige 5)",
options:[
"Puerto origen",
"Puerto destino",
"Número de secuencia",
"Número de confirmación",
"Flags",
"Dirección MAC",
"TTL"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"El encabezado TCP contiene información de control como puertos, secuencia, confirmación, flags y ventana."
},

{
question:"¿Qué afirmación es correcta respecto al número de secuencia?",
options:[
"Se define en la capa física",
"Se define cuando se construye el header TCP",
"Lo agrega Ethernet",
"Lo asigna el router"
],
answer:1,
explanation:"El número de secuencia se define cuando la capa de transporte construye el encabezado TCP."
},

{
question:"¿Cuál es el orden correcto respecto al checksum TCP?",
options:[
"Primero checksum y luego header",
"Primero se arma el header y luego se calcula el checksum",
"Primero se transmite y luego checksum",
"Checksum se calcula en capa física"
],
answer:1,
explanation:"Primero TCP construye completamente el header y luego calcula el checksum utilizando header y datos."
},

{
question:"¿Qué utiliza TCP para calcular el checksum? (Elige 3)",
options:[
"Header TCP",
"Datos",
"Pseudo-header",
"Dirección MAC",
"TTL físico"
],
answer:[0,1,2],
multiple:true,
explanation:"El checksum TCP se calcula utilizando el header TCP, los datos y el pseudo-header."
},

{
question:"¿Qué afirmaciones son correctas sobre el pseudo-header? (Elige 4)",
options:[
"Usa IP origen",
"Usa IP destino",
"Usa protocolo",
"NO viaja por la red",
"Es una dirección MAC",
"Se encapsula en Ethernet"
],
answer:[0,1,2,3],
multiple:true,
explanation:"El pseudo-header se utiliza únicamente para cálculos internos del checksum TCP y no viaja realmente en la red."
},

{
question:"¿Qué información contiene el pseudo-header? (Elige 4)",
options:[
"IP origen",
"IP destino",
"Protocolo",
"Tamaño",
"MAC origen",
"FCS"
],
answer:[0,1,2,3],
multiple:true,
explanation:"TCP utiliza información IP disponible localmente para ayudar al cálculo del checksum."
},

{
question:"¿Qué representa el HEADER TCP?",
options:[
"El contenido real de usuario",
"La información de control",
"Los bits físicos",
"Direcciones MAC"
],
answer:1,
explanation:"El header contiene información de control como puertos, secuencia, flags y checksum."
},

{
question:"¿Qué representan los DATOS en un segmento TCP?",
options:[
"Información de control",
"El contenido real enviado por la aplicación",
"El TTL",
"El FCS"
],
answer:1,
explanation:"Los datos corresponden al contenido generado por la aplicación, como texto, video o tráfico web."
},

{
question:"¿Qué capa agrega el encabezado IP?",
options:[
"Aplicación",
"Transporte",
"Red",
"Enlace"
],
answer:2,
explanation:"La capa de red agrega el header IP incluyendo IP origen, destino, protocolo y TTL."
},

{
question:"¿Qué campos importantes agrega el header IP? (Elige 3)",
options:[
"TTL",
"Protocolo",
"Longitud total",
"MAC origen",
"Checksum TCP"
],
answer:[0,1,2],
multiple:true,
explanation:"El encabezado IP contiene campos fundamentales para routing y entrega del paquete."
},

{
question:"¿Cuál es la función del TTL?",
options:[
"Asignar direcciones MAC",
"Evitar loops infinitos",
"Controlar sesiones",
"Asignar puertos"
],
answer:1,
explanation:"TTL limita la cantidad de routers que un paquete puede atravesar para evitar loops eternos."
},

{
question:"¿Qué sucede con el TTL en cada router?",
options:[
"Aumenta",
"No cambia",
"Disminuye en 1",
"Se convierte en MAC"
],
answer:2,
explanation:"Cada router decrementa el TTL en 1 antes de reenviar el paquete."
},

{
question:"Si un paquete tiene TTL=3 y atraviesa tres routers, ¿qué ocurre?",
options:[
"Llega normalmente",
"El paquete se elimina al llegar a TTL=0",
"El router aumenta el TTL",
"Se convierte en broadcast"
],
answer:1,
explanation:"Cuando TTL llega a 0, el paquete es descartado para evitar loops."
},

{
question:"¿Qué significa el campo protocolo en el header IP?",
options:[
"Indica qué protocolo debe procesar el contenido",
"Indica la MAC destino",
"Indica el cable usado",
"Indica el switch"
],
answer:0,
explanation:"El campo protocolo le dice a capa de red qué protocolo de transporte contiene el paquete."
},

{
question:"¿Qué valores representan TCP y UDP en el campo protocolo IP?",
options:[
"TCP=6 UDP=17",
"TCP=17 UDP=6",
"TCP=80 UDP=53",
"TCP=21 UDP=25"
],
answer:0,
explanation:"En IPv4 el protocolo 6 representa TCP y el 17 representa UDP."
},

{
question:"¿Qué significa longitud total en IP?",
options:[
"Tamaño completo del paquete IP",
"Tamaño del cable",
"Número de routers",
"Tamaño de la MAC"
],
answer:0,
explanation:"Longitud total indica el tamaño completo del paquete IP incluyendo header IP y datos."
},

{
question:"Si el header IP mide 20 bytes y el segmento TCP mide 100 bytes, ¿cuál es la longitud total?",
options:[
"80 bytes",
"100 bytes",
"120 bytes",
"140 bytes"
],
answer:2,
explanation:"La longitud total incluye todo el paquete IP: header IP + segmento TCP."
},

{
question:"¿Qué afirmaciones describen correctamente la capa de red? (Elige 4)",
options:[
"Decide a dónde va el paquete",
"Indica qué protocolo lo procesará",
"Controla cuánto puede vivir el paquete",
"Indica tamaño del paquete",
"Realiza multiplexación",
"Agrega puertos"
],
answer:[0,1,2,3],
multiple:true,
explanation:"La capa de red se encarga de direccionamiento lógico y control básico del paquete mediante IP."
},

{
question:"¿Qué afirmación es correcta respecto a la capa de red?",
options:[
"La capa de red modifica el contenido de aplicación",
"La capa de red NO toca los datos, solo agrega información IP",
"La capa de red asigna puertos TCP",
"La capa de red genera señales eléctricas"
],
answer:1,
explanation:"La capa de red no modifica el contenido; únicamente agrega información necesaria para routing y entrega."
}


,

{
question:"¿Qué afirmación describe correctamente el TTL?",
options:[
"Decide la mejor ruta",
"Limita la vida del paquete",
"Calcula métricas de routing",
"Asigna direcciones IP"
],
answer:1,
explanation:"TTL (Time To Live) limita la cantidad de routers que un paquete puede atravesar antes de ser descartado. No calcula rutas ni participa directamente en protocolos de routing."
},

{
question:"¿Qué diferencia existe entre OSPF y TTL?",
options:[
"OSPF limita la vida del paquete y TTL calcula rutas",
"OSPF decide rutas y TTL limita saltos",
"TTL y OSPF hacen exactamente lo mismo",
"TTL administra tablas MAC"
],
answer:1,
explanation:"OSPF es un protocolo de enrutamiento que calcula rutas. TTL únicamente limita cuántos routers puede atravesar un paquete."
},

{
question:"¿Qué afirmaciones son correctas respecto al TTL? (Elige 5)",
options:[
"Evita loops",
"Se decrementa en routers",
"Limita la vida del paquete",
"No calcula rutas",
"Puede eliminar paquetes al llegar a 0",
"Realiza switching",
"Genera sesiones"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"TTL es un mecanismo de control de vida del paquete. Se reduce en cada router y evita que los paquetes circulen indefinidamente."
},

{
question:"¿Qué dispositivo decrementa normalmente el TTL?",
options:[
"Switch",
"Router",
"Hub",
"Access Point"
],
answer:1,
explanation:"El TTL disminuye cuando el paquete atraviesa routers. Los switches normalmente no decrementan el TTL porque trabajan principalmente en capa 2."
},

{
question:"¿Qué afirmación es correcta respecto a los switches y el TTL?",
options:[
"Los switches decrementan TTL",
"Los switches cuentan como salto lógico",
"Los switches normalmente NO modifican el TTL",
"Los switches reinician el TTL"
],
answer:2,
explanation:"Un switch de capa 2 normalmente no afecta el TTL porque no realiza forwarding IP como un router."
},

{
question:"¿Qué significa realmente el TTL?",
options:[
"Cantidad de interfaces físicas",
"Cantidad máxima de routers que puede cruzar un paquete",
"Cantidad de switches",
"Velocidad máxima de transmisión"
],
answer:1,
explanation:"TTL indica el número máximo de routers o saltos lógicos que el paquete puede atravesar."
},

{
question:"¿Qué afirmaciones son correctas sobre el TTL? (Elige 4)",
options:[
"No distingue si el router es local o internet",
"Cuenta todos los routers del camino",
"El paquete no sabe cuántos routers existen",
"Solo sabe cuántos saltos le quedan",
"Cuenta switches de acceso",
"Calcula rutas dinámicas"
],
answer:[0,1,2,3],
multiple:true,
explanation:"TTL no diferencia entre routers locales o internet. Cada router reduce el valor hasta llegar a 0."
},

{
question:"¿Qué ocurre cuando el TTL llega a 0?",
options:[
"El paquete se vuelve broadcast",
"El paquete se elimina",
"El switch lo reenvía",
"El router aumenta el TTL"
],
answer:1,
explanation:"Cuando el TTL llega a 0 el paquete es descartado para evitar loops infinitos."
},

{
question:"¿Cuál es el valor máximo del TTL en IPv4?",
options:[
"64",
"128",
"255",
"1024"
],
answer:2,
explanation:"TTL utiliza un campo de 8 bits, por lo que el valor máximo posible es 255."
},

{
question:"¿Por qué el TTL máximo en IPv4 es 255?",
options:[
"Porque usa 16 bits",
"Porque usa 8 bits",
"Porque depende del cable",
"Porque lo define Ethernet"
],
answer:1,
explanation:"Un campo de 8 bits permite valores de 0 a 255."
},

{
question:"¿Cuántos saltos suelen existir normalmente en internet real?",
options:[
"200-255",
"100-150",
"10-30",
"500+"
],
answer:2,
explanation:"En internet real normalmente existen entre 10 y 30 saltos entre origen y destino."
},

{
question:"¿Qué afirmaciones son correctas respecto a rutas reales en internet? (Elige 4)",
options:[
"Las rutas normalmente son mucho menores que 255 saltos",
"50+ saltos es raro",
"Más de 60 saltos es extremadamente raro",
"Internet intenta usar rutas eficientes",
"Siempre existen 255 routers",
"TTL calcula caminos"
],
answer:[0,1,2,3],
multiple:true,
explanation:"Aunque el TTL soporte hasta 255, las rutas reales normalmente son mucho menores debido a optimización de internet."
},

{
question:"Un paquete sale con TTL=64 y atraviesa 20 routers. ¿Qué TTL aproximado tendría al llegar?",
options:[
"84",
"64",
"44",
"20"
],
answer:2,
explanation:"Cada router decrementa el TTL en 1. 64 - 20 = 44."
},

{
question:"¿Qué afirmación es correcta sobre el TTL y el routing?",
options:[
"TTL decide el mejor camino",
"TTL participa directamente en OSPF",
"TTL solo limita cuántos routers puede cruzar un paquete",
"TTL reemplaza protocolos de routing"
],
answer:2,
explanation:"TTL no calcula rutas; únicamente controla cuánto tiempo lógico puede vivir un paquete."
},

{
question:"¿Qué afirmaciones describen correctamente la función práctica del TTL? (Elige 3)",
options:[
"Evitar loops",
"Evitar congestión prolongada",
"Controlar vida del paquete",
"Administrar VLANs",
"Crear tablas ARP"
],
answer:[0,1,2],
multiple:true,
explanation:"TTL ayuda a evitar que paquetes atrapados en loops consuman recursos indefinidamente."
},

{
question:"¿Qué afirmación representa mejor la diferencia entre límite técnico y realidad práctica?",
options:[
"TTL=255 significa que siempre habrá 255 routers",
"255 es el máximo técnico, pero normalmente se usan muchos menos saltos",
"Internet usa normalmente 255 saltos",
"TTL solo funciona en LAN"
],
answer:1,
explanation:"El TTL máximo es un límite teórico; en redes reales las rutas suelen ser mucho menores."
},

{
question:"México se comunica con China usando un TTL inicial de 64. ¿Qué afirmación es más correcta?",
options:[
"64 normalmente es suficiente",
"64 es demasiado poco",
"El paquete siempre necesitará 255",
"TTL solo funciona localmente"
],
answer:0,
explanation:"Incluso rutas internacionales normalmente usan mucho menos de 64 saltos."
},

{
question:"¿Qué afirmación describe mejor la idea central del TTL?",
options:[
"Controla cuánto puede vivir un paquete en la red",
"Controla el ancho de banda",
"Controla direcciones MAC",
"Controla sesiones TCP"
],
answer:0,
explanation:"TTL limita la vida lógica del paquete para evitar loops y tráfico innecesario."
},

{
question:"¿Qué significa comunicación End-to-End?",
options:[
"Comunicación entre switches",
"Comunicación completa entre procesos origen y destino",
"Comunicación únicamente entre routers",
"Comunicación física entre cables"
],
answer:1,
explanation:"End-to-End significa toda la comunicación completa entre procesos de dispositivos finales, desde el origen hasta la entrega correcta al proceso destino."
},

{
question:"¿Qué afirmaciones describen correctamente End-to-End? (Elige 5)",
options:[
"Incluye el viaje completo de los datos",
"Incluye origen y destino",
"Incluye demultiplexación",
"Utiliza puertos para entrega correcta",
"Trabaja entre procesos de dispositivos finales",
"Solo ocurre en switches",
"Solo pertenece a capa física"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"La comunicación End-to-End abarca todo el proceso completo desde el proceso origen hasta el proceso destino utilizando puertos y transporte."
},

{
question:"¿Qué ocurre después de la demultiplexación en una comunicación End-to-End?",
options:[
"Los datos se eliminan",
"Los datos son entregados al proceso correcto",
"Se crea una dirección MAC",
"El router recalcula TTL"
],
answer:1,
explanation:"Después de la demultiplexación, los datos son reconstruidos y entregados al proceso correcto usando puertos."
},

{
question:"¿Qué elemento permite entregar correctamente los datos al proceso destino en una comunicación End-to-End?",
options:[
"Dirección MAC",
"Puertos",
"Voltaje",
"CSMA/CD"
],
answer:1,
explanation:"Los puertos permiten identificar el proceso correcto dentro del dispositivo destino."
},

{
question:"¿Qué afirmación es correcta sobre End-to-End?",
options:[
"Es únicamente el viaje por internet",
"Es únicamente el proceso TCP",
"Es todo el proceso completo de comunicación",
"Es únicamente routing"
],
answer:2,
explanation:"End-to-End incluye todo el flujo desde que los datos salen del proceso origen hasta que llegan al proceso destino."
},

{
question:"¿Qué afirmaciones son correctas respecto al sentido de la comunicación End-to-End? (Elige 2)",
options:[
"PC → servidor es un End-to-End",
"Servidor → PC es otro End-to-End",
"Solo existe un End-to-End total",
"El End-to-End funciona únicamente en LAN"
],
answer:[0,1],
multiple:true,
explanation:"Cada dirección de comunicación representa un proceso End-to-End independiente."
},

{
question:"Cuando tu PC hace una petición HTTP a un servidor, ¿qué representa ese flujo?",
options:[
"Un switch lógico",
"Un End-to-End",
"Una VLAN",
"Un dominio de colisión"
],
answer:1,
explanation:"La petición completa desde el proceso origen hasta el proceso destino constituye una comunicación End-to-End."
},

{
question:"Cuando el servidor responde a tu navegador, ¿qué ocurre?",
options:[
"Continúa exactamente el mismo End-to-End",
"Se crea otro flujo End-to-End en sentido contrario",
"El TTL deja de existir",
"Se elimina la sesión"
],
answer:1,
explanation:"La respuesta del servidor representa otro flujo End-to-End independiente en sentido contrario."
},

{
question:"¿Qué afirmación describe mejor el concepto End-to-End en redes?",
options:[
"Controla cuánto vive un paquete",
"Describe la comunicación completa entre procesos finales",
"Calcula rutas dinámicas",
"Controla acceso al medio"
],
answer:1,
explanation:"End-to-End representa la comunicación lógica completa entre aplicaciones origen y destino."
},

{
question:"¿Qué capas participan fuertemente en la comunicación End-to-End? (Elige 4)",
options:[
"Aplicación",
"Transporte",
"Sesión",
"Red",
"Voltaje",
"Fibra óptica"
],
answer:[0,1,2,3],
multiple:true,
explanation:"La comunicación End-to-End involucra aplicaciones, sesiones, transporte y routing para completar la entrega correcta."
},

{
question:"¿Qué funciones pertenecen a la capa de transporte? (Elige 5)",
options:[
"Recuperación de errores",
"Control de flujo",
"Control de congestión",
"Segmentación",
"Establecimiento y terminación de conexión",
"Asignación de MAC",
"Routing dinámico"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"La capa de transporte proporciona comunicación confiable End-to-End mediante control de errores, flujo, congestión y administración de conexiones."
},

{
question:"¿Cómo sabe TCP que ya llegaron todos los datos?",
options:[
"Por tiempo de espera",
"Porque el usuario lo indica",
"Porque recibe FIN",
"Porque el TTL llega a 0"
],
answer:2,
explanation:"TCP sabe que la transmisión terminó porque el emisor envía un segmento FIN indicando que ya no habrá más datos."
},

{
question:"¿Qué significa FIN en TCP?",
options:[
"Que la red falló",
"Que finalizó la transmisión",
"Que se perdió el paquete",
"Que el router cerró sesión"
],
answer:1,
explanation:"FIN indica que el emisor terminó de enviar datos y desea finalizar la conexión."
},

{
question:"¿Qué afirmaciones son correctas sobre FIN? (Elige 4)",
options:[
"Indica finalización de transmisión",
"Permite saber que ya no vienen más datos",
"No depende de adivinación",
"No depende de temporizador",
"Incrementa TTL",
"Reemplaza ACK"
],
answer:[0,1,2,3],
multiple:true,
explanation:"TCP utiliza FIN para cerrar ordenadamente la conexión. El receptor entiende que no habrá más segmentos."
},

{
question:"¿Qué hace el receptor cuando llega Seq=4 pero falta Seq=3?",
options:[
"Entrega Seq=4 inmediatamente",
"Descarta Seq=4 automáticamente",
"Guarda Seq=4 en buffer",
"Incrementa TTL"
],
answer:2,
explanation:"TCP permite recibir fuera de orden. El receptor guarda Seq=4 en buffer esperando que llegue Seq=3."
},

{
question:"¿Por qué TCP no entrega Seq=4 inmediatamente cuando falta Seq=3?",
options:[
"Porque TCP exige orden",
"Porque el switch lo impide",
"Porque TTL lo bloquea",
"Porque el router lo elimina"
],
answer:0,
explanation:"TCP garantiza entrega ordenada, por lo que los segmentos fuera de orden permanecen en buffer."
},

{
question:"¿Qué funciones tiene el buffer del receptor? (Elige 3)",
options:[
"Guardar datos que llegan",
"Aceptar fuera de orden",
"Esperar segmentos faltantes",
"Calcular rutas",
"Asignar MAC"
],
answer:[0,1,2],
multiple:true,
explanation:"El buffer del receptor almacena temporalmente segmentos mientras TCP reconstruye correctamente el flujo."
},

{
question:"¿Qué funciones tiene el buffer del emisor? (Elige 3)",
options:[
"Guardar segmentos no confirmados",
"Poder retransmitir",
"Saber qué falta",
"Crear VLANs",
"Modificar TTL"
],
answer:[0,1,2],
multiple:true,
explanation:"El buffer del emisor mantiene segmentos pendientes de confirmación para retransmitirlos si ocurre pérdida."
},

{
question:"¿Qué significa ACK acumulativo?",
options:[
"TCP confirma el siguiente número de secuencia esperado",
"TCP confirma cada bit individual",
"TCP elimina secuencia",
"TCP confirma switches"
],
answer:0,
explanation:"TCP utiliza ACK acumulativo indicando el siguiente número de secuencia esperado."
},

{
question:"Si el receptor envía ACK=3, ¿qué significa?",
options:[
"Espera Seq=3",
"Recibió hasta Seq=2 correctamente",
"Falta Seq=3",
"Todas las anteriores"
],
answer:3,
explanation:"ACK=3 significa que TCP recibió correctamente hasta Seq=2 y espera el segmento Seq=3."
},

{
question:"¿Qué significa recibir múltiples ACK=3 duplicados?",
options:[
"Que falta Seq=3",
"Que llegó todo",
"Que el router falló",
"Que el TTL expiró"
],
answer:0,
explanation:"ACK duplicados indican pérdida probable de un segmento específico."
},

{
question:"¿Qué es Fast Retransmit?",
options:[
"Retransmisión inmediata tras ACK duplicados",
"Reenvío después de apagar la red",
"Incremento de TTL",
"Compresión TCP"
],
answer:0,
explanation:"Fast Retransmit permite reenviar rápidamente segmentos perdidos sin esperar timeout."
},

{
question:"¿Qué provoca normalmente Fast Retransmit?",
options:[
"3 ACK duplicados",
"TTL=0",
"Una VLAN",
"ARP"
],
answer:0,
explanation:"TCP interpreta varios ACK duplicados como señal de pérdida y realiza Fast Retransmit."
},

{
question:"¿Qué ocurre si Fast Retransmit falla o no sucede?",
options:[
"Se espera al timeout",
"Se reinicia internet",
"Se elimina TCP",
"Se convierte en UDP"
],
answer:0,
explanation:"Si no hay recuperación rápida, TCP depende del temporizador RTO para retransmitir."
},

{
question:"¿Qué significa RTO en TCP?",
options:[
"Retransmission Timeout",
"Routing Transfer Option",
"Random Transmission Output",
"Remote Transport Operation"
],
answer:0,
explanation:"RTO es el temporizador que TCP utiliza para detectar pérdida cuando no llegan ACK."
},

{
question:"¿Sobre qué segmento se mantiene normalmente el timer TCP?",
options:[
"Sobre el más reciente",
"Sobre el más antiguo no confirmado",
"Sobre el router",
"Sobre el ACK"
],
answer:1,
explanation:"TCP mantiene el timer sobre el segmento más antiguo pendiente de confirmación."
},

{
question:"¿Qué es Backoff en TCP?",
options:[
"Espera creciente después de cada timeout",
"Eliminación de buffers",
"Reducción de puertos",
"Incremento de ACK"
],
answer:0,
explanation:"Backoff incrementa progresivamente el tiempo de espera entre retransmisiones para darle tiempo a la red."
},

{
question:"¿Qué afirmaciones describen correctamente Backoff? (Elige 4)",
options:[
"Aumenta tiempo de espera",
"Ocurre tras múltiples fallos",
"Reduce congestión potencial",
"TCP da más tiempo a la red",
"Incrementa velocidad indefinidamente",
"Elimina secuencia"
],
answer:[0,1,2,3],
multiple:true,
explanation:"Backoff evita saturar la red incrementando progresivamente los tiempos de retransmisión."
},

{
question:"¿Qué ocurre cuando finalmente llega Seq=3?",
options:[
"TCP ahora puede reconstruir completamente",
"El receptor envía ACK=5",
"Seq=4 puede entregarse",
"Todas las anteriores"
],
answer:3,
explanation:"Cuando llega el segmento faltante, TCP completa la secuencia y entrega todos los datos correctamente."
},

{
question:"¿Qué significa ACK=5 después de recibir Seq=1,2,3,4?",
options:[
"Todo fue recibido correctamente hasta Seq=4",
"Falta Seq=5",
"TCP espera el siguiente segmento",
"Todas las anteriores"
],
answer:3,
explanation:"ACK=5 indica que todo hasta Seq=4 llegó correctamente y el siguiente esperado es Seq=5."
},

{
question:"¿Qué puede ocurrir después de múltiples fallos y timeouts?",
options:[
"El emisor puede cerrar la conexión",
"TCP puede generar error",
"Los buffers pueden descartarse",
"Todas las anteriores"
],
answer:3,
explanation:"Después de varios intentos fallidos, TCP puede cerrar la conexión y liberar recursos."
},

{
question:"¿Qué significa estado Idle en TCP?",
options:[
"Conexión abierta sin tráfico",
"Conexión destruida",
"TTL=0",
"Error de checksum"
],
answer:0,
explanation:"Idle significa que la conexión sigue activa pero no hay transferencia de datos."
},

{
question:"¿Qué hace Keepalive en TCP?",
options:[
"Pregunta si el otro extremo sigue disponible",
"Incrementa TTL",
"Calcula rutas",
"Genera MAC"
],
answer:0,
explanation:"Keepalive permite verificar si la conexión aún sigue activa durante periodos sin tráfico."
},

{
question:"¿Qué afirmaciones describen correctamente TCP? (Elige 5)",
options:[
"Usa números de secuencia",
"Usa ACK acumulativos",
"Exige orden",
"Usa buffers",
"Realiza retransmisiones",
"Controla VLANs",
"Realiza switching"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"TCP proporciona comunicación confiable mediante secuencia, ACK, buffers y retransmisión."
}
,

{
question:"¿Qué funciones pertenecen a la capa de red? (Elige 3)",
options:[
"Direccionamiento lógico",
"Enrutamiento",
"Selección de ruta",
"Asignación MAC",
"Segmentación TCP"
],
answer:[0,1,2],
multiple:true,
explanation:"La capa de red se encarga de mover paquetes entre diferentes redes mediante direccionamiento lógico y routing."
},

{
question:"¿Qué afirmación describe mejor la función principal de la capa de red?",
options:[
"Enviar paquetes entre diferentes redes",
"Crear segmentos TCP",
"Transmitir bits eléctricos",
"Controlar sesiones"
],
answer:0,
explanation:"La capa de red permite comunicación entre redes distintas utilizando direccionamiento IP y routing."
},

{
question:"¿Qué ejemplos representan direcciones IP válidas? (Elige 2)",
options:[
"192.168.1.1",
"2001:db8::1",
"00:1A:2B:3C:4D:5E",
"HTTP"
],
answer:[0,1],
multiple:true,
explanation:"192.168.1.1 es IPv4 y 2001:db8::1 es IPv6."
},

{
question:"¿Qué protocolo de capa 3 se utiliza principalmente para direccionamiento de paquetes?",
options:[
"Ethernet",
"IP",
"PPP",
"CSMA/CD"
],
answer:1,
explanation:"IP es el protocolo principal de direccionamiento lógico en capa de red."
},

{
question:"¿Qué protocolo se utiliza para diagnóstico de red?",
options:[
"ICMP",
"PPP",
"Frame Relay",
"CDP"
],
answer:0,
explanation:"ICMP se utiliza para diagnóstico y mensajes de control, por ejemplo ping."
},

{
question:"¿Qué protocolo de capa 3 proporciona seguridad y cifrado?",
options:[
"IPsec",
"ICMP",
"ARP",
"Ethernet"
],
answer:0,
explanation:"IPsec agrega mecanismos de seguridad y cifrado a nivel IP."
},

{
question:"¿Qué afirmaciones son correctas sobre los routers? (Elige 3)",
options:[
"Leen direcciones IP",
"Consultan tablas de rutas",
"Envían paquetes al siguiente salto",
"Asignan direcciones MAC permanentes",
"Crean segmentos TCP"
],
answer:[0,1,2],
multiple:true,
explanation:"Los routers trabajan principalmente en capa 3 usando direcciones IP y tablas de routing."
},

{
question:"¿Qué significa siguiente salto (Next-Hop)?",
options:[
"El siguiente router o destino al que se enviará el paquete",
"El siguiente switch físico",
"El siguiente puerto TCP",
"El siguiente voltaje"
],
answer:0,
explanation:"El siguiente salto representa el próximo dispositivo de capa 3 hacia el destino final."
},

{
question:"¿Qué funciones pertenecen a la capa de enlace de datos? (Elige 5)",
options:[
"Crear frames",
"Direccionamiento MAC",
"Detección de errores",
"Control de acceso al medio",
"Comunicación entre dispositivos conectados directamente",
"Routing dinámico",
"Asignación IP"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"La capa 2 prepara datos para transmisión física y maneja comunicación local directa."
},

{
question:"¿Qué dirección pertenece a una MAC?",
options:[
"192.168.1.1",
"2001:db8::1",
"00:1A:2B:3C:4D:5E",
"255.255.255.0"
],
answer:2,
explanation:"Las direcciones MAC identifican físicamente interfaces de red en capa 2."
},

{
question:"¿Qué método de acceso al medio se utiliza normalmente en Ethernet cableado?",
options:[
"CSMA/CA",
"CSMA/CD",
"OSPF",
"RIP"
],
answer:1,
explanation:"CSMA/CD se asocia tradicionalmente con Ethernet cableado."
},

{
question:"¿Qué método de acceso al medio se utiliza normalmente en WiFi?",
options:[
"CSMA/CD",
"CSMA/CA",
"TCP",
"PPP"
],
answer:1,
explanation:"CSMA/CA se utiliza en redes inalámbricas para evitar colisiones."
},

{
question:"¿Qué protocolos pertenecen a capa 2? (Elige 4)",
options:[
"Ethernet",
"PPP",
"Frame Relay",
"CDP",
"IP",
"ICMP"
],
answer:[0,1,2,3],
multiple:true,
explanation:"Ethernet, PPP, Frame Relay y CDP pertenecen principalmente a la capa de enlace."
},

{
question:"¿Qué función principal tiene la capa física?",
options:[
"Definir cómo se transmiten bits en el medio físico",
"Realizar routing",
"Crear sesiones",
"Asignar puertos"
],
answer:0,
explanation:"La capa física trabaja con transmisión real de bits mediante señales."
},

{
question:"¿Qué características define la capa física? (Elige 4)",
options:[
"Eléctricas",
"Mecánicas",
"Funcionales",
"Procedimentales",
"Direcciones IP",
"Routing"
],
answer:[0,1,2,3],
multiple:true,
explanation:"La capa física define aspectos eléctricos, físicos y de transmisión."
},

{
question:"¿Qué elementos pertenecen a las características eléctricas de capa física? (Elige 3)",
options:[
"Niveles de voltaje",
"Temporización de bits",
"Tipo de señal",
"Direcciones MAC",
"Tablas de rutas"
],
answer:[0,1,2],
multiple:true,
explanation:"La parte eléctrica define cómo representar y sincronizar bits."
},

{
question:"¿Qué elementos pertenecen a las características mecánicas? (Elige 3)",
options:[
"Conectores",
"Cables",
"Pines",
"TTL",
"Puertos TCP"
],
answer:[0,1,2],
multiple:true,
explanation:"Las características mecánicas describen estructura física y conectividad."
},

{
question:"¿Qué describe la parte funcional de la capa física?",
options:[
"La función de cada pin y dirección de transmisión",
"El cálculo de rutas",
"Direcciones IP",
"Checksum TCP"
],
answer:0,
explanation:"La parte funcional especifica qué hace cada conexión y cómo transmite."
},

{
question:"¿Qué describe la parte procedimental de la capa física?",
options:[
"Cómo establecer y terminar transmisión",
"Cómo asignar IP",
"Cómo calcular ACK",
"Cómo hacer routing"
],
answer:0,
explanation:"Las características procedimentales definen reglas para iniciar y terminar transmisión."
},

{
question:"¿Qué afirmaciones describen correctamente el modelo TCP/IP original respecto a OSI? (Elige 4)",
options:[
"Aplicación TCP/IP combina Aplicación, Presentación y Sesión",
"Internet TCP/IP corresponde a Red OSI",
"Acceso a la red combina Enlace y Física",
"Transporte corresponde a Transporte",
"TCP/IP tiene 7 capas",
"OSI tiene 4 capas"
],
answer:[0,1,2,3],
multiple:true,
explanation:"TCP/IP simplifica varias capas OSI agrupando funciones equivalentes."
},

{
question:"¿Qué capa TCP/IP equivale aproximadamente a Red en OSI?",
options:[
"Aplicación",
"Internet",
"Acceso a la red",
"Sesión"
],
answer:1,
explanation:"La capa Internet de TCP/IP realiza funciones similares a la capa de Red OSI."
},

{
question:"¿Qué capa TCP/IP combina Enlace de datos y Física?",
options:[
"Aplicación",
"Transporte",
"Internet",
"Acceso a la red"
],
answer:3,
explanation:"Acceso a la red en TCP/IP agrupa funciones físicas y de enlace."
},

{
question:"¿Qué afirmación resume mejor la diferencia entre capa 2 y capa 3?",
options:[
"Capa 2 mueve frames localmente y capa 3 mueve paquetes entre redes",
"Capa 2 hace routing y capa 3 transmite bits",
"Capa 2 usa IP y capa 3 usa voltajes",
"Capa 3 solo funciona en LAN"
],
answer:0,
explanation:"La capa 2 trabaja con comunicación local y MAC; capa 3 conecta diferentes redes usando IP."
},

{
question:"¿Qué mecanismos utiliza TCP para recuperación de errores? (Elige 6)",
options:[
"Números de secuencia",
"ACK acumulativos",
"Buffers",
"Timer RTO",
"Retransmisión",
"Fast Retransmit",
"Direcciones MAC",
"CSMA/CD"
],
answer:[0,1,2,3,4,5],
multiple:true,
explanation:"TCP garantiza entrega confiable utilizando secuencia, ACK, buffers, temporizadores y retransmisiones."
},

{
question:"¿Cuál es la función principal de los números de secuencia?",
options:[
"Asignar direcciones IP",
"Saber orden, detectar pérdidas y reensamblar datos",
"Controlar switches",
"Reducir TTL"
],
answer:1,
explanation:"Los números de secuencia permiten ordenar segmentos, detectar pérdidas y reconstruir correctamente la información."
},

{
question:"¿Qué significa ACK=3 en TCP?",
options:[
"El receptor recibió correctamente hasta Seq=2 y espera Seq=3",
"El receptor ya tiene Seq=3",
"El TTL es 3",
"El router espera 3 paquetes"
],
answer:0,
explanation:"ACK=3 indica que el siguiente número esperado es Seq=3."
},

{
question:"¿Por qué el receptor envía ACK=3 nuevamente cuando llega Seq=4?",
options:[
"Porque Seq=3 aún falta",
"Porque Seq=4 está dañado",
"Porque el router eliminó Seq=4",
"Porque TTL expiró"
],
answer:0,
explanation:"TCP utiliza ACK acumulativos. Aunque llegue Seq=4, sigue esperando Seq=3."
},

{
question:"¿Qué significa un ACK duplicado?",
options:[
"El receptor sigue esperando un segmento faltante",
"El router cambió la ruta",
"El TTL aumentó",
"TCP cerró la conexión"
],
answer:0,
explanation:"ACK duplicados indican normalmente pérdida de un segmento específico."
},

{
question:"¿Qué hace el receptor con Seq=4 mientras falta Seq=3?",
options:[
"Lo elimina",
"Lo entrega inmediatamente",
"Lo guarda en buffer",
"Lo convierte en broadcast"
],
answer:2,
explanation:"TCP permite recepción fuera de orden y almacena temporalmente segmentos pendientes."
},

{
question:"¿Qué funciones tiene el buffer del receptor? (Elige 4)",
options:[
"Guardar datos recibidos",
"Aceptar fuera de orden",
"Esperar segmentos faltantes",
"Permitir reensamblado ordenado",
"Asignar MAC",
"Crear VLANs"
],
answer:[0,1,2,3],
multiple:true,
explanation:"El buffer del receptor permite mantener segmentos hasta completar el orden correcto."
},

{
question:"¿Qué guarda el buffer del emisor?",
options:[
"Segmentos enviados pero no confirmados",
"Direcciones MAC",
"Voltajes eléctricos",
"Tablas ARP"
],
answer:0,
explanation:"El emisor mantiene segmentos pendientes para poder retransmitirlos si es necesario."
},

{
question:"¿Qué ocurre con Seq=1 y Seq=2 después de recibir ACK correspondientes?",
options:[
"Se retransmiten",
"Se eliminan del buffer",
"Se convierten en broadcast",
"Se guardan indefinidamente"
],
answer:1,
explanation:"Una vez confirmados, los segmentos ya no necesitan permanecer en buffer."
},

{
question:"¿Cuándo inicia normalmente el timer RTO?",
options:[
"Cuando llega un ACK",
"Cuando se transmite el segmento",
"Cuando se cierra TCP",
"Cuando TTL=0"
],
answer:1,
explanation:"TCP inicia el temporizador inmediatamente después de enviar un segmento."
},

{
question:"¿Qué afirmaciones son correctas sobre el timer RTO? (Elige 4)",
options:[
"Inicia automáticamente al enviar",
"Espera confirmación ACK",
"Normalmente se mantiene sobre el más antiguo no confirmado",
"Se cancela cuando llega ACK correcto",
"Controla switches",
"Calcula rutas"
],
answer:[0,1,2,3],
multiple:true,
explanation:"El RTO controla cuánto tiempo TCP espera confirmación antes de retransmitir."
},

{
question:"¿Sobre qué segmento mantiene TCP normalmente el timer principal?",
options:[
"Sobre el más reciente",
"Sobre el más antiguo no confirmado",
"Sobre el ACK más nuevo",
"Sobre el router destino"
],
answer:1,
explanation:"TCP usa un temporizador principal asociado al segmento pendiente más antiguo."
},

{
question:"¿Por qué Seq=4 depende de Seq=3 en TCP?",
options:[
"Porque TCP exige entrega ordenada",
"Porque el router lo obliga",
"Porque TTL lo controla",
"Porque IP lo descarta"
],
answer:0,
explanation:"TCP garantiza orden correcto antes de entregar información a la aplicación."
},

{
question:"¿Qué ocurre si llega ACK=4 correctamente?",
options:[
"El timer asociado puede cancelarse",
"TCP reinicia internet",
"TTL aumenta",
"Se eliminan las rutas"
],
answer:0,
explanation:"Cuando llega confirmación válida, TCP detiene el temporizador correspondiente."
},

{
question:"¿Qué es Fast Retransmit?",
options:[
"Retransmisión inmediata basada en ACK duplicados",
"Retransmisión física eléctrica",
"Incremento del TTL",
"Compresión TCP"
],
answer:0,
explanation:"Fast Retransmit permite retransmitir antes de que expire el timeout."
},

{
question:"¿Qué provoca normalmente Fast Retransmit?",
options:[
"3 ACK duplicados",
"TTL=0",
"ARP",
"CSMA/CD"
],
answer:0,
explanation:"TCP interpreta múltiples ACK duplicados como señal de pérdida."
},

{
question:"¿Qué afirmación es correcta respecto a Fast Retransmit?",
options:[
"Elimina completamente el timer",
"Adelanta la retransmisión sin esperar timeout",
"Reemplaza TCP",
"Modifica IP"
],
answer:1,
explanation:"Fast Retransmit acelera recuperación pero el temporizador sigue existiendo."
},

{
question:"¿Qué ocurre durante un timeout?",
options:[
"TCP retransmite el segmento pendiente",
"El switch incrementa TTL",
"Se destruye la sesión inmediatamente",
"TCP elimina ACK"
],
answer:0,
explanation:"Cuando expira el RTO, TCP interpreta pérdida y retransmite."
},

{
question:"¿Qué es Backoff en TCP?",
options:[
"Incrementar progresivamente el tiempo de espera",
"Eliminar buffers",
"Disminuir ACK",
"Reducir tamaño IP"
],
answer:0,
explanation:"Backoff aumenta el tiempo entre retransmisiones para aliviar posibles congestiones."
},

{
question:"¿Qué afirmaciones son correctas sobre Backoff? (Elige 4)",
options:[
"Aumenta tiempos de espera",
"Puede usar 1s,2s,4s...",
"Da más tiempo a la red",
"Ocurre tras fallos repetidos",
"Incrementa velocidad",
"Elimina secuencia"
],
answer:[0,1,2,3],
multiple:true,
explanation:"Backoff evita saturar la red incrementando gradualmente el tiempo de retransmisión."
},

{
question:"¿Qué ocurre cuando finalmente llega Seq=3?",
options:[
"TCP ahora puede entregar Seq=4",
"El receptor envía ACK=5",
"Se completa el flujo ordenado",
"Todas las anteriores"
],
answer:3,
explanation:"Al recibir el segmento faltante, TCP completa la secuencia y entrega toda la información."
},

{
question:"¿Qué significa ACK=5 después de recibir Seq=1,2,3,4?",
options:[
"Todo fue recibido hasta Seq=4",
"El siguiente esperado es Seq=5",
"La transmisión está ordenada",
"Todas las anteriores"
],
answer:3,
explanation:"ACK=5 confirma que todos los segmentos anteriores fueron recibidos correctamente."
},

{
question:"¿Qué puede ocurrir si continúan fallando retransmisiones y timeouts?",
options:[
"TCP puede cerrar la conexión",
"TCP puede generar error",
"Los buffers pueden liberarse",
"Todas las anteriores"
],
answer:3,
explanation:"Después de múltiples fallos TCP puede finalizar la conexión."
},

{
question:"¿Qué significa estado Idle?",
options:[
"Conexión abierta sin tráfico",
"Conexión destruida",
"TTL agotado",
"Error checksum"
],
answer:0,
explanation:"Idle representa una conexión activa pero sin intercambio de datos."
},

{
question:"¿Qué hace Keepalive?",
options:[
"Verifica si el otro extremo sigue disponible",
"Incrementa TTL",
"Genera rutas",
"Controla VLANs"
],
answer:0,
explanation:"Keepalive ayuda a detectar conexiones inactivas o caídas."
},

{
question:"¿Qué afirmación resume mejor el funcionamiento de TCP?",
options:[
"TCP utiliza secuencia, ACK, buffers y retransmisión para garantizar entrega confiable",
"TCP solo mueve bits",
"TCP únicamente calcula rutas",
"TCP trabaja solo en switches"
],
answer:0,
explanation:"TCP proporciona confiabilidad mediante control de orden, confirmaciones y recuperación de errores."
},

{
question:"¿Qué afirmaciones son correctas sobre el temporizador RTO? (Elige 5)",
options:[
"Solo existe para segmentos no confirmados",
"Se activa al enviar un segmento",
"Se cancela cuando llega el ACK correcto",
"TCP normalmente lo mantiene sobre el segmento más antiguo no confirmado",
"No significa automáticamente pérdida",
"Controla switches",
"Calcula rutas"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"El RTO existe únicamente para segmentos pendientes de confirmación y ayuda a detectar posibles pérdidas."
},

{
question:"¿Qué ocurre si tres segmentos ya fueron confirmados mediante ACK?",
options:[
"El timer puede quedar sin actividad",
"TCP mantiene timers eternamente",
"El TTL aumenta",
"Se elimina la sesión"
],
answer:0,
explanation:"Si todos los segmentos pendientes fueron confirmados, ya no existe un segmento pendiente asociado al temporizador."
},

{
question:"¿Por qué el receptor guarda Seq=4 en buffer cuando falta Seq=3?",
options:[
"Porque TCP exige entrega ordenada",
"Porque IP bloquea Seq=4",
"Porque Ethernet elimina Seq=3",
"Porque el switch lo ordena"
],
answer:0,
explanation:"TCP garantiza orden correcto, por eso mantiene temporalmente datos fuera de orden."
},

{
question:"¿Qué hace el receptor mientras espera Seq=3?",
options:[
"Solicita retransmisión mediante ACK duplicados",
"Entrega Seq=4 inmediatamente",
"Incrementa TTL",
"Elimina la conexión"
],
answer:0,
explanation:"El receptor sigue indicando el siguiente esperado mediante ACK acumulativos."
},

{
question:"¿Qué afirmación describe mejor la lógica de TCP respecto al timer?",
options:[
"TCP ya sabe inmediatamente si hubo pérdida",
"TCP inicia timer y espera confirmación",
"TCP retransmite instantáneamente todo",
"TCP depende del switch"
],
answer:1,
explanation:"TCP no sabe si hubo pérdida; simplemente inicia temporizador y espera ACK."
},

{
question:"¿Qué ocurre si llega ACK=4 antes de expirar el timer?",
options:[
"El timer se detiene",
"El TTL se reinicia",
"TCP retransmite igualmente",
"El segmento se elimina"
],
answer:0,
explanation:"La llegada del ACK confirma recepción correcta y cancela el temporizador."
},

{
question:"¿Qué ocurre si el timer expira sin recibir confirmación?",
options:[
"Timeout y retransmisión",
"El switch recalcula ruta",
"Se incrementa ACK",
"Se elimina IP"
],
answer:0,
explanation:"Cuando expira el tiempo de espera, TCP interpreta posible pérdida y retransmite."
},

{
question:"¿De qué depende el tiempo del temporizador TCP?",
options:[
"Del RTT estimado",
"Del color del cable",
"Del tamaño MAC",
"Del switch"
],
answer:0,
explanation:"TCP calcula el temporizador usando el Round Trip Time estimado."
},

{
question:"¿Qué significa RTT?",
options:[
"Round Trip Time",
"Real Transport Table",
"Routing Transfer Timer",
"Remote Transmission Type"
],
answer:0,
explanation:"RTT representa el tiempo de ida y vuelta entre envío y recepción del ACK."
},

{
question:"¿Qué afirmaciones son correctas sobre RTT y RTO? (Elige 4)",
options:[
"TCP mide tiempo de envío",
"TCP mide llegada del ACK",
"RTO depende del RTT",
"Redes lentas suelen usar timers mayores",
"El timer es fijo universal",
"El timer depende del switch"
],
answer:[0,1,2,3],
multiple:true,
explanation:"TCP adapta dinámicamente el RTO dependiendo del comportamiento de la red."
},

{
question:"¿Qué ocurre en el Paso 1 del flujo TCP?",
options:[
"TCP recibe el payload de aplicación",
"IP agrega TTL",
"Ethernet agrega MAC",
"Se genera FCS"
],
answer:0,
explanation:"La capa de aplicación genera información y TCP recibe esos datos."
},

{
question:"¿Qué campos puede incluir el TCP Header? (Elige 6)",
options:[
"Puertos",
"Número de secuencia",
"ACK",
"Flags",
"Window Size",
"Checksum",
"Dirección MAC",
"TTL"
],
answer:[0,1,2,3,4,5],
multiple:true,
explanation:"El header TCP contiene información de control necesaria para comunicación confiable."
},

{
question:"¿Qué elementos usa TCP para calcular el checksum? (Elige 3)",
options:[
"TCP Header",
"Payload",
"Pseudo Header",
"MAC destino",
"FCS"
],
answer:[0,1,2],
multiple:true,
explanation:"TCP usa header, datos y pseudo-header para cálculo de integridad."
},

{
question:"¿Qué afirmación es correcta respecto al pseudo-header?",
options:[
"Viaja encapsulado en la red",
"No viaja realmente; solo ayuda al checksum",
"Es una MAC",
"Es un trailer Ethernet"
],
answer:1,
explanation:"El pseudo-header existe temporalmente para cálculos internos del checksum."
},

{
question:"¿Qué información contiene el pseudo-header? (Elige 4)",
options:[
"IP origen",
"IP destino",
"Protocolo",
"Longitud TCP",
"MAC origen",
"TTL Ethernet"
],
answer:[0,1,2,3],
multiple:true,
explanation:"TCP toma información IP para validar correctamente la comunicación."
},

{
question:"¿Qué ocurre después de calcular el checksum?",
options:[
"El resultado se guarda en el campo checksum del header TCP",
"Se elimina el segmento",
"Se genera una VLAN",
"Se modifica TTL"
],
answer:0,
explanation:"TCP almacena el checksum calculado dentro del encabezado."
},

{
question:"¿Qué forma el Segmento TCP?",
options:[
"Header TCP + Datos",
"IP + MAC",
"TTL + ACK",
"Header Ethernet + Trailer"
],
answer:0,
explanation:"TCP encapsula datos agregando su encabezado de control."
},

{
question:"¿Qué hace IP después de recibir el segmento TCP?",
options:[
"Agrega el encabezado IP",
"Agrega trailer Ethernet",
"Calcula ACK",
"Genera puertos"
],
answer:0,
explanation:"La capa de red encapsula el segmento TCP dentro de un paquete IP."
},

{
question:"¿Qué incluye el IP Header? (Elige 4)",
options:[
"IP origen",
"IP destino",
"TTL",
"Protocolo",
"MAC origen",
"Checksum TCP"
],
answer:[0,1,2,3],
multiple:true,
explanation:"El encabezado IP contiene información lógica necesaria para routing."
},

{
question:"¿Qué capa agrega tanto header como trailer?",
options:[
"Aplicación",
"Transporte",
"Red",
"Enlace de datos"
],
answer:3,
explanation:"Ethernet normalmente agrega encabezado y trailer (FCS/CRC)."
},

{
question:"¿Qué contiene el Ethernet Header? (Elige 3)",
options:[
"MAC origen",
"MAC destino",
"Tipo",
"TTL",
"Puertos TCP"
],
answer:[0,1,2],
multiple:true,
explanation:"El encabezado Ethernet identifica comunicación local mediante direcciones MAC."
},

{
question:"¿Qué contiene normalmente el Ethernet Trailer?",
options:[
"FCS/CRC",
"TTL",
"ACK",
"Puerto TCP"
],
answer:0,
explanation:"El trailer Ethernet contiene FCS/CRC para detección de errores."
},

{
question:"¿Qué función tiene el checksum/FCS?",
options:[
"Detectar errores",
"Asignar IP",
"Crear sesiones",
"Controlar routing"
],
answer:0,
explanation:"Los checksums ayudan a verificar integridad de la información."
},

{
question:"¿Qué ocurre cuando el receptor recibe el segmento TCP?",
options:[
"TCP recalcula el checksum",
"El switch genera ACK",
"TTL aumenta",
"Se elimina MAC"
],
answer:0,
explanation:"El receptor recalcula checksum para verificar integridad."
},

{
question:"¿Qué sucede si el checksum coincide?",
options:[
"TCP acepta los datos",
"TCP elimina el paquete",
"El router reinicia la conexión",
"Se descarta automáticamente"
],
answer:0,
explanation:"Checksums coincidentes indican integridad correcta."
},

{
question:"¿Qué sucede si el checksum NO coincide?",
options:[
"TCP descarta el segmento",
"El router corrige los datos",
"TTL aumenta",
"Ethernet retransmite automáticamente"
],
answer:0,
explanation:"Si la verificación falla, TCP considera corruptos los datos."
},

{
question:"¿Qué afirmaciones describen correctamente la encapsulación? (Elige 5)",
options:[
"TCP agrega header TCP",
"IP agrega header IP",
"Ethernet agrega header y trailer",
"Física transmite bits",
"Aplicación genera datos",
"TCP agrega trailer Ethernet"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"Cada capa agrega información específica durante el proceso de encapsulación."
},

{
question:"¿Qué afirmación es correcta respecto a los trailers?",
options:[
"TCP e IP normalmente no agregan trailer",
"Todas las capas agregan trailer",
"TCP agrega FCS",
"IP agrega CRC"
],
answer:0,
explanation:"Normalmente Ethernet es la capa clásica que agrega trailer."
},

{
question:"¿Qué ocurre durante la interacción entre capas adyacentes?",
options:[
"Una capa solicita servicios a la capa inferior",
"Una capa elimina el modelo OSI",
"Las capas se comunican físicamente directo",
"Los routers calculan TTL"
],
answer:0,
explanation:"La interacción entre capas adyacentes ocurre cuando una capa utiliza los servicios de la capa inmediatamente inferior para completar funciones de comunicación."
},

{
question:"¿Qué son los SAP (Service Access Points)?",
options:[
"Interfaces usadas entre capas para solicitar servicios",
"Protocolos de routing",
"Direcciones MAC",
"Tipos de cable"
],
answer:0,
explanation:"Los SAP permiten que una capa acceda a los servicios de la capa inferior dentro del modelo OSI."
},

{
question:"¿Qué afirmaciones describen correctamente la interacción entre capas adyacentes? (Elige 4)",
options:[
"La capa superior solicita servicios",
"La capa inferior ayuda a transmitir",
"Los datos son encapsulados",
"Los datos pasan capa por capa",
"Todas las capas trabajan aisladas",
"Los switches eliminan encapsulación"
],
answer:[0,1,2,3],
multiple:true,
explanation:"Las capas OSI cooperan progresivamente encapsulando y transmitiendo datos entre capas consecutivas."
},

{
question:"¿Qué significa encapsulación?",
options:[
"Agregar información de control mientras los datos bajan por las capas",
"Eliminar direcciones IP",
"Apagar el router",
"Crear voltaje"
],
answer:0,
explanation:"La encapsulación agrega headers y trailers conforme los datos descienden por las capas."
},

{
question:"¿Qué afirmación es correcta respecto a TCP y el payload?",
options:[
"TCP une Header TCP y payload de aplicación",
"TCP elimina datos",
"TCP crea direcciones MAC",
"TCP reemplaza IP"
],
answer:0,
explanation:"TCP encapsula los datos agregando un encabezado TCP al payload de aplicación."
},

{
question:"¿Qué resultado produce TCP al unir Header TCP y Payload?",
options:[
"Paquete IP",
"Segmento TCP",
"Trama Ethernet",
"Bits"
],
answer:1,
explanation:"La unión del encabezado TCP con los datos forma un Segmento TCP."
},

{
question:"¿Cuál es la PDU correcta para la capa de transporte usando TCP?",
options:[
"Paquete",
"Segmento",
"Trama",
"Bits"
],
answer:1,
explanation:"Cuando transporte utiliza TCP, la unidad de datos se llama Segmento."
},

{
question:"¿Cuál es la PDU correcta para UDP?",
options:[
"Datagrama",
"Frame",
"Bit",
"ACK"
],
answer:0,
explanation:"UDP utiliza Datagrama como PDU de transporte."
},

{
question:"Relaciona correctamente las PDU OSI. (Elige 5)",
options:[
"Aplicación/Presentación/Sesión → Datos",
"Transporte TCP → Segmento",
"Transporte UDP → Datagrama",
"Red → Paquete",
"Enlace → Trama",
"Física → Router"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"Cada capa OSI maneja diferentes unidades de datos según su función."
},

{
question:"¿Qué PDU utiliza la capa física?",
options:[
"Segmento",
"Paquete",
"Bits",
"Frame"
],
answer:2,
explanation:"La capa física transmite bits mediante señales eléctricas, ópticas o inalámbricas."
},

{
question:"¿Qué afirmación describe la interacción entre capas del mismo nivel?",
options:[
"Una capa se comunica lógicamente con la misma capa del otro dispositivo",
"Las capas hablan físicamente directo",
"Solo los routers participan",
"Las MAC realizan sesiones"
],
answer:0,
explanation:"Las capas equivalentes creen comunicarse directamente aunque los datos realmente atraviesan todas las capas inferiores."
},

{
question:"¿Qué significa comunicación lógica entre capas del mismo nivel?",
options:[
"Las capas equivalentes intercambian funciones conceptualmente",
"Existe un cable directo entre capas",
"El switch conecta sesiones",
"El TTL crea enlaces"
],
answer:0,
explanation:"La comunicación lógica representa la relación conceptual entre capas equivalentes de dispositivos distintos."
},

{
question:"¿Qué afirmaciones son correctas respecto a la interacción entre mismas capas? (Elige 4)",
options:[
"La comunicación es lógica",
"Los datos realmente bajan y suben por todas las capas",
"Cada capa cree hablar con su equivalente remoto",
"Las capas inferiores transportan la información",
"Las capas saltan directamente entre PCs",
"TCP elimina encapsulación"
],
answer:[0,1,2,3],
multiple:true,
explanation:"Aunque conceptualmente las capas equivalentes se comunican, físicamente los datos atraviesan todo el stack OSI."
},

{
question:"¿Qué capa genera inicialmente los datos?",
options:[
"Aplicación",
"Red",
"Enlace",
"Física"
],
answer:0,
explanation:"La capa de aplicación genera la información original como mensajes, páginas web o archivos."
},

{
question:"¿Qué capa convierte el paquete IP en una trama?",
options:[
"Aplicación",
"Transporte",
"Enlace",
"Física"
],
answer:2,
explanation:"La capa de enlace encapsula paquetes IP dentro de tramas Ethernet."
},

{
question:"¿Qué afirmación resume mejor el flujo OSI?",
options:[
"Los datos bajan encapsulándose y suben desencapsulándose",
"Los datos viajan directo entre aplicaciones",
"Solo TCP encapsula",
"Los switches eliminan todas las capas"
],
answer:0,
explanation:"En el emisor ocurre encapsulación y en el receptor desencapsulación."
},

{
question:"¿Qué afirmaciones describen correctamente las PDU? (Elige 5)",
options:[
"Datos pertenecen a capas superiores",
"TCP usa segmentos",
"UDP usa datagramas",
"IP usa paquetes",
"Ethernet usa tramas",
"Física usa ACK"
],
answer:[0,1,2,3,4],
multiple:true,
explanation:"Cada capa OSI utiliza diferentes nombres para la unidad de información que maneja."
},

{
question:"¿Qué ocurre físicamente durante la comunicación entre capas equivalentes?",
options:[
"Los datos atraviesan todas las capas inferiores",
"Las capas se conectan directamente",
"El router elimina transporte",
"Solo existe capa física"
],
answer:0,
explanation:"Aunque la comunicación es lógica entre capas equivalentes, físicamente los datos recorren todas las capas."
},

{
question:"¿Qué capa utiliza directamente SAP para acceder a servicios inferiores?",
options:[
"Cualquier capa superior respecto a la inmediata inferior",
"Solo capa física",
"Solo capa de aplicación",
"Solo routers"
],
answer:0,
explanation:"Las capas utilizan interfaces SAP para interactuar con servicios de capas inferiores."
},

{
question:"¿Qué afirmación representa mejor el concepto completo?",
options:[
"Las capas cooperan encapsulando datos y comunicándose lógica y físicamente para transmitir información",
"Cada capa trabaja completamente aislada",
"TCP reemplaza todas las capas",
"Solo IP transmite información"
],
answer:0,
explanation:"El modelo OSI organiza funciones cooperativas entre capas para lograr comunicación completa."
}



],



};
