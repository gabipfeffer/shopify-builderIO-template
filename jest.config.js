/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/spec/**/*_spec.ts'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/support/'],
};
