# **Newsroom** 🚀

Welcome to **Newsroom**! This is a simple, responsive blog app built with Next.js, TypeScript, and Tailwind CSS. The app fetches blog data from the **JSONPlaceholder API** and presents it with some awesome extra features like language switching, hashtag filtering, and a rich UI post details page.

## ![Preview](https://raw.githubusercontent.com/eballoi/newsroom/main/public/preview.png)

## **Installation & Setup ⚡**

Clone the repository and follow these steps:

1. Clone the repo:

   ```bash
   git clone https://github.com/eballoi/newsroom.git
   cd fe-newsroom
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app locally:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## **Features ✨**

### **1. Homepage (/)**

- Fetches a list of blog posts using **`getStaticProps`** from the **[JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts)**.
- Displays a responsive grid layout with **Tailwind CSS**.
- Each blog post card includes:
  - Title (clickable link to the post’s details page).
  - First 100 characters of the body for a preview.
  - Author name with an avatar placeholder
  - A **"Read More"** link directing users to the post detail page.

### **2. Post Details Page (/post/[id])**

- Dynamic routing for each post using **`getStaticPaths`** and **`getStaticProps`**.
- Displays the full post details, including:
  - Title
  - Full body content
- The post page is enriched with extra information like the **author bio** and a list of the author's **featured articles**.

### **3. Hashtag Search & Filter**

- Users can filter posts by hashtags (one or multiple).
- Clicking on a hashtag will filter posts and display only those matching the selected tags.
- This feature helps to **precisely filter content** without the need for full title searches.

### 4. **Language Switcher 🌐**

- Using `next-i18next`, a language switcher has been implemented to toggle between English, Deutsch, and Italian for a more personalized user experience. Localization is handled server-side, ensuring fast and seamless language switching across the entire app.

### **5. Load More Button** 🔥

- On the homepage, a **"Load More"** button allows users to fetch additional posts in **chunks** for better performance and smoother browsing.

### **6. Post Detail Enhancements**

- On the post detail page:
  - **Social Share CTAs**: Easily share the post via **email, WhatsApp**, or **copy the link**.
  - **Author Bio**: Display detailed information about the author.
  - **Featured Articles**: A list of other articles by the same author appears on the right.
  - **Similar Posts**: Related posts are shown at the bottom of the page, encouraging users to explore more content.

### **7. About Page (/about)**

- A simple **About** page containing general information about the blog.

### **8. Responsive Design 📱💻**

- Fully responsive design built with **Tailwind CSS** ensuring the app looks great on **desktop, tablet, and mobile** devices.

---

## **Technologies Used 🛠️**

- **Next.js** for server-side rendering and static site generation.
- **TypeScript** for type safety and better development experience.
- **Tailwind CSS** for responsive, utility-first styling.
- **JSONPlaceholder API** to fetch blog posts and author data.

---

## **Folder Structure 🗂️**

The project adopts a feature-based folder structure to organize components and logic around specific functionalities, such as posts, authors, and language switching. This approach enhances scalability and maintainability by keeping related files together, making it easier to locate and modify features independently as the project grows.

---

Feel free to explore and contribute! 🚀
