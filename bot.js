const Discord = require("discord.js");
const discord = new Discord.Client
const fs = require("fs");

discord.on("ready", function () {
  console.log("ready")
});

discord.on("message", function(message) {
    if (message.guild.id !== "") {return;} // Server ID
    else if (message.channel.id !== "") {return;} // ID das kanals wo er Löschen soll
    else {message.delete({timeout: ""}) // Wie oft soll, er löschen, gebe in Millisekunden an
          .catch(error =>{
        console.log(error);
    })
         }
})

discord.login("")