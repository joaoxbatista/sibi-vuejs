<template>
	<div id="equipe" class="section">
		<v-container>
			<v-layout row wrap>
				<v-flex md12 class="section-title">
					<h3><v-icon>assignment_ind</v-icon> Servidores</h3>
					<h4>Equipes de cada Biblioteca.</h4>
				</v-flex>
			</v-layout>

			<v-layout row wrap class="plus" v-for="setor in setores" v-bind:key="setor.nome" justify-center>
				<v-flex m12 sm12 lg12 xs12 class="title">
					<v-layout row wrap>
						<v-flex m11 sm11><h3>Biblioteca - Campus {{ setor.nome }}</h3></v-flex>

						<v-flex m1 sm1>
								<v-btn v-if="!setor.expandir" flat icon color="blue lighten-1" medium @click="setor.expandir = !setor.expandir">
									<v-icon>keyboard_arrow_down</v-icon>
								</v-btn>

								<v-btn v-else flat icon medium color="red lighten-1" @click="setor.expandir = !setor.expandir">
									<v-icon>keyboard_arrow_up</v-icon>
								</v-btn>
						</v-flex>
					</v-layout>
				</v-flex>
					<v-flex sm12 xs12 md4 lg4
						class="employee"
						v-for="integrante in setor.integrantes"
						v-bind:key="integrante.nome"
						v-show="setor.expandir">
							<div class="employee-content">
								<div v-if="integrante.expandir" class="presentation">
									<ul>
										<li v-for="titulo in integrante.apresentacao">{{titulo}}</li>
									</ul>

								</div>

								<div v-else>
									<img :src="integrante.imagem" alt="">
									<h3 class="name">{{integrante.nome}}</h3>
								</div>
								<v-chip color="blue" text-color="white">
						      {{integrante.cargo}}
						      <v-icon right>person_pin</v-icon>
						    </v-chip>
								<v-btn v-if="!integrante.expandir" dark icon  medium color="blue" @click="integrante.expandir = !integrante.expandir">
									<v-icon >keyboard_arrow_down</v-icon>

								</v-btn>

								<v-btn v-else dark icon  medium color="red lighten-1" @click="integrante.expandir = !integrante.expandir">
									<v-icon >keyboard_arrow_up</v-icon>
								</v-btn>


							</div>
					</v-flex>
			</v-layout>

		</v-container>
	</div>
</template>

