import React, {
  JSXElementConstructor,
  ReactElement,
  ReactNodeArray,
  ReactPortal,
  useState
} from 'react';
import { AiFillPhone, AiFillTrophy, AiOutlineHome, AiOutlinePhone, AiOutlineProject, AiOutlineTrophy, AiTwotoneTrophy } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
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
import NextLink from 'next/link';
import styles from './top-bar.module.css';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons/lib';
import { useLinkColor } from 'components/theme';

interface NavLinkProps {
  icon:
    | string
    | number
    | boolean
    | {}
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactNodeArray
    | ReactPortal;
  index?: number;
  name: string;
  path: string;
  linkColor: string;
  onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
  const [activeNav, setActiveNav] = useState('#home');
  const router = useRouter();
  const link = {
    bg: useColorModeValue('gray.200', 'gray.700'),
    color: useColorModeValue('blue.500', 'blue.200')
  };

  return (
    <a>
      <NextLink href={props.path} passHref>
        <Link
          className={'nava'}
          px={1}
          py={1}
          lineHeight="inherit"
          rounded={'md'}
          _hover={{
            textDecoration: 'none',
            // bg: link.bg,
            color: props.linkColor
          }}
          bg={router.pathname === props.path ? link.bg : 'transparent'}
          color={router.pathname === props.path ? props.linkColor : 'inherit'}
          onClick={() => setActiveNav(props.path)}
        >
          
          {props.icon}
        </Link>
      </NextLink>
    </a>
  );
};

export default function TopBar() {
  const linkColor = useLinkColor();
  const { onClose } = useDisclosure();

  const links = [
    { name: 'Home', path: '/home', icon: <AiOutlineHome /> },
    { name: 'About', path: '/about', icon: <AiOutlineUser /> },
    { name: 'Projects', path: '/projects', icon: <AiOutlineProject /> },
    { name: 'Tech Stack', path: '/tech-stack', icon: <BiBook /> },
    { name: 'Achievements', path: '/achievements', icon: <AiOutlineTrophy /> },
    { name: 'Contact', path: '/contact', icon: <AiOutlinePhone /> }
  ];

  return (
    <HStack as={'nav'} display={{ base: 'none', md: 'flex' }}>
      {links.map((link, index) => (
        <NavLink
          key={index}
          name={link.name}
          path={link.path}
          linkColor={linkColor}
          onClose={onClose}
          icon={link.icon}
        />
      ))}
    </HStack>
  );
}
