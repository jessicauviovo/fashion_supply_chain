import { HttpAgent, Actor } from '@dfinity/agent';
//use dfx generate to generate the fashion_supply_chain.did.js file when changes are made to functions in fashion_supply_chain.mo!
import { idlFactory } from '../../src/declarations/fashion_supply_chain/fashion_supply_chain.did.js';

async function GetProductSupplyChain(companyName, productId) {
    console.log("At GetProductSupplyChain()");

    //Validate parameters
    if(companyName == null || productId == null || !companyName instanceof String || !productId instanceof String) {
        return;
    }
    
    const agent = new HttpAgent({host: "https://icp-api.io",}); //http://127.0.0.1:8000/
    //await agent.fetchRootKey(); //only need to do this for local host

    const actor = Actor.createActor(idlFactory, {
        agent,
        canisterId: "epzhr-4iaaa-aaaaj-qnm5q-cai", 
    });
    
    console.log("Company Name: ", companyName, "Product ID:", productId);
    const ethicalScore = await actor.SendEthicalScore(companyName, productId);
    console.log("Ethical Score: ", ethicalScore);

    if(ethicalScore != -1 && ethicalScore < 50) {
        let popupMessage = `The product you're eyeing has a low ethical score ${ethicalScore}/100, which means it might not be the best when it comes to things like labor rights, the environment, and animal welfare. How about checking out some other options that are a little kinder to the planet and people? It’s a small change that makes a big difference! 💚`;

        // Get the active tab in the current window
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];  // The first tab in the array is the active one
        
            // Check if the hostname matches the target website
            //if (activeTab.url.includes(website)) {
            
            // Now execute the script on the active tab
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                func: ShowPopup,  
                args: [popupMessage]  
            });
            //}
        });
    }
}

//Listener for when cart is opened 
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "cart_detected") {
        console.log("Cart detected on", message.website, "Items:", message.cartItems);
    }
});

//Listener for when a product is being viewed 
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "company_name_product_id_detected") {
        
        //Validate parameters
        if(message.product_id == null || message.company_name == null) {
            console.log("Null Company Name or Product ID");
            return;
        }

        console.log("Getting supply chain info for", message.company_name, message.product_id);        
        GetProductSupplyChain(message.company_name, message.product_id);
    }
});


// Function to show the popup directly in the content script context
function ShowPopup(customMessage) {
    console.log("At ShowPopup()");
    
    const popup = document.createElement('div');
    popup.id = 'auto-popup';
    popup.style.position = 'fixed';
    popup.style.top = '20px';
    popup.style.right = '20px';
    popup.style.width = '400px'; 
    popup.style.backgroundColor = '#fff';
    popup.style.borderRadius = '12px';
    popup.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.2)';
    popup.style.padding = '20px';
    popup.style.zIndex = '1000';
    popup.style.fontFamily = "Tahoma, sans-serif";

    const image = document.createElement('img');
    image.src = chrome.runtime.getURL('icons/logo.png'); 
    image.alt = 'Popup Image';
    image.style.width = '130px'; 
    image.style.height = 'auto'; 
    image.style.display = 'block';
    image.style.margin = '0 auto 20px'; 
  
    image.style.visibility = 'visible'; 
    image.style.maxWidth = '100%'; 
  
    const title = document.createElement('h1');
    title.textContent = 'You May Want to Reconsider';
    title.style.fontSize = '22px'; 
    title.style.color = '#333';
    title.style.textAlign = 'center'; 
    title.style.whiteSpace = 'nowrap'; 
  
    const message = document.createElement('p');
    message.textContent = customMessage;
    message.style.fontSize = '16px'; 
    message.style.color = '#777';
    message.style.textAlign = 'center'; 
    message.style.marginBottom = '20px'; 
  
    const button = document.createElement('button');
    button.textContent = 'Got It!';
    button.style.fontSize = '16px';
    button.style.padding = '15px 50px';
    button.style.backgroundColor = '#1B2845';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '20px'; 
    button.style.cursor = 'pointer';
    button.style.display = 'block';
    button.style.margin = '20px auto'; 
  
    // Event listener to close the popup
    button.addEventListener('click', () => {
      popup.remove();
    });
  
    // Append the elements to the popup
    popup.appendChild(image); 
    popup.appendChild(title);
    popup.appendChild(message);
    popup.appendChild(button);
    
    // Append the popup to the body of the document
    document.body.appendChild(popup);
}
  
