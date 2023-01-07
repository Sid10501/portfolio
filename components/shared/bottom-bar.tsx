import React, {
  JSXElementConstructor,
  ReactElement,
  useState
} from 'react';
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineProject,
  AiOutlineTrophy} from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import {
  Box,
  HStack,
  useDisclosure,
  useColorModeValue} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useLinkColor } from 'components/theme';

interface NavLinkProps {
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
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
    // <a>
    <Box
      px={1}
      py={1}
      lineHeight="inherit"
    borderRadius={10}
      // _hover={{
      //   textDecoration: 'none',
      //   bg: link.bg,
      //   color: props.linkColor
      // }}
      bg={router.pathname === props.path ? link.bg : 'transparent'}
      color={router.pathname === props.path ? props.linkColor : "Menu"}
      onClick={() => setActiveNav(props.path)}
    >
      <a href={props.path}>{props.icon}</a>
    </Box>
  );
};

export default function BottomBar({visibility}) {
  const linkColor = useLinkColor();
  const { onClose } = useDisclosure();

  const links = [
    { name: 'Home', path: '/home', icon: <AiOutlineHome /> },
    { name: 'About', path: '/about', icon: <AiOutlineUser /> },
    { name: 'Projects', path: '/projects', icon: <AiOutlineProject /> },
    { name: 'Skills', path: '/tech-stack', icon: <BiBook /> },
    { name: 'Achievements', path: '/achievements', icon: <AiOutlineTrophy /> },
    { name: 'Contact', path: '/contact', icon: <AiOutlinePhone /> }
  ];

  return (
    visibility ?(
    <HStack          
    as={'nav'} display={{ base: 'none', md: 'flex' }}
    // background= {'rgba(0, 0, 0, 0.3)'}
    // width= {'max-content'}
    // padding= {'0.7rem 1.7rem'}
    // zIndex={15}
    // position= {'fixed'}
    // left= {'50%'}
    // transform= {'translateX(-50%)'}
    // bottom= {'4.5rem'}
    // gridGap= {'0.8rem'}
    // borderRadius= {'3rem'}
    // backdropFilter= {'blur(15px)'}
    >
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
  ): null);
}
