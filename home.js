var bet =  JSON.parse('{"urls": ["https://twitter.com/KarateGent11/status/1006980790675263488", "https://twitter.com/realtimaster/status/1006938807097348096", "https://twitter.com/candyandy951/status/1006938420315385858", "https://twitter.com/clfowler07/status/1006894018217865216", "https://twitter.com/oditius/status/1006856078859079680", "https://twitter.com/Scottsbriefs/status/1006590261886103552", "https://twitter.com/scrubs_and_ink/status/1006571191883194369", "https://twitter.com/carley02/status/1006567445585383425", "https://twitter.com/Gibbbbyy/status/1006530872479244288", "https://twitter.com/jamesmdowns/status/1006417148514668545", "https://twitter.com/AandGNewsDonkey/status/1006391156555460609", "https://twitter.com/_OGbaby_/status/1006376915874136064", "https://twitter.com/rxc25/status/1006285499596541952", "https://twitter.com/_cortnaaay_/status/1006071713627422720", "https://twitter.com/aliyahbarro/status/1006061361367904256", "https://twitter.com/CrispinCowan0/status/1006045609717985280", "https://twitter.com/candras41896/status/1007001558515703808", "https://twitter.com/dandizette/status/1006980939342405634", "https://twitter.com/aisling206/status/1006967252070039552", "https://twitter.com/awkelly2004/status/1006952160771362817", "https://twitter.com/shesfinetoo/status/1006948674566610944", "https://twitter.com/Technikult/status/1006947359169961984", "https://twitter.com/kshark001/status/1006938540339589120", "https://twitter.com/ESPNFrankie/status/1006935826171908096", "https://twitter.com/fkaLuna_/status/1006932159368744960", "https://twitter.com/rnold93/status/1006931798885109766", "https://twitter.com/Aries80sBaby124/status/1006930300897808384", "https://twitter.com/hf_benoit/status/1006909819553484801", "https://twitter.com/joshclackler/status/1006734936638918657", "https://twitter.com/SmelleyLily/status/1006659093241753601", "https://twitter.com/SmelleyLily/status/1006658996005232643", "https://twitter.com/PABCollision/status/1006584789401415680", "https://twitter.com/IlliniToffee/status/1006578958693855232", "https://twitter.com/Naked_Nate_/status/1006321196382613504", "https://twitter.com/GonzoDeMann/status/1006264470287650816", "https://twitter.com/basicwaffel/status/1006254151943249920", "https://twitter.com/srsbrokers/status/1006240482333265920", "https://twitter.com/KyleFaheyNFL/status/1006187600187674624", "https://twitter.com/state_farm_guy0/status/1005992413909979136", "https://twitter.com/MistaC87/status/1005984065504227329"]}');
			var index = 0;
			function scrollTo(element, to, duration) {
			    var start = element.scrollTop,
			        change = to - start,
			        currentTime = 0,
			        increment = 20;
			        
			    var animateScroll = function(){        
			        currentTime += increment;
			        var val = Math.easeInOutQuad(currentTime, start, change, duration);
			        element.scrollTop = val;
			        if(currentTime < duration) {
			            setTimeout(animateScroll, increment);
			        }
			    };
			    animateScroll();
			}
			Math.easeInOutQuad = function (t, b, c, d) {
			  t /= d/2;
				if (t < 1) return c/2*t*t + b;
				t--;
				return -c/2 * (t*(t-2) - 1) + b;
			};
			function hello()
			{
				//alert('hi');
				document.getElementById("buttonContainer").style.transition = "all 2s";
				document.getElementById("buttonContainer").style.opacity = "0";
				scrollTo(document.body, screen.height + 1000, 1250);   
			}
			function right()
			{
				if(index < bet.urls.length-1)
					index++;
				refreshTweet();
			}
			function left()
			{
				if(index > 0)
					index--;
				refreshTweet();
			}
			function refreshTweet()
			{
				var myNode = document.getElementById("tweet");
				while (myNode.firstChild) {
				    myNode.removeChild(myNode.firstChild);
				}
				$("#tweet").append('<blockquote class="twitter-tweet" data-lang="en"><a href="'+bet.urls[index]+'"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></head>/script>');
			}
			function getTweets()
			{
				console.log(bet);
				var myNode = document.getElementById("tweet");
				while (myNode.firstChild) {
				    myNode.removeChild(myNode.firstChild);
				}
				console.log(bet.urls[0]);
				$("#tweet").append('<blockquote class="twitter-tweet" data-lang="en"><a href="'+bet.urls[0]+'"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></head>/script>');
			}