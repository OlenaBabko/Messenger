import React from "react";
import styled from "styled-components";
import flowersImg from "../file/photo/flowers_for_messenger_4.jpg";
import background from "../file/photo/background_00.jpg";

// Створюємо компонент "Сторінка", який відповідає за оболонку сторінки
export default function Page({ children }) {
    return (
        <Window>
        {/* children - це змінна, яка виводить все, що ми поклали всередину компонента */}
        {/* В цьому випадку ми виводимо саме наш інтерфейс сторінки, попередньо обгорнувши потрібними елементами */}
        <View>{children}</View>
        </Window>
    );
}

// Елемент "Вікно" надає стилізацію для вікна, в якому генерується інтерфейс
const Window = styled.div`
    /* background-color: #151515;      фон вікна */
    background-image: url(${flowersImg});
    background-position: center;
    background-size: cover;
`;

// Елемент "Відображення" надає формат відображення інтерфейсу
const View = styled.div`
    max-width: 620px;           /* Робимо максимальну ширину інтерфейсу додатка */
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    /* background-color: #efeff4; */
    margin: 0 auto;             /* Робимо, щоб інтерфейс ставав по центру, якщо ширина екрана більша, ніж ширина інтерфейсу */
    min-height: 100vh;          /* Задаємо мінімальну висоту інтерфейсу таку саму як висота екрана */
    display: grid;              /* Включаємо режим верстки, задаємо потрібну структуру сторінки */
    grid-template-rows: 80px 1fr 90px;
`;
