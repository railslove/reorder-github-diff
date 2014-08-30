var pageMod = require('sdk/page-mod');
var self = require('sdk/self');
pageMod.PageMod({
  include: new RegExp(".+github\.com.+/pull/.+"),
  contentScriptFile: [self.data.url("jquery-2.1.1.min.js"), self.data.url("reorder.js")]
});


