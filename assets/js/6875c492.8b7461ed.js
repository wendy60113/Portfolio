"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[8610],{9058:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(7294),l=a(6010),r=a(1155),s=a(7524),i=a(9960),o=a(5999);const c={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function m(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(c.sidebarItemList,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:c.sidebarItem},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var u=a(3102);function g(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function p(e){return n.createElement(u.Zo,{component:g,props:e})}function d(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?n.createElement(p,{sidebar:t}):n.createElement(m,{sidebar:t}):null}function b(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0;return n.createElement(r.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(d,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},9627:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(7294),l=a(6010),r=a(5999),s=a(2263);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function m(){const{i18n:{currentLocale:e}}=(0,s.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=m();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}var g=a(1944),p=a(5281),d=a(9960),b=a(9058),E=a(2244);function h(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(E.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&n.createElement(E.Z,{permalink:l,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var f=a(197),v=a(902);const _=n.createContext(null);function N(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const r=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(_.Provider,{value:r},t)}function k(){const e=(0,n.useContext)(_);if(null===e)throw new v.i6("BlogPostProvider");return e}var P=a(4996);function I(e){let{children:t,className:a}=e;const{frontMatter:l,assets:r}=k(),{withBaseUrl:s}=(0,P.C)(),i=r.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},i&&n.createElement("meta",{itemProp:"image",content:s(i,{absolute:!0})}),t)}const Z={container:"container_YFnf",flexContainer:"flexContainer_niKW",title:"title_xvU1",col:"col_a8ey",proj:"proj_IDjh"};function w(e){let{tags:t}=e;const a=t.length,l=t.slice(0,2);return n.createElement(n.Fragment,null,l.map(((e,t)=>n.createElement("span",{key:"tag-"+t},e.label))),a>2?n.createElement("span",null,"+",a-2):"")}function L(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=k(),{permalink:r,title:s,tags:i}=a,o=l?"h1":"h2";return console.log(i),n.createElement(n.Fragment,null,n.createElement(o,{className:`${Z.title} ${t}`,itemProp:"headline"},l?s:n.createElement(d.Z,{itemProp:"url",to:r},s)),n.createElement(w,{tags:i}))}const x={proj:"proj_QOC_"};function T(e){let{image:t}=e;return n.createElement("img",{src:t,alt:"test"})}function F(e){let{className:t}=e;const{metadata:a}=k(),{frontMatter:l}=a;return n.createElement("div",{className:x.proj},n.createElement(T,{image:l.test_image}))}function B(){return n.createElement("header",null,n.createElement(F,null),n.createElement(L,null))}function y(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=k();return e?void 0:"margin-bottom--xl"}();return n.createElement(I,{className:`${l} ${a}`},n.createElement(B,null))}function C(e){let{items:t,component:a=y}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(N,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}function $(e){const t=function(){const{selectMessage:e}=u();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function A(e){let{tag:t}=e;const a=$(t);return n.createElement(n.Fragment,null,n.createElement(g.d,{title:a}),n.createElement(f.Z,{tag:"blog_tags_posts"}))}function M(e){let{tag:t,items:a,sidebar:l,listMetadata:s}=e;const i=$(t);return n.createElement(b.Z,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,i),n.createElement(d.Z,{href:t.allTagsPath},n.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(C,{items:a}),n.createElement(h,{metadata:s}))}function j(e){return n.createElement(g.FG,{className:(0,l.Z)(p.k.wrapper.blogPages,p.k.page.blogTagPostListPage)},n.createElement(A,e),n.createElement(M,e))}},2244:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010),r=a(9960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:i}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}}}]);