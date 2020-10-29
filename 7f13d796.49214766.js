(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},561:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(7),o=(n(0),n(1006)),i={title:"Meet Doctor, a new React Native command",author:"Lucas Bento",authorTitle:"React Native Community",authorURL:"https://twitter.com/lbentosilva",authorImageURL:"https://avatars3.githubusercontent.com/u/6207220?s=460&v=4",authorTwitter:"lbentosilva",tags:["announcement"]},c={permalink:"/react-native/blog/2019/11/18/react-native-doctor",source:"@site/blog/2019-11-18-react-native-doctor.md",description:"After over 20 pull requests from 6 contributors in the React Native Community, we're excited to launch react-native doctor, a new command to help you out with getting started, troubleshooting and automatically fixing errors with your development environment. The doctor command is heavily inspired by Expo and Homebrew's own doctor command with a pinch of UI inspired by Jest.",date:"2019-11-18T00:00:00.000Z",tags:[{label:"announcement",permalink:"/react-native/blog/tags/announcement"}],title:"Meet Doctor, a new React Native command",readingTime:1.75,truncated:!0,prevItem:{title:"Announcing React Native 0.62 with Flipper",permalink:"/react-native/blog/2020/03/26/version-0.62"},nextItem:{title:"Announcing React Native 0.61 with Fast Refresh",permalink:"/react-native/blog/2019/09/18/version-0.61"}},l=[{value:"How it works",id:"how-it-works",children:[]},{value:"Try it now",id:"try-it-now",children:[]},{value:"What checks are currently supported",id:"what-checks-are-currently-supported",children:[]},{value:"Thanks",id:"thanks",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"After over 20 pull requests from 6 contributors in the React Native Community, we're excited to launch ",Object(o.b)("inlineCode",{parentName:"p"},"react-native doctor"),", a new command to help you out with getting started, troubleshooting and automatically fixing errors with your development environment. The ",Object(o.b)("inlineCode",{parentName:"p"},"doctor")," command is heavily inspired by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://expo.io/"}),"Expo")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"'s own doctor command with a pinch of UI inspired by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/"}),"Jest"),"."),Object(o.b)("p",null,"Here it is in action:"),Object(o.b)("p",{style:{textAlign:"center"}},Object(o.b)("video",{width:700,controls:"controls",autoPlay:!0,style:{borderRadius:5}},Object(o.b)("source",{type:"video/mp4",src:"/img/homepage/DoctorCommand.mp4"}))),Object(o.b)("h2",{id:"how-it-works"},"How it works"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"doctor")," command currently supports most of the software and libraries that React Native relies on, such as CocoaPods, Xcode and Android SDK. With ",Object(o.b)("inlineCode",{parentName:"p"},"doctor")," we'll find issues with your development environment and give you the option to automatically fix them. If ",Object(o.b)("inlineCode",{parentName:"p"},"doctor")," is not able to fix an issue, it will display a message and a helpful link explaining how to fix it manually as the following:"),Object(o.b)("p",{style:{textAlign:"center"}},Object(o.b)("img",{width:700,src:"/img/DoctorManualInstallationMessage.png",alt:"Doctor command with a link to help on Android SDK's installation",title:"Doctor command with a link to help on Android SDK's installation"})),Object(o.b)("h2",{id:"try-it-now"},"Try it now"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"doctor")," command is available as a part of React Native 0.62. However, you can try it without upgrading yet:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx @react-native-community/cli doctor\n")),Object(o.b)("h2",{id:"what-checks-are-currently-supported"},"What checks are currently supported"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"doctor")," currently supports the following checks:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Node.js (>= 8.3)"),Object(o.b)("li",{parentName:"ul"},"yarn (>= 1.10)"),Object(o.b)("li",{parentName:"ul"},"npm (>= 4)"),Object(o.b)("li",{parentName:"ul"},"Watchman (>= 4), used for watching changes in the filesystem when in development mode.")),Object(o.b)("p",null,"Specific to the Android environment:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Android SDK (>= 26), the software runtime for Android."),Object(o.b)("li",{parentName:"ul"},"Android NDK (>= 19), the native development toolkit for Android."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ANDROID_HOME"),", environment variable required by the Android SDK setup.")),Object(o.b)("p",null,"And to the iOS environment:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Xcode (>= 10), IDE for developing, building and shipping iOS applications."),Object(o.b)("li",{parentName:"ul"},"CocoaPods, library dependency management tool for iOS applications."),Object(o.b)("li",{parentName:"ul"},"ios-deploy (optional), library used internally by the CLI to install applications on a physical iOS device.")),Object(o.b)("h2",{id:"thanks"},"Thanks"),Object(o.b)("p",null,"Huge thanks for the React Native Community for working on this, in particular ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/thymikee"}),"@thymikee"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/thib92"}),"@thib92"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jmeistrich"}),"@jmeistrich"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tido64"}),"@tido64")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rickhanlonii"}),"@rickhanlonii"),"."))}b.isMDXComponent=!0}}]);