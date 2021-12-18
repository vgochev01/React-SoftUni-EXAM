const apiUrl = 'http://localhost:3030';

export async function getCategories() {
    const response = await fetch(`${apiUrl}/common/categories`);
    const categories = await response.json();
        
    return categories;
}