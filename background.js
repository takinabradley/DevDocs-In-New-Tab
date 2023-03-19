function openDevDocsInNewTab() {
  browser.tabs.create({
    active: true,
    url: "https://devdocs.io"
  })
}

browser.browserAction.onClicked.addListener(openDevDocsInNewTab)
