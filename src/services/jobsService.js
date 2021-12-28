const apiUrl = 'http://localhost:3030';

export async function getCategories() {
    const response = await fetch(`${apiUrl}/common/categories`);
    const categories = await response.json();
        
    return categories;
}

export async function postOffer(offer, token){
    const response = await fetch(`${apiUrl}/jobs`, {
        method: 'POST',
        headers: {
            'X-Authorization': token,
            'content-type': 'application/json'
        },
        body: JSON.stringify(offer)
    });
    
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message  || 'Database Error! Please try again later!');
    }

    return data;
}

export async function get(id = ''){
    const response = await fetch(`${apiUrl}/jobs/${id}`);
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Database Error! Please try again later!');
    }

    return data;
}

export async function edit(id, offer, token) {
    const response = await fetch(`${apiUrl}/jobs/${id}`, {
        method: 'PUT',
        headers: {
            'X-Authorization': token,
            'content-type': 'application/json'
        },
        body: JSON.stringify(offer)
    });
    
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message  || 'Database Error! Please try again later!');
    }

    return data;
}

export async function deleteOffer(id, token) {
    const response = await fetch(`${apiUrl}/jobs/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token,
            'content-type': 'application/json'
        }
    });

    if(!response.ok){
        throw new Error('Database Error! Please try again later!');
    }

    return 'You deleted your offer successfuly!';
}

export async function applyToOffer(id, token) {
    const response = await fetch(`${apiUrl}/jobs/${id}/apply`, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    });
    
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message  || 'Database Error! Please try again later!');
    }

    return data;
}