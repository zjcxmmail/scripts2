/*
母婴-跳一跳
活动入口: 首页-母婴馆-跳一跳

新手写脚本，难免有bug，能用且用。

已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#母婴-跳一跳
5 8,14,20 6-13 4 * https://raw.githubusercontent.com/monk-coder/dust/dust/i-chenzhe/z_mother_jump.js, tag=母婴-跳一跳, enabled=true
================Loon==============
[Script]
cron "5 8,14,20 6-13 4 *" script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/i-chenzhe/z_mother_jump.js,tag=母婴-跳一跳
===============Surge=================
母婴-跳一跳 = type=cron,cronexp="5 8,14,20 6-13 4 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/i-chenzhe/z_mother_jump.js
============小火箭=========
母婴-跳一跳 = type=cron,script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/i-chenzhe/z_mother_jump.js, cronexpr="5 8,14,20 6-13 4 *", timeout=3600, enable=true
*/
const $ = new Env('母婴跳一跳');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
const path = $.isNode() ? require('path') : '';
let cookiesArr = [],
    cookie = '',
    message = '';
let helpAuthor = false; //为作者助力的开关
var _0xodL = 'jsjiami.com.v6',
    _0x28b4 = [_0xodL, 'wrFNIcOSHw==', 'w6I9ccOfKA==', 'w5HCrsOdw5HDjg==', 'wp/CukfDuMKC', 'QmnDsMOqwqhEwpQqwqnClsOBPcOywqs=', 'TMK1wpYww5I=', 'w7PDrVZjw6w=', 'WCplNiPDiAA=', 'PsOQwotyw7g=', 'w5DDn8Onw6jCjg==', 'wqPDimQ6w54K', '5p6l6L++6L666KOt6I225b2M5Lq65Li25aSi5Yqm776lNA==', 'CeS7muiykMO6', 'wqnClcOwXsKA', 'wozDu2hTFw==', 'w6F9w6JTwrI=', 'wpfCmU/DnsKdwoM=', 'IwxVwrxzKA==', 'wqIMLcOwHg==', 'cMKSJwhwTg==', 'wokPw4B3w58=', '5byK5bi+77yF', 'DMOxwqBBw73Dtl3Dr8Og', 'wqBbXU9H', 'w47CqsORw4LDsg==', 'wrDDsVzCvBE=', 'woksEsO4Iw==', 'TcOzwrjCvw==', 'w4rDlcOLw4HDqQ==', 'w5LDsMOmw4bDmcOiwpw=', 'O2oEdMOj', 'w6jCvjYNwr4=', 'YGhTQ8O9', 'wqXDk2nCoCA=', '5byD5buH77+c', 'wrfDtGbCqwM=', 'w74IwpYMZw==', 'fAAZemY=', 'wrTDhULCnhU=', 'P8Kqan0E', 'w4fDi8Oww6rCmDhi', '5pCf5L2T5oiU5YqX', 'WQPCpcKY', 'aMKmAmMLwqTDhMKx', 'w4hYBg==', 'w4bDlcOVw6zDvQ==', 'wqPDgUTCuR8Ew6tX', 'wpjDlWNhw7PDsgt2w5sJw5wVw58=', 'NjRdwp1J', 'wq3Dh0hmHg==', 'PsK8XXMg', 'wrRhAMOeDQ==', 'wo8JJ8O7BMOM', 'w4I6VQ==', 'w7IXcMO/BA==', 'RRnCsQ==', '5b6C5buo772g', 'w6YJwpc/RMKhRcK5eg==', 'w5NAw7LCj8Oi', 'wpPCmsOQe8KY', 'wo7DlnN/LA==', 'F8O6wpnDhsKb', 'ZMKNwrQsw6zCk8OjUcKk', '5ouD6KGV5LmW5Yqn', 'w5bDlcOJw5ZBwpUf', 'dTkf', 'wrd9dmdNUnzCvsORPcKxaQ==', 'ccKewrQww7s=', 'PRB9wqtH', 'w7APwpc5WMKFQ8K7Zg==', 'P8K7QFAOwrw=', 'aiIZQ3o=', 'wo7CmE7DssKBwphwwpE=', 'w7p4w5bCucOLJA==', 'w5nDm8O3w6DCniJ/w6A=', 'KWsySA==', 'MHcmRMOvwpg+aw==', 'anN5d8ORFcKYw7M=', 'w44DbMOeGMOu', 'OMKiXEgCwq3DlsOSSn3CokZkMcOzwpA=', 'w4LDmsODw4UIw4YIFB04bmIDVAEOwoI=', 'w47CqcOFw7PDlxBJOjZvwooGwpXCnwjCqnYRMEXDqsKrHXrCgGPDjsOJwrdbFGDCniHDh8KeACjChcOQwq1gwr/DoVgRw5jCh8Oow4xfTmDDrVZTwq3CqgvCuG7CosO9wozCjhAnw7TCnDvCtisxw6x4aWfCiMOqw6TDoTrClV4DwoY9S8OScmx1LzzCtDLCsVhQw6zCjERiN2XDrkLCljLCsgBsbnJRS8K7wqJtMsK5w5/Cn8OpMVM+dMOEZx1ww41kw7EOwojDkx/DscOiZ8KZG8K3J8KKw61ZwqLDgSVGfcOewogvZMOHw5JNByoVC8OnaWtjw4vCmMOhw6TDj3LDmBQdSMKZPsOXAcKcw6tLw6QLwpJgT2kew5vDu8KKw746TmzDtMOVJSFQwrBbccKcwp7Cs8OHcsKKTlJ1w6tNwrvCozPDt8Oxw7MMw7HCvcOsaMKRfVJsNWATw4puwosTw7vDtjLCvkd1OXQZw75Kw7gvw4wmeyt4D8OKw5jDocO/dnvCtD3DhnUWU3TDp0MiOsKPdwvDhFfDmDvDkMOBJjR7w6/DjsKkwpbDglbCnMOWScOZw5gYEnpswpDCncKjMcKyw47DscO7wo/Cg8Kew7Iyw5dIw6wAw6p7woVtwpsdwrAsw5xlfcK5w41OO8Kpw4TDoyMjOMKYCi9IwoVEWcOWw4LCpx7ClVw3UsOzwqltw7vDpBNATG4owokDfcK+wpt+QMOCw7/DmhvDjFRKwpNQw7XCnjnCuUnChXRiw4FeCFQ=', 'w41bHsORwrLDoXASB3LDkVp6w4PChMOfw51NCcOPw4QrCcKrUMKlQW/CpsOxbsK4w5rDky7Dm2PDiW3Ci3wmw6JFwoHCnVLDh3luw4HCn8KyNjBCMlAwWg3DjsOSOzjCqsOdRzQhw4RVIsKKwqMLwrITw41HRGcQw6PClsOf', 'Xk7ChsOsXg==', 'wpDCjMK2HMKT', 'aMKWATtk', 'w5bCgSoQwoo=', 'DxDCpsONAyLCnsOTLA==', 'fsKHNABV', 'U8KSNkUk', 'w5nDgnI=', 'w7k4TcOmEQ==', 'w4AsUsOAMg==', 'FiBiwoFK', 'wozCq8OUXcK/LGw7w5VOw7HDtHgLG8O0w4s0woTCj8K3w7nCr10=', 'wrDDl2bCpQw=', 'dz1o', 'LsOGwphiw74=', 'BF4OesOl', 'wpPCvMKKKMK7', 'ZzLClcKsXA==', 'w4pWJsOzwoU=', 'U8OVeg==', 'cVnDjsONwoQ=', 'wo/DlWHCgAE=', 'w7BCIhZC', 'woYUXsKAFg==', 'woHCrcOSQsK+VSxww4M=', 'w4HDicOJw5B0wokFHw8=', '54O2aeW9oeWKtOagveaUqg==', 'w5DDn8Onw6g=', 'wpzChEHDv8Kmwp9lwpY=', 'wqw4V8OZw6rDs8OF', 'wqPDllnCiTkFw6FL', 'wqRhw7DCtA==', 'w4ItSMO1FRjDpMKm', 'w6ssdQ==', 'wpMHMsONEw==', 'wqnCtcOlacKP', 'WsOIb8KQw7xhThd0', '5pCI5Yqh5Lm3', 'wqDDhUTCjA==', '54GCw7zlvbvli5bmo5PmloE=', 'woQUKcOaP8OQwqVx', 'TC1vMQ/DlRVE', 'w6TCsQ4+', 'IwxV', 'ZMKNwrQsw6zCncOpRsKyG8O4VA==', 'wp8Hd8O0w7c=', 'wqTCvMK7GcKp', 'w47DhcOPw4UJwocAGA0x', 'aUXDu2xe', 'w4fDisOhw6DCkyx4w6PDlw==', 'wrDDqUXCpRA=', 'R8OYwqrCv18=', 'YU9LUsOs', 'cMKSJw==', 'wq44TMOSw5bDi8ONwpcPQF/CtA==', '6aK75Y2K5oub5YmU77yy6K2D6L+55ZuUQhHDmeaer+eer+S6puiyo+Wkq+WJsOOAtQ==', 'RMOGwqDCpFY=', 'acOXwp7CvG8=', 'w5fDu8OWw6TDi8O7', 'wrDCu3nDqcKD', 'cyccWV4=', 'wp45ZMKXFg==', 'eSDCtcKgfw==', 'UcOzwqw=', '5b+05bmN77y2', 'w7Q3YMOmJEokF8KA', 'w6DDocOTw5PDqg==', 'w5bDpsOww6rDisOTwofDhic=', '5oql6KCo5Lmx5Ymn', 'w7HDnMOgw53Dtw==', 'woI3f8KRIQ==', 'w5bDpsOww6rDisOdwo3DkTHDgwhU', 'wpsGSw==', 'wo0HLcOb', 'wrPCkcOMbMKl', 'w75qEQxb', 'a3TDmA==', 'wpHDp3dZC8KLwrfCt8K3b8Kpw7TDucOXw5DCm8O+c8O6cXc8wrTCo2zCqsKCw6AcT3PDo8KDBXPCpi4qwrXCi8KUd8Kj', 'w7nDrkhew7U=', 'wrEjRcKFHw==', 'P8OnwpfDu8K4', 'wpPDlVfClR8=', 'fMKNHlwA', 'wrPDsWdoGg==', 'w6nDlsO/w5Ng', 'wpHDiGXCgSc=', 'A8KcYV4t', 'fcKaNiZn', 'w5JtPcOWwpI=', 'w5bDrcO/w4rCqQ==', 'wpgqw4fCvMO4', 'QULDrMOcRg==', 'RTHCnsKpbw==', 'RCVQNyA=', 'UMKJwrIKw5w=', 'wrISw6zCjcOU', 'woEab8Oqw7c=', 'JcOowqpYw4M=', 'XBjCt8KFZA==', '5b6m5bih7763', 'FcO8wonDgMKC', 'wphjw5XCjW4=', 'S27DscOHeg==', 'bDzCrsKhXA==', 'wqp1w6nCpWfDiMOMw7jDrwnDpWjCgWwrNgZr', 'wrgNZE3CiwBww61Ow73CgA==', 'wocHNMOf', 'VmjCqcOCXw==', 'w4TDjcOQw5xu', 'RMOTX8Kvw60=', 'LXMwXsOp', 'UMO9W8K+w5s=', 'wp7ChFrDtMKdwrJswp3Cvg==', 'w48qTMOhHRXDtsKgVMKlwqDDusOwUx4lw5zCvw==', 'WCDCisKoWMKwwqhl', 'OsOiwpTDgsKbwpfDosOf', 'TRfCosKR', 'w40YcsOFD8ORwovDjsKtwql5woU=', 'KcKzXlcO', 'wrkvSsOew4vDosON', 'wqTCoMKwPMKL', 'woHCm8KhEMKVecKrLSHCpsK5wpzCrBE=', 'w58daMOLPA==', 'WU7CvcOse8K1ekQ=', 'WcO9wr/Cqg==', 'w7XCox8two9IEsKP', 'Y8KewrUmw5fCvsOqWg==', 'wqHDhmk2w4QDTsOp', 'acKsAU8awr8=', 'cxvCrsKAdQ==', 'wq7CvEnDicK+', 'woDDo0fCnAc=', 'wroMW8O+w44=', 'VEnDmMO7', 'woPDgWZa', 'YMKPwrYvw7fCs8OtQcKoFcOxHsK6w5/ChMKP', 'wrMMYk/CnVQrwoVPw7HCisKJTW4BRAAhwpTDvQ1gw4Mz', 'wpTCiCw=', 'w78ZwoQmWsO9RcKPa8Kqw5rDumdZdsOlOQnDh8OjCsOHAMO/w7zCvMOxwpssEHJfMsOvNcKRaR3CqMO5wpjDlDbCuMKNwr0awpzDs8KabcOrw4bDvBnDn8ONNsKPwqjCqMOWwp0PWcOoIUMCQMO7w43DlMKxNMOmRMOIwrR3w6hefsO6wqhDP8Kew6JSwoYewpXCtMOsw6/CszDDgMKlwoFxTTPCisKFBHLCnlxEworDqjIdUMOYw6jCuT/DqMOAbhZMw4AEAgLDi2LCi8OtfVjCssKbwog6PnnDj8KkwqEPLiTCvHDDrMKawocdw4jCijp4wr40wrfDgsKgw4DDrh0QJx7Cr8OIw6o2YB3DvkM9Ml9Cw6nDl8OIXcOmV8KowpDDnsO/fWLCvMKdBcOlLWViw5hAMH3Dsndcw7hJRsKWUTsYw5rCsMO9UyHDqwwHXSMHd2k8w7sHwqfCjMKpUcKaFydhHcKdw40xw7DCicOva8OSwo9gUMOdCW5Cw50MA8OHBsKkQinCk8Oiw4XCvVZrFzjDuMOhwrbCiRtuw5DDs23Dh8KYw4BqwpwqEsOnTVhYw43DisODw4PDglp+DsOzIwJRDmREV8KMw4PDsTjCsi1ew5/CjUUVw5B9wpLDqsOmW8O7JsKPwoM4WsKZw73DnhzDlcOBwp00aMOIYMOnw7zCj1LDpcOzw5ZyRgM6w5TDrVZAOcKeM1pHw7gwOS/CgcO3bsOoFsOsCVjCgMKJHsOFwpQOdToPdh/DrsKawr8CTWA6Y13CqVIJYA==', 'X1PCqsO3RsOuOA7DocOnw67CiU7Dll/DrG9yWWF0AUTDhMOVwqxADAYKw6XCnFfDtsKOw6EGwqPDngfCoU/Csj3DmGwiwo0lA8Oew5UxwrRsSMKvNsKVwqbCpzR2w6/DtS1eOcO4w743woLDocK+YMO0S8OKw7IiSE3CjcKKYsOl', 'b8KYLilgWcK0w4jDgsOBwrUDwr7CoWvDtg==', 'w5DDrsOzw6nDmQ==', 'HTl6wpJM', 'YknDkcO/Ug==', 'wp9ObmFP', 'wrRFVkxV', 'wpkObcOdGA==', 'wprCjsKgNsKMcMKSOTc=', 'wrfDgV7CiRIOw6ZKw7YCG8OkTytYOA==', 'LCjClQ==', 'wqd6w63CpQrCi8Ocw7TDvwzDsGXCoCV/NR0=', 'OsKiBX4BwrvDg8KgKcKowqTCuw==', 'fcKeNCR0VcKhw5/DuMKL', 'T8KkA1MR', 'bWLDmlkqc8OWw497w6A=', 'wq7DnUBnKQ==', 'wrLCh1zDscKO', 'wrIOEMOYDg==', 'wqLCjEvDq8Ko', 'wpzCicK3LcKrecKdMA==', 'w70JwpEmWcO8A8OwbsKgwpnDviwJdsK7cxfCn8K9U8OGRsK3w7fCq8OawoImFTYZK8OgPMOXFTnCmMO6wpjCrn7CrsKKwoQEwpXDrsK7QsOyw5nDvg==', 'wrY+wpA=', 'w498w4h2w6caFsK7YsOl', 'VDkCXnPCmAoxSQ4gw5cPbhNAwpYAw45Cw7lwRMOvZXrCkMOZwq7CjCHDtTvCoA0fMhzCqcKUH8Oqwq7CgyzDkcO+w7PCsmPDmHfDgEzDpMKpw7/DlsKKRsKHHF3DsMOZdUIAO0XDlMKmw7zCkBnDkWAHwrrCsy8qworCj8KUw7Q5ZMOew4xCwqZRL8OYCsKCGhjCnMKAw5U7KU3DtcKvZj/DnMKgQcOWDcOCw4o5w7zCn8KPwrHCi0zCtkXDt8OVX8KUV8KwDcOIwo3DocKqwqE=', 'w43DlMOew4VXw5xDXhM7YnNIFQ8GwpTCtsO1w7vDtsOQHcKRw4k2BcOUw597asKtSkxuUFHChyvCtMOrwqlhPQAWdsK+w6UuwrNtaRzCjAQobg==', 'w6YuZcOAHA==', 'ZFbCusOUUw==', 'T2fDisObeA==', 'GcObwobDucKf', 'wqNOS3pI', 'w41+w79XwqU=', 'w7XDrcOew6FW', 'w6TDkcO4w5HDrg==', '5LqR5LqA6Lyf5ZiV5Lq456uO5pWd5o2k', 'bcK1DRR0', 'TMOTesKTw5c=', 'w53DjGlCw7k=', 'ej0XZUY=', 'KhFAwpZzGcKBwozDuw==', 'wrwNQkzCpQ==', '5pKC5Ly/5oii5Ymm', 'aDsqZ3Q=', 'dsOzWcK1w7k=', 'w4LDucOQw5XDkw==', 'wp0Fw7d6w6A=', 'wojDvlF5Ew==', 'dGLDi0podsOf', 'woEEw6R+w4NLCw==', 'wqvDjn48', 'YGdsXsOyGsK7w6rCrcOfPmDCgn4=', 'WcO1Z8Kyw6o=', 'w5rDl8Oww6LCsyp8w6A=', 'W8ObacKe', 'wrHDsWHCoT9nOcK/', 'wo0PI8OVGMOfwq57', 'w6zCvx0=', 'wrshEMOxJw==', 'amjDmA==', '5b655biL772p', 'woXClcK1GsKQZQ==', 'wozCkcOIRMKh', 'wo3CrMOuQsKocw==', 'wprDu2pFHMOuw6jDqsK6acKtw6nCpA==', 'NGEMQsOowpQ=', 'wrlqfXs=', 'TTB0ECfDmBs=', 'fDgO', 'wo7DhlvClzNLCsKX', 'w51SHwhW', 'wojCsMOH', 'w48PdMOOHMOowo8=', 'aDBpPi/DngBhfg==', 'wqJudnta', 'ZWdv', 'wrgXeVTChws=', 'w7LCtQw6wrRVEQ==', 'w5gfc8OC', 'wqjDin45w4sWQg==', 'w5PDm8Onw63CnD9w', 'VkPDncOqQgjCrA==', 'wr0RekvCixw=', 'McKmWFQYw7TCmMKJUHfCog1sJ8O9wpBnWMK0w541dMOtwqJyfA/CuDAEw7R7DMO4esKlwonCgMOQw69AASoGGzTCnsKkbsKpw6LDh8KWwrgicsKYSsKSecOKaMODJyvCj0lRJMOEcz04CsOMD8KOw4bDjDrCrsOIw7kVOjg=', 'UF3Ct8O3GcO0c0TDtMOuw6HCmUnCnx7DoG4=', '6aGU5Y+Z5oiU5YqX77yz6K+o6L+N5ZiTw4Mswqbmn6nnn7nku5bosYPlp6rliZDjgqA=', '6L2s5rCf5p6a5pOO6amN5ayb55qV5p6/5L6077+F56i75ZOL5YSX5bGh6Kyi', 'fEd9Y8OT', 'wrsoR8OKw7E=', 'w6TDpENJw68=', 'wqM+SsONw5fCvMKHw4sUFBbCvFZgw4lCw6IQwpw=', 'aXZvfcOsF8KKw6zCq8OANT3CnHTCnC/Cr0vDrm8xwoVlwo3CscOPwoDDuV1dKW1g', 'M8K2TVQbw7XDnsO2S33Cogw1e8Kyw4o6RsOlwosvOcKxw7RmdgPCvzNEw7JxUcOgPMKqwo7Dn8O0w5MnLXFQBG7DkcK4b8K8wqvCtsOIw7h+J8O4G8ObcMKWMsOfe2jDtCkxdcKNbD0lEcOEGMO8wqPDqTXCiMKGwrtLNmpDNgsdWcK4KBtmfy5aB8O0wqMmR2dfDsK+wqk4w6AZw63DhsKQbsOTwpJ9w5xfL23DlDR8D1FlQ8O9QU/DkMKAdyvDgMKdw6nDqQkuXMKWYkxDwpzCtsK7Pw5QwolVw6AQWQJTcCbDhD9+RsOawqPChcOew7DDp8Krwq9VTsOdwrRAwqvDk8KnXgrDux4Ww6zDhjbCgMOZwoXDkg/DnxPCn8OMwpxbYA99w5QDw5rDvyd3ZsOuw6DDtsKdMMK4JcO1DMK+esK/IsOjJsK5wpvDsMOhwoHDlMOjw79FB8K9S8KDwrbChkrDmsOPw6duw7QSwqHCjmTCh8KGwpvClMOJwo/DrhMsBBfDon4DwoQ2HcKMfMKdJcKkw5TCpGc+w78MI8KufcOpMV4OfMOOd1o=', 'wqXDsnTCvx9qPsKkw5XCqDHCmhEbw5zCnA==', 'wq/DlXjChBE=', 'wqbDgHPCowY=', 'wrfDt3TCtgRkPsK+w5XCszA=', 'wqgNZlrCnA==', 'SG3DqsOBwrlK', 'wrdKCMO8Mw==', 'w7kGRcOGBA==', 'w4xtw5l2wrlBVcO9dsOlHnFFMEzCoMKvccK2REXCs8KfEXTDgAk2w71Aw5Utw5d6cGzDpnE6w7A7w5FR', 'wrcPRsKyMA==', 'EHsPZMOH', 'aULDsENx', 'S3JpUMOn', '4pS5LOW/l+S/iOaXu+WIlei8o+acmemDluechOitlOaZgeS/tuWMt+iDquWftOS/oeeWs+ODqwpow6PDmsKVQMO2MALCoMOB44CO6aO555uNw749w7nCjELilJpa5aaT5p+Z5L295biQ5rGg5p2V5L+o55aR44OFccO0fl4Fw5k5wqUGE1Pjg7jpoobnm4Tku7fml7HliInku6zovY3mnLrmt77mgKborpXnp5vogKjmioIHw5bCisKtY+KXiMKY5oun5LiP5ZWj5qyP44KAw780dk7DjSwAwpDClCTDpeOAtuaTj+i8huaIueiFleadvueboeigr+S4n1NRRVwi4paFGOW6gOisquabnuaPsui+peijmOePq+WhtcO6wrrDqzjCjeKUrcOsw78RwofCkcOGW0BTRiw5dsK5UumCsOe9meaXmeaiuRVmw4LDj8Obwo7CmBpAw63Dt1rCnV3Dqnxqbh3CggfCr8KnFcKBwpfCv8OIPHVaw7UnMcK0wqvCnznDlyIxw4filZxF6Z+36b+FLsKzZMOCwoTCo8K86YO957+/5pe05qKG772ywqXDmcOzw6/CpsKJU8OgFDfCgMOdwqnCisKpc0PDrcKxwpBNwqvCkcOyw5Y5w6RWQ+aLuygRwqM5wr8Xw4wpUE5qw5TDjjgVwro16K2T6IWR6KCd5pyM5oq444GlVTk4E8K34pe+O+S5hOaGtumAuemcmeWnm+WSoeeYheWkkuS8tOeatemDn+e+neaUiOajlcKcw7NFw7hKck7DqMOJDCHCq8ObwoPorYnohozoo6zmn77miK/jgJQww6lh', 'w71hw5PDo8ODeMOYw4TCjRHDjsK+', 'dx7CocKvYQ==', 'w6QnMsKhZA1rV8OZemcmTcKXwqMGwrEzRlfDnsKi', 'wotVw6nCtmc=', 'csOcZcKiw4g=', 'eDUMXmnCnR9nNUQ=', 'wqbDnEQyw44H', 'w5bDrMOnw6Y=', 'w5rDnWV6w5Y=', 'L8O3wrhgw7k=', 'w4hVGsOlwos=', 'Y1PCjMOKUQ==', 'w5LDpMOrwqvDlcK+woLDhmzDgQBc', 'w4fDj8OWw4zCjA==', 'J8OrwqXDt8Kh', 'ZDxXIRc=', 'fXFTd8OJ', 'J3wRXsO7', 'wowbf8KABA==', 'w7gvZ8OMEg==', 'cAJRwo1oLMKHwpzDp2HCpMKM', 'XMOdXMKqw4rCnR4RHcK5', 'woEFR8OJw40=', 'A1nDvA==', 'wqXDi2stw5pZSsOcw4Q7wr4iw6gOPX1FwrLDosO5wrzDssK9wrdew4N/alPDnyXDiUXCq8OKwo4fw77Ct2rDusKoVMKAw7PDoMOXw5vDkMOrF8O+MEfCsiXCo8Oqw7LDuHdAIsKwTU3CpsOcVnnDrwYhBlFcJWEbV8O3WcOGUsKowobClAfCu2LCgVIWw7oFw7k1woPCtzLCgsOfecO7E1/Cr8K5wp7CnQDCiW7Dr8OLZ1rDkkzDl2RrPUjClQDDkC9XR8KJw4Q5TMOOwprDskbCmgTDnCBZwrnDvXEMwo3Cu8OBw4jDtljCuEfDiERtw60WfzDDnsOzd8ONwqnDo8KTFMOKJsOgcCBmwrHDocKgw6fDqsO6w5nCpsKfNsOMwpJSwo7DlzHChsOeRSzDp8O8QcOUDlPDhg1twobDnMKOP8KDQUbDhyU4w57CsMKvZcKBLMKfTwM6NFB3wp0Bw4DDuMKaXsKKXMK3GcOMw78gfiFvJSDDl8OUDzBXBsOmXcKtw6YvI3htFkzCtMKuw5s+w4FESsOLZMKzQsK9UsKGw7RDasKiTWhAw5/CtVFfw4bCvMKFw6ACw7BTHMO5wobCmFBwYRPChsO8EsOKOMKULHpowrFbwqLDnkrCrMOWw40Swo8SO8OnwrXCgTvCosOEwr80WXXDkEjDvsKeClRmwoDComfCvh3DvkRTwoDDilLCo8KVw64Mw614w5jCqsKsUMOtw73DqBfCucKVwoQSY8OkwosydGDChFHDvsKoOEHCoQXCoMKsMcO5wqV1wpXDhcOOw4LDtsOr', 'e8KXw6sgw7A=', 'wqtDw6DCum4=', 'K18wZsOI', 'w4wxQsO9KRLDp8K6', 'GMO+wrfDksKc', 'TzHCrMKqRA==', 'fRrCgcKtdA==', 'amLDkU5zeg==', 'w7VqDcOHwq4=', 'wrN4G8OVMQ==', 'DmAYYcOl', 'wq92Dg==', 'wrszWsOLw4I=', 'T8ODecKJw6g=', 'WMOQdMK5w6o=', 'wo4HNMOdHg==', 'w4xBDsOEwrk=', 'wrBda31c', 'w7wOwqk5TcKvQg==', 'UcOTfsKUw4BDTBY=', 'w4lADQ==', 'w70ZZcOYM8O9woPDmA==', 'wr/ChELDjsKB', 'w4nDtcObw4HDtQ==', 'w5MxWcOwLA==', 'XTLCncKpdA==', 'ekvCtsOMWw==', 'w4DDksOYw5pWwqUDFR4=', '6aKf5Y6A5omo5Yqo77yT6KyD6L6/5ZuAHVBg5pyS55ys5Lqr6LCF5aW+5YmI44Gs', 'w53DjcOdw6bCmS4=', 'wqnDl1c=', 'UcObcMKa', 'w4sTX8O6JQ==', 'UsOJeg==', 'w4rCrMOJw6Y=', '44C05o+256aR44KeUxTCpsKRacOZ5baT5aSm5paX', '5Luj5LqN6LeX5Y2H', 'w7sUwoY9ZMKnQcK6', 'GsOiwpTDgsKcwpjDqcOV', 'woF4w5TCkkE=', 'JhB8wpZlPw==', 'C8OjwpvDpcK8', 'w5QHwo8XaQ==', 'wrEcw73Cv8Ow', 'PMO0wp/DlMKcwpbDsMOZbsOc', 'w4p4w4Bj', 'wprDvGxCEcOU5bWq5aap5padKsOlwro=', 'w65AFgl9aMOewrI=', '5LqI5Li66LaN5Y24', 'wqYSw7Vvw6JOA8Og', 'SDZfAyw=', 'fB7CjMKzVg==', 'WsOewqzCs04=', 'w4BCJsO7wrA=', 'wpwdVsO6w6M=', 'wpDCkUrDkMK2', 'F8OTwoDDgMK/', 'woPCusOU', 'wpPCglzDq8Kcw4ssw5bCusObYBUiajPDgAXCvsO8FChkRg7DuBrCtEjCqMKYwpU3fm7CklATwro=', 'VFjDqMOcwqs=', 'fXzDosOBQQ==', 'w4nDkMOjw7HDmQ==', 'w5VOGMOSwqQ=', 'w4kwRg==', '5ouP6KCm5Lu75YiL', 'w5fCuMOHw6DDglhT', 'VMOUdMKWw7g=', 'wr5gYw==', 'w41bHsORwrLDoXASFWfDlhBqwpTCl8OQw5dNAMOEwodnDMKiUcKjSW7CtcK/c8K3wofDmG7DnGg=', 'aiIKXnHCkwJ4BQ==', 'w48vwqkzfA==', 'wqrClsKfPMKt', 'wrp7cHhMJTbDosODLMK/IsKfVG/DmMOPw4EFNsOAwobDm1/DikDChiwTw6rDqcKIw4h4', 'w67DuMOsw79W', 'wqo3VX7CpQ==', 'VsO5wq7CuxPDlUFjVQQ=', 'wqUFXsK1CQ==', 'w70JwpEmWcO8A8Owa8OwwprDsnIKPMO/dFbCkcO9XMKIUcKhw77CncOswpVsOHwFNsKpZ8KiGWjCtsOAwqrClF7CucKdwp8ow4rCs8K8fsO0wo7DsgzDhcOtHsOuw7fDh8OPw5MVYsOcFFpVB8K/wpvDkMOvNMOMdcOuwrBHwqNTMsOvwqIUasOLw7oIwrATwpnCu8Kww6zCsi7Dg8Knw4Z0SjXCpsKSSg==', 'f8KlTV1Ww77CkcOKTXXDsU9iI8Oow4MyBcK3w54mMcO3wqECeRTCriUW', 'TU/Ds8OkWw==', 'KiXDilpiYMOqw49uwqcoRgMrwqtRDk3Dr8OqR29wwoFdw5PChsOdfsKcdR58G8O+b8KRwpzCjsK5IMK8cg08', 'w7wNVMOULw==', 'w4TClTknwr4=', 'w7DDu8OQw7HChQ==', 'w5FBw6Zjwps=', 'w789aMOtOg==', 'wqgpQFXCpQ==', 'KsKDek4g', 'wrldCMOSNQ==', 'w5R2w55y', 'wrQ1w7FRw4I=', 'LsOhwrXDpcKV', 'wrHCpGvDrsKo', 'RcOoeMKM', 'RMKTBQhS', '5bym5bie776x', 'wqgMZFbCgAltw4xF', 'ecO7a8K7w4Q=', 'T8KtwoQMw7A=', 'w7bDrUd9w5Q=', 'UcOpwqjCilo=', 'fW3DjsOKwoM=', 'wr/Dhk0Rw6w=', 'wrN0w7bCvEjDjMORw7fDoA==', 'woEhYWzCrA==', 'w4tcAA8=', 'w5jCpCoGwqs=', 'woopw5ROw4I=', 'w4J7Nyhd', 'wrBOw7PCpXM=', 'ckJ+ZcOk', 'wqDDo3DCsg==', 'wqcvUMOaw5DDrg==', 'w7xow4dMwo8=', 'QW3DsMOJ', 'bcKawqgkw6rCuA==', 'w7NUw7XCp8OY', 'w57CicOFw7fDhg==', 'QEfDn8Ou', 'w6YgZsOGDg==', 'U0bCqsOm', 'w7QewpElY8KC', 'w7bCqMOX', 'wpEWc0nCtA==', 'ZULCrQ==', 'LmYjWcO5woI=', 'wo8Hw5/CgsOq', 'wpENAcOTOw==', 'QsKLwrACw7w=', 'wo3Cm8KmPsKR', 'GcOswr5cw7bDow==', 'w7Q3c8O7Lw==', 'wr4kWMOUw4rDr8Obwow=', 'VknDisOrchfCpsKZa8OwCGTCqw==', 'wqZpw6jCoUPDmQ==', 'aMKEMCg=', 'w5bCosOFw6fDuElMBT1r', 'w7MUwokiT8K0', 'w49KAx4=', 'wpbCk0zDssKMwphtwpw=', 'wpEUw7Z7w7hOHcOu', 'wo/Ck8K+K8KHZQ==', 'wo3DqnNM', 'woETJsOY', 'w6PDsMOow73DrQ==', 'wr4ww7tZw6c=', 'KsOjwoPDn8KgwrrDq8OUbQ==', 'wq8rSsOcw5c=', 'Qk/Dh8O7VQk=', 'wrg+X8OJw4E=', 'w6cSwoQyaMKqQ8K8aMKJw53DrCg=', 'w5dAC8OFwp7CuTNSF3w=', 'w51aHw9Wew==', 'wqZ2dG0=', 'RjpiPCXDkh1O', 'Z8K2AGw8wqzDmcK/', 'wq0jUsOJw4HDtA==', 'w5FWGsOE', 'wrcXcQ==', 'WDpoMQjDlAdCXCs=', 'w6kif8Oq', 'G2gba8O4', 'w6QnZ8O/Og==', 'wr7DkGHCoA==', 'woMAw6Juw4k=', 'UMOvwqw=', 'wpgUQcKW', 'wptpPMOyMg==', 'fMOkwpvCjFk=', 'woXDulTClBE=', 'w4k6T8O2KB4=', 'bURwU8Os', 'cH/DocOawoNEwpcd', 'w5JdFx5L', 'EcKRYF4j', 'MX0l', 'FsOXamcoFsO/5b6m5aW644O/5Lmz5Lm76La25Yy1', 'wqluw6DCsF4=', 'wp0Iw7N2w6JOA8Og', 'wo4Lc03CoA9pw48=', 'wo91C8K7dlzCqMOjCMOG', 'w7Viw7bCosOJP8Oc', 'w5nDjcO0', 'U8OfRcKm', '44K15o+/56WQ44KwwqLCtDBWHXLltY3lpI/mlZA=', 'wqsKw67Co8OG', 'w5Iwd8O9BEwgFA==', 'w5Horo/ph5vmlo/nmpXlvLvojrPljbw2w7zCkMKZX3haBVxtwpvDuE0tw4Fww490woHCosK0wr/CqGBFw43DkcKbJcKjwqMRKTDDmVTDrExWw6gMSBrChQ==', 'w6QsfcOkI0jltr/lpYDmlrE9I3I=', '5LmI5LuD6LaG5Y+a', 'XknCusOiTQ==', 'wpbor6bphbfmlb3nm5XlvIPojIXljbbDgB3DjsK4aGk=', 'w5TDv3dmw4I=', 'w7A/wr0VRw==', 'cSIMR2zDjkQxHVB5w5lVNTFJwoBAw4gWwrQcfsOea3HCocODwqbCgy3Cu1vCmkNKYzs=', 'wqnDo0xYKg==', 'woPDl2JdGQ==', 'Wz50JiM=', 'w7bDn8Oyw6nDiA==', 'w5d7w7pEwq4=', 'wrrDiVtYFA==', 'UQ9cJC4=', 'wqRow4vCunY=', 'QxdsHys=', 'UQpyOCo=', 'w5xqw6Z/wrk=', 'wqMwasO6w5c=', 'McKmWFQYw7TCmMKJSyfDogQgKMO4w5B3GcKzwpV5dsOgwqoxXA/Csmtxw6VvDcK4YcKWwqzDkMOvw6cYBg0ZEknDo8OxMsKcwo3CmMKAw6piCMOpK8OsMMOyeMKYc3XDhRwZOsKcN2ByRsOWDsOBwpbDnB3ClcKUw7wIPjYXalABVsKNIxUxKCxYGcO+wr4mQHdkD8Ow', 'G8OJScK6woHDhEwEOsK6w6E/PnMOZm3Cnw9Cwr53VRgfOw7Cl8KPLg==', 'w5RZDsKGAMKQbcKWwqXCi8K8WnrCjMKYw6PDjSc8bDfDqMKjwqRuOsKHX8KAa0ovwqgVLEbDv8Kjw7kz', 'w49ENcONE8OMwpN3w6DCoiHClCBYP8K9wpN3LirDjlDDoXzDucKaY2E8wqU5wowfw7XDvwbDicKew5RuHi0ywpEF', 'R1rDqcOdwqs=', 'wrEQw6bCqMOp', 'w41qw6Fpwq0SFA==', 'wqEqc0w=', 'wqsZZEzCiw==', 'w6jCpA4vwrUcW8OPw7QmwogVQz5aw5bCshrDogPCmhTDtcORIWTDjQLDuRrChFsfYcKOwpfDmQ==', 'V1LDmcOmXhzCoMKceQ==', 'YF3ClsORYQ==', 'wqzCjGDDjcK7', 'wqjDrWM=', '5pC45Yq15LmU', 'WcOXS8Kmw6zCmwMGIA==', '54KSVeW9leWImOahuuaXiw==', 'w4wLdMOL', 'GMO3wrtMw53DpFk=', 'w5TDpsOrw6HDscO+wo7DjQ==', 'w5fDtcO2w6Q=', 'wrDCvMOxYcK0', 'woDCvsOUTA==', 'w6IcQMOZNw==', 'w58bQMOlPQ==', 'wrXDq2spw4s=', 'fTcMVg==', 'eDUMfls=', 'I8KWTVAK', 'RG/DsMObwoRh', 'woQAw7lp', 'wpbDgUM=', 'w5bDlMOLw4FRwpU=', 'VsK7BVMk', 'eA5fJj4=', 'STLCm8K7Yg==', 'K8OwwoXDkcKh', 'ZmdydA==', 'OeS7uuiwvj0=', 'w4Y+VcOyNA==', 'wqclWQ==', 'w4tOB8OE', 'w5jDjmhxw4zDsQc=', 'YcKsCG8=', 'wpcFXMKfGsKWfsKswq3CicK3VzjCg8ONwrjCmGw1bynDqsO5woJ0OcKSE8OZNQJowr8=', 'wpDCk03Dq8OCwpBvwpDCrcOO', 'wpcFXMKfGsKWfsKswq3CicK3VyrDncOVwqHDg2EnZSPDs8O7wodqNMKeE8KWekwiw7E=', 'wptfOcOTAg==', 'wobDp3PCuSM=', 'ecOnccKAw7k=', 'w40vcMODKg==', 'UMK7HkAp', 'wrMCTsK7Iw==', 'VkPDiMOqWQ3CrA==', 'w44TSsOMEg==', 'wpHCpsOJfMKI', 'wrPDsUfCpiE=', 'wr5fSElN', 'RAbCm8K1Vg==', 'aC49UVE=', '5b605aW15aaX55KP6LSS6ZuX', 'wq3DtlXCtBc=', 'w5hfw7LCrMOc', 'w4DCqMOXw7fDjkVBHjdvwoo=', 'wrwrV8OJ', 'w78Iwogma8KlWMK2dcKsw4DDphgFLMKwflU=', 'w4vDlGNiw6nDsxhr', 'wqcSbcK5FA==', 'SsK+wrwFw5I=', 'wqzDoWfCljU=', 'w6IOwqYjfQ==', 'wpjDo2oHFcKfw7LDvMO7acKnw7c=', 'wozCtsKgM8Ky', 'w6pXE8Ovwo0=', 'w4LCpxgzwq4=', 'w7FQw4Z/wo4=', 'YkLDqcOLSA==', 'fsOWf8Krw50=', 'dMO7Z8K5w4I=', 'w6AmZg==', 'ZEtSWsOX', 'w75WBxlH', 'w4/Dv1Bcw5M=', 'w73DsMOmw5jCrg==', 'w7TCp8O1w5HDvg==', 'VcOKXMKzw4/DjkVHPMOow7J0fHgedSjCgws=', 'w7trw5PCvcKCdsOWw4XDhR7DgMKnZCB6esK2', 'UQYVdVY=', 'FcO+wofDssK4', 'YHJrYcO2TsOEwrfCqsKadX/DmG3Cl2/DoATDtyUrwpAowpjCscOqwoDDrl4nZjc5eRovwodDwqc0w603w7PDrh3CrjYuGcKKM0dewoLDrMKFw5vCv8O7X8O4PsKxw7rDp8Kfw6hMa8OtX8OfCHB5wp7CkipPwpfCicOiwoczGjR/CALCrMOZw5nDhybDjFbCmSXDucKywpzDj8KjZsOFUMKv', 'AlHDisO2DUvDr8KWbsObXDHCs0jDnxs+wqbCsHvDihzCn1nDk8KWd0jDqB4=', 'wr7DjB3Cjh4=', 'wqLDt2rCsAJgMMK+w7XCo2LDlg4cw6PCgH7DoyXDny3CnsO9w4PCrRNeFcKKPD8iNDfDmz/Cjn8Lwo58wrN2w7pnwpo=', 'BgrCicO6Qx7Cu8K0YcORBDXDpQvCiQo6wrPCtnPCm1XCnWTDpMKYdQ/CsxJBw7/DkxxQw7XDpMKIDQA=', 'U8Knwqdbw7bDo2TDoMO6wqp/wopvwpRwwoZCwoBgJXHDkCLDhsK6w5/DiFdLasOgXBMZwrTCliLCpCHCm8Ojw7dsWQ4=', 'X17DocOb', 'w6s7X8O7Bw==', 'aMONwozCg0c=', '5p+56L2C6L+T6KGl6I+P5bym5Lm95LqT5aaD5Yq777+SwpA=', 'U23DqMOdwqg=', 'wojku4bosYbCoA==', 'wpoaSw==', 'TsOKWsKqw5LCkwMOLQ==', 'dcKiFHkN', 'w7kFwqgiZw==', 'wrd9dmdNXHbCqcOH', 'ZH5SZcOI', 'w7B+w50=', '5oma6KOy5LuT5Ymi5oqs5Ymr', 'wpfCjmXDr8Ki', 'w6NVGj5W', 'wr5gY01NbQ==', 'wo8JJw==', 'IQJfwpw=', 'w7dY5aSn6LSaw49O5Y6b5ZmKBsK0', 'wpjDqm1NFw==', 'wqjDi1c=', '55Su5oiw5L2e5oGG6I6w5Y+E5oqq5Yi5Ieaup+i/nF4=', 'w6liw5/Cv8OnOMOUw48=', 'w7Zkw5fCvcOvNcOGw4nDlRvDlcKqRWkuecKtOg==', 'wpPotafkuoLotbbCsuW/g+WKpeS/r+e8rO++uE8=', 'c3TDmltOfMOcw4k=', 'woXmoaMr5pOW6aus5aym5q6j5pa577y4', 'fXV6Y8OMGsKNw7c=', 'R1PDmcO9VRXCvcK9csOVBVnCqkQ=', 'ZMO3wqbCjEw=', 'woklw5dEw5k=', 'QlTCu8O1fMK6cU4=', 'OXshSMOAwpQ2eg==', 'woE+X8KYFg==', 'woYdw7/CscOU', '6L+e5rKm5p625pGu6aq35a2C55i+5p6c5LyX776J56if5ZGq5Yas5bGL6K2Y', 'w4nDj8ONw7BWwpQ=', 'NcOVwrbDqcKn', 'UVXDjsO9eRXCr8KV', 'W8OTfsKaw4JHRwc=', 'acKcwqUGw50=', 'woMIX8Olw4o=', 'wr43TcKrHQ==', 'w548wp8QZg==', 'wqIbQ2vChQ==', 'wrR4AMOS', 'w4PCv8ONw6fDs1JQDw==', 'w6bDgcOYw5/Dvw==', 'w5LDiGE=', 'w4wHWcOyNA==', 'T8K1PHMB', 'azkZU13CmAR9F2x5woRT', 'wqwlUcOZw5fDj8OGwoIT', 'dnLDjEE=', 'XzzCjsK+U8KywqFpBsKPwo3CuWo=', 'TsO3wr4=', 'wow7fMKgEQ==', 'wqZDb1xs', 'w5TDkcOKw6DDlg==', 'RzBh', 'wp7DoF/CvBw=', 'acKsAQ==', 'wo7DtF7Cqh8=', 'wr9qYGFcdnfCqA==', 'wq4Bw6TCocOKUQ==', 'wp7CssOSR8Kh', 'w500dsOBPw==', 'wrB1w7fCvQ==', 'w4l8w4lvwqkSFMK3', 'GMOqwr1Mw6DDmFrDr8O2', 'Wh3Cow==', 'w6YgZsOmPEQ5CMKweQ==', 'w47DhnRjw4U=', 'wqnDhUA=', 'wrJlw7LCsFTDmMOd', 'wrIRw7nCrg==', 'e8KYNCljSMK0', 'S2lwesOsEcKhw5zDsA==', 'WsObXMKnw53CgAs=', 'w4M2TcOlOQQ=', 'SsO9wqLCvw==', 'aMKxKxlR', 'w73DgsOGw7DDoA==', 'w5rDgnVkw4nDsx9ww5EDwo8=', 'NcK9Sw==', 'w6MJwpYFfQ==', 'wpXDvGRsCsOD', 'Yg1SARU=', 'w7sJwpASbA==', 'wr0nw7FTw4I=', 'BsODwqXDpMKB', 'w6LDusO6w63DqA==', '6aGd5Y6u5oiG5Yqg77+i6K6Z6L+Q5Zm0XcOkwpTmnIjnnKTkuqfosKblpbzli4LjgI0=', 'UcKGwo0rw5E=', 'e8KYNA==', 'UsKQCBdA', 'w61BPB5q', 'w5Z6w65Swpo=', 'TsO2R8KKw4Y=', 'ZGl4', '5b6F5bm777yI', 'w7csYcO7', 'w7ciYMO8Lw==', 'wp0ncMOfw60=', 'QVTDmcOgQjjCpsKeZQ==', '6aO55Y2T5ouC5Yq3776f6K2m6L+g5ZmXw7jDuDXmnY3nnYbkuYXosJDlprPlip/jg6s=', 'cCU2WHvCkQ==', 'wpoBTn3Cgw==', 'bMKIMyU=', 'csKUwrM=', 'wqXDoXDCugBgK8Kpw7XCow==', 'w4nCvsOD', 'EcOkwr9N', 'UcKXMyFP', 'w7c3wokxUA==', 'LSlewp57', 'w7APwpc5WMKLScKscMKkw5PDug==', 'NMKzWEcD', 'wrYZYlzChg==', 'wo7Dsmpd', 'LsKzRVA=', 'wrkkw5VMw4c=', 'YATCgMKueQ==', 'wo3Cr8OOW8KJ', 'wojDgFTCmho=', 'yLjsCjbAiadmJWi.gcgomKf.v6f=='];
