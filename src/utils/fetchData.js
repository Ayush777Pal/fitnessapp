export const exerciseOptions = {
	method: 'GET',
	headers: {
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
		'x-rapidapi-key': 'b9827f76f2mshbe6fca9d173dcd6p121354jsn60e6568b2ed5',	
	}
};
export const youtubeOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b9827f76f2mshbe6fca9d173dcd6p121354jsn60e6568b2ed5',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};
// abstraction of data 
export const fetchData = async(url,options) =>{
const response = await fetch(url,options);
const data = await response.json();

return data;
}