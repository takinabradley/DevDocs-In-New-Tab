function closeExtension(message) {
  if (message.type === "close-extension") {
    browser.extension.getViews().forEach((view) => {
      view.window.close()
    })
  }
}

function sendToDevDocsTab(message) {
  if (message.type === "search-query") {
    setTimeout(async () => {
      try {
        await browser.tabs.sendMessage(message.tabID, message)
      } catch (err) {
        console.warn(
          "something went wrong sending the script to the DevDocs tab",
          err
        )
      }
    }, 250)
  }
}

browser.runtime.onMessage.addListener(closeExtension)
browser.runtime.onMessage.addListener(sendToDevDocsTab)
