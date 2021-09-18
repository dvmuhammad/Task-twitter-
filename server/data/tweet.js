let tweets = [
  {
    id: '1',
    text: 'Салом ба хама! Ман C# разработчик.',
    createdAt: Date.now(),
    name: 'Muhammad',
    username: 'dvmuhammad',
    url: 'https://avatars.dicebear.com/api/male/john.svg?background=%230000ff',
  },
  {
    id: '2',
    text: 'Салом, C# Бехтарин яп мебошад.',
    createdAt: Date.now(),
    name: 'Idris',
    username: 'IdrisProger',
    url: 'https://avatars.dicebear.com/api/male/female.svg?background=%230011ff',
  },
  {
    id: '3',
    text: 'Ба ман Js махкул аст.Ман 3 сол опить дорам дар js ',
    createdAt: Date.now(),
    name: 'Said',
    username: 'saidjon',
    url: 'https://avatars.dicebear.com/api/male/john.svg?background=%231100ff',
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export async function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export async function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
