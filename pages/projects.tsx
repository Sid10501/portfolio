import { Fragment } from 'react';
import { NextPage } from 'next';
import { VStack, Text, useColorModeValue, Heading, SimpleGrid, Box } from '@chakra-ui/react';
import { projectsList } from '../data/projectData';
import PageLayout from 'components/layouts/pageLayout';
import { PageSlideFade, StaggerChildren } from 'components/shared/animations/page-transitions';
import Header from 'components/shared/header';
import GitHubCalendar from "react-github-calendar";
import {
  LeftProjectLayoutLarge,
  ProjectLayoutMed,
  RightProjectLayoutLarge
} from 'components/layouts/projectLayout';
import { ProjectProps } from 'interfaces/interface';
import { useLinkColor } from 'components/theme';
import RepositoryCard from 'components/open-source/offline-data-card';
import { MotionBox } from 'components/shared/animations/motion';

const title = 'Projects 📚';
const subtitle =
  "A selection of projects I've worked on, during my career as a software developer.";

const TURQUOISE = '#06b6d4';

const Projects: NextPage<ProjectProps> = (props) => {
  const linkColor = useLinkColor();

  const { projects } = props;

  return (
    <Fragment>
      <PageLayout title={title} description={subtitle}>
      <VStack>
          <Heading
        
          fontSize={{ base: '5xl', md: '6xl' }}
          className={'animatedText'}
          bgClip={{ base: 'text', md: undefined }}
          fontWeight="bold"
        >
          Projects
        </Heading>
        <Text
                fontSize={'xl'}
                color={useColorModeValue('gray.500', 'gray.200')}
                maxW="lg"
                textAlign="center"
              >
              {subtitle}
            </Text>
          </VStack>
         <PageSlideFade>
          <Box paddingBottom={'50px'}>
          <StaggerChildren>
        <SimpleGrid columns={[2, 2, 2]} spacing={4} mt={12}>
          {projects.map((project, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <RepositoryCard
                title={project.title}
                description={project.description}
                cover={project.imageLight}
                blurHash={project.blurHash}
                technologies={project.techStack}
                url={project.site}
                // live={repo.live}
              
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </StaggerChildren>
          </Box>
   <Box paddingBottom={'50px'}>

      <GitHubCalendar
              username="sid10501"
              blockSize={15}
              blockMargin={5}
              color={linkColor}
              fontSize={16}
            />
               </Box>

    </PageSlideFade>
      </PageLayout>
    </Fragment>
  );
};

export function getStaticProps() {
  return {
    props: {
      projects: projectsList
    }
  };
}

export default Projects;


{/* <PageSlideFade>
          <VStack>
          <Heading
        
          fontSize={{ base: '5xl', md: '6xl' }}
          className={'animatedText'}
          bgClip={{ base: 'text', md: undefined }}
          fontWeight="bold"
        >
          Projects
        </Heading>
        <Text
                fontSize={'xl'}
                color={useColorModeValue('gray.500', 'gray.200')}
                maxW="lg"
                textAlign="center"
              >
              {subtitle}
            </Text>
          </VStack>
          <VStack spacing={8} mt={['7', '7', '0']}>
            {projects.map((project, index) => (
              <Fragment key={index}>
                <ProjectLayoutMed project={project} />
                {index % 2 === 0 ? (
                  <LeftProjectLayoutLarge project={project} />
                ) : (
                  <RightProjectLayoutLarge project={project} />
                )}
              </Fragment>
            ))}
            <GitHubCalendar
              username="sid10501"
              blockSize={15}
              blockMargin={5}
              color={linkColor}
              fontSize={16}
            />
          </VStack>
        </PageSlideFade> */}