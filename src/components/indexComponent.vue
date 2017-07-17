<template>
	<div class="mdl-grid">
		Inicio
	</div>
</template>

<script>
	import 'material-design-lite/dist/material.min.js'
	import { bus } from "../main.js"
	export default {
		created(){
			bus.$emit('updateTitle','Inicio')
		}
	}
</script>


<style type="text/css">
	
</style>