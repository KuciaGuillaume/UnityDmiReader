"use strict";(self.webpackChunkunity_dmi_reader=self.webpackChunkunity_dmi_reader||[]).push([[6071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(n),c=a,f=p["".concat(s,".").concat(c)]||p[c]||u[c]||o;return n?i.createElement(f,r(r({ref:t},m),{},{components:n})):i.createElement(f,r({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const o={},r="AnimationToInfinite",l={unversionedId:"tutorial-basics/Setter Methods/animation-to-infinite",id:"tutorial-basics/Setter Methods/animation-to-infinite",title:"AnimationToInfinite",description:"SetAnimationToInfinite",source:"@site/docs/tutorial-basics/Setter Methods/animation-to-infinite.md",sourceDirName:"tutorial-basics/Setter Methods",slug:"/tutorial-basics/Setter Methods/animation-to-infinite",permalink:"/UnityDmiReader/docs/tutorial-basics/Setter Methods/animation-to-infinite",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/Setter Methods/animation-to-infinite.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AnimationRewind",permalink:"/UnityDmiReader/docs/tutorial-basics/Setter Methods/animation-rewind"},next:{title:"Error Handling Guide",permalink:"/UnityDmiReader/docs/error"}},s={},d=[{value:"SetAnimationToInfinite",id:"setanimationtoinfinite",level:2},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Detailed Flow",id:"detailed-flow",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Using stateIndex:",id:"using-stateindex",level:4},{value:"Using stateName:",id:"using-statename",level:4},{value:"SetAllAnimationToInfinite",id:"setallanimationtoinfinite",level:2},{value:"Description",id:"description-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Detailed Flow",id:"detailed-flow-1",level:3},{value:"Example Usage",id:"example-usage-1",level:3}],m={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"animationtoinfinite"},"AnimationToInfinite"),(0,a.kt)("h2",{id:"setanimationtoinfinite"},"SetAnimationToInfinite"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public void SetAnimationToInfinite(int stateIndex = 0);\npublic void SetAnimationToInfinite(string stateName = "");\n')),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SetAnimationToInfinite")," method is used to set an animation state to infinite, meaning it will loop indefinitely. There are two overloads for this method, allowing the user to specify the state either by its index or by its name."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stateIndex")," (int, optional): The index of the animation state to set to infinite. Default value is 0."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stateName")," (string, optional): The name of the animation state to set to infinite. Default value is an empty string.")),(0,a.kt)("h3",{id:"detailed-flow"},"Detailed Flow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Validates the provided state index or state name."),(0,a.kt)("li",{parentName:"ol"},"If the index is out of range, or if the state name does not correspond to any state, the method does nothing and returns."),(0,a.kt)("li",{parentName:"ol"},"If the image data does not exist, the method does nothing and returns."),(0,a.kt)("li",{parentName:"ol"},"Sets the ",(0,a.kt)("inlineCode",{parentName:"li"},"animCount")," property of the animation state based on either the index or the name provided to -1, indicating infinite looping.")),(0,a.kt)("h3",{id:"example-usage"},"Example Usage"),(0,a.kt)("h4",{id:"using-stateindex"},"Using stateIndex:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'DMI dmi = AddComponent<DMI>();\nif (dmi.Load("dmi_file_path")) {\n    dmi.SetAnimationToInfinite(2);\n    Console.WriteLine("Animation at index 2 is set to infinite looping.");\n}\n')),(0,a.kt)("h4",{id:"using-statename"},"Using stateName:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'DMI dmi = AddComponent<DMI>();\nif (dmi.Load("dmi_file_path")) {\n    dmi.SetAnimationToInfinite("stateName");\n    Console.WriteLine("Animation with the name \'Running\' is set to infinite looping.");\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"setallanimationtoinfinite"},"SetAllAnimationToInfinite"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public void SetAllAnimationToInfinite();\n")),(0,a.kt)("h3",{id:"description-1"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SetAllAnimationToInfinite")," method is used to set all animation states to loop infinitely. This means that once an animation reaches its end, it will start again from the beginning and continue to play indefinitely."),(0,a.kt)("h3",{id:"parameters-1"},"Parameters"),(0,a.kt)("p",null,"This method does not take any parameters."),(0,a.kt)("h3",{id:"detailed-flow-1"},"Detailed Flow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Iterates through each animation state within the internal states list."),(0,a.kt)("li",{parentName:"ol"},"Sets the ",(0,a.kt)("inlineCode",{parentName:"li"},"animCount")," property of each state to -1, indicating infinite looping.")),(0,a.kt)("h3",{id:"example-usage-1"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'DMI dmi = AddComponent<DMI>();\nif (dmi.Load("dmi_file_path")) {\n    // Set all animations to play infinitely.\n    dmi.SetAllAnimationToInfinite();\n}\n')),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);