import React from "react";
import styled from "styled-components";

// ============================================
// Імпортуємо компонент "Шапка", "Меню", "Сторінка" ...
import Header from "../component/Header";
import Menu from "../component/Menu";
import Page from "../component/Page";
// import Empty from "../component/Empty";

import MessageList from "../component/MessageList";
import Input from "../component/Input";
import SendButton from "../component/SendButton";

// ============================================
// Генеруємо константи, в яких тримаємо дані про список повідомлень в чаті
const MESSAGE_LIST = [
    {
        id: 1,
        message: "Привіт. Як справи?",
        isMe: true,
        time: "13:42"
    },
    {
        id: 2,
        message: "Все добре. В тебе як?",
        isMe: false,
        time: "13:48"
    }
];

// ============================================
// Генеруємо сторінку "Діалог чату"
export default function Dialog() {
    const [value, updateValue] = React.useState();
    const [list, updateList] = React.useState(MESSAGE_LIST);
    const addMessage = () => {
        updateValue("");

        return updateList([
        ...list,
        {
            id: Math.random(),
            message: value,
            isMe: true,
            time: new Date().toLocaleTimeString()
        }
        ]);
    };

    return (
        <Page>
        {/* В title передаємо текст заголовка сторінки */}
        <Header title="Діалог чату" />
        <DialogView>
            <MessageList list={list} />
            <SendMessageBlock>
            <Input
                value={value}
                onChange={updateValue}
                placeholder="your message"
            />
            <SendButton onClick={addMessage} />
            </SendMessageBlock>
        </DialogView>
        <Menu />
        </Page>
    );
}

// Відповідає за коректне відображення основного вмісту Діалогу
const DialogView = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
`;

// Відповідає за коректне відображення вмісту компонента "Поле вводу" та "Кнопка відправити"
const SendMessageBlock = styled.div`
    background-color: #f6f6f6;
    padding: 15px;               /* Відступи всередені вертикальні та горизонтальні */
    border-top: 1px #d7d7d7 solid; /* Розмір та Колір сітки країв блока*/
    display: grid;
    grid-template-columns: 1fr 32px;
    gap: 15px;
`;
