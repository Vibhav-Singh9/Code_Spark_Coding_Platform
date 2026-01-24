const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-10335.crce206.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 10335
    }
});

module.exports = redisClient;