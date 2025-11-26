import React, { useState } from 'react';
import './NoteApp.css';

function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Добавление заметки
  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, {
        id: Date.now(),
        text: newNote,
        date: new Date().toLocaleDateString()
      }]);
      setNewNote('');
    }
  };

  // Удаление заметки
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  // Начало редактирования
  const startEdit = (note) => {
    setEditingId(note.id);
    setEditText(note.text);
  };

  // Сохранение изменений
  const saveEdit = () => {
    if (editText.trim() !== '') {
      setNotes(notes.map(note =>
        note.id === editingId 
          ? { ...note, text: editText }
          : note
      ));
      cancelEdit();
    }
  };

  // Отмена редактирования
  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="note-app">
      <h1>Мои заметки</h1>
      
      {/* Форма добавления */}
      <div className="add-note">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Введите новую заметку..."
          onKeyPress={(e) => e.key === 'Enter' && addNote()}
        />
        <button onClick={addNote}>Добавить</button>
      </div>

      {/* Список заметок */}
      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="empty">Заметок пока нет</p>
        ) : (
          notes.map(note => (
            <div key={note.id} className="note">
              {/* Режим редактирования */}
              {editingId === note.id ? (
                <div className="edit-mode">
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="edit-input"
                    rows="3"
                  />
                  <div className="edit-buttons">
                    <button onClick={saveEdit} className="save-btn">
                      Сохранить
                    </button>
                    <button onClick={cancelEdit} className="cancel-btn">
                      Отмена
                    </button>
                  </div>
                </div>
              ) : (
                /* Режим просмотра */
                <>
                  <div className="note-text">{note.text}</div>
                  <div className="note-footer">
                    <span className="note-date">{note.date}</span>
                    <div className="note-actions">
                      <button 
                        onClick={() => startEdit(note)}
                        className="edit-btn"
                      >
                        Редактировать
                      </button>
                      <button 
                        onClick={() => deleteNote(note.id)}
                        className="delete-btn"
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NoteApp;