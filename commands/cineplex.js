module.exports = function(){
    const axios = require('axios');
    const cheerio = require('cheerio');
    const https = require('https');

    const httpsAgent = new https.Agent({ rejectUnauthorized: false });

    const getPostTitles = async () => {
        try {
            const { data } = await axios.get(
                'https://21cineplex.com/', { httpsAgent }
            );
           
            const $ = cheerio.load(data);

            $('#now-playing a').each((_idx, el) => {
                let link = $(el).attr('href');
                desc(link);
            });
        } catch (error) {
            throw error;
        }
    };

    const desc = async (link) => {
        try {
            const { data } = await axios.get(
                link, { httpsAgent }
            );
           
            const $ = cheerio.load(data);
            const genre = $('.movie_genre:not(span)').text();
            genre = genre.substring(10);
            
            console.log("Judul Film : " + $('.desc-box > h2').text());
            console.log("Genre : " + genre);
            console.log($('.movie_produser:nth-child(3):not(span)').text());
        } catch (error) {
            throw error;
        }
    }
    
    getPostTitles();
}