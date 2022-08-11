import { ReactComponent as All } from "../../resources/header/all.svg";
import { ReactComponent as Cup } from "../../resources/header/cup.svg";
import { ReactComponent as Frozen } from "../../resources/header/Frozen.svg";
import { ReactComponent as Veg } from "../../resources/header/veg.svg";
import { ReactComponent as Milk } from "../../resources/header/milk.svg";
import { ReactComponent as Home } from "../../resources/header/home.svg";
import { ReactComponent as Grocery } from "../../resources/header/grocery.svg";

import { IHeaderTabs } from "../../interfaces/interfaces";

export const headerTabsData: IHeaderTabs[] = [
   {img: <All/>, title: "Все категории", url: "/"},
   {img: <Cup/>, title: "Напитки", url: "/"},
   {img: <Grocery/>, title: "Бакалея", url: "/"},
   {img: <Frozen/>, title: "Замороженная продукция", url: "/"},
   {img: <Veg/>, title: "Овощи и фрукты", url: "/"},
   {img: <Home/>, title: "Все для дома", url: "/"},
   {img: <Milk/>, title: "Молочные продукты", url: "/"}
];
