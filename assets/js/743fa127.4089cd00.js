"use strict";(self.webpackChunkunity_dmi_reader=self.webpackChunkunity_dmi_reader||[]).push([[7539],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(a),c=i,f=u["".concat(s,".").concat(c)]||u[c]||p[c]||l;return a?n.createElement(f,r(r({ref:t},d),{},{components:a})):n.createElement(f,r({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9440:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const l={},r="AnimationDelay",o={unversionedId:"tutorial-basics/Setter Methods/animation-delay",id:"tutorial-basics/Setter Methods/animation-delay",title:"AnimationDelay",description:"SetAnimationDelay",source:"@site/docs/tutorial-basics/Setter Methods/animation-delay.md",sourceDirName:"tutorial-basics/Setter Methods",slug:"/tutorial-basics/Setter Methods/animation-delay",permalink:"/UnityDmiReader/docs/tutorial-basics/Setter Methods/animation-delay",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/Setter Methods/animation-delay.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AnimationDelayatIndex",permalink:"/UnityDmiReader/docs/tutorial-basics/Setter Methods/animation-delay-at-index"},next:{title:"AnimationRewind",permalink:"/UnityDmiReader/docs/tutorial-basics/Setter Methods/animation-rewind"}},s={},m=[{value:"SetAnimationDelay",id:"setanimationdelay",level:2},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Detailed Flow",id:"detailed-flow",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Using stateIndex:",id:"using-stateindex",level:4},{value:"Using stateName:",id:"using-statename",level:4},{value:"SetAllAnimationDelay",id:"setallanimationdelay",level:2},{value:"Description",id:"description-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Detailed Flow",id:"detailed-flow-1",level:3},{value:"Example Usage",id:"example-usage-1",level:3}],d={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"animationdelay"},"AnimationDelay"),(0,i.kt)("h2",{id:"setanimationdelay"},"SetAnimationDelay"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'public void SetAnimationDelay(float delay, int stateIndex = 0);\npublic void SetAnimationDelay(float delay, string stateName = "");\n')),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SetAnimationDelay")," method sets the animation delay for all frames of a specific animation state. There are two overloads for this method, allowing the user to specify the state either by its index or by its name. Setting the delay affects the speed at which the animation plays. "),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delay")," (float): The delay to be set for all frames in the specified animation state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stateIndex")," (int, optional): The index of the animation state to set the delay for. The default value is 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stateName")," (string, optional): The name of the animation state to set the delay for. The default value is an empty string.")),(0,i.kt)("h3",{id:"detailed-flow"},"Detailed Flow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Validates the provided state index or state name."),(0,i.kt)("li",{parentName:"ol"},"If the index is out of range, or if the state name does not correspond to any state, the method exits without making changes."),(0,i.kt)("li",{parentName:"ol"},"Iterates through all the frames in the specified animation state."),(0,i.kt)("li",{parentName:"ol"},"Sets the animation delay for each frame to the provided delay value.")),(0,i.kt)("h3",{id:"example-usage"},"Example Usage"),(0,i.kt)("h4",{id:"using-stateindex"},"Using stateIndex:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class ExampleUnityClass : MonoBehaviour\n{\n    // Define a private DMI object\n    private DMI _dmi;\n\n    /// <summary>\n    /// Start is called before the first frame update.\n    /// </summary>\n    void Start()\n    {\n        this._dmi = gameObject.AddComponent<DMI>();\n        if (this._dmi.Load("dmi_file_path")) {\n            this._dmi.SetAnimationDelay(0.5f, 1);\n            Debug.Log("Animation delay set for state index 2.");\n        }\n    }\n\n    /// <summary>\n    /// Update is called once per frame.\n    /// </summary>\n    void Update() {}\n}\n')),(0,i.kt)("h4",{id:"using-statename"},"Using stateName:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class ExampleUnityClass : MonoBehaviour\n{\n    // Define a private DMI object\n    private DMI _dmi;\n\n    /// <summary>\n    /// Start is called before the first frame update.\n    /// </summary>\n    void Start()\n    {\n        this._dmi = gameObject.AddComponent<DMI>();\n        if (this._dmi.Load("dmi_file_path")) {\n            this._dmi.SetAnimationDelay(0.5f, "stateName");\n            Debug.Log("Animation delay set for state \'stateName\'.");\n        }\n    }\n\n    /// <summary>\n    /// Update is called once per frame.\n    /// </summary>\n    void Update() {}\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"setallanimationdelay"},"SetAllAnimationDelay"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"public void SetAllAnimationDelay(float delay);\n")),(0,i.kt)("h3",{id:"description-1"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SetAllAnimationDelay")," method is used to set the animation delay for all frames across all animation states. This allows for uniform animation timing throughout."),(0,i.kt)("h3",{id:"parameters-1"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delay")," (float): The delay in seconds to be set for each frame in all animation states.")),(0,i.kt)("h3",{id:"detailed-flow-1"},"Detailed Flow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Iterates through each animation state."),(0,i.kt)("li",{parentName:"ol"},"Within each state, iterates through the list of wait times for each frame."),(0,i.kt)("li",{parentName:"ol"},"Sets the wait time of each frame to the specified delay.")),(0,i.kt)("h3",{id:"example-usage-1"},"Example Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class ExampleUnityClass : MonoBehaviour\n{\n    // Define a private DMI object\n    private DMI _dmi;\n\n    /// <summary>\n    /// Start is called before the first frame update.\n    /// </summary>\n    void Start()\n    {\n        this._dmi = gameObject.AddComponent<DMI>();\n        if (this._dmi.Load("dmi_file_path")) {\n            this._dmi.SetAllAnimationDelay(0.5f);\n            Debug.Log("Set a 0.5 delay for all frames in all animation states");\n        }\n    }\n\n    /// <summary>\n    /// Update is called once per frame.\n    /// </summary>\n    void Update() {}\n}\n')),(0,i.kt)("hr",null))}p.isMDXComponent=!0}}]);