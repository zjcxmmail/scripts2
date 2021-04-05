/*
京东小魔方
活动入口：京东app-新品首发-京东小魔方-百万京豆
活动时间：2021-04-04 至 2021-04-06
不定时京豆活动
新手写脚本，难免有bug，能用且用。

更新地址：https://raw.githubusercontent.com/monk-coder/dust/dust/i-chenzhe/z_xmf.js
============Quantumultx===============
[task_local]
#京东小魔方
10 10 4-6 4 * https://raw.githubusercontent.com/monk-coder/dust/dust/i-chenzhe/z_xmf.js, tag=京东小魔方,  enabled=true
================Loon==============
[Script]
cron "10 10 4-6 4 *" script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/i-chenzhe/z_xmf.js,tag=京东小魔方
===============Surge=================
京东小魔方 = type=cron,cronexp="10 10 4-6 4 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/i-chenzhe/z_xmf.js
============小火箭=========
京东小魔方 = type=cron,script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/i-chenzhe/z_xmf.js, cronexpr="10 10 4-6 4 *", timeout=3600, enable=true
*/
const $ = new Env('京东小魔方');

//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [],
  cookie = '';
let helpAuthor = false; //为作者助力的开关
const cp = $.isNode() ? require('child_process') : '';
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
  let cookiesData = $.getdata('CookiesJD') || "[]";
  cookiesData = JSON.parse(cookiesData);
  cookiesArr = cookiesData.map(item => item.cookie);
  cookiesArr.reverse();
  cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
  cookiesArr.reverse();
  cookiesArr = cookiesArr.filter(item => !!item);
}
$.log('脚本版本 v0.3\n更新时间:2021-03-25 18:25\n仓库：https://www.github.com/i-chenzhe/qx');
var _0xodf = 'jsjiami.com.v6',
  _0x310c = [_0xodf, 'RDbCkCs=', 'OMKCPF82', 'wrbCvcKFwqBHfMOlw4fCsMKI', 'w5cOEUE=', 'wo7ClVnDhGvCvsKxw6fDq8KXwqvDuMOXwp8wHkM=', 'b8KZwo1JwpPDgcOyw4HDmMK0RA3Dow==', 'dMO3w7Y6EiHDnXXDusKFFB85wqA=', 'dMKgOMOWN8K0HE3Di8KQ', 'O8Kxw7vDj13DvDw3bcK2wqfDig==', 'M1DDrBzDtnU=', 'w4kMCkRr', 'IcOAZXsh', 'w7lsw5xowo1xd3fDoiodW8KRw7XDiWnDosKdbsOBZ3vCrcKmUQ==', 'wrHCvW52aw==', 'csKJwoLDv1c=', 'D8KDw7TDvjg=', 'OR5EQHE=', 'IMKvw48+Iw==', 'bMKkw43DjMKy', 'fzHDlcKOwps=', 'DsOVTFQ5', 'a8KEwp1uwos=', 'PMKww4gPBg==', 'wovCu156w4Y=', 'TcO2wrLDrEg=', 'w67Cth0=', 'HWnDuCA=', 'c8K15aW56LeowpnCg+WMl+WYi8KWGQ==', 'K17DuA==', 'wpfComtZw6dTdMKfaA==', 'QAfDq8KowqQ=', 'wp5Gw4AKworCmnhJaMO6FXI=', 'wqzCh8KWw7HDisOh', 'w4DDmnzCmFzCoA==', 'wrvDoMKOwrJe', 'SyHDtsOC', 'HsO2UngYw7QDWcOW', 'wrLCjcKRw7DDg8OnwpjDuGLDtRE=', 'w4Arw5jCqgbCsg==', 'X2HCssKecAdrI8K4E8Ox', 'NkTDvhnDi3jDlQY=', '5Lq25Lq46LO/', 'dXHCtmrDscKyIMOha8K4', 'w7vCtBnCpcKb', 'QTLCiirDuy0=', 'ZnbDvsK/ZsO2PzjCpcK7w5c=', 'woB1Ij3CsENNw7M=', 'AcOtRw==', 'w5IKC0BvUA==', 'K17DqwPDmmPDmDZuwpJ8', '5Lmg5Lib6L6j5Zqa5Li+56id5pS35o2n', 'EzwOTUc=', 'wrVoPRXDtg==', 'T8Knwq1ewqA=', 'wrxjw7Mnwpg=', 'woh/Gw1B', 'w5pMwoHDusO3', 'STbDsMK2wqbDpMK6wqo+ScOGIhEuw7HDisOE', 'SsONwo7DmUjCl8OFIsK+WMKQw6ANLMO5wo9J', 'bsOJwoHDhUA=', 'wp1Two9sw5I=', 'SR/CjzTDpA==', 'wpzCnElgw6M=', 'CSMnZ28=', 'QsKCwp1GwrE=', 'wrNaDSvCog==', 'D8K2JVbDoA==', 'LVhbwoXCkg==', 'DXXDtx7DsA==', 'wqBoEA==', 'H0F8w4k=', 'QCPCizbDuT5SdcKz', 'w7fDmsO1wpfDuWQ=', 'N8O0O8KCw4/DjcOYwpnDg0kcUcOaNQ==', 'AMOGdGsM', 'NcKnDWrDkA==', 'WhHDncKOwqY=', 'CcKZD0TDlg==', 'wqbCqsKZwqJYbQ==', 'X8KOworDkg==', 'woBMw4cLwoPCnA==', 'wpzCtlhGVCVbIHM8dQ==', 'w7TDisOnwozDoXnDjcOa', '5LiN5LmK6LOJ', 'PcOwKcKjw7nDjsOnwp7Dgk0=', 'Ry5iw60k', 'wqPDoMKbwrVPSsOgMcOcQsOh', 'w4ZswrjDpcO7U8OLw5s=', 'f2IiIBLClcKFSSI9wo8=', 'w7B7w54=', 'w6Rdwp/Dm8Oj', 'H8OnU2Qaw6c=', 'WjzDpcKLwrc=', 'e3vCsEHDgsKt', 'KWTDkzxN', 'woN0woM=', '6IyA5Y+P5Lii5Yiq5YqY6KGS5oqv5Yi9', 'HSN6BcOjwpXCisORwobCk8Khw6Q=', 'woIRcMKmYMOqG3sCw7bDtA==', 'wpzDmUTDj23CusKgw7LDocKMwqzDnsOd', 'HzB/cE3DmQ==', 'QMO7w7rDoHk=', 'BS1u', 'QsKbwpXDnlLClcOeJcKk', 'w5AOCkZm', 'w7B7w41/wp13a23DrjAxRg==', 'eihnw6kmIxbDtsKXwr0=', 'wqPDoMKI', 'woIfYsK+Rw==', 'wqIQwot1Gw4UwrwsdjnCug==', 'wr3DqsKcwrRGTA==', 'wrjCoMKewqNRa8OIw6DCqMKA', 'S8KJw6g=', 'wp1+wpd4w5vDng==', 'wrhoFjfDjA==', 'YcKxIsKTCsO1GUXCrMKXUx8=', 'wpNZw4QSwobCi2BpaMO4Hi7CosKswpoF', 'IsK9wq84Dw==', 'wqkFwpZxUlwJwo0jdz3CvUzCl2FqwpE=', 'wozCom1Aw7oOMsOWcMOBwqfCj3pTVwhIAcOuw73DpMKcbcKmO21hbxrDjGPChMOswobClcK5woVPZAwAGsKNwozDlDk=', 'w6nDrsKfwrFDXMKkG8OdSsO6wppBwqnCk8OVbT9dwojDs8Oww6jDj0EMfMKJBmc+wr3Co8OOacO3W8K5w6ZcQ1nDpxPDpcOfXsKyQ8Knwo0fw5DDpWtERwJl', 'PFZLwofCrw==', 'QcKQBsOHEQ==', 'w63Di8OywpLDpirClsKMwo7Cs8Oswq3DjcK1wrzDt289MA==', 'CMKfDUoY', 'B8OmQWEGwqgDb8OHw7/Cr8KCwqzDgBDDr8OawppYUm3DtMKUFkc5wpXCj8OKw5nCjA3DkmlPw64wwqEiw7fDknHDikl9b3BjwpUVdkEIw6wud8O6IsOYHUzDk23Dq0PCrAsdesO8Mh/DsFzCsX4cwrXDjcOdwonDucKqcMKSQ0DDj3BVHMKywqMDFMK7wpXDlMKHw6ZWdg/CjsOAw78bwosBE8OYw6k3wr7DnzbDj8Ohwr5HwopzDcOsw53DrAHChB3CpHzDkMKDw7XCp1Nmwqw7SMOROVLCvsOQcMKUw5U4wqR+w5LDpcOwwowECcO/wrsZAMKUw64uwqopNsO9wphmwq7DhsK1M1LChD3CqsO/w7zCqMO9X0ddwqTDrElgNzFEw5bCucKVE8KBw6RDc2xAw507McKJw5k0NAnCg8Kmwolaw5/DrwHCkkjCux82BcOGS8KcCFHDvsOywr/CpnHCqHvDkcOMR00hYMKTw7t/cHzCksOFwqxsw79RFmHCpMKSdTofwo0iw6F8w4PCncOeX8O7w59gwoHDvcKMA8KHw69QwqnCuBglwqnCsiAGX8KUNMKeH8KpdMOOPydtwrd5dR45w7Q3w7jDtVtEOm3CtMOXw4nDukXDsggnNMKQe8O9a8KfGcKgR1nDm8OIcULCtcKvPk1tw7PDm24FR8KcYSsCLMOhPUbCmH3CoW5LTMOIa3hOwpZUw5rCmT7Cs8OAw40cfUlOwoDCqw7DjQgTw47Dq2DClCHDtDfCkgnClmLCjsOcw6okC04TwrnCpMKDGsOHw6Zcwq9WbMOKTsODf1YeE2fDq8O8w4YJw6xhwp7Dj8OzMsOkwqbDt3DCicK2IMOewp4SO8Kbd0JJwp3DqGvDjGxSPj0gcMKATcOxOyp7w4TCr8OB', 'wpzDisKmwodO', 'wodbw44mDQ==', 'Ym3DvsK7cMK+aV7Co8OowpbDg8KbfMKEwqfCq2pL', 'WDLCnC/CujhXesK8WA==', 'RUTCicKzRA==', 'woXDlVrDrmY=', 'KxtqQEo=', 'WyDDocKKworDvcKQwqo=', 'amvCscKObQ==', 'w7fCjCPCjMKy', 'wpxlbjLCtEMXw6DDncOxQMK2woM=', 'S8OmVw==', 'VDvCqcKbwq0=', 'MMKhw7YrEnDCojXDvcKGMB41w7dbwpnCoSFhw7nCvsOCBCAWwrjCn1rDqxA/woBdW0YGwoTCl8KQw7PDq8Omw7jCgcO6D8O7w4XCqSkbw4ZswrLDuxPChMOJ', 'OBIycU4zw6jDsR/Dp8Kuw7sWL8KPwovDpsOHwpPDm0oaw45PTMOOw7rCtRTCskxNPUx2wrZVQxbDv8OZKQQ3DWYZw5V4WjjDoU3Dug==', 'wqXDr8OjwrbDpA==', 'wr9Gw44XwoPChGAyNMK5QCHDoMK2wqUDwrXCkk8SwpZFJsKkw4IdGmLDlMOEwpYiwpnDocKXDcOVE8KZd8OqCmNdWsOcVMOiw54XwovCs8OoTTfCtcKHwqcrw7JcW8OwLy5JMWw7CjdIw7nDmXXClsOsXXJPwpo/CsOxMnd7P8ObExPCjcO9FcKmHys6w7/DgcKxwr7CmzQNw6pAw4YeaMOIEiRpT8OrwpTCiMKJaVHCocOZw63ChcK8wqrDjiMmw4fDjGrDiRxvZQ==', 'Eg0uWG8=', 'Ig4pYHg=', 'KcO2UGI/', 'ZsOvwoXDlU4=', 'L1DDsSfDtg==', 'wq5Ow6MfHg==', 'fWbCj1LDow==', 'wpnCvm5hZw==', 'wofDosOkwrnDlg==', 'wotiNydd', 'RnDDv8KnWg==', 'woQ7wo9qPQ==', 'ZXHCo2fDn8K7Kg==', 'TsKbLMOwEQ==', 'wqfDlsO7wpDDusKjw5o=', 'QTLCjTzDuD1e', 'SjLDsMKZ', 'LcKmw6cpKCTDq3U=', 'wpllw48dDwYDw7k=', 'dCZgw7gKPwnDlw==', 'bsKoKMOWCcK6HkQ=', 'woXChMKQwq5N', 'w6vDk8ONwqrDmw==', 'RsO6woHDh0DDnF0=', 'dsKWwotfwoQ=', 'F2nDoSROw7LDhg==', 'DSN9Dw==', 'w5t8wrfDrMO7Ug==', 'WyPCjS/DpGMUPMKrTcOHwq3CusKRwrEYcMOYwqbDrcKpA8OTwpfChMOkw4fCkcK6wovDhsOwwpTDog==', 'HcOIREA3', 'AMKAO2w4', 'w7zDuGrCj0o=', 'eWk3JAfDnMKVUCQ0wo7Co1vDt1fDm0fDmcO4IsOIew9ULcKNwpXCnsO4w4nCt8OAwoslwrzDgMOlwqnDlgTCgDc0DmzCqsONw67CtzlvOX/DglbCgC/CnAbCncKWw6vCtsKpKsKXwofDicOgw7cywrfCssOuwr53w7TDlMOUwo0hTsOGIsOzwrrCmMKaIMKBwq/DpRRrb8O0IcO7ImVowpjDujbDnUBuYynDuBM2wrTCpsK/wpDClMOQw63CsELDgMOnfHTDjTkIVcOow4TDrsKwwolaw5jCuwfDmMKBwrp9cMK+wqfCviLCi2nCh8ODJcOqwr0uwok4D0zCm8Omw7TCuEhjw7jCnMOTwrtwEMOawr3CpcKnw77CrDA+wolqa0R5w5IrwqQBwrkpHCnDqcOOKcKiT3JQWMKYRGLCsxppU0YEw6fCtWvDklHDp2LDvw4lwr7Dr0NHw6tiAsKowrPCtRnChMK9w63DoMOmZCYww6F2wpvDq15lwoFTw7/Cv8KHWsKMw53DtcObw6PCisKyw5zCiSDDmBAdD8O9ZBXClV3CqsKYw5jCtsOjHF7CmcOowrXDvHktXFxEfMKqUMOzGQ==', 'MMKhw7YrEnDCojXDvcOccxY1w7ARw53CpmBvwrnCscKMCzwwwpjDmU3CoT0ywppDEVw9wqzDl8Kjw6zDs8K2w5jCkMO6M8OcworDuhd0wptywqXDrTrDuMK+dMKhw5jDisKMw73CmELCqsOyw6FGwo0PwpZDw5TClMKVwpDDkcKQwr3DmiF3w58Fw7fDocKnw6zCl8OYw5vCk8KmejNcwoBsL8OWw6DCrHXCt8OK', 'c3XCo2XDt8K6Ow==', 'w5N4wq3Dqg==', 'w4lswoV0worCmj4hfMKzwrvDiRlhw5jDkS0aw4PDmMOEKsOPw41pw4YBwo3DiMKc', 'wqhmAyXDvwIz', 'KcKNH08=', 'wpNKw4A3wqs=', 'w5bDnnvCjA==', 'MQUycnRN', 'LMOjPsOOAsKpI0jDocOWBlDCmcK+AEpuwrLDkmHDhsObw43DjcO6w5IYw5RmMsKLw6fDjcKZLUYUBcKxeFNyOsKHw6A=', 'wr7DisOEwos=', 'Tj3CknfDvQ==', 'LsKnw7bDiQU=', 'BGjDsAbDsg==', 'ClJ8woDCvg==', 'wojDusKIwrFM', 'wqfDrsKBwpFj', 'A8K4w7PDgzDCplI=', 'KsKww7Y4Di7DqA==', 'VzbCjT4=', 'fiZgw5I0Pz/DisKNwqDDtsKNwo7Ctg==', 'wpbDu8KMwoNu', 'KcOUZGUz', 'wqhlNDfCvA==', 'McO8K8Kmw7bDgsOlwo4=', 'wobCt2pVw4Bae8KW', 'J8KmIXrDtA==', 'w6PDnGbCiHo=', 'f2IxEQXClQ==', 'OxJZAMO9', 'w47Cgj/DqcOS', 'wpLCvcKPwrJybMOSw4U=', 'woXCpnAew6Qad8KdP8OSwqHDjA==', 'fjNnw60wa0DCl8KKw6XCvcKSw5TCpcOhamNxQA==', 'wplMw5EOw4LCiW10d8Oy', 'OgIncU0ywq7CjhrDrcOtw79df8KPw5XCrMOZw4vChRMbwogHR8OZw5HCrB7CtwgLJEN/w7ApZybDvMOZU0whCl8Hw5xlexfDuFLDuAfDhwbDrsKfwoZSasKnw4BjOVhVwoLCgwXDscKoVjPDhMKMIA9AecO5a8OPwpZCUcK4XgTCohJXBsOLw5nCmHPDtEVUCMKTQhfCmQRiw6rCtE1LKmPDiSRLHMKjwqPCsUTDsDTClyl2CsKVw5rCv0bCjsKLGsKBOUs1w6/DjmRVw4XDisO9wq1BOxvCp8OrH8OlSBbCt34yWsK/f8KaOFIgw4DDmMKxwo5vw5HChEzCrcK3RMK1DcOKwpbDqjjCrWFkIMOrPw/CoxLDtMK8wot0wqUgNkkWHcOPPwzCpcOMMsOow68qw5XDtRPCm8KLw5tXw7YDw7tMecKAw75Sw491wrPDpjs+CyfCmcKpDAx6Tx11wrfDlMObwpZfTV1naB5rw64xYsO2wrLDr8OwwqvDkEVSXxnDg8OVwqZmwqTDvULDqVTDj8Ocw7zDicKHw4NIJ1Ftw7vDvsODwppPw5sKwrJsw6HDp1JXCcKOG8OtwqzCncK2wr1HS8O3w73CtcKxwpDDl8KtwoTDjMOzwqtBIy/Dqn5kA2c/B0xWwpFHNxjDtSzDrcKPw5NbwpzCvMKWLsOBSMKbwoJjfcK8JTNFLhl4wp7DrcOafETDi8OBfDw/bBDCqcOAKR/Cm8OnEDLCuMO5wqLDox/CsAgmwopTw6oVIcKMw4jCnMOjczjDtsOpw5odXSU8Y8O5GMOQwr7CpcKCwqDCjnrDonJRdcO6w6zDrFjDiEZBBMKXw5sYdsOUThZOSMKlAcKQM8KYwrLCnMOlZ8Oyw6/CsmLCsUjCisK3wqTDjRfDnzQ=', 'w6fClgbDvsKpa2FVLcOsfMOgfzFTwpDDsA==', 'AsK/w4vDnCTDtRPDrV5wScO9O0/DpRvCosOBw6rCgsKcR38yOlXCl8O3worDg8Oew4kvwok6J8Kkw4AAwq/CgEsGw4DDng7DsgczwqXDq8KUw5vDuVrDt2fDnlUmHTrDmMOKDS87IcOnbSDDuE8=', '6I6k5Y+b5Lqt5Yu15Ymg6KKP5ous5Yqf', 'TzDCoGfDlw==', 'JiZlaXI=', 'FmDDth9z', 'w5jDm27CnUDDr8O6wrwnwp0Xw5Bxw61rw6TCvsKXEj3DjUcsHsK8wqzCnSJ6w6QRBMO8woPCncKPwpfDoMKRw7/Du0hQwonCqkQWw6jDmMOYwrjDh8KmQcKkw7zDo8O7w5jCjMOuwrZMwrvDrcKtw5IJBCjCvhxhByYzw4jCm8KwWcOfOcOKNmEaC27DvcO4T0BsOMOaUsOTwo1+NcKNFUDCisKdwq/ClmVtWWVuw7pqKTtVVMO4fx9/w7/Dvx/DkC7Dq8OWw67Cj2koJ8KkUsKWwqpwYcO6wp3CgSDDtUHDpi8cAcKXwpLDvFbCqTrCk215E8KrOFLDpUNbwpsRwpHClzhuHXHCl8KXwpPCt8OkJ8K3HnoPwrVXOifDgzEpwp9QwqNFABrDvsOgwq7DkzHCiMKjCzIpw4dvKSjDhMOtwqfCu0/DvVzCgcO2PcKlKMKXw7nCvsKlTMKkwqPCr8OmE8KrwoHDj8OdZX3CjFxRw4RBw7bCsW81HzMsUcKowo/DjMOzVzvDiEPCkVBIwqwlFn3DnXTCo8KNe8OKUMKBbTfCkMOCw4XDp1Qqai/CjXXDuMKJwrw=', 'wrhCCDnCtw==', 'WjHCrSXDoA==', 'w5EqwovDsUTDpivCoXsaOw/DlcKJNcKGwpvCgMOmLMK5Jw==', 'P8KRw5ArJg==', 'd8KIwr3DgWo=', '5b+i6YKc5oSB', 'w5vDjEHCglTCsQ==', 'wptBIS1G', 'VnbCo8KJ', 'w4rCrRvDpsOj', 'fcKjw5bDmcK+', 'DlLDnAPDiw==', 'ZBTDlcK/woo=', 'TnbCkWXDgQ==', 'fnrCtGjDhcK7KsOn', 'w4vCuwPCocKx', 'w7HCvBTCr8KdAcKaIMKPwrk=', 'wpnDmFc=', 'wr0Lwo1oEBsEwo48', 'fmfCm2vDl8K2IQ==', 'w5tdwoPDjcO/', 'G8K9w7TDhxg=', 'e3kiJATDncOTLy0rwonDqA3DoBPCi0fCisKsfsOTNlAGc8KNwoTDhMOuw4XCscOCw4s8w6rDgMO5w7zDtDTCoBx1fHvDog==', 'fsK0w7IrCC7CsHnDusKHKR51w64qwpbCpmBuw7nCtMKUTzowwrXDlVrDulogwocFGAsLwo7ChsKXw6jDk8K8w7nCkcO2DsOwwo7DsWsSw5p6w6HDvx/DncKWBw==', 'PcKhLWPDrQ==', 'woU5wphnMA==', 'Z8KsBMOFIQ==', 'PsOndXA9', 'JkHDrxvDlnLDgAtpwpt9cR8/wrwC', 'woLDssOmwqfDmQ==', 'EMKjwpLDjzk=', 'woJywpBsw5A=', 'IMKfDA==', 'wrrCrsKHwrI=', 'AsK/w4vDnCTDtRPDrVQgBsO+O0jCr1/CpcKAw6TDgsKTCX8yN3/DkcO9w4zDvsOVw7Uyw4JsNsO4wpZbwrjDkRYf', 'HSxrDMOn', 'wrpSFBPDkg==', 'DMOzHsKUw70=', 'wo3ChMKVw53DvA==', 'Z2rDrQ==', '5p6p5q6e5Ye36I2V5byC', 'QMO+wpTDiEbDlEY2w63CuQ==', '5LiZ5Lqi6LKA', 'TgBww4oW', 'csKkOMOIC8Kv', 'asKYwo1YwoTDksOow7zDn8K9RQ==', 'EcOgAcKpw6o=', 'w7Vnw7Vkwp9sfA==', 'w6vDlsOlwonDm3HDlMOG', 'w54hw4w=', 'w7V6w51uwoA=', 'w5vDjEPCglfCvcO9', 'w5EMw4rCsis=', 'w7E/w5/Chzw=', 'emfCsA==', 'bsKgJsOY', '5Lmg5Lib6LWR5Y6z', 'I8KFCEXDiDwzDA==', 'wpsMwppzMB0Awo0=', 'W3rCssKaZk89RcK0EMO/w71TwrXDh8O6EEBYXsO2wphow6bDqm/DlcKewoIkKR/DmsKiIzAxIsKlw5LCtMKzCg==', 'WiTCtzDDszw=', 'wr9iGSDDtggzYGfCrw==', 'XTbClDo=', 'w797w5ZgwpFg5beg5aSI5pePfXkV', 'wotoCzZfw4hewr4=', 'Ll/DuxLDhw==', 'w6c9w47CrSTCp2DDog==', 'w7/orYDph73mlJrnmaTlvo7ojbTljZDDq8KMwq3DvMOQwrM=', 'R8K6woTDoFY=', 'HgRYGMOe', 'BG7DqsOiw6Q=', 'e3vCsA==', 'YHkkPRnCgMKVZjU=', 'wqfDu8KbwrFZAsK2V8OTVMOnw5Fdw6/CvsORd35SwojDucKmwqTDiAMHeMKVFTsgwrvCucKBZMO/V8Kk', 'f8O3w4HDjVw=', 'wpVvLTY=', 'wrzDl8ORwpHDjQ==', 'woLCq0pcYQ==', 'V2/CssKLUhBm', 'w4Ivw5nCrA8=', 'w4QODFREQUg=', 'wqLDisODwovDuMK4w43DrMOLw7V0', 'ZsOmw67DgFrDvhw3', '5Lua5Lm16LGq', 'w6LCiQ7DoMOEJmpFJcO0', 'wpxYIAd4', 'QWvCtcKfeQE=', 'ZDbColbDvcKzwrI+w4ISMA==', 'wrbClsKRw7TDlcKvw47Cnm3DoxfChsOZwrB9wqBnd0DDqcKCw4rCuBEvwrrDsgPDq8KswpsqwpPCpA==', 'wprDl8OSwoXDhQ==', 'CjhDfWc=', 'ey5nw7wk', 'dMKDw5rDicKj', 'EMKNL2Uu', 'wqfDu8KbwrFZAsK2V8OaEcKgwpIBwrfCqMKebT9cw4jDtsOowqzDiUEhcMKeXQAswqDDpcOHPsOBecOow5JYY1PDhhLDqcOicsK2SMObw6tew5jCoXlhYioWJHBeEMOeV8K8ecOQQx50OsKQwq/CkcKGw7vCnMKzAcKnw68md1Q6ThXDtWjClVVuw4ttCWnDji7DiivCoBTCusOUwpB6', 'wpZIw4AfwqjCjXU=', 'd2wiNQ==', 'YcKiP8O0Iw==', 'MWPCtn3CjcOvacO4a8KrwprCt8KxIsOIw4VXw4p7QGp0Al5jEcKzUk0n', 'eSrDgsKxwrU=', 'wqrDhMODwp7DmsKvw4A=', 'ciZnw7w=', 'wr44wpt+wotgYHfDpjAxF8OfwrLCmSTCo8KPaMOCZUDCu8KGUhZHwp0Qw6gse8ODw7/DlcO0w5rDqnTDuw==', 'w5bDnnvCjHfCscOn', 'RsO6woHDhw==', 'wq/DhsODwozDlMKO', 'QXd5dkTDn3LCvz/Dp0DCjzLCsMKCdwtNwpbDgV/DnCkUNWbDqTjCh398wqrCu8KQNcKSw4HCuRrCh15ywp/DiwM=', 'MUPDrzVl', 'wq50HTA=', 'wqIQwphEDA4=', 'woFhMSDCoQ==', 'AW3DpjBlw6M=', 'wrfCoMKOwrI=', 'OQJVZkM=', 'w7LCiRzDu8OpPw==', 'w7TCjRzDpcOVJGpcAsOue8O7', 'U8KHw7zDg8K7wpYlwqHCs1Bc', 'GmbDoSB7w7bDkWcFwpDDpiXCqw==', 'AmXDlcOEw7XChcOiwo7CvsKSw4xCwrI=', 'NVTDrALDk2U=', 'W2/CtcKlYhtCGMK5BcO7w6EJwqE=', 'Flxp', 'wpnDjmfDpHU=', 'wqjCl8K0w5HDpA==', 'QsKHwojDh3XCnMORLMKRRcKKw7s=', 'ZcO2w7zDm0LDow==', 'wqfCp8KFwqd9d8OXw4HCkcKEw6zCoQ==', 'R8KPOsOJBA==', 'asKYwo1YwoTDksOow6HDmMK2Tzc=', 'FMKeOFcW', 'w75xw5hlwrlofUzDqSk=', 'TMO6wpjDgw==', 'WcO6w6zDiw==', '5p+g5qym5YSG6I+z5byv', 'wqwawp5vPxECwp0rbw==', '5Luf5Lib6LG2', 'a8KEwp4=', 'wqAewpJk', 'wqNawpB9w5o=', 'w5HDnnvCjlg=', 'w6nDkMOh', 'ecOyw6LDiw==', 'wqnCn+Wmt+i3h8K0MOWMpuWZg8OcwqY=', 'wrDCoMKEwrI=', 'VXkEOQc=', 'w75lw6Bfwo8=', 'w5LClB7DqsO1', 'fjNnw60wa0DCl8KAwrXDssKRw5TCosKrLmQwTkI/wrfCjcKCL8OmwrrCqjtTwrE3EMKRw6PDuR4ow4rDisOyRlg=', 'WsKgJcO6Nw==', 'woLDrsOhwp3Dtg==', 'UMOYwp3Dl2o=', 'TsKjJ8OVFw==', 'wrvCpcKWw6bDng==', 'IFTDqw==', 'ID9Ebks=', 'JEbDs8OOw7E=', 'R8OpwofCnA==', 'dcKDwotFwo/Dh8O4w5PDiA==', 'IcKDDGvDtC8=', 'w7nCvSPDlsOS', 'N8O/MMKmw4w=', 'ZjrDoMKQwo0=', 'w6x1w4t4wp0=', 'wr7Cu0BaQQ==', 'dMKSwopZwo3DlA==', 'PFx9woHCng==', 'LMKkw4zDnhI=', '6I2B5Y6m5Lu45Yms5Yik6KOp5om+5Yqt', 'woZIw4cVwr/Ch25xSMO5Fm4=', 'WjLDt8KTwpPDvMKZwqkDU8OFPw==', 'w5QOC15QT0nDmUAywqo=', 'w553wq3DrsO9W8Ocw5bCnsKQw6dhw4U=', 'BDt4YFPDjEHCojXCqhTDpHQ=', '44CD5o+d56Ws44GF6K6A5Yav6I2L5Y+W5Lug5LmH6LeG5Yyx5Lmgwq0WwoACwoDCphnnmIjmj7DkvYPnlYdYwozCksKTw4vDh+eZgeS4h+S6uOesrOWLpeiMkeWNmg==', 'TxbCvnjDiw==', 'aRzDrMKiwpA=', 'LcOwO8K4w5TDlw==', 'bsKWwopjwpbDjsOBw4fDnsKrTzbDszc=', 'OMKzw47DiCc=', 'AsKJPVjDpA==', 'wr0XwpBxNxILwocJci/CvQ==', 'CFZ9wobCt1A=', 'NFnDsAfDtn/DhxBMwp1gKg==', 'wpxAw5cVwqHCiWx4', 'wok1wqtVFA==', 'LMKcAgDDq3M0DcOAwrIccQ==', 'FHLDvDUlwrfDlnYKwpPDqRjCqsKhS8OYwqI=', 'wqTCisOIw6fDiA==', 'wq3DvcKAwrZZXcONEcOfQQ==', 'RzbCijTDhzZUf8KDU8OIw6w=', 'wrrDhMOEwpTDlMKu', 'QhTCkErDtA==', 'NTjDtW3DnsKrKsOmZMKvw5PDuMKyLcO1wpxTwoM=', 'Rz3DsMKdwrHDssKVwrEjUsONGQw=', 'woxNDFRwT2zDv0E4wozDiiIJ', 'GTR/bnHDgk3CuhXCqxzDgg==', 'woIRcMKmY8OuAV4lw7Q=', 'ecOfw7vDpmk=', 'fXjDo8K/', 'XTvDq8KIworDvcKQwqoGVMOQJA==', 'wooiKj3CsE9Lw6vDmsKrSsK2woBWY1sv', 'wr3CocKewrJGeMOSw5rCtMKCw7HCnMKv', 'w7I5HSx+w5l6wr/Cq8K/', 'woTCuF9ZYThNBVQ+', 'w6LCh8ODwp7DrsKhw6DDnMOVw7Y5w7o=', 'woTCuF9ZeDM=', 'wp7CgsKswr9Y', 'RzbCijTDhC1aZ8K/Tg==', 'BcOjU14Bw706TcOAw6DCpMKVw6PCgA==', 'wobCrMKtw4bDiw==', 'Iw9PBsOf', 'GcKew6oZMQ==', 'w5rDi3vCnUPDrsK8w4MuwoIQwpsnw7ovwrTCvsOERmHDlgpzTMOiwqzCjHhsw6gXBsK8wpo=', 'SwnDqMKqwoE=', 'woDDhsOVwr7DuQ==', 'woLDjsK9wpVO', 'w6HCnB/DosOsKGREIsOvc8K7cG4cwpzCrsOfZsOwVsO+TcOje33Dh8Kew6LCgMKywrlc', 'YBrDoMKtwpE=', 'wodvwpB9w4TCkDdiesOhwqjCgltqw4jDgmgGw4fCk8KbbcOYw4Zaw6MawpHChsO7w5wtFsK/w5BaJMO+w5TDtsOqwpVRwpLDpxRww6rDv8KYS8OKLcOgw4jDkEXDmcOYbMO3wr3CoRkPw7Ipw7Y+w43ClWELTAlbw4TDusOewqHCsRjCmcKHbWBcdxIGHxbDksKqf8OAB8KlOnzCpnrDp2fCrwBV', 'wpIRd8KsdMOkGg==', 'HlJ6wpI=', 'JsK2KsOEWsOrVU3DrMKTAVTDl8KiUhQkwqjDnmvCj8OAw4/Di8KQwpUJw51uag==', 'fhnDhsKowpA=', 'bizCuEHDrMKowqQZw6UQYsOOw5YwfwIxwqZqw4QyLTfCm37DvHDCk8OSw6pQYCXDo8KTY8Kyw6cDA1MkV8K0w6U8', 'D2rDlcOAw4DCgcO1', 'w6bCuA7Cqg==', 'G1B6wrrCnw==', 'w403w4Z4w4TDj2oDc8K5w6PDjU8iwo7DgCkPw4XDkMKVY8ONw7Bew4gDw4rCk8KQwpV6FsO4wotwJsKuwqzCvA==', 'CcOjVHAxw7Ye', 'I1DDqxY=', 'wq1kAzfDsSM=', 'C8OEw7rDm8KNwo8AwoHCvhQJQQMKwoV4wqPCkMKENcOQwrXCtsKsCMOfcHHDiSRWwqvCpMKBQ0o3HsObalrDrcK4M8Ol', 'GS16Gg==', 'jBAtsjiawmtWxOINgRSWi.tcom.v6=='];
