exports.register = (plugin, options, next) => {

  plugin.route([
    require( './handlers/get-all' )
  ]);

  next();
};

exports.register.attributes = {
  name: 'api'
};