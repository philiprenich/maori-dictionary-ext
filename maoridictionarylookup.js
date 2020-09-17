browser.menus.create({
    id: "md-lookup",
    title: "Search Māori Dictionary for \"%s\"",
    contexts: ["selection"]
});

browser.menus.onClicked.addListener((info, tab) => {
    if(info.menuItemId === "md-lookup") {
        browser.tabs.create({
            "url": "https://maoridictionary.co.nz/search?keywords=" + info.selectionText
        })
    }
});