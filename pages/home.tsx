import { useEffect, useState } from 'react';
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Heading,
  LinkProps
} from '@chakra-ui/react';
import { MotionBox, MotionFlex } from 'components/shared/animations/motion';
import Header from 'components/shared/header';
import NextLink from 'next/link';
import { useLinkColor } from 'components/theme';

import { newContent } from 'data/data';

const ANIMATION_DURATION = 0.5;
const ORANGE = '#ff9400';
const emojis = ['👋', '👍', '🖐'];

const Home: React.FC = () => {
  const linkColor = useLinkColor();
  const [showEmogi, setShowEmoji] = useState(false);
  const [emojiCounter, setEmojiCounter] = useState(-1);
  interface ExternalLinkProps extends LinkProps {
    url: string;
    linkProps?: LinkProps;
    text: string;
  }

  const ExternalLink: React.FC<ExternalLinkProps> = ({ url, linkProps, text, ...props }) => {
    return (
      <NextLink href={url} passHref>
        <Link {...linkProps} {...props}>
          {text}
        </Link>
      </NextLink>
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (emojiCounter >= 3) setEmojiCounter(0);
    }, 500);
    return () => clearInterval(interval);
  }, [emojiCounter]);

  return (
    <Flex direction="column" align="center">
      <Flex direction={['column', 'column', 'row']}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, 'auto']}
        >
          <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
            <Avatar
              size={'2xl'}
              showBorder={true}
              borderColor={linkColor}
              src={
                'https://avatars.githubusercontent.com/u/41829412?s=400&u=ecb3caa0eb40a5b6d872ac46c25e245d8f730d3a&v=4'
              }
            />
          </MotionBox>
        </MotionBox>
        <MotionFlex
          position="relative"
          ml={['auto', 'auto', 16]}
          m={['auto', 'initial']}
          w={['90%', '85%', '80%']}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Box position="relative">
            <Box position="absolute" width="full" fontSize="2xl" textAlign="center">
              {emojis.map((item, index) => {
                return (
                  <MotionBox
                    key={index}
                    position="absolute"
                    right="80%"
                    animate={showEmogi && emojiCounter === index ? 'show' : 'hide'}
                    variants={{
                      hide: { translateY: -80, opacity: 0 },
                      show: {
                        translateY: [0, -40, -60],
                        opacity: [0, 1, 0]
                      }
                    }}
                    initial="hide"
                  >
                    {item}
                  </MotionBox>
                );
              })}
            </Box>
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header
                underlineColor={ORANGE}
                emoji="👋"
                mt={0}
                cursor="pointer"
                width="max-content"
                onClick={() => {
                  setEmojiCounter((prevCounter) => prevCounter + 1);
                  setShowEmoji(true);
                }}
              >
                Hey!
              </Header>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{' '}
            <Heading
              fontSize={{ base: '4xl', md: '6xl' }}
              className={'animatedText'}
              bgClip={{ base: 'text', md: undefined }}
              fontWeight="bold"
            >
              Sidharth Grover
            </Heading>
            I&apos;m a Software Engineer,{' '}
            <Box as="span" whiteSpace="nowrap">
              UI / UX Designer and
            </Box>{' '}
            <Box as="span" whiteSpace="nowrap">
              an Entrepreneur&nbsp;
            </Box>
            from{' '}
            <Box as="span" whiteSpace="nowrap">
              Vancouver 🇨🇦.
            </Box>{' '}
            <Box fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            I am currently in my 4th year of Computer Science and Statistics at the University of British Columbia.
            </Box>
            <Box fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
              This is my public sanctum, where I write about
              the things I&apos;m working on and share what I&apos;ve learned 😊
            </Box>
            <Box fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
              I'm also the Co Founder and Vice President Engineering at {'\n'}
              <ExternalLink
                color={linkColor}
                url="https://dyneapp.ca/"
                text={'DYNE Technologies Inc'}
                target="_blank"
              />
              , a company that envisions connecting people over food while growing local economies.
            </Box>
          </Box>
        </MotionFlex>
      </Flex>

      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
        zIndex={1}
      >
        <Box mt={10}>
          <ContentBox linkColor={linkColor} />
        </Box>
      </MotionBox>
    </Flex>
  );
};

const ContentBox = ({ linkColor }) => {
  return (
    <Stack
      mb={10}
      mx={[0, 0, 10]}
      padding={4}
      align="start"
      borderLeft="4px solid"
      borderColor={linkColor}
      color={'whatsapp'}
      _hover={{ shadow: 'lg' }}
      backgroundColor={useColorModeValue('gray.100', '#1e2533')}
      rounded="sm"
      fontSize="md"
    >
      <Text
        textAlign="center"
        color="#53c8c4"
        fontWeight="bold"
        fontSize={['md', 'lg']}
        variant="gradient"
        fromcolor="blue.400"
        tocolor="red.500"
      >
        Featured Content:
      </Text>
      <UnorderedList textAlign="left" paddingLeft={5} m={0}>
        {newContent.map((content, index) => (
          <ListItem key={index}>
            <NextLink href={content.link} passHref>
              <Link color={linkColor}>
                {content.text}
                {content.showNewTag && (
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>
                )}
              </Link>
            </NextLink>
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  );
};

export default Home;
