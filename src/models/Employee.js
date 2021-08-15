const Employee = (sequelize, Sequelize) => {
  const employee = sequelize.define("employee", {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
  });

  return employee;
};

export default Employee;
