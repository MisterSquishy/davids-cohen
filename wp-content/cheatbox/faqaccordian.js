/*
 engage script by using 'faq' class on ul element
 parameter css classes 'qa-titles' for question and answer titles and 'qa-showall' to allow multiple answer to be shown at the same time
*/

(function($) {
	
	$(function() {
		var faqAccordian = (function() {
		
			var answers = $('.answer');
			var questions = $('.question');
			var	i = 0;
			
			return {
			
				accordianAction: function() {
		
					if(answers) answers.hide();
					
					// add click toggle on question to show answer
					if(questions) {
						$('head').append('<link rel="stylesheet" href="/wp-content/cheatbox/accordianstyle.css" type="text/css" />');
						$('.question').each(function() {
							$(this).addClass('closed');
							$(this).click(function() {
								$('.current').removeClass('current');
								$(this).addClass('current')
								if($('ul.faq').hasClass('qa-showall') == false) {
									answers.hide();
									questions.removeClass('opened').addClass('closed');
								}
								faqAccordian.doAnimation($(this));
							});
							i++;
						});
					}
			
					// adds question and answer titles if user adds 'qa-titles' class
					if($('ul.faq').hasClass('qa-titles')) {
						answers.prepend('<span>Answer: </span>');
						questions.prepend('<span>Question: </span>');
						$('ul.faq li').css({marginBottom:15});
					}
				},
				doAnimation: function(target) {
					target.toggleClass('closed opened').next().animate({opacity:'toggle',height:'toggle'}, 500);
				}
			};
		})();
		faqAccordian.accordianAction();
	});
})(jQuery);

