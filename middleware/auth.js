export default function (contex) {
   if (!contex.store.getters.checkAuthUser){ 
      contex.redirect("/admin/auth")
   }
}
