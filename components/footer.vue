<template>
  <section>
    <v-footer id="footer" absolute class="pa-0">
        <!-- desktop -->
        <v-row class="d-none d-md-flex">
          <v-col cols="4" class="ajusteTopLogo">
            <v-row class="center">
              <v-col cols="8" md="10" lg="8" xl="8">            
                  <img class="logo" src="~/assets/sources/logos/logoBlanco.png" alt="Logo">            
              </v-col>
            </v-row>
            <v-row>
              <v-col class="center">
                <span class="h12_em normal color">&copy;2022 Nearbook. All Rights Reserved.</span> 
              </v-col>            
            </v-row>
          </v-col>
  
           <v-col cols="4" md="4" lg="4" xl="4" class="center pl-0 pr-0">
             <ul class="lista pa-0">
               <a href="" class="h12"><li>{{$t('home')}}</li></a>
               <a href="" class="h12"><li>{{$t('gitbook')}}</li></a>
               <a href="" class="h12"><li>{{$t('about')}}</li></a>
               <a href="" class="h12"><li>{{$t('team')}}</li></a>
               <a href="" class="h12"><li>{{$t('contact')}}</li></a>
             </ul>
           </v-col>
           <v-spacer></v-spacer>
  
           <v-col class="pr-0 paTop" cols="3" >
             <v-row>
               <v-col class="pb-0 pr-0 mr-0">
                 <b><span class="color">{{$t('follow')}}</span></b>
               </v-col>
             </v-row>
             <v-row>
               <v-col class="pb-5 pl-0 pr-0">
                <a href="https://instagram.com/nearbookshop?igshid=YmMyMTA2M2Y=" target="_blank"><v-icon class="pr-2" style="color:var(--bg)">mdi-instagram</v-icon></a>
                    <a href="https://twitter.com/NearBookshop?t=GsI_4VaYAHq-e-Yi2-atkQ&s=09" target="_blank"><v-icon class="pr-2" style="color:var(--bg)">mdi-twitter</v-icon></a>  
                    <a href="#" target="_blank"> <v-icon class="pr-2" style="color:var(--bg); margin-top: -10px">discord</v-icon></a>          
                    <a href="https://t.me/+U4yTQtdm5pw1YTkx" target="_blank"><img id="telegram" style="width:20px" src="~/assets/sources/icons/telegram.png" alt="telegram"></a>
               </v-col>
             </v-row> 
             <v-row>
               <v-col cols="11" class="pa-0">               
                <v-text-field
                  style="--bg: white; margin-right: 23px"
                  v-model="input"
                  solo
                  :rules="[rules.email]"
                  placeholder="example@email.com"                  
                  dense
                  height="10px"
                  class="h12"                              
                >                
                  <template v-slot:append>
                    <div style="margin-right: -23px">
                    <v-btn class="botones h10_em" @click="SendEmail()">{{$t('botonSuscribir')}}</v-btn>
                    </div>
                  </template>                                                                         
                </v-text-field>          
               </v-col>
             </v-row> 
          </v-col>
        </v-row> 
        <!--fin desktop -->
        <!-- movil-->
        <v-col class="d-flex d-md-none divcol center pl-0 pr-0">                 
              <img class="logo" src="~/assets/sources/logos/logoBlanco.png" alt="Logo">        
        <v-row class="pl-0 pr-0">
          <v-col class="center pl-0 pr-0" cols="12">
             <ul class="lista pa-0">
               <a href="" class="h12"><li>{{$t('home')}}</li></a>
               <a href="" class="h12"><li>{{$t('gitbook')}}</li></a>
               <a href="" class="h12"><li>{{$t('about')}}</li></a>
               <a href="" class="h12"><li>{{$t('team')}}</li></a>
               <a href="" class="h12"><li>{{$t('contact')}}</li></a>
             </ul>
           </v-col>
         </v-row>
             <v-row>
               <v-col class="pa-0">               
                <v-text-field
                style="--bg: white"
                  v-model="input"
                  solo
                  :rules="[rules.email]"
                  placeholder="example@email.com"
                  rounded 
                  class="h12"                                             
                >                
                  <template v-slot:append>
                    <div style="margin-right: -23px">
                    <v-btn class="botones h11_em" @click="SendEmail()">{{$t('botonSuscribir')}}</v-btn>
                    </div>
                  </template>                                                                         
                </v-text-field>          
               </v-col>
             </v-row> 
             <v-row>
               <v-col class="pt-0">               
                   <a href="https://instagram.com/nearbookshop?igshid=YmMyMTA2M2Y=" target="_blank"><v-icon class="pr-2" style="color:var(--bg)">mdi-instagram</v-icon></a>
                    <a class="ml" href="https://twitter.com/NearBookshop?t=GsI_4VaYAHq-e-Yi2-atkQ&s=09" target="_blank"><v-icon class="pr-2" style="color:var(--bg)">mdi-twitter</v-icon></a>  
                    <v-icon class="pr-2" style="color:var(--bg); margin-top: -10px">discord</v-icon>          
                    <a id="telegram" href="https://t.me/+U4yTQtdm5pw1YTkx" target="_blank"><img style="width:20px" src="~/assets/sources/icons/telegram.png" alt="telegram"></a>
               </v-col>
             </v-row>
             <span class="h12_em normal color pt-3">&copy;2022 Nearbook. All Rights Reserved.</span>
        </v-col>
        <!--fin movil-->
  
      <section class="center ancho">
        <div class="fondoRosa1 mt-0">        
          <v-col class="center pb-0">  
            <span class="color h11 pr-2" style="margin-right: -10px">Developed by</span>
            <img class="logoDv" src="~/assets/sources/logos/logo-Global Dv-Blanco.png" alt="Logos Footer">
            <span class="color h11 pl-2" style="margin-left: -10px">Powered by</span>        
            <img class="logoNear pl-3" src="~/assets/sources/logos/logonear.png" alt="Logos Footer">
          </v-col>        
        </div>            
      </section>
      <div class="fondoRosa2">f</div>   
    </v-footer>  
    </section>
  </template>
  

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      dataRedes: [
        { icon: "instagram", to: "home" },
        { icon: "mdi-twitter", to: "home" },
        { icon: "mdi-discord", to: "home" },        
        { icon: "mdi-youtube", to: "home" },
        
      ],
      dataFooter: [
        {
          title: "featured",
          links: [
            { link: "Trending", to: "home" },
            { link: "Top", to: "home" },
            { link: "Collectibles", to: "home" },
          ]
        },
        {
          title: "explore",
          links: [
            { link: "Trending", to: "home" },
            { link: "Top", to: "home" },
            { link: "Collectibles", to: "home" },
          ]
        },
        {
          title: "stats",
          links: [
            { link: "Ranking", to: "home" },
            { link: "Activity", to: "home" },
          ]
        },
        {
          title: "resources",
          links: [
            { link: "Blog", to: "home" },
            { link: "Partners", to: "home" },
            { link: "Newsletter", to: "home" },
          ]
        },
        {
          title: "keep in contact",
          input: true
        },
      ],
      input: "",
      rules: {
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
  methods: {
    SendEmail() {
      alert('send')
    },
  }
}
</script>
<style>
  .seccionBottom{
    background-color: var(--clr-btn);
    width: 40%;
    height: 40px;
    border-top-left-radius:15px ;
    border-top-right-radius:15px ;
    border-bottom-right-radius:-100px ; 
    display: flex;
    justify-content: center; 
    align-items: flex-end;
    }
</style>

<style src="~/assets/styles/components/footer.scss" lang="scss" />
