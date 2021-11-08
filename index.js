const fastify = require('fastify')({ logger: true });

fastify.register(require('./routes/first'));

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0');
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
