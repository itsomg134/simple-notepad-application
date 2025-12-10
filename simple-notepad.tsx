import React, { useState, useEffect } from 'react';
import { Save, FileText, Trash2 } from 'lucide-react';

export default function Notepad() {
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const result = await window.storage.list('note:');
      if (result && result.keys) {
        const notesList = await Promise.all(
          result.keys.map(async (key) => {
            try {
              const data = await window.storage.get(key);
              return data ? { key, ...JSON.parse(data.value) } : null;
            } catch {
              return null;
            }
          })
        );
        setNotes(notesList.filter(Boolean).sort((a, b) => b.timestamp - a.timestamp));
      }
    } catch (error) {
      console.log('No existing notes found');
    } finally {
      setLoading(false);
    }
  };

  const saveNote = async () => {
    if (!content.trim()) return;
    
    setSaving(true);
    try {
      const timestamp = Date.now();
      const noteId = currentNote?.key.split(':')[1] || timestamp.toString();
      const noteData = {
        content,
        timestamp,
        preview: content.substring(0, 50)
      };
      
      await window.storage.set(`note:${noteId}`, JSON.stringify(noteData));
      await loadNotes();
      setCurrentNote({ key: `note:${noteId}`, ...noteData });
    } catch (error) {
      console.error('Save failed:', error);
    } finally {
      setSaving(false);
    }
  };

  const loadNote = async (note) => {
    setContent(note.content);
    setCurrentNote(note);
  };

  const newNote = () => {
    setContent('');
    setCurrentNote(null);
  };

  const deleteNote = async (note, e) => {
    e.stopPropagation();
    try {
      await window.storage.delete(note.key);
      if (currentNote?.key === note.key) {
        newNote();
      }
      await loadNotes();
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={newNote}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center gap-2"
          >
            <FileText size={18} />
            New Note
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {notes.map((note) => (
            <div
              key={note.key}
              onClick={() => loadNote(note)}
              className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                currentNote?.key === note.key ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {note.preview || 'Empty note'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(note.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={(e) => deleteNote(note, e)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main editor */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            {currentNote ? 'Edit Note' : 'New Note'}
          </h1>
          <button
            onClick={saveNote}
            disabled={saving || !content.trim()}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Save size={18} />
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
        
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start typing your note..."
          className="flex-1 p-6 text-gray-800 resize-none focus:outline-none"
        />
      </div>
    </div>
  );
}