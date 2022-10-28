const baseUrl = 'https://caves-in-bg.herokuapp.com'

export const getAll = async () => {
    const response = await fetch(`${baseUrl}/data/catalog`) //  /catalog
    const caves = await response.json();
    const result = Object.values(caves)
    return result;
};


export const getOne = async (id) => {
    const response = await fetch(`${baseUrl}/data/catalog/${id}`)//  
    const caves = await response.json();
    return caves
}

export const getAllNews = async () => {
    const response = await fetch(`${baseUrl}/data/news`)
    const news = await response.json();
    const result = Object.values(news)
    return result;
};


export const getNewById = async (id) => {
    const response = await fetch(`${baseUrl}/data/news/${id}`)
    const selectedNew = await response.json();
    return selectedNew
}

export const getFilteredNews = async (date) => {
    const response = await fetch(`${baseUrl}/data/news`)
    const news = await response.json();
    const result = Object.values(news)
    const filteredNews = result.filter((n) => {
        return n.created == date
    })
    return filteredNews
};