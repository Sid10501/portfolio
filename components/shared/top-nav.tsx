import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { ColorModeSwitcher } from '../theme/ColorModeSwitcher';

import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { AccentPicker } from 'components/theme/Accent';
import { useLinkColor } from 'components/theme';
import { MotionBox } from 'components/shared/animations/motion';
import { AnimatePresence } from 'framer-motion';

const links = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/tech-stack' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Contact', path: '/contact' }
];

interface NavLinkProps {
  index?: number;
  name: string;
  path: string;
  linkColor: string;
  onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
  const router = useRouter();
  const link = {
    bg: useColorModeValue('gray.200', 'gray.700'),
    color: useColorModeValue('blue.500', 'blue.200')
  };

  return (
    <NextLink href={props.path} passHref>
      <Link
        px={3}
        py={1}
        lineHeight="inherit"
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: link.bg,
          color: props.linkColor
        }}
        bg={router.pathname === props.path ? link.bg : 'transparent'}
        color={router.pathname === props.path ? props.linkColor : 'inherit'}
        onClick={() => props.onClose()}
      >
        {props.name}
      </Link>
    </NextLink>
  );
};

export default function TopNav({ visibility, setBottomBarVisibiliy }) {
  const linkColor = useLinkColor();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuProps = {
    bg: useColorModeValue('gray.200', 'gray.700'),
    color: useColorModeValue('blue.500', 'blue.200')
  };

  return (
    <>
      <Box
        px={4}
        boxShadow={'lg'}
        position="fixed"
        width="100%"
        zIndex="55"
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
        }}
      >
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          w={['90%', '85%', '80%']}
          maxW={900}
          mx="auto"
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={'Open Menu'}
            display={['inherit', 'inherit', 'none']}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <MotionBox whileHover={{ scale: 1.2 }} shadow="md" rounded="full">
              <NextLink href={'/home'} passHref>
                <Avatar
                  as={Link}
                  size={'sm'}
                  showBorder={true}
                  borderColor={linkColor}
                  src={
                    'https://avatars.githubusercontent.com/u/41829412?s=400&u=ecb3caa0eb40a5b6d872ac46c25e245d8f730d3a&v=4'
                  }
                />
              </NextLink>
            </MotionBox>
            <HStack spacing={3} display={{ base: 'none', md: 'flex' }}>
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  name={link.name}
                  path={link.path}
                  linkColor={linkColor}
                  onClose={onClose}
                />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <AccentPicker
              aria-label="Accent Color Picker"
              variant="ghost"
              zIndex={1}
              color={linkColor}
              mr={4}
            />
            <Box paddingRight={5}>
              <ColorModeSwitcher justifySelf="center" />
            </Box>
            <Box display={{ base: 'none', md: 'flex' }}>
            <AnimatePresence exitBeforeEnter initial={false}>
              <MotionBox
                key={visibility ? 'up' : 'down'}
                onClick={() => setBottomBarVisibiliy(!visibility)}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                cursor="pointer"
                fontSize={['2xl', '3xl', '3xl']}
              >
                {visibility ? '👍' : '👎'}
              </MotionBox>
            </AnimatePresence>
            </Box>
          
          </Flex>
        </Flex>
        {isOpen ? (
          <Box
            pb={4}
            w={['100%', '100%', '80%']}
            maxW={800}
            display={['inherit', 'inherit', 'none']}
          >
            <Stack as={'header'} spacing={4}>
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  index={index}
                  name={link.name}
                  path={link.path}
                  linkColor={linkColor}
                  onClose={onClose}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
