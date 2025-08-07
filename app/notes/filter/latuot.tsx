export default function NotesLayout({ children, sidebar }: {
    children: React.ReactNode;
    sidebar: React.ReactNode;
}) {
    return (
        <div>
            <aside>{sidebar}</aside>
            <main>{children}</main>
        </div>
    )
}