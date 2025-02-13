# 🚀 SpaceX Launch Tracker

## 📌 Description

This Vue.js application displays SpaceX launches using the SpaceX v5 API. It includes:

- The **next launch** with a **real-time countdown**.
- A **filter** (`All`, `Succeeded`, `Failed`) to display the last 10 launches.
- A **modal** displaying **detailed information** about a selected launch.

## 🛠 Technologies Used

- **Vue.js 3** with Composition API
- **TypeScript**
- **SpaceX v5 API** (public access, no authentication required)
- **Axios** for API requests
- **Tailwind CSS** for styling
- **Animations** (chosen by the candidate)
- **YouTube Embed** for mission videos

## 📂 Project Structure

```
/src
  ├── components
  │   ├── NextLaunch.vue      # Displays the next launch with countdown
  │   ├── FilterTable.vue     # Dropdown filter for launches
  │   ├── LaunchesTable.vue   # List of the last 10 launches
  │   ├── LaunchModal.vue     # Details of the selected launch
  ├── pages
  │   ├── Main.vue            # Main page managing state
```

## 📜 Features

### 🛰️ Next Launch

- Displays the **name** and **date** of the next launch.
- **Countdown timer** updating in real-time.

### 🔍 Launch Filtering

- A `<select>` dropdown to filter:
  - **All launches**
  - **Successful launches** ✅
  - **Failed launches** ❌

### 📋 List of the Last 10 Launches

- Displays the **last 10 launches** based on the selected filter.
- **Clicking on a launch** → opens a **modal** with details.

### 📝 Launch Details Modal

Displays:

- **Launch name**
- **Date (DD/MM/YYYY format)**
- **Mission details** (in English)
- **Illustrative image**
- **Link to an article**
- **Launch site name**
- **Payloads and client names**
- **YouTube video** (toggle switch to show/hide)

## 🚀 Installation & Setup

### 📥 Requirements

- Node.js `>=16.x`
- npm or yarn

### 📌 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/spacex-launch-tracker.git
cd spacex-launch-tracker

# Install dependencies
npm install
```

### ▶️ Run the Project

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## ⚠️ Notes

- The SpaceX API **does not require authentication** and is not up-to-date.
- Queries are handled using **Axios**.

## 📌 Useful Resources

- [Vue.js 3](https://vuejs.org/)
- [SpaceX v5 API](https://github.com/r-spacex/SpaceX-API)
- [Axios](https://github.com/axios/axios)
- [Tailwind CSS](https://tailwindcss.com/)
- [YouTube Embed API](https://developers.google.com/youtube/iframe_api_reference)

## 📩 Contact & Questions

- Author: _[Christopher Dubois]_
- Email: _[christopherdb77@gmail.com]_
- GitHub: [https://github.com/christopherdbs](https://github.com/christopherdbs)
