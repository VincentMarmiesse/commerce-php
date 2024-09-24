"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[8137],{92363:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return p},default:function(){return l}});var n=t(58168),m=t(80045),r=(t(88763),t(15680)),i=t(83407),o=t(34348);const d=["components"],p={},u={_frontmatter:p},s=i.A;function l(e){let{components:a}=e,t=(0,m.A)(e,d);return(0,r.mdx)(s,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(o.A,{mdxType:"Docs"}),(0,r.mdx)("h1",{id:"add-a-payment-action"},"Add a payment action"),(0,r.mdx)("p",null,"For each payment action available for the payment method, you must implement the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Creating a request with payment details. Described in ",(0,r.mdx)("a",{parentName:"p",href:"get-payment-info.md"},"Get payment information from frontend to backend"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Request processing using ",(0,r.mdx)("a",{parentName:"p",href:"../payment-gateway/response-handler.md"},"response handler")," and ",(0,r.mdx)("a",{parentName:"p",href:"../payment-gateway/response-validator.md"},"response validator"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Specify and configure the gateway command. Described in the ",(0,r.mdx)("a",{parentName:"p",href:"../payment-gateway/gateway-command.md#adding-gateway-commands"},"Gateway Command")," topic.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Add the command to the commands pool, as described in ",(0,r.mdx)("a",{parentName:"p",href:"../payment-gateway/command-pool.md#command-pool-configuration-for-a-particular-provider"},"Command Pool"),"."))),(0,r.mdx)("h2",{id:"configure-the-command"},"Configure the command"),(0,r.mdx)("p",null,"The gateway command for the payment action must be configured in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"di.xml")," file of your module. Conventionally, its location must be ",(0,r.mdx)("inlineCode",{parentName:"p"},"<your_module_dir>/etc/di.xml")),(0,r.mdx)("p",null,"Configure the command as described in ",(0,r.mdx)("a",{parentName:"p",href:"../payment-gateway/gateway-command.md"},"Gateway Command"),"."),(0,r.mdx)("h2",{id:"example-authorize-payment-action-for-braintree"},"Example: ",(0,r.mdx)("inlineCode",{parentName:"h2"},"authorize")," payment action for Braintree"),(0,r.mdx)("p",null,"Configuring the gateway command and adding it to command pool (",(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Braintree/etc/di.xml"),"):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<virtualType name="BraintreeCommandPool" type="Magento\\Payment\\Gateway\\Command\\CommandPool">\n    <arguments>\n        <argument name="commands" xsi:type="array">\n            <item name="authorize" xsi:type="string">BraintreeAuthorizeCommand</item>\n        </argument>\n    </arguments>\n</virtualType>\n\n<virtualType name="BraintreeAuthorizeCommand" type="Magento\\Payment\\Gateway\\Command\\GatewayCommand">\n    <arguments>\n        <argument name="requestBuilder" xsi:type="object">BraintreeAuthorizeRequest</argument>\n        <argument name="transferFactory" xsi:type="object">Magento\\Braintree\\Gateway\\Http\\TransferFactory</argument>\n        <argument name="client" xsi:type="object">Magento\\Braintree\\Gateway\\Http\\Client\\TransactionSale</argument>\n        <argument name="handler" xsi:type="object">BraintreeAuthorizationHandler</argument>\n        <argument name="validator" xsi:type="object">Magento\\Braintree\\Gateway\\Validator\\ResponseValidator</argument>\n    </arguments>\n</virtualType>\n')),(0,r.mdx)("p",null,"In the command configuration we see that ",(0,r.mdx)("inlineCode",{parentName:"p"},"BraintreeAuthorizeRequest")," is specified as ",(0,r.mdx)("inlineCode",{parentName:"p"},"requestBuilder"),", that is a\nLet's look closer on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"requestBuilder")," arguments. This argument value is a list of builders, builder composite."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"BraintreeAuthorizeRequest")," builder contains the following builders (",(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Braintree/etc/di.xml"),"):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<virtualType name="BraintreeAuthorizeRequest" type="Magento\\Payment\\Gateway\\Request\\BuilderComposite">\n        <arguments>\n            <argument name="builders" xsi:type="array">\n                <item name="customer" xsi:type="string">Magento\\Braintree\\Gateway\\Request\\CustomerDataBuilder</item>\n                <item name="payment" xsi:type="string">Magento\\Braintree\\Gateway\\Request\\PaymentDataBuilder</item>\n                <item name="channel" xsi:type="string">Magento\\Braintree\\Gateway\\Request\\ChannelDataBuilder</item>\n                <item name="address" xsi:type="string">Magento\\Braintree\\Gateway\\Request\\AddressDataBuilder</item>\n                <item name="vault" xsi:type="string">Magento\\Braintree\\Gateway\\Request\\VaultDataBuilder</item>\n                <item name="3dsecure" xsi:type="string">Magento\\Braintree\\Gateway\\Request\\ThreeDSecureDataBuilder</item>\n                <item name="device_data" xsi:type="string">Magento\\Braintree\\Gateway\\Request\\KountPaymentDataBuilder</item>\n                <item name="dynamic_descriptor" xsi:type="string">Magento\\Braintree\\Gateway\\Request\\DescriptorDataBuilder</item>\n                <item name="store" xsi:type="string">Magento\\Braintree\\Gateway\\Request\\StoreConfigBuilder</item>\n                <item name="merchant_account" xsi:type="string">Magento\\Braintree\\Gateway\\Request\\MerchantAccountDataBuilder</item>\n            </argument>\n        </arguments>\n    </virtualType>\n')),(0,r.mdx)("p",null,"The most important builder in this pool is ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento\\Braintree\\Gateway\\Request\\PaymentDataBuilder"),", the ",(0,r.mdx)("inlineCode",{parentName:"p"},"payment")," builder. It is responsible for the payment information part of the request."),(0,r.mdx)("p",null,"Please see the ",(0,r.mdx)("a",{parentName:"p",href:"get-payment-info.md"},"Get payment information from frontend to backend")," for details about how payment information can be handled and ",(0,r.mdx)("a",{parentName:"p",href:"../../../tutorials/frontend/custom-checkout/add-payment-method.md"},"Add a custom payment method to checkout"),": for information on how to add a custom payment integration to checkout page."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-payments-integrations-base-integration-payment-action-md-1fc6d36003b59389cf4c.js.map