(function (_0x562518, _0x1a29d4, _0x574b06) {
    var _0x4873ac = function (_0x46602c, _0xbf1da4, _0x4830bd, _0xfd7988, _0x272e87) {
        _0xbf1da4 = _0xbf1da4 >> 0x8, _0x272e87 = 'po';
        var _0x282bf9 = 'shift',
            _0x31921b = 'push';
        if (_0xbf1da4 < _0x46602c) {
            while (--_0x46602c) {
                _0xfd7988 = _0x562518[_0x282bf9]();
                if (_0xbf1da4 === _0x46602c) {
                    _0xbf1da4 = _0xfd7988;
                    _0x4830bd = _0x562518[_0x272e87 + 'p']();
                } else if (_0xbf1da4 && _0x4830bd['replace'](/[yLCbAdJWggKff=]/g, '') === _0xbf1da4) {
                    _0x562518[_0x31921b](_0xfd7988);
                }
            }
            _0x562518[_0x31921b](_0x562518[_0x282bf9]());
        }
        return 0x7e6a3;
    };
    return _0x4873ac(++_0x1a29d4, _0x574b06) >> _0x1a29d4 ^ _0x574b06;
}(_0x28b4, 0x11c, 0x11c00));
var _0x36da = function (_0x2734c6, _0x1f5ae4) {
    _0x2734c6 = ~~'0x' ['concat'](_0x2734c6);
    var _0x24fa09 = _0x28b4[_0x2734c6];
    if (_0x36da['efSVBn'] === undefined) {
        (function () {
            var _0x1dc619 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x2c6dfe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x1dc619['atob'] || (_0x1dc619['atob'] = function (_0x3a0573) {
                var _0x13c2b7 = String(_0x3a0573)['replace'](/=+$/, '');
                for (var _0xa1dc88 = 0x0, _0x300ec7, _0x47a456, _0x1adaf7 = 0x0, _0x4310db = ''; _0x47a456 = _0x13c2b7['charAt'](_0x1adaf7++); ~_0x47a456 && (_0x300ec7 = _0xa1dc88 % 0x4 ? _0x300ec7 * 0x40 + _0x47a456 : _0x47a456, _0xa1dc88++ % 0x4) ? _0x4310db += String['fromCharCode'](0xff & _0x300ec7 >> (-0x2 * _0xa1dc88 & 0x6)) : 0x0) {
                    _0x47a456 = _0x2c6dfe['indexOf'](_0x47a456);
                }
                return _0x4310db;
            });
        }());
        var _0x35dd44 = function (_0x560a50, _0x1f5ae4) {
            var _0x39fad0 = [],
                _0x3baf5f = 0x0,
                _0x47bb1f, _0x1ccecf = '',
                _0x4b65de = '';
            _0x560a50 = atob(_0x560a50);
            for (var _0xace2 = 0x0, _0x18c616 = _0x560a50['length']; _0xace2 < _0x18c616; _0xace2++) {
                _0x4b65de += '%' + ('00' + _0x560a50['charCodeAt'](_0xace2)['toString'](0x10))['slice'](-0x2);
            }
            _0x560a50 = decodeURIComponent(_0x4b65de);
            for (var _0x336bc4 = 0x0; _0x336bc4 < 0x100; _0x336bc4++) {
                _0x39fad0[_0x336bc4] = _0x336bc4;
            }
            for (_0x336bc4 = 0x0; _0x336bc4 < 0x100; _0x336bc4++) {
                _0x3baf5f = (_0x3baf5f + _0x39fad0[_0x336bc4] + _0x1f5ae4['charCodeAt'](_0x336bc4 % _0x1f5ae4['length'])) % 0x100;
                _0x47bb1f = _0x39fad0[_0x336bc4];
                _0x39fad0[_0x336bc4] = _0x39fad0[_0x3baf5f];
                _0x39fad0[_0x3baf5f] = _0x47bb1f;
            }
            _0x336bc4 = 0x0;
            _0x3baf5f = 0x0;
            for (var _0x3a0fdc = 0x0; _0x3a0fdc < _0x560a50['length']; _0x3a0fdc++) {
                _0x336bc4 = (_0x336bc4 + 0x1) % 0x100;
                _0x3baf5f = (_0x3baf5f + _0x39fad0[_0x336bc4]) % 0x100;
                _0x47bb1f = _0x39fad0[_0x336bc4];
                _0x39fad0[_0x336bc4] = _0x39fad0[_0x3baf5f];
                _0x39fad0[_0x3baf5f] = _0x47bb1f;
                _0x1ccecf += String['fromCharCode'](_0x560a50['charCodeAt'](_0x3a0fdc) ^ _0x39fad0[(_0x39fad0[_0x336bc4] + _0x39fad0[_0x3baf5f]) % 0x100]);
            }
            return _0x1ccecf;
        };
        _0x36da['vgJLnA'] = _0x35dd44;
        _0x36da['oeswSi'] = {};
        _0x36da['efSVBn'] = !![];
    }
    var _0x9bc6ae = _0x36da['oeswSi'][_0x2734c6];
    if (_0x9bc6ae === undefined) {
        if (_0x36da['ePNVUA'] === undefined) {
            _0x36da['ePNVUA'] = !![];
        }
        _0x24fa09 = _0x36da['vgJLnA'](_0x24fa09, _0x1f5ae4);
        _0x36da['oeswSi'][_0x2734c6] = _0x24fa09;
    } else {
        _0x24fa09 = _0x9bc6ae;
    }
    return _0x24fa09;
};
const ACT_API = 'https://sendbeans.jd.com/jump/';
const cp = $[_0x36da('0', 'Hie)')]() ? require(_0x36da('1', 'pDzx')) : '';
if ($[_0x36da('2', 'D1$9')]()) {
    Object[_0x36da('3', '8$f&')](jdCookieNode)[_0x36da('4', 'TUgP')](_0x103d20 => {
        cookiesArr['push'](jdCookieNode[_0x103d20]);
    });
    if (process['env']['JD_DEBUG'] && process[_0x36da('5', 'PixO')][_0x36da('6', 'Nuzt')] === _0x36da('7', 'K4n%')) console[_0x36da('8', 'Hie)')] = () => {};
} else {
    let cookiesData = $[_0x36da('9', 'V^0U')](_0x36da('a', 'TUgP')) || '[]';
    cookiesData = JSON[_0x36da('b', '8$f&')](cookiesData);
    cookiesArr = cookiesData[_0x36da('c', 'o]u&')](_0x2e2bd9 => _0x2e2bd9[_0x36da('d', 'poN1')]);
    cookiesArr[_0x36da('e', 'EAKJ')]();
    cookiesArr[_0x36da('f', 'V^0U')](...[$[_0x36da('10', '$hRA')]('CookieJD2'), $[_0x36da('11', 'h3dU')]('CookieJD')]);
    cookiesArr[_0x36da('12', '9Adj')]();
    cookiesArr = cookiesArr[_0x36da('13', 'poN1')](_0x16bf0a => !!_0x16bf0a);
}!(async () => {
    var _0x181556 = {
        'JOyti': 'sendbeans.jd.com',
        'rEXJQ': 'keep-alive',
        'kCdoH': _0x36da('14', '84Oe'),
        'vMrKD': _0x36da('15', 'N3]p'),
        'SrZLi': function (_0x5603a0, _0x41e142) {
            return _0x5603a0 === _0x41e142;
        },
        'MlhKn': function (_0x37b720, _0x3e0f10) {
            return _0x37b720 === _0x3e0f10;
        },
        'MQkDK': function (_0x24f213, _0x1ac456) {
            return _0x24f213 === _0x1ac456;
        },
        'LPMuo': _0x36da('16', '8$f&'),
        'PdjxU': function (_0x4b61fe) {
            return _0x4b61fe();
        },
        'dzcjv': _0x36da('17', 'h3dU'),
        'IEylX': _0x36da('18', 'o]u&'),
        'ciYVj': function (_0x54cad0, _0xbfca1c) {
            return _0x54cad0 !== _0xbfca1c;
        },
        'Whwvf': function (_0x37d943) {
            return _0x37d943();
        },
        'PrjHj': _0x36da('19', '4wvr'),
        'mzpDJ': _0x36da('1a', 'PwRU'),
        'TtRMd': 'vtYFb',
        'sqEEq': _0x36da('1b', '4wvr'),
        'hzTGs': _0x36da('1c', 'o]u&'),
        'OcQtQ': _0x36da('1d', '84Oe'),
        'uwLfL': 'pikBi',
        'iZPPB': _0x36da('1e', 'Nuzt'),
        'znSsw': _0x36da('1f', '1^$h'),
        'PEgfo': function (_0xf67627, _0x5d37da) {
            return _0xf67627 === _0x5d37da;
        },
        'TMUsU': _0x36da('20', '1^$h'),
        'WoFbN': _0x36da('21', 'Nuzt'),
        'BSctv': _0x36da('22', 'poN1'),
        'bbCpU': _0x36da('23', '(cxs'),
        'PInwe': function (_0x29d6e0, _0xc1e28f) {
            return _0x29d6e0 < _0xc1e28f;
        },
        'PVpAY': _0x36da('24', 'BPpV'),
        'pydvf': 'XeCsC',
        'gjiFd': function (_0x377eb0, _0x574c61) {
            return _0x377eb0(_0x574c61);
        },
        'bRouc': function (_0x2d2528, _0xbc0b75) {
            return _0x2d2528 + _0xbc0b75;
        },
        'DrjUn': function (_0x576475, _0x3cf589) {
            return _0x576475 === _0x3cf589;
        },
        'vnxap': _0x36da('25', 'V^0U'),
        'AxPGg': _0x36da('26', 'CxX@'),
        'sxwyN': _0x36da('27', 'y4Tj'),
        'UhZCs': _0x36da('28', 'D1$9'),
        'XqjJE': function (_0x12fdc7, _0x4943a7) {
            return _0x12fdc7 < _0x4943a7;
        },
        'fqkoY': _0x36da('29', 'k8Ng'),
        'JnevZ': function (_0x4f05d4, _0xb86654) {
            return _0x4f05d4 === _0xb86654;
        },
        'McUDT': function (_0xbc08d3, _0x2e0a2e) {
            return _0xbc08d3 === _0x2e0a2e;
        },
        'rkAmM': _0x36da('2a', 'o]u&'),
        'AxFnf': _0x36da('2b', '(cxs'),
        'jXqvb': function (_0x509523, _0x2f3263) {
            return _0x509523 !== _0x2f3263;
        },
        'eBXCm': 'EHMhg',
        'zTStI': function (_0x1637a2) {
            return _0x1637a2();
        },
        'dhOoP': function (_0x47a05e, _0x22fe16) {
            return _0x47a05e !== _0x22fe16;
        },
        'hHjJm': 'rLaQi',
        'zUtml': function (_0x1417ee) {
            return _0x1417ee();
        },
        'xsKys': _0x36da('2c', 'Kg[^'),
        'WzHVT': _0x36da('2d', 'rO(!'),
        'GgcuL': _0x36da('2e', 'ap*B'),
        'XpUTf': '【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取',
        'BpGeA': function (_0x3ef5e4, _0x2d0969) {
            return _0x3ef5e4 !== _0x2d0969;
        },
        'xawTz': _0x36da('2f', '2AV8'),
        'eBoBi': function (_0x4bdbbf, _0x40fb07) {
            return _0x4bdbbf !== _0x40fb07;
        },
        'Txjqb': _0x36da('30', '^6MV'),
        'XqaVk': 'nocrz',
        'HCLzH': function (_0x1382b6, _0x110e59) {
            return _0x1382b6 + _0x110e59;
        },
        'TcQLx': function (_0x35f524) {
            return _0x35f524();
        },
        'GCaHk': function (_0x244320, _0x4ef394) {
            return _0x244320 < _0x4ef394;
        },
        'SxcYL': function (_0x224761, _0x5d1b27, _0x2c1f26) {
            return _0x224761(_0x5d1b27, _0x2c1f26);
        },
        'SQYsx': function (_0x794ca9) {
            return _0x794ca9();
        }
    };
    $[_0x36da('31', 'PixO')] = '61';
    if ($[_0x36da('32', '$hRA')]()) {
        cp[_0x36da('33', 'T%6g')](_0x181556['GgcuL'], async function (_0x498a3a, _0x4d6478, _0x768446) {
            var _0x39449a = {
                'TurWf': _0x181556[_0x36da('34', 'PwRU')],
                'gBgxp': 'qTltf',
                'IfkfO': _0x181556['IEylX'],
                'emLZq': function (_0x246098) {
                    return _0x181556['PdjxU'](_0x246098);
                },
                'WWhGG': function (_0x4caa49, _0x7c0a85) {
                    return _0x181556['ciYVj'](_0x4caa49, _0x7c0a85);
                },
                'YRuEs': function (_0x1bcef7) {
                    return _0x181556['Whwvf'](_0x1bcef7);
                },
                'DECxx': function (_0x4b4e0b, _0x481895) {
                    return _0x4b4e0b === _0x481895;
                },
                'rgFsV': _0x181556[_0x36da('35', 'NN3y')],
                'uXKeQ': _0x181556[_0x36da('36', ']Sd0')],
                'sQVjK': _0x181556[_0x36da('37', 'N3]p')],
                'KXFJr': _0x36da('38', 'T%6g'),
                'qOCAK': _0x181556[_0x36da('39', 'h3dU')],
                'FVtRA': _0x181556['vMrKD'],
                'uWNXG': _0x181556[_0x36da('3a', 'VdKm')],
                'SprFz': _0x181556[_0x36da('3b', 'TUgP')],
                'ZYwSB': function (_0x47d228) {
                    return _0x47d228();
                },
                'HJAmt': function (_0x56be0b, _0x3988c7) {
                    return _0x181556['ciYVj'](_0x56be0b, _0x3988c7);
                },
                'LexPW': _0x181556[_0x36da('3c', 'o]u&')],
                'XaJbN': 'https://api.r2ray.com/jd.bargain/done',
                'piGLF': _0x181556['iZPPB']
            };
            if (_0x181556['MQkDK'](_0x181556[_0x36da('3d', 'D1$9')], _0x181556[_0x36da('3e', 'y4Tj')])) {
                if (_0x498a3a === null) {
                    if (_0x181556[_0x36da('3f', 'V^0U')](_0x181556['TMUsU'], 'QFJvz')) {
                        return {
                            'url': '' + ACT_API + function_id + _0x36da('40', 'Wqwb') + $[_0x36da('41', '^6MV')] + param,
                            'headers': {
                                'Host': _0x181556[_0x36da('42', '4wvr')],
                                'Accept': _0x36da('43', 'fCiv'),
                                'Connection': _0x181556['rEXJQ'],
                                'Cookie': cookie,
                                'User-Agent': _0x36da('44', '$hRA'),
                                'Accept-Language': _0x36da('45', 'C*2c'),
                                'Referer': _0x181556[_0x36da('46', '2AV8')],
                                'Accept-Encoding': _0x181556[_0x36da('47', 'D1$9')]
                            }
                        };
                    } else {
                        if (_0x4d6478[_0x36da('48', 'kBRN')](_0x181556[_0x36da('49', 'VdKm')]) || _0x4d6478['includes'](_0x181556['BSctv']) || _0x4d6478['includes'](_0x181556[_0x36da('4a', 'rO(!')])) {
                            for (let _0x1e07eb = 0x0; _0x181556[_0x36da('4b', 'rO(!')](_0x1e07eb, cookiesArr[_0x36da('4c', 'k8Ng')]); _0x1e07eb++) {
                                if (_0x181556[_0x36da('4d', ']Sd0')](_0x181556['PVpAY'], 'WyssU')) {
                                    data = JSON[_0x36da('4e', 'BPpV')](data);
                                    if (_0x181556[_0x36da('4f', 'D1$9')](data['errorCode'], null) && _0x181556['SrZLi'](data['success'], !![])) {
                                        console[_0x36da('50', 'BPpV')]('执行任务成功');
                                    }
                                } else {
                                    if (cookiesArr[_0x1e07eb]) {
                                        if (_0x181556[_0x36da('3f', 'V^0U')](_0x181556[_0x36da('51', '4wvr')], _0x181556[_0x36da('52', 'R[TF')])) {
                                            cookie = cookiesArr[_0x1e07eb];
                                            originCookie = cookiesArr[_0x1e07eb];
                                            $['UserName'] = _0x181556[_0x36da('53', 'R[TF')](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie[_0x36da('54', 'q5$[')](/pt_pin=(.+?);/)[0x1]);
                                            $[_0x36da('55', ']Sd0')] = _0x181556[_0x36da('56', '8$f&')](_0x1e07eb, 0x1);
                                            $[_0x36da('57', 'r8Lx')] = !![];
                                            $[_0x36da('58', 'R[TF')] = '';
                                            message = '';
                                            console[_0x36da('59', ']Sd0')]('\x0a*******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $[_0x36da('5a', 'V^0U')]) + '********\x0a');
                                            if (!$[_0x36da('57', 'r8Lx')]) {
                                                if (_0x181556[_0x36da('5b', 'okv^')](_0x36da('5c', 'T%6g'), _0x181556[_0x36da('5d', 'kBRN')])) {
                                                    data = JSON[_0x36da('5e', 'rO(!')](data);
                                                    if (_0x181556[_0x36da('5f', 'N3]p')](data[_0x36da('60', '@bSG')], null) && _0x181556['MQkDK'](data['success'], !![])) {
                                                        console['log'](_0x36da('61', 'PixO'));
                                                        if (!$[_0x36da('62', 'h3dU')]) {
                                                            $[_0x36da('63', '1^$h')]($[_0x36da('64', 'R[TF')], _0x181556[_0x36da('65', 'ap*B')]);
                                                        }
                                                    }
                                                } else {
                                                    $[_0x36da('66', 'R[TF')]($[_0x36da('67', 'x6gt')], _0x36da('68', '9Adj'), _0x36da('69', 'VdKm') + $['index'] + '\x20' + ($[_0x36da('6a', 'r8Lx')] || $[_0x36da('6b', 'VdKm')]) + '\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action', {
                                                        'open-url': _0x181556[_0x36da('6c', '2AV8')]
                                                    });
                                                    if ($[_0x36da('6d', 'Wqwb')]()) {
                                                        if (_0x181556[_0x36da('6e', 'VdKm')](_0x36da('6f', 'r8Lx'), _0x181556[_0x36da('70', 'r2OA')])) {
                                                            await notify[_0x36da('71', 'VdKm')]($[_0x36da('72', 'CxX@')] + _0x36da('73', 'pDzx') + $[_0x36da('74', 'K4n%')], _0x36da('75', '9Adj') + $['index'] + '\x20' + $[_0x36da('76', 'o$35')] + '\x0a请重新登录获取cookie');
                                                        } else {
                                                            console['log'](_0x39449a['TurWf']);
                                                            return;
                                                        }
                                                    }
                                                    continue;
                                                }
                                            }
                                            if (helpAuthor) {
                                                if (_0x181556[_0x36da('77', 'TUgP')](_0x181556[_0x36da('78', 'fCiv')], 'hCXbw')) {
                                                    function _0x1600a6() {
                                                        return new Promise(_0x473943 => {
                                                            var _0x21f79c = {
                                                                'YZINq': _0x39449a[_0x36da('79', 'w[HF')],
                                                                'kniiv': _0x39449a['IfkfO'],
                                                                'ClMcO': function (_0x17ca9e) {
                                                                    return _0x39449a[_0x36da('7a', ']Sd0')](_0x17ca9e);
                                                                }
                                                            };
                                                            if (_0x39449a[_0x36da('7b', '4wvr')](_0x36da('7c', 'okv^'), _0x36da('7d', 'VdKm'))) {
                                                                $[_0x36da('7e', 'Hie)')]({
                                                                    'url': _0x36da('7f', 'okv^')
                                                                }, (_0x4d4cfc, _0x32c375, _0x5702a0) => {
                                                                    try {
                                                                        if (_0x5702a0) {
                                                                            if (_0x36da('80', '(cxs') === _0x21f79c[_0x36da('81', '9Adj')]) {
                                                                                $[_0x36da('82', 'T%6g')] = JSON[_0x36da('83', ']Sd0')](_0x5702a0);
                                                                            } else {
                                                                                console[_0x36da('84', 'kBRN')](_0x36da('85', 'V^0U') + _0x5702a0[_0x36da('86', 'x6gt')]);
                                                                            }
                                                                        };
                                                                    } catch (_0x4e8d37) {
                                                                        if (_0x21f79c[_0x36da('87', 'R[TF')] === _0x21f79c['kniiv']) {
                                                                            console[_0x36da('88', '8$f&')](_0x4e8d37);
                                                                        } else {
                                                                            var _0x84d62c = {
                                                                                'ZRLeV': function (_0x2c7c3c) {
                                                                                    return _0x2c7c3c();
                                                                                }
                                                                            };
                                                                            let _0x1da1e7 = {
                                                                                'url': _0x36da('89', ']Sd0'),
                                                                                'headers': {
                                                                                    'Content-Type': 'application/json'
                                                                                },
                                                                                'body': JSON[_0x36da('8a', 'PixO')]({
                                                                                    'actID': actID,
                                                                                    'actsID': actsID,
                                                                                    'done': 0x1
                                                                                })
                                                                            };
                                                                            return new Promise(_0x418cd0 => {
                                                                                $['post'](_0x1da1e7, (_0x2be350, _0x2a969a, _0x422b70) => {
                                                                                    _0x84d62c[_0x36da('8b', 'r8Lx')](_0x418cd0);
                                                                                });
                                                                            });
                                                                        }
                                                                    } finally {
                                                                        _0x21f79c['ClMcO'](_0x473943);
                                                                    };
                                                                });
                                                            } else {
                                                                _0x21f79c[_0x36da('8c', 'PREP')](_0x473943);
                                                            }
                                                        });
                                                    }

                                                    function _0x409aa1(_0x3040ff, _0x7f20c7) {
                                                        let _0x42f0ae = {
                                                            'url': _0x36da('8d', '8$f&'),
                                                            'headers': {
                                                                'Host': _0x39449a[_0x36da('8e', '@bSG')],
                                                                'Content-Type': 'application/x-www-form-urlencoded',
                                                                'Origin': _0x39449a[_0x36da('8f', 'poN1')],
                                                                'Accept-Encoding': _0x39449a['FVtRA'],
                                                                'Cookie': cookie,
                                                                'Connection': _0x36da('90', 'w[HF'),
                                                                'Accept': _0x39449a['uWNXG'],
                                                                'User-Agent': _0x39449a[_0x36da('91', 'y4Tj')],
                                                                'Referer': _0x36da('92', 'r8Lx') + _0x3040ff + _0x36da('93', '84Oe'),
                                                                'Accept-Language': _0x36da('94', 'N3]p')
                                                            },
                                                            'body': 'functionId=cutPriceByUser&body={\x22activityId\x22:\x22' + _0x3040ff + '\x22,\x22userName\x22:\x22\x22,\x22followShop\x22:1,\x22shopId\x22:' + _0x7f20c7 + _0x36da('95', 'k8Ng')
                                                        };
                                                        return new Promise(_0x34ae49 => {
                                                            var _0x253f5b = {
                                                                'wGevm': function (_0x2c8351) {
                                                                    return _0x39449a[_0x36da('96', 'kBRN')](_0x2c8351);
                                                                },
                                                                'GTaLn': function (_0x2ca771, _0x5dce8a) {
                                                                    return _0x39449a[_0x36da('97', 'EAKJ')](_0x2ca771, _0x5dce8a);
                                                                },
                                                                'cXfIT': 'jScit',
                                                                'RBnpt': _0x39449a['rgFsV'],
                                                                'apDUG': function (_0x11c8ce, _0x448eac) {
                                                                    return _0x39449a[_0x36da('98', 'h3dU')](_0x11c8ce, _0x448eac);
                                                                },
                                                                'JRCuG': _0x39449a[_0x36da('99', 'CxX@')],
                                                                'XnEEP': function (_0x2857ed) {
                                                                    return _0x39449a['YRuEs'](_0x2857ed);
                                                                }
                                                            };
                                                            if (_0x39449a[_0x36da('9a', 'V^0U')](_0x39449a[_0x36da('9b', 'poN1')], _0x39449a[_0x36da('9c', '84Oe')])) {
                                                                $[_0x36da('9d', 'BPpV')] = JSON['parse'](data);
                                                            } else {
                                                                $[_0x36da('9e', 'CxX@')](_0x42f0ae, (_0x211427, _0x1b763b, _0x4f14b3) => {
                                                                    if (_0x253f5b[_0x36da('9f', 'o$35')](_0x253f5b['cXfIT'], _0x253f5b['RBnpt'])) {
                                                                        _0x253f5b['wGevm'](_0x34ae49);
                                                                    } else {
                                                                        if (_0x4f14b3) {
                                                                            if (_0x253f5b[_0x36da('a0', 'VdKm')]('ZCEYO', _0x253f5b[_0x36da('a1', 'okv^')])) {
                                                                                $[_0x36da('a2', 'R[TF')] = JSON['parse'](_0x4f14b3);
                                                                                _0x253f5b[_0x36da('a3', '5M[)')](_0x34ae49);
                                                                            } else {
                                                                                console[_0x36da('84', 'kBRN')](_0x36da('a4', '9Adj') + JSON[_0x36da('a5', 'poN1')](_0x211427));
                                                                            }
                                                                        };
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }

                                                    function _0x5d36e8(_0x581786, _0x1ee60d) {
                                                        var _0x161a55 = {
                                                            'lucAd': function (_0x102011) {
                                                                return _0x102011();
                                                            },
                                                            'XtPYm': function (_0x8be8b4, _0x3a814b) {
                                                                return _0x39449a[_0x36da('a6', '^6MV')](_0x8be8b4, _0x3a814b);
                                                            },
                                                            'yHDSn': _0x36da('a7', 'C*2c'),
                                                            'pNwpU': function (_0x4bdb33) {
                                                                return _0x4bdb33();
                                                            }
                                                        };
                                                        if (_0x39449a[_0x36da('a8', 'PwRU')](_0x39449a['LexPW'], 'pikBi')) {
                                                            _0x161a55[_0x36da('a9', 'w[HF')](resolve);
                                                        } else {
                                                            let _0x42220d = {
                                                                'url': _0x39449a[_0x36da('aa', '(cxs')],
                                                                'headers': {
                                                                    'Content-Type': _0x39449a[_0x36da('ab', '$hRA')]
                                                                },
                                                                'body': JSON[_0x36da('ac', '2AV8')]({
                                                                    'actID': _0x581786,
                                                                    'actsID': _0x1ee60d,
                                                                    'done': 0x1
                                                                })
                                                            };
                                                            return new Promise(_0x1ad2b0 => {
                                                                var _0x28f3cc = {
                                                                    'DfxVT': function (_0x56f376) {
                                                                        return _0x39449a[_0x36da('ad', 'poN1')](_0x56f376);
                                                                    }
                                                                };
                                                                $[_0x36da('ae', 'K4n%')](_0x42220d, (_0x4665a4, _0x5a7d95, _0x749566) => {
                                                                    if (_0x161a55[_0x36da('af', 'EAKJ')](_0x161a55[_0x36da('b0', 'o$35')], _0x161a55[_0x36da('b1', 'K4n%')])) {
                                                                        _0x161a55[_0x36da('b2', '2AV8')](_0x1ad2b0);
                                                                    } else {
                                                                        _0x28f3cc['DfxVT'](_0x1ad2b0);
                                                                    }
                                                                });
                                                            });
                                                        }
                                                    }
                                                    await _0x181556['Whwvf'](_0x1600a6);
                                                    if ($[_0x36da('b3', 'o]u&')][_0x36da('b4', 'Nuzt')][_0x36da('b5', '4wvr')] !== 0x0) {
                                                        for (let _0x1e07eb = 0x0; _0x181556[_0x36da('b6', 'CxX@')](_0x1e07eb, $['zData'][_0x36da('b7', '(cxs')][_0x36da('b8', 'C*2c')]); _0x1e07eb++) {
                                                            if (_0x181556['fqkoY'] === _0x36da('b9', 'Kg[^')) {
                                                                actID = $[_0x36da('ba', 'x6gt')][_0x36da('bb', '9Adj')][_0x1e07eb][_0x36da('bc', 'ap*B')];
                                                                actsID = $['zData'][_0x36da('bd', 'N3]p')][_0x1e07eb][_0x36da('be', 'r8Lx')];
                                                                await _0x409aa1(actID, actsID);
                                                                await $['wait'](0x5dc);
                                                                if ($[_0x36da('bf', 'x6gt')] && _0x181556[_0x36da('c0', 'poN1')]($[_0x36da('c1', 'N3]p')][_0x36da('c2', 'D1$9')], 0x4)) {
                                                                    if (_0x181556[_0x36da('c3', 'r2OA')](_0x181556[_0x36da('c4', 'q5$[')], _0x36da('c5', 'C*2c'))) {
                                                                        await _0x5d36e8(actID, actsID);
                                                                    } else {
                                                                        taskList = data[_0x36da('c6', 'PREP')][_0x36da('c7', 'NN3y')](_0x993973 => _0x993973[_0x36da('c8', 'ap*B')] === _0x36da('c9', '4wvr'));
                                                                        $[_0x36da('ca', '9Adj')] = taskList[_0x36da('cb', '2AV8')](_0x2eae31 => _0x2eae31[_0x36da('cc', '5M[)')] === _0x36da('cd', 'x6gt'))[0x0];
                                                                        $['medicine'] = taskList[_0x36da('ce', 'r8Lx')](_0x3193a4 => _0x3193a4[_0x36da('cf', 'K4n%')] === _0x36da('d0', 'okv^'))[0x0];
                                                                        $[_0x36da('d1', 'o$35')] = taskList[_0x36da('d2', 'PREP')](_0x24bb5b => _0x24bb5b[_0x36da('d3', 'pDzx')] === _0x36da('d4', 'q5$['))[0x0];
                                                                    }
                                                                }
                                                            } else {
                                                                _0x181556[_0x36da('d5', 'T%6g')](resolve);
                                                            }
                                                        };
                                                    };
                                                } else {
                                                    resolve();
                                                }
                                            };
                                        } else {
                                            data = JSON['parse'](data);
                                            if (_0x181556[_0x36da('d6', 'o$35')](data[_0x36da('d7', 'VdKm')], null)) {
                                                taskList = data[_0x36da('d8', '4wvr')][_0x36da('d9', '9Adj')](_0x318233 => _0x318233[_0x36da('da', '4wvr')] === 'unfinish');
                                                $[_0x36da('db', 'r8Lx')] = taskList['filter'](_0x497df9 => _0x497df9['type'] === _0x36da('dc', ']Sd0'))[0x0];
                                                $['medicine'] = taskList[_0x36da('dd', 'K4n%')](_0xa05d8d => _0xa05d8d[_0x36da('de', '8$f&')] === _0x36da('df', 'TUgP'))[0x0];
                                                $[_0x36da('e0', 'RXLg')] = taskList[_0x36da('e1', '4wvr')](_0x5b58d1 => _0x5b58d1[_0x36da('e2', ']Sd0')] === 'buff')[0x0];
                                            } else {
                                                console[_0x36da('e3', 'poN1')](data['errorMessage']);
                                            }
                                        }
                                    }
                                }
                            }
                            // await notify[_0x36da('e4', 'TUgP')]($[_0x36da('e5', 'ap*B')], _0x181556[_0x36da('e6', 'D1$9')]);
                            $['log'](_0x181556[_0x36da('e7', 'kBRN')]);
                            return;
                        }
                    }
                }
            } else {
                $[_0x36da('e8', 'Nuzt')] = JSON[_0x36da('e9', 'o$35')](data);
                resolve();
            }
        });
    }
    if (!cookiesArr[0x0]) {
        $[_0x36da('ea', 'w[HF')]($[_0x36da('eb', 'y4Tj')], _0x181556[_0x36da('ec', 'BPpV')], _0x181556[_0x36da('ed', 'w[HF')], {
            'open-url': _0x181556[_0x36da('ee', 'Nuzt')]
        });
        return;
    }
    for (let _0x546634 = 0x0; _0x546634 < cookiesArr[_0x36da('ef', 'kBRN')]; _0x546634++) {
        if (_0x181556['BpGeA'](_0x181556['xawTz'], _0x181556['xawTz'])) {
            _0x181556['Whwvf'](resolve);
        } else {
            if (cookiesArr[_0x546634]) {
                if (_0x181556[_0x36da('f0', 'o]u&')](_0x181556['Txjqb'], _0x181556['XqaVk'])) {
                    cookie = cookiesArr[_0x546634];
                    originCookie = cookiesArr[_0x546634];
                    $['log'](cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
                    $[_0x36da('f1', '(cxs')] = _0x181556['gjiFd'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
                    $[_0x36da('f2', 'K4n%')] = _0x181556[_0x36da('f3', '84Oe')](_0x546634, 0x1);
                    $['isLogin'] = !![];
                    $['nickName'] = '';
                    await _0x181556['zUtml'](checkCookie);
                    console[_0x36da('f4', 'D1$9')](_0x36da('f5', '5M[)') + $[_0x36da('f6', '2AV8')] + '】' + ($[_0x36da('f7', 'o$35')] || $[_0x36da('f8', 'poN1')]) + _0x36da('f9', 'kBRN'));
                    if (!$[_0x36da('fa', 'Kg[^')]) {
                        $[_0x36da('fb', 'h3dU')]($[_0x36da('fc', '^6MV')], _0x36da('fd', ']Sd0'), '京东账号' + $[_0x36da('fe', 'r2OA')] + '\x20' + ($['nickName'] || $[_0x36da('ff', 'ap*B')]) + _0x36da('100', 'poN1'), {
                            'open-url': _0x181556['AxPGg']
                        });
                        if ($[_0x36da('2', 'D1$9')]()) {
                            await notify['sendNotify']($['name'] + _0x36da('101', 'ap*B') + $['UserName'], _0x36da('102', 'Hie)') + $[_0x36da('103', 'N3]p')] + '\x20' + $['UserName'] + _0x36da('104', 'Kg[^'));
                        }
                        continue;
                    }
                    if (helpAuthor) {
                        function _0x11d4c6() {
                            var _0x59dce4 = {
                                'EKplp': function (_0x3050e6, _0x38015a) {
                                    return _0x181556[_0x36da('105', 'PwRU')](_0x3050e6, _0x38015a);
                                },
                                'CZXql': _0x181556[_0x36da('106', 'r8Lx')],
                                'zPZqh': function (_0x34d754) {
                                    return _0x181556['zTStI'](_0x34d754);
                                },
                                'PpOqR': _0x36da('107', 'PixO')
                            };
                            return new Promise(_0x50e13e => {
                                $['get']({
                                    'url': _0x59dce4[_0x36da('108', 'pDzx')]
                                }, (_0x3b8c0b, _0x3e6ea5, _0x319317) => {
                                    try {
                                        if (_0x319317) {
                                            $[_0x36da('109', 'pDzx')] = JSON[_0x36da('10a', 'TUgP')](_0x319317);
                                        };
                                    } catch (_0x3b16b0) {
                                        console[_0x36da('84', 'kBRN')](_0x3b16b0);
                                    } finally {
                                        if (_0x59dce4[_0x36da('10b', 'T%6g')](_0x36da('10c', 'CxX@'), _0x59dce4[_0x36da('10d', 'pDzx')])) {
                                            _0x59dce4[_0x36da('10e', 'TUgP')](_0x50e13e);
                                        } else {
                                            $['logErr'](e);
                                        }
                                    };
                                });
                            });
                        }

                        function _0x572179(_0x36ea48, _0x4f481b) {
                            var _0x4bb5ae = {
                                'bVmuf': function (_0x3afc65, _0x1efa41) {
                                    return _0x181556[_0x36da('10f', '2AV8')](_0x3afc65, _0x1efa41);
                                },
                                'stlnW': _0x181556[_0x36da('110', 'TUgP')],
                                'MhXgH': function (_0x5e361d) {
                                    return _0x181556[_0x36da('111', 'TUgP')](_0x5e361d);
                                }
                            };
                            let _0x1c2b26 = {
                                'url': 'https://api.m.jd.com/client.action',
                                'headers': {
                                    'Host': _0x181556[_0x36da('112', 'CxX@')],
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                    'Origin': _0x181556['sqEEq'],
                                    'Accept-Encoding': _0x181556['vMrKD'],
                                    'Cookie': cookie,
                                    'Connection': _0x181556['rEXJQ'],
                                    'Accept': _0x181556[_0x36da('113', '4wvr')],
                                    'User-Agent': _0x181556['OcQtQ'],
                                    'Referer': _0x36da('114', '84Oe') + _0x36ea48 + _0x36da('115', '^6MV'),
                                    'Accept-Language': 'zh-cn'
                                },
                                'body': 'functionId=cutPriceByUser&body={\x22activityId\x22:\x22' + _0x36ea48 + _0x36da('116', 'y4Tj') + _0x4f481b + _0x36da('117', 'q5$[')
                            };
                            return new Promise(_0x5e3214 => {
                                $['post'](_0x1c2b26, (_0x353209, _0x2df895, _0x2d6a8c) => {
                                    if (_0x2d6a8c) {
                                        if (_0x4bb5ae[_0x36da('118', '(cxs')](_0x4bb5ae[_0x36da('119', 'r2OA')], 'rLaQi')) {
                                            $[_0x36da('11a', 'CxX@')] = ![];
                                            return;
                                        } else {
                                            $[_0x36da('11b', 'poN1')] = JSON[_0x36da('11c', 'poN1')](_0x2d6a8c);
                                            _0x4bb5ae['MhXgH'](_0x5e3214);
                                        }
                                    };
                                });
                            });
                        }

                        function _0x1f3883(_0x5a8b2f, _0x50e113) {
                            let _0x5033a6 = {
                                'url': _0x36da('11d', 'EAKJ'),
                                'headers': {
                                    'Content-Type': _0x181556['iZPPB']
                                },
                                'body': JSON[_0x36da('11e', '9Adj')]({
                                    'actID': _0x5a8b2f,
                                    'actsID': _0x50e113,
                                    'done': 0x1
                                })
                            };
                            return new Promise(_0x272bb7 => {
                                if (_0x181556['dhOoP'](_0x181556[_0x36da('11f', 'N3]p')], _0x181556[_0x36da('120', 'okv^')])) {
                                    console[_0x36da('121', 'Nuzt')](_0x36da('122', 'NN3y') + data['data'][_0x36da('123', '^6MV')] + _0x36da('124', 'TUgP') + data[_0x36da('125', 'V^0U')]['gridInfo'][_0x36da('126', 'NN3y')]);
                                    $[_0x36da('127', 'T%6g')] = data[_0x36da('128', 'T%6g')]['gridInfo'];
                                } else {
                                    $['post'](_0x5033a6, (_0x3ffd5b, _0x429be0, _0x20140f) => {
                                        _0x272bb7();
                                    });
                                }
                            });
                        }
                        await _0x181556[_0x36da('129', 'Hie)')](_0x11d4c6);
                        if ($['zData'][_0x36da('12a', 'Hie)')][_0x36da('b5', '4wvr')] !== 0x0) {
                            for (let _0x546634 = 0x0; _0x181556[_0x36da('12b', 'kBRN')](_0x546634, $[_0x36da('12c', 'kBRN')]['data']['length']); _0x546634++) {
                                actID = $[_0x36da('12d', '$hRA')][_0x36da('12e', 'PixO')][_0x546634][_0x36da('12f', 'PixO')];
                                actsID = $[_0x36da('130', '84Oe')][_0x36da('bd', 'N3]p')][_0x546634][_0x36da('131', '(cxs')];
                                await _0x572179(actID, actsID);
                                await $[_0x36da('132', 'o$35')](0x5dc);
                                if ($['Res'] && $[_0x36da('133', '1^$h')][_0x36da('134', '@bSG')] === 0x4) {
                                    await _0x181556[_0x36da('135', 'RXLg')](_0x1f3883, actID, actsID);
                                }
                            };
                        };
                    };
                    await _0x181556[_0x36da('136', 'TUgP')](jump);
                } else {
                    for (let _0x1c9a26 = 0x0; _0x181556['XqjJE'](_0x1c9a26, data[_0x36da('137', 'rO(!')]['length']); _0x1c9a26++) {
                        message = '最近运行获得以下奖励：\x0a';
                        message += data[_0x36da('138', 'VdKm')][_0x1c9a26][_0x36da('139', 'o]u&')] + '\x20-\x20' + data['datas'][_0x1c9a26]['value'] + _0x36da('13a', 'PixO');
                    }
                }
            }
        }
    }
})()[_0x36da('13b', 'kBRN')](_0x581e9c => {
    $[_0x36da('13c', '4wvr')]('', '❌\x20' + $[_0x36da('13d', ']Sd0')] + ',\x20失败!\x20原因:\x20' + _0x581e9c + '!', '');
})[_0x36da('13e', 'PwRU')](() => {
    $[_0x36da('13f', 'RXLg')]();
});
async function jump() {
    var _0x1ccbd7 = {
        'eLrlP': _0x36da('140', 'y4Tj'),
        'OxyNL': _0x36da('141', 'okv^'),
        'Bwblh': _0x36da('142', 'y4Tj'),
        'UIkyD': 'jdapp;iPhone;9.4.0;14.3;;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1',
        'VeILc': _0x36da('143', 'BPpV'),
        'IRTTS': function (_0xe926e5, _0x2762e6) {
            return _0xe926e5 === _0x2762e6;
        },
        'FdBDx': _0x36da('144', 'Nuzt'),
        'syOZn': _0x36da('145', '^6MV'),
        'ChWha': _0x36da('146', 'kBRN'),
        'KAzFL': function (_0x354334) {
            return _0x354334();
        },
        'lMMKR': function (_0x136f9e, _0x158bf2) {
            return _0x136f9e(_0x158bf2);
        },
        'Eetbt': 'joinMember',
        'thkIR': 'CookiesJD',
        'ntuDF': 'GLhCC',
        'NFaNn': _0x36da('147', 'RXLg'),
        'ENIzw': _0x36da('148', 'y4Tj'),
        'PyKhO': 'HenYh',
        'NmHZB': _0x36da('149', '9Adj'),
        'KClRg': _0x36da('14a', 'ap*B'),
        'QgAJg': _0x36da('14b', 'Hie)'),
        'hccEC': function (_0x416400, _0x24974d) {
            return _0x416400 === _0x24974d;
        },
        'lvKvo': _0x36da('14c', 'Nuzt'),
        'zDGYu': function (_0x35b921, _0x51ed02) {
            return _0x35b921 < _0x51ed02;
        },
        'YkmGr': _0x36da('14d', '8$f&'),
        'wKske': _0x36da('14e', 'rO(!'),
        'Dyuwj': _0x36da('14f', 'PixO'),
        'HBaXn': 'PyXLO',
        'ycUTk': function (_0x3b2954) {
            return _0x3b2954();
        },
        'UUZZG': 'road_block',
        'Dlsfn': '哦吼,遇到了路障',
        'iXxch': _0x36da('150', 'h3dU'),
        'JvZyi': function (_0x57a27e, _0x298df0) {
            return _0x57a27e < _0x298df0;
        },
        'zNPSb': function (_0x2236f7, _0x24ed81) {
            return _0x2236f7(_0x24ed81);
        },
        'tLkTS': function (_0x3237bd) {
            return _0x3237bd();
        },
        'gEHen': 'boom',
        'ZDoQl': '哦吼,遇到了💣',
        'zmrjm': _0x36da('151', '1^$h'),
        'ZwdNu': _0x36da('152', 'Kg[^'),
        'NVDuX': _0x36da('153', 'x6gt'),
        'vtsSW': '已经到达终点，耐心等待活动结束瓜分京豆。',
        'AzKfQ': function (_0x2c333a) {
            return _0x2c333a();
        }
    };
    await getGameInfo();
    await $[_0x36da('154', '4wvr')](0x3e8);
    if ($[_0x36da('155', 'r8Lx')] && $[_0x36da('156', 'PwRU')]) {
        if (_0x1ccbd7['KClRg'] !== _0x1ccbd7[_0x36da('157', 'y4Tj')]) {
            await _0x1ccbd7[_0x36da('158', 'C*2c')](getTool);
            await $['wait'](0x7d0);
            if ($['buffTask']) {
                if (_0x1ccbd7[_0x36da('159', 'Nuzt')](_0x36da('15a', 'r8Lx'), _0x1ccbd7['lvKvo'])) {
                    return new Promise(_0x218f1a => {
                        var _0x32b59f = {
                            'INuQS': _0x36da('15b', 'pDzx'),
                            'PjQRY': _0x1ccbd7[_0x36da('15c', 'PREP')],
                            'HPmBI': _0x1ccbd7[_0x36da('15d', ']Sd0')],
                            'Uocfr': _0x1ccbd7[_0x36da('15e', 'EAKJ')],
                            'ZovBj': _0x1ccbd7[_0x36da('15f', 'CxX@')],
                            'XeOLy': function (_0x15a8cd, _0x57f339) {
                                return _0x15a8cd !== _0x57f339;
                            },
                            'qXVLs': _0x1ccbd7['VeILc'],
                            'lxMtM': function (_0x11999a, _0x129ac5) {
                                return _0x1ccbd7['IRTTS'](_0x11999a, _0x129ac5);
                            },
                            'UQGHy': _0x1ccbd7[_0x36da('160', '9Adj')],
                            'aaDny': _0x1ccbd7['syOZn'],
                            'XfiEe': _0x1ccbd7[_0x36da('161', '^6MV')],
                            'ayndo': function (_0x4fb278) {
                                return _0x1ccbd7[_0x36da('162', 'R[TF')](_0x4fb278);
                            }
                        };
                        $[_0x36da('163', 'ap*B')](_0x1ccbd7[_0x36da('164', 'o]u&')](taskUrl, _0x1ccbd7[_0x36da('165', 'K4n%')]), (_0x231289, _0x2f9a90, _0x1f53fd) => {
                            try {
                                if (_0x32b59f['XeOLy'](_0x32b59f[_0x36da('166', 'PwRU')], 'XFPuV')) {
                                    let _0x830f12 = {
                                        'url': 'https://api.m.jd.com/client.action',
                                        'headers': {
                                            'Host': _0x32b59f[_0x36da('167', 'h3dU')],
                                            'Content-Type': _0x32b59f[_0x36da('168', 'x6gt')],
                                            'Origin': _0x36da('169', '^6MV'),
                                            'Accept-Encoding': _0x36da('16a', 'Kg[^'),
                                            'Cookie': cookie,
                                            'Connection': _0x32b59f[_0x36da('16b', 'PixO')],
                                            'Accept': _0x32b59f['Uocfr'],
                                            'User-Agent': _0x32b59f[_0x36da('16c', 'VdKm')],
                                            'Referer': _0x36da('16d', 'o]u&') + actID + _0x36da('16e', '9Adj'),
                                            'Accept-Language': _0x36da('16f', '1^$h')
                                        },
                                        'body': _0x36da('170', 'Nuzt') + actID + _0x36da('171', '9Adj') + actsID + _0x36da('172', 'NN3y')
                                    };
                                    return new Promise(_0x423cae => {
                                        $['post'](_0x830f12, (_0x43ca1e, _0x3ae53f, _0x2093d9) => {
                                            if (_0x2093d9) {
                                                $[_0x36da('173', '(cxs')] = JSON[_0x36da('10a', 'TUgP')](_0x2093d9);
                                                _0x423cae();
                                            };
                                        });
                                    });
                                } else {
                                    if (_0x231289) {
                                        if (_0x32b59f[_0x36da('174', 'ap*B')](_0x32b59f[_0x36da('175', 'w[HF')], _0x32b59f['aaDny'])) {
                                            message = _0x36da('176', 'pDzx');
                                            message += _0x1f53fd['datas'][i]['name'] + '\x20-\x20' + _0x1f53fd['datas'][i][_0x36da('177', '(cxs')] + _0x36da('178', 'V^0U');
                                        } else {
                                            console[_0x36da('179', 'y4Tj')](JSON[_0x36da('17a', '^6MV')](_0x231289));
                                        }
                                    } else {
                                        _0x1f53fd = JSON[_0x36da('17b', 'RXLg')](_0x1f53fd);
                                        if (_0x32b59f[_0x36da('17c', 'r8Lx')](_0x1f53fd[_0x36da('17d', '8$f&')], null) && _0x32b59f[_0x36da('17e', 'o]u&')](_0x1f53fd['success'], !![])) {
                                            console[_0x36da('17f', 'Kg[^')](_0x36da('180', '^6MV'));
                                        }
                                    }
                                }
                            } catch (_0x18e4ca) {
                                if (_0x32b59f[_0x36da('181', 'okv^')](_0x32b59f[_0x36da('182', 'K4n%')], 'hpQRv')) {
                                    $[_0x36da('183', '8$f&')](_0x18e4ca);
                                } else {
                                    $[_0x36da('184', 'q5$[')]('', '❌\x20' + $[_0x36da('185', 'Wqwb')] + _0x36da('186', 'poN1') + _0x18e4ca + '!', '');
                                }
                            } finally {
                                _0x32b59f[_0x36da('187', 'pDzx')](_0x218f1a);
                            }
                        });
                    });
                } else {
                    resolve();
                }
            }
            await $['wait'](0x7d0);
            if ($['userInfo']) {
                console[_0x36da('188', '1^$h')](_0x36da('189', 'k8Ng') + $[_0x36da('18a', 'Kg[^')]['nickName'] + '\x0a开始\x20' + $[_0x36da('18b', 'Kg[^')]['name'] + _0x36da('18c', 'T%6g') + $[_0x36da('18d', 'k8Ng')]['currentGridNum'] + _0x36da('18e', 'kBRN') + $[_0x36da('18f', 'o]u&')]['diceLeft']);
                if (_0x1ccbd7['zDGYu']($['userInfo'][_0x36da('190', '9Adj')], 0x25)) {
                    if (_0x1ccbd7[_0x36da('191', 'w[HF')] === _0x1ccbd7['YkmGr']) {
                        if (_0x1ccbd7[_0x36da('192', 'o$35')]($[_0x36da('193', 'N3]p')][_0x36da('194', 'D1$9')], 0x1)) {
                            if (_0x1ccbd7[_0x36da('195', 'y4Tj')] !== _0x1ccbd7[_0x36da('196', 'r2OA')]) {
                                console[_0x36da('17f', 'Kg[^')](_0x36da('197', 'k8Ng'));
                                return;
                            } else {
                                $[_0x36da('198', '@bSG')](err);
                            }
                        } else {
                            for (let _0x16196b = 0x0; _0x1ccbd7[_0x36da('199', 'VdKm')](_0x16196b, $[_0x36da('19a', '9Adj')][_0x36da('19b', 'R[TF')]); _0x16196b++) {
                                if (_0x1ccbd7[_0x36da('19c', 'C*2c')](_0x1ccbd7[_0x36da('19d', '4wvr')], _0x1ccbd7[_0x36da('19e', 'y4Tj')])) {
                                    await _0x1ccbd7[_0x36da('19f', 'r8Lx')](throwDice);
                                    await $['wait'](0x3e8);
                                    await _0x1ccbd7[_0x36da('1a0', 'poN1')](getTool);
                                    await $[_0x36da('1a1', 'BPpV')](0x3e8);
                                    switch ($['gridInfo'][_0x36da('1a2', 'x6gt')]) {
                                        case _0x1ccbd7[_0x36da('1a3', 'T%6g')]:
                                            console['log'](_0x1ccbd7['Dlsfn']);
                                            console[_0x36da('1a4', 'PwRU')](_0x1ccbd7[_0x36da('1a5', 'kBRN')]);
                                            for (let _0x16196b = 0x0; _0x1ccbd7[_0x36da('1a6', 'RXLg')](_0x16196b, $[_0x36da('1a7', 'PixO')][_0x36da('1a8', '4wvr')]['length']); _0x16196b++) {
                                                skuList = [];
                                                skuList[_0x36da('1a9', 'k8Ng')]($[_0x36da('1aa', 'rO(!')]['goodsInfo'][_0x16196b][_0x36da('1ab', 'w[HF')]);
                                                body = {
                                                    'activityId': $['activityId'],
                                                    'skuList': skuList
                                                };
                                            }
                                            await _0x1ccbd7[_0x36da('1ac', 'y4Tj')](addCart, body);
                                            await $['wait'](0x3e8);
                                            await _0x1ccbd7[_0x36da('1ad', '8$f&')](doTask);
                                            break;
                                        case _0x1ccbd7[_0x36da('1ae', 'T%6g')]:
                                            console[_0x36da('1af', 'TUgP')](_0x1ccbd7[_0x36da('1b0', '1^$h')]);
                                            console[_0x36da('1b1', 'RXLg')]('开始拆弹');
                                            for (let _0x16196b = 0x0; _0x1ccbd7[_0x36da('1b2', 'Nuzt')](_0x16196b, $[_0x36da('1b3', '8$f&')]['goodsInfo'][_0x36da('1b4', 'r2OA')]); _0x16196b++) {
                                                if (_0x1ccbd7[_0x36da('1b5', 'Hie)')] !== _0x1ccbd7[_0x36da('1b6', 'ap*B')]) {
                                                    skuList = [];
                                                    skuList[_0x36da('1b7', '2AV8')]($[_0x36da('1b8', 'CxX@')][_0x36da('1b9', 'NN3y')][_0x16196b][_0x36da('1ba', 'fCiv')]);
                                                    body = {
                                                        'activityId': $[_0x36da('1bb', 'ap*B')],
                                                        'skuList': skuList
                                                    };
                                                } else {
                                                    let _0x42b587 = $['getdata'](_0x1ccbd7['thkIR']) || '[]';
                                                    _0x42b587 = JSON[_0x36da('1bc', 'PwRU')](_0x42b587);
                                                    cookiesArr = _0x42b587[_0x36da('1bd', '1^$h')](_0x510b61 => _0x510b61['cookie']);
                                                    cookiesArr[_0x36da('1be', '2AV8')]();
                                                    cookiesArr[_0x36da('1bf', 'r2OA')](...[$[_0x36da('1c0', '5M[)')](_0x36da('1c1', 'o]u&')), $[_0x36da('1c2', '^6MV')]('CookieJD')]);
                                                    cookiesArr['reverse']();
                                                    cookiesArr = cookiesArr[_0x36da('1c3', 'kBRN')](_0x1106e5 => !!_0x1106e5);
                                                }
                                            }
                                            await addCart(body);
                                            await $[_0x36da('1c4', 'w[HF')](0x3e8);
                                            await _0x1ccbd7[_0x36da('1c5', '5M[)')](doTask);
                                            break;
                                        case _0x1ccbd7[_0x36da('1c6', 'T%6g')]:
                                            $[_0x36da('1c7', 'PwRU')] = !![];
                                            console[_0x36da('1c8', '84Oe')](_0x1ccbd7[_0x36da('1c9', 'r8Lx')]);
                                            return;
                                        default:
                                            doTask();
                                            break;
                                    }
                                    await $['wait'](0xbb8);
                                } else {
                                    $[_0x36da('1ca', 'pDzx')](e);
                                }
                            }
                        }
                    } else {
                        $['post'](opt, (_0x3279b3, _0xf8e40e, _0xd9bbe6) => {
                            resolve();
                        });
                    }
                } else {
                    return new Promise(_0x5ac634 => {
                        var _0x560c08 = {
                            'VrOeY': function (_0x27391d, _0x18cb19) {
                                return _0x1ccbd7[_0x36da('1cb', 'TUgP')](_0x27391d, _0x18cb19);
                            },
                            'rcCTP': _0x1ccbd7[_0x36da('1cc', 'r8Lx')],
                            'qLZuH': _0x1ccbd7[_0x36da('1cd', 'o$35')],
                            'VmNbI': function (_0x10ea3f, _0x495464) {
                                return _0x1ccbd7[_0x36da('1ce', 'VdKm')](_0x10ea3f, _0x495464);
                            },
                            'dgZFg': _0x1ccbd7['ENIzw'],
                            'AyXBm': _0x36da('1cf', 'T%6g'),
                            'MjslM': _0x36da('1d0', 'poN1'),
                            'bJlgz': _0x1ccbd7[_0x36da('1d1', 'C*2c')]
                        };
                        $[_0x36da('1d2', '5M[)')](taskUrl(_0x1ccbd7[_0x36da('1d3', '5M[)')]), (_0x54fce5, _0x335008, _0x4d7583) => {
                            if (_0x560c08[_0x36da('1d4', 'K4n%')](_0x560c08[_0x36da('1d5', 'CxX@')], 'GLhCC')) {
                                try {
                                    if (_0x54fce5) {
                                        if (_0x560c08[_0x36da('1d6', 'R[TF')] === _0x560c08['qLZuH']) {
                                            console[_0x36da('1d7', 'o]u&')](_0x36da('1d8', 'ap*B') + JSON[_0x36da('a5', 'poN1')](_0x54fce5));
                                        } else {
                                            $[_0x36da('1d9', 'ap*B')](opt, (_0x1967fc, _0x56e40b, _0x5aebfa) => {
                                                _0x5ac634();
                                            });
                                        }
                                    } else {
                                        _0x4d7583 = JSON[_0x36da('1da', 'ap*B')](_0x4d7583);
                                        if (_0x560c08[_0x36da('1db', '4wvr')](_0x4d7583[_0x36da('1dc', '9Adj')], null) && _0x4d7583['success'] === !![]) {
                                            console[_0x36da('e3', 'poN1')](_0x36da('1dd', 'NN3y'));
                                            if (!$[_0x36da('1de', 'PixO')]) {
                                                if (_0x560c08['dgZFg'] === _0x560c08[_0x36da('1df', 'poN1')]) {
                                                    skuList = [];
                                                    skuList[_0x36da('1e0', '5M[)')]($[_0x36da('db', 'r8Lx')]['goodsInfo'][i][_0x36da('1e1', 'C*2c')]);
                                                    body = {
                                                        'activityId': $[_0x36da('1e2', 'Nuzt')],
                                                        'skuList': skuList
                                                    };
                                                } else {
                                                    $[_0x36da('1e3', 'x6gt')]($[_0x36da('1e4', 'NN3y')], _0x560c08[_0x36da('1e5', '5M[)')]);
                                                }
                                            }
                                        }
                                    }
                                } catch (_0x6dffb7) {
                                    if (_0x560c08[_0x36da('1e6', 'r8Lx')] !== _0x560c08[_0x36da('1e7', 'Wqwb')]) {
                                        console[_0x36da('84', 'kBRN')](_0x6dffb7);
                                    } else {
                                        $['logErr'](_0x6dffb7);
                                    }
                                } finally {
                                    _0x5ac634();
                                }
                            } else {
                                console[_0x36da('1d7', 'o]u&')](_0x4d7583[_0x36da('1e8', 'r8Lx')]);
                            }
                        });
                    });
                }
            }
            $['log'](cookie[_0x36da('1e9', '84Oe')](/pt_key=(.+?);/) && cookie[_0x36da('1ea', 'poN1')](/pt_key=(.+?);/)[0x1]);
            await $[_0x36da('1eb', 'pDzx')](0x7d0);
            await _0x1ccbd7['AzKfQ'](getBeanRewards);
            await $[_0x36da('1ec', '84Oe')](0x7d0);
            console['log'](message);
        } else {
            console['log'](e);
        }
    }
}

function getBeanRewards() {
    var _0x2a1e36 = {
        'Lddwj': _0x36da('1ed', 'o$35'),
        'UqNkf': function (_0x17fece, _0x37cfbf) {
            return _0x17fece !== _0x37cfbf;
        },
        'ggaid': _0x36da('1ee', 'rO(!'),
        'rTHtK': function (_0x107869) {
            return _0x107869();
        },
        'ucyRi': _0x36da('1ef', 'Hie)'),
        'dLocm': function (_0x2abb1c, _0x150041) {
            return _0x2abb1c(_0x150041);
        }
    };
    return new Promise(_0x20be2a => {
        var _0x2a9261 = {
            'MJPsL': function (_0x19c805, _0x13811d) {
                return _0x19c805 === _0x13811d;
            },
            'AUYZk': function (_0x4bab5b, _0x101e61) {
                return _0x4bab5b < _0x101e61;
            },
            'EdOUx': _0x2a1e36[_0x36da('1f0', '1^$h')],
            'AjmNh': function (_0x4cc943, _0x40c40a) {
                return _0x2a1e36['UqNkf'](_0x4cc943, _0x40c40a);
            },
            'PdLmR': _0x2a1e36['ggaid'],
            'znPjs': function (_0x1e64a5) {
                return _0x2a1e36[_0x36da('1f1', 'BPpV')](_0x1e64a5);
            }
        };
        if (_0x36da('1f2', 'V^0U') !== _0x2a1e36[_0x36da('1f3', 'x6gt')]) {
            $['get'](_0x2a1e36[_0x36da('1f4', 'okv^')](taskUrl, _0x36da('1f5', '(cxs')), (_0x51d279, _0x35c995, _0x33302a) => {
                try {
                    if (_0x51d279) {
                        console[_0x36da('f4', 'D1$9')]('异常：' + JSON['stringify'](_0x51d279));
                    } else {
                        _0x33302a = JSON['parse'](_0x33302a);
                        if (_0x2a9261[_0x36da('1f6', 'C*2c')](_0x33302a['errorCode'], null) && _0x2a9261[_0x36da('1f7', 'PwRU')](_0x33302a[_0x36da('1f8', 'TUgP')], !![])) {
                            for (let _0x31c5a2 = 0x0; _0x2a9261[_0x36da('1f9', 'NN3y')](_0x31c5a2, _0x33302a[_0x36da('1fa', 'h3dU')][_0x36da('1fb', '$hRA')]); _0x31c5a2++) {
                                message = _0x36da('1fc', ']Sd0');
                                message += _0x33302a['datas'][_0x31c5a2]['name'] + '\x20-\x20' + _0x33302a['datas'][_0x31c5a2]['value'] + _0x36da('1fd', 'fCiv');
                            }
                        }
                    }
                } catch (_0x37dfa4) {
                    if (_0x2a9261[_0x36da('1fe', 'Hie)')](_0x36da('1ff', 'pDzx'), _0x2a9261[_0x36da('200', 'CxX@')])) {
                        $[_0x36da('201', 'okv^')](_0x37dfa4);
                    } else {
                        $[_0x36da('202', 'Wqwb')](_0x37dfa4);
                    }
                } finally {
                    if (_0x2a9261[_0x36da('203', 'q5$[')](_0x2a9261['PdLmR'], 'MWoth')) {
                        $[_0x36da('204', '5M[)')](e);
                    } else {
                        _0x2a9261[_0x36da('205', 'o$35')](_0x20be2a);
                    }
                }
            });
        } else {
            console[_0x36da('8', 'Hie)')](_0x36da('206', 'o]u&') + JSON[_0x36da('207', 'NN3y')](err));
        }
    });
}

function addCart(_0x59f889) {
    var _0x452455 = {
        'tUlQa': _0x36da('208', '8$f&'),
        'wVhvx': 'FjEfI',
        'jJRFU': _0x36da('209', 'x6gt'),
        'SXHvL': function (_0x20e641, _0x36c85b) {
            return _0x20e641 !== _0x36c85b;
        },
        'jRnTj': 'gpbTy',
        'yAIDQ': function (_0x9e256d, _0x5906bf, _0xa5e8b9) {
            return _0x9e256d(_0x5906bf, _0xa5e8b9);
        }
    };
    return new Promise(_0x4154bb => {
        var _0x192022 = {
            'uAWiE': function (_0x31c173) {
                return _0x31c173();
            },
            'fxFYo': function (_0x16a801, _0x4455dc) {
                return _0x16a801 === _0x4455dc;
            },
            'hnLRx': _0x452455[_0x36da('20a', '1^$h')],
            'OvMud': _0x452455['wVhvx'],
            'awYMP': _0x452455[_0x36da('20b', 'q5$[')],
            'svbxu': function (_0x1c647f, _0x47b5d5) {
                return _0x452455['SXHvL'](_0x1c647f, _0x47b5d5);
            },
            'eVaMy': _0x452455['jRnTj']
        };
        $[_0x36da('20c', 'w[HF')](_0x452455[_0x36da('20d', 'T%6g')](postUrl, _0x36da('20e', 'T%6g'), _0x59f889), (_0x34aacc, _0x411541, _0xc55ce6) => {
            try {
                if (_0x192022[_0x36da('20f', 'D1$9')](_0x192022[_0x36da('210', 'EAKJ')], _0x192022[_0x36da('211', 'o]u&')])) {
                    if (_0x34aacc) {
                        if (_0x192022['OvMud'] !== _0x192022[_0x36da('212', '1^$h')]) {
                            console[_0x36da('1af', 'TUgP')](_0x36da('213', 'C*2c') + JSON['stringify'](_0x34aacc));
                        } else {
                            if (_0xc55ce6) {
                                $['zRes'] = JSON['parse'](_0xc55ce6);
                                _0x4154bb();
                            };
                        }
                    } else {
                        if (_0x192022[_0x36da('214', 'Nuzt')](_0x36da('215', 'r8Lx'), _0x192022[_0x36da('216', 'PixO')])) {
                            _0xc55ce6 = JSON[_0x36da('217', '1^$h')](_0xc55ce6);
                            if (_0x192022[_0x36da('218', '84Oe')](_0xc55ce6['errorCode'], null) && _0xc55ce6[_0x36da('219', 'h3dU')] === !![]) {
                                console[_0x36da('184', 'q5$[')](_0x36da('21a', '8$f&'));
                            }
                        } else {
                            skuList = [];
                            skuList[_0x36da('21b', 'fCiv')]($[_0x36da('21c', 'RXLg')]['goodsInfo'][i][_0x36da('21d', 'K4n%')]);
                            _0x59f889 = {
                                'activityId': $['activityId'],
                                'skuList': skuList
                            };
                        }
                    }
                } else {
                    _0x192022[_0x36da('21e', 'T%6g')](_0x4154bb);
                }
            } catch (_0x1930e2) {
                $[_0x36da('198', '@bSG')](_0x1930e2);
            } finally {
                _0x4154bb();
            }
        });
    });
}

function getTool() {
    var _0x1d7fcd = {
        'yWodH': function (_0xde027f, _0x1a061f) {
            return _0xde027f !== _0x1a061f;
        },
        'TTKOf': function (_0x4b19db, _0x1e8efe) {
            return _0x4b19db === _0x1e8efe;
        },
        'UcYog': function (_0x206c5c, _0x548c10) {
            return _0x206c5c !== _0x548c10;
        },
        'wxixY': 'gnqWK',
        'IGRQj': _0x36da('21f', '1^$h'),
        'WHQnX': _0x36da('220', 'PwRU')
    };
    return new Promise(_0x4de2cc => {
        var _0x2e92c8 = {
            'OQHBL': function (_0xedd5ed, _0x2e6533) {
                return _0x1d7fcd[_0x36da('221', 'Wqwb')](_0xedd5ed, _0x2e6533);
            },
            'rsORF': function (_0x4b6f4d, _0x3870ba) {
                return _0x1d7fcd[_0x36da('222', 'pDzx')](_0x4b6f4d, _0x3870ba);
            }
        };
        if (_0x1d7fcd['UcYog'](_0x36da('223', '84Oe'), _0x1d7fcd[_0x36da('224', 'BPpV')])) {
            $[_0x36da('225', 'q5$[')](e);
        } else {
            $[_0x36da('226', 'kBRN')](taskUrl(_0x1d7fcd['IGRQj'], _0x1d7fcd[_0x36da('227', 'kBRN')]), (_0x19fbf0, _0x460423, _0x52f1bf) => {
                var _0x46a3fb = {
                    'XkhvI': function (_0x35b943, _0x104e29) {
                        return _0x35b943 === _0x104e29;
                    }
                };
                try {
                    if (_0x19fbf0) {
                        console[_0x36da('228', 'fCiv')](_0x36da('229', 'EAKJ') + JSON[_0x36da('22a', 'r8Lx')](_0x19fbf0));
                    } else {
                        if (_0x2e92c8[_0x36da('22b', 'Kg[^')](_0x36da('22c', 'Hie)'), _0x36da('22d', 'pDzx'))) {
                            _0x52f1bf = JSON['parse'](_0x52f1bf);
                            if (_0x46a3fb[_0x36da('22e', 'VdKm')](_0x52f1bf[_0x36da('22f', 'C*2c')], null)) {
                                console[_0x36da('188', '1^$h')](_0x36da('230', 'CxX@') + _0x52f1bf[_0x36da('231', '@bSG')]);
                            } else {
                                console[_0x36da('232', 'PixO')](_0x52f1bf[_0x36da('233', '8$f&')]);
                            }
                        } else {
                            _0x52f1bf = JSON[_0x36da('234', 'C*2c')](_0x52f1bf);
                            if (_0x2e92c8[_0x36da('235', 'Wqwb')](_0x52f1bf[_0x36da('236', 'r8Lx')], null)) {
                                taskList = _0x52f1bf['datas'][_0x36da('237', '84Oe')](_0x3d5d85 => _0x3d5d85[_0x36da('238', 'PixO')] === _0x36da('239', 'okv^'));
                                $['roadBlockList'] = taskList[_0x36da('23a', 'Kg[^')](_0x2fb019 => _0x2fb019['type'] === 'road_block')[0x0];
                                $[_0x36da('23b', 'h3dU')] = taskList[_0x36da('e1', '4wvr')](_0x58f91d => _0x58f91d[_0x36da('23c', 'D1$9')] === _0x36da('23d', 'D1$9'))[0x0];
                                $[_0x36da('23e', 'o]u&')] = taskList[_0x36da('23f', 'V^0U')](_0x49d348 => _0x49d348['type'] === 'buff')[0x0];
                            } else {
                                console[_0x36da('121', 'Nuzt')](_0x52f1bf['errorMessage']);
                            }
                        }
                    }
                } catch (_0x5018c0) {
                    $['logErr'](_0x5018c0);
                } finally {
                    _0x4de2cc();
                }
            });
        }
    });
}

function throwDice() {
    var _0x301606 = {
        'YCPxK': 'sendbeans.jd.com',
        'aZufe': _0x36da('240', '84Oe'),
        'tUbvz': _0x36da('241', '@bSG'),
        'QCJJm': _0x36da('242', 'x6gt'),
        'YLLWi': _0x36da('243', ']Sd0'),
        'zFXwY': _0x36da('244', '9Adj'),
        'SXxrN': function (_0xab4499, _0x3fd853) {
            return _0xab4499 !== _0x3fd853;
        },
        'JazvM': _0x36da('245', 'PREP'),
        'TUJeI': function (_0x2301f0, _0x326f40) {
            return _0x2301f0 !== _0x326f40;
        },
        'KqQmq': 'MyAEn',
        'MjEDC': function (_0x2c97ef, _0x50d15f) {
            return _0x2c97ef === _0x50d15f;
        },
        'Lxkdr': _0x36da('246', '5M[)'),
        'nvoSM': 'VpdHN',
        'FcfOl': function (_0x28c375) {
            return _0x28c375();
        },
        'bztMW': _0x36da('247', 'EAKJ'),
        'QRMLl': function (_0x394b71, _0x308d99, _0x379fbf) {
            return _0x394b71(_0x308d99, _0x379fbf);
        },
        'hFRjO': 'throwDice',
        'NeIVi': _0x36da('248', 'fCiv')
    };
    return new Promise(async _0x4e43f3 => {
        var _0x26fef0 = {
            'VnAHS': function (_0x317968, _0xc587f6) {
                return _0x317968 === _0xc587f6;
            }
        };
        if (_0x301606[_0x36da('249', '5M[)')] !== _0x36da('24a', 'RXLg')) {
            console[_0x36da('179', 'y4Tj')]('执行任务成功');
        } else {
            $[_0x36da('24b', 'PwRU')](_0x301606[_0x36da('24c', 'V^0U')](taskUrl, _0x301606[_0x36da('24d', 'V^0U')], _0x301606['NeIVi']), (_0x4f82a8, _0x1153d5, _0x44b48e) => {
                var _0x318f27 = {
                    'BJvlB': _0x301606[_0x36da('24e', 'Wqwb')],
                    'TMIIS': _0x301606['aZufe'],
                    'bTeyB': _0x36da('24f', 'Hie)'),
                    'MFiFK': _0x301606[_0x36da('250', 'Nuzt')],
                    'gPRsf': _0x36da('251', 'D1$9'),
                    'UoPXk': _0x301606[_0x36da('252', 'NN3y')],
                    'oBDEY': _0x301606[_0x36da('253', 'D1$9')],
                    'TkKhb': _0x301606[_0x36da('254', 'PREP')]
                };
                try {
                    if (_0x301606['SXxrN'](_0x301606[_0x36da('255', 'rO(!')], _0x36da('256', ']Sd0'))) {
                        if (_0x4f82a8) {
                            console[_0x36da('257', 'R[TF')]('异常：' + JSON['stringify'](_0x4f82a8));
                        } else {
                            if (_0x301606[_0x36da('258', '(cxs')](_0x301606[_0x36da('259', '1^$h')], _0x301606[_0x36da('25a', 'K4n%')])) {
                                _0x44b48e = JSON[_0x36da('25b', 'y4Tj')](_0x44b48e);
                                if (_0x26fef0['VnAHS'](_0x44b48e[_0x36da('25c', 'Hie)')], null)) {
                                    console[_0x36da('184', 'q5$[')]('摇到了' + _0x44b48e[_0x36da('b4', 'Nuzt')][_0x36da('25d', '@bSG')] + _0x36da('25e', 'Wqwb') + _0x44b48e[_0x36da('25f', 'h3dU')][_0x36da('260', 'okv^')][_0x36da('261', '4wvr')]);
                                    $[_0x36da('262', '1^$h')] = _0x44b48e[_0x36da('263', '2AV8')][_0x36da('264', 'kBRN')];
                                } else {
                                    console[_0x36da('265', 'ap*B')](_0x44b48e['errorMessage']);
                                }
                            } else {
                                _0x44b48e = JSON[_0x36da('266', 'q5$[')](_0x44b48e);
                                if (_0x301606[_0x36da('267', 'Hie)')](_0x44b48e[_0x36da('268', 'R[TF')], null)) {
                                    console['log'](_0x36da('269', 'VdKm') + _0x44b48e[_0x36da('26a', '1^$h')]['dicePoint'] + _0x36da('26b', 'okv^') + _0x44b48e['data'][_0x36da('26c', 'q5$[')]['gridNum']);
                                    $[_0x36da('26d', 'TUgP')] = _0x44b48e[_0x36da('26e', 'EAKJ')]['gridInfo'];
                                } else {
                                    console[_0x36da('26f', 'Wqwb')](_0x44b48e[_0x36da('270', 'C*2c')]);
                                }
                            }
                        }
                    } else {
                        return {
                            'url': '' + ACT_API + function_id,
                            'headers': {
                                'Host': _0x318f27['BJvlB'],
                                'Content-Type': _0x318f27[_0x36da('271', '4wvr')],
                                'Origin': _0x318f27['bTeyB'],
                                'Accept-Encoding': _0x318f27[_0x36da('272', 'PREP')],
                                'Cookie': cookie,
                                'Connection': _0x36da('273', '@bSG'),
                                'Accept': _0x318f27['gPRsf'],
                                'User-Agent': _0x318f27['UoPXk'],
                                'Referer': _0x318f27[_0x36da('274', 'k8Ng')],
                                'Accept-Language': _0x318f27['TkKhb']
                            },
                            'body': JSON[_0x36da('275', 'h3dU')](body)
                        };
                    }
                } catch (_0x1d328a) {
                    if (_0x36da('276', 'Nuzt') !== _0x301606['Lxkdr']) {
                        $[_0x36da('277', 'w[HF')] = JSON[_0x36da('10a', 'TUgP')](_0x44b48e);
                    } else {
                        $['logErr'](_0x1d328a);
                    }
                } finally {
                    if (_0x301606['TUJeI'](_0x301606['nvoSM'], _0x36da('278', 'o]u&'))) {
                        _0x301606['FcfOl'](_0x4e43f3);
                    } else {
                        console[_0x36da('279', '5M[)')](_0x44b48e[_0x36da('27a', '4wvr')]);
                    }
                }
            });
        }
    });
}

function doTask() {
    var _0x2583ea = {
        'jqdnA': _0x36da('27b', 'w[HF'),
        'hLHde': 'https://bean.m.jd.com/bean/signIndex.action',
        'RWxJk': function (_0xed43c, _0x44c6b8) {
            return _0xed43c !== _0x44c6b8;
        },
        'PVcPZ': _0x36da('27c', 'w[HF'),
        'KzLdy': 'aOOeD',
        'SuQVR': function (_0x75116c, _0xbb4aa3) {
            return _0x75116c === _0xbb4aa3;
        },
        'BHbXO': _0x36da('27d', 'w[HF'),
        'EYbwh': function (_0x1628fe) {
            return _0x1628fe();
        },
        'ajTok': function (_0x1f878f, _0x317038, _0x5790ca) {
            return _0x1f878f(_0x317038, _0x5790ca);
        },
        'KMQrl': _0x36da('27e', 'T%6g')
    };
    return new Promise(_0x107c20 => {
        $['get'](_0x2583ea['ajTok'](taskUrl, _0x2583ea[_0x36da('27f', 'okv^')], '&fp=&eid='), (_0x4424d2, _0x25384b, _0x28dcaf) => {
            var _0xb8060b = {
                'WNlAi': _0x2583ea[_0x36da('280', 'PixO')],
                'hqgXz': '【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取',
                'GINNU': _0x2583ea[_0x36da('281', 'y4Tj')]
            };
            if (_0x2583ea['RWxJk'](_0x2583ea[_0x36da('282', 'fCiv')], _0x2583ea['KzLdy'])) {
                try {
                    if (_0x4424d2) {
                        console[_0x36da('283', 'w[HF')](_0x36da('284', 'y4Tj') + JSON[_0x36da('285', 'ap*B')](_0x4424d2));
                    } else {
                        _0x28dcaf = JSON['parse'](_0x28dcaf);
                        if (_0x2583ea[_0x36da('286', 'T%6g')](_0x28dcaf[_0x36da('287', 'T%6g')], null)) {
                            console[_0x36da('f4', 'D1$9')](_0x36da('288', 'r2OA') + _0x28dcaf[_0x36da('231', '@bSG')]);
                        } else {
                            if (_0x2583ea[_0x36da('289', 'T%6g')] !== _0x36da('28a', 'y4Tj')) {
                                console[_0x36da('232', 'PixO')](_0x28dcaf[_0x36da('28b', 'T%6g')]);
                            } else {
                                $[_0x36da('28c', 'y4Tj')]($[_0x36da('28d', 'q5$[')], _0xb8060b[_0x36da('28e', 'Hie)')]);
                            }
                        }
                    }
                } catch (_0x4d5847) {
                    $['logErr'](_0x4d5847);
                } finally {
                    _0x2583ea[_0x36da('28f', 'K4n%')](_0x107c20);
                }
            } else {
                $[_0x36da('290', 'k8Ng')]($['name'], _0xb8060b['hqgXz'], _0x36da('291', 'pDzx'), {
                    'open-url': _0xb8060b[_0x36da('292', 'PwRU')]
                });
                return;
            }
        });
    });
}

function getGameInfo() {
    var _0x3439d5 = {
        'lGHYJ': _0x36da('293', 'y4Tj'),
        'QvtIB': function (_0x221323, _0x5dda2b) {
            return _0x221323 === _0x5dda2b;
        },
        'JPQWS': _0x36da('294', 'VdKm'),
        'ZmxpP': function (_0x1ab2ba, _0x323ea0) {
            return _0x1ab2ba !== _0x323ea0;
        },
        'xTNAT': _0x36da('295', '1^$h'),
        'oHZHJ': _0x36da('296', 'RXLg'),
        'EJxQy': function (_0x5e0eb7, _0x41af13) {
            return _0x5e0eb7 === _0x41af13;
        },
        'aOwEj': function (_0x449ca1, _0x1a8d7c) {
            return _0x449ca1 === _0x1a8d7c;
        },
        'amziJ': _0x36da('297', 'pDzx'),
        'ymwlQ': _0x36da('298', '@bSG'),
        'DaCOq': _0x36da('299', 'Nuzt'),
        'qFeCj': function (_0x5753fe) {
            return _0x5753fe();
        },
        'agvke': function (_0x291b8f, _0x35b4a4) {
            return _0x291b8f === _0x35b4a4;
        },
        'wBWwS': _0x36da('18a', 'Kg[^'),
        'bSlCT': function (_0xf94c12, _0x42ad67) {
            return _0xf94c12 !== _0x42ad67;
        },
        'EDyVb': _0x36da('29a', '84Oe'),
        'hmjwm': function (_0x552dba, _0x5ca88e) {
            return _0x552dba(_0x5ca88e);
        },
        'edGSv': 'getHomeInfo'
    };
    return new Promise(_0x4b8ab4 => {
        var _0x191d82 = {
            'MZbci': function (_0x48360b, _0x57b902) {
                return _0x3439d5[_0x36da('29b', '5M[)')](_0x48360b, _0x57b902);
            },
            'wwhaA': _0x3439d5[_0x36da('29c', ']Sd0')]
        };
        if (_0x3439d5[_0x36da('29d', 'h3dU')](_0x36da('29e', 'r2OA'), _0x3439d5['EDyVb'])) {
            _0x4b8ab4();
        } else {
            $['get'](_0x3439d5['hmjwm'](taskUrl, _0x3439d5[_0x36da('29f', '9Adj')]), (_0x467686, _0x2a35e3, _0x198206) => {
                var _0x47acc1 = {
                    'oGFAU': function (_0x10dd14, _0x35d894) {
                        return _0x10dd14 === _0x35d894;
                    }
                };
                if (_0x3439d5[_0x36da('2a0', 'fCiv')] !== _0x36da('2a1', 'TUgP')) {
                    try {
                        if (_0x3439d5[_0x36da('2a2', 'C*2c')](_0x36da('2a3', 'r2OA'), _0x3439d5[_0x36da('2a4', '4wvr')])) {
                            if (_0x467686) {
                                if (_0x3439d5[_0x36da('2a5', 'NN3y')](_0x36da('2a6', 'fCiv'), _0x3439d5['xTNAT'])) {
                                    console[_0x36da('26f', 'Wqwb')](_0x36da('2a7', 'CxX@') + JSON['stringify'](_0x467686));
                                } else {
                                    $['logErr'](e);
                                }
                            } else {
                                if (_0x3439d5[_0x36da('2a8', 'VdKm')](_0x36da('2a9', '2AV8'), _0x3439d5[_0x36da('2aa', '9Adj')])) {
                                    _0x198206 = JSON[_0x36da('1bc', 'PwRU')](_0x198206);
                                    if (_0x3439d5[_0x36da('2ab', 'fCiv')](_0x198206['errorCode'], null)) {
                                        $[_0x36da('2ac', '2AV8')] = _0x198206['data']['jumpActivityDetail'];
                                        $['userInfo'] = _0x198206['data']['userInfo'];
                                        $[_0x36da('2ad', 'poN1')] = _0x198206[_0x36da('2ae', 'q5$[')]['currentGrid'];
                                    } else {
                                        if (_0x3439d5[_0x36da('2af', 'N3]p')](_0x3439d5[_0x36da('2b0', '@bSG')], _0x3439d5[_0x36da('2b1', '^6MV')])) {
                                            _0x198206 = JSON[_0x36da('2b2', 'D1$9')](_0x198206);
                                            if (_0x47acc1[_0x36da('2b3', 'R[TF')](_0x198206[_0x36da('2b4', 'okv^')], null)) {
                                                $['jumpActivityDetail'] = _0x198206['data'][_0x36da('2b5', 'kBRN')];
                                                $[_0x36da('2b6', 'rO(!')] = _0x198206[_0x36da('12e', 'PixO')][_0x36da('2b7', 'VdKm')];
                                                $[_0x36da('2ad', 'poN1')] = _0x198206[_0x36da('2b8', 'fCiv')]['currentGrid'];
                                            } else {
                                                console['log'](_0x198206[_0x36da('2b9', 'V^0U')]);
                                            }
                                        } else {
                                            console['log'](_0x198206[_0x36da('27a', '4wvr')]);
                                        }
                                    }
                                } else {
                                    _0x4b8ab4();
                                }
                            }
                        } else {
                            _0x198206 = JSON[_0x36da('2ba', '84Oe')](_0x198206);
                            if (_0x198206[_0x36da('2bb', '4wvr')] === '1001') {
                                $['isLogin'] = ![];
                                return;
                            }
                            if (_0x191d82[_0x36da('2bc', 'PREP')](_0x198206['retcode'], '0') && _0x198206[_0x36da('2ae', 'q5$[')][_0x36da('2bd', 'PREP')](_0x191d82[_0x36da('2be', 'V^0U')])) {
                                $[_0x36da('2bf', 'N3]p')] = _0x198206[_0x36da('2c0', 'w[HF')][_0x36da('2c1', 'EAKJ')][_0x36da('2c2', 'C*2c')][_0x36da('2c3', '$hRA')];
                            }
                        }
                    } catch (_0x34a89f) {
                        $[_0x36da('2c4', 'RXLg')](_0x34a89f);
                    } finally {
                        if (_0x3439d5[_0x36da('2c5', 'fCiv')](_0x36da('2c6', 'okv^'), _0x3439d5[_0x36da('2c7', 'Nuzt')])) {
                            $['logErr'](e);
                        } else {
                            _0x3439d5[_0x36da('2c8', '4wvr')](_0x4b8ab4);
                        }
                    }
                } else {
                    $[_0x36da('2c9', '9Adj')](opt, (_0x38ed60, _0x431a21, _0x12ddb2) => {
                        if (_0x12ddb2) {
                            $[_0x36da('2ca', 'pDzx')] = JSON['parse'](_0x12ddb2);
                            _0x4b8ab4();
                        };
                    });
                }
            });
        }
    });
}

function postUrl(_0x5cb232, _0x4f2699) {
    var _0x43064f = {
        'czqla': _0x36da('2cb', 'C*2c'),
        'RZHkM': _0x36da('2cc', 'poN1'),
        'Fozpb': 'gzip,\x20deflate,\x20br',
        'raYup': _0x36da('2cd', 'PwRU'),
        'MAjip': _0x36da('2ce', 'r8Lx'),
        'fJRDj': _0x36da('2cf', 'N3]p')
    };
    return {
        'url': '' + ACT_API + _0x5cb232,
        'headers': {
            'Host': _0x36da('2d0', '5M[)'),
            'Content-Type': _0x43064f[_0x36da('2d1', 'T%6g')],
            'Origin': _0x43064f[_0x36da('2d2', 'Wqwb')],
            'Accept-Encoding': _0x43064f[_0x36da('2d3', '9Adj')],
            'Cookie': cookie,
            'Connection': 'keep-alive',
            'Accept': _0x43064f['raYup'],
            'User-Agent': _0x43064f[_0x36da('2d4', '8$f&')],
            'Referer': _0x43064f[_0x36da('2d5', '8$f&')],
            'Accept-Language': _0x36da('2d6', 'q5$[')
        },
        'body': JSON[_0x36da('2d7', 'PREP')](_0x4f2699)
    };
}

function taskUrl(_0x404e93, _0x4c5c1d = '') {
    var _0x240924 = {
        'JgeYy': _0x36da('2d8', '1^$h'),
        'uJJby': _0x36da('2d9', 'k8Ng'),
        'WNCNQ': 'jdapp;iPhone;9.4.0;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;pv/8.246;apprpd/Home_Main;ref/;psq/20;ads/;psn/;jdv/;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS\x2014.3;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1',
        'Iqtja': _0x36da('2da', '2AV8')
    };
    return {
        'url': '' + ACT_API + _0x404e93 + _0x36da('2db', 'RXLg') + $[_0x36da('2dc', '5M[)')] + _0x4c5c1d,
        'headers': {
            'Host': _0x240924[_0x36da('2dd', 'RXLg')],
            'Accept': _0x240924['uJJby'],
            'Connection': _0x36da('2de', 'k8Ng'),
            'Cookie': cookie,
            'User-Agent': _0x240924[_0x36da('2df', 'pDzx')],
            'Accept-Language': 'zh-cn',
            'Referer': 'https://sendbeans.jd.com/dist/taro/index.html/?lng=0.000000&lat=0.000000&sid=&un_area=',
            'Accept-Encoding': _0x240924[_0x36da('2e0', 'okv^')]
        }
    };
}

function checkCookie() {
    var _0x5f5767 = {
        'agDOg': function (_0x51692d, _0x36867b) {
            return _0x51692d === _0x36867b;
        },
        'igRQo': _0x36da('2e1', 'q5$['),
        'PMtTr': 'bjqTW',
        'lBwWQ': _0x36da('2e2', 'okv^'),
        'slHAE': _0x36da('2e3', 'PREP'),
        'qHMYv': function (_0x319cc4) {
            return _0x319cc4();
        },
        'IAqtr': _0x36da('2e4', 'r8Lx'),
        'NDeja': 'me-api.jd.com',
        'Mbanu': _0x36da('2e5', 'Kg[^'),
        'SqdSf': _0x36da('2e6', 'CxX@'),
        'TZPwm': _0x36da('2e7', 'PixO'),
        'kAaTH': _0x36da('2d6', 'q5$['),
        'VJwIM': _0x36da('2e8', '@bSG'),
        'qAOrw': 'gzip,\x20deflate,\x20br'
    };
    const _0x19014c = {
        'url': _0x5f5767['IAqtr'],
        'headers': {
            'Host': _0x5f5767[_0x36da('2e9', 'V^0U')],
            'Accept': _0x5f5767['Mbanu'],
            'Connection': _0x5f5767[_0x36da('2ea', 'N3]p')],
            'Cookie': cookie,
            'User-Agent': _0x5f5767['TZPwm'],
            'Accept-Language': _0x5f5767[_0x36da('2eb', '9Adj')],
            'Referer': _0x5f5767[_0x36da('2ec', 'VdKm')],
            'Accept-Encoding': _0x5f5767[_0x36da('2ed', '8$f&')]
        }
    };
    return new Promise(_0x1dc9cc => {
        var _0x5c0584 = {
            'qmRPk': function (_0xf5f86d, _0x4adb9b) {
                return _0x5f5767['agDOg'](_0xf5f86d, _0x4adb9b);
            },
            'ckoRY': _0x5f5767[_0x36da('2ee', 'CxX@')],
            'IIDJw': _0x5f5767[_0x36da('2ef', '@bSG')],
            'ndggL': _0x36da('2f0', 'T%6g'),
            'PtzzZ': _0x5f5767['lBwWQ'],
            'GjkKq': '1001',
            'fOzMd': _0x5f5767['slHAE'],
            'XGPOQ': _0x36da('2f1', 'w[HF'),
            'hNhim': function (_0x11d3d7) {
                return _0x5f5767[_0x36da('2f2', '5M[)')](_0x11d3d7);
            }
        };
        $['get'](_0x19014c, (_0x18e667, _0x3a3279, _0x241436) => {
            var _0x129cbb = {
                'guTsK': function (_0x4eeb69, _0x3fbb47) {
                    return _0x5c0584[_0x36da('2f3', '^6MV')](_0x4eeb69, _0x3fbb47);
                }
            };
            try {
                if (_0x5c0584[_0x36da('2f4', 'PwRU')] !== _0x5c0584[_0x36da('2f5', 'PixO')]) {
                    _0x241436 = JSON['parse'](_0x241436);
                    if (_0x129cbb['guTsK'](_0x241436[_0x36da('2f6', 'Wqwb')], null) && _0x129cbb[_0x36da('2f7', 'poN1')](_0x241436['success'], !![])) {
                        console[_0x36da('257', 'R[TF')](_0x36da('2f8', 'Wqwb'));
                    }
                } else {
                    if (_0x18e667) {
                        $['logErr'](_0x18e667);
                    } else {
                        if (_0x5c0584[_0x36da('2f9', 'PixO')](_0x5c0584['IIDJw'], _0x5c0584[_0x36da('2fa', 'R[TF')])) {
                            if (_0x241436) {
                                if (_0x5c0584[_0x36da('2fb', 'T%6g')](_0x5c0584[_0x36da('2fc', 'o$35')], _0x5c0584['PtzzZ'])) {
                                    if (_0x241436) {
                                        $['zData'] = JSON['parse'](_0x241436);
                                    };
                                } else {
                                    _0x241436 = JSON['parse'](_0x241436);
                                    if (_0x5c0584[_0x36da('2fd', 'pDzx')](_0x241436[_0x36da('2fe', 'k8Ng')], _0x5c0584['GjkKq'])) {
                                        $['isLogin'] = ![];
                                        return;
                                    }
                                    if (_0x241436[_0x36da('2ff', 'o$35')] === '0' && _0x241436[_0x36da('300', '$hRA')][_0x36da('301', 'o]u&')](_0x5c0584[_0x36da('302', 'R[TF')])) {
                                        $[_0x36da('303', 'h3dU')] = _0x241436[_0x36da('304', 'R[TF')][_0x36da('305', 'Nuzt')]['baseInfo'][_0x36da('306', 'q5$[')];
                                    }
                                }
                            } else {
                                $[_0x36da('307', 'EAKJ')](_0x5c0584[_0x36da('308', 'q5$[')]);
                            }
                        } else {
                            console[_0x36da('309', 'k8Ng')](_0x36da('30a', 'K4n%') + JSON['stringify'](_0x18e667));
                        }
                    }
                }
            } catch (_0x5c40f7) {
                $[_0x36da('30b', 'PREP')](_0x5c40f7);
            } finally {
                _0x5c0584[_0x36da('30c', 'Hie)')](_0x1dc9cc);
            }
        });
    });
};
_0xodL = 'jsjiami.com.v6';
// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}