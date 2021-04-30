//require a keyDiscord
const keyDiscord = process.env.token;
// require discord.js
const discord = require('discord.js');

// instancie class discord.client
const client = new discord.Client();


// when bot is ready write i'm ready in console
client.on('ready', ()=> {
    console.log('je suis pret !');
    
});


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



client.on("message", (msg)=>{
    //i return a name of mention in message channel
    const mention = msg.mentions.users.map(function(e){
        return e.username;
    });
    // if mention is yannis13.6Sang , the bot send a message
    if(mention[0] === "yannis13.6Sang"){
        const google = ["https://tenor.com/view/google-logo-gif-7538369", "https://tenor.com/view/you-need-google-google-gif-16220073", "https://tenor.com/view/google-work-burn-ouf-burger-gif-14151440", "https://tenor.com/view/gulu-gulu-google-gif-14812757","https://tenor.com/view/google-it-look-it-up-pissed-angry-shouting-gif-11214431", "https://tenor.com/view/goff-dropshipping-discord-d%C3%A9butant-google-gif-20559757"];

        let randomNumber = randomInteger(0, google.length);

        msg.channel.send(google[randomNumber]);
    }
    else if(mention[0] === "BotNRV"){
        const nrv = ["https://tenor.com/view/funny-cut-throat-black-and-white-im-gonna-kill-you-kill-you-gif-7390009", "https://tenor.com/view/punch-dwarf-gif-5261161", "https://tenor.com/view/fighting-punch-fight-gif-13599924", "https://tenor.com/view/mzansigif-swing-by-hair-hair-girl-fight-south-africa-gif-18122551", "https://tenor.com/view/sword-fight-samurai-sharp-gif-13444139", "https://tenor.com/view/dean-winchester-punch-mad-angry-gif-13850258", "https://tenor.com/view/broly-goku-fight-ice-anime-gif-16208768", "https://tenor.com/view/dbz-goku-o0-fight-counterpunch-gif-13785219"];
        let randomNumber = randomInteger(0, nrv.length);
        msg.channel.send("ne me montionne pas sinon => " + nrv[randomNumber]);
    
    }
    
})

// connect to bot 
client.login(keyDiscord);