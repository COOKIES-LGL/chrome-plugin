export function chromeOnMessage() {
  chrome.runtime.onMessage.addListener(({ type, to, url, match }) => {
    if (type === 'ajaxInterceptor' && to === 'iframe') {
      const { interceptedRequests } = iframeLinkList;
      if (!interceptedRequests[match]) interceptedRequests[match] = [];

      const exits = interceptedRequests[match].some(obj => {
        if (obj.url === url) {
          obj.num++;
          return true;
        }
        return false;
      });

      if (!exits) {
        interceptedRequests[match].push({ url, num: 1 });
      }
    }
  });
}

export function chromeSendMessage(target, message) {
  chrome.runtime.sendMessage(chrome.runtime.id, {
    type: 'ajaxInterceptor',
    to: 'background',
    iframeScriptLoaded: true,
  });
}
