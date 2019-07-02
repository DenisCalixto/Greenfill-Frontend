import { Injectable } from '@angular/core';
import { Info } from '../models/Info';

@Injectable()
export class InfoService {
  infos: Info[];

  constructor() {
    this.infos = [
      { 
        id: 1,
        image: '../../assets/ic_electronics.svg',
        cardImage: '../../assets/ic_electronics_open.svg',
        text: 'Electronic waste is often comprised of precious metals, like gold, silver, and platinum, as well as valuable copper, aluminum, and iron. These metals are denoted as “precious” and “valuable” for a reason – well, two reasons: 1. They are in limited supply. 2. We rely on them for a surprising range of functions, from simple tinfoil to NASA’s rocket ships. Recycling electronic waste protects these metals for future use and impedes their endangerment. It should also be noted that recycling e-waste can save up to 70% on the energy required to mine and process new materials. Savings in energy means savings in costs and precious power resources.'
      },
      {
        id: 2,
        image: '../../assets/ic_plastic.svg',
        cardImage: '../../assets/ic_electronics_open.svg',
        text: 'Electronic waste is often comprised of precious metals, like gold, silver, and platinum, as well as valuable copper, aluminum, and iron. These metals are denoted as “precious” and “valuable” for a reason – well, two reasons: 1. They are in limited supply. 2. We rely on them for a surprising range of functions, from simple tinfoil to NASA’s rocket ships. Recycling electronic waste protects these metals for future use and impedes their endangerment. It should also be noted that recycling e-waste can save up to 70% on the energy required to mine and process new materials. Savings in energy means savings in costs and precious power resources.'
      },
      {
        id: 3,
        image: '../../assets/ic_carrot2.svg',
        cardImage: '../../assets/ic_electronics_open.svg',
        text: 'Electronic waste is often comprised of precious metals, like gold, silver, and platinum, as well as valuable copper, aluminum, and iron. These metals are denoted as “precious” and “valuable” for a reason – well, two reasons: 1. They are in limited supply. 2. We rely on them for a surprising range of functions, from simple tinfoil to NASA’s rocket ships. Recycling electronic waste protects these metals for future use and impedes their endangerment. It should also be noted that recycling e-waste can save up to 70% on the energy required to mine and process new materials. Savings in energy means savings in costs and precious power resources.'
      },
      {
        id: 4,
        image: '../../assets/ic_bags.svg',
        cardImage: '../../assets/ic_electronics_open.svg',
        text: 'Electronic waste is often comprised of precious metals, like gold, silver, and platinum, as well as valuable copper, aluminum, and iron. These metals are denoted as “precious” and “valuable” for a reason – well, two reasons: 1. They are in limited supply. 2. We rely on them for a surprising range of functions, from simple tinfoil to NASA’s rocket ships. Recycling electronic waste protects these metals for future use and impedes their endangerment. It should also be noted that recycling e-waste can save up to 70% on the energy required to mine and process new materials. Savings in energy means savings in costs and precious power resources.'
      },
      {
        id: 5,
        image: '../../assets/ic_cosmetics.svg',
        cardImage: '../../assets/ic_electronics_open.svg',
        text: 'Electronic waste is often comprised of precious metals, like gold, silver, and platinum, as well as valuable copper, aluminum, and iron. These metals are denoted as “precious” and “valuable” for a reason – well, two reasons: 1. They are in limited supply. 2. We rely on them for a surprising range of functions, from simple tinfoil to NASA’s rocket ships. Recycling electronic waste protects these metals for future use and impedes their endangerment. It should also be noted that recycling e-waste can save up to 70% on the energy required to mine and process new materials. Savings in energy means savings in costs and precious power resources.'
      },
      {
        id: 6,
        image: '../../assets/ic_straws.svg',
        cardImage: '../../assets/ic_electronics_open.svg',
        text: 'Electronic waste is often comprised of precious metals, like gold, silver, and platinum, as well as valuable copper, aluminum, and iron. These metals are denoted as “precious” and “valuable” for a reason – well, two reasons: 1. They are in limited supply. 2. We rely on them for a surprising range of functions, from simple tinfoil to NASA’s rocket ships. Recycling electronic waste protects these metals for future use and impedes their endangerment. It should also be noted that recycling e-waste can save up to 70% on the energy required to mine and process new materials. Savings in energy means savings in costs and precious power resources.'
      },
      {
        id: 7,
        image: '../../assets/ic_containers.svg',
        cardImage: '../../assets/ic_electronics_open.svg',
        text: 'Electronic waste is often comprised of precious metals, like gold, silver, and platinum, as well as valuable copper, aluminum, and iron. These metals are denoted as “precious” and “valuable” for a reason – well, two reasons: 1. They are in limited supply. 2. We rely on them for a surprising range of functions, from simple tinfoil to NASA’s rocket ships. Recycling electronic waste protects these metals for future use and impedes their endangerment. It should also be noted that recycling e-waste can save up to 70% on the energy required to mine and process new materials. Savings in energy means savings in costs and precious power resources.'
      },
      {
        id: 8,
        image: '../../assets/ic_paper.svg',
        cardImage: '../../assets/ic_electronics_open.svg',
        text: 'Electronic waste is often comprised of precious metals, like gold, silver, and platinum, as well as valuable copper, aluminum, and iron. These metals are denoted as “precious” and “valuable” for a reason – well, two reasons: 1. They are in limited supply. 2. We rely on them for a surprising range of functions, from simple tinfoil to NASA’s rocket ships. Recycling electronic waste protects these metals for future use and impedes their endangerment. It should also be noted that recycling e-waste can save up to 70% on the energy required to mine and process new materials. Savings in energy means savings in costs and precious power resources.'
      },
      {
        id: 9,
        image: '../../assets/ic_metal.svg',
        cardImage: '../../assets/ic_electronics_open.svg',
        text: 'Electronic waste is often comprised of precious metals, like gold, silver, and platinum, as well as valuable copper, aluminum, and iron. These metals are denoted as “precious” and “valuable” for a reason – well, two reasons: 1. They are in limited supply. 2. We rely on them for a surprising range of functions, from simple tinfoil to NASA’s rocket ships. Recycling electronic waste protects these metals for future use and impedes their endangerment. It should also be noted that recycling e-waste can save up to 70% on the energy required to mine and process new materials. Savings in energy means savings in costs and precious power resources.'
      },
      {
        id: 10,
        image: '../../assets/ic_cups.svg',
        cardImage: '../../assets/ic_electronics_open.svg',
        text: 'Electronic waste is often comprised of precious metals, like gold, silver, and platinum, as well as valuable copper, aluminum, and iron. These metals are denoted as “precious” and “valuable” for a reason – well, two reasons: 1. They are in limited supply. 2. We rely on them for a surprising range of functions, from simple tinfoil to NASA’s rocket ships. Recycling electronic waste protects these metals for future use and impedes their endangerment. It should also be noted that recycling e-waste can save up to 70% on the energy required to mine and process new materials. Savings in energy means savings in costs and precious power resources.'
      },
      {
        id: 11,
        image: '../../assets/ic_furniture.svg',
        cardImage: '../../assets/ic_electronics_open.svg',
        text: 'Electronic waste is often comprised of precious metals, like gold, silver, and platinum, as well as valuable copper, aluminum, and iron. These metals are denoted as “precious” and “valuable” for a reason – well, two reasons: 1. They are in limited supply. 2. We rely on them for a surprising range of functions, from simple tinfoil to NASA’s rocket ships. Recycling electronic waste protects these metals for future use and impedes their endangerment. It should also be noted that recycling e-waste can save up to 70% on the energy required to mine and process new materials. Savings in energy means savings in costs and precious power resources.'
      },
      {
        id: 12,
        image: '../../assets/ic_clothes.svg',
        cardImage: '../../assets/ic_electronics_open.svg',
        text: 'Electronic waste is often comprised of precious metals, like gold, silver, and platinum, as well as valuable copper, aluminum, and iron. These metals are denoted as “precious” and “valuable” for a reason – well, two reasons: 1. They are in limited supply. 2. We rely on them for a surprising range of functions, from simple tinfoil to NASA’s rocket ships. Recycling electronic waste protects these metals for future use and impedes their endangerment. It should also be noted that recycling e-waste can save up to 70% on the energy required to mine and process new materials. Savings in energy means savings in costs and precious power resources.'
      }
    ]
  }

  getInfos(): Info[] {
    return this.infos;
  }
}
