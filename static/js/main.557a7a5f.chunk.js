(this.webpackJsonpidp=this.webpackJsonpidp||[]).push([[0],{141:function(e,t,n){e.exports={Container:"styles_Container__M7QhU",Container_Item:"styles_Container_Item__3EGcr"}},185:function(e,t,n){e.exports={Container:"styles_Container__3YvSW"}},187:function(e,t,n){e.exports={Error:"styles_Error__1izEu"}},200:function(e,t,n){e.exports={Wrap:"styles_Wrap__3j7Cr"}},201:function(e,t,n){e.exports={Container:"styles_Container__1BcqC"}},207:function(e,t,n){e.exports=n(294)},208:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);n(208),n(209);var a=n(0),r=n.n(a),i=n(12),c=n.n(i),l=n(47),o=n(177),u=Object({NODE_ENV:"production",PUBLIC_URL:"/idp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BASE_PATH:"spaces/vbcxif4jja7r/environments/master/entries",REACT_APP_MANAGEMENT_TOKEN:"CFPAT-4QNclnrp74gG_ynU0vuzr-rfMBI84ZqH_jpr0uOYBeU",REACT_APP_BASE_URL_MANAGEMENT:"https://api.contentful.com/"}),m=u.REACT_APP_MANAGEMENT_TOKEN,s=u.REACT_APP_BASE_URL_MANAGEMENT,d=new o.RestLink({uri:s,headers:{Authorization:"Bearer ".concat(m),"Content-Type":"application/vnd.contentful.management.v1+json"}}),b=new l.ApolloClient({link:d,cache:new l.InMemoryCache}),f=n(298),E=n(303),O=n(302),p={width:240},j=Object(a.memo)((function(e){var t=e.name,n=e.description,a=e.imageUrl,i=e.onDeleteClick,c=e.onEditClick;return r.a.createElement(f.a,{style:p,cover:r.a.createElement("img",{alt:t,src:a}),actions:[r.a.createElement("button",{key:"Delete btn",onClick:i},r.a.createElement(E.a,null)),r.a.createElement("button",{key:"Edit btn",onClick:c},r.a.createElement(O.a,null))]},r.a.createElement(f.a.Meta,{title:t,description:n}))})),h="EDIT",v="DELETE",C=n(297),_=n(185),g=n.n(_),S=Object(a.memo)((function(){return r.a.createElement("div",{className:g.a.Container},r.a.createElement(C.a,{size:"large"}))})),y=n(300),I=n(145),k=n(96),A=n(299),T=n(301),M=n(304),P={required:!0},R=[{name:"name",label:"Name",validation:P},{name:"description",label:"Description",validation:P},{name:"image",label:"Image URL",validation:P}],N=n(187),U=n.n(N),w={width:"100%"},q=Object(a.memo)((function(e){var t=e.onSetRef,n=e.onSubmit,i=e.initialValues,c=Object(I.b)({defaultValues:i}),l=c.handleSubmit,o=c.control,u=c.errors,m=Object(a.useCallback)((function(e){return function(t){var n=t.name,a=t.label,i=t.validation;return r.a.createElement(k.a,{key:n},r.a.createElement("label",null,r.a.createElement(A.a.Title,{level:5},a)),r.a.createElement(I.a,{name:n,as:r.a.createElement(T.a,{placeholder:a,className:e[n]?U.a.Error:void 0}),control:o,rules:i}))}}),[o]);return r.a.createElement("form",{onSubmit:l(n),ref:t},r.a.createElement(M.b,{direction:"vertical",size:"large",style:w},R.map(m(u))))})),x=n(141),D=n.n(x),B=n(36),L=n(108);function $(){var e=Object(L.a)(['\n  mutation updateItem($input: updatedItem!, $input: config!) {\n    updateItem(input: $updatedItem, config: $config)\n      @rest(type: "Items", path: "','/{args.config.id}", method: "PUT") {\n      id\n    }\n  }\n']);return $=function(){return e},e}function W(){var e=Object(L.a)(['\n  mutation deleteItem($input: itemId!) {\n    deleteItem(input: $itemId)\n      @rest(type: "Items", path: "','/{args.input}", method: "DELETE") {\n      id\n    }\n  }\n']);return W=function(){return e},e}function F(){var e=Object(L.a)(['\n  mutation addItem($input: newItem!) {\n    addItem(input: $newItem)\n      @rest(type: "Items", path: "','", method: "POST") {\n      id\n    }\n  }\n']);return F=function(){return e},e}function G(){var e=Object(L.a)(['\n  query {\n    items @rest(type: "Items", path: "','") {\n      items {\n        fields {\n          name\n          description\n          image\n        }\n        sys {\n          id\n          version\n        }\n      }\n      total\n    }\n  }\n']);return G=function(){return e},e}var V="spaces/vbcxif4jja7r/environments/master/entries",z=Object(l.gql)(G(),V),K=Object(l.gql)(F(),V),H=Object(l.gql)(W(),V),Q=Object(l.gql)($(),V),J=function(e){e.writeQuery({query:z,data:{items:{__typename:"Users"}}})},X=function(){var e=Object(a.useRef)(null),t=Object(a.useCallback)((function(t){e.current=t}),[]),n=Object(a.useCallback)((function(){e.current&&e.current.dispatchEvent(new Event("submit",{cancelable:!0}))}),[]);return Object(a.useMemo)((function(){return{handleSetRef:t,handleSubmit:n}}),[t,n])},Y=n(42),Z=n(53),ee=function(e){return{fields:Object(Z.a)({},Object.entries(e).reduce((function(e,t){var n=Object(B.a)(t,2),a=n[0],r=n[1];return Object(Z.a)(Object(Z.a)({},e),{},Object(Y.a)({},a,{"en-US":r}))}),{}))}},te=function(e){return Object(Z.a)(Object(Z.a)({},Object.entries(e.fields).reduce((function(e,t){var n=Object(B.a)(t,2),a=n[0],r=n[1];return Object(Z.a)(Object(Z.a)({},e),{},Object(Y.a)({},a,r&&r["en-US"]))}),{})),{},{id:e.sys.id,version:e.sys.version})},ne=n(130),ae=n.n(ne),re=function(e){return Object.entries(e).reduce((function(e,t){var n=Object(B.a)(t,2),a=n[0],r=n[1];return Object(Z.a)(Object(Z.a)({},e),{},Object(Y.a)({},a,ae()(r)))}),{})},ie=function(){var e=Object(l.useQuery)(z),t=e.data,n=e.loading,r=Object(l.useMutation)(H,{update:J}),i=Object(B.a)(r,2),c=i[0],o=i[1].loading,u=Object(l.useMutation)(Q,{update:J}),m=Object(B.a)(u,2),s=m[0],d=m[1],b=d.loading,f=d.client,E=Object(a.useState)(null),O=Object(B.a)(E,2),p=O[0],j=O[1],C=X(),_=C.handleSetRef,g=C.handleSubmit,S=null===t||void 0===t?void 0:t.items.items.map(te),y=n||o||b,I=Object(a.useCallback)((function(e){j(e)}),[]),k=Object(a.useCallback)((function(e){var t=e.id;c({variables:{itemId:t}})}),[c]),A=Object(a.useCallback)((function(e,t){return function(){switch(e){case h:I(t);break;case v:k(t)}}}),[k,I]),T=Object(a.useCallback)((function(){j(null)}),[]),M=Object(a.useCallback)((function(e){var t=p,n=t.id,a=t.version;f.link.headers.set("X-Contentful-Version",a),s({variables:{updatedItem:ee(re(e)),config:{id:n,version:a}}}),T()}),[p,f,s,T]);return Object(a.useMemo)((function(){return{handleActionClick:A,anyInPending:y,items:S,selectedItem:p,handleSetRef:_,handleSubmitForm:g,handleClearSelectedItem:T,handleSubmitUpdate:M}}),[A,y,S,p,_,g,T,M])},ce=Object(a.memo)((function(){var e=ie(),t=e.items,n=e.handleActionClick,i=e.anyInPending,c=e.selectedItem,l=e.handleSetRef,o=e.handleSubmitForm,u=e.handleClearSelectedItem,m=e.handleSubmitUpdate,s=Object(a.useCallback)((function(e){var t=e.id,a=e.description,i=e.name,c=e.image,l=e.price;return r.a.createElement("div",{key:t,className:D.a.Container_Item},r.a.createElement(j,{onDeleteClick:n(v,e),onEditClick:n(h,e),description:a,name:i,imageUrl:c,price:l}))}),[n]);return r.a.createElement("div",{className:D.a.Container},r.a.createElement(y.a,{title:"Update item",destroyOnClose:!0,visible:!!c,onOk:o,onCancel:u},r.a.createElement(q,{initialValues:c,onSubmit:m,onSetRef:l})),i&&r.a.createElement(S,null),null===t||void 0===t?void 0:t.map(s))})),le=n(65),oe=n(78),ue=function(){var e=Object(a.useState)(!1),t=Object(B.a)(e,2),n=t[0],r=t[1],i=Object(a.useCallback)((function(){r((function(e){return!e}))}),[]);return Object(a.useMemo)((function(){return{exist:n,handleToggle:i}}),[n,i])},me=n(34),se=["name","description","image"],de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(me.h)();return Object(a.useMemo)((function(){var n=new URLSearchParams(t.search);return se.concat(Array.isArray(e)?e:[e]).reduce((function(e,t){return Object(Z.a)(Object(Z.a)({},e),n.get(t)&&Object(Y.a)({},t,ae()(n.get(t))))}),{})}),[e,t.search])},be=function(){var e=ue(),t=e.handleToggle,n=e.exist,r=Object(me.g)().replace,i=X(),c=i.handleSetRef,o=i.handleSubmit,u=Object(l.useMutation)(K,{update:J}),m=Object(B.a)(u,2),s=m[0],d=m[1],b=d.loading,f=d.client,E=de(),O=Object(a.useMemo)((function(){return!!Object.keys(E).length}),[E]),p=Object(a.useCallback)((function(){O?r("/idp/home"):t()}),[t,O,r]),j=Object(a.useCallback)((function(e){f.link.headers.set("X-Contentful-Content-Type","image"),s({variables:{newItem:ee(re(e))}}),p()}),[s,f,p]);return Object(a.useMemo)((function(){return{addItemPending:b,handleToggleModal:t,showModal:n,handleCloseModal:p,handleSubmitCreate:j,handleSubmitForm:o,handleSetRef:c,queryExist:O,queryParams:E}}),[b,t,n,p,j,o,c,O,E])},fe=n(200),Ee=n.n(fe),Oe=Object(a.memo)((function(){var e=be(),t=e.showModal,n=e.handleToggleModal,a=e.handleSubmitCreate,i=e.handleSubmitForm,c=e.handleSetRef,l=e.addItemPending,o=e.queryParams,u=e.queryExist,m=e.handleCloseModal;return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement(S,null),r.a.createElement(y.a,{destroyOnClose:!0,title:"Add item",visible:t||u,onOk:i,onCancel:m},r.a.createElement(q,{initialValues:o,onSubmit:a,onSetRef:c})),r.a.createElement("div",{className:Ee.a.Wrap},r.a.createElement(k.a,{align:"middle"},r.a.createElement(le.a,{span:2,push:4},r.a.createElement(A.a.Title,{level:3},"IDP")),r.a.createElement(le.a,{span:2,push:16},r.a.createElement(oe.a,{onClick:n},"Add item")))))})),pe=n(201),je=n.n(pe),he=Object(a.memo)((function(e){var t=e.children;return r.a.createElement("div",{className:je.a.Container},r.a.createElement(Oe,null),t)})),ve=n(113),Ce=Object(a.memo)((function(){return r.a.createElement(l.ApolloProvider,{client:b},r.a.createElement(ve.a,null,r.a.createElement(me.d,null,r.a.createElement(me.b,{path:"/idp/home",exact:!0,component:function(){return r.a.createElement(he,null,r.a.createElement(ce,null))}}),r.a.createElement(me.a,{to:"/idp/home"}))))}));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce,null)),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.557a7a5f.chunk.js.map