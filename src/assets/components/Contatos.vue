<template>
  <div id="contatos" class="section">
    <v-container>
			<v-layout row wrap>
				<v-flex md12 class="section-title">
					<h3> <v-icon>phone</v-icon> Contatos</h3>
					<h4>Contato para cada Biblioteca.</h4>
				</v-flex>
			</v-layout>

			<v-layout row wrap class="informations">
				<v-flex xs12 md3 lg3 sm3 class="information" v-for="information in informations" v-bind:key="information.name">
					<div class="information-content">
            <h3>{{ information.name }}</h3>
            <div class="item">
              <v-icon>location_on</v-icon>
              <p>{{ information.address }}</p>
            </div>
            <div class="item">
              <v-icon>phone</v-icon>
              <p>{{ information.phone}}</p>
            </div>

            <div class="item" v-if="information.facebook">
              <v-icon>group</v-icon>
              <a :href="information.facebook">Facebook</a>
            </div>
					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    informations: [
      {
        name: "Arapiraca",
        address: "Av. Manoel Severino Barbosa s/n. CEP 57309005. Bom Sucesso. Arapiraca.",
        phone: "(82) 3482-1837 - Central telefônica",
        email: "",
        facebook: "https://www.facebook.com/bca.bibliotecacampusdearapiraca?fref=ts"
      },
      {

        name: "Palmeira dos Indios",
        address: "Rua Sonho Verde, s/n, Eucalipto, CEP: 57076-100. Palmeira dos Índios.",
        phone: "(82) 3420-1282 - Central telefônica",
        email: "",
        facebook: "https://www.facebook.com/biblioteca.palmeiradosindios?fref=ts"
      },
      {

        name: "Penedo",
        address: "Av. Beira Rio, s/n - Centro Histórico CEP: 57200-000. Penedo.",
        phone: "(82) 3551-2784/3707 - Central telefônica",
        email: "",
        facebook: ""
      },
      {

        name: "Viçosa",
        address: "Fazenda São Luiz, s/n. Viçosa.",
        phone: "(82) 9941-0150",
        email: "",
        facebook: ""
      },
    ]
  })
}
</script>
