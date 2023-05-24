// Open AI
export const modelGPT = 'gpt-3.5-turbo';

export const transcriptionModelGPT = 'whisper-1';

export enum MessageRolesGPT {
  ASSISTANT = 'assistant',
  USER = 'user',
  SYSTEM = 'system',
}

export const MAX_CONTEXT_GPT_TOKENS = 4096;

// Telegram API
export const TELEGRAM_API = 'https://api.telegram.org';

// Bot config
export const supportLanguageCodes = ['en', 'ru'];

export enum BotCommands {
  ABOUT = 'about',
  ADMIN = 'admin',
  DESCRIPTION = 'description',
  NEW = 'new',
  START = 'start',
}

export const BotCommandsWithDescription = [
  { command: BotCommands.ADMIN, i18nKey: 'bot-command-admin' },
  { command: BotCommands.DESCRIPTION, i18nKey: 'bot-command-description' },
  { command: BotCommands.ABOUT, i18nKey: 'bot-command-about' },
];

// Node cache
export const TTL_DEFAULT = 60;

// Privileges
export enum UserRoles {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  SUPER_ADMIN = 'super-admin',
  USER = 'user',
}

export const ADD_USER_FORMAT_ADMIN = `<username>;<${Object.values(UserRoles)
  .filter((role) => role !== UserRoles.SUPER_ADMIN)
  .join(' | ')}>`;

export const ADD_USER_FORMAT_MODERATOR = `<username>;<${Object.values(UserRoles)
  .filter((role) => role !== UserRoles.SUPER_ADMIN && role !== UserRoles.ADMIN)
  .join(' | ')}>`;

// Regexp
export const REGEXP_USERNAME = /^[a-zA-Z0-9_-]{3,32}$/;

// CSV files
export const CSV_READER_URL = 'https://www.convertcsv.com/csv-viewer-editor.htm';

export enum SessionCsvIds {
  CONTENT = 'content',
  KEY = 'key',
  ROLE = 'role',
  TIMESTAMP = 'timestamp',
  USERNAME = 'username',
}

export enum UsersCsvIds {
  ENABLED = 'enabled',
  ROLE = 'role',
  TIMESTAMP = 'timestamp',
  USERNAME = 'username',
}

export enum LoggerInfoCsvIds {
  LEVEL = 'level',
  MESSAGE = 'message',
  TIMESTAMP = 'timestamp',
  USERNAME = 'username',
}

// Winston logger
export const winstonConfig = {
  levels: {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5,
    silly: 6,
  },
  colors: {
    error: 'red',
    debug: 'blue',
    warn: 'yellow',
    data: 'magenta',
    info: 'green',
    verbose: 'cyan',
    silly: 'grey',
  },
};

// Menu
export enum AdminMenu {
  INITIAL = 'admin-main-menu',
}

export enum SessionsMenu {
  DELETE = 'delete-user-session-menu',
  GET = 'get-user-session-menu',
  INITIAL = 'sessions-menu',
}

export enum ConversationsMenu {
  DELETE = 'delete-user-conversation-menu',
  GET = 'get-user-conversation-menu',
  INITIAL = 'conversations-menu',
}

export enum UsersMenu {
  BLOCK_UNBLOCK = 'block-unblock-user-menu',
  CHANGE_ROLE = 'change-user-role-menu',
  DELETE = 'delete-user-menu',
  INITIAL = 'users-menu',
  SELECT_NEW_ROLE = 'select-new-user-role-menu',
}

// Menu actions
export enum AdminMenuActions {
  GO_TO_MENU = 'go-to-admin-menu-action',
}

export enum UsersMenuActions {
  ADD_NEW_USER = 'add-new-user-action',
}
