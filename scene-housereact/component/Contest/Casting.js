import React, { useEffect, useState } from "react";
import "./Casting.css";
import Button from "../Button/Button";
import CastingItemDetail from "./CastingItemDetail";
import prev from "../../img/prev.svg";
import next from "../../img/next.svg";
import Footer from "../Footer";

const dummyData = [
  {
    id: 1,
    team: "컷앤롤 (Cut & Roll) 팀",
    title: "공포/호러 배우 공고 모집중",
    tags: ["전지역 지원 가능", "직장인 환영", "나이 무관"],
    date: "2025.05.01",
    dday: "D-1",
  },  {
    id: 2,
    team: "컷앤롤 (Cut & Roll) 팀",
    title: "공포/호러 배우 공고 모집중",
    tags: ["전지역 지원 가능", "직장인 환영", "나이 무관"],
    date: "2025.05.01",
    dday: "D-1",
  },
   {
    id: 3,
    team: "컷앤롤 (Cut & Roll) 팀",
    title: "공포/호러 배우 공고 모집중",
    tags: ["전지역 지원 가능", "직장인 환영", "나이 무관"],
    date: "2025.05.01",
    dday: "D-1",
  },
     {
    id: 4,
    team: "컷앤롤 (Cut & Roll) 팀",
    title: "공포/호러 배우 공고 모집중",
    tags: ["전지역 지원 가능", "직장인 환영", "나이 무관"],
    date: "2025.05.01",
    dday: "D-1",
  },
       {
    id: 5,
    team: "컷앤롤 (Cut & Roll) 팀",
    title: "공포/호러 배우 공고 모집중",
    tags: ["전지역 지원 가능", "직장인 환영", "나이 무관"],
    date: "2025.05.01",
    dday: "D-1",
  },
    {
    id: 6,
    team: "컷앤롤 (Cut & Roll) 팀",
    title: "공포/호러 배우 공고 모집중",
    tags: ["전지역 지원 가능", "직장인 환영", "나이 무관"],
    date: "2025.05.01",
    dday: "D-1",
  },
      {
    id: 7,
    team: "컷앤롤 (Cut & Roll) 팀",
    title: "공포/호러 배우 공고 모집중",
    tags: ["전지역 지원 가능", "직장인 환영", "나이 무관"],
    date: "2025.05.01",
    dday: "D-1",
  },
     {
    id: 8,
    team: "컷앤롤 (Cut & Roll) 팀",
    title: "공포/호러 배우 공고 모집중",
    tags: ["전지역 지원 가능", "직장인 환영", "나이 무관"],
    date: "2025.05.01",
    dday: "D-1",
  },
   {
    id: 9,
    team: "컷앤롤 (Cut & Roll) 팀",
    title: "공포/호러 배우 공고 모집중",
    tags: ["전지역 지원 가능", "직장인 환영", "나이 무관"],
    date: "2025.05.01",
    dday: "마감",
  },
  // 필요시 더 추가
];

function Casting() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    document.body.classList.add("Casting");
    return () => {
      document.body.classList.remove("Casting");
    };
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDetail(true);
  };

  const handleBack = () => {
    setShowDetail(false);
    setSelectedItem(null);
  };

  if (showDetail && selectedItem) {
    return <CastingItemDetail data={selectedItem} onBack={handleBack} />;
  }

  return (
    <div>

   
    <div className="CastingWrap">
      <div className="castingall">
        <div className="top">
          <div className="casttit">
            <h3>진행중인</h3>
            <div className="b4">모집공고</div>
          </div>
          <div className="btns">
            <Button type="whitemidbtn">내가 쓴 모집글</Button>
            <Button type="whitemidbtn">모집글 작성하기</Button>
          </div>
        </div>

        <ul className="castinglist">
          {dummyData.map((item) => (
            <li key={item.id} className="castingitem" onClick={() => handleItemClick(item)}>
              <div className="num">{item.dday}</div>
              <div className="txt">
                <div className="b8">{item.team}</div>
                <div className="b6">{item.title}</div>
                <ul>
                  {item.tags.map((tag, idx) => (
                    <li key={idx} className="b7">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="b8">{item.date}</div>
              </div>
            </li>
          ))}
        </ul>

        <div className="pager">
          <img src={prev} alt="prev" />
          <ul className="pagenum">
            {[1, 2, 3].map((num) => (
              <li
                key={num}
                className={activePage === num ? "active" : ""}
                onClick={() => setActivePage(num)}
              >
                {num}
              </li>
            ))}
          </ul>
          <img src={next} alt="next" />
        </div>
      </div>
    </div>
      <Footer />
     </div>
  );
}

export default Casting;