const dataMenu=[
    {
        module_id:1,
        module:"Usuarios",
        menus:[
            {
                menu_id:1,
                menu:"Usuario",
                icon:"pi-users",
                path:'/users'
            }
        ]
    },
    {
        module_id:2,
        module:"Clientes",
        menus:[
            {
                menu_id:2,
                menu:"Cliente",
                icon:"pi-bookmark-fill",
                path:'/customer'
            },
            {
                menu_id:2,
                menu:"Visitas",
                icon:"pi-list-check",
                path:'/system'
            },

            {
                menu_id:3,
                menu:"Sucursales",
                icon:"pi-map"
            }

        ]
    },
    {
        module_id:3,
        module:"Configuración",
        menus:[
            {
                menu_id:4,
                menu:"Roles",
                icon:"pi-key"
            }
        ]
    },
]
export default dataMenu