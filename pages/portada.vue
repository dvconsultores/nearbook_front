<template>
  <section id="content" class="overflow">
    <!-- parte 1 -->
    <section id="parte1">
      <div class="content-subir-portada">
        <!-- boton subir portada -->
        <div class="subirPortada">
          <div class="content-btn">
            <v-btn class="botones h12_em">
              Subir Portada
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
        </div>        
      </div>
      <img class="lentes" src="~/assets/sources/images/glasses_with_no.png" alt="imagen">        
    </section> 

    <section id="seccionDatos">
      <div class="subtitles-comunes">
        <span>Datos</span>
      </div>      
      <div class="containerDatos">
        <div v-for="(item, index) in textfield" :key="index" 
          class="content-input">
          <span class="clr-morado h10_em">{{item.span}}</span>
          <v-text-field            
          :placeholder="item.placeholder"            
          dense 
          solo                                 
          ></v-text-field>
        </div> 

        <div v-for="(item, index) in select" :key="index" 
          class="content-input">
          <span class="clr-morado h10_em">{{item.span}}</span>
          <v-select
            :items="item.selection"
            label="Solo field"
            dense
            solo
          ></v-select>
        </div> 
        
        <div v-for="(item, index) in textArea" :key="index" 
          class="content-textarea"> 
          <div class="center">
            <span class="clr-morado h10_em">{{item.span}}</span>
          </div>      
          <v-textarea
            solo
            name=""
            label=""
            rows="8"
          ></v-textarea>
        </div>
        <div class="content-boton">
          <v-btn class="botones">Guardar</v-btn>
        </div>
      </div>      
    </section>
  </section>
</template>

<script>
export default {
  name: 'SubirPortada',
  data() {
    return { 
      
    textArea:[
      {
        span:'Biografía',
        placeholder:'',
      },      
    ],
      
      select:[
        {
          span:'Pais',
          placeholder:'',
          selection: ['Venezuela', 'Brasil', 'Argentina', 'Uruguay'],
        },
        {
          span:'Idioma',
          placeholder:'',
          selection:['Español', 'Ingles', 'Frances', 'Aleman'],
        },
      ],     
      textfield:[
        {
          span:'Username',
          placeholder:'',
        },
        {
          span:'Correo',
          placeholder:'ejemplo@dominio.com',
        }, 
        {
          span:'Discord ID',
          placeholder:'Username#12345',
        },
        {
          span:'Website',
          placeholder:'',
        },
        {
          span:'Twitter',
          placeholder:'',
        }, 
        {
          span:'Telegram',
          placeholder:'@username',
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


<style src="~/assets/styles/components/sections/portada.scss" lang="scss" />