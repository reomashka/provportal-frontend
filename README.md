### **ProvPortal by romashka (PP Team)**

technologies:

- React
- Redux
- Lucide icons
- Module SCSS
- nginx

- Nest.JS
- git
- postgreSQL
- Prisma
- Docker
- Swagger

- Яндекс Метрика
- Google Serch Console

**Документация фронтенд**

На клиентской части портала используется React с модульной архитектурой. В папке `src/modules` хранятся модули разных частей сайтов. Важно, модуль != страница. В модулях используются компоненты актуальны только для конкретного модуля и нигде больше не могут быть использованы.

Папка `src/pages` хранит в себе папки со страницами. на странице мы используем только глобальные компоненты из src/components и модули. Никакой бизнес логики.

В /src/modules/{titleOfModule}/index.ts мы эксопртируем только компонент из папки /src/modules/{titleOfModule}/components/{titleOfModule} который повторяет название модуля и больше ничего. В этом компоненте, который повторяет название модуля, будут скреплены и импортированы все остальные компоненты модуля, такое связуещее звено. В дальнейшем в src/pages импортируем этот index.ts, это и есть наш готовый модуль.
