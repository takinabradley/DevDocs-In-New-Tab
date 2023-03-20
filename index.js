async function openDevDocsInNewTab() {
  // create new tab with devdocs open
  const devDocsTab = await browser.tabs.create({
    active: true,
    url: "https://devdocs.io"
  })
  return devDocsTab
}

function closeExtension() {
  browser.runtime.sendMessage({ type: "close-extension" })
}

function sendQueryToTabScript(tab, query) {
  browser.runtime.sendMessage({
    type: "search-query",
    tabID: tab.id,
    data: query
  })
}

const input = document.getElementById("devdocs-search")
input.focus()

document.addEventListener("submit", async (e) => {
  e.preventDefault()
  const devDocsTab = await openDevDocsInNewTab()
  sendQueryToTabScript(devDocsTab, input.value)
  closeExtension()
})
