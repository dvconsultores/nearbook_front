<template>
  <section id="content" class="overflow">
    <section id="sectionPrincipal">
      <div class="div1">
        <div
          class="h6_em col-12 col-sm-7"
          style="text-align: center; line-height: 120%"
        >
          <span> Nombre completo del libro, novela u obra </span>
        </div>
      </div>
      <aside class="divrow">
        <div class="divcol" style="width: 28%; min-width: 200px">
          <div style="display: flex; justify-content: end" class="pr-8">
            <img
              class="marcadorLibro"
              src="~/assets/sources/icons/marcador.png"
              alt="marcador de libro"
            />
          </div>
          <img
            class="imagen"
            src="~/assets/sources/images/portada.jpeg"
            alt="imagen libro"
          />
        </div>
        <div class="divcol col-12 col-sm-7 h10_em">
          <p class="parrafo">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos et ex
            inventore, nostrum eligendi esse sapiente impedit aperiam facilis
            nobis! Molestias obcaecati itaque sed est maxime repellendus natus.
            Sed, voluptatibus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores enim quaerat minus pariatur, soluta
            ipsa fuga alias consequatur perspiciatis omnis in dignissimos non
            iusto ad nihil rerum delectus tempore consectetur.
          </p>
          <section class="center">
            <div class="avatarSeccion1 center">
              <div class="divcol center pl-sm-2">
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
              <span class="h10_em">Cantidad total</span>
              <span class="clr-rosa h11_em pt-1">257</span>
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
          <section class="center pt-8">
            <v-btn class="btn">
              <span class="h10_em">Comprar</span>
            </v-btn>
          </section>
        </div>
      </aside>
    </section>
    <section id="sectionInputs">
      <div class="col-12 LibroCompleto center">
        <span class="h7_em">Libro Completo</span>
      </div>

      <div class="capLibres">
        <span class="h7_em">Capítulos Libres</span>
      </div>
      <div class="contCapLibres center gap2">
        <div
          v-for="(item, index) in capLibres"
          :key="index"
          class="contenedorDiv"
        >
          <div class="div2">
            <span class="h9_em">{{ item.nameCapitulo }}</span>
          </div>
          <a :href="item.ruta" target="_blank" rel="noopener noreferrer">
            <div class="div3">
              <img :src="item.img" alt="link de acceso" />
            </div>
          </a>
        </div>
      </div>

      <div class="capLibres">
        <span class="h7_em">Capítulos - Pagos</span>
      </div>
      <div class="contCapLibres center gap2">
        <div
          v-for="(item, index) in capPagos"
          :key="index"
          class="contenedorDiv"
          >
          <div class="div2">
            <span class="h9_em">{{ item.nameCapitulo }}</span>
          </div>
          <a :href="item.ruta" target="_blank" rel="noopener noreferrer">
            <div class="div3">
              <img :src="item.img" alt="link de acceso" />
            </div>
          </a>
        </div>
      </div>
      <section class="center">
        <aside class="linea pt-16">
          <v-divider></v-divider>
        </aside>
      </section>
    </section>

    <section id="sectionCarousel">
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
          <v-btn icon @click="modelCarouselDos--">
            <v-icon size="4em">mdi-menu-left</v-icon>
          </v-btn>
          <v-btn icon @click="modelCarouselDos++">
            <v-icon size="4em">mdi-menu-right</v-icon>
          </v-btn>
        </div>
      </aside>

      <v-carousel
        id="sectionCarousel--content"
        v-model="modelCarouselDos"
        height="max-content"
        hide-delimiters
        :show-arrows="false"
       >
        <template v-for="(item, index) in dataCarouselDos">
          <v-carousel-item
            v-if="
              (index + 1) % columnsCarousel() === 1 || columnsCarousel() === 1
            "
            :key="index"
            >
            <template v-for="(n, i) in columnsCarousel()">
              <template v-if="+index + i < dataCarouselDos.length">
                <v-card :key="i" class="card divcol">
                  <div class="container-img">
                    <v-btn
                      icon
                      @click="
                        dataCarouselDos[+index + i].like =
                          !dataCarouselDos[+index + i].like
                      "
                    >
                      <v-icon
                        >mdi-heart{{
                          dataCarouselDos[+index + i].like ? '' : '-outline'
                        }}</v-icon
                      >
                    </v-btn>
                    <img
                      :src="dataCarouselDos[+index + i].img"
                      :alt="`${dataCarouselDos[+index + i].name} image`"
                    />
                    <span class="wallet">{{
                      dataCarouselDos[+index + i].wallet
                    }}</span>
                  </div>

                  <a>{{ dataCarouselDos[+index + i].name }}</a>
                  <div class="space">
                    <span style="font-weight: 600">Cantidad</span>
                    <span>{{ dataCarouselDos[+index + i].amount }}</span>
                  </div>

                  <div class="jspace">
                    <span style="font-weight: 600">Precio</span>

                    <div class="divcol" style="gap: 5px">
                      <div class="acenter bold" style="gap: 5px">
                        <span>{{ dataCarouselDos[+index + i].price }}</span>
                        <img
                          src="~/assets/sources/logos/near.svg"
                          alt="near"
                          style="filter: invert(100%); --w: 0.8em"
                        />
                      </div>
                      <span style="--c: rgba(0, 0, 0, 0.5)"
                        >~ $
                        {{ conversion(dataCarouselDos[+index + i].price) }}</span
                      >
                    </div>
                  </div>

                  <div class="container-tags">
                    <v-chip
                      v-for="n2 in dataCarouselDos[+index + i].tags"
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
      <v-btn text width="max-content" style="margin-left: auto" class="bold">        
          <span style="--c: var(--primary)">Más</span>             
        <v-icon color="var(--secondary)">mdi-chevron-right</v-icon>
      </v-btn>
    </div>   
    </section>
  </section>
