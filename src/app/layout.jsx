import 'destyle.css';
import { Initialize } from '~/components/Initialize';
import { LayoutDefault } from '~/components/LayoutDefault';
import '~/styles/app.scss';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <LayoutDefault>{children}</LayoutDefault>
        <Initialize />
      </body>
    </html>
  );
}
