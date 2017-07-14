import IndexComponent from './components/indexComponent.vue'
import RacesComponent from './components/raceComponent.vue'

export const routes = [
	{ path:'', component: IndexComponent, name: 'index'},
	{ path:'/races', component: RacesComponent, name: 'races'},
	{ path:'/races/:id', component: RacesComponent, name: 'infoRace'}
]