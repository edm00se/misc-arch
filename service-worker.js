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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "3dp-t-rex.html",
    "revision": "294a098d32ec70a16c49c9f39a97fa3a"
  },
  {
    "url": "404.html",
    "revision": "157a1c6b4a87adb46abc87b33e7330ce"
  },
  {
    "url": "about.html",
    "revision": "ea81901240bf19b421ab4263d287c551"
  },
  {
    "url": "alexa-skill-privacy-policy.html",
    "revision": "36fbeec74dc2208aade1bd1f46290221"
  },
  {
    "url": "assets/css/1.styles.d7d64a3d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.cad2c2d5.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/3.styles.a96496b2.css",
    "revision": "b713757094e962f5cc5f8c0ce18e4581"
  },
  {
    "url": "assets/css/styles.60459705.css",
    "revision": "a09ac325cdc93700972ed397bc6536fa"
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
    "url": "assets/fonts/glyphicons-halflings-regular.448c34a5.woff2",
    "revision": "448c34a56d699c29117adc64c43affeb"
  },
  {
    "url": "assets/fonts/glyphicons-halflings-regular.e18bbf61.ttf",
    "revision": "e18bbf611f2a2e43afc071aa2f4e1512"
  },
  {
    "url": "assets/fonts/glyphicons-halflings-regular.f4769f9b.eot",
    "revision": "f4769f9bdb7466be65088239c12046d1"
  },
  {
    "url": "assets/fonts/glyphicons-halflings-regular.fa277232.woff",
    "revision": "fa2772327f55d8198301fdb8bcfc8158"
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
    "url": "assets/fonts/SourceSansPro-Black.2516b342.otf",
    "revision": "2516b34268d5abb314bd31734f2391d0"
  },
  {
    "url": "assets/fonts/SourceSansPro-Black.2ff1682f.eot",
    "revision": "2ff1682f373b0f9d917d2f812c8ec80c"
  },
  {
    "url": "assets/fonts/SourceSansPro-Black.587ba272.ttf",
    "revision": "587ba2724f87ade04aab5c314ccfc7c8"
  },
  {
    "url": "assets/fonts/SourceSansPro-Black.otf.cc8efb2f.woff",
    "revision": "cc8efb2fcf0cc7e48d412f0d57dc85b2"
  },
  {
    "url": "assets/fonts/SourceSansPro-Black.ttf.2a13689c.woff2",
    "revision": "2a13689cc44f0e6da478889627ca25f7"
  },
  {
    "url": "assets/fonts/SourceSansPro-BlackIt.19b218f0.eot",
    "revision": "19b218f01fb05d328a85f05e6bbb4072"
  },
  {
    "url": "assets/fonts/SourceSansPro-BlackIt.38cd3043.otf",
    "revision": "38cd304380f4d5645ce646fb13e230ad"
  },
  {
    "url": "assets/fonts/SourceSansPro-BlackIt.ddaa6865.ttf",
    "revision": "ddaa6865d948489ba15a523380956202"
  },
  {
    "url": "assets/fonts/SourceSansPro-BlackIt.otf.80668f16.woff",
    "revision": "80668f161c73ffbc392bb3182f3e7c4e"
  },
  {
    "url": "assets/fonts/SourceSansPro-BlackIt.ttf.bafa1590.woff2",
    "revision": "bafa15907a9ff7962bbd715afbf0b2a0"
  },
  {
    "url": "assets/fonts/SourceSansPro-Bold.1a2a157b.otf",
    "revision": "1a2a157bfd94b250884c09f1bd57a0bb"
  },
  {
    "url": "assets/fonts/SourceSansPro-Bold.1e9b84fc.ttf",
    "revision": "1e9b84fcbc477139e16061c80f0d873d"
  },
  {
    "url": "assets/fonts/SourceSansPro-Bold.93b5bf1f.eot",
    "revision": "93b5bf1f0f220d7ad1677b5fd5ca9235"
  },
  {
    "url": "assets/fonts/SourceSansPro-Bold.otf.86dae822.woff",
    "revision": "86dae8227f7c148070652cd9f37e4eae"
  },
  {
    "url": "assets/fonts/SourceSansPro-Bold.ttf.5696c859.woff2",
    "revision": "5696c8591069a363bedb1dd94c655128"
  },
  {
    "url": "assets/fonts/SourceSansPro-BoldIt.18f07e29.eot",
    "revision": "18f07e29928daf1ac14b3d1b6b628650"
  },
  {
    "url": "assets/fonts/SourceSansPro-BoldIt.50e6e618.otf",
    "revision": "50e6e618cfc82e151d372c45c434174b"
  },
  {
    "url": "assets/fonts/SourceSansPro-BoldIt.7edeabe6.ttf",
    "revision": "7edeabe69cf9fd9b8d6310c3b9a027b1"
  },
  {
    "url": "assets/fonts/SourceSansPro-BoldIt.otf.f49ab603.woff",
    "revision": "f49ab603c2bb4dc2334434191163cfc7"
  },
  {
    "url": "assets/fonts/SourceSansPro-BoldIt.ttf.72094671.woff2",
    "revision": "720946715a1caadbe92a63ea2a0950bb"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLight.84f38db9.eot",
    "revision": "84f38db9918ebb6106e5b644874bf70a"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLight.abbaecf0.ttf",
    "revision": "abbaecf00224cd1086837404c418af32"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLight.d4882f17.otf",
    "revision": "d4882f17633d5441269d4ec57ab7f6c3"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLight.otf.efc4e410.woff",
    "revision": "efc4e410f7b659a6613f4d18497b89f0"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLight.ttf.18628e10.woff2",
    "revision": "18628e10fd7064357e5456fe66e1a43e"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLightIt.24da54a2.otf",
    "revision": "24da54a20f64848567054e3f500d0ef1"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLightIt.5b2fdcaf.eot",
    "revision": "5b2fdcaf6a96e39c30a3bc7c7e718e5c"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLightIt.95c44531.ttf",
    "revision": "95c44531a311edd3e77bfefbcd563f1b"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLightIt.otf.ef7233ec.woff",
    "revision": "ef7233ecd78d566cc46059695c04a09f"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLightIt.ttf.022f2c3a.woff2",
    "revision": "022f2c3af11ed55b413dc175e2987d75"
  },
  {
    "url": "assets/fonts/SourceSansPro-It.221e2885.otf",
    "revision": "221e2885deff8820941c3fa286ad25f5"
  },
  {
    "url": "assets/fonts/SourceSansPro-It.61403c32.ttf",
    "revision": "61403c3297a48cfeaf13071038a555cd"
  },
  {
    "url": "assets/fonts/SourceSansPro-It.804a5a72.eot",
    "revision": "804a5a72877fa3e658baefb5ecacf88c"
  },
  {
    "url": "assets/fonts/SourceSansPro-It.otf.e242c096.woff",
    "revision": "e242c0963b781c2170587faab7507420"
  },
  {
    "url": "assets/fonts/SourceSansPro-It.ttf.9a310e9d.woff2",
    "revision": "9a310e9db68fa99e332faa04284d7e48"
  },
  {
    "url": "assets/fonts/SourceSansPro-Light.779f3bf4.otf",
    "revision": "779f3bf41b852b5582d41cd866ca3ddc"
  },
  {
    "url": "assets/fonts/SourceSansPro-Light.a663a1ba.ttf",
    "revision": "a663a1ba5f49629a86f7486aaf0f5359"
  },
  {
    "url": "assets/fonts/SourceSansPro-Light.b818f497.eot",
    "revision": "b818f4970be48d5cba35901f23c7d7b2"
  },
  {
    "url": "assets/fonts/SourceSansPro-Light.otf.7d901d60.woff",
    "revision": "7d901d6001e12e3fd36572daa796e9cc"
  },
  {
    "url": "assets/fonts/SourceSansPro-Light.ttf.9ac3a965.woff2",
    "revision": "9ac3a965ff8034e8c4f37c4a10c85349"
  },
  {
    "url": "assets/fonts/SourceSansPro-LightIt.06b76910.otf",
    "revision": "06b76910b912d54a5696d0854f51dc6c"
  },
  {
    "url": "assets/fonts/SourceSansPro-LightIt.a33030ba.ttf",
    "revision": "a33030baca7e31c579ea661af7aae97a"
  },
  {
    "url": "assets/fonts/SourceSansPro-LightIt.e2f4cdfb.eot",
    "revision": "e2f4cdfb3a6df28516ed2b7c5768f08b"
  },
  {
    "url": "assets/fonts/SourceSansPro-LightIt.otf.8991e3bb.woff",
    "revision": "8991e3bb0c2411f590909312f015da50"
  },
  {
    "url": "assets/fonts/SourceSansPro-LightIt.ttf.f9b216cb.woff2",
    "revision": "f9b216cb099a5be926890d65db31f05e"
  },
  {
    "url": "assets/fonts/SourceSansPro-Regular.5e1d162e.otf",
    "revision": "5e1d162e634a102d7da8db597825a764"
  },
  {
    "url": "assets/fonts/SourceSansPro-Regular.ac064e4c.eot",
    "revision": "ac064e4ccb70dc3a2b5bd2d68b86428b"
  },
  {
    "url": "assets/fonts/SourceSansPro-Regular.d165cf1a.ttf",
    "revision": "d165cf1a72ee7db500ecfc9d7672a834"
  },
  {
    "url": "assets/fonts/SourceSansPro-Regular.otf.bbd955e1.woff",
    "revision": "bbd955e1383a2ab663298511a163d3dc"
  },
  {
    "url": "assets/fonts/SourceSansPro-Regular.ttf.713df4a9.woff2",
    "revision": "713df4a98683bbbc9e0decd3fc9c0cf7"
  },
  {
    "url": "assets/fonts/SourceSansPro-Semibold.78667e5e.otf",
    "revision": "78667e5e4b54fea9bb8552482b39cf2e"
  },
  {
    "url": "assets/fonts/SourceSansPro-Semibold.baa29e58.eot",
    "revision": "baa29e58bf6f07dcc7e3abeaffdd94d6"
  },
  {
    "url": "assets/fonts/SourceSansPro-Semibold.c8eb6542.ttf",
    "revision": "c8eb65424f2f0206e83a4ad5cc6ecbb3"
  },
  {
    "url": "assets/fonts/SourceSansPro-Semibold.otf.99f66ff4.woff",
    "revision": "99f66ff4eab8123edcaa32fd744cb791"
  },
  {
    "url": "assets/fonts/SourceSansPro-Semibold.ttf.9ef07ea6.woff2",
    "revision": "9ef07ea6ee6d06f4fd48a548168b69aa"
  },
  {
    "url": "assets/fonts/SourceSansPro-SemiboldIt.4e5ce2e7.otf",
    "revision": "4e5ce2e7cf30ec4e0298b0225f57c454"
  },
  {
    "url": "assets/fonts/SourceSansPro-SemiboldIt.51e92949.ttf",
    "revision": "51e929490d1d431b4127ce3197efb591"
  },
  {
    "url": "assets/fonts/SourceSansPro-SemiboldIt.bceddbf1.eot",
    "revision": "bceddbf12daf9ef8f246e2fe2e6f9726"
  },
  {
    "url": "assets/fonts/SourceSansPro-SemiboldIt.otf.fe3cbd07.woff",
    "revision": "fe3cbd07b27e040cff73d7601cd592ed"
  },
  {
    "url": "assets/fonts/SourceSansPro-SemiboldIt.ttf.f25d5f4a.woff2",
    "revision": "f25d5f4a6db370d5e335a9fdc988f7f6"
  },
  {
    "url": "assets/img/fontawesome-webfont.912ec66d.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "assets/img/glyphicons-halflings-regular.89889688.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "assets/js/1.d7d64a3d.js",
    "revision": "c2dd7e606b11d2887ab25f87e1ac0904"
  },
  {
    "url": "assets/js/2.cad2c2d5.js",
    "revision": "cb14d9596acd0ed7d6315a667755f436"
  },
  {
    "url": "assets/js/3.a96496b2.js",
    "revision": "6a4646b94016c306808bf54586f7a85b"
  },
  {
    "url": "assets/js/4.248e07cf.js",
    "revision": "9c12dbfe5cffc1496cf7acb7d55222b0"
  },
  {
    "url": "assets/js/5.eba3e03a.js",
    "revision": "ea56a5283b4373603bf77f2c9795281f"
  },
  {
    "url": "assets/js/6.37705ed4.js",
    "revision": "b8d7dd60658fc55f20b28855d5c52169"
  },
  {
    "url": "assets/js/7.77faf9e1.js",
    "revision": "be289c35d845913178ac1bd257b65009"
  },
  {
    "url": "assets/js/8.68aa6d2c.js",
    "revision": "6d304426fe0a397f02d4ce3cf08dc019"
  },
  {
    "url": "assets/js/app.60459705.js",
    "revision": "7df1ff78413c3ee15695152253ed0a3d"
  },
  {
    "url": "awesome-board-games.html",
    "revision": "18e231201c20bcef46329cd158013627"
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
    "revision": "aa6528a15c039d227af8ac34e492d9dd"
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
