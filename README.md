# 📦 Decentralized Fashion Supply Chain

## 🚀 Overview
The solution is a **blockchain-based** platform that tracks supply chain data of fashion companies, ensuring **transparency, fairness, and real-time data**. Users interact with the application by installing the Chrome extension and it will alert them whenever they are shopping and viewing products with low ethical scores, encouraging more responsible shopping choices.
---

## 📌 Features
✔ **Blockchain-Based Supply Chain Transparency** A decentralized, immutable, and transparent record of fashion companies and their supply chains, ensuring fair and ethical practices.
✔ **Real-Time Ethical Scoring** Each product is scored based on its ethical impact, considering factors like labor conditions, environmental impact, and sustainability.
✔ **Chrome Extension Integration** A convenient Chrome extension that automatically reviews products while users shop online, displaying real-time ethical scores and sending alerts for low-scoring products.
✔ **Decentralized and Immutable Data** A blockchain-based system ensuring data integrity and preventing direct manipulation from large companies, providing consumers with reliable and trustworthy information.

---

## 🛠️ Installation & Setup

## How to Install the Chrome Extension

Follow these steps to install and test the extension locally:

### 1. **Download the Extension Files**
   - The extension is within this repo in the folder chrome_extension.

### 2. **Open Chrome and Go to Extensions**
   - Open Google Chrome.
   - In the address bar, type `chrome://extensions/` and press **Enter**.

### 3. **Enable Developer Mode**
   - On the Extensions page, toggle **Developer mode** to **ON** at the top right corner.

### 4. **Load the Unpacked Extension**
   - Click the **Load unpacked** button.
   - A file dialog will open. Navigate to the folder where your extension file is located ashion_supply_chain/chrome_extension.

### 5. **Test the Extension**
   - Load the sample Fashion Company website https://jessicauviovo.github.io/FashionCompany/index.html and interact with it. Compare data there with the data in the Blockchain, see link

### 7. **Remove the Extension (Optional)**
   - If you no longer want to use the extension, go to `chrome://extensions/`, find your extension, and click **Remove**.

---
## 📦 Dependencies & Tools

### **1️⃣ Install ICP SDK (`dfx`)**
```bash
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"