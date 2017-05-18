'use strict';

module.exports = app => {
  const { STRING, INTEGER, BIGINT } = app.Sequelize;
  const SEX_TAG = {
    UNKNOWN: 0,
    MALE: 1,
    FEMALE: 2,
  };

  const Userprofile = app.model.define('userprofile', {
    sex: {
      type: INTEGER,
      defaultValue: SEX_TAG.UNKNOWN,
    },
    city: STRING(32),
    province: STRING(32),
    country: STRING(32),
    about_me: STRING(255),
    created_at: {
      type: BIGINT,
      allowNull: false,
    },
    updated_at: {
      type: BIGINT,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate() {
        Userprofile.belongsTo(app.model.User);
      },
    },
  });

  return Userprofile;

};
