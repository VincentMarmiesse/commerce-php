"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[91288],{53580:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return p}});var s=a(58168),n=a(80045),i=(a(88763),a(15680)),r=a(83407);const o=["components"],c={},d={_frontmatter:c},m=r.A;function p(e){let{components:t}=e,a=(0,n.A)(e,o);return(0,i.mdx)(m,(0,s.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"service-contracts"},"Service contracts"),(0,i.mdx)("p",null,"Adobe Commerce and Magento Open Source are modular systems that enable third-party developers to customize and overwrite core parts of the application framework. This flexibility, however, comes at a price. Business logic tends to leak across the layers of the system, which manifests as duplicated and inconsistent code."),(0,i.mdx)("p",null,"Merchants might be reluctant to upgrade Adobe Commerce or Magento Open Source because customized extensions that they have purchased might not be compatible with new versions. Also, Adobe and third-party developers can find it difficult to track and report the dependencies that customized extensions have on other extensions."),(0,i.mdx)("p",null,"To address these issues, Adobe Commerce and Magento Open Source introduced ",(0,i.mdx)("em",{parentName:"p"},"service contracts"),"."),(0,i.mdx)("h2",{id:"what-is-a-service-contract"},"What is a service contract?"),(0,i.mdx)("p",null,"A service contract is a set of PHP interfaces that are defined for a module.\nA service contract includes ",(0,i.mdx)("a",{parentName:"p",href:"design-patterns.md#data-interfaces"},"data interfaces"),", which preserve data integrity, and ",(0,i.mdx)("a",{parentName:"p",href:"design-patterns.md#service-interfaces"},"service interfaces"),", which hide business logic details from service requestors such as controllers, web services, and other modules."),(0,i.mdx)("p",null,"If developers define data and service interfaces according to a set of ",(0,i.mdx)("a",{parentName:"p",href:"design-patterns.md"},"design patterns"),", the result is a well-defined, durable API that other modules and third-party extensions can implement through models and resource models."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"701px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"90.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/b2940dab7a42d12a6f8cef4c624aefb7/5530d/msc.webp 320w","/commerce-php/static/b2940dab7a42d12a6f8cef4c624aefb7/0c8fb/msc.webp 640w","/commerce-php/static/b2940dab7a42d12a6f8cef4c624aefb7/123bf/msc.webp 701w"],sizes:"(max-width: 701px) 100vw, 701px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/b2940dab7a42d12a6f8cef4c624aefb7/8980b/msc.jpg 320w","/commerce-php/static/b2940dab7a42d12a6f8cef4c624aefb7/56d4e/msc.jpg 640w","/commerce-php/static/b2940dab7a42d12a6f8cef4c624aefb7/8144e/msc.jpg 701w"],sizes:"(max-width: 701px) 100vw, 701px",type:"image/jpeg"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/b2940dab7a42d12a6f8cef4c624aefb7/8144e/msc.jpg",alt:"Service Contracts",title:"Service Contracts",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"benefits"},"Benefits"),(0,i.mdx)("p",null,"Service contracts enhance the modularity of Magento. They enable Adobe and third-party developers to report system dependencies through ",(0,i.mdx)("inlineCode",{parentName:"p"},"composer.json")," files and, consequently, guarantee compatibility across versions of Adobe Commerce and Magento Open Source. This compatibility ensures that merchants can easily upgrade Magento.\nThese contracts ensure a well-defined, durable API that other modules and third-party extensions can implement. Also, these contracts make it easy to ",(0,i.mdx)("a",{parentName:"p",href:"../web-api/services.md"},"configure services as web APIs"),"."),(0,i.mdx)("p",null,"Data entities are a side benefit of service contracts.\nThe database tables that normally support these entities can be complicated.\nFor example, some attributes might be stored in an EAV table, so a set of MySQL database tables might define a single data entity.\nData entities in a service contract reveal a simpler data model than the data model in an underlying relational database schema.\nEventually, you will be able to use different storage technologies for different data collections. For example, you could use a NoSQL database to replace product tables."),(0,i.mdx)("h2",{id:"using-the-api-tag"},"Using the @api tag"),(0,i.mdx)("p",null,"Backward compatibility can be indicated by the use of ",(0,i.mdx)("inlineCode",{parentName:"p"},"@api"),". For more information, see ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/contributor/guides/code-contributions/backward-compatibility-policy/"},"Backward compatibility"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-service-contracts-index-md-69b140a90c308fb5e209.js.map