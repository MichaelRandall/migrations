import React, { lazy } from "react";

const MemberModal = lazy(() => import("./Member"));
const MigrationModal = lazy(() => import("./Migration"));

const Modals = () => [MemberModal, MigrationModal];

export default Modals;
