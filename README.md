# 📦 Decentralized Fashion Supply Chain

## 🚀 Overview
The solution is a **blockchain-based** platform that tracks supply chain data of fashion companies, ensuring **transparency, fairness, and real-time data**. Users interact with the application by installing the Chrome extension and it will alert them whenever they are shopping and viewing products with low ethical scores, encouraging more responsible shopping choices.
---

## 📌 Features

- ✔ **Blockchain-Based Supply Chain using Internet Computer Protocol**: A decentralized, immutable, and transparent record of fashion companies and their supply chains, ensuring fair and ethical practices.
- ✔ **Real-Time Ethical Scoring**: Each product is scored based on its ethical impact, considering factors like labor conditions, environmental impact, and sustainability.
- ✔ **Chrome Extension Integration**: A convenient Chrome extension that automatically reviews products while users shop online, displaying real-time ethical scores and sending alerts for low-scoring products.
- ✔ **Decentralized and Immutable Data**: A blockchain-based system ensuring data integrity and preventing direct manipulation from large companies, providing consumers with reliable and trustworthy information.

---

## 🛠️ Installation & Setup

## How to Install and Test the Chrome Extension

1. **Clone or Download this Repository**
   - Clone the repository or download the ZIP file to your local machine:
     ```bash
     git clone https://github.com/jessicauviovo/fashion_supply_chain.git
     ```
     OR Select Code -> Download Zip then extract the zip on your local system
2. **Install the Chrome Extension**
   - Follow these steps to install the **fashion_supply_chain** extension for testing:
     1. Open Google Chrome and go to `chrome://extensions/`.
     2. Enable **Developer mode** at the top right.
     3. Click **Load unpacked** and select the folder **chrome_extension** that's inside **fashion_supply_chain**.
     4. The extension will appear in the Chrome toolbar.
        
3. **Testing the Extension**
   - Visit the [**FashionCompany**](https://jessicauviovo.github.io/FashionCompany/index.html) website
   - Browse the products displayed on the page.
   - The Chrome extension will display a popup if the ethical score for each product is less than 50 (max score is 100), based on the supply chain data.
   - You can see what is stored in the Blockchain database via the [**deployed canister**](https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=epzhr-4iaaa-aaaaj-qnm5q-cai).
      - You can call the functions GetRecords() or SendEthicalScore(companyName, productID) -> use FashionCompany as the companyName and WW2123 or DH2938 or DU38Y4 or JS4637 as the productID 
   - For a more realistic test, can also test using the Shein website (please note that all product data entered into the blockchain database for Shein is all fictitious)
      - open a product page on Shein, note the company name and product ID from the URL: ![image](https://github.com/user-attachments/assets/846e94ff-ce9b-4e46-a64b-ed779c35beb1)
      - add new record to the [deployed canister](https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=epzhr-4iaaa-aaaaj-qnm5q-cai) (use AddRecord function and complete the fields, make sure companyName and productID match the prior step)
      - Optional - use the SendEthicalScore function (use companyName and productID as parameters) in the [deployed canister](https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=epzhr-4iaaa-aaaaj-qnm5q-cai) to see the ethical score
      - Reload the product page on Shein and if the ethical score is less than 50, then the popup should show
   - If you no longer want to use the extension, go to `chrome://extensions/`, find your extension, and click **Remove**.

## Example Products

Here are the example products on the [**FashionCompany**](https://jessicauviovo.github.io/FashionCompany/index.html) website:

- **Blue Jacket**  
  Ethical Score: 30/100  (score less than 50 so popup shown in browse)

- **Red Dress**  
  Ethical Score: 73/100  

- **Purple Hat**  
  Ethical Score: 45/100  (score less than 50 so popup shown in browse)
- **Orange Sweater**  
  Ethical Score: 42/100  (score less than 50 so popup shown in browse)
  
---
## 📦 Dependencies & Tools

### Core Dependencies:
- **HTML, CSS, JavaScript**: Basic web technologies for extension development.
- **Manifest File (`manifest.json`)**: Configuration for defining extension settings.
- **Motoko**: Native language for building canisters (smart contracts).
  - Installation: `npm install -g dfx`
- **DFX**: The command-line interface for interacting with Internet Computer.
  - Installation: `sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"`


### Development Tools:
- **Webpack**: Bundles JavaScript and assets.
  - Installation: `npm install --save-dev webpack webpack-cli`
- **Babel**: Transpiles modern JavaScript.
  - Installation: `npm install --save-dev @babel/core @babel/preset-env`
- **IC SDK**: Provides the tools for building decentralized applications on Internet Computer.
