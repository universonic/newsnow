# 新闻待扩展的数据源Source
---

## 1) finance_sina.md

Source: https://finance.sina.com.cn/jjxw/2026-03-09/doc-inhqksxs0698919.shtml?cre=tianyi&mod=pchp&loc=36&r=0&rfunc=89&tj=cxvertical_pc_hp&tr=12

---

## 2) futunn_com.md


---

## 3) huxiu_com.md

Source: https://www.huxiu.com/article/4840185.html

---

## 4) investing_com.md

Contents:

### 地址
https://www.investing.com/news
https://cn.investing.com/news


---

## 5) reuters_com.md

### 首次请求示例
```bash
curl 'https://www.reuters.com/pf/api/v3/content/fetch/articles-by-section-alias-or-id-v1?query=%7B%22arc-site%22%3A%22reuters%22%2C%22fetch_type%22%3A%22collection%22%2C%22offset%22%3A12%2C%22requestId%22%3A1%2C%22section_id%22%3A%22%2Fbusiness%2Ffinance%2F%22%2C%22size%22%3A%2220%22%2C%22uri%22%3A%22%2Fbusiness%2Ffinance%2F%22%2C%22website%22%3A%22reuters%22%7D&d=353&mxId=00000000&_website=reuters' \
  -H 'accept: */*' \
  -H 'accept-language: zh-CN,zh;q=0.9' \
  -H 'cache-control: max-age=0' \
  -b 'usprivacy=1---; permutive-id=91118384-e605-4f44-a12c-f4c012f58215; _li_dcdm_c=.reuters.com; _lc2_fpi=f511229f0ef8--01kkftn47bjkgvvywgmaf4539s; _lc2_fpi_js=f511229f0ef8--01kkftn47bjkgvvywgmaf4539s; _ml_id=b6b8226d-92b8-4142-a324-85cc267f15c9.1836437423.0.1836437423.1836437423; _matheriSegs=INTERNAL_AB_TEST1-V,MATHER_QS_AB_TEST2-H; _cb=C7aJmeL7bxSuDM9H; _gcl_au=1.1.1999524986.1773279033; _lr_retry_request=true; _lr_env_src_ats=false; ccuid=7d882ad0-6ff0-4f00-8494-bb94d2a56fc1; ccsid=944172a0-815f-4b73-bd3d-33a6e3dbe823; gamera_user_id=a3d6b35c-94d8-4707-a764-0caa8fe69e41; ajs_anonymous_id=8a7ce7f2-5dc2-40ad-960f-fea4799e61c7; _lr_sampling_rate=100; __idcontext=eyJjb29raWVJRCI6IjNBcEFKaFZvYjV6bWZ2RE4xOThud3BNcjlGbyIsImRldmljZUlEIjoiM0FwQUpnaURJempnVzFRUEFYRGgxejdCRVVTIiwiaXYiOiIiLCJ2IjoiIn0%3D; _iiq_fdata=%7B%22pcid%22%3A%22a7a6418f-2e98-5846-1b3b-4625f12e8abf%22%2C%22pcidDate%22%3A1773279069362%7D; BOOMR_CONSENT="opted-in"; _fbp=fb.1.1773279562956.552592051990326686; cnx_userId=2-5a02d1bf1114453fa0a5fe223b7bc65a; _pubcid=77933ce2-4d5c-46ef-902c-1af51df798ba; _cc_id=414903a2068879c23ded4444d42d1bf2; panoramaId_expiry=1773884370157; panoramaId=e277e3d46a20b5f093e31edb2692185ca02c743c2c75111d52be1eefc2169ac5; panoramaIdType=panoDevice; _v__chartbeat3=BuYcblbCFDDtFM4b; idw-fe-id=520799ab-2fa7-4e92-a64b-f4e935b1794f; OneTrustWPCCPAGoogleOptOut=false; _gid=GA1.2.1554924613.1773279614; _li_ss=CrcBCgYI-QEQkB0KBgj3ARCQHQoFCAoQkB0KBgjdARCQHQoGCPgBEJAdCgYIgQEQkB0KBQgMEJodCgYI9QEQkB0KBQgLEJAdCgYI4wEQkB0KBgikARCQHQoGCLMBEJAdCgYIiQEQkB0KBgilARCQHQoGCIACEJIdCgYI4QEQkB0KBgiiARCQHQoGCP8BEJAdCgkI_____wcQmh0KBgiHAhCQHQoGCNIBEJAdCgUIfhCQHQoGCIgBEJAd; _t_tests=eyJZakEwU3FEVG5xcHRaIjp7ImNob3NlblZhcmlhbnQiOiJBIiwic3BlY2lmaWNMb2NhdGlvbiI6WyJEU3NhNl8iXX0sImxpZnRfZXhwIjoibSJ9; _pbjs_userid_consent_data=3524755945110770; __gads=ID=1114848cc7cc2c6c:T=1773279041:RT=1773279866:S=ALNI_MbtdX0y2aSRuhCuHvSQdXgdDRw3Aw; __gpi=UID=000010436f9b2d46:T=1773279041:RT=1773279866:S=ALNI_MYjx_W_wo1as3O0-t7EMqBspertsw; __eoi=ID=1d0d698bdd286358:T=1773279041:RT=1773279866:S=AA-AfjZJAgvkNLDlYuZLJa-ubH8d; _ga_WBSR7WLTGD=GS2.1.s1773279668$o1$g1$t1773279920$j60$l0$h0; _ga=GA1.2.719022686.1773279042; dicbo_id=%7B%22dicbo_fetch%22%3A1773279934459%7D; _cb_svref=external; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+12+2026+09%3A45%3A48+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=202601.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=9880ec6a-10f7-45ae-b2ad-cab230aa0c36&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=1%3A1%2C2%3A1%2C3%3A1%2C4%3A1&AwaitingReconsent=false&crTime=1773279606799; sailthru_pageviews=11; ABTastySession=mrasn=&lp=https%253A%252F%252Fwww.reuters.com%252Fbusiness%252Fcliffwaters-33-billion-private-credit-fund-see-over-7-redemptions-bloomberg-news-2026-03-10%252F; ABTasty=uid=jpm0rn74b0nd1qh3&fst=1773279018982&pst=-1&cst=1773279018982&ns=1&pvt=12&pvis=12&th=1530618.1907755.12.12.1.1.1773279021278.1773279949457.0.1_1531510.1908837.1.1.1.1.1773279697337.1773279697337.0.1_1583038.1973587.12.12.1.1.1773279021275.1773279949457.0.1; _chartbeat2=.1773279026941.1773279950407.1.CuiiQH3XSFx25yh0ScZ9oCYqY2.2; _chartbeat5=; sailthru_content=859124378932047585809c7cfdb47bad622171ad98a4126aeb12a5d943b62313bebd1bc3aace72a38b10d5b7c9e670b2; sailthru_visitor=570a0f37-be8e-4d7e-b83c-f8305c0826be; _awl=2.1773279951.5-2d1307a7acb566bf5e14e6855e414f6a-6763652d617369612d6561737431-0; _gat=1; datadome=Q0yH2yA7HMv0gPqYm7a8X~NtBpf_T9jXUa2qNF1GqEvPO_KB7VHtzlbypLXHUZhBtFEfeUexg7BntVoL427noW2B8eYI5Q68SrNgiqFSjIREgRnb6bZ1dm702NJuvFVw; bounceClientVisit5431v=N4IgNgDiBcIBYBcEQM4FIDMBBNAmAYnvgO6kB0ATgKYCuCVFKZAxgPYC2RARjSgJYA7KinQFmYPgDNJxAIb1GAWgwZFXPmAmsBiiBT4A3eVUXNqAEz4JFkmgPOKUVE6wMNFAdkUWq7CAj5tFDUwVg4uBgBzRSFiYNwABlwANkUE1QBGBKIQABoQChgQUmIySLDIsCoWDjyQFARjGFBzKgM+ZioAfT5zIoyAVlwATgAOABZkjMGBpPGPAfGMUbrI8z0YSVkwJ3zmWRQwTe3dkF5jnap81vbO5pAuClY4hiKAYTgn9io6t0ZAgT9cYDMgJUGguoQMDySSsCjsIrsWTMADyAGU6jcOt0EABPCA-WCtFAAawQrCg+UesnsRTqxCoXHaVGIFycAF98gJWF0SYJhHwUDAEBQaFcClQAI5ihpdckkqiA2BUZKyUayEbDAayYbA8yyKjmZJccbMAZcWQeSQeDIYcwJZgeXCjBKjLiSI0DDyjZjDZzmSQJZLmcyjXCSZ2jSQYK11disdRVNni9pQWDAsijMi4RJkDITVZUVj3Nh2EW4ooAKQACnUAF58NMgRaqBJB3CQ1gNbZdNitIottLturMKwV2AolCyEmyEfaAJCAQIXusfuwLAY-LUSIAoq4Dx1bcAroCWTfIqT6ezvasMsUXEns+EkCV2QQGlzu8PvvPmufpf3iurQYFW1YAHJ1LI1CyEBz6YkisEwAk+TfCKPI-kh+TQgECA0GuGDjGQHhYdoO64WutoggMnIgKw0jYsm+QiJIBgIJhIAIEqGQeB4GD7sMWoDPk8qKgAaoKVgAJJ9LA3G8fxQbJB4SxZAMvwSQgkkACL9DxfEeMMinKRgqkgDRTiRDAADaAC67JAA; cto_bundle=nmJUw19jeDByRmswcEw3SUE0ZklDZFdIYXFGRmZCSFB1Q3FKcWp2QkNROWNHdFRCcXBNT2Rac2ZFYmdEMlUlMkZrRWMybHZhTGRtTmVtVm5xbzlQMDhwN2hNQmlaeDdYYlowOEQ5N2RkQjFYVzBkOHM1NFhxJTJCc0N5Q1h1UkFaMEtCTklIUkhwVU9vWUFYJTJGZ2hkNlJyeWo5SyUyRjBJQSUzRCUzRA; cto_bidid=_MNc319tZVU0VWZUVlhXMGc2eUpIeVhMMXhhY3ZkR3dHZVJxNWgzQW55RjBiaHo1Qzhqd1pOMGgzOWY0VDBrUVNvdHZFeXBMYjVieiUyQkxqY2FMUXFveEg4bTRnNCUyRiUyRmZDcXExVkhSSkx1clJkNng4USUzRA; _dd_s=rum=0&expire=1773280865684; _chartbeat4=t=C14I3PtkqH6DvOCHkel5mJCP_LFT&E=10&x=2801&c=0.53&y=8085&w=689; RT="z=1&dm=www.reuters.com&si=65a8406e-2fd7-44b1-956b-b454b135d0b5&ss=mmmsjds7&sl=b&tt=2a57&obo=9&rl=1"' \
  -H 'if-modified-since: 1773279447499' \
  -H 'priority: u=1, i' \
  -H 'referer: https://www.reuters.com/business/finance/' \
  -H 'sec-ch-device-memory: 8' \
  -H 'sec-ch-ua: "Not:A-Brand";v="99", "Google Chrome";v="145", "Chromium";v="145"' \
  -H 'sec-ch-ua-arch: "arm"' \
  -H 'sec-ch-ua-full-version-list: "Not:A-Brand";v="99.0.0.0", "Google Chrome";v="145.0.7632.68", "Chromium";v="145.0.7632.68"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-model: ""' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36'
```

