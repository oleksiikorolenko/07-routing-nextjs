

import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";


type Props = {
  params: { slug?: string[] };
}

export default async function FilteredNotesPage({ params }: Props) {
 
  const tag = params.slug?.[0] ?? "All";

  const initialNotes = await fetchNotes({
    page: 1,
    perPage: 12,
    ...(tag !== "All" ? { tag } : {})

  });
  
  return (
    <NotesClient initialNotes={initialNotes} tag={tag} />
  )
}












