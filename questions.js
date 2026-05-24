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

}
,
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
]


};