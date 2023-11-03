import { Sequelize } from "sequelize";

async function connectToDB(dbURI) {
  console.log(`connecting to DB: ${dbURI}`);

  const sequelize = new Sequelize(dbURI, {
    logging: console.log,
    define: {
      timestamps: false,
      underscored: true,
    },
  });

  try {
    await sequelize.authenticate();
    console.log("Connect to DB successfully!");
  } catch (error) {
    console.error("Unable to connect to DB:", error);
  }
  return sequelize;
}

export default connectToDB;
