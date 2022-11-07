<template>
  <section id="hero" class="overflow">
    <!-- seccion 1 -->
    <!-- desktop -->
    <v-row id="home">
      <v-col
        class="espaciado clr-morado paddingTexto pb-lg-16 pb-xl-16"
        cols="8"
        sm="7"
        md="6"
        lg="6"
        xl="5"
      >
        <b
          ><span class="h2_em pb-lg-6 pb-xl-16">{{
            $t('subtitlePrincipal')
          }}</span></b
        >
        <p class="h10_em pt-4 parrafo">{{ $t('parrafoPrincipal') }}</p>
        <div class="pt-4 d-none d-md-flex margenBottom pt-lg-6 pt-xl-16">
          <v-btn @click="funConnectWallet()" class="botones mr-6 pa-7 h10">{{
            $t('botonConectarWallet')
          }}</v-btn>
          <v-btn
            @click="funPruebaTestnet()"
            id="btn-blanco"
            class="botones pa-7 h10"
            >{{ $t('botonPruebaTestnet') }}</v-btn
          >
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4" sm="4" md="6" lg="6" xl="6">
        <v-row class="d-none d-md-flex">
          <v-col cols="1" class="libro1">
            <img src="~/assets/sources/images/g2692.png" alt="" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2" class="center d-none d-md-flex">
            <img
              class="libro2"
              src="~/assets/sources/images/g2592.png"
              alt=""
            />
          </v-col>
          <v-col cols="8" class="d-none d-md-flex">
            <img
              class="imagenCentral"
              src="~/assets/sources/images/g25722.png"
              alt=""
            />
          </v-col>
          <v-col cols="2">
            <v-row>
              <v-col class="d-none d-md-flex">
                <img
                  class="libro3"
                  src="~/assets/sources/images/g2610.png"
                  alt=""
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col class="center d-none d-md-flex">
                <img
                  class="imagenGato center"
                  src="~/assets/sources/images/g2562.png"
                  alt=""
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <img
          class="libro4 d-none d-md-flex"
          src="~/assets/sources/images/g2582.png"
          alt=""
        />
        <img
          class="center d-flex d-md-none movilGato"
          src="~/assets/sources/images/g2562.png"
          alt=""
        />
      </v-col>
    </v-row>
    <!-- fin desktop -->
    <!-- botones parte mobile -->
    <v-row>
      <v-col class="pt-0 pt-sm-4 mb-10 d-flex d-md-none center reducirText">
        <v-btn
          @click="funConnectWallet()"
          class="botones mr-4 pa-6 pa-sm-7 h10_em"
          >{{ $t('botonConectarWallet') }}</v-btn
        >
        <v-btn
          @click="funPruebaTestnet()"
          id="btn-blanco"
          class="botones pa-6 pa-sm-7 h10_em"
          >{{ $t('botonPruebaTestnet') }}</v-btn
        >
      </v-col>
    </v-row>
    <!-- fin botones parte mobile -->
    <!-- fin seccion 1 -->

    <!-- seccion 2 -->
    <!-- desktop -->
    <section 
      id="gitbook"
      class="center d-none d-md-flex"
      style="margin-top: -30px; display: inline-block"
    >
      <div class="contentCenter col-md-10 col-lg-9 col-xl-7">
        <v-col cols="3" class="center">
          <b
            ><span class="h9 clr-rosado text-center">{{
              $t('subtitle1')
            }}</span></b
          >
        </v-col>
        <v-row>
          <v-col v-for="(item, i) in $t('avatar')" :key="i">
            <v-avatar class="bottomAvatar" width="65px" height="65px">
              <img :src="item.img" alt="Avatar" />
            </v-avatar>
            <v-icon size="20px" color="yellow darken-1">{{ item.icon }}</v-icon>
            <v-icon size="20px" color="yellow darken-1">{{ item.icon }}</v-icon>
            <v-icon size="20px" color="yellow darken-1">{{ item.icon }}</v-icon>
            <v-icon size="20px" color="yellow darken-1">{{ item.icon }}</v-icon>
            <v-icon size="20px" color="yellow darken-1">{{ item.icon }}</v-icon>
            <v-col class="content">
              <b
                ><span class="h12_em clr-rosado end pb-2">{{
                  item.subtitle
                }}</span></b
              >
              <div id="parrafoAvatar">
                <span class="h12_em clr-morado mb-0">{{ item.parrafo }}</span>
              </div>
            </v-col>
          </v-col>
        </v-row>
      </div>
    </section>

    <v-col class="libro1section2 d-none d-md-flex pr-0 pl-0 pb-0">
      <img src="~/assets/sources/images/g2638.png" alt="" />
    </v-col>

    <v-row id="acercade" class="center d-none d-md-flex ajusteTop">
      <v-col cols="9" xl="7" class="pt-0 cambiarTamH6">
        <b
          ><span class="clr-morado h6_em center pb-8">{{
            $t('subtitle2')
          }}</span></b
        >
        <p class="h10_em text-center parrafo" style="line-height: 24px">
          {{ $t('parrafoNearbook') }}
        </p>
      </v-col>
    </v-row>

    <v-col class="libro2section2 d-none d-md-flex pr-0 pl-0 pb-0 end">
      <img src="~/assets/sources/images/g2674.png" alt="" />
    </v-col>
    <!--fin desktop -->
    <!-- fin seccion 2 -->

    <!-- seccion 3 -->
    <!-- desktop -->
    <section class="d-none d-md-flex center moverSeccion1">
      <div class="div1-fondo"></div>
      <div class="div2-fondo"></div>
      <div class="div3-fondo"></div>
    </section>

    <section class="divrow center d-none d-md-flex moverSeccion2">
      <div class="div1">
        <v-row class="center">
          <div class="divPequeño1 h5 center">1</div>
          <aside>
            <img
              class="reducirImgDesktop"
              src="~/assets/sources/images/path1428.png"
              alt=""
            />
          </aside>
        </v-row>
        <div class="h10 clr-morado subtitle pt-8 pl-7">
          <span>{{ $t('beneficio1') }}</span>
        </div>
        <p class="h11_em" style="line-height: 16px">
          {{ $t('parrafoBeneficio1') }}
        </p>
      </div>
      <div class="div2">
        <v-row class="center">
          <div class="divPequeño2 h5 center">2</div>
          <aside>
            <img
              class="reducirImgDesktop"
              src="~/assets/sources/images/path1428.png"
              alt=""
            />
          </aside>
        </v-row>
        <div class="h10 subtitle pt-8 pl-7" style="--c: var(--bg)">
          <span>{{ $t('beneficio2') }}</span>
        </div>
        <p class="h11_em" style="line-height: 16px">
          {{ $t('parrafoBeneficio2') }}
        </p>
      </div>
      <div class="div3">
        <v-row class="center">
          <div class="divPequeño3 h5 center">3</div>
          <aside>
            <img
              class="reducirImgDesktop"
              src="~/assets/sources/images/path1428.png"
              alt=""
            />
          </aside>
        </v-row>
        <div class="h10 clr-morado subtitle pt-8 pl-7">
          <span>{{ $t('beneficio3') }}</span>
        </div>
        <p class="h11_em" style="line-height: 16px">
          {{ $t('parrafoBeneficio3') }}
        </p>
      </div>
      <div class="div4">
        <v-row class="center">
          <div class="divPequeño4 h5 center">4</div>
          <aside>
            <img
              class="reducirImgDesktop"
              src="~/assets/sources/images/path1428.png"
              alt=""
            />
          </aside>
        </v-row>
        <div class="h10 subtitle pt-8 pl-7" style="--c: var(--bg)">
          <span>{{ $t('beneficio4') }}</span>
        </div>
        <p class="h11_em" style="line-height: 16px">
          {{ $t('parrafoBeneficio4') }}
        </p>
      </div>
    </section>

    <v-col class="libro3section3 d-none d-md-flex pr-0 pl-0 pb-0">
      <img src="~/assets/sources/images/g2656.png" alt="" />
    </v-col>

    <!-- fin desktop -->
    <!-- fin seccion 3 -->

    <!-- desktop -->
    <!-- seccion 4 -->
    <v-col id="equipo" class="d-none d-md-flex center cambiarTamH6">
      <b
        ><span class="clr-morado h6_em center pb-0">{{
          $t('subtitleEquipo')
        }}</span></b
      >
    </v-col>
    <v-col class="center">
      <section
        class="center d-none d-md-flex divcol mt-4 col-md-10 col-lg-9 col-xl-6"
      >
        <v-row>
          <v-col lg="3">
            <v-row class="center">
              <img
                class="imagensection4"
                src="~/assets/sources/images/path1692.png"
                alt=""
              />
              <img
                class="foto1"
                src="~/assets/sources/images/Leyner.png"
                alt=""
              />
            </v-row>
            <v-row>
              <v-col class="pb-0">
                <b><span class="h10 clr-morado center">Leyner Aponte</span></b>
              </v-col>
            </v-row>
            <v-row class="center">
              <v-col cols="10">
                <p class="h11_em text-center parrafo">
                  {{ $t('cargoLeyner') }}
                </p>
              </v-col>
            </v-row>
            <v-row class="center">
              <a class="center" href="https://www.linkedin.com/in/leyner-aponte-vzla/">
                <img
                class="imgIn"
                src="~/assets/sources/icons/g2778.png"
                alt=""
              />
              </a>  
            </v-row>
          </v-col>
          <v-col lg="3">
            <v-row class="center">
              <img
                class="foto2"
                src="~/assets/sources/images/Linda.png"
                alt=""
              />
              <img
                class="imagen2section4"
                src="~/assets/sources/images/path2712.png"
                alt=""
              />
            </v-row>
            <v-row>
              <v-col class="pb-0">
                <b><span class="h10 clr-rosado center">Linda Rosario</span></b>
              </v-col>
            </v-row>
            <v-row class="center">
              <v-col cols="10">
                <p class="h11_em text-center parrafo">{{ $t('cargoLinda') }}</p>
              </v-col>
            </v-row>
            <v-row class="center">
              <a class="center" href="https://www.linkedin.com/in/linda-rosario-duran-5b9559127/">
                <img
                class="imgIn"
                src="~/assets/sources/icons/g2778.png"
                alt=""
              />
              </a>  
            </v-row>
          </v-col>
          <v-col lg="3">
            <v-row class="center">
              <img
                class="imagensection4"
                src="~/assets/sources/images/path1692.png"
                alt=""
              />
              <img
                class="foto1"
                src="~/assets/sources/images/Hector.png"
                alt=""
              />
            </v-row>
            <v-row>
              <v-col class="pb-0">
                <b
                  ><span class="h10 clr-morado center">Hector Palencia</span></b
                >
              </v-col>
            </v-row>
            <v-row class="center">
              <v-col cols="10">
                <p class="h11_em text-center parrafo">
                  {{ $t('cargoHector') }}
                </p>
              </v-col>
            </v-row>
            <v-row class="center">
              <a class="center" href="https://www.linkedin.com/in/hector-rizziero-palencia-micarelli-7b3023176/">
                <img
                class="imgIn"
                src="~/assets/sources/icons/g2778.png"
                alt=""
              />
              </a>  
            </v-row>
          </v-col>
          <v-col lg="3">
            <v-row class="center">
              <img
                class="foto2"
                src="~/assets/sources/images/Alejandria.png"
                alt=""
              />
              <img
                class="imagen2section4"
                src="~/assets/sources/images/path2712.png"
                alt=""
              />
            </v-row>
            <v-row>
              <v-col class="pb-0">
                <b
                  ><span class="h10 clr-rosado center"
                    >Lourdes Alejandría</span
                  ></b
                >
              </v-col>
            </v-row>
            <v-row class="center">
              <v-col cols="6">
                <p class="h11_em text-center parrafo">
                  {{ $t('cargoAlejandria') }}
                </p>
              </v-col>
            </v-row>
            <v-row class="center">
              <a class="center" href="https://www.linkedin.com/in/lourdes-alejandr%C3%ADa/">
                <img
                class="imgIn"
                src="~/assets/sources/icons/g2778.png"
                alt=""
              />
              </a>              
            </v-row>
          </v-col>
        </v-row>
      </section>
    </v-col>
    <!-- fin desktop -->
    <!-- fin seccion 4 -->

    <!-- desktop -->
    <!-- seccion 5 -->
    <v-row
      id="contactanos" class="pt-14 pb-12 d-none d-md-flex center container_dudas cambiarTamH6"
    >
      <v-col md="5" lg="5" xl="3">
        <b
          ><span class="clr-morado h6_em">{{ $t('subtitleDudas') }}</span></b
        >
        <p class="h10_em pt-5 pb-6 parrafo">{{ $t('parrafoDudas') }}</p>
        <v-row>
          <v-col class="pb-0">
            <v-text-field
              rounded
              solo                            
              placeholder="Nombre completo"
              :style="`--tag: '${data}'`"
            >
            </v-text-field>
          </v-col>
          <v-col class="pb-0">
            <v-text-field rounded solo placeholder="Correo">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0 pb-0">
            <v-textarea solo placeholder="Escribe el mensaje">
            </v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0">
            <v-btn class="botones pl-8 pr-8 h10">{{ $t('botonEnviar') }}</v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4" xl="3" style="margin-top: 4%">
        <img
          class="imgMaquinaEscribir"
          src="~/assets/sources/images/g2628.png"
          alt=""
        />
      </v-col>
    </v-row>

    <!-- fin desktop -->
    <!-- fin seccion 5 -->

    <!-- mobile seccion 2 -->
    <section id="git" class="center mt-2 mr-4">
      <v-col cols="2" sm="1" class="libro1mobile d-flex d-md-none pr-0 pl-0">
        <img src="~/assets/sources/images/g2638.png" alt="" />
      </v-col>

      <div class="d-flex d-md-none favoritosmobile pa-4">
        <v-row class="center">
          <v-col cols="12" sm="9">
            <v-col sm="12" class="pa-0 mb-2">
              <b
                ><span class="h9 clr-rosado center pl-7 pl-sm-4 pb-5">{{
                  $t('subtitle1')
                }}</span></b
              >
            </v-col>
            <div v-for="(item, i) in $t('avatar')" :key="i">
              <v-avatar class="bottomAvatar mr-1" width="60px" height="60px">
                <img :src="item.img" alt="Avatar" />
              </v-avatar>
              <v-icon size="20px" color="yellow darken-1">{{
                item.icon
              }}</v-icon>
              <v-icon size="20px" color="yellow darken-1">{{
                item.icon
              }}</v-icon>
              <v-icon size="20px" color="yellow darken-1">{{
                item.icon
              }}</v-icon>
              <v-icon size="20px" color="yellow darken-1">{{
                item.icon
              }}</v-icon>
              <v-icon size="20px" color="yellow darken-1">{{
                item.icon
              }}</v-icon>
              <v-col class="content mb-2">
                <b
                  ><span class="h12_em clr-rosado end pb-2">{{
                    item.subtitle
                  }}</span></b
                >
                <div id="parrafoAvatar">
                  <span class="h12_em clr-morado mb-0">{{ item.parrafo }}</span>
                </div>
              </v-col>
            </div>
          </v-col>
        </v-row>
      </div>

      <v-col cols="2" sm="1" class="libro2mobile d-flex d-md-none pl-0 pr-0">
        <img src="~/assets/sources/images/g2674.png" alt="" />
      </v-col>
    </section>
    <v-row>
      <v-col cols="2" sm="1" class="libro3mobile d-flex d-md-none pl-0 pr-0">
        <img src="~/assets/sources/images/g2656.png" alt="" />
      </v-col>
    </v-row>

    <section id="about" class="center d-flex d-md-none mb-16 mb-sm-6">
      <v-col cols="9">
        <v-row>
          <v-col class="pb-0 cambiarTamH6">
            <b
              ><span class="clr-morado h6_em center pb-5 text-center">{{
                $t('subtitle2')
              }}</span></b
            >
          </v-col>
        </v-row>
        <v-row class="pb-6">
          <v-col class="pt-0">
            <p class="h10_em text-center parrafo" style="line-height: 24px">
              {{ $t('parrafoNearbook') }}
            </p>
          </v-col>
        </v-row>
      </v-col>
    </section>

    <!-- fin mobile seccion 2 -->

    <!-- seccion 3 -->
    <!-- mobile -->
    <section class="d-flex d-md-none center">
      <div class="div1-fondo-mobile"></div>
    </section>

    <section class="divcol d-flex d-md-none pb-16 ajuste-top beneficios">
      <v-row class="center">
        <div class="div1-mobile">
          <v-row class="center">
            <div class="divPequeño1 h5 center mt-7 mt-sm-9">1</div>
            <aside class="end">
              <img
                class="reducirImg"
                src="~/assets/sources/images/path1428.png"
                alt=""
              />
            </aside>
          </v-row>

          <div class="h10 clr-morado pl-sm-7 pl-4 pt-4">
            <span>{{ $t('beneficio1') }}</span>
          </div>
          <p class="h11_em pt-1">{{ $t('parrafoBeneficio1') }}</p>
        </div>

        <div class="div2-mobile">
          <v-row class="center">
            <div class="divPequeño2 h5 center mt-7 mt-sm-9">2</div>
            <aside class="end">
              <img
                class="reducirImg"
                src="~/assets/sources/images/path1428.png"
                alt=""
              />
            </aside>
          </v-row>

          <div class="h10 pl-sm-7 pl-4 pt-4" style="--c: var(--bg)">
            <span>{{ $t('beneficio2') }}</span>
          </div>
          <p class="h11_em pt-1">{{ $t('parrafoBeneficio2') }}</p>
        </div>
      </v-row>
      <v-row class="center">
        <div class="div3-mobile">
          <v-row class="center">
            <div class="divPequeño3 h5 center mt-7 mt-sm-9">3</div>
            <aside class="end">
              <img
                class="reducirImg"
                src="~/assets/sources/images/path1428.png"
                alt=""
              />
            </aside>
          </v-row>

          <div class="h10 clr-morado pl-sm-7 pl-4 pt-4">
            <span>{{ $t('beneficio3') }}</span>
          </div>
          <p class="h11_em pt-1">{{ $t('parrafoBeneficio3') }}</p>
        </div>
        <div class="div4-mobile">
          <v-row class="center">
            <div class="divPequeño4 h5 center mt-7 mt-sm-9">4</div>
            <aside class="end">
              <img
                class="reducirImg"
                src="~/assets/sources/images/path1428.png"
                alt=""
              />
            </aside>
          </v-row>

          <div class="h10 clr-blanco pl-sm-7 pl-4 pt-4" style="--c: var(--bg)">
            <span>{{ $t('beneficio4') }}</span>
          </div>
          <p class="h11_em pt-1">{{ $t('parrafoBeneficio4') }}</p>
        </div>
      </v-row>
    </section>

    <!-- fin mobile -->
    <!-- fin seccion 3 -->

    <!-- mobile -->
    <!-- seccion 4 -->
    <v-col id="team" class="cambiarTamH6 d-flex d-md-none center">
      <b
        ><span class="clr-morado h6_em center">{{
          $t('subtitleEquipo')
        }}</span></b
      >
    </v-col>
    <section
      class="d-flex d-md-none divcol modifyTamañoH10 modifyTamañoH11"
      style="margin-top: -40px"
    >
      <v-row class="center">
        <v-col cols="4" sm="3">
          <v-row class="center">
            <img
              class="imagensection4"
              src="~/assets/sources/images/path1692.png"
              alt=""
            />
            <img
              class="foto1"
              src="~/assets/sources/images/Leyner.png"
              alt=""
            />
          </v-row>
          <v-row>
            <v-col class="pb-0 text-center" cols="12">
              <b><p class="h10 clr-morado mb-0">Leyner Aponte</p></b>
            </v-col>
          </v-row>
          <v-row class="center">
            <v-col class="pt-0" cols="12">
              <p class="h11 text-center parrafo">{{ $t('cargoLeyner') }}</p>
            </v-col>
          </v-row>
          <v-row class="center">
            <a class="center" href="https://www.linkedin.com/in/leyner-aponte-vzla/">
              <img
              class="imgInmobile"
              src="~/assets/sources/icons/g2778.png"
              alt=""
            />
            </a>  
          </v-row>
        </v-col>
        <v-col cols="4" sm="3" style="margin-top: 120px">
          <v-row class="center">
            <img class="foto2" src="~/assets/sources/images/Linda.png" alt="" />
            <img
              class="imagen2section4"
              src="~/assets/sources/images/path2712.png"
              alt=""
            />
          </v-row>
          <v-row>
            <v-col class="pb-0 text-center">
              <b><p class="h10 clr-rosado mb-0">Linda Rosario</p></b>
            </v-col>
          </v-row>
          <v-row class="center">
            <v-col class="pt-0" cols="12">
              <p class="h11 text-center parrafo">{{ $t('cargoLinda') }}</p>
            </v-col>
          </v-row>
          <v-row class="center">
            <a class="center" href="https://www.linkedin.com/in/linda-rosario-duran-5b9559127/">
              <img
              class="imgInmobile"
              src="~/assets/sources/icons/g2778.png"
              alt=""
            />
            </a> 
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mb-6 center" style="margin-top: -95px">
        <v-col cols="4" sm="3">
          <v-row class="center">
            <img
              class="imagensection4"
              src="~/assets/sources/images/path1692.png"
              alt=""
            />
            <img
              class="foto1"
              src="~/assets/sources/images/Hector.png"
              alt=""
            />
          </v-row>
          <v-row>
            <v-col class="pb-0 text-center">
              <b><p class="h10 clr-morado mb-0">Hector Palencia</p></b>
            </v-col>
          </v-row>
          <v-row class="center">
            <v-col class="pt-0" cols="12">
              <p class="h11 text-center parrafo">{{ $t('cargoHector') }}</p>
            </v-col>
          </v-row>
          <v-row class="center">
            <a class="center" href="https://www.linkedin.com/in/hector-rizziero-palencia-micarelli-7b3023176/">
              <img
              class="imgInmobile"
              src="~/assets/sources/icons/g2778.png"
              alt=""
            />
            </a> 
          </v-row>
        </v-col>
        <v-col cols="4" sm="3" style="margin-top: 120px">
          <v-row class="center">
            <img
              class="foto2"
              src="~/assets/sources/images/Alejandria.png"
              alt=""
            />
            <img
              class="imagen2section4"
              src="~/assets/sources/images/path2712.png"
              alt=""
            />
          </v-row>
          <v-row>
            <v-col class="pb-0 text-center">
              <b><p class="h10 clr-rosado mb-0">Lourdes Alejandría</p></b>
            </v-col>
          </v-row>
          <v-row class="center">
            <v-col class="pt-0" cols="12">
              <p class="h11 text-center parrafo">{{ $t('cargoAlejandria') }}</p>
            </v-col>
          </v-row>
          <v-row class="center">
            <a class="center" href="https://www.linkedin.com/in/lourdes-alejandr%C3%ADa/">
              <img
              class="imgInmobile"
              src="~/assets/sources/icons/g2778.png"
              alt=""
              />
            </a> 
          </v-row>
        </v-col>
      </v-row>
    </section>
    <!-- mobile -->
    <!-- fin seccion 4 -->

    <!-- mobile -->
    <!-- seccion 5 -->
    <v-row id="contact" class="pt-2 pb-2 d-flex d-md-none center">
      <v-col cols="9" sm="12" class="center">
        <img
          class="imgMaquinaEscribir1"
          src="~/assets/sources/images/g2628.png"
          alt=""
        />
      </v-col>
    </v-row>

    <v-row class="d-flex d-md-none center container_dudas">
      <v-col cols="9" sm="8" class="cambiarTamH6">
        <b
          ><span class="clr-morado h6_em center pb-5">{{
            $t('subtitleDudas')
          }}</span></b
        >
        <p class="h10_em pb-6 text-center parrafo">{{ $t('parrafoDudas') }}</p>
        <v-row>
          <v-col class="pb-0 pr-0">
            <v-text-field rounded solo placeholder="Nombre Completo">
            </v-text-field>
          </v-col>
          <v-col class="pb-0">
            <v-text-field rounded solo placeholder="Correo">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0 pb-0">
            <v-textarea solo placeholder="Escribe el mensaje">
            </v-textarea>
          </v-col>
        </v-row>
        <v-row class="pb-16">
          <v-col class="pt-0 center">
            <v-btn class="botones pl-14 pr-14 h10">{{
              $t('botonEnviar')
            }}</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- fin mobile -->
    <!-- fin seccion 5 -->
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style src="~/assets/styles/components/sections/hero.scss" lang="scss" />