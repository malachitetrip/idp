(this.webpackJsonpidp=this.webpackJsonpidp||[]).push([[0],{141:function(e,t,n){e.exports={Container:"styles_Container__M7QhU",Container_Item:"styles_Container_Item__3EGcr"}},185:function(e,t,n){e.exports={Container:"styles_Container__3YvSW"}},187:function(e,t,n){e.exports={Error:"styles_Error__1izEu"}},200:function(e,t,n){e.exports={Wrap:"styles_Wrap__3j7Cr"}},201:function(e,t,n){e.exports={Container:"styles_Container__1BcqC"}},207:function(e,t,n){e.exports=n(294)},208:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);n(208),n(209);var a=n(0),r=n.n(a),i=n(12),c=n.n(i),l=n(47),o=n(177),u=Object({NODE_ENV:"production",PUBLIC_URL:"/idp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BASE_URL_DELIVERY:"https://cdn.contentful.com/",REACT_APP_BASE_URL_MANAGEMENT:"https://api.contentful.com/",REACT_APP_PREVIEW_TOKEN:"eCrsNuzt-skjOh1akbEehUbwW4T8wzmKCY8kREt3CRc",REACT_APP_DELIVERY_TOKEN:"C03FLXj8QA4dw5AB-WxXel-Tj27THyUMtViLR3qGrk4",REACT_APP_MANAGEMENT_TOKEN:"CFPAT-4QNclnrp74gG_ynU0vuzr-rfMBI84ZqH_jpr0uOYBeU",REACT_APP_BASE_PATH:"spaces/vbcxif4jja7r/environments/master/entries"}),m=u.REACT_APP_MANAGEMENT_TOKEN,s=u.REACT_APP_BASE_URL_MANAGEMENT,d=new o.RestLink({uri:s,headers:{Authorization:"Bearer ".concat(m),"Content-Type":"application/vnd.contentful.management.v1+json"}}),b=new l.ApolloClient({link:d,cache:new l.InMemoryCache}),E=n(298),f=n(303),O=n(304),j={width:240},p=Object(a.memo)((function(e){var t=e.name,n=e.description,a=e.imageUrl,i=e.onDeleteClick,c=e.onEditClick;return r.a.createElement(E.a,{style:j,cover:r.a.createElement("img",{alt:t,src:a}),actions:[r.a.createElement("button",{key:"Delete btn",onClick:i},r.a.createElement(f.a,null)),r.a.createElement("button",{key:"Edit btn",onClick:c},r.a.createElement(O.a,null))]},r.a.createElement(E.a.Meta,{title:t,description:n}))})),h="EDIT",C="DELETE",v=n(297),_=n(185),g=n.n(_),S=Object(a.memo)((function(){return r.a.createElement("div",{className:g.a.Container},r.a.createElement(v.a,{size:"large"}))})),A=n(300),y=n(145),I=n(96),T=n(299),k=n(301),P=n(302),R={required:!0},M=[{name:"name",label:"Name",validation:R},{name:"description",label:"Description",validation:R},{name:"image",label:"Image URL",validation:R}],N=n(187),U=n.n(N),w={width:"100%"},q=Object(a.memo)((function(e){var t=e.onSetRef,n=e.onSubmit,i=e.initialValues,c=Object(y.b)({defaultValues:i}),l=c.handleSubmit,o=c.control,u=c.errors,m=Object(a.useCallback)((function(e){return function(t){var n=t.name,a=t.label,i=t.validation;return r.a.createElement(I.a,{key:n},r.a.createElement("label",null,r.a.createElement(T.a.Title,{level:5},a)),r.a.createElement(y.a,{name:n,as:r.a.createElement(k.a,{placeholder:a,className:e[n]?U.a.Error:void 0}),control:o,rules:i}))}}),[o]);return r.a.createElement("form",{onSubmit:l(n),ref:t},r.a.createElement(P.b,{direction:"vertical",size:"large",style:w},M.map(m(u))))})),x=n(141),D=n.n(x),L=n(36),B=n(108);function V(){var e=Object(B.a)(['\n  mutation updateItem($input: updatedItem!, $input: config!) {\n    updateItem(input: $updatedItem, config: $config)\n      @rest(type: "Items", path: "','/{args.config.id}", method: "PUT") {\n      id\n    }\n  }\n']);return V=function(){return e},e}function W(){var e=Object(B.a)(['\n  mutation deleteItem($input: itemId!) {\n    deleteItem(input: $itemId)\n      @rest(type: "Items", path: "','/{args.input}", method: "DELETE") {\n      id\n    }\n  }\n']);return W=function(){return e},e}function K(){var e=Object(B.a)(['\n  mutation addItem($input: newItem!) {\n    addItem(input: $newItem)\n      @rest(type: "Items", path: "','", method: "POST") {\n      id\n    }\n  }\n']);return K=function(){return e},e}function $(){var e=Object(B.a)(['\n  query {\n    items @rest(type: "Items", path: "','") {\n      items {\n        fields {\n          name\n          description\n          image\n        }\n        sys {\n          id\n          version\n        }\n      }\n      total\n    }\n  }\n']);return $=function(){return e},e}var z="spaces/vbcxif4jja7r/environments/master/entries",F=Object(l.gql)($(),z),G=Object(l.gql)(K(),z),H=Object(l.gql)(W(),z),Q=Object(l.gql)(V(),z),Y=function(e){e.writeQuery({query:F,data:{items:{__typename:"Users"}}})},X=function(){var e=Object(a.useRef)(null),t=Object(a.useCallback)((function(t){e.current=t}),[]),n=Object(a.useCallback)((function(){e.current&&e.current.dispatchEvent(new Event("submit",{cancelable:!0}))}),[]);return Object(a.useMemo)((function(){return{handleSetRef:t,handleSubmit:n}}),[t,n])},J=n(42),Z=n(53),ee=function(e){return{fields:Object(Z.a)({},Object.entries(e).reduce((function(e,t){var n=Object(L.a)(t,2),a=n[0],r=n[1];return Object(Z.a)(Object(Z.a)({},e),{},Object(J.a)({},a,{"en-US":r}))}),{}))}},te=function(e){return Object(Z.a)(Object(Z.a)({},Object.entries(e.fields).reduce((function(e,t){var n=Object(L.a)(t,2),a=n[0],r=n[1];return Object(Z.a)(Object(Z.a)({},e),{},Object(J.a)({},a,r&&r["en-US"]))}),{})),{},{id:e.sys.id,version:e.sys.version})},ne=n(130),ae=n.n(ne),re=function(e){return Object.entries(e).reduce((function(e,t){var n=Object(L.a)(t,2),a=n[0],r=n[1];return Object(Z.a)(Object(Z.a)({},e),{},Object(J.a)({},a,ae()(r)))}),{})},ie=function(){var e=Object(l.useQuery)(F),t=e.data,n=e.loading,r=Object(l.useMutation)(H,{update:Y}),i=Object(L.a)(r,2),c=i[0],o=i[1].loading,u=Object(l.useMutation)(Q,{update:Y}),m=Object(L.a)(u,2),s=m[0],d=m[1],b=d.loading,E=d.client,f=Object(a.useState)(null),O=Object(L.a)(f,2),j=O[0],p=O[1],v=X(),_=v.handleSetRef,g=v.handleSubmit,S=null===t||void 0===t?void 0:t.items.items.map(te),A=n||o||b,y=Object(a.useCallback)((function(e){p(e)}),[]),I=Object(a.useCallback)((function(e){var t=e.id;c({variables:{itemId:t}})}),[c]),T=Object(a.useCallback)((function(e,t){return function(){switch(e){case h:y(t);break;case C:I(t)}}}),[I,y]),k=Object(a.useCallback)((function(){p(null)}),[]),P=Object(a.useCallback)((function(e){var t=j,n=t.id,a=t.version;E.link.headers.set("X-Contentful-Version",a),s({variables:{updatedItem:ee(re(e)),config:{id:n,version:a}}}),k()}),[j,E,s,k]);return Object(a.useMemo)((function(){return{handleActionClick:T,anyInPending:A,items:S,selectedItem:j,handleSetRef:_,handleSubmitForm:g,handleClearSelectedItem:k,handleSubmitUpdate:P}}),[T,A,S,j,_,g,k,P])},ce=Object(a.memo)((function(){var e=ie(),t=e.items,n=e.handleActionClick,i=e.anyInPending,c=e.selectedItem,l=e.handleSetRef,o=e.handleSubmitForm,u=e.handleClearSelectedItem,m=e.handleSubmitUpdate,s=Object(a.useCallback)((function(e){var t=e.id,a=e.description,i=e.name,c=e.image,l=e.price;return r.a.createElement("div",{key:t,className:D.a.Container_Item},r.a.createElement(p,{onDeleteClick:n(C,e),onEditClick:n(h,e),description:a,name:i,imageUrl:c,price:l}))}),[n]);return r.a.createElement("div",{className:D.a.Container},r.a.createElement(A.a,{title:"Update item",destroyOnClose:!0,visible:!!c,onOk:o,onCancel:u},r.a.createElement(q,{initialValues:c,onSubmit:m,onSetRef:l})),i&&r.a.createElement(S,null),null===t||void 0===t?void 0:t.map(s))})),le=n(65),oe=n(78),ue=function(){var e=Object(a.useState)(!1),t=Object(L.a)(e,2),n=t[0],r=t[1],i=Object(a.useCallback)((function(){r((function(e){return!e}))}),[]);return Object(a.useMemo)((function(){return{exist:n,handleToggle:i}}),[n,i])},me=n(34),se=["name","description","image"],de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(me.h)();return Object(a.useMemo)((function(){var n=new URLSearchParams(t.search);return se.concat(Array.isArray(e)?e:[e]).reduce((function(e,t){return Object(Z.a)(Object(Z.a)({},e),n.get(t)&&Object(J.a)({},t,ae()(n.get(t))))}),{})}),[e,t.search])},be=function(){var e=ue(),t=e.handleToggle,n=e.exist,r=Object(me.g)().replace,i=X(),c=i.handleSetRef,o=i.handleSubmit,u=Object(l.useMutation)(G,{update:Y}),m=Object(L.a)(u,2),s=m[0],d=m[1],b=d.loading,E=d.client,f=de(),O=Object(a.useMemo)((function(){return!!Object.keys(f).length}),[f]),j=Object(a.useCallback)((function(){O?r("/home"):t()}),[t,O,r]),p=Object(a.useCallback)((function(e){E.link.headers.set("X-Contentful-Content-Type","image"),s({variables:{newItem:ee(re(e))}}),j()}),[s,E,j]);return Object(a.useMemo)((function(){return{addItemPending:b,handleToggleModal:t,showModal:n,handleCloseModal:j,handleSubmitCreate:p,handleSubmitForm:o,handleSetRef:c,queryExist:O,queryParams:f}}),[b,t,n,j,p,o,c,O,f])},Ee=n(200),fe=n.n(Ee),Oe=Object(a.memo)((function(){var e=be(),t=e.showModal,n=e.handleToggleModal,a=e.handleSubmitCreate,i=e.handleSubmitForm,c=e.handleSetRef,l=e.addItemPending,o=e.queryParams,u=e.queryExist,m=e.handleCloseModal;return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement(S,null),r.a.createElement(A.a,{destroyOnClose:!0,title:"Add item",visible:t||u,onOk:i,onCancel:m},r.a.createElement(q,{initialValues:o,onSubmit:a,onSetRef:c})),r.a.createElement("div",{className:fe.a.Wrap},r.a.createElement(I.a,{align:"middle"},r.a.createElement(le.a,{span:2,push:4},r.a.createElement(T.a.Title,{level:3},"IDP")),r.a.createElement(le.a,{span:2,push:16},r.a.createElement(oe.a,{onClick:n},"Add item")))))})),je=n(201),pe=n.n(je),he=Object(a.memo)((function(e){var t=e.children;return r.a.createElement("div",{className:pe.a.Container},r.a.createElement(Oe,null),t)})),Ce=n(113),ve=Object(a.memo)((function(){return r.a.createElement(l.ApolloProvider,{client:b},r.a.createElement(Ce.a,null,r.a.createElement(me.d,null,r.a.createElement(me.b,{path:"/home",exact:!0,component:function(){return r.a.createElement(he,null,r.a.createElement(ce,null))}}),r.a.createElement(me.a,{to:"/home"}))))}));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.f8b02d0f.chunk.js.map