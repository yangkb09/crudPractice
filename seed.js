const { green, red } = require('chalk');
const { db, Project, Robot } = require('./server/db');

const robots = [{
  name: 'KAY/O',
  imageUrl: 'https://www.pcinvasion.com/wp-content/uploads/2021/06/VALORANT_KAY_0_Wallpapers_4k-scaled-1.jpg',
  fuelType: 'electric',
  fuelLevel: 88.34
}, {
  name: 'Orianna',
  imageUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_8.jpg',
  fuelType: 'diesel',
  fuelLevel: 50.60
}, {
  name: 'Blitzcrank',
  imageUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg',
  fuelType: 'electric',
  fuelLevel: 99.99
}, {
  name: 'Claptrap',
  imageUrl: 'https://assets2.rockpapershotgun.com/claptrap.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/claptrap.jpg',
  fuelType: 'gas',
  fuelLevel: 32.07
}]

const projects = [{
  title: 'Add WD-40 to elbows and knees',
  deadline: new Date(2021, 12, 31),
  priority: 6,
  completed: false,
  description: 'Self care is important, even when you are a bot'
}, {
  title: 'Pretend we are not bots',
  deadline: new Date(2021, 11, 1),
  priority: 7,
  completed: false,
  description: 'Try to act like humans'
}, {
  title: 'Neutralize radiants',
  deadline: new Date(2022, 1, 10),
  priority: 10,
  completed: true,
  description: 'Infiltrate Kingdom container ship to save Earth'
}]

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!

  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
