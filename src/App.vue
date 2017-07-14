<template>
	<div id="app">
		<navbar></navbar>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Navbar from './components/design/navbar.vue'
export default {
	components: {
		navbar: Navbar
	}
}
</script>

<style>

</style>
