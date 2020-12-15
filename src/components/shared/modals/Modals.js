import React, { lazy } from "react";

const MemberModal = lazy(() => import("./Member"));
const MigrationModal = lazy(() => import("./Migration"));
const StageModal = lazy(() => import("./Stage"));
const TaskModal = lazy(() => import("./Task"));

const Modals = () => [MemberModal, MigrationModal, StageModal, TaskModal];

export default Modals;
