import React, { useState, useEffect } from 'react';

function ErrorPage() {
  const [embeddedHTML, setEmbeddedHTML] = useState('');

  useEffect(() => {
    // Define a function to fetch the HTML content
    const fetchHTMLContent = async () => {
      try {
        const response = await fetch('/public/index.html');
        if (response.ok) {
          const htmlContent = await response.text();
          setEmbeddedHTML(htmlContent);
        } else {
          console.error('Failed to fetch HTML content');
        }
      } catch (error) {
        console.error('Error fetching HTML content:', error);
      }
    };

    // Call the fetchHTMLContent function
    fetchHTMLContent();
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: embeddedHTML }} />
    </div>
  );
}

export default ErrorPage;
