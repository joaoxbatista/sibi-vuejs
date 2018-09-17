<template>
  <div id="servicos" class="section">
    <v-container>
      <v-layout row wrap>
        <v-flex md12 class="section-title">
          <h3><v-icon>assignment</v-icon> Serviços</h3>
          <h4>Serviços oferecido pela Biblioteca.</h4>
        </v-flex>
      </v-layout>

      <v-layout row wrap class="">
        <v-flex xs12 md3 lg3 sm3 class="service" v-for="service in services">
          <a :href="service.href">
            <div class="service-content">
              <div class="service-icon">
                <img :src="service.icon" alt="">
              </div>
              <h3>{{service.title}}</h3>
              <p>{{service.description}}</p>
            </div>
          </a>

        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    services: [
      {
        title: 'Consulta ao acervo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        href: '',
        icon: require('../images/consulta.svg')
      },
      {
        title: 'Renovação',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        href: '',
        icon: require('../images/renovar.svg')
      },
      {
        title: 'Repositório Arapiraca',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        href: '',
        icon: require('../images/repositorio.svg')
      },
      {
        title: 'Pagamento de Multas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        href: '',
        icon: require('../images/multa.svg')
      },
    ]
  })
}
</script>
