export const navItems = [
    { title: "Dashboard", 
      icon: "assets/icons.svg#dashboard",
      link: "/dashboard"
    },
    { title: "Clients",
      icon: "assets/icons.svg#clients",
      link: "/clients"
    },
    { title: "Articles",
      icon: "assets/icons.svg#articles",
      link: "/articles",
      subMenu: true,
      toggle: false,
      submenuItems: [
        { title: "Option A"},
        { title: "Option B" }
      ]
    },
    { title: "Invoices",
      icon: "assets/icons.svg#orders"
    }
  ]