import{_ as M}from"./banner.fae3d8ce.js";import{_ as D,i as S,u as Y,h as v,g as P,r as d,o as x,j as Z,w as l,a as m,b as t,e as n,m as h,c as E,v as T,F as $,E as p,p as G,q as H}from"./index.de7099bd.js";import{A as f}from"./index.07080e2f.js";const g=c=>(G("data-v-26ea861f"),c=c(),H(),c),J={class:"login-page"},K=g(()=>m("div",{class:"left-img-box"},[m("img",{src:M,class:"bg-img",alt:""})],-1)),O={class:"right-login-form-box relative"},Q=g(()=>m("div",{class:"absolute w-full left-0 right-0 top-2 flex flex-row justify-between items-center px-5 box-border"},[m("div",{class:"iconfont icon-icon-xiaomiguishu text-[56px] text-[#ff6a00] ml-20"})],-1)),W={class:"w-[580px] bg-white px-6 shadow-2xl"},X={class:"flex flex-row justify-between items-center"},ee=g(()=>m("h2",{class:"text-[26px] py-[40px]"},"\u6B22\u8FCE\u6CE8\u518C",-1)),te=["src"],oe=g(()=>m("div",{class:"el-upload__text"},[n(" \u62D6\u5165\u56FE\u7247 \u6216 "),m("em",null,"\u70B9\u51FB\u9009\u62E9\u56FE\u7247\u4E0A\u4F20"),n(",\u4E0D\u8D85\u8FC72M ")],-1)),le={__name:"Register",setup(c){const y=S("baseURL"),U=Y();v("");const o=P({custom_realName:"",custom_pwd:"",confirm_pwd:"",custom_tel:"",custom_email:"",custom_sex:"",custom_birthday:"",custom_addr:"",custom_photo:""}),V=v({}),I={custom_realName:[{required:!0,message:"\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],custom_pwd:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],confirm_pwd:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{validator:(s,e,r)=>{e===o.custom_pwd?r():r(new Error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4"))},trigger:"blur"}],custom_tel:[{required:!0,message:"\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{validator:async(s,e,r)=>{if(e.length===11&&/^1[3-9]\d{9}$/.test(e)){let{data:i}=await f.customInfo.validateCustomTelExists(e);i===!0?r(new Error("\u624B\u673A\u53F7\u5DF2\u5B58\u5728")):r()}else r(new Error("\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"))},trigger:"blur"}],custom_email:[{required:!0,message:"\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{validator:async(s,e,r)=>{if(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(e)){let{data:u}=await f.customInfo.validateCustomEmailExists(e);u===!0?r(new Error("\u90AE\u7BB1\u5DF2\u5B58\u5728")):r()}else r(new Error("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"))},trigger:"blur"}],custom_sex:[{required:!0,message:"\u6027\u522B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],custom_addr:[{required:!0,message:"\u6027\u522B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],custom_birthday:[{required:!0,message:"\u751F\u65E5\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],custom_photo:[{required:!0,message:"\u5934\u50CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},q={lazy:!0,async lazyLoad(s,e){let{level:r,data:i}=s,u=i.id?i.id:-1;const w=(await f.area.getListByParentId(u)).map(_=>({value:_.areaName,label:_.areaName,id:_.id,leaf:r>=2}));e(w)}},N=s=>{if(/^image\/(jpe?g|gif|png|bmp|webp)$/.test(s.type)){if(s.size/1024/1024>2)return p.error("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),!1}else return p.error("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6"),!1;return!0},j=s=>{o.custom_photo=s.data},z=()=>{V.value.validate(s=>{if(s)k();else return console.log("submit fail"),!1})},k=()=>{f.customInfo.register({...o,custom_addr:o.custom_addr.join(" ")}).then(()=>{p.success("\u6CE8\u518C\u6210\u529F"),U.back()}).catch(s=>{p.error("\u6CE8\u518C\u5931\u8D25"+s.msg),console.log(s)}).finally(()=>{})};return(s,e)=>{const r=d("router-link"),i=d("el-input"),u=d("el-form-item"),b=d("el-radio"),w=d("el-radio-group"),_=d("el-date-picker"),R=d("el-cascader"),A=d("el-icon"),B=d("el-upload"),C=d("el-button"),F=d("el-form"),L=d("page-view");return x(),Z(L,null,{default:l(()=>[m("div",J,[K,m("div",O,[Q,m("div",W,[m("div",X,[ee,t(r,{to:{name:"Login"},class:"text-blue-400 underline cursor-pointer text-[12px]"},{default:l(()=>[n("\u53BB\u767B\u5F55")]),_:1})]),t(F,{model:o,ref_key:"registerFormEl",ref:V,rules:I,"label-width":"80px"},{default:l(()=>[t(u,{label:"\u7528\u6237\u59D3\u540D",prop:"custom_realName"},{default:l(()=>[t(i,{modelValue:o.custom_realName,"onUpdate:modelValue":e[0]||(e[0]=a=>o.custom_realName=a),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u767B\u5F55\u5BC6\u7801",prop:"custom_pwd"},{default:l(()=>[t(i,{modelValue:o.custom_pwd,"onUpdate:modelValue":e[1]||(e[1]=a=>o.custom_pwd=a),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",type:"password"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"confirm_pwd"},{default:l(()=>[t(i,{modelValue:o.confirm_pwd,"onUpdate:modelValue":e[2]||(e[2]=a=>o.confirm_pwd=a),placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",type:"password"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u624B\u673A\u53F7\u7801",prop:"custom_tel"},{default:l(()=>[t(i,{modelValue:o.custom_tel,"onUpdate:modelValue":e[3]||(e[3]=a=>o.custom_tel=a),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u7535\u5B50\u90AE\u7BB1",prop:"custom_email"},{default:l(()=>[t(i,{modelValue:o.custom_email,"onUpdate:modelValue":e[4]||(e[4]=a=>o.custom_email=a),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u7528\u6237\u6027\u522B",prop:"custom_sex"},{default:l(()=>[t(w,{modelValue:o.custom_sex,"onUpdate:modelValue":e[5]||(e[5]=a=>o.custom_sex=a)},{default:l(()=>[t(b,{label:"\u7537",size:"small"},{default:l(()=>[n("\u7537")]),_:1}),t(b,{label:"\u5973",size:"small"},{default:l(()=>[n("\u5973")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u7528\u6237\u751F\u65E5",prop:"custom_birthday"},{default:l(()=>[t(_,{placeholder:"\u751F\u65E5\u5929\u53D1\u4F1A\u6709\u610F\u5916\u5C0F\u60CA\u559C\u54E6",modelValue:o.custom_birthday,"onUpdate:modelValue":e[6]||(e[6]=a=>o.custom_birthday=a),type:"date","value-format":"YYYY-MM-DD",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),t(u,{label:"\u7528\u6237\u5730\u5740",prop:"custom_addr"},{default:l(()=>[t(R,{props:q,style:{width:"100%"},separator:" ",placeholder:"\u70B9\u51FB\u9009\u62E9\u5730\u5740\uFF0C\u60A8\u540E\u671F\u8D2D\u7269\u4F1A\u5C31\u8FD1\u4ED3\u5E93\u53D1\u9001\u8D27\u7269\u54E6",modelValue:o.custom_addr,"onUpdate:modelValue":e[7]||(e[7]=a=>o.custom_addr=a)},null,8,["modelValue"])]),_:1}),t(u,{label:"\u7528\u6237\u5934\u50CF",prop:"custom_photo"},{default:l(()=>[t(B,{class:"user-upload-box",drag:"",action:h(y)+"/customInfo/uploadCustomPhoto","on-success":j,"show-file-list":!1,name:"custom_photo","before-upload":N,multiple:""},{default:l(()=>[o.custom_photo?(x(),E("img",{key:0,src:h(y)+o.custom_photo,class:"object-contain w-full h-full object-center",alt:""},null,8,te)):(x(),E($,{key:1},[t(A,{class:"el-icon--upload"},{default:l(()=>[t(h(T))]),_:1}),oe],64))]),_:1},8,["action"])]),_:1}),t(u,null,{default:l(()=>[t(C,{type:"primary",onClick:z,class:"w-full h-[50px] bg-[#409eff] text-white text-[18px] disabled:cursor-no-drop disabled:opacity-30 transition-all"},{default:l(()=>[n(" \u6CE8\u518C ")]),_:1})]),_:1})]),_:1},8,["model"])])])])]),_:1})}}},ue=D(le,[["__scopeId","data-v-26ea861f"]]);export{ue as default};
