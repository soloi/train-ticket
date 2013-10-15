avalon.ready(function () {

//SearchVM
avalon.define("search", function (vm) {
	vm.$title = "余票查询"
	vm.$back = function(){
		window.history.back();
	}

	vm.FromCity = "广州";
	vm.ToCity = "重庆";
	vm.FromDate = "2013-10-10";
	vm.IsKuaiChe = false;
	vm.IsTeKuai = true;
	vm.IsZhiDa = true;
	vm.IsDongChe = true;
	vm.IsGaoTie = true;

	//候选城市列表，默认显示热门城市。
	//如果在城市输入框中输入了关键字，则显示过滤后的结果
	vm.CandidateCities = [
        "上海", "北京", "广州", "昆明",
        "西安", "成都", "深圳", "厦门",
        "南京", "重庆", "杭州", "大连",
        "长沙", "海口", "青岛", "沈阳",
        "三亚", "济南", "武汉", "郑州",
        "贵阳", "南宁", "福州", "天津",
    ];

    /**
     * 交换城市起点与终点
    */
    vm.ExchangeCity = function (e) {
        var tmp = vm.FromCity;
        vm.FromCity = vm.ToCity;
        vm.ToCity = tmp;
    };

    vm.SelectFromCity = function(city){
    	vm.FromCity = city;
    }

	/**
	 * 校验查询条件
	*/
	vm.Verify = function(){

	}

	/**
	 * 使用查询条件搜索车票，并跳转到车票查询结果页
	*/
	vm.Search = function(){

	}

	/**
	 * 加载页面时执行
	*/
	function init() {
		var config = getConfig();
		//vm.extend(config);
	}

	/**
	 * 从url或hash中获取预定义参数
	*/
	function getConfig() {
		// body...
	}

	init();
});
avalon.scan();

});