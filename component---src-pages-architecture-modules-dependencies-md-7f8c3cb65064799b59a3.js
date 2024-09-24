"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[12720],{61160:function(e,n,o){o.r(n),o.d(n,{_frontmatter:function(){return i},default:function(){return c}});var d=o(58168),a=o(80045),l=(o(88763),o(15680)),t=o(83407);const m=["components"],i={},r=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)});var s;const p={_frontmatter:i},u=t.A;function c(e){let{components:n}=e,o=(0,a.A)(e,m);return(0,l.mdx)(u,(0,d.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"module-dependencies"},"Module dependencies"),(0,l.mdx)("p",null,"A ",(0,l.mdx)("em",{parentName:"p"},"software dependency")," identifies  one software component's reliance on another for proper functioning. A core principle of the Adobe Commerce and Magento Open Source framework (Commerce framework) architecture is the ",(0,l.mdx)("strong",{parentName:"p"},"minimization of software dependencies"),". Instead of being closely interrelated with other modules, modules are optimally designed to be ",(0,l.mdx)("em",{parentName:"p"},"loosely coupled"),". Loosely coupled modules require little or no knowledge of other modules to perform their tasks."),(0,l.mdx)("p",null,"Each module is responsible for a unique feature. In practice, this means that:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Several modules cannot be responsible for one feature.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"One module cannot be responsible for several features.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Module dependencies on other modules must be declared explicitly. You must also declare any dependency upon other components (for example, a theme, language package, or library).")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Removing or disabling a module does not result in disabling other modules."))),(0,l.mdx)("h2",{id:"dependency-types"},"Dependency types"),(0,l.mdx)("p",null,"There are two types of module dependencies: hard and soft."),(0,l.mdx)("h3",{id:"hard-dependencies"},"Hard dependencies"),(0,l.mdx)("p",null,"A module with a ",(0,l.mdx)("em",{parentName:"p"},"hard dependency")," on another module cannot function without the module it depends on. These modules:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Contain code that directly uses logic from another module, such as class constants, static methods, public class properties, interfaces, and traits."),(0,l.mdx)("li",{parentName:"ul"},"Contain strings that include class names, method names, class constants, class properties, interfaces, and traits from another module."),(0,l.mdx)("li",{parentName:"ul"},"Deserializes an object declared in another module."),(0,l.mdx)("li",{parentName:"ul"},"Uses or modifies the database tables used by another module.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"require")," section of ",(0,l.mdx)("inlineCode",{parentName:"p"},"app/code/<Vendor>/<Module>/composer.json")," file contains hard dependency definitions for the module. For example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'  ...\n  "require": {\n    "magento/module-catalog": "103.0.*",\n    "magento/module-email": "101.0.*",\n    "magento/module-media-storage": "100.3.*",\n    "magento/module-store": "101.0.*",\n    "magento/module-theme": "101.0.*",\n    "magento/module-ui": "101.1.*",\n    "magento/module-variable": "100.3.*",\n    "magento/module-widget": "101.1.*",\n    "magento/module-authorization": "100.3.*"\n   }\n   ...\n')),(0,l.mdx)("h3",{id:"soft-dependencies"},"Soft dependencies"),(0,l.mdx)("p",null,"A module with a ",(0,l.mdx)("em",{parentName:"p"},"soft dependency")," on another module can function properly without the other module, even if it has a dependency on the other module. These modules:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Directly check another module's availability."),(0,l.mdx)("li",{parentName:"ul"},"Extend another module's configuration."),(0,l.mdx)("li",{parentName:"ul"},"Extend another module's layout.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"suggest")," section of ",(0,l.mdx)("inlineCode",{parentName:"p"},"app/code/<Vendor>/<Module>/composer.json")," file contains soft dependency definitions for the module. For example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'  ...\n  "suggest": {\n    "magento/module-graph-ql": "*",\n    "magento/module-graph-ql-cache": "*",\n    "magento/module-store-graph-ql": "*"\n  }\n   ...\n')),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"<sequence>")," node of ",(0,l.mdx)("inlineCode",{parentName:"p"},"app/code/<Vendor>/<Module>/etc/module.xml")," file also contains soft dependency definitions for the module. For example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'  <module name="Magento_Cms">\n    <sequence>\n      <module name="Magento_Store"/>\n      <module name="Magento_Theme"/>\n      <module name="Magento_Variable"/>\n    </sequence>\n  </module>\n')),(0,l.mdx)(r,{variant:"success",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"If a module uses code from another module, it should declare the dependency explicitly."),(0,l.mdx)("h2",{id:"module-install-order"},"Module install order"),(0,l.mdx)("p",null,"The Commerce framework installs modules in the following order:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"The module serving as a dependency for another module"),(0,l.mdx)("li",{parentName:"ol"},"The module dependent on it")),(0,l.mdx)("h2",{id:"appropriate-dependencies"},"Appropriate dependencies"),(0,l.mdx)("p",null,"Although the Commerce framework architecture favors loosely coupled software components, modules can contain dependencies upon these software components:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"other modules")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"PHP extensions")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"libraries (either Commerce framework library or third party libraries)"))),(0,l.mdx)(r,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"You can lose the historical information contained in a module if the module is removed or disabled. We recommend alternative storage of module information before you remove or disable a module."),(0,l.mdx)("h2",{id:"inappropriate-dependencies"},"Inappropriate dependencies"),(0,l.mdx)("p",null,"Avoid creating these dependencies:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Circular (both direct and indirect)"),(0,l.mdx)("li",{parentName:"ul"},"Undeclared"),(0,l.mdx)("li",{parentName:"ul"},"Incorrect")),(0,l.mdx)("h2",{id:"dependencies-between-modules-in-different-presentation-layers"},"Dependencies between modules in different presentation layers"),(0,l.mdx)("p",null,"You can build dependencies between the modules belonging to different layers."),(0,l.mdx)("h2",{id:"dependencies-in-the-framework-layer"},"Dependencies in the Framework layer"),(0,l.mdx)("p",null,"A module belonging to the Commerce framework can be used in the application layer by an explicit dependency."),(0,l.mdx)(r,{variant:"success",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"In this case, using interfaces is preferable to using classes. You can build dependencies between classes in the Commerce framework even if they belong to different modules."),(0,l.mdx)("h2",{id:"dependencies-in-the-application-layer"},"Dependencies in the application layer"),(0,l.mdx)("p",null,"A module belonging to the application layer cannot be used in the Commerce framework."),(0,l.mdx)("p",null,"You can build dependencies between classes in the application layer, but these classes must belong to the same module. Dependencies between the modules of the application layer should be built only by the service contract or the service provider interface (SPI)."),(0,l.mdx)("h2",{id:"managing-module-dependencies"},"Managing module dependencies"),(0,l.mdx)("p",null,"At a high level, there are three main steps for managing module dependencies:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Name and declare the module in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"module.xml")," file.")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Declare any dependencies that the module has (whether on other modules or on a different component) in the module's ",(0,l.mdx)("inlineCode",{parentName:"p"},"composer.json")," file.")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"(",(0,l.mdx)("em",{parentName:"p"},"Optional"),") Define the desired load order of config files and ",(0,l.mdx)("inlineCode",{parentName:"p"},".css")," files in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"module.xml")," file."))),(0,l.mdx)("p",null,"Example: Module A declares a dependency upon Module B. Thus, in Module A's ",(0,l.mdx)("inlineCode",{parentName:"p"},"module.xml")," file, Module B is listed in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"<sequence>")," list, so that B's files are loaded before A's. Additionally, you must declare a dependency upon Module B in A's ",(0,l.mdx)("inlineCode",{parentName:"p"},"composer.json")," file. Furthermore, in the ",(0,l.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/files/deployment-files.html"},"deployment configuration"),", Modules A and B must both be defined as enabled."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"etc/module.xml")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">\n    <module name="Module_A" setup_version="1.0.0">\n        <sequence>\n            <module name="Module_B" />\n        </sequence>\n    </module>\n</config>\n')),(0,l.mdx)("p",null,"After installing the module and opening ",(0,l.mdx)("inlineCode",{parentName:"p"},"app/etc/config.php"),", you are able to see that the Module_B was loaded before Module_A:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-php"},"return [\n    'modules' => [\n        ...\n        'Module_B' => 1,\n        'Module_A' => 1,\n        ...\n    ]\n];\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-architecture-modules-dependencies-md-7f8c3cb65064799b59a3.js.map