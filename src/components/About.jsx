import React from "react";
import "./About.css";
import { GiFamilyTree } from "react-icons/gi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPostcardHeart } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";

function About() {
  return (
    <section className="section__about">
      <div className="container">
        <div className="about__img"></div>
        <div className="about__top">
          <h1 className="about__h1">Who are We</h1>
          <p className="about__p">Get the Forecast You Deserve</p>
        </div>
        <div className="about__lorem__container">
          <div className="about__lorem__1">
            <GiFamilyTree className="icon" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              laboriosam a quo quas, exercitationem at totam dolor vitae
              voluptates, dicta quos quaerat atque labore. Rerum id aspernatur
              quis modi beatae?
            </p>
          </div>
          <div className="about__lorem__1">
            <AiOutlineHeart className="icon" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              laboriosam a quo quas, exercitationem at totam dolor vitae
              voluptates, dicta quos quaerat atque labore. Rerum id aspernatur
              quis modi beatae?
            </p>
          </div>
          <div className="about__lorem__1">
            <HiOutlineOfficeBuilding className="icon" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              laboriosam a quo quas, exercitationem at totam dolor vitae
              voluptates, dicta quos quaerat atque labore. Rerum id aspernatur
              quis modi beatae?
            </p>
          </div>
        </div>
        <div className="middle__container">
          <div src="" alt="" className="middle__img" />
        </div>
        <div className="about__bottom__container">
          <BsPostcardHeart className="icon" />
          <p className="about__bottom__lorem__1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet
            doloribus praesentium voluptate expedita reiciendis error ipsum
            nulla, ipsam a culpa exercitationem temporibus harum sit itaque rem
            quibusdam cupiditate assumenda?
          </p>
        </div>

        <div className="about__bottom__container">
          <BiCommentDetail className="icon" />
          <p className="about__bottom__lorem__1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet
            doloribus praesentium voluptate expedita reiciendis error ipsum
            nulla, ipsam a culpa exercitationem temporibus harum sit itaque rem
            quibusdam cupiditate assumenda?
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
