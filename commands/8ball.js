exports.run = (client, message, args, role) => {
  var texts = [
    "Yes",
    "No",
    "Maybe",
    "Absolutely yes",
    "Absolutely no",
    "Noope!",
    "Yeeeaaa!",
    "Hell no!",
    "Hell yea!",
    "I think yes",
    "I think.. MAYBE!!!",
    "Nah, you are gay.",
    "Fucking feminists!",
    "Bruhh..",
    "I think so..",
    "I dont think so..",
    "No, you are..",
    ":DD kys",
    "Fck you cunt.",
    "Why you ask that from me ?",
    "Loool, gtfo",
    "Have fun.. YYES!!",
    "How much is 1+1? Correct, it's three!",
    "Your mother would be proud of you!",
    "Nahh, in ur dreams..",
    "Not even in ur dreams, kys.",
    "Maybe some day :-D",
    "Not today.",
    "Maybe tomorrow! Or not.",
    "Uhm.. I dont answer for that..",
    "Oh, maybe.",
    "Yeah, that was what she said.",
    "Mmm, u have small dick lol",
    "Huehue, NO.",
    "Ayy, lmao!",
    "kys",
    "IDK",
    "I know that, but i wont tell it."
  ];
  var pick = texts[Math.floor(Math.random() * texts.length)];
  message.channel.send(`Hmm, ${pick}`);
};
