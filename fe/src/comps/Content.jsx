import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import uri from "./../constants.js";

const Content = () => {
  const navigate = useNavigate();
  const [videoIndex, setVideoIndex] = useState(0);
  const [lang, setLang] = useState("english");
  const [ageGroup, setAgeGroup] = useState("");
  const [link, setLink] = useState("oxBuWZtjl0U");
  const [ageText, setAgeText] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (!JSON.parse(data)) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (uri[lang][ageGroup]?.length == videoIndex + 1) {
      setVideoIndex(0);
    }

    if (videoIndex == 0) {
      setVideoIndex(0);
    }
  }, [videoIndex]);

  useEffect(() => {
    const age = JSON.parse(localStorage.getItem("user")).age;

    if (age > 35) {
      setAgeGroup("olderAdults");
      setAgeText("older adults");
    } else {
      if (age > 19) {
        setAgeGroup("youngerAdults");
        setAgeText("younger adults");
      } else {
        setAgeGroup("kid");
        setAgeText("kids");
      }
    }
  }, []);

  useEffect(() => {
    setLink(
      `https://www.youtube.com/embed/${uri[lang][ageGroup]?.[videoIndex]}`
    );
    console.log(uri[lang]);
  }, [lang, ageGroup, videoIndex]);

  const handleSignOut = async () => {
    localStorage.clear();
    navigate("/login");
  };

  // console.log(uri[lang]);
  return (
    <>
      <div className="h-dvh flex justify-center items-center p-4 flex-col container mx-auto">
        <select
          id="ageGroup"
          defaultValue={ageGroup}
          onChange={(e) => {
            setAgeGroup(e.target.value);
          }}
        >
          <option disabled={true}>select age group</option>
          <option value="olderAdults">Older Adults</option>
          <option value="youngerAdults">Younger Adults</option>
          <option value="kid">kids</option>
        </select>

        <select
          id="language"
          defaultValue={lang}
          onChange={(e) => {
            setLang(e.target.value);
          }}
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        <iframe
          className="rounded-lg aspect-video w-full"
          src={link}
          title="FRIENDS"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          controls="0"
        ></iframe>
        <span>This is for {ageText}</span>
        <div className="flex mt-2">
          <button
            disabled={videoIndex == 0}
            className="bg-blue-gem-500 px-4 py-2 rounded-md font-bold text-blue-gem-50"
            onClick={() => {
              if (videoIndex != 0) {
                setVideoIndex(videoIndex - 1);
              }
            }}
          >
            Previous
          </button>
          <button
            className="bg-blue-gem-500 px-4 py-2 rounded-md font-bold text-blue-gem-50 mx-2"
            onClick={handleSignOut}
          >
            Sign out
          </button>

          <button
            className="bg-blue-gem-500 px-4 py-2 rounded-md font-bold text-blue-gem-50"
            onClick={() => {
              setVideoIndex(videoIndex + 1);
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
