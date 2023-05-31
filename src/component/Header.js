import React from "react";
import styled from "styled-components";

// Створюємо компонент "Шапка"
export default function Header({ title }) {
    return (
        <Block>
        {/* Виводимо текст заголовка, який ми передаємо в компонент "Шапка" */}
        <Title>{title}</Title>
        </Block>
    );
}
// Елемент "Блок" який відповідає за відображення тексту компонента "Шапка"
const Block = styled.div`
    width: 100%;                            /* Робимо ширину блока */
    background-color: #f6f6f6;
    border-bottom: solid #d7d7d7 1px;       /* Задаємо колір для рамки знизу блока*/
    display: flex;                          /* Включаємо режим верстки flex */
    justify-content: center;                /* робимо текст горизонтально по центру */
    align-items: center;                    /* робимо текст вертикально по центру */
    height: 80px;                           /* Задаємо висоту блоку шапки */ /* !!!! Уважно. змінювати не можна */
`;

// Елемент "Заголовок", який відповідає за відображення тексту компонента "Шапка" в змінній title
const Title = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #111;
`;
