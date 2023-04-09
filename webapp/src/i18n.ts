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
                    notification_welcome: "Welcome to GOMap!®",
                    notification_message_home: "Thanks for using our website!",
                    notification_time: "Just now!",

                    notification_marker_added: "New Marker!",
                    notification_message_marker: "Your marker has been added correctly!",

                    // Home
                    footer: "© Arquisoft - UNIOVI",
                    home_info1: "GOMap!® is an application where users can have custom maps about places and local business in their city like shops, bars, restaurants, monuments, cinemas...",
                    home_info2: "Also the application allows users to interact with their friends by viewing the places they have saved.",
                    docs_button: "See our documentation 🔗",
                    tech_stack: "Used technologies:",

                    // Map
                    // Options menu
                    options_menu: "Map options",
                    search: "Search",
                    search_placeholder: "Type to search...",
                    category: "Category",
                    // Categories
                    all: "All",
                    bars: "Bars",
                    restaurants: "Restaurants",
                    shops: "Shops",
                    supermarkets: "Supermarkets",
                    hotels: "Hotels",
                    cinemas: "Cinemas",
                    academic_institution: "Academic Institutions",
                    public_institution: "Public Institutions",
                    sports_club: "Sports Clubs",
                    museum: "Museums",
                    parks: "Parks",
                    others: "Others",
                    mark: "Mark",
                    friends: "Your friends",

                    // Add marker
                    add_marker: "Add marker",
                    places_name: "Place's name",
                    places_name_placeholder: "Type to set name...",
                    latitude: "Latitude",
                    longitude: "Longitude",
                    // Category already defined
                    // Mark already defined
                    comment: "Comment",
                    comment_placeholder: "Type to add a comment...",
                    confirm: "Confirm",

                    // Show marker
                    media: "Media",
                    reviews: "Reviews",
                    add_review: "Add your review..."
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
                    notification_welcome: "Bienvenido a GOMap!®",
                    notification_message_home: "¡Gracias por usar nuestra web!",
                    notification_time: "¡Justo ahora!",

                    notification_marker_added: "¡Nuevo marcador!",
                    notification_message_marker: "¡Su marcador se ha agregado correctamente!",

                    // Home
                    footer: "© Arquisoft - UNIOVI",
                    home_info1: "GOMap!® es una aplicación donde los usuarios pueden tener mapas personalizados sobre lugares y negocios locales en su ciudad como tiendas, bares, restaurantes, monumentos, cines...",
                    home_info2: "Además, la aplicación permite a los usuarios interactuar con sus amigos viendo los lugares que han guardado.",
                    docs_button: "Ver nuestra documentación 🔗",
                    tech_stack: "Tecnologías utilizadas:",

                    // Map
                    // Options menu
                    options_menu: "Opciones del mapa",
                    search: "Buscar",
                    search_placeholder: "Escribe para buscar...",
                    category: "Categoría",
                    // Categories
                    all: "Todas",
                    bars: "Bares",
                    restaurants: "Restaurantes",
                    shops: "Tiendas",
                    supermarkets: "Supermercados",
                    hotels: "Hoteles",
                    cinemas: "Cines",
                    academic_institution: "Instituciones académicas",
                    public_institution: "Instituciones públicas",
                    sports_club: "Clubes deportivos",
                    museum: "Museos",
                    parks: "Parques",
                    others: "Otros",
                    mark: "Nota",
                    friends: "Tus amigos",

                    // Add marker
                    add_marker: "Agregar marca",
                    places_name: "Nombre del lugar",
                    places_name_placeholder: "Escribe para establecer el nombre...",
                    latitude: "Latitud",
                    longitude: "Longitud",
                    // Category already defined
                    // Mark already defined
                    comment: "Comentario",
                    comment_placeholder: "Escribe para agregar un comentario...",
                    confirm: "Confirmar",

                    // Show marker
                    media: "Media",
                    reviews: "Opiniones",
                    add_review: "Agrega tu opinión..."
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
                    notification_welcome: "Bienvenue sur GOMap!®",
                    notification_message_home: "Merci d'utiliser notre site Web!",
                    notification_time: "À l'instant!",

                    notification_marker_added: "Nouveau marqueur!",
                    notification_message_marker: "Votre marqueur a été ajouté correctement!",

                    // Home
                    footer: "© Arquisoft - UNIOVI",
                    home_info1: "GOMap!® est une application où les utilisateurs peuvent avoir des cartes personnalisées sur les lieux et les commerces locaux de leur ville, tels que des magasins, des bars, des restaurants, des monuments, des cinémas...",
                    home_info2: "De plus, l'application permet aux utilisateurs d'interagir avec leurs amis en visualisant les endroits qu'ils ont enregistrés.",
                    docs_button: "Voir notre documentation 🔗",
                    tech_stack: "Technologies utilisées :",

                    // Map
                    // Options menu
                    options_menu: "Options de carte",
                    search: "Rechercher",
                    search_placeholder: "Tapez pour rechercher...",
                    category: "Catégorie",
                    // Categories
                    all: "Toutes",
                    bars: "Bars",
                    restaurants: "Restaurants",
                    shops: "Magasins",
                    supermarkets: "Supermarchés",
                    hotels: "Hôtels",
                    cinemas: "Cinémas",
                    academic_institution: "Institutions académiques",
                    public_institution: "Institutions publiques",
                    sports_club: "Clubs de sport",
                    museum: "Musées",
                    parks: "Parcs",
                    others: "Autres",
                    mark: "Note",
                    friends: "Vos amis",

                    // Add marker
                    add_marker: "Ajouter une marque",
                    places_name: "Nom de l'endroit",
                    places_name_placeholder: "Tapez pour définir le nom...",
                    latitude: "Latitude",
                    longitude: "Longitude",
                    // Category already defined
                    // Mark already defined
                    comment: "Commentaire",
                    comment_placeholder: "Tapez pour ajouter un commentaire...",
                    confirm: "Confirmer",

                    // Show marker
                    media: "Médias",
                    reviews: "Avis",
                    add_review: "Ajoutez votre avis..."
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
                    notification_welcome: "Willkommen bei GOMap!®",
                    notification_message_home: "Vielen Dank, dass Sie unsere Website nutzen!",
                    notification_time: "Gerade eben!",

                    notification_marker_added: "Neuer Marker!",
                    notification_message_marker: "Ihr Marker wurde korrekt hinzugefügt!",

                    // Home
                    footer: "© Arquisoft - UNIOVI",
                    home_info1: "GOMap!® ist eine Anwendung, mit der Benutzer benutzerdefinierte Karten zu Orten und lokalen Unternehmen in ihrer Stadt wie Geschäften, Bars, Restaurants, Denkmälern, Kinos usw. haben können...",
                    home_info2: "Die Anwendung ermöglicht es Benutzern auch, mit ihren Freunden zu interagieren, indem sie die von ihnen gespeicherten Orte anzeigen.",
                    docs_button: "Siehe unsere Dokumentation 🔗",
                    tech_stack: "Verwendete Technologien:",

                    // Map
                    // Options menu
                    options_menu: "Kartenoptionen",
                    search: "Suchen",
                    search_placeholder: "Geben Sie zum Suchen ein...",
                    category: "Kategorie",
                    // Categories
                    all:"Alle",
                    bars: "Bars",
                    restaurants: "Restaurants",
                    shops: "Geschäfte",
                    supermarkets: "Supermärkte",
                    hotels: "Hotels",
                    cinemas: "Kinos",
                    academic_institution: "Akademische Einrichtungen",
                    public_institution: "Öffentliche Einrichtungen",
                    sports_club: "Sportvereine",
                    museum: "Museen",
                    parks: "Parks",
                    others: "Andere",
                    mark: "Markieren",
                    friends: "Deine Freunde",

                    // Add marker
                    add_marker: "Markierung hinzufügen",
                    places_name: "Name des Ortes",
                    places_name_placeholder: "Geben Sie den Namen ein...",
                    latitude: "Breitengrad",
                    longitude: "Längengrad",
                    // Category already defined
                    // Mark already defined
                    comment: "Kommentar",
                    comment_placeholder: "Geben Sie einen Kommentar ein...",
                    confirm: "Bestätigen",

                    // Show marker
                    media: "Medien",
                    reviews: "Bewertungen",
                    add_review: "Fügen Sie Ihre Bewertung hinzu..."
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
                    notification_welcome: "欢迎使用 GOMap!®",
                    notification_message_home: "感谢您使用我们的网站！",
                    notification_time: "现在！",

                    notification_marker_added: "新标记",
                    notification_message_marker: "您的标记已成功添加",

                    // Home
                    footer: "© Arquisoft - UNIOVI",
                    home_info1: "GOMap!® 是一个应用程序，用户可以在其中获取关于城市内的当地商家和场所（如商店、酒吧、餐馆、纪念碑、电影院等）的个性化地图。",
                    home_info2: "此外，该应用程序允许用户与朋友互动，查看他们保存的位置。",
                    docs_button: "查看我们的文档 🔗",
                    tech_stack: "使用的技术：",

                    // Map
                    // Options menu
                    options_menu: "地图选项",
                    search: "搜索",
                    search_placeholder: "输入以搜索...",
                    category: "类别",
                    // Categories
                    all:"全部",
                    bars: "酒吧",
                    restaurants: "餐馆",
                    shops: "商店",
                    supermarkets: "超市",
                    hotels: "酒店",
                    cinemas: "电影院",
                    academic_institution: "学术机构",
                    public_institution: "公共机构",
                    sports_club: "运动俱乐部",
                    museum: "博物馆",
                    parks: "公园",
                    others: "其他",
                    mark: "标记",
                    friends: "你的朋友",

                    // Add marker
                    add_marker: "添加标记",
                    places_name: "地点名称",
                    places_name_placeholder: "输入以设置名称...",
                    latitude: "纬度",
                    longitude: "经度",
                    // Category already defined
                    // Mark already defined
                    comment: "评论",
                    comment_placeholder: "输入以添加评论...",
                    confirm: "确认",

                    // Show marker
                    media: "媒体",
                    reviews: "评论",
                    add_review: "添加你的评论..."
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
                    notification_welcome: "¡Bienveníu a GOMap!®",
                    notification_message_home: "¡Gracies por usar la nuesa páxina!",
                    notification_time: "Agora mesmo!",

                    notification_marker_added: "Nuevu marcador!",
                    notification_message_marker: "El so marcador se xubió correchamente!",

                    // Home
                    footer: "© Arquisoft - UNIOVI",
                    home_info1: "GOMap!® ye una aplicación onde los usuarios pueden tener mapes personalizaos sobro llugares y negocios locales de la so ciudá, como tiendes, chigres, restoranes, monumentos, cines...",
                    home_info2: "Amás, l'aplicación dexa a los usuarios interactuar con los sos amigos al ver los llugares que guardaron.",
                    docs_button: "Ver la nuestra documentación 🔗",
                    tech_stack: "Tecnoloxíes usaes:",

                    // Map
                    // Options menu
                    options_menu: "Opciones del mapa",
                    search: "Buscar",
                    search_placeholder: "Escribi pa buscar...",
                    category: "Categoría",
                    // Categories
                    all:"Todes",
                    bars: "Chigres",
                    restaurants: "Restoranes",
                    shops: "Tiendes",
                    supermarkets: "Supermercáos",
                    hotels: "Hoteles",
                    cinemas: "Cines",
                    academic_institution: "Instituciones académiques",
                    public_institution: "Instituciones públiques",
                    sports_club: "Clubes deportivos",
                    museum: "Museos",
                    parks: "Parques",
                    others: "Otros",
                    mark: "Nota",
                    friends: "Los tos amigos",

                    // Add marker
                    add_marker: "Amestar marcador",
                    places_name: "Nome del llugar",
                    places_name_placeholder: "Escribi pa poner el nome...",
                    latitude: "Llatitú",
                    longitude: "Llonxitú",
                    // Category already defined
                    // Mark already defined
                    comment: "Comentariu",
                    comment_placeholder: "Escribi pa amestar un comentariu...",
                    confirm: "Confirmar",

                    // Show marker
                    media: "Meyos",
                    reviews: "Comentarios",
                    add_review: "Amesta'l to comentariu..."
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