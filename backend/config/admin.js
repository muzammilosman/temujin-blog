module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dfc7dc6ef8942ffff1a7ae4cafc3387a'),
  },
});
