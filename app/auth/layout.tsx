import { Container, Flex, Paper } from '@mantine/core';
import '@mantine/core/styles.css';
import Image from 'next/image';
import React, { FC } from 'react';
import Link from 'next/link';
import logo from '@/public/assets/seus.png';

type Props = {
    children:React.ReactNode
};
const Layout:FC<Props> = ({ children }) => (
    <Container h="100vh">
        <Flex direction="column" justify="center" align="center" h="100vh">
            <Link href="/">
            <Image width={100} style={{ height: 'auto' }} src={logo} alt="logo" />
            </Link>

            <Paper shadow="xl" radius="md" p="xl">
                    {children}
            </Paper>
        </Flex>
    </Container>
  );

export default Layout;
