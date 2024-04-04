# react-2024-03-11

## Дз1

1. Создать репозиторий(Публичный) на github
2. Создать ветку с названием - lecture-1/hw
3. Создать проект(используем vite - https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
4. Очистить проект
5. Скопировать себе в проект мокковые данные(materials/mock.js в этом проекте)
6. Отобразить все рестораны из моковых данных. Отображаем рестораны друг за другом. Логику отрисовку массивов не используем, отображаем каждый ресторан отдельно. Цель отработать работу с элементами.
   1. Название ресторана
   2. Заголовок - Меню (h3)
   3. Список названий блюд (используем тег ul и li)
   4. Заголовок - Отзывы (h3)
   5. Список текстов отзывов (используем тег ul и li)
   6. (Доп) сделать все это на React.createElement.
7. Сделать коммит
8. Запушить
9. Открыть ПР из ветки с дз в ветку main
10. Отправить ссылку на ПР в ветку дз 1 в Discord

## Дз2

1. Создать ветку с названием - lecture-2/hw

2. Создать компонент Layout с Header и Footer. Обернуть им список ресторанов;
3. Разбить рестораны на компоненты;
4. Применить способ отрисовки массивов.

5. Сделать коммит
6. Запушить
7. Открыть ПР из ветки с дз в ветку main

## Дз3

1. Создать для ресторанов табы аналогичные тем, которые делали на лекции.
2. Сохранять активный таб в localStorage, при обновлении страницы рисуем последний открытый ресторан
3. В блюде сделать кнопки "-" и "+". Между ними рисуем цифру. По дефолту 0, минимальное значение 0, максимальное 5. По клику на + увеличиваем, по клику на - уменьшаем.

## ДЗ 4

1. Вынести логику каунтера в кастомный хук, подобно тому как в лекции.

## ДЗ 5

1. Стилизовать приложение, используем модули и помним про внешние/внутренние. Стилизуем на свой вкус
2. Добавляем контекст темы. Кнопка переключения темы в шапке. По клику на кнопку все кнопки меняют тему(стили с дефолтных на альтернативные), а кнопка смены темы остается без изменений в стилях
3. Добавляем контекст пользователя. В шапке делаем кнопку войти, по клику на кнопку добавляем в контекст мок-пользователя(просто имя любое). Если пользователь авторизован(есть в контексте имя), то кнопку войти меняем на имя пользователя и кнопку выйти, по клику на выйти убираем пользователя из контекста и снова рисуем кнопку войти. Кнопки +/- у блюда рисуются только для авторизованного пользователя.

## ДЗ 6

1. Установить библиотеки reduxToolkit и React-Redux
2. Сконфигурировать стор
3. Скопирать нормализованные мокковые данные (materials/normalized-mock.js в этом проекте)
4. Создать 4 модуля(слайсами): рестораны, блюда, отзывы, юзеры
5. Отобразить данные из стора в приложении(заменить старые данные на данные из стора)
