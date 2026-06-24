import{o as e}from"./rolldown-runtime-C_JxhDyB.js";import{n as t,t as n}from"./jsx-runtime-DC0n_eUu.js";import{E as r}from"./useActiveWallet-CvmN8neg-DoXjHuV7.js";import{t as i}from"./chevron-down-DjtIm51S.js";import{M as a}from"./index-CI5i05P9.js";import{t as o}from"./ScreenLayout-Ce16-u0i-CBEHZuxc.js";var s=n(),c=e(t(),1),l=({currency:e=`usd`,value:t,onChange:n,inputMode:r=`decimal`,autoFocus:i})=>{let[o,l]=(0,c.useState)(`0`),u=(0,c.useRef)(null),p=t??o,m=a[e]?.symbol??`$`,h=(0,c.useCallback)((e=>{let t=e.target.value,r=(t=t.replace(/[^\d.]/g,``)).split(`.`);r.length>2&&(t=r[0]+`.`+r.slice(1).join(``)),r.length===2&&r[1].length>2&&(t=`${r[0]}.${r[1].slice(0,2)}`),t.length>1&&t[0]===`0`&&t[1]!==`.`&&(t=t.slice(1)),(t===``||t===`.`)&&(t=`0`),n?n(t):l(t)}),[n]),g=(0,c.useCallback)((e=>{!([`Delete`,`Backspace`,`Tab`,`Escape`,`Enter`,`.`,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)||(e.ctrlKey||e.metaKey)&&[`a`,`c`,`v`,`x`].includes(e.key.toLowerCase()))&&(e.key>=`0`&&e.key<=`9`||e.preventDefault())}),[]),_=(0,c.useMemo)((()=>(p.includes(`.`),p)),[p]);return(0,s.jsxs)(d,{onClick:()=>u.current?.focus(),children:[(0,s.jsx)(f,{children:m}),_,(0,s.jsx)(`input`,{ref:u,type:`text`,inputMode:r,value:_,onChange:h,onKeyDown:g,autoFocus:i,placeholder:`0`,style:{width:1,height:`1rem`,opacity:0,alignSelf:`center`,fontSize:`1rem`}}),(0,s.jsx)(f,{style:{opacity:0},children:m})]})},u=({selectedAsset:e,onEditSourceAsset:t})=>{let{icon:n}=a[e];return(0,s.jsxs)(p,{onClick:t,children:[(0,s.jsx)(m,{children:n}),(0,s.jsx)(h,{children:e.toLocaleUpperCase()}),(0,s.jsx)(g,{children:(0,s.jsx)(i,{})})]})},d=r.span`
  background-color: var(--privy-color-background);
  width: 100%;
  text-align: center;
  border: none;
  font-kerning: none;
  font-feature-settings: 'calt' off;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  && {
    color: var(--privy-color-foreground);
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 5.375rem;
  }
`,f=r.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  margin-top: 0.75rem;
`,p=r.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  gap: 0.5rem;
  border: 1px solid var(--privy-color-border-default);
  border-radius: var(--privy-border-radius-full);

  && {
    margin: auto;
    padding: 0.5rem 1rem;
  }
`,m=r.div`
  svg {
    width: 1rem;
    height: 1rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`,h=r.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`,g=r.div`
  color: var(--privy-color-foreground);

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,_=({opts:e,isLoading:t,onSelectSource:n})=>(0,s.jsx)(o,{showClose:!1,showBack:!0,onBack:()=>n(e.source.selectedAsset),title:`Select currency`,children:(0,s.jsx)(v,{children:e.source.assets.map((e=>{let{icon:r,name:i}=a[e];return(0,s.jsx)(y,{onClick:()=>n(e),disabled:t,children:(0,s.jsxs)(b,{children:[(0,s.jsx)(x,{children:r}),(0,s.jsxs)(S,{children:[(0,s.jsx)(C,{children:i}),(0,s.jsx)(w,{children:e.toLocaleUpperCase()})]})]})},e)}))})}),v=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-height: 20.875rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,y=r.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;

  && {
    padding: 0.75rem 1rem;
  }
`,b=r.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,x=r.div`
  svg {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`,S=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
`,C=r.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`,w=r.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
`;export{u as n,_ as r,l as t};