<script>
	export default {

		data () {
			return {
				setores: [
					{ nome: "Arapiraca",  expandir: false, integrantes: [
						{
							nome: "Adriana Nogueira de Magalhães",
							imagem: require("../images/servidores/arapiraca/adriana.png"),
							cargo: "Auxiliar de Biblioteca ",
							setor: "Empréstimo",
							apresentacao: [
								"Licenciada em Letras (Português/Inglês);",
								"Especialização em TICs para Educadores pela UFAL.",
							],
							expandir: false,
						},
						{
							nome: "Cleia Maria de Oliveira Brito",
							imagem: require("../images/servidores/arapiraca/cleia.png"),
							cargo: "Auxiliar Administrativo",
							setor: "Empréstimo",
							apresentacao: [
									"Graduação em Serviço Social pela UFAL;",
									"Especialização em Recursos Humanos e Desenvolvimento Universitário pela UFAL",
									"Atualmente Cursa Pedagogia pela UNOPAR.",
							],
							expandir: false,
						},
						{
							nome: "Débora da Silva Cerqueira de Menezes",
							imagem: require("../images/servidores/arapiraca/debora.png"),
							cargo: "Assistente em Administração ",
							setor: "Empréstimo",
							apresentacao: [
								"Graduação em Direito pela UNEAL",
								"Tecnólogo em Secretariado pela Uninter.",
							],
							expandir: false,
						},
						{
							nome: "Erijane da Silva Virtuoso",
							imagem: require("../images/servidores/arapiraca/erijane.png"),
							cargo: "Auxiliar em Administração ",
							setor: "Empréstimo",
							apresentacao: [
								"Especialização em Gestão Pública pela UFAL;",
								"Graduação em Química – Licenciatura pela UNEAL;",
								"Experiência na área de Química, com ênfase em Química Verde;",
								"Experiência na área de Políticas Públicas, com ênfase administrativa em Assistência Social e Secretariado Executivo de Conselho;",
								"Atualmente cursa Graduação em Letras/Português pelo IFAL.",
							],
							expandir: false,
						},
						{
							nome: "Everaldo Bezerra de Albuquerque",
							imagem: require("../images/servidores/arapiraca/everaldo.png"),
							cargo: "Secretário Executivo ",
							setor: "Empréstimo",
							apresentacao: [
								"Licenciado em Letras, com habilitação em Português/Inglês pela FUNESA;",
								"Especialização em Gestão Escolar pela UCB do Rio de Janeiro;",
								"Mestrado em Letras e Linguística, área de concentração Estudos Literários, linha de pesquisa Literatura, Cultura e Sociedade, pelo Programa de Pós-graduação em Letras e Linguística da UFAL;",
								"Atualmente cursa Doutorado em Literatura pela Universidade Católica Portuguesa – Centro Regional de Braga (Portugal).",
							],
							expandir: false,
						},
						{
							nome: "Gerlane Costa Silva de Farias",
							imagem: require("../images/servidores/arapiraca/gerlane.png"),
							cargo: "Bibliotecária / Documentalista ",
							setor: "Divisão de Tratamento Técnico (DTT) ",
							apresentacao: [
								"Graduação em Biblioteconomia e Documentação pela Universidade Federal da Bahia (UFBA);",
								"Especialização em Biblioteconomia pela Faculdades Integradas de Jacarepaguá (FIJ);",
								"Atualmente cursando a Licenciatura em Letras – Português pela Universidade Estadual de Alagoas.",
							],
							expandir: false,
						},
						{
							nome: "Jakeline Vieira Barbosa",
							imagem: require("../images/servidores/arapiraca/jakeline.png"),
							cargo: "Auxiliar de Biblioteca ",
							setor: "Empréstimo",
							apresentacao: [
								"Graduação em Pedagogia pela Universidade Estadual de Alagoas (UNEAL);",
								"Especialização em Gestão Escolar pela Universidade Estadual de Alagoas (UNEAL).",
							],
							expandir: false,
						},
						{
							nome: "Márcio Thiago dos Santos Albuquerque",
							imagem: require("../images/servidores/arapiraca/marcio.png"),
							cargo: "Bibliotecário / Documentalista ",
							setor: "Divisão de Tratamento Técnico (DTT) e Empréstimo ",
							apresentacao: [
								"Graduação em Biblioteconomia pela Universidade Federal de Alagoas (UFAL);",
								"Licenciatura em Matemática pela Universidade Estadual de Alagoas (UNEAL);",
								"Especialização em Educação Matemática pela Universidade Estadual de Alagoas (UNEAL).",
							],
							expandir: false,
						},
						{
							nome: "Nestor Antonio Alves Junior",
							imagem: require("../images/servidores/arapiraca/nestor.png"),
							cargo: "Bibliotecário / Documentalista ",
							setor: "Divisão de Tratamento Técnico (DTT) e Empréstimo ",
							apresentacao: [
								"Graduação em Biblioteconomia pela Universidade Federal de Alagoas (UFAL);",
								"Bacharelado em Turismo e Lazer pelo Instituto Federal de Alagoas (IF – AL);",
								"Especialização em Formação de Leitores pelas Faculdades Integradas de Jacarepaguá – FIJ.",
								"Responde como Coordenador das Bibliotecas – Campus de Arapiraca;",
								"Atualmente cursa Mestrado em Ciências da Educação pela Universidade Autónoma de Assunção (Paraguai).",
							],
							expandir: false,
						}
					]},
					{ nome: "Penedo", expandir: false, integrantes: [
						{
							nome: "Edjames Alves Santos",
							imagem: require("../images/servidores/penedo/edjames.png"),
							cargo: "Assistente Administrativo ",
							setor: "Empréstimo",
							apresentacao: [
								"Licenciatura em Química ",
								"Atualmente cursando Especialização em Ensino de Ciências e da Matemática pelo Instituto Federal de Alagoas (IFAL).",
							],
							expandir: false,
						},
						{
							nome: "Eliúde Maria da Silva",
							imagem: require("../images/servidores/penedo/eliude.png"),
							cargo: "Bibliotecária / Documentalista",
							setor: "Divisão de Tratamento Técnico (DTT) e Empréstimo",
							apresentacao: [
								"Graduação em Biblioteconomia e Documentação pela Universidade Federal de Alagoas (UFAL);",
								"Especialização em Comunicação e Mídias Digitais pela Faculdade Estácio de Sá.",
							],
							expandir: false,
						},
						{
							nome: "Tereza Cristina do Nascimento Andrade",
							imagem: require("../images/servidores/penedo/tereza.png"),
							cargo: "Recepcionista ",
							setor: "Empréstimo",
							apresentacao: [
								"Possui Ensino Médio Completo.",
							],
							expandir: false,
						},
					]},
					{ nome: "Palmeira dos Indios", expandir: false, integrantes: []},
					{ nome: "Viçosa", expandir: false, integrantes: []},
				]
			}
		},
	}
</script>
