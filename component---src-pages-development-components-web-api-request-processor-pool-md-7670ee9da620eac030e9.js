"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[5419],{78277:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return m},default:function(){return u}});var t=r(58168),s=r(80045),o=(r(88763),r(15680)),a=r(83407);const l=["components"],m={},i=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var p;const d={_frontmatter:m},c=a.A;function u(e){let{components:n}=e,r=(0,s.A)(e,l);return(0,o.mdx)(c,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"request-processors-pool"},"Request processors pool"),(0,o.mdx)("p",null,"The request processors pool routes web API requests. It is located in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_WebApi")," module: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\Webapi\\Controller\\Rest\\RequestProcessorPool")),(0,o.mdx)("p",null,"Adobe Commerce and Magento Open Source define the following processors:"),(0,o.mdx)("h2",{id:"processors"},"Processors"),(0,o.mdx)("h3",{id:"sync"},(0,o.mdx)("inlineCode",{parentName:"h3"},"sync")),(0,o.mdx)("p",null,"Executes the corresponding service contract."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Class:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"Magento\\Webapi\\Controller\\Rest\\SynchronousRequestProcessor")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"URL pattern:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"/^\\\\/V\\\\d+/"))),(0,o.mdx)("h3",{id:"syncschema"},(0,o.mdx)("inlineCode",{parentName:"h3"},"syncSchema")),(0,o.mdx)("p",null,"Delivers the schema needed for generating Swagger documentation."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Class:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"Magento\\Webapi\\Controller\\Rest\\SchemaRequestProcessor")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"URL pattern:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"schema"))),(0,o.mdx)("h3",{id:"async"},(0,o.mdx)("inlineCode",{parentName:"h3"},"async")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Class:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"Magento\\WebapiAsync\\Controller\\Rest\\AsynchronousRequestProcessor")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"URL pattern:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"/^\\\\/async(\\\\/V.+)/"))),(0,o.mdx)("p",null,"Performs an asynchronous API request. It executes ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\AsynchronousOperations\\Model\\MassSchedule::publishMass"),", which places a single message in the queue."),(0,o.mdx)("h3",{id:"asyncschema"},(0,o.mdx)("inlineCode",{parentName:"h3"},"asyncSchema")),(0,o.mdx)("p",null,"Delivers the schema needed for generating Swagger documentation for asynchronous endpoints."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Class:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"Magento\\WebapiAsync\\Controller\\Rest\\AsynchronousSchemaRequestProcessor")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"URL pattern:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"async/schema"))),(0,o.mdx)("h3",{id:"asyncbulk"},(0,o.mdx)("inlineCode",{parentName:"h3"},"asyncBulk")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Class:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"Magento\\WebapiAsync\\Controller\\Rest\\VirtualType\\AsynchronousBulkRequestProcessor")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"URL pattern:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"/^\\\\/async\\/bulk(\\\\/V.+)/"))),(0,o.mdx)("p",null,"Performs a bulk API request by executing ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\AsynchronousOperations\\Model\\MassSchedule::publishMass"),", which places multiple messages in the queue."),(0,o.mdx)("h3",{id:"asyncbulkschema"},(0,o.mdx)("inlineCode",{parentName:"h3"},"asyncBulkSchema")),(0,o.mdx)("p",null,"Currently not used. Reserved for future use."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Class:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"Magento\\WebapiAsync\\Controller\\Rest\\VirtualType\\AsynchronousBulkSchemaRequestProcessor")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"URL pattern:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"async/bulk/schema"))),(0,o.mdx)(i,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"async")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"asyncBulk")," share the same processor but have different URL patterns."),(0,o.mdx)("h2",{id:"create-a-new-processor"},"Create a new processor"),(0,o.mdx)("p",null,"To create a custom processor, you must perform the following tasks:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Define the custom processor in ",(0,o.mdx)("inlineCode",{parentName:"li"},"webapi_rest/di.xml"),"."),(0,o.mdx)("li",{parentName:"ul"},"Create a processor class and implement the ",(0,o.mdx)("inlineCode",{parentName:"li"},"Magento\\Webapi\\Controller\\Rest\\RequestProcessorInterface")," interface."),(0,o.mdx)("li",{parentName:"ul"},"Define the processing rules in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"canProcess")," method."),(0,o.mdx)("li",{parentName:"ul"},"Create the processor logic in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"process")," method.")),(0,o.mdx)("h3",{id:"define-the-custom-processor"},"Define the custom processor"),(0,o.mdx)("p",null,"Processors must be defined in a module's ",(0,o.mdx)("inlineCode",{parentName:"p"},"webapi_rest/di.xml")," file. The following example shows the definition of the default ",(0,o.mdx)("inlineCode",{parentName:"p"},"sync")," processor:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Webapi\\Controller\\Rest\\RequestProcessorPool">\n    <arguments>\n        <argument name="requestProcessors" xsi:type="array">\n            <item name="sync" xsi:type="object" sortOrder="100">Magento\\Webapi\\Controller\\Rest\\SynchronousRequestProcessor</item>\n        </argument>\n    </arguments>\n</type>\n')),(0,o.mdx)("h2",{id:"create-the-processor-class"},"Create the processor class"),(0,o.mdx)("p",null,"A custom processor must implement the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\Webapi\\Controller\\Rest\\RequestProcessorInterface")," interface, as shown below:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndeclare(strict_types=1);\n\nnamespace Magento\\Webapi\\Controller\\Rest;\n\n/**\n *  Request processor interface\n */\ninterface RequestProcessorInterface\n{\n    /**\n     * Executes the logic to process the request\n     *\n     * @param \\Magento\\Framework\\Webapi\\Rest\\Request $request\n     * @return void\n     * @throws \\Magento\\Framework\\Exception\\AuthorizationException\n     * @throws \\Magento\\Framework\\Exception\\InputException\n     * @throws \\Magento\\Framework\\Webapi\\Exception\n     */\n    public function process(\\Magento\\Framework\\Webapi\\Rest\\Request $request);\n\n    /**\n     * Method should return true for all the requests the current processor can process.\n     *\n     * Invoked in the loop for all registered request processors. The first one wins.\n     *\n     * @param \\Magento\\Framework\\Webapi\\Rest\\Request $request\n     * @return bool\n     */\n    public function canProcess(\\Magento\\Framework\\Webapi\\Rest\\Request $request);\n}\n")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"canProcess(\\Magento\\Framework\\Webapi\\Rest\\Request $request)")," method defines whether the current request can be processed. Currently, all implemented processors match current request URLs with the defined patterns."),(0,o.mdx)("p",null,"For example, ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\WebapiAsync\\Controller\\Rest\\AsynchronousRequestProcessor")," processes asynchronous calls, such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"<host>/rest/async/V1/products"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},'const PROCESSOR_PATH = "/^\\\\/async(\\\\/V.+)/";\n\n.....\n\npublic function canProcess(\\Magento\\Framework\\Webapi\\Rest\\Request $request)\n{\n    if ($request->getHttpMethod() === \\Magento\\Framework\\Webapi\\Rest\\Request::HTTP_METHOD_GET) {\n        return false;\n    }\n\n    if (preg_match($this->processorPath, $request->getPathInfo()) === 1) {\n        return true;\n    }\n    return false;\n}\n\n.....\n')),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"process(\\Magento\\Framework\\Webapi\\Rest\\Request $request)")," method executes processor logic."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-web-api-request-processor-pool-md-7670ee9da620eac030e9.js.map