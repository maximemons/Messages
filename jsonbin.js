let BIN_ID = "";
let API_KEY = "$2a$10$chQYHlc4IMp3aSZnO8xdWuEyNYirsSLYgwK/K0pdqBO2xrD0VrJxO";
let API_URL = "";

let MESSAGES;

async function initJSONBinAPI() {
  if(window.location.search.indexOf('?') != 0){
    alert("Message inconnu");
    return undefined;
  }
  BIN_ID = window.location.search.replaceAll('?', '');
  API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

  return await fetchJSONBIN();
}

async function fetchJSONBIN() {
  try {
    const res = await fetch(API_URL + '/latest', {
      headers: {
        'X-Access-Key': API_KEY
      }
    });
    if (!res.ok) throw new Error('Erreur lecture jsonbin: ' + res.status);
    const data = await res.json();
    const messages = data && data.record ? data.record : data;
    return messages;
  } catch (err) {
    alert("Message inconnu");
  }
}

async function getAllMessages(force) {
    MESSAGES = await fetchJSONBIN();
    return MESSAGES;

}