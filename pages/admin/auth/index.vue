<template>
	<section class="auth">
		<div class="container">
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
				password: "",
			},
		}
	},
	methods: {
		onSubmit() {
			this.user.email = ""
			this.user.password = ""
		},
	},
}
</script>

<style lang="scss">
.auth {
	text-align: center;
}
.auth-form {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 80vh;
	input {
		min-width: 460px;
	}
}
</style>