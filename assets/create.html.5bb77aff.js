import{_ as p,o as f,c as u,b as t,w as d,a as e,d as r,r as a}from"./app.2a7c0005.js";const m={},y=e("h1",{id:"notes-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-create","aria-hidden":"true"},"#"),r(),e("code",null,"notes/create")],-1),_=e("p",null,"\u30CE\u30FC\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u8FD4\u4FE1\u3084Renote\u3082\u3053\u306EAPI\u3067\u884C\u3044\u307E\u3059\u3002",-1),E=e("h2",{id:"\u30CF\u309A\u30E9\u30E1\u30FC\u30BF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30CF\u309A\u30E9\u30E1\u30FC\u30BF","aria-hidden":"true"},"#"),r(" \u30D1\u30E9\u30E1\u30FC\u30BF")],-1),I=e("h2",{id:"\u30EC\u30B9\u30DB\u309A\u30F3\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EC\u30B9\u30DB\u309A\u30F3\u30B9","aria-hidden":"true"},"#"),r(" \u30EC\u30B9\u30DD\u30F3\u30B9")],-1),h=e("h2",{id:"\u30A8\u30E9\u30FC",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30A8\u30E9\u30FC","aria-hidden":"true"},"#"),r(" \u30A8\u30E9\u30FC")],-1),N=e("h2",{id:"\u30EA\u30BD\u30FC\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EA\u30BD\u30FC\u30B9","aria-hidden":"true"},"#"),r(" \u30EA\u30BD\u30FC\u30B9")],-1);function R(g,A){const s=a("el-alert"),n=a("MkApiConsole"),i=a("ClientOnly"),o=a("MkSchemaViewerItemObject"),c=a("MkSchemaViewer"),l=a("MkApiErrors"),b=a("MkApiResources");return f(),u("div",null,[y,_,t(s,{title:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808",type:"success",closable:!1}),t(i,null,{default:d(()=>[t(n,{name:"notes/create",def:{summary:"\u30CE\u30FC\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002",description:"\u30CE\u30FC\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u8FD4\u4FE1\u3084Renote\u3082\u3053\u306EAPI\u3067\u884C\u3044\u307E\u3059\u3002",tags:["notes"],requireCredential:!0,req:{type:"object",properties:{visibility:{type:"string",enum:["public","home","followers","specified"],default:"public"},visibleUserIds:{type:"array",uniqueItems:!0,items:{type:"string",format:"misskey:id"}},text:{type:"string",maxLength:3e3,nullable:!0},cw:{type:"string",nullable:!0,maxLength:100},localOnly:{type:"boolean",default:!1},noExtractMentions:{type:"boolean",default:!1},noExtractHashtags:{type:"boolean",default:!1},noExtractEmojis:{type:"boolean",default:!1},fileIds:{type:"array",uniqueItems:!0,minItems:1,maxItems:16,items:{type:"string",format:"misskey:id"}},mediaIds:{deprecated:!0,description:"Use `fileIds` instead. If both are specified, this property is discarded.",type:"array",uniqueItems:!0,minItems:1,maxItems:16,items:{type:"string",format:"misskey:id"}},replyId:{type:"string",format:"misskey:id",nullable:!0},renoteId:{type:"string",format:"misskey:id",nullable:!0},channelId:{type:"string",format:"misskey:id",nullable:!0},poll:{type:"object",nullable:!0,properties:{choices:{type:"array",uniqueItems:!0,minItems:2,maxItems:10,items:{type:"string",minLength:1,maxLength:50}},multiple:{type:"boolean",default:!1},expiresAt:{type:"integer",nullable:!0},expiredAfter:{type:"integer",nullable:!0,minimum:1}},required:["choices"]}},anyOf:[{properties:{text:{type:"string",minLength:1,maxLength:3e3,nullable:!1}},required:["text"]},{required:["fileIds"]},{required:["mediaIds"]},{properties:{poll:{type:"object",nullable:!1}},required:["poll"]},{required:["renoteId"]}]},res:{type:"object",optional:!1,nullable:!1,properties:{createdNote:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note",description:"\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8"}},required:["createdNote"]},errors:{"b5c90186-4ab0-49c8-9bba-a1f76c282ba4":{id:"b5c90186-4ab0-49c8-9bba-a1f76c282ba4",code:"NO_SUCH_RENOTE_TARGET",description:"Renote\u306B\u6307\u5B9A\u3055\u308C\u305F\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"fd4cc33e-2a37-48dd-99cc-9b806eb2031a":{id:"fd4cc33e-2a37-48dd-99cc-9b806eb2031a",code:"CANNOT_RENOTE_TO_A_PURE_RENOTE",description:"\u5358\u7D14\u306ARenote\u3092\u518D\u5EA6Renote\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"},"749ee0f6-d3da-459a-bf02-282e2da4292c":{id:"749ee0f6-d3da-459a-bf02-282e2da4292c",code:"NO_SUCH_REPLY_TARGET",description:"\u8FD4\u4FE1\u5148\u306B\u6307\u5B9A\u3055\u308C\u305F\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"3ac74a84-8fd5-4bb0-870f-01804f82ce15":{id:"3ac74a84-8fd5-4bb0-870f-01804f82ce15",code:"CANNOT_REPLY_TO_A_PURE_RENOTE",description:"\u5358\u7D14\u306ARenote\u3092\u306B\u8FD4\u4FE1\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"},"04da457d-b083-4055-9082-955525eda5a5":{id:"04da457d-b083-4055-9082-955525eda5a5",code:"CANNOT_CREATE_ALREADY_EXPIRED_POLL",description:"\u30A2\u30F3\u30B1\u30FC\u30C8\u306E\u671F\u9650\u306E\u6307\u5B9A\u304C\u8AA4\u3063\u3066\u3044\u307E\u3059\u3002"},"b1653923-5453-4edc-b786-7c4f39bb0bbb":{id:"b1653923-5453-4edc-b786-7c4f39bb0bbb",code:"NO_SUCH_CHANNEL",description:"\u6307\u5B9A\u3055\u308C\u305F\u30C1\u30E3\u30F3\u30CD\u30EB\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"b390d7e1-8a5e-46ed-b625-06271cafd3d3":{id:"b390d7e1-8a5e-46ed-b625-06271cafd3d3",code:"YOU_HAVE_BEEN_BLOCKED",description:"\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u30CE\u30FC\u30C8\u306B\u5BFE\u3057\u3066\u8FD4\u4FE1\u3084Renote\u306F\u884C\u3048\u307E\u305B\u3093\u3002"}}}},null,8,["def"])]),_:1}),E,t(i,null,{default:d(()=>[t(o,{schema:{type:"object",properties:{visibility:{type:"string",enum:["public","home","followers","specified"],default:"public"},visibleUserIds:{type:"array",uniqueItems:!0,items:{type:"string",format:"misskey:id"}},text:{type:"string",maxLength:3e3,nullable:!0},cw:{type:"string",nullable:!0,maxLength:100},localOnly:{type:"boolean",default:!1},noExtractMentions:{type:"boolean",default:!1},noExtractHashtags:{type:"boolean",default:!1},noExtractEmojis:{type:"boolean",default:!1},fileIds:{type:"array",uniqueItems:!0,minItems:1,maxItems:16,items:{type:"string",format:"misskey:id"}},mediaIds:{deprecated:!0,description:"Use `fileIds` instead. If both are specified, this property is discarded.",type:"array",uniqueItems:!0,minItems:1,maxItems:16,items:{type:"string",format:"misskey:id"}},replyId:{type:"string",format:"misskey:id",nullable:!0},renoteId:{type:"string",format:"misskey:id",nullable:!0},channelId:{type:"string",format:"misskey:id",nullable:!0},poll:{type:"object",nullable:!0,properties:{choices:{type:"array",uniqueItems:!0,minItems:2,maxItems:10,items:{type:"string",minLength:1,maxLength:50}},multiple:{type:"boolean",default:!1},expiresAt:{type:"integer",nullable:!0},expiredAfter:{type:"integer",nullable:!0,minimum:1}},required:["choices"]}},anyOf:[{properties:{text:{type:"string",minLength:1,maxLength:3e3,nullable:!1}},required:["text"]},{required:["fileIds"]},{required:["mediaIds"]},{properties:{poll:{type:"object",nullable:!1}},required:["poll"]},{required:["renoteId"]}]}},null,8,["schema"])]),_:1}),I,t(i,null,{default:d(()=>[t(c,{schema:{type:"object",optional:!1,nullable:!1,properties:{createdNote:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note",description:"\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8"}},required:["createdNote"]}})]),_:1}),h,t(i,null,{default:d(()=>[t(l,{errors:{"b5c90186-4ab0-49c8-9bba-a1f76c282ba4":{id:"b5c90186-4ab0-49c8-9bba-a1f76c282ba4",code:"NO_SUCH_RENOTE_TARGET",description:"Renote\u306B\u6307\u5B9A\u3055\u308C\u305F\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"fd4cc33e-2a37-48dd-99cc-9b806eb2031a":{id:"fd4cc33e-2a37-48dd-99cc-9b806eb2031a",code:"CANNOT_RENOTE_TO_A_PURE_RENOTE",description:"\u5358\u7D14\u306ARenote\u3092\u518D\u5EA6Renote\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"},"749ee0f6-d3da-459a-bf02-282e2da4292c":{id:"749ee0f6-d3da-459a-bf02-282e2da4292c",code:"NO_SUCH_REPLY_TARGET",description:"\u8FD4\u4FE1\u5148\u306B\u6307\u5B9A\u3055\u308C\u305F\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"3ac74a84-8fd5-4bb0-870f-01804f82ce15":{id:"3ac74a84-8fd5-4bb0-870f-01804f82ce15",code:"CANNOT_REPLY_TO_A_PURE_RENOTE",description:"\u5358\u7D14\u306ARenote\u3092\u306B\u8FD4\u4FE1\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"},"04da457d-b083-4055-9082-955525eda5a5":{id:"04da457d-b083-4055-9082-955525eda5a5",code:"CANNOT_CREATE_ALREADY_EXPIRED_POLL",description:"\u30A2\u30F3\u30B1\u30FC\u30C8\u306E\u671F\u9650\u306E\u6307\u5B9A\u304C\u8AA4\u3063\u3066\u3044\u307E\u3059\u3002"},"b1653923-5453-4edc-b786-7c4f39bb0bbb":{id:"b1653923-5453-4edc-b786-7c4f39bb0bbb",code:"NO_SUCH_CHANNEL",description:"\u6307\u5B9A\u3055\u308C\u305F\u30C1\u30E3\u30F3\u30CD\u30EB\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"b390d7e1-8a5e-46ed-b625-06271cafd3d3":{id:"b390d7e1-8a5e-46ed-b625-06271cafd3d3",code:"YOU_HAVE_BEEN_BLOCKED",description:"\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u30CE\u30FC\u30C8\u306B\u5BFE\u3057\u3066\u8FD4\u4FE1\u3084Renote\u306F\u884C\u3048\u307E\u305B\u3093\u3002"}},"common-errors":{"1384574d-a912-4b81-8601-c7b1c4085df1":{id:"1384574d-a912-4b81-8601-c7b1c4085df1",code:"CREDENTIAL_REQUIRED",description:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u7121\u3057\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u307E\u3057\u305F\u3002"},"d5826d14-3982-4d2e-8011-b9e9f02499ef":{id:"d5826d14-3982-4d2e-8011-b9e9f02499ef",code:"RATE_LIMIT_EXCEEDED",description:"\u30EC\u30FC\u30C8\u30EA\u30DF\u30C3\u30C8\u306B\u3088\u308B\u5236\u9650\u306E\u305F\u3081\u4E00\u6642\u7684\u306B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"56f35758-7dd5-468b-8439-5d6fb8ec9b8e":{id:"56f35758-7dd5-468b-8439-5d6fb8ec9b8e",code:"ACCESS_DENIED",description:"\u30A2\u30AF\u30BB\u30B9\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"1370e5b7-d4eb-4566-bb1d-7748ee6a1838":{id:"1370e5b7-d4eb-4566-bb1d-7748ee6a1838",code:"PERMISSION_DENIED",description:"\u4E0E\u3048\u3089\u308C\u305F\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u306B\u306F\u5FC5\u8981\u306A\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370":{id:"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370",code:"YOUR_ACCOUNT_SUSPENDED",description:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u51CD\u7D50\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"3d81ceae-475f-4600-b2a8-2bc116157532":{id:"3d81ceae-475f-4600-b2a8-2bc116157532",code:"INVALID_PARAM",description:"\u30EA\u30AF\u30A8\u30B9\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059\u3002"},"5d37dbcb-891e-41ca-a3d6-e690c97775ac":{id:"5d37dbcb-891e-41ca-a3d6-e690c97775ac",code:"INTERNAL_ERROR",description:"\u30B5\u30FC\u30D0\u30FC\u5185\u90E8\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u5F15\u304D\u7D9A\u304D\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"}}})]),_:1}),N,t(i,null,{default:d(()=>[t(b,{def:{summary:"\u30CE\u30FC\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002",description:"\u30CE\u30FC\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u8FD4\u4FE1\u3084Renote\u3082\u3053\u306EAPI\u3067\u884C\u3044\u307E\u3059\u3002",tags:["notes"],requireCredential:!0,req:{type:"object",properties:{visibility:{type:"string",enum:["public","home","followers","specified"],default:"public"},visibleUserIds:{type:"array",uniqueItems:!0,items:{type:"string",format:"misskey:id"}},text:{type:"string",maxLength:3e3,nullable:!0},cw:{type:"string",nullable:!0,maxLength:100},localOnly:{type:"boolean",default:!1},noExtractMentions:{type:"boolean",default:!1},noExtractHashtags:{type:"boolean",default:!1},noExtractEmojis:{type:"boolean",default:!1},fileIds:{type:"array",uniqueItems:!0,minItems:1,maxItems:16,items:{type:"string",format:"misskey:id"}},mediaIds:{deprecated:!0,description:"Use `fileIds` instead. If both are specified, this property is discarded.",type:"array",uniqueItems:!0,minItems:1,maxItems:16,items:{type:"string",format:"misskey:id"}},replyId:{type:"string",format:"misskey:id",nullable:!0},renoteId:{type:"string",format:"misskey:id",nullable:!0},channelId:{type:"string",format:"misskey:id",nullable:!0},poll:{type:"object",nullable:!0,properties:{choices:{type:"array",uniqueItems:!0,minItems:2,maxItems:10,items:{type:"string",minLength:1,maxLength:50}},multiple:{type:"boolean",default:!1},expiresAt:{type:"integer",nullable:!0},expiredAfter:{type:"integer",nullable:!0,minimum:1}},required:["choices"]}},anyOf:[{properties:{text:{type:"string",minLength:1,maxLength:3e3,nullable:!1}},required:["text"]},{required:["fileIds"]},{required:["mediaIds"]},{properties:{poll:{type:"object",nullable:!1}},required:["poll"]},{required:["renoteId"]}]},res:{type:"object",optional:!1,nullable:!1,properties:{createdNote:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note",description:"\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8"}},required:["createdNote"]},errors:{"b5c90186-4ab0-49c8-9bba-a1f76c282ba4":{id:"b5c90186-4ab0-49c8-9bba-a1f76c282ba4",code:"NO_SUCH_RENOTE_TARGET",description:"Renote\u306B\u6307\u5B9A\u3055\u308C\u305F\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"fd4cc33e-2a37-48dd-99cc-9b806eb2031a":{id:"fd4cc33e-2a37-48dd-99cc-9b806eb2031a",code:"CANNOT_RENOTE_TO_A_PURE_RENOTE",description:"\u5358\u7D14\u306ARenote\u3092\u518D\u5EA6Renote\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"},"749ee0f6-d3da-459a-bf02-282e2da4292c":{id:"749ee0f6-d3da-459a-bf02-282e2da4292c",code:"NO_SUCH_REPLY_TARGET",description:"\u8FD4\u4FE1\u5148\u306B\u6307\u5B9A\u3055\u308C\u305F\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"3ac74a84-8fd5-4bb0-870f-01804f82ce15":{id:"3ac74a84-8fd5-4bb0-870f-01804f82ce15",code:"CANNOT_REPLY_TO_A_PURE_RENOTE",description:"\u5358\u7D14\u306ARenote\u3092\u306B\u8FD4\u4FE1\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"},"04da457d-b083-4055-9082-955525eda5a5":{id:"04da457d-b083-4055-9082-955525eda5a5",code:"CANNOT_CREATE_ALREADY_EXPIRED_POLL",description:"\u30A2\u30F3\u30B1\u30FC\u30C8\u306E\u671F\u9650\u306E\u6307\u5B9A\u304C\u8AA4\u3063\u3066\u3044\u307E\u3059\u3002"},"b1653923-5453-4edc-b786-7c4f39bb0bbb":{id:"b1653923-5453-4edc-b786-7c4f39bb0bbb",code:"NO_SUCH_CHANNEL",description:"\u6307\u5B9A\u3055\u308C\u305F\u30C1\u30E3\u30F3\u30CD\u30EB\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"b390d7e1-8a5e-46ed-b625-06271cafd3d3":{id:"b390d7e1-8a5e-46ed-b625-06271cafd3d3",code:"YOU_HAVE_BEEN_BLOCKED",description:"\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u30CE\u30FC\u30C8\u306B\u5BFE\u3057\u3066\u8FD4\u4FE1\u3084Renote\u306F\u884C\u3048\u307E\u305B\u3093\u3002"}}}},null,8,["def"])]),_:1})])}var x=p(m,[["render",R],["__file","create.html.vue"]]);export{x as default};
