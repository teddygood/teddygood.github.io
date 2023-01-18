---
title: "✏️ Hugo PaperMod theme 폰트 변경하기"
date: '2022-07-14'
authors: teddygood
tags: ["Blog"]
draft: false
slug: '/change-font-in-papermod'
description: 나눔스퀘어, D2Coding 적용하기

keywords:
  - PaperMod
  - Hugo
  - 블로그
---

## Theme 커스텀

```
.(site root)
├── config.yml
├── content/
├── themes/PaperMod/
└── layouts
    ├── partials
    │   ├── comments.html
    │   ├── extend_footer.html <---
    │   └── extend_head.html   <---
    └── robots.txt
```

<!--truncate-->

이전에도 말했듯이 PaperMod Theme은 문서화가 꽤 잘 되어 있다. [FAQs](https://adityatelange.github.io/hugo-PaperMod/posts/papermod/papermod-faq/#custom-head--footer)를 참고하면 사이트의 head 또는 footer를 커스텀할 상황이 오면 `extend_head`라는 파일을 만들어서 그곳에다 추가할 내용을 추가하라고 적혀있다. 

Hugo는 블로그의 theme을 언제든지 커스텀 할 수 있도록 overriding을 지원한다. 즉, submodule로 연결된 `themes` 폴더의 코드들은 수정하지 않고 내 블로그의 코드들만을 수정하는 것이다. 현재 블로그 파일에도 `teddygood.github.io\layouts\partials\extend_head`가 있듯이 `themes` 폴더 안에도 `themes\PaperMod\layouts\partials\extend_head.html`가 있다.

## 폰트 적용

```html
{{- /* Head custom content area start */ -}}
{{- /*     Insert any custom code (web-analytics, resources, etc.) - it will appear in the <head></head> section of every page. */ -}}
{{- /*     Can be overwritten by partial with the same name in the global layouts. */ -}}

...

{{- /* D2Coding */ -}}
<link href="//cdn.jsdelivr.net/gh/wan2land/d2coding/d2coding-full.css" rel="stylesheet" />

{{- /* Spoqa Han Sans Neo */ -}}
<link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'>

{{- /* NanumSquare */ -}}
<link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css" rel="stylesheet">

{{- /* Head custom content area end */ -}}

```

위의 코드는 `extend_head` 파일이다. 코드를 보면 알 수 있듯이, head에 웹 폰트를 적용하는 방법을 선택했다. 

나눔스퀘어와 Spoqa Han Sans Neo(스포카 한 산스 네오) 폰트 중 어떤 폰트를 사용할지 고민했었는데 결국 나눔스퀘어를 선택하게 됐다. 스포카 한 산스 네오 폰트나 나눔스퀘어나 둘 다 충분히 가독성이 좋은 폰트라고 생각한다. 그러나 나눔스퀘어가 좀 더 내 취향이다. 

이런 고민을 하게 된 이유가 또 있었는데 기존에 쓰고 있던 나눔스퀘어가 얇다는 느낌을 받았기 때문이다. 이전 블로그의 폰트를 그대로 사용했었는데 이유는 잘 모르겠지만 계속 폰트가 얇다는 느낌을 받았다. 아무래도 비공식적인 웹폰트를 사용해서 그런 건 아닐까 싶다. 이전에는 나눔스퀘어 웹 폰트가 어딨는지 몰라서 GitHub에서 누군가 만드신 웹 폰트를 사용했었다. 현재는 [네이버 글꼴 모음](https://hangeul.naver.com/2021/fonts/nanum)에서 공식적으로 배포하는 웹 폰트를 사용한다. 

D2Coding 폰트는 지금도 문제 없이 사용하여 이전 블로그의 웹 폰트를 그대로 가져왔다.

```
.(site root)
├── config.yml
├── content/
├── theme/hugo-PaperMod/
└── assets/
    └── css/
        └── extended/  <---
            ├── custom_css1.css <---
            └── any_name.css   <---
```

마지막으로 적용해야 할 부분은 당연히 CSS이다. CSS는 `assets\css\extended\custom.css` 경로에 만들면 적용이 된다.

```css
body {
    font-family: "NanumSquare", "Spoqa Han Sans Neo", Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 20px;
    line-height: 32px;
    word-break: break-word;
    background: var(--theme);
}

code {
    font-family: "D2Coding", monospace;
}
```

위의 CSS 코드는 현재 이 블로그에 적용되고 있다. 폰트는 가장 앞에 오는 것이 적용된다.

## 간단한 생각 

초기에 이 테마를 사용하여 블로그를 만들 때는 문서화가 엄청 잘 되어 있지는 않아 GitHub PaperMod Repository의 issue에서 필요한 정보들을 얻었다. 지금은 PaperMod theme이 계속 업데이트되고 있어서 그런지 이전보다는 정보를 얻기 쉽게 문서화가 되어 있다. 그렇기에 더 참고하고 싶은 내용이 있으면 공식문서를 참고하기를 바란다.

## 현재 폰트

지금은 **슌** 등의 몇몇 단어가 나눔스퀘어에서 적용되지 않는 사실을 알게 되어 Spoqa Han Sans Neo(스포카 한 산스 네오) 폰트로 변경했다.

## References

- [네이버 글꼴 모음](https://hangeul.naver.com/font)
- [스포카 한 산스 네오](https://spoqa.github.io/spoqa-han-sans/)
- [PaperMod FAQs](https://adityatelange.github.io/hugo-PaperMod/posts/papermod/papermod-faq/)