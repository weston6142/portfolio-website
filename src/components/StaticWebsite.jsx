import styled from "styled-components";
import { useEffect, useState } from "react";

const MainDiv = styled.div`
  width: 80vw;
  height: 200vh;
  background: green;
  display: flex;
`;

const LeftDiv = styled.div`
  width: 50%;
  height: 100%;
  background: #0f172a;
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

const SectionDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SectionLine = styled.div`
  width: 1rem;
  height: 0.1rem;
  background: #fff;
`;

const Break = styled.div`
  height: 4rem;
`;

const SectionText = styled.div``;

const SocialIconsDiv = styled.div``;

const BioSection = styled.div``;

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
        <NameText>Weston Bushyeager</NameText>
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
        <SocialIconsDiv>Social Icons</SocialIconsDiv>
      </LeftDiv>
      <RightDiv>
        <BioSection>
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I’ve had the privilege of
          building software for an advertising agency, a start-up, a student-led
          design studio, and a huge corporation. <br></br>
          <br></br>My main focus these days is building products and leading
          projects for our clients at Upstatement. <br></br>
          <br></br>In my free time I've also released an online video course
          that covers everything you need to know to build a web app with the
          Spotify API. When I’m not at the computer, I’m usually rock climbing,
          hanging out with my wife and two cats, or running around Hyrule
          searching for Korok seeds.
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
                Surefire betting description
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
