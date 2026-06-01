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

],



tema15:[

{
  "question": "¿Qué es un modelo de red?",
  "options": [
    "Un conjunto de reglas y funciones separadas en capas.",
    "Un protocolo físico para interconectar routers de borde.",
    "Un software de monitorización de tráfico en tiempo real.",
    "Una topología lógica basada en el direccionamiento IP."
  ],
  "answer": 0,
  "explanation": "Un modelo de red es un conjunto de reglas y funciones separadas en capas."
},

{
  "question": "¿De cuántas capas se compone el modelo OSI?",
  "options": [
    "De 4 capas (Aplicación, Transporte, Internet, Acceso a Red)",
    "De 5 capas (Aplicación, Transporte, Red, Enlace de Datos, Física)",
    "De 7 capas (Aplicación, Presentación, Sesión, Transporte, Red, Enlace de Datos, Física)",
    "De 3 capas (Acceso, Distribución, Núcleo)"
  ],
  "answer": 2,
  "explanation": "El Modelo OSI es un modelo estructurado específicamente por 7 capas que van desde la capa física hasta la capa de aplicación."
},

{
  "question": "¿Qué condición deben cumplir los dispositivos origen y destino para que los datos se envíen, interpreten y reciban correctamente?",
  "options": [
    "Deben utilizar el mismo modelo de red entre sus capas.",
    "Deben estar conectados al mismo switch físico de forma directa.",
    "Deben pertenecer exclusivamente a la misma marca de fabricante.",
    "Deben utilizar sistemas operativos idénticos en ambos extremos."
  ],
  "answer": 0,
  "explanation": "Los dispositivos que se comunican en una red origen y destino deben utilizar el mismo modelo de red para que los datos puedan enviarse, interpretarse y recibirse correctamente entre las capas del modelo."
},

{
  "question": "¿De qué se encargan principalmente las capas superiores (Aplicación, Presentación y Sesión)?",
  "options": [
    "De controlar el direccionamiento IP y el enrutamiento de los paquetes.",
    "De cómo las aplicaciones utilizan la red, enfocándose en el software de aplicación del usuario.",
    "De la transmisión física de los datos a través del cableado de red.",
    "De configurar los parámetros de hardware en los routers y switches."
  ],
  "answer": 1,
  "explanation": "Las capas superiores están más cerca del usuario y se encargan de cómo las aplicaciones utilizan la red; es decir, se enfocan en el software de aplicación del usuario."
},

{
  "question": "¿Cuál es el enfoque de las capas superiores respecto a los datos?",
  "options": [
    "Se preocupan por la velocidad de transmisión en Mbps de la red.",
    "Se enfocan en cómo viajan los datos físicamente por el medio.",
    "Se enfocan en cómo se utilizan, interpretan y comprenden los datos.",
    "Se encargan de la corrección de errores eléctricos en el cable de cobre."
  ],
  "answer": 2,
  "explanation": "Las capas superiores no se preocupan por cómo viajan los datos físicamente, sino por cómo se utilizan, interpretan y comprenden los datos."
},

{
  "question": "¿Cuál es la función de la capa de aplicación con respecto a la aplicación del usuario y la red?",
  "options": [
    "Funciona como la interfaz entre la aplicación del usuario y la red.",
    "Se encarga de fabricar el hardware que conecta al usuario con la red.",
    "Modifica el código fuente de la aplicación para que sea compatible con el sistema operativo.",
    "Establece la conexión eléctrica directa entre la computadora y el router."
  ],
  "answer": 0,
  "explanation": "La capa de aplicación es la más cercana al usuario y funciona como la interfaz entre la aplicación del usuario y la red."
},

{
  "question": "Con respecto a la capa de aplicación, ¿cuál de las siguientes afirmaciones es correcta según tus apuntes?",
  "options": [
    "La aplicación del usuario es el protocolo de la capa de aplicación.",
    "La aplicación del usuario no es el protocolo de la capa de aplicación.",
    "El usuario debe configurar los protocolos manualmente antes de usar la red.",
    "Esta capa es la más lejana al usuario dentro de todo el modelo OSI."
  ],
  "answer": 1,
  "explanation": "Tus apuntes aclaran explícitamente que la aplicación del usuario no es el protocolo de la capa de aplicación, sino que esta capa provee servicios a dichas aplicaciones."
},

{
  "question": "¿Qué puertos utilizan los protocolos FTP y HTTPS respectivamente?",
  "options": [
    "FTP utiliza el 23 y HTTPS utiliza el 80.",
    "FTP utiliza el 21 y HTTPS utiliza el 443.",
    "FTP utiliza el 22 y HTTPS utiliza el 53.",
    "FTP utiliza el 69 y HTTPS utiliza el 110."
  ],
  "answer": 1,
  "explanation": "De acuerdo con la lista, FTP está asignado al puerto 21 y HTTPS al puerto 443."
},

{
  "question": "¿Cuál es la combinación correcta de puertos para los protocolos SSH, TFTP, DNS y HTTP?",
  "options": [
    "SSH: 22, TFTP: 69, DNS: 53, HTTP: 80",
    "SSH: 23, TFTP: 21, DNS: 25, HTTP: 443",
    "SSH: 25, TFTP: 110, DNS: 23, HTTP: 80",
    "SSH: 22, TFTP: 25, DNS: 110, HTTP: 443"
  ],
  "answer": 0,
  "explanation": "Los puertos correctos son: SSH usa el 22, TFTP el 69, DNS el 53 y HTTP el 80."
},

{
  "question": "¿De qué se encarga principalmente la capa de presentación?",
  "options": [
    "De dar formato y estructura a los datos para que los dispositivos puedan entender la información.",
    "De establecer, administrar y finalizar las sesiones entre aplicaciones.",
    "De la transmisión de bits a través de los medios físicos de la red.",
    "De enrutar los paquetes de datos a través de diferentes redes."
  ],
  "answer": 0,
  "explanation": "La capa de presentación se encarga de dar formato y estructura a los datos para que los dispositivos puedan entender la información que reciben."
},








{
  "question": "Con base en el ejemplo de tus apuntes para la palabra 'Hola', selecciona las tres afirmaciones que describen correctamente el proceso en la capa de presentación:",
  "options": [
    "El usuario escribe el texto 'Hola' directamente en la capa de presentación.",
    "La capa de presentación convierte el texto a un formato estándar como ASCII (ej. H = 72).",
    "Los valores numéricos de ASCII se convierten finalmente a binario (bits).",
    "MIME es el encargado de transportar los bits de forma física por el cable.",
    "El resultado final del formateo se traduce en una secuencia de bits como 01001000 para la 'H'."
  ],
  "answer": [1,2,4],
  "explanation": "La capa de presentación toma el texto generado por la aplicación, lo convierte a un formato estándar como ASCII y posteriormente permite su representación en bits. MIME ayuda a definir la estructura y representación de los datos, pero no transporta físicamente la información."
},

{
  "question": "¿Qué protocolo o estándar mencionado en tus notas define cómo se estructuran y representan los datos (texto, imágenes, archivos, etc.)?",
  "options": [
    "ASCII",
    "MIME",
    "HTTP"
  ],
  "answer": 1,
  "explanation": "MIME (Multipurpose Internet Mail Extensions) define cómo se estructuran y representan diferentes tipos de datos como texto, imágenes, audio y archivos."
},

{
  "question": "¿Cuál es el propósito de la encriptación en la capa de presentación?",
  "options": [
    "Dividir los datos en paquetes más pequeños para su transporte.",
    "Proteger la información cifrándola con un algoritmo y una clave para volverla ilegible antes de enviarla.",
    "Asignar una dirección IP pública a los dispositivos locales.",
    "Aumentar el ancho de banda físico de la conexión de red."
  ],
  "answer": 1,
  "explanation": "La encriptación protege la información transformándola mediante algoritmos y claves criptográficas para que solo los dispositivos autorizados puedan interpretarla."
},

{
  "question": "Con base en tus notas sobre seguridad, selecciona las dos opciones correctas:",
  "options": [
    "Se usan protocolos como TLS/SSL para la encriptación.",
    "Cualquier dispositivo en la red puede descifrar los datos cifrados por TLS/SSL.",
    "Solo el receptor autorizado puede descifrar la información.",
    "SSL es un protocolo que se encarga de dar formato de texto plano sin cifrar."
  ],
  "answer": [0,2],
  "explanation": "TLS y SSL se utilizan para proteger la información mediante cifrado. Solo el receptor autorizado posee los mecanismos necesarios para descifrar correctamente los datos."
},

{
  "question": "¿Qué es SSL (Secure Sockets Layer) según tus apuntes?",
  "options": [
    "Un hardware de red que distribuye las señales eléctricas.",
    "Un protocolo de seguridad que cifra la comunicación entre dispositivos para proteger los datos transmitidos.",
    "Un sistema de archivos para almacenar texto y vídeo.",
    "Un algoritmo de enrutamiento dinámico para redes WAN."
  ],
  "answer": 1,
  "explanation": "SSL es un protocolo de seguridad diseñado para cifrar la comunicación entre dispositivos y proteger la información durante la transmisión."
},

{
  "question": "Selecciona las tres características que tienen en común tanto SSL como TLS:",
  "options": [
    "Cifran la comunicación.",
    "Protegen los datos.",
    "Definen el formato ASCII.",
    "Dan confidencialidad en la comunicación.",
    "Asignan puertos físicos a los switches."
  ],
  "answer": [0,1,3],
  "explanation": "SSL y TLS cifran la comunicación, protegen los datos y proporcionan confidencialidad, evitando que terceros puedan leer la información transmitida."
},

{
  "question": "¿De qué se encarga la compresión en la capa de presentación?",
  "options": [
    "Elimina información redundante para reducir el tamaño de los datos y transmitirlos más rápido.",
    "Aumenta la seguridad cifrando los archivos con una clave secreta.",
    "Divide los archivos en fragmentos físicos para el cableado."
  ],
  "answer": 0,
  "explanation": "La compresión elimina información redundante para disminuir el tamaño de los datos, optimizando el almacenamiento y la transmisión."
},

{
  "question": "Selecciona las cuatro funciones principales de las que se encarga la capa de presentación según la frase clave:",
  "options": [
    "Formato de los datos",
    "Traducción de los datos",
    "Compresión de los datos",
    "Enrutamiento de los datos",
    "Cifrado de los datos",
    "Direccionamiento físico"
  ],
  "answer": [0,1,2,4],
  "explanation": "Las funciones principales de la capa de presentación son dar formato a los datos, traducirlos, comprimirlos y cifrarlos. No realiza enrutamiento ni direccionamiento físico."
},

{
  "question": "¿Cuál es la función principal de la capa de sesión?",
  "options": [
    "Establecer, administrar y finalizar sesiones de comunicación entre dispositivos.",
    "Cifrar y comprimir archivos mediante estándares como SSL/TLS y MIME.",
    "Definar el voltaje y los cables físicos de la conexión."
  ],
  "answer": 0,
  "explanation": "La capa de sesión establece, mantiene y finaliza sesiones lógicas de comunicación entre dispositivos."
},

{
  "question": "Selecciona las tres funciones principales de la capa de sesión:",
  "options": [
    "Establecer sesión (inicia la comunicación)",
    "Comprimir los datos (elimina redundancia)",
    "Mantener sesión (controla la comunicación durante el intercambio)",
    "Cifrar la información (aplica algoritmos de seguridad)",
    "Finalizar sesión (cierra la conexión al terminar)"
  ],
  "answer": [0,2,4],
  "explanation": "Las tres funciones fundamentales de la capa de sesión son establecer, mantener y finalizar la comunicación lógica entre dispositivos."
},

{
  "question": "¿Cómo evita la capa de sesión que los datos de diferentes dispositivos se mezclen?",
  "options": [
    "Asigna una sesión propia a cada comunicación para mantenerlas separadas.",
    "Utiliza cables físicos distintos para cada computadora conectada.",
    "Cifra los datos con diferentes contraseñas para cada usuario.",
    "Apaga temporalmente las conexiones de las demás computadoras."
  ],
  "answer": 0,
  "explanation": "La capa de sesión mantiene comunicaciones independientes mediante sesiones separadas, evitando que los datos de diferentes usuarios se mezclen."
},

{
  "question": "¿Qué elementos permiten al servidor identificar correctamente qué datos pertenecen a cada usuario y asegurar que cada sesión sea independiente?",
  "options": [
    "Dirección IP diferente, puerto diferente y sesión diferente.",
    "El algoritmo de cifrado, la versión de TLS y el formato ASCII.",
    "El tipo de cable, la velocidad de transmisión y el tamaño del archivo ZIP."
  ],
  "answer": 0,
  "explanation": "Cada comunicación puede identificarse mediante elementos como dirección IP, puerto y sesión, permitiendo que múltiples usuarios se comuniquen simultáneamente sin interferirse."
},







{
  "question": "Selecciona los tres mecanismos que utiliza la capa de sesión para gestionar las conexiones según el texto:",
  "options": [
    "NetBIOS: Establece, mantiene y cierra sesiones entre dispositivos en una red.",
    "MIME: Define el formato y la estructura de los datos como imágenes y texto.",
    "RPC (Remote Procedure Call): Permite la comunicación entre procesos en diferentes equipos manteniendo la sesión activa.",
    "SSL/TLS: Cifra y protege la comunicación para dar confidencialidad.",
    "Sockets: Representan el punto de comunicación (IP + puerto) y mantienen la conexión entre cliente y servidor."
  ],
  "answer": [0,2,4],
  "explanation": "NetBIOS, RPC y Sockets son mecanismos relacionados con la gestión de sesiones y conexiones. MIME y SSL/TLS pertenecen a funciones de la capa de presentación."
},

{
  "question": "Selecciona las características que corresponden correctamente a la división entre capas superiores e inferiores:",
  "options": [
    "Las capas superiores trabajan con datos, aplicaciones y sesiones.",
    "Las capas superiores son: Transporte, red, enlace de datos y física.",
    "Las capas superiores son: Aplicación, presentación y sesión.",
    "Las capas inferiores trabajan con la transmisión de datos por la red.",
    "Las capas inferiores son: Transporte, red, enlace de datos y física."
  ],
  "answer": [0,2,3,4],
  "explanation": "Las capas superiores son Aplicación, Presentación y Sesión. Las capas inferiores incluyen Transporte, Red, Enlace de Datos y Física, encargándose de la transmisión de información."
},

{
  "question": "¿De qué se encarga principalmente la capa de transporte?",
  "options": [
    "Proporcionar comunicación de extremo a extremo (End-to-End) entre dispositivos.",
    "Definir el voltaje y las características eléctricas de los cables de red.",
    "Asignar las rutas y el direccionamiento lógico a través de internet."
  ],
  "answer": 0,
  "explanation": "La función principal de la capa de transporte es proporcionar comunicación End-to-End entre dispositivos y procesos."
},

{
  "question": "¿Cuál es la diferencia entre multiplexación y demultiplexación según sus funciones?",
  "options": [
    "La multiplexación comparte una misma conexión usando puertos; la demultiplexación identifica, separa y entrega cada comunicación a la aplicación correcta.",
    "La multiplexación separa los datos en el receptor; la demultiplexación une todas las conexiones en el emisor.",
    "La multiplexación cifra las aplicaciones; la demultiplexación comprime la información compartida.",
    "La multiplexación trabaja con direcciones IP; la demultiplexación trabaja únicamente con medios físicos."
  ],
  "answer": 0,
  "explanation": "La multiplexación permite compartir una conexión entre varias aplicaciones mediante puertos. La demultiplexación identifica y entrega cada flujo a la aplicación correcta en el destino."
},

{
  "question": "¿De qué manera la capa de transporte logra que los datos lleguen al programa correcto en el dispositivo destino?",
  "options": [
    "Utiliza números de puerto para identificar a qué aplicación o proceso pertenecen los datos.",
    "Utiliza la dirección MAC física para rastrear el proceso del servidor.",
    "Comprime los archivos en formatos como ZIP o JPEG antes de enviarlos.",
    "Establece una conexión de sesión única e independiente basada en la IP."
  ],
  "answer": 0,
  "explanation": "La capa de transporte utiliza números de puerto para identificar procesos y aplicaciones, permitiendo entregar los datos al programa correcto."
},

{
  "question": "Selecciona las dos afirmaciones correctas sobre la relación y funciones de las capas de transporte y sesión:",
  "options": [
    "La capa de sesión mantiene la comunicación, mientras que la capa de transporte se encarga de dirigir los datos al proceso correcto mediante los puertos.",
    "La capa de transporte se encarga de comprimir los datos en formatos como ZIP o JPEG.",
    "Web, Correo electrónico y Transferencia de archivos son ejemplos de procesos que se ejecutan al mismo tiempo y se identifican con puertos.",
    "La capa de sesión es la que asigna los números de puerto a las aplicaciones web."
  ],
  "answer": [0,2],
  "explanation": "La capa de sesión mantiene la comunicación y la capa de transporte utiliza puertos para identificar procesos simultáneos como Web, Correo y Transferencia de archivos."
},

{
  "question": "Con respecto al proceso de multiplexación en la capa de transporte, ¿cuáles son los pasos previos que dejan listos los flujos de datos antes de ser enviados?",
  "options": [
    "Segmentar los datos, asignar números de secuencia y asignar puertos.",
    "Cifrar con TLS, comprimir en formato ZIP y formatear en ASCII.",
    "Establecer la sesión lógica, validar la dirección IP y conectar el cable físico.",
    "Enrutar los paquetes, traducir los bits y limpiar la información redundante."
  ],
  "answer": 0,
  "explanation": "Antes de multiplexar, la capa de transporte segmenta los datos, asigna números de secuencia y puertos para identificar correctamente cada flujo."
},

{
  "question": "¿Qué significa que en la capa de transporte existan 'múltiples flujos independientes que se transmiten al mismo tiempo'?",
  "options": [
    "Que los datos ya existen como varios flujos, donde cada uno fue segmentado y cada segmento cuenta con su número de secuencia y puerto.",
    "Que todos los flujos se unieron en un solo archivo plano sin identificadores para transmitirse más rápido.",
    "Que las aplicaciones de origen se detienen hasta que un flujo termine de transmitirse por completo."
  ],
  "answer": 0,
  "explanation": "Significa que la capa de transporte organiza los datos en varios flujos independientes, cada uno correctamente segmentado, numerado y asociado a un puerto específico."
},









{
  "question": "Selecciona las tres condiciones que se cumplen para los flujos independientes en la capa de transporte antes de transmitirse:",
  "options": [
    "Ya existen varios flujos.",
    "Cada uno fue segmentado.",
    "Cada segmento tiene número de secuencia y puerto.",
    "Los datos ya fueron convertidos a señales eléctricas o bits físicos.",
    "Cada flujo eliminó sus puertos para ahorrar ancho de banda."
  ],
  "answer": [0,1,2],
  "explanation": "Para que existan múltiples flujos independientes en la capa de transporte, estos ya deben existir por separado, haber sido segmentados y cada segmento debe contar con su número de secuencia y puerto."
},

{
  "question": "Selecciona los tres factores que determinan dinámicamente cómo se decide qué flujo sigue en la capa de transporte:",
  "options": [
    "Los buffers",
    "Los procesos activos",
    "El sistema operativo",
    "La dirección MAC de destino",
    "El tipo de cifrado SSL/TLS"
  ],
  "answer": [0,1,2],
  "explanation": "El orden de salida de los flujos depende dinámicamente del estado de los buffers, los procesos activos y la administración realizada por el sistema operativo."
},

{
  "question": "¿De qué manera se envían los segmentos de diferentes aplicaciones (como FTP y Web) a través de la red según el concepto de intercalado real?",
  "options": [
    "Se transmiten de forma intercalada (por ejemplo: FTP seg1, Web seg1, FTP seg2...), compartiendo el medio sin un orden fijo obligatorio.",
    "Se envía por completo todo el archivo FTP antes de permitir que la aplicación Web pueda enviar su primer segmento.",
    "Se fusionan todos los segmentos en un único paquete masivo eliminando los números de secuencia.",
    "Se descartan los segmentos de la aplicación más lenta para dar prioridad absoluta a la más rápida."
  ],
  "answer": 0,
  "explanation": "El intercalado permite que diferentes aplicaciones compartan el medio de transmisión enviando segmentos de forma dinámica e intercalada."
},

{
  "question": "¿Qué información le agrega la capa de red al segmento recibido para transformarlo en un paquete IP?",
  "options": [
    "Un encabezado IP que contiene la IP origen, la IP destino y el protocolo (TCP/UDP).",
    "La dirección MAC de origen, la MAC de destino y el tipo de cable de red.",
    "Un número de puerto origen, un número de puerto destino y el número de secuencia.",
    "Un algoritmo de cifrado TLS y un formato de compresión JPEG."
  ],
  "answer": 0,
  "explanation": "La capa de red agrega un encabezado IP con la dirección IP origen, dirección IP destino y el protocolo utilizado (TCP o UDP), formando un paquete IP."
},

{
  "question": "¿Qué elementos le agrega la capa de enlace de datos al paquete IP para encapsularlo en una trama (frame)?",
  "options": [
    "La dirección MAC origen y la dirección MAC destino.",
    "La dirección IP origen, la dirección IP destino y el protocolo.",
    "El número de puerto origen y el número de puerto destino.",
    "La etiqueta de sesión independiente y el formato de compresión."
  ],
  "answer": 0,
  "explanation": "La capa de enlace de datos encapsula el paquete IP agregando las direcciones MAC origen y destino para crear una trama."
},

{
  "question": "¿En qué formato se transforman y transmiten los datos cuando llegan a la capa física del emisor?",
  "options": [
    "Se convierten en bits (0 y 1) y se envían como señales eléctricas o como ondas.",
    "Se mantienen como tramas con direcciones MAC para saltar entre routers.",
    "Se transforman en un paquete IP con etiquetas de puertos lógicos.",
    "Se comprimen en una sesión única y estructurada en formato de texto plano."
  ],
  "answer": 0,
  "explanation": "En la capa física toda la información se representa como bits (0 y 1) y se transmite mediante señales eléctricas o inalámbricas."
},

{
  "question": "Selecciona las dos afirmaciones correctas sobre el comportamiento de los datos en la capa física:",
  "options": [
    "En esta capa ya no se habla de 'paquetes' ni 'tramas'.",
    "Los datos se envían exclusivamente de forma cableada mediante impulsos lógicos.",
    "Dependiendo del medio, los bits se envían como señales eléctricas o en forma de ondas (WiFi).",
    "La capa física vuelve a encapsular los bits agregando un encabezado de puerto."
  ],
  "answer": [0,2],
  "explanation": "En la capa física ya no se trabaja con paquetes o tramas; únicamente se transmiten bits mediante señales eléctricas o inalámbricas dependiendo del medio."
},

{
  "question": "¿Qué proceso realiza la capa de transporte en el dispositivo destino al recibir los segmentos?",
  "options": [
    "La desmultiplexación, utilizando el puerto para separar los datos por proceso y el número de secuencia para reordenar y reconstruir la información.",
    "La encapsulación, agregando las direcciones MAC de origen y destino para crear una trama.",
    "El enrutamiento, buscando la mejor ruta lógica a través de la red usando la dirección IP.",
    "La modulación, convirtiendo los bits en señales eléctricas u ondas de radio."
  ],
  "answer": 0,
  "explanation": "La capa de transporte realiza la desmultiplexación usando puertos para identificar procesos y números de secuencia para reconstruir correctamente la información."
},

{
  "question": "Selecciona las tres acciones correctas que ejecuta la capa de transporte en el destino para entregar la información de forma correcta:",
  "options": [
    "Usa el número de puerto para separar los datos por proceso (ej. Puerto 21 para FTP, Puerto 80 para Web).",
    "Usa el número de secuencia para reordenar los segmentos en la secuencia correcta.",
    "Reconstruye los flujos independientes de cada aplicación de forma separada.",
    "Asigna una nueva dirección IP al paquete para poder guardarlo en el disco duro.",
    "Transforma los segmentos directamente en ondas de WiFi para las capas superiores."
  ],
  "answer": [0,1,2],
  "explanation": "La capa de transporte identifica procesos mediante puertos, reordena segmentos usando números de secuencia y reconstruye cada flujo de datos de forma independiente."
},

{
  "question": "¿Cuál es la diferencia fundamental entre los conceptos de multiplexación e intercalar en la capa de transporte?",
  "options": [
    "La multiplexación es permitir que múltiples procesos usen la misma red; intercalar es la forma o el orden físico en que se envían esos datos.",
    "La multiplexación ordena alfabéticamente las aplicaciones; intercalar mezcla las direcciones IP con las direcciones MAC.",
    "La multiplexación viaja de forma fija por el cable; intercalar define si los datos se convierten en señales eléctricas u ondas.",
    "Ambos términos significan exactamente lo mismo y se ejecutan al unísono únicamente en el dispositivo receptor."
  ],
  "answer": 0,
  "explanation": "La multiplexación permite compartir el medio entre varios procesos, mientras que el intercalado describe el orden práctico en que esos segmentos son enviados hacia la red."
},





{
  "question": "Selecciona las dos afirmaciones correctas sobre el manejo del orden de los datos dentro de la capa de transporte:",
  "options": [
    "El orden lógico es de suma importancia y se mantiene dentro de cada flujo individual mediante el número de secuencia.",
    "El orden de envío de los segmentos hacia la red no importa, ya que estos pueden ir intercalados de forma dinámica.",
    "El orden de envío debe ser estrictamente secuencial bloqueando las demás aplicaciones hasta terminar el primer flujo.",
    "Los números de secuencia se eliminan durante el intercalado para agilizar el envío a la capa de red."
  ],
  "answer": [0,1],
  "explanation": "Dentro de un mismo flujo el orden lógico es vital y se controla mediante los números de secuencia. Sin embargo, los segmentos de distintas aplicaciones pueden intercalarse sin afectar la reconstrucción final."
},

{
  "question": "Tomando en cuenta la idea final del flujo completo de datos, selecciona las cinco afirmaciones correctas sobre el ciclo de vida de la información desde el emisor hasta el receptor:",
  "options": [
    "Los datos del proceso se parten originalmente en segmentos (se dividen las 'pelotas').",
    "La preparación y el etiquetado de estos segmentos en el origen se conoce como multiplexación.",
    "Los segmentos se envían uno por uno y viajan mezclados en la red a través de un posible intercalado.",
    "Durante el viaje por la red, los segmentos se pueden desordenar antes de llegar al dispositivo de destino.",
    "En el destino, los datos se separan mediante el proceso de desmultiplexación y TCP los reconstruye para entregarlos al proceso correcto.",
    "La multiplexación garantiza que los datos viajen en un bloque único y masivo sin dividirse en ningún momento.",
    "El orden de envío en la red es estrictamente rígido e impide que los flujos de diferentes aplicaciones se mezclen."
  ],
  "answer": [0,1,2,3,4],
  "explanation": "El flujo completo incluye segmentación, multiplexación, posible intercalado, posible desorden durante el trayecto y finalmente desmultiplexación y reconstrucción."
},

{
  "question": "Con respecto a la 'Idea Final Clara' sobre el flujo de los datos a través de las capas del modelo de red, selecciona las cinco afirmaciones correctas:",
  "options": [
    "La capa de transporte es la encargada de segmentar y etiquetar los datos originalmente.",
    "La multiplexación es la función que permite que múltiples procesos compartan la misma red.",
    "El envío de los segmentos se realiza uno por uno a través del medio de comunicación.",
    "La capa de enlace prepara los datos físicamente, mientras que la capa física se encarga de transmitirlos.",
    "Al llegar al destino, se realiza la desmultiplexación y la reconstrucción de los flujos de datos.",
    "La capa física decide qué datos tienen prioridad revisando el número de secuencia lógica.",
    "La multiplexación bloquea la red para que viaje un solo proceso masivo de forma exclusiva."
  ],
  "answer": [0,1,2,3,4],
  "explanation": "El flujo correcto contempla segmentación, multiplexación, transmisión, preparación física y reconstrucción en el destino."
},

{
  "question": "Con respecto al comportamiento de la Capa de Aplicación dentro del flujo de comunicación, selecciona las tres afirmaciones correctas:",
  "options": [
    "Es la capa encargada de generar los datos de origen, como texto o video.",
    "En esta capa operan protocolos como HTTP y aplicaciones de usuario como la Web o Spotify.",
    "Los datos de las apps (páginas web, streaming, etc.) nacen en esta capa antes de ser procesados por las capas inferiores.",
    "Se encarga de transformar los datos en bits (0 y 1) para enviarlos directamente por el cable físico.",
    "Su función principal es agregar las direcciones MAC de origen y destino a los paquetes IP."
  ],
  "answer": [0,1,2],
  "explanation": "La capa de aplicación es donde se generan los datos y donde operan aplicaciones y protocolos orientados al usuario."
},

{
  "question": "Cuando la capa de transporte recibe el payload de la capa de aplicación y construye el encabezado (Header) TCP, ¿cuáles son los elementos que se incluyen en dicho encabezado?",
  "options": [
    "Puerto origen, puerto destino, número de secuencia, número de confirmación, flags y tamaño de ventana.",
    "Dirección IP origen, dirección IP destino, dirección MAC origen y dirección MAC destino.",
    "Formato del archivo (como JPEG o MP3), cifrado TLS y código de redundancia cíclica (CRC).",
    "Identificador del cable físico, modulación de frecuencia y velocidad de transmisión en bits."
  ],
  "answer": 0,
  "explanation": "El encabezado TCP incluye puertos, números de secuencia y confirmación, flags y tamaño de ventana."
},

{
  "question": "Selecciona las cinco opciones que forman parte de la estructura del header TCP construido en la capa de transporte:",
  "options": [
    "Puerto origen y Puerto destino",
    "Número de secuencia",
    "Número de confirmación",
    "Flags (banderas de control)",
    "Tamaño de ventana (Window size)",
    "Dirección IP de los routers intermediarios",
    "Dirección MAC de la tarjeta de red (NIC)"
  ],
  "answer": [0,1,2,3,4],
  "explanation": "Los campos TCP incluyen puertos, secuencia, confirmación, flags y ventana. Las IP y MAC pertenecen a otras capas."
},

{
  "question": "¿Qué elementos se utilizan para calcular el campo CHECKSUM en el encabezado TCP durante el Paso 3?",
  "options": [
    "El Header TCP completo, los datos (payload) y un pseudo-header con información de la IP.",
    "Exclusivamente las direcciones MAC física de origen y de destino.",
    "Únicamente los formatos de archivo y el tamaño total del disco duro.",
    "El número de puerto origen ignorando por completo los datos de la aplicación."
  ],
  "answer": 0,
  "explanation": "El checksum TCP utiliza el header TCP, los datos y el pseudo-header IP."
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
  "answer": [0,1,2],
  "explanation": "El checksum se calcula usando el header TCP, los datos y el pseudo-header IP."
},

{
  "question": "¿Cuál es el orden lógico y correcto que sigue la capa de transporte para finalizar la creación de un segmento TCP?",
  "options": [
    "Primero se arma el header, luego se calcula el checksum y finalmente se guarda ese checksum dentro del header TCP.",
    "Primero se calcula el checksum a ciegas, después se genera el header y al final se descartan los datos.",
    "Primero se envía el segmento a la red, luego se calcula el checksum y el destino arma el header.",
    "Se calcula el checksum utilizando únicamente las direcciones MAC."
  ],
  "answer": 0,
  "explanation": "Primero se construye el header, luego se calcula el checksum y finalmente se almacena en el propio header TCP."
},

{
  "question": "Selecciona las tres afirmaciones correctas sobre el orden de los pasos y la estructura final en la creación del segmento TCP:",
  "options": [
    "Primero se arma el header TCP y luego se calcula el checksum.",
    "El checksum resultante del cálculo se guarda dentro del mismo header TCP.",
    "La estructura final del Segmento TCP es igual a Header + Datos.",
    "El checksum se calcula y se guarda directamente en la capa física.",
    "Los datos de la aplicación se eliminan inmediatamente después de calcular el checksum."
  ],
  "answer": [0,1,2],
  "explanation": "El header debe existir antes del cálculo y el segmento final está formado por Header + Datos."
},

{
  "question": "¿Cómo está constituido estructuralmente un segmento en la capa de transporte?",
  "options": [
    "Segmento = Header (Encabezado TCP) + Datos (Payload de la aplicación).",
    "Segmento = Trama + Dirección MAC de destino.",
    "Segmento = Paquete IP + Señal eléctrica.",
    "Segmento = Datos limpios sin etiquetas ni puertos."
  ],
  "answer": 0,
  "explanation": "Un segmento está compuesto por el encabezado de transporte y los datos de la aplicación."
},

{
  "question": "¿Cuál es la característica principal del Pseudo-Header utilizado por TCP durante el cálculo del Checksum?",
  "options": [
    "Es una estructura temporal con información IP usada únicamente para el cálculo y no viaja por la red.",
    "Es un encabezado físico grabado en los cables.",
    "Es un paquete IP completo enviado antes de los datos.",
    "Es un código de cifrado de la capa de aplicación."
  ],
  "answer": 0,
  "explanation": "El pseudo-header es temporal, contiene información IP y se usa únicamente para calcular el checksum."
},

{
  "question": "Selecciona las tres afirmaciones correctas sobre el comportamiento y funcionamiento del PSEUDO-HEADER en TCP:",
  "options": [
    "Contiene información IP como IP origen, IP destino, protocolo y tamaño.",
    "No viaja por la red; solo se usa para calcular el checksum.",
    "TCP obtiene esta información localmente sin bajar físicamente a la capa de red.",
    "Se envía junto con el segmento TCP.",
    "Es generado por la capa física."
  ],
  "answer": [0,1,2],
  "explanation": "El pseudo-header es temporal, contiene información IP y nunca se transmite."
},

{
  "question": "¿Qué es el campo TTL (Time To Live) en el encabezado IP y cuál es su función principal?",
  "options": [
    "Es un número que indica la cantidad máxima de saltos que puede realizar un paquete antes de ser descartado.",
    "Es el tiempo exacto de descarga de un archivo.",
    "Es la velocidad del WiFi.",
    "Es un identificador para TCP o UDP."
  ],
  "answer": 0,
  "explanation": "TTL limita la cantidad de routers que un paquete puede atravesar para evitar loops."
},

{
  "question": "Selecciona las tres afirmaciones correctas sobre el campo TTL:",
  "options": [
    "Se asigna como un valor inicial (64, 128, etc.).",
    "Indica cuántos saltos puede atravesar el paquete.",
    "Ayuda a prevenir loops infinitos.",
    "Mide la temperatura del router.",
    "Es una etiqueta generada por la aplicación."
  ],
  "answer": [0,1,2],
  "explanation": "TTL es un contador de saltos utilizado para evitar bucles de enrutamiento."
},

{
  "question": "¿Qué sucede con el TTL cuando un paquete pasa por un router?",
  "options": [
    "Se reduce en 1 y si llega a 0 el paquete es descartado.",
    "Se duplica automáticamente.",
    "Permanece igual durante todo el recorrido.",
    "Se convierte en una dirección MAC."
  ],
  "answer": 0,
  "explanation": "Cada router reduce el TTL en una unidad; al llegar a cero el paquete se elimina."
},

{
  "question": "Tomando como referencia un paquete con TTL = 3, selecciona las tres afirmaciones correctas:",
  "options": [
    "Después del Router 1 el TTL vale 2.",
    "Después del Router 2 el TTL vale 1.",
    "Al Router 3 llega con TTL 1 y tras descontar 1 se elimina.",
    "El Router 3 aumenta el TTL para revivir el paquete.",
    "Puede dar infinitos saltos."
  ],
  "answer": [0,1,2],
  "explanation": "Con TTL=3, los routers lo reducen progresivamente hasta llegar a cero."
},

{
  "question": "Selecciona las tres afirmaciones correctas sobre la utilidad y comportamiento del TTL:",
  "options": [
    "Evita loops infinitos.",
    "Funciona como límite de intentos o saltos.",
    "Cuando llega a 0 el paquete es eliminado.",
    "Permite replicar paquetes infinitamente.",
    "Aumenta al pasar por switches."
  ],
  "answer": [0,1,2],
  "explanation": "TTL limita la vida del paquete y evita bucles."
},

{
  "question": "¿Qué indica el campo 'Protocolo' en el encabezado IP?",
  "options": [
    "Indica a qué protocolo de transporte (TCP, UDP, etc.) debe entregarse el paquete.",
    "Es la dirección IP del país de origen.",
    "Indica si el cable es fibra o cobre.",
    "Es el puerto de cifrado de la aplicación."
  ],
  "answer": 0,
  "explanation": "El campo Protocolo identifica el protocolo de la capa de transporte encapsulado."
},

{
  "question": "¿Qué es el campo 'Longitud Total' en el encabezado IP?",
  "options": [
    "Indica el tamaño completo del paquete IP, incluyendo encabezado IP y segmento transportado.",
    "Indica únicamente el tamaño de los datos de aplicación.",
    "Mide la longitud física del cable.",
    "Cuenta cuántos paquetes habrá en la sesión."
  ],
  "answer": 0,
  "explanation": "La Longitud Total representa el tamaño completo del paquete IP."
},

{
  "question": "Si un Header IP mide 20 bytes y el segmento TCP 100 bytes, ¿cuál será la Longitud Total?",
  "options": [
    "120 bytes.",
    "100 bytes.",
    "20 bytes.",
    "80 bytes."
  ],
  "answer": 0,
  "explanation": "20 + 100 = 120 bytes."
},

{
  "question": "En la práctica de redes, ¿cuáles son las funciones del TTL y qué dispositivos alteran su valor?",
  "options": [
    "Evita loops, limita la vida del paquete y solo los routers modifican su valor.",
    "Cuenta switches y estos son quienes modifican el TTL.",
    "Mide velocidad física del cable.",
    "Cifra el payload."
  ],
  "answer": 0,
  "explanation": "Solo los routers reducen el TTL; los switches de capa 2 no lo modifican."
},

{
  "question": "¿Cuál es el valor máximo del TTL en IPv4?",
  "options": [
    "255; es un campo de 8 bits y solo los routers lo modifican.",
    "1024.",
    "64.",
    "Infinito."
  ],
  "answer": 0,
  "explanation": "TTL es un campo de 8 bits, por lo que su valor máximo es 255."
},

{
  "question": "[PASO: PC CREA LOS DATOS Y ENCAPSULA] ¿Cómo se relacionan CRC y FCS?",
  "options": [
    "CRC es el cálculo matemático y FCS es el campo donde se guarda el resultado.",
    "FCS es el cálculo y CRC es un puerto.",
    "CRC usa solo direcciones IP.",
    "CRC y FCS son encabezados IP."
  ],
  "answer": 0,
  "explanation": "CRC es el algoritmo; FCS almacena el resultado del cálculo."
},

{
  "question": "[PASO: LLEGA AL PRIMER SWITCH] ¿Qué hace el switch con la trama Ethernet?",
  "options": [
    "Verifica el FCS, consulta la MAC destino y reenvía la misma trama.",
    "Cambia las MAC e IPs.",
    "Reduce el TTL.",
    "Extrae el segmento TCP."
  ],
  "answer": 0,
  "explanation": "El switch verifica FCS y reenvía la misma trama sin modificar IP ni MAC."
},

{
  "question": "[PASO: LLEGA AL ROUTER - RECEPCIÓN] ¿Qué hace el router después de validar el FCS?",
  "options": [
    "Rompe la trama Ethernet y se queda con el paquete IP.",
    "Reenvía la misma trama intacta.",
    "Aumenta el TTL.",
    "Modifica puertos TCP."
  ],
  "answer": 0,
  "explanation": "El router desencapsula la trama para procesar el paquete IP."
},

{
  "question": "[PASO: PROCESAMIENTO Y CREA NUEVA TRAMA] ¿Cómo reconstruye el router la información de capa 2?",
  "options": [
    "Crea una nueva trama con MAC origen de su interfaz y MAC destino del siguiente salto.",
    "Reutiliza la trama original.",
    "Elimina el encabezado IP.",
    "Envía el paquete sin trama."
  ],
  "answer": 0,
  "explanation": "Cada enlace requiere una nueva trama Ethernet con nuevas MAC."
},


{
  "question": "¿Qué campos se agregan específicamente en el Header y el Trailer de la capa de Enlace (Ethernet)?",
  "options": [
    "En el Header se agregan las direcciones MAC (origen/destino) y el tipo de protocolo; en el Trailer se agrega el FCS (secuencia de verificación de trama) para detectar errores.",
    "En el Header se colocan los puertos TCP y en el Trailer se introduce la dirección IP del router por defecto.",
    "En el Header se introduce el campo TTL y en el Trailer se configuran las URLs de los servidores web remotos.",
    "En el Header se añaden los bits de sincronización y en el Trailer se eliminan las direcciones lógicas."
  ],
  "answer": 0,
  "explanation": "Al encapsular la trama Ethernet, el Header incluye las direcciones MAC físicas (origen y destino) y el campo Type (tipo de protocolo de red). Por su parte, el Trailer añade el FCS (Frame Check Sequence), que utiliza un algoritmo de redundancia cíclica (CRC) para verificar que los datos no se hayan corrompido durante el viaje por el cable o medio físico."
},




{
  "question": "¿Cuál es la diferencia en el alcance operativo entre el campo FCS (CRC) y el Checksum de TCP?",
  "options": [
    "El FCS (CRC) valida la integridad salto a salto (en cada enlace físico entre dispositivos), mientras que el Checksum de TCP lo hace extremo a extremo (desde el host origen hasta el host destino final).",
    "El FCS (CRC) se verifica únicamente en el destino final, mientras que el Checksum de TCP es recalculado por cada switch y router del camino.",
    "El FCS (CRC) opera de extremo a extremo en la capa de aplicación, mientras que el Checksum de TCP solo funciona en los cables físicos salto a salto.",
    "Ambos campos operan exactamente igual, destruyéndose y recalculándose en cada switch de capa 2 que cruzan."
  ],
  "answer": 0,
  "explanation": "El FCS (CRC) pertenece a la capa de enlace (Capa 2), por lo que se calcula y verifica en cada tramo o salto del camino (PC-Switch, Switch-Router, Router-Router). En cambio, el Checksum de TCP pertenece a la capa de transporte (Capa 4), lo que significa que viaja intacto por la red y solo lo procesan y validan los dos hosts de los extremos (origen y destino final)."
},



{
  "question": "¿Cómo se distribuyen las responsabilidades de protección entre el campo FCS y el Checksum de TCP?",
  "options": [
    "El FCS protege cada tramo físico de forma local (enlace por enlace), mientras que el Checksum de TCP protege la integridad de toda la comunicación de extremo a extremo.",
    "El FCS se encarga de proteger toda la comunicación global y el Checksum de TCP solo protege el tramo físico entre la PC y el primer switch.",
    "Ambos campos se encargan exclusivamente de proteger los tramos físicos, dejando la comunicación global sin ningún tipo de control.",
    "El FCS protege la capa de aplicación y el Checksum de TCP se encarga de proteger los cables de cobre salto a salto."
  ],
  "answer": 0,
  "explanation": "El FCS es un mecanismo de Capa 2 que valida que los bits no se corrompan al cruzar un cable o enlace específico (tramo físico). Por el contrario, el Checksum de TCP es de Capa 4 y garantiza que los datos lleguen intactos desde el origen hasta el destino final, protegiendo toda la comunicación a nivel global."
},




{
  "question": "¿Cómo está compuesta una trama Ethernet de forma general?",
  "options": [
    "Direcciones MAC + Paquete IP + FCS.",
    "Direcciones MAC + Segmento TCP únicamente.",
    "Paquete IP + Datos de aplicación + Checksum.",
    "Header IP + Datos TCP sin seguridad."
  ],
  "answer": 0,
  "explanation": "Una trama Ethernet de Capa 2 contiene direcciones MAC de origen y destino, transporta un paquete IP como carga útil y finaliza con el campo FCS para la detección de errores."
},


{
  "question": "¿Qué proceso realiza repetidamente cada router al recibir una trama válida durante el reenvío de paquetes?",
  "options": [
    "Modifica los puertos TCP, aumenta el TTL en 1 y envía la trama sin cabeceras de Capa 2.",
    "Baja el TTL en 1, reenvía la misma trama intacta sin modificar las MAC e ignora el paquete IP.",
    "Verifica el FCS de entrada, elimina la trama, procesa el paquete IP, decrementa el TTL, crea una nueva trama con nuevas MAC y calcula un nuevo FCS.",
    "Cambia las IP de los hosts, elimina el campo TTL y reutiliza el FCS de entrada."
  ],
  "answer": 2,
  "explanation": "Cada router verifica el FCS de la trama recibida. Si es válida, elimina la trama de entrada, procesa el paquete IP, decrementa el TTL, determina la siguiente ruta, crea una nueva trama con las direcciones MAC correspondientes al siguiente enlace y calcula un nuevo FCS antes de transmitirla."
},




{
  "question": "¿Qué significa el concepto End-to-End (extremo a extremo) en la comunicación de redes?",
  "options": [
    "Al viaje de los datos en un solo sentido entre los procesos de los hosts finales; la petición es un flujo y la respuesta es otro flujo independiente.",
    "Al control de errores físico realizado por switches y routers en cada enlace de la red.",
    "A la velocidad máxima que puede alcanzar un enlace de fibra óptica entre dos routers.",
    "Al proceso de cambiar las direcciones MAC cada vez que un paquete atraviesa un router."
  ],
  "answer": 0,
  "explanation": "End-to-End describe la comunicación lógica entre los procesos de los hosts finales utilizando la capa de transporte. Una petición genera un flujo desde el origen hasta el destino y la respuesta genera un flujo independiente en sentido contrario. El concepto no se enfoca en los saltos físicos intermedios, sino en la comunicación completa entre ambos extremos."
},


{
  "question": "¿Qué secuencia de recuperación sigue TCP cuando se pierde el segmento Seq=3?",
  "options": [
    "Activa Backoff duplicando las esperas antes del primer envío, limpia el buffer y cambia a UDP.",
    "Fast Retransmit (3 ACKs duplicados), Timeout (si expira el RTO), Backoff (1s, 2s, 4s...) y cierre de la conexión si los intentos fallan.",
    "Borra el buffer del emisor, ignora los ACKs duplicados y espera directamente un ACK=5.",
    "Envía un ACK acumulativo para que el receptor ignore el segmento perdido y continúe la comunicación."
  ],
  "answer": 1,
  "explanation": "TCP almacena los datos en el buffer y activa el temporizador RTO. Si recibe tres ACKs duplicados ejecuta Fast Retransmit. Si el tiempo expira ocurre un Timeout. Los reintentos posteriores utilizan Backoff, aumentando progresivamente el tiempo de espera (1s, 2s, 4s...). Si finalmente no se logra la recuperación, la conexión puede cerrarse."
},


{
  "question": "Un usuario deja abierta su app de banca móvil sin realizar ninguna operación. ¿Cómo interactúan la Capa de Sesión (Capa 5) y TCP (Capa 4) durante este periodo de inactividad (IDLE)?",
  "options": [
    "La Capa 5 controla el tiempo de inactividad de la aplicación por motivos de seguridad, mientras TCP envía paquetes Keepalive para verificar que el servidor siga disponible y mantener activa la conexión.",
    "La Capa 5 apaga los switches de la red física y TCP elimina los números de secuencia para reactivar automáticamente la aplicación.",
    "TCP cierra la aplicación bancaria inmediatamente después de 5 minutos sin consultar a la Capa 5 ni enviar paquetes de mantenimiento.",
    "Ambas capas se desactivan por completo y delegan el control de la inactividad al FCS y a las direcciones MAC."
  ],
  "answer": 0,
  "explanation": "La Capa de Sesión (Capa 5) administra la lógica de la aplicación y sus reglas de seguridad, como el cierre por inactividad. Mientras tanto, TCP (Capa 4) puede utilizar paquetes Keepalive para verificar que el otro extremo siga disponible y mantener activa la conexión. Si el canal deja de responder, la aplicación puede cerrar la sesión o mostrar un error."
},


{
  "question": "¿Cuál es la responsabilidad principal de la Capa de Red (Capa 3) dentro del modelo OSI?",
  "options": [
    "Control de errores mediante FCS y administración de direcciones MAC.",
    "Direccionamiento lógico mediante IP, enrutamiento y selección de rutas entre redes.",
    "Multiplexación de puertos y control de flujo extremo a extremo.",
    "Sincronización de bits y transmisión de señales por el medio físico."
  ],
  "answer": 1,
  "explanation": "La Capa de Red (Capa 3) proporciona direccionamiento lógico mediante direcciones IP, determina la mejor ruta hacia el destino y permite la comunicación entre redes diferentes mediante el enrutamiento."
},

{
  "question": "¿Cuál es la función principal de los protocolos IP, ICMP e IPsec dentro de la Capa de Red (Capa 3)?",
  "options": [
    "ICMP cifra los datos e IPsec se encarga de las pruebas de conectividad mediante ping.",
    "IP proporciona direccionamiento y encaminamiento de paquetes, ICMP realiza funciones de diagnóstico y control, e IPsec aporta seguridad mediante cifrado y autenticación.",
    "IPsec administra los puertos TCP e IP modifica las direcciones MAC físicas de los dispositivos.",
    "ICMP divide los datos en segmentos y asigna puertos a las aplicaciones."
  ],
  "answer": 1,
  "explanation": "En la Capa de Red, IP proporciona direccionamiento lógico y encaminamiento de paquetes. ICMP se utiliza para diagnóstico, control y mensajes de error, como los empleados por ping. IPsec agrega seguridad mediante cifrado, autenticación e integridad de los datos."
},


{
  "question": "¿Cuáles son las principales funciones de la Capa de Enlace de Datos (Capa 2)?",
  "options": [
    "Cifrar datos mediante IPsec y seleccionar rutas lógicas entre redes remotas.",
    "Utilizar direccionamiento físico (MAC), detectar errores en las tramas, controlar el acceso al medio y emplear protocolos como Ethernet, PPP y CDP.",
    "Administrar los puertos de las aplicaciones y controlar temporizadores como el RTO.",
    "Transmitir bits como señales eléctricas sin control de acceso ni direccionamiento."
  ],
  "answer": 1,
  "explanation": "La Capa de Enlace de Datos utiliza direcciones MAC para identificar dispositivos vecinos, detecta errores mediante mecanismos como FCS, controla el acceso al medio mediante CSMA/CD o CSMA/CA y emplea protocolos como Ethernet, PPP y CDP para la comunicación local."
},

{
  "question": "¿Qué métodos de acceso al medio y protocolos corresponden a la Capa 2?",
  "options": [
    "Cifrado con IPsec y enrutamiento lógico entre redes.",
    "Uso de puertos TCP/UDP y diagnóstico mediante ping.",
    "CSMA/CD (Ethernet cableado), CSMA/CA (WiFi) y protocolos como Ethernet, PPP, Frame Relay y CDP.",
    "Transmisión de bits eléctricos sin control de acceso ni detección de errores."
  ],
  "answer": 2,
  "explanation": "La Capa 2 gestiona el acceso al medio físico usando CSMA/CD en redes Ethernet cableadas y CSMA/CA en redes WiFi. Entre sus protocolos más conocidos se encuentran Ethernet, PPP, Frame Relay y CDP, utilizados para la comunicación entre dispositivos vecinos."
},

{
  "question": "¿Cuál es el mapeo correcto entre el modelo TCP/IP original y el modelo OSI?",
  "options": [
    "Aplicación → Aplicación, Presentación y Sesión. Transporte → Transporte. Internet → Red. Acceso a red → Enlace de Datos y Física.",
    "Aplicación → Física. Transporte → Red. Internet → Sesión. Acceso a red → Presentación.",
    "TCP/IP combina Transporte e Internet en una sola capa física.",
    "TCP/IP y OSI poseen exactamente las mismas siete capas."
  ],
  "answer": 0,
  "explanation": "El modelo TCP/IP original resume las siete capas de OSI en cuatro: Aplicación (OSI 5, 6 y 7), Transporte (OSI 4), Internet (OSI 3) y Acceso a Red (OSI 1 y 2)."
},


{
  "question": "¿Cuál es el principio fundamental de funcionamiento de TCP ante la pérdida de datos?",
  "options": [
    "Enviar datos, esperar una confirmación (ACK) y retransmitirlos si el tiempo de espera expira sin recibir respuesta.",
    "Modificar las direcciones MAC de origen y destino en cada router para evitar la congestión.",
    "Eliminar los números de secuencia y reiniciar la interfaz física cuando ocurre una pérdida.",
    "Cerrar permanentemente la sesión de la aplicación sin informar a las capas superiores."
  ],
  "answer": 0,
  "explanation": "TCP proporciona confiabilidad mediante un mecanismo de confirmación y retransmisión. Después de enviar un segmento, espera recibir un ACK dentro de un tiempo determinado (RTO). Si no llega la confirmación, asume que hubo pérdida y retransmite los datos."
},


{
  "question": "¿De qué depende la duración del temporizador de retransmisión (RTO) en TCP?",
  "options": [
    "De un valor fijo universal configurado de fábrica en todos los routers de Internet.",
    "Del cálculo dinámico del RTT (tiempo de ida y vuelta), adaptándose a la latencia y condiciones de la red.",
    "De la cantidad de direcciones MAC registradas en la tabla ARP del switch local.",
    "De la velocidad con la que la Capa de Sesión cierra las aplicaciones en estado IDLE."
  ],
  "answer": 1,
  "explanation": "El temporizador de retransmisión (RTO) de TCP no es fijo. Se calcula dinámicamente a partir del RTT (Round Trip Time), es decir, el tiempo que tarda un segmento en llegar al destino y recibir su ACK correspondiente. Cuando la red presenta mayor latencia o congestión, TCP aumenta el valor del temporizador para evitar retransmisiones innecesarias."
},

{
  "question": "¿De qué depende la duración del temporizador de retransmisión (RTO) en TCP?",
  "options": [
    "De un valor fijo universal configurado de fábrica en todos los routers de Internet.",
    "Del cálculo dinámico del RTT (tiempo de ida y vuelta), adaptándose a la latencia y condiciones de la red.",
    "De la cantidad de direcciones MAC registradas en la tabla ARP del switch local.",
    "De la velocidad con la que la Capa de Sesión cierra las aplicaciones en estado IDLE."
  ],
  "answer": 1,
  "explanation": "El temporizador de retransmisión (RTO) de TCP no es fijo. Se calcula dinámicamente a partir del RTT (Round Trip Time), es decir, el tiempo que tarda un segmento en llegar al destino y recibir su ACK correspondiente. Cuando la red presenta mayor latencia o congestión, TCP aumenta el valor del temporizador para evitar retransmisiones innecesarias."
},


{
  "question": "¿Cuál es la PDU (Protocol Data Unit) utilizada por la Capa de Red?",
  "options": [
    "Trama",
    "Paquete",
    "Segmento",
    "Bits"
  ],
  "answer": 1,
  "explanation": "La Capa de Red (Capa 3) utiliza paquetes como su Unidad de Datos de Protocolo (PDU)."
},

{
  "question": "¿Cuál es el orden correcto de las PDU desde la Capa de Aplicación hasta la Capa Física?",
  "options": [
    "Datos → Segmento → Paquete → Trama → Bits",
    "Datos → Paquete → Segmento → Trama → Bits",
    "Segmento → Datos → Paquete → Trama → Bits",
    "Datos → Trama → Paquete → Segmento → Bits"
  ],
  "answer": 0,
  "explanation": "Durante la encapsulación los Datos pasan a Segmento, luego a Paquete, después a Trama y finalmente se transmiten como Bits."
},

{
  "question": "Selecciona las cuatro asociaciones correctas entre capa y PDU:",
  "options": [
    "Transporte → Segmento",
    "Red → Paquete",
    "Enlace de Datos → Trama",
    "Física → Bits",
    "Red → Trama",
    "Enlace de Datos → Paquete"
  ],
  "answer": [0,1,2,3],
  "explanation": "Las PDU correctas son: Transporte → Segmento, Red → Paquete, Enlace de Datos → Trama y Física → Bits."
},

{
  "question": "¿Cuál es la PDU (Protocol Data Unit) correcta para cada capa del modelo OSI?",
  "options": [
    "Capas 5-7 = Datos; Capa 4 = Segmento/Datagrama; Capa 3 = Paquete; Capa 2 = Trama; Capa 1 = Bits.",
    "Capa 7 = Bits; Capa 4 = Paquete; Capa 3 = Trama; Capa 2 = Segmento; Capa 1 = Datos.",
    "Todas las capas utilizan la misma PDU llamada Paquete.",
    "Capas 5-7 = Datos; Capa 4 = Paquete; Capa 3 = Segmento; Capa 2 = Trama; Capa 1 = Bits."
  ],
  "answer": 0,
  "explanation": "Las capas de Aplicación, Presentación y Sesión utilizan Datos. La capa de Transporte utiliza Segmentos (TCP) o Datagramas (UDP). La capa de Red utiliza Paquetes. La capa de Enlace de Datos utiliza Tramas. La capa Física transmite Bits."
},

{
  "question": "¿Cuál de los siguientes campos NO pertenece al encabezado TCP?",
  "options": [
    "Número de secuencia",
    "Checksum",
    "TTL",
    "Puerto destino"
  ],
  "answer": 2,
  "explanation": "TTL pertenece al encabezado IP (Capa 3), no al encabezado TCP. TCP utiliza puertos, números de secuencia, ACK, flags, ventana y checksum."
},


{
  "question": "¿Qué campos clave incluye el encabezado TCP al encapsular los datos?",
  "options": [
    "Direcciones IP (origen/destino) y el campo TTL.",
    "Puertos, números de secuencia, ACK, flags, ventana y checksum.",
    "Direcciones MAC, preámbulo y campo FCS.",
    "URLs de la aplicación, cookies y comandos de cifrado."
  ],
  "answer": 1,
  "explanation": "Al encapsular los datos, TCP construye su cabecera con puertos, números de secuencia, ACK, flags, ventana y checksum para controlar la transmisión."
},


{
  "question": "¿Cuál es un ejemplo de comunicación Peer-to-Peer entre capas equivalentes?",
  "options": [
    "TCP del host origen intercambiando información lógica con TCP del host destino.",
    "La Capa de Red solicitando servicios a la Capa de Enlace mediante una interfaz SAP.",
    "Un switch verificando el FCS de una trama Ethernet.",
    "La Capa Física convirtiendo bits en señales eléctricas."
  ],
  "answer": 0,
  "explanation": "La comunicación Peer-to-Peer es una relación lógica entre capas equivalentes de dispositivos diferentes, como TCP con TCP o IP con IP."
},


{
  "question": "¿Qué significa la interacción entre capas del mismo nivel?",
  "options": [
    "Que una capa de un dispositivo se comunica lógicamente con la misma capa del otro dispositivo (ej. TCP con TCP), aunque físicamente los datos bajen, viajen por el medio y suban.",
    "Que las capas del mismo equipo intercambian interfaces SAP para saltarse el encabezado IP.",
    "Que la capa Física de un router configura de forma remota las aplicaciones del receptor.",
    "Que todos los datos viajan horizontalmente por el cable sin necesidad de convertirse en bits."
  ],
  "answer": 0,
  "explanation": "Es una comunicación lógica horizontal: cada capa cree que habla directamente con su equivalente (TCP con TCP, IP con IP). Sin embargo, la transmisión física obliga a que los datos bajen por el emisor, crucen el medio y suban por el receptor."
},


{
  "question": "¿Qué información agrega la capa de Enlace de Datos al construir una trama Ethernet?",
  "options": [
    "Direcciones MAC y tipo de protocolo en el Header; FCS en el Trailer.",
    "Puertos TCP en el Header y dirección IP del gateway en el Trailer.",
    "Campo TTL en el Header y URLs de servidores en el Trailer.",
    "Bits de sincronización en el Header y eliminación de direcciones IP en el Trailer."
  ],
  "answer": 0,
  "explanation": "La trama Ethernet agrega en el Header las direcciones MAC de origen y destino, además del campo Type. En el Trailer incorpora el FCS (Frame Check Sequence), utilizado para detectar errores mediante CRC."
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
explanation:"TCP permite recibir segmentos fuera de orden. Cuando falta Seq=3, el receptor almacena Seq=4 temporalmente en el buffer hasta completar la secuencia."
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
explanation:"TCP garantiza entrega ordenada. Los segmentos fuera de orden permanecen en buffer hasta que llegan los faltantes."
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
explanation:"El buffer del receptor almacena temporalmente segmentos recibidos, incluso fuera de orden, hasta reconstruir correctamente el flujo de datos."
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
explanation:"El buffer del emisor conserva segmentos pendientes de confirmación para retransmitirlos si ocurre una pérdida."
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
explanation:"TCP utiliza ACK acumulativos indicando el siguiente número de secuencia esperado."
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
explanation:"ACK=3 significa que TCP recibió correctamente hasta Seq=2 y espera recibir Seq=3."
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
explanation:"Los ACK duplicados indican normalmente la pérdida de un segmento específico."
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
explanation:"Fast Retransmit permite retransmitir rápidamente un segmento perdido sin esperar al timeout."
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
explanation:"TCP interpreta tres ACK duplicados como una fuerte señal de pérdida y ejecuta Fast Retransmit."
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
explanation:"Si no se produce recuperación rápida, TCP depende del temporizador RTO para retransmitir."
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
explanation:"RTO es el temporizador utilizado por TCP para detectar posibles pérdidas cuando no llegan ACK."
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
explanation:"TCP mantiene normalmente el temporizador principal asociado al segmento pendiente de confirmación más antiguo."
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
explanation:"Backoff aumenta progresivamente el tiempo de espera entre retransmisiones para reducir congestión."
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
explanation:"Backoff evita saturar la red aumentando gradualmente el tiempo de espera entre retransmisiones."
},


{
  "question": "[PASO: NUEVO CRC Y FCS - ENVÍO] ¿Qué debe hacer el router antes de enviar la nueva trama?",
  "options": [
    "Calcular un nuevo CRC y guardar el resultado en un nuevo FCS.",
    "Copiar el FCS original.",
    "Eliminar el FCS.",
    "Guardar el checksum TCP en el FCS."
  ],
  "answer": 0,
  "explanation": "Al cambiar la trama, el router debe recalcular CRC y generar un nuevo FCS."
}

],


