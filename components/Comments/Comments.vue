<template>
	<section class="comments" v-if="comments">
		<div class="container">
			<h2 class="title">Comments:</h2>
			<p v-if="comments.length === 0">Comments: 0</p>
			<div class="comment" v-for="comment in comments" :key="comment.name">
				<p class="name">{{ comment.name }}</p>
				<p class="text">{{ comment.text }}</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		comments: {
			type: Array,
			default: null,
		},
	},
}
</script>

<style lang="scss">
.comment {
	padding: 20px;
	background-color: #fff;
	margin: 0 auto 20px auto;
	border-radius: 10px;
	width: 760px;
	transition: all 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
	box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
	.name {
		margin-bottom: 12px;
		font-size: 24px;
		color: #5c4de7;
	}
	&:hover {
		box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
		transform: translate(0, -8px);
		transition-delay: 0s !important;
	}
}
.comments p {
	text-align: center;
	color: #999;
}
h2.title {
	text-align: center;
	margin-bottom: 30px;
}
</style>