<template>
  <div>
    <component :is="component">
    </component>
  </div>
</template>

<script>
	import StudentPage from '../components/StudentPage.vue'
	import TeacherPage from '../components/TeacherPage.vue'
	export default {
		components: {StudentPage, TeacherPage},
		computed: {
			info(){
				// return  this.$store.getters.isLogged
				return this.$store.state.token +" "+ this.$store.state.role
			},
			component(){
				return this.$store.getters.getRole == 1 ? 'student-page' : 'teacher-page'
			}
		}
	}
</script>