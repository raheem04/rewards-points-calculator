// src/services/apiService.js
export const fetchMockData = async () => {
    try {
        const response = await fetch('/mockData.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching mock data:', error);
        return [];
    }
};
