function searchDevDocs(message) {
  if (message.type === "search-query") {
    const searchBar = document.querySelector("._search-input")
    const formElem = searchBar.parentElement
    searchBar.value = message.data
    formElem.submit()
  }
}

browser.runtime.onMessage.addListener(searchDevDocs)
