/*CMD
  command: hi
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendMessage("hello",
   {on_result: "onMessageSending" }
)
