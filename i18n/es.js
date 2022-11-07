export default {
  // error page //
  pageNotFound: "La página no existe",
  otherError: "Ha ocurrido un error",
  buttonTitle: "Página de inicio",
  // alert component //
  success: "ÉXITO!",
  textSuccess: "Tus cambios han sido guardados satisfactoriamente",
  cancel: "ERROR!",
  textCancel: "Algo extraño ha ocurrido, intentalo denuevo",
  // header
  home:'inicio',
  gitbook: 'Gitbook',   
  about:'acerca de',
  team:'equipo',
  contact:'Contacto',
  language: 'Idioma',

  dataDrawer: {
    list: [
      {
        key: 'stats',
        name: 'Home',
        to: '#',
        icon:'mdi-home',
        active: false,
      },
      {
        key: 'chats',
        name: 'Gitbook',
        to: '#git',
        icon:'mdi-book',
        active: false,
      },
      {
        key: 'settings',
        name: 'Acerca de',
        to: '#about',
        icon:'mdi-book-open-page-variant',
        active: false,
      },
      {
        key: 'faq',
        name: 'Equipo',
        to: '#team',
        icon:'mdi-account-group',
        active: false,
      },
      {
        key: 'faq',
        name: 'Contactanos',
        to: '#contact',
        icon:'mdi-human-greeting-proximity',
        active: false,
      },
    ],
    expansion: [
      {
        key: 'market',
        name: 'Idioma',
        active: false,
        selection: [
          { key: 'buy', name: 'Español', to: '/buy' },
          { key: 'sell', name: 'Ingles', to: '/sell' },
        ],
      },
    ],
  },

  dataNavbar: [  
    {
      title: 'Home',
      to: '#',
    },  
    {
      title: 'Gitbook',
      to: '#gitbook',
    },
    {
      title: 'Acerca de',
      to: '#acercade',
    },
    {
      title: 'Equipo',
      to: '#equipo',
    },
    {
      title: 'Contactanos',
      to: '#contactanos',
    },    
  ],
  dataNavbar2: [
    {
        title: "ES",
        key: 'idiomas',
        icon1: 'mdi-earth',
        icon2: 'mdi-menu-down',          
        link: "#"
      }
   ],  
   idiomas: [
    {value: "ES", title:'Español'},
    {value: "EN",title:'Inglés'},
    {value: "FR",title:'Francés'}
  ],
  botonHeader: 'Conectar Wallet',
  // footer
     
  follow:'Síganos',
  botonSuscribir: 'Suscribir',
  // hero
    // seccion 1
    subtitlePrincipal: 'Comparte tus obras y crezcamos juntos en la web 3.0',
    parrafoPrincipal: 'Date a conocer e impulsa tus obras.',
    botonConectarWallet: 'Conectar billetera',
    botonPruebaTestnet: 'Prueba (Testnet)',
    // seccion 2
    subtitle1: 'Las mejores obras del mes',
    subtitle2: '¿Que es Nearbook?',
    parrafoNearbook: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, dolore maxime provident fugit et vitae saepe quidem officiis repellat quasi nihil nemo ullam optio dolores cum ut fugiat tempora dolorem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, dolore maxime provident fugit et vitae saepe quidem officiis repellat quasi nihil nemo ullam optio dolores cum ut fugiat tempora dolorem.',
    avatar: [
      {
       img: require ("~/assets/sources/images/happy-1836445_1920.jpg"),
       icon: 'mdi-star', 
       subtitle: 'Jose David 3233',
       parrafo: 'Lorem ipsum dolor sit amet',
      },
      {
       img: require ("~/assets/sources/images/happy-1836445_1920.jpg"),
       icon: 'mdi-star', 
       subtitle: 'Jose David 3233',
       parrafo: 'Lorem ipsum dolor sit amet',
      },
      {
       img: require ("~/assets/sources/images/happy-1836445_1920.jpg"),
       icon: 'mdi-star', 
       subtitle: 'Jose David 3233',
       parrafo: 'Lorem ipsum dolor sit amet.',
      }
    ],
    // seccion 3
    beneficio1: 'Beneficio 1',
    beneficio2: 'Beneficio 2',
    beneficio3: 'Beneficio 3',
    beneficio4: 'Beneficio 4',
    parrafoBeneficio1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    parrafoBeneficio2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    parrafoBeneficio3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    parrafoBeneficio4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    // seccion 4
    subtitleEquipo: 'Equipo de Trabajo',
    cargoLeyner:'Lider Tecnico Desarrollo de Software',
    cargoLinda:'Desarrollador Web Frontend Vue.js y Node.js',
    cargoHector:'DV backend Rust, NODE Javascript, Python',
    cargoAlejandria:'Diseñador Grafico UI',
    // seccion 5
    subtitleDudas: '¿Tienes Dudas?',
    parrafoDudas: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, dolore maxime provident fugit et vitae saepe ',
    botonEnviar: 'Enviar',  
};
