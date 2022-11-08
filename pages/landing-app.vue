<template>
  <section id="content" class="overflow">
    <v-row id="section1">
      <v-col
        id="obras"
        class="center margenes"
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
      >
        <img
          class="image"
          src="~/assets/sources/images/leyendo.png"
          alt="imagen"
        />
        <div class="divPrincipal">
          <div class="h6_em espacio subtitulos text-center">
            <span>Obras del Mes</span>
          </div>

          <div class="center">
            <v-carousel>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              >
                <div>
                  <div class="alinearMarcadorLibro pr-8">
                    <img
                      class="marcadorLibro"
                      src="~/assets/sources/icons/marcador.png"
                      alt="marcador de libro"
                    />
                  </div>
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
        </div>
      </v-col>

      <v-col class="margenInferior" cols="12" sm="12" md="6" lg="6" xl="6">
        <div class="subtitulos h6_em clr-morado divrow pr-md-14">
          <span class="text-center text-md-right" style="line-height: 120%">
            Escoge entre este mundo de opciones que todos creamos
          </span>
        </div>
        <div class="alinearLibro">
          <img
            class="imgLibro"
            src="~/assets/sources/images/g2674.png"
            alt="imagen libro"
          />
        </div>
        <aside class="center">
          <div id="searchStake" class="col-9 col-sm-9 col-md-10 col-lg-10">
            <v-text-field              
              v-model="search"
              placeholder="Obra / Autor / Tema / Precio / Tag / Genero / Libros Libres"
              solo
              style="font-size: 10px"
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
        <aside class="center">
          <div class="linea mt-5 mb-12">
            <v-divider></v-divider>
          </div>
        </aside>
        <div class="center h6_em clr-rosa">
          <span class="text-center" style="line-height: 120%"
            >Nombre completo del libro, novela u obra</span
          >
        </div>
        <div class="parrafo margenesP h10_em">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            laudantium itaque sit consectetur fugit odit architecto eaque ex
            ipsam. Obcaecati tempora quam ipsa quasi maiores corporis error
            saepe rerum ducimus! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Vel reiciendis impedit quam quis nihil. Veritatis
            hic corrupti nihil dolore excepturi numquam tempora, quibusdam
            voluptate. Ipsam pariatur nobis impedit voluptates tempora?
          </p>
        </div>
        <section class="center">
          <div class="avatarSeccion1">
            <div class="divcol center">
              <v-avatar class="bottomAvatar" width="55px" height="55px">
                <img
                  src="~/assets/sources/images/happy-1836445_1920.jpg"
                  alt="Avatar"
                />
              </v-avatar>
            </div>
            <div class="contIcons pl-md-2">
              <b
                ><span class="h12_em clr-rosa end pb-sm-2"
                  >Jose David 3233</span
                ></b
              >
              <div class="divrow">
                <v-icon
                  v-for="(item, i) in icons"
                  :key="i"
                  size="20px"
                  color="yellow darken-1"
                >
                  {{ item.icon }}
                </v-icon>
              </div>
            </div>
          </div>
          <img
            class="pl-4 pr-4"
            src="~/assets/sources/icons/Linea1.png"
            alt="linea"
          />
          <div class="seccion2">
            <div v-for="(item, index) in tags" :key="index" class="tag center">
              <span class="h12_em">{{ item.name }}</span>
            </div>
            <div class="tag center" style="background-color: var(--clr-title)">
              <span class="h12_em">Capítulos gratis</span>
            </div>
          </div>
          <img
            class="pl-4 pr-4"
            src="~/assets/sources/icons/Linea1.png"
            alt="linea"
          />
          <div class="seccion3">
            <div class="content1">
              <span>
                <img src="~/assets/sources/icons/near.png" alt="near" />
                124.56 NEAR
              </span>
            </div>
            <div class="content2">
              <span class="h11_em">
                <v-icon> mdi-approximately-equal </v-icon>
                $252.45
              </span>
            </div>
          </div>
        </section>
        <aside class="center">
          <div class="linea mt-5 mb-12">
            <v-divider></v-divider>
          </div>
        </aside>
      </v-col>
    </v-row>

    <v-row id="section2">
      <!-- Carousel Recomendados -->
      <aside class="titulo">
        <div>
          <span class="h7_em clr-morado">Recomendados</span>
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
          <v-btn icon @click="modelCarousel--">
            <v-icon size="4em">mdi-menu-left</v-icon>
          </v-btn>
          <v-btn icon @click="modelCarousel++">
            <v-icon size="4em">mdi-menu-right</v-icon>
          </v-btn>
        </div>
      </aside>

      <v-carousel
        id="section2--content"
        v-model="modelCarousel"
        height="max-content"
        hide-delimiters
        :show-arrows="false"
      >
        <template v-for="(item, index) in dataCarousel">
          <v-carousel-item
            v-if="
              (index + 1) % columnsCarousel() === 1 || columnsCarousel() === 1
            "
            :key="index"
          >
            <template v-for="(n, i) in columnsCarousel()">
              <template v-if="+index + i < dataCarousel.length">
                <v-card :key="i" class="card divcol">
                  <div class="container-img">
                    <v-btn
                      icon
                      @click="
                        dataCarousel[+index + i].like =
                          !dataCarousel[+index + i].like
                      "
                    >
                      <v-icon
                        >mdi-heart{{
                          dataCarousel[+index + i].like ? '' : '-outline'
                        }}</v-icon
                      >
                    </v-btn>
                    <img
                      :src="dataCarousel[+index + i].img"
                      :alt="`${dataCarousel[+index + i].name} image`"
                    />
                    <span class="wallet">{{
                      dataCarousel[+index + i].wallet
                    }}</span>
                  </div>

                  <a>{{ dataCarousel[+index + i].name }}</a>
                  <div class="space">
                    <span style="font-weight: 600">Cantidad</span>
                    <span>{{ dataCarousel[+index + i].amount }}</span>
                  </div>

                  <div class="jspace">
                    <span style="font-weight: 600">Precio</span>

                    <div class="divcol" style="gap: 5px">
                      <div class="acenter bold" style="gap: 5px">
                        <span>{{ dataCarousel[+index + i].price }}</span>
                        <img
                          src="~/assets/sources/logos/near.svg"
                          alt="near"
                          style="filter: invert(100%); --w: 0.8em"
                        />
                      </div>
                      <span style="--c: rgba(0, 0, 0, 0.5)"
                        >~ $
                        {{ conversion(dataCarousel[+index + i].price) }}</span
                      >
                    </div>
                  </div>

                  <div class="container-tags">
                    <v-chip
                      v-for="n2 in dataCarousel[+index + i].tags"
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

      <v-btn text width="max-content" style="margin-left: auto" class="bold">
        <span style="--c: var(--primary)">Más</span>
        <v-icon color="var(--secondary)">mdi-chevron-right</v-icon>
      </v-btn>

      <!-- Carousel Autores estrellas -->
      <aside class="titulo pb-8">
        <div style="display: flex">
          <span class="h7_em clr-morado">Autores estrellas</span>
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
        <img
            style="width: 10%; min-width: 70px;"
            id="Broche"
            src="~/assets/sources/images/BrocheOro.png"
            alt="Broche Dorado"
          />
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

      <!-- Carousel Nuevos -->
      <aside class="titulo">
        <div>
          <span class="h7_em clr-morado">Nuevos</span>
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
          <v-btn icon @click="modelNuevos--">
            <v-icon size="4em">mdi-menu-left</v-icon>
          </v-btn>
          <v-btn icon @click="modelNuevos++">
            <v-icon size="4em">mdi-menu-right</v-icon>
          </v-btn>
        </div>
      </aside>

      <v-carousel
        id="section2--content"
        v-model="modelNuevos"
        height="max-content"
        hide-delimiters
        :show-arrows="false"
      >
        <template v-for="(item, index) in dataCarouselNuevo">
          <v-carousel-item
            v-if="
              (index + 1) % columnsCarousel() === 1 || columnsCarousel() === 1
            "
            :key="index"
          >
            <template v-for="(n, i) in columnsCarousel()">
              <template v-if="+index + i < dataCarouselNuevo.length">
                <v-card :key="i" class="card divcol">
                  <div class="container-img">
                    <v-btn
                      icon
                      @click="
                        dataCarouselNuevo[+index + i].like =
                          !dataCarouselNuevo[+index + i].like
                      "
                    >
                      <v-icon
                        >mdi-heart{{
                          dataCarouselNuevo[+index + i].like ? '' : '-outline'
                        }}</v-icon
                      >
                    </v-btn>
                    <img
                      :src="dataCarouselNuevo[+index + i].img"
                      :alt="`${dataCarouselNuevo[+index + i].name} image`"
                    />
                    <span class="wallet">{{
                      dataCarouselNuevo[+index + i].wallet
                    }}</span>
                  </div>

                  <a>{{ dataCarouselNuevo[+index + i].name }}</a>
                  <div class="space">
                    <span style="font-weight: 600">Cantidad</span>
                    <span>{{ dataCarouselNuevo[+index + i].amount }}</span>
                  </div>

                  <div class="jspace">
                    <span style="font-weight: 600">Precio</span>

                    <div class="divcol" style="gap: 5px">
                      <div class="acenter bold" style="gap: 5px">
                        <span>{{ dataCarouselNuevo[+index + i].price }}</span>
                        <img
                          src="~/assets/sources/logos/near.svg"
                          alt="near"
                          style="filter: invert(100%); --w: 0.8em"
                        />
                      </div>
                      <span style="--c: rgba(0, 0, 0, 0.5)"
                        >~ $
                        {{ conversion(dataCarouselNuevo[+index + i].price) }}</span
                      >
                    </div>
                  </div>

                  <div class="container-tags">
                    <v-chip
                      v-for="n2 in dataCarouselNuevo[+index + i].tags"
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

      <v-btn text width="max-content" style="margin-left: auto" class="bold">
        <span style="--c: var(--primary)">Más</span>
        <v-icon color="var(--secondary)">mdi-chevron-right</v-icon>
      </v-btn>

      <!-- Generos mas leidos -->
      <aside class="titulo pb-8">
        <div>
          <span class="h7_em clr-morado">Géneros más leidos</span>
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

      <section style="width:100%" class="pb-6">   
        <v-row class="masLeidos">      
          <v-col sm="4" md="4" v-for="(item,i) in generosMasLeidos" :key="i"
           class="center" style="height: max-content">  
            <v-btn class="botones">
              {{item.name}}
            </v-btn>
          </v-col>  
        </v-row>     
      </section>
      <!-- Carousel obras completadas -->
      <aside class="titulo">
        <div>
          <span class="h7_em clr-morado">Obras Completadas</span>
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
          <v-btn icon @click="modelObrasCompletadas--">
            <v-icon size="4em">mdi-menu-left</v-icon>
          </v-btn>
          <v-btn icon @click="modelObrasCompletadas++">
            <v-icon size="4em">mdi-menu-right</v-icon>
          </v-btn>
        </div>
      </aside>

      <v-carousel
        id="section2--content"
        v-model="modelObrasCompletadas"
        height="max-content"
        hide-delimiters
        :show-arrows="false"
      >
        <template v-for="(item, index) in CarouselObrasCompletadas">
          <v-carousel-item
            v-if="
              (index + 1) % columnsCarousel() === 1 || columnsCarousel() === 1
            "
            :key="index"
          >
            <template v-for="(n, i) in columnsCarousel()">
              <template v-if="+index + i < CarouselObrasCompletadas.length">
                <v-card :key="i" class="card divcol">
                  <div class="container-img">
                    <v-btn
                      icon
                      @click="
                        CarouselObrasCompletadas[+index + i].like =
                          !CarouselObrasCompletadas[+index + i].like
                      "
                    >
                      <v-icon
                        >mdi-heart{{
                          CarouselObrasCompletadas[+index + i].like ? '' : '-outline'
                        }}</v-icon
                      >
                    </v-btn>
                    <img
                      :src="CarouselObrasCompletadas[+index + i].img"
                      :alt="`${CarouselObrasCompletadas[+index + i].name} image`"
                    />
                    <span class="wallet">{{
                      CarouselObrasCompletadas[+index + i].wallet
                    }}</span>
                  </div>

                  <a>{{ CarouselObrasCompletadas[+index + i].name }}</a>
                  <div class="space">
                    <span style="font-weight: 600">Cantidad</span>
                    <span>{{ dataCarousel[+index + i].amount }}</span>
                  </div>

                  <div class="jspace">
                    <span style="font-weight: 600">Precio</span>

                    <div class="divcol" style="gap: 5px">
                      <div class="acenter bold" style="gap: 5px">
                        <span>{{ CarouselObrasCompletadas[+index + i].price }}</span>
                        <img
                          src="~/assets/sources/logos/near.svg"
                          alt="near"
                          style="filter: invert(100%); --w: 0.8em"
                        />
                      </div>
                      <span style="--c: rgba(0, 0, 0, 0.5)"
                        >~ $
                        {{ conversion(CarouselObrasCompletadas[+index + i].price) }}</span
                      >
                    </div>
                  </div>

                  <div class="container-tags">
                    <v-chip
                      v-for="n2 in CarouselObrasCompletadas[+index + i].tags"
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

      <v-btn text width="max-content" style="margin-left: auto" class="bold">
        <span style="--c: var(--primary)">Más</span>
        <v-icon color="var(--secondary)">mdi-chevron-right</v-icon>
      </v-btn>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'ObrasDeMes',
  data() {
    return {
      search: '',
      modelCarousel: 0,
      modelAutores: 0,
      modelNuevos: 0,
      modelObrasCompletadas: 0,      

      tags: [
        { name: 'Tag 1' },
        { name: 'Tag 2' },
        { name: 'Obra gratis' },
        { name: 'Pago' },
        { name: 'Libro culminado' },
      ],
      icons: [
        { icon: 'mdi-star' },
        { icon: 'mdi-star' },
        { icon: 'mdi-star' },
        { icon: 'mdi-star' },
        { icon: 'mdi-star' },
      ],

      generosMasLeidos:[
        {
          name:'Romance',
        },
        {
          name:'Suspenso',
        },
        {
          name:'Comic',
        },
      ],
      items: [
        {
          src: require('~/assets/sources/images/portada.jpeg'),
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],

      CarouselObrasCompletadas: [
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
      dataCarouselNuevo: [
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
      dataCarousel: [
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
    }
  },
  mounted() {
    // resize listener
    window.addEventListener('resize', () => {
      if (this.$route.path === '/ObrasDeMes') {
        // listener reload columns in caraousel
        const reload = this.modelCarousel
        this.modelCarousel = -1
        this.modelCarousel = reload

        const reloadAutores = this.modelAutores
        this.modelAutores = -1
        this.modelAutores = reloadAutores

        const reloadNuevos = this.modelNuevos
        this.modelAutores = -1
        this.modelAutores = reloadNuevos

        const reloadObrasCompletadas = this.modelObrasCompletadas
        this.modelAutores = -1
        this.modelAutores = reloadObrasCompletadas
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


<style src="~/assets/styles/components/sections/ObrasDeMes.scss" lang="scss" />