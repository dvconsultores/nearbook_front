<template>
  <section id="content" class="overflow">
    <!-- parte 1 -->
   <section id="parte1">
    <div class="content-perfil-usuario">
      <!-- boton editar perfil -->
      <div class="editarPerfil">
        <div class="content-btn">
          <v-btn class="botones h12_em">
            Editar Perfil
          </v-btn>
        </div>
      </div>
      <!-- historias Colecciones -->
      <div class="historias-colecciones">
        <aside>
          <v-avatar style="width: 85px; height: 85px;">
            <img src="~/assets/sources/images/avatar.png" alt="foto de perfil">
          </v-avatar>
        </aside>   

          <span class="h10_em">Laura Capriles.near</span>       
          <span class="h12_em pt-2">Historias / Colecciones</span> 
         
          <aside class="content">
            <div v-for="(item,index) in historias_colecciones" :key="index" class="cant-hist-colec h12_em">
              {{item.cant}}
            </div>
          </aside>
      </div>
      <!-- redes sociales -->
      <div class="redesSociales">        
        <aside class="cont-img">
          <template v-for="(item, index) in redesSociales">
            <a :href="item.ruta" target="_blank" rel="noopener noreferrer" :key="index">         
              <img 
              :src="item.img"
              alt="redes sociales">
            </a> 
          </template>
        </aside>        
      </div>
    </div>
    <section class="parrafo">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sint optio atque provident accusantium quasi quam explicabo
        architecto ipsam consequatur quidem, nihil id eveniet magnam
        cum, placeat repellat ullam ad incidunt? Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Numquam totam soluta unde
        vitae eius quisquam provident voluptatibus maxime nesciunt, 
        aspernatur fugit velit deserunt omnis animi, suscipit error 
        molestias enim. Nobis.
      </p>
    </section>
    <aside class="center">
      <div class="linea">
        <v-divider></v-divider>
      </div>
    </aside>
   </section>
   <!-- mis historias -->
   <section id="historias">
      <aside class="titulo">
        <div>
          <span class="h7_em clr-morado">Mis Historias</span>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <div class="content-alert"
                v-bind="attrs"
                 v-on="on">
                <v-icon id="miIcon" color="var(--primary)">mdi-information</v-icon>
              </div>
            </template> 
            Alerta     
          </v-tooltip>
        </div>
        <div class="cont-buscador">  
          <v-text-field            
            v-model="search"
            placeholder="Nombre libro, novela o historia"
            solo
            rounded
            style="font-size: 10px;"
            class="buscador"
            >           
            <template v-slot:append>
              <div class="cont-boton-buscar">
                <v-btn class="boton-buscar">
                <img src="~/assets/sources/icons/Trazado451.png" alt="lupa">
                </v-btn>
              </div>
            </template>
          </v-text-field> 
        </div>
      </aside>

      <aside class="content-historias">
        <div v-for="(item,index) in historiasCard" 
          :key="index"
          class="content-card-btn">
          <v-card class="card-historias">
            <div class="content-img">
              <div class="contentBoton end">
                <v-btn icon>
                  <v-icon
                    >mdi-heart
                  </v-icon>
                </v-btn>
                  </div>
              <img :src="item.img" :alt="item.alt">
            </div>
            <div class="container-contenido">
              <aside class="content-subtittle-publicado">
                <div class="subtitle">
                  <span class="h10_em">{{item.nameObra}}</span>
                </div>
                <div class="publicado h13_em">
                  {{item.public}}
                </div>                
              </aside>
              <aside class="parrafo h12_em">
                <p>
                  {{item.parrafo}}                  
                </p>
              </aside>
              <aside class="containerTags">
                <div class="content-tags">
                  <div v-for="(item, index) in tags" 
                    :key="index"
                    class="tags h13_em">
                    {{item.name}}
                  </div> 
                  <div class="tagsMorado h13_em">Capitulos gratis</div>                 
                </div>
                <div class="content-tags">
                  <div v-for="(item, index) in tags1" 
                    :key="index"
                    class="tags h13_em">
                    {{item.name}}
                  </div>   
                  <div class="tagsMorado h13_em">Capitulos gratis</div>                
                </div>
              </aside>
              <aside class="Container-cant-precio">
                <div class="cont-cant-precio">
                  <div class="container h12_em">
                    <span>Cantidad</span>
                    <span>{{item.cant}}</span>
                  </div>
                  <div class="container h12_em">
                    <span>Precio</span>
                    <span class="end">{{item.precio}}                       
                      <img src="~/assets/sources/icons/near.png" alt="logo near">
                    </span>
                  </div>
                  <div class="cont h13_em end">                    
                    <span><v-icon small color="grey">mdi-approximately-equal                      
                      </v-icon>$ {{item.montoDolar}}
                    </span>
                  </div>
                </div>
                <div class="cont-icons">                  
                  <div v-for="(item,i) in icons2" :key="i" class="icon">   
                    <v-btn icon >            
                      <img :src="item.img" :alt="item.alt">
                    </v-btn>                                  
                    <span class="h13_em cant">{{item.cant}}</span>
                  </div>  
                </div>                
                <div class="cont-compartir-icon">
                  <div class="compartir">
                    <v-btn icon>
                      <img src="~/assets/sources/icons/compartir.png" alt="compartir">
                    </v-btn>
                  </div>
                </div>
              </aside>
            </div>
          </v-card>
          <div class="content-botones">
            <v-btn class="botones h10_em">Editar 
              <img src="~/assets/sources/icons/settings.png" alt="editar">
            </v-btn>
            <v-btn 
              class="botones h10_em" 
              style="background-color: #6968AC">Publicar / Pausar
            </v-btn>
          </div>
        </div>
      </aside>
   </section>
   <!-- libros favoritos -->
   <section id="favoritos">
    <aside class="titulo">
        <div>
          <span class="h7_em clr-morado">Libros favoritos</span>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <div class="content-alert"
                v-bind="attrs"
                 v-on="on">
                <v-icon id="miIcon" color="var(--primary)">mdi-information</v-icon>
              </div>
            </template> 
            Alerta     
          </v-tooltip>
        </div>

        <div>
          <v-btn icon @click="modelFavoritos--">
            <v-icon size="4em">mdi-menu-left</v-icon>
          </v-btn>
          <v-btn icon @click="modelFavoritos++">
            <v-icon size="4em">mdi-menu-right</v-icon>
          </v-btn>
        </div>
      </aside>

      <v-carousel
        id="sectionCarousel--content"
        v-model="modelFavoritos"
        height="max-content"
        hide-delimiters
        :show-arrows="false"
       >
        <template v-for="(item, index) in carouselFavoritos">
          <v-carousel-item
            v-if="
              (index + 1) % columnsCarousel() === 1 || columnsCarousel() === 1
            "
            :key="index"
            >
            <template v-for="(n, i) in columnsCarousel()">
              <template v-if="+index + i < carouselFavoritos.length">
                <v-card :key="i" class="card divcol">
                  <div class="container-img">
                    <v-btn
                      icon
                      @click="
                        carouselFavoritos[+index + i].like =
                          !carouselFavoritos[+index + i].like
                      "
                    >
                      <v-icon
                        >mdi-heart{{
                          carouselFavoritos[+index + i].like ? '' : '-outline'
                        }}</v-icon
                      >
                    </v-btn>
                    <img
                      :src="carouselFavoritos[+index + i].img"
                      :alt="`${carouselFavoritos[+index + i].name} image`"
                    />
                    <span class="wallet">{{
                      carouselFavoritos[+index + i].wallet
                    }}</span>
                  </div>

                  <a>{{ carouselFavoritos[+index + i].name }}</a>
                  <div class="space">
                    <span style="font-weight: 600">Cantidad</span>
                    <span>{{ carouselFavoritos[+index + i].amount }}</span>
                  </div>

                  <div class="jspace">
                    <span style="font-weight: 600">Precio</span>

                    <div class="divcol" style="gap: 5px">
                      <div class="acenter bold" style="gap: 5px">
                        <span>{{ carouselFavoritos[+index + i].price }}</span>
                        <img
                          src="~/assets/sources/logos/near.svg"
                          alt="near"
                          style="filter: invert(100%); --w: 0.8em"
                        />
                      </div>
                      <span style="--c: rgba(0, 0, 0, 0.5)"
                        >~ $
                        {{ conversion(carouselFavoritos[+index + i].price) }}</span
                      >
                    </div>
                  </div>

                  <div class="container-tags">
                    <v-chip
                      v-for="n2 in carouselFavoritos[+index + i].tags"
                      :key="n2"
                      color="var(--primary)"
                      small
                      >{{ n2 }}</v-chip
                    >
                  </div>
                </v-card>
              </template>
            </template>
          </v-carousel-item>
        </template>
      </v-carousel>
      <div class="end">
        <v-btn text width="max-content" class="bold">
          <span style="--c: var(--primary)">Ver todos</span>
          <v-icon color="var(--secondary)">mdi-chevron-right</v-icon>
        </v-btn>
      </div>
   </section>
   <!-- autores favoritos -->
   <section id="autores">
    <aside class="titulo pb-8">
        <div style="display: flex">
          <span class="h7_em clr-morado">Autores favoritos</span>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <div class="content-alert"
                v-bind="attrs"
                 v-on="on">
                <v-icon id="miIcon" color="var(--primary)">mdi-information</v-icon>
              </div>
            </template> 
            Alerta     
          </v-tooltip>
        </div>
      </aside>
      <section class="container-autores">        
        <v-carousel
          class="container-autores--content"
          v-model="modelAutores"
          height="max-content"
          hide-delimiters
          :show-arrows="false"
        >
          <div class="pr-0 pr-sm-16">
            <v-btn icon @click="modelAutores--">
              <img      
                style="width:20px;"          
                src="~/assets/sources/icons/flechaizquierda.png"
                alt="flecha izquierda"
              />
            </v-btn>
          </div>         

          <template v-for="(item, index) in dataAutores">
            <v-carousel-item
              v-if="
                (index + 1) % columnsAutores() === 1 || columnsAutores() === 1
              "
              :key="index"
            >
              <div
                v-for="(n, i) in columnsAutores()"
                :key="i"
                class="containerAvatar"
              >
                <template v-if="+index + i < dataAutores.length">
                  <div class="contentBoton end">
                    <v-btn
                      icon
                      @click="
                        dataAutores[+index + i].like =
                          !dataAutores[+index + i].like
                      "
                    >
                      <v-icon
                        >mdi-heart{{
                          dataAutores[+index + i].like ? '' : '-outline'
                        }}</v-icon
                      >
                    </v-btn>
                  </div>
                  <v-avatar class="bottomAvatar" width="75px" height="75px">
                    <img :src="item.img" alt="Avatar" />
                  </v-avatar>
                  <div class="contParteInferior">
                    <b
                      ><span class="h12_em clr-rosa center">{{
                        item.nombre
                      }}</span></b
                    >
                    <div class="divrow center">
                      <v-icon
                        v-for="(item, ie) in icons"
                        :key="ie"
                        size="20px"
                        color="yellow darken-1"
                      >
                        {{ item.icon }}
                      </v-icon>
                    </div>
                  </div>
                </template>
              </div>
            </v-carousel-item>
          </template>

          <div class="pl-0 pl-sm-16">
            <v-btn icon @click="modelAutores++">
              <img   
                 style="width:20px"              
                src="~/assets/sources/icons/flechaderecha.png"
                alt="flecha derecha"
              />
            </v-btn>
          </div>
        </v-carousel>
      </section>
   </section>
   <!-- mis compras -->
   <section id="compras">
    <aside class="titulo">
        <div>
          <span class="h7_em clr-morado">Mis compras</span>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <div class="content-alert"
                v-bind="attrs"
                 v-on="on">
                <v-icon id="miIcon" color="var(--primary)">mdi-information</v-icon>
              </div>
            </template> 
            Alerta     
          </v-tooltip>
        </div>

        <div>
          <v-btn icon @click="modelCompras--">
            <v-icon size="4em">mdi-menu-left</v-icon>
          </v-btn>
          <v-btn icon @click="modelCompras++">
            <v-icon size="4em">mdi-menu-right</v-icon>
          </v-btn>
        </div>
      </aside>

      <v-carousel
        id="sectionCarousel--content"
        v-model="modelCompras"
        height="max-content"
        hide-delimiters
        :show-arrows="false"
       >
        <template v-for="(item, index) in CarouselCompras">
          <v-carousel-item
            v-if="
              (index + 1) % columnsCarousel() === 1 || columnsCarousel() === 1
            "
            :key="index"
            >
            <template v-for="(n, i) in columnsCarousel()">
              <template v-if="+index + i < CarouselCompras.length">
                <v-card :key="i" class="card divcol">
                  <div class="container-img">
                    <v-btn
                      icon
                      @click="
                        CarouselCompras[+index + i].like =
                          !CarouselCompras[+index + i].like
                      "
                    >
                      <v-icon
                        >mdi-heart{{
                          CarouselCompras[+index + i].like ? '' : '-outline'
                        }}</v-icon
                      >
                    </v-btn>
                    <img
                      :src="CarouselCompras[+index + i].img"
                      :alt="`${CarouselCompras[+index + i].name} image`"
                    />
                    <span class="wallet">{{
                      CarouselCompras[+index + i].wallet
                    }}</span>
                  </div>

                  <a>{{ CarouselCompras[+index + i].name }}</a>
                  <div class="space">
                    <span style="font-weight: 600">Cantidad</span>
                    <span>{{ CarouselCompras[+index + i].amount }}</span>
                  </div>

                  <div class="jspace">
                    <span style="font-weight: 600">Precio</span>

                    <div class="divcol" style="gap: 5px">
                      <div class="acenter bold" style="gap: 5px">
                        <span>{{ CarouselCompras[+index + i].price }}</span>
                        <img
                          src="~/assets/sources/logos/near.svg"
                          alt="near"
                          style="filter: invert(100%); --w: 0.8em"
                        />
                      </div>
                      <span style="--c: rgba(0, 0, 0, 0.5)"
                        >~ $
                        {{ conversion(CarouselCompras[+index + i].price) }}</span
                      >
                    </div>
                  </div>

                  <div class="container-tags">
                    <v-chip
                      v-for="n2 in CarouselCompras[+index + i].tags"
                      :key="n2"
                      color="var(--primary)"
                      small
                      >{{ n2 }}</v-chip
                    >
                  </div>
                </v-card>
              </template>
            </template>
          </v-carousel-item>
        </template>
      </v-carousel>
      <div class="end">
        <v-btn text width="max-content" class="bold">
          <span style="--c: var(--primary)">Ver todos</span>
          <v-icon color="var(--secondary)">mdi-chevron-right</v-icon>
        </v-btn>
      </div>
   </section>
   
  </section>
