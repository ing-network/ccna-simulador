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

]




};