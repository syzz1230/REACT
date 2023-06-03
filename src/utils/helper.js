export function filterData(searchtext, restaurants)  {
  
    const filterData =  restaurants.filter((restaurant) => 
    restaurant?.data?.name?.toLowerCase()?.includes(searchtext.toLowerCase())
     );
     return filterData;
   }