import React from "react";
import styled from "styled-components";

// Компонент який відповідає за текст, коли список пустий
export default function Empty({ children }) {
    return <Text>{children}</Text>;
}

// Елемент "Текст" для пустого тексту
const Text = styled.div`
    color: #111;                    /* Колір тексту */
    font-size: 16px;
    padding: 15px;                  /* Відступи вертикальні та горизонтальні */
    display: flex;                  /* Включаємо режим верстки */
    justify-content: center;        /* Робимо текст по центру */
`;
