if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/uni/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni/uni-search-bar/uni-search-bar?hash=5c8ed68a0d6d2ef21ea9d122df57622cdc1156d5');
require('../../components/uni/uni-grid/uni-grid?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni/uni-grid-item/uni-grid-item?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/foodlist/foodlist?hash=5c8ed68a0d6d2ef21ea9d122df57622cdc1156d5');
require('../../components/uni/uni-load-more/uni-load-more?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/postbars/postBars-xuchen?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/elite/elite?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/tab/tab2?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-transition/uni-transition?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup?hash=b19dd0d6a9bd454954ae3c14da7d5cdd40447fb6');
require('../../components/share-btn/share-btn?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/cartlist/cartlist?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/m-icon/m-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/m-input?hash=f0c33a72036e350f447a1e7381f703ef53b0bbfe');
require('../../components/uni/uni-transition/uni-transition?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni/uni-popup/uni-popup?hash=1a2861190ef503cc10f90cf417bad38db396ce6a');
require('../../components/uni/uni-popup/uni-popup-message?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni/uni-popup/uni-popup-dialog?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/index/index?hash=4eec146774746d01e9c3e4378ef2e6da154cbcc6');
require('../../pages/theme/theme?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/video/video?hash=7d352acf3e53b2731fc1798d481c354517cae400');
require('../../pages/my/my?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/zaoju/zaoju?hash=074b2d134e79e125cfb8dfb98f2a82097a88febf');
require('../../pages/square/square?hash=3d28e8a1aa873826001169759b54027ab7d90c76');
require('../../pages/fooddetail/fooddetail?hash=d04e58bc80c497d6ee4e2fb03b11f416e38881ad');
require('../../pages/cart/cart?hash=1462f7271c12ffe85a98ad9d73ac985443abc327');
require('../../pages/login/login?hash=6897e903d083952ecd6187542adcad382dab05ba');
require('../../pages/themeDetails/themeDetails?hash=1f5bc3bf31c62dd8670be54183edb9ba91f514fb');
require('../../pages/search/search?hash=af130c62db4b4f91a04b85cf8ff0a32268fa4357');
require('../../pages/collect/collect?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/lottery/lottery?hash=4b987550c561dbcf4b3e4301ebe2839199e102a0');
require('../../pages/lotteryDetail/lotteryDetail?hash=4b987550c561dbcf4b3e4301ebe2839199e102a0');
require('../../pages/videoDetail/videoDetail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/postBarsDetail/postBarsDetail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/votedetail/votedetail?hash=7d352acf3e53b2731fc1798d481c354517cae400');
require('../../pages/share/share?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/register/register?hash=742e809a6297a80a6aac01c26a051863da6a2973');
require('../../pages/user/user?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}