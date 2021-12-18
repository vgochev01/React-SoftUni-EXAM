const apiUrl = 'http://localhost:3030';

export async function getCategories() {
    const response = await fetch(`${apiUrl}/common/categories`);
    const categories = await response.json();
        
    return categories;
}

export async function postOffer(offer, token){
    console.log(token);
    const response = await fetch(`${apiUrl}/offers`, {
        method: 'POST',
        headers: {
            'X-Authorization': token,
            'content-type': 'application/json'
        },
        body: JSON.stringify(offer)
    });
    
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message);
    }

    return data;
    
}