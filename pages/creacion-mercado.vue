<template>
  <section id="content" class="overflow">
    <!-- parte 1 -->
    <section id="parte1">
      <!-- contenedor escribe tu historia -->
      <div class="container-detalles-mercado">
        <!-- contenedor imagen principal -->
        <div class="container-img-principal">
          <div class="divRosa"></div>
          <div class="cont-img">
            <img
              src="~/assets/sources/images/sale_tag.png"
              alt="imagen principal"
            />
          </div>
        </div>
        <aside>
          <span>Detalles para el mercado</span>
        </aside>
      </div>
    </section>

    <section id="seccionLinea" class="center">
      <aside class="linea">
        <v-divider></v-divider>
      </aside>
    </section>

    <section id="seccionDetalles">
      <aside class="container-img-detalles">
        <div class="container-img">
          <v-btn class="botones">Subir portada</v-btn>
          <img src="~/assets/sources/images/ImgCarrusel4.png" alt="imagen" />
        </div>
        <div class="datos">
          <div class="content-input">
            <span class="clr-morado h10_em">Precio</span>
            <v-text-field placeholder="" dense solo></v-text-field>
            <aside class="content-precio">
              <span class="h11_em text-right" style="font-weight: 600"
                >{{ precio }}
                <img src="~/assets/sources/icons/near.png" alt="near"
              /></span>
              <span class="h12_em" style="color: grey"
                ><v-icon>mdi-approximately-equal</v-icon>$
                {{ precioDolar }}</span
              >
            </aside>
          </div>

          <div v-for="(item, i) in input" :key="i" class="content-input">
            <aside class="titulo">
              <div>
                <span class="clr-morado h10_em">{{ item.span }}</span>
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
            <v-text-field
              :placeholder="item.placeholder"
              dense
              solo
            ></v-text-field>
          </div>
        </div>
      </aside>
    </section>

    <section id="detallesContinuacion">
      <div class="content-detalles">
        <aside class="content-regalias-input">
          <div class="content">
            <aside class="titulo">
              <div>
                <span class="clr-morado h10_em">Usuarios para regalías</span>
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

            <div class="contenedorDiv">
              <div class="div2">
                <span class="h9_em">Jose.near</span>
              </div>

              <v-btn class="div3">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </div>
          </div>

          <div class="content-input">
            <aside class="titulo">
              <div>
                <span class="clr-morado h10_em">Regalías del usuario</span>
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
            <v-text-field placeholder="15%" dense solo></v-text-field>
          </div>
        </aside>

        <section class="content-personajes-principales">
          <div
            v-for="(item, index) in PersonajesPrincipales"
            :key="index"
            class="contenedorDiv"
          >
            <div class="div2">
              <span class="h9_em">{{ item.namePersonaje }}</span>
            </div>

            <v-btn class="div3">
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </div>
        </section>

        <div
          v-for="(item, index) in textArea"
          :key="index"
          class="content-textarea"
        >
          <aside class="titulo">
            <div>
              <span class="clr-morado h10_em">{{ item.span }}</span>
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
          <v-textarea solo name="" label="" rows="8"></v-textarea>
        </div>
        <div class="content-boton">
          <div class="content-cancelar">
            <v-btn class="botones">Cancelar</v-btn>
          </div>
          <div class="content-siguiente">
            <v-btn class="botones">Publicar</v-btn>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'DetailsMercado',
  data() {
    return {
      precio: '10.78',
      precioDolar: '252.45',

      input: [
        {
          span: 'Tarifa de regalías',
          placeholder: '',
        },
        {
          span: 'Cantidad',
          placeholder: '',
        },
      ],

      PersonajesPrincipales: [
        // {
        //   namePersonaje: 'Cenicienta',
        //   ruta: '#',
        //   icon:'mdi-minus',
        // },
        {
          namePersonaje: 'Nombre',
          ruta: '#',
          icon: 'mdi-plus',
        },
      ],

      textArea: [
        {
          span: 'Atributos',
          placeholder: '',
        },
      ],

      select: ['Venezuela', 'Brasil', 'Argentina', 'Uruguay'],

      textfield: [
        {
          span: 'Clasificacion',
          placeholder: 'Para todo público',
          selection: ['Venezuela', 'Brasil', 'Argentina', 'Uruguay'],
        },
        {
          span: 'Publico objetivo',
          placeholder: 'Selecciona la categoría',
          selection: ['Venezuela', 'Brasil', 'Argentina', 'Uruguay'],
        },
        {
          span: 'Idioma',
          placeholder: 'Selecciona el idioma',
          selection: ['Venezuela', 'Brasil', 'Argentina', 'Uruguay'],
        },
        {
          span: 'Copyright',
          placeholder: 'Selecciona',
          selection: ['Venezuela', 'Brasil', 'Argentina', 'Uruguay'],
        },
      ],
    }
  },
  mounted() {},
  methods: {},
}
</script>


<style src="~/assets/styles/components/sections/detailsMercado.scss" lang="scss" />