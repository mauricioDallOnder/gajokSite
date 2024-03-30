// Supondo que este seja o seu componente GalleryPage.tsx
'use client'
import React, { useState, useEffect } from 'react';
import AuthButton from '../components/AuthButton';

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<InstagramMedia[]>([]);

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch('/api/instagram-photos');
      const data = await response.json();

      if (response.ok) {
        setPhotos(data);
      } else {
        console.error(data.error);
      }
    }

    fetchPhotos();
  }, []);

  return (
    <div>
      <div>
        <AuthButton />
      </div>
      <h1>Galeria do Instagram</h1>
      {/* Aqui você renderiza as fotos com base no estado `photos` */}
      {photos.map(photo => (
        <div key={photo.id}>
          <img src={photo.media_url} alt={photo.caption} />
          <p>{photo.caption}</p>
        </div>
      ))}
    </div>
  );
}
