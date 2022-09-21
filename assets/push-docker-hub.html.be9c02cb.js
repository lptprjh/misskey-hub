import{_ as r,o as n,c as h,a as e,b as s,d as o,e as c,r as d}from"./app.2a7c0005.js";const i={},a=e("h1",{id:"github-actions\u3092\u4F7F\u7528\u3057\u3066docker-hub\u3078push\u3059\u308B\u65B9\u6CD5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-actions\u3092\u4F7F\u7528\u3057\u3066docker-hub\u3078push\u3059\u308B\u65B9\u6CD5","aria-hidden":"true"},"#"),o(" GitHub Actions\u3092\u4F7F\u7528\u3057\u3066Docker Hub\u3078push\u3059\u308B\u65B9\u6CD5")],-1),u={href:"https://github.com/misskey-dev/misskey/blob/develop/.github/workflows/docker.yml",target:"_blank",rel:"noopener noreferrer"},_=o("/.github/workflows/docker.yml"),l=o(" \u306B"),b=e("br",null,null,-1),p=o(" GitHub Action\u306B\u3088\u308ADocker Hub\u3078push\u3059\u308B\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u304C\u8A18\u8FF0\u3055\u308C\u3066\u3044\u307E\u3059\u3002"),k=c('<p>\u30AA\u30EA\u30B8\u30CA\u30EB\u30EA\u30DD\u30B8\u30C8\u30EA\u3067\u306F\u3001\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u305F\u30BF\u30A4\u30DF\u30F3\u30B0\u3067 <code>latest</code>, <code>&lt;\u30EA\u30EA\u30FC\u30B9\u540D&gt;</code> \u305D\u308C\u305E\u308C\u306E\u30BF\u30B0\u3067Docker Hub\u306Bpush\u3055\u308C\u307E\u3059\u3002<br> \u203B Docker Hub \u306B<code>&lt;\u30D6\u30E9\u30F3\u30C1\u540D&gt;</code>\u306E\u3088\u3046\u306A\u30BF\u30B0\u304C\u3042\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u304C\u3001\u3053\u3061\u3089\u306F\u81EA\u52D5push\u5BFE\u8C61\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p><p>Fork\u5148\u3067\u3053\u306E\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3092\u5B9F\u884C\u3059\u308B\u3068\u5931\u6557\u3057\u307E\u3059\u3002</p><p>\u4EE5\u4E0B\u3067\u306F\u3001Fork\u5148\u3067\u81EA\u5206\u306EDocker Hub\u30EA\u30DD\u30B8\u30C8\u30EA\u306Bpush\u3059\u308B\u3088\u3046\u306B\u3059\u308B\u65B9\u6CD5\u3092\u8A18\u8FF0\u3057\u307E\u3059\u3002</p><h2 id="\u81EA\u5206\u306Edocker-hub\u30EA\u30DB\u309A\u30B7\u3099\u30C8\u30EA\u306Bpush\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3059\u308B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5206\u306Edocker-hub\u30EA\u30DB\u309A\u30B7\u3099\u30C8\u30EA\u306Bpush\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3059\u308B\u65B9\u6CD5" aria-hidden="true">#</a> \u81EA\u5206\u306EDocker Hub\u30EA\u30DD\u30B8\u30C8\u30EA\u306Bpush\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3059\u308B\u65B9\u6CD5</h2>',4),f=e("li",null,"Docker Hub\u3067\u30EA\u30DD\u30B8\u30C8\u30EA\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002",-1),g=o("\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u30D5\u30A1\u30A4\u30EB\u306E "),m={href:"https://github.com/misskey-dev/misskey/blob/53f3b779bf16abcda4f6e026c51384f3b8fbcc62/.github/workflows/docker.yml#L20",target:"_blank",rel:"noopener noreferrer"},H=o("images"),D=o(" \u3092\u4F5C\u6210\u3057\u305F\u30EA\u30DD\u30B8\u30C8\u30EA\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002"),y=o("GitHub\u306B\u3066 "),x={href:"https://docs.github.com/ja/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository",target:"_blank",rel:"noopener noreferrer"},w=o("\u6697\u53F7\u5316\u3055\u308C\u305F\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8"),v=o(" \u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"),E=e("br",null,null,-1),A=o(" \u4F5C\u6210\u304C\u5FC5\u8981\u306A\u306E\u306F "),G=e("code",null,"DOCKER_USERNAME",-1),N=o(" \u3068 "),R=e("code",null,"DOCKER_PASSWORD",-1),S=o(" \u3067\u3001\u305D\u308C\u305E\u308CDocker Hub\u306E\u30E6\u30FC\u30B6\u30FC\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u306B\u306A\u308A\u307E\u3059\u3002"),V=c('<h2 id="push\u3059\u308B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#push\u3059\u308B\u65B9\u6CD5" aria-hidden="true">#</a> push\u3059\u308B\u65B9\u6CD5</h2><p>\u4E0A\u8A18\u8A2D\u5B9A\u306B\u3088\u308A\u30EA\u30EA\u30FC\u30B9\u6642\u306B\u81EA\u52D5\u7684\u306BDocker Hub\u306Bpush\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002<br> \u5177\u4F53\u7684\u306B\u306F\u3001GitHub\u306E\u30EA\u30EA\u30FC\u30B9\u6A5F\u80FD\u3067\u30EA\u30EA\u30FC\u30B9\u3057\u305F\u30BF\u30A4\u30DF\u30F3\u30B0\u3067 <code>latest</code>, <code>&lt;\u30EA\u30EA\u30FC\u30B9\u540D&gt;</code> \u305D\u308C\u305E\u308C\u306E\u30BF\u30B0\u3067Docker Hub\u306Bpush\u3055\u308C\u307E\u3059\u3002</p><p>\u307E\u305F\u3001GitHub\u4E0A\u304B\u3089\u624B\u52D5\u3067push\u3059\u308B\u3053\u3068\u3082\u51FA\u6765\u307E\u3059\u3002<br> \u305D\u308C\u3092\u884C\u3046\u306B\u306F\u3001Actions =&gt; Publish Docker image =&gt; Run workflow \u304B\u3089branch\u3092\u9078\u629E\u3057\u3066\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002<br> \u305F\u3060\u3057\u3001\u3053\u306E\u5834\u5408\u4F5C\u6210\u3055\u308C\u308B\u30BF\u30B0\u306F<code>&lt;\u30D6\u30E9\u30F3\u30C1\u540D&gt;</code>\u306B\u306A\u308A\u307E\u3059\u3002</p>',3);function B(C,L){const t=d("ExternalLinkIcon");return n(),h("div",null,[a,e("p",null,[e("a",u,[_,s(t)]),l,b,p]),k,e("ol",null,[f,e("li",null,[g,e("a",m,[H,s(t)]),D]),e("li",null,[y,e("a",x,[w,s(t)]),v,E,A,G,N,R,S])]),V])}var F=r(i,[["render",B],["__file","push-docker-hub.html.vue"]]);export{F as default};
