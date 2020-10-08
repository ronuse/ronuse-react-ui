(this["webpackJsonpronuse-react-components-example"]=this["webpackJsonpronuse-react-components-example"]||[]).push([[0],{16:function(e,a,t){e.exports=t(30)},23:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),o=t.n(r),s=t(9),c=t(1);t(23);function i(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function m(e,a){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,a){if(e){if("string"===typeof e)return i(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,a):void 0}}(e))||a&&e&&"number"===typeof e.length){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}var u="_3ixO1",f="_3afKw",p="_dqEhR",v="_3auwb",d="_19UzF",h="_2Xb2-";function g(e){var a=[],t=e.className?e.className:u;if(e.options)for(var n,r=m(e.options);!(n=r()).done;){var o=n.value,s=e.labelAsValue?o.label:o.value;a.push(l.a.createElement("option",{key:o.value,value:s},o.label))}return l.a.createElement("select",{className:t,name:e.name,id:e.id,defaultValue:e.defaultValue,onChange:function(a){e.onChange&&e.onChange(a,a.target.value)}},a)}function E(e){var a=l.a.createRef(null),t=l.a.createRef(null),n=e.className?f+" "+e.className:f,r=e.displayInputElement?d:v,o=e.faClassName?l.a.createElement("span",{className:e.faClassName+" "+h}):l.a.createElement("span",null),s=e.label?l.a.createElement("div",{className:p,onClick:m},o,l.a.createElement("span",{style:{margin:"5px"}},e.label?e.label:"Select")):l.a.createElement("div",null),c={},i=function(){};function m(){t.current.click()}return e.defaultImageSrc&&(c.background="url("+e.defaultImageSrc+")"),e.label||(c.cursor="pointer",i=m),e.appendClassName&&(n+=(function(e){throw new Error('"'+e+'" is read-only')}("className")," "+e.appendClassName)),l.a.createElement("div",{ref:a,className:n,style:c,onClick:i},l.a.createElement("input",{ref:t,name:e.name,className:r,type:"file",id:e.id,onChange:function(t){if(t.target.files&&t.target.files.length>0){if(Array.isArray(e.fileExtensions)){var n=!0;if(Array.from(t.target.files).every((function(a){return!!e.fileExtensions.find((function(e){return a.name.endsWith(e)}))||(n=!1,!1)})),!1===n)return void(e.onChange&&e.onChange(new Error("One of the select file does not match the specified file formats "+e.fileExtensions),void 0))}var l=t.target.files[0],r=URL.createObjectURL(l);a.current.style.background="url("+r+")",e.onChange&&e.onChange(void 0,t.target.files)}}}),s)}class b extends l.a.Component{constructor(...e){super(...e),this.previewText=function(e){document.getElementById("preview-text").textContent=" "+e}}render(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"Select"),l.a.createElement("p",{style:{fontSize:"20px",color:"grey"}},"Preview:",l.a.createElement("span",{style:{fontWeight:"bold",color:"black"},id:"preview-text"})),l.a.createElement("span",null,"RonuseSelect: "),l.a.createElement(g,{options:[{value:"true",label:"Yes"},{value:"false",label:"No"}],defaultValue:"false",onChange:(e,a)=>{this.previewText(a)}}),l.a.createElement("span",null,"RonuseSelect with label as value "),l.a.createElement(g,{options:[{value:"true",label:"Yes"},{value:"false",label:"No"}],labelAsValue:!0,defaultValue:"Yes",onChange:(e,a)=>{this.previewText(a)}})))}}var y=b,x=t(7);class C extends l.a.Component{constructor(...e){super(...e),this.previewText=function(e){document.getElementById("preview-text").textContent=" "+e}}render(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"Image Chooser"),l.a.createElement("p",{style:{fontSize:"20px",color:"grey"}},"You selected:",l.a.createElement("span",{style:{fontWeight:"bold",color:"black"},id:"preview-text"})),l.a.createElement("div",{className:"display-flex"},l.a.createElement("div",{className:"margin-20px"},l.a.createElement("span",null,"RonuseImageChooser with label"),l.a.createElement(E,{onChange:(e,a)=>{var t,n=Object(x.a)(a);try{for(n.s();!(t=n.n()).done;){var l=t.value;this.previewText(l.name)}}catch(r){n.e(r)}finally{n.f()}},fileExtensions:["png","jpg","JPG","PNG","jpeg"],label:"Edit",defaultImageSrc:"https://avatars3.githubusercontent.com/u/69908664?s=200&v=4"})),l.a.createElement("div",{className:"margin-20px"},l.a.createElement("span",null,"RonuseImageChooser with label and font awesome icon"),l.a.createElement(E,{faClassName:"fa fa-pencil",onChange:(e,a)=>{var t,n=Object(x.a)(a);try{for(n.s();!(t=n.n()).done;){var l=t.value;this.previewText(l.name)}}catch(r){n.e(r)}finally{n.f()}},fileExtensions:["png","jpg","JPG","PNG","jpeg"],label:"Edit"})),l.a.createElement("div",{className:"margin-20px"},l.a.createElement("span",null,"RonuseImageChooser without label image clickable"),l.a.createElement(E,{onChange:(e,a)=>{var t,n=Object(x.a)(a);try{for(n.s();!(t=n.n()).done;){var l=t.value;this.previewText(l.name)}}catch(r){n.e(r)}finally{n.f()}},fileExtensions:["png","jpg","JPG","PNG","jpeg"],defaultImageSrc:"https://avatars3.githubusercontent.com/u/69908664?s=200&v=4"})),l.a.createElement("div",{className:"margin-20px"},l.a.createElement("span",null,"RonuseImageChooser without custom css"),l.a.createElement(E,{faClassName:"fa fa-pencil",className:"round-image-chooser",onChange:(e,a)=>{var t,n=Object(x.a)(a);try{for(n.s();!(t=n.n()).done;){var l=t.value;this.previewText(l.name)}}catch(r){n.e(r)}finally{n.f()}},fileExtensions:["png","jpg"],label:"Change Image"})),l.a.createElement("div",{className:"margin-20px"},l.a.createElement("span",null,"RonuseImageChooser without custom css no label"),l.a.createElement(E,{faClassName:"fa fa-pencil",className:"round-image-chooser",onChange:(e,a)=>{var t,n=Object(x.a)(a);try{for(n.s();!(t=n.n()).done;){var l=t.value;this.previewText(l.name)}}catch(r){n.e(r)}finally{n.f()}},defaultImageSrc:"https://avatars3.githubusercontent.com/u/69908664?s=200&v=4"})))))}}var w=C;class N extends l.a.Component{render(){return l.a.createElement("div",null,"Hello",l.a.createElement("br",null),l.a.createElement(s.b,{to:"/form_inputs"}," View Form Inputs Components "),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/image_chooser"}," View Image Chooser Components "))}}var I=N,S=()=>l.a.createElement(s.a,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/",component:I}),l.a.createElement(c.a,{path:"/form_inputs",component:y}),l.a.createElement(c.a,{path:"/image_chooser",component:w})));t(29);o.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.983f30de.chunk.js.map