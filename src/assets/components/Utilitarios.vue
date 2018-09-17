<template>
	<div id="utilitarios" class="section">
		<v-container>
			<v-layout row wrap>
				<v-flex md12 class="section-title">
					<h3> <v-icon>apps</v-icon> Utilitários</h3>
				</v-flex>
			</v-layout>

			<v-layout row wrap id="utilitarios-content">
				<v-flex xs12 md3 lg3 sm3 class="utility" v-for="utility in utilities" v-bind:key="utility.title">

					<v-tooltip top max-width="250">
						<a slot="activator" class="title" :href="utility.link">{{ utility.title}}</a>
						<span>{{utility.description}}</span>
					</v-tooltip>
					<!-- <v-btn block color="light-blue darken-3" dark>{{utility.title}}</v-btn> -->
				</v-flex>
			</v-layout>

		</v-container>
	</div>
</template>

<script>
	export default {

		data () {
			return {
				utilities: [
						{
							title: "Portal da pesquisa",
							image: require('../images/logo_portaldepesquisa.gif'),
							link: "#",
							description: 'Lorem ipsum dolor sit ametsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							color: "red"
						},

						{
							title: "Scielo",
							image: require('../images/logo_scielo.jpg'),
							link: "#",
							description: 'Lorem ipsum dolor sit ametsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							color: "blue"
						},

						{
							title: "Portal SBE",
							image: require('../images/logo-sbe-cor-beto.png'),
							link: "#",
							description: 'Lorem ipsum dolor sit ametsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							color: "amber"
						},

						{
							title: "Periódicos",
							image: require('../images/logo_periodicos.png'),
							link: "#",
							description: 'Lorem ipsum dolor sit ametsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							color: "pink"
						},

						{
							title: "FAPEAL",
							image: require('../images/FAPEAL.png'),
							link: "#",
							description: 'Lorem ipsum dolor sit ametsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							color: "blue dark-1"
						},

						{
							title: "dot.lib",
							image: require('../images/logo_dotlib.png'),
							link: "#",
							description: 'Lorem ipsum dolor sit ametsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
						},
				]
			}
		},
	}
</script>
