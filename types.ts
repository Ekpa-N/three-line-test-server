export type SettingsTabType = {
    tab: string;
}

export type UserRoles = {
    role: string;
    active: string;
}

export type UserRolesTableTypes = {
    name: string;
    type: string;
    created: string;
    status: string;
    users: {userID: string, avi: string}[];
}
