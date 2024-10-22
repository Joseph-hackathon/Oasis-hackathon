'use client';

import { Affix, Container, Flex, Menu, rem, TextInput, ActionIcon } from '@mantine/core';
import React from 'react';
import { IconMenu2, IconMessageCircle, IconSearch, IconSettings } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/seus.png';

const CustomMenu = () => (
      <Menu shadow="md" trigger="click-hover" width={200}>
        <Menu.Target>
        <ActionIcon size={70} radius={200} variant="filled" aria-label="Settings">
            <IconMenu2 style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item
            component={Link}
            href="/auth/signup"
            leftSection={<IconSettings style={{ width: rem(14),
                height: rem(14) }} />}
                >
            Sign up
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item
            component={Link}
            href="/auth/login"
            leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
            Login
          </Menu.Item>

        </Menu.Dropdown>
      </Menu>
);

const Home = () => {
    const icon = <IconSearch style={{ width: rem(16), height: rem(16) }} />;
        return (
        <Container h="100vh">
            <Flex direction="column" justify="center" align="center" h="100vh" gap={20}>
                <Image width={100} style={{ height: 'auto' }} src={logo} alt="logo" />
                <TextInput w="90%" leftSection={icon} size="xl" radius="xl" placeholder="Search" />
                <Affix position={{ bottom: 70, right: 160 }}>
                    <CustomMenu />
                </Affix>
            </Flex>
        </Container>
        );
    };

export default Home;
