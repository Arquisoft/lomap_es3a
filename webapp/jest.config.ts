export default {
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/src/components/**/*_mock.ts"],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js, jsx, ts, tsx}'],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    coverageDirectory: 'coverage',
    testMatch: ["<rootDir>/src/components/**/?(*.)+(spec|test).[tj]s?(x)"],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};