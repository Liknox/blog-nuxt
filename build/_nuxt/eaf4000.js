(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{328:function(t,e,n){var content=n(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("2bc07556",content,!0,{sourceMap:!1})},338:function(t,e,n){"use strict";n(328)},339:function(t,e,n){var o=n(28)((function(i){return i[1]}));o.push([t.i,".contact{background-color:#4f68f4;text-align:center}.contact,.contact .title{color:#fff}.contact .controls{margin:30px 0}.contact-form{margin:30px auto;max-width:600px}@media(max-width:430px){.contact-me-title{font-size:25px;margin-bottom:0!important}.contact-form{margin-bottom:10px;margin-top:10px}.contact .controls{margin-bottom:0;margin-top:10px}}",""]),o.locals={},t.exports=o},341:function(t,e,n){"use strict";n.r(e);n(40);var o={data:function(){return{message:null,user:{name:"",email:"",text:""}}},methods:{onSubmit:function(){console.log(this.user),this.message="Submitted!",this.user.name="",this.user.email="",this.user.text=""}}},c=(n(338),n(8)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"contact"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"title contact-me-title"},[t._v("Contact me!")]),t._v(" "),t.message?e("Message",{attrs:{message:t.message}}):t._e(),t._v(" "),e("form",{staticClass:"contact-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("AppInput",{model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}},[t._v("Name:")]),t._v(" "),e("AppInput",{attrs:{type:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}},[t._v("Email:")]),t._v(" "),e("AppTextArea",{model:{value:t.user.text,callback:function(e){t.$set(t.user,"text",e)},expression:"user.text"}},[t._v("Text: ")]),t._v(" "),e("div",{staticClass:"controls"},[e("AppButton",{staticClass:"btnWhite"},[t._v("Submit !")])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);