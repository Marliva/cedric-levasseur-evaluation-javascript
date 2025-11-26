// J'ai mis le tableau d'objets pour le menu. Je l'ai directement mis ici car gros
// trou de mémoire sur comment le gérer en import, donc pour éviter de trop perdre de
// temps, je le mets ici, même si ça allonge la taille du fichier.*/
const menuContent = [
    {
        imgSrc: "./assets/img/menu1.webp",
        text: "Steering Cover",
        link: "#",
        subMenu: [
            { text: "Best Cover Price", link: "#" },
            { text: "New Cover Price", link: "#" },
            { text: "Middle Cover Price", link: "#" },
            { text: "Gaming Cover Price", link: "#" }
        ]
    },
    {
        imgSrc: "./assets/img/menu2.webp",
        text: "Steel Rim",
        link: "#",
        subMenu: [
            { text: "Best Steel Rim", link: "#" },
            { text: "New Steel Rim", link: "#" },
            { text: "Middle Steel Rim", link: "#" },
            { text: "Gaming Steel Rim", link: "#" }
        ]
    },
    {
        imgSrc: "./assets/img/menu3.webp",
        text: "Brake Disc",
        link: "#",
        subMenu: [
            { text: "Best Brake Disc", link: "#" },
            { text: "New Brake Disc", link: "#" },
            { text: "Middle Brake Disc", link: "#" },
            { text: "Gaming Brake Disc", link: "#" }
        ]
    },
    {
        imgSrc: "./assets/img/menu4.webp",
        text: "Engine Model",
        link: "#",
        subMenu: [
            { text: "Best Engine Model", link: "#" },
            { text: "New Engine Model", link: "#" },
            { text: "Middle Engine Model", link: "#" },
            { text: "Gaming Engine Model", link: "#" }
        ]
    },
    {
        imgSrc: "./assets/img/menu5.png",
        text: "Silent Block",
        link: "#",
        subMenu: [
            { text: "Best Silent Block", link: "#" },
            { text: "New Silent Block", link: "#" },
            { text: "Middle Silent Block", link: "#" },
            { text: "Gaming Silent Block", link: "#" }
        ]
    },
    {
        imgSrc: "./assets/img/menu6.png",
        text: "Piston Rod",
        link: "#",
        subMenu: [
            { text: "Best Piston Rod", link: "#" },
            { text: "New Piston Rod", link: "#" },
            { text: "Middle Piston Rod", link: "#" },
            { text: "Gaming Piston Rod", link: "#" }
        ]
    },
    {
        imgSrc: "./assets/img/menu7.png",
        text: "Replica Wheels",
        link: "#",
        subMenu: [
            { text: "Best Replica Wheels", link: "#" },
            { text: "New Replica Wheels", link: "#" },
            { text: "Middle Replica Wheels", link: "#" },
            { text: "Gaming Replica Wheels", link: "#" }
        ]
    },
    {
        imgSrc: "./assets/img/menu8.png",
        text: "Car Parts",
        link: "#",
        subMenu: [
            { text: "Best Car Parts", link: "#" },
            { text: "New Car Parts", link: "#" },
            { text: "Middle Car Parts", link: "#" },
            { text: "Gaming Car Parts", link: "#" }
        ]
    },
    {
        imgSrc: "./assets/img/menu9.png",
        text: "Spring",
        link: "#",
        subMenu: [
            { text: "Best Spring", link: "#" },
            { text: "New Spring", link: "#" },
            { text: "Middle Spring", link: "#" },
            { text: "Gaming Spring", link: "#" }
        ]
    }
];

//Je déclare mes variables pour aller chercher les éléments html
const burger = document.getElementById("burger");
const menuAllCategories = document.getElementById("menuAllCategories");

// Fonction pour créer le menu
function createMenuElement() {
    // Je crée le conteneur du menu
    const menu = document.createElement("div");
    menu.id = "menu";

    // Je crée le bouton de fermeture
    const closeBtn = document.createElement("button");
    closeBtn.id = "closeMenu";
    closeBtn.innerHTML = '<i class="fa-solid fa-times"></i>';
    menu.append(closeBtn);

    // Je crée la liste des catégories
    const menuList = document.createElement("ul");
    menuList.id = "menuList";

    // Je récupère le tableau d'objets menuContent
    menuContent.forEach((item) => {
        const menuItem = document.createElement("li");
        menuItem.classList.add("menu-item");

        // Je crée le menu principal
        const mainLink = document.createElement("a");
        mainLink.href = item.link;
        mainLink.classList.add("menu-main-link");

        const img = document.createElement("img");
        img.src = item.imgSrc;
        img.alt = item.text;

        const span = document.createElement("span");
        span.textContent = item.text;

        const arrow = document.createElement("i");
        arrow.classList.add("fa-solid", "fa-chevron-right");

        mainLink.append(img);
        mainLink.append(span);
        mainLink.append(arrow);

        // Je crée le sous-menu
        const subMenuList = document.createElement("ul");
        subMenuList.classList.add("submenu");

        item.subMenu.forEach((subItem) => {
            const subMenuItem = document.createElement("li");
            const subLink = document.createElement("a");
            subLink.href = subItem.link;
            subLink.textContent = subItem.text;
            subMenuItem.append(subLink);
            subMenuList.append(subMenuItem);
        });

        // J'ajoute l'événement au clic sur le lien principal
        mainLink.addEventListener("click", (event) => {
            event.preventDefault();
            // Je ferme tous les autres sous-menus
            document.querySelectorAll(".submenu").forEach(sub => {
                if (sub !== subMenuList) {
                    sub.classList.remove("active");
                }
            });
            // Toggle sur le sous-menu ouvert
            subMenuList.classList.toggle("active");
        });

        menuItem.append(mainLink);
        menuItem.append(subMenuList);
        menuList.append(menuItem);
    });

    menu.append(menuList);

    // Ajouter l'événement pour fermer le menu
    closeBtn.addEventListener("click", () => {
        document.body.removeChild(menu);
        burger.classList.remove("active");
        if (menuAllCategories) {
            menuAllCategories.classList.remove("active");
        }
    });

    return menu;
}

// Événement sur le burger, au clic
burger.addEventListener("click", () => {
    if (document.body.contains(document.getElementById("menu"))) {
        document.body.removeChild(document.getElementById("menu"));
        burger.classList.remove("active");
        return;
    } else {
        burger.classList.add("active");
        const menu = createMenuElement();
        document.body.append(menu);
    }
});

// Événement sur menuAllCategories, au clic
if (menuAllCategories) {
    menuAllCategories.addEventListener("click", () => {
        if (document.body.contains(document.getElementById("menu"))) {
            document.body.removeChild(document.getElementById("menu"));
            menuAllCategories.classList.remove("active");
            return;
        } else {
            menuAllCategories.classList.add("active");
            const menu = createMenuElement();
            document.body.append(menu);
        }
    });
}

export { burger };