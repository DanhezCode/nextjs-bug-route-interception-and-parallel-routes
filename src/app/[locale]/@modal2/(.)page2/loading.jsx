async function LoadingPage() {
  return (
    <div className="min-w-[18rem] fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <dialog className="w-11/12 max-w-80 flex flex-col justify-center items-center gap-4 p-6 rounded-lg bg-gray-100">
        Loading...
      </dialog>
    </div>
  );
}

export default LoadingPage;
