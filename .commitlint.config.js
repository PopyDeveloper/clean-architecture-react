module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "test",
        "refactor",
        "perf",
        "build",
        "ci",
        "chore",
      ],
    ],
    "scope-case": [2, "always", "lower-case"],
    "subject-full-stop": [2, "always", "."],
    "subject-max-length": [2, "always", 72],
    "body-leading-blank": [2, "always"],
    "body-max-length": [2, "always", 100],
    "footer-leading-blank": [2, "always"],
    "footer-max-length": [2, "always", 100],
  },
};
