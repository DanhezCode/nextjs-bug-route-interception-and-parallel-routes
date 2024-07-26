"use client";

import Link from "next/link";

function LinkSignin({ locale }) {
  return <Link href={`/${locale}/signin`}>Iniciar Session</Link>;
}

export default LinkSignin;
