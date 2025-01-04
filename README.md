# 3ee Games Issue Tracker GitHub Actions

Welcome to the 3ee Games Issue Tracker GitHub Actions repository! This repository is part of our commitment to providing transparency to our players and community, showcasing the ongoing work we do to improve our games and services. By tracking issues, bugs, enhancements, and other tasks automatically, we aim to keep everyone informed about the development process.

## Purpose

The GitHub Actions workflow automatically tracks and updates the status of various issues within the 3ee Games repository, including:

- **Bug Reports**
- **Documentation Issues**
- **Enhancements**

This process provides transparency to our players and ensures they know that we are actively working to address any issues or improvements needed in our games.

## Features

- **Automatic Tracking:** Issues are tracked daily based on labels such as `bug`, `documentation`, and `enhancement`.
- **Transparency:** Every change made is automatically documented in the issue-count JSON file.
- **Confidence:** Builds confidence in the players that the development team is actively working on game-related issues.

## How It Works

The workflow is scheduled to run daily (at midnight) via a cron job. It can also be triggered manually using the `workflow_dispatch` event.

The process includes:
1. **Fetching Issues:** Queries are made using GitHub's GraphQL API to fetch issues from the repository, filtered by labels.
2. **Issue Count:** It counts issues based on labels like `bug`, `documentation`, and `enhancement`.
3. **JSON Update:** The totals for each label are then updated in a JSON file (`public/issue-count.json`) within the repository.

## Benefits

- **Keeps players informed:** Our players can see the status of issues being tracked and resolved.
- **Builds trust:** Transparency in issue tracking shows our commitment to quality and continuous improvement.
- **Helps the dev team:** Automates issue tracking, allowing the team to focus on solving issues rather than managing the issue list.

## Contributing

If you'd like to contribute to the development of this workflow or suggest improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

