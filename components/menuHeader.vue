<template>
  <div id="menuHeader">
    <!-- drawer -->
    <v-navigation-drawer
      id="toggleBar"
      v-model="drawer"
      height="100%"
      fixed
      right
      temporary
      :overlay-opacity="$store.state.overlay.opacity"
      :overlay-color="$store.state.overlay.color"
      color="var(--secondary)"
      class="font2"
    >
      <section class="container-header end">
        <v-btn icon @click="drawer = false">
          <v-icon style="color:var(--primary)">
            mdi-close-thick
          </v-icon>         
        </v-btn>
      </section>

      <section class="container-content divcol jspace gap2">
        <v-expansion-panels focusable accordion class="anim_moveleft">
          <template v-if="dataDrawer.expansion">
            <v-expansion-panel
              v-for="(item, index) in dataDrawer.expansion"
              :key="index"
            >
              <!-- title -->
              <v-expansion-panel-header
                class="conttitle acenter gap1 h10_em"
                hide-actions
                @click="ActiveClass('expansion', item)"
              >
                <v-icon style="color:aliceblue">
                  mdi-translate
                </v-icon>                
                <span class="normal" style="max-width: max-content">
                  {{$t(item.name)}}
                </span>
                <v-icon
                  small
                  color="#ffffff"
                  :class="{ active_rotate: item.active }"
                  >mdi-menu-down</v-icon
                >
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-list>
                  <!-- ciclo for items idiomas-->
                  <v-list-item-group active-class="activeText">
                    <v-list-item
                      v-for="(item2, i) in item.selection"
                      :key="i"
                      :ripple="false"
                      :to="item2.to"
                      @click="drawer = false"
                      >
                      <v-list-item-title                         
                        class="center h10_em"
                        @click="$router.push(switchLocalePath(item2.value))">
                        <span class="normal">{{ item2.name }}</span>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </template>

          <template v-if="dataDrawer.list">
            <v-list class="fill_w">
              <!-- ciclo for items -->              

              <v-list-item
                v-for="(item, i) in dataDrawer.list"
                :key="i"
                link
                :to="item.to"
                :ripple="false"
                class="tcap"
              >
                <v-list-item-title
                  class="conttitle acenter gap2 h10_em"
                  @click="ActiveClass('list', item) 
                  drawer = false"
                >
                  <v-icon style="color:aliceblue">
                    {{item.icon}}
                  </v-icon>
                 
                  <span style="max-width: max-content">
                    {{$t(item.name)}}
                  </span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </template>
        </v-expansion-panels>        
      </section>
    </v-navigation-drawer>    
  </div>
</template>

<script>
export default {
  name: 'HeaderMenuComponent',    
  data() {
    return {
      messages: 1,
      drawer: false,
      dataDrawer: {
        list: [
          {            
            name: 'home',
            to: '/#',
            icon:'mdi-home',
            active: false,
          },
          {            
            name: 'gitbook',
            to: '#git',
            icon:'mdi-book',
            active: false,
          },
          {            
            name: 'about',
            to: '#about',
            icon:'mdi-book-open-page-variant',
            active: false,
          },
          {            
            name: 'team',
            to: '#team',
            icon:'mdi-account-group',
            active: false,
          },
          {            
            name: 'contact',
            to: '#contact',
            icon:'mdi-human-greeting-proximity',
            active: false,
          },
        ],
        expansion: [
          {            
            name: 'language',            
            selection: [
              { value:'es', name: 'Spanish' },
              { value:'en', name: 'English' },
            ],
          },
        ],
      },
     
      dataSocial: [
        { icon: 'twitter', url: '#' },
        { icon: 'instagram', url: '#' },
        { icon: 'twitch', url: '#' },
      ],
      dataMenuLogin: [
        { key: 'profile', name: 'Profile' },
        { key: 'library', name: 'Library' },
        { key: 'logout', name: 'Log out' },
      ],
    }
  },
  // created() {
  //   const theme = localStorage.getItem("theme");
  //   this.OverlayMethod(theme);
  // },
  methods: {   
    ActiveClass(key, item) {
      // mejorar hace falta
      if (key === 'expansion') {
        if (item.active) {
          item.active = !item.active
        } else {
          this.dataDrawer.list.forEach((e) => {
            e.active = false
          })
          this.dataDrawer.expansion.forEach((e) => {
            e.active = false
          })
          item.active = true
        }
      } else if (key === 'list') {
        this.dataDrawer.expansion.forEach((e) => {
          e.active = false
        })
        this.dataDrawer.list.forEach((e) => {
          e.active = false
        })
        item.active = true
      }
    },
    Logout(key) {
      if (key === 'logout') {
        localStorage.setItem('auth', false)
        this.$router.push(this.localePath('/'))
        this.$router.go()
      } else {
        this.$router.push(`${this.$i18n.locale}/${key}`)
      }
    },
  },
}
</script>

<style src="~/assets/styles/components/header.scss" lang="scss" />
