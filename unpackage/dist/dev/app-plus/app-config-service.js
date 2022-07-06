
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/xiangqing/xiangqing","pages/kind/kind","pages/shopping/shopping","pages/my/my","pages/login/login","pages/address/address","pages/addAddress/addAddress","pages/editAddress/editAddress","pages/set/set","pages/goodsList/goodsList","pages/dingdan/dingdan","pages/mydingdan/mydingdan","pages/pay/pay","pages/dingdanxiangqing/dingdanxiangqing","pages/myFav/myFav"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"gray","selectedColor":"red","backgroundColor":"white","borderStyle":"","list":[{"pagePath":"pages/index/index","iconPath":"./static/tabBar/home.png","selectedIconPath":"static/tabBar/home-o.png","text":"首页"},{"pagePath":"pages/kind/kind","iconPath":"./static/tabBar/category.png","selectedIconPath":"static/tabBar/category-o.png","text":"分类"},{"pagePath":"pages/shopping/shopping","iconPath":"./static/tabBar/cart.png","selectedIconPath":"static/tabBar/cart-o.png","text":"购物车"},{"pagePath":"pages/my/my","iconPath":"./static/tabBar/my.png","selectedIconPath":"static/tabBar/my-o.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"聚新商城(刘昕)","compilerVersion":"3.1.18","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"titleNView":{"searchInput":{"align":"center","placeholder":"请输入关键字","placeholderColor":"rgb(129,131,134)","borderRadius":"50upx","backgroundColor":"rgb(235,235,235)"}}}},{"path":"/pages/xiangqing/xiangqing","meta":{},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"详情展示","titleNView":{"type":"transparent"}}},{"path":"/pages/kind/kind","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类","navigationBarBackgroundColor":"white"}},{"path":"/pages/shopping/shopping","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"购物车","navigationBarBackgroundColor":"white"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/login/login","meta":{},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"","titleNView":{"type":"transparent"}}},{"path":"/pages/address/address","meta":{},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"收货地址","navigationBarBackgroundColor":"white"}},{"path":"/pages/addAddress/addAddress","meta":{},"window":{"navigationBarTitleText":"新增收货地址","navigationBarBackgroundColor":"white"}},{"path":"/pages/editAddress/editAddress","meta":{},"window":{"navigationBarTitleText":"修改收货地址","navigationBarBackgroundColor":"white"}},{"path":"/pages/set/set","meta":{},"window":{"navigationBarTitleText":"设置","navigationBarBackgroundColor":"white"}},{"path":"/pages/goodsList/goodsList","meta":{},"window":{"navigationBarTitleText":"商品列表","navigationBarBackgroundColor":"white"}},{"path":"/pages/dingdan/dingdan","meta":{},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"创建订单","navigationBarBackgroundColor":"white"}},{"path":"/pages/mydingdan/mydingdan","meta":{},"window":{"navigationBarTitleText":"我的订单","navigationBarBackgroundColor":"white"}},{"path":"/pages/pay/pay","meta":{},"window":{"navigationBarTitleText":"支付","navigationBarBackgroundColor":"white"}},{"path":"/pages/dingdanxiangqing/dingdanxiangqing","meta":{},"window":{"navigationBarTitleText":"订单详情","navigationBarBackgroundColor":"white"}},{"path":"/pages/myFav/myFav","meta":{},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"我的收藏","navigationBarBackgroundColor":"white"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
