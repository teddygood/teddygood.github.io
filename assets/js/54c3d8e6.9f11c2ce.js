"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[535],{7466:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var a=n(4848),t=n(8453);const i={title:"LeetCode 169",date:"2024-10-29",draft:!1},l=void 0,m={id:"Algorithm/LeetCode-169",title:"LeetCode 169",description:"169. Majority Element",source:"@site/wiki/Algorithm/LeetCode-169.md",sourceDirName:"Algorithm",slug:"/Algorithm/LeetCode-169",permalink:"/wiki/Algorithm/LeetCode-169",draft:!1,unlisted:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/wiki/Algorithm/LeetCode-169.md",tags:[],version:"current",frontMatter:{title:"LeetCode 169",date:"2024-10-29",draft:!1},sidebar:"sidebar",previous:{title:"LeetCode 13",permalink:"/wiki/Algorithm/LeetCode-13"},next:{title:"LeetCode 26",permalink:"/wiki/Algorithm/LeetCode-26"}},r={},c=[{value:"169. Majority Element",id:"169-majority-element",level:2},{value:"Solution",id:"solution",level:2},{value:"naive solution",id:"naive-solution",level:3},{value:"Sorting",id:"sorting",level:3},{value:"Using a Hash Map",id:"using-a-hash-map",level:3},{value:"Using Counter",id:"using-counter",level:3},{value:"Boyer-Moore Voting Algorithm",id:"boyer-moore-voting-algorithm",level:3}];function h(e){const s={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h2:"h2",h3:"h3",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"169-majority-element",children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/majority-element/",children:"169. Majority Element"})}),"\n",(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsx)(s.p,{children:"Clicking the heading will take you to the LeetCode problem."})}),"\n",(0,a.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,a.jsx)(s.h3,{id:"naive-solution",children:"naive solution"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"class Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        n = len(nums)\n        for i in range(n):\n            count = 0\n            for j in range(n):\n                if nums[j] == nums[i]:\n                    count += 1\n            if count > n // 2:\n                return nums[i]\n"})}),"\n",(0,a.jsxs)(s.p,{children:["I solved it the naive way, but I couldn't submit it because it exceeded the time limit. The time complexity of this solution is ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(s.msup,{children:[(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mn,{children:"2"})]}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n^2)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsx)(s.span,{className:"vlist-t",children:(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"sorting",children:"Sorting"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"class Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        nums.sort()\n        return nums[len(nums) // 2]\n"})}),"\n",(0,a.jsxs)(s.p,{children:["If the array is sorted, the majority element will always be at the middle index. The time complexity of this solution is ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"log"}),(0,a.jsx)(s.mo,{children:"\u2061"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n \\log n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(s.span,{className:"mop",children:["lo",(0,a.jsx)(s.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]}),". The space complexity is ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," because it uses in-place sorting."]}),"\n",(0,a.jsx)(s.h3,{id:"using-a-hash-map",children:"Using a Hash Map"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"class Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        counts = {}\n        n = len(nums)\n\n        for num in nums:\n            # get value of num(key), if not exist, return 0\n            counts[num] = counts.get(num, 0) + 1\n            if counts[num] > n // 2:\n                return num\n"})}),"\n",(0,a.jsxs)(s.p,{children:["The time complexity of this solution is ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," because I only iterate through the array once. The space complexity is ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," because I use a hash map to store the count of each element."]}),"\n",(0,a.jsx)(s.h3,{id:"using-counter",children:"Using Counter"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"class Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        return Counter(nums).most_common(1)[0][0] # Counter(nums).most_common(1) == [(3, 2)]\n"})}),"\n",(0,a.jsxs)(s.p,{children:["The time complexity of this solution is ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," because I use the ",(0,a.jsx)(s.code,{children:"Counter"})," class from the ",(0,a.jsx)(s.code,{children:"collections"})," module."]}),"\n",(0,a.jsx)(s.h3,{id:"boyer-moore-voting-algorithm",children:"Boyer-Moore Voting Algorithm"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"class Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        count = 0\n        candidate = None\n\n        for num in nums:\n            if count == 0:\n                candidate = num\n                count = 1\n            elif num == candidate:\n                count += 1\n            else:\n                count -= 1\n\n        return candidate\n"})}),"\n",(0,a.jsxs)(s.p,{children:["The time complexity of this solution is ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," because I only iterate through the array once. The space complexity is ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," because I use only two variables."]})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>m});var a=n(6540);const t={},i=a.createContext(t);function l(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function m(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);