function closeExtension(message) {
  if (message.type === "close-extension") {
    browser.extension.getViews().forEach((view) => {
      view.window.close()
    })
  }
}

browser.runtime.onMessage.addListener(closeExtension)
