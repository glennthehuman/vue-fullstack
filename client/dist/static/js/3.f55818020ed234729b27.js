webpackJsonp([3,7,9],{64:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{form:{username:"",password:""},formVisible:!1,users:[]}},methods:{fetch:function(){var e=this;this.$http.get("users").then(function(e){return e.json()}).then(function(t){e.users=t.data})["catch"](function(e){console.error(e)})},createUser:function(){this.formVisible=!0},cancelForm:function(){this.form.username="",this.form.password="",this.formVisible=!1},saveForm:function(){var e=this;this.$http.post("users",this.form).then(function(){e.cancelForm(),e.$message({type:"success",message:"新增成功"}),e.fetch()})["catch"](function(t){e.$message({type:"error",message:422===t.status?"用户名已存在":"新增失败"})})},deleteUser:function(e){var t=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{type:"warning"}).then(function(){t.$http["delete"]("users/"+e).then(function(){t.$message({type:"success",message:"删除成功!"}),t.fetch()})})["catch"](function(){})}},created:function(){this.fetch()}}},126:function(e,t,r){var s,n;s=r(64);var o=r(137);n=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(n=s=s["default"]),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,e.exports=s},137:function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{style:"width:100%"}},[_h("el-breadcrumb",{attrs:{separator:"/",style:"margin-bottom:.5rem"}},[_h("el-breadcrumb-item",["首页"])," ",_h("el-breadcrumb-item",["用户管理"])])," ",_h("el-button",{attrs:{type:"primary",icon:"plus",style:"margin-bottom:.5rem"},nativeOn:{click:function(e){createUser(e)}}},["新增"])," ",_h("el-table",{attrs:{data:users,border:"",style:"width: 100%"}},[_h("el-table-column",{attrs:{property:"_id",label:"ID",sortable:"",width:"220"}})," ",_h("el-table-column",{attrs:{property:"username",label:"用户名",sortable:"","min-width":"240"}})," ",_h("el-table-column",{attrs:{property:"role",label:"角色","min-width":"100"}})," ",_h("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},inlineTemplate:{render:function(){with(this)return[_h("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){deleteUser(row._id)}}},["删除"])]},staticRenderFns:[]}})])," ",_h("el-dialog",{directives:[{name:"model",rawName:"v-model",value:formVisible,expression:"formVisible"}],attrs:{title:"新增用户"},domProps:{value:formVisible},on:{input:function(e){formVisible=e}}},[_h("el-form",{attrs:{model:form}},[_h("el-form-item",{attrs:{label:"用户名"}},[_h("el-input",{directives:[{name:"model",rawName:"v-model",value:form.username,expression:"form.username"}],domProps:{value:form.username},on:{input:function(e){form.username=e}}})])," ",_h("el-form-item",{attrs:{label:"密码"}},[_h("el-input",{directives:[{name:"model",rawName:"v-model",value:form.password,expression:"form.password"}],attrs:{type:"password"},domProps:{value:form.password},on:{input:function(e){form.password=e}}})])])," ",_h("span",{slot:"footer",staticClass:"dialog-footer"},[_h("el-button",{nativeOn:{click:function(e){cancelForm(e)}}},["取 消"])," ",_h("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){saveForm(e)}}},["确 定"])])])])},staticRenderFns:[]}}});
//# sourceMappingURL=3.f55818020ed234729b27.js.map