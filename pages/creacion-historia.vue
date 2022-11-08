<template>
  <section id="content" class="overflow">
    <!-- parte 1 -->
    <section id="parte1">
      <!-- contenedor escribe tu historia -->
      <div class="container-escribe-historia">
        <!-- contenedor imagen principal -->
        <div class="container-img-principal">
          <div class="divRosa"></div>
          <div class="cont-img">
            <img
              src="~/assets/sources/images/Girl_boy_poses_.png"
              alt="imagen principal"
            />
          </div>
        </div>
        <aside>
          <span>Escribe tu historia</span>
        </aside>
      </div>
    </section>

    <section id="seccionLinea" class="center">
      <aside class="linea pt-10">
        <v-divider></v-divider>
      </aside>
    </section>

    <div class="subtitles-comunes">
      <span>Detalles</span>
    </div>
    <section id="seccionDetalles">
      <aside class="container-img-detalles">
      <div class="container-img">
        <v-btn class="botones">Subir portada</v-btn>
        <img src="~/assets/sources/images/ImgCarrusel4.png" alt="imagen" />
      </div>
      <div class="datos">
        <div class="content-input">
          <span class="clr-morado h10_em">Titulo</span>
          <v-text-field placeholder="" dense solo></v-text-field>
        </div>

        

        <div class="content-textarea">
          <aside class="titulo">
            <div>
              <span class="clr-morado h10_em">Descripción</span>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <div class="content-alert" v-bind="attrs" v-on="on">
                    <v-icon id="miIcon" color="var(--primary)"
                      >mdi-information</v-icon
                    >
                  </div>
                </template>
                Alerta
              </v-tooltip>
            </div>
          </aside>
          <v-textarea solo name="" label="" rows="5"></v-textarea>
        </div>

        <div class="content-input">
          <aside class="titulo">
            <div>
              <span class="clr-morado h10_em">Categoría</span>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <div class="content-alert" v-bind="attrs" v-on="on">
                    <v-icon id="miIcon" color="var(--primary)"
                      >mdi-information</v-icon
                    >
                  </div>
                </template>
                Alerta
              </v-tooltip>
            </div>
          </aside>
          <v-select
            placeholder="selecciona la categoría"
            :items="select"
            dense
            solo
          ></v-select>
        </div>
      </div>
    </aside>
    </section>

    <section id="detallesContinuacion">
      <div class="content-detalles">

        <div v-for="(item, index) in textfield" :key="index" 
          class="content-input">
          <aside class="titulo">
            <div>
              <span class="clr-morado h10_em">{{item.span}}</span>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <div class="content-alert" v-bind="attrs" v-on="on">
                    <v-icon id="miIcon" color="var(--primary)"
                      >mdi-information</v-icon
                    >
                  </div>
                </template>
                Alerta
              </v-tooltip>
            </div>
          </aside>          
          <v-select
            :placeholder="item.placeholder"
            :items="item.selection"            
            dense
            solo
          ></v-select>
        </div>         
        
        <section class="content-personajes-principales">
          <aside class="titulo">
            <div>
              <span class="clr-morado h10_em">Personajes principales</span>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <div class="content-alert" v-bind="attrs" v-on="on">
                    <v-icon id="miIcon" color="var(--primary)"
                      >mdi-information</v-icon
                    >
                  </div>
                </template>
                Alerta
              </v-tooltip>
            </div>
          </aside>     
         
          <div 
            v-for="(item, index) in PersonajesPrincipales"
            :key="index"
            class="contenedorDiv"
            >
            <div class="div2">
              <span class="h9_em">{{ item.namePersonaje }}</span>
            </div>
            
              <v-btn class="div3">
                <v-icon>{{item.icon}}</v-icon>
              </v-btn>                       
          </div>        
        </section>   

        <div v-for="(item, index) in textArea" :key="index" 
          class="content-textarea"> 
          <aside class="titulo">
            <div>
              <span class="clr-morado h10_em">{{item.span}}</span>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <div class="content-alert" v-bind="attrs" v-on="on">
                    <v-icon id="miIcon" color="var(--primary)"
                      >mdi-information</v-icon
                    >
                  </div>
                </template>
                Alerta
              </v-tooltip>
            </div>
          </aside>           
          <v-textarea
            solo
            name=""
            label=""
            rows="8"
          ></v-textarea>
        </div>
        <div class="content-boton">
          <div class="content-cancelar">
            <v-btn class="botones">Cancelar</v-btn>
          </div>
          <div class="content-siguiente">
            <v-btn class="botones">Siguiente</v-btn>
          </div>          
        </div>
      </div>  
    </section>
  </section>
</template>

<script>
export default {
  name: 'EscribeHistoria',
  data() {
    return {

      PersonajesPrincipales:[
      {
        namePersonaje: 'Cenicienta',
        ruta: '#',
        icon:'mdi-minus',
      },
      {
        namePersonaje: 'Nombre',
        ruta: '#',
        icon:'mdi-plus',
      },
      ],

      textArea: [
        {
          span: 'Tags',
          placeholder: '',
        },
      ],

      select: ['Venezuela', 'Brasil', 'Argentina', 'Uruguay'],

      textfield: [
        {
          span: 'Clasificacion',
          placeholder: 'Para todo público',
          selection:['Venezuela', 'Brasil', 'Argentina', 'Uruguay'],
        },
        {
          span: 'Publico objetivo',
          placeholder: 'Selecciona la categoría',
          selection:['Venezuela', 'Brasil', 'Argentina', 'Uruguay'],
        },
        {
          span: 'Idioma',
          placeholder: 'Selecciona el idioma',
          selection:['Venezuela', 'Brasil', 'Argentina', 'Uruguay'],
        },
        {
          span: 'Copyright',
          placeholder: 'Selecciona',
          selection:['Venezuela', 'Brasil', 'Argentina', 'Uruguay'],
        },       
      ],
    }
  },
  mounted() {},
  methods: {},
}
</script>


<style src="~/assets/styles/components/sections/historia.scss" lang="scss" />