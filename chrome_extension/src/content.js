let thisProductId;
let thisCompanyName;

// Function to detect the cart contents dynamically
function GetCartContents() {
    let cartItems = [];
    
    const cartSelectors = {
        "amazon.com": ".sc-product-title",  
        "ebay.com": ".cart-bucket-lineitem .item-title",  
        "walmart.com": ".cart-item-name",  
    };

    let website = window.location.hostname.replace("www.", "");  
    let selector = cartSelectors[website];

    if (selector) {
        document.querySelectorAll(selector).forEach((item) => {
            cartItems.push(item.innerText.trim());
        });
    }
    return cartItems;
}

// Send detected cart data to the background script
chrome.runtime.sendMessage({
    action: "cart_detected",
    website: window.location.hostname,
    cartItems: GetCartContents()
});

//Extract company name and product ID from current URL - modify to include more fashion companies
function GetCompanyNameAndProductIdFromUrl() {
    console.log("At GetCompanyNameAndProductIdFromUrl()");

    let currentUrl = window.location.href;
    console.log("Current URL:", currentUrl);

    if (currentUrl.includes('FashionCompany')) {

        thisCompanyName = "FashionCompany";

        const regex = /\/product\/([a-zA-Z0-9]+)\.html/;
        const productId = currentUrl.match(regex);
    
        if (productId) {
            thisProductId = productId[1]; // This is the product ID
        } else {
            thisProductId =  null;
        }

    } else if (currentUrl.includes('shein')){

        thisCompanyName = "Shein";
        const productId = currentUrl.match(/-p-(\d+)\.html/);

        if (productId) {
            thisProductId = productId[1]; 
        } else {
            thisProductId = null;
        }
    }
    
    else {
        console.log("This is not a product page.");
        thisCompanyName = null;
        thisProductId = null;
    }
}

GetCompanyNameAndProductIdFromUrl();

// Send detected company name and product ID data to the background script
chrome.runtime.sendMessage({
    action: "company_name_product_id_detected",
    company_name: thisCompanyName,
    product_id: thisProductId
});

