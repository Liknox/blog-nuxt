<template>
	<no-ssr>
		<commentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
			<tbody slot="tbody">
				<tr v-for="comment in comments" :key="comment.id">
					<td>
						<span>{{ comment.name }}</span>
					</td>
					<td>
						<span>{{ comment.text }}</span>
					</td>
					<td>
						<span v-if="comment.publish" class="status true">Publish</span>
						<span v-else class="status false">Hiden</span>
					</td>
					<td>
						<span @click="changeComment(comment)" class="link">Change Status</span>
					</td>
					<td>
						<span @click="deleteComment(comment.id)" class="link">Delete</span>
					</td>
				</tr>
			</tbody>
		</commentTable>
	</no-ssr>
</template>
<script>
import axios from "axios"
import commentTable from "@/components/Admin/CommentTable.vue"
export default {
	components: { commentTable },
	layout: "admin",
	data() {
		return {
			comments: [],
		}
	},
	mounted() {
		this.loadComments()
	},
	methods: {
		loadComments() {
			axios.get("https://blog-nuxt-c3be8-default-rtdb.europe-west1.firebasedatabase.app/comments.json").then((res) => {
				let commentsArray = []
				Object.keys(res.data).forEach((key) => {
					const comment = res.data[key]
					commentsArray.push({ ...comment, id: key })
				})
				this.comments = commentsArray
			})
		},
		changeComment(comment) {
			comment.publish = !comment.publish
			axios.put(`https://blog-nuxt-c3be8-default-rtdb.europe-west1.firebasedatabase.app/comments/${comment.id}.json`, comment)
		},
		deleteComment(id) {
			axios.delete(`https://blog-nuxt-c3be8-default-rtdb.europe-west1.firebasedatabase.app/comments/${id}.json`).then((res) => {
				this.loadComments()
			})
		},
	},
}
</script>