### 后续请求示例（offset变动）
```bash
curl 'https://www.reuters.com/pf/api/v3/content/fetch/articles-by-section-alias-or-id-v1?query=%7B%22arc-site%22%3A%22reuters%22%2C%22fetch_type%22%3A%22collection%22%2C%22offset%22%3A60%2C%22requestId%22%3A4%2C%22section_id%22%3A%22%2Fbusiness%2Ffinance%2F%22%2C%22size%22%3A%2220%22%2C%22uri%22%3A%22%2Fbusiness%2Ffinance%2F%22%2C%22website%22%3A%22reuters%22%7D&d=353&mxId=00000000&_website=reuters' \
  -H 'accept: */*' \
  -H 'accept-language: zh-CN,zh;q=0.9' \
  -b 'usprivacy=1---; permutive-id=91118384-e605-4f44-a12c-f4c012f58215; _li_dcdm_c=.reuters.com; _lc2_fpi=f511229f0ef8--01kkftn47bjkgvvywgmaf4539s; _lc2_fpi_js=f511229f0ef8--01kkftn47bjkgvvywgmaf4539s; _ml_id=b6b8226d-92b8-4142-a324-85cc267f15c9.1836437423.0.1836437423.1836437423; _matheriSegs=INTERNAL_AB_TEST1-V,MATHER_QS_AB_TEST2-H; _cb=C7aJmeL7bxSuDM9H; _gcl_au=1.1.1999524986.1773279033; _lr_retry_request=true; _lr_env_src_ats=false; ccuid=7d882ad0-6ff0-4f00-8494-bb94d2a56fc1; ccsid=944172a0-815f-4b73-bd3d-33a6e3dbe823; gamera_user_id=a3d6b35c-94d8-4707-a764-0caa8fe69e41; ajs_anonymous_id=8a7ce7f2-5dc2-40ad-960f-fea4799e61c7; _lr_sampling_rate=100; __idcontext=eyJjb29raWVJRCI6IjNBcEFKaFZvYjV6bWZ2RE4xOThud3BNcjlGbyIsImRldmljZUlEIjoiM0FwQUpnaURJempnVzFRUEFYRGgxejdCRVVTIiwiaXYiOiIiLCJ2IjoiIn0%3D; _iiq_fdata=%7B%22pcid%22%3A%22a7a6418f-2e98-5846-1b3b-4625f12e8abf%22%2C%22pcidDate%22%3A1773279069362%7D; BOOMR_CONSENT="opted-in"; _fbp=fb.1.1773279562956.552592051990326686; cnx_userId=2-5a02d1bf1114453fa0a5fe223b7bc65a; _pubcid=77933ce2-4d5c-46ef-902c-1af51df798ba; _cc_id=414903a2068879c23ded4444d42d1bf2; panoramaId_expiry=1773884370157; panoramaId=e277e3d46a20b5f093e31edb2692185ca02c743c2c75111d52be1eefc2169ac5; panoramaIdType=panoDevice; _v__chartbeat3=BuYcblbCFDDtFM4b; idw-fe-id=520799ab-2fa7-4e92-a64b-f4e935b1794f; OneTrustWPCCPAGoogleOptOut=false; _gid=GA1.2.1554924613.1773279614; _li_ss=CrcBCgYI-QEQkB0KBgj3ARCQHQoFCAoQkB0KBgjdARCQHQoGCPgBEJAdCgYIgQEQkB0KBQgMEJodCgYI9QEQkB0KBQgLEJAdCgYI4wEQkB0KBgikARCQHQoGCLMBEJAdCgYIiQEQkB0KBgilARCQHQoGCIACEJIdCgYI4QEQkB0KBgiiARCQHQoGCP8BEJAdCgkI_____wcQmh0KBgiHAhCQHQoGCNIBEJAdCgUIfhCQHQoGCIgBEJAd; _t_tests=eyJZakEwU3FEVG5xcHRaIjp7ImNob3NlblZhcmlhbnQiOiJBIiwic3BlY2lmaWNMb2NhdGlvbiI6WyJEU3NhNl8iXX0sImxpZnRfZXhwIjoibSJ9; _pbjs_userid_consent_data=3524755945110770; _ga_WBSR7WLTGD=GS2.1.s1773279668$o1$g1$t1773279920$j60$l0$h0; _ga=GA1.2.719022686.1773279042; RT="z=1&dm=www.reuters.com&si=65a8406e-2fd7-44b1-956b-b454b135d0b5&ss=mmmsjds7&sl=b&tt=2a57&obo=9&rl=1"; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+12+2026+09%3A46%3A25+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=202601.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=9880ec6a-10f7-45ae-b2ad-cab230aa0c36&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=1%3A1%2C2%3A1%2C3%3A1%2C4%3A1&AwaitingReconsent=false&crTime=1773279606799; sailthru_pageviews=12; ABTastySession=mrasn=&lp=https%253A%252F%252Fwww.reuters.com%252Fbusiness%252Fcliffwaters-33-billion-private-credit-fund-see-over-7-redemptions-bloomberg-news-2026-03-10%252F; ABTasty=uid=jpm0rn74b0nd1qh3&fst=1773279018982&pst=-1&cst=1773279018982&ns=1&pvt=13&pvis=13&th=1530618.1907755.13.13.1.1.1773279021278.1773279986756.0.1_1531510.1908837.1.1.1.1.1773279697337.1773279697337.0.1_1583038.1973587.13.13.1.1.1773279021275.1773279986755.0.1; sailthru_content=859124378932047585809c7cfdb47bad622171ad98a4126aeb12a5d943b62313bebd1bc3aace72a38b10d5b7c9e670b2; sailthru_visitor=570a0f37-be8e-4d7e-b83c-f8305c0826be; _chartbeat2=.1773279026941.1773279988165.1.D1aVeQ-H7Xuzv9YxB0QSdJI2mNJ.1; _cb_svref=external; _awl=2.1773279990.5-2d1307a7acb566bf5e14e6855e414f6a-6763652d617369612d6561737431-0; bounceClientVisit5431v=N4IgNgDiBcIBYBcEQM4FIDMBBNAmAYnvgO6kB0ATgKYCuCVFKZAxgPYC2RARjSgJYA7KinQFmYPgDNJxAIb1GAWgwZFXPmAmsBiiBT4A3eVUXNqAEz4JFkmgPOKUVE6wMNFAdkUWq7CAj5tFDUwVg4uBgBzRSFiYNwABlwANkUE1QBGBKIQABoQChgQUmIySLDIsCoWDjyQFARjGFBzKgM+ZioAfT5zIoyAVlwATgAOABZkjMGBpPGPAfGMUbrI8z0YSVkwJ3zmWRQwTe3dkF5jnap81vbO5pAuClY4hiKAYTgn9io6t0ZAgT9cYDMgJUGguoQMDySSsCjsIrsWTMADyAGU6jcOt0EABPCA-WCtFAAawQrCg+UesnsRTqxCoXHaVGIFycAF98gJWF0SYJhHwUDAEBQaFcClQAI5ihpdckkqiA2BUZKyUayEbDAayYbA8yyKjmZJccbMAZcWQeSQeDIYcwJZgeXCjBKjLiSI0DDyjZjDZzmSQJZLmcyjXCSZ2jSQYK11disdRVNni9pQWDAsijMi4RJkDITVZUVj3Nh2EW4ooAKQACnUAF58NMgRaqBJB3CQ1gNbZdNitIottLturMKwV2AolCyEmyEfaAJCAQIXusfuwLAY-LUSIAoq4Dx1bcAroCWTfIqT6ezvasMsUXEns+EkCV2QQGlzu8PvvPmufpf3iurQYFW1YAHJ1LI1CyEBz6YkisEwAk+TfCKPI-kh+TQgECA0GuGDjGQHhYdoO64WutoggMnIgKw0jYsm+QiJIBgIJhIAIEqGQeB4GDOm20z5PKioAGqClYACSfSwNxvH7sMQbJB4SxZAMvziQgEkACL9DxfEeApyRKSpCRqTRTiRDAADaAC67JAA; datadome=DX2Sm9zPaBnHFc4qAevNOXzaq593sq3085L1qBVHhy7sIQozyTcXWvaA6HdB6s0qHptqwliDUvfpA2sIjELlJkRp5101CR3XaVxDEQvP3WEG1FsX9w2cOr027AieKMuS; __gads=ID=1114848cc7cc2c6c:T=1773279041:RT=1773280896:S=ALNI_MbtdX0y2aSRuhCuHvSQdXgdDRw3Aw; __gpi=UID=000010436f9b2d46:T=1773279041:RT=1773280896:S=ALNI_MYjx_W_wo1as3O0-t7EMqBspertsw; __eoi=ID=1d0d698bdd286358:T=1773279041:RT=1773280896:S=AA-AfjZJAgvkNLDlYuZLJa-ubH8d; _gat=1; cto_bundle=NKC4Yl9yREhmdk1iVENYeEJNVUUwM2FPY01ib3E4WCUyRnJJWkJ2Sjc4d21sNyUyQkJQeDM3ZnUwTGNOcGJSV3A3MnZ6U3l2RkI4cG4lMkJZMVMyZUFJS2JiVjVXbVIyWGcxNUgxaGhCdlRYZlB6eENqSWJ3OVliNzAzYUxJd2pLOElMN0ElMkJWcHJ3WThkbUFBJTJGR1dWZjlpa0FHZG8xVVZnJTNEJTNE; cto_bidid=8cKB_l9tZVU0VWZUVlhXMGc2eUpIeVhMMXhhY3ZkR3dHZVJxNWgzQW55RjBiaHo1Qzhqd1pOMGgzOWY0VDBrUVNvdHZFeXBMYjVieiUyQkxqY2FMUXFveEg4bTRocDRQWVJOVUZ6M0ZhUHoxeUJITm93JTNE; _dd_s=rum=0&expire=1773281839398' \
  -H 'priority: u=1, i' \
  -H 'referer: https://www.reuters.com/business/finance/' \
  -H 'sec-ch-device-memory: 8' \
  -H 'sec-ch-ua: "Not:A-Brand";v="99", "Google Chrome";v="145", "Chromium";v="145"' \
  -H 'sec-ch-ua-arch: "arm"' \
  -H 'sec-ch-ua-full-version-list: "Not:A-Brand";v="99.0.0.0", "Google Chrome";v="145.0.7632.68", "Chromium";v="145.0.7632.68"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-model: ""' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36'
```

---

## `futunn_com.md`
### 已完成添加
