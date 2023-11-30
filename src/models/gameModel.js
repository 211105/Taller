const db = require('../../database');
const getAllGames = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM Games', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
const addGame = (game) => {
  return new Promise((resolve, reject) => {
    const { title, description, price, image_url } = game;
    db.run(
      'INSERT INTO Games (title, description, price, image_url) VALUES (?, ?, ?, ?)',
      [title, description, price, image_url],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve('Game added successfully');
        }
      }
    );
  });
};


const deleteGame = (id) => {
    return new Promise((resolve, reject) => {
        db.run(
            'DELETE FROM Games WHERE id = ?',
            [id],
            (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve('Game deleted successfully');
                }
            }
        );
    });
}


const updateGame = (id, game) => {
    return new Promise((resolve, reject) => {
        const { title, description, price, image_url } = game;
        db.run(
            'UPDATE Games SET title = ?, description = ?, price = ?, image_url = ? WHERE id = ?',
            [title, description, price, image_url, id],
            (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve('Game updated successfully');
                }
            }
        );
    });
}


const getGameById = (id) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM Games WHERE id = ?', [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}
module.exports = { getAllGames, addGame, deleteGame,getGameById,updateGame};