module.exports = {
  collectCoverageFrom: ["out/**/*.js"],
  coverageReporters: ["html", "lcov"],
  coverageThreshold: {
    global: {
      branches: 80.5,
      functions: 95.2,
      lines: 85.87,
      statements: -249
    }
      // Mock class refs
  late ApiUser userApi;
  late AppRoute appRoute;
  late AppLoading appLoading;

  },
  testEnvironment: "node",
  testMatch: ["<rootDir>/test/*(*.)@(spec|test).js?(x)"]
};
