<template>
	<section class="post">
		<div class="container">
			<div class="post-header">
				<img :src="post.img" :alt="post.title" />
				<h1 class="title">{{ post.title }}</h1>
				<p>{{ post.descr }}</p>
			</div>

			<div class="post-body">
				<p>{{ post.content }}</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss">
@media (max-width: 430px) {
	.post-header img {
		max-width: 300px !important;
	}
	.comment {
		width: 100%;
	}
}
</style>
