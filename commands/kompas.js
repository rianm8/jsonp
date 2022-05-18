module.exports = function(){
    const axios = require('axios');
    const cheerio = require('cheerio');

    const getPostTitles = async () => {
        try {
            const { data } = await axios.get(
                'https://www.kompas.com/'
            );
           
            const $ = cheerio.load(data);
            // const postTitles = [];
    
            $('.headline__big__title').each((_idx, el) => {
                const postTitle = $(el).text()
                console.log(postTitle);
                // postTitles.push(postTitle)
            });
    
            // return postTitles;
        } catch (error) {
            throw error;
        }
    };
    
    getPostTitles();
    // .then((postTitles) => console.log(postTitles));
}

