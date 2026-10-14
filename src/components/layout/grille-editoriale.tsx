export function GrilleEditoriale() {
  return (
    <div className="editorial-grid-lines" aria-hidden="true">
      {Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="grid-line-col" />
      ))}
    </div>
  );
}
