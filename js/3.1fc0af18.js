(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0565":function(t,e,i){"use strict";var n=i("1aee"),a=i.n(n);a.a},"1aee":function(t,e,i){},"8b24":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"q-pa-md flex column"},[n("div",{staticClass:"row q-mb-xs",staticStyle:{"align-items":"center"}},[n("div",{staticClass:"text-h5 text-weight-bold"},[t._v("CS 1301 Queue")]),n("q-space"),n("q-btn",{attrs:{flat:"",round:"",icon:"person"},on:{click:function(e){return t.$refs.identity.showModal()}}}),n("q-btn",{attrs:{flat:"",round:"",icon:"settings"},on:{click:function(e){return t.$refs.settings.showModal()}}})],1),t.isKiosk?n("div",{staticClass:"ultra col"},[n("div",{staticClass:"flex column col-grow col half left-half"},[n("draggable",{staticClass:"queue-scroll",attrs:{group:"person",disabled:!(t.isAdmin&&t.queue.length)},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!0},update:t.updateQueue},model:{value:t.queue,callback:function(e){t.queue=e},expression:"queue"}},[t.queue.length?n("div",t._l(t.queue,(function(e,i){return n("div",{key:e.animal,staticClass:"queue-row",class:t.isAdmin?" cursor-pointer":""},[t.isAdmin&&!t.$q.screen.lt.sm?n("q-tooltip",{attrs:{anchor:"center right",self:"center right",offset:[-55,0],"content-style":"font-size: 12px; padding: 5px 10px","transition-show":"flip-right","transition-hide":"flip-left"}},[t._v("\n              "+t._s(e.name)+"\n            ")]):t._e(),n("div",{staticClass:"avatar flex flex-center tada",style:"background-color: "+t.getColor(e)+";"},[n("img",{attrs:{src:t.getIcon(e),alt:"Avatar"}})]),n("div",{staticClass:"name text-h6"},[t._v("\n              "+t._s(i+1)+". "+t._s(e.animal)+"\n            ")]),n("q-space"),t.isAdmin?n("q-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],attrs:{icon:"close",round:"",flat:""},on:{click:function(e){return e.stopPropagation(),t.dequeue(i)}}}):t._e()],1)})),0):n("div",{staticClass:"flex column flex-center col q-mt-lg empty-queue",staticStyle:{height:"90%",color:"#AAB2B8"}},[n("img",{staticStyle:{width:"200px"},attrs:{src:i("ea25"),alt:"Empty",draggable:"false"}}),n("div",{staticClass:"text-h5 text-weight-bold"},[t._v("Queue is empty!")])])]),t.isKiosk?n("q-form",{on:{submit:function(e){return t.enqueue()}}},[n("div",{staticClass:"row q-gutter-sm q-mt-md"},[n("q-input",{ref:"gtid",staticClass:"text-h6 col",attrs:{outlined:"",type:t.hideGtid?"password":"text",mask:"#########",label:"9 Digit #GTID",autofocus:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.hideGtid?"visibility":"visibility_off"},on:{click:function(e){t.hideGtid=!t.hideGtid}}})]},proxy:!0}],null,!1,4070834745),model:{value:t.gtid,callback:function(e){t.gtid=e},expression:"gtid"}}),n("q-btn",{staticClass:"bg-primary text-white",attrs:{loading:t.loading,disable:t.loading,icon:"arrow_forward",type:"submit"}})],1)]):t._e()],1),t.isKiosk?n("div",{staticClass:"flex col flex-center q-ml-md q-pa-sm half right-half"},[t.admins.length?n("div",[n("div",{staticClass:"text-h5 text-center text-weight-bold"},[t._v("TAs on Duty:")]),n("div",{staticClass:"admin-container"},t._l(t.admins,(function(e,i){return n("div",{key:e.name,staticClass:"admin q-ma-md",class:t.isAdmin?"removable cursor-pointer":"",on:{click:function(e){return e.stopPropagation(),t.removeAdmin(i)}}},[n("q-avatar",{attrs:{size:"170px"}},[n("img",{attrs:{src:"../statics/people/"+t.adminName(e).path+".png",alt:t.adminName(e).display}})]),n("div",{staticClass:"text-center text-weight-bold"},[t._v("\n              "+t._s(t.adminName(e).display)+"\n            ")])],1)})),0)]):n("div",[n("div",{staticClass:"text-h4 text-center text-weight-bold"},[t._v("No TAs on Duty")])])]):t._e()]):n("div",[t.queue.length?n("draggable",{attrs:{group:"person",disabled:!t.isAdmin},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1},update:t.updateQueue},model:{value:t.queue,callback:function(e){t.queue=e},expression:"queue"}},t._l(t.queue,(function(e,i){return n("div",{key:e.animal,staticClass:"queue-row",class:t.isAdmin?" cursor-pointer":""},[t.isAdmin?n("q-tooltip",{attrs:{anchor:"center right",self:"center right",offset:[-55,0],"content-style":"font-size: 12px; padding: 5px 10px","transition-show":"flip-right","transition-hide":"flip-left"}},[t._v("\n          "+t._s(e.name)+"\n        ")]):t._e(),n("div",{staticClass:"avatar flex flex-center tada",style:"background-color: "+t.getColor(e)+";"},[n("img",{attrs:{src:t.getIcon(e),alt:"Avatar"}})]),n("div",{staticClass:"name text-h6"},[t._v(t._s(i+1)+". "+t._s(e.animal))]),n("q-space"),t.isAdmin?n("q-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],attrs:{icon:"close",round:"",flat:""},on:{click:function(e){return e.stopPropagation(),t.dequeue(i)}}}):t._e()],1)})),0):n("div",{staticClass:"flex column flex-center col q-mt-xl empty-queue",staticStyle:{height:"100%",color:"#AAB2B8"},attrs:{draggable:"false"}},[n("img",{staticStyle:{width:"200px"},attrs:{src:i("ea25"),alt:"Empty"}}),n("div",{staticClass:"text-h5 text-weight-bold"},[t._v("Queue is empty!")])])],1),n("SettingsModal",{ref:"settings",on:{"clear-queue":function(e){return t.clearQueue()},"clear-admins":function(e){return t.clearAdmins()},request:t.checkAdmin}}),n("IdentityModal",{ref:"identity",on:{request:t.checkIdentity}})],1)},a=[],s=(i("7f7f"),i("310e")),o=i.n(s),r=i("cc8f"),l=i("8aa5"),c=i.n(l),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-dialog",{on:{hide:function(e){return t.closeModal()}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("q-card",{staticClass:"modal-md"},[i("q-card-section",{staticClass:"row items-center q-pb-sm"},[i("div",{staticClass:"text-h6"},[t._v("Settings")]),i("q-space"),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),i("q-separator",{attrs:{inset:""}}),i("q-card-section",[i("div",{staticClass:"q-mb-sm text-weight-bold"},[t._v("Appearance:")]),i("q-toggle",{attrs:{value:t.$q.dark.isActive,icon:t.$q.dark.isActive?"brightness_2":"brightness_5",label:t.$q.dark.isActive?"Dark Mode":"Light Mode"},on:{input:function(e){return t.toggleDarkMode()}}})],1),i("q-separator",{attrs:{inset:""}}),t.isAdmin?i("q-card-section",[i("div",{staticClass:"q-mb-sm text-weight-bold"},[t._v("Queue Control:")]),i("q-toggle",{attrs:{value:t.isKiosk,label:"Kiosk Mode",icon:t.isKiosk?"add_to_queue":"smartphone"},on:{input:function(e){return t.toggleKiosk()}}}),i("br"),i("q-btn",{staticClass:"bg-primary text-white q-ma-sm",attrs:{icon:"delete",label:"Clear Queue"},on:{click:function(e){return e.stopPropagation(),t.clearQueue()}}}),i("q-btn",{staticClass:"bg-primary text-white q-ma-sm",attrs:{icon:"people",label:"Clear Admins"},on:{click:function(e){return e.stopPropagation(),t.clearAdmins()}}}),i("q-btn",{staticClass:"bg-primary text-white q-ma-sm",attrs:{icon:"lock",label:"Turn off Admin Mode"},on:{click:function(e){return e.stopPropagation(),t.setAdmin(!1)}}})],1):i("q-card-section",[i("q-form",{on:{submit:function(e){return t.requestAuth()}}},[t._v("\n        You must be a TA to access other queue settings. Please enter your\n        GTID:\n        "),i("div",{staticClass:"row q-gutter-sm q-mt-sm"},[i("q-input",{staticClass:"col text-h6",attrs:{outlined:"",mask:"#########",label:"9 Digit #GTID",autofocus:"",type:t.hideGtid?"password":"text"},scopedSlots:t._u([{key:"append",fn:function(){return[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.hideGtid?"visibility":"visibility_off"},on:{click:function(e){t.hideGtid=!t.hideGtid}}})]},proxy:!0}]),model:{value:t.gtid,callback:function(e){t.gtid=e},expression:"gtid"}}),i("q-btn",{staticClass:"bg-primary text-white",attrs:{loading:t.loading,disable:t.loading,icon:"arrow_forward",type:"submit"}})],1)])],1)],1)],1)},d=[],h=(i("f751"),{name:"SettingsModal",mixins:[r["a"]],onIdle:function(){this.closeModal()},data:function(){return{show:!1,gtid:"",hideGtid:!0}},methods:{showModal:function(){this.show=!0},closeModal:function(){Object.assign(this.$data,this.$options.data())},toggleDarkMode:function(){this.$q.dark.toggle()},requestAuth:function(){var t=this.hash(this.gtid);this.$emit("request",t)},clearQueue:function(){this.$emit("clear-queue")},clearAdmins:function(){this.$emit("clear-admins")}}}),m=h,p=i("2877"),f=i("eebe"),g=i.n(f),q=i("24e8"),v=i("f09f"),b=i("a370"),y=i("2c91"),x=i("9c40"),w=i("eb85"),C=i("9564"),k=i("0378"),_=i("27f9"),A=i("0016"),Q=i("7f67"),I=Object(p["a"])(m,u,d,!1,null,null,null),S=I.exports;g()(I,"components",{QDialog:q["a"],QCard:v["a"],QCardSection:b["a"],QSpace:y["a"],QBtn:x["a"],QSeparator:w["a"],QToggle:C["a"],QForm:k["a"],QInput:_["a"],QIcon:A["a"]}),g()(I,"directives",{ClosePopup:Q["a"]});var $=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-dialog",{on:{hide:function(e){return t.closeModal()}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("q-card",{staticClass:"modal-md"},[i("q-card-section",{staticClass:"row items-center q-pb-sm"},[i("div",{staticClass:"text-h6"},[t._v("Who Am I?")]),i("q-space"),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),i("q-separator",{attrs:{inset:""}}),i("q-card-section",[i("q-form",{on:{submit:function(e){return t.requestIdentity()}}},[t._v("\n        To preserve your anonymity as a student, we replaced all student names\n        with colored animals. See your animal by entering your GTID below\n        (you'll also be able to see when you get to the top of queue!)\n        "),i("div",{staticClass:"row q-gutter-sm q-mt-sm"},[i("q-input",{staticClass:"col text-h6",attrs:{outlined:"",mask:"#########",label:"9 Digit #GTID",autofocus:"",type:t.hideGtid?"password":"text"},scopedSlots:t._u([{key:"append",fn:function(){return[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.hideGtid?"visibility":"visibility_off"},on:{click:function(e){t.hideGtid=!t.hideGtid}}})]},proxy:!0}]),model:{value:t.gtid,callback:function(e){t.gtid=e},expression:"gtid"}}),i("q-btn",{staticClass:"bg-primary text-white",attrs:{loading:t.loading,disable:t.loading,icon:"arrow_forward",type:"submit"}})],1)]),t.person.name?i("div",[i("q-separator",{attrs:{inset:""}}),i("div",{staticClass:"text-center text-h6 q-my-sm"},[t._v("You are:")]),i("div",{staticClass:"queue-row"},[t.$q.screen.lt.sm?t._e():i("q-tooltip",{attrs:{anchor:"center right",self:"center right",offset:[-55,0],"content-style":"font-size: 12px; padding: 5px 10px","transition-show":"flip-right","transition-hide":"flip-left",value:!0,"no-parent-event":""}},[t._v("\n            "+t._s(t.person.name)+"\n          ")]),i("div",{staticClass:"avatar flex flex-center tada",style:"background-color: "+t.getColor(t.person)+";"},[i("img",{attrs:{src:t.getIcon(t.person),alt:"Avatar"}})]),i("div",{staticClass:"name text-h6"},[t._v(t._s(t.person.animal))])],1)],1):t._e()],1)],1)],1)},G=[],M={name:"IdentityModal",mixins:[r["a"]],data:function(){return{show:!1,gtid:"",hideGtid:!0,person:{name:"",animal:"",role:""}}},onIdle:function(){console.log("Idle behavior detected"),this.isKiosk&&(this.closeModal(),this.setCurrentUser(""),this.hideGtid=!0)},methods:{showModal:function(){this.show=!0},closeModal:function(){Object.assign(this.$data,this.$options.data())},requestIdentity:function(){var t=this.hash(this.gtid);this.$emit("request",t)},setPerson:function(t){this.person=t,this.setCurrentUser(t.animal)}}},T=M,D=(i("e807"),i("05c0")),P=Object(p["a"])(T,$,G,!1,null,"54197da0",null),N=P.exports;g()(P,"components",{QDialog:q["a"],QCard:v["a"],QCardSection:b["a"],QSpace:y["a"],QBtn:x["a"],QSeparator:w["a"],QForm:k["a"],QInput:_["a"],QIcon:A["a"],QTooltip:D["a"]}),g()(P,"directives",{ClosePopup:Q["a"]});var K={name:"Queue",mixins:[r["a"]],components:{draggable:o.a,SettingsModal:S,IdentityModal:N},onIdle:function(){console.log("Idle behavior detected"),this.isKiosk&&(this.focusInput(),this.clearCurrentUser(),this.hideGtid=!0)},data:function(){return{gtid:"",hideGtid:!0,queue:[],queueHeight:500,admins:[],db:null}},methods:{enqueue:function(){if(9===this.gtid.length)if(this.isKiosk){var t=this.hash(this.gtid),e=this;e.loading=!0;var i=e.db.collection("users").doc(t);i.get().then((function(t){if(e.loading=!1,t.exists){var i=t.data(),n=i.role.toLowerCase();"ta"===n||"teacher"===n?(e.admins.filter((function(t){return t.animal===i.animal})).length<=0&&(e.admins.push({animal:i.animal,name:i.name}),e.updateAdmins()),e.setAdmin(!0),e.notify("Welcome, ".concat(e.adminName(i).display,"!"),"green")):e.queue.filter((function(t){return t.animal===i.animal})).length<=0?(e.queue.push({animal:i.animal,name:i.name}),e.updateQueue(),e.notify("Welcome, ".concat(e.adminName(i).display,"!"),"green")):e.notify("You're already on the queue!","green")}else e.notify("Uh oh, looks like you're not in our roster!","red")})).catch((function(){e.loading=!1,e.notify("Uh oh, something went wrong!","red")})),this.gtid="",this.focusInput()}else this.notify("Please visit the 1301 Helpdesk to add yourself to the queue","green")},checkIdentity:function(t){var e=this;e.loading=!0;var i=e.db.collection("users").doc(t);i.get().then((function(t){e.loading=!1,t.exists?e.$refs.identity.setPerson(t.data()):e.notify("Uh oh, looks like you're not in our roster!","red")})).catch((function(){e.loading=!1,e.notify("Uh oh, something went wrong!","red")}))},checkAdmin:function(t){var e=this;e.loading=!0;var i=e.db.collection("users").doc(t);i.get().then((function(t){if(e.loading=!1,t.exists){var i=t.data().role.toLowerCase();"ta"===i||"teacher"===i?e.setAdmin(!0):e.notify("You are not authorized.","red")}else e.notify("You are not authorized.","red")})).catch((function(){e.loading=!1,e.notify("Uh oh, something went wrong!","red")}))},dequeue:function(t){this.isAdmin&&(this.queue.splice(t,1),this.updateQueue())},moveTo:function(t,e){var i=this.queue.splice(t,1)[0];this.queue.splice(e,0,i)},resizeHandler:function(t){this.queueHeight=t.height},focusInput:function(){this.$refs.gtid.focus()},removeAdmin:function(t){this.isAdmin&&(this.admins.splice(t,1),this.updateAdmins())},clearAdmins:function(){var t=this;this.isAdmin&&this.$q.dialog({title:"Clear TAs",parent:this,message:"Are you sure you want to remove all TAs? This cannot be undone.",cancel:!0}).onOk((function(){t.admins=[],t.updateAdmins()}))},clearQueue:function(){var t=this;this.isAdmin&&this.$q.dialog({title:"Clear Queue",parent:this,message:"Are you sure you want to clear the queue? This cannot be undone.",cancel:!0}).onOk((function(){t.queue=[],t.updateQueue()}))},updateQueue:function(){var t=this;console.log("Queue order has changed"),t.db.collection("students").doc("student-queue").set({queue:t.queue}).then((function(){console.log("Queue successfully written!")})).catch((function(t){console.error("Error writing queue: ",t)}))},updateAdmins:function(){var t=this;t.db.collection("tas").doc("ta-queue").set({queue:t.admins}).then((function(){console.log("Admins successfully written!")})).catch((function(t){console.error("Error writing admins: ",t)}))}},created:function(){var t=this,e=["Qpa7U","yA_fay2V","kyCe8mP","esz-4NyQ","AIzaS","rNR1Vj"];c.a.initializeApp({apiKey:e[4]+e[1]+e[3]+e[2]+e[5]+e[0],authDomain:"cs1301-queue.firebaseapp.com",databaseURL:"https://cs1301-queue.firebaseio.com",projectId:"cs1301-queue"}),t.db=c.a.firestore(),t.db.collection("students").doc("student-queue").onSnapshot((function(e){t.queue=e.data().queue})),t.db.collection("tas").doc("ta-queue").onSnapshot((function(e){t.admins=e.data().queue}))}},z=K,U=(i("0565"),i("9989")),j=i("cb32"),B=i("714f"),E=Object(p["a"])(z,n,a,!1,null,null,null);e["default"]=E.exports;g()(E,"components",{QPage:U["a"],QSpace:y["a"],QBtn:x["a"],QTooltip:D["a"],QForm:k["a"],QInput:_["a"],QIcon:A["a"],QAvatar:j["a"]}),g()(E,"directives",{Ripple:B["a"]})},e807:function(t,e,i){"use strict";var n=i("eee4"),a=i.n(n);a.a},ea25:function(t,e,i){t.exports=i.p+"img/empty.33693375.png"},eee4:function(t,e,i){}}]);