export const login = (users, username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.filter(i => i.username === username);
      if (user.length === 0) {
        reject({error: 'Username tidak ditemukan.'});
      } else {
        if (user[0].password === password) {
          const {username, name, img, followers, following} = user[0];
          const data = {
            username,
            name,
            img,
            followers,
            following,
          };
          resolve({data: data});
        } else {
          reject({error: 'Password salah.'});
        }
      }
    }, 500);
  });
};

export const getUsersAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let users = [
        {
          id: 0,
          username: 'user_admin',
          name: 'User Admin',
          password: '123456',
          img:
            'https://d1rkab7tlqy5f1.cloudfront.net/_processed_/8/f/csm_Zgonnikov%2C%20Arkady_d55e30834e.jpg',
          followers: 145,
          following: 40,
        },
        {
          id: 1,
          username: 'user_ihsan',
          name: 'Nur Ihsan',
          password: '123456',
          img:
            'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg',
          followers: 100,
          following: 200,
        },
      ];
      resolve(users);
    }, 500);
  });
};
