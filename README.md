# 🚫 Block Shorts & TikTok & VK Clips — Browser Extension

This browser extension for **Chrome** and **Microsoft Edge** blocks access to distracting short-form content on **YouTube Shorts** and **TikTok**, redirecting users to a peer-reviewed scientific article on the negative impact of such content on mental health.

---

## ✅ Features

- 🔒 Blocks access to:
  - `https://www.youtube.com/shorts/*`
  - `https://www.tiktok.com/*`
  - `https://www.vk.com/*`
- 🔁 Automatically redirects to:  
  [📄 Scientific article on short-form video harm](https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-024-19191-5?utm_source)
- 🧠 Works with:
  - Direct URL access
  - Navigation from YouTube homepage (via internal scripts)
- ⚙️ Built using **Manifest V3**

---

## 🗂 File Structure

BlockShortsExtension/
├── manifest.json # Extension configuration
├── rules.json # Network request blocking rules
├── background.js # Service worker (currently unused)
└── content.js # Script for handling YouTube navigation


---

## 🧑‍🏫 Installation (Manual)

1. Download or clone this folder.
2. Open your browser:
   - **Edge**: go to `edge://extensions`
   - **Chrome**: go to `chrome://extensions`
3. Enable **Developer mode** (top right).
4. Click **"Load unpacked"**.
5. Select the folder containing the extension files.

---

## ⚠️ Limitations & Notes

- 🧭 **TikTok may not behave properly if VPN is enabled.**  
  Redirection may fail or be inconsistent due to geo-based logic on TikTok.
- 🦊 **Firefox is not supported.**  
  The extension uses `declarativeNetRequest`, only supported in Chromium-based browsers.
- 📱 **Does not work on mobile versions of browsers.**
- ⚠️ **Chrome/Edge may show a warning** saying "This extension can be harmful."  
  This is a default alert for manually installed extensions — it does **not** indicate real risk.

---

## 📚 Reference

**Article title**:  
*Short video platforms and their association with mental health: a cross-sectional study among Chinese college students*  
**Published in**: BMC Public Health, 2024  
**URL**: [https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-024-19191-5?utm_source](https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-024-19191-5?utm_source)

---


