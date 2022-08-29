<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section class="about">
			<div class="container">
				<h1 class="title">About my Blog:</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas molestias aperiam unde sit dolores.</p>
				<Intro title="Lorem ipsum dolor sit amet" />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas molestias aperiam unde sit dolores.</p>
				<img src="@/assets/img/about.jpg" alt="" />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas molestias aperiam unde sit dolores.</p>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	head() {
		let title = "About My SSR Blog!",
			descr = "About My SSR Blog! With Nuxt.js!",
			type = "site"
		return {
			title: title,
			meta: [{ hid: "og:title", name: "og:title", content: title }],
			meta: [{ hid: "description", name: "description", content: descr }],
			meta: [{ hid: "og:description", name: "og:description", content: descr }],
			meta: [{ hid: "og:type", name: "og:type", content: type }],
		}
	},
}
</script>

<style lang="scss">
.about {
	text-align: center;
	p {
		margin-bottom: 10px;
	}
}
.wrapper-content {
	min-height: 80vh;
}
</style>