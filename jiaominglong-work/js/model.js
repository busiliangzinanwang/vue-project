Vue.component("my-modal",{
			template: `
					<div>
						<p>{{ todo }}</p>
					</div>
				`,
			props: {
				todo:{
					type:String,
					default:""
				}
			}
			
			
		});
		var vm = new Vue({
			el:".motaikuang",
			data: function () {
				return {
					queDing:"确定",
					quXiao:"取消",
					xianShi:false
				}
			},
			methods:{
				dianJi:function(){
					this.xianShi = true;
				}
			}
		})