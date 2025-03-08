// Function to detect the cart contents dynamically
function GetCartContents() {
    let cartItems = [];
    
    const cartSelectors = {
        "amazon.com": ".sc-product-title",  // Amazon
        "ebay.com": ".cart-bucket-lineitem .item-title",  // eBay
        "walmart.com": ".cart-item-name",  // Walmart
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

function GetProductIdFromUrl() {
    console.log("At GetProductIdFromUrl()");

    let currentUrl = window.location.href;
    console.log("Current URL:", currentUrl);

    if (currentUrl.includes('product/')) {

        const regex = /\/product\/([a-zA-Z0-9]+)\.html/;
        const productId = currentUrl.match(regex);
    
        // Extract the product ID - will change this to something more universal
        // when there's actual fashion website in project
        if (productId) {
            return productId[1]; // This is the product ID
        } else {
            return null;
        }
        
        // // Extract the product ID - old 
        // let parts = currentUrl.split('/');
        // let productId = parts[5];

        console.log("Product ID:", productId);
        return productId;
    } else {
        console.log("This is not a product page.");
        return null;
    }
}

let thisProductId = GetProductIdFromUrl();

// Send detected product ID data to the background script
chrome.runtime.sendMessage({
    action: "product_id_detected",
    website: window.location.hostname,
    product_id: thisProductId
});

