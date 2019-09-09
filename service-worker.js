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
    "revision": "3e0811422bce72f6d2caa659d31cf5a3"
  },
  {
    "url": "3dprint-service.html",
    "revision": "cad42488638e848ef1e03e68f5cd9b5b"
  },
  {
    "url": "404.html",
    "revision": "313d55b3079ca165457bdde5c9ec5eeb"
  },
  {
    "url": "about.html",
    "revision": "a82745063a5f6887373c67b31490bd38"
  },
  {
    "url": "alexa-skill-privacy-policy.html",
    "revision": "a513a1d482a37af4350dff391afca583"
  },
  {
    "url": "assets/css/0.styles.b7903210.css",
    "revision": "1fcbf5ffadaf0ee035d82349759bb99e"
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
    "url": "assets/fonts/SourceCodePro-ExtraLightIt.otf.e2572504.woff",
    "revision": "e257250436e7559bcc65ddd3fb9321ec"
  },
  {
    "url": "assets/fonts/SourceCodePro-ExtraLightIt.ttf.bffdea70.woff2",
    "revision": "bffdea7012d4953623067f93764f030e"
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
    "url": "assets/fonts/SourceSansPro-Black.0ef9ee9f.otf",
    "revision": "0ef9ee9f7ae99dcdff63ec103389be32"
  },
  {
    "url": "assets/fonts/SourceSansPro-Black.4a31d5fa.ttf",
    "revision": "4a31d5fa14f4c251809e7bcd6f954aea"
  },
  {
    "url": "assets/fonts/SourceSansPro-Black.otf.2c99d731.woff",
    "revision": "2c99d731f47d20365f2358feb26a2a6c"
  },
  {
    "url": "assets/fonts/SourceSansPro-Black.ttf.1ec93fb0.woff2",
    "revision": "1ec93fb0f9636c560e2185567ab4dccf"
  },
  {
    "url": "assets/fonts/SourceSansPro-BlackIt.0bf3a60f.otf",
    "revision": "0bf3a60fecf77ce612a02da05a9efb7d"
  },
  {
    "url": "assets/fonts/SourceSansPro-BlackIt.88c36b15.ttf",
    "revision": "88c36b15c9d9d17f94cfc16347fa1457"
  },
  {
    "url": "assets/fonts/SourceSansPro-BlackIt.otf.9330ab0d.woff",
    "revision": "9330ab0d245f7b6e97f9e9fd6a60b179"
  },
  {
    "url": "assets/fonts/SourceSansPro-BlackIt.ttf.400e7325.woff2",
    "revision": "400e7325d7cc18264f6bce3b11e0eda6"
  },
  {
    "url": "assets/fonts/SourceSansPro-Bold.b23705a4.otf",
    "revision": "b23705a4082d8c84d2533a37e9fb0811"
  },
  {
    "url": "assets/fonts/SourceSansPro-Bold.cd9e6b79.ttf",
    "revision": "cd9e6b790a20bbaf25ec0027060f6c3c"
  },
  {
    "url": "assets/fonts/SourceSansPro-Bold.otf.ac261598.woff",
    "revision": "ac261598a5964b71c9eaa3fe76356b4e"
  },
  {
    "url": "assets/fonts/SourceSansPro-Bold.ttf.07a20717.woff2",
    "revision": "07a207178039f72a957df5e77b061b37"
  },
  {
    "url": "assets/fonts/SourceSansPro-BoldIt.07ceebf1.otf",
    "revision": "07ceebf1dec81bf92b226c6d806c21fb"
  },
  {
    "url": "assets/fonts/SourceSansPro-BoldIt.7e401b3e.ttf",
    "revision": "7e401b3e06e481d0314c9bd1a93c9b9b"
  },
  {
    "url": "assets/fonts/SourceSansPro-BoldIt.otf.b81c2d8b.woff",
    "revision": "b81c2d8b4d22ffa9b6ab1dc52843f40d"
  },
  {
    "url": "assets/fonts/SourceSansPro-BoldIt.ttf.433da739.woff2",
    "revision": "433da739918f1fbd0ff8c83e10116698"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLight.8d0c3b1c.ttf",
    "revision": "8d0c3b1ca9f922ff1809c1ef429910d1"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLight.c867d05d.otf",
    "revision": "c867d05d4ff064b1563c57f6a800db61"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLight.otf.d577e2c5.woff",
    "revision": "d577e2c5c6915fcefb0de4037f092e83"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLight.ttf.d92614da.woff2",
    "revision": "d92614daa93b6a308c74465b3b5e5040"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLightIt.5f6c950a.ttf",
    "revision": "5f6c950a5d5fee9299eb0fcb9d2adb0f"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLightIt.d6648c78.otf",
    "revision": "d6648c78d38c357e5c81c8e0a6d0aa0c"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLightIt.otf.9b9d35be.woff",
    "revision": "9b9d35be0ea84faee13c0b4f8d1e6af2"
  },
  {
    "url": "assets/fonts/SourceSansPro-ExtraLightIt.ttf.82097c26.woff2",
    "revision": "82097c26863b6f5a2ed9d4679e2a0e5a"
  },
  {
    "url": "assets/fonts/SourceSansPro-It.6c362e00.ttf",
    "revision": "6c362e00c9a0cd2688c041229cb6446b"
  },
  {
    "url": "assets/fonts/SourceSansPro-It.ad486cdf.otf",
    "revision": "ad486cdf84121217b2b4cac5b8fc7816"
  },
  {
    "url": "assets/fonts/SourceSansPro-It.otf.5f31e7ec.woff",
    "revision": "5f31e7ec6f0c0325ab0e5e569d2418e3"
  },
  {
    "url": "assets/fonts/SourceSansPro-It.ttf.7ee03da8.woff2",
    "revision": "7ee03da8add1610f0a9cb55f7047dbb0"
  },
  {
    "url": "assets/fonts/SourceSansPro-Light.420d839a.otf",
    "revision": "420d839a0ccfb6a040d3a5c6af03c5aa"
  },
  {
    "url": "assets/fonts/SourceSansPro-Light.e7daa4ab.ttf",
    "revision": "e7daa4ab63e5209eedac1adcb98a7fed"
  },
  {
    "url": "assets/fonts/SourceSansPro-Light.otf.cd6456a8.woff",
    "revision": "cd6456a86c3b012a26c5afe1353a3b55"
  },
  {
    "url": "assets/fonts/SourceSansPro-Light.ttf.7db69e93.woff2",
    "revision": "7db69e930fff9eba1e8eb6fdd41c826e"
  },
  {
    "url": "assets/fonts/SourceSansPro-LightIt.0b4be0f9.otf",
    "revision": "0b4be0f981068bdd05dd1c7b5933ef2d"
  },
  {
    "url": "assets/fonts/SourceSansPro-LightIt.cf7fa055.ttf",
    "revision": "cf7fa055e48899b14f9fbb9d060e8ad8"
  },
  {
    "url": "assets/fonts/SourceSansPro-LightIt.otf.ed22e01b.woff",
    "revision": "ed22e01b074d6e061077a1acac00a859"
  },
  {
    "url": "assets/fonts/SourceSansPro-LightIt.ttf.9b26dad3.woff2",
    "revision": "9b26dad30000c8cdd7818a7bd699cdeb"
  },
  {
    "url": "assets/fonts/SourceSansPro-Regular.906ba80a.ttf",
    "revision": "906ba80ac81b0bb01b7b2fda686c785d"
  },
  {
    "url": "assets/fonts/SourceSansPro-Regular.da547242.otf",
    "revision": "da547242c12b7cfc5f4a4e3c428b9d76"
  },
  {
    "url": "assets/fonts/SourceSansPro-Regular.otf.344f4c8d.woff",
    "revision": "344f4c8d29dfd487ee38394adb229760"
  },
  {
    "url": "assets/fonts/SourceSansPro-Regular.ttf.8bb5b88b.woff2",
    "revision": "8bb5b88b2b1b019e3b97b513b2226f3e"
  },
  {
    "url": "assets/fonts/SourceSansPro-Semibold.d22df054.otf",
    "revision": "d22df054702cecfc67356e5dd407022f"
  },
  {
    "url": "assets/fonts/SourceSansPro-Semibold.e8db8af2.ttf",
    "revision": "e8db8af2e317210f62cc1dd6527be550"
  },
  {
    "url": "assets/fonts/SourceSansPro-Semibold.otf.90cd4925.woff",
    "revision": "90cd49254f172e2e99411daf0d574d5f"
  },
  {
    "url": "assets/fonts/SourceSansPro-Semibold.ttf.b13c669d.woff2",
    "revision": "b13c669d61ec35a7682a892456c8d4e9"
  },
  {
    "url": "assets/fonts/SourceSansPro-SemiboldIt.41995df8.ttf",
    "revision": "41995df845594d6387bb237b512e8c0e"
  },
  {
    "url": "assets/fonts/SourceSansPro-SemiboldIt.6de08aa7.otf",
    "revision": "6de08aa7bf926c26b341cc64cf0f45bd"
  },
  {
    "url": "assets/fonts/SourceSansPro-SemiboldIt.otf.b27999d8.woff",
    "revision": "b27999d81e79da7b61cbab774097d279"
  },
  {
    "url": "assets/fonts/SourceSansPro-SemiboldIt.ttf.c474abd9.woff2",
    "revision": "c474abd9b02d9299a7944d97270357d1"
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
    "url": "assets/js/app.4b2cf1dc.js",
    "revision": "a5237f491add8e95025115bdf931d76b"
  },
  {
    "url": "awesome-board-games.html",
    "revision": "85b55e132c5dfb51ceb335f9512b1cb1"
  },
  {
    "url": "deleting-facebook.html",
    "revision": "82b4f96c99fe58711deecba467a89bc7"
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
    "revision": "20f7394bf13355d1abe57da875fddd35"
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
