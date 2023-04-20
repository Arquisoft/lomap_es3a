import i18n from 'i18next';
import {initReactI18next} from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    // Nav
                    home: "Home",
                    map: "Map",
                    help: "Help",
                    about: "About",
                    language: "Language",
                    // Languages
                    english: "English",
                    spanish: "Español",
                    french: "Français",
                    german: "Deutsch",
                    chinese: "中文",
                    asturian: "Asturianu",
                    login: "Log in",
                    logout: "Log out",
                    register: "Haven't signed yet? Register now!",

                    // Notification
                    notificationWelcome: "Welcome to GOMap!®",
                    notificationMessageHome: "Thanks for using our website!",
                    notificationTime: "Just now!",

                    notificationMarkerAdded: "New Marker!",
                    notificationMessageMarker: "Your marker has been added correctly!",

                    // Home
                    footer: "© Arquisoft - UNIOVI",
                    homeInfo1: "GOMap!® is an application where users can have custom maps about places and local business in their city like shops, bars, restaurants, monuments, cinemas...",
                    homeInfo2: "Also the application allows users to interact with their friends by viewing the places they have saved.",
                    docsButton: "See our documentation 🔗",
                    techStack: "Used technologies:",

                    // Map
                    // Options menu
                    optionsMenu: "Map options",
                    search: "Search",
                    searchPlaceholder: "Type to search...",
                    category: "Category",
                    // Categories
                    all: "All",
                    bar: "bar",
                    restaurant: "Restaurants",
                    shop: "Shops",
                    supermarket: "Supermarkets",
                    hotel: "Hotels",
                    cinema: "Cinemas",
                    academicInstitution: "Academic Institutions",
                    publicInstitution: "Public Institutions",
                    sportsClub: "Sports Clubs",
                    museum: "Museums",
                    park: "Parks",
                    landscape:"Landscapes",
                    monument:"Monuments",
                    hospital:"Hospitals",
                    policeStation:"Police Stations",
                    transportCenter:"Transport Centers",
                    entertainment: "Entertainment",
                    others: "Others",
                    mark: "Mark",
                    friends: "Your friends",

                    // Add marker
                    addMarker: "Add marker",
                    placesName: "Place's name",
                    placesNamePlaceholder: "Type to set name...",
                    latitude: "Latitude",
                    longitude: "Longitude",
                    // Category already defined
                    // Mark already defined
                    comment: "Comment",
                    commentPlaceholder: "Type to add a comment...",
                    confirm: "Confirm",

                    // Show marker
                    media: "Media",
                    reviews: "Reviews",
                    addReview: "Add your review...",
                    add: "Add",

                    // Help:
                    office: "Our office",
                    contactUs: "Contact us",
                    name: "Your name:",
                    namePlaceholder: "Write your name...",
                    email: "Your email:",
                    emailPlaceholder: "Write your email...",
                    message: "Your message:",
                    messagePlaceholder: "Write your message...",
                    send: "Send",
                    panelOffice: "Our main office",
                    panelPhone: "Our phone",
                    panelFax: "Our fax",
                    panelEmail: "Our email",

                    // Login:
                    provider: "Select POD provider:"
                }
            },
            es: {
                translation: {
                    // Nav
                    home: "Inicio",
                    map: "Mapa",
                    help: "Ayuda",
                    about: "Acerca de",
                    language: "Idioma",
                    // Languages
                    english: "English",
                    spanish: "Español",
                    french: "Français",
                    german: "Deutsch",
                    chinese: "中文",
                    asturian: "Asturianu",
                    login: "Iniciar sesión",
                    logout: "Cerrar sesión",
                    register: "¿Aún no te has registrado? ¡Regístrate ahora!",

                    // Notification
                    notificationWelcome: "Bienvenido a GOMap!®",
                    notificationMessageHome: "¡Gracias por usar nuestra web!",
                    notificationTime: "¡Justo ahora!",

                    notificationMarkerAdded: "¡Nuevo marcador!",
                    notificationMessageMarker: "¡Su marcador se ha agregado correctamente!",

                    // Home
                    footer: "© Arquisoft - UNIOVI",
                    homeInfo1: "GOMap!® es una aplicación donde los usuarios pueden tener mapas personalizados sobre lugares y negocios locales en su ciudad como tiendas, bares, restaurantes, monumentos, cines...",
                    homeInfo2: "Además, la aplicación permite a los usuarios interactuar con sus amigos viendo los lugares que han guardado.",
                    docsButton: "Ver nuestra documentación 🔗",
                    techStack: "Tecnologías utilizadas:",

                    // Map
                    // Options menu
                    optionsMenu: "Opciones del mapa",
                    search: "Buscar",
                    searchPlaceholder: "Escribe para buscar...",
                    category: "Categoría",
                    // Categories
                    all: "Todas",
                    bar: "Bares",
                    restaurant: "Restaurantes",
                    shop: "Tiendas",
                    supermarket: "Supermercados",
                    hotel: "Hoteles",
                    cinema: "Cines",
                    academicInstitution: "Instituciones académicas",
                    publicInstitution: "Instituciones públicas",
                    sportsClub: "Clubes deportivos",
                    museum: "Museos",
                    park: "Parques",
                    landscape:"Paisajes",
                    monument:"Monumetos",
                    hospital:"Hospitales",
                    policeStation:"Comisarias",
                    transportCenter:"Transporte",
                    entertainment: "Entretenimiento",
                    others: "Otros",
                    mark: "Nota",
                    friends: "Tus amigos",

                    // Add marker
                    addMarker: "Agregar marca",
                    placesName: "Nombre del lugar",
                    placesNamePlaceholder: "Escribe para establecer el nombre...",
                    latitude: "Latitud",
                    longitude: "Longitud",
                    // Category already defined
                    // Mark already defined
                    comment: "Comentario",
                    commentPlaceholder: "Escribe para agregar un comentario...",
                    confirm: "Confirmar",

                    // Show marker
                    media: "Media",
                    reviews: "Opiniones",
                    addReview: "Agrega tu opinión...",
                    add: "Añadir",

                    // Help:
                    office: "Nuestra oficina",
                    contactUs: "Contáctenos",
                    name: "Tu nombre:",
                    namePlaceholder: "Escribe tu nombre...",
                    email: "Tu correo electrónico:",
                    emailPlaceholder: "Escribe tu correo electrónico...",
                    message: "Tu mensaje:",
                    messagePlaceholder: "Escribe tu mensaje...",
                    send: "Enviar",
                    panelOffice: "Nuestra oficina principal",
                    panelPhone: "Nuestro teléfono",
                    panelFax: "Nuestro fax",
                    panelEmail: "Nuestro correo electrónico",

                    // Login:
                    provider: "Seleccione el proveedor de PODs:"
                }
            },
            fr: {
                translation: {
                    // Nav
                    home: "Accueil",
                    map: "Carte",
                    help: "Aide",
                    about: "À propos",
                    language: "Langue",
                    // Languages
                    english: "English",
                    spanish: "Español",
                    french: "Français",
                    german: "Deutsch",
                    chinese: "中文",
                    asturian: "Asturianu",
                    login: "Se connecter",
                    logout: "Se déconnecter",
                    register: "Pas encore inscrit ? Inscrivez-vous maintenant!",

                    // Notification
                    notificationWelcome: "Bienvenue sur GOMap!®",
                    notificationMessageHome: "Merci d'utiliser notre site Web!",
                    notificationTime: "À l'instant!",

                    notificationMarkerAdded: "Nouveau marqueur!",
                    notificationMessageMarker: "Votre marqueur a été ajouté correctement!",

                    // Home
                    footer: "© Arquisoft - UNIOVI",
                    homeInfo1: "GOMap!® est une application où les utilisateurs peuvent avoir des cartes personnalisées sur les lieux et les commerces locaux de leur ville, tels que des magasins, des bars, des restaurants, des monuments, des cinémas...",
                    homeInfo2: "De plus, l'application permet aux utilisateurs d'interagir avec leurs amis en visualisant les endroits qu'ils ont enregistrés.",
                    docsButton: "Voir notre documentation 🔗",
                    techStack: "Technologies utilisées :",

                    // Map
                    // Options menu
                    optionsMenu: "Options de carte",
                    search: "Rechercher",
                    searchPlaceholder: "Tapez pour rechercher...",
                    category: "Catégorie",
                    // Categories
                    all: "Toutes",
                    bar: "Bars",
                    restaurant: "Restaurants",
                    shop: "Magasins",
                    supermarket: "Supermarchés",
                    hotel: "Hôtels",
                    cinema: "Cinémas",
                    academicInstitution: "Institutions académiques",
                    publicInstitution: "Institutions publiques",
                    sportsClub: "Clubs de sport",
                    museum: "Musées",
                    park: "Parcs",
                    landscape:"Paysages",
                    monument:"Monuments",
                    hospital:"Hôpitaux",
                    policeStation:"Postes de police",
                    transportCenter:"Centres de transport",
                    entertainment: "Divertissements",
                    others: "Autres",
                    mark: "Note",
                    friends: "Vos amis",

                    // Add marker
                    addMarker: "Ajouter une marque",
                    placesName: "Nom de l'endroit",
                    placesNamePlaceholder: "Tapez pour définir le nom...",
                    latitude: "Latitude",
                    longitude: "Longitude",
                    // Category already defined
                    // Mark already defined
                    comment: "Commentaire",
                    commentPlaceholder: "Tapez pour ajouter un commentaire...",
                    confirm: "Confirmer",

                    // Show marker
                    media: "Médias",
                    reviews: "Avis",
                    addReview: "Ajoutez votre avis...",
                    add: "Ajouter",

                    // Help:
                    office: "Notre bureau",
                    contactUs: "Contactez-nous",
                    name: "Votre nom :",
                    namePlaceholder: "Écrivez votre nom...",
                    email: "Votre adresse email :",
                    emailPlaceholder: "Écrivez votre adresse email...",
                    message: "Votre message :",
                    messagePlaceholder: "Écrivez votre message...",
                    send: "Envoyer",
                    panelOffice: "Notre bureau principal",
                    panelPhone: "Notre téléphone",
                    panelFax: "Notre fax",
                    panelEmail: "Notre email",

                    // Login:
                    provider: "Sélectionner le fournisseur de PODs"
                }
            },
            deu: {
                translation: {
                    // Nav
                    home: "Startseite",
                    map: "Karte",
                    help: "Hilfe",
                    about: "Über uns",
                    language: "Sprache",
                    // Languages
                    english: "English",
                    spanish: "Español",
                    french: "Français",
                    german: "Deutsch",
                    chinese: "中文",
                    asturian: "Asturianu",
                    login: "Einloggen",
                    logout: "Ausloggen",
                    register: "Noch nicht angemeldet? Jetzt registrieren!",
                    // Notification
                    notificationWelcome: "Willkommen bei GOMap!®",
                    notificationMessageHome: "Vielen Dank, dass Sie unsere Website nutzen!",
                    notificationTime: "Gerade eben!",

                    notificationMarkerAdded: "Neuer Marker!",
                    notificationMessageMarker: "Ihr Marker wurde korrekt hinzugefügt!",

                    // Home
                    footer: "© Arquisoft - UNIOVI",
                    homeInfo1: "GOMap!® ist eine Anwendung, mit der Benutzer benutzerdefinierte Karten zu Orten und lokalen Unternehmen in ihrer Stadt wie Geschäften, Bars, Restaurants, Denkmälern, Kinos usw. haben können...",
                    homeInfo2: "Die Anwendung ermöglicht es Benutzern auch, mit ihren Freunden zu interagieren, indem sie die von ihnen gespeicherten Orte anzeigen.",
                    docsButton: "Siehe unsere Dokumentation 🔗",
                    techStack: "Verwendete Technologien:",

                    // Map
                    // Options menu
                    optionsMenu: "Kartenoptionen",
                    search: "Suchen",
                    searchPlaceholder: "Geben Sie zum Suchen ein...",
                    category: "Kategorie",
                    // Categories
                    all:"Alle",
                    bar: "Bars",
                    restaurant: "Restaurants",
                    shop: "Geschäfte",
                    supermarket: "Supermärkte",
                    hotel: "Hotels",
                    cinema: "Kinos",
                    academicInstitution: "Akademische Einrichtungen",
                    publicInstitution: "Öffentliche Einrichtungen",
                    sportsClub: "Sportvereine",
                    museum: "Museen",
                    park: "Parks",
                    landscape:"Landschaften",
                    monument:"Denkmäler",
                    hospital:"Krankenhäuser",
                    policeStation:"Krankenhäuser",
                    transportCenter:"Verkehrszentren",
                    entertainment: "Unterhaltungsmöglichkeiten",
                    others: "Andere",
                    mark: "Markieren",
                    friends: "Deine Freunde",

                    // Add marker
                    addMarker: "Markierung hinzufügen",
                    placesName: "Name des Ortes",
                    placesNamePlaceholder: "Geben Sie den Namen ein...",
                    latitude: "Breitengrad",
                    longitude: "Längengrad",
                    // Category already defined
                    // Mark already defined
                    comment: "Kommentar",
                    commentPlaceholder: "Geben Sie einen Kommentar ein...",
                    confirm: "Bestätigen",

                    // Show marker
                    media: "Medien",
                    reviews: "Bewertungen",
                    addReview: "Fügen Sie Ihre Bewertung hinzu...",
                    add: "Hinzufügen",

                    // Help:
                    office: "Unser Büro",
                    contactUs: "Kontaktiere uns",
                    name: "Dein Name:",
                    namePlaceholder: "Schreibe deinen Namen...",
                    email: "Deine E-Mail:",
                    emailPlaceholder: "Schreibe deine E-Mail...",
                    message: "Deine Nachricht:",
                    messagePlaceholder: "Schreibe deine Nachricht...",
                    send: "Senden",
                    panelOffice: "Unser Hauptbüro",
                    panelPhone: "Unser Telefon",
                    panelFax: "Unser Fax",
                    panelEmail: "Unsere E-Mail",

                    // Login:
                    provider: "Wählen Sie den POD-Anbieter aus:"
                }
            },
            chn: {
                translation: {
                    // Nav
                    home: "主页",
                    map: "地图",
                    help: "帮助",
                    about: "关于",
                    language: "语言",
                    // Languages
                    english: "English",
                    spanish: "Español",
                    french: "Français",
                    german: "Deutsch",
                    chinese: "中文",
                    asturian: "Asturianu",
                    login: "登录",
                    logout: "登出",
                    register: "还没有注册吗？立即注册！",

                    // Notification
                    notificationWelcome: "欢迎使用 GOMap!®",
                    notificationMessageHome: "感谢您使用我们的网站！",
                    notificationTime: "现在！",

                    notificationMarkerAdded: "新标记",
                    notificationMessageMarker: "您的标记已成功添加",

                    // Home
                    footer: "© Arquisoft - UNIOVI",
                    homeInfo1: "GOMap!® 是一个应用程序，用户可以在其中获取关于城市内的当地商家和场所（如商店、酒吧、餐馆、纪念碑、电影院等）的个性化地图。",
                    homeInfo2: "此外，该应用程序允许用户与朋友互动，查看他们保存的位置。",
                    docsButton: "查看我们的文档 🔗",
                    techStack: "使用的技术：",

                    // Map
                    // Options menu
                    optionsMenu: "地图选项",
                    search: "搜索",
                    searchPlaceholder: "输入以搜索...",
                    category: "类别",
                    // Categories
                    all:"全部",
                    bar: "酒吧",
                    restaurant: "餐馆",
                    shop: "商店",
                    supermarket: "超市",
                    hotel: "酒店",
                    cinema: "电影院",
                    academicInstitution: "学术机构",
                    publicInstitution: "公共机构",
                    sportsClub: "运动俱乐部",
                    museum: "博物馆",
                    park: "公园",
                    landscape:"风景",
                    monument:"纪念碑",
                    hospital:"医院",
                    policeStation:"警察局",
                    transportCenter:"交通中心",
                    entertainment: "娱乐场所",
                    others: "其他",
                    mark: "标记",
                    friends: "你的朋友",

                    // Add marker
                    addMarker: "添加标记",
                    placesName: "地点名称",
                    placesNamePlaceholder: "输入以设置名称...",
                    latitude: "纬度",
                    longitude: "经度",
                    // Category already defined
                    // Mark already defined
                    comment: "评论",
                    commentPlaceholder: "输入以添加评论...",
                    confirm: "确认",

                    // Show marker
                    media: "媒体",
                    reviews: "评论",
                    addReview: "添加你的评论...",
                    add: "添加",

                    // Help:
                    office: "我们的办公室",
                    contactUs: "联系我们",
                    name: "您的姓名：",
                    namePlaceholder: "填写您的姓名...",
                    email: "您的电子邮件：",
                    emailPlaceholder: "填写您的电子邮件...",
                    message: "您的留言：",
                    messagePlaceholder: "填写您的留言...",
                    send: "发送",
                    panelOffice: "我们的主要办事处",
                    panelPhone: "我们的电话",
                    panelFax: "我们的传真",
                    panelEmail: "我们的电子邮件",

                    // Login:
                    provider: "选择POD提供商"
                }
            },
            ast: {
                translation: {
                    // Nav
                    home: "Alcontru",
                    map: "Mapa",
                    help: "Ayuda",
                    about: "Sobre",
                    language: "Llingua",
                    // Languages
                    english: "English",
                    spanish: "Español",
                    french: "Français",
                    german: "Deutsch",
                    chinese: "中文",
                    asturian: "Asturianu",
                    login: "Aniciar sesión",
                    logout: "Zarrar sesión",
                    register: "¿Entá nun tas rexistrao? ¡Regístrate agora!",
                    // Notification
                    notificationWelcome: "¡Bienveníu a GOMap!®",
                    notificationMessageHome: "¡Gracies por usar la nuesa páxina!",
                    notificationTime: "Agora mesmo!",

                    notificationMarkerAdded: "Nuevu marcador!",
                    notificationMessageMarker: "El so marcador se xubió correchamente!",

                    // Home
                    footer: "© Arquisoft - UNIOVI",
                    homeInfo1: "GOMap!® ye una aplicación onde los usuarios pueden tener mapes personalizaos sobro llugares y negocios locales de la so ciudá, como tiendes, chigres, restoranes, monumentos, cines...",
                    homeInfo2: "Amás, l'aplicación dexa a los usuarios interactuar con los sos amigos al ver los llugares que guardaron.",
                    docsButton: "Ver la nuestra documentación 🔗",
                    techStack: "Tecnoloxíes usaes:",

                    // Map
                    // Options menu
                    optionsMenu: "Opciones del mapa",
                    search: "Buscar",
                    searchPlaceholder: "Escribi pa buscar...",
                    category: "Categoría",
                    // Categories
                    all:"Todes",
                    bar: "Chigres",
                    restaurant: "Restoranes",
                    shop: "Tiendes",
                    supermarket: "Supermercáos",
                    hotel: "Hoteles",
                    cinema: "Cines",
                    academicInstitution: "Instituciones académiques",
                    publicInstitution: "Instituciones públiques",
                    sportsClub: "Clubes deportivos",
                    museum: "Museos",
                    park: "Parques",
                    landscape:"Paisaxes",
                    monument:"Monumentos",
                    hospital:"Hospitales",
                    policeStation:"Comisarias",
                    transportCenter:"Tresporte",
                    entertainment: "Entretenimiento",
                    others: "Otros",
                    mark: "Nota",
                    friends: "Los tos amigos",

                    // Add marker
                    addMarker: "Amestar marcador",
                    placesName: "Nome del llugar",
                    placesNamePlaceholder: "Escribi pa poner el nome...",
                    latitude: "Llatitú",
                    longitude: "Llonxitú",
                    // Category already defined
                    // Mark already defined
                    comment: "Comentariu",
                    commentPlaceholder: "Escribi pa amestar un comentariu...",
                    confirm: "Confirmar",

                    // Show marker
                    media: "Meyos",
                    reviews: "Comentarios",
                    addReview: "Amesta'l to comentariu...",
                    add: "Amestar",

                    // Help:
                    office: "La nuesa oficina",
                    contactUs: "Contáctanos",
                    name: "Tu nome:",
                    namePlaceholder: "Escribe'l to nome...",
                    email: "El to corréu electrónicu:",
                    emailPlaceholder: "Escribe'l to corréu electrónicu...",
                    message: "El to mensaxe:",
                    messagePlaceholder: "Escribe'l to mensaxe...",
                    send: "Unviar",
                    panelOffice: "La nuesa oficina principal",
                    panelPhone: "El nuesu teléfonu",
                    panelFax: "El nuesu fax",
                    panelEmail: "El nuesu corréu electrónicu",

                    // Login:
                    provider: "Escoya'l proveedor de PODs:"
                }
            }
        },
        lng: sessionStorage.getItem("language") || "en",
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
    }).then(() => {
        console.log("Internationalization initialized correctly")
    });

const saveLanguageToSession = (language: string) => {
    sessionStorage.setItem("language", language);
};

i18n.on("languageChanged", (lang) => {
    saveLanguageToSession(lang);
});

export default i18n;