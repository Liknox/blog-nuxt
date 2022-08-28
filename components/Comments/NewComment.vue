<template>
	<section class="new-comment">
		<div class="container">
			<h2 class="title">New Comment!</h2>
			<Message v-if="message" :message="message" />

			<form @submit.prevent="onSubmit" class="contact-form">
				<AppInput v-model="comment.name">Name:</AppInput>
				<AppTextArea v-model="comment.text">Text:</AppTextArea>

				<div class="controls">
					<AppButton>Submit !</AppButton>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
import axios from "axios"
export default {
	data() {
		return {
			message: "",
			comment: {
				name: "",
				text: "",
			},
		}
	},
	methods: {
		onSubmit() {
			this.$store
				.dispatch("addComment", {
					postId: "",
					publish: false,
					...this.comment,
				})
				.then(() => {
					this.message = "Submitted!"

					this.comment.name = ""
					this.comment.text = ""
				})
				.catch((e) => {
					console.log(e)
				})
		},
	},
}
</script>

<style lang="scss">
.new-comment {
	text-align: center;
	.controls {
		margin: 30px 0;
	}
	&-form {
		max-width: 600px;
		margin: 30px auto;
	}
}
</style>
