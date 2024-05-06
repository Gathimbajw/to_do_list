(function() {
    // State variables
    var toDoListArray = [];
    
    // UI variables
    var form = document.querySelector('.form');
    var input = document.querySelector('.form__input');
    var ul = document.querySelector('.toDoList');

    // Event listeners
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission behavior (page reload)

        // Generate unique ID for the To-Do item
        var itemId = Date.now();

        // Retrieve input value
        var toDoItem = input.value;

        // Invoke functions to add item to DOM and array
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);

        // Clear input field
        input.value = '';
    });

    ul.addEventListener('click', function(event) {
        if (event.target.dataset.id) {
            var id = parseInt(event.target.dataset.id);

            // Invoke functions to remove item from DOM and array
            removeItemFromDOM(id);
            removeItemFromArray(id);
        }
    });

    // Functions
    function addItemToDOM(itemId, toDoItem) {
        var li = document.createElement('li');
        li.dataset.id = itemId;
        li.textContent = toDoItem;
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
        var newItem = {
            id: itemId,
            text: toDoItem
        };
        toDoListArray.push(newItem);
    }

    function removeItemFromDOM(id) {
        var li = document.querySelector('li[data-id="' + id + '"]');
        if (li) {
            li.remove();
        }
    }

    function removeItemFromArray(id) {
        toDoListArray = toDoListArray.filter(function(item) {
            return item.id !== id;
        });
    }
})();
