(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(47),r=t(207),s=(t(0),t(208)),o=t(210),i={id:"helpers",title:"NodeHelpers",sidebar_label:"NodeHelpers"},l={id:"version-0.1.0-beta.6/api/helpers",title:"NodeHelpers",description:"Methods that helps describe a specified Node.",source:"@site/versioned_docs/version-0.1.0-beta.6/api/NodeHelpers.md",permalink:"/r/docs/0.1.0-beta.6/api/helpers",version:"0.1.0-beta.6",sidebar_label:"NodeHelpers",sidebar:"version-0.1.0-beta.6/docs",previous:{title:"useNode()",permalink:"/r/docs/0.1.0-beta.6/api/useNode"},next:{title:"Layers",permalink:"/r/docs/0.1.0-beta.6/additional/layers"}},c=[{value:"Usage",id:"usage",children:[{value:"useEditor hook",id:"useeditor-hook",children:[]},{value:"User Component rules",id:"user-component-rules",children:[]}]},{value:"Methods",id:"methods",children:[{value:"get",id:"get",children:[]},{value:"decendants",id:"decendants",children:[]},{value:"ancestors",id:"ancestors",children:[]},{value:"isRoot",id:"isroot",children:[]},{value:"isCanvas",id:"iscanvas",children:[]},{value:"isDeletable",id:"isdeletable",children:[]},{value:"isTopLevelCanvas",id:"istoplevelcanvas",children:[]},{value:"isParentOfTopLevelCanvas",id:"isparentoftoplevelcanvas",children:[]},{value:"isDraggable",id:"isdraggable",children:[]},{value:"isDroppable",id:"isdroppable",children:[]}]}],d={rightToc:c};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Methods that helps describe a specified ",Object(s.b)("inlineCode",{parentName:"p"},"Node"),"."),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("h3",{id:"useeditor-hook"},"useEditor hook"),Object(s.b)("p",null,"You can access the NodeHelpers via the ",Object(s.b)("inlineCode",{parentName:"p"},"node")," query method in the ",Object(s.b)("inlineCode",{parentName:"p"},"useEditor")," hook."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import {useEditor} from "@craftjs/core";\n\nconst TextComponent = () => {\n  const { id } = useNode();\n  const { query: {node} } = useEditor();\n  const isRoot = node(id).Root(),\n        isDraggable = node(id).Draggable();\n  ...\n}\n')),Object(s.b)("h3",{id:"user-component-rules"},"User Component rules"),Object(s.b)("p",null,"NodeHelpers can also be accessed via the last parameter of each User Component rules."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const MyComp = () => {\n\n}\nMyComp.craft = { \n  rules: {\n    canDrag: (node: Node, helper: NodeHelpers) => {\n      const ancestors = helper(node.id).ancestors();\n      ...\n    },\n    canMoveIn : (incoming: Node, self: Node, helper: NodeHelpers) => {\n      const isRoot = helper(node.id).isRoot();\n      ...\n    }\n    canMoveOut: (outgoing: Node, self: Node, helper: NodeHelpers) => {\n      const isDeletable = helper(node.id).isDeletable();\n      ...\n    }\n  }\n}\n")),Object(s.b)("h2",{id:"methods"},"Methods"),Object(s.b)("h3",{id:"get"},"get"),Object(s.b)(o.b,{type:"function",mdxType:"Badge"}),Object(s.b)("p",null,"Get ",Object(s.b)("inlineCode",{parentName:"p"},"Node")," object from id"),Object(s.b)("h4",{id:"returns"},"Returns"),Object(s.b)(o.a,{items:[["Node"]],mdxType:"API"}),Object(s.b)("h3",{id:"decendants"},"decendants"),Object(s.b)(o.b,{type:"function",mdxType:"Badge"}),Object(s.b)("p",null,"Returns an array of Node ids of all decendants"),Object(s.b)("h4",{id:"returns-1"},"Returns"),Object(s.b)(o.a,{items:[["NodeId[]"]],mdxType:"API"}),Object(s.b)("h3",{id:"ancestors"},"ancestors"),Object(s.b)(o.b,{type:"function",mdxType:"Badge"}),Object(s.b)("p",null,"Returns an array of Node ids of all ancestors"),Object(s.b)("h4",{id:"returns-2"},"Returns"),Object(s.b)(o.a,{items:[["NodeId[]"]],mdxType:"API"}),Object(s.b)("h3",{id:"isroot"},"isRoot"),Object(s.b)(o.b,{type:"function",mdxType:"Badge"}),Object(s.b)("p",null,"Returns ",Object(s.b)("inlineCode",{parentName:"p"},"true")," if a given Node is the Root Node"),Object(s.b)("h4",{id:"returns-3"},"Returns"),Object(s.b)(o.a,{items:[["boolean"]],mdxType:"API"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5}","{5}":!0}),"const App  = () => {\n  return (\n    <Editor>\n      <Frame>\n        <Canvas> // true\n          <div>Yo</div> // false\n          <h2>It's me</h2> // false\n          <Canvas> // false \n            <h3>Child</h3> // false\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n")),Object(s.b)("h3",{id:"iscanvas"},"isCanvas"),Object(s.b)(o.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(s.b)("p",null,"Check if a given Node is a Canvas"),Object(s.b)("h4",{id:"returns-4"},"Returns"),Object(s.b)(o.a,{items:[["boolean"]],mdxType:"API"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5,8}","{5,8}":!0}),"const App  = () => {\n  return (\n    <Editor>\n      <Frame>\n        <Canvas> // true\n          <div>Yo</div> // false\n          <h2>It's me</h2> // false\n          <Canvas> // true \n            <h3>Child</h3> // false\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n")),Object(s.b)("h3",{id:"isdeletable"},"isDeletable"),Object(s.b)(o.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(s.b)("p",null,"A Node may be deleted as long as it is ",Object(s.b)("strong",{parentName:"p"},"not")," one of the following:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Root Node"),Object(s.b)("li",{parentName:"ul"},"Top-level Canvas Nodes")),Object(s.b)("h4",{id:"parameters"},"Parameters"),Object(s.b)(o.a,{items:[["node","Node","The Node object to check"]],mdxType:"API"}),Object(s.b)("h4",{id:"returns-5"},"Returns"),Object(s.b)(o.a,{items:[["boolean"]],mdxType:"API"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5,21}","{5,21}":!0}),'const App  = () => {\n  return (\n    <Editor resolves={{Container}}>\n      <Frame>\n        <Canvas> // false\n          <div>Yo</div> // true\n          <h2>It\'s me</h2> // true\n          <Canvas> // true \n            <h3>Child</h3> // true\n            <Container /> // true\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n\nconst Container = () => {\n  return (\n    <div>\n      <Canvas id="main"> // false\n        <h2>Hi</h2> // true\n      </Canvas>\n    </div>\n  )\n}\n')),Object(s.b)("h3",{id:"istoplevelcanvas"},"isTopLevelCanvas"),Object(s.b)(o.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(s.b)("p",null,"A Canvas Node is considered top-level if it is defined inside a User Component and it is not rendered as an immediate child of another Node."),Object(s.b)("h4",{id:"parameters-1"},"Parameters"),Object(s.b)(o.a,{items:[["node","Node","The Node object to check"]],mdxType:"API"}),Object(s.b)("h4",{id:"returns-6"},"Returns"),Object(s.b)(o.a,{items:[["boolean"]],mdxType:"API"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{21,27}","{21,27}":!0}),'const App  = () => {\n  return (\n    <Editor resolves={{Container}}>\n      <Frame>\n        <Canvas> // false\n          <div>Yo</div> // false\n          <h2>It\'s me</h2> // false\n          <Canvas> // false \n            <h3>Child</h3> // false\n            <Container /> // false\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n\nconst Container = () => {\n  return (\n    <div>\n      <Canvas id="main"> // true\n        <h2>Hi</h2> // false\n        <Canvas> // false\n          <h2>Hi</h2> // false\n        </Canvas>\n      </Canvas>\n      <Canvas id="secondary"> // true\n        <h2>Hi</h2> // false\n        <Canvas> // false\n          <h2>Hi</h2> // false\n        </Canvas>\n      </Canvas>\n    </div>\n  )\n}\n')),Object(s.b)("h3",{id:"isparentoftoplevelcanvas"},"isParentOfTopLevelCanvas"),Object(s.b)(o.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(s.b)("p",null,"This returns ",Object(s.b)("inlineCode",{parentName:"p"},"true")," if a Node's User Component defines a ",Object(s.b)("inlineCode",{parentName:"p"},"<Canvas />")," in its render method."),Object(s.b)("h4",{id:"returns-7"},"Returns"),Object(s.b)(o.a,{items:[["boolean"]],mdxType:"API"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{10}","{10}":!0}),'const App  = () => {\n  return (\n    <Editor resolves={{Container}}>\n      <Frame>\n        <Canvas> // false\n          <div>Yo</div> // false\n          <h2>It\'s me</h2> // false\n          <Canvas> // false \n            <h3>Child</h3> // false\n            <Container /> // true\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n\nconst Container = () => {\n  return (\n    <div>\n      <Canvas id="main"> // false\n        <h2>Hi</h2> // false\n        <Canvas> // false\n          <h2>Hi</h2> // false\n        </Canvas>\n      </Canvas>\n      <Canvas id="seconday"> // false\n        <h2>Hi</h2> // false\n        <Canvas> // false\n          <h2>Hi</h2> // false\n        </Canvas>\n      </Canvas>\n    </div>\n  )\n}\n')),Object(s.b)("h3",{id:"isdraggable"},"isDraggable"),Object(s.b)(o.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(s.b)("p",null,"A Node may be dragged and moved if it satisfies both of the following conditions:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The Node is an immediate child of a Canvas Node, hence it's draggable"),Object(s.b)("li",{parentName:"ul"},"The Node's ",Object(s.b)("inlineCode",{parentName:"li"},"canDrag")," rule allows it to be moved ")),Object(s.b)("h4",{id:"parameters-2"},"Parameters"),Object(s.b)(o.a,{items:[["onError","(err: string) => void","Error callback"]],mdxType:"API"}),Object(s.b)("h4",{id:"returns-8"},"Returns"),Object(s.b)(o.a,{items:[["boolean"]],mdxType:"API"}),Object(s.b)("h3",{id:"isdroppable"},"isDroppable"),Object(s.b)(o.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(s.b)("p",null,"Check if a Node is Droppable relative to the target Node."),Object(s.b)("h4",{id:"parameters-3"},"Parameters"),Object(s.b)(o.a,{items:[["targetId","NodeId","The target Node"],["onError","(err: string) => void","Error callback"]],mdxType:"API"}),Object(s.b)("h4",{id:"returns-9"},"Returns"),Object(s.b)(o.a,{items:[["boolean"]],mdxType:"API"}),Object(s.b)("h4",{id:"example"},"Example"),Object(s.b)("p",null,"In the following example, we're checking if our ",Object(s.b)("inlineCode",{parentName:"p"},"MyCanvas")," component would be able to accept the current selected Node in the editor."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const MyCanvas = () => {\n  const { id } = useNode();\n  const { canWeAcceptTheSelectedNode } = useEditor((state, query) => ({\n    canWeAcceptTheSelectedNode: state.events.selected && query.node(id).Droppable(state.events.selected)\n  }));\n}\n")))}b.isMDXComponent=!0},207:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return a}))},208:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),d=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=d(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(t),u=a,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||s;return t?r.a.createElement(m,i(i({ref:n},c),{},{components:t})):r.a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},209:function(e,n,t){"use strict";var a=t(0),r=t(48);n.a=function(){return Object(a.useContext)(r.a)}},210:function(e,n,t){"use strict";var a=t(0),r=t.n(a),s=function(e){var n=e.item,t=n[0],a=n.length>1&&"string"==typeof n[1]&&n[1],s=3==n.length?"string"==typeof n[2]&&n[2]:4==n.length&&"string"==typeof n[3]&&n[3],i=n.length>1&&Array.isArray(n[n.length-1])&&n[n.length-1];return r.a.createElement("li",{className:"api-item"},r.a.createElement("div",null,t&&r.a.createElement("code",{className:"api-title"},t),a&&r.a.createElement("strong",{className:"api-type"},a)),s&&r.a.createElement("div",{className:"api-description",dangerouslySetInnerHTML:{__html:s}}),i&&r.a.createElement(o,{items:i}))},o=function(e){var n=e.items;return r.a.createElement("ul",null,n&&n.map((function(e,n){return r.a.createElement(s,{item:e,key:n})})))},i=function(e){var n,t=e.type,a=e.title,s=void 0===a||a,o=e.noMargin,i=void 0===o||o;switch(t){case"hoc":n="Higher-Order Component";break;default:n=t[0].toUpperCase()+t.substring(1)}return r.a.createElement("div",{className:"badge-wrapper"},r.a.createElement("span",{className:"badge badge-"+t+" "+(s?"badge-title":"")+" "+(i?"badge-no-margin":"")},n))},l=t(209),c=function(e){var n=e.img,t=Object(l.a)().siteConfig.baseUrl;return r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("img",{src:t+"img/"+n})))};t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"b",(function(){})),t.d(n,"c",(function(){return c}))}}]);