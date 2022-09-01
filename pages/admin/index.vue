<template>
	<PostsList :admin="true" :posts="postsLoaded" />
</template>

<script>
export default {
	layout: "admin",
	computed: {
		postsLoaded() {
			return this.$store.getters.getPostsLoaded
		},
	},
}
</script>