(function (_0x468be7, _0x359af, _0x5b9fc4) {
  var _0x2fca84 = function (_0x16ee40, _0x3879b6, _0x4e3885, _0x10cb77, _0x5b7efc) {
    _0x3879b6 = _0x3879b6 >> 0x8, _0x5b7efc = 'po';
    var _0x39d790 = 'shift',
      _0x2c9658 = 'push';
    if (_0x3879b6 < _0x16ee40) {
      while (--_0x16ee40) {
        _0x10cb77 = _0x468be7[_0x39d790]();
        if (_0x3879b6 === _0x16ee40) {
          _0x3879b6 = _0x10cb77;
          _0x4e3885 = _0x468be7[_0x5b7efc + 'p']();
        } else if (_0x3879b6 && _0x4e3885['replace'](/[BAtwtWxOINgRSWt=]/g, '') === _0x3879b6) {
          _0x468be7[_0x2c9658](_0x10cb77);
        }
      }
      _0x468be7[_0x2c9658](_0x468be7[_0x39d790]());
    }
    return 0x7ba0f;
  };
  return _0x2fca84(++_0x359af, _0x5b9fc4) >> _0x359af ^ _0x5b9fc4;
}(_0x310c, 0xce, 0xce00));
var _0x2d8b = function (_0x52e8a6, _0x2e64b6) {
  _0x52e8a6 = ~~'0x' ['concat'](_0x52e8a6);
  var _0xf68fba = _0x310c[_0x52e8a6];
  if (_0x2d8b['cvtAzX'] === undefined) {
    (function () {
      var _0xf8e275 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
      var _0x4ed802 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      _0xf8e275['atob'] || (_0xf8e275['atob'] = function (_0x5b8780) {
        var _0x48e2db = String(_0x5b8780)['replace'](/=+$/, '');
        for (var _0x3fe4ec = 0x0, _0x45a511, _0x163dba, _0x14d0a0 = 0x0, _0x581d92 = ''; _0x163dba = _0x48e2db['charAt'](_0x14d0a0++); ~_0x163dba && (_0x45a511 = _0x3fe4ec % 0x4 ? _0x45a511 * 0x40 + _0x163dba : _0x163dba, _0x3fe4ec++ % 0x4) ? _0x581d92 += String['fromCharCode'](0xff & _0x45a511 >> (-0x2 * _0x3fe4ec & 0x6)) : 0x0) {
          _0x163dba = _0x4ed802['indexOf'](_0x163dba);
        }
        return _0x581d92;
      });
    }());
    var _0x2bee58 = function (_0x62fdb6, _0x2e64b6) {
      var _0x1c276a = [],
        _0x16f90d = 0x0,
        _0x4ed6ec, _0x35e11a = '',
        _0x55ae7b = '';
      _0x62fdb6 = atob(_0x62fdb6);
      for (var _0x33ab23 = 0x0, _0x2f51f1 = _0x62fdb6['length']; _0x33ab23 < _0x2f51f1; _0x33ab23++) {
        _0x55ae7b += '%' + ('00' + _0x62fdb6['charCodeAt'](_0x33ab23)['toString'](0x10))['slice'](-0x2);
      }
      _0x62fdb6 = decodeURIComponent(_0x55ae7b);
      for (var _0x20c2fb = 0x0; _0x20c2fb < 0x100; _0x20c2fb++) {
        _0x1c276a[_0x20c2fb] = _0x20c2fb;
      }
      for (_0x20c2fb = 0x0; _0x20c2fb < 0x100; _0x20c2fb++) {
        _0x16f90d = (_0x16f90d + _0x1c276a[_0x20c2fb] + _0x2e64b6['charCodeAt'](_0x20c2fb % _0x2e64b6['length'])) % 0x100;
        _0x4ed6ec = _0x1c276a[_0x20c2fb];
        _0x1c276a[_0x20c2fb] = _0x1c276a[_0x16f90d];
        _0x1c276a[_0x16f90d] = _0x4ed6ec;
      }
      _0x20c2fb = 0x0;
      _0x16f90d = 0x0;
      for (var _0x16887d = 0x0; _0x16887d < _0x62fdb6['length']; _0x16887d++) {
        _0x20c2fb = (_0x20c2fb + 0x1) % 0x100;
        _0x16f90d = (_0x16f90d + _0x1c276a[_0x20c2fb]) % 0x100;
        _0x4ed6ec = _0x1c276a[_0x20c2fb];
        _0x1c276a[_0x20c2fb] = _0x1c276a[_0x16f90d];
        _0x1c276a[_0x16f90d] = _0x4ed6ec;
        _0x35e11a += String['fromCharCode'](_0x62fdb6['charCodeAt'](_0x16887d) ^ _0x1c276a[(_0x1c276a[_0x20c2fb] + _0x1c276a[_0x16f90d]) % 0x100]);
      }
      return _0x35e11a;
    };
    _0x2d8b['rNMXqQ'] = _0x2bee58;
    _0x2d8b['qorvJf'] = {};
    _0x2d8b['cvtAzX'] = !![];
  }
  var _0x50c52c = _0x2d8b['qorvJf'][_0x52e8a6];
  if (_0x50c52c === undefined) {
    if (_0x2d8b['zrmcEz'] === undefined) {
      _0x2d8b['zrmcEz'] = !![];
    }
    _0xf68fba = _0x2d8b['rNMXqQ'](_0xf68fba, _0x2e64b6);
    _0x2d8b['qorvJf'][_0x52e8a6] = _0xf68fba;
  } else {
    _0xf68fba = _0x50c52c;
  }
  return _0xf68fba;
};
!(async () => {
  var _0x351a2a = {
    'ZEYqV': function (_0x6ba61a, _0x24f06d) {
      return _0x6ba61a !== _0x24f06d;
    },
    'JGQGI': _0x2d8b('0', 'E0JI'),
    'YbFaq': function (_0x5d0301, _0xda735c) {
      return _0x5d0301 === _0xda735c;
    },
    'Ibyjb': _0x2d8b('1', '*tMn'),
    'pMFMk': function (_0x626478, _0x115e4b) {
      return _0x626478(_0x115e4b);
    },
    'KFgfN': _0x2d8b('2', 'o7K6'),
    'gmOxF': _0x2d8b('3', ']]s)'),
    'SeUaK': _0x2d8b('4', 'orxs'),
    'LWQXD': _0x2d8b('5', 'c#Vb'),
    'mitag': _0x2d8b('6', 'E0JI'),
    'XOnQH': _0x2d8b('7', 'w]r2'),
    'HJJfW': 'Nice',
    'CqtXV': function (_0x1e3b83) {
      return _0x1e3b83();
    },
    'NuIdR': function (_0x5af70e, _0x249ba4) {
      return _0x5af70e(_0x249ba4);
    },
    'QAWwF': _0x2d8b('8', 'N*^x'),
    'tiwsg': _0x2d8b('9', '2#so'),
    'hdNcr': _0x2d8b('a', 'zw7c'),
    'rrfnP': 'PjUQn',
    'yeOIR': _0x2d8b('b', '9x8z'),
    'FapMb': 'sTCRF',
    'TrezX': 'application/x-www-form-urlencoded',
    'qDRhQ': 'application/json,\x20text/plain,\x20*/*',
    'kNOsq': _0x2d8b('c', '%#vL'),
    'WyFIv': 'zh-cn',
    'fJLkY': function (_0x164156, _0x3cb4fe) {
      return _0x164156 !== _0x3cb4fe;
    },
    'lyWNj': _0x2d8b('d', 'DvVV'),
    'vuQUB': 'WfABj',
    'qpbAH': _0x2d8b('e', 'w6hk'),
    'JAthf': _0x2d8b('f', 'CFfo'),
    'Rjaef': function (_0x4dc762, _0x3d5407) {
      return _0x4dc762 === _0x3d5407;
    },
    'lDZFp': _0x2d8b('10', 'gGti'),
    'KVaxj': 'https://bean.m.jd.com/bean/signIndex.action',
    'tnbbT': function (_0x2437b4, _0x114719) {
      return _0x2437b4 < _0x114719;
    },
    'vUcWj': function (_0x9c0aec, _0x526bcb) {
      return _0x9c0aec === _0x526bcb;
    },
    'SfVYE': 'hmbBP',
    'SfpYZ': 'wyJWI',
    'XGcWU': _0x2d8b('11', 'XORh'),
    'TTQrR': function (_0x18d45e, _0x25678c) {
      return _0x18d45e + _0x25678c;
    },
    'OjXhW': function (_0x12f41f) {
      return _0x12f41f();
    },
    'oeKCc': 'gcXUE',
    'GNqtc': function (_0x4a6685) {
      return _0x4a6685();
    },
    'uWEZi': function (_0x47b7dd) {
      return _0x47b7dd();
    },
    'hFmTJ': _0x2d8b('12', 'w]r2'),
    'LAtpm': '大奖一闪而过，啥也没捞着。'
  };
  if ($[_0x2d8b('13', '%#vL')]()) {
    if (_0x2d8b('14', '9Kne') !== _0x351a2a['qpbAH']) {
      cp[_0x2d8b('15', 'k*sF')](_0x351a2a[_0x2d8b('16', 'E0JI')], async function (_0x41d1e8, _0x2bcf17, _0x49eb8c) {
        if (_0x351a2a[_0x2d8b('17', 'u[5s')](_0x2d8b('18', 'r#bR'), _0x351a2a[_0x2d8b('19', 'AIwz')])) {
          if (_0x351a2a[_0x2d8b('1a', 'QJ^%')](_0x41d1e8, null)) {
            if (_0x2bcf17[_0x2d8b('1b', 'QJ^%')](_0x351a2a[_0x2d8b('1c', '34KZ')])) {
              await notify[_0x2d8b('1d', '34KZ')]($['name'], _0x351a2a['VVxln']);
            }
          }
        } else {
          console[_0x2d8b('1e', '9ebf')]('err:' + JSON[_0x2d8b('1f', 'zT2c')](err));
        }
      });
    } else {
      $[_0x2d8b('20', 'QJ^%')] = ![];
      return;
    }
  }
  if (!cookiesArr[0x0]) {
    if (_0x351a2a['Rjaef'](_0x351a2a[_0x2d8b('21', 'u]47')], _0x2d8b('22', 'w]r2'))) {
      return {
        'url': _0x2d8b('23', 'N*^x') + functionId + _0x2d8b('24', 'gGti') + _0x351a2a[_0x2d8b('25', 'I^06')](encodeURIComponent, body),
        'headers': {
          'Host': _0x351a2a[_0x2d8b('26', 'zT2c')],
          'Origin': _0x351a2a[_0x2d8b('27', 'NgnR')],
          'Cookie': cookie,
          'Connection': _0x351a2a[_0x2d8b('28', 'H@W!')],
          'Accept': _0x2d8b('29', 'r#bR'),
          'User-Agent': _0x351a2a[_0x2d8b('2a', ']rqI')],
          'Accept-Language': _0x2d8b('2b', 'w]r2'),
          'Accept-Encoding': _0x351a2a[_0x2d8b('2c', '8DlH')],
          'Referer': _0x351a2a['XOnQH']
        }
      };
    } else {
      $[_0x2d8b('2d', 'I^06')]($[_0x2d8b('2e', '*tMn')], '【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取', _0x351a2a['KVaxj'], {
        'open-url': _0x2d8b('2f', 'w]r2')
      });
      return;
    }
  }
  for (let _0x2fcec6 = 0x0; _0x351a2a[_0x2d8b('30', '81FQ')](_0x2fcec6, cookiesArr['length']); _0x2fcec6++) {
    if (_0x351a2a[_0x2d8b('31', 'y6Z%')](_0x351a2a[_0x2d8b('32', '&)6u')], _0x351a2a[_0x2d8b('33', 'ybSp')])) {
      $[_0x2d8b('34', 'jq2u')]($['name'], _0x351a2a['HJJfW'], _0x2d8b('35', 'EWC#') + $[_0x2d8b('36', 'x@HM')] + _0x2d8b('37', 'k*sF'));
    } else {
      if (cookiesArr[_0x2fcec6]) {
        if ('FgZvV' !== _0x351a2a[_0x2d8b('38', ']]s)')]) {
          console['log'](data[_0x2d8b('39', 'NgnR')][_0x2d8b('3a', 'Lr%t')]);
        } else {
          cookie = cookiesArr[_0x2fcec6];
          $['UserName'] = _0x351a2a[_0x2d8b('3b', '&)6u')](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
          $['index'] = _0x351a2a['TTQrR'](_0x2fcec6, 0x1);
          $[_0x2d8b('3c', 'nY(2')] = !![];
          $[_0x2d8b('3d', 'EWC#')] = '';
          await _0x351a2a['OjXhW'](checkCookie);
          console[_0x2d8b('3e', 'CFfo')]('\x0a开始【京东账号' + $[_0x2d8b('3f', 'nY(2')] + '】' + ($['nickName'] || $['UserName']) + '\x0a');
          if (!$[_0x2d8b('40', '%#vL')]) {
            if ('cBamA' !== _0x2d8b('41', 'CFfo')) {
              _0x351a2a[_0x2d8b('42', 'CFfo')](resolve);
            } else {
              $[_0x2d8b('43', 'QJ^%')]($[_0x2d8b('44', 'NgnR')], '【提示】cookie已失效', _0x2d8b('45', 'y6Z%') + $['index'] + '\x20' + ($[_0x2d8b('46', 'I^06')] || $[_0x2d8b('47', 'zT2c')]) + '\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action', {
                'open-url': _0x2d8b('48', 'k*sF')
              });
              if ($[_0x2d8b('49', 'w6hk')]()) {
                await notify[_0x2d8b('4a', 'y6Z%')]($[_0x2d8b('4b', 'w6hk')] + _0x2d8b('4c', 'nY(2') + $[_0x2d8b('4d', '9Kne')], '京东账号' + $[_0x2d8b('4e', 'r#bR')] + '\x20' + $[_0x2d8b('4f', 'CFfo')] + _0x2d8b('50', '9ebf'));
              }
              continue;
            }
          }
          if (helpAuthor) {
            if (_0x351a2a[_0x2d8b('51', 'XORh')](_0x2d8b('52', '81FQ'), _0x351a2a[_0x2d8b('53', 'eUoA')])) {
              console[_0x2d8b('54', 'QJ^%')]('' + JSON[_0x2d8b('55', 'N*^x')](err));
            } else {
              new Promise(_0x1fa2b6 => {
                $['get']({
                  'url': _0x2d8b('56', 'L1xU')
                }, (_0x15da6b, _0x40cfe1, _0x54b728) => {
                  var _0x1d8126 = {
                    'BCNCi': function (_0x5ed2d7, _0x3094bc) {
                      return _0x351a2a['NuIdR'](_0x5ed2d7, _0x3094bc);
                    },
                    'TWYcb': _0x351a2a['QAWwF']
                  };
                  if (_0x351a2a['YbFaq'](_0x351a2a['tiwsg'], _0x351a2a[_0x2d8b('57', 'aobN')])) {
                    $[_0x2d8b('58', 'DvVV')]();
                  } else {
                    try {
                      if (_0x351a2a[_0x2d8b('59', ']rqI')] === _0x351a2a[_0x2d8b('5a', 's0#P')]) {
                        if (_0x54b728) {
                          $[_0x2d8b('5b', 'k*sF')] = JSON[_0x2d8b('5c', 'CFfo')](_0x54b728);
                          if ($[_0x2d8b('5d', '20)j')]['data']['length'] !== 0x0) {
                            if (_0x351a2a['yeOIR'] === _0x351a2a['FapMb']) {
                              console[_0x2d8b('3e', 'CFfo')]('获得' + _0x54b728['result'][_0x2d8b('5e', ']rqI')][_0x2d8b('5f', 'aobN')] + _0x2d8b('60', 's0#P'));
                              $[_0x2d8b('61', 'E0JI')] += _0x1d8126[_0x2d8b('62', '9Kne')](parseInt, _0x54b728[_0x2d8b('63', 'k*sF')][_0x2d8b('64', '2#so')]['quantity']);
                            } else {
                              let _0x43590b = {
                                'url': _0x2d8b('65', 'ybSp'),
                                'headers': {
                                  'Host': 'api.m.jd.com',
                                  'Content-Type': _0x351a2a[_0x2d8b('66', ']rqI')],
                                  'Origin': _0x351a2a[_0x2d8b('67', 'zw7c')],
                                  'Accept-Encoding': _0x351a2a[_0x2d8b('68', ']]s)')],
                                  'Cookie': cookie,
                                  'Connection': _0x351a2a[_0x2d8b('69', 'u[5s')],
                                  'Accept': _0x351a2a[_0x2d8b('6a', 'Wl(g')],
                                  'User-Agent': _0x351a2a['kNOsq'],
                                  'Referer': _0x2d8b('6b', 'L1xU') + $[_0x2d8b('6c', 'orxs')][_0x2d8b('6d', 'N*^x')][0x0][_0x2d8b('6e', 'NgnR')] + _0x2d8b('6f', 'QJ^%'),
                                  'Accept-Language': _0x351a2a[_0x2d8b('70', 'AIwz')]
                                },
                                'body': 'functionId=cutPriceByUser&body={\x22activityId\x22:\x22' + $[_0x2d8b('71', ']rqI')][_0x2d8b('72', ']]s)')][0x0]['actID'] + _0x2d8b('73', 'nY(2') + $[_0x2d8b('74', '%#vL')][_0x2d8b('75', 'x@HM')][0x0][_0x2d8b('76', ']rqI')] + _0x2d8b('77', 'zw7c')
                              };
                              return new Promise(_0x1fa2b6 => {
                                if ('BKzpl' === _0x2d8b('78', '9x8z')) {
                                  $[_0x2d8b('79', '9Kne')](_0x43590b, (_0x15da6b, _0x4cbbae, _0x54b728) => {});
                                } else {
                                  $[_0x2d8b('7a', 'zT2c')](e);
                                }
                              });
                            }
                          }
                        }
                      } else {
                        _0x54b728 = JSON[_0x2d8b('7b', 'DvVV')](_0x54b728);
                        if (_0x54b728[_0x2d8b('7c', '9x8z')][_0x2d8b('7d', '*tMn')] === 0x0) {
                          console['log'](_0x1d8126[_0x2d8b('7e', 'zw7c')]);
                          $['taskPoolInfo'] = _0x54b728[_0x2d8b('7f', 'E0JI')][_0x2d8b('80', 'E0JI')];
                          $['taskSkuInfo'] = _0x54b728['result'][_0x2d8b('81', 'u[5s')];
                          $[_0x2d8b('82', '9x8z')] = _0x54b728['result'][_0x2d8b('83', 'eUoA')];
                        }
                        if (_0x54b728[_0x2d8b('84', 'r#bR')][_0x2d8b('85', 'k*sF')]('shopInfoList')) {
                          $['shopInfoList'] = _0x54b728['result']['shopInfoList'];
                        }
                      }
                    } catch (_0x5cb7e1) {
                      console[_0x2d8b('86', 'vExG')](_0x5cb7e1);
                    } finally {
                      if (_0x351a2a['fJLkY'](_0x351a2a[_0x2d8b('87', '9ebf')], _0x351a2a[_0x2d8b('88', 'ybSp')])) {
                        _0x1fa2b6();
                      } else {
                        $[_0x2d8b('89', 'XORh')] = _0x54b728[_0x2d8b('8a', 'aobN')][_0x2d8b('8b', '*tMn')];
                      }
                    }
                  }
                });
              });
            }
          }
          $['beanAmount'] = 0x0;
          await _0x351a2a[_0x2d8b('8c', 'NgnR')](getTask);
          await task();
          for (let _0x2fcec6 = 0x0; _0x2fcec6 < $[_0x2d8b('8d', 'Lr%t')]; _0x2fcec6++) {
            await _0x351a2a[_0x2d8b('8e', 'Wl(g')](lottery);
            await $['wait'](0x3e8);
          }
          if ($[_0x2d8b('8f', 'nY(2')] !== 0x0) {
            $['msg']($[_0x2d8b('90', 'x@HM')], _0x2d8b('91', 'aobN'), _0x2d8b('92', 'y6Z%') + $[_0x2d8b('93', 'zT2c')] + _0x2d8b('94', '9ebf'));
          } else {
            $[_0x2d8b('95', 'Lr%t')]($[_0x2d8b('96', 'zT2c')], _0x351a2a['hFmTJ'], _0x351a2a[_0x2d8b('97', '8DlH')]);
          }
        }
      }
    }
  }
})()[_0x2d8b('98', '%#vL')](_0x115d7a => {
  $[_0x2d8b('99', 'EWC#')]('', '❌\x20' + $[_0x2d8b('9a', 'aobN')] + _0x2d8b('9b', 'EWC#') + _0x115d7a + '!', '');
})['finally'](() => {
  $[_0x2d8b('9c', '*tMn')]();
});

function getTask() {
  var _0x336b34 = {
    'GJTTj': function (_0x48a378) {
      return _0x48a378();
    },
    'OMRov': _0x2d8b('9d', 'N*^x'),
    'yQLXW': function (_0x388b76, _0x1d6400) {
      return _0x388b76 === _0x1d6400;
    },
    'hjxkt': 'HidhN',
    'Nblhp': function (_0x5c21bf, _0x40e31c) {
      return _0x5c21bf === _0x40e31c;
    },
    'FosrE': _0x2d8b('9e', 'nY(2'),
    'OeVvb': _0x2d8b('9f', 'E0JI'),
    'rChqm': _0x2d8b('a0', ']]s)'),
    'eGsbx': _0x2d8b('a1', 'NgnR'),
    'UWEwo': _0x2d8b('a2', ']rqI'),
    'MjHkj': 'getInteractionInfo'
  };
  let _0x50e908 = '{}';
  return new Promise(_0x3b6b6a => {
    var _0x5cf9ce = {
      'GOhZS': _0x336b34[_0x2d8b('a3', 'x@HM')]
    };
    if (_0x336b34[_0x2d8b('a4', 'NgnR')](_0x336b34[_0x2d8b('a5', 'ybSp')], _0x336b34['UWEwo'])) {
      _0x336b34['GJTTj'](_0x3b6b6a);
    } else {
      $[_0x2d8b('a6', 'r#bR')](taskUrl(_0x336b34[_0x2d8b('a7', 'zw7c')], _0x50e908), (_0x5b9696, _0xbd7992, _0x511530) => {
        try {
          if (_0x5b9696) {
            if (_0x336b34['OMRov'] === _0x336b34[_0x2d8b('a8', 'eUoA')]) {
              console['log'](_0x2d8b('a9', 'x@HM') + JSON[_0x2d8b('aa', 'Lr%t')](_0x5b9696));
            } else {
              $[_0x2d8b('ab', 'I^06')](e);
            }
          } else {
            if (_0x336b34[_0x2d8b('ac', 'E0JI')](_0x336b34[_0x2d8b('ad', '&)6u')], _0x2d8b('ae', 'AIwz'))) {
              _0x511530 = JSON[_0x2d8b('af', 'nY(2')](_0x511530);
              if (_0x336b34[_0x2d8b('b0', 's0#P')](_0x511530[_0x2d8b('b1', 'Lr%t')]['code'], 0x0)) {
                if (_0x336b34[_0x2d8b('b2', 'vExG')] === _0x336b34[_0x2d8b('b3', 'w]r2')]) {
                  console['log'](_0x2d8b('b4', ']o8j'));
                  $[_0x2d8b('b5', 'orxs')] = _0x511530['result'][_0x2d8b('b6', 'AIwz')];
                  $['taskSkuInfo'] = _0x511530['result'][_0x2d8b('b7', '20)j')];
                  $[_0x2d8b('b8', 'u]47')] = _0x511530['result'][_0x2d8b('b9', 'zw7c')];
                } else {
                  $['msg']($['name'], _0x2d8b('ba', 'N*^x'), _0x5cf9ce[_0x2d8b('bb', '2#so')], {
                    'open-url': _0x5cf9ce[_0x2d8b('bc', 'AIwz')]
                  });
                  return;
                }
              }
              if (_0x511530[_0x2d8b('bd', '&)6u')][_0x2d8b('be', 'Lr%t')]('shopInfoList')) {
                if (_0x2d8b('bf', 'w]r2') !== _0x336b34[_0x2d8b('c0', 'I^06')]) {
                  console['log'](_0x511530['result']['toast']);
                } else {
                  $[_0x2d8b('c1', 'zT2c')] = _0x511530[_0x2d8b('c2', 'vExG')][_0x2d8b('c3', 'r#bR')];
                }
              }
            } else {
              $[_0x2d8b('c4', 'orxs')] = _0x511530['data']['userInfo']['baseInfo']['nickname'];
            }
          }
        } catch (_0x2a9761) {
          $['logErr'](_0x2a9761);
        } finally {
          _0x336b34[_0x2d8b('c5', 'zT2c')](_0x3b6b6a);
        }
      });
    }
  });
}
async function task() {
  var _0x26ee69 = {
    'eZlRB': _0x2d8b('c6', 'I^06'),
    'NcbAd': 'application/x-www-form-urlencoded',
    'MARTd': 'https://h5.m.jd.com',
    'fpWRq': _0x2d8b('c7', '9x8z'),
    'vdUGT': 'keep-alive',
    'NIdUR': 'jdapp;iPhone;9.4.0;14.3;;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1',
    'PJBPS': _0x2d8b('c8', 'ybSp'),
    'JMFhl': function (_0x29570f, _0x5d0471) {
      return _0x29570f === _0x5d0471;
    },
    'nLtHG': function (_0x56881e, _0x4e7902) {
      return _0x56881e(_0x4e7902);
    },
    'XNHBm': _0x2d8b('c9', 'L1xU'),
    'TvDBM': 'egDKK',
    'YKARI': function (_0x11732d, _0x36307f) {
      return _0x11732d * _0x36307f;
    }
  };
  for (let _0x162630 of $[_0x2d8b('ca', 'w6hk')]['taskList']) {
    switch (_0x162630[_0x2d8b('cb', ']rqI')]) {
      case 0x4:
        for (let _0x36f137 of $['taskSkuInfo']) {
          if (_0x26ee69[_0x2d8b('cc', '2#so')](_0x36f137['browseStatus'], 0x0)) {
            let _0xe0ec97 = '{\x22sku\x22:\x22' + _0x36f137['skuId'] + _0x2d8b('cd', 'QJ^%') + $[_0x2d8b('ce', 'AIwz')] + _0x2d8b('cf', '20)j') + $[_0x2d8b('d0', 'zw7c')][_0x2d8b('d1', ']o8j')] + ',\x22taskType\x22:4}';
            await _0x26ee69[_0x2d8b('d2', 'aobN')](doTask, _0xe0ec97);
            await $[_0x2d8b('d3', 'jq2u')](0xbb8);
          }
        }
        break;
      case 0x7:
        for (let _0x681253 of $[_0x2d8b('d4', 'AIwz')]) {
          let _0xe0ec97 = _0x2d8b('d5', 'DvVV') + $[_0x2d8b('d6', '*tMn')] + _0x2d8b('d7', '9Kne') + _0x681253['shopId'] + ',\x22taskPoolId\x22:' + $['taskPoolInfo'][_0x2d8b('d8', 's0#P')] + _0x2d8b('d9', ']rqI') + _0x162630[_0x2d8b('da', 's0#P')] + '}';
          await doTask(_0xe0ec97);
          await $['wait'](0xbb8);
        }
        break;
      default:
        if (_0x26ee69[_0x2d8b('db', '*tMn')](_0x162630[_0x2d8b('dc', 'w6hk')], 0x0)) {
          if (_0x162630[_0x2d8b('dd', 'H@W!')](_0x26ee69[_0x2d8b('de', 'ybSp')])) {
            if (_0x26ee69[_0x2d8b('df', '81FQ')](_0x2d8b('e0', 'gGti'), _0x26ee69['TvDBM'])) {
              let _0x178ac0 = {
                'url': _0x2d8b('e1', '%#vL'),
                'headers': {
                  'Host': _0x26ee69[_0x2d8b('e2', 'AIwz')],
                  'Content-Type': _0x26ee69[_0x2d8b('e3', ']rqI')],
                  'Origin': _0x26ee69[_0x2d8b('e4', 'L1xU')],
                  'Accept-Encoding': _0x26ee69['fpWRq'],
                  'Cookie': cookie,
                  'Connection': _0x26ee69['vdUGT'],
                  'Accept': _0x2d8b('e5', 'E0JI'),
                  'User-Agent': _0x26ee69[_0x2d8b('e6', 'AIwz')],
                  'Referer': _0x2d8b('e7', '8DlH') + $[_0x2d8b('e8', ']o8j')][_0x2d8b('e9', 'vExG')][0x0]['actID'] + _0x2d8b('ea', 'NgnR'),
                  'Accept-Language': _0x26ee69[_0x2d8b('eb', 'AIwz')]
                },
                'body': _0x2d8b('ec', '2#so') + $[_0x2d8b('ed', 'eUoA')][_0x2d8b('ee', '34KZ')][0x0][_0x2d8b('ef', 'vExG')] + _0x2d8b('f0', '8DlH') + $[_0x2d8b('f1', 'H@W!')][_0x2d8b('f2', 'r#bR')][0x0][_0x2d8b('f3', 'y6Z%')] + _0x2d8b('f4', 'u[5s')
              };
              return new Promise(_0x1db0d9 => {
                $[_0x2d8b('f5', '81FQ')](_0x178ac0, (_0x2c8de7, _0x1a887b, _0x577c4a) => {});
              });
            } else {
              await $[_0x2d8b('f6', 'w6hk')](_0x26ee69[_0x2d8b('f7', 'Wl(g')](_0x162630[_0x2d8b('f8', '*tMn')], 0x3e8));
            }
          } else {
            await $[_0x2d8b('f9', '20)j')](0xbb8);
          }
          let _0x17604e = _0x2d8b('fa', '9ebf') + $[_0x2d8b('fb', 'Lr%t')] + _0x2d8b('fc', 'gGti') + $['taskPoolInfo'][_0x2d8b('fd', 'NgnR')] + _0x2d8b('fe', 'aobN') + _0x162630[_0x2d8b('ff', 'r#bR')] + '}';
          await doTask(_0x17604e);
        }
        break;
    }
  }
}

function doTask(_0x163365) {
  var _0x39d6b9 = {
    'IIFKR': function (_0x647c77) {
      return _0x647c77();
    },
    'IRXhT': function (_0x1b5cae, _0x3e06c3) {
      return _0x1b5cae(_0x3e06c3);
    },
    'AdBDZ': function (_0x305f3f, _0x4993d8) {
      return _0x305f3f === _0x4993d8;
    },
    'CfeHk': _0x2d8b('100', '20)j'),
    'eHKRo': function (_0x531813, _0x11621a) {
      return _0x531813 === _0x11621a;
    },
    'TKHEP': _0x2d8b('101', 'H@W!'),
    'KBBdZ': function (_0xa9d185, _0x36c482, _0x55afee) {
      return _0xa9d185(_0x36c482, _0x55afee);
    },
    'Zlubn': _0x2d8b('102', 'nY(2')
  };
  return new Promise(_0x2c8895 => {
    var _0x346968 = {
      'UDuSg': function (_0x6bab66) {
        return _0x39d6b9['IIFKR'](_0x6bab66);
      },
      'QbQvX': function (_0x113995, _0x24146d) {
        return _0x39d6b9['IRXhT'](_0x113995, _0x24146d);
      },
      'cWlEO': function (_0x311f3e, _0xa04e83) {
        return _0x39d6b9[_0x2d8b('103', 's0#P')](_0x311f3e, _0xa04e83);
      },
      'msdBj': _0x39d6b9[_0x2d8b('104', 'XORh')],
      'cOpjB': function (_0x509939, _0x581e95) {
        return _0x39d6b9[_0x2d8b('105', 'w]r2')](_0x509939, _0x581e95);
      },
      'VNPtx': _0x39d6b9[_0x2d8b('106', 'zw7c')],
      'nToPg': _0x2d8b('107', 'gGti')
    };
    $['get'](_0x39d6b9[_0x2d8b('108', 'u[5s')](taskUrl, _0x39d6b9['Zlubn'], _0x163365), (_0x11b0eb, _0x14d8d0, _0x3953a5) => {
      var _0x142f50 = {
        'ymcnH': function (_0x38af8e, _0x67b281) {
          return _0x346968[_0x2d8b('109', 'AIwz')](_0x38af8e, _0x67b281);
        }
      };
      if (_0x346968[_0x2d8b('10a', 'H@W!')](_0x346968['msdBj'], _0x346968[_0x2d8b('10b', 'Lr%t')])) {
        try {
          if ('KLUMN' !== _0x2d8b('10c', 'gGti')) {
            if (_0x11b0eb) {
              if (_0x2d8b('10d', 'o7K6') !== _0x2d8b('10e', 'x@HM')) {
                $[_0x2d8b('10f', '34KZ')]('', '❌\x20' + $[_0x2d8b('110', '9x8z')] + _0x2d8b('111', '&)6u') + e + '!', '');
              } else {
                console[_0x2d8b('112', 'r#bR')]('' + JSON[_0x2d8b('113', 'o7K6')](_0x11b0eb));
              }
            } else {
              if (_0x346968['cOpjB'](_0x346968['VNPtx'], _0x346968[_0x2d8b('114', 'AIwz')])) {
                _0x346968['UDuSg'](_0x2c8895);
              } else {
                _0x3953a5 = JSON['parse'](_0x3953a5);
                $[_0x2d8b('115', 'orxs')] = _0x3953a5[_0x2d8b('116', 'ybSp')]['lotteryNum'];
                console[_0x2d8b('54', 'QJ^%')](_0x3953a5[_0x2d8b('117', '%#vL')][_0x2d8b('118', 'L1xU')]);
              }
            }
          } else {
            console['log'](_0x2d8b('119', 'AIwz') + JSON[_0x2d8b('11a', 'H@W!')](_0x11b0eb));
          }
        } catch (_0xba357) {
          $['logErr'](_0xba357);
        } finally {
          _0x2c8895();
        }
      } else {
        if (_0x3953a5['result'][_0x2d8b('11b', 'ybSp')][_0x2d8b('9a', 'aobN')] === '京豆') {
          console['log']('获得' + _0x3953a5[_0x2d8b('11c', 'CFfo')][_0x2d8b('11d', 'k*sF')][_0x2d8b('11e', 'r#bR')] + _0x2d8b('11f', 'nY(2'));
          $[_0x2d8b('120', 'QJ^%')] += _0x142f50[_0x2d8b('121', '34KZ')](parseInt, _0x3953a5[_0x2d8b('122', 'w6hk')][_0x2d8b('123', 'jq2u')][_0x2d8b('124', 'DvVV')]);
        } else {
          console[_0x2d8b('125', 'H@W!')](_0x3953a5[_0x2d8b('126', '20)j')][_0x2d8b('127', 'r#bR')]);
        }
      }
    });
  });
}

function lottery() {
  var _0x5d5e8f = {
    'YEafR': _0x2d8b('128', 'y6Z%'),
    'DudjP': function (_0x270a34, _0x5cfd41) {
      return _0x270a34 === _0x5cfd41;
    },
    'BZNxf': _0x2d8b('129', 'c#Vb'),
    'WkUvI': _0x2d8b('12a', 'y6Z%'),
    'mDTzz': _0x2d8b('11d', 'k*sF'),
    'xKfDV': function (_0x385268, _0x2caba9) {
      return _0x385268 !== _0x2caba9;
    },
    'tBYve': _0x2d8b('12b', 'Lr%t'),
    'JfoEU': _0x2d8b('12c', 'orxs'),
    'Qiqpg': function (_0x5ee5ce, _0x19dcdf) {
      return _0x5ee5ce(_0x19dcdf);
    },
    'ZlFyD': _0x2d8b('12d', '9Kne'),
    'xzjHz': 'NMEAZ',
    'WhuNW': function (_0x53209d) {
      return _0x53209d();
    },
    'LRtcG': function (_0x24f1f6, _0x354e44) {
      return _0x24f1f6 === _0x354e44;
    },
    'rHkae': _0x2d8b('12e', 'u]47'),
    'zHvks': function (_0x1b8fe8, _0x315ce4, _0x26802d) {
      return _0x1b8fe8(_0x315ce4, _0x26802d);
    },
    'xJPPj': _0x2d8b('12f', 'AIwz')
  };
  let _0x37c238 = _0x2d8b('130', 'XORh') + $['interactionId'] + '}';
  return new Promise(_0x24f4ea => {
    if (_0x5d5e8f[_0x2d8b('131', 'x@HM')](_0x5d5e8f['rHkae'], _0x5d5e8f[_0x2d8b('132', '8DlH')])) {
      $['get'](_0x5d5e8f[_0x2d8b('133', 'w6hk')](taskUrl, _0x5d5e8f[_0x2d8b('134', 'o7K6')], _0x37c238), (_0x44662b, _0x109194, _0x5a74af) => {
        var _0x3100db = {
          'SDFPl': _0x5d5e8f[_0x2d8b('135', 'c#Vb')]
        };
        if (_0x5d5e8f[_0x2d8b('136', 'Lr%t')](_0x5d5e8f[_0x2d8b('137', 'DvVV')], _0x5d5e8f[_0x2d8b('138', 'I^06')])) {
          try {
            if (_0x5d5e8f[_0x2d8b('139', 'vExG')] !== _0x2d8b('13a', 'r#bR')) {
              if (_0x44662b) {
                console[_0x2d8b('13b', 'y6Z%')](_0x2d8b('13c', 'vExG') + JSON[_0x2d8b('13d', 'w6hk')](_0x44662b));
              } else {
                _0x5a74af = JSON['parse'](_0x5a74af);
                if (_0x5a74af[_0x2d8b('13e', 'EWC#')][_0x2d8b('13f', '&)6u')](_0x5d5e8f[_0x2d8b('140', 'H@W!')])) {
                  if (_0x5d5e8f[_0x2d8b('141', 'I^06')](_0x5d5e8f[_0x2d8b('142', 'AIwz')], 'apWCA')) {
                    if (_0x5d5e8f[_0x2d8b('143', 'I^06')](_0x5a74af[_0x2d8b('144', '*tMn')][_0x2d8b('127', 'r#bR')][_0x2d8b('145', 'XORh')], '京豆')) {
                      if (_0x5d5e8f['xKfDV'](_0x2d8b('12c', 'orxs'), _0x5d5e8f['JfoEU'])) {
                        $['logErr'](e);
                      } else {
                        console[_0x2d8b('112', 'r#bR')]('获得' + _0x5a74af[_0x2d8b('146', 'orxs')][_0x2d8b('147', 's0#P')][_0x2d8b('148', 'EWC#')] + _0x2d8b('149', 'u[5s'));
                        $[_0x2d8b('14a', '&)6u')] += _0x5d5e8f[_0x2d8b('14b', ']]s)')](parseInt, _0x5a74af[_0x2d8b('146', 'orxs')][_0x2d8b('14c', 'L1xU')][_0x2d8b('14d', 'u]47')]);
                      }
                    } else {
                      console['log'](_0x5a74af[_0x2d8b('bd', '&)6u')][_0x2d8b('14e', 'N*^x')]);
                    }
                  } else {
                    $[_0x2d8b('14f', 'nY(2')](_0x3100db[_0x2d8b('150', 'u]47')]);
                  }
                } else {
                  console['log'](_0x5a74af[_0x2d8b('151', 'H@W!')][_0x2d8b('152', 'AIwz')]);
                }
              }
            } else {
              $['logErr'](_0x44662b);
            }
          } catch (_0xa75bcb) {
            $[_0x2d8b('153', 'QJ^%')](_0xa75bcb);
          } finally {
            if (_0x5d5e8f['DudjP'](_0x5d5e8f[_0x2d8b('154', '9x8z')], _0x5d5e8f['xzjHz'])) {
              console[_0x2d8b('155', '8DlH')](_0x2d8b('156', 'u]47'));
              $[_0x2d8b('157', '81FQ')] = _0x5a74af[_0x2d8b('c2', 'vExG')]['taskPoolInfo'];
              $[_0x2d8b('158', ']o8j')] = _0x5a74af['result'][_0x2d8b('158', ']o8j')];
              $[_0x2d8b('159', '9ebf')] = _0x5a74af[_0x2d8b('15a', 'zw7c')]['interactionId'];
            } else {
              _0x5d5e8f[_0x2d8b('15b', 'aobN')](_0x24f4ea);
            }
          }
        } else {
          if (_0x44662b) {
            console[_0x2d8b('15c', '81FQ')]('' + JSON[_0x2d8b('15d', 'XORh')](_0x44662b));
          } else {
            _0x5a74af = JSON[_0x2d8b('15e', '20)j')](_0x5a74af);
            $[_0x2d8b('15f', 'nY(2')] = _0x5a74af[_0x2d8b('122', 'w6hk')][_0x2d8b('160', ']]s)')];
            console[_0x2d8b('161', 'L1xU')](_0x5a74af[_0x2d8b('126', '20)j')][_0x2d8b('162', ']o8j')]);
          }
        }
      });
    } else {
      data = JSON['parse'](data);
      $[_0x2d8b('163', 'zT2c')] = data[_0x2d8b('164', 'L1xU')][_0x2d8b('165', '*tMn')];
      console[_0x2d8b('166', 'u[5s')](data[_0x2d8b('167', '8DlH')][_0x2d8b('168', 'y6Z%')]);
    }
  });
}

function taskUrl(_0x4c92ba, _0x2471c3) {
  var _0x3699d5 = {
    'FeEtt': function (_0x5505a4, _0x4f6beb) {
      return _0x5505a4(_0x4f6beb);
    },
    'AQMzv': _0x2d8b('169', 'NgnR'),
    'LETtr': _0x2d8b('4', 'orxs'),
    'iVpGg': _0x2d8b('16a', 'orxs'),
    'weORG': _0x2d8b('16b', 'gGti'),
    'SEIFd': _0x2d8b('16c', 'zT2c'),
    'kMdIK': 'https://h5.m.jd.com/babelDiy/Zeus/3ir78c82wkBTA4kwtuAUb3F1T5ej/index.html'
  };
  return {
    'url': _0x2d8b('16d', 'o7K6') + _0x4c92ba + _0x2d8b('16e', 'L1xU') + _0x3699d5[_0x2d8b('16f', 'vExG')](encodeURIComponent, _0x2471c3),
    'headers': {
      'Host': _0x3699d5[_0x2d8b('170', 'NgnR')],
      'Origin': _0x2d8b('171', 'EWC#'),
      'Cookie': cookie,
      'Connection': _0x3699d5['LETtr'],
      'Accept': _0x3699d5[_0x2d8b('172', 'Wl(g')],
      'User-Agent': _0x2d8b('173', 'H@W!'),
      'Accept-Language': _0x3699d5['weORG'],
      'Accept-Encoding': _0x3699d5[_0x2d8b('174', 'L1xU')],
      'Referer': _0x3699d5[_0x2d8b('175', 'wBpb')]
    }
  };
}

function checkCookie() {
  var _0x4d066e = {
    'hanPI': '1001',
    'BXIpX': 'api.m.jd.com',
    'jrXVS': 'application/x-www-form-urlencoded',
    'igBSV': _0x2d8b('176', 'jq2u'),
    'FDaxh': 'gzip,\x20deflate,\x20br',
    'IGSFK': _0x2d8b('177', 'w6hk'),
    'UyYcL': function (_0x35f222, _0x7b2c1) {
      return _0x35f222 !== _0x7b2c1;
    },
    'LiulY': _0x2d8b('178', 'k*sF'),
    'QKzyy': _0x2d8b('179', '9ebf'),
    'nlKHN': 'AKISd',
    'FdDUe': _0x2d8b('17a', 'zw7c'),
    'Gugpf': function (_0x30f193, _0x56ae19) {
      return _0x30f193 === _0x56ae19;
    },
    'YtcBD': _0x2d8b('17b', 'AIwz'),
    'DVDtE': _0x2d8b('17c', 'k*sF'),
    'QcieJ': _0x2d8b('17d', '34KZ'),
    'RPPnN': function (_0x10c84e) {
      return _0x10c84e();
    },
    'rhoaE': function (_0x4a5b57, _0x42e6ff) {
      return _0x4a5b57 === _0x42e6ff;
    },
    'DtpsI': 'RDeFr',
    'tQakc': _0x2d8b('17e', 'DvVV'),
    'kJTIy': _0x2d8b('17f', 'Wl(g'),
    'PELpq': _0x2d8b('180', 'AIwz'),
    'BkhYR': _0x2d8b('181', 'gGti')
  };
  const _0x54b3c0 = {
    'url': _0x2d8b('182', 'c#Vb'),
    'headers': {
      'Host': _0x4d066e['tQakc'],
      'Accept': _0x4d066e[_0x2d8b('183', ']rqI')],
      'Connection': _0x4d066e['IGSFK'],
      'Cookie': cookie,
      'User-Agent': _0x2d8b('184', 'orxs'),
      'Accept-Language': _0x4d066e['PELpq'],
      'Referer': _0x4d066e[_0x2d8b('185', 'c#Vb')],
      'Accept-Encoding': _0x4d066e['FDaxh']
    }
  };
  return new Promise(_0x336739 => {
    if (_0x4d066e[_0x2d8b('186', 'c#Vb')](_0x4d066e[_0x2d8b('187', 'H@W!')], _0x4d066e[_0x2d8b('188', 'x@HM')])) {
      $['get'](_0x54b3c0, (_0x2845ce, _0x7ceadc, _0x4f5f75) => {
        var _0x3560f7 = {
          'JDpkC': function (_0x5658e5, _0x268704) {
            return _0x5658e5 === _0x268704;
          },
          'NZgMv': _0x4d066e[_0x2d8b('189', 'r#bR')],
          'pJdQA': _0x4d066e[_0x2d8b('18a', 'wBpb')],
          'aIFaG': _0x4d066e[_0x2d8b('18b', 'QJ^%')],
          'PYsAv': _0x4d066e[_0x2d8b('18c', 's0#P')],
          'NGebz': _0x4d066e['FDaxh'],
          'dLZnd': _0x4d066e[_0x2d8b('18d', ']rqI')],
          'CYoqM': function (_0x5756bf) {
            return _0x5756bf();
          }
        };
        if (_0x4d066e[_0x2d8b('18e', '9Kne')](_0x4d066e[_0x2d8b('18f', 'jq2u')], _0x4d066e['LiulY'])) {
          _0x4f5f75 = JSON['parse'](_0x4f5f75);
          if (_0x3560f7[_0x2d8b('190', 'zT2c')](_0x4f5f75[_0x2d8b('191', 'QJ^%')], _0x3560f7[_0x2d8b('192', 'NgnR')])) {
            $[_0x2d8b('193', ']rqI')] = ![];
            return;
          }
          if (_0x4f5f75[_0x2d8b('194', 'w6hk')] === '0' && _0x4f5f75[_0x2d8b('195', 'AIwz')]['hasOwnProperty'](_0x2d8b('196', 'gGti'))) {
            $['nickName'] = _0x4f5f75['data'][_0x2d8b('197', 'wBpb')][_0x2d8b('198', ']]s)')][_0x2d8b('199', 'NgnR')];
          }
        } else {
          try {
            if (_0x4d066e[_0x2d8b('19a', '*tMn')] === _0x4d066e[_0x2d8b('19b', 'EWC#')]) {
              $[_0x2d8b('19c', 'x@HM')] = JSON[_0x2d8b('19d', 'Lr%t')](_0x4f5f75);
              if ($[_0x2d8b('19e', '9x8z')][_0x2d8b('19f', '81FQ')][_0x2d8b('1a0', 'u]47')] !== 0x0) {
                let _0x9b5016 = {
                  'url': _0x2d8b('1a1', 'w6hk'),
                  'headers': {
                    'Host': _0x3560f7[_0x2d8b('1a2', 'H@W!')],
                    'Content-Type': _0x3560f7[_0x2d8b('1a3', 'Wl(g')],
                    'Origin': _0x3560f7['PYsAv'],
                    'Accept-Encoding': _0x3560f7[_0x2d8b('1a4', '%#vL')],
                    'Cookie': cookie,
                    'Connection': _0x3560f7['dLZnd'],
                    'Accept': 'application/json,\x20text/plain,\x20*/*',
                    'User-Agent': _0x2d8b('1a5', 'N*^x'),
                    'Referer': _0x2d8b('1a6', 'gGti') + $[_0x2d8b('1a7', 'QJ^%')][_0x2d8b('1a8', 'u]47')][0x0]['actID'] + _0x2d8b('1a9', '8DlH'),
                    'Accept-Language': 'zh-cn'
                  },
                  'body': 'functionId=cutPriceByUser&body={\x22activityId\x22:\x22' + $[_0x2d8b('1aa', 'y6Z%')][_0x2d8b('1ab', 'I^06')][0x0][_0x2d8b('1ac', 'orxs')] + '\x22,\x22userName\x22:\x22\x22,\x22followShop\x22:1,\x22shopId\x22:' + $['dataGet'][_0x2d8b('1ad', '%#vL')][0x0][_0x2d8b('1ae', 'c#Vb')] + _0x2d8b('1af', 'NgnR')
                };
                return new Promise(_0x23a745 => {
                  $[_0x2d8b('1b0', ']rqI')](_0x9b5016, (_0x3bc2b1, _0x48c6d2, _0x580047) => {});
                });
              }
            } else {
              if (_0x2845ce) {
                if (_0x4d066e[_0x2d8b('1b1', '2#so')] !== _0x2d8b('1b2', 'w]r2')) {
                  $[_0x2d8b('ab', 'I^06')](_0x2845ce);
                } else {
                  _0x3560f7[_0x2d8b('1b3', 'r#bR')](_0x336739);
                }
              } else {
                if (_0x4f5f75) {
                  _0x4f5f75 = JSON[_0x2d8b('1b4', 'vExG')](_0x4f5f75);
                  if (_0x4d066e[_0x2d8b('1b5', 'L1xU')](_0x4f5f75['retcode'], _0x4d066e[_0x2d8b('1b6', 'L1xU')])) {
                    $[_0x2d8b('1b7', 'w]r2')] = ![];
                    return;
                  }
                  if (_0x4f5f75[_0x2d8b('1b8', 'gGti')] === '0' && _0x4f5f75[_0x2d8b('1b9', 'w6hk')][_0x2d8b('1ba', ']]s)')](_0x4d066e[_0x2d8b('1bb', 'L1xU')])) {
                    if (_0x4d066e[_0x2d8b('1bc', 'H@W!')] !== _0x2d8b('1bd', 'DvVV')) {
                      console['log'](e);
                    } else {
                      $[_0x2d8b('1be', '&)6u')] = _0x4f5f75['data']['userInfo'][_0x2d8b('1bf', 'o7K6')]['nickname'];
                    }
                  }
                } else {
                  $['log']('京东返回了空数据');
                }
              }
            }
          } catch (_0x208d89) {
            if (_0x2d8b('1c0', 'I^06') === _0x4d066e[_0x2d8b('1c1', '%#vL')]) {
              $[_0x2d8b('79', '9Kne')](opt, (_0x26d073, _0x50f805, _0x2e0915) => {});
            } else {
              $[_0x2d8b('1c2', 'N*^x')](_0x208d89);
            }
          } finally {
            _0x336739();
          }
        }
      });
    } else {
      _0x4d066e[_0x2d8b('1c3', '81FQ')](_0x336739);
    }
  });
};
_0xodf = 'jsjiami.com.v6';
// prettier-ignore
function Env(t, e) {
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
        s.call(this, t, (t, s, o) => {
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
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
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
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20, o = e && e.timeout ? e.timeout : o;
        const [r, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
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
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i)
        if (o = Object(o)[t], void 0 === o) return s;
      return o
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), o = s ? this.getval(s) : "";
        if (o) try {
          const t = JSON.parse(o);
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
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e), r = this.getval(i), h = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, o, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t), s = this.setval(JSON.stringify(r), i)
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
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      }) : this.isQuanX() ? $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: o,
          body: r
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: o,
          body: r
        }, r)
      }, t => e(t)) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
          this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: o,
          body: r
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: o,
          body: r
        }, r)
      }, t => e(t)))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: o,
          body: r
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: o,
          body: r
        }, r)
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
            headers: o,
            body: r
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: o,
            body: r
          }, r)
        }, t => e(t))
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", o) {
      const r = t => {
        if (!t || !this.isLoon() && this.isSurge()) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, r(o)) : this.isQuanX() && $notify(e, s, i, r(o)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}