	$(document).ready(function() {

		$("#postBtn").click(function() {	
			
			var username = $("#username").val();
			var content = $("#content").val();

			$.ajax({
				url: "http://localhost:8080/twitterlite-ws-1.0-SNAPSHOT/tweets",
				type: "POST",
				data: { 
					username: username,
				    content: content 
				}
			});
		});
	});