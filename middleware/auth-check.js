export default function (contex) {
	if (process.client) {
		contex.store.dispatch("initAuth")
	}
}
