export default function Header() {
  return (
    <div className="flex min-h-dvh">
      <div className="grid w-1/2 justify-center items-center bg-white min-w-fit">
        <h1 className="text-5xl px-5 whitespace-nowrap">Amanda Petrakis</h1>
      </div>
      <div className="grid w-1/2 justify-items-center place-content-center bg-medium">
        <img
          className="grayscale w-1/2 shadow-dark shadow-lg"
          src="src/assets/avatar.png"
        />
      </div>
    </div>
  );
}
