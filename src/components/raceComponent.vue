<template>
	<div class="mdl-grid">
		<div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--10-col-phone">

			
			<div>
				Total registros {{ table.total_records }}
				<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
					<label class="mdl-button mdl-js-button mdl-button--icon" 
						for="search-table">
					  <i class="material-icons">search</i>
					</label>
					<div class="mdl-textfield__expandable-holder">
						<input class="mdl-textfield__input" type="text" id="search-table">
						<label class="mdl-textfield__label" for="search-table">Expandable Input</label>
					</div>
				</div>
			</div>
			<table class="mdl-data-table mdl-js-data-table">
				<thead>
					<tr>
						<th class="mdl-data-table__cell--non-numeric">NOMBRE</th>
						<th>CANTIDAD REGISTRADOS</th>
						<th class="mdl-data-table__cell--non-numeric">ACCIONES</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="race in races">
						<th class="mdl-data-table__cell--non-numeric">{{ race.name}}</th>
						<th>50</th>
						<th v-if="race.state = 'active'" 
						class="mdl-data-table__cell--non-numeric">
							<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button-state-active button-state">
								Deshabilitar
							</button>
						</th>
						<th v-else
						class="mdl-data-table__cell--non-numeric">
							<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored button-state-desactive button-state">
								Habilitar
							</button>
						</th>
					</tr>
				</tbody>
			</table>
			<!--Div para la paginacion-->
			<div class="pagination">
				<button class="mdl-button mdl-js-button">
					Atras
				</button>
				
				<div class="pagination" v-for="page in table.total_pages">
					<button class="mdl-button mdl-js-button
					mdl-button--raised mdl-button--colored"
					v-if="page == table.page">
						{{page}}
					</button>
					
					<button class="mdl-button mdl-js-button" 
					v-else-if="page-1 == table.page || page+1 == table.page">
						{{page}}
					</button>
					
					<button class="mdl-button mdl-js-button" 
					v-else-if="page == table.total_pages || page == 1">
						{{page}}
					</button>

					<button class="mdl-button mdl-js-button" v-else>
						...
					</button>
				</div>

				<button class="mdl-button mdl-js-button">
					Siguiente
				</button>
			</div>
		</div>
		<div class="mdl-cell mdl-cell--6-colmdl-cell--8-col-tablet mdl-cell--10-col-phone">
			<h4>REGISTRO DE NUEVA RAZA</h4>
			<ul v-for="error in errors">
				<li class="error-text">
					{{error.field}} {{error.msg}}
				</li>
			</ul>
			<form>
				<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">

					<input class="mdl-textfield__input" type="text" id="name"
					 v-model="race.name">
					<label class="mdl-textfield__label"  for="name">Nombre</label>
				</div>
				<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-on:click.prevent="registrar">
					Registrar
				</button>
			</form>
		</div>
	</div>

</template>

<script type="text/javascript">
	import 'material-design-lite/dist/material.min.js'
	import { bus } from "../main.js"
	export default {
		data(){
			return{
				races:{},
				race:{
					name: ''
				},
				errors:{},
				table:{
					page:4,
					total_pages:1,
					total_records:0
				}
			}
		},
		methods:{
			registrar(){
				var that = this;
				this.$http.post('races',{
					name: this.race.name

				}).then(response =>{
					// success callback
					this.races.push({
						name: this.race.name,
						state: 'active'
					})
					this.race.name = '';
				},response =>{
					// error callback
					var list = {}
					for (var x in response.body){
						list[x] = {field: x,msg:response.body[x][0]};
					}
					this.errors = list;
				});
			}
		},
		created(){
			bus.$emit('updateTitle','Razas')
			this.$http.get('races',{
						params:  {page: this.table.page}
					})
					.then(response =>{
						return response.json()
					})
					.then(response =>{
						console.log(response)
						this.races = response.data
						this.table.total_records =response.records
						this.table.total_pages = response.pages
					});
		}
	}
</script>

<style type="text/css">
</style>