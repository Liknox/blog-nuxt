<template>
	<div class="wrapper-content wrapper-content--fixed">
		<Intro title="My posts: " />
		<PostsList :posts="postsLoaded" />
	</div>
</template>
<script>
export default {
	head() {
		let title = "My Blog Page!",
			descr = "My SSR Blog! With Nuxt.js!",
			type = "site"
		return {
			title: title,
			meta: [{ hid: "og:title", name: "og:title", content: title }],
			meta: [{ hid: "description", name: "description", content: descr }],
			meta: [{ hid: "og:description", name: "og:description", content: descr }],
			meta: [{ hid: "og:type", name: "og:type", content: type }],
		}
	},
	computed: {
		postsLoaded() {
			return this.$store.getters.getPostsLoaded
		},
	},
}
</script>
