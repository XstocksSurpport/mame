import{o as e}from"./rolldown-runtime-C_JxhDyB.js";import{n as t,t as n}from"./jsx-runtime-DC0n_eUu.js";import{r}from"./wallet-api-DpQiCJdN.js";import"./context-CwQoLGKR-BSFDTGHb.js";import{E as i,_n as a,lt as o,u as s,ut as c}from"./useActiveWallet-CvmN8neg-DoXjHuV7.js";import{n as l,t as u}from"./chevron-down-DjtIm51S.js";import{_ as d,a as ee,c as te,d as ne,f as re,h as ie,i as ae,m as oe,o as se,p as ce,r as le,s as ue,t as f,u as de}from"./floating-ui.react-Be_OHutQ.js";import{I as p,L as m,R as h,Ut as fe,cr as pe,ir as me,lr as g,or as _,sr as he}from"./index-CI5i05P9.js";import{t as v}from"./createLucideIcon-DYCMq4bT.js";import{t as y}from"./triangle-alert-CpmwGA2G.js";import{t as b}from"./check-D4fgD6l-.js";import{t as ge}from"./hourglass-59jAelBA.js";import{t as _e}from"./info-3caQiFj3.js";import{c as ve}from"./ModalHeader-YbJk-YIQ-CaZMzS4t.js";import{t as x}from"./ScreenLayout-Ce16-u0i-CBEHZuxc.js";import{t as ye}from"./CopyableText-ChtfBWx4-dhti1P6W.js";import{n as be,t as xe}from"./QrCode-BxAVhbx2-BkImtyFH.js";import{r as S}from"./styles-DVyDvTdj-DhjzVCyM.js";function C(e){return e.startsWith(`eip155:`)?`ethereum`:e.startsWith(`solana:`)?`solana`:e.startsWith(`bip122:`)?`bitcoin-segwit`:e.startsWith(`tron:`)?`tron`:void 0}async function w(e){let{user:t}=await e.privy.user.get();if(!t)return{ok:!1,error:`NOT_AUTHENTICATED`};let n=function(e,t){let n=C(e);if(!n)return;let r=t.linked_accounts.find((e=>e.type===`wallet`&&e.chain_type===n&&`address`in e&&e.address));return r&&`address`in r?r.address:void 0}(e.caip2,t);if(n)return{ok:!0,address:n};let i=C(e.caip2);if(!i)return{ok:!1,error:`UNSUPPORTED_CHAIN`};try{let t=await e.privy.fetchPrivyRoute(r,{body:{chain_type:i}});return await e.onWalletCreated?.(),{ok:!0,address:t.address}}catch{return{ok:!1,error:`REFUND_WALLET_CREATION_FAILED`}}}async function Se(e){let{user:t}=await e.privy.user.get();if(!t)throw Error(`NOT_AUTHENTICATED`);let n=e.refundAddress;if(!n){let t=await w({privy:e.privy,caip2:e.sourceChain,onWalletCreated:e.onWalletCreated});if(!t.ok)throw Error(t.error);n=t.address}return await e.privy.fetchPrivyRoute(_,{body:{source_chain:e.sourceChain,source_currency:e.sourceCurrency,destination_chain:e.destinationChain,destination_currency:e.destinationCurrency,destination_address:e.destinationAddress,refund_address:n,...e.slippageBps==null?{}:{slippage_bps:e.slippageBps}}})}function T(e,t){return Math.ceil(t/e)}function E(e){return e.status===`success`?e.result?{status:`success`,order:e.result}:{status:`timeout`}:e.status===`aborted`?{status:`aborted`,error:e.error}:{status:`timeout`,error:e.error}}async function Ce(e){return await e.privy.fetchPrivyRoute(g,{params:{order_id:e.orderId}})}async function we(e){let t=e.pollIntervalMs??2e3,n=e.timeoutMs??18e5,r=e.signal??new AbortController().signal;return E(await l({operation:async()=>{let t=await e.privy.fetchPrivyRoute(he,{params:{deposit_address_id:e.depositAddressId},query:{after:e.quoteCreatedAt}});if(t.order)return await e.privy.fetchPrivyRoute(g,{params:{order_id:t.order.id}})},until:e=>e!==void 0,delay:t,interval:t,attempts:T(t,n),signal:r}))}async function Te(e){let t=e.pollIntervalMs??2e3,n=e.timeoutMs??18e5,r=e.signal??new AbortController().signal;return E(await l({operation:()=>e.privy.fetchPrivyRoute(g,{params:{order_id:e.orderId}}),until:e=>e.status!==`executing`,delay:t,interval:t,attempts:T(t,n),signal:r}))}async function Ee(e){let t=await e.fetchPrivyRoute(pe,{});return{currencies:t.currencies,chains:t.chains}}var D=Object.freeze({__proto__:null,generateDepositAddress:Se,getConfig:Ee,getDeposit:Ce,resolveRefundAddress:w,waitForCompletion:Te,waitForDeposit:we}),De=v(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),O=v(`qr-code`,[[`rect`,{width:`5`,height:`5`,x:`3`,y:`3`,rx:`1`,key:`1tu5fj`}],[`rect`,{width:`5`,height:`5`,x:`16`,y:`3`,rx:`1`,key:`1v8r4q`}],[`rect`,{width:`5`,height:`5`,x:`3`,y:`16`,rx:`1`,key:`1x03jg`}],[`path`,{d:`M21 16h-3a2 2 0 0 0-2 2v3`,key:`177gqh`}],[`path`,{d:`M21 21v.01`,key:`ents32`}],[`path`,{d:`M12 7v3a2 2 0 0 1-2 2H7`,key:`8crl2c`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M12 3h.01`,key:`n36tog`}],[`path`,{d:`M12 16v.01`,key:`133mhm`}],[`path`,{d:`M16 12h1`,key:`1slzba`}],[`path`,{d:`M21 12v.01`,key:`1lwtk9`}],[`path`,{d:`M12 21v-1`,key:`1880an`}]]),Oe=v(`undo-2`,[[`path`,{d:`M9 14 4 9l5-5`,key:`102s5s`}],[`path`,{d:`M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11`,key:`f3b9sd`}]]),k=n(),A=e(t(),1);o(),be();var ke=class extends A.Component{static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){this.props.onError(e)}componentDidUpdate(e){e.resetKey!==this.props.resetKey&&this.state.hasError&&this.setState({hasError:!1})}render(){return this.state.hasError?null:this.props.children}constructor(...e){super(...e),this.state={hasError:!1}}};function Ae(e,t,n){let r=Number(e);return!Number.isFinite(r)||r===0?`1 ${t} ≈ ${e} ${n}`:r>=.01?`1 ${t} ≈ ${j(r)} ${n}`:`${j(1/r)} ${t} ≈ 1 ${n}`}function j(e){return e>=1e3?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:0}).format(Math.round(e)):e>=100?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:1}).format(e):e>=1?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:2}).format(e):new Intl.NumberFormat(`en-US`,{maximumFractionDigits:4}).format(e)}function M(e,t){let n=Number(e);if(!Number.isFinite(n)||n===0)return e;let r=t==null?n:n/10**t;return r>=1e3?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:2}).format(r):r>=1?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:4}).format(r):r>=1e-4?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:6}).format(r):new Intl.NumberFormat(`en-US`,{maximumSignificantDigits:4}).format(r)}function N({address:e,caip2:t,config:n}){for(let r of n.currencies){let n=r.chains.find((n=>n.caip2===t&&n.address.toLowerCase()===e.toLowerCase()));if(n)return{symbol:r.symbol.toUpperCase(),decimals:n.decimals}}return{symbol:e,decimals:void 0}}function P(e,t){return t[e]?.displayName??e}function F(e,t){if(!e.chains[t.destinationChain])return`Unsupported destination chain: "${t.destinationChain}". Check that the chain is in CAIP-2 format (e.g. "eip155:8453") and is supported for deposit addresses.`;let n=t.destinationCurrency.toLowerCase();return e.currencies.some((e=>e.chains.some((e=>e.caip2===t.destinationChain&&e.address.toLowerCase()===n))))?null:`Unsupported destination currency "${t.destinationCurrency}" on chain "${t.destinationChain}". Check that this token address is supported on the specified chain.`}var je=new Set([`ROUTE_UNAVAILABLE`,`UNEXPECTED_STATE`,`TIMEOUT_WAITING_FOR_NEXT_ORDER`,`TIMEOUT_ORDER_COMPLETION`,`DEPOSIT_FAILED`,`DEPOSIT_REFUNDED`,`USER_EXITED`,`AMOUNT_TOO_LOW`,`INSUFFICIENT_LIQUIDITY`,`UNSUPPORTED_CHAIN`,`UNSUPPORTED_CURRENCY`,`UNSUPPORTED_ROUTE`,`NO_SWAP_ROUTES_FOUND`,`NO_INTERNAL_SWAP_ROUTES_FOUND`,`NO_QUOTES`,`SANCTIONED_WALLET_ADDRESS`,`REFUND_WALLET_CREATION_FAILED`,`DEPOSIT_ADDRESSES_NOT_ENABLED`,`NOT_AUTHENTICATED`]);function Me(e){return je.has(e)}function I(e){return Me(e)?e:`UNKNOWN_ERROR`}function L(){let{params:e,setModalState:t}=p(),{privy:n}=a(),r=function(){let{privy:e,refreshSessionAndUser:t}=a();return(0,A.useCallback)(((n,r)=>r?Promise.resolve({ok:!0,address:r}):D.resolveRefundAddress({privy:e,caip2:n,onWalletCreated:t})),[e,t])}(),[i,o]=(0,A.useState)(!1);return{fetchQuote:(0,A.useCallback)((async(i,a,s)=>{if(e){o(!0);try{let o=await r(i.caip2,e.refundAddress);if(!o.ok)return void t({step:`error`,code:I(o.error)});t({step:`address`,selectedCurrency:a,selectedChain:i,availableChains:s,quote:await n.fetchPrivyRoute(_,{body:{source_chain:i.caip2,source_currency:i.currencyAddress,destination_chain:e.destinationChain,destination_currency:e.destinationCurrency,destination_address:e.destinationAddress,refund_address:o.address,...e.slippageBps==null?{}:{slippage_bps:e.slippageBps}}})})}catch(e){let n=e instanceof Error?e:Error(String(e)),r=`status`in n&&typeof n.status==`number`?n.status:void 0;t({step:`error`,code:n instanceof me&&n.code===`feature_not_enabled`?`DEPOSIT_ADDRESSES_NOT_ENABLED`:r&&r>=500?`UNKNOWN_ERROR`:I(n.message),message:n.message})}finally{o(!1)}}}),[e,n,r,t]),isFetching:i}}function R(e,t){switch(e.status){case`completed`:return t({step:`complete`,order:e});case`refunded`:return t({step:`refunded`,order:e});case`failed`:return t({step:`failed`,order:e});case`executing`:return t({step:`processing`,order:e});default:return}}var z=i(x)`
  #privy-content-footer-container {
    margin-top: 0;
  }
`,Ne=i.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: var(--privy-color-foreground-3);
  margin: 0.25rem 0 0;
`,B=i.img`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  object-fit: cover;
  flex-shrink: 0;
`,V=i.img`
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
`,H=i.span`
  font-weight: 500;
`,Pe=i.span`
  font-size: 0.875rem;
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`;i.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  min-height: 2.25rem;
  border-radius: 6.25rem;
  border: none;
  background-color: var(--privy-color-background-2);

  input {
    flex: 1;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background: transparent;
    color: var(--privy-color-foreground);

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &::placeholder {
      color: var(--privy-color-foreground-3);
    }
  }
`;var U=i.button`
  && {
    position: relative;
    width: 100%;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    padding: 0.625rem 0.75rem;
    min-height: 3.5rem;
    border: 1px solid
      ${e=>e.$selected?`var(--privy-color-icon-interactive)`:`var(--privy-color-foreground-4)`};
    border-radius: var(--privy-border-radius-md);
    background-color: ${e=>e.$selected?`var(--privy-color-info-bg)`:`transparent`};
    color: var(--privy-color-foreground);
    font-size: 0.875rem;
    line-height: 1.5rem;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    transition:
      background-color 200ms ease,
      border-color 200ms ease;

    &:hover {
      background-color: var(--privy-color-background-2);
    }

    &:disabled {
      opacity: ${e=>e.$selected?1:.5};
      cursor: not-allowed;
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,W=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 3rem 0;
`,Fe=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0;
`,G=i.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,K=i.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${e=>e.$status===`done`?`var(--privy-color-success-light, #DCFCE7)`:`var(--privy-color-background-2)`};
`,q=i.div`
  width: 2px;
  height: 1rem;
  background-color: var(--privy-color-background-2);
  margin-left: 0.6875rem;
`,J=i.span`
  font-size: 0.875rem;
  color: var(--privy-color-foreground);
`;i.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--privy-border-radius-md);
  background-color: var(--privy-color-background-2);
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`;var Y=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8125rem;
  line-height: 1.25rem;
`,X=i.span`
  color: var(--privy-color-foreground);
  font-weight: 400;
`,Z=i.span`
  color: var(--privy-color-foreground);
  font-weight: 500;
  text-align: right;
  max-width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Q=i(s)`
  && {
    margin-left: auto;
    height: 1.5rem;
    width: 1.5rem;
    border-width: 2px;
    flex-shrink: 0;
  }
`,Ie=({sourceAmount:e,sourceSymbol:t,sourceChainName:n,sourceDecimals:r,destinationAmount:i,destSymbol:a,destChainName:o,destDecimals:s,onClose:c})=>(0,k.jsx)(z,{icon:b,iconVariant:`success`,title:`Transfer complete`,subtitle:i?`Received ${M(e,r)} ${t} on ${n} and converted it to ${M(i,s)} ${a} on ${o}. Funds are available to use.`:`Your ${t} has been received and is now available in your wallet.`,showClose:!0,onClose:c,primaryCta:{label:`Done`,onClick:c},watermark:!1});function Le(){let{state:e,configData:t,close:n}=h(`complete`),{order:r}=e,{sourceSymbol:i,sourceChainName:a,sourceDecimals:o,destSymbol:s,destChainName:c,destDecimals:l}=(0,A.useMemo)((()=>{let e=N({address:r.source_currency,caip2:r.source_chain,config:t}),n=N({address:r.destination_currency,caip2:r.destination_chain,config:t});return{sourceSymbol:e.symbol,sourceChainName:P(r.source_chain,t.chains),sourceDecimals:e.decimals,destSymbol:n.symbol,destChainName:P(r.destination_chain,t.chains),destDecimals:n.decimals}}),[r,t]);return(0,k.jsx)(Ie,{sourceAmount:r.source_amount,sourceSymbol:i,sourceChainName:a,sourceDecimals:o,destinationAmount:r.destination_amount,destSymbol:s,destChainName:c,destDecimals:l,onClose:n})}function Re(){let{modalState:e,setModalState:t,config:n,retryConfig:r,close:i}=p();if(e.step!==`error`)throw Error(`UNEXPECTED_STATE`);let{code:a}=e,{title:o,subtitle:s,detail:c,iconVariant:l}=(e=>{switch(e){case`AMOUNT_TOO_LOW`:return{title:`Amount too low`,subtitle:`The deposit amount is below the minimum for this route.`,detail:`Try a larger amount or a different token.`,iconVariant:`warning`};case`INSUFFICIENT_LIQUIDITY`:return{title:`Insufficient liquidity`,subtitle:`There isn't enough liquidity for this route right now.`,detail:`Try a smaller amount or a different network.`,iconVariant:`warning`};case`UNSUPPORTED_CHAIN`:return{title:`Unsupported chain`,subtitle:`Deposits from this chain type aren't supported yet. Try a different network.`,iconVariant:`warning`};case`UNSUPPORTED_CURRENCY`:case`UNSUPPORTED_ROUTE`:case`ROUTE_UNAVAILABLE`:case`NO_SWAP_ROUTES_FOUND`:case`NO_INTERNAL_SWAP_ROUTES_FOUND`:case`NO_QUOTES`:return{title:`Route not available`,subtitle:`This deposit route isn't supported right now. Try a different token or network.`,iconVariant:`warning`};case`SANCTIONED_WALLET_ADDRESS`:return{title:`Address restricted`,subtitle:`This address cannot be used for deposits due to compliance restrictions.`,iconVariant:`warning`};case`REFUND_WALLET_CREATION_FAILED`:return{title:`Unable to set up refund address`,subtitle:`We couldn't create a wallet to receive refunds on this chain. Please try again or select a different network.`,iconVariant:`warning`};case`DEPOSIT_ADDRESSES_NOT_ENABLED`:return{title:`Not enabled`,subtitle:`Deposit addresses are not enabled for this app.`,iconVariant:`warning`};case`NOT_AUTHENTICATED`:return{title:`Not signed in`,subtitle:`Please sign in to continue with your deposit.`,iconVariant:`warning`};case`TIMEOUT_WAITING_FOR_NEXT_ORDER`:case`TIMEOUT_ORDER_COMPLETION`:return{title:`Taking longer than expected`,subtitle:`Your funds are safe. The deposit is still being processed — check back later.`,iconVariant:`subtle`};default:return{title:`Something went wrong`,subtitle:`We couldn't complete your request. Please try again.`,iconVariant:`subtle`}}})(a),[u,d]=(0,A.useState)(!1);return(0,k.jsx)(z,{icon:y,iconVariant:l,title:o,subtitle:c?`${s} ${c}`:s,showClose:!0,onClose:i,primaryCta:{label:`Try again`,onClick:async()=>{if(n.status!==`ready`){d(!0);try{await r(),t({step:`token`})}catch{d(!1)}}else t({step:`token`})},loading:u},watermark:!0})}function ze(){let{state:e,close:t}=h(`failed`),{order:n}=e;return(0,k.jsx)(x,{icon:y,iconVariant:`error`,title:`Transfer failed`,subtitle:`Something went wrong processing your transfer.`,showClose:!0,onClose:t,primaryCta:{label:`Done`,onClick:t},secondaryCta:{label:`Learn about manual recovery`,onClick:()=>window.open(`https://docs.privy.io`,`_blank`,`noopener,noreferrer`)},watermark:!0,children:(0,k.jsxs)(Be,{href:n.tracking_url,target:`_blank`,rel:`noopener noreferrer`,children:[`Reference: `,n.provider_request_id]})})}var Be=i.a`
  text-align: center;
  font-size: 0.75rem;
  opacity: 0.7;
  text-decoration: underline;
  cursor: pointer;
  color: var(--privy-color-foreground-3);
`;function Ve(){let{close:e,setModalState:t,config:n,params:r}=p(),[i,a]=(0,A.useState)(!1);return(0,A.useEffect)((()=>{if(i&&r){if(n.status===`ready`){let e=F(n.data,r);t(e?{step:`error`,code:`ROUTE_UNAVAILABLE`,message:e}:{step:`token`})}n.status===`error`&&t({step:`error`,code:`ROUTE_UNAVAILABLE`})}}),[i,n,r,t]),(0,k.jsx)(z,{icon:O,iconVariant:`subtle`,title:`Add funds`,subtitle:`Top up your account by sending crypto from any wallet. Conversion and routing handled by Relay.`,showClose:!0,onClose:e,primaryCta:{label:`Continue`,onClick:()=>{if(n.status===`ready`&&r){let e=F(n.data,r);t(e?{step:`error`,code:`ROUTE_UNAVAILABLE`,message:e}:{step:`token`})}else n.status===`error`?t({step:`error`,code:`ROUTE_UNAVAILABLE`}):a(!0)},loading:i&&n.status===`loading`,loadingText:null},watermark:!0})}function He(){let{state:e,setModalState:t,close:n}=h(`network`),[r,i]=(0,A.useState)(-1),{availableChains:a}=e,{confirm:o,isFetching:s}=function(){let e=m(),{params:t}=p(),{fetchQuote:n,isFetching:r}=L();return{confirm:(0,A.useCallback)((async r=>{if(!r||!t)return;let i=e?.modalState;i&&i.step===`network`&&await n(r,i.selectedCurrency,i.availableChains)}),[t,e,n]),isFetching:r}}();return(0,k.jsx)(x,{title:`Select network`,eyebrow:(0,k.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`0.375rem`},children:[(0,k.jsx)(`img`,{src:e.selectedCurrency.logoURI,alt:``,style:{width:`1rem`,height:`1rem`,borderRadius:`50%`}}),`Send `,e.selectedCurrency.symbol]}),showBack:!0,onBack:()=>t({step:`token`}),showClose:!0,onClose:n,watermark:!0,children:(0,k.jsx)(S,{style:{marginTop:`1rem`,height:`22rem`},$colorScheme:`light`,children:a.map(((e,t)=>(0,k.jsxs)(U,{$selected:r===t,disabled:s,onClick:()=>{i(t),o(e)},children:[(0,k.jsx)(V,{src:e.iconUrl,alt:e.displayName}),(0,k.jsx)(H,{children:e.displayName}),s&&t===r&&(0,k.jsx)(Q,{})]},e.caip2)))})})}var Ue=({trackingUrl:e,onClose:t})=>(0,k.jsx)(x,{icon:ge,iconVariant:`subtle`,title:`Transfer in progress`,subtitle:`Your deposit was received and the transfer is now processing.`,showClose:!0,onClose:t,secondaryCta:{label:`View on block explorer ↗`,onClick:()=>window.open(e,`_blank`,`noopener,noreferrer`)},watermark:!1,children:(0,k.jsxs)(Fe,{children:[(0,k.jsxs)(G,{children:[(0,k.jsx)(K,{$status:`done`,children:(0,k.jsx)(b,{size:14,color:`var(--privy-color-icon-success)`,strokeWidth:2})}),(0,k.jsx)(J,{children:`Deposit received`})]}),(0,k.jsx)(q,{}),(0,k.jsxs)(G,{children:[(0,k.jsx)(K,{$status:`active`,children:(0,k.jsx)(We,{})}),(0,k.jsx)(J,{children:`Bridging`})]}),(0,k.jsx)(q,{}),(0,k.jsxs)(G,{children:[(0,k.jsx)(K,{$status:`pending`}),(0,k.jsx)(J,{children:`Funds arrived`})]})]})}),We=i.span`
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid var(--privy-color-foreground-3);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;function Ge(){let{state:e,close:t}=h(`processing`);return function({orderId:e,enabled:t}){let{privy:n}=a(),{setModalState:r}=p();(0,A.useEffect)((()=>{let t=new AbortController;return D.waitForCompletion({privy:n,orderId:e,signal:t.signal}).then((e=>{t.signal.aborted||(e.status===`success`?R(e.order,r):e.status===`timeout`&&r({step:`error`,code:`TIMEOUT_ORDER_COMPLETION`}))})),()=>{t.abort()}}),[t,e,n,r])}({orderId:e.order.id,enabled:!0}),(0,k.jsx)(Ue,{trackingUrl:e.order.tracking_url,onClose:t})}function Ke(){let{state:e,close:t}=h(`refunded`),{order:n}=e;return(0,k.jsx)(z,{icon:Oe,iconVariant:`subtle`,title:`Transfer refunded`,subtitle:`Your transfer was received, but the swap couldn't be completed. A refund has been started automatically.`,showClose:!0,onClose:t,primaryCta:{label:`Done`,onClick:t},secondaryCta:{label:`View transaction details`,onClick:()=>window.open(n.tracking_url,`_blank`,`noopener,noreferrer`)},watermark:!0})}function qe(){let{close:e,setModalState:t,config:n}=p(),{confirm:r,currencies:i,isFetching:a}=function(){let{config:e,setModalState:t}=p(),{fetchQuote:n,isFetching:r}=L(),i=e.status===`ready`?e.data.currencies:[];return{confirm:(0,A.useCallback)((async r=>{if(e.status!==`ready`||!r)return;let i=function(e,t){return e.chains.map((e=>{let n=t.chains[e.caip2];return n?{caip2:e.caip2,displayName:n.displayName,iconUrl:n.iconUrl,vmType:n.vmType,currencyAddress:e.address,currencyDecimals:e.decimals}:null})).filter((e=>e!==null))}(r,e.data);if(i.length!==1)t({step:`network`,selectedCurrency:r,availableChains:i});else{let e=i[0];await n(e,r,i)}}),[e,n,t]),currencies:i,isFetching:r}}(),[o,c]=(0,A.useState)(-1);return(0,k.jsx)(x,{title:`Select token`,showBack:!0,onBack:()=>t({step:`intro`}),showClose:!0,onClose:e,watermark:!0,children:n.status===`error`?(0,k.jsx)(W,{children:(0,k.jsx)(Ne,{children:`Failed to load tokens`})}):n.status===`loading`?(0,k.jsx)(W,{children:(0,k.jsx)(s,{})}):(0,k.jsx)(S,{style:{marginTop:`1rem`,height:`22rem`},$colorScheme:`light`,children:i.map(((e,t)=>(0,k.jsxs)(U,{$selected:o===t,disabled:a,onClick:()=>{c(t),r(e)},children:[(0,k.jsx)(B,{src:e.logoURI,alt:e.symbol}),(0,k.jsx)(H,{children:e.name}),a&&t===o?(0,k.jsx)(Q,{}):(0,k.jsx)(Pe,{children:e.symbol})]},e.symbol)))})})}function Je({address:e,onClick:t}){let[n,r]=(0,A.useState)(!1);return(0,k.jsx)(k.Fragment,{children:n?(0,k.jsx)(Ye,{onClick:()=>r(!1),style:{marginTop:`1.5rem`},children:(0,k.jsx)(xe,{url:e,size:312,hideLogo:!0})}):(0,k.jsxs)(Xe,{title:`Click to copy address`,onClick:t,style:{marginTop:`1.5rem`},children:[(0,k.jsxs)(Ze,{children:[(0,k.jsx)(Qe,{children:`Deposit address`}),(0,k.jsx)($e,{children:e})]}),(0,k.jsx)(et,{children:(0,k.jsx)(tt,{type:`button`,onClick:e=>{e.stopPropagation(),r(!0)},children:(0,k.jsx)(O,{size:16,color:`var(--privy-color-icon-muted)`})})})]})})}var Ye=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`,Xe=i.div`
  display: flex;
  border-radius: var(--privy-border-radius-md);
  background: var(--privy-color-background-clicked, #f1f2f9);
  padding: 1rem;
  cursor: pointer;
  gap: 0.5rem;
`,Ze=i.div`
  flex: 1;
  min-width: 0;
  text-align: left;
`,Qe=i.div`
  font-size: 0.75rem;
  color: var(--privy-color-icon-muted);
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,$e=i.div`
  word-break: break-all;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`,et=i.div`
  width: 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
`,tt=i.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border-radius: var(--privy-border-radius-xs);

    &:hover {
      background: var(--privy-color-background);
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`;function nt({quote:e,selectedCurrency:t,selectedChain:n,destinationSymbol:r}){let[i,a]=(0,A.useState)(!1),o=t.symbol.toUpperCase(),s=n.displayName,l=(0,A.useRef)(null);return(0,k.jsxs)(rt,{children:[(0,k.jsxs)(it,{onClick:(0,A.useCallback)((()=>{let e=document.getElementById(`privy-modal-content`);e&&(l.current&&clearTimeout(l.current),e.style.transition=`none`,l.current=setTimeout((()=>{e.style.transition=``,l.current=null}),160)),a((e=>!e))}),[]),children:[(0,k.jsxs)(at,{children:[t.logoURI&&(0,k.jsx)(B,{src:t.logoURI,alt:o,style:{width:`2rem`,height:`2rem`}}),n.iconUrl&&(0,k.jsx)(ot,{src:n.iconUrl,alt:s})]}),(0,k.jsxs)(st,{children:[(0,k.jsx)(ct,{children:`You send`}),(0,k.jsxs)(lt,{children:[o,` on `,s]})]}),(0,k.jsx)(ut,{children:(0,k.jsx)(i?De:u,{size:16})})]}),(0,k.jsx)(pt,{$expanded:i,children:(0,k.jsx)(mt,{children:(0,k.jsxs)(dt,{children:[e.indicative_rate&&(0,k.jsxs)(Y,{children:[(0,k.jsx)(X,{children:`Conversion rate`}),(0,k.jsxs)(Z,{style:{display:`flex`,alignItems:`center`,gap:`0.25rem`},children:[Ae(e.indicative_rate,o,r.toUpperCase()),(0,k.jsx)(ht,{content:`Estimated rate based on current market conditions. Final execution price may vary depending on transfer size and routing.`})]})]}),(0,k.jsxs)(Y,{children:[(0,k.jsx)(X,{children:`Max slippage`}),(0,k.jsxs)(Z,{children:[(e.slippage_bps/100).toFixed(1),`%`]})]}),(0,k.jsxs)(Y,{children:[(0,k.jsx)(X,{children:`Refund address`}),(0,k.jsx)(Z,{children:(0,k.jsx)(ye,{value:e.refund_address,iconOnly:!0,iconSize:11,children:c(e.refund_address,4,4)})})]})]})})}),(0,k.jsxs)(ft,{children:[(0,k.jsx)(y,{size:16,color:`var(--privy-color-icon-muted)`,style:{flexShrink:0}}),(0,k.jsxs)($,{children:[`Only send `,(0,k.jsx)(`strong`,{children:o}),` on `,(0,k.jsx)(`strong`,{children:s}),`. Other assets may be lost.`]})]})]})}var rt=i.div`
  border-radius: var(--privy-border-radius-md);
  border: 1px solid var(--privy-color-foreground-4);
  overflow: hidden;
`,it=i.button`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--privy-color-foreground);
    outline: none;
    box-shadow: none;

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,at=i.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`,ot=i(V)`
  && {
    position: absolute;
    top: -0.125rem;
    right: -0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    box-sizing: content-box;
    border: 1.5px solid #fff;
    background-color: #fff;
  }
`,st=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,ct=i.span`
  font-size: 0.75rem;
  color: var(--privy-color-foreground-3);
  line-height: 1rem;
`,lt=i.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,ut=i.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-clicked, #f1f2f9);
  color: var(--privy-color-foreground-3);
`,dt=i.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0.75rem;

  & > * {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--privy-color-foreground-4);
  }

  & > *:last-child {
    border-bottom: none;
  }
`,ft=i.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0.75rem 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: var(--privy-border-radius-sm);
  background: #f8f9fc;
`,$=i.span`
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-icon-muted);
  text-align: left;
`,pt=i.div`
  display: grid;
  grid-template-rows: ${({$expanded:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 150ms ease-out;
`,mt=i.div`
  overflow: hidden;
`;function ht({content:e}){let[t,n]=(0,A.useState)(!1),{refs:r,floatingStyles:i,context:a}=se({open:t,onOpenChange:n,placement:`top`,whileElementsMounted:d,middleware:[oe(6),ce(),ie({padding:8})]}),{getReferenceProps:o,getFloatingProps:s}=de([te(a,{move:!1,handleClose:le()}),ue(a),ae(a),ee(a),ne(a,{role:`tooltip`})]),{isMounted:c,styles:l}=re(a,{duration:150});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`button`,{ref:r.setReference,type:`button`,"aria-label":`More information about conversion rate`,style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,padding:0,border:`none`,background:`none`,color:`var(--privy-color-icon-muted)`,cursor:`pointer`},...o(),children:(0,k.jsx)(_e,{size:14})}),c&&(0,k.jsx)(f,{root:document.getElementById(`privy-modal-content`)??void 0,children:(0,k.jsx)(gt,{ref:r.setFloating,style:{...i,...l},...s(),children:e})})]})}var gt=i.div`
  max-width: 13rem;
  padding: 0.5rem 0.625rem;
  border-radius: var(--privy-border-radius-sm, 0.375rem);
  background: var(--privy-color-foreground);
  color: var(--privy-color-background);
  font-size: 0.6875rem;
  line-height: 1rem;
  font-weight: 400;
  text-align: left;
  z-index: 10;
`,_t=({quote:e,selectedCurrency:t,selectedChain:n,destinationSymbol:r,onBack:i,onClose:a})=>{let[o,s]=(0,A.useState)(!1),c=t?.symbol?.toUpperCase()??`funds`,l=n?.displayName??``,u=async()=>{o||(await navigator.clipboard.writeText(e.deposit_address),s(!0),setTimeout((()=>s(!1)),2e3))};return(0,k.jsxs)(x,{title:`Send ${c}${l?` on ${l}`:``}`,subtitle:`Send funds to the address below. Conversion and routing handled by Relay.`,showBack:!0,onBack:i,showClose:!0,onClose:a,watermark:!1,children:[(0,k.jsx)(nt,{quote:e,selectedCurrency:t,selectedChain:n,destinationSymbol:r}),(0,k.jsx)(Je,{address:e.deposit_address,onClick:u}),(0,k.jsx)(ve,{style:{marginTop:`1rem`,marginBottom:`0.5rem`,...o?{backgroundColor:`var(--privy-color-icon-success)`,borderColor:`var(--privy-color-icon-success)`}:{}},onClick:u,children:o?(0,k.jsxs)(k.Fragment,{children:[`Copied `,(0,k.jsx)(b,{size:16,style:{marginLeft:`0.25rem`}})]}):`Copy address`}),(0,k.jsx)(vt,{children:`Routing and bridging are handled by Relay. Privy does not control execution timing, liquidity, or transaction outcomes.`})]})},vt=i.p`
  && {
    margin: 0.5rem 0 0;
    font-size: 0.6875rem;
    line-height: 1.125rem;
    color: var(--privy-color-icon-muted);
    text-align: center;
  }
`;function yt(){let{state:e,configData:t,setModalState:n,close:r,params:i}=h(`address`),{quote:o,selectedCurrency:s,selectedChain:c,availableChains:l}=e;return function({depositAddressId:e,enabled:t,quoteCreatedAt:n}){let{privy:r}=a(),{setModalState:i}=p();(0,A.useEffect)((()=>{if(!e)return;let t=new AbortController;return D.waitForDeposit({privy:r,depositAddressId:e,quoteCreatedAt:n,signal:t.signal}).then((e=>{t.signal.aborted||(e.status===`success`?R(e.order,i):e.status===`timeout`&&i({step:`error`,code:`TIMEOUT_WAITING_FOR_NEXT_ORDER`}))})),()=>{t.abort()}}),[t,e,r,n,i])}({depositAddressId:o.id,enabled:!0,quoteCreatedAt:o.created_at}),(0,k.jsx)(_t,{quote:o,selectedCurrency:s,selectedChain:c,destinationSymbol:(0,A.useMemo)((()=>N({address:i.destinationCurrency,caip2:i.destinationChain,config:t}).symbol),[i,t]),onBack:()=>n({step:`network`,selectedCurrency:s,availableChains:l}),onClose:r})}function bt(){let{modalState:e,setModalState:t}=p();return(0,k.jsx)(ke,{onError:e=>t({step:`error`,code:`UNEXPECTED_STATE`,message:e.message}),resetKey:e.step,children:(0,k.jsx)(xt,{})})}function xt(){let{modalState:e}=p();switch(e.step){case`intro`:return(0,k.jsx)(Ve,{});case`token`:return(0,k.jsx)(qe,{});case`network`:return(0,k.jsx)(He,{});case`address`:return(0,k.jsx)(yt,{});case`processing`:return(0,k.jsx)(Ge,{});case`complete`:return(0,k.jsx)(Le,{});case`refunded`:return(0,k.jsx)(Ke,{});case`failed`:return(0,k.jsx)(ze,{});case`error`:return(0,k.jsx)(Re,{});default:return null}}var St={component:()=>{let{onUserCloseViaDialogOrKeybindRef:e}=fe(),t=m(),{close:n,config:r}=p();return(0,A.useEffect)((()=>{e.current=n}),[e,n]),(0,A.useEffect)((()=>{if(r.status===`ready`){for(let e of r.data.currencies)new Image().src=e.logoURI;for(let e of Object.values(r.data.chains))new Image().src=e.iconUrl}}),[r]),t?(0,k.jsx)(bt,{}):null}};export{St as default};