avalon.ready(function () {

//LoginVM
avalon.define("login", function (vm) {
	//公共属性
	vm.User = "user";
	vm.Password = "password";
	vm.Captcha = "***";
	vm.SaveUser = false;
	vm.SavePassword = false;

	//公共方法
	/**
	 *使用User和Password属性进行登录，
	 *成功返回true，失败返回false
	*/
	vm.Login = funtion(){

	};

	/**
	 *对用户名密码进行校验
	 *成功返回true，失败返回false
	*/
	vm.Verify = funtion(){

	};

	/**
	 *注销用户
	*/
	vm.Logout = function(){

	};

});
avalon.scan();

});