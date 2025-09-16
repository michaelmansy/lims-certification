# LIMS Certificate Viewer

A simple, modern one-page website to view LIMS (Laboratory Information Management System) certificates.

## Features

- Modern, clean design inspired by shadcn/ui
- Responsive layout that works on all devices
- Dark mode support
- Smooth animations and hover effects
- PDF certificate viewing functionality

## Setup Instructions

1. Place your PDF certificate file in the same directory as the HTML files
2. Rename your PDF file to `certificate.pdf` (or update the filename in `script.js`)
3. Open `index.html` in a web browser

## File Structure

```
lims-certificate-viewer/
├── index.html          # Main HTML file
├── styles.css          # CSS styling (shadcn-inspired)
├── script.js           # JavaScript functionality
├── certificate.pdf     # Your PDF certificate (add this file)
└── README.md           # This file
```

## Customization

- To change the PDF filename, edit the `pdfPath` variable in `script.js`
- To modify colors or styling, edit `styles.css`
- The design uses HSL color values following shadcn/ui design system

## Browser Compatibility

Works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Notes

- The website will attempt to open the PDF in a new tab
- If that fails, it will trigger a download of the PDF file
- The design automatically adapts to light/dark mode preferences
