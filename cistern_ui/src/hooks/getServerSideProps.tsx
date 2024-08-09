import type { GetServerSideProps } from 'next';
import type { Config } from '@/types/config';
import path from 'path';
import { promises as fs } from 'fs';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

export const getServerSideProps = (async () => {
  // Fetch data from external API
  // const res = await fetch('../config/environment.json')
  // const config: Config = await res.json()
  console.log('Folder: ', process.cwd());
  const file = await fs.readFile(
    path.join(
      serverRuntimeConfig.PROJECT_ROOT,
      './src/config/environment.json',
    ),
    'utf8',
  );
  const config: Config = JSON.parse(file);
  console.log(config);
  // Pass data to the page via props
  return { props: { config } };
}) satisfies GetServerSideProps<{ config: Config }>;
