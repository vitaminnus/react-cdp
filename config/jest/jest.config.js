module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.{js,jsx}', '!src/index.jsx', '!src/store.js'],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(png|jpg)$': '<rootDir>/config/jest/__mocks__/fileMock.js',
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  rootDir: '../../',
};
