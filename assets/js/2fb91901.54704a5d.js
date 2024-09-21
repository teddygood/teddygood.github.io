"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9275],{5750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var s=n(4848),i=n(8453);const a={title:"LeetCode 26",date:"2024-09-21",draft:!1},r=void 0,l={id:"Algorithm/Leetcode-26",title:"LeetCode 26",description:"26. Remove Duplicates from Sorted Array",source:"@site/wiki/Algorithm/Leetcode-26.md",sourceDirName:"Algorithm",slug:"/Algorithm/Leetcode-26",permalink:"/wiki/Algorithm/Leetcode-26",draft:!1,unlisted:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/wiki/Algorithm/Leetcode-26.md",tags:[],version:"current",frontMatter:{title:"LeetCode 26",date:"2024-09-21",draft:!1},sidebar:"sidebar",previous:{title:"LeetCode 88",permalink:"/wiki/Algorithm/LeetCode-88"},next:{title:"Hugo PaperMod theme \ud3f0\ud2b8 \ubcc0\uacbd",permalink:"/wiki/Blog/change-papermod-theme-font"}},o={},m=[{value:"26. Remove Duplicates from Sorted Array",id:"26-remove-duplicates-from-sorted-array",level:2},{value:"Solution",id:"solution",level:3},{value:"Time Complexity",id:"time-complexity",level:3},{value:"Space Complexity",id:"space-complexity",level:3},{value:"Comment",id:"comment",level:3}];function c(e){const t={annotation:"annotation",code:"code",h2:"h2",h3:"h3",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"26-remove-duplicates-from-sorted-array",children:"26. Remove Duplicates from Sorted Array"}),"\n",(0,s.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        \n        # Pointer to track the position of the unique elements\n        i = 0\n\n        # Iterate through the array starting from the second element\n        for j in range(1, len(nums)):\n            # If current element is different from the last unique element\n            if nums[j] != nums[i]:\n                # Move the pointer i forward and replace the next position with nums[j]\n                i += 1\n                nums[i] = nums[j]\n                \n        # Return the length of the array with unique elements\n        return i + 1    \n"})}),"\n",(0,s.jsx)(t.h3,{id:"time-complexity",children:"Time Complexity"}),"\n",(0,s.jsxs)(t.p,{children:["\ubc30\uc5f4\uc758 \uae38\uc774\ub9cc\ud07c \ubc18\ubcf5\ud558\ubbc0\ub85c ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsxs)(t.mrow,{children:[(0,s.jsx)(t.mi,{children:"O"}),(0,s.jsx)(t.mo,{stretchy:"false",children:"("}),(0,s.jsx)(t.mi,{children:"n"}),(0,s.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(t.span,{className:"mopen",children:"("}),(0,s.jsx)(t.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(t.span,{className:"mclose",children:")"})]})})]}),"\uc774\ub2e4."]}),"\n",(0,s.jsx)(t.h3,{id:"space-complexity",children:"Space Complexity"}),"\n",(0,s.jsxs)(t.p,{children:["in-place\ub85c \uc791\uc5c5\uc744 \uc218\ud589\ud558\ubbc0\ub85c \ucd94\uac00 \uacf5\uac04\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\ub2e4. \ub530\ub77c\uc11c \uacf5\uac04 \ubcf5\uc7a1\ub3c4\ub294 ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsxs)(t.mrow,{children:[(0,s.jsx)(t.mi,{children:"O"}),(0,s.jsx)(t.mo,{stretchy:"false",children:"("}),(0,s.jsx)(t.mn,{children:"1"}),(0,s.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(t.span,{className:"mopen",children:"("}),(0,s.jsx)(t.span,{className:"mord",children:"1"}),(0,s.jsx)(t.span,{className:"mclose",children:")"})]})})]}),"\uc774\ub2e4."]}),"\n",(0,s.jsx)(t.h3,{id:"comment",children:"Comment"}),"\n",(0,s.jsx)(t.p,{children:"\ub450 \ubc30\uc5f4\uc774 \uc815\ub82c\ub418\uc5b4"})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);