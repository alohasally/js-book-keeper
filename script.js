'use strict'

const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkFrom = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bokmarksContainer = document.getElementById('bookmarks-container');

// Show Modal, Focus on Input

function showModal(){
    modal.classList.add('show-modal')
    websiteNameEl.focus();
}

// Close Modal 

  function closeModal(){
    modal.classList.remove('show-modal')
  } 
  
  
// Modal Event Listeners
modalShow.addEventListener('click',showModal);
modalClose.addEventListener('click', closeModal);
window.addEventListener('click', (e) => (e.target === modal ? modal.classList.remove('show-modal') : false));


// Validate Form 
function validate(nameValue, urlValue) {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    if (!nameValue || !urlValue) {
        alert ('Please submit values for both fields');
    }
    if (urlValue.match(regex)) {
      alert("Successful match");
    } 
    if (!urlValue.match(regex)){
      alert("Please provide a valid web address");
      return false;
    }
    // Valid
    return true;

}
// Handle Data from Form 
function storeBookmark(e){
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if(!urlValue.includes('http://','https://')){
        urlValue = `https:// ${urlValue}`
    }
    if(!validate(nameValue,urlValue)){
        return false;
    }
}

// Event Listener
bookmarkFrom.addEventListener('submit', storeBookmark);