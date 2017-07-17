//import IndexComponent from './components/indexComponent.vue'
//import RacesComponent from './components/raceComponent.vue'


//Use lazy loading
const IndexComponent = resolve =>{
	require.ensure(['./components/indexComponent.vue'],() =>{
		resolve(require('./components/indexComponent.vue'));
	})
}

const RacesComponent = resolve =>{
	require.ensure(['./components/raceComponent.vue'],() =>{
		resolve(require('./components/raceComponent.vue'));
	})
}

export const routes = [
	{ path:'', component: IndexComponent, name: 'index'},
	{ path:'/races', component: RacesComponent, name: 'races'},
	{ path:'/races/:id', component: RacesComponent, name: 'infoRace'},
	{ path:'*', redirect: '/'}
]