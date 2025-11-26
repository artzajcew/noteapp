# Контрольная работа: React-приложение "NoteApp"

## Описание приложения

NoteApp - одностраничное React-приложение для управления текстовыми заметками. Приложение демонстрирует основные концепции React: работа с компонентами, состоянием, событиями и локальным хранением данных.

## Основные возможности

- **CRUD-операции**: Создание, просмотр, редактирование и удаление заметок
- **Локальное хранение**: Сохранение данных в localStorage браузера
- **Интерактивный интерфейс**: Реализация режима редактирования с возможностью отмены изменений
- **Валидация данных**: Проверка вводимых пользователем данных

## Технические особенности реализации

### Архитектура приложения
Приложение построено на функциональных компонентах с использованием React Hooks:

- `useState` для управления состоянием компонента
- `useEffect` для работы с побочными эффектами (localStorage)

### Компонентная структура
App (корневой компонент)
└── NoteApp (основной компонент приложения)
├── AddNoteForm (форма добавления)
├── NotesList (список заметок)
└── NoteItem (отдельная заметка)

### Управление состоянием
```javascript
const [notes, setNotes] = useState([])
const [newNote, setNewNote] = useState('')
const [editingId, setEditingId] = useState(null)
const [editText, setEditText] = useState('')
Инструкция по запуску
Предварительные требования
Node.js версии 14 или выше

Менеджер пакетов npm

Установка и запуск
bash
# Клонирование репозитория
git clone <url-репозитория>
cd noteapp

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm start
Приложение будет доступно по адресу http://localhost:3000
![Главный экран](https://github.com/artzajcew/noteapp/blob/main/screenshots/main.png?raw=true)
![Редактирование](https://github.com/artzajcew/noteapp/blob/main/screenshots/edit.png?raw=true)
![Все заметки](https://github.com/artzajcew/noteapp/blob/main/screenshots/full.png?raw=true)