</template>

<script>
export default {
  name: 'LibroCompleto',
  data() {
    return {
      search: '',
      modelCarouselDos: 0,
      dataCarouselDos: [
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
      ],      
      icons: [
        { icon: 'mdi-star' },
        { icon: 'mdi-star' },
        { icon: 'mdi-star' },
        { icon: 'mdi-star' },
        { icon: 'mdi-star' },
      ],
      capPagos: [
        {
          nameCapitulo: 'Capitulo 1 - Nombre del Capítulo',
          ruta: '#',
          img: require('~/assets/sources/icons/flecha.png'),
        },
        {
          nameCapitulo: 'Capitulo 1 - Nombre del Capítulo',
          ruta: '#',
          img: require('~/assets/sources/icons/flecha.png'),
        },
        {
          nameCapitulo: 'Capitulo 1 - Nombre del Capítulo',
          ruta: '#',
          img: require('~/assets/sources/icons/flecha.png'),
        },
        {
          nameCapitulo: 'Capitulo 1 - Nombre del Capítulo',
          ruta: '#',
          img: require('~/assets/sources/icons/flecha.png'),
        },
        {
          nameCapitulo: 'Capitulo 1 - Nombre del Capítulo',
          ruta: '#',
          img: require('~/assets/sources/icons/flecha.png'),
        },
        {
          nameCapitulo: 'Capitulo 1 - Nombre del Capítulo',
          ruta: '#',
          img: require('~/assets/sources/icons/flecha.png'),
        },
        {
          nameCapitulo: 'Capitulo 1 - Nombre del Capítulo',
          ruta: '#',
          img: require('~/assets/sources/icons/flecha.png'),
        },
        {
          nameCapitulo: 'Capitulo 1 - Nombre del Capítulo',
          ruta: '#',
          img: require('~/assets/sources/icons/flecha.png'),
        },
        {
          nameCapitulo: 'Capitulo 1 - Nombre del Capítulo',
          ruta: '#',
          img: require('~/assets/sources/icons/flecha.png'),
        },
      ],
      capLibres: [
        {
          nameCapitulo: 'Capitulo 1 - Nombre del Capítulo',
          ruta: '#',
          img: require('~/assets/sources/icons/flecha.png'),
        },
        {
          nameCapitulo: 'Capitulo 1 - Nombre del Capítulo',
          ruta: '#',
          img: require('~/assets/sources/icons/flecha.png'),
        },
        {
          nameCapitulo: 'Capitulo 1 - Nombre del Capítulo',
          ruta: '#',
          img: require('~/assets/sources/icons/flecha.png'),
        },
      ],
    }
  },
  mounted() {
    // resize listener
    window.addEventListener('resize', () => {
      // listener reload columns in caraousel
      const reload = this.modelCarouselDos
      this.modelCarouselDos = -1
      this.modelCarouselDos = reload      
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
  },
}
</script>

<style src="~/assets/styles/components/sections/libroCompleto.scss" lang="scss" />