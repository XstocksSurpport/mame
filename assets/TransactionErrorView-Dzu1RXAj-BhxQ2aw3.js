import{o as e}from"./rolldown-runtime-C_JxhDyB.js";import{n as t,t as n}from"./jsx-runtime-DC0n_eUu.js";import{C as r}from"./context-CwQoLGKR-BSFDTGHb.js";import{E as i,_n as a,y as o}from"./useActiveWallet-CvmN8neg-DoXjHuV7.js";import{Nn as s}from"./ccip-AREX0pQ9.js";import{t as c}from"./formatters-CDS34xfr.js";import{Xn as l}from"./index-CI5i05P9.js";import{a as u,c as d,f,i as p,l as m,r as h}from"./ModalHeader-YbJk-YIQ-CaZMzS4t.js";import{t as ee}from"./ChevronDownIcon-hcBPiu2c.js";import{t as g}from"./ErrorMessage-D8VaAP5m-t3mVQHs6.js";import{a as _,i as v,n as y,r as b,t as x}from"./Value-tcJV9e0L-DBbMEIU3.js";import{t as S}from"./LoadingSkeleton-U6-3yFwI-CVMT3v3v.js";import{t as te}from"./Subtitle-CV-2yKE4-D4auC_vJ.js";import{t as ne}from"./Title-BnzYV3Is-CkgtJIX6.js";import{t as C}from"./shared-FM0rljBt-BC3yzL_s.js";import{t as w}from"./Address-Wk5-LLxD-D30eoFDO.js";import{t as T}from"./LabelXs-oqZNqbm_-B4WhIDwT.js";import{t as E}from"./WalletInfoCard-CHPsZtT1-7Y0Z8Ok-.js";import{t as D}from"./WarningBanner-D5LqDt95-lXGHdgbn.js";import{n as O,t as k}from"./ClipboardDocumentCheckIcon-BUFCOyQh.js";import{t as A}from"./ExclamationCircleIcon-CCR9yOTU.js";import{t as j}from"./ErrorBanner-CQERa7bL-CBTybJhN.js";var M=e(t());function N({title:e,titleId:t,...n},r){return M.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?M.createElement(`title`,{id:t},e):null,M.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z`}))}var re=M.forwardRef(N),P=n();function F({title:e,titleId:t,...n},r){return M.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?M.createElement(`title`,{id:t},e):null,M.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z`}))}var I=M.forwardRef(F),L=i(x)`
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: var(--privy-color-accent);
  svg {
    fill: var(--privy-color-accent);
  }
`,R=({iconUrl:e,value:t,symbol:n,usdValue:r,nftName:i,nftCount:a,decimals:o,$isLoading:s})=>{if(s)return(0,P.jsx)(z,{$isLoading:s});let c=t&&r&&o?function(e,t,n){let r=parseFloat(e),i=parseFloat(n);if(r===0||i===0||Number.isNaN(r)||Number.isNaN(i))return e;let a=Math.ceil(-Math.log10(.01/(i/r))),o=10**(a=Math.max(a=Math.min(a,t),1)),s=+(Math.floor(r*o)/o).toFixed(a).replace(/\.?0+$/,``);return Intl.NumberFormat(void 0,{maximumFractionDigits:t}).format(s)}(t,o,r):t;return(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(z,{$isLoading:s,children:[e&&(0,P.jsx)(V,{src:e,alt:`Token icon`}),a&&a>1?a+`x`:void 0,` `,i,c,` `,n]}),r&&(0,P.jsxs)(B,{$isLoading:s,children:[`$`,r]})]})},z=i.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  ${S}
`,B=i.span`
  color: var(--privy-color-foreground-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  ${S}
`,V=i.img`
  height: 14px;
  width: 14px;
  margin-right: 4px;
  object-fit: contain;
`,ie=e=>{let{chain:t,transactionDetails:n,isTokenContractInfoLoading:r,symbol:i}=e,{action:a,functionName:o}=n;return(0,P.jsx)(C,{children:(0,P.jsxs)(_,{children:[a!==`transaction`&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Action`}),(0,P.jsx)(y,{children:o})]}),o===`mint`&&`args`in n&&n.args.filter((e=>e)).map(((e,n)=>(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Param ${n}`}),(0,P.jsx)(y,{children:typeof e==`string`&&s(e)?(0,P.jsx)(w,{address:e,url:t?.blockExplorers?.default?.url,showCopyIcon:!1}):e?.toString()})]},n))),o===`setApprovalForAll`&&n.operator&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Operator`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:n.operator,url:t?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),o===`setApprovalForAll`&&n.approved!==void 0&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Set approval to`}),(0,P.jsx)(y,{children:n.approved?`true`:`false`})]}),o===`transfer`||o===`transferWithMemo`||o===`transferFrom`||o===`safeTransferFrom`||o===`approve`?(0,P.jsxs)(P.Fragment,{children:[`formattedAmount`in n&&n.formattedAmount&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Amount`}),(0,P.jsxs)(y,{$isLoading:r,children:[n.formattedAmount,` `,i]})]}),`tokenId`in n&&n.tokenId&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Token ID`}),(0,P.jsx)(y,{children:n.tokenId.toString()})]})]}):null,o===`safeBatchTransferFrom`&&(0,P.jsxs)(P.Fragment,{children:[`amounts`in n&&n.amounts&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Amounts`}),(0,P.jsx)(y,{children:n.amounts.join(`, `)})]}),`tokenIds`in n&&n.tokenIds&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Token IDs`}),(0,P.jsx)(y,{children:n.tokenIds.join(`, `)})]})]}),o===`approve`&&n.spender&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Spender`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:n.spender,url:t?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),(o===`transferFrom`||o===`safeTransferFrom`||o===`safeBatchTransferFrom`)&&n.transferFrom&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Transferring from`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:n.transferFrom,url:t?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),(o===`transferFrom`||o===`safeTransferFrom`||o===`safeBatchTransferFrom`)&&n.transferTo&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Transferring to`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:n.transferTo,url:t?.blockExplorers?.default?.url,showCopyIcon:!1})})]})]})})},ae=({variant:e,setPreventMaliciousTransaction:t,colorScheme:n=`light`,preventMaliciousTransaction:r})=>e===`warn`?(0,P.jsx)(H,{children:(0,P.jsxs)(D,{theme:n,children:[(0,P.jsx)(`span`,{style:{fontWeight:`500`},children:`Warning: Suspicious transaction`}),(0,P.jsx)(`br`,{}),`This has been flagged as a potentially deceptive request. Approving could put your assets or funds at risk.`]})}):e===`error`?(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(H,{children:[(0,P.jsx)(j,{theme:n,children:(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`strong`,{children:`This is a malicious transaction`}),(0,P.jsx)(`br`,{}),`This transaction transfers tokens to a known malicious address. Proceeding may result in the loss of valuable assets.`]})}),(0,P.jsxs)(U,{children:[(0,P.jsx)(O,{color:`var(--privy-color-error)`,checked:!r,readOnly:!0,onClick:()=>t(!r)}),(0,P.jsx)(`span`,{children:`I understand and want to proceed anyways.`})]})]})}):null,H=i.div`
  margin-top: 1.5rem;
`,U=i.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`,oe=({transactionIndex:e,maxIndex:t})=>typeof e!=`number`||t===0?``:` (${e+1} / ${t+1})`,se=({img:e,submitError:t,prepareError:n,onClose:i,action:a,title:s,subtitle:c,to:l,tokenAddress:u,network:S,missingFunds:C,fee:T,from:E,cta:D,disabled:O,chain:k,isSubmitting:A,isPreparing:j,isTokenPriceLoading:N,isTokenContractInfoLoading:F,isSponsored:I,symbol:z,balance:B,onClick:V,transactionDetails:H,transactionIndex:U,maxIndex:se,onBack:ce,chainName:G,validation:K,hasScanDetails:q,setIsScanDetailsOpen:pe,preventMaliciousTransaction:me,setPreventMaliciousTransaction:he,tokensSent:J,tokensReceived:Y,isScanning:ge,isCancellable:_e,functionName:X})=>{let{showTransactionDetails:Z,setShowTransactionDetails:Q,hasMoreDetails:ve,isErc20Ish:$}=(e=>{let[t,n]=(0,M.useState)(!1),r=!0,i=!1;return(!e||e.isErc20Ish||e.action===`transaction`)&&(r=!1),r&&(i=Object.entries(e||{}).some((([e,t])=>t&&![`action`,`isErc20Ish`,`isNFTIsh`].includes(e)))),{showTransactionDetails:t,setShowTransactionDetails:n,hasMoreDetails:r&&i,isErc20Ish:e?.isErc20Ish}})(H),ye=r(),be=$&&F||j||N||ge;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(h,{onClose:i,backFn:ce}),e&&(0,P.jsx)(ue,{children:e}),(0,P.jsxs)(ne,{style:{marginTop:e?`1.5rem`:0},children:[s,(0,P.jsx)(oe,{maxIndex:se,transactionIndex:U})]}),(0,P.jsx)(te,{children:c}),(0,P.jsxs)(_,{style:{marginTop:`2rem`},children:[(!!J[0]||be)&&(0,P.jsxs)(v,{children:[Y.length>0?(0,P.jsx)(x,{children:`Send`}):(0,P.jsx)(x,{children:a===`approve`?`Approval amount`:`Amount`}),(0,P.jsx)(`div`,{className:`flex flex-col`,children:J.map(((e,t)=>(0,P.jsx)(R,{iconUrl:e.iconUrl,value:X===`setApprovalForAll`?`All`:e.value,usdValue:e.usdValue,symbol:e.symbol,nftName:e.nftName,nftCount:e.nftCount,decimals:e.decimals},t)))})]}),Y.length>0&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Receive`}),(0,P.jsx)(`div`,{className:`flex flex-col`,children:Y.map(((e,t)=>(0,P.jsx)(R,{iconUrl:e.iconUrl,value:e.value,usdValue:e.usdValue,symbol:e.symbol,nftName:e.nftName,nftCount:e.nftCount,decimals:e.decimals},t)))})]}),H&&`spender`in H&&H?.spender?(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Spender`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:H.spender,url:k?.blockExplorers?.default?.url})})]}):null,l&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`To`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:l,url:k?.blockExplorers?.default?.url,showCopyIcon:!0})})]}),u&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Token address`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:u,url:k?.blockExplorers?.default?.url})})]}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Network`}),(0,P.jsx)(y,{children:S})]}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Estimated fee`}),(0,P.jsx)(y,{$isLoading:j||N||I===void 0,children:I?(0,P.jsxs)(de,{children:[(0,P.jsxs)(fe,{children:[`Sponsored by `,ye.name]}),(0,P.jsx)(re,{height:16,width:16})]}):T})]}),ve&&!q&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(v,{className:`cursor-pointer`,onClick:()=>Q(!Z),children:(0,P.jsxs)(b,{className:`flex items-center gap-x-1`,children:[`Details`,` `,(0,P.jsx)(ee,{style:{width:`0.75rem`,marginLeft:`0.25rem`,transform:Z?`rotate(180deg)`:void 0}})]})}),Z&&H&&(0,P.jsx)(ie,{action:a,chain:k,transactionDetails:H,isTokenContractInfoLoading:F,symbol:z})]}),q&&(0,P.jsx)(v,{children:(0,P.jsxs)(L,{onClick:()=>pe(!0),children:[(0,P.jsx)(`span`,{className:`text-color-primary`,children:`Details`}),(0,P.jsx)(f,{height:`14px`,width:`14px`,strokeWidth:`2`})]})})]}),(0,P.jsx)(o,{}),t?(0,P.jsx)(g,{style:{marginTop:`2rem`},children:t.message}):n&&U===0?(0,P.jsx)(g,{style:{marginTop:`2rem`},children:n.shortMessage??le}):null,(0,P.jsx)(ae,{variant:K,preventMaliciousTransaction:me,setPreventMaliciousTransaction:he}),(0,P.jsx)(W,{$useSmallMargins:!(!n&&!t&&K!==`warn`&&K!==`error`),address:E,balance:B,errMsg:j||n||t||!C?void 0:`Add funds on ${k?.name??G} to complete transaction.`}),(0,P.jsx)(d,{style:{marginTop:`1rem`},loading:A,disabled:O||j,onClick:V,children:D}),_e&&(0,P.jsx)(p,{style:{marginTop:`1rem`},onClick:i,isSubmitting:!1,children:`Not now`}),(0,P.jsx)(m,{})]})},ce=({img:e,title:t,subtitle:n,cta:i,instructions:a,network:s,blockExplorerUrl:l,isMissingFunds:u,submitError:f,parseError:p,total:b,swap:S,transactingWalletAddress:C,fee:E,balance:D,disabled:O,isSubmitting:k,isPreparing:A,isTokenPriceLoading:j,onClick:N,onClose:F,onBack:I,isSponsored:R})=>{let z=A||j,[B,V]=(0,M.useState)(!1),ie=r();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(h,{onClose:F,backFn:I}),e&&(0,P.jsx)(ue,{children:e}),(0,P.jsx)(ne,{style:{marginTop:e?`1.5rem`:0},children:t}),(0,P.jsx)(te,{children:n}),(0,P.jsxs)(_,{style:{marginTop:`2rem`,marginBottom:`.5rem`},children:[(b||z)&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Amount`}),(0,P.jsx)(y,{$isLoading:z,children:b})]}),S&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Swap`}),(0,P.jsx)(y,{children:S})]}),s&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Network`}),(0,P.jsx)(y,{children:s})]}),(E||z||R!==void 0)&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Estimated fee`}),(0,P.jsx)(y,{$isLoading:z,children:R&&!z?(0,P.jsxs)(de,{children:[(0,P.jsxs)(fe,{children:[`Sponsored by `,ie.name]}),(0,P.jsx)(re,{height:16,width:16})]}):E})]})]}),(0,P.jsx)(v,{children:(0,P.jsxs)(L,{onClick:()=>V((e=>!e)),children:[(0,P.jsx)(`span`,{children:`Advanced`}),(0,P.jsx)(ee,{height:`16px`,width:`16px`,strokeWidth:`2`,style:{transition:`all 300ms`,transform:B?`rotate(180deg)`:void 0}})]})}),B&&(0,P.jsx)(P.Fragment,{children:a.map(((e,t)=>e.type===`sol-transfer`?(0,P.jsxs)(G,{children:[(0,P.jsx)(v,{children:(0,P.jsxs)(T,{children:[`Transfer `,e.withSeed?`with seed`:``]})}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Amount`}),(0,P.jsxs)(y,{children:[c({amount:e.value,decimals:e.token.decimals}),` `,e.token.symbol]})]}),!!e.toAccount&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Destination`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.toAccount,url:l})})]})]},t):e.type===`spl-transfer`?(0,P.jsxs)(G,{children:[(0,P.jsx)(v,{children:(0,P.jsxs)(T,{children:[`Transfer `,e.token.symbol]})}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Amount`}),(0,P.jsx)(y,{children:e.value.toString()})]}),!!e.fromAta&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Source`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.fromAta,url:l})})]}),!!e.toAta&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Destination`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.toAta,url:l})})]}),!!e.token.address&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Token`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.token.address,url:l})})]})]},t):e.type===`ata-creation`?(0,P.jsxs)(G,{children:[(0,P.jsx)(v,{children:(0,P.jsx)(T,{children:`Create token account`})}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Program ID`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.program,url:l})})]}),!!e.owner&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Owner`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.owner,url:l})})]})]},t):e.type===`create-account`?(0,P.jsxs)(G,{children:[(0,P.jsx)(v,{children:(0,P.jsxs)(T,{children:[`Create account `,e.withSeed?`with seed`:``]})}),!!e.account&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Account`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.account,url:l})})]}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Amount`}),(0,P.jsxs)(y,{children:[c({amount:e.value,decimals:9}),` SOL`]})]})]},t):e.type===`spl-init-account`?(0,P.jsxs)(G,{children:[(0,P.jsx)(v,{children:(0,P.jsx)(T,{children:`Initialize token account`})}),!!e.account&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Account`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.account,url:l})})]}),!!e.mint&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Mint`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.mint,url:l})})]}),!!e.owner&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Owner`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.owner,url:l})})]})]},t):e.type===`spl-close-account`?(0,P.jsxs)(G,{children:[(0,P.jsx)(v,{children:(0,P.jsx)(T,{children:`Close token account`})}),!!e.source&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Source`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.source,url:l})})]}),!!e.destination&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Destination`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.destination,url:l})})]}),!!e.owner&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Owner`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.owner,url:l})})]})]},t):e.type===`spl-sync-native`?(0,P.jsxs)(G,{children:[(0,P.jsx)(v,{children:(0,P.jsx)(T,{children:`Sync native`})}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Program ID`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.program,url:l})})]})]},t):e.type===`raydium-swap-base-input`?(0,P.jsxs)(G,{children:[(0,P.jsx)(v,{children:(0,P.jsxs)(T,{children:[`Raydium swap`,` `,e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:``]})}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Amount in`}),(0,P.jsx)(y,{children:e.amountIn.toString()})]}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Minimum amount out`}),(0,P.jsx)(y,{children:e.minimumAmountOut.toString()})]}),e.mintIn&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Token in`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.mintIn,url:l})})]}),e.mintOut&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Token out`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.mintOut,url:l})})]})]},t):e.type===`raydium-swap-base-output`?(0,P.jsxs)(G,{children:[(0,P.jsx)(v,{children:(0,P.jsxs)(T,{children:[`Raydium swap`,` `,e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:``]})}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Max amount in`}),(0,P.jsx)(y,{children:e.maxAmountIn.toString()})]}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Amount out`}),(0,P.jsx)(y,{children:e.amountOut.toString()})]}),e.mintIn&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Token in`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.mintIn,url:l})})]}),e.mintOut&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Token out`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.mintOut,url:l})})]})]},t):e.type===`jupiter-swap-shared-accounts-route`?(0,P.jsxs)(G,{children:[(0,P.jsx)(v,{children:(0,P.jsxs)(T,{children:[`Jupiter swap`,` `,e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:``]})}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`In amount`}),(0,P.jsx)(y,{children:e.inAmount.toString()})]}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Quoted out amount`}),(0,P.jsx)(y,{children:e.quotedOutAmount.toString()})]}),e.mintIn&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Token in`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.mintIn,url:l})})]}),e.mintOut&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Token out`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.mintOut,url:l})})]})]},t):e.type===`jupiter-swap-exact-out-route`?(0,P.jsxs)(G,{children:[(0,P.jsx)(v,{children:(0,P.jsxs)(T,{children:[`Jupiter swap`,` `,e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:``]})}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Quoted in amount`}),(0,P.jsx)(y,{children:e.quotedInAmount.toString()})]}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Amount out`}),(0,P.jsx)(y,{children:e.outAmount.toString()})]}),e.mintIn&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Token in`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.mintIn,url:l})})]}),e.mintOut&&(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Token out`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.mintOut,url:l})})]})]},t):(0,P.jsxs)(G,{children:[(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Program ID`}),(0,P.jsx)(y,{children:(0,P.jsx)(w,{address:e.program,url:l})})]}),(0,P.jsxs)(v,{children:[(0,P.jsx)(x,{children:`Data`}),(0,P.jsx)(y,{children:e.discriminator})]})]},t)))}),(0,P.jsx)(o,{}),f?(0,P.jsx)(g,{style:{marginTop:`2rem`},children:f.message}):p?(0,P.jsx)(g,{style:{marginTop:`2rem`},children:le}):null,(0,P.jsx)(W,{$useSmallMargins:!(!p&&!f),title:``,address:C,balance:D,errMsg:A||p||f||!u?void 0:`Add funds on Solana to complete transaction.`}),(0,P.jsx)(d,{style:{marginTop:`1rem`},loading:k,disabled:O||A,onClick:N,children:i}),(0,P.jsx)(m,{})]})},W=i(E)`
  ${e=>e.$useSmallMargins?`margin-top: 0.5rem;`:`margin-top: 2rem;`}
`,G=i(_)`
  margin-top: 0.5rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-sm);
  padding: 0.5rem;
`,le=`There was an error preparing your transaction. Your transaction request will likely fail.`,ue=i.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-height: 40px;

  > img {
    object-fit: contain;
    border-radius: var(--privy-border-radius-sm);
  }
`,de=i.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
`,fe=i.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,K=e=>e?.code===l.COMPLIANCE_BLOCKED,q=()=>(0,P.jsxs)(Y,{children:[(0,P.jsx)(_e,{}),(0,P.jsx)(ge,{})]}),pe=({transactionError:e,chainId:t,onClose:n,onRetry:r,chainType:i,transactionHash:o})=>{let{chains:s}=a(),[c,l]=(0,M.useState)(!1),{errorCode:d,errorMessage:f}=((e,t)=>{if(t===`ethereum`)return K(e)?{errorCode:`Transaction blocked`,errorMessage:e.message}:{errorCode:e.details??e.message,errorMessage:e.shortMessage};let n=e.txSignature,r=e?.transactionMessage||`Something went wrong.`;if(Array.isArray(e.logs)){let t=e.logs.find((e=>/insufficient (lamports|funds)/gi.test(e)));t&&(r=t)}return{transactionHash:n,errorMessage:r}})(e,i),p=K(e),m=(({chains:e,chainId:t,chainType:n,transactionHash:r})=>n===`ethereum`?e.find((e=>e.id===t))?.blockExplorers?.default.url??`https://etherscan.io`:function(e,t){return`https://explorer.solana.com/tx/${e}?chain=${t}`}(r||``,t))({chains:s,chainId:t,chainType:i,transactionHash:o});return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(h,{onClose:n}),(0,P.jsxs)(me,{children:[(0,P.jsx)(q,{}),(0,P.jsx)(he,{children:d}),(0,P.jsx)(J,{children:p?`This transaction cannot be completed.`:`Please try again.`}),(0,P.jsxs)(Q,{children:[(0,P.jsx)(Z,{children:`Error message`}),(0,P.jsx)($,{$clickable:!1,children:f})]}),o&&(0,P.jsxs)(Q,{children:[(0,P.jsx)(Z,{children:`Transaction hash`}),(0,P.jsxs)(ve,{children:[`Copy this hash to view details about the transaction on a`,` `,(0,P.jsx)(`u`,{children:(0,P.jsx)(`a`,{href:m,children:`block explorer`})}),`.`]}),(0,P.jsxs)($,{$clickable:!0,onClick:async()=>{await navigator.clipboard.writeText(o),l(!0)},children:[o,(0,P.jsx)(xe,{clicked:c})]})]}),!p&&(0,P.jsx)(X,{onClick:()=>r({resetNonce:!!o}),children:`Retry transaction`})]}),(0,P.jsx)(u,{})]})},me=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,he=i.span`
  color: var(--privy-color-foreground);
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem; /* 111.111% */
  text-align: center;
  margin: 10px;
`,J=i.span`
  margin-top: 4px;
  margin-bottom: 10px;
  color: var(--privy-color-foreground-3);
  text-align: center;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.008px;
`,Y=i.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,ge=i(A)`
  position: absolute;
  width: 35px;
  height: 35px;
  color: var(--privy-color-error);
`,_e=i.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--privy-color-error);
  opacity: 0.1;
`,X=i(d)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`,Z=i.span`
  width: 100%;
  text-align: left;
  font-size: 0.825rem;
  color: var(--privy-color-foreground);
  padding: 4px;
`,Q=i.div`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ve=i.text`
  position: relative;
  width: 100%;
  padding: 5px;
  font-size: 0.8rem;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
`,$=i.span`
  position: relative;
  width: 100%;
  background-color: var(--privy-color-background-2);
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 14px;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
  ${e=>e.$clickable&&`cursor: pointer;
  transition: background-color 0.3s;
  padding-right: 45px;

  &:hover {
    background-color: var(--privy-color-foreground-4);
  }`}
`,ye=i(I)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,be=i(k)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,xe=({clicked:e})=>(0,P.jsx)(e?be:ye,{});export{se as n,pe as r,ce as t};