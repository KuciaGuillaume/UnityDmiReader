"use strict";(self.webpackChunkunity_dmi_reader=self.webpackChunkunity_dmi_reader||[]).push([[6881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),c=i,h=p["".concat(l,".").concat(c)]||p[c]||u[c]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={},o="Start",s={unversionedId:"tutorial-basics/Animation Methods/start-animation",id:"tutorial-basics/Animation Methods/start-animation",title:"Start",description:"StartAnimation",source:"@site/docs/tutorial-basics/Animation Methods/start-animation.md",sourceDirName:"tutorial-basics/Animation Methods",slug:"/tutorial-basics/Animation Methods/start-animation",permalink:"/UnityDmiReader/docs/tutorial-basics/Animation Methods/start-animation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/Animation Methods/start-animation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resume",permalink:"/UnityDmiReader/docs/tutorial-basics/Animation Methods/resume-animation"},next:{title:"Stop",permalink:"/UnityDmiReader/docs/tutorial-basics/Animation Methods/stop-animation"}},l={},m=[{value:"StartAnimation",id:"startanimation",level:2},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Detailed Flow",id:"detailed-flow",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Using stateIndex:",id:"using-stateindex",level:4},{value:"Using stateName:",id:"using-statename",level:4},{value:"StartAllAnimation",id:"startallanimation",level:2},{value:"Description",id:"description-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Detailed Flow",id:"detailed-flow-1",level:3},{value:"Example Usage",id:"example-usage-1",level:3},{value:"Remarks",id:"remarks",level:3}],d={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"start"},"Start"),(0,i.kt)("h2",{id:"startanimation"},"StartAnimation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'public void StartAnimation(int stateIndex = 0);\npublic void StartAnimation(string stateName = "");\n')),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"StartAnimation")," method is used to start an animation for a specific state. There are two overloads for this method, allowing the user to specify the state either by its index or by its name."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stateIndex")," (int, optional): The index of the animation state to start. Default value is 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stateName")," (string, optional): The name of the animation state to start. Default value is an empty string.")),(0,i.kt)("h3",{id:"detailed-flow"},"Detailed Flow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Validates the provided state index or state name."),(0,i.kt)("li",{parentName:"ol"},"If the index is out of range, or if the state name does not correspond to any state, the method returns without doing anything."),(0,i.kt)("li",{parentName:"ol"},"Sets the animation state properties to start the animation.")),(0,i.kt)("h3",{id:"example-usage"},"Example Usage"),(0,i.kt)("h4",{id:"using-stateindex"},"Using stateIndex:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class ExampleUnityClass : MonoBehaviour\n{\n    // Define a private DMI object\n    private DMI _dmi;\n\n    /// <summary>\n    /// Start is called before the first frame update.\n    /// </summary>\n    void Start()\n    {\n        this._dmi = gameObject.AddComponent<DMI>();\n        this._dmi.Load("dmi_file_path");\n        this._dmi.StartAnimation(2);\n    }\n\n    /// <summary>\n    /// Update is called once per frame.\n    /// </summary>\n    void Update()\n    {\n        Sprite sprite = this._dmi.CurrentAnimationSprite(2, DMI.DownDirection);\n    }\n}\n')),(0,i.kt)("h4",{id:"using-statename"},"Using stateName:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class ExampleUnityClass : MonoBehaviour\n{\n    // Define a private DMI object\n    private DMI _dmi;\n\n    /// <summary>\n    /// Start is called before the first frame update.\n    /// </summary>\n    void Start()\n    {\n        this._dmi = gameObject.AddComponent<DMI>();\n        this._dmi.Load("dmi_file_path");\n        this._dmi.StartAnimation("stateName");\n    }\n\n    /// <summary>\n    /// Update is called once per frame.\n    /// </summary>\n    void Update()\n    {\n        Sprite sprite = this._dmi.CurrentAnimationSprite("stateName", DMI.DownDirection);\n    }\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"startallanimation"},"StartAllAnimation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"public void StartAllAnimation();\n")),(0,i.kt)("h3",{id:"description-1"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"StartAllAnimation")," method is used to start all the animations from the beginning. It iterates through each state within the internal state collection and resets various properties of the animation state to initiate the animation. Currently, this method doesn't have any overloads, which means it can be used without any parameters."),(0,i.kt)("h3",{id:"parameters-1"},"Parameters"),(0,i.kt)("p",null,"This method does not take any parameters."),(0,i.kt)("h3",{id:"detailed-flow-1"},"Detailed Flow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Iterates through each state within the internal state collection."),(0,i.kt)("li",{parentName:"ol"},"For each state, it sets the ",(0,i.kt)("inlineCode",{parentName:"li"},"isPlaying")," property to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),". This property indicates whether the animation is currently playing."),(0,i.kt)("li",{parentName:"ol"},"Resets the animation count (",(0,i.kt)("inlineCode",{parentName:"li"},"animCount"),") to 0. This represents the current animation frame."),(0,i.kt)("li",{parentName:"ol"},"Resets the time property to 0. This is used for handling animation timing."),(0,i.kt)("li",{parentName:"ol"},"Sets the ",(0,i.kt)("inlineCode",{parentName:"li"},"isOnRewind")," property to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),". This property indicates whether the animation is playing in reverse."),(0,i.kt)("li",{parentName:"ol"},"Resets the animation number (",(0,i.kt)("inlineCode",{parentName:"li"},"animNumber"),") to 0. This represents the index of the animation to be played.")),(0,i.kt)("h3",{id:"example-usage-1"},"Example Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class ExampleUnityClass : MonoBehaviour\n{\n    // Define a private DMI object\n    private DMI _dmi;\n\n    /// <summary>\n    /// Start is called before the first frame update.\n    /// </summary>\n    void Start()\n    {\n        this._dmi = gameObject.AddComponent<DMI>();\n        this._dmi.Load("dmi_file_path");\n        this._dmi.StartAllAnimation();\n    }\n\n    /// <summary>\n    /// Update is called once per frame.\n    /// </summary>\n    void Update()\n    {\n        Sprite sprite = this._dmi.CurrentAnimationSprite(0, DMI.DownDirection);\n    }\n}\n')),(0,i.kt)("h3",{id:"remarks"},"Remarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This method is used to reset and start all animations. It doesn't provide control over starting individual animations."),(0,i.kt)("li",{parentName:"ul"},"It does not take any parameters, so you don't have to pass any arguments while calling this method.")))}u.isMDXComponent=!0}}]);