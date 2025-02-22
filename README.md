# Portfolio Site

This is a personal portfolio website built using **Next.js** and **Tailwind CSS**, with **Google Sheets API** as a backend for managing and updating content dynamically.

## Technologies Used

- **Next.js** - A React framework for server-side rendering and static site generation.
- **Tailwind CSS** - For responsive and modern UI styling.
- **Google Sheets API** - Used as a backend to store and manage text content dynamically.

## Features

- Display projects and certificates dynamically from Google Sheets.
- Easily add new project cards or certificates via Google Sheets.
- Fully responsive design.

## Google Sheet

The content for this portfolio is managed via Google Sheets. I can view and update the sheet here:
[Google Sheet Link](https://docs.google.com/spreadsheets/d/1Bx2hbXnpoVuIpqfhvCXhXwFQOgMo_wkB8GJ-78fSpDo/edit?usp=sharing)

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/pupiesa/port-folio-site.git
   cd port-folio-site
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file and configure the following:
   ```sh
   GOOGLE_SHEETS_API_KEY=your-google-sheets-api-key
   SHEET_ID=your-google-sheet-id
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

## Usage

- To add new projects or certificates, update the linked Google Sheet.
- Changes will reflect automatically on the site without needing a redeploy.

## Contributing

Feel free to fork this project and submit pull requests for improvements or new features.

## License

This project is licensed under the MIT License.

