
const apiKey = 'tCNXli6ZIRUePChO2PHtOe_YuU5a58SimA-1V076enXcEJ_aKc3AlTl8LY_bkzZciEjp_MrymrCEhrIeYlrXaD9yjPww9769VebBz0PLYCgctJxwALxm_5aqLlThXXYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {Authorization: `Bearer ${apiKey}`} }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses;
                }
                
            });
    }
} 


export default Yelp;
