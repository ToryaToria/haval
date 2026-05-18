# haval
Тестовое задание

[рабочая ссылка](toryatoria.github.io/haval/)

Проект на GitHub: [HAVAL](https://github.com/ToryaToria/haval)

[Техническое задание](https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FVpUEiJzL9lqR4FvyMg9rfGuUfWOLc0d9ICsKM0o2%2BT4zN6PBxjEwbEE2tLyje%2BXTq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5.docx)

[макет](https://www.figma.com/design/ZMJlaiLSjOJ0dPuXEVt1sC/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=1-22&t=YuaVW3VJZpuqrG3n-0)


## Сборка

Поддерживаемая версия сборки 22+
- `npm install` установка зависимостей;

- `npm start` запускает сервер для разработки;
- `npm run build` собирает оптимизированную версию проекта в папке `dist`;
- `npm run preview` запускает сервер с оптимизированной версией; (запускается после `npm run build`)

### Для самопроверки

В проекте используется множество дополнительных инструментов для самопроверки:

- `npm run w3c`: проверяет валидность HTML;
- `npm run linthtml`: проверяет разметку по правилам linthtml;
- `npm run html-validate`: проверяет HTML;
- `npm run lint-bem`: проверяет БЭМ;
- `npm run stylelint`: проверяет стили по правилам stylelint;
- `npm run ls-lint`: проверяет именование файлов и папок;
- `npm run editorconfig`: проверяет editorconfig.
