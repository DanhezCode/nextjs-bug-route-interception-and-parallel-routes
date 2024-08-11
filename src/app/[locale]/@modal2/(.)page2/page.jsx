// "use client";
// import { useRouter } from "next/navigation";
// import { useCallback, useEffect, useState } from "react";
import sleep from "@/utils/sleep";

async function ModalPage() {
  await sleep(2000);
  // I also tried with a much more minimalist version only exporting a
  // text and no interactivity and it still gave me the same error, the
  // problem is in the dynamic segment [locale] if I delete it with
  // exactly the same example it works perfectly fine

  // const router = useRouter();
  // const [isOpen, setIsOpen] = useState(true);

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isOpen]);

  // const onClose = useCallback(() => {
  //   setIsOpen(false);
  //   router.back();
  // }, [router]);

  return (
    <div
      className="min-w-[18rem] fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
      // onClick={onClose}
    >
      <dialog
        // open={isOpen}
        className="w-11/12 max-w-80 flex flex-col justify-center items-center gap-4 p-6 rounded-lg bg-gray-100"
      >
        Modal 2
      </dialog>
    </div>
  );
}

export default ModalPage;
