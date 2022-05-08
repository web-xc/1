$( function() {
			
	var endDate = "12  25, 2021 9:00:00";  // 到期时间

	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>天</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>小时</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>分</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>秒</span></div>");
	  }
	});

});
