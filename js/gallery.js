$(function() {
    	$('img').on('click', function() {
			$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
			$('#enlargeImageModal').modal('show');
		});

		$('#modal').on('show', function () {
	       $(this).find('.modal-body').css({
	              width:'auto', //probably not needed
	              height:'auto', //probably not needed 
	              'max-height':'100%'
	       });
	});
});