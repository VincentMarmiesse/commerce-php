"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[16329],{84879:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return p}});var o=t(58168),a=t(80045),r=(t(88763),t(15680)),d=t(83407);const i=["components"],m={},s={_frontmatter:m},l=d.A;function p(e){let{components:n}=e,t=(0,a.A)(e,i);return(0,r.mdx)(l,(0,o.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"copy-fieldsets"},"Copy fieldsets"),(0,r.mdx)("p",null,"In this tutorial, you will learn to copy custom data from a quote object to an order object using the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/DataObject/Copy.php"},"Magento/Framework/DataObject/Copy")," class."),(0,r.mdx)("h2",{id:"step-1-define-your-attributes"},"Step 1: Define your attributes"),(0,r.mdx)("p",null,"The following code defines a simple ",(0,r.mdx)("a",{parentName:"p",href:"../../development/components/attributes.md"},"extension attribute")," named ",(0,r.mdx)("inlineCode",{parentName:"p"},"demo")," for the Cart and Order objects."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"etc/extension_attributes.xml:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">\n  <extension_attributes for="Magento\\Quote\\Api\\Data\\CartInterface">\n    <attribute code="demo" type="string" />\n  </extension_attributes>\n  <extension_attributes for="Magento\\Sales\\Api\\Data\\OrderInterface">\n      <attribute code="demo" type="string" />\n  </extension_attributes>\n</config>\n')),(0,r.mdx)("h2",{id:"step-2-configure-the-fieldset"},"Step 2: Configure the fieldset"),(0,r.mdx)("p",null,"The following code adds the ",(0,r.mdx)("inlineCode",{parentName:"p"},"demo")," field to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"sales_convert_quote")," fieldset with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"to_order")," aspect.\nThe code snippet in the next step uses the name of the fieldset and aspect to specify which fields to copy."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"etc/fieldset.xml:")),(0,r.mdx)("p",null,"The following example shows how to copy ",(0,r.mdx)("inlineCode",{parentName:"p"},"sales_convert_quote"),".",(0,r.mdx)("inlineCode",{parentName:"p"},"demo")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"sales_order"),".",(0,r.mdx)("inlineCode",{parentName:"p"},"demo"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:noNamespaceSchemaLocation="urn:magento:framework:DataObject/etc/fieldset.xsd">\n  <scope id="global">\n    <fieldset id="sales_convert_quote">\n      <field name="demo">\n        <aspect name="to_order" />\n      </field>\n    </fieldset>\n  </scope>\n</config>\n')),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"targetField")," attribute to specify the destination field. The following example shows how to copy ",(0,r.mdx)("inlineCode",{parentName:"p"},"sales_convert_quote"),".",(0,r.mdx)("inlineCode",{parentName:"p"},"demo")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"sales_order"),".",(0,r.mdx)("inlineCode",{parentName:"p"},"order_demo"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:noNamespaceSchemaLocation="urn:magento:framework:DataObject/etc/fieldset.xsd">\n  <scope id="global">\n    <fieldset id="sales_convert_quote">\n      <field name="demo">\n        <aspect name="to_order" targetField="order_demo"/>\n      </field>\n    </fieldset>\n  </scope>\n</config>\n')),(0,r.mdx)("p",null,"Define a new ",(0,r.mdx)("inlineCode",{parentName:"p"},"aspect")," if you need to copy a field of a source table into multiple fields in a destination table."),(0,r.mdx)("p",null,"The following example shows how to copy ",(0,r.mdx)("inlineCode",{parentName:"p"},"sales_convert_quote"),".",(0,r.mdx)("inlineCode",{parentName:"p"},"demo")," into"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"sales_order"),".",(0,r.mdx)("inlineCode",{parentName:"li"},"demo")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"sales_order"),".",(0,r.mdx)("inlineCode",{parentName:"li"},"order_demo"))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:noNamespaceSchemaLocation="urn:magento:framework:DataObject/etc/fieldset.xsd">\n  <scope id="global">\n    <fieldset id="sales_convert_quote">\n      <field name="demo">\n        <aspect name="to_order"/>\n        <aspect name="to_demo_order" targetField="order_demo"/>\n      </field>\n    </fieldset>\n  </scope>\n</config>\n')),(0,r.mdx)("h2",{id:"step-3-copy-the-fieldset"},"Step 3: Copy the fieldset"),(0,r.mdx)("p",null,"For copying the fieldset, we'll observe the ",(0,r.mdx)("inlineCode",{parentName:"p"},"sales_model_service_quote_submit_before")," event by using the following code in our ",(0,r.mdx)("inlineCode",{parentName:"p"},"etc/events.xml"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">\n    <event name="sales_model_service_quote_submit_before">\n        <observer name="[vendor]_[module]_sales_model_service_quote_submit_before" instance="Vendor\\Module\\Observer\\SaveOrderBeforeSalesModelQuoteObserver" />\n    </event>\n</config>\n')),(0,r.mdx)("p",null,"The following code snippets highlight the code pieces needed to copy a fieldset using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\DataObject\\Copy")," class."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Vendor\\Module\\Observer;\n\nuse Magento\\Framework\\DataObject\\Copy;\nuse Magento\\Framework\\Event\\Observer;\nuse Magento\\Framework\\Event\\ObserverInterface;\nuse Magento\\Quote\\Model\\Quote;\nuse Magento\\Sales\\Model\\Order;\n\nclass SaveOrderBeforeSalesModelQuoteObserver implements ObserverInterface\n{\n    ...\n\n    /**\n     * @var Copy\n     */\n    protected $objectCopyService;\n\n    ...\n\n    /**\n     * @param Copy $objectCopyService\n     * ...\n     */\n    public function __construct(\n        Copy $objectCopyService,\n        ...\n    ) {\n        $this->objectCopyService = $objectCopyService;\n        ...\n    }\n\n    /**\n     * @param Observer $observer\n     */\n    public function execute(Observer $observer)\n    {\n        /* @var Order $order */\n        $order = $observer->getEvent()->getData('order');\n        /* @var Quote $quote */\n        $quote = $observer->getEvent()->getData('quote');\n\n        $this->objectCopyService->copyFieldsetToTarget('sales_convert_quote', 'to_order', $quote, $order);\n        ...\n\n        return $this;\n    }\n}\n")),(0,r.mdx)("p",null,"In the code, an instance of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Copy")," class is obtained from the constructor using ",(0,r.mdx)("a",{parentName:"p",href:"../../development/components/dependency-injection.md"},"dependency injection"),".\nThe ",(0,r.mdx)("inlineCode",{parentName:"p"},"copyFieldsetToTarget")," function call with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"$quote")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"$order")," parameters copies the fieldset for the two objects."),(0,r.mdx)("h2",{id:"step-4-compile-and-cache-clean"},"Step 4: Compile and cache clean"),(0,r.mdx)("p",null,"Compile the code with this command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:di:compile\n")),(0,r.mdx)("p",null,"and clean the cache with this command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento cache:clean\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-backend-copy-fieldsets-md-f44eb7f3f7ac638bd615.js.map