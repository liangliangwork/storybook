try{
var B=Object.create;var y=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var V=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty;var f=(t,e)=>()=>(t&&(e=t(t=0)),e);var S=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Y=(t,e)=>{for(var n in e)y(t,n,{get:e[n],enumerable:!0})},w=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of U(e))!M.call(t,o)&&o!==n&&y(t,o,{get:()=>e[o],enumerable:!(r=q(e,o))||r.enumerable});return t};var K=(t,e,n)=>(n=t!=null?B(V(t)):{},w(e||!t||!t.__esModule?y(n,"default",{value:t,enumerable:!0}):n,t)),z=t=>w(y({},"__esModule",{value:!0}),t);var a=f(()=>{});var i=f(()=>{});var l=f(()=>{});var d,le,ce,ue,se,me,pe,fe,de,he,ye,_e,be,ge,Oe,Se,ve,Ee,Fe,we,Re,Te,De,Ae,Pe,Ne,Ie,ke,xe,R=f(()=>{a();i();l();d=__REACT__,{Children:le,Component:ce,Fragment:ue,Profiler:se,PureComponent:me,StrictMode:pe,Suspense:fe,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:de,cloneElement:he,createContext:ye,createElement:_e,createFactory:be,createRef:ge,forwardRef:Oe,isValidElement:Se,lazy:ve,memo:Ee,useCallback:Fe,useContext:we,useDebugValue:Re,useEffect:Te,useImperativeHandle:De,useLayoutEffect:Ae,useMemo:Pe,useReducer:Ne,useRef:Ie,useState:ke,version:xe}=__REACT__});var D=S((We,T)=>{"use strict";a();i();l();var $="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";T.exports=$});var I=S((Ve,N)=>{"use strict";a();i();l();var J=D();function A(){}function P(){}P.resetWarningCache=A;N.exports=function(){function t(r,o,c,u,g,O){if(O!==J){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:P,resetWarningCache:A};return n.PropTypes=n,n}});var x=S((Je,k)=>{a();i();l();k.exports=I()();var ze,$e});var _,Ze,et,tt,j=f(()=>{a();i();l();_=__STORYBOOKADDONS__,{addons:Ze,types:et,mockChannel:tt}=__STORYBOOKADDONS__});var b,L,v,C=f(()=>{a();i();l();b="storybook-addon-figma",L=b+"/addon-panel",v=b+"/addon-event"});var H={};Y(H,{FigmaPanel:()=>h});function G(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function X(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Z(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var E,Q,h,W=f(()=>{a();i();l();R();E=K(x());j();C();Q=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();h=function(t){Z(e,t);function e(){var n;G(this,e);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];var u=X(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(o)));return u.state=Object.assign({},e.initialState),u.onAddFigma=u.onAddFigma.bind(u),u}return Q(e,[{key:"componentDidMount",value:function(){var r=this,o=this.props,c=o.channel,u=o.api;c.on(v,this.onAddFigma),this.stopListeningOnStory=u.onStory(function(){r.onAddFigma(Object.assign({},e.initialState))})}},{key:"componentWillUnmount",value:function(){this.stopListeningOnStory&&this.stopListeningOnStory(),this.unmounted=!0;var r=this.props.channel;r.removeListener(v,this.onAddFigma)}},{key:"onAddFigma",value:function(r){var o=r.url,c=r.embedHost,u=c===void 0?e.initialState.embedHost:c,g=r.allowFullScreen,O=g===void 0?e.initialState.allowFullScreen:g;this.setState({url:o,embedHost:u,allowFullScreen:O})}},{key:"render",value:function(){var r=this.state,o=r.url,c=r.allowFullScreen,u=r.embedHost;return o?d.createElement("iframe",{height:"100%",width:"100%",frameBorder:"0",src:"https://www.figma.com/embed?embed_host="+u+"&url="+o,allowFullScreen:c}):d.createElement("div",{style:{margin:"1rem",fontFamily:"Arial",fontSize:"1rem",color:"#444",width:"100%",overflow:"auto"}},d.createElement("strong",null,"Oh Hey! \u{1F44B} Add a Figma design to your story:"),d.createElement("pre",null,`
          import React from 'react'
          import { storiesOf } from '@storybook/react'
          import { WithFigma } from 'storybook-addon-figma'

          storiesOf('Button', module)
            .add('default', () => (
              <WithFigma
                url={'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'}
              >
                <button>Hello</button>
              </WithFigma>
            ))`))}}]),e}(d.Component);h.initialState={embedHost:"storybook",url:null,allowFullScreen:!0};h.propTypes={channel:E.default.object,api:E.default.object};h.defaultProps={channel:{},api:{}};_.register(b,function(t){_.addPanel(L,{title:"Figma",render:function(){return d.createElement(h,{channel:_.getChannel(),api:t})}})})});a();i();l();a();i();l();W();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
