<template>
	<newPostForm :postEdit="post" @submit="onSubmit" />
</template>
<script>
import axios from "axios"
import newPostForm from "@/components/Admin/NewPostForm.vue"
export default {
	components: { newPostForm },
	layout: "admin",
	// data() {
	//    return {
	//       post: {
	//          id: 1,
	//          title: "1 post",
	//          descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	//          content:
	//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	//          img: "https://images.newscientist.com/wp-content/uploads/2022/02/24145845/SEI_89826778.jpg?crop=1:1,smart&width=1200&height=1200&upscale=true",
	//       },
	//    };
	// },
	asyncData(contex) {
		return axios
			.get(`https://blog-nuxt-c3be8-default-rtdb.europe-west1.firebasedatabase.app/posts/${contex.params.postId}.json`)
			.then((res) => {
				return {
					post: { ...res.data, id: contex.params.postId },
				}
			})
			.catch((e) => contex.error(e))
	},
	methods: {
		onSubmit(post) {
			console.log("Post Editing!")
			console.log(post)
		},
	},
}
</script>
