var vm = new Vue({
	el: "#main",
	data: function() {
		return {
			list: [{
					shoppingNameOne: "私募（首部披露资本博弈秘密的金融...",
					shoppingJifenOne: "189",
					shoppingMarketPriceOne: "32.00",
					shoppingDangdangPriceOne: "18.90",
				},
				{
					shoppingNameOne: "小团圆（张爱玲最神秘小说遗稿）",
					shoppingJifenOne: "173",
					shoppingMarketPriceOne: "28.00",
					shoppingDangdangPriceOne: "17.30",
				},
				{
					shoppingNameOne: "不抱怨的世界(畅销全球80国的世界...",
					shoppingJifenOne: "154",
					shoppingMarketPriceOne: "24.80",
					shoppingDangdangPriceOne: "15.40",
				},
				{
					shoppingNameOne: "福玛特双桶洗衣机XPB20-07S",
					shoppingJifenOne: "358",
					shoppingMarketPriceOne: "458.00",
					shoppingDangdangPriceOne: "358.00",
				},
				{
					shoppingNameOne: "PHP和MySQL Web开发 （原书第4版）",
					shoppingJifenOne: "712",
					shoppingMarketPriceOne: "95.00",
					shoppingDangdangPriceOne: "71.20",
				},
				{
					shoppingNameOne: "法布尔昆虫记</a>（再买￥68.30即可参加“满199元减10元现金”活动）",
					shoppingJifenOne: "200",
					shoppingMarketPriceOne: "198.00",
					shoppingDangdangPriceOne: "130.70",
				}
			],
			shoppingTop: "您已选购以下商品",
			shoppingName: "商品名",
			shoppingJifen: "单品积分",
			shoppingMarketPrice: "市场价",
			shoppingDangdangPrice: "当当价",
			shoppingNumber: "数量",
			shoppingDelete: "删除",
			removeAll: "清空购物车",
			getJifen: "可获取商品积分:",
			jiFen: "1750",
			tubiao: "￥",
			zongPrice: "611.50",
			shoppingZongPrice: "商品金额总计：",
			shengQiang: "本次省钱：",
			shengQianPrice: "224.3",
		}
	},
	methods: {
		deleteYiHang: function(index) {
			this.list.splice(index, 1);
		}

	},
	computed: {
				
					// 总价
		shoppingZongPrice() {
			var price_total = 0;
			for(var i = 0; i < this.list.length; i++) {
				price_total +=
					this.list[i].price * this.list[i].number;
			}
			return price_total;
		},
	}
})