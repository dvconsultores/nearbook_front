<template>
  <div id="header">
    <MenuHeader ref="menu"></MenuHeader>
    <v-app-bar id="headerApp" color="transparent" height="100px" absolute>

      <section>      
        <aside class=" divcol center" :class="{active: sidebar}">
          <img style="max-width: 200px" src="~/static/themes/light/logo.png" alt="logo">                      
        </aside>        
      </section>

      <!-- contenedor del menu -->      
     <section class="d-none d-md-flex divrow h12_em" id="nav"> 
        <div class="center" v-for="(item,i) in dataNavbar" :key="i">                
          <a :href="item.to" class="tcap">{{$t(item.title)}}</a>                                
        </div>      
                 
        <div class="center" v-for="(item,i) in dataNavbar2" :key="i">
          <v-icon>{{item.icon1}}</v-icon>
          <a @click="$router.push(localePath('/'))">{{item.title}}</a> 
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class=""          
                icon
                small
                v-bind="attrs"
                v-on="on"
              >
                <v-icon class="clr-rosado">{{item.icon2}}</v-icon>
              </v-btn>
            </template>
            <v-list color="var(--secondary)" style="--c:white" class="h12_em">
              <v-list-item
                v-for="i in idiomas"
                :key="i"                
                    >   
                  <v-list-item-title                  
                     @click="$router.push(switchLocalePath(i.value))"
                      style="cursor: pointer"
                    >{{ i.title }}
                  </v-list-item-title>                        
              </v-list-item>
            </v-list>
           </v-menu>                               
        </div>          
     </section>     


      <section id="seccionRight">       
        <!-- contenedor de boton-->
        <div class="center d-none d-md-flex">
           <!-- boton de tema-->          
            <!-- <v-btn icon small class="mr-5"><img src="~/assets/sources/icons/tema.png" alt="boton de tema"></v-btn> -->
            <v-btn @click="funConnectWallet()" class="botones h12_em d-none d-md-flex">{{ $t("botonHeader") }}</v-btn>
        </div>        
                 
        <!-- mobile -->
        <div class="center d-flex d-md-none">
            <!-- <v-btn icon><img src="~/assets/sources/icons/tema.png" alt="boton de tema"></v-btn> -->
          <v-btn @click="toggleFunc()" icon><v-icon color="var(--secondary)">mdi-menu</v-icon></v-btn>        
        </div>                    
      </section>             
    </v-app-bar>
  </div>
</template>

<script>
import * as nearAPI from 'near-api-js'

const { connect, keyStores, WalletConnection } = nearAPI

const keyStore = new keyStores.BrowserLocalStorageKeyStore()
const config = {
  networkId: "testnet",
  keyStore, 
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

export default {
  name: "HeaderComponent",
  data() {
    return {
      accountId: null,
      user: false,
      messages: 1,
      sidebar: false,
      initialFocus: 0,
      positionFocus: 0,

      dataNavbar: [  
    {
      title: 'home',
      to: '/#',
    },  
    {
      title: 'gitbook',
      to: '#gitbook',
    },
    {
      title: 'about',
      to: '#acercade',
    },
    {
      title: 'team',
      to: '#equipo',
    },
    {
      title: 'contact',
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
    {value: "es", title:'Spanish'},
    {value: "en", title:'English'},
    {value: "fr", title:'French'}
  ], 
     
    };
  },
  computed: {
    perfil() {return this.$store.state.user.perfil},
  },
  // created() {
  //   const theme = localStorage.getItem("theme");
  //   if (theme) {
  //     setTimeout(() => {
  //       this.$store.dispatch("CambiarTheme", theme);
  //       this.$store.commit('OverlayMethod', theme)
  //     }, 100);
  //   }
  //   if (theme === "light") {this.themeButton = true}
  //   if (theme === "dark") {this.themeButton = false}
  // },
  mounted() {
    this.isSigned()
    this.getData()
    this.LogState();    
  },
  methods: { 
    
    activeSidebarIcons(item) {
      this.dataSidebar.forEach(e=>{e.active=false});
      setTimeout(() => {
        item.active=true
      }, 500);
    },
    toggleFunc() {
      if (window.innerWidth <= 880) {
        this.$refs.menu.drawer=true
      } else {
        this.sidebar=!this.sidebar
        this.dataSidebar.forEach(e=>{e.active=false})
        this.positionFocus=0
        if (this.sidebar === false) {this.initialFocus=0}
        else {this.initialFocus=16}
      }
    },
    // CambiarTheme(theme) {
    //   this.$store.dispatch("CambiarTheme", theme);
    //   this.themeButton = !this.themeButton;
    // },
    async getData () {
      this.account = {}
      // connect to NEAR
      const near = await connect(config);
      // create wallet connection
      const wallet = new WalletConnection(near)
      this.accountId= wallet.getAccountId()

      if (wallet.isSignedIn()) {
        const url = "api/v1/profile/?wallet=" + this.accountId
        this.axios.defaults.headers.common.Authorization='token'
        this.axios.get(url)
          .then((response) => {
            if (response.data[0]){
              this.avatar = response.data[0].avatar
              this.$store.commit("Avatar", this.avatar)
            }
        }).catch((error) => {
          alert(error)
        })
      }
    },
    // use for update account log states
    LogState() {
      if (JSON.parse(localStorage.getItem('auth')) === true) {this.user = true}
      else {this.user = false}
    },
    async signIn () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      wallet.requestSignIn(
        'contract.nearbase.testnet'
      )
    },
    async isSigned () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        localStorage.setItem('auth', true)
        this.user = true
      }
    },
    async signOut () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      wallet.signOut()
      localStorage.setItem('auth', false)
      this.user = false
      this.$router.push(this.localePath({ path: '/' }))
    },
  },
};
</script>

<style src="~/assets/styles/components/header.scss" lang="scss" />
