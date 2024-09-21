"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9726],{4325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var s=t(4848),i=t(8453);const a={title:"LeetCode 27",date:"2024-09-21",draft:!1},l=void 0,o={id:"Algorithm/LeetCode-27",title:"LeetCode 27",description:"27. Remove Element",source:"@site/wiki/Algorithm/LeetCode-27.md",sourceDirName:"Algorithm",slug:"/Algorithm/LeetCode-27",permalink:"/en/wiki/Algorithm/LeetCode-27",draft:!1,unlisted:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/wiki/Algorithm/LeetCode-27.md",tags:[],version:"current",frontMatter:{title:"LeetCode 27",date:"2024-09-21",draft:!1},sidebar:"sidebar",previous:{title:"2024-09-21",permalink:"/en/wiki/Journals/2024-09-21"},next:{title:"LeetCode 88",permalink:"/en/wiki/Algorithm/LeetCode-88"}},r={},m=[{value:"27. Remove Element",id:"27-remove-element",level:2},{value:"Solution",id:"solution",level:3},{value:"Time Complexity",id:"time-complexity",level:3},{value:"Space Complexity",id:"space-complexity",level:3},{value:"Comment",id:"comment",level:3}];function c(e){const n={annotation:"annotation",code:"code",h2:"h2",h3:"h3",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"27-remove-element",children:"27. Remove Element"}),"\n",(0,s.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def removeElement(self, nums: List[int], val: int) -> int:\n        # Initialize a pointer to track the index for non-val elements \n        i = 0\n\n        # Iterate through the array\n        for j in range(len(nums)):\n            # If the current element is not equal to val\n            if nums[j] != val:\n                # Place the element at the i-th position\n                nums[i] = nums[j]\n                # Move the pointer i forward\n                i += 1\n        \n        # Return the length of the modified array\n        return i\n"})}),"\n",(0,s.jsx)(n.h3,{id:"time-complexity",children:"Time Complexity"}),"\n",(0,s.jsxs)(n.p,{children:["\ubc30\uc5f4\uc758 \uae38\uc774\ub9cc\ud07c \ubc18\ubcf5\ud558\ubbc0\ub85c ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"\uc774\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"space-complexity",children:"Space Complexity"}),"\n",(0,s.jsxs)(n.p,{children:["in-place\ub85c \uc791\uc5c5\uc744 \uc218\ud589\ud558\ubbc0\ub85c \ucd94\uac00 \uacf5\uac04\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\ub2e4. \ub530\ub77c\uc11c \uacf5\uac04 \ubcf5\uc7a1\ub3c4\ub294 ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mn,{children:"1"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord",children:"1"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"\uc774\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"comment",children:"Comment"}),"\n",(0,s.jsx)(n.p,{children:"\ub450 \ubc30\uc5f4\uc774 \uc815\ub82c\ub418\uc5b4"})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(6540);const i={},a=s.createContext(i);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);