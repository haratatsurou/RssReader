(function () {
    'use strict';
    var module = angular.module('app', []);

    module.controller('AppController', function ($scope, $data) {

        $scope.feedLoad = function () {
            //RSS用のURLをxml形式を取得
            var _res = $data.feedRead("http://feeds.lifehacker.jp/rss/lifehacker/index.xml");
            var _title = "";
            var _list = [];
            _res
                .success(function (_data, status, headers, config) {
                    _title = _data.responseData.feed.title;
                    _list = _data.responseData.feed.entries;
                    $scope.rsslist = _list;
                })
                .error(function (_data, status, headers, config) {
                    //alert("ng:" + _data);
                    //return _list;
                });
        }

        $scope.showDetail = function (index) {
            var item = $scope.rsslist[index];
            
            //アプリ内ブラウザを開く
            var ref = window.open(item.link, '_blank', 'location=yes');
        };

    });

    module.factory('$data', ['$http', function ($http) {
        var data = {};

        data.feedRead = function (url) {
            var _url = url;
            var _res = $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(_url));
            //alert(_res);
            return _res;
        };

        return data;
    }]);
})();
