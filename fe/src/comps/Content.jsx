import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import uri from "./../constants.js";

const Content = () => {
  const navigate = useNavigate();
  const [videoIndex, setVideoIndex] = useState(0);
  const [lang, setLang] = useState("english");
  const [ageGroup, setAgeGroup] = useState("");
  const [link, setLink] = useState("oxBuWZtjl0U");

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (!JSON.parse(data)) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const age = JSON.parse(localStorage.getItem("user")).age;
    if (age > 45) {
      setAgeGroup("olderAdults");
    } else {
      if (age >19) {
        setAgeGroup("youngerAdults");
      } else {
        setAgeGroup("kids");
      }
    }
    const run = () => {
      setLink(
        `https://www.youtube.com/embed/${uri[lang][ageGroup]?.[videoIndex]}?controls=0`
      );
    };
    run();
  }, [lang, ageGroup, videoIndex]);

  const handleSignOut = async () => {
    localStorage.clear();
    navigate("/login");
  };


  return (
    <>
      <div className="h-dvh flex justify-center items-center p-4 flex-col container mx-auto">
        <select
          id="language"
          defaultValue={lang}
          onChange={(e) => {
            setLang(e.target.value);
            setLink(link);
          }}
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        {
          <iframe
            className="rounded-lg aspect-video w-full"
            src={link}
            title="FRIENDS"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            controls="0"
          ></iframe>
        }
        <div className="flex mt-2">
          <button
            className="bg-blue-gem-500 px-4 py-2 rounded-md font-bold text-blue-gem-50 mr-2"
            onClick={handleSignOut}
          >
            Sign out
          </button>
          <button
            className="bg-blue-gem-500 px-4 py-2 rounded-md font-bold text-blue-gem-50 mr-2"
            onClick={() => {
              navigate("/more");
            }}
          >
            Read more
          </button>
          <button
            className="bg-blue-gem-500 px-4 py-2 rounded-md font-bold text-blue-gem-50"
            onClick={() => {
              setVideoIndex(videoIndex + 1);
              setLink(
                `https://www.youtube.com/embed/${uri[lang][ageGroup][videoIndex]}`
              );
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Content;
