var version = "0.2A";
// Logs into your bot
function startBot(botID){
  
}
// Updated your bot? Run this function.
function updateBot(){
  
}
// Creates a post
function post(botID, content){
  
}
// Sends a DM to a user
function sendDM(botID, to, content){
  
}
// When we get a DM it will run this code
function onDM(botID){
  
}
// Comments on a post
function commentPost(botID, postID){
  
}
// Creates a bot. FOR APP USE ONLY. DM Zane for permision to use this in your bot.
function createBot(name){
  var password= "pas" + randomNumber(1,100032) + "-" + randomNumber(1,120);
  var username = name;
  
   createRecord("Users", {userid: getUserId(), username: username, password:password, pfp: "https://studio.code.org/v3/assets/feCfr1q31tpaVie9ojDqzKHsvTiFnHjVybjRcxeGdEE/pfp" + randomNumber(1,pfps) + ".jpg", bio: "No bio yet", reputation: starter[4], following: starter[3], coins: starter[0], tickets: starter[1], nameplate: "", nameplates: starter[2], created: getTime(), invite: generateInvite(), bot: true}, function (rec) {
            
            
       
           
            
              addAudit("signup");
          
            }, function () {
              notif("Sorry, we weren't able to create your bot. Please try again later.");
            });
          }
        
  
