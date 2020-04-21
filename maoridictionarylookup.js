browser.menus.create({
    id: "md-lookup",
    title: "Lookup \"%s\" in Māori Dictionary",
    contexts: ["selection"]
});

browser.menus.onClicked.addListener((info, tab) => {
    if(info.menuItemId === "md-lookup") {
        browser.tabs.create({
            "url": "https://maoridictionary.co.nz/search?keywords=" + info.selectionText
        })
    }
});