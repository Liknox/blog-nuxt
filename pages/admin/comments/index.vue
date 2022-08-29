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
						<span @click="changeComment(comment.id)" class="link">Change Status</span>
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
	created() {
		axios.get("https://blog-nuxt-c3be8-default-rtdb.europe-west1.firebasedatabase.app/comments.json").then((res) => {
			let commentsArray = []
			Object.keys(res.data).forEach((key) => {
				const comment = res.data[key]
				commentsArray.push({ ...comment, id: key })
			})
			this.comments = commentsArray
		})
	},
	methods: {
		changeComment(id) {
			console.log(`Change comment id - ${id}`)
		},
		deleteComment(id) {
			console.log(`Delete comment id - ${id}`)
		},
	},
}
</script>
