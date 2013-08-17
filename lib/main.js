var Widget = require("widget").Widget;
var tabs = require('tabs');
var pageMod = require("page-mod");
var storage = require("simple-storage").storage;
var pm;
storage.b = 0;

exports.main = function() {

    new Widget({
        id: "SNS Block",
        label: "SNS Block",
        contentURL: "../Data/uncheck.png",
        onClick: function(event) {
            if (storage.b == 0) {
                storage.b = 1;
                this.contentURL = 'http://www.dl.kuis.kyoto-u.ac.jp/~takemura/favicon/check.png';
                pm = pageMod.PageMod({
                    include: ["https://www.facebook.com*", "https://twitter.com*", "http://mixi.jp*", "https://www.tumblr.com*", "https://myspace.com*", "http://www.linkedin.com*"],
                    contentScript: "location.href = 'http://image.space.rakuten.co.jp/lg01/79/0000003579/60/img89bd766c3yw60s.jpeg';",
                    contentScriptWhen: "start"
                });
            } else {
                storage.b = 0;
                this.contentURL = 'http://www.dl.kuis.kyoto-u.ac.jp/~takemura/favicon/uncheck.png';
                pm.destroy();
            }

        }
    });
};