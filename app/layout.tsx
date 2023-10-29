import '@/app/ui/global.css';

import { inter } from '@/app/ui/fonts';
// import GithubCorner from '@/components/github-corner/GithubCorner';

export default function RootLayout(props: { 
  children: React.ReactNode, 
  // modal: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* <GithubCorner /> */}
        {props.children}
        {/* {props.modal} */}
      </body>
    </html>
  );
}
