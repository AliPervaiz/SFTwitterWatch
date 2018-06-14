var index = 0;
function scrollTo(element, to, duration) {
    var start = element.scrollTop,change = to - start,currentTime = 0,increment = 20;  
    function animateScroll()
    {        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {setTimeout(animateScroll, increment);}
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
	document.getElementById("buttonContainer").style.transition = "all 2s";
	document.getElementById("buttonContainer").style.opacity = "0";
	scrollTo(document.body, screen.height -90, 1250); 
}
function right()
{
	if(index < datas.urls.length-1) index++;
	refreshTweet();
}
function left()
{
	if(index > 0) index--;
	refreshTweet();
}
function refreshTweet()
{
	var myNode = document.getElementById("tweet");
	while (myNode.firstChild) myNode.removeChild(myNode.firstChild);
	console.log(datas.urls + " " + index + " " + datas.urls[index]);
	$("#tweet").append('<blockquote class="twitter-tweet" data-lang="en"><a href="'+datas.urls[index]+'"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></head>/script>');
	
}
function getTweets()
{
	var myNode = document.getElementById("tweet");
	while (myNode.firstChild) myNode.removeChild(myNode.firstChild);
	console.log(datas);
	$("#tweet").append('<blockquote class="twitter-tweet" data-lang="en"><a href="'+datas.urls[0]+'"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></head>/script>');
}
