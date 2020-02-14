$(function(){
	//選單的active
		$('nav a').filter(function(){return this.href==location.href}).parent().addClass('active').siblings().removeClass('active')
		$('nav a').click(function(){
			$(this).parent().addClass('active').siblings().removeClass('active')	
		})
	
	$('#flipbook').turn({
						display:'double',
						acceleration: true,
						gradients: !$.isTouch,

						//elevation:50,
						when: {
							turned: function(e, page) {
								/*console.log('Current view: ', $(this).turn('view'));*/
							}
						}
					});
	
	
	
	$(window).bind('keydown', function(e){
		
		if (e.keyCode==37)
			$('#flipbook').turn('previous');
		else if (e.keyCode==39)
			$('#flipbook').turn('next');
			
	});
	
	//偵測目前第幾頁並決定要不要顯示上一頁或下一頁的按鈕
	$('.firstButton').hide();	
	$('.previousButton').hide();
	$("#flipbook").bind("turning", function(event, page, view) {
	debugger
	  let lastPage = $('#flipbook div .turn-page').length;	
	  if (page === 1) {
		 $('.firstButton').hide();	
		 $('.previousButton').hide();
		 $('.lastButton').show();
		 $('.nextButton').show();
	  }else if(page === lastPage){
		 $('.lastButton').hide();
		 $('.nextButton').hide();
		 $('.firstButton').show();
		 $('.previousButton').show();
	  }else{
		  $('.firstButton').show();
		  $('.lastButton').show();
		  $('.previousButton').show();
		  $('.nextButton').show();
	  }
	});

	
	// $(window).resize(function(){
          // $("#flipbook").turn("size", window.innerWidth*0.5,window.innerHeight*0.8);
	// });
	
	//第一頁
	$('.firstButton').click(function(){
		$('#flipbook').turn("page", '1');
	});
	//最後一頁
	$('.lastButton').click(function(){
		 let lastPage = $('#flipbook div .turn-page').length;	
		$('#flipbook').turn("page", lastPage.toString());
	});
	//上一頁
	$('.previousButton').click(function(){
		$('#flipbook').turn('previous');
	});
	
	//下一頁
	$('.nextButton').click(function(){
		$('#flipbook').turn('next');
	});
	
	//翻到指定頁數
	//$("#flipbook").turn("page", 10);
});
