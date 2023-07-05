import{r as i}from"./chunks/chunk.ed373d49.js";var m={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=i,x=Symbol.for("react.element"),h=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,b=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function c(l,r,s){var t,o={},n=null,d=null;s!==void 0&&(n=""+s),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(d=r.ref);for(t in r)u.call(r,t)&&!g.hasOwnProperty(t)&&(o[t]=r[t]);if(l&&l.defaultProps)for(t in r=l.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:x,type:l,key:n,ref:d,props:o,_owner:b.current}}a.Fragment=h;a.jsx=c;a.jsxs=c;m.exports=a;var e=m.exports;function v(){const[l,r]=i.useState(!1);return e.jsx("nav",{className:"bg-white border-gray-200 fixed w-full ",children:e.jsxs("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[e.jsx("a",{href:"#",className:"flex items-center",children:e.jsx("img",{src:"/assets/logo.jpg",className:"h-16 mr-3",alt:"Flowbite Logo"})}),e.jsxs("button",{onClick:()=>r(s=>!s),"data-collapse-toggle":"navbar-multi-level",type:"button",className:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ","aria-controls":"navbar-multi-level","aria-expanded":"false",children:[e.jsx("span",{className:"sr-only",children:"Open main menu"}),e.jsx("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h15M1 7h15M1 13h15"})})]}),e.jsx("div",{className:` ${l?"":"hidden"} w-full md:block md:w-auto`,id:"navbar-multi-level",children:e.jsxs("ul",{className:"flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-12 md:mt-0 md:border-0 md:bg-white  ",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700  md:p-0 ","aria-current":"page",children:"Home"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ",children:"Products"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ",children:"Clients"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ",children:"About Us"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ",children:"Blog"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ",children:"Contact Us"})})]})})]})})}export{v as default};