</template>

<script>
export default {
  name: 'EditarPerfil',
  data() {
    return {
      like: false,
      search: '',
      modelFavoritos: 0,
      modelAutores: 0,
      modelCompras: 0,  

      historiasCard:[
      {
        img:require('~/assets/sources/images/ImgCarrusel2.png'),
        alt:'historias',
        nameObra:'Nombre Completo del Libro, Novela u Obra',
        public:'Publicado',
        parrafo:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas temporibus harum repudiandae expedita quisquam veniam, facilis quae provident libero magni nisi a, accusantium perferendis, voluptates reiciendis non. Ullam, facilis culpa. facilis quae provident libero magni nisi a, accusantium perferendis, voluptates reiciendis non.',
        cant:'1246',
        precio:'124.56',
        montoDolar:'252.45',
      },
      {
        img:require('~/assets/sources/images/ImgCarrusel3.png'),
        alt:'historias',
        nameObra:'Nombre Completo del Libro, Novela u Obra',
        public:'Publicado',
        parrafo:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas temporibus harum repudiandae expedita quisquam veniam, facilis quae provident libero magni nisi a, accusantium perferendis, voluptates reiciendis non. Ullam, facilis culpa. facilis quae provident libero magni nisi a, accusantium perferendis, voluptates reiciendis non.',
        cant:'1246',
        precio:'124.56',
        montoDolar:'252.45',
      },
      {
        img:require('~/assets/sources/images/ImgCarrusel4.png'),
        alt:'historias',
        nameObra:'Nombre Completo del Libro, Novela u Obra',
        public:'Publicado',
        parrafo:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas temporibus harum repudiandae expedita quisquam veniam, facilis quae provident libero magni nisi a, accusantium perferendis, voluptates reiciendis non. Ullam, facilis culpa. facilis quae provident libero magni nisi a, accusantium perferendis, voluptates reiciendis non.',
        cant:'1246',
        precio:'124.56',
        montoDolar:'252.45',
      },
    ],
      icons2: [
      {
        img:require('~/assets/sources/icons/noti.png'),
        alt:'icono',
        cant:'2',
      },
      {
        img:require('~/assets/sources/icons/vistas.png'),
        alt:'visitas',
        cant:'12',
      },
      {
        img:require('~/assets/sources/icons/estrella.png'),
        alt:'estrellas',
        cant:'3.5',
      },
      ],

      historias_colecciones:[
        {
          cant:12,
        },
        {
          cant:125,
        }
      ],
      tags: [
        { name: 'Tag 1' },
        { name: 'Tag 2' },
        { name: 'Obra gratis' },
        { name: 'Pago' },
        { name: 'Pago' },
        { name: 'Libro culminado' },
        // { name: 'Capitulos gratis' },
      ],
      tags1: [
        { name: 'Tag 1' },
        { name: 'Tag 2' },
        { name: 'Obra gratis' },
        { name: 'Pago' },
        { name: 'Libro culminado' },
        // { name: 'Capitulos gratis' },
      ],
      icons: [
        { icon: 'mdi-star' },
        { icon: 'mdi-star' },
        { icon: 'mdi-star' },
        { icon: 'mdi-star' },
        { icon: 'mdi-star' },
      ],
      redesSociales: [
        {
          img: require('~/assets/sources/icons/clip.png'),
          ruta:'#',
        },
        {
          img: require('~/assets/sources/icons/twitter.png'),
          ruta:'#',
        },
        {
          img: require('~/assets/sources/icons/discord.png'),
          ruta:'#',
        },
        {
          img: require('~/assets/sources/icons/telegram.png'),
          ruta:'',
        },        
      ],

      CarouselCompras: [
        {
          img: require('~/assets/sources/images/ImgCarrusel1.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag1', 'tag3'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/ImgCarrusel2.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/ImgCarrusel3.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/ImgCarrusel4.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/img4.jpeg'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/ImgCarrusel1.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag1', 'tag3'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/ImgCarrusel2.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/ImgCarrusel3.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/ImgCarrusel4.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/img4.jpeg'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
      ],
      carouselFavoritos: [
        {
          img: require('~/assets/sources/images/ImgCarrusel1.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag1', 'tag3'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/ImgCarrusel2.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/ImgCarrusel3.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/ImgCarrusel4.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/img4.jpeg'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/ImgCarrusel1.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag1', 'tag3'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/ImgCarrusel2.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/ImgCarrusel3.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/ImgCarrusel4.png'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
        {
          img: require('~/assets/sources/images/img4.jpeg'),
          wallet: 'username.near',
          name: 'nombre de kubro u obra',
          amount: 1246,
          price: 124.56,
          tags: ['tag2', 'tag5'],
          like: false,
        },
      ],
      dataAutores: [
        {
          img: require('~/assets/sources/images/happy-1836445_1920.jpg'),
          wallet: 'username.near',
          like: false,
          nombre: 'Jose David 3233',
        },
        {
          img: require('~/assets/sources/images/happy-1836445_1920.jpg'),
          wallet: 'username.near',
          like: false,
          nombre: 'Jose David 3233',
        },
        {
          img: require('~/assets/sources/images/happy-1836445_1920.jpg'),
          wallet: 'username.near',
          like: false,
          nombre: 'Jose David 3233',
        },
        {
          img: require('~/assets/sources/images/happy-1836445_1920.jpg'),
          wallet: 'username.near',
          like: false,
          nombre: 'Jose David 3233',
        },
        {
          img: require('~/assets/sources/images/happy-1836445_1920.jpg'),
          wallet: 'username.near',
          like: false,
          nombre: 'Jose David 3233',
        },
      ],      
    }
  },
  mounted() {
    // resize listener
    window.addEventListener('resize', () => {
      if (this.$route.path === '/perfil') {
        // listener reload columns in caraousel        
        const reloadAutores = this.modelAutores
        this.modelAutores = -1
        this.modelAutores = reloadAutores

        const reloadNuevos = this.modelFavoritos
        this.modelFavoritos = -1
        this.modelFavoritos = reloadNuevos

        const reloadObrasCompletadas = this.modelCompras
        this.modelCompras = -1
        this.modelCompras = reloadObrasCompletadas
      }
    })
  },
  methods: {
    conversion(price) {
      return price / 2
    },    
    columnsCarousel() {
      if (window.innerWidth >= 1300) {
        return 5
      } else if (window.innerWidth >= 1000) {
        return 4
      } else if (window.innerWidth >= 800) {
        return 3
      } else if (window.innerWidth >= 580) {
        return 2
      } else {
        return 1
      }
    },
    columnsAutores() {
      if (window.innerWidth >= 1300) {
        return 4
      } else if (window.innerWidth >= 800) {
        return 3
      } else if (window.innerWidth >= 600) {
        return 2
      } else {
        return 1
      }
    },
  },
}
</script>


<style src="~/assets/styles/components/sections/perfil.scss" lang="scss" />