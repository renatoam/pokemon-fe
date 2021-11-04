module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',

    '^@components/(.*)$': ['<rootDir>/src/common/components/$1'],
    '^@constants/(.*)$': ['<rootDir>/src/common/constants/$1'],
    '^@context/(.*)$': ['<rootDir>/src/common/context/$1'],
    '^@helpers/(.*)$': ['<rootDir>/src/common/helpers/$1'],
    '^@hooks/(.*)$': ['<rootDir>/src/common/hooks/$1'],
    '^@pages/(.*)$': ['<rootDir>/src/pages/$1'],
    '^@services/(.*)$': ['<rootDir>/src/common/services/$1'],
    '^@styles/(.*)$': ['<rootDir>/src/common/styles/$1'],
    '^@store/(.*)$': ['<rootDir>/src/common/store/$1'],
    '^@public/(.*)$': ['<rootDir>/public/$1'],
    '^@images/(.*)$': ['<rootDir>/public/images/$1'],
    '^@icons/(.*)$': ['<rootDir>/public/icons/$1']
  },
  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    // '@testing-library/react/cleanup-after-each',
    // '@testing-library/jest-dom/extend-expect'
  ]
}
