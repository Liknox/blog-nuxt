<template>
	<div class="wrapper-content wrapper-content--fixed">
		<promo />
		<Intro title="My last posts: " />
		<PostsList :posts="postsLoaded" />
		<contacts />
	</div>
</template>
<script>
import promo from "@/components/Promo.vue"
import contacts from "@/components/Contacts.vue"

export default {
	components: {
		promo,
		contacts,
	},
	head() {
		let title = "My SSR Blog!",
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

<style lang="scss">
.promo {
	text-align: center;
	p {
		color: #999;
	}
}

.wrapper-content {
	min-height: 80vh;
}
</style>
