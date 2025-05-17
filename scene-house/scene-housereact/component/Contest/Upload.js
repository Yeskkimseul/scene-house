import React from "react";
import "./Upload.css";
import linkicon from "../../img/link.svg"
import Button from "../Button/Button";



function Upload({ setActiveTab }) {
  return (
    <div className="uploadpg">
      <div className="uploadCon">

        <div className="b4">
          작품 업로드
        </div>
        <div className="uploadsetting">
          <section className="uploadTit">
            <div className="b5">
              작품명
            </div>
            <input className="textinput" type="text" placeholder="작품명을 입력해주세요"></input>
          </section>

          <section className="uploadtype">
            <div className="b5">
              형식
            </div>
            <ul className="cklist">
              <li className="checkbox" key="movie">
                <label>
                  <input type="checkbox" />
                  <span className="checkmark" />
                  영화
                </label>
              </li>
              <li className="checkbox" key="animation">
                <label>
                  <input type="checkbox" />
                  <span className="checkmark" />
                  드라마
                </label>
              </li>
              <li className="checkbox" key="animation">
                <label>
                  <input type="checkbox" />
                  <span className="checkmark" />
                  예능
                </label>
              </li>
            </ul>
          </section>

          <section className="genre">
            <div className="b5">
              장르
            </div>
            <ul className="cklist">
              <li className="checkbox" key="movie">
                <label>
                  <input type="checkbox" />
                  <span className="checkmark" />
                  로맨스
                </label>
              </li>
              <li className="checkbox" key="animation">
                <label>
                  <input type="checkbox" />
                  <span className="checkmark" />
                  판타지
                </label>
              </li>
              <li className="checkbox" key="animation">
                <label>
                  <input type="checkbox" />
                  <span className="checkmark" />
                  액션
                </label>
              </li>
              <li className="checkbox" key="animation">
                <label>
                  <input type="checkbox" />
                  <span className="checkmark" />
                  일상
                </label>
              </li>

              <li className="checkbox" key="movie">
                <label>
                  <input type="checkbox" />
                  <span className="checkmark" />
                  스릴러
                </label>
              </li>
              <li className="checkbox" key="animation">
                <label>
                  <input type="checkbox" />
                  <span className="checkmark" />
                  코미디
                </label>
              </li>
              <li className="checkbox" key="animation">
                <label>
                  <input type="checkbox" />
                  <span className="checkmark" />
                  무협/사극
                </label>
              </li>
              <li className="checkbox" key="animation">
                <label>
                  <input type="checkbox" />
                  <span className="checkmark" />
                  감성
                </label>
              </li>
              <li className="checkbox" key="animation">
                <label>
                  <input type="checkbox" />
                  <span className="checkmark" />
                  기타
                  <div className="input_btn">
                    <input className="textinput" placeholder="url을 입력하세요" />
                  </div>
                </label>

              </li>
            </ul>
          </section>

          <section className="uploadfile">
            <div className="b5">
              작품 업로드
            </div>
            <div className="inputlink">
              <img src={linkicon} alt="link" />
              <div className="input_btn">
                <input className="textinput" placeholder="url을 입력하세요" />
                <Button type="sm_check">확인</Button>
              </div>
            </div>
          </section>
        </div>
        <div className="btns">
          <Button type="bigbt_pos" onClick={() => setActiveTab("작품 관리")}>등록하기</Button>
        </div>
      </div>
    </div>
  );
}

export default Upload;