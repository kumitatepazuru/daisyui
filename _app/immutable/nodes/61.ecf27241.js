import{S as Xa,i as Za,s as en,M as ma,y as u,z as m,A as h,U as tn,$ as Ka,g as $,d as g,B as y,Y as Qa,a as l,q as p,k as n,c as i,r as d,l as s,m as r,h as a,n as o,b as _e,E as e,F as an}from"../chunks/index.b33eaa49.js";import{M as nn}from"../chunks/mdsvex.6b1cfd2f.js";import{T as k}from"../chunks/Translate.fb2688b6.js";function sn(xe){let c,S,w,D,f,B=`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>

  <span class="token comment">// add daisyUI plugin</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// daisyUI config (optional - here are the default values)</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]</span>
    <span class="token literal-property property">darkTheme</span><span class="token operator">:</span> <span class="token string">"dark"</span><span class="token punctuation">,</span> <span class="token comment">// name of one of the included themes for dark mode</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// applies background color and foreground color for root element by default</span>
    <span class="token literal-property property">styled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// include daisyUI colors and design decisions for all components</span>
    <span class="token literal-property property">utils</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// adds responsive and modifier utility classes</span>
    <span class="token literal-property property">rtl</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install &#96;tailwindcss-flip&#96; plugin for Tailwind CSS.</span>
    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)</span>
    <span class="token literal-property property">logs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Shows info about daisyUI version and used config in the console when building your CSS</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

  <span class="token comment">//...</span>
<span class="token punctuation">&#125;</span></code>`,K,U,O,Ee,at,Q,nt,Ze,b,A,V,j,we,st,rt,ot,De,Oe,lt,it,X,pt,Z,dt,x,ee,M,Ie,ct,ft,ut,je,Me,mt,ht,te,$t,ae,gt,ne,yt,se,bt,H,re,q,Se,kt,vt,_t,qe,Re,xt,Et,oe,wt,L,le,R,Ae,It,St,At,Ye,Fe,Pt,Ct,ie,Bt,T,pe,Y,Pe,Ut,Ht,Lt,ze,We,Tt,Nt,de,Dt,P,ce,F,Ce,Ot,jt,Mt,Ge,Je,qt,Rt,fe,Yt,ue,Ft,N,me,z,Be,zt,Wt,Gt,Ke,Qe,Jt,Kt,he,Qt,v,$e,W,Ue,Vt,Xt,Zt,Ve,Xe,ea,ta,ge,aa,ye,na,be,sa,ke,ra,ve,et;return c=new k({props:{text:"daisyUI can be configured from your <code>tailwind.config.js</code> file."}}),w=new k({props:{text:"Default config"}}),Q=new k({props:{text:"Config values explained"}}),X=new k({props:{text:"If it's true, components will have colors and style so you won't need to design anything."}}),Z=new k({props:{text:"If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton."}}),te=new k({props:{text:"If it's true, all themes will be included."}}),ae=new k({props:{text:"If it's false, only light and dark themes will be available."}}),ne=new k({props:{text:"If it's an array, only themes in the array will be included and the first theme will be the default theme."}}),se=new k({props:{text:"Read more about <a href='/docs/themes'>themes</a>."}}),oe=new k({props:{text:"If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added."}}),ie=new k({props:{text:"If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added."}}),de=new k({props:{text:"If it's true, daisyUI shows logs in the terminal while CSS is building."}}),fe=new k({props:{text:"If it's true, your theme will be right-to-left. You need to add <code>dir='rtl'</code> to your body tag."}}),ue=new k({props:{text:"If you're using daisyUI with RTL option, I suggest using <a href='https://github.com/cvrajeesh/tailwindcss-flip'>tailwindcss-flip</a> plugin because to flip all your Tailwind utilities automatically."}}),he=new k({props:{text:"Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme."}}),ge=new k({props:{text:"Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes)."}}),ye=new k({props:{text:"For example: <code>btn</code> will become <code>prefix-btn</code>."}}),be=new k({props:{text:"If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts."}}),ke=new k({props:{text:"Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes."}}),ve=new k({props:{text:"If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>."}}),{c(){u(c.$$.fragment),S=l(),u(w.$$.fragment),D=p(`:
`),f=n("pre"),K=l(),U=n("h2"),O=n("a"),Ee=n("span"),at=p("#"),u(Q.$$.fragment),nt=p(":"),Ze=l(),b=n("ul"),A=n("li"),V=n("h3"),j=n("a"),we=n("span"),st=p("#"),rt=p("styled"),ot=l(),De=n("p"),Oe=n("code"),lt=p("Boolean (default: true)"),it=l(),u(X.$$.fragment),pt=l(),u(Z.$$.fragment),dt=l(),x=n("li"),ee=n("h3"),M=n("a"),Ie=n("span"),ct=p("#"),ft=p("themes"),ut=l(),je=n("p"),Me=n("code"),mt=p("Boolean or array (default: true)"),ht=l(),u(te.$$.fragment),$t=l(),u(ae.$$.fragment),gt=l(),u(ne.$$.fragment),yt=l(),u(se.$$.fragment),bt=l(),H=n("li"),re=n("h3"),q=n("a"),Se=n("span"),kt=p("#"),vt=p("base"),_t=l(),qe=n("p"),Re=n("code"),xt=p("Boolean (default: true)"),Et=l(),u(oe.$$.fragment),wt=l(),L=n("li"),le=n("h3"),R=n("a"),Ae=n("span"),It=p("#"),St=p("utils"),At=l(),Ye=n("p"),Fe=n("code"),Pt=p("Boolean (default: true)"),Ct=l(),u(ie.$$.fragment),Bt=l(),T=n("li"),pe=n("h3"),Y=n("a"),Pe=n("span"),Ut=p("#"),Ht=p("logs"),Lt=l(),ze=n("p"),We=n("code"),Tt=p("Boolean (default: true)"),Nt=l(),u(de.$$.fragment),Dt=l(),P=n("li"),ce=n("h3"),F=n("a"),Ce=n("span"),Ot=p("#"),jt=p("rtl"),Mt=l(),Ge=n("p"),Je=n("code"),qt=p("Boolean (default: false)"),Rt=l(),u(fe.$$.fragment),Yt=l(),u(ue.$$.fragment),Ft=l(),N=n("li"),me=n("h3"),z=n("a"),Be=n("span"),zt=p("#"),Wt=p("darkTheme"),Gt=l(),Ke=n("p"),Qe=n("code"),Jt=p('String (default: "dark")'),Kt=l(),u(he.$$.fragment),Qt=l(),v=n("li"),$e=n("h3"),W=n("a"),Ue=n("span"),Vt=p("#"),Xt=p("prefix"),Zt=l(),Ve=n("p"),Xe=n("code"),ea=p('String (default: "")'),ta=l(),u(ge.$$.fragment),aa=l(),u(ye.$$.fragment),na=l(),u(be.$$.fragment),sa=l(),u(ke.$$.fragment),ra=l(),u(ve.$$.fragment),this.h()},l(t){m(c.$$.fragment,t),S=i(t),m(w.$$.fragment,t),D=d(t,`:
`),f=s(t,"PRE",{class:!0});var C=r(f);C.forEach(a),K=i(t),U=s(t,"H2",{id:!0});var tt=r(U);O=s(tt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ha=r(O);Ee=s(ha,"SPAN",{class:!0});var $a=r(Ee);at=d($a,"#"),$a.forEach(a),ha.forEach(a),m(Q.$$.fragment,tt),nt=d(tt,":"),tt.forEach(a),Ze=i(t),b=s(t,"UL",{});var _=r(b);A=s(_,"LI",{});var G=r(A);V=s(G,"H3",{id:!0});var oa=r(V);j=s(oa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ga=r(j);we=s(ga,"SPAN",{class:!0});var ya=r(we);st=d(ya,"#"),ya.forEach(a),ga.forEach(a),rt=d(oa,"styled"),oa.forEach(a),ot=i(G),De=s(G,"P",{});var ba=r(De);Oe=s(ba,"CODE",{});var ka=r(Oe);lt=d(ka,"Boolean (default: true)"),ka.forEach(a),ba.forEach(a),it=i(G),m(X.$$.fragment,G),pt=i(G),m(Z.$$.fragment,G),G.forEach(a),dt=i(_),x=s(_,"LI",{});var I=r(x);ee=s(I,"H3",{id:!0});var la=r(ee);M=s(la,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var va=r(M);Ie=s(va,"SPAN",{class:!0});var _a=r(Ie);ct=d(_a,"#"),_a.forEach(a),va.forEach(a),ft=d(la,"themes"),la.forEach(a),ut=i(I),je=s(I,"P",{});var xa=r(je);Me=s(xa,"CODE",{});var Ea=r(Me);mt=d(Ea,"Boolean or array (default: true)"),Ea.forEach(a),xa.forEach(a),ht=i(I),m(te.$$.fragment,I),$t=i(I),m(ae.$$.fragment,I),gt=i(I),m(ne.$$.fragment,I),yt=i(I),m(se.$$.fragment,I),I.forEach(a),bt=i(_),H=s(_,"LI",{});var He=r(H);re=s(He,"H3",{id:!0});var ia=r(re);q=s(ia,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var wa=r(q);Se=s(wa,"SPAN",{class:!0});var Ia=r(Se);kt=d(Ia,"#"),Ia.forEach(a),wa.forEach(a),vt=d(ia,"base"),ia.forEach(a),_t=i(He),qe=s(He,"P",{});var Sa=r(qe);Re=s(Sa,"CODE",{});var Aa=r(Re);xt=d(Aa,"Boolean (default: true)"),Aa.forEach(a),Sa.forEach(a),Et=i(He),m(oe.$$.fragment,He),He.forEach(a),wt=i(_),L=s(_,"LI",{});var Le=r(L);le=s(Le,"H3",{id:!0});var pa=r(le);R=s(pa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Pa=r(R);Ae=s(Pa,"SPAN",{class:!0});var Ca=r(Ae);It=d(Ca,"#"),Ca.forEach(a),Pa.forEach(a),St=d(pa,"utils"),pa.forEach(a),At=i(Le),Ye=s(Le,"P",{});var Ba=r(Ye);Fe=s(Ba,"CODE",{});var Ua=r(Fe);Pt=d(Ua,"Boolean (default: true)"),Ua.forEach(a),Ba.forEach(a),Ct=i(Le),m(ie.$$.fragment,Le),Le.forEach(a),Bt=i(_),T=s(_,"LI",{});var Te=r(T);pe=s(Te,"H3",{id:!0});var da=r(pe);Y=s(da,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ha=r(Y);Pe=s(Ha,"SPAN",{class:!0});var La=r(Pe);Ut=d(La,"#"),La.forEach(a),Ha.forEach(a),Ht=d(da,"logs"),da.forEach(a),Lt=i(Te),ze=s(Te,"P",{});var Ta=r(ze);We=s(Ta,"CODE",{});var Na=r(We);Tt=d(Na,"Boolean (default: true)"),Na.forEach(a),Ta.forEach(a),Nt=i(Te),m(de.$$.fragment,Te),Te.forEach(a),Dt=i(_),P=s(_,"LI",{});var J=r(P);ce=s(J,"H3",{id:!0});var ca=r(ce);F=s(ca,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Da=r(F);Ce=s(Da,"SPAN",{class:!0});var Oa=r(Ce);Ot=d(Oa,"#"),Oa.forEach(a),Da.forEach(a),jt=d(ca,"rtl"),ca.forEach(a),Mt=i(J),Ge=s(J,"P",{});var ja=r(Ge);Je=s(ja,"CODE",{});var Ma=r(Je);qt=d(Ma,"Boolean (default: false)"),Ma.forEach(a),ja.forEach(a),Rt=i(J),m(fe.$$.fragment,J),Yt=i(J),m(ue.$$.fragment,J),J.forEach(a),Ft=i(_),N=s(_,"LI",{});var Ne=r(N);me=s(Ne,"H3",{id:!0});var fa=r(me);z=s(fa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var qa=r(z);Be=s(qa,"SPAN",{class:!0});var Ra=r(Be);zt=d(Ra,"#"),Ra.forEach(a),qa.forEach(a),Wt=d(fa,"darkTheme"),fa.forEach(a),Gt=i(Ne),Ke=s(Ne,"P",{});var Ya=r(Ke);Qe=s(Ya,"CODE",{});var Fa=r(Qe);Jt=d(Fa,'String (default: "dark")'),Fa.forEach(a),Ya.forEach(a),Kt=i(Ne),m(he.$$.fragment,Ne),Ne.forEach(a),Qt=i(_),v=s(_,"LI",{});var E=r(v);$e=s(E,"H3",{id:!0});var ua=r($e);W=s(ua,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var za=r(W);Ue=s(za,"SPAN",{class:!0});var Wa=r(Ue);Vt=d(Wa,"#"),Wa.forEach(a),za.forEach(a),Xt=d(ua,"prefix"),ua.forEach(a),Zt=i(E),Ve=s(E,"P",{});var Ga=r(Ve);Xe=s(Ga,"CODE",{});var Ja=r(Xe);ea=d(Ja,'String (default: "")'),Ja.forEach(a),Ga.forEach(a),ta=i(E),m(ge.$$.fragment,E),aa=i(E),m(ye.$$.fragment,E),na=i(E),m(be.$$.fragment,E),sa=i(E),m(ke.$$.fragment,E),ra=i(E),m(ve.$$.fragment,E),E.forEach(a),_.forEach(a),this.h()},h(){o(f,"class","language-js"),o(Ee,"class","mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"),o(O,"aria-hidden","true"),o(O,"tabindex","-1"),o(O,"href","#"),o(U,"id",""),o(we,"class","mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"),o(j,"aria-hidden","true"),o(j,"tabindex","-1"),o(j,"href","#styled"),o(V,"id","styled"),o(Ie,"class","mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"),o(M,"aria-hidden","true"),o(M,"tabindex","-1"),o(M,"href","#themes"),o(ee,"id","themes"),o(Se,"class","mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"),o(q,"aria-hidden","true"),o(q,"tabindex","-1"),o(q,"href","#base"),o(re,"id","base"),o(Ae,"class","mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"),o(R,"aria-hidden","true"),o(R,"tabindex","-1"),o(R,"href","#utils"),o(le,"id","utils"),o(Pe,"class","mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"),o(Y,"aria-hidden","true"),o(Y,"tabindex","-1"),o(Y,"href","#logs"),o(pe,"id","logs"),o(Ce,"class","mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"),o(F,"aria-hidden","true"),o(F,"tabindex","-1"),o(F,"href","#rtl"),o(ce,"id","rtl"),o(Be,"class","mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"),o(z,"aria-hidden","true"),o(z,"tabindex","-1"),o(z,"href","#darktheme"),o(me,"id","darktheme"),o(Ue,"class","mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"),o(W,"aria-hidden","true"),o(W,"tabindex","-1"),o(W,"href","#prefix"),o($e,"id","prefix")},m(t,C){h(c,t,C),_e(t,S,C),h(w,t,C),_e(t,D,C),_e(t,f,C),f.innerHTML=B,_e(t,K,C),_e(t,U,C),e(U,O),e(O,Ee),e(Ee,at),h(Q,U,null),e(U,nt),_e(t,Ze,C),_e(t,b,C),e(b,A),e(A,V),e(V,j),e(j,we),e(we,st),e(V,rt),e(A,ot),e(A,De),e(De,Oe),e(Oe,lt),e(A,it),h(X,A,null),e(A,pt),h(Z,A,null),e(b,dt),e(b,x),e(x,ee),e(ee,M),e(M,Ie),e(Ie,ct),e(ee,ft),e(x,ut),e(x,je),e(je,Me),e(Me,mt),e(x,ht),h(te,x,null),e(x,$t),h(ae,x,null),e(x,gt),h(ne,x,null),e(x,yt),h(se,x,null),e(b,bt),e(b,H),e(H,re),e(re,q),e(q,Se),e(Se,kt),e(re,vt),e(H,_t),e(H,qe),e(qe,Re),e(Re,xt),e(H,Et),h(oe,H,null),e(b,wt),e(b,L),e(L,le),e(le,R),e(R,Ae),e(Ae,It),e(le,St),e(L,At),e(L,Ye),e(Ye,Fe),e(Fe,Pt),e(L,Ct),h(ie,L,null),e(b,Bt),e(b,T),e(T,pe),e(pe,Y),e(Y,Pe),e(Pe,Ut),e(pe,Ht),e(T,Lt),e(T,ze),e(ze,We),e(We,Tt),e(T,Nt),h(de,T,null),e(b,Dt),e(b,P),e(P,ce),e(ce,F),e(F,Ce),e(Ce,Ot),e(ce,jt),e(P,Mt),e(P,Ge),e(Ge,Je),e(Je,qt),e(P,Rt),h(fe,P,null),e(P,Yt),h(ue,P,null),e(b,Ft),e(b,N),e(N,me),e(me,z),e(z,Be),e(Be,zt),e(me,Wt),e(N,Gt),e(N,Ke),e(Ke,Qe),e(Qe,Jt),e(N,Kt),h(he,N,null),e(b,Qt),e(b,v),e(v,$e),e($e,W),e(W,Ue),e(Ue,Vt),e($e,Xt),e(v,Zt),e(v,Ve),e(Ve,Xe),e(Xe,ea),e(v,ta),h(ge,v,null),e(v,aa),h(ye,v,null),e(v,na),h(be,v,null),e(v,sa),h(ke,v,null),e(v,ra),h(ve,v,null),et=!0},p:an,i(t){et||($(c.$$.fragment,t),$(w.$$.fragment,t),$(Q.$$.fragment,t),$(X.$$.fragment,t),$(Z.$$.fragment,t),$(te.$$.fragment,t),$(ae.$$.fragment,t),$(ne.$$.fragment,t),$(se.$$.fragment,t),$(oe.$$.fragment,t),$(ie.$$.fragment,t),$(de.$$.fragment,t),$(fe.$$.fragment,t),$(ue.$$.fragment,t),$(he.$$.fragment,t),$(ge.$$.fragment,t),$(ye.$$.fragment,t),$(be.$$.fragment,t),$(ke.$$.fragment,t),$(ve.$$.fragment,t),et=!0)},o(t){g(c.$$.fragment,t),g(w.$$.fragment,t),g(Q.$$.fragment,t),g(X.$$.fragment,t),g(Z.$$.fragment,t),g(te.$$.fragment,t),g(ae.$$.fragment,t),g(ne.$$.fragment,t),g(se.$$.fragment,t),g(oe.$$.fragment,t),g(ie.$$.fragment,t),g(de.$$.fragment,t),g(fe.$$.fragment,t),g(ue.$$.fragment,t),g(he.$$.fragment,t),g(ge.$$.fragment,t),g(ye.$$.fragment,t),g(be.$$.fragment,t),g(ke.$$.fragment,t),g(ve.$$.fragment,t),et=!1},d(t){y(c,t),t&&a(S),y(w,t),t&&a(D),t&&a(f),t&&a(K),t&&a(U),y(Q),t&&a(Ze),t&&a(b),y(X),y(Z),y(te),y(ae),y(ne),y(se),y(oe),y(ie),y(de),y(fe),y(ue),y(he),y(ge),y(ye),y(be),y(ke),y(ve)}}}function rn(xe){let c,S;const w=[xe[0],Va];let D={$$slots:{default:[sn]},$$scope:{ctx:xe}};for(let f=0;f<w.length;f+=1)D=ma(D,w[f]);return c=new nn({props:D}),{c(){u(c.$$.fragment)},l(f){m(c.$$.fragment,f)},m(f,B){h(c,f,B),S=!0},p(f,[B]){const K=B&1?tn(w,[B&1&&Ka(f[0]),B&0&&Ka(Va)]):{};B&2&&(K.$$scope={dirty:B,ctx:f}),c.$set(K)},i(f){S||($(c.$$.fragment,f),S=!0)},o(f){g(c.$$.fragment,f),S=!1},d(f){y(c,f)}}}const Va={title:"Config",desc:"How to change the default configuration of daisyUI?",published:!0};function on(xe,c,S){return xe.$$set=w=>{S(0,c=ma(ma({},c),Qa(w)))},c=Qa(c),[c]}class cn extends Xa{constructor(c){super(),Za(this,c,on,rn,en,{})}}export{cn as component};
