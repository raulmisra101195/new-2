//const BASE_URL = 'http://127.0.0.1:1337';//Local Address
const BASE_URL = 'https://radiant-atoll-79245.herokuapp.com';//Local Address
const TOKEN = 'f967d8b84c216425fc14fa3d5010313b6d605c81a569ebd3a33c980e51007713d433813459926f19dc5dad21acac13aec4bc908f3024606867a2055da09b03afbb588da0fafee044b4b37a42c8ffc035d3197103e6b1777be033e367aadd68501ed23046d23824d1c7bfd002c39ed3f2fa33fa0b50161828a33e68bb8f96c8d3';
//const base_url = 'https://radiant-atoll-79245.herokuapp.com';//Local Address
let headers = {
    'Authorization':'Bearer '+TOKEN,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    
  };
// How to export you data in nodejs

//1. Default Export 

//2. Named Export

module.exports = { BASE_URL, TOKEN,headers }



