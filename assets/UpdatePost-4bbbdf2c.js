import{u as b,r,b as x,j as e,_ as s,s as f}from"./index-142092a5.js";import{u as h,a as y}from"./api-721aadbd.js";import{R as p}from"./quill.snow-45b9f08d.js";const w=()=>{const{id:o}=b(),[l,n]=r.useState(""),[i,c]=r.useState(""),[u,d]=r.useState(!0),m=x(),g=async a=>{if(a.preventDefault(),s.loading("Submitting Data"),!l||!f(i)){s.dismiss(),s.error("Empty values are not allowed");return}try{s.dismiss();const t=await h(o,{title:l,body:i});s.success("Post saved successfully"),m(`/posts/${t==null?void 0:t.slug}`,{state:{message:"Post saved successfully"}})}catch(t){s.dismiss(),console.log(t),s.error("Some err occured!")}};return r.useEffect(()=>{(async()=>{try{const t=await y(String(o));n(t.data.title),c(t.data.body),d(!1)}catch(t){console.log(t),d(!0)}})()},[o]),e.jsx("div",{children:e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"title",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Enter title"}),e.jsx("input",{type:"text",value:l,onChange:a=>n(a.target.value),id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Some intersting title",required:!0})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"body",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Enter content"}),e.jsx(p,{className:"bg-gray-50",style:{height:"400px"},value:i,onChange:c})]}),e.jsx("button",{disabled:u,type:"submit",className:"mt-12 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800",children:"Update Post"})]})})};export{w as default};