import{o as e}from"./rolldown-runtime-C_JxhDyB.js";import{n as t,t as n}from"./jsx-runtime-DC0n_eUu.js";import"./context-CwQoLGKR-BSFDTGHb.js";import{E as r,T as i,Wt as a,_n as o,cn as s,lt as c,nn as l}from"./useActiveWallet-CvmN8neg-DoXjHuV7.js";import{Ut as u,c as d}from"./index-CI5i05P9.js";import{c as f}from"./ModalHeader-YbJk-YIQ-CaZMzS4t.js";import{t as p}from"./Screen-CdOj1bUg-_oOa3iGZ.js";import{a as m}from"./Layouts-BlFm53ED-CksTU9pN.js";import{a as h,d as g,n as _,o as v,s as y}from"./shared-Mx6bnMlK-Csl0F6IN.js";import{t as b}from"./ShieldCheckIcon-Bu3mAVqr.js";var x=n(),S=e(t(),1);c();var C={component:()=>{let[e,t]=(0,S.useState)(!0),{authenticated:n,user:r}=s(),{walletProxy:i,closePrivyModal:c,createAnalyticsEvent:f,client:C}=o(),{navigate:D,data:O,onUserCloseViaDialogOrKeybindRef:k}=u(),[A,j]=(0,S.useState)(void 0),[M,N]=(0,S.useState)(``),[P,F]=(0,S.useState)(!1),{entropyId:I,entropyIdVerifier:L,onCompleteNavigateTo:R,onSuccess:z,onFailure:B}=O.recoverWallet,V=(e=`User exited before their wallet could be recovered`)=>{c({shouldCallAuthOnSuccess:!1}),B(typeof e==`string`?new a(e):e)};return k.current=V,(0,S.useEffect)((()=>{if(!n)return V(`User must be authenticated and have a Privy wallet before it can be recovered`)}),[n]),(0,x.jsxs)(p,{children:[(0,x.jsx)(p.Header,{icon:b,title:`Enter your password`,subtitle:`Please provision your account on this new device. To continue, enter your recovery password.`,showClose:!0,onClose:V}),(0,x.jsx)(p.Body,{children:(0,x.jsx)(w,{children:(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(h,{children:[(0,x.jsx)(v,{type:e?`password`:`text`,onChange:e=>(e=>{e&&j(e)})(e.target.value),disabled:P,style:{paddingRight:`2.3rem`}}),(0,x.jsx)(g,{style:{right:`0.75rem`},children:e?(0,x.jsx)(_,{onClick:()=>t(!1)}):(0,x.jsx)(y,{onClick:()=>t(!0)})})]}),!!M&&(0,x.jsx)(T,{children:M})]})})}),(0,x.jsxs)(p.Footer,{children:[(0,x.jsx)(p.HelpText,{children:(0,x.jsxs)(m,{children:[(0,x.jsx)(`h4`,{children:`Why is this necessary?`}),(0,x.jsx)(`p`,{children:`You previously set a password for this wallet. This helps ensure only you can access it`})]})}),(0,x.jsx)(p.Actions,{children:(0,x.jsx)(E,{loading:P||!i,disabled:!A,onClick:async()=>{F(!0);let e=await C.getAccessToken(),t=l(r,I);if(!e||!t||A===null)return V(`User must be authenticated and have a Privy wallet before it can be recovered`);try{f({eventName:`embedded_wallet_recovery_started`,payload:{walletAddress:t.address}}),await i?.recover({accessToken:e,entropyId:I,entropyIdVerifier:L,recoveryPassword:A}),N(``),R?D(R):c({shouldCallAuthOnSuccess:!1}),z?.(t),f({eventName:`embedded_wallet_recovery_completed`,payload:{walletAddress:t.address}})}catch(e){d(e)?N(`Invalid recovery password, please try again.`):N(`An error has occurred, please try again.`)}finally{F(!1)}},$hideAnimations:!I&&P,children:`Recover your account`})}),(0,x.jsx)(p.Watermark,{})]})]})}},w=r.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,T=r.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,E=r(f)`
  ${({$hideAnimations:e})=>e&&i`
      && {
        // Remove animations because the recoverWallet task on the iframe partially
        // blocks the renderer, so the animation stutters and doesn't look good
        transition: none;
      }
    `}
`;export{C as PasswordRecoveryScreen,C as default};