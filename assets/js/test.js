$(function() {
    embed = $("#embed");
    console.log(embed.html());
    embed.html("<iframe src=\"http://192.168.1.54\"></iframe>");
	embed.append("<h1 id=\"hi\">Hello world!</h1>");
});