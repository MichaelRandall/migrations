import {
  newMigration,
  members,
  migrations,
  migration_tasks,
  migration_stages,
  migration_types,
  operating_systems
} from "../../../tools/mockData";

export default {
  app: {
    course: {},
    courses: [],
    migration: newMigration || {},
    migrations: migrations || []
  },
  member: {
    details: {},
    data: members || []
  }
};
