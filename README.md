# Development

### Link to Deployed Website
https://hiphippo123.github.io/development/

### Goal and Value of the Application
Allow someone to build a travel bucket list and figure out about how much money they would need to save up to complete this bucket list. The application allows them to filter places by continent as well as by the general temperature ranges. The user can also sort places to visit from lowest or highest cost to match their own budget. You can reset the screen by deselecting all the filters and using the "default" sort setting.

### Usability Principles Considered
usability/efficiency - All 3 components are easily accessible at the same time which makes the platform easy and efficient to use.

learnability - The interface is very learnable. You can clearly see the main 3 components of the screen to easily understand the functions of the webpage. The fields for each place item are also very clear so the user knows what each field is such as what the cost is calculated based on (7 day trip for solo traveler).

memorability - Each place item has the same set up which makes navigating the page very memorable. The aggregator bucket list also details enough information for the user to know exactly what is in their list.

### Organization of Components
I made a component for a list of filters, for a bucket list item, and for a place item. I made these 3 elements into components because they were all repeated elements in the page that reused the same structure for a set of items.

### How Data is Passed Down Through Components
I pass all of the data and functions related to interactions with each component to the component using props. For my filters, I passed down the list of all filters to be added as options in the form as well as the function that handles changes of that filter. For my bucket list item, I passed the item data into the component as well as the remove from bucket list function. For my place item, I also passed the item data and add to bucket list function into the component.

### How the User Triggers State Changes
The user can trigger state changes by adding or removing an item from their bucket list, by selecting/unselecting any of the filter categories, or by switching the sort method. The program stores the sort function as a state variable as well as the two lists of selected filters to sort and filter while mapping. When any of these states are changed, the page will update for the user.

