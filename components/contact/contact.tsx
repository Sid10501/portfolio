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
import {
  getFirestore,
  query,
  orderBy,
  onSnapshot,
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
  arrayUnion
} from 'firebase/firestore';
import db from '../../firebase';
import { useState } from 'react';
import firebaseApp from '../../firebase';

const gradient = keyframes`
      0% {background-position:0% ;}
      100% {background-position:100% ;}
    `;

const animation = `${gradient} cubic-bezier(0.59, 0.82, 0.08, 0.55) 1s infinite alternate`;

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const sendMessage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const contactsListRef = collection(db, 'contacts');
    addDoc(contactsListRef, {
      to: ['sidharth.grover@gmail.com'],
      message: {
        subject: 'Hello from Firebase!',
        text: 'This is the plaintext section of the email body.',
        html: 'This is the <code>HTML</code> section of the email body.'
      },
      data: {
        name: name,
        email: email,
        message: message
      }
    })
      .then(() => {
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
      <Flex align={'center'} justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={4} px={6}>
          <Stack align={'center'}>
          <Heading fontSize={{base:'5xl', md:'6xl'}}
                className={'animatedText'}
                bgClip={{base: 'text', md: undefined}}
                fontWeight='bold'
                >Contact Me</Heading>
            <Text fontSize={'lg'}>Fill out the form below to get in touch with me</Text>
          </Stack>
          <Box rounded={'lg'} boxShadow={'lg'} p={8}>
            <form onSubmit={sendMessage}>
              <Stack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Your name</FormLabel>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    required
                    placeholder="Full name"
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="Email id"
                  />
                </FormControl>
                <FormControl id="message" isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    type="text"
                    required
                    placeholder="Write your message here"
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Button type="submit" variant="outline">
                    Send
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
          zIndex={-2}
        />
      </Flex>
    </section>
  );
}
