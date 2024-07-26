"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

function SignInModalPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
    router.back();
  }, [router]);

  return (
    <div
      className="min-w-[18rem] fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
      onClick={onClose}
    >
      <dialog
        open={isOpen}
        className="w-11/12 max-w-80 flex flex-col justify-center items-center gap-4 p-6 rounded-lg bg-gray-100"
      >
        <button className={`w-full py-2 px-4`}>SignInModalPage</button>

        <button className={`w-full py-2 px-4`}>SignInModalPage</button>
      </dialog>
    </div>
  );
}

export default SignInModalPage;
