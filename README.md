Integration testing ensures that multiple components (e.g., routes, middleware, database) in an application work together as expected. In Express.js, we use Supertest to simulate API requests and verify responses.

npm i --save-dev @types/supertest 
#Install @types/supertest for testing Express requests

create bin.ts to keep app.listen(3000) so that each npm run test doesnt trigger the app.listen(3000)
#Move app.listen(3000) to bin.ts to prevent it from running during tests.

basically we use jest in backend but we can also use it in frontend
