// Function to search for food and redirect to the corresponding page
 function searchFood() {
         const searchInput = document.getElementById('searchInput');
         const query = searchInput.value.toLowerCase();


         // Convert both query and keys to lowercase for case-insensitive comparison
         const foodPageMapping = {
        bread: '../Menu/bread.html',
        pancake: '../Menu/pancake.html',
        salad: '../Menu/salad.html',
        sandwich: '../Menu/sandwich.html',
        gyros: '../Menu/gyros.html',
        pizza: '../Menu/pizza.html',
        soup: '../Menu/soup.html',
        spaghetti: '../Menu/spaghetti.html',
        cake: '../Menu/cake.html',
        cupcake: '../Menu/cupcake.html',
        doughnuts: '../Menu/doughnuts.html',
        icecream: '../Menu/ice-cream.html',
        waffle: '../Menu/waffle.html',
        coffee: '../Menu/coffee.html',
        juice: '../Menu/juice.html',
        tea: '../Menu/tea.html',
        others: '../Menu/others.html'
         };


         const lowercaseQuery = query.toLowerCase(); // Convert query to lowercase


         if (foodPageMapping.hasOwnProperty(lowercaseQuery)) {
             // Redirect to the corresponding food page
             window.location.href = foodPageMapping[lowercaseQuery];
         } else {
             alert('Food not found. Please try another search term.');
         }
     }
