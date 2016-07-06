google.load("feeds", "1");

function initialize() {
  var control = new google.feeds.FeedControl();
  var feedurl1 = "http://d.hatena.ne.jp/mltmdkana/rss";

  control.addFeed(feedurl1, "HOGE3");
  control.draw(document.getElementById("feed"));
}
google.setOnLoadCallback(initialize);