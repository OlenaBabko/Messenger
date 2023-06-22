import React from "react";

// ============================================
// Імпортуємо компонент "Шапка", "Меню", "Сторінка" ...
import Header from "../component/Header";
import Menu from "../component/Menu";
import Page from "../component/Page";
// import Empty from "../component/Empty";

import ChatList from "../component/ChatList";

// ============================================
// Імпортуємо картинки
import CatPhoto from "../file/photo/cat.jpg";
import WhoPhoto from "../file/photo/who1.jpg";
import PryamoiPhoto from "../file/photo/pryamoi1.jpg";
import EspresoPhoto from "../file/photo/espreso1.jpg";
import FamilyPhoto from "../file/photo/family1.jpg";

// ============================================
// Генеруємо константи, в яких тримаємо дані про список чатів
const CHATS_LIST = [
    {
        id: 1,
        photo: CatPhoto,
        name: "Тигрики",
        message: "навчу лежати на дивані",
        isUnread: true,
        notifyOff: true,
        time: "00:21"
    },
    {
        id: 2,
        photo: WhoPhoto,
        name: "Хто це?",
        message: "не знаю",
        messageAmount: 30,
        notifyOff: true,
        time: "23:54"
    },
    {
        id: 3,
        photo: PryamoiPhoto,
        name: "Прямий",
        message: "що там в світі відбувається?",
        isRead: true,
        time: "05:23"
    },
    {
        id: 4,
        photo: EspresoPhoto,
        name: "Еспресо",
        message: "ці руки нічого не крали",
        messageAmount: 23,
        notifyOff: true,
        time: "08:05"
    },
    {
        id: 5,
        photo: FamilyPhoto,
        name: "Родина",
        message: "хто за котом прибере?",
        messageAmount: 7,
        time: "10:13",
        user: "тато",
        hashtag: "#family"
    }
];

// ============================================
// Генеруємо сторінку "Чати"
export default function Chats() {
    return (
        <Page>
        {/* В title передаємо текст заголовка сторінки */}
        <Header title="Чати" />
        <div>
            <ChatList list={CHATS_LIST} />
        </div>
        {/* В activePage передаємо посилання поточної сторінки */}
        <Menu activePage="/chats" />
        </Page>
    );
}