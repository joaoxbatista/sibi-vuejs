<template>
	<div id="app">
		<v-app>
			<menu-nav></menu-nav>
			<sobre></sobre>
			<servicos></servicos>
			<utilitarios></utilitarios>
			<servidores></servidores>
			<contatos></contatos>
		</v-app>
	</div>
</template>

<script>
import MenuNav from './assets/components/Menu.vue';
import Servidores from './assets/components/Equipe.vue';
import Utilitarios from './assets/components/Utilitarios.vue';
import Contatos from './assets/components/Contatos.vue';
import Servicos from './assets/components/Servicos.vue';
import Sobre from './assets/components/Sobre.vue';

export default {
	name: 'app',

	data () {
		return {
			height: 0
		}
	},

	components: {
		'menu-nav': MenuNav,
		'servidores': Servidores,
		'utilitarios': Utilitarios,
		'contatos': Contatos,
		'servicos': Servicos,
		'sobre': Sobre
	},

	created () {

	},

	methods: {
		descer() {
			alert('descer')
		}
	}
}
</script>
