(function() {
    'use scrict';
    var module = angular.module('app', ['onsen']);
    module.controller('AppController'),
        function($scope, $date) {
            $scope.feedLoad = function() {
                var _res = $date.feedLoad("http://sankei.jp.msn.com/rss/news/points.xml");
                var _title = "";
                var _lits = [];
                _res
                    .success(function(_data, status, headers, config) {
                        _title = _data.responseData.feed.title;
                        _lits = _data.responseData.feed.entries;
                        $scope.rsslist = _lits;
                    })
                    .error(function(_data, status, headers, config) {

                    });
            }
            $scope.showDeail = function(index) {
                var item = $scope.resslist[index];
                var ref = window.open(item.link, '_blank', 'location=yes');
            };
        };


    module.factory('$date', ['$http', function($http) {
        var data = {};

        data.feedRead = function(url) {
            var _url = url;
            //jsonファイルに変換する　いらないかも？
            var _res = $http.jsonp('hogehoge' + encodeURIComponent(_url));
            return _res;
        };
        return data;
    }]);

})();