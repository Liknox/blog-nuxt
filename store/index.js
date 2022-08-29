import axios from "axios"

export const state = () => ({
	postsLoaded: [],
	commentsLoaded: [],
})

export const mutations = {
	setPosts(state, posts) {
		state.postsLoaded = posts
	},
	addPost(state, post) {
		// console.log(post)
		state.postsLoaded.push(post)
	},
	editPost(state, postEdit) {
		const postIndex = state.postsLoaded.findIndex((post) => post.id === postEdit.id)
		state.postsLoaded[postIndex] = postEdit
	},
	addComment(state, comment) {
		console.log(comment)
		state.commentsLoaded.push(comment)
	},
}

export const actions = {
	nuxtServerInit({ commit }, contex) {
		return axios
			.get("https://blog-nuxt-c3be8-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
			.then((res) => {
				const postsArray = []
				for (let key in res.data) {
					postsArray.push({ ...res.data[key], id: key })
				}

				commit("setPosts", postsArray)
				// commit("addPost", { ...post, id: res.data.name })
			})
			.catch((e) => console.log(e))
	},
	authUser({ commit }, authData) {
		const key = "AIzaSyBZiNbImHLSNA4jyMtOQELSqyXsypz4bng"
		return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
			email: authData.email,
			password: authData.password,
			returnSecureToken: false,
		})
	},
	addPost({ commit }, post) {
		return axios
			.post("https://blog-nuxt-c3be8-default-rtdb.europe-west1.firebasedatabase.app/posts.json", post)
			.then((res) => {
				// console.log(res);
				commit("addPost", { ...post, id: res.data.name })
			})
			.catch((e) => console.log(e))
	},
	editPost({ commit }, post) {
		return axios
			.put(`https://blog-nuxt-c3be8-default-rtdb.europe-west1.firebasedatabase.app/posts/${post.id}.json`, post)
			.then((res) => {
				commit("editPost", post)
			})
			.catch((e) => console.log(e))
	},
	addComment({ commit }, comment) {
		return axios
			.post("https://blog-nuxt-c3be8-default-rtdb.europe-west1.firebasedatabase.app/comments.json", comment)
			.then((res) => {
				// console.log(res);
				commit("addComment", { ...comment, id: res.data.name })
			})
			.catch((e) => console.log(e))
	},
}

export const getters = {
	getPostsLoaded(state) {
		return state.postsLoaded
	},
}
