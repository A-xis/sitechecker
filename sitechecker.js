function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true});
}
var parser = document.createElement('a');
document.addEventListener("click", function(e) {
  function callOnActiveTab(callback) {
    getCurrentWindowTabs().then((tabs) => {
      for (var tab of tabs) {
        if (tab.active) {
          parser.href = tab.url;
          callback(tab, tabs);
        }
      }
    });
  }

  if (e.target.id === "SSLLabs") {
    callOnActiveTab((tab, tabs) => {
      browser.tabs.create({url: "https://www.ssllabs.com/ssltest/analyze.html?d=" + parser.hostname});
    });
  }

  else if (e.target.id === "observatory") {
    callOnActiveTab((tab, tabs) => {
      browser.tabs.create({url: "https://observatory.mozilla.org/analyze.html?host=" + parser.hostname});
    });
  }
  else if (e.target.id === "imirhil") {
    callOnActiveTab((tab, tabs) => {
      browser.tabs.create({url: "https://tls.imirhil.fr/https/" + parser.hostname});
    });
  }
  else if (e.target.id === "securityheaders") {
    callOnActiveTab((tab, tabs) => {
      browser.tabs.create({url: "https://securityheaders.io/?followRedirects=on&hide=on&q=" + parser.hostname});
    });
  }
  else if (e.target.id === "htbridge") {
    callOnActiveTab((tab, tabs) => {
      browser.tabs.create({url: "https://www.htbridge.com/ssl/"});
    });
  }


  e.preventDefault();
});


browser.browserAction.setBadgeText({text: '?'});