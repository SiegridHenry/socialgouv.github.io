(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0KLy":function(e,t,n){"use strict";var r=n("KI45"),o=r(n("p0XB")),a=r(n("0iUn")),u=r(n("sLSF")),l=r(n("MI3g")),i=r(n("a7VT")),d=r(n("Tit0")),f=r(n("XXOK")),c=r(n("UXZV")),s=r(n("eVuF")),p=r(n("pLtp")),h=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var m=h(n("q1tI")),y=h(n("17x9")),g=[],v=[],b=!1;function w(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}function _(e){var t={loading:!1,loaded:{},error:null},n=[];try{(0,p.default)(e).forEach(function(r){var o=w(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then(function(e){t.loaded[r]=e}).catch(function(e){t.error=e})})}catch(r){t.error=r}return t.promise=s.default.all(n).then(function(e){return t.loading=!1,e}).catch(function(e){throw t.loading=!1,e}),t}function k(e,t){return m.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function E(e,t){var n,r=(0,c.default)({loader:null,loading:null,delay:200,timeout:null,render:k,webpack:null,modules:null},t),s=null;function p(){return s||(s=e(r.loader)),s.promise}if("undefined"==typeof window&&g.push(p),!b&&"undefined"!=typeof window&&"function"==typeof r.webpack){var h=r.webpack();v.push(function(e){var t=!0,n=!1,r=void 0;try{for(var o,a=(0,f.default)(h);!(t=(o=a.next()).done);t=!0){var u=o.value;if(-1!==e.indexOf(u))return p()}}catch(l){n=!0,r=l}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}})}return(n=function(t){function n(t){var o;return(0,a.default)(this,n),(o=(0,l.default)(this,(0,i.default)(n).call(this,t))).retry=function(){o.setState({error:null,loading:!0,timedOut:!1}),s=e(r.loader),o._loadModule()},p(),o.state={error:s.error,pastDelay:!1,timedOut:!1,loading:s.loading,loaded:s.loaded},o}return(0,d.default)(n,t),(0,u.default)(n,[{key:"componentWillMount",value:function(){this._mounted=!0,this._loadModule()}},{key:"_loadModule",value:function(){var e=this;if(this.context.loadable&&(0,o.default)(r.modules)&&r.modules.forEach(function(t){e.context.loadable.report(t)}),s.loading){"number"==typeof r.delay&&(0===r.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){e.setState({pastDelay:!0})},r.delay)),"number"==typeof r.timeout&&(this._timeout=setTimeout(function(){e.setState({timedOut:!0})},r.timeout));var t=function(){e._mounted&&(e.setState({error:s.error,loaded:s.loaded,loading:s.loading}),e._clearTimeouts())};s.promise.then(function(){t()}).catch(function(e){t()})}}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this._clearTimeouts()}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"render",value:function(){return this.state.loading||this.state.error?m.default.createElement(r.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?r.render(this.state.loaded,this.props):null}}],[{key:"preload",value:function(){return p()}}]),n}(m.default.Component)).contextTypes={loadable:y.default.shape({report:y.default.func.isRequired})},n}function M(e){return E(w,e)}function T(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return s.default.all(n).then(function(){if(e.length)return T(e,t)})}M.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return E(_,e)},M.preloadAll=function(){return new s.default(function(e,t){T(g).then(e,t)})},M.preloadReady=function(e){return new s.default(function(t){var n=function(){return b=!0,t()};T(v,e).then(n,n)})},t.default=M},"0Kfk":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=(n("17x9"),n("3N+l")),u=n.n(a),l=n("tKWW"),i=u()(function(){return n.e(31).then(n.t.bind(null,"95bm",7))},{ssr:!1,loadableGenerated:{webpack:function(){return["95bm"]},modules:["react-typeform-embed-2"]}});t.default=function(){return o.a.createElement(l.k,null,o.a.createElement(l.j,{title:"Proposez-nous vos idées",tagline:"Participer à l'amélioration du service public des Ministères Sociaux",style:{backgroundImage:"url(/static/images/all-actus.jpg)"}}),o.a.createElement(l.p,{className:"section-white",title:"Déposer votre idée",subTitle:""},o.a.createElement(i,{url:"https://incubateurministeressociaux.typeform.com/to/BNlCIL",buttonText:"Déposer mon idée",style:{height:500,margin:"0 auto",textAlign:"center"},hideHeaders:"true",hideFooter:"true"})))}},"3N+l":function(e,t,n){e.exports=n("UgXd")},I9hS:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/idees",function(){var e=n("0Kfk");return{page:e.default||e}}])},UgXd:function(e,t,n){"use strict";var r=n("KI45"),o=r(n("pLtp")),a=r(n("UXZV")),u=r(n("dhhW")),l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=l(n("q1tI")),d=l(n("0KLy")),f="undefined"==typeof window;function c(e,t){return delete t.webpack,delete t.modules,f?function(){return i.default.createElement(t.loading,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}:e(t)}function s(){return i.default.createElement("p",null,"loading...")}t.noSSR=c,t.default=function(e,t){var n=d.default,r={loading:function(e){return e.error,e.isLoading,i.default.createElement(s,null)}};if("function"==typeof e.then?r.loader=function(){return e}:"function"==typeof e?r.loader=e:"object"===(0,u.default)(e)&&(r=(0,a.default)({},r,e)),r=(0,a.default)({},r,t),e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules){n=d.default.Map;var l={},f=e.modules();(0,o.default)(f).forEach(function(e){var t=f[e];"function"!=typeof t.then?l[e]=t:l[e]=function(){return t.then(function(e){return e.default||e})}}),r.loader=l}if(r.loadableGenerated&&delete(r=(0,a.default)({},r,r.loadableGenerated)).loadableGenerated,"boolean"==typeof r.ssr){if(!r.ssr)return delete r.ssr,c(n,r);delete r.ssr}return n(r)}}},[["I9hS",1,0]]]);