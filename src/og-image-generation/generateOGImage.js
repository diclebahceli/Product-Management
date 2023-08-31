// generateOGImage.js
export function generateOGImage(products) {
    // Define the width and height of the OG image (in pixels)
    const imageWidth = 1200;
    const imageHeight = 630;
  
    // Create an HTML template for the OG image
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta property="og:image:width" content="${imageWidth}">
          <meta property="og:image:height" content="${imageHeight}">
          <style>
            /* Add styling for your OG image here */
            body {
              margin: 0;
              padding: 0;
              width: ${imageWidth}px;
              height: ${imageHeight}px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #F7F7F7;
            }
            h1 {
              font-size: 36px;
              margin-bottom: 16px;
            }
            p {
              font-size: 18px;
            }
          </style>
        </head>
        <body>
          <div>
            <h1>Your Product List</h1>
            <ul>
              ${products.map((product) => `<li>${product.name} - ${product.description}</li>`).join('')}
            </ul>
          </div>
        </body>
      </html>
    `;
  
    // Encode the HTML template as a data URL
    const dataUrl = `data:text/html;charset=UTF-8,${encodeURIComponent(htmlTemplate)}`;
  
    return dataUrl;
  }
  