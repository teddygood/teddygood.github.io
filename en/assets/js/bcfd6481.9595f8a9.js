"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2479],{550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var s=n(4848),i=n(8453);const a={title:"LeetCode 26",date:"2024-09-21",draft:!1},r=void 0,o={id:"Algorithm/LeetCode-26",title:"LeetCode 26",description:"26. Remove Duplicates from Sorted Array",source:"@site/wiki/Algorithm/LeetCode-26.md",sourceDirName:"Algorithm",slug:"/Algorithm/LeetCode-26",permalink:"/en/wiki/Algorithm/LeetCode-26",draft:!1,unlisted:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/wiki/Algorithm/LeetCode-26.md",tags:[],version:"current",frontMatter:{title:"LeetCode 26",date:"2024-09-21",draft:!1},sidebar:"sidebar",previous:{title:"LeetCode 169",permalink:"/en/wiki/Algorithm/LeetCode-169"},next:{title:"LeetCode 27",permalink:"/en/wiki/Algorithm/LeetCode-27"}},l={},m=[{value:"26. Remove Duplicates from Sorted Array",id:"26-remove-duplicates-from-sorted-array",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const t={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"26-remove-duplicates-from-sorted-array",children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array/description",children:"26. Remove Duplicates from Sorted Array"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Clicking the heading will take you to the LeetCode problem."})}),"\n",(0,s.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        \n        # Pointer to track the position of the unique elements\n        i = 0\n\n        # Iterate through the array starting from the second element\n        for j in range(1, len(nums)):\n            # If current element is different from the last unique element\n            if nums[j] != nums[i]:\n                # Move the pointer i forward and replace the next position with nums[j]\n                i += 1\n                nums[i] = nums[j]\n                \n        # Return the length of the array with unique elements\n        return i + 1    \n"})}),"\n",(0,s.jsxs)(t.p,{children:["The time complexity is ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsxs)(t.mrow,{children:[(0,s.jsx)(t.mi,{children:"O"}),(0,s.jsx)(t.mo,{stretchy:"false",children:"("}),(0,s.jsx)(t.mi,{children:"n"}),(0,s.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(t.span,{className:"mopen",children:"("}),(0,s.jsx)(t.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(t.span,{className:"mclose",children:")"})]})})]})," because it iterates through the length of the array. Since the operation is performed in-place, no additional space is required. Therefore, the space complexity is ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsxs)(t.mrow,{children:[(0,s.jsx)(t.mi,{children:"O"}),(0,s.jsx)(t.mo,{stretchy:"false",children:"("}),(0,s.jsx)(t.mn,{children:"1"}),(0,s.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(t.span,{className:"mopen",children:"("}),(0,s.jsx)(t.span,{className:"mord",children:"1"}),(0,s.jsx)(t.span,{className:"mclose",children:")"})]})})]}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);