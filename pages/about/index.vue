<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section class="about">
			<div class="container">
				<h1 class="title">About my Blog:</h1>
				<p>Modern blog on nuxt.js + vue.js with rendering and admin panel, full SEO optimization and a small CRM system inside, which will show all comments with the option to change the status "published/unpublished" and also delete "spam".</p>
				<Intro title="Modern blog on Nuxt.js + Vue.js" />
				<ul class="ul-line">
					<li>SSR for application</li>
					<li>Full SEO optimization</li>
					<li>Users Autorization and Registration</li>
					<li>Admin panel security</li>
					<li>Working with tokens - JWT</li>
					<li>Local Storage</li>
					<li>Markdown markup</li>
				</ul>
				<div class="github-repo"><a href="https://github.com/Liknox/blog-nuxtJS" target="_blank">Github Repository</a></div>
				<img src="@/assets/img/about.jpg" alt="" />
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
			meta: [{ hid: "og:type", name: "og:type", content: type }]
		}
	}
}
</script>

<style lang="scss">
.about {
	text-align: center;
	p {
		font-size: 20px;
		margin-bottom: 10px;
	}
	a {
		margin: 10px;
      color: #4f68f4;
	}
   ul {
      font-size: 25px;
      li:before {
         content: "\2013";
         margin-right: .625rem;
      }
   }
	.github-repo {
		margin: 15px;
		text-decoration: underline;
		font-size: 30px;
		color: #4f68f4;
	}
}
.wrapper-content {
	min-height: 80vh;
}
</style>
