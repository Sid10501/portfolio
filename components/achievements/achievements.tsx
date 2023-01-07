import * as React from 'react';
import { FiHome, FiAward } from 'react-icons/fi';
import { MdOutlineLeaderboard, MdAttachMoney } from 'react-icons/md';
import { DiHackernews } from 'react-icons/di';


MdOutlineLeaderboard;
import { VStack, Heading, Box } from '@chakra-ui/react';
import { TimelineItem } from './Timeline';
import { PageSlideFade } from 'components/shared/animations/page-transitions';


const Achievements = () => {

  return (
    <PageSlideFade>
      <Heading
        my={5}
        fontSize={{ base: '5xl', md: '6xl' }}
        className={'animatedText'}
        bgClip={{ base: 'text', md: undefined }}
        fontWeight="bold"
      >
        Achievements
      </Heading>
      <VStack textAlign="start" align="start" mb={5}>
        <Box zIndex={5}>
          <Box>
            <TimelineItem icon={FiHome}>
              Rebuilt my portfolio website with React, ChakraUI and Firebase, Aug 2022
            </TimelineItem>
            <TimelineItem icon={MdOutlineLeaderboard}>
              Top 5 Startups among 1500 at Collision 2022, July 2022
            </TimelineItem>
            <TimelineItem icon={FiAward}>
              Shortlisted by CEO Insights Magazine for 'Top 10 Indian Business Leaders from
              Canada, Mar 2022
            </TimelineItem>
            <TimelineItem icon={MdOutlineLeaderboard}>
              Entrepreneurship@UBC Top 7 Ventures at UBC, Jan 2022
            </TimelineItem>
            <TimelineItem icon={MdAttachMoney}>
              Raised 250K Pre Seed for DYNE Technologies Inc., Jan 2022
            </TimelineItem>
            <TimelineItem icon={MdOutlineLeaderboard}>
              Top 1 Venture in BC - Valhalla Investment Summit, Nov 2021
            </TimelineItem>
            <TimelineItem icon={DiHackernews}>
              Y-Combinator Founder Interview (top 7% of 30000 companies), Aug 2021
            </TimelineItem>
            <TimelineItem icon={MdOutlineLeaderboard}>
              Entrepreneurship@UBC Top Ten Ventures at UBC, May 2021
            </TimelineItem>
            <TimelineItem icon={FiAward}>
              UBC Innovative Project Award: Top 5 Ventures UBC, 2021
            </TimelineItem>
            <TimelineItem icon={MdAttachMoney}>
              Awarded Faculty of Science International Student Scholarship ($5,000) by UBC, 2020
            </TimelineItem>
            <TimelineItem icon={MdOutlineLeaderboard}>BizHacks Hackathon Finalist, 2020</TimelineItem>
            <TimelineItem icon={MdOutlineLeaderboard}>CERN WebFest Finalist, 2020</TimelineItem>
            <TimelineItem icon={MdAttachMoney}>
              Awarded International Major Entrance Scholarship ($80,000) by UBC, 2019
            </TimelineItem>
            <TimelineItem icon={MdAttachMoney} skipTrail>
              Awarded Outstanding International Student Award ($10,000) by UBC, 2019{' '}
            </TimelineItem>
          </Box>
        </Box>
        {/* <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={FaTools}>
              Learnt{' '}
              <ExternalLink
                color={linkColor}
                url="https://www.typescriptlang.org"
                text={'Typescript'}
                target="_blank"
              />{' '}
              and{' '}
              <ExternalLink
                color={linkColor}
                url="https://nextjs.org"
                text={'Next.js'}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiUsers}>Became a dad ❤️</TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published 3 posts on my portfolio website{' '}
              <InternalLink color={linkColor} url="/blog" text={'Blog'} />
            </TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published or contributed to{' '}
              <InternalLink
                color={linkColor}
                url="/open-source"
                text={'20+ open-source repositories'}
              />
            </TimelineItem>
            <TimelineItem icon={FiBarChart2}>
              Collected 34k+ posts views and 1.5k+ total reactions on{' '}
              <ExternalLink
                color={linkColor}
                url="https://dev.to/m_ahmad"
                text={'Dev.to'}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
              Rebuilt my portfolio website with React, ChakraUI and Framer-motion,{' '}
              <ExternalLink
                color={linkColor}
                url="https://github.com/MA-Ahmad/myPortfolio"
                text={'source on Github'}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            <TimelineItem icon={FiEdit2}>Wrote 5 blog posts</TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published or contributed to{' '}
              <ExternalLink
                color={linkColor}
                url="https://github.com/MA-Ahmad?tab=repositories"
                text={'32 open-source repositories'}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiBarChart2}>
              Collected 650+ post views and 15+ total reactions on{' '}
              <ExternalLink
                color={linkColor}
                url="https://dev.to/m_ahmad"
                text={'Dev.to'}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
              Built my portfolio website with React and ChakraUI,{' '}
              <ExternalLink
                color={linkColor}
                url="https://github.com/MA-Ahmad/portfolio2"
                text={'source on Github'}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box> */}
      </VStack>
    </PageSlideFade>
  );
};

export default Achievements;
