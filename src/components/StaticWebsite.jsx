import styled from "styled-components";
import { useEffect, useState } from "react";

const BioLinks = styled.a`
  color: white;
  font-weight: 600;
  text-decoration: none;
`;

const MainDiv = styled.div`
  width: 80vw;
  height: 260vh;
  background: transparent;
  display: flex;
`;

const LeftDiv = styled.div`
  width: 50%;
  height: 100%;
  background: transparent;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 6rem;
  padding-right: 2rem;
`;

const RightDiv = styled.div`
  width: 50%;
  height: 100%;
  background: #0f172a;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 2rem;
  padding-right: 6rem;
`;

const SectionLine = styled.div`
  width: 2.5rem;
  height: 0.1rem;
  background: #fff;
  transition: width 0.1s ease-in-out;
`;

const SectionDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  &:hover ${SectionLine} {
    width: 5rem; // Change this to the desired width
  }
`;

const Break = styled.div`
  height: 4rem;
`;

const SectionText = styled.div``;

const SocialIconsDiv = styled.div``;

const BioSection = styled.div`
  line-height: 1.625rem;
  margin-bottom: 1rem;
  color: grey;
  font-size: 1.1rem;
`;

const ExperienceSection = styled.div``;

const ExperienceCard = styled.div`
  display: flex;
  padding: 1.5rem;
  opacity: ${(props) => (props.isHovered ? 1 : props.isAnyHovered ? 0.5 : 1)};
  background-color: ${(props) =>
    props.isHovered ? "rgba(255, 255, 255, 0.04)" : "rgba(0,0,0,0)"};
  border-radius: 1rem;
  boxshadow ${(props) =>
    props.isHovered ? "0px 0px 10px 0px rgba(0,0,0,0.75)" : "none"};
`;

const ExperienceCardDiv = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ExperienceCardDates = styled.div`
  width: 30%;
  color: #a0aec0;
`;

const ExperienceCardTitleDiv = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ExperienceCardTitleText = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) =>
    props.isHovered ? "#00b2d2" : props.isAnyHovered ? "white" : "white"};
`;

const ExperienceCardTitleIcon = styled.img`
  width: 1rem;
`;

const ExperienceCardDescription = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.001rem; // Adjust the value as needed
  line-height: 1.25rem;
  color: #a0aec0;
`;

const ExperienceCardLinks = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ExperienceCardLink = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ExperienceCardLinkText = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: white;
  text-decoration: none;
`;

const ExperienceCardLinkIcon = styled.img`
  width: 1rem;
`;

const ExperienceCardSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
`;

const ExperienceCardSkill = styled.div`
  background: rgba(0, 178, 210, 0.25);
  opacity: 1;
  border-radius: 1rem;
  color: #00b2d2;
  padding: 0.5rem;
  font-size: 0.75rem;
`;

const MainLink = styled.div`
  dislay: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MainLinkIcon = styled.img`
  width: 1rem;
`;

