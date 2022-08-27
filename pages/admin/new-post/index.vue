<template>
	<newPostForm @submit="onSubmit" />
</template>
<script>
import newPostForm from "@/components/Admin/NewPostForm.vue"
export default {
	components: { newPostForm },
	layout: "admin",
	methods: {
		onSubmit(post) {
			this.$store.dispatch("addPost", post).then(() => {
				this.$router.push("/admin")
			})
		},
	},
}
</script>
