"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

function CardPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {

    const bodyFormData = new FormData();
    bodyFormData.append('city', 'Kant');
    bodyFormData.append('country', 'Kyrgyzstan');
    bodyFormData.append('address', 'Pushkina');
    bodyFormData.append('zip', '72300');
    bodyFormData.append('phone', '707888888');
    bodyFormData.append('email', 'admin@gmail.com');

    const res = await axios.request({
      method: "POST",
      url: "/api/card",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(res)
  };

  return (
    <div className="justify-center h-[calc(100vh-4rem)] flex items-center">
        <button onClick={handleSubmit} className="bg-indigo-500 px-4 py-2" type="submit">
          Create
        </button>
    </div>
  );
}

export default CardPage;