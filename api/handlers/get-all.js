module.exports = {
  'method' : 'GET',
  'path'   : '/',
  'config' : {
    'description' : 'Fetch all',
    'notes'       : 'Returns array of object',
    'tags'        : [ 'api' ],
    
    'handler'     : (request, reply) => {
      return reply({ result: 'list of data' });
    }
  }
};