import{o as e}from"./rolldown-runtime-C_JxhDyB.js";import{n as t,t as n}from"./jsx-runtime-DC0n_eUu.js";import{C as r}from"./context-CwQoLGKR-BSFDTGHb.js";import{E as i,lt as a,ut as o}from"./useActiveWallet-CvmN8neg-DoXjHuV7.js";import{bt as s}from"./ccip-AREX0pQ9.js";import{t as c}from"./ConnectPhoneForm-DOpPLfRT-BVJUesog.js";import{n as l}from"./chevron-down-DjtIm51S.js";import{D as u,N as d,Ut as f,Vt as p,i as m,j as h,m as g,y as ee}from"./index-CI5i05P9.js";import{t as _}from"./createLucideIcon-DYCMq4bT.js";import{t as v}from"./circle-x-DPIn7K2R.js";import{t as y}from"./triangle-alert-CpmwGA2G.js";import{t as b}from"./check-D4fgD6l-.js";import{t as x}from"./info-3caQiFj3.js";import{t as te}from"./lock-CG1Nh4ug.js";import{t as ne}from"./smartphone-CMaHJUgN.js";import{t as re}from"./wallet-gy9D6ZeH.js";import{t as S}from"./ScreenLayout-Ce16-u0i-CBEHZuxc.js";import{t as ie}from"./CopyableText-ChtfBWx4-dhti1P6W.js";import{n as ae,r as oe,t as se}from"./SelectSourceAsset-BSIZrvmo-DbALhnfl.js";import{n as ce,t as le}from"./GooglePay-DA-Ff7zK-CGuD6M0L.js";var ue={path:`/api/v1/onramp/stripe/create_link_auth_intent`,method:`POST`},de={path:`/api/v1/onramp/stripe/exchange_tokens`,method:`POST`},fe={path:`/api/v1/onramp/stripe/customer`,method:`GET`},pe={path:`/api/v1/onramp/stripe/customer/wallets`,method:`GET`},me={path:`/api/v1/onramp/stripe/customer/payment_tokens`,method:`GET`},he={path:`/api/v1/onramp/stripe/create_onramp_session`,method:`POST`},ge={path:`/api/v1/onramp/stripe/quote/:session_id`,method:`POST`},_e={path:`/api/v1/onramp/stripe/checkout/:session_id`,method:`POST`},C=_(`building`,[[`path`,{d:`M12 10h.01`,key:`1nrarc`}],[`path`,{d:`M12 14h.01`,key:`1etili`}],[`path`,{d:`M12 6h.01`,key:`1vi96p`}],[`path`,{d:`M16 10h.01`,key:`1m94wz`}],[`path`,{d:`M16 14h.01`,key:`1gbofw`}],[`path`,{d:`M16 6h.01`,key:`1x0f13`}],[`path`,{d:`M8 10h.01`,key:`19clt8`}],[`path`,{d:`M8 14h.01`,key:`6423bh`}],[`path`,{d:`M8 6h.01`,key:`1dz90k`}],[`path`,{d:`M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3`,key:`cabbwy`}],[`rect`,{x:`4`,y:`2`,width:`16`,height:`20`,rx:`2`,key:`1uxh74`}]]),ve=_(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),ye=_(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),w=_(`credit-card`,[[`rect`,{width:`20`,height:`14`,x:`2`,y:`5`,rx:`2`,key:`ynyp8z`}],[`line`,{x1:`2`,x2:`22`,y1:`10`,y2:`10`,key:`1b3vmo`}]]),T=_(`landmark`,[[`path`,{d:`M10 18v-7`,key:`wt116b`}],[`path`,{d:`M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z`,key:`1m329m`}],[`path`,{d:`M14 18v-7`,key:`vav6t3`}],[`path`,{d:`M18 18v-7`,key:`aexdmj`}],[`path`,{d:`M3 22h18`,key:`8prr45`}],[`path`,{d:`M6 18v-7`,key:`1ivflk`}]]),be=_(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),xe=_(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Se=_(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),E=n(),D=e(t(),1);a();var[Ce,we]=((e,t=750)=>{let n;return[(...r)=>{n&&clearTimeout(n),n=setTimeout((()=>{e(...r)}),t)},()=>{n&&clearTimeout(n)}]})((async(e,t)=>{h({isLoading:!0});try{let{getQuotes:n}=m(),r=await n({source:{asset:t.source.selectedAsset.toUpperCase(),amount:e},destination:{asset:t.destination.asset.toUpperCase(),chain:t.destination.chain,address:t.destination.address},environment:t.environment}),i=r.quotes??[],a=r.provider_errors,o=d(i,e);h({localQuotes:i,localSelectedQuote:i[0]??null,isLoading:!1,quotesWarning:o,quotesErrors:a??null,destinationCurrencyIconUrl:r.destination_currency_icon_url??null,destinationNetworkIconUrl:r.destination_network_icon_url??null})}catch{h({localQuotes:[],localSelectedQuote:null,quotesWarning:`provider_errors`,quotesErrors:null})}})),Te=e=>{h({amount:e});let{opts:t}=m();Ce(e,t)},O=()=>{let{stripeSession:e,controller:t}=m();e&&(t.current?.abort(),e.onramp.destroy(),h({stripeSession:null}))},Ee=async()=>{let{error:e,state:t,onFailure:n,onSuccess:r}=m();we(),O();let i=((e,t)=>t?{type:`failure`,error:t}:e.status===`provider-success`?{type:`success`,value:{status:`confirmed`}}:e.status===`provider-confirming`?{type:`success`,value:{status:`submitted`}}:{type:`failure`,error:Error(`User exited flow`)})(t,e);i.type===`success`?await r(i.value):n(i.error)},k=async(e,{environment:t})=>(await e.fetchPrivyRoute(fe,{query:{environment:t}})).data,A=()=>{let e=m().stripeSession;if(!e)throw Error(`No active Stripe onramp session`);return e},j=()=>{let{stripeSession:e,controller:t}=m();return e!==null&&!(t.current?.signal.aborted??1)},M=()=>{let{controller:e}=m();if(!e.current)throw Error(`No active abort controller`);return e.current.signal},N=(e,t,n)=>{let{promise:r,reject:i}=Promise.withResolvers(),a=setTimeout((()=>i(Error(`Timed out after ${t}ms`))),t);return n.addEventListener(`abort`,(()=>clearTimeout(a)),{once:!0}),Promise.race([e,r])},P=async(e,{environment:t})=>(await e.fetchPrivyRoute(me,{query:{environment:t}})).data,De=[`aptos`,`avalanche`,`base`,`bitcoin`,`ethereum`,`optimism`,`polygon`,`solana`,`stellar`,`sui`,`tempo`,`worldchain`,`xrpl`],F=e=>{if((e=>De.some((t=>t===e)))(e))return e;throw Error(`Unsupported Stripe onramp network: ${e}`)},I=async(e,t)=>await e.fetchPrivyRoute(he,{body:{session_id:t.sessionId,environment:t.environment,session:t.session}}),Oe=e=>{let t=ke(e?.source_currency?.toLowerCase());return{currencySymbol:t,paymentMethodLabel:null,fee:e?.fee&&t?`${t}${e.fee}`:null,destinationAmount:Ae(e?.destination_amount),destinationToken:e?.destination_currency?.toUpperCase()??null,destinationNetwork:je(e?.destination_network),sourceAmount:e?.source_total_amount??null,quoteExpiresAt:e?.quote_expiration??null}},ke=e=>e===`usd`?`$`:e===`eur`?`€`:e===`gbp`?`£`:null,Ae=e=>e?e.replace(/\.0+$/,``).replace(/(\.\d*?)0+$/,`$1`):null,je=e=>e?e.split(/[-_]/).map((e=>`${e.slice(0,1).toUpperCase()}${e.slice(1)}`)).join(` `):null,L=(e,t,n=`us`,r)=>{if(n===`eu`)return Me(t,r);let i=e=>t.includes(e),a=i(`first_name`)&&i(`last_name`),o=i(`address_line_1`)&&i(`address_city`)&&i(`address_state`)&&i(`address_postal_code`),s=i(`dob`),c=i(`id_number`);return e===`l0`?a?o?null:`collect-address`:`collect-name`:a?s?c?o?null:`collect-address`:`collect-ssn`:`collect-dob`:`collect-name`},Me=(e,t)=>{let n=t=>e.includes(t);return n(`first_name`)&&n(`last_name`)?n(`dob`)?n(`nationalities`)?n(`birth_city`)&&n(`birth_country`)?n(`address_line_1`)?n(`identifiers`)?n(`attestation`)?t===`verified`?null:`verify-documents`:`eu-attestation`:`collect-identifiers`:`collect-address`:`collect-birth-location`:`collect-nationality`:`collect-dob`:`collect-name`},Ne=e=>{let t=Pe(e);if(t===`crypto_onramp_missing_minimum_identity_verification`)return`l0`;if(t===`crypto_onramp_missing_identity_verification`)return`l1`;if(t===`crypto_onramp_missing_document_verification`)return`l2`;let n=Fe(e);return n.includes(`crypto_onramp_missing_minimum_identity_verification`)?`l0`:n.includes(`crypto_onramp_missing_identity_verification`)?`l1`:n.includes(`crypto_onramp_missing_document_verification`)?`l2`:n.toLowerCase().includes(`minimum identity verification`)?`l0`:n.toLowerCase().includes(`identity verification`)?`l1`:n.toLowerCase().includes(`document verification`)?`l2`:null},Pe=e=>{if(!e||typeof e!=`object`)return null;if(`code`in e&&typeof e.code==`string`)return e.code;if(`error`in e){let t=e.error;if(t&&typeof t==`object`&&`code`in t&&typeof t.code==`string`)return t.code}return null},Fe=e=>{if(!e)return``;let t=[];if(e instanceof Error?t.push(e.name,e.message):t.push(String(e)),typeof e==`object`&&(`code`in e&&t.push(String(e.code)),`type`in e&&t.push(String(e.type)),`error`in e)){let n=e.error;typeof n==`object`&&n&&`message`in n&&t.push(String(n.message)),typeof n==`object`&&n&&`code`in n&&t.push(String(n.code))}return t.join(` `)},R=(e,t)=>{let n=e.find((e=>e.id===t));if(!n?.card)return null;let r=n.card.brand?`${n.card.brand.charAt(0).toUpperCase()}${n.card.brand.slice(1)}`:`Card`;return n.card.last4?`${r} •••• ${n.card.last4}`:r},z=e=>{let t=e instanceof Error?e:Error(String(e));console.error(`[FiatOnramp:Stripe]`,t),h({state:{status:`provider-error`},error:t,isLoading:!1})},B=async({paymentToken:e,loader:t})=>{let n=A();try{let r,i,{opts:a,amount:o}=m(),{config:s,cryptoCustomerId:c}=n.context;if(!c)throw Error(`Missing cryptoCustomerId`);t===`inline`?h({stripeSession:{...n,context:{...n.context,paymentToken:e}},isLoading:!0}):t===`screen`&&h({stripeSession:{...n,context:{...n.context,paymentToken:e}},state:{status:`stripe-flow`,step:`checkout`},isLoading:!1});let l={crypto_customer_id:c,payment_token:e,source_amount:o||`0`,source_currency:a.source.selectedAsset.toUpperCase(),destination_currency:a.destination.asset.toUpperCase(),destination_network:s.network,wallet_address:a.destination.address};try{let e=await I(n.privy,{sessionId:s.sessionId,environment:s.environment,session:l});r=e.id,i=e.transaction_details}catch(e){let t=Ne(e);if(!t)throw e;if(!j())return;let a=await k(n.privy,{environment:s.environment});if(!j())return;let o=a.status===`active`?a.provided_fields:[];if(t!==`l2`){let e=A(),n=L(t,o);if(!n)throw Error(`Unexpected: all fields already provided for KYC tier '${t}'`);h({stripeSession:{...e,context:{...e.context,kycTier:t,kycProvidedFields:o}},state:{status:`stripe-flow`,step:n},isLoading:!1});return}if(h({state:{status:`stripe-flow`,step:`kyc`},isLoading:!1}),await n.onramp.verifyDocuments(),!j())return;let c=await I(n.privy,{sessionId:s.sessionId,environment:s.environment,session:l});r=c.id,i=c.transaction_details}if(!j())return;let u=A().context.paymentMethodLabel??null;if(!u)try{u=R(await P(n.privy,{environment:s.environment}),e)}catch{}let d={...Oe(i),paymentMethodLabel:u},f=A();h({stripeSession:{...f,context:{...f.context,stripeSessionId:r,checkoutDetails:d}},stripeConfirmCheckoutDetails:d,state:{status:`stripe-flow`,step:`confirm-checkout`},isLoading:!1})}catch(e){z(e)}},V=async e=>{let t=A();try{let{opts:n}=m(),r=t.context.config.network,i=await(async(e,{environment:t})=>(await e.fetchPrivyRoute(pe,{query:{environment:t}})).data)(t.privy,{environment:t.context.config.environment});if(!j())return;if(!i.some((e=>e.wallet_address===n.destination.address&&e.network===r))){try{await t.onramp.registerWalletAddress(n.destination.address,F(r))}catch(e){console.warn(`[FiatOnramp:Stripe] registerWalletAddress failed:`,e)}if(!j())return}if(!e?.skipTokenCheck){let e=[];try{e=await P(t.privy,{environment:t.context.config.environment})}catch{}if(!j())return;if(e.length>0){let t=new Set,n=e.filter((e=>{let n=`${e.type}:${e.card?.brand??``}:${e.card?.last4??``}`;return!t.has(n)&&(t.add(n),!0)})),r=A();h({stripeSession:{...r,context:{...r.context,savedPaymentTokens:n}},state:{status:`stripe-flow`,step:`select-payment`},isLoading:!1});return}}h({stripeElement:null,state:{status:`stripe-flow`,step:`payment`},isLoading:!1});let a=await N(t.onramp.collectPaymentMethod({payment_method_types:[`card`,`us_bank_account`],wallets:{applePay:`auto`,googlePay:`auto`}},(e=>{if(j()){if(!e.cryptoPaymentToken)return void z(Error(`Payment method selection was cancelled`));B({paymentToken:e.cryptoPaymentToken,loader:`screen`})}})),3e4,M());j()&&a&&h({stripeElement:a})}catch(e){z(e)}},Ie=async()=>{let e,t=u();if(!t)return;let n=t.provider;if(n===`stripe`||n===`stripe-sandbox`){h({isLoading:!0});let{opts:e,amount:r,getProviderUrl:i,email:a,phone:o}=m();try{let c=Le(await i({source:{asset:e.source.selectedAsset.toUpperCase(),amount:r||`0`},destination:{asset:e.destination.asset.toUpperCase(),chain:e.destination.chain,address:e.destination.address},provider:t.provider,sub_provider:t.sub_provider??void 0,payment_method:t.payment_method})),l=n===`stripe`?`production`:`sandbox`;await(async(e,t)=>{let n;O();try{({loadCryptoOnrampAndInitialize:n}=await s(()=>import(`./react-auth-BioEkVit.js`),[]))}catch{throw Error(`@stripe/crypto is required for Stripe onramp but could not be loaded. Ensure the package is installed.`)}let{controller:r}=m();r.current=new AbortController;let i=await N(Promise.resolve(n(t.publishableKey,{theme:`stripe`})),15e3,r.current.signal);if(!i)throw Error(`Stripe crypto SDK unavailable`);let a=crypto.randomUUID();h({stripeSession:{id:a,onramp:i,privy:e,context:{sessionId:a,config:t}}})})(m().privy,{publishableKey:c.publishable_key,network:c.network,sessionId:c.session_id,userEmail:a??``,userPhone:o,environment:l});let u=A();if(!u)return;let d=await k(u.privy,{environment:l});if(!j())return;if(d.status===`active`){let e=A();h({stripeSession:{...e,context:{...e.context,cryptoCustomerId:d.crypto_customer_id}}}),await V()}else h({state:{status:`stripe-flow`,step:`choose-email`},isLoading:!1})}catch(e){console.error(`[FiatOnramp:Stripe] Init failed:`,e),h({state:{status:`provider-error`},isLoading:!1,error:Error(`Something went wrong setting up checkout. Please try again.`)})}return}let r=p();if(!r)return void h({state:{status:`provider-error`},error:Error(`Unable to open payment window`)});h({isLoading:!0});let{opts:i,amount:a,getProviderUrl:o,getStatus:c,controller:d}=m(),f=()=>{try{r.closed||r.close()}catch{}};d.current=new AbortController;try{let n=await o({source:{asset:i.source.selectedAsset.toUpperCase(),amount:a||`0`},destination:{asset:i.destination.asset.toUpperCase(),chain:i.destination.chain,address:i.destination.address},provider:t.provider,sub_provider:t.sub_provider??void 0,payment_method:t.payment_method,redirect_url:window.location.origin});if(n.type!==`url`)throw Error(`Expected URL response for popup-based provider`);r.location.href=n.url,e=n.session_id}catch{f(),h({state:{status:`provider-error`},isLoading:!1,error:Error(`Unable to start payment session`)});return}h({isLoading:!1}),h({state:{status:`provider-confirming`}});let g=await l({operation:()=>c({session_id:e,provider:t.provider}),until:e=>e.status===`completed`||e.status===`failed`||e.status===`cancelled`,delay:0,interval:2e3,attempts:60,signal:d.current.signal});if(g.status!==`aborted`){if(g.status===`max_attempts`)return f(),g.error?(console.error(g.error),void h({state:{status:`select-amount`},isLoading:!1,error:Error(`Unable to check payment status. Please try again.`)})):void h({state:{status:`provider-error`},error:Error(`Could not confirm payment status yet.`)});g.result?.status===`completed`?(f(),h({state:{status:`provider-success`}})):(f(),h({state:{status:`provider-error`},error:Error(`Transaction ${g.result?.status??`failed`}`)}))}},Le=e=>{if(e&&typeof e==`object`&&`publishable_key`in e&&`network`in e&&`session_id`in e)return e;throw Error(`Unexpected response shape from provider_session_url for Stripe`)},Re=()=>{let e=ee();e&&e.length>0&&h({state:{status:`select-payment-method`,quotes:e}})},ze=()=>{h({state:{status:`select-source-asset`}})},Be=()=>{h({error:null,state:{status:`select-amount`}})},Ve=e=>{h({localSelectedQuote:e,state:{status:`select-amount`}})},He=e=>{let{opts:t,amount:n}=m(),r={...t,source:{...t.source,selectedAsset:e}};h({opts:r,state:{status:`select-amount`}}),Ce(n,r)},Ue=({element:e})=>{let t=(0,D.useRef)(null);return(0,D.useEffect)((()=>(t.current&&e&&t.current.replaceChildren(e),()=>{t.current&&t.current.replaceChildren()})),[e]),(0,E.jsx)(`div`,{ref:t,style:{minHeight:480}})},We=async(e,t)=>(await e.fetchPrivyRoute(_e,{params:{session_id:t}})).client_secret,Ge=async(e,t)=>{let n=await e.fetchPrivyRoute(ge,{params:{session_id:t}});return{quoteExpiresAt:n.quote_expiration,sourceTotalAmount:n.source_total_amount,fee:n.fee,destinationAmount:n.destination_amount}},Ke=e=>!e||typeof e!=`object`?null:e.transaction_details?.last_error??null,H=e=>{j()&&h({state:{status:`stripe-flow`,step:e}})},qe=new Set([`transaction_limit_reached`,`location_not_supported`,`transaction_failed`]),Je=async()=>{let e=A();try{let{stripeSessionId:t}=e.context;if(!t)throw Error(`Missing stripeSessionId`);h({isLoading:!0});for(let n=0;n<3;n++){if(!j())return;let n=null,r=await N(e.onramp.performCheckout(t,(async t=>{try{return await We(e.privy,t)}catch(e){return n=e,``}})),6e4,M());if(n)throw n;if(r.successful){if(!j())return;h({state:{status:`provider-success`},isLoading:!1});return}let i=Ke(r);if(!i||qe.has(i))throw Error(`Checkout failed: ${i??`unknown error`}`);if(!j())return;if(i===`charged_with_expired_quote`)await Ge(e.privy,t);else if(i===`quote_rate_drifted`){let{opts:n,amount:r}=m(),{config:i,cryptoCustomerId:a,paymentToken:o}=e.context;if(!a||!o)throw Error(`Cannot recreate session: missing customer or payment token`);t=(await I(e.privy,{sessionId:i.sessionId,environment:i.environment,session:{crypto_customer_id:a,payment_token:o,source_amount:r||`0`,source_currency:n.source.selectedAsset.toUpperCase(),destination_currency:n.destination.asset.toUpperCase(),destination_network:i.network,wallet_address:n.destination.address}})).id;let s=A();h({stripeSession:{...s,context:{...s.context,stripeSessionId:t}}})}else{if(i===`missing_kyc`){let t=await k(e.privy,{environment:e.context.config.environment});if(!j())return;let n=t.status===`active`?t.provided_fields:[],r=L(`l0`,n);if(!r)throw Error(`Checkout failed: missing_kyc but all fields already provided`);let i=A();h({stripeSession:{...i,context:{...i.context,kycTier:`l0`,kycProvidedFields:n}},state:{status:`stripe-flow`,step:r}});return}if(i===`missing_document_verification`)H(`kyc`),await e.onramp.verifyDocuments();else{if(i!==`missing_consumer_wallet`)throw Error(`Checkout failed: ${i}`);{let{opts:t}=m();await e.onramp.registerWalletAddress(t.destination.address,F(e.context.config.network))}}}}throw Error(`Checkout failed after maximum retry attempts`)}catch(e){z(e)}},Ye=async(e,{email:t,environment:n})=>(await e.fetchPrivyRoute(ue,{body:{email:t,environment:n}})).data,Xe=async(e,t)=>{let n=A();try{if(await(async(e,{authIntentId:t,cryptoCustomerId:n,environment:r})=>{await e.fetchPrivyRoute(de,{body:{auth_intent_id:t,crypto_customer_id:n,environment:r}})})(n.privy,{authIntentId:t,cryptoCustomerId:e,environment:n.context.config.environment}),!j())return;(e=>{let t=A();h({stripeSession:{...t,context:{...t.context,...e}}})})({cryptoCustomerId:e});let r=await k(n.privy,{environment:n.context.config.environment});if(!j())return;if(r.status!==`active`)throw Error(`Session unexpectedly inactive after authentication`);r.verifications.some((e=>e.status===`verified`))?await V():H(`collect-name`)}catch(e){z(e)}},Ze=async e=>{let t=A();try{h({isLoading:!0});let n=await Ye(t.privy,{email:e,environment:t.context.config.environment});if(!j())return;if(h({isLoading:!1}),n.status===`no_account`)h({stripeSession:{...t,context:{...t.context,pendingEmail:e}},state:{status:`stripe-flow`,step:`create-link-account`},email:e});else{h({stripeSession:{...t,context:{...t.context,authIntentId:n.id,pendingEmail:e}},state:{status:`stripe-flow`,step:`authenticating`},email:e});let r=await N(t.onramp.authenticate(n.id,(e=>{j()&&(e.result===`success`&&e.crypto_customer_id?Xe(e.crypto_customer_id,n.id):z(Error(`Link authentication ${e.result}`)))})),3e4,M());j()&&r&&h({stripeElement:r})}}catch(e){z(e)}},U=async()=>{let e=A();try{let{kycName:t,kycDob:n,kycSsn:r,kycAddress:i,kycTier:a,config:o}=e.context,s={...t?{given_name:t.firstName,surname:t.lastName}:{},...n?{date_of_birth:{day:n.day,month:n.month,year:n.year}}:{},...r?{id_number:{type:`us_ssn`,value:r}}:{},...i?{address:{line1:i.addressLine1,city:i.city,state:i.state,postal_code:i.postalCode,country:i.country}}:{}};if(H(`kyc`),await e.onramp.submitKycInfo(s),r){let e=A();h({stripeSession:{...e,context:{...e.context,kycSsn:void 0}}})}if(!j())return;let c=a??`l0`,u=await l({operation:()=>k(e.privy,{environment:o.environment}),until:e=>{if(e.status!==`active`)return!1;if(e.kyc_tiers?.length){let t=e.kyc_tiers.find((e=>e.tier===c));if(t)return t.verification_status===`verified`}return e.verifications.some((e=>e.status===`verified`))},delay:0,interval:2e3,attempts:30,signal:M()});if(!j()||u.status===`aborted`)return;if(u.status===`max_attempts`)throw Error(`KYC verification timed out`);if(a===`l2`&&(H(`kyc`),await e.onramp.verifyDocuments(),!j()))return;await V()}catch(e){z(e)}},Qe=async e=>{let t=A(),n=t.context;h({stripeSession:{...t,context:{...n,kycAddress:e,kycProvidedFields:[...n.kycProvidedFields??[],`address_line_1`,`address_city`,`address_state`,`address_postal_code`]}}}),await U()},$e=({day:e,month:t,year:n})=>{let r=A(),i=r.context,a=i.kycTier??`l1`,o=[...i.kycProvidedFields??[],`dob`],s=L(a,o);h({stripeSession:{...r,context:{...i,kycDob:{day:e,month:t,year:n},kycProvidedFields:o}},...s?{state:{status:`stripe-flow`,step:s}}:{}}),s||U()},et=({firstName:e,lastName:t})=>{let n=A(),r=n.context,i=r.kycTier??`l0`,a=[...r.kycProvidedFields??[],`first_name`,`last_name`],o=L(i,a);h({stripeSession:{...n,context:{...r,kycName:{firstName:e,lastName:t},kycProvidedFields:a}},...o?{state:{status:`stripe-flow`,step:o}}:{}}),o||U()},tt=e=>{let t=A(),n=t.context,r=n.kycTier??`l1`,i=[...n.kycProvidedFields??[],`id_number`],a=L(r,i);h({stripeSession:{...t,context:{...n,kycSsn:e,kycProvidedFields:i}},...a?{state:{status:`stripe-flow`,step:a}}:{}}),a||U()},W=async e=>{let t=A();try{let n=t.context.pendingEmail;if(!n)throw Error(`No email in session context`);if(e===`create`){let e=t.context.config.userPhone;if(!e)return void H(`collect-contact`);let r=await t.onramp.registerLinkUser(n,e,`US`);if(!j())return;if(!r.created)throw Error(`Failed to register Stripe Link account`)}let r=await Ye(t.privy,{email:n,environment:t.context.config.environment});if(!j())return;if(r.status!==`created`)throw Error(`Failed to create Link auth intent after registration`);h({stripeSession:{...t,context:{...t.context,authIntentId:r.id}},state:{status:`stripe-flow`,step:`authenticating`}});let i=await N(t.onramp.authenticate(r.id,(e=>{j()&&(e.result===`success`&&e.crypto_customer_id?Xe(e.crypto_customer_id,r.id):z(Error(`Link authentication ${e.result}`)))})),3e4,M());j()&&i&&h({stripeElement:i})}catch(e){z(e)}},nt=e=>{let t=A(),n=R([e],e.id);h({stripeSession:{...t,context:{...t.context,paymentToken:e.id,paymentMethodLabel:n}}}),B({paymentToken:e.id,loader:`inline`})},rt=async e=>{let t=A();try{let n=t.context.pendingEmail;if(!n)throw Error(`No email in session context`);let r=await t.onramp.registerLinkUser(n,e,`US`);if(!j())return;if(!r.created)throw Error(`Failed to register Stripe Link account`);await W(`connect`)}catch(e){z(e)}},it=async()=>{try{if(!j())return;let e=A(),t=e.context.stripeSessionId;if(!t)return;let n=await Ge(e.privy,t);if(!j())return;let r=e.context.checkoutDetails;if(r){let e=r.currencySymbol;h({stripeConfirmCheckoutDetails:{...r,quoteExpiresAt:n.quoteExpiresAt,sourceAmount:n.sourceTotalAmount??r.sourceAmount,destinationAmount:n.destinationAmount??r.destinationAmount,fee:n.fee&&e?`${e}${n.fee}`:r.fee}})}}catch(e){z(e)}},G=({height:e=24,...t})=>(0,E.jsxs)(`svg`,{height:e,viewBox:`120 0 72 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...t,children:[(0,E.jsx)(`path`,{d:`M132.258 24C138.856 24 144.205 18.6274 144.205 12C144.205 5.37257 138.856 0 132.258 0C125.66 0 120.312 5.37257 120.312 12C120.312 18.6274 125.66 24 132.258 24Z`,fill:`#00D66F`}),(0,E.jsx)(`path`,{d:`M156.317 3.81824C156.317 2.69024 157.263 1.77344 158.377 1.77344C159.49 1.77344 160.436 2.69504 160.436 3.81824C160.436 4.94144 159.524 5.88704 158.377 5.88704C157.23 5.88704 156.317 4.97024 156.317 3.81824Z`,fill:`#011E0F`}),(0,E.jsx)(`path`,{d:`M150.205 2.06143H153.789V22.2214H150.205V2.06143Z`,fill:`#011E0F`}),(0,E.jsx)(`path`,{d:`M160.188 7.82143H156.575V22.2214H160.188V7.82143Z`,fill:`#011E0F`}),(0,E.jsx)(`path`,{d:`M186.16 14.5319C188.879 12.8519 190.728 10.3511 191.459 7.81665H187.847C186.905 10.2359 184.745 12.0551 182.37 12.8279V2.05665H178.758V22.2167H182.37V16.2214C185.128 16.9126 187.307 19.3079 188.052 22.2167H191.689C191.134 19.1639 189.056 16.3079 186.16 14.5319Z`,fill:`#011E0F`}),(0,E.jsx)(`path`,{d:`M166.591 9.43425C167.537 8.17185 169.382 7.43744 170.878 7.43744C173.668 7.43744 175.976 9.48705 175.981 12.5831V22.2167H172.369V13.3846C172.369 12.1126 171.805 10.6438 169.974 10.6438C167.824 10.6438 166.586 12.5591 166.586 14.8007V22.2262H162.974V7.83104H166.591V9.43425Z`,fill:`#011E0F`}),(0,E.jsx)(`path`,{d:`M131.61 4.7998H127.958C128.668 7.80941 130.743 10.3822 133.339 11.9998C130.738 13.6174 128.668 16.1902 127.958 19.1998H131.61C132.515 16.4158 135.021 13.9966 138.1 13.5022V10.4926C135.016 10.003 132.51 7.58381 131.61 4.7998Z`,fill:`#011E0F`})]}),K=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,q=i.input`
  && {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--privy-color-foreground);
    background: var(--privy-color-background);
    border: 1px solid
      ${e=>e.$hasError?`var(--privy-color-error, #dc3545)`:`var(--privy-color-foreground-4)`};
    border-radius: var(--privy-border-radius-md, 0.5rem);
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.15s ease;

    &:focus {
      border-color: var(--privy-color-accent);
      box-shadow: 0 0 0 1px var(--privy-color-accent-light);
    }

    &::placeholder {
      color: var(--privy-color-foreground-3);
    }

    @media (min-width: 441px) {
      font-size: 0.875rem;
    }
  }
`,J=i.p`
  color: var(--privy-color-error, #dc3545);
  font-size: 0.8125rem;
  margin: 0.375rem 0 0;
`,at=i.select`
  && {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--privy-color-foreground);
    background: var(--privy-color-background);
    border: 1px solid
      ${e=>e.$hasError?`var(--privy-color-error, #dc3545)`:`var(--privy-color-foreground-4)`};
    border-radius: var(--privy-border-radius-md, 0.5rem);
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.15s ease;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    padding-right: 2rem;

    &:focus {
      border-color: var(--privy-color-accent);
      box-shadow: 0 0 0 1px var(--privy-color-accent-light);
    }

    @media (min-width: 441px) {
      font-size: 0.875rem;
    }
  }
`,ot=i.div`
  display: flex;
  gap: 0.5rem;
`;i.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background: var(--privy-color-background-2, #f9f9f9);
  border-radius: var(--privy-border-radius-md, 0.5rem);
`,i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,i.span`
  font-size: 0.875rem;
  color: var(--privy-color-foreground-3);
`,i.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--privy-color-foreground);
`;var st=i.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1rem 0.75rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: 0.75rem;
`,ct=i.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,lt=i.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`,ut=i.img`
  width: 2rem;
  height: 2rem;
  border-radius: 100px;
`,dt=i.img`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 100px;
  border: 1.5px solid white;
`,ft=i.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`,pt=i.span`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: var(--privy-color-foreground-3);
`,mt=i.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`,ht=i.div`
  display: flex;
  flex-direction: column;
`,Y=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0;
  border-bottom: 1px solid var(--privy-color-foreground-4);
  font-size: 0.75rem;
  line-height: 1.125rem;

  &:last-child {
    border-bottom: none;
  }
`,X=i.span`
  color: var(--privy-color-foreground);
  font-weight: 400;
`,Z=i.span`
  color: var(--privy-color-foreground);
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
`,gt=i.div`
  display: inline-flex;
  align-items: center;
  align-self: center;
  padding: 0.75rem 1rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: 999px;
  color: var(--privy-color-foreground);
  background: var(--privy-color-background);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,_t=({onClose:e,onEmailChosen:t,onEmailBack:n,userEmail:r})=>{let[i,a]=(0,D.useState)(r??``),[o,s]=(0,D.useState)(null),[c,l]=(0,D.useState)(!1),u=async()=>{let e=i.trim();if(e)if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){l(!0);try{await t?.(e)}catch{l(!1)}}else s(`Enter a valid email address`);else s(`Email is required`)};return(0,E.jsx)(S,{showClose:!0,onClose:e,showBack:!!n,onBack:n??void 0,icon:(0,E.jsx)(G,{height:24}),iconVariant:`logo`,title:`Add email`,subtitle:`Enter your email address to continue with\xA0Link.`,primaryCta:{label:`Submit`,onClick:u,loading:c},watermark:!0,children:(0,E.jsxs)(K,{children:[(0,E.jsx)(q,{type:`email`,placeholder:`email@example.com`,value:i,onChange:e=>{a(e.target.value),s(null)},onKeyDown:e=>e.key===`Enter`&&u(),$hasError:!!o,autoFocus:!0}),o&&(0,E.jsx)(J,{children:o})]})})},vt=`AL.AK.AZ.AR.CA.CO.CT.DE.FL.GA.HI.ID.IL.IN.IA.KS.KY.LA.ME.MD.MA.MI.MN.MS.MO.MT.NE.NV.NH.NJ.NM.NY.NC.ND.OH.OK.OR.PA.RI.SC.SD.TN.TX.UT.VT.VA.WA.WV.WI.WY.DC`.split(`.`),yt=({onClose:e,onAddressSubmitted:t,onBack:n})=>{let[r,i]=(0,D.useState)(``),[a,o]=(0,D.useState)(``),[s,c]=(0,D.useState)(``),[l,u]=(0,D.useState)(``),[d,f]=(0,D.useState)(null),[p,m]=(0,D.useState)(!1),h=()=>{r.trim()&&a.trim()&&s.trim()&&l.trim()?(m(!0),t?.({addressLine1:r.trim(),city:a.trim(),state:s.trim(),postalCode:l.trim(),country:`US`})):f(`Complete address is required`)};return(0,E.jsx)(S,{showClose:!0,onClose:e,showBack:!!n,onBack:n??void 0,icon:be,title:`Add address`,subtitle:`Enter your residential address as it appears on your government-issued ID.`,primaryCta:{label:`Continue`,onClick:h,loading:p},watermark:!0,children:(0,E.jsxs)(K,{children:[(0,E.jsx)(q,{placeholder:`Street address`,value:r,onChange:e=>{i(e.target.value),f(null)},onKeyDown:e=>e.key===`Enter`&&h(),$hasError:!!d&&!r.trim(),autoFocus:!0}),(0,E.jsxs)(ot,{children:[(0,E.jsx)(q,{placeholder:`City`,value:a,onChange:e=>{o(e.target.value),f(null)},$hasError:!!d&&!a.trim()}),(0,E.jsxs)(at,{value:s,onChange:e=>{c(e.target.value),f(null)},$hasError:!!d&&!s,style:{maxWidth:`5.5rem`},children:[(0,E.jsx)(`option`,{value:``,disabled:!0,children:`State`}),vt.map((e=>(0,E.jsx)(`option`,{value:e,children:e},e)))]}),(0,E.jsx)(q,{placeholder:`ZIP`,value:l,onChange:e=>{u(e.target.value),f(null)},onKeyDown:e=>e.key===`Enter`&&h(),$hasError:!!d&&!l.trim(),style:{maxWidth:`6.25rem`}})]}),d&&(0,E.jsx)(J,{children:d})]})})},bt=({onClose:e,onDobSubmitted:t})=>{let[n,r]=(0,D.useState)(``),[i,a]=(0,D.useState)(``),[o,s]=(0,D.useState)(``),[c,l]=(0,D.useState)(null),u=()=>{let e=Number.parseInt(n,10),r=Number.parseInt(i,10),a=Number.parseInt(o,10);!e||!r||!a||e<1||e>12||r<1||r>31||a<1900||a>new Date().getFullYear()?l(`Enter a valid date of birth`):t?.({day:r,month:e,year:a})};return(0,E.jsx)(S,{showClose:!0,onClose:e,icon:ve,title:`Add date of birth`,subtitle:`You must be at least 18 years old.`,primaryCta:{label:`Continue`,onClick:u},watermark:!0,children:(0,E.jsxs)(K,{children:[(0,E.jsxs)(ot,{children:[(0,E.jsx)(q,{placeholder:`MM`,value:n,onChange:e=>{r(e.target.value),l(null)},$hasError:!!c,style:{flex:1},inputMode:`numeric`,autoFocus:!0}),(0,E.jsx)(q,{placeholder:`DD`,value:i,onChange:e=>{a(e.target.value),l(null)},$hasError:!!c,style:{flex:1},inputMode:`numeric`}),(0,E.jsx)(q,{placeholder:`YYYY`,value:o,onChange:e=>{s(e.target.value),l(null)},onKeyDown:e=>e.key===`Enter`&&u(),$hasError:!!c,style:{flex:2},inputMode:`numeric`})]}),c&&(0,E.jsx)(J,{children:c})]})})},xt=({onClose:e,onNameSubmitted:t,isSandbox:n})=>{let[r,i]=(0,D.useState)(``),[a,o]=(0,D.useState)(n?`Verified`:``),[s,c]=(0,D.useState)(null),l=()=>{r.trim()&&a.trim()?t?.({firstName:r.trim(),lastName:a.trim()}):c(`First and last name are required`)};return(0,E.jsx)(S,{showClose:!0,onClose:e,icon:Se,title:`Add name`,subtitle:`Please enter your full legal name as it appears on your government-issued ID.`,primaryCta:{label:`Continue`,onClick:l},watermark:!0,children:(0,E.jsxs)(K,{children:[(0,E.jsx)(q,{placeholder:`First name`,value:r,onChange:e=>{i(e.target.value),c(null)},onKeyDown:e=>e.key===`Enter`&&l(),$hasError:!!s&&!r.trim(),autoFocus:!0}),(0,E.jsx)(q,{placeholder:`Last name`,value:a,onChange:e=>{o(e.target.value),c(null)},onKeyDown:e=>e.key===`Enter`&&l(),$hasError:!!s&&!a.trim(),readOnly:n}),s&&(0,E.jsx)(J,{children:s})]})})},St=e=>e.replace(/[\s()-]/g,``),Ct=({onClose:e,onPhoneSubmitted:t,onPhoneBack:n})=>{let r=(0,D.useRef)(null),[i,a]=(0,D.useState)(!1),[o,s]=(0,D.useState)(!1);return(0,E.jsx)(S,{showClose:!0,onClose:e,showBack:!!n,onBack:n??void 0,icon:(0,E.jsx)(G,{height:24}),iconVariant:`logo`,title:`Add phone number`,subtitle:`Enter your phone number to continue with Link.`,primaryCta:{label:`Submit`,onClick:()=>{r.current?.isValid&&(s(!0),t?.(St(r.current.qualifiedPhoneNumber)))},disabled:!i,loading:o},watermark:!0,children:(0,E.jsx)(c,{stacked:!0,noIncludeSubmitButton:!0,hideRecent:!0,onChange:e=>{r.current=e,a(e.isValid)},onSubmit:async e=>{s(!0),t?.(St(e.qualifiedPhoneNumber))}})})},wt=({onClose:e,onSsnSubmitted:t,appName:n})=>{let[r,i]=(0,D.useState)(``),[a,o]=(0,D.useState)(null),s=()=>{let e=r.replace(/\D/g,``);e.length===9?t?.(e):o(`Enter your full 9-digit SSN`)};return(0,E.jsx)(S,{showClose:!0,onClose:e,icon:te,title:`Add social security number`,subtitle:`Required to verify your identity. ${n} will not store your SSN.`,primaryCta:{label:`Continue`,onClick:s},watermark:!0,children:(0,E.jsxs)(K,{children:[(0,E.jsx)(q,{placeholder:`XXX-XX-XXXX`,value:r,onChange:e=>{i(e.target.value),o(null)},onKeyDown:e=>e.key===`Enter`&&s(),$hasError:!!a,type:`password`,inputMode:`numeric`,autoComplete:`off`,autoFocus:!0}),a&&(0,E.jsx)(J,{children:a})]})})},Tt=({onClose:e,amount:t,appName:n,currencySymbol:r,paymentMethodLabel:i,fee:a,destinationAmount:s,destinationToken:c,destinationNetwork:l,tokenIconUrl:u,networkIconUrl:d,opts:f,onConfirmCheckout:p,quoteExpiresAt:m,onRefreshQuote:h,initialLoading:g=!1})=>{let[ee,_]=(0,D.useState)(g),[v,y]=(0,D.useState)(!1),b=(0,D.useRef)(null);(0,D.useEffect)((()=>{if(!m||!h)return;let e=Math.max(m-Date.now()-5e3,0);return b.current=setTimeout((()=>{y(!0),h().finally((()=>y(!1)))}),e),()=>{b.current&&clearTimeout(b.current)}}),[m,h]);let x=f?.destination.address??``,te=o(x,4,4);return(0,E.jsx)(S,{showClose:!0,onClose:e,title:`Approve transaction`,subtitle:`${n} wants your permission for this transaction.`,primaryCta:{label:`Approve`,onClick:()=>{b.current&&clearTimeout(b.current),_(!0),p?.()},loading:ee,disabled:v},watermark:!0,children:(0,E.jsxs)(st,{children:[u||d?(0,E.jsxs)(ct,{children:[(0,E.jsxs)(lt,{children:[u&&(0,E.jsx)(ut,{src:u,alt:c}),d&&(0,E.jsx)(dt,{src:d,alt:l})]}),(0,E.jsxs)(ft,{children:[(0,E.jsx)(pt,{children:`You receive`}),(0,E.jsxs)(mt,{children:[s,` `,c,` on `,l]})]})]}):(0,E.jsxs)(ft,{children:[(0,E.jsx)(pt,{children:`You receive`}),(0,E.jsxs)(mt,{children:[s,` `,c,` on `,l]})]}),(0,E.jsxs)(ht,{children:[(0,E.jsxs)(Y,{children:[(0,E.jsx)(X,{children:`Total amount`}),(0,E.jsxs)(Z,{children:[r,t]})]}),i&&(0,E.jsxs)(Y,{children:[(0,E.jsx)(X,{children:`From`}),(0,E.jsx)(Z,{children:i})]}),(0,E.jsxs)(Y,{children:[(0,E.jsx)(X,{children:`To`}),(0,E.jsx)(ie,{iconOnly:!0,value:x,iconSize:16,children:te})]}),(0,E.jsxs)(Y,{children:[(0,E.jsx)(X,{children:`Estimated fee`}),(0,E.jsx)(Z,{children:a})]}),(0,E.jsxs)(Y,{children:[(0,E.jsx)(X,{children:`Processing time`}),(0,E.jsx)(Z,{children:`Instant`})]})]})]})})},Q=({size:e=64,...t})=>(0,E.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 64 64`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...t,children:[(0,E.jsx)(`path`,{d:`M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z`,fill:`#00D66F`}),(0,E.jsx)(`path`,{d:`M30.5274 12.8003H20.6587C22.5787 20.8259 28.1851 27.6867 35.1995 32.0003C28.1723 36.3139 22.5787 43.1747 20.6587 51.2003H30.5274C32.9722 43.7763 39.7435 37.3251 48.0634 36.0067V27.9811C39.7307 26.6755 32.9594 20.2243 30.5274 12.8003Z`,fill:`#011E0F`})]}),Et=({mode:e,onClose:t,onLinkAccountConfirmed:n,onLinkAccountBack:i,userEmail:a})=>{let o=r()?.name??`This app`,s=e===`connect`?{title:`Connect to Link`,subtitle:`${o} uses Link for quicker and easier checkout.`,description:`${o} will be able to view your Link account details, identity information, and saved payments.`,cta:`Continue`}:{title:`Create a Link account`,subtitle:`With Link, you can securely save your information for faster checkout.`,description:null,cta:`Continue`};return(0,E.jsx)(S,{showClose:!0,onClose:t,showBack:!!i,onBack:i??void 0,icon:(0,E.jsx)(Q,{size:64}),iconVariant:`logo`,title:s.title,subtitle:s.subtitle,primaryCta:{label:s.cta,onClick:()=>n?.()},helpText:s.description??void 0,watermark:!0,children:e===`create`&&a&&(0,E.jsx)(gt,{children:a})})},Dt=({onClose:e,tokens:t,onSelectToken:n,onAddNew:r,isLoading:i})=>{let[a,o]=(0,D.useState)(t[0]?.id??null);return(0,E.jsx)(S,{showClose:!0,onClose:e,icon:(0,E.jsx)(G,{height:24}),iconVariant:`logo`,title:`Select payment method`,subtitle:`Choose from your saved cards. Debit cards typically have higher success rates than credit cards.`,primaryCta:{label:`Continue`,onClick:()=>{let e=t.find((e=>e.id===a));e&&n(e)},loading:i,disabled:!a},watermark:!0,children:(0,E.jsx)(kt,{children:(0,E.jsxs)(At,{children:[t.map((e=>(0,E.jsxs)(jt,{$selected:a===e.id,onClick:()=>o(e.id),disabled:i,children:[(0,E.jsx)(Mt,{children:(0,E.jsx)(w,{size:16})}),(0,E.jsxs)(Nt,{children:[(0,E.jsx)(Pt,{children:Ot(e.card?.brand,e.card?.funding)}),(0,E.jsxs)(Ft,{children:[(0,E.jsx)(It,{children:`••••`}),` `,e.card?.last4??``]})]})]},e.id))),(0,E.jsxs)(Lt,{onClick:r,disabled:i,children:[(0,E.jsx)(xe,{size:14}),(0,E.jsx)(`span`,{children:`Add new card`})]})]})})})},Ot=(e,t)=>{if(!e)return`Card`;let n=e.charAt(0).toUpperCase()+e.slice(1);return t?`${n} ${t.charAt(0).toUpperCase()}${t.slice(1)}`:n},kt=i.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`,At=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,jt=i.button`
  && {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem;
    background: ${e=>e.$selected?`var(--privy-color-background-2, #f8f9ff)`:`transparent`};
    border: ${e=>e.$selected?`1.5px solid var(--privy-color-accent)`:`1px solid var(--privy-color-foreground-4)`};
    border-radius: var(--privy-border-radius-md, 0.5rem);
    cursor: pointer;
    transition: border-color 0.15s ease;
    box-shadow: ${e=>e.$selected?`0px 2px 6px rgba(50, 50, 93, 0.06), 0px 1px 1.5px rgba(0, 0, 0, 0.06)`:`none`};
    outline: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Mt=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1rem;
  flex-shrink: 0;
  color: var(--privy-color-foreground-3);
`,Nt=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
`,Pt=i.span`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: var(--privy-color-foreground);
  letter-spacing: -0.15px;
`,Ft=i.span`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,It=i.span`
  font-weight: 500;
`,Lt=i.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 1rem;
    background: none;
    border: none;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: var(--privy-color-accent);
    cursor: pointer;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Rt=[],zt=({step:e,element:t,onClose:n,isLoading:i})=>{let a=r()?.name??`This app`,o=g((e=>e?.email??null)),s=g((e=>e?.amount??``)),c=g((e=>e?.opts??null)),l=g((e=>e?.stripeConfirmCheckoutDetails??null)),u=g((e=>e?.destinationCurrencyIconUrl??null)),d=g((e=>e?.destinationNetworkIconUrl??null)),f=g((e=>e?.stripeSession?.context.savedPaymentTokens))??Rt,p=()=>{O(),h({state:{status:`select-amount`},isLoading:!1})};switch(e){case`choose-email`:return(0,E.jsx)(_t,{onClose:n,onEmailChosen:Ze,onEmailBack:p,userEmail:o});case`connect-link`:return(0,E.jsx)(Et,{mode:`connect`,onClose:n,onLinkAccountConfirmed:()=>{W(`connect`)},onLinkAccountBack:p,userEmail:o});case`create-link-account`:return(0,E.jsx)(Et,{mode:`create`,onClose:n,onLinkAccountConfirmed:()=>{W(`create`)},onLinkAccountBack:p,userEmail:o});case`collect-contact`:return(0,E.jsx)(Ct,{onClose:n,onPhoneSubmitted:rt,onPhoneBack:p});case`collect-name`:return(0,E.jsx)(xt,{onClose:n,onNameSubmitted:et,isSandbox:c?.environment!==`production`});case`collect-dob`:return(0,E.jsx)(bt,{onClose:n,onDobSubmitted:$e});case`collect-ssn`:return(0,E.jsx)(wt,{onClose:n,onSsnSubmitted:tt,appName:a});case`collect-address`:return(0,E.jsx)(yt,{onClose:n,onAddressSubmitted:Qe,onBack:p});case`authenticating`:return(0,E.jsx)(Ue,{element:t});case`kyc`:return(0,E.jsx)(S,{showClose:!0,onClose:n,iconVariant:`loading`,title:`Verifying identity`,subtitle:`This may take a moment...`,watermark:!0});case`select-payment`:return(0,E.jsx)(Dt,{onClose:n,tokens:f,onSelectToken:nt,onAddNew:()=>{V({skipTokenCheck:!0})},isLoading:i});case`payment`:return(0,E.jsx)(S,{showClose:!0,onClose:n,showBack:!0,onBack:p,headerTitle:`Add payment method`,watermark:!0,children:(0,E.jsx)(Ue,{element:t})});case`confirm-checkout`:return(0,E.jsx)(Tt,{onClose:n,amount:l?.sourceAmount??s,appName:a,currencySymbol:l?.currencySymbol??`$`,paymentMethodLabel:l?.paymentMethodLabel??null,fee:l?.fee??`Included`,destinationAmount:l?.destinationAmount??s,destinationToken:l?.destinationToken??c?.destination.asset?.toUpperCase()??``,destinationNetwork:l?.destinationNetwork??``,tokenIconUrl:u,networkIconUrl:d,opts:c,onConfirmCheckout:Je,quoteExpiresAt:l?.quoteExpiresAt??null,onRefreshQuote:it});case`checkout`:return(0,E.jsx)(S,{showClose:!0,onClose:n,iconVariant:`loading`,watermark:!0});case`collect-country`:case`collect-nationality`:case`collect-birth-location`:case`collect-identifiers`:case`eu-attestation`:case`verify-documents`:return(0,E.jsx)(S,{showClose:!0,onClose:n,iconVariant:`loading`,title:`Verifying identity`,watermark:!0});default:return null}},Bt=({onClose:e})=>(0,E.jsx)(S,{showClose:!0,onClose:e,iconVariant:`loading`,title:`Processing transaction`,subtitle:`Your purchase is in progress. You can leave this screen — we’ll notify you when it’s complete.`,primaryCta:{label:`Done`,onClick:e},watermark:!0}),Vt=({onClose:e,onRetry:t})=>(0,E.jsx)(S,{showClose:!0,onClose:e,icon:v,iconVariant:`error`,title:`Something went wrong`,subtitle:`We couldn't complete your transaction. Please try again.`,primaryCta:{label:`Try again`,onClick:t},secondaryCta:{label:`Close`,onClick:e},watermark:!0}),Ht=({onClose:e})=>(0,E.jsx)(S,{showClose:!0,onClose:e,icon:b,iconVariant:`success`,title:`Transaction confirmed`,subtitle:`Your purchase is processing. Funds should arrive in your wallet within a few minutes.`,primaryCta:{label:`Done`,onClick:e},watermark:!0}),Ut={CREDIT_DEBIT_CARD:`card`,APPLE_PAY:`Apple Pay`,GOOGLE_PAY:`Google Pay`,BANK:`bank deposit`,BANK_TRANSFER:`bank deposit`,SEPA:`bank deposit`,PIX:`PIX`,STRIPE_LINK:`Link`},Wt=e=>Ut[e]??e.replace(/_/g,` `).toLowerCase().replace(/^\w/,(e=>e.toUpperCase())),Gt={CREDIT_DEBIT_CARD:(0,E.jsx)(w,{size:14}),APPLE_PAY:(0,E.jsx)(ne,{size:14}),GOOGLE_PAY:(0,E.jsx)(ne,{size:14}),BANK:(0,E.jsx)(C,{size:14}),BANK_TRANSFER:(0,E.jsx)(C,{size:14}),SEPA:(0,E.jsx)(C,{size:14}),PIX:(0,E.jsx)(re,{size:14}),STRIPE_LINK:(0,E.jsx)(Q,{size:14})},Kt=e=>Gt[e]??(0,E.jsx)(w,{size:14}),qt=({opts:e,onClose:t,onEditSourceAsset:n,onEditPaymentMethod:r,onContinue:i,onAmountChange:a,amount:o,selectedQuote:s,quotesWarning:c,quotesErrors:l,quotesCount:u,isLoading:d})=>(0,E.jsxs)(S,{showClose:!0,onClose:t,headerTitle:`Buy ${e.destination.asset.toLocaleUpperCase()}`,primaryCta:{label:`Continue`,onClick:i,loading:d,disabled:!s},helpText:c?(0,E.jsxs)(Jt,{children:[(0,E.jsx)(y,{size:16,strokeWidth:2}),(0,E.jsx)(Xt,{children:(0,E.jsxs)(E.Fragment,c===`amount_too_low`?{children:[(0,E.jsx)(Zt,{children:`Amount too low`}),(0,E.jsx)($,{children:`Please choose a higher amount to continue.`})]}:{children:[(0,E.jsx)(Zt,{children:`Unable to get quotes`}),(0,E.jsx)($,{children:l?.[0]?.error??`Something went wrong. Please try again.`})]})})]}):s&&u>1?(0,E.jsxs)(Qt,{onClick:r,children:[Kt(s.payment_method_category??s.payment_method),(0,E.jsxs)(`span`,{children:[`Pay with`,` `,Wt(s.payment_method_category??s.payment_method)]}),(0,E.jsx)(ye,{size:14})]}):null,watermark:!0,children:[s?.warning&&(0,E.jsxs)(Yt,{children:[(0,E.jsx)(x,{size:16,strokeWidth:2}),(0,E.jsx)(Xt,{children:(0,E.jsx)($,{children:s.warning})})]}),(0,E.jsx)(se,{currency:e.source.selectedAsset,value:o,onChange:a,inputMode:`decimal`,autoFocus:!0}),(0,E.jsx)(ae,{selectedAsset:e.source.selectedAsset,onEditSourceAsset:n})]}),Jt=i.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: var(--privy-color-warn-bg, #fffbbb);
  border: 1px solid var(--privy-color-border-warning, #facd63);
  overflow: clip;
  width: 100%;

  svg {
    flex-shrink: 0;
    color: var(--privy-color-icon-warning, #facd63);
  }
`,Yt=i.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: var(--privy-color-info-bg, #f0f4ff);
  border: 1px solid var(--privy-color-border-info, #bfcfff);
  overflow: clip;
  width: 100%;
  margin-bottom: 0.75rem;

  svg {
    flex-shrink: 0;
    color: var(--privy-color-icon-info, #6b8aed);
  }
`,Xt=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
  min-width: 0;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: var(--privy-color-foreground);
  font-feature-settings:
    'calt' 0,
    'kern' 0;
  text-align: left;
`,Zt=i.span`
  font-weight: 600;
`,$=i.span`
  font-weight: 400;
`,Qt=i.button`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;

  && {
    padding: 0;
    color: var(--privy-color-accent);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.375rem;
  }
`,$t={CREDIT_DEBIT_CARD:`Credit / debit card`,APPLE_PAY:`Apple Pay`,GOOGLE_PAY:`Google Pay`,BANK:`Bank transfer`,BANK_TRANSFER:`Bank transfer`,SEPA:`SEPA`,PIX:`PIX`,STRIPE_LINK:`Link`},en=e=>$t[e]??e.replace(/_/g,` `).toLowerCase().replace(/^\w/,(e=>e.toUpperCase())),tn={CREDIT_DEBIT_CARD:(0,E.jsx)(w,{size:20}),APPLE_PAY:(0,E.jsx)(le,{width:20,height:20}),GOOGLE_PAY:(0,E.jsx)(ce,{width:20,height:20}),BANK:(0,E.jsx)(T,{size:20}),BANK_TRANSFER:(0,E.jsx)(T,{size:20}),SEPA:(0,E.jsx)(T,{size:20}),PIX:(0,E.jsx)(T,{size:20}),STRIPE_LINK:(0,E.jsx)(Q,{size:20})},nn=e=>tn[e]??(0,E.jsx)(w,{size:20}),rn=({onClose:e,onSelectPaymentMethod:t,quotes:n,isLoading:r})=>(0,E.jsx)(S,{showClose:!0,onClose:e,title:`Select payment method`,subtitle:`Choose how you'd like to pay`,watermark:!0,children:(0,E.jsx)(an,{children:n.map(((e,n)=>{let i=e.payment_method_category??e.payment_method;return(0,E.jsx)(on,{onClick:()=>t(e),disabled:r,children:(0,E.jsxs)(sn,{children:[(0,E.jsx)(cn,{children:nn(i)}),(0,E.jsx)(ln,{children:(0,E.jsx)(un,{children:en(i)})})]})},`${e.provider}-${e.payment_method}-${n}`)}))})}),an=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`,on=i.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-md);
  border-style: solid;
  display: flex;

  && {
    padding: 1rem 1rem;
  }
`,sn=i.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,cn=i.div`
  color: var(--privy-color-foreground-3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ln=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  flex: 1;
`,un=i.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
`,dn=({onClose:e,onContinue:t,onAmountChange:n,onSelectSource:r,onEditSourceAsset:i,onEditPaymentMethod:a,onSelectPaymentMethod:o,onRetry:s,opts:c,state:l,amount:u,selectedQuote:d,quotesWarning:f,quotesErrors:p,quotesCount:m,isLoading:h,stripeElement:g})=>l.status===`select-amount`?(0,E.jsx)(qt,{onClose:e,onContinue:t,onAmountChange:n,onEditSourceAsset:i,onEditPaymentMethod:a,opts:c,amount:u,selectedQuote:d,quotesWarning:f,quotesErrors:p,quotesCount:m,isLoading:h}):l.status===`select-source-asset`?(0,E.jsx)(oe,{onSelectSource:r,opts:c,isLoading:h}):l.status===`select-payment-method`?(0,E.jsx)(rn,{onClose:e,onSelectPaymentMethod:o,quotes:l.quotes,isLoading:h}):l.status===`stripe-flow`?(0,E.jsx)(zt,{step:l.step,element:g,onClose:e,isLoading:h}):l.status===`provider-confirming`?(0,E.jsx)(Bt,{onClose:e}):l.status===`provider-error`?(0,E.jsx)(Vt,{onClose:e,onRetry:s}):l.status===`provider-success`?(0,E.jsx)(Ht,{onClose:e}):null,fn={component:()=>{let{onUserCloseViaDialogOrKeybindRef:e}=f(),t=g();if(!t)return null;let{opts:n,state:r,isLoading:i,amount:a,quotesWarning:o,quotesErrors:s,localQuotes:c,localSelectedQuote:l,initialQuotes:u,initialSelectedQuote:d,stripeElement:p}=t;return e.current=Ee,(0,E.jsx)(dn,{onClose:Ee,opts:n,state:r,isLoading:i,amount:a,selectedQuote:l??d,quotesWarning:o,quotesErrors:s,quotesCount:(c??u)?.length??0,onAmountChange:Te,onContinue:Ie,onSelectSource:He,onEditSourceAsset:ze,onEditPaymentMethod:Re,onSelectPaymentMethod:Ve,onRetry:Be,stripeElement:p})}};export{fn as FiatOnrampScreen,fn as default};