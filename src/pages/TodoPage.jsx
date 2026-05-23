import React, { useState } from 'react';

function TodoPage() {
  const [gorekler, setGorevler] = useState([]);
  const [yeniGorev, setYeniGorev] = useState("");

  const gorevEkle = () => {
    if (yeniGorev.trim() === "") return;
    const yeniEleman = {
      id: Date.now(),
      metin: yeniGorev,
      tamamlandi: false
    };
    setGorevler([...gorekler, yeniEleman]);
    setYeniGorev("");
  };

  const gorevSil = (id) => {
    setGorevler(gorekler.filter(gorev => gorev.id !== id));
  };

  const gorevDurumDegistir = (id) => {
    setGorevler(gorekler.map(gorev => 
      gorev.id === id ? { ...gorev, tamamlandi: !gorev.tamamlandi } : gorev
    ));
  };

  return (
    <div style={{ 
      maxWidth: '550px', 
      margin: '60px auto', 
      backgroundColor: '#ffffff', 
      padding: '40px', 
      borderRadius: '16px', 
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      border: '1px solid #f3f4f6'
    }}>
      
      {/* BAŞLIK */}
      <h2 style={{ 
        textAlign: 'center', 
        color: '#1e293b', 
        fontFamily: '"Poppins", sans-serif',
        fontSize: '28px',
        fontWeight: '700',
        marginBottom: '8px'
      }}>
        ✨ Task Master
      </h2>
      <p style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginBottom: '30px' }}>
        Modern Web Geliştirme Projesi
      </p>
      
      {/* GİRİŞ ALANI */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '25px' }}>
        <input 
          type="text" 
          placeholder="Yapılacak bir görev girin..." 
          value={yeniGorev}
          onChange={(e) => setYeniGorev(e.target.value)}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          style={{ 
            flex: 1, 
            padding: '14px 20px', 
            borderRadius: '12px', 
            border: '2px solid #e2e8f0', 
            fontSize: '15px',
            outline: 'none',
            transition: 'border-color 0.2s',
            backgroundColor: '#f8fafc'
          }}
        />
        <button 
          onClick={gorevEkle}
          style={{ 
            padding: '14px 28px', 
            backgroundColor: '#4f46e5', 
            color: 'white', 
            border: 'none', 
            borderRadius: '12px', 
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: '600',
            transition: 'background-color 0.2s',
            boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.2)'
          }}
        >
          Ekle
        </button>
      </div>

      {/* GÖREV LİSTESİ */}
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {gorekler.map((gorev) => (
          <li 
            key={gorev.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '16px 20px', 
              marginBottom: '12px',
              borderRadius: '12px',
              backgroundColor: gorev.tamamlandi ? '#f0fdf4' : '#ffffff', 
              border: gorev.tamamlandi ? '1px solid #bbf7d0' : '1px solid #e2e8f0',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}
          >
            {/* Görev Metni */}
            <span 
              onClick={() => gorevDurumDegistir(gorev.id)}
              style={{ 
                cursor: 'pointer', 
                textDecoration: gorev.tamamlandi ? 'line-through' : 'none',
                color: gorev.tamamlandi ? '#16a34a' : '#334155',
                fontSize: '15px',
                fontWeight: '500',
                flex: 1,
                userSelect: 'none'
              }}
            >
              {gorev.tamamlandi ? '✅ ' : '⭕ '} {gorev.metin}
            </span>

            {/* Silme Butonu */}
            <button 
              onClick={() => gorevSil(gorev.id)}
              style={{ 
                backgroundColor: '#fee2e2', 
                color: '#ef4444', 
                border: 'none', 
                padding: '8px 14px', 
                borderRadius: '8px', 
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '600',
                transition: 'all 0.2s'
              }}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>

      {/* BOŞ LİSTE UYARISI */}
      {gorekler.length === 0 && (
        <div style={{ textAlign: 'center', padding: '30px 0' }}>
          <span style={{ fontSize: '40px' }}>📋</span>
          <p style={{ color: '#94a3b8', margin: '10px 0 0 0', fontSize: '14px' }}>Henüz bir görev eklenmedi. Harika bir gün!</p>
        </div>
      )}
    </div>
  );
}

export default TodoPage;