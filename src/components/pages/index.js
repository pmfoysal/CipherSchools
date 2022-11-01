const { lazy } = require('react');

module.exports = {
   Home: lazy(() => import('./home/home')),
   Signin: lazy(() => import('./signin/signin')),
   Signup: lazy(() => import('./signup/signup')),
};
