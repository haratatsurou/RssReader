google.load("feeds", "1");

function initialize() {
  //rssリーダーのインスタンス化
  var control = new google.feeds.FeedControl();
  var feedurl1 = "http://gigazine.net/news/rss_2.0/";//GigazineのRSSフィード取得
  var feedurl2 = "http://tabi-labo.com/feed/";//TABILABOのRSSフィードの取得

  control.addFeed(feedurl1, "Gigazine");
  control.addFeed(feedurl2, "TABILABO");
  control.draw(document.getElementById("feed"));
}
google.setOnLoadCallback(initialize);