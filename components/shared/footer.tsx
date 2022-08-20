import {
  Stack,
  IconButton,
  Link,
  Box,
  Text,
  useColorModeValue,
  Flex,
  ButtonGroup
} from '@chakra-ui/react';
import siteConfig from '../../configs/site-config';

const iconProps = {
  variant: 'outline',
  size: 'lg',
  isRound: true
};

const Footer = () => {
  return (
    <Stack
      // borderTopWidth={1} borderStyle={'solid'}
      as="footer"
      // bottom={0}
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent="space-between"
      alignItems="center"
      w={['100%', '85%', '80%']}
      maxW={800}
      mx="auto"
    >
      <Flex
        flexDirection={['column', 'column', 'row']}
        flexFlow={['column-reverse', 'column-reverse']}
        justifyContent={['center', 'space-between']}
        alignItems="center"
        w="100%"
      >
        <Text
          my={'20px'}
          textAlign="center"
          fontSize="lg"
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          {siteConfig.copyright}
        </Text>
        <ButtonGroup direction={'row'} spacing={6}>
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              // size="lg"
              // colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </ButtonGroup>
      </Flex>
    </Stack>
  );
};

export default Footer;
