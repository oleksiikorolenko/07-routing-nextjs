'use client';

import css from './NotePreview.module.css';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { fetchNoteById } from '@/lib/api';
import NotePreviewModal from '@/components/NotePreviewModal/NotePreviewModal';

export default function NotePreview() {
    const router = useRouter();
    const close = () => router.back();
    const { id } = useParams<{ id: string }>();
    
    const { data, isLoading, isError } = useQuery({
        queryKey: ['note', id],
        queryFn: () => fetchNoteById(id),
        refetchOnMount: false,
    });
    
     if (isLoading) return <p>Loading, please wait...</p>;
  if (isError) return <p>Something went wrong.</p>;
  if (!data) return <p>Note not found</p>

    return (
        <NotePreviewModal>
        <div className={css.container}>
	<div className={css.item}>
	  <div className={css.header}>
                    <h2>{data.title}</h2>
	  </div>
                <p className={css.content}>{data.content}</p>
                <p className={css.date}>{new Date(data.createdAt).toLocaleString()}</p>
                </div>
                <button onClick={close} className={css.backBtn}>Close</button>
            </div>
            </NotePreviewModal>
    );


}