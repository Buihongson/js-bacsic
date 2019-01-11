// Get input element
var filterInput = document.getElementById('filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

// Function filter name
function filterNames() {
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    // Get name UL
    let ul = document.getElementById('names');

    // Get item(lis) from ul
    let item = ul.querySelectorAll('li.collection-item');

    // Loop through collection-item lis
    for(let i = 0; i < item.length; i++) {
        let a = item[i].getElementsByTagName('a')[0];
        
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            item[i].style.display = '';
        } else {
            item[i].style.display = 'none';
        }
    }
}

