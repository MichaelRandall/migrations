import { newMigration, members, migrations } from "../../../tools/mockData";

export default {
  app: {
    migration: newMigration || {},
    migrations: migrations || [],
  },
  member: {
    details: {},
    data: members || [],
  },
  toggle: {
    memberModal: false,
    migrationModal: false,
    stageModal: false,
    taskModal: false,
  },
};
