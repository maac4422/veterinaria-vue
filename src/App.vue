<template>
	<div id="app">
		<div class="layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
			<!--Encabezado -->
			<encabezado></encabezado>
			<div class="drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
			
				<!--Encabezado del menu desplegable-->
				<encabezado_menu></encabezado_menu>
				
				<!--Menu de navegación -->
				<navbar></navbar>

			</div>
			<main class="mdl-layout__content mdl-color--grey-100">
				<div class="content">
					<router-view></router-view>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
	import Navbar from './components/design/navbar.vue'
	import Encabezado from './components//design/encabezado.vue'
	import EncabezadoMenu from './components//design/encabezado-menu.vue'
	export default {
		components: {
			navbar: Navbar,
			encabezado: Encabezado,
			encabezado_menu: EncabezadoMenu
		}
	}
</script>

<style>
	html, body {
		font-family: 'Roboto', 'Helvetica', sans-serif;
	}

	.pagination{
		display: inline-block;
	}
	
	.content {
		max-width: 1080px;
	}

	.mdl-layout__drawer .avatar {
		margin-bottom: 16px;
	}

	.layout .mdl-layout__header .mdl-layout__drawer-button {
		color: rgba(0, 0, 0, 0.54);
	}

	.drawer {
		border: none;
	}

	/* iOS Safari specific workaround */
	.drawer .mdl-menu__container {
		z-index: -1;
	}

	/* END iOS Safari specific workaround */
	.drawer .mdl-menu .mdl-menu__item {
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.error-text{
		color:red !important;
	}
	
	.button-state{
		font-size: 10px !important;
		padding: 5px !important;
		padding-top: 0px !important;
	}

	.button-state-active{
		background: #ff6666 !important;
	}

	.button-state-desactive{
		background: #99ff66 !important;
	}
</style>
