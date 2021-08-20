chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
  chrome.runtime.onInstalled.addListener(function(details) {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.webNavigation.onBeforeNavigate.addListener(() => {
  console.log(1)
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: `console.log('executeScript')`});
  });
});

chrome.webRequest.onBeforeRequest.addListener(() => {
  console.log('onBeforeRequest');
})

chrome.browserAction.onClicked.addListener(function(tab) {
  // 监听icon是否被点击
  console.log(111);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, "toggle");
  })
});

// 接收iframe传来的信息，转发给content.js
chrome.runtime.onMessage.addListener(msg => {
  if (msg.type === 'ajaxInterceptor' && msg.to === 'background') {
    if (msg.key === 'ajaxInterceptor_switchOn') {
      if (msg.value === true) {
        chrome.browserAction.setIcon({path: {
          16: '/images/16.png',
          32: '/images/32.png',
          48: '/images/48.png',
          128: '/images/128.png',
        }});
      } else {
        chrome.browserAction.setIcon({path: {
          16: '/images/16_gray.png',
          32: '/images/32_gray.png',
          48: '/images/48_gray.png',
          128: '/images/128_gray.png',
        }});
      }
    }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {...msg, to: 'content'});
    })
  }
});

chrome.storage.local.get(['ajaxInterceptor_switchOn', 'ajaxInterceptor_rules'], (result) => {
  // 读取本地缓存数据查看插件是否开启
  if (result.hasOwnProperty('ajaxInterceptor_switchOn')) {
    if (result.ajaxInterceptor_switchOn) {
      chrome.browserAction.setIcon({path: "/images/16.png"});
    } else {
      chrome.browserAction.setIcon({path: "/images/16_gray.png"});
    }
  }
});