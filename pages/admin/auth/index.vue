<template>
	<section class="auth">
		<div class="container">
			<div class="auth-preview">
				<h1>Login Data:</h1>
				<p><strong>Login:</strong> nazarkoval@gmail.com</p>
				<p><strong>Password:</strong> ********</p>
			</div>
			<form @submit.prevent="onSubmit" class="auth-form">
				<AppInput type="email" v-model="user.email">Login:</AppInput>
				<AppInput type="password" v-model="user.password">Password:</AppInput>
				<div class="controls">
					<AppButton>Log in!</AppButton>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			user: {
				email: "",
				password: ""
			}
		}
	},
	methods: {
		onSubmit() {
			this.$store
				.dispatch("authUser", this.user)
				.then(res => {
					this.$router.push("/admin")

					// this.user.email = ""
					// this.user.password = ""
				})
				.catch(e => {
					console.log(e)
					this.user.email = ""
					this.user.password = ""
				})
		}
	}
}
</script>

<style lang="scss">
.auth {
	text-align: center;
	&-preview {
		margin-top: 50px;
		h1 {
			font-size: 30px;
			font-weight: bold !important;
		}
		p {
			padding-top: 5px;
			font-size: 20px;
		}
	}
	&-form {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 50vh;
		input {
			min-width: 460px;
		}
	}
}

@media (max-width: 400px) {
	.auth-form input {
		min-width: 300px;
	}
}
</style>
