'use client';

import { Button, Flex, rem, TextInput, Text } from '@mantine/core';
import { IconLock, IconMail } from '@tabler/icons-react';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

type Prop = {
    title:string;
    buttonText: string,
    Items?:ReactNode,
    onClick: ()=>void
};

const Auth:FC<Prop> = ({ buttonText, onClick, title }) => {
    const lock = <IconLock style={{ width: rem(16), height: rem(16) }} />;
    const mail = <IconMail style={{ width: rem(16), height: rem(16) }} />;
    const info = buttonText === 'Login' ? "You don't have account?" : 'Do you have account?';
    const route = buttonText === 'Login' ? '/auth/signup' : '/auth/login';
    const routeName = buttonText === 'Login' ? 'Register' : 'Login';
   return (
        <Flex direction="column" justify="space-between">
            <Text variant="gradient" size="xl" fw="bold" gradient={{ from: 'blue', to: 'cyan', deg: 90 }} ta="center">
                {title}
            </Text>
            <Flex direction="column" mt={20} gap={20}>
                <TextInput
                  leftSectionPointerEvents="none"
                  leftSection={mail}
                  w={330}
                  radius="xl"
                  placeholder="Email" />
                <TextInput
                  leftSectionPointerEvents="none"
                  leftSection={lock}
                  w={330}
                  type="password"
                  radius="xl"
                  placeholder="Password" />
                <TextInput
                  leftSectionPointerEvents="none"
                  leftSection={lock}
                  w={330}
                  type="password"
                  radius="xl"
                  placeholder="confirm password" />
            </Flex>
            <Button mt={40} onClick={() => onClick()} radius="xl">{buttonText}</Button>
            <Text fs="italic" ta="center" mt={20}>{info} <Link href={route}>{routeName}</Link></Text>
        </Flex>
  );
};

export default Auth;
