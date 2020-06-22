var navcontent = {
    template: ` <div class="index-navbar background-color-dominant">
    <div class="container background-color-dominant">
        <nav class="navbar navbar-expand-lg navbar-light background-color-dominant">
            <a class="navbar-brand d-block d-sm-none" href="#">
                <img src="./images/logo-phone-white.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav w-100">
                    <li class="nav-item">
                        <a class="nav-link" id="index" href="index.html">首页</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  id="brand_intro" href="brand_intro.html">品牌介绍</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  id="product_display" href="product_display.html">产品展示</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  id="coop" href="coop.html">加盟合作</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  id="store_image" href="store_image.html">门店形象</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  id="news_info" href="news_info.html">新闻资讯</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  id="contact_us" href="#zf-msg-user">联系我们</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div> `,
}

var footercontent = {
    template: ` <footer class="index-footer background-color-dominant">
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-5">
                <div class="footer-introduction mb-4">
                    <span class="mdi mdi-phone-classic"></span>
                    <div class="text">
                        <span>全国免费加盟热线</span>
                        <span>400-8528-908</span>
                    </div>
                </div>
                <div class="footer-introduction mb-4">
                    <span class="mdi mdi-phone-classic"></span>
                    <div class="text">
                        <span>公司地址</span>
                        <span>xxxxxxxxxxxxxxx</span>
                    </div>
                </div>
                <div class="qrcode d-flex">
                    <div class="weixin">
                        <div class="weixin-qrcode"
                            style="width: 120px;height: 120px; background-color: #fff;margin:auto">
                        </div>
                        <span>微信公众号</span>
                    </div>
                    <div class="onlineshop">
                        <div class="onlineshop-qrcode"
                            style="width: 120px;height: 120px; background-color: #fff;margin:auto"></div>
                        <span>线上商城</span>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center pt-3" id="zf-msg-user">
                <h4>领取机密资料：<br>预约资深创业顾问在线指导</h4>
                <div class="form-group d-flex">
                    <label for="username">姓名：</label>
                    <input type="text" class="form-control" name="username" id="username" placeholder="请输入姓名">
                </div>
                <div class="form-group d-flex">
                    <label for="userphone">手机：</label>
                    <input type="text" class="form-control" name="userphone" id="userphone" placeholder="请输入手机号码">
                </div>
                <button type="button" class="btn btn-danger mt-2 mb-4">立即预约</button>
            </div>
        </div>
    </div>
    <div class="copyright">
        <div class="container">
            <div class="row py-2">
                <span>
                    版权所有：安徽辣圈餐饮管理有限公司 <br>
                    ICP备案号：xxxxxxxxxxxx
                    创业有风险，投资需谨慎
                </span>
            </div>
        </div>
    </div>
</footer> `,
}

new Vue({
    el: '#header-vue',
    components: { navcontent },
})
new Vue({
    el: '#footer-vue',
    components: { footercontent },
})
