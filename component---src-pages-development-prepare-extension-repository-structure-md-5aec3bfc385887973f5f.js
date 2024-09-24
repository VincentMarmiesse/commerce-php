"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[76543],{56021:function(e,n,o){o.r(n),o.d(n,{_frontmatter:function(){return l},default:function(){return i}});var t=o(58168),r=o(80045),a=(o(88763),o(15680)),p=o(83407);const m=["components"],l={},s={_frontmatter:l},d=p.A;function i(e){let{components:n}=e,o=(0,r.A)(e,m);return(0,a.mdx)(d,(0,t.A)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"extension-repository-structure"},"Extension repository structure"),(0,a.mdx)("p",null,"For module, theme, and language pack component repositories, we recommend five best practices:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Flatter hierarchy"),(0,a.mdx)("li",{parentName:"ul"},"One ",(0,a.mdx)("em",{parentName:"li"},"extension type")," (module, theme, or language pack) per repository"),(0,a.mdx)("li",{parentName:"ul"},"Multiple components per repository"),(0,a.mdx)("li",{parentName:"ul"},"One component per repository"),(0,a.mdx)("li",{parentName:"ul"},"One functional test suite per module component")),(0,a.mdx)("h2",{id:"flatter-hierarchy"},"Flatter hierarchy"),(0,a.mdx)("p",null,"Your repository structure should no longer include ",(0,a.mdx)("inlineCode",{parentName:"p"},"app/code/<Vendor>/")," directories."),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Before:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tree"},"<extension_repo_root\\>\n└── app/code/<Vendor>/\n    └── <Module1>\n")),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"After:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tree"},"<extension_repo_root>/\n└── <Module1>\n")),(0,a.mdx)("h2",{id:"one-extension-type-per-repository"},"One extension type per repository"),(0,a.mdx)("p",null,"You cannot mix extension types (modules, themes, and language packs) in the same extension repository. Each component type must have its own repository. For example, ",(0,a.mdx)("em",{parentName:"p"},"you cannot do this"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tree"},"// This is not supported\n<extension_repo_root>\n├── <Module1>\n├── <theme1>\n└── <language1>\n")),(0,a.mdx)("h2",{id:"multiple-components-per-repository"},"Multiple components per repository"),(0,a.mdx)("p",null,"If your extension is complex and requires several components, you can keep those components in the same repository to make the extension easy to package and maintain:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tree"},"<extension_repo_root>\n├── <Module1>\n├── <Module2>\n├── <Module1SampleData>\n└── <Module2SampleData>\n")),(0,a.mdx)("p",null,"You can do the same for theme and language pack extensions:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tree"},"<extension_repo_root>/\n├── <theme1>\n└── <theme2>\n")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tree"},"<extension_repo_root>/\n├── <language1>\n└── <language2>\n")),(0,a.mdx)("h2",{id:"one-component-per-repository"},"One component per repository"),(0,a.mdx)("p",null,"If your extension requires only one component, your ",(0,a.mdx)("inlineCode",{parentName:"p"},"<component_root>")," directory and your ",(0,a.mdx)("inlineCode",{parentName:"p"},"<repo_root>")," directory will be the same to reduce unnecessary hierarchy in the directory structure:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tree"},"<MyModule_repo_root>\n├── Api\n├── Block\n├── Controller\n├── Console\n├── etc\n├── Helper\n├── i18n\n├── Model\n├── Plugin\n├── Test\n├── view\n├── composer.json\n├── LICENSE.txt\n└── ...\n")),(0,a.mdx)("h2",{id:"test-suites"},"Test Suites"),(0,a.mdx)("p",null,"Function tests can be added to a ",(0,a.mdx)("inlineCode",{parentName:"p"},"Test")," directory within each module of your extension."),(0,a.mdx)("p",null,"Note: Currently, only Unit and MFTF tests can be run from within a ",(0,a.mdx)("inlineCode",{parentName:"p"},"<Module>")," directory."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tree"},"<extension_repo_root>\n├── <Module1>\n│   ├── ...\n│   ├── Test\n│   │   ├── Unit\n│   │   ├── Integration\n│   │   └── Mftf\n│   │       ├── TestSuite\n│   │       └── composer.json\n│   └── ...\n├── <Module2>\n├── <Module1SampleData>\n└── <Module2SampleData>\n")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-prepare-extension-repository-structure-md-5aec3bfc385887973f5f.js.map