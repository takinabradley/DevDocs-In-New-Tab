async function openDevDocsInNewTab() {
  // create new tab with devdocs open
  const devDocsTab = await browser.tabs.create({
    active: true,
    url: "https://devdocs.io"
  })
  return devDocsTab
}

/* function getSearchFunc(query) {
  return `\
    console.log("${query}");\
    const searchBar = document.querySelector("._search-input");\
    const formElem = searchBar.parentElement;\
    searchBar.value = "${query}";\
    console.log(searchBar.value);\
    formElem.submit();\
  `
}

async function searchDevDocs(tab, query) {
  // run a script in that tab
  browser.tabs.executeScript(tab.id, {
    code: getSearchFunc(query)
  })
} */

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
  /* searchDevDocs(devDocsTab, input.value) */
  closeExtension()
})
