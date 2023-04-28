# Creates an .env from ENV variables
ENV_WHITELIST=${ENV_WHITELIST:-"^RN_"}
set | egrep -e $ENV_WHITELIST | sed 's/^RN_//g' > .env