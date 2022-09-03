import fetch from "node-fetch";

export default async (_, message) => {
  message.delete();
  const url = "https://insult.mattbas.org/api/insult";

  const res = await fetch(url);

  const body = await res.json();

  if (message.mentions.users.first()) {
    message.channel.send(`${message.mentions.users.first()} ${body}.`);
  } else {
    message.channel.send(`${body}.`);
  }
};
