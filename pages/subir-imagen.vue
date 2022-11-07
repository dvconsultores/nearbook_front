<template>
  <section id="content" class="overflow">
    <!-- parte 1 -->
    <section id="parte1">
      <div class="content-subir-imagen">
        <!-- boton subir portada -->
        <div class="subirImagen">
          <div class="content-btn">
            <v-btn class="botones h12_em">
              Subir Imagen
            </v-btn>            
          </div>

          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <div class="content-alert"
                v-bind="attrs"
                 v-on="on">
                <img src="~/assets/sources/icons/Grupo 8274.png" alt="alert">
              </div>
            </template> 
            Alerta     
          </v-tooltip>
        </div>               
      
        <!--imagen paisaje -->
        <div class="imagen">
          <aside>
            <img src="~/assets/sources/images/Weather.png" alt="foto de perfil">            
          </aside>          
        </div>        
      </div>             
    </section>
    <!-- content-texto  -->
    <section id="seccionTexto">          
      <div class="containerTexto">
        <div class="subtitles-comunes">         
          <div class="content-btn">
            <v-btn class="botones">
              <div class="content-img">
                <img src="~/assets/sources/icons/vistas.png" alt="Previsualizar">
              </div>
              Previsualizar
            </v-btn>
          </div> 

          <div class="content-span">
            <span>Coloca el titulo parte 1</span>
          </div>         
        </div>  
        <aside class="hojaTexto">

          <div class="ajustesHoja"> 
            <div class="content-imagenes">       
            <div v-for="(item,i) in ajustesPagina" :key="i" 
              class="cont-img">                         
            <v-btn :value="item.value" icon small>
              <v-icon class="icon">{{item.icon}}</v-icon>
            </v-btn>             
            </div> 
          </div>              
          </div>
          <v-textarea         
            solo
            name=""
            label=""
            rows="50"
          ></v-textarea>
        </aside>
        <div class="borrador">          
          <span class="text-center">Borrador (3.456 palabras) guardado</span>                     
        </div>
        <aside class="content-botones-inferiores">
          <div class="btn-guardar-sin-publicar">
            <v-btn class="botones">Guardar sin publicar</v-btn>
          </div>
          <div class="btn-siguiente">
            <v-btn class="botones">Siguiente</v-btn>
          </div>
        </aside>
      </div>             
    </section>
  </section>
</template>

<script>
export default {
  name: 'SubirImagen',
  data() {
    return { 
      toggle_exclusive: undefined,

      ajustesPagina:[
        {
          icon:'mdi-format-bold',          
          value:'1',
        },
        {
          icon:'mdi-format-italic',          
          value:'2',
        },
        {
          icon:'mdi-format-underline',          
          value:'3',
        },
        {
          icon:'mdi-format-strikethrough',          
          value:'4',
        },
        {
          icon:'mdi-format-size',          
          value:'5',
        },
        {
          icon:'mdi-format-align-center',          
          value:'6',
        },
        {
          icon:'mdi-format-align-justify',          
          value:'7',
        },
        {
          icon:'mdi-format-align-right',          
          value:'8',
        },
        {
          icon:'mdi-format-indent-decrease',          
          value:'9',
        },
        {
          icon:'mdi-format-indent-increase',          
          value:'10',
        },
        {
          icon:'mdi-format-list-bulleted',          
          value:'11',
        },
        {
          icon:'mdi-format-list-numbered',          
          value:'12',
        },

      ],
          
    }
  },
  mounted() {
   
  },
  methods: {
   
  },
}
</script>


<style src="~/assets/styles/components/sections/subir-imagen.scss" lang="scss" />