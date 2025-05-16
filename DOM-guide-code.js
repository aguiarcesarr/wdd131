const article = document.querySelector('article');
// This line of code selects the first instance of an article element from the document and assigns the element as a reference to the variable named article.
article.innerHTML = 'innerHTML supportss HTML content, including text, images, and other elements.';
// This line of code sets the inner HTML of the article element to the string 'innerHTML', replacing any existing content within the article element.
article.style.textAlign = 'right';
// This line of code sets the text alignment of the article element to 'right', aligning the text to the right side of the element.
article.setAttribute('class', 'active');
// This line of code sets the class attribute of the article element to 'active', which can be used for styling or JavaScript manipulation.
const paragraph = document.createElement('p');
// This line of code creates a new paragraph element and assigns it to the variable named paragraph.
article.appendChild(paragraph);
// This line of code appends the newly created paragraph element as a child to the article element, adding it to the document.
article.append('This is a new paragraph');
// This line of code appends the string 'This is a new paragraph' to the article element, adding it as text content.
article.remove(paragraph);
// This line of code removes the paragraph element from the article element, if it exists.
article.removeChild(paragraph);
// This line of code removes the paragraph element from the article element, if it exists, using the removeChild method.