tema16:[

{
  "question": "¿Qué segmentos se intercambian durante el establecimiento de una conexión TCP mediante el 3-Way Handshake?",
  "options": [
    "SYN, SYN-ACK y ACK.",
    "PING y PONG.",
    "GET y POST.",
    "FIN y RST."
  ],
  "answer": 0,
  "explanation": "TCP establece una conexión mediante un proceso llamado 3-Way Handshake. El cliente envía un SYN para iniciar la conexión, el servidor responde con SYN-ACK para aceptar y sincronizar la comunicación, y finalmente el cliente envía un ACK confirmando la recepción. Después de este intercambio, la conexión queda establecida."
},



{
  "question": "¿Por qué el segmento SYN se envía sin datos de aplicación (payload)?",
  "options": [
    "Porque la conexión aún no se ha establecido y primero deben sincronizarse los números de secuencia y confirmar la disponibilidad.",
    "Porque la capa de enlace prohíbe transportar datos si el tamaño del encabezado IP es menor a 20 bytes.",
    "Porque el protocolo TCP solo permite enviar datos dentro de segmentos que tengan la bandera FIN activa.",
    "Porque los datos de aplicación se eliminan automáticamente por seguridad para evitar virus en el cable."
  ],
  "answer": 0,
  "explanation": "El segmento SYN es puramente de control. Su único objetivo es iniciar el saludo de 3 vías y acordar los parámetros de la sesión; hasta que ambos extremos confirmen la conexión con el ACK final, no se puede transportar carga útil (payload)."
},



{
  "question": "¿Por qué el segmento SYN se envía sin datos de aplicación (payload)?",
  "options": [
    "Porque la capa de enlace prohíbe transportar datos si el encabezado IP es menor a 20 bytes.",
    "Porque la conexión aún no se ha establecido y primero deben sincronizarse los números de secuencia y confirmar la disponibilidad.",
    "Porque los datos de aplicación se eliminan automáticamente para evitar virus en la red.",
    "Porque TCP solo permite enviar datos dentro de segmentos que tengan activa la bandera FIN."
  ],
  "answer": 1,
  "explanation": "El segmento SYN es un segmento de control utilizado para iniciar el 3-Way Handshake. Su objetivo es sincronizar los números de secuencia y verificar la disponibilidad del otro extremo antes de comenzar el intercambio normal de datos."
}






],



};