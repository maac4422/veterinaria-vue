<template>
	<nav class="navigation mdl-navigation mdl-color--blue-grey-800">
		<router-link v-bind:to="{ name:'index' }" class="mdl-navigation__link">
			<i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Inicio
		</router-link>

		<router-link v-bind:to="{ name:'races' }" class="mdl-navigation__link">
			<i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">archive</i>Razas
		</router-link>	
		
	</nav>
</template>

<script type="text/javascript">
	
</script>

<style type="text/css">
	.navigation {
		-webkit-flex-grow: 1;
				-ms-flex-positive: 1;
						flex-grow: 1;
		z-index: -2;
	}

	.navigation .mdl-navigation__link {
		display: -webkit-flex !important;
		display: -ms-flexbox !important;
		display: flex !important;
		-webkit-flex-direction: row;
				-ms-flex-direction: row;
						flex-direction: row;
		-webkit-align-items: center;
				-ms-flex-align: center;
						align-items: center;
		color: rgba(255, 255, 255, 0.56);
		font-weight: 500;
	}
	.layout .navigation .mdl-navigation__link:hover {
		background-color: #00BCD4;
		color: #37474F;
	}
	.navigation .mdl-navigation__link .material-icons {
		font-size: 24px;
		color: rgba(255, 255, 255, 0.56);
		margin-right: 32px;
	}
	
</style>