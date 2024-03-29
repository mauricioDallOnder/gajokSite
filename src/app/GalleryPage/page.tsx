'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import AuthButton from '../components/AuthButton';

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
}

export default function GalleryPage()  {
  const [photos, setPhotos] = useState<InstagramMedia[]>([]);

  

  return (
    <div>
        <div>
      <AuthButton/>
    </div>
      <h1>Galeria do Instagram</h1>
     
    </div>
  );
};


