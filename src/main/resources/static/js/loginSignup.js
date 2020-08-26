function signup() {
	$('.username__check').hide();
	$('#password').hide();
	$('#signup_btn').remove();
	$('#login_btn').remove();
	$('.social_login').empty();
	$('#signup_form').append(
		'<input id="email" class="text-input1" type="email" placeholder=" 이메일을 입력해주세요."/>',
		'<input id="ph_num" class="text-input1" type="tel" placeholder=" 연락처를 입력해주세요."/>',
		'<input id="address" class="text-input1" type="text" placeholder=" 주소를 입력해주세요."/>',
		'<input id="bank_name" class="text-input1" type="text" placeholder=" 은행명을 입력해주세요. ex)신한"/>',
		'<button id="signup_btn" class="btn2" onclick="javascript:signupProc()" style="width: 435px;height: 37px;border-radius: 0.4vw;border: 0.5px;background: #da553b;color: white;cursor: pointer;margin-bottom: 50px;">이 정보로 회원가입</button>'
	);
}

function signupProc() {
	
	let data = {
			userName: $("#username").val(),
			password: $("#password").val(),
			email: $("#email").val(),
			phNum: $("#ph_num").val(),
			address: $("#address").val(),
			bankName: $("#bank_name").val()
	}
	
	$.ajax({
		
		type : "POST",
		url : "/signUpProc",
		data : JSON.stringify(data),
		contentType : "application/json; charset=UTF-8",
		dataType : "json"
			
	}).done(function(resp) {
		
		if(resp.statusCode == 1) {
			alert("회원가입이 완료되었습니다.");
			location.href="/loginOrSignup";
		}
		
	}).fail(function(error) {
		alert("회원가입에 실패하였습니다.")
		console.log(error);
	})

}