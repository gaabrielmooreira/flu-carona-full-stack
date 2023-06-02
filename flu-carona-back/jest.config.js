module.exports = {
    preset: 'ts-jest',
    testEnviroment: 'node',
    moduleDirect: ['node_modules', 'src'],
    transform: {
      '.+\\.ts$': 'ts-jest',
    },
    testMatch:['<rootDir>/tests/**/*.(spec|test).ts'],
    setupFiles: ['<rootDir>/tests/setup-envs.ts'],
    setupFilesAfterEnv: ['<rootDir>/tests/setup-files-after-env.ts'],
    moduleNameMapper: {
      '@/(.*)': '<rootDir>/src/$1',
      '@test/(.*)': '<rootDir>/tests/$1',
      axios: 'axios/dist/node/axios.cjs',
    },
    restoreMocks: true,
  };