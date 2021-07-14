import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.adha.org/sites/default/files/7222_Proper_Flossing_1.pdf">
            <a>The Perfect Floss</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.ada.org/en/member-center/oral-health-topics/floss">
            <a>More Flossing Resources</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'A dazzling smile starts with...\n'}
            <span className="text-primary-500">The Perfect Floss</span>
          </>
        }
        description="Click below to learn how to perform the perfect floss!"
        button={
          <Link href="https://www.adha.org/sites/default/files/7222_Proper_Flossing_1.pdf">
            <a>
              <Button xl>The Pefect Floss</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
