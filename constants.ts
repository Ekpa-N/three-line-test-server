import { UserRoles, UserRolesTableTypes } from "./types"





const userAdminRoles: UserRoles[] = [
    {
        role: "Superadmin",
        active:"06/2023",
    },
    {
        role: "Developeradmin",
        active:"06/2023",
    },
    {
        role: "Supportadmin",
        active:"06/2023",
    },
] 

const testUserRoles:UserRolesTableTypes[] = [
    {
        name: "Superadmin",
        type: "DEFAULT",
        created:"Jan 1, 2023",
        status:"active",
        users: [
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
        ]
    },
    {
        name: "Merchantadmin",
        type: "DEFAULT",
        created:"Jan 1, 2023",
        status:"active",
        users: [
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
        ]
    },
    {
        name: "Supportadmin",
        type: "CUSTOM",
        created:"Jan 1, 2023",
        status:"inactive",
        users: [
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
        ]
    },
    {
        name: "Sales personnel",
        type: "CUSTOM",
        created:"Jan 1, 2023",
        status:"active",
        users: [
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
        ]
    },
    {
        name: "Deputy pales personnel",
        type: "CUSTOM",
        created:"Jan 1, 2023",
        status:"inactive",
        users: [
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
        ]
    },
    {
        name: "Developeradmin",
        type: "SYSTEM-CUSTOM",
        created:"Jan 1, 2023",
        status:"active",
        users: [
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
        ]
    },
    {
        name: "Developer-basic",
        type: "SYSTEM-CUSTOM",
        created:"Jan 1, 2023",
        status:"active",
        users: [
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            }
        ]
    },
]



export {userAdminRoles, testUserRoles}