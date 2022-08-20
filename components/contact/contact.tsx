import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Textarea,
  useToast,
  keyframes
} from '@chakra-ui/react';
import Blur from '../shared/blur';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../firebase';
import { useState } from 'react';
import { useLinkColor } from 'components/theme';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const linkColor = useLinkColor();

  const sendMessage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const contactsListRef = collection(db, 'contacts');
    addDoc(contactsListRef, {
      to: ['sidharth.grover@gmail.com'],
      data: {
        name: name,
        email: email,
        message: message
      }
    })
      .then(() => {
        setName('');
        setEmail('');
        setMessage('');
        toast({
          position: 'top-right',
          title: 'Message Sent.',
          description: 'Will reach you soon',
          status: 'success',
          duration: 9000,
          isClosable: true
        });
      })
      .catch(() => {
        toast({
          position: 'top-right',
          title: 'ERROR!.',
          description: 'There is some unexpected error.',
          status: 'error',
          duration: 9000,
          isClosable: true
        });
      });
  };

  return (
    <section id="contact">
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={4} px={6}>
          <Stack align={'center'}>
            <Heading
              fontSize={{ base: '5xl', md: '6xl' }}
              className={'animatedText'}
              bgClip={{ base: 'text', md: undefined }}
              fontWeight="bold"
            >
              Contact Me
            </Heading>
            <Text fontSize={'lg'}>Fill out the form below to get in touch with me</Text>
          </Stack>
          <form onSubmit={sendMessage}>
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Your name</FormLabel>
                <Input
                  borderColor={linkColor}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                  value={name}
                  placeholder="Full name"
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  borderColor={linkColor}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  value={email}
                  placeholder="Email id"
                />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  borderColor={linkColor}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  type="text"
                  required
                  value={message}
                  placeholder="Write your message here"
                />
              </FormControl>
              <Stack spacing={10}>
                <Button type="submit" variant="outline" borderColor={linkColor}>
                  Send
                </Button>
              </Stack>
            </Stack>
          </form>
        </Stack>
    </section>
  );
}
