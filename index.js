//require a keyDiscord
const keyDiscord = process.env;
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

        const google = ["https://tenor.com/view/google-logo-gif-7538369", "https://tenor.com/view/you-need-google-google-gif-16220073", "https://tenor.com/view/google-work-burn-ouf-burger-gif-14151440", "https://tenor.com/view/gulu-gulu-google-gif-14812757","https://tenor.com/view/google-it-look-it-up-pissed-angry-shouting-gif-11214431", "https://tenor.com/view/goff-dropshipping-discord-d%C3%A9butant-google-gif-20559757", "https://tenor.com/view/google-it-just-google-it-google-lazy-do-it-yourself-gif-17344697", "https://tenor.com/view/google-it-just-google-it-google-lazy-do-it-yourself-gif-17344697", "https://tenor.com/view/norman-google-gif-10362590","https://tenor.com/view/google-gif-19016623"];

        let randomNumber = randomInteger(0, google.length);

        msg.channel.send(google[randomNumber]);
    }
    else if(mention[0] === "BotNRV"){
        const nrv = ["https://tenor.com/view/funny-cut-throat-black-and-white-im-gonna-kill-you-kill-you-gif-7390009", "https://tenor.com/view/punch-dwarf-gif-5261161", "https://tenor.com/view/fighting-punch-fight-gif-13599924", "https://tenor.com/view/mzansigif-swing-by-hair-hair-girl-fight-south-africa-gif-18122551", "https://tenor.com/view/sword-fight-samurai-sharp-gif-13444139", "https://tenor.com/view/dean-winchester-punch-mad-angry-gif-13850258", "https://tenor.com/view/broly-goku-fight-ice-anime-gif-16208768", "https://tenor.com/view/dbz-goku-o0-fight-counterpunch-gif-13785219"];
        let randomNumber = randomInteger(0, nrv.length);
        msg.channel.send("ne me montionne pas sinon");
        msg.channel.send(+ nrv[randomNumber]);
    
    }
    let reg = new RegExp("yannis");
    let regarrive = new RegExp("arrive"); 
    
    if(msg.content){

        if(reg.test(msg.content)){
            let waiting = [
                "https://giphy.com/gifs/QPQ3xlJhqR1BXl89RG",
                "https://giphy.com/gifs/hulu-desperate-housewives-26his5i9YJTqsqCyY",
                "https://giphy.com/gifs/cartoon-waiting-worried-PWfHC8ogZpWcE",
                "https://giphy.com/gifs/time-mr-bean-look-at-the-QBd2kLB5qDmysEXre9"
            ];
            let random = randomInteger(0, waiting.length);
            msg.channel.send("Mon Patron Arrive veuillez patienté !!!");
            msg.channel.send(waiting[random]);
    
        }else if(regarrive.test(msg.content)){

            if(msg.author.username === "yannis13.6Sang"){
                
                msg.channel.send("Mon Patron débarque !!");
                msg.channel.send("https://tenor.com/view/running-superman-smallville-gif-13741564");
                msg.channel.send("https://tenor.com/view/superhero-superman-gif-5442214");
                msg.channel.send("https://tenor.com/view/superman-and-lois-superman-gif-21259893");
            }
        }

            
    }
    
    
    
})

// connect to bot 
client.login(keyDiscord);