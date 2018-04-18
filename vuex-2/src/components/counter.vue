<template>
	<div>
		<h3>{{count}}</h3>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
	</div>
</template>
<script>
	import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'

	export default{
		data(){
			return{

			}
		},

		computed:mapGetters([
			'count'
		]),
		methods:{
			 ...mapActions(['increment','decrement'])
		},
	    // methods:mapActions([
	    //   'increment',
	    //   'decrement',
	    // ])
	}
</script>