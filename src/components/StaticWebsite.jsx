import styled from "styled-components";

const MainDiv = styled.div`
  width: 80vw;
  height: 80vh;
  background: green;
  display: flex;
`;

const LeftDiv = styled.div`
  width: 50%;
  height: 100%;
  background: red;
`;

const RightDiv = styled.div`
  width: 50%;
  height: 100%;
  background: blue;
`;

const Section = styled.div``;

const SocialIconsDiv = styled.div``;

const BioSection = styled.div``;

const ExperienceSection = styled.div``;

const ExperienceCard = styled.div``;

const ExperienceCardDates = styled.div``;

const ExperienceCardTitle = styled.div``;

const ExperienceCardDescription = styled.div``;

const ExperienceCardLinks = styled.div``;

const ExperienceCardLink = styled.div``;

const ExperienceCardSkills = styled.div``;

const ExperienceCardSkill = styled.div``;

const StaticWebsite = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <h1>Weston Bushyeager</h1>
        <h2>Software Engineer</h2>
        <p>This is a short bio.</p>
        <Section>About</Section>
        <Section>Experience</Section>
        <Section>Projects</Section>
        <SocialIconsDiv>Social Icons</SocialIconsDiv>
      </LeftDiv>
      <RightDiv>
        <BioSection>This is a long bio.</BioSection>
      </RightDiv>
    </MainDiv>
  );
};

export default StaticWebsite;
