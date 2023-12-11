import styled from "styled-components";

const MainDiv = styled.div`
  width: 80vw;
  height: 130vh;
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
`;

const ExperienceCardDiv = styled.div`
  width: 70%;
`;

const ExperienceCardDates = styled.div`
  width: 30%;
`;

const ExperienceCardTitle = styled.div``;

const ExperienceCardDescription = styled.div``;

const ExperienceCardLinks = styled.div``;

const ExperienceCardLink = styled.div``;

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

const MainLink = styled.div``;

const NameText = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const TitleText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ShortBioText = styled.div`
  font-size: 1rem;
  color: grey;
`;

const StaticWebsite = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <NameText>Weston Bushyeager</NameText>
        <TitleText>Software Engineer</TitleText>
        <ShortBioText>This is a short bio</ShortBioText>
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
          <ExperienceCard>
            <ExperienceCardDates>01/2022 – Present</ExperienceCardDates>
            <ExperienceCardDiv>
              <ExperienceCardTitle>
                Forward Deployed Software Engineer Gecko Robotics
              </ExperienceCardTitle>
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
                  https://www.popsci.com/technology/gecko-robotics-machine-inspects-navy-ships/
                </ExperienceCardLink>
                <ExperienceCardLink>
                  https://www.youtube.com/watch?v=2MQsj-3rhMQ&t=50s
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
          <ExperienceCard>
            <ExperienceCardDates>03/2020 – 12/2022</ExperienceCardDates>
            <ExperienceCardDiv>
              <ExperienceCardTitle>
                Field Engineer Gecko Robotics
              </ExperienceCardTitle>
              <ExperienceCardDescription>
                I innovated a laser profilometry surface scanning system,
                integrating advanced components with custom PyQt software to
                enable real-time analysis. My versatility flourished through
                conducting critical ultrasonic inspections and ensuring the
                operational reliability of robotic systems. Additionally, I
                formulated key SOP documents and automated field-issue reporting
                using AWS Lambda within our cloud architecture.
              </ExperienceCardDescription>
              <ExperienceCardLinks>
                <ExperienceCardLink>Link 1</ExperienceCardLink>
                <ExperienceCardLink>Link 2</ExperienceCardLink>
              </ExperienceCardLinks>
              <ExperienceCardSkills>
                <ExperienceCardSkill>Skill 1</ExperienceCardSkill>
                <ExperienceCardSkill>Skill 2</ExperienceCardSkill>
              </ExperienceCardSkills>
            </ExperienceCardDiv>
          </ExperienceCard>
          <ExperienceCard>
            <ExperienceCardDates>01/2019 – 03/2020</ExperienceCardDates>
            <ExperienceCardDiv>
              <ExperienceCardTitle>
                Field Engineer Profrac Services
              </ExperienceCardTitle>
              <ExperienceCardDescription>
                At Profrac Services, my engineering acumen drove the seamless
                completion of hydraulic fracturing services, amassing over $15
                million in successful projects without any operational
                interruptions as the lead on-site engineer.
              </ExperienceCardDescription>
              <ExperienceCardLinks>
                <ExperienceCardLink>Link 1</ExperienceCardLink>
                <ExperienceCardLink>Link 2</ExperienceCardLink>
              </ExperienceCardLinks>
              <ExperienceCardSkills>
                <ExperienceCardSkill>Skill 1</ExperienceCardSkill>
                <ExperienceCardSkill>Skill 2</ExperienceCardSkill>
              </ExperienceCardSkills>
            </ExperienceCardDiv>
          </ExperienceCard>
        </ExperienceSection>
        <MainLink>Resume Link</MainLink>
        <Break />
        <ExperienceSection>
          <ExperienceCard>
            <ExperienceCardDates>Surefire Betting Image</ExperienceCardDates>
            <ExperienceCardDiv>
              <ExperienceCardTitle>
                Founder Surefire Betting
              </ExperienceCardTitle>
              <ExperienceCardDescription>
                Surefire betting description
              </ExperienceCardDescription>
            </ExperienceCardDiv>
          </ExperienceCard>
        </ExperienceSection>
        <MainLink>Resume Link</MainLink>
      </RightDiv>
    </MainDiv>
  );
};

export default StaticWebsite;