const MainLinkText = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.25rem;
`;

const NameText = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;

const TitleText = styled.div`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
`;

const ShortBioText = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: grey;
`;
//TODO: need to add arrow and dot to title
const StaticWebsite = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [strokeColor, setStrokeColor] = useState("white");

  // add useEffect to change stroke color on hoverIndex change

  useEffect(() => {
    if (hoverIndex === 0) {
      setStrokeColor("#00b2d2");
    } else if (hoverIndex === 1) {
      setStrokeColor("#00b2d2");
    } else if (hoverIndex === 2) {
      setStrokeColor("#00b2d2");
    } else {
      setStrokeColor("white");
    }
  }, [hoverIndex]);

  return (
    <MainDiv>
      <LeftDiv>
        {/* <NameText>Weston Bushyeager</NameText>
        <TitleText>Software Engineer</TitleText>
        <ShortBioText>I build software that solves problems.</ShortBioText>
        <SectionDiv>
          <SectionLine></SectionLine>
          <SectionText>About</SectionText>
        </SectionDiv>
        <SectionDiv>
          <SectionLine></SectionLine>
          <SectionText>Experience</SectionText>
        </SectionDiv>
        <SectionDiv>
          <SectionLine></SectionLine>
          <SectionText>Projects</SectionText>
        </SectionDiv>
        <SocialIconsDiv>Social Icons</SocialIconsDiv> */}
      </LeftDiv>
      <RightDiv>
        <BioSection>
          {" "}
          My foray into the tech realm began at Penn State in 2014 when I headed
          to college for a degree in Petroleum Engineering. A gen-ed c++ class
          opened up a new world for me, and before I knew it, I was devouring
          Python in my spare time. I originally had a particular penchant for
          web scraping. Even with a freshly minted Petroleum Engineering degree,
          I knew I wanted my career to weave through code, not oil fields.{" "}
          <br></br> <br></br>Starting as a{" "}
          <BioLinks href="https://www.ziprecruiter.com/career/Hydraulic-Fracturing-Engineer/What-Is-How-to-Become">
            Hydraulic Fracturing Engineer
          </BioLinks>
          , I quickly pivoted to{" "}
          <BioLinks href="https://www.geckorobotics.com">
            Gecko Robotics
          </BioLinks>
          , where I rolled up my sleeves as a Field Engineer working with the
          robots. That's where Python became more than a hobby, putting together
          an automated support system using a Slack bot and AWS Lambda, and
          crafting a nifty laser profilometry crawler with PyQt. <br></br>
          <br></br>It was during this chapter, amidst the nuts and bolts of
          robots and code, that I decided to mesh my tech skills with a personal
          interest in sports betting. Tinkering away, I built the first U.S.
          Sports Betting Arbitrage site using Python and cloud computing
          automation. It felt like I was hitting a sweet spot, and soon I had 16
          paying monthly subscribers, each seeking to make smarter bets with my
          website. <br></br>
          <br></br>It wasn't long before I carved out a niche as a Forward
          Deployed Software Engineer at{" "}
          <BioLinks href="https://www.geckorobotics.com">
            Gecko Robotics
          </BioLinks>{" "}
          focusing on{" "}
          <BioLinks href="https://www.popsci.com/technology/gecko-robotics-machine-inspects-navy-ships/">
            work with the U.S. Navy.
          </BioLinks>{" "}
          Starting as the only Software Engineer on the team, we became the
          fastest growing vertical in the company, quickly surpassing millions
          in revenue, and I had the opportunity to travel the world. I dive into
          everything from data pipeline construction,{" "}
          <BioLinks href="https://www.youtube.com/watch?v=2MQsj-3rhMQ&ab_channel=GeckoRobotics">
            asset visualization web apps
          </BioLinks>
          , firmware, and getting hands-on with a tech-stack that spans from the
          familiar Python to TypeScript, React, and beyond. <br></br> <br></br>
          Life isn't all code though. Away from the screen, I'm usually hanging
          out with my friends, wife, and beagle Rusty around Pittsburgh, lacing
          up for a run, traveling, or tackling the latest home improvement
          quest.
        </BioSection>
        <Break />
        <ExperienceSection>
          <ExperienceCard
            isHovered={hoverIndex === 0}
            isAnyHovered={hoverIndex !== -1}
            onMouseEnter={() => setHoverIndex(0)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            <ExperienceCardDates>01/2022 – Present</ExperienceCardDates>
            <ExperienceCardDiv>
              <ExperienceCardTitleDiv>
                <ExperienceCardTitleText
                  isHovered={hoverIndex === 0}
                  isAnyHovered={hoverIndex !== -1}
                >
                  Deployed Software Engineer Gecko Robotics
                </ExperienceCardTitleText>
                <ExperienceCardTitleIcon src="arrow.svg" />
              </ExperienceCardTitleDiv>

              <ExperienceCardDescription>
                Within a dynamic team at Gecko Robotics, I crafted a bespoke
                React application with a Python Flask backend that culminated in
                a $50,000 prize at a Navy competition. I pioneered the
                development of a 3D app leveraging React-Three-Fiber to generate
                digital twin visualizations for enhancing asset inspections. My
                efforts directly strengthened the execution and delivery of Navy
                contracts, contributing over $1M in customer value.
              </ExperienceCardDescription>
              <ExperienceCardLinks>
                <ExperienceCardLink>
                  <ExperienceCardLinkIcon src="link.svg" />

                  <ExperienceCardLinkText href="https://www.popsci.com/technology/gecko-robotics-machine-inspects-navy-ships/">
                    PopSci
                  </ExperienceCardLinkText>
                </ExperienceCardLink>
                <ExperienceCardLink>
                  <ExperienceCardLinkIcon src="link.svg" />
                  <ExperienceCardLinkText href="https://www.youtube.com/watch?v=2MQsj-3rhMQ&t=50s">
                    Software Spotlight
                  </ExperienceCardLinkText>
                </ExperienceCardLink>
              </ExperienceCardLinks>
              <ExperienceCardSkills>
                <ExperienceCardSkill>TypeScript</ExperienceCardSkill>
                <ExperienceCardSkill>Javascript</ExperienceCardSkill>
                <ExperienceCardSkill>React</ExperienceCardSkill>
                <ExperienceCardSkill>Python</ExperienceCardSkill>
                <ExperienceCardSkill>PyQt</ExperienceCardSkill>
                <ExperienceCardSkill>CSS</ExperienceCardSkill>
                <ExperienceCardSkill>HTML</ExperienceCardSkill>
                <ExperienceCardSkill>ThreeJS</ExperienceCardSkill>
              </ExperienceCardSkills>
            </ExperienceCardDiv>
          </ExperienceCard>
          <ExperienceCard
            isHovered={hoverIndex === 1}
            isAnyHovered={hoverIndex !== -1}
            onMouseEnter={() => setHoverIndex(1)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            <ExperienceCardDates>03/2020 – 12/2022</ExperienceCardDates>
            <ExperienceCardDiv>
              <ExperienceCardTitleDiv>
                <ExperienceCardTitleText
                  isHovered={hoverIndex === 1}
                  isAnyHovered={hoverIndex !== -1}
                >
                  Field Engineer Gecko Robotics
                </ExperienceCardTitleText>
                <ExperienceCardTitleIcon src="arrow.svg" />
              </ExperienceCardTitleDiv>

              <ExperienceCardDescription>
                I innovated a laser profilometry surface scanning system,
                integrating advanced components with custom PyQt software to
                enable real-time analysis. My versatility flourished through
                conducting critical ultrasonic inspections and ensuring the
                operational reliability of robotic systems. Additionally, I
                formulated key SOP documents and automated field-issue reporting
                using AWS Lambda within our cloud architecture.
              </ExperienceCardDescription>
              <ExperienceCardSkills>
                <ExperienceCardSkill>Python</ExperienceCardSkill>
                <ExperienceCardSkill>AWS</ExperienceCardSkill>
                <ExperienceCardSkill>SolidWorks</ExperienceCardSkill>
              </ExperienceCardSkills>
            </ExperienceCardDiv>
          </ExperienceCard>
          <ExperienceCard
            isHovered={hoverIndex === 2}
            isAnyHovered={hoverIndex !== -1}
            onMouseEnter={() => setHoverIndex(2)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            <ExperienceCardDates>01/2019 – 03/2020</ExperienceCardDates>
            <ExperienceCardDiv>
              <ExperienceCardTitleDiv>
                <ExperienceCardTitleText
                  isHovered={hoverIndex === 2}
                  isAnyHovered={hoverIndex !== -1}
                >
                  Field Engineer Profrac Services
                </ExperienceCardTitleText>
                <ExperienceCardTitleIcon src="arrow.svg" />
              </ExperienceCardTitleDiv>

              <ExperienceCardDescription>
                At Profrac Services, my engineering acumen drove the seamless
                completion of hydraulic fracturing services, amassing over $15
                million in successful projects without any operational
                interruptions as the lead on-site engineer.
              </ExperienceCardDescription>
              <ExperienceCardSkills>
                <ExperienceCardSkill>Excel</ExperienceCardSkill>
                <ExperienceCardSkill>Management</ExperienceCardSkill>
              </ExperienceCardSkills>
            </ExperienceCardDiv>
          </ExperienceCard>
        </ExperienceSection>
        <MainLink>
          <MainLinkText>Resume Link</MainLinkText>
          <MainLinkIcon src="arrow.svg" />
        </MainLink>
        <Break />
        <ExperienceSection>
          <ExperienceCard>
            <ExperienceCardDates>Surefire Betting Image</ExperienceCardDates>
            <ExperienceCardDiv>
              <ExperienceCardTitleText>
                Founder Surefire Betting
              </ExperienceCardTitleText>
              <ExperienceCardDescription>
                I founded surefirebetting.com, which was the first U.S. focused
                sports betting arbitrage website. Sports betting arbitrage is a
                way to make guaranteed money by betting on both sides of a match
                where two different sportsbooks disagree on the outcome.
                <br></br>
                <br></br> The service, which peaked at 16 paying monthly
                subscribers, was powered by my custom Python-driven web scraping
                and cloud solutions, ensuring timely and accurate arbitrage
                opportunities updated every minute.
              </ExperienceCardDescription>
            </ExperienceCardDiv>
          </ExperienceCard>
        </ExperienceSection>
        <MainLink>
          <MainLinkText>Surefire Betting</MainLinkText>
          <MainLinkIcon src="arrow.svg" />
        </MainLink>
      </RightDiv>
    </MainDiv>
  );
};

export default StaticWebsite;
