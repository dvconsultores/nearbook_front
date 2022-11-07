export default {
  // error page //
  pageNotFound: "Sorry Wrong Page",
  otherError: "An error ocurred",
  buttonTitle: "Home page",
  // alert component //
  success: "SUCCESS!",
  textSuccess: "Your changes have been successfully saved",
  cancel: "ERROR!",
  textCancel: "Something strange has happened, try again",
  // header
  home:'home',
  gitbook: 'Gitbook',      
  about:'about',
  team:'team',
  contact:'Contact',
  language: 'language',
  
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
        name: 'About',
        to: '#about',
        icon:'mdi-book-open-page-variant',
        active: false,
      },
      {
        key: 'faq',
        name: 'Team',
        to: '#team',
        icon:'mdi-account-group',
        active: false,
      },
      {
        key: 'faq',
        name: 'Contact',
        to: '#contact',
        icon:'mdi-human-greeting-proximity',
        active: false,
      },
    ],
    expansion: [
      {
        key: 'market',
        name: 'Language',
        active: false,
        selection: [
          { key: 'buy', name: 'Spanish', to: '/buy' },
          { key: 'sell', name: 'English', to: '/sell' },
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
      title: 'About',
      to: '#acercade',
    },
    {
      title: 'Team',
      to: '#equipo',
    },
    {
      title: 'Contact',
      to: '#contactanos',
    },    
  ],
  dataNavbar2: [
    {
        title: "EN",
        key: 'idiomas',
        icon1: 'mdi-earth',
        icon2: 'mdi-menu-down',          
        link: "#"
      }
   ], 
   idiomas: [
    {value: "ES", title:'Spanish'},
    {value: "EN", title:'English'},
    {value: "FR", title:'French'}
  ], 
  botonHeader: 'Connect Wallet',
  // footer
            
      follow:'Follow us',
      botonSuscribir: 'Subscribe',
  // hero
      // seccion 1
      subtitlePrincipal: 'Share your works and lets grow together on web 3.0',
      parrafoPrincipal: 'Make yourself known and promote your works.',
      botonConectarWallet: 'Connect Wallet',
      botonPruebaTestnet: 'test (Testnet)',
      // seccion 2
      subtitle1: 'The best works of the month',
      subtitle2: 'What is Nearbook?',
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
      beneficio1: 'Benefit 1',
      beneficio2: 'Benefit 2',
      beneficio3: 'Benefit 3',
      beneficio4: 'Benefit 4',
      parrafoBeneficio1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      parrafoBeneficio2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      parrafoBeneficio3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      parrafoBeneficio4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      // seccion 4
      subtitleEquipo: 'Work team',
      cargoLeyner:'Technical Lead Software Development',
      cargoLinda:'Frontend Web Developer Vue.js and Node.js',
      cargoHector:'Backend Developer Rust, NODE Javascript, Python',
      cargoAlejandria:'Graphic UI Designer',
      // seccion 5
      subtitleDudas: 'You have doubts?',
      parrafoDudas: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, dolore maxime provident fugit et vitae saepe ',
      botonEnviar: 'Send',
};
