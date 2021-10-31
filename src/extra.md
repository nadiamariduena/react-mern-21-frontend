https://support.atlassian.com/bitbucket-cloud/docs/configure-your-dvcs-username-for-commits/

To set repository-specific username/email configuration:
From the command line, change into the repository directory.

Set your username:
git config user.name "FIRST_NAME LAST_NAME"

Set your email address:
git config user.email "MY_NAME@example.com"

Verify your configuration by displaying your configuration file:
cat .git/config
