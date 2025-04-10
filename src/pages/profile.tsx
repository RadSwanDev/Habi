import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../component/Navigation";

interface ProfileData {
  username: string;
  email: string;
  telepon: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
}

export default function Profile() {
  const [data, setData] = useState<ProfileData>({
    username: "",
    email: "",
    telepon: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
  });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/dashboard/profile", {
        withCredentials: true,
      });
      setData(response.data.data[0]);
      console.log(response);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navigation />

      <div className="flex flex-col justify-between min-h-screen mt-20 p-4 bg-gray-50 shadow max-w-4xl mx-auto">
        <div className="flex flex-col p-1 border-b-2 border-gray-200">
          <div className="flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-6 py-3 rounded-md transition duration-200">
              Edit Profile
            </button>
          </div>
          <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/djqcclsok/image/upload/v1743112742/Profile_pictures/h9ziabduivtrk2fi1b36.jpg"
            alt="Foto Profil"
            className="h-52 w-52 rounded-full object-cover shadow-2xl"
          />
          </div>
        </div>

        <div className="mb-50 space-y-4 px-4 md:px-10">
          {[
            { label: "Username", value: data.username },
            { label: "Email", value: data.email },
            { label: "No Telepon", value: data.telepon },
            { label: "Tanggal Lahir", value: data.tanggal_lahir },
            { label: "Jenis Kelamin", value: data.jenis_kelamin },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col md:flex-row md:items-center gap-2">
              <p className="w-40 text-lg md:text-2xl">{label}:</p>
              <input
                type="text"
                value={value}
                disabled
                className="w-full md:w-auto text-lg md:text-2xl bg-gray-200 px-3 py-2 rounded border-b"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
