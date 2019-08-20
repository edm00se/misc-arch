/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "3dp-t-rex.html",
    "revision": "ab0f79664a5b46cf885e824b0b48c4bf"
  },
  {
    "url": "3dprint-service.html",
    "revision": "b504f57d8ba0a49d5684aa26e709be98"
  },
  {
    "url": "404.html",
    "revision": "a6e77459c135065448ac294a17031836"
  },
  {
    "url": "about.html",
    "revision": "e2837ed7c6c678d0596776b7461613ff"
  },
  {
    "url": "alexa-skill-privacy-policy.html",
    "revision": "2811e4e08bca55a439eb96ca370ac61d"
  },
  {
    "url": "assets/css/0.styles.fff912e4.css",
    "revision": "ef50c16d1326175ab0f09f7e9bce0a18"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.674f50d2.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.af7ae505.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.b06871f2.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.fee66e71.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "assets/fonts/SourceCodePro-Black.0297c60f.eot",
    "revision": "0297c60f455bfab5d654e9e56442c9f7"
  },
  {
    "url": "assets/fonts/SourceCodePro-Black.e84e1034.ttf",
    "revision": "e84e1034c3cc643db2c2787d5fa04d53"
  },
  {
    "url": "assets/fonts/SourceCodePro-Black.f141a8e3.otf",
    "revision": "f141a8e3419cec0737d18452f7fccdf8"
  },
  {
    "url": "assets/fonts/SourceCodePro-Black.otf.15225489.woff",
    "revision": "152254897e6c292b8ad0c7d65abdd645"
  },
  {
    "url": "assets/fonts/SourceCodePro-Black.ttf.f56baef8.woff2",
    "revision": "f56baef8e8e6dbd932e6797fb433d81d"
  },
  {
    "url": "assets/fonts/SourceCodePro-BlackIt.b4c4286f.ttf",
    "revision": "b4c4286f28bde6346a42b0789579bbd9"
  },
  {
    "url": "assets/fonts/SourceCodePro-BlackIt.c7c4bc85.eot",
    "revision": "c7c4bc8563481b7dd2945d15a8876357"
  },
  {
    "url": "assets/fonts/SourceCodePro-BlackIt.ef61c0a4.otf",
    "revision": "ef61c0a4dee35652febea6e93e3ef24a"
  },
  {
    "url": "assets/fonts/SourceCodePro-BlackIt.otf.c41d6417.woff",
    "revision": "c41d6417352c08c107db84954a0e6b81"
  },
  {
    "url": "assets/fonts/SourceCodePro-BlackIt.ttf.6c036584.woff2",
    "revision": "6c03658445e60bf1b6a566ad2498cc0a"
  },
  {
    "url": "assets/fonts/SourceCodePro-Bold.32cdd791.eot",
    "revision": "32cdd791755837cf7c6fd966c953585a"
  },
  {
    "url": "assets/fonts/SourceCodePro-Bold.51ada6ce.otf",
    "revision": "51ada6ced5065946501d9b8244a7879f"
  },
  {
    "url": "assets/fonts/SourceCodePro-Bold.a3c30828.ttf",
    "revision": "a3c3082872743102af82207d10076209"
  },
  {
    "url": "assets/fonts/SourceCodePro-Bold.otf.c78ec902.woff",
    "revision": "c78ec902161e20ce8e85bfb23ef00e46"
  },
  {
    "url": "assets/fonts/SourceCodePro-Bold.ttf.dcedf356.woff2",
    "revision": "dcedf356da9362fa2c696ba39ede3a43"
  },
  {
    "url": "assets/fonts/SourceCodePro-BoldIt.29759126.eot",
    "revision": "29759126ac2ef17cedc14aa8658920bf"
  },
  {
    "url": "assets/fonts/SourceCodePro-BoldIt.d77c7593.ttf",
    "revision": "d77c7593ff187c79a73360a5edd1da75"
  },
  {
    "url": "assets/fonts/SourceCodePro-BoldIt.ebb7f769.otf",
    "revision": "ebb7f769a18e040ef80fa061000ca465"
  },
  {
    "url": "assets/fonts/SourceCodePro-BoldIt.otf.dc4c805b.woff",
    "revision": "dc4c805b03d1ebf2ada1383b1ec1ec83"
  },
  {
    "url": "assets/fonts/SourceCodePro-BoldIt.ttf.950bc426.woff2",
    "revision": "950bc4260dfce76ede7d3db116036e12"
  },
  {
    "url": "assets/fonts/SourceCodePro-ExtraLight.663b82ac.eot",
    "revision": "663b82ac03de931af2c2c16e1071f8a7"
  },
  {
    "url": "assets/fonts/SourceCodePro-ExtraLight.c23505a5.otf",
    "revision": "c23505a54557fe1136f3510e6c8ecb22"
  },
  {
    "url": "assets/fonts/SourceCodePro-ExtraLight.e91271c3.ttf",
    "revision": "e91271c3103f76d25ede07af3fe5a33a"
  },
  {
    "url": "assets/fonts/SourceCodePro-ExtraLight.otf.2a9a3c98.woff",
    "revision": "2a9a3c984d315d2879042f1ba28ea33f"
  },
  {
    "url": "assets/fonts/SourceCodePro-ExtraLight.ttf.6e5fd6d4.woff2",
    "revision": "6e5fd6d466a8c3a8dec63d674af66623"
  },
  {
    "url": "assets/fonts/SourceCodePro-ExtraLightIt.871d88fb.ttf",
    "revision": "871d88fbe37f7feeb5b1c2f575d9cb34"
  },
  {
    "url": "assets/fonts/SourceCodePro-ExtraLightIt.d89fffe9.otf",
    "revision": "d89fffe99ded30ad5f46e3f6380c2913"
  },
  {
    "url": "assets/fonts/SourceCodePro-ExtraLightIt.fbe84539.eot",
    "revision": "fbe84539eff19eab0ca6f52f1454ba64"
  },
  {
    "url": "assets/fonts/SourceCodePro-ExtraLightIt.otf.e2572504.woff",
    "revision": "e257250436e7559bcc65ddd3fb9321ec"
  },
  {
    "url": "assets/fonts/SourceCodePro-ExtraLightIt.ttf.bffdea70.woff2",
    "revision": "bffdea7012d4953623067f93764f030e"
  },
  {
    "url": "assets/fonts/SourceCodePro-It.0b13a012.eot",
    "revision": "0b13a012382732188fcd6f65db36da6e"
  },
  {
    "url": "assets/fonts/SourceCodePro-It.13ed3db1.otf",
    "revision": "13ed3db1ddcea30c57b18971e4ec8f73"
  },
  {
    "url": "assets/fonts/SourceCodePro-It.4f22015a.ttf",
    "revision": "4f22015ae8668226a7f7e8413fe93a81"
  },
  {
    "url": "assets/fonts/SourceCodePro-It.otf.bd9af36e.woff",
    "revision": "bd9af36ed4710820c7c76c895c2a5f7f"
  },
  {
    "url": "assets/fonts/SourceCodePro-It.ttf.d3787f1d.woff2",
    "revision": "d3787f1d8e6445fcc8aca00680efafc4"
  },
  {
    "url": "assets/fonts/SourceCodePro-Light.2b369146.otf",
    "revision": "2b369146b8370ebd12b1a70005b1b492"
  },
  {
    "url": "assets/fonts/SourceCodePro-Light.ba12b31b.eot",
    "revision": "ba12b31b8e483feb8cb03b6791bde14f"
  },
  {
    "url": "assets/fonts/SourceCodePro-Light.cf1c1e30.ttf",
    "revision": "cf1c1e30cdd58629e6c71e18aac4096a"
  },
  {
    "url": "assets/fonts/SourceCodePro-Light.otf.7229680e.woff",
    "revision": "7229680e1d85fd00198c8da1f2fad31f"
  },
  {
    "url": "assets/fonts/SourceCodePro-Light.ttf.10a6dcd4.woff2",
    "revision": "10a6dcd4425f7e6bfe2c7621e323f5b5"
  },
  {
    "url": "assets/fonts/SourceCodePro-LightIt.191657a5.otf",
    "revision": "191657a5f783cfbef7b5c55246a2c0f1"
  },
  {
    "url": "assets/fonts/SourceCodePro-LightIt.a6007c13.eot",
    "revision": "a6007c13135b460c59ff6706bbfa1faa"
  },
  {
    "url": "assets/fonts/SourceCodePro-LightIt.c053d3c5.ttf",
    "revision": "c053d3c5121a2dec272af8820a5929ad"
  },
  {
    "url": "assets/fonts/SourceCodePro-LightIt.otf.97910480.woff",
    "revision": "9791048078dc8146863129ec6299c437"
  },
  {
    "url": "assets/fonts/SourceCodePro-LightIt.ttf.1f098640.woff2",
    "revision": "1f0986409cfe353b12604629bac1b987"
  },
  {
    "url": "assets/fonts/SourceCodePro-Medium.358f7b28.eot",
    "revision": "358f7b28a9cb188cd4806d1b5c4e4cb5"
  },
  {
    "url": "assets/fonts/SourceCodePro-Medium.472c7e7a.ttf",
    "revision": "472c7e7a808efce9161fb8f27535bf22"
  },
  {
    "url": "assets/fonts/SourceCodePro-Medium.9db14b70.otf",
    "revision": "9db14b70aa1a4a395d56748c5d391284"
  },
  {
    "url": "assets/fonts/SourceCodePro-Medium.otf.48629b50.woff",
    "revision": "48629b50d56319a1e7456fb763115ec1"
  },
  {
    "url": "assets/fonts/SourceCodePro-Medium.ttf.8fcd3359.woff2",
    "revision": "8fcd3359d7bc0182dc9b0f4f63033e90"
  },
  {
    "url": "assets/fonts/SourceCodePro-MediumIt.2af5b726.eot",
    "revision": "2af5b726e9e989424115f38eb9a145eb"
  },
  {
    "url": "assets/fonts/SourceCodePro-MediumIt.4e272d34.otf",
    "revision": "4e272d3449cb55d42b6a7553bf973945"
  },
  {
    "url": "assets/fonts/SourceCodePro-MediumIt.7289b325.ttf",
    "revision": "7289b3252d4150c584ac2f80d80f42fc"
  },
  {
    "url": "assets/fonts/SourceCodePro-MediumIt.otf.235130c2.woff",
    "revision": "235130c28e6e70df3804bb6c4085005c"
  },
  {
    "url": "assets/fonts/SourceCodePro-MediumIt.ttf.28c695fb.woff2",
    "revision": "28c695fb2461efac8386f2016b401573"
  },
  {
    "url": "assets/fonts/SourceCodePro-Regular.1066e54d.ttf",
    "revision": "1066e54d79f902a2ff4d864c9a38a183"
  },
  {
    "url": "assets/fonts/SourceCodePro-Regular.20964dde.otf",
    "revision": "20964ddec742937a7f153247edf5c09e"
  },
  {
    "url": "assets/fonts/SourceCodePro-Regular.d5892edc.eot",
    "revision": "d5892edc24a4ec262052ebb4dcb3fec8"
  },
  {
    "url": "assets/fonts/SourceCodePro-Regular.otf.13ecee9d.woff",
    "revision": "13ecee9da9892b550e5960d65158f356"
  },
  {
    "url": "assets/fonts/SourceCodePro-Regular.ttf.f43ea4c5.woff2",
    "revision": "f43ea4c5ac35312e1fc76a6b6a2e06f0"
  },
  {
    "url": "assets/fonts/SourceCodePro-Semibold.0f54274d.ttf",
    "revision": "0f54274d1c32d7255172e7feda5a2c11"
  },
  {
    "url": "assets/fonts/SourceCodePro-Semibold.b01ff9c3.eot",
    "revision": "b01ff9c3c4d4bd843634e697a5b13ca1"
  },
  {
    "url": "assets/fonts/SourceCodePro-Semibold.fd020cec.otf",
    "revision": "fd020cec8a5ae2a7210d8bf29eb6d3b4"
  },
  {
    "url": "assets/fonts/SourceCodePro-Semibold.otf.dcad5590.woff",
    "revision": "dcad5590b3f5b22e6a85e7349ffdca91"
  },
  {
    "url": "assets/fonts/SourceCodePro-Semibold.ttf.9744f877.woff2",
    "revision": "9744f877fc5b6cb47c2868e8c5340779"
  },
  {
    "url": "assets/fonts/SourceCodePro-SemiboldIt.1b78a6d8.eot",
    "revision": "1b78a6d8b0204c453c82aa1b08b32e46"
  },
  {
    "url": "assets/fonts/SourceCodePro-SemiboldIt.83893e6b.ttf",
    "revision": "83893e6b3705db2b59c893600493a220"
  },
  {
    "url": "assets/fonts/SourceCodePro-SemiboldIt.cb99819f.otf",
    "revision": "cb99819fda3f54353255e428b45cffa2"
  },
  {
    "url": "assets/fonts/SourceCodePro-SemiboldIt.otf.39da3019.woff",
    "revision": "39da30190de65becb2097f41ab824d7c"
  },
  {
    "url": "assets/fonts/SourceCodePro-SemiboldIt.ttf.b2c9b70e.woff2",
    "revision": "b2c9b70e06203d4e286f505334c394ce"
  },
  {
    "url": "assets/fonts/SourceSansPro-Black.604a5970.ttf",
    "revision": "604a59706d4852f5f5c5362aa035ccf9"
  },
  {
    "url": "assets/fonts/SourceSansPro-Black.73a66c98.otf",
    "revision": "73a66c9820fe5a3f219013658ccacbfe"
  },
  {
    "url": "assets/fonts/SourceSansPro-Black.otf.c685b72e.woff",
    "revision": "c685b72edfce430e96b25f999849be40"
  },
  {
    "url": "assets/fonts/SourceSansPro-Black.ttf.fc3e9552.woff2",
    "revision": "fc3e95520afb7e2a0e67857ad4c2aba4"
  },
  {
    "url": "assets/fonts/SourceSansPro-BlackIt.7f823257.otf",
    "revision": "7f823257c5190f6cd104160d59f66e6c"
  },
  {
    "url": "assets/fonts/SourceSansPro-BlackIt.f61110ca.ttf",
    "revision": "f61110ca65f6bcfca4d1aeb3ca8b3e73"
  },
  {
    "url": "assets/fonts/SourceSansPro-BlackIt.otf.0e2f3d03.woff",
    "revision": "0e2f3d034954f0549af67f4eaca239bd"
  },
  {
    "url": "assets/fonts/SourceSansPro-BlackIt.ttf.de6c0dd9.woff2",
    "revision": "de6c0dd91e4097f07e5192e9684e8a60"
  },
  {
    "url": "assets/fonts/SourceSansPro-Bold.0f05d84e.otf",
    "revision": "0f05d84ea95062b98f423c141ae19c09"
  },
  {
    "url": "assets/fonts/SourceSansPro-Bold.31d4f8d1.ttf",
    "revision": "31d4f8d135581d9623d4caa76b834517"
  },
  {
    "url": "assets/fonts/SourceSansPro-Bold.otf.4c387827.woff",
    "revision": "4c38782791cb12faae0e2dd6f2488182"
  },
  {
    "url": "assets/fonts/SourceSansPro-Bold.ttf.19e9f355.woff2",
    "revision": "19e9f35589c9abb072755df4ab19175c"
  },
  {
    "url": "assets/fonts/SourceSansPro-BoldIt.b6e20e05.otf",
    "revision": "b6e20e05d5fc3569ad658d2464e30691"
  },
  {
    "url": "assets/fonts/SourceSansPro-BoldIt.c2ebd385.ttf",
    "revision": "c2ebd385fd30cba2bcb48a0f15bba1c1"
  },
  {
    "url": "assets/fonts/SourceSansPro-BoldIt.otf.e7850364.woff",
    "revision": "e7850364e3e1eb62a0bb4438dd6ff4d2"
  },
  {
    "url": "assets/fonts/SourceSansPro-BoldIt.ttf.5bdabebc.woff2",
    "revision": "5bdabebca49fb521bbe77f5029000c77"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLight.0033199c.otf",
    "revision": "0033199cdbdfb77eee2c80479d61fb6e"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLight.b7e3146c.ttf",
    "revision": "b7e3146cf2b5945e959a03f33000e64c"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLight.otf.7e280f05.woff",
    "revision": "7e280f054f7ef5ae97de69abbedc636b"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLight.ttf.79710ea1.woff2",
    "revision": "79710ea185543988ee919374c2e637e3"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLightIt.70fc1bea.otf",
    "revision": "70fc1bea9ce5ecd6fb70321ff5efd407"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLightIt.b2bbec0d.ttf",
    "revision": "b2bbec0dc74b4a63ab1be8ef1fdc2daa"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLightIt.otf.42afdfc6.woff",
    "revision": "42afdfc6a798a7355049e9e15a18242c"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLightIt.ttf.20c8bb73.woff2",
    "revision": "20c8bb73b6a45101d8cbb7acb59ad286"
  },
  {
    "url": "assets/fonts/SourceSansPro-It.1c9a55c7.ttf",
    "revision": "1c9a55c7f35e2dd756b383a100086e33"
  },
  {
    "url": "assets/fonts/SourceSansPro-It.a7294e5c.otf",
    "revision": "a7294e5cbe68c7943bd4f9dbbc00ad69"
  },
  {
    "url": "assets/fonts/SourceSansPro-It.otf.8c69dcba.woff",
    "revision": "8c69dcbad035cdc61ec6a1b8725be159"
  },
  {
    "url": "assets/fonts/SourceSansPro-It.ttf.ca526e3f.woff2",
    "revision": "ca526e3febf4f1cbfc55944cccf9c3bb"
  },
  {
    "url": "assets/fonts/SourceSansPro-Light.c3ebad2f.otf",
    "revision": "c3ebad2f706f603566fd2b6170d164ec"
  },
  {
    "url": "assets/fonts/SourceSansPro-Light.cf7ad074.ttf",
    "revision": "cf7ad074cf9ba2ef23e036076bfaa7b6"
  },
  {
    "url": "assets/fonts/SourceSansPro-Light.otf.ed890ecc.woff",
    "revision": "ed890ecc8f67e0f290637c00477ea5e2"
  },
  {
    "url": "assets/fonts/SourceSansPro-Light.ttf.cee2125b.woff2",
    "revision": "cee2125bd4c2bda53fa8d89a0cadda2c"
  },
  {
    "url": "assets/fonts/SourceSansPro-LightIt.22e6341a.ttf",
    "revision": "22e6341a7dabac12a9cb72e00455a819"
  },
  {
    "url": "assets/fonts/SourceSansPro-LightIt.6257d6c6.otf",
    "revision": "6257d6c642f1893791faf0bb058a79d7"
  },
  {
    "url": "assets/fonts/SourceSansPro-LightIt.otf.fc5755a4.woff",
    "revision": "fc5755a4eedc1fe8b423094472dba7c3"
  },
  {
    "url": "assets/fonts/SourceSansPro-LightIt.ttf.abba6a94.woff2",
    "revision": "abba6a943f25ed1ead25ae9f490d5c43"
  },
  {
    "url": "assets/fonts/SourceSansPro-Regular.881b7e6a.ttf",
    "revision": "881b7e6aad066724af994de318cbf615"
  },
  {
    "url": "assets/fonts/SourceSansPro-Regular.ba2040e0.otf",
    "revision": "ba2040e02c2f8efedb2aba500d9346c0"
  },
  {
    "url": "assets/fonts/SourceSansPro-Regular.otf.90b3418f.woff",
    "revision": "90b3418f90a38ce4816b6367c4d01155"
  },
  {
    "url": "assets/fonts/SourceSansPro-Regular.ttf.5c0f5192.woff2",
    "revision": "5c0f519297ea97db4f2912905aeeb6cb"
  },
  {
    "url": "assets/fonts/SourceSansPro-Semibold.0a84f4ef.ttf",
    "revision": "0a84f4efb63be1fac361afd6ce676a93"
  },
  {
    "url": "assets/fonts/SourceSansPro-Semibold.7e443451.otf",
    "revision": "7e443451ebde7c4954b767f8dafa2c5a"
  },
  {
    "url": "assets/fonts/SourceSansPro-Semibold.otf.d6387291.woff",
    "revision": "d6387291446e764faa820e46775e109d"
  },
  {
    "url": "assets/fonts/SourceSansPro-Semibold.ttf.a0a70ab9.woff2",
    "revision": "a0a70ab999f79c3e116011820ebef9ac"
  },
  {
    "url": "assets/fonts/SourceSansPro-SemiboldIt.1ce6e39e.otf",
    "revision": "1ce6e39e9eeda15ea8395f69cb414764"
  },
  {
    "url": "assets/fonts/SourceSansPro-SemiboldIt.e5b0b69e.ttf",
    "revision": "e5b0b69e987e9199d2f072284a2b7121"
  },
  {
    "url": "assets/fonts/SourceSansPro-SemiboldIt.otf.a9c408b7.woff",
    "revision": "a9c408b78640f7edd74820dc8d1cba45"
  },
  {
    "url": "assets/fonts/SourceSansPro-SemiboldIt.ttf.60e71696.woff2",
    "revision": "60e71696d692f075e44b3026d742d8a8"
  },
  {
    "url": "assets/img/fontawesome-webfont.912ec66d.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "assets/js/10.1087a50b.js",
    "revision": "165cef4e17b2464245ef1f88714c55d3"
  },
  {
    "url": "assets/js/11.1a02bc6a.js",
    "revision": "681a998a0bb2aecd7259d02a82e987d9"
  },
  {
    "url": "assets/js/2.7e3ab03f.js",
    "revision": "79418bd78c2238c33e584e6616b8c812"
  },
  {
    "url": "assets/js/3.703c4e9c.js",
    "revision": "56c033f6aa41a7efaac39a961a167148"
  },
  {
    "url": "assets/js/4.5d4ed7d8.js",
    "revision": "0e2a83a236e75e753d85668a5c7af265"
  },
  {
    "url": "assets/js/5.bf9c5d87.js",
    "revision": "f5472e8a6f44abee7c0854c615793db9"
  },
  {
    "url": "assets/js/6.a85cb390.js",
    "revision": "666d7d4d20ca653641ff2cd38e0995fa"
  },
  {
    "url": "assets/js/7.3a0d4a36.js",
    "revision": "c314104be34ca14a259b380dd5a425a5"
  },
  {
    "url": "assets/js/8.de6ebd2f.js",
    "revision": "f8a59ace5ac5d6a167dbab31762687df"
  },
  {
    "url": "assets/js/9.11fef3ae.js",
    "revision": "784711db2cd99cf21dce80460b646305"
  },
  {
    "url": "assets/js/app.48269a27.js",
    "revision": "a96094447eaa477c4b5e8a58676098ce"
  },
  {
    "url": "awesome-board-games.html",
    "revision": "fbfea5d221ca2ec49888522c8cbcd8de"
  },
  {
    "url": "deleting-facebook.html",
    "revision": "14abf11ba9b8109719e53c477d278d0b"
  },
  {
    "url": "ico/apple-touch-icon-114x114.png",
    "revision": "541fde7b115c1107e81c06f07df72356"
  },
  {
    "url": "ico/apple-touch-icon-120x120.png",
    "revision": "d2bafc421ba27d28e2903108153caf8c"
  },
  {
    "url": "ico/apple-touch-icon-144x144.png",
    "revision": "6f28f40cea0c4d0364f80bf1f49856eb"
  },
  {
    "url": "ico/apple-touch-icon-152x152.png",
    "revision": "b2cf7b2a8c77e702cf3333ec20a9106c"
  },
  {
    "url": "ico/apple-touch-icon-57x57.png",
    "revision": "47f6a847c68e8cbaa9c609c5a40e693e"
  },
  {
    "url": "ico/apple-touch-icon-60x60.png",
    "revision": "035bc81d77f6eaab6d8b6715c68c6bd5"
  },
  {
    "url": "ico/apple-touch-icon-72x72.png",
    "revision": "92f056c3b9d5923f44eed9204d0de09f"
  },
  {
    "url": "ico/apple-touch-icon-76x76.png",
    "revision": "7caa3a8e861d49df913305f606a085c8"
  },
  {
    "url": "ico/favicon-128.png",
    "revision": "d04189e186dccc26456f7aa4ea57affe"
  },
  {
    "url": "ico/favicon-16x16.png",
    "revision": "3a86befe69b800303e3390841337fb69"
  },
  {
    "url": "ico/favicon-196x196.png",
    "revision": "b02c68f0e72c9623985a25612de2ed82"
  },
  {
    "url": "ico/favicon-32x32.png",
    "revision": "90a96678df61cb016afa16efd7fbe893"
  },
  {
    "url": "ico/favicon-96x96.png",
    "revision": "6448f9c8a732a3964b9e115a8e1513f0"
  },
  {
    "url": "ico/mstile-144x144.png",
    "revision": "6f28f40cea0c4d0364f80bf1f49856eb"
  },
  {
    "url": "ico/mstile-150x150.png",
    "revision": "22f7a195ffb61a438d7d03c078fa888b"
  },
  {
    "url": "ico/mstile-310x150.png",
    "revision": "17048b7bf54658d90a42c789d3029b37"
  },
  {
    "url": "ico/mstile-310x310.png",
    "revision": "f9f3e5e4c8ad9aed0e6440c7e2e24494"
  },
  {
    "url": "ico/mstile-70x70.png",
    "revision": "d04189e186dccc26456f7aa4ea57affe"
  },
  {
    "url": "ico/thinking_512.png",
    "revision": "82237e39901089730f19b9b4d8cb7e7c"
  },
  {
    "url": "img/3dp-action-shot.png",
    "revision": "0cd6ba37793937fee69aa5708c9801c1"
  },
  {
    "url": "img/Box_of_Dino_Parts.jpg",
    "revision": "5f00889a24980ba366ee1d3be2534508"
  },
  {
    "url": "img/Cyberman_Delete.jpg",
    "revision": "971f78631c993a61c655aec63b829cdb"
  },
  {
    "url": "img/Must_Go_Faster.jpg",
    "revision": "aca4d43c70b81a0e3ba242027832b9b7"
  },
  {
    "url": "img/REXie_Complete.jpg",
    "revision": "556f05904533dcf88a279bc2b212e19a"
  },
  {
    "url": "img/SUE.jpg",
    "revision": "72f91e7be93813384b8c1f6756241281"
  },
  {
    "url": "img/TheFieldMuseum.jpg",
    "revision": "6899ec20deac183e09e71c30992011cb"
  },
  {
    "url": "index.html",
    "revision": "74806edf59be659f3f54b11363c56fba"
  },
  {
    "url": "logo.png",
    "revision": "ff96e5d8b5fb4a6910a729a1508bf1f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
