import React from "react";
import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

// Підключаємо іконку непрочитаного повідомлення
import { ReactComponent as UnreadIcon } from "../file/chat/unread.svg";
import { ReactComponent as ReadIcon } from "../file/chat/read.svg";

// Генеруємо компонент "Список чатів"
export default function ChatList({ list }) {
    return <List>{list.map(ChatItem)}</List>;
}

// Створюємо елемент "Cписок", який відповідає за секцію списку чатів
const List = styled.div `
//   Задаємо колір фону
    background-color: #fff;
  /* Включаємо режим grid, щоб всі елементи списку ставали вертикально */
    display: grid;
  /* Задаємо сірі рамки знизу та зверху списку */
    border-top: solid #d7d7d7 1px;
    border-bottom: solid #d7d7d7 1px;
`;

// Генеруємо компонент "Один Чат", в якому ми отримуємо дані одного чату та виводимо їх
function ChatItem({
    photo,
    message,
    name,
    id,

    messageAmount,
    notifyOff,
    isUnread,
    isRead,
    time,
    user,
    hashtag
}) {
    return (
        <React.Fragment key={id}>
        <Item to="/dialog">
            <Image src={photo} />
            <Content>
            <Row>
                <InfoColumn>
                <Name>{name}</Name>
                <User>{user}</User>
                <Message>{message}</Message>
                <Hashtag>{hashtag}</Hashtag>
                </InfoColumn>
                <StatusColumn>
                <Time>{time}</Time>

                {messageAmount && (
                    <MessageAmount notifyOff={notifyOff}>
                    {messageAmount}
                    </MessageAmount>
                )}

                {isUnread && (
                    <Icon>
                    <UnreadIcon />
                    </Icon>
                )}
                {isRead && (
                    <Icon>
                    <ReadIcon />
                    </Icon>
                )}
                </StatusColumn>
            </Row>
            </Content>
        </Item>
        </React.Fragment>
    );
}

const User = styled.div `
    font-size: 14px;
    color: #111;
`;

// Елемент "Повідомлення"
const Message = styled.div`
    font-size: 14px;
    color: #8e8e93;
`;
const Hashtag = styled.div`
    font-size: 10px;
    color: #037ee5;
`;

// Елемент "Ім'я чату"
const Name = styled.div `
    font-size: 16px;
    color: #111;
`;

// Елемент "Час"
const Time = styled.div `
    font-size: 12px;
    color: #8e8e93;
`;

// Елемент "Іконка"
const Icon = styled.div `
    height: 42px;           /* Висота іконки */
    width: 42px;            /* Ширина */

    & > svg {
        height: 30px;
        width: 30px;
    }
`;

// Елемент "Скільки непрочитаних повідомлень"
const MessageAmount = styled.div `
    font-size: 12px;
    color: #fff;                    /* Колір тексту */
    background-color: #037ee5;      /* Колір фону */
    padding: 2px 10px;              /* Внутрішні відступи від країв блоку */
    border-radius: 25px;            /* Закруглення */

    ${({ notifyOff }) => {
        if (notifyOff === true) {
        return css `
            background-color: #8e8e93;  /* Змінюємо колір фону якщо notifyOff має значення true */
        `;
        }
    }}
`;

// ======================================
// Далі елементи, які відповідають за відображення даних одного чату в потрібній структурі
// Елемент колонки статусів
const StatusColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`;
// Елементи колонки з головної інформації
const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;
// Елемент, який відповідає за рядок, в якому виводять колонки
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
`;

// =========================================

// Елемент "Картинка" чату
const Image = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 16px;     /* Відступ праворуч, щоб текст опції не притискався до картинки */
    margin-top: 8px;        /* Відступ зверху та знизу, щоб картинка не налазила на рамку карточки опції */
    margin-bottom: 8px;
    border-radius: 50%;     /* Робимо закруглення країв */
`;

// Елемент "Контент", в якому знаходяться основні дані про чат
const Content = styled.div`
    width: 100%;                /* Задаємо текст  на всю вільну ширину */
    padding-top: 8px;            /* Відступ зверху та знизу, щоб елемент не налазив на рамку карточки чату */
    padding-bottom: 8px;
    display: flex;              /* Включаємо режим верстки flex, робимо відображення елементів вертикально */
    flex-direction: column;
    gap: 2px;                   /* Робимо вертикальний відступ між елементами */
`;

// Елемент "Один чат", який відповідає за відображення карточки одного чату
const Item = styled(Link) `
    display: flex;              /* Включаємо режим flex */
    padding-left: 16px;         /* Відступ справа та зліва, щоб елементи не налазили на краї */
    padding-right: 16px;        
    
    /* Робимо, щоб всі елементи "Заголовок" окрім останнього мали знизу сіру лінію */
    &:not(:last-of-type) > ${Content} {
        border-bottom: 1px solid #d7d7d7;
    }
    /* Задаємо можливість робити анімацію */
    transition: opacity 0.7s;
    /* Рибимо анімацію при наведені курсором мишки*/
    &:hover {
        opacity: 0.5;           /* Виставляємо прозорість на 50% */
        cursor: pointer;        /* Робимо інший дизайн курсору */
    }
`;