<template>
  <div id="header-menu">
    <!-- <v-navigation-drawer id="side-menu" v-model="sideNav" app>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click.native.stop="sideNav = !sideNav" class="close-side">
          <v-list-tile-action>
            <v-icon>close</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Fechar</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->

    <div id="header">
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex md3 id="header-logo">
            <img src="../images/logo-sibi.svg" alt="">
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-toolbar id="menu">
      <!-- <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"> -->
      <!-- <v-toolbar-side-icon href="#header" v-smooth-scroll>
        <v-icon>home</v-icon>
      </v-toolbar-side-icon> -->
      <v-spacer></v-spacer>
      <v-toolbar-items id="menu-itens">
        <v-tooltip top  v-for="item in menuItems" :key="item.title" >
          <v-btn flat slot="activator" :href="item.href" v-smooth-scroll>
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
          <span>{{ item.title }}</span>
        </v-tooltip>

      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  import * as easings from 'vuetify/es5/util/easing-patterns'

  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          {icon: 'local_library', title: 'Sobre', href: '#sobre'},
          {icon: 'assignment', title: 'Serviços', href: '#servicos'},
          {icon: 'apps', title: 'Utilitários', href: '#utilitarios'},
          {icon: 'assignment_ind', title: 'Servidores', href: '#equipe'},
          {icon: 'phone', title: 'Contatos', href: '#contatos'},
          {icon: 'keyboard_arrow_up', title: 'Início', href: '#header'},
        ],
      }
    },
  }
</script>

<style scoped>